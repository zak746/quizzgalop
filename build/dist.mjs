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

/* La revalidation porte sur '/*' plutôt que sur '/*.html' pour couvrir aussi les
   URL sans fichier correspondant : sans règle, Cloudflare leur applique son cache
   par défaut d'une semaine, ce qui figeait la réponse des anciennes pages
   supprimées. Les pages existantes, elles, étaient déjà correctement servies par
   '/*.html' — Pages résout '/galop-3/' vers son index.html avant d'appliquer les
   règles. '/assets/*' garde son immutable, ces fichiers étant versionnés.
   Attention : dans un fichier _headers, un commentaire s'écrit avec '#' — une
   ligne commençant par '/' est lue comme un motif de chemin. */
fs.writeFileSync(path.join(DIST, '_headers'), `/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*
  Cache-Control: public, max-age=0, must-revalidate
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
`);

/* Sans règle explicite, Cloudflare Pages renvoie l'accueil en 200 pour une URL
   inconnue. Les anciennes pages payantes, désindexées depuis, produisaient donc
   un soft-404 : Google voyait deux URL au contenu identique. Une 301 dit
   clairement que la page a été retirée et transfère le peu de signal acquis. */
fs.writeFileSync(path.join(DIST, '_redirects'), `/premium /  301
/premium/* /  301
`);

const mo = (octets / 1048576).toFixed(1);
console.log(`dist/ : ${fichiers} fichiers, ${mo} Mo`);
if (fichiers > 20000) console.error('⚠ Cloudflare Pages limite à 20 000 fichiers.');
