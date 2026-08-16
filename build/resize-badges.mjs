import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const DIR = path.join(ROOT, 'assets');

for (let n = 1; n <= 7; n++) {
  const src = path.join(DIR, `badge-galop-${n}.png`);
  if (!fs.existsSync(src)) continue;
  const out = path.join(DIR, `badge-galop-${n}.webp`);
  await sharp(src).resize({ width: 640 }).webp({ quality: 82 }).toFile(out);
  const { size } = fs.statSync(out);
  console.log(`badge-galop-${n}.webp — ${(size / 1024).toFixed(0)} Ko`);
}

/* Bannières larges (hero pleine largeur), optionnelles, une par niveau. */
for (let n = 1; n <= 7; n++) {
  const src = path.join(DIR, `banniere-galop-${n}.png`);
  if (!fs.existsSync(src)) continue;
  const out = path.join(DIR, `banniere-galop-${n}.webp`);
  await sharp(src).resize({ width: 1600 }).webp({ quality: 82 }).toFile(out);
  const { size } = fs.statSync(out);
  console.log(`banniere-galop-${n}.webp — ${(size / 1024).toFixed(0)} Ko`);
}

/* Bannière de l'accueil, optionnelle. */
{
  const src = path.join(DIR, 'banniere-accueil.png');
  if (fs.existsSync(src)) {
    const out = path.join(DIR, 'banniere-accueil.webp');
    await sharp(src).resize({ width: 1800 }).webp({ quality: 82 }).toFile(out);
    const { size } = fs.statSync(out);
    console.log(`banniere-accueil.webp — ${(size / 1024).toFixed(0)} Ko`);
  }
}
