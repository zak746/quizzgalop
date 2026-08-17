/**
 * Offre Premium et configuration Stripe Checkout.
 *
 * Le site fonctionne en mode démonstration sans secret. En production,
 * les fonctions Cloudflare utilisent STRIPE_SECRET_KEY et les deux Price IDs.
 */
export const SUBSCRIPTION = {
  storageKey: 'quizzgalop-premium-test-v1',
  lockedLevels: [3, 4, 5, 6, 7],
  freeLevels: [1, 2],
  plans: {
    monthly: {
      id: 'monthly',
      nom: 'Mensuel',
      prix: 4.99,
      prixAffiche: '4,99 €',
      rythme: 'par mois',
      engagement: 'Sans engagement, résiliable à tout moment'
    },
    annual: {
      id: 'annual',
      nom: 'Annuel',
      prix: 49.90,
      prixAffiche: '49,90 €',
      rythme: 'par an',
      equivalent: '4,16 € / mois',
      engagement: '2 mois offerts par rapport au mensuel',
      recommande: true
    }
  },
  stripe: {
    mode: 'test',
    checkoutEndpoint: '/api/create-checkout-session',
    verifyEndpoint: '/api/verify-checkout'
  }
};

export function niveauPremium(niveau) {
  return SUBSCRIPTION.lockedLevels.includes(Number(niveau));
}
