const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'content-type': 'application/json; charset=utf-8' }
});

function safeReturnPath(value) {
  return typeof value === 'string' && /^\/[a-z0-9/_-]*\/?(?:\?[a-z0-9%&=_-]+)?$/i.test(value)
    ? value
    : '/quiz/';
}

export async function onRequestPost({ request, env }) {
  const payload = await request.json().catch(() => ({}));
  const plan = payload.plan === 'annual' ? 'annual' : 'monthly';
  const returnPath = safeReturnPath(payload.returnPath);
  const origin = new URL(request.url).origin;
  const priceId = plan === 'annual' ? env.STRIPE_PRICE_ANNUAL : env.STRIPE_PRICE_MONTHLY;

  if (!env.STRIPE_SECRET_KEY || !priceId) {
    const params = new URLSearchParams({ demo: '1', plan, retour: returnPath });
    return json({ mode: 'demo', url: `/premium/succes/?${params}` });
  }

  const success = new URL('/premium/succes/', origin);
  success.searchParams.set('session_id', '{CHECKOUT_SESSION_ID}');
  success.searchParams.set('retour', returnPath);
  const cancel = new URL('/premium/', origin);
  cancel.searchParams.set('annule', '1');
  cancel.searchParams.set('retour', returnPath);

  const params = new URLSearchParams();
  params.set('mode', 'subscription');
  params.set('locale', 'fr');
  params.set('line_items[0][price]', priceId);
  params.set('line_items[0][quantity]', '1');
  params.set('allow_promotion_codes', 'true');
  params.set('success_url', success.toString());
  params.set('cancel_url', cancel.toString());
  params.set('subscription_data[metadata][source]', 'quizzgalop');
  params.set('subscription_data[metadata][plan]', plan);
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
