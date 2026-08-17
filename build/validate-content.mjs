import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { NIVEAUX } from '../data/quizzes.mjs';
import { EXTRA_QUIZZES } from '../data/extra-quizzes.mjs';
import { QUIZ_EXPANSION as QUIZ_EXPANSION_1_3 } from '../data/quiz-expansion-g1-3.mjs';
import { QUIZ_EXPANSION as QUIZ_EXPANSION_4_7 } from '../data/quiz-expansion-g4-7.mjs';
import { FICHES_DETAILLEES } from '../data/fiches-detaillees.mjs';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const failures = [];
const warnings = [];
const questionTexts = new Map();
let totalQuizzes = 0;
let totalQuestions = 0;
let explainedQuestions = 0;
let visualQuestions = 0;

function assert(condition, message) {
  if (!condition) failures.push(message);
}

for (const niveau of NIVEAUX) {
  const expanded = QUIZ_EXPANSION_1_3[niveau.n] || QUIZ_EXPANSION_4_7[niveau.n] || [];
  const categories = [
    ...niveau.categories,
    { slug: 'programme-officiel', quizzes: EXTRA_QUIZZES[niveau.n] || [] },
    { slug: 'parcours-complet', quizzes: expanded },
  ];
  const routes = new Set();

  for (const category of categories) {
    for (const quiz of category.quizzes) {
      const route = `${category.slug}/${quiz.slug}`;
      assert(!routes.has(route), `Route de quiz dupliquée au Galop ${niveau.n}: ${route}`);
      routes.add(route);
      assert(/^[a-z0-9-]+$/.test(quiz.slug), `Slug invalide: Galop ${niveau.n}/${route}`);
      assert(typeof quiz.titre === 'string' && quiz.titre.length >= 8, `Titre trop court: ${route}`);
      assert(Array.isArray(quiz.questions) && quiz.questions.length >= 4, `Quiz trop court: ${route}`);
      totalQuizzes += 1;

      for (const [index, question] of quiz.questions.entries()) {
        const label = `Galop ${niveau.n}/${route}, question ${index + 1}`;
        totalQuestions += 1;
        assert(typeof question.q === 'string' && question.q.trim().length >= 12, `Énoncé invalide: ${label}`);
        assert(Array.isArray(question.options) && question.options.length === 4, `Il faut 4 choix: ${label}`);
        assert(new Set(question.options || []).size === 4, `Choix dupliqués: ${label}`);
        assert(Number.isInteger(question.bonne) && question.bonne >= 0 && question.bonne < 4, `Index de réponse invalide: ${label}`);
        if (question.explication?.trim()) explainedQuestions += 1;
        if (question.image) {
          visualQuestions += 1;
          const imagePath = path.join(root, question.image.replace(/^\//, ''));
          assert(fs.existsSync(imagePath), `Image absente: ${label} -> ${question.image}`);
          assert(question.imageAlt?.trim().length >= 20, `Texte alternatif insuffisant: ${label}`);
        }
        const normalized = question.q.trim().toLocaleLowerCase('fr-FR');
        if (questionTexts.has(normalized)) {
          warnings.push(`Question répétée: ${label} et ${questionTexts.get(normalized)}`);
        } else {
          questionTexts.set(normalized, label);
        }
        assert(!/(six pattes|combien de pattes.*six|est[- ]ce qu.un cheval)/i.test(question.q), `Question triviale: ${label}`);
      }
    }
  }

  const fiche = FICHES_DETAILLEES.find((item) => item.n === niveau.n);
  assert(fiche, `Fiche détaillée absente: Galop ${niveau.n}`);
  assert(fiche?.sections?.length >= 5, `Fiche trop courte: Galop ${niveau.n}`);
  const illustrations = Object.values(fiche?.illustrations || {});
  assert(illustrations.length === 2, `Deux planches requises: Galop ${niveau.n}`);
  for (const illustration of illustrations) {
    assert(fs.existsSync(path.join(root, illustration.src.replace(/^\//, ''))), `Planche absente: ${illustration.src}`);
  }
  const pdfPath = path.join(root, 'assets', 'pdf', `fiche-revision-galop-${niveau.n}.pdf`);
  assert(fs.existsSync(pdfPath) && fs.statSync(pdfPath).size > 100_000, `PDF absent ou incomplet: Galop ${niveau.n}`);
}

assert(totalQuizzes >= 100, `Volume insuffisant: ${totalQuizzes} quiz`);
assert(totalQuestions >= 600, `Volume insuffisant: ${totalQuestions} questions`);

const result = {
  totalQuizzes,
  totalQuestions,
  explainedQuestions,
  visualQuestions,
  duplicateQuestionWarnings: warnings.length,
  duplicateQuestionSamples: warnings.slice(0, 10),
  failures,
};

console.log(JSON.stringify(result, null, 2));
if (failures.length) process.exitCode = 1;
