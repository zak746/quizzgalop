import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const generated = 'C:/Users/Zak/.codex/generated_images/01a00b5d-afbb-7ee1-a51b-a657c6c6e5c3';
const files = {
  'exec-ca14a3e8-f623-48eb-8376-127395860d3b.png': 'visuel-g1-corps.webp',
  'exec-c1ae02ef-df78-49c3-b96d-f46a00ff46c1.png': 'visuel-g2-pansage.webp',
  'exec-92ee5da4-fab1-4b23-a303-7a622a4f5e5c.png': 'visuel-g3-serpentine.webp',
  'exec-bef15d43-730f-41b9-8d8a-9ed23b74c6b4.png': 'visuel-g4-galop.webp',
  'exec-056f7620-e6ab-4ce4-8150-00fab502f319.png': 'visuel-g5-squelette.webp',
  'exec-0d02a744-467f-47fd-a3e1-0d5fda08eb78.png': 'visuel-g6-pied.webp',
  'exec-5fa432c9-bc1e-4065-9e01-2a8b1e79c9bf.png': 'visuel-g7-aplombs.webp',
  'exec-f7caff32-2ade-4ce7-951a-a68b0c5cc15e.png': 'quiz-g5-principes-apprentissage.webp',
  'exec-bc279403-686b-43a7-93bd-013bcd40a6f2.png': 'quiz-g5-squelette-et-muscles.webp',
  'exec-a38d7862-20f4-45d2-9018-38c54af489fb.png': 'quiz-g5-digestion-et-identification.webp',
  'exec-3fb10455-d064-4cdd-80a0-f42177a95924.png': 'quiz-g5-longe-et-embarquement.webp',
  'exec-71dd8746-0a83-4977-a2c1-0971de08a789.png': 'quiz-g6-pied-et-ferrure.webp',
  'exec-39269e89-754c-47df-bc3e-2030aa62a3d0.png': 'quiz-g6-besoins-alimentaires.webp',
  'exec-c1d3786d-b47f-4e95-bd9d-fa9cd902d0d5.png': 'quiz-g6-reproduction-et-identification.webp',
  'exec-beff4450-141b-452c-b2bf-db208b847cc1.png': 'quiz-g6-allures-et-reculer.webp',
  'exec-8cff9338-6a74-4350-a7f5-321b2cd136f8.png': 'quiz-g7-aplombs.webp',
  'exec-9505fe74-1011-451a-9692-2acdcab18823.png': 'quiz-g7-rationnement.webp',
  'exec-b3a1e574-5663-40a9-b837-fe5d0bd2a739.png': 'quiz-g7-bride-et-enrenements.webp',
  'exec-980ed343-db7b-40fe-bae5-2425cf48b7b8.png': 'quiz-g7-transport-et-bien-etre.webp',
  'exec-1d3786b8-3e2a-4066-b907-0ce7160f554b.png': 'banniere-galop-4-v2.webp'
  ,'exec-e4e53923-b40f-4325-b135-746e672d323a.png': 'banniere-galop-1-v3.webp'
  ,'exec-16d22816-c3fe-4dc1-9353-07b9951e3c54.png': 'banniere-galop-2-v3.webp'
  ,'exec-6a06e773-b785-4ee6-ac3d-eb3889f8dbff.png': 'banniere-galop-3-v3.webp'
  ,'exec-b3257885-ee5c-43d7-b07d-3dcfeef817fb.png': 'banniere-galop-4-v3.webp'
  ,'exec-ac167163-a491-4893-913b-ea8b7805a331.png': 'banniere-galop-5-v3.webp'
  ,'exec-4ae03984-7eea-4073-90fa-210746f07d5c.png': 'banniere-galop-6-v3.webp'
  ,'exec-493fb1c1-4b19-4c85-9c99-6be66097fdd4.png': 'banniere-galop-7-v3.webp'
  ,'exec-2379f32b-2f3a-415b-802d-ecff97e3d598.png': 'maquette-temoignage.webp'
  ,'exec-92e6ca08-fb4d-494c-8b89-b26cdb8ff4eb.png': 'maquette-cta-cheval.webp'
  ,'exec-2994f6ab-531a-4a9d-a0fa-78683110d163.png': 'maquette-quiz-fond.webp'
  ,'exec-187d88bc-1c53-4c8f-b7e5-9e1c1f6c048f.png': 'maquette-feuillage.png'
};

for (const [source, target] of Object.entries(files)) {
  const banner = target.startsWith('banniere-');
  const foliage = target === 'maquette-feuillage.png';
  const wide = target === 'maquette-cta-cheval.webp' || target === 'maquette-quiz-fond.webp';
  const pipeline = sharp(path.join(generated, source))
    .resize({ width: foliage ? 760 : (banner || wide ? 1800 : 960), withoutEnlargement: true });
  if (foliage) await pipeline.png({ compressionLevel: 9 }).toFile(path.join(root, 'assets', target));
  else await pipeline.webp({ quality: wide ? 86 : 82 }).toFile(path.join(root, 'assets', target));
}

console.log(`${Object.keys(files).length} illustrations importées.`);
