const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'content-type': 'application/json; charset=utf-8' }
});

export async function onRequestGet({ request, env }) {
  if (!env.STRIPE_SECRET_KEY) return json({ active: false, error: 'Stripe non configuré.' }, 503);
  const sessionId = new URL(request.url).searchParams.get('session_id') || '';
  if (!/^cs_(?:test_|live_)?[a-zA-Z0-9]+$/.test(sessionId)) {
    return json({ active: false, error: 'Session Stripe invalide.' }, 400);
  }

  const stripeResponse = await fetch(
    `https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}?expand[]=subscription`,
    { headers: { authorization: `Bearer ${env.STRIPE_SECRET_KEY}` } }
  );
  const session = await stripeResponse.json();
  if (!stripeResponse.ok) return json({ active: false, error: 'Session Stripe introuvable.' }, 404);

  const subscriptionStatus = session.subscription && session.subscription.status;
  const active = session.status === 'complete' &&
    (session.payment_status === 'paid' || session.payment_status === 'no_payment_required') &&
    (!subscriptionStatus || ['active', 'trialing'].includes(subscriptionStatus));
  return json({
    active,
    plan: session.metadata?.plan || session.subscription?.metadata?.plan || null,
    customerEmail: session.customer_details?.email || session.customer_email || null
  });
}
