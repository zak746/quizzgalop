# Quizz Galop — site statique

Quiz de révision de la théorie des Galops 1 à 7, gratuit et financé par la
publicité. Déployé sur https://quizzgalop.fr via GitHub → Cloudflare Pages :
un `git push` sur `main` suffit à mettre en ligne.

## Reconstruire le site

```bash
node build/generate.mjs        # écrit les 135 pages à la racine
node build/validate-site.mjs   # contrôle : sort en code 1 si quelque chose casse
node build/dist.mjs            # recopie dans dist/ avec _headers et _redirects
```

`generer-vignettes.mjs` n'est à relancer que si des visuels ont changé :

```bash
node build/generate.mjs && node build/generer-vignettes.mjs && node build/generate.mjs
```

Le double appel est normal : le script lit les pages pour savoir quels visuels
servent de vignette, puis la génération suivante bascule dessus.

## Structure

```
/                              accueil
/quiz/                         hub, tous les quiz par niveau
/galop-1/ … /galop-7/          7 pages niveau, avec leur FAQ propre
/galop-N/<theme>/<quiz>/       ~106 pages de quiz, moteur interactif
/fiches/  /fiches/galop-N/     fiches de révision illustrées
/conseils/  /conseils/<sujet>/ articles de méthode
/progression/                  suivi du pourcentage acquis (localStorage)
/examen/                       examen blanc chronométré
/mentions-legales/  /confidentialite/
404.html  robots.txt  sitemap.xml  /assets/

build/                         générateur (non publié)
  site.mjs                     configuration, gabarit HTML, emplacements de pub
  site-css.mjs                 feuille de style complète
  generate.mjs                 génération de toutes les pages
  validate-site.mjs            contrôle des pages produites
  generer-vignettes.mjs        versions réduites des visuels de carte
  dist.mjs                     assemblage de dist/
data/                          contenu des quiz et des fiches
```

## Publicité

Les emplacements sont en place mais inactifs : `PUB` dans `build/site.mjs` a ses
identifiants vides, ce qui fait afficher un cadre gris à la place de l'annonce.
Pour activer, renseigner les quatre valeurs fournies par AdSense :

```js
export const PUB = { client: 'ca-pub-…', slotGauche: '…', slotDroite: '…', slotContenu: '…' };
```

`slotContenu` alimente les emplacements intégrés au contenu, les seuls visibles
sur mobile : les deux colonnes latérales ne s'affichent qu'au-delà de 1400 px.

## Points à ne pas défaire

- **Une seule annonce par page.** La densité actuelle est volontairement basse ;
  un site sans historique se fait refuser par AdSense pour excès de publicité.
- **Les fichiers `assets/diagramme-*.webp` restent en 1536 px.** Ils servent de
  planches pleine largeur dans les fiches, où les légendes doivent rester
  lisibles. Leur version réduite pour les cartes vit dans `assets/vignettes/`.
- **Aucune règle officielle FFE n'est affirmée dans les textes.** Âge minimum,
  format d'examen et barème dépendent du club et de l'année ; les pages renvoient
  au club plutôt que d'énoncer une règle qui pourrait être fausse.
- **`404.html` doit exister.** Sans lui, Cloudflare Pages sert l'accueil en 200
  sur une URL inconnue, ce que Google indexe comme un doublon.
