/**
 * Vérifie côté serveur qu'une session Stripe Checkout a bien été payée, et
 * renvoie ce qui a été acheté (un niveau précis, ou le pack complet).
 *
 * C'est cette fonction qui fait autorité : le client ne doit jamais décider
 * seul qu'un accès est actif, sinon il suffirait de forger une URL de succès.
 */

const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'content-type': 'application/json; charset=utf-8' }
});

const NIVEAUX_PAYANTS = [3, 4, 5, 6, 7];

export async function onRequestGet({ request, env }) {
  if (!env.STRIPE_SECRET_KEY) return json({ active: false, error: 'Stripe non configuré.' }, 503);
  const sessionId = new URL(request.url).searchParams.get('session_id') || '';
  if (!/^cs_(?:test_|live_)?[a-zA-Z0-9]+$/.test(sessionId)) {
    return json({ active: false, error: 'Session Stripe invalide.' }, 400);
  }

  const stripeResponse = await fetch(
    `https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}`,
    { headers: { authorization: `Bearer ${env.STRIPE_SECRET_KEY}` } }
  );
  const session = await stripeResponse.json();
  if (!stripeResponse.ok) return json({ active: false, error: 'Session Stripe introuvable.' }, 404);

  /* Paiement unique : seul payment_status compte, il n'y a plus d'abonnement
     dont il faudrait vérifier le statut. */
  const active = session.status === 'complete' &&
    (session.payment_status === 'paid' || session.payment_status === 'no_payment_required');

  const article = session.metadata?.article === 'pack' ? 'pack' : 'niveau';
  const niveauBrut = Number(session.metadata?.niveau);
  const niveau = NIVEAUX_PAYANTS.includes(niveauBrut) ? niveauBrut : null;

  return json({
    active,
    article,
    /* Le pack ouvre tous les niveaux payants, un achat simple ouvre le sien. */
    niveaux: active ? (article === 'pack' ? NIVEAUX_PAYANTS : (niveau !== null ? [niveau] : [])) : [],
    customerEmail: session.customer_details?.email || session.customer_email || null
  });
}
