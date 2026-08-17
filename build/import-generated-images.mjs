import path from 'node:path';
import fs from 'node:fs/promises';
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
  ,'exec-6210515d-230b-4006-8ade-c0e1ab566023.png': 'pictogramme-cheval-pas.png'
  ,'exec-90d2f181-e5a6-4812-8530-b11eaf9c9bc2.png': 'pictogramme-cheval-trot.png'
  ,'exec-a9a53c39-69a2-491a-bba0-061a271c147e.png': 'pictogramme-cheval-galop.png'
  ,'exec-f1a12a26-f954-483d-bc95-584511ced3b6.png': 'pictogramme-cheval-allonge.png'
  ,'exec-ec3538ee-4f0f-4f0e-83e6-d8e365c7ccf6.png': 'banniere-tous-quiz-v2.webp'
  ,'exec-b9c62856-d693-417f-bd68-433eb510a1ab.png': 'diagramme-g1-principal.webp'
  ,'exec-2a4d89ba-1538-4f05-8241-34529bbbb268.png': 'diagramme-g1-attitudes.webp'
  ,'exec-63b90df0-75c9-4ad9-a375-5ed755b2ee0d.png': 'diagramme-g1-robes.webp'
  ,'exec-28e5ca90-1460-4901-9a9c-cdc30ea72d83.png': 'diagramme-g2-membres.webp'
  ,'exec-a3f99c35-6099-4a80-a7e8-f26fbae602b4.png': 'diagramme-g2-abord.webp'
  ,'exec-b17b474b-cb49-4ba3-9846-45a5fef369bd.png': 'diagramme-g3-balzanes.webp'
  ,'exec-9e1c5d78-d1a1-4685-bf02-26800a745fb7.png': 'diagramme-g3-membres.webp'
  ,'exec-20763893-2183-4603-9887-ca3bc24d07c7.png': 'diagramme-g4-galop-gauche.webp'
  ,'exec-966fd519-7f60-47f3-b700-fcd2b83e75e6.png': 'diagramme-g4-protections.webp'
  ,'exec-55cded07-16bb-446c-80c3-98e58cb70d69.png': 'diagramme-g5-digestion.webp'
  ,'exec-49b9b5a6-2fde-47cb-ab89-13c77ee6a84c.png': 'diagramme-g5-cession.webp'
  ,'exec-036d217e-410b-4d61-8016-987074c4ae02.png': 'diagramme-g6-pied.webp'
  ,'exec-2d1e9f4d-522a-49cc-84aa-d12872c8e0c1.png': 'diagramme-g6-etat-corporel.webp'
  ,'exec-30ded379-a27d-47e6-a151-e99def044314.png': 'diagramme-g7-aplombs.webp'
  ,'exec-50781c89-9b9c-43a7-84d9-1c782b53de82.png': 'diagramme-g7-bride.webp'
};

for (const [source, target] of Object.entries(files)) {
  const banner = target.startsWith('banniere-');
  const foliage = target === 'maquette-feuillage.png';
  const pictogram = target.startsWith('pictogramme-cheval-');
  const transparent = target.endsWith('.png');
  const wide = target === 'maquette-cta-cheval.webp' || target === 'maquette-quiz-fond.webp';
  const pipeline = sharp(path.join(generated, source))
    .resize({ width: pictogram ? 320 : (foliage ? 760 : (banner || wide ? 1800 : 960)), withoutEnlargement: true });
  if (transparent) await pipeline.png({ compressionLevel: 9 }).toFile(path.join(root, 'assets', target));
  else await pipeline.webp({ quality: wide ? 86 : 82 }).toFile(path.join(root, 'assets', target));
}

const aliases = {
  'diagramme-g1-pratique.webp': 'diagramme-g1-attitudes.webp',
  'diagramme-g2-principal.webp': 'diagramme-g2-membres.webp',
  'diagramme-g2-pratique.webp': 'diagramme-g2-abord.webp',
  'diagramme-g3-principal.webp': 'diagramme-g3-membres.webp',
  'diagramme-g3-pratique.webp': 'diagramme-g3-balzanes.webp',
  'diagramme-g4-principal.webp': 'diagramme-g4-galop-gauche.webp',
  'diagramme-g4-pratique.webp': 'diagramme-g4-protections.webp',
  'diagramme-g5-principal.webp': 'diagramme-g5-digestion.webp',
  'diagramme-g5-pratique.webp': 'diagramme-g5-cession.webp',
  'diagramme-g6-principal.webp': 'diagramme-g6-pied.webp',
  'diagramme-g6-pratique.webp': 'diagramme-g6-etat-corporel.webp',
  'diagramme-g7-principal.webp': 'diagramme-g7-aplombs.webp',
  'diagramme-g7-pratique.webp': 'diagramme-g7-bride.webp'
};

for (const [target, source] of Object.entries(aliases)) {
  await fs.copyFile(path.join(root, 'assets', source), path.join(root, 'assets', target));
}

console.log(`${Object.keys(files).length} illustrations importées et ${Object.keys(aliases).length} alias créés.`);
