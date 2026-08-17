/**
 * Fabrique les vignettes des cartes de quiz.
 *
 *   node build/generate.mjs && node build/generer-vignettes.mjs && node build/generate.mjs
 *
 * Pourquoi : les cartes du carrousel font au plus 258 px de large, mais elles
 * réutilisent des visuels prévus pour d'autres usages — bannières de niveau en
 * 1672 px, planches anatomiques en 1536 px — parce que le même fichier sert de
 * hero en haut d'une page et de vignette ailleurs. Le hub /quiz/ traînait ainsi
 * plusieurs mégaoctets d'images redimensionnées par le navigateur.
 *
 * On ne peut pas réduire les originaux : ils restent nécessaires en pleine
 * largeur. On produit donc une copie réduite dans assets/vignettes/, que
 * quizCardHtml préfère quand elle existe (voir vignette() dans generate.mjs).
 *
 * Le script se relance sans dommage : il repart des chemins d'origine même si
 * les pages référencent déjà les vignettes, et ne réécrit que ce qui manque ou
 * dont la source a changé.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const ASSETS = path.join(ROOT, 'assets');
const DEST = path.join(ASSETS, 'vignettes');
/* 540 px : un peu plus du double des 258 px d'affichage, la marge utile aux
   écrans à haute densité et rien de plus. */
const LARGEUR = 540;
const IGNORES = new Set(['dist', 'node_modules', '.git', 'build', 'data', 'output', 'tmp', '.claude']);

function pagesHtml(dossier, sortie = []) {
  for (const entree of fs.readdirSync(dossier, { withFileTypes: true })) {
    if (entree.isDirectory()) { if (!IGNORES.has(entree.name)) pagesHtml(path.join(dossier, entree.name), sortie); }
    else if (entree.name === 'index.html') sortie.push(path.join(dossier, entree.name));
  }
  return sortie;
}

const sources = new Set();
for (const page of pagesHtml(ROOT)) {
  const html = fs.readFileSync(page, 'utf8');
  for (const trouve of html.matchAll(/<img class="quiz-card-img" src="\/assets\/(?:vignettes\/)?([^"?]+)"/g)) {
    sources.add(trouve[1]);
  }
}

fs.mkdirSync(DEST, { recursive: true });

let produites = 0;
let ignorees = 0;
let avant = 0;
let apres = 0;

for (const nom of [...sources].sort()) {
  const origine = path.join(ASSETS, nom);
  if (!fs.existsSync(origine)) { console.log(`introuvable : ${nom}`); continue; }
  const cible = path.join(DEST, nom);

  const source = fs.readFileSync(origine);
  const meta = await sharp(source).metadata();
  if (meta.width <= LARGEUR) { ignorees += 1; continue; }

  // Déjà à jour ? On ne refait pas le travail à chaque build.
  if (fs.existsSync(cible) && fs.statSync(cible).mtimeMs >= fs.statSync(origine).mtimeMs) { ignorees += 1; continue; }

  const reduite = await sharp(source).resize({ width: LARGEUR, withoutEnlargement: true }).webp({ quality: 80 }).toBuffer();
  fs.writeFileSync(cible, reduite);
  avant += source.length;
  apres += reduite.length;
  produites += 1;
}

const ko = (n) => Math.round(n / 1024);
console.log(`${produites} vignettes produites, ${ignorees} déjà à jour ou assez petites (${sources.size} visuels référencés).`);
if (produites) console.log(`${ko(avant)} Ko → ${ko(apres)} Ko (−${Math.round((1 - apres / avant) * 100)} %)`);
