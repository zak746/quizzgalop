/**
 * Offre d'accès et configuration Stripe Checkout — achat unique.
 *
 * Modèle : paiement à l'unité, pas d'abonnement. Un examen de Galop se prépare
 * à une date donnée puis se termine ; un abonnement aurait un churn structurel
 * de 100 %. On vend donc soit un niveau, soit le pack des cinq niveaux payants,
 * avec un accès à vie dans les deux cas.
 *
 * Deux Price IDs Stripe suffisent (STRIPE_PRICE_NIVEAU et STRIPE_PRICE_PACK) :
 * le niveau concerné voyage dans les métadonnées de la session, ce qui évite
 * d'avoir à créer un produit Stripe par Galop.
 */
export const ACHAT = {
  storageKey: 'quizzgalop-acces-v1',
  lockedLevels: [3, 4, 5, 6, 7],
  freeLevels: [1, 2],

  niveau: {
    id: 'niveau',
    nom: 'Un Galop',
    prix: 3.99,
    prixAffiche: '3,99 €',
    rythme: 'paiement unique',
    engagement: 'Accès à vie au Galop choisi'
  },
  pack: {
    id: 'pack',
    nom: 'Pack complet',
    prix: 12.99,
    prixAffiche: '12,99 €',
    rythme: 'paiement unique',
    equivalent: '2,60 € par Galop',
    engagement: 'Accès à vie aux Galops 3 à 7',
    recommande: true
  },

  stripe: {
    checkoutEndpoint: '/api/create-checkout-session',
    verifyEndpoint: '/api/verify-checkout'
  }
};

/** Compatibilité : plusieurs modules importaient encore SUBSCRIPTION. */
export const SUBSCRIPTION = ACHAT;

export function niveauPremium(niveau) {
  return ACHAT.lockedLevels.includes(Number(niveau));
}

/** Libellé court du prix pour un niveau donné (tous au même tarif). */
export function prixNiveau() {
  return ACHAT.niveau.prixAffiche;
}
