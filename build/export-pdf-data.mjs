import { NIVEAUX } from '../data/quizzes.mjs';
import { PROGRAMMES } from '../data/content.mjs';
import { EXTRA_QUIZZES } from '../data/extra-quizzes.mjs';
import { QUIZ_EXPANSION as QUIZ_EXPANSION_1_3 } from '../data/quiz-expansion-g1-3.mjs';
import { QUIZ_EXPANSION as QUIZ_EXPANSION_4_7 } from '../data/quiz-expansion-g4-7.mjs';
import { FICHES_DETAILLEES } from '../data/fiches-detaillees.mjs';

const totals = Object.fromEntries(NIVEAUX.map((niveau) => {
  const quizzes = [
    ...niveau.categories.flatMap((categorie) => categorie.quizzes),
    ...(EXTRA_QUIZZES[niveau.n] || []),
    ...(QUIZ_EXPANSION_1_3[niveau.n] || QUIZ_EXPANSION_4_7[niveau.n] || [])
  ];
  return [niveau.n, {
    quizzes: quizzes.length,
    questions: quizzes.reduce((somme, quiz) => somme + quiz.questions.length, 0)
  }];
}));

process.stdout.write(JSON.stringify({ programmes: PROGRAMMES, fiches: FICHES_DETAILLEES, totals }));
