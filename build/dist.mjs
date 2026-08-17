/**
 * Assemble dans dist/ ce qui doit être publié — et seulement cela.
 *
 *   node build/dist.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const DIST = path.join(ROOT, 'dist');

/* 'output' est le dossier de travail du script Python qui fabrique les PDF ; les
   fichiers finaux sont recopiés dans assets/pdf/. Sans cette exclusion, chaque
   PDF est publié deux fois (12 Mo en double + duplicate content pour Google). */
const EXCLUS = new Set([
  'dist', 'build', 'data', 'output', 'node_modules', '.git', '.github', '.claude',
  'package.json', 'package-lock.json', 'README.md', '.gitignore'
]);

fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });

let fichiers = 0;
let octets = 0;

function copier(rel = '') {
  const src = path.join(ROOT, rel);
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const relEnfant = rel ? path.join(rel, e.name) : e.name;
    if (!rel && EXCLUS.has(e.name)) continue;
    if (e.name.startsWith('.')) continue;
    /* Les PNG bruts (2 Mo pièce) ne sont jamais publiés : seule la version .webp l'est. */
    if (/^(badge|banniere)-.*\.png$/.test(e.name)) continue;
    const dest = path.join(DIST, relEnfant);
    if (e.isDirectory()) {
      fs.mkdirSync(dest, { recursive: true });
      copier(relEnfant);
    } else {
      fs.copyFileSync(path.join(ROOT, relEnfant), dest);
      fichiers++;
      octets += fs.statSync(dest).size;
    }
  }
}
copier();

/* Les URL propres ('/galop-3/') ne correspondaient pas au motif '/*.html' utilisé
   auparavant : elles retombaient sur le cache par défaut de Cloudflare (s-maxage
   d'une semaine), donc une page supprimée restait servie et une correction de
   contenu n'apparaissait pas. La revalidation porte maintenant sur '/*' ;
   '/assets/*' garde son immutable puisque ces fichiers sont versionnés.
   Attention : dans un fichier _headers, un commentaire s'écrit avec '#' — une
   ligne commençant par '/' est lue comme un motif de chemin. */
fs.writeFileSync(path.join(DIST, '_headers'), `/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*
  Cache-Control: public, max-age=0, must-revalidate
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
`);

const mo = (octets / 1048576).toFixed(1);
console.log(`dist/ : ${fichiers} fichiers, ${mo} Mo`);
if (fichiers > 20000) console.error('⚠ Cloudflare Pages limite à 20 000 fichiers.');
