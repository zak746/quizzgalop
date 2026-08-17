/**
 * Crée une session Stripe Checkout en paiement unique (mode 'payment').
 *
 * Deux articles possibles : un Galop seul (STRIPE_PRICE_NIVEAU) ou le pack des
 * Galops 3 à 7 (STRIPE_PRICE_PACK). Le niveau acheté voyage dans les
 * métadonnées, ce qui évite un produit Stripe par Galop.
 */

const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'content-type': 'application/json; charset=utf-8' }
});

const NIVEAUX_PAYANTS = [3, 4, 5, 6, 7];

function safeReturnPath(value) {
  return typeof value === 'string' && /^\/[a-z0-9/_-]*\/?(?:\?[a-z0-9%&=_-]+)?$/i.test(value)
    ? value
    : '/quiz/';
}

export async function onRequestPost({ request, env }) {
  const payload = await request.json().catch(() => ({}));
  const article = payload.article === 'pack' ? 'pack' : 'niveau';
  const niveau = NIVEAUX_PAYANTS.includes(Number(payload.niveau)) ? Number(payload.niveau) : null;
  const returnPath = safeReturnPath(payload.returnPath);
  const origin = new URL(request.url).origin;

  /* Un achat de niveau sans niveau valide n'a pas de sens : on refuse plutôt
     que de vendre un accès indéterminé. */
  if (article === 'niveau' && niveau === null) {
    return json({ error: 'Niveau invalide.' }, 400);
  }

  const priceId = article === 'pack' ? env.STRIPE_PRICE_PACK : env.STRIPE_PRICE_NIVEAU;

  /* Sans clés configurées, on renvoie vers le parcours de démonstration : le
     site reste testable de bout en bout sans encaisser quoi que ce soit. */
  if (!env.STRIPE_SECRET_KEY || !priceId) {
    const params = new URLSearchParams({ demo: '1', article, retour: returnPath });
    if (niveau !== null) params.set('niveau', String(niveau));
    return json({ mode: 'demo', url: `/premium/succes/?${params}` });
  }

  const success = new URL('/premium/succes/', origin);
  success.searchParams.set('session_id', '{CHECKOUT_SESSION_ID}');
  success.searchParams.set('retour', returnPath);
  const cancel = new URL('/premium/', origin);
  cancel.searchParams.set('annule', '1');
  cancel.searchParams.set('retour', returnPath);

  const params = new URLSearchParams();
  params.set('mode', 'payment');
  params.set('locale', 'fr');
  params.set('line_items[0][price]', priceId);
  params.set('line_items[0][quantity]', '1');
  params.set('allow_promotion_codes', 'true');
  params.set('success_url', success.toString());
  params.set('cancel_url', cancel.toString());
  /* Les métadonnées sont posées sur la session ET sur le payment_intent :
     verify-checkout lit la session, la seconde copie sert aux remboursements
     et au rapprochement comptable côté Stripe. */
  params.set('metadata[source]', 'quizzgalop');
  params.set('metadata[article]', article);
  params.set('payment_intent_data[metadata][source]', 'quizzgalop');
  params.set('payment_intent_data[metadata][article]', article);
  if (niveau !== null) {
    params.set('metadata[niveau]', String(niveau));
    params.set('payment_intent_data[metadata][niveau]', String(niveau));
  }
  if (typeof payload.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    params.set('customer_email', payload.email.slice(0, 190));
  }

  const stripeResponse = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
      'content-type': 'application/x-www-form-urlencoded'
    },
    body: params
  });
  const stripeSession = await stripeResponse.json();
  if (!stripeResponse.ok || !stripeSession.url) {
    return json({ error: 'Stripe Checkout est momentanément indisponible.' }, 502);
  }
  return json({ mode: 'stripe', url: stripeSession.url });
}
