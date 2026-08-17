/**
 * Générateur statique — Quizz Galop, parcours complet Galops 1 à 7.
 *
 *   node build/generate.mjs
 *
 * Produit : accueil, /quiz/ (hub), /galop-N/ (par niveau), une page par quiz
 * avec moteur interactif, plus mentions légales / confidentialité / sitemap.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, url, slugify, layout, CSS, BUILD_ID } from './site.mjs';
import { NIVEAUX } from '../data/quizzes.mjs';
import { PROGRAMMES, CONSEILS } from '../data/content.mjs';
import { EXTRA_QUIZZES } from '../data/extra-quizzes.mjs';
import { QUIZ_EXPANSION as QUIZ_EXPANSION_1_3 } from '../data/quiz-expansion-g1-3.mjs';
import { QUIZ_EXPANSION as QUIZ_EXPANSION_4_7 } from '../data/quiz-expansion-g4-7.mjs';
import { FICHES_DETAILLEES } from '../data/fiches-detaillees.mjs';
import { ACHAT, niveauPremium } from '../data/subscription.mjs';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const OUT = ROOT;
const PICTOGRAMMES_CHEVAUX = [
  '/assets/pictogramme-cheval-pas.png',
  '/assets/pictogramme-cheval-trot.png',
  '/assets/pictogramme-cheval-galop.png',
  '/assets/pictogramme-cheval-allonge.png'
];

for (const niveau of NIVEAUX) {
  const extras = EXTRA_QUIZZES[niveau.n] || [];
  if (extras.length) niveau.categories.push({
    slug:'programme-officiel',
    titre:'Programme officiel approfondi',
    intro:'Des quiz complémentaires pour couvrir les connaissances, soins et pratiques attendus à ce niveau.',
    quizzes:extras
  });
  const approfondissement = QUIZ_EXPANSION_1_3[niveau.n] || QUIZ_EXPANSION_4_7[niveau.n] || [];
  if (approfondissement.length) niveau.categories.push({
    slug:'parcours-complet',
    titre:'Parcours complet du niveau',
    intro:'Des situations précises pour relier connaissances, soins, travail à pied et pratique montée.',
    quizzes:approfondissement
  });
}

/** Bannière large optionnelle par niveau — utilisée dès qu'elle existe dans assets/. */
function banniereLarge(n) {
  if (fs.existsSync(path.join(ROOT, 'assets', `banniere-galop-${n}-v3.webp`))) return `/assets/banniere-galop-${n}-v3.webp`;
  if (n === 4 && fs.existsSync(path.join(ROOT, 'assets', 'banniere-galop-4-v2.webp'))) return '/assets/banniere-galop-4-v2.webp';
  return fs.existsSync(path.join(ROOT, 'assets', `banniere-galop-${n}.webp`)) ? `/assets/banniere-galop-${n}.webp` : null;
}
function banniereAccueil() {
  return fs.existsSync(path.join(ROOT, 'assets', 'banniere-accueil.webp')) ? '/assets/banniere-accueil.webp' : null;
}
function banniereQuiz() {
  if (fs.existsSync(path.join(ROOT, 'assets', 'banniere-tous-quiz-v2.webp'))) return '/assets/banniere-tous-quiz-v2.webp';
  return fs.existsSync(path.join(ROOT, 'assets', 'banniere-tous-les-quiz.webp')) ? '/assets/banniere-tous-les-quiz.webp' : null;
}
function imageQuiz(n, quiz) {
  const nom = `quiz-g${n.n}-${quiz.slug}.webp`;
  if (fs.existsSync(path.join(ROOT, 'assets', nom))) return `/assets/${nom}`;
  return quiz.questions.find((q) => q.image)?.image || banniereLarge(n.n) || `/assets/badge-galop-${n.n}.webp`;
}

/** Bloc flou + fondu partagé, en bas de toute bannière pleine largeur. */
const HERO_TRANSITION = `<div class="hero-blur-bas"></div><div class="hero-fade-bas"></div>`;

function ecrire(relPath, html) {
  const dest = path.join(OUT, relPath, 'index.html');
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, html, 'utf8');
}

/* ---------- Carte quiz, réutilisée sur le hub, les pages niveau et « autres quiz » ---------- */
function quizCardHtml(n, cat, quiz) {
  const verrou = niveauPremium(n.n) ? '\n  <span class="premium-card-badge" aria-label="Contenu payant">3,99 €</span>' : '';
  return `<a class="quiz-card${niveauPremium(n.n) ? ' quiz-card-premium' : ''}" href="/galop-${n.n}/${cat.slug}/${quiz.slug}/">
  <img class="quiz-card-img" src="${imageQuiz(n, quiz)}" alt="" width="960" height="720" loading="lazy">${verrou}
  <span class="quiz-card-corps">
    <span class="titre">${quiz.titre}</span>
    <span class="n-questions">${quiz.questions.length} questions · Galop ${n.n}</span>
  </span>
</a>`;
}

function quizCarouselHtml(items, label = 'Quiz') {
  return `<section class="quiz-carousel-shell" aria-label="${label}">
    <div class="quiz-carousel-controls"><button type="button" data-carousel-prev aria-label="Quiz précédents">←</button><button type="button" data-carousel-next aria-label="Quiz suivants">→</button></div>
    <div class="quiz-carousel">${items}</div>
  </section>`;
}

/* ---------- Totaux, utiles à plusieurs pages ---------- */
function totalQuizzes(niveau) {
  return niveau.categories.reduce((s, c) => s + c.quizzes.length, 0);
}
function totalQuestions(niveau) {
  return niveau.categories.reduce(
    (s, c) => s + c.quizzes.reduce((s2, q) => s2 + q.questions.length, 0),
    0
  );
}

const TOTAL_QUIZZES = NIVEAUX.reduce((s, n) => s + totalQuizzes(n), 0);
const TOTAL_QUESTIONS = NIVEAUX.reduce((s, n) => s + totalQuestions(n), 0);

function premiumGate(niveau, contenu, retour, titre = `Débloque le Galop ${niveau}`) {
  if (!niveauPremium(niveau)) return contenu;
  const chemin = encodeURIComponent(retour);
  const quizNiveau = NIVEAUX.find((x) => x.n === Number(niveau));
  const nbQuiz = quizNiveau ? totalQuizzes(quizNiveau) : 0;
  const nbQuestions = quizNiveau ? totalQuestions(quizNiveau) : 0;
  return `<section class="premium-gate" data-premium-locked data-niveau="${niveau}">
    <span class="premium-gate-icon" aria-hidden="true">♞</span>
    <div><p class="eyebrow">GALOP ${niveau} À DÉBLOQUER</p><h2>${titre}</h2>
    <p>Les Galops 1 et 2 sont gratuits. Le Galop ${niveau} se débloque une fois, pour toujours —
    pas d’abonnement, pas de reconduction.</p>
    <ul><li>${nbQuiz} quiz du Galop ${niveau}</li><li>${nbQuestions} questions corrigées</li><li>La fiche illustrée en PDF</li><li>L’examen blanc chronométré</li></ul></div>
    <div class="premium-gate-price"><strong>${ACHAT.niveau.prixAffiche}</strong><span>une fois, accès à vie</span><a class="btn-primaire" href="/premium/?niveau=${niveau}&retour=${chemin}">Débloquer le Galop ${niveau}</a><small>Ou les 5 Galops pour ${ACHAT.pack.prixAffiche}</small></div>
  </section><div data-premium-content>${contenu}</div>`;
}

/* ================= ACCUEIL ================= */
function pageAccueil() {
  const cartes = NIVEAUX.map((n) => `<a class="niveau-card${niveauPremium(n.n) ? ' niveau-card-premium' : ''}" href="/galop-${n.n}/">
  <img class="niveau-badge" src="/assets/badge-galop-${n.n}.webp" alt="" width="640" height="800" loading="lazy">
  ${niveauPremium(n.n) ? '<span class="premium-level-badge">3,99 €</span>' : '<span class="premium-level-badge is-free">Gratuit</span>'}
  <div class="niveau-card-corps">
    <div class="num">Galop ${n.n}</div>
    <div class="titre">${n.accroche}</div>
    <div class="meta">${totalQuizzes(n)} quiz · ${totalQuestions(n)} questions</div>
  </div>
</a>`).join('\n');

  const body = `<section class="home-ref-hero">
  <img class="home-ref-bg" src="${banniereAccueil()}" alt="" width="1800" height="1013" loading="eager">
  <div class="home-ref-copy">
    <img class="hero-fer" src="/assets/icon-horseshoe.svg" alt="" width="96" height="96"><p class="eyebrow">RÉVISION ÉQUESTRE EN LIGNE</p>
    <h1>Révise ton Galop<br>en t’amusant</h1><div class="ornement-line"><i></i><b>✦</b><i></i></div>
    <p>Des quiz corrigés, structurés selon l’esprit du programme FFE,<br>pour réviser la théorie de ton examen de Galop entre deux séances au club.</p>
    <p>Choisis ton niveau, réponds aux questions,<br>corrige-toi tout de suite.</p>
    <div class="home-ref-actions"><a class="btn-ref-primary" href="/quiz/"><img src="/assets/icon-horseshoe.svg" alt="" width="28" height="28"> Commencer le quiz</a><a class="btn-ref-secondary" href="#niveaux">Voir les niveaux <span>→</span></a></div>
    <div class="home-ref-trust"><span><img src="/assets/icon-medal.svg" alt="">Galop 1 à 7</span><i></i><span><img src="/assets/icon-clipboard.svg" alt="">Galops 1 & 2 gratuits</span><i></i><span><b>✓</b>Réponses corrigées</span></div>
  </div>
</section>

<section class="home-method">
  <img class="decor-leaf decor-leaf-left" src="/assets/maquette-feuillage.png" alt=""><img class="decor-leaf decor-leaf-right" src="/assets/maquette-feuillage.png" alt="">
  <div class="method-heading"><img class="section-fer" src="/assets/icon-horseshoe.svg" alt="" width="96" height="96"><p class="eyebrow">UNE MÉTHODE SIMPLE ET EFFICACE</p><h2>Progresse à ton rythme</h2><p>Un parcours structuré pour réviser, comprendre et réussir ton examen de Galop.</p></div>
  <div class="method-steps">
    <article><b>1</b><div class="method-icon green"><img src="/assets/icon-knight.svg" alt="" width="112" height="112"></div><div><h3>Choisis ton niveau</h3><div class="mini-ornement">— ✦ —</div><p>Du Galop 1 à 7, sélectionne ton niveau et découvre le programme de révision correspondant.</p></div></article>
    <article><b>2</b><div class="method-icon blue"><img src="/assets/icon-clipboard.svg" alt="" width="112" height="112"></div><div><h3>Réponds au quiz</h3><div class="mini-ornement">— ✦ —</div><p>Des questions claires et variées pour tester tes connaissances et comprendre l’essentiel.</p></div></article>
    <article><b>3</b><div class="method-icon red"><img src="/assets/icon-medal.svg" alt="" width="112" height="112"></div><div><h3>Corrige et progresse</h3><div class="mini-ornement">— ✦ —</div><p>Des corrections détaillées et des explications pour avancer et gagner en confiance.</p></div></article>
  </div>
  <div class="method-proof">
    <article class="testimonial"><img src="/assets/maquette-temoignage.webp" alt="Cavalière ayant révisé avec Quizz Galop" width="800" height="600" loading="lazy"><div><b>“</b><blockquote>Grâce aux quiz, j’ai compris mes erreurs et j’ai pris confiance.<br>J’ai validé mon Galop 3 du premier coup !</blockquote><div class="stars">★★★★★</div><strong>Louise D.</strong><small>Galop 3 validé</small></div></article>
    <div class="method-stats"><div><img src="/assets/icon-horseshoe.svg" alt=""><strong>${TOTAL_QUIZZES}</strong><b>Quiz disponibles</b><small>Répartis sur les 7 Galops</small></div><div><img src="/assets/icon-medal.svg" alt=""><strong>7</strong><b>Niveaux couverts</b><small>Du Galop 1 à 7</small></div><div><span>✓</span><strong>${TOTAL_QUESTIONS}</strong><b>Questions corrigées</b><small>Correction immédiate après chaque réponse</small></div></div>
  </div>
  <div class="method-cta"><img src="/assets/maquette-cta-cheval.webp" alt="" width="1800" height="600" loading="lazy"><div><h2>Prêt(e) à réussir ton Galop ?</h2><p>Rejoins les cavaliers motivés et avance vers ton objectif !</p></div><div class="home-ref-actions"><a class="btn-ref-primary" href="/quiz/"><img src="/assets/icon-horseshoe.svg" alt="" width="28" height="28"> Commencer le quiz</a><a class="btn-ref-secondary" href="#niveaux">Voir tous les niveaux <span>→</span></a><small class="cta-trust"><span>Programme FFE</span><i></i><span>Galops 1 & 2 gratuits</span><i></i><span>Sans inscription</span></small></div></div>
</section>

<section class="home-levels" id="niveaux"><div class="method-heading"><img class="section-fer" src="/assets/icon-horseshoe.svg" alt="" width="96" height="96"><p class="eyebrow">GALOP 1 À 7</p><h2>Choisis ton niveau</h2></div><div class="niveaux-grid">${cartes}</div></section>`;

  return layout({
    path: '/',
    title: 'Quizz Galop — révise les Galops 1 à 7 en ligne',
    description: 'Quiz, fiches structurées et progression pour réviser la théorie des Galops 1 à 7 selon les grands axes du programme officiel FFE.',
    body,
    ogType: 'website',
    bodyClass: 'home-reference',
    masquerHeader: true,
    masquerFilCrumb: true
  });
}

/* ================= HUB /quiz/ ================= */
function pageHubQuiz() {
  const sections = NIVEAUX.map((n) => {
    const items = n.categories.flatMap((c) =>
      c.quizzes.map((q) => quizCardHtml(n, c, q))
    ).join('\n');
    return `<div class="categorie">
  <h2>Galop ${n.n}</h2>
  ${quizCarouselHtml(items, `Quiz Galop ${n.n}`)}
</div>`;
  }).join('\n');

  const banniere = banniereQuiz();
  const hero = banniere ? `<div class="hero-bleed hub-hero-large">
  <nav class="crumb-survol" aria-label="Fil d’Ariane"><a href="/">Accueil</a><span>›</span><span aria-current="page">Tous les quiz</span></nav>
  <img src="${banniere}" alt="Tous les quiz équestres" width="1800" height="720" loading="eager">
  ${HERO_TRANSITION}
  <div class="hub-hero-large-texte">
    <img src="/assets/icon-horseshoe.svg" alt="" width="64" height="64"><p class="eyebrow">${TOTAL_QUIZZES} QUIZ · ${TOTAL_QUESTIONS} QUESTIONS</p><h1>Tous les quiz,<br>à ton rythme</h1>
    <div class="ornement-line"><i></i><b>✦</b><i></i></div><p class="lede">Choisis ton niveau ou ton thème, puis entraîne-toi avec une correction immédiate.</p>
  </div>
</div>` : `<p class="eyebrow">TOUS LES QUIZ</p><h1>Tous les quiz, par niveau</h1>
<p class="lede">La liste complète des quiz disponibles pour les Galops 1 à 7.</p>`;

  const body = `${hero}
${sections}`;

  return layout({
    path: '/quiz/',
    title: 'Tous les quiz Galops 1 à 7 — Quizz Galop',
    description: 'Tous les quiz de révision des Galops 1 à 7 : anatomie, soins, matériel, alimentation, locomotion, sécurité et pratique équestre.',
    body,
    crumbs: [{ nom: 'Accueil', href: '/' }, { nom: 'Tous les quiz', href: '/quiz/' }],
    masquerFilCrumb: Boolean(banniere),
    bodyClass: 'page-hub-reference'
  });
}

/* ================= PAGE NIVEAU /galop-N/ ================= */
function pageNiveau(n) {
  const sections = n.categories.map((c, index) => {
    const items = c.quizzes.map((q) => quizCardHtml(n, c, q)).join('\n');
    return `<div class="categorie">
  <div class="categorie-heading"><span>THÈME 0${index + 1}</span><div><h2>${c.titre}</h2><p class="categorie-intro">${c.intro}</p></div></div>
  ${quizCarouselHtml(items, `${c.titre} — Galop ${n.n}`)}
</div>`;
  }).join('\n');

  const autres = NIVEAUX.filter((x) => x.n !== n.n)
    .map((x) => `<a class="other-level other-level-${x.n}" href="/galop-${x.n}/"><span>${x.n}</span><strong>Galop ${x.n}</strong></a>`).join('\n');

  const banniere = banniereLarge(n.n);
  const crumbSurvol = `<nav class="crumb-survol" aria-label="Fil d’Ariane"><a href="/">Accueil</a><span>›</span><span aria-current="page">Galop ${n.n}</span></nav>`;
  const hero = banniere
    ? `<div class="hero-bleed niveau-hero-large">
  ${crumbSurvol}
  <img src="${banniere}" alt="Galop ${n.n}" width="1600" height="900" loading="eager">
  ${HERO_TRANSITION}
  <div class="niveau-hero-large-texte">
    <p class="eyebrow">GALOP ${n.n}</p>
    <h1>Quiz Galop ${n.n} : révise la théorie</h1>
    <p class="lede">${n.accroche} Réponds aux ${totalQuestions(n)} questions réparties dans ${totalQuizzes(n)} quiz,
    avec correction immédiate.</p>
  </div>
</div>`
    : `<div class="niveau-hero">
  <img src="/assets/badge-galop-${n.n}.webp" alt="Badge Galop ${n.n}" width="640" height="800" loading="eager">
  <div>
    <p class="eyebrow">GALOP ${n.n}</p>
    <h1>Quiz Galop ${n.n} : révise la théorie</h1>
    <p class="lede">${n.accroche} Réponds aux ${totalQuestions(n)} questions réparties dans ${totalQuizzes(n)} quiz,
    avec correction immédiate.</p>
  </div>
</div>`;

  const contenu = `<div class="niveau-outils">
  <a class="btn-primaire" href="/fiches/galop-${n.n}/">Lire la fiche Galop ${n.n}</a>
  <a class="btn-secondaire" href="/progression/">Voir ma progression</a>
</div>
<div class="niveau-facts" aria-label="Aperçu du parcours"><div><strong>${totalQuizzes(n)}</strong><span>quiz thématiques</span></div><div><strong>${totalQuestions(n)}</strong><span>questions corrigées</span></div><div><strong>3</strong><span>axes du programme</span></div></div>
${sections}
<section class="other-levels-wrap"><p class="eyebrow">POURSUIVRE LE PARCOURS</p><h2>Réviser un autre niveau</h2><div class="other-levels">${autres}</div></section>`;
  const body = `${hero}${premiumGate(n.n, contenu, `/galop-${n.n}/`)}`;

  return layout({
    path: `/galop-${n.n}/`,
    niveauRequis: niveauPremium(n.n) ? n.n : null,
    title: `Quiz Galop ${n.n} : révise toute la théorie — Quizz Galop`,
    description: `Quiz Galop ${n.n} en ligne : ${n.accroche} Réponses immédiates, ${totalQuestions(n)} questions au total.${niveauPremium(n.n) ? ' Accès payant, 3,99 €.' : ' Accès gratuit.'}`,
    body,
    crumbs: [{ nom: 'Accueil', href: '/' }, { nom: `Galop ${n.n}`, href: `/galop-${n.n}/` }],
    masquerFilCrumb: Boolean(banniere),
    bodyClass: `page-level-reference level-${n.n}`
  });
}

/* ================= PAGE QUIZ (moteur interactif) ================= */
function pageQuiz(n, cat, quiz) {
  const dataId = `quiz-data-${n.n}-${cat.slug}-${quiz.slug}`;
  const questionsJson = JSON.stringify(quiz.questions).replace(/</g, '\\u003c');
  const autresQuiz = [
    ...cat.quizzes.filter((q) => q.slug !== quiz.slug).map((q) => quizCardHtml(n, cat, q)),
    ...n.categories.filter((c) => c.slug !== cat.slug).flatMap((c) => c.quizzes.map((q) => quizCardHtml(n, c, q)))
  ].join('\n');
  const experience = `<div class="quiz-ref-background" aria-hidden="true"><img src="/assets/maquette-quiz-fond.webp" alt=""></div>
<section class="quiz-ref-stage">
  <div class="quiz-ref-center">
    <div class="quiz-mobile-context"><a href="/galop-${n.n}/" aria-label="Retour aux quiz Galop ${n.n}">←</a><span><small>GALOP ${n.n}</small><h1>${quiz.titre}</h1></span></div>
    <div class="quiz-ref-card" id="quiz-app" data-quiz="${dataId}">
      <header><span id="quiz-compteur">Question 1 / ${quiz.questions.length}</span><div class="quiz-ref-track" id="quiz-progressbar" role="progressbar" aria-label="Progression du quiz" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><i id="quiz-progres"></i></div><strong id="quiz-pourcentage">0%</strong></header>
      <div id="quiz-zone"></div>
    </div>
    <nav class="quiz-ref-nav" aria-label="Navigation dans le quiz"><button type="button" id="quiz-precedent">← <span>Question précédente</span></button><button type="button" id="quiz-suivant" disabled><span>Question suivante</span> →</button></nav>
  </div>
</section>
<script type="application/json" id="${dataId}">${questionsJson}</script>

<section class="quiz-ref-related"><p class="eyebrow">CONTINUER À RÉVISER</p><h2>D’autres quiz sur ce thème</h2>${quizCarouselHtml(autresQuiz, `D’autres quiz Galop ${n.n}`)}</section>

<canvas id="quiz-confettis"></canvas>
<script>
(function () {
  var zone = document.getElementById('quiz-zone');
  var barre = document.getElementById('quiz-progres');
  var progressbar = document.getElementById('quiz-progressbar');
  var compteur = document.getElementById('quiz-compteur');
  var pourcentage = document.getElementById('quiz-pourcentage');
  var precedent = document.getElementById('quiz-precedent');
  var suivant = document.getElementById('quiz-suivant');
  var data = JSON.parse(document.getElementById('${dataId}').textContent).map(function(question){
    var choix=question.options.map(function(texte,index){return {texte:texte,correct:index===question.bonne};});
    for(var i=choix.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var tmp=choix[i];choix[i]=choix[j];choix[j]=tmp;}
    return Object.assign({},question,{options:choix.map(function(x){return x.texte;}),bonne:choix.findIndex(function(x){return x.correct;})});
  });
  var chevaux = ${JSON.stringify(PICTOGRAMMES_CHEVAUX)};
  var index = 0, score = 0, serie = 0, meilleureSerie = 0, termine = false;
  var reponses = new Array(data.length);
  var debut = Date.now();

  function echapper(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});
  }

  function formaterTemps(secondes) {
    var m = Math.floor(secondes / 60); var s = secondes % 60;
    return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  }
  /* ---- Confettis : petit moteur canvas maison, sans dépendance ---- */
  function lancerConfettis() {
    var canvas = document.getElementById('quiz-confettis');
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = 'block';
    var ctx = canvas.getContext('2d');
    var couleurs = ['#3f7d54', '#6cbf83', '#e0b04a', '#c0392b', '#e8e2d5'];
    var particules = [];
    for (var i = 0; i < 140; i++) {
      particules.push({
        x: Math.random() * canvas.width,
        y: -20 - Math.random() * canvas.height * 0.4,
        w: 6 + Math.random() * 6,
        h: 8 + Math.random() * 10,
        vy: 2 + Math.random() * 3,
        vx: -1.5 + Math.random() * 3,
        rot: Math.random() * 360,
        vrot: -6 + Math.random() * 12,
        couleur: couleurs[Math.floor(Math.random() * couleurs.length)]
      });
    }
    var debut = Date.now();
    function boucle() {
      var t = Date.now() - debut;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particules.forEach(function (p) {
        p.x += p.vx; p.y += p.vy; p.rot += p.vrot;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = p.couleur;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      if (t < 2600) requestAnimationFrame(boucle);
      else { ctx.clearRect(0, 0, canvas.width, canvas.height); canvas.style.display = 'none'; }
    }
    boucle();
  }

  function rendreQuestion(placerFocus) {
    var q = data[index];
    var deja = reponses[index];
    var pct = Math.round(((index + 1) / data.length) * 100);
    barre.style.width = pct + '%'; progressbar.setAttribute('aria-valuenow', pct); compteur.textContent = 'Question ' + (index + 1) + ' / ' + data.length; pourcentage.textContent = pct + '%';
    precedent.disabled = index === 0;
    suivant.disabled = !deja;
    suivant.querySelector('span').textContent = index + 1 < data.length ? 'Question suivante' : 'Voir mon score';
    suivant.hidden = false;
    var html = '<div class="quiz-ref-question" role="group" aria-labelledby="quiz-enonce">' +
      '<h2 class="enonce" id="quiz-enonce" tabindex="-1">' + echapper(q.q) + '</h2>' +
      (q.image ? '<figure class="quiz-visuel quiz-visuel-large"><img src="' + echapper(q.image) + '" alt="' + echapper(q.imageAlt || '') + '" width="1536" height="1024"></figure>' : '') +
      '<div class="quiz-ref-options" role="group" aria-labelledby="quiz-enonce">' +
      q.options.map(function (opt, i) {
        var classes = 'quiz-ref-option';
        if (deja && i === q.bonne) classes += ' correcte';
        else if (deja && i === deja.index && !deja.juste) classes += ' incorrecte';
        return '<button type="button" class="' + classes + '" data-i="' + i + '"' + (deja ? ' disabled' : '') + '><img src="' + chevaux[(index + i) % chevaux.length] + '" alt=""><span>' + echapper(opt) + '</span>' + (deja && i === q.bonne ? '<b>✓</b>' : '') + '</button>';
      }).join('') +
      '</div><div class="quiz-ref-feedback' + (deja ? (deja.juste ? ' good visible' : ' bad visible') : '') + '" id="quiz-feedback" role="status" aria-live="polite" aria-atomic="true">' +
      (deja ? '<img src="/assets/pictogramme-cheval-galop.png" alt=""><div><strong>' + (deja.juste ? 'Bonne réponse !' : 'La bonne réponse : ' + echapper(q.options[q.bonne])) + '</strong><span>' + echapper(q.explication || 'Relis la correction avant de continuer.') + '</span></div>' : '') + '</div>' +
      '</div>';
    zone.innerHTML = html;
    if (placerFocus) setTimeout(function () { var titre = document.getElementById('quiz-enonce'); if (titre) titre.focus(); }, 0);
    var feedback = document.getElementById('quiz-feedback');
    zone.querySelectorAll('.quiz-ref-option').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (reponses[index]) return;
        var i = parseInt(btn.getAttribute('data-i'), 10);
        var bonne = q.bonne;
        var juste = i === bonne;
        reponses[index] = { index:i, juste:juste };
        zone.querySelectorAll('.quiz-ref-option').forEach(function (b, bi) {
          b.disabled = true;
          if (bi === bonne) b.classList.add('correcte');
          else if (bi === i) b.classList.add('incorrecte');
        });
        if (juste) {
          score++; serie++;
          if (serie > meilleureSerie) meilleureSerie = serie;
          btn.classList.add('pop');
          feedback.className = 'quiz-ref-feedback good visible';
          feedback.innerHTML = '<img src="/assets/pictogramme-cheval-galop.png" alt=""><div><strong>Bonne réponse !</strong><span>' + echapper(q.explication || 'Continue ainsi !') + '</span></div>';
        } else {
          serie = 0;
          btn.classList.add('secoue');
          feedback.className = 'quiz-ref-feedback bad visible';
          feedback.innerHTML = '<img src="/assets/pictogramme-cheval-allonge.png" alt=""><div><strong>La bonne réponse : ' + echapper(q.options[bonne]) + '</strong><span>' + echapper(q.explication || 'Repère-la en vert puis relis la question avant de continuer.') + '</span></div>';
        }
        var bonneBtn = zone.querySelectorAll('.quiz-ref-option')[bonne];
        if (bonneBtn && !bonneBtn.querySelector('b')) bonneBtn.insertAdjacentHTML('beforeend', '<b>✓</b>');
        suivant.disabled = false;
      });
    });
  }

  function rendreResultat() {
    termine = true; barre.style.width = '100%'; progressbar.setAttribute('aria-valuenow', '100'); pourcentage.textContent = '100%'; compteur.textContent = 'Quiz terminé';
    precedent.hidden = true; suivant.hidden = true;
    var pct = Math.round((score / data.length) * 100);
    var secondes = Math.floor((Date.now() - debut) / 1000);
    var erreurs = data.length - score;
    var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '🎉' : pct >= 50 ? '💪' : '📚';
    var appreciation = pct >= 90 ? 'Excellent, ce thème est maîtrisé !'
      : pct >= 70 ? 'Très solide, tu es prêt·e pour ce thème !'
      : pct >= 50 ? 'Pas mal, revois les questions ratées et retente.'
      : 'Encore un peu de révision et ce sera acquis.';
    if (pct >= 70) lancerConfettis();
    var meilleur = score;
    try {
      var cle = 'quizzgalop-progression-v2';
      var historique = JSON.parse(localStorage.getItem(cle) || '{}');
      var id = 'g${n.n}-${quiz.slug}';
      var ancien = historique[id] || {};
      meilleur = Math.max(score, ancien.best || 0);
      historique[id] = { id:id, niveau:${n.n}, titre:${JSON.stringify(quiz.titre)}, total:data.length,
        last:score, best:meilleur, attempts:(ancien.attempts || 0) + 1, updated:Date.now() };
      localStorage.setItem(cle, JSON.stringify(historique));
    } catch (e) {}
    zone.innerHTML = '<div class="quiz-ref-question quiz-resultat" role="status" aria-live="polite" tabindex="-1">' +
      '<div class="quiz-resultat-emoji">' + emoji + '</div>' +
      '<div class="score">' + score + ' / ' + data.length + '</div>' +
      '<p class="appreciation">' + appreciation + '</p>' +
      '<div class="quiz-resultat-stats"><div><strong>' + score + '</strong><span>bonnes réponses</span></div><div><strong>' + erreurs + '</strong><span>réponses à revoir</span></div><div><strong>' + formaterTemps(secondes) + '</strong><span>temps total</span></div><div><strong>' + meilleur + '/' + data.length + '</strong><span>meilleur score</span></div></div>' +
      (meilleureSerie > 2 ? '<p class="quiz-meilleure-serie">🔥 Meilleure série : ' + meilleureSerie + ' bonnes réponses d’affilée</p>' : '') +
      '<div class="quiz-resultat-actions"><button type="button" class="quiz-btn" id="quiz-recommencer">Recommencer</button>' +
      '<a class="btn-secondaire" href="/fiches/galop-${n.n}/">Revoir la fiche</a>' +
      '<a class="btn-secondaire" href="/progression/">Mon diagnostic</a></div>' +
      '</div>';
    zone.querySelector('.quiz-resultat').focus();
    document.getElementById('quiz-recommencer').addEventListener('click', function () {
      index = 0; score = 0; serie = 0; meilleureSerie = 0; termine = false; reponses = new Array(data.length); debut = Date.now();
      precedent.hidden = false; suivant.hidden = false; rendreQuestion(true);
    });
  }

  precedent.addEventListener('click', function () { if (termine) { termine = false; suivant.hidden = false; } if (index > 0) { index--; rendreQuestion(true); } });
  suivant.addEventListener('click', function () { if (!reponses[index]) return; index++; if (index < data.length) rendreQuestion(true); else rendreResultat(); });
  rendreQuestion(false);
})();
</script>`;

  const body = premiumGate(n.n, experience, `/galop-${n.n}/${cat.slug}/${quiz.slug}/`, `Débloque ce quiz Galop ${n.n}`);

  return layout({
    path: `/galop-${n.n}/${cat.slug}/${quiz.slug}/`,
    niveauRequis: niveauPremium(n.n) ? n.n : null,
    /* Pas de suffixe de marque ici : « Sujet — Quiz Galop N — Quizz Galop »
       dépassait 75 caractères, or Google tronque l'affichage vers 60. On garde
       « Quiz Galop N » qui porte le mot-clé, on lâche le nom du site. */
    title: `${quiz.titre} — Quiz Galop ${n.n}`,
    description: `${quiz.titre} : quiz de ${quiz.questions.length} questions pour réviser le Galop ${n.n}. Correction immédiate.${niveauPremium(n.n) ? ' Accès payant, 3,99 €.' : ' Accès gratuit.'}`,
    body,
    crumbs: [
      { nom: 'Accueil', href: '/' },
      { nom: `Galop ${n.n}`, href: `/galop-${n.n}/` },
      { nom: quiz.titre, href: `/galop-${n.n}/${cat.slug}/${quiz.slug}/` }
    ],
    masquerHeader: true,
    masquerFooter: true,
    masquerFilCrumb: true,
    bodyClass: 'page-quiz-reference',
    jsonLd: [{
      '@context': 'https://schema.org',
      '@type': 'Quiz',
      name: quiz.titre,
      about: `Galop ${n.n}`,
      educationalLevel: `Galop ${n.n}`,
      numberOfQuestions: quiz.questions.length
    }]
  });
}

/* ================= FICHES DE RÉVISION ================= */
function ficheCard(p) {
  const niveau = NIVEAUX.find((n) => n.n === p.n);
  return `<a class="fiche-card fiche-card-${p.n}${niveauPremium(p.n) ? ' fiche-card-premium' : ''}" href="/fiches/galop-${p.n}/">
    ${niveauPremium(p.n) ? '<span class="premium-card-badge">3,99 €</span>' : '<span class="premium-card-badge is-free">Gratuit</span>'}
    <img class="fiche-card-art" src="/assets/badge-galop-${p.n}.webp" alt="" width="640" height="800" loading="lazy"><span><strong>Fiche Galop ${p.n}</strong>
    <small>${p.objectif}</small><em>Guide illustré · PDF · ${totalQuizzes(niveau)} quiz →</em></span></a>`;
}

function pageFiches() {
  const body = `<section class="editorial-hero"><img src="/assets/logo-embleme.svg" alt="" width="120" height="120"><div><p class="eyebrow">PROGRAMME & MÉMORISATION</p><h1>Fiches de révision Galops 1 à 7</h1>
  <p class="lede">Sept guides complets, illustrés et téléchargeables, pour relier connaissances du cheval, soins, pratique à pied et pratique montée.</p></div></section>
  <div class="source-officielle"><span>Source de cadrage</span><p>Contenus organisés à partir du <a href="https://www.ffe.com/system/files/cavalier/documents/pdf/PROGRAMME_OFFICIEL_GALOPS_CAVALIER_1a7_PAR_MODULE.pdf" target="_blank" rel="noopener">programme officiel FFE des Galops 1 à 7</a>. Ces fiches sont des reformulations pédagogiques indépendantes.</p></div>
  <div class="fiches-resume" aria-label="Contenu des fiches"><div><strong>7</strong><span>guides par niveau</span></div><div><strong>14</strong><span>planches illustrées</span></div><div><strong>7</strong><span>PDF imprimables</span></div></div>
  <div class="fiches-grid">${PROGRAMMES.map(ficheCard).join('')}</div>`;
  return layout({path:'/fiches/', title:'Fiches de révision Galops 1 à 7 — Quizz Galop', description:'Fiches structurées pour réviser les programmes des Galops 1 à 7 : connaissances, soins, pratique à pied et à cheval.', body, crumbs:[{nom:'Accueil',href:'/'},{nom:'Fiches',href:'/fiches/'}], bodyClass:'page-fiches-reference'});
}

function pageFiche(p) {
  const niveau = NIVEAUX.find((n) => n.n === p.n);
  const detail = FICHES_DETAILLEES.find((fiche) => fiche.n === p.n);
  if (!detail) throw new Error(`Fiche détaillée manquante pour le Galop ${p.n}`);
  const axes = p.axes.map((a, i) => `<section class="axe-card"><span class="axe-index">0${i + 1}</span><h2>${a.titre}</h2><ul>${a.items.map((x) => `<li>${x}</li>`).join('')}</ul></section>`).join('');
  const illustrations = Object.values(detail.illustrations).map((image, i) => {
    const reperes = (image.reperes || []).map((repere) => `<li><b>${repere.n}</b><span>${repere.label}</span></li>`).join('');
    return `<figure class="fiche-planche"><img src="${image.src}" alt="${image.alt}" width="1536" height="1024" loading="${i ? 'lazy' : 'eager'}"><figcaption><span>PLANCHE 0${i + 1}</span><p>${image.legende}</p>${reperes ? `<ol class="fiche-reperes" aria-label="Légende des repères">${reperes}</ol>` : ''}</figcaption></figure>`;
  }).join('');
  const chapitres = detail.sections.map((section, i) => `<article class="fiche-chapitre"><span>0${i + 1}</span><div><h3>${section.titre}</h3><p>${section.texte}</p><ul>${section.points.map((point) => `<li>${point}</li>`).join('')}</ul></div></article>`).join('');
  const checklist = detail.checklist.map((item) => `<li><span aria-hidden="true">✓</span>${item}</li>`).join('');
  const erreurs = detail.erreurs.map((item) => `<article><span>À CORRIGER</span><h3>${item.erreur}</h3><p><strong>Le bon réflexe :</strong> ${item.correction}</p></article>`).join('');
  const lexique = detail.lexique.map((item) => `<div><dt>${item.terme}</dt><dd>${item.definition}</dd></div>`).join('');
  const quizzes = niveau.categories.flatMap((c) => c.quizzes.slice(0, 2).map((q) => quizCardHtml(niveau, c, q))).join('');
  const suivant = p.n < 7 ? `<a class="btn-secondaire" href="/fiches/galop-${p.n + 1}/">Fiche Galop ${p.n + 1} →</a>` : '';
  const pdf = `/assets/pdf/fiche-revision-galop-${p.n}.pdf`;
  const telechargement = niveauPremium(p.n)
    ? `<a class="btn-secondaire fiche-download" href="/premium/?niveau=${p.n}&retour=${encodeURIComponent(`/fiches/galop-${p.n}/`)}" data-premium-locked>Débloquer le PDF — 3,99 €</a><a class="btn-secondaire fiche-download" href="${pdf}" download data-premium-content>Télécharger le PDF ↓</a>`
    : `<a class="btn-secondaire fiche-download" href="${pdf}" download>Télécharger le PDF ↓</a>`;
  const contenu = `<div class="fiche-sommaire"><strong>Sur cette fiche</strong><a href="#programme">Programme</a><a href="#planches">Planches</a><a href="#cours">Cours</a><a href="#checklist">Checklist</a><a href="#pieges">Erreurs</a><a href="#lexique">Lexique</a><a href="#entrainement">Quiz</a></div>
  <div id="programme" class="axes-grid">${axes}</div>
  <section id="planches" class="fiche-section"><div class="fiche-section-heading"><p class="eyebrow">COMPRENDRE EN IMAGE</p><h2>Deux planches pour mieux mémoriser</h2></div><div class="fiche-planches">${illustrations}</div></section>
  <section id="cours" class="fiche-section fiche-cours"><div class="fiche-section-heading"><p class="eyebrow">COURS STRUCTURÉ</p><h2>${detail.titre}</h2></div>${chapitres}</section>
  <section id="essentiels" class="memo-panel"><p class="eyebrow">LES 3 ESSENTIELS</p><h2>À savoir expliquer simplement</h2><ol>${p.essentiels.map((x) => `<li>${x}</li>`).join('')}</ol></section>
  <section id="checklist" class="fiche-section fiche-checklist"><div class="fiche-section-heading"><p class="eyebrow">AVANT L’EXAMEN</p><h2>Ma checklist Galop ${p.n}</h2></div><ul>${checklist}</ul></section>
  <section id="pieges" class="fiche-section"><div class="fiche-section-heading"><p class="eyebrow">AUTO-CORRECTION</p><h2>Les erreurs fréquentes</h2></div><div class="fiche-erreurs">${erreurs}</div></section>
  <section id="lexique" class="fiche-section fiche-lexique"><div class="fiche-section-heading"><p class="eyebrow">MOTS À MAÎTRISER</p><h2>Mini-lexique</h2></div><dl>${lexique}</dl></section>
  <div class="source-officielle fiche-source"><span>À utiliser avec ton enseignant</span><p>Cette synthèse aide à réviser la théorie. Elle ne remplace ni la pratique encadrée, ni les critères d’évaluation de ton club, ni le document fédéral de référence.</p></div>
  <section id="entrainement" class="fiche-section"><div class="fiche-section-heading"><p class="eyebrow">PASSER À L’ACTION</p><h2>Vérifie tes acquis</h2></div>${quizCarouselHtml(quizzes, `Quiz associés à la fiche Galop ${p.n}`)}</section>
  <div class="fiche-nav"><a class="btn-primaire" href="/galop-${p.n}/">Tous les quiz Galop ${p.n}</a>${suivant}</div>`;
  const body = `<div class="fiche-hero fiche-hero-${p.n}"><img src="/assets/badge-galop-${p.n}.webp" alt="Badge Galop ${p.n}" width="640" height="800"><div><p class="eyebrow">FICHE DE RÉVISION · NIVEAU ${p.n}</p><h1>Fiche de révision Galop ${p.n}</h1><p class="lede">${detail.intro}</p><div class="ornement-line"><i></i><b>✦</b><i></i></div><div class="fiche-hero-actions"><a class="btn-primaire" href="#programme">Lire la fiche</a>${telechargement}</div></div></div>
  ${premiumGate(p.n, contenu, `/fiches/galop-${p.n}/`, `Débloque la fiche Galop ${p.n}`)}`;
  return layout({path:`/fiches/galop-${p.n}/`, niveauRequis:niveauPremium(p.n)?p.n:null, title:`Fiche de révision Galop ${p.n} illustrée — Quizz Galop`, description:`Fiche Galop ${p.n} complète : programme, cours structuré, illustrations, checklist, erreurs fréquentes, lexique et quiz corrigés.`, body, crumbs:[{nom:'Accueil',href:'/'},{nom:'Fiches',href:'/fiches/'},{nom:`Galop ${p.n}`,href:`/fiches/galop-${p.n}/`}], bodyClass:`page-fiche-reference level-${p.n}`});
}

/* ================= CONSEILS ================= */
function pageConseils() {
  const cards = CONSEILS.map((a, i) => `<a class="conseil-card" href="/conseils/${a.slug}/"><b>0${i + 1}</b><span>${a.niveaux}</span><h2>${a.titre}</h2><p>${a.intro}</p><em>Lire le conseil <i>→</i></em></a>`).join('');
  const body = `<section class="editorial-hero editorial-hero-conseils"><img src="/assets/icon-medal.svg" alt="" width="96" height="96"><div><p class="eyebrow">MÉTHODE & VIE AU CLUB</p><h1>Conseils pour progresser à cheval</h1><p class="lede">Des contenus pratiques et durables pour mieux réviser, observer son cheval et préparer ses séances.</p></div></section><div class="conseils-grid">${cards}</div>`;
  return layout({path:'/conseils/',title:'Conseils équitation et préparation des Galops — Quizz Galop',description:'Conseils pratiques pour préparer son Galop, réviser efficacement, lire son cheval et organiser ses séances.',body,crumbs:[{nom:'Accueil',href:'/'},{nom:'Conseils',href:'/conseils/'}],bodyClass:'page-conseils-reference'});
}

function pageConseil(a) {
  const sections = a.sections.map(([titre, texte], i) => `<section class="article-section"><span>0${i + 1}</span><div><h2>${titre}</h2><p>${texte}</p></div></section>`).join('');
  const body = `<article class="article"><p class="eyebrow">CONSEIL · ${a.niveaux.toUpperCase()}</p><h1>${a.titre}</h1><p class="lede">${a.intro}</p>${sections}<div class="callout"><strong>À retenir</strong><p>Une notion devient solide quand tu peux l’expliquer avec tes mots et la reconnaître dans une situation réelle au club.</p></div><a class="btn-primaire" href="/progression/">Construire mon diagnostic</a></article>`;
  return layout({path:`/conseils/${a.slug}/`,title:`${a.titre} — Quizz Galop`,description:a.intro,body,crumbs:[{nom:'Accueil',href:'/'},{nom:'Conseils',href:'/conseils/'},{nom:a.titre,href:`/conseils/${a.slug}/`}],bodyClass:'page-article-reference'});
}

/* ================= PROGRESSION LOCALE ================= */
function pageProgression() {
  const catalogue = NIVEAUX.flatMap((n) => n.categories.flatMap((c) => c.quizzes.map((q) => ({id:`g${n.n}-${q.slug}`,niveau:n.n,titre:q.titre,total:q.questions.length,url:`/galop-${n.n}/${c.slug}/${q.slug}/`}))));
  const body = `<section class="editorial-hero editorial-hero-progress"><img src="/assets/icon-medal.svg" alt="" width="96" height="96"><div><p class="eyebrow">TABLEAU DE BORD</p><h1>Ma progression</h1><p class="lede">Ton historique reste uniquement dans ce navigateur. Nous transformons tes résultats en prochaines actions concrètes.</p></div></section>
  <div class="progression-resume" id="progression-resume"><div class="skeleton-line"></div></div>
  <div id="progression-niveaux" class="progression-grid"></div>
  <div class="diagnostic" id="diagnostic"></div>
  <div class="progression-actions"><a class="btn-primaire" href="/examen/">Lancer un examen chronométré</a><button class="btn-texte" id="effacer-progression" type="button">Effacer mes résultats</button></div>
  <script>(function(){
    var catalogue=${JSON.stringify(catalogue).replace(/</g,'\\u003c')};
    var chevaux=${JSON.stringify(PICTOGRAMMES_CHEVAUX)};
    function medaillon(n){var cheval=chevaux[(n-1)%chevaux.length];return '<div class="progression-medallion" aria-hidden="true"><img src="/assets/laurier-medaillon.svg" alt=""><span class="progression-horse" style="--horse:url('+cheval+')"></span><b>'+n+'</b></div>'}
    var key='quizzgalop-progression-v2', hist={}; try{hist=JSON.parse(localStorage.getItem(key)||'{}')}catch(e){}
    var faits=Object.keys(hist).length, tentatives=Object.values(hist).reduce(function(s,x){return s+(x.attempts||0)},0);
    var bests=Object.values(hist).filter(function(x){return x.total}).map(function(x){return 100*x.best/x.total});
    var moyenne=bests.length?Math.round(bests.reduce(function(a,b){return a+b},0)/bests.length):0;
    document.getElementById('progression-resume').innerHTML='<div><strong>'+faits+'</strong><span>quiz commencés</span></div><div><strong>'+tentatives+'</strong><span>tentatives</span></div><div><strong>'+moyenne+' %</strong><span>meilleure moyenne</span></div>';
    document.getElementById('progression-niveaux').innerHTML=[1,2,3,4,5,6,7].map(function(n){var liste=catalogue.filter(function(q){return q.niveau===n}), termines=liste.filter(function(q){return hist[q.id]}), pct=Math.round(100*termines.length/liste.length);return '<a href="/galop-'+n+'/" class="progression-card progression-g'+n+'">'+medaillon(n)+'<div class="progression-card-copy"><span>Galop '+n+'</span><strong>'+termines.length+' / '+liste.length+' quiz</strong><div class="progression-bar"><i style="width:'+pct+'%"></i></div><small>'+pct+' % du parcours</small></div></a>'}).join('');
    var cible=catalogue.filter(function(q){return !hist[q.id]}).sort(function(a,b){return a.niveau-b.niveau})[0];
    var faible=catalogue.filter(function(q){return hist[q.id]}).sort(function(a,b){return (hist[a.id].best/a.total)-(hist[b.id].best/b.total)})[0];
    var reco=faible&&hist[faible.id].best/faible.total<.75?faible:cible;
    document.getElementById('diagnostic').innerHTML=reco?'<div><span>PROCHAINE ÉTAPE CONSEILLÉE</span><h2>'+reco.titre+'</h2><p>'+(hist[reco.id]?'Consolide ce thème : ton meilleur score est de '+hist[reco.id].best+' / '+reco.total+'.':'Découvre ce thème pour faire avancer ton parcours Galop '+reco.niveau+'.')+'</p></div><a class="btn-primaire" href="'+reco.url+'">Commencer →</a>':'<div><span>PARCOURS TERMINÉ</span><h2>Bravo, tous les quiz ont été essayés.</h2><p>Passe en mode examen pour mélanger les thèmes.</p></div>';
    document.getElementById('effacer-progression').onclick=function(){if(confirm('Effacer tous les scores enregistrés sur cet appareil ?')){localStorage.removeItem(key);location.reload()}};
  })();</script>`;
  return layout({path:'/progression/',title:'Ma progression — Quizz Galop',description:'Tableau de bord local : scores, avancement par Galop et recommandation du prochain quiz.',body,crumbs:[{nom:'Accueil',href:'/'},{nom:'Progression',href:'/progression/'}],bodyClass:'page-progression-reference'});
}

/* ================= EXAMEN BLANC ================= */
function pageExamenBlanc() {
  const banque = NIVEAUX.map((n) => ({n:n.n,questions:n.categories.flatMap((c) => c.quizzes.flatMap((q) => q.questions.map((x) => ({...x,theme:q.titre}))))}));
  const body = `<div class="examen-hero"><img class="exam-emblem" src="/assets/logo-embleme.svg" alt="" width="120" height="120"><div><p class="eyebrow">CONDITIONS D’EXAMEN</p><h1>Examen blanc chronométré</h1><p class="lede">20 questions mélangées, un chrono visible et aucune correction avant le résultat final.</p></div><div class="examen-horloge" aria-hidden="true"><span>20</span><small>questions</small><i>⏱</i></div></div><div id="exam-app" class="exam-app"></div>
  <script>(function(){var app=document.getElementById('exam-app'), banque=${JSON.stringify(banque).replace(/</g,'\\u003c')};
  app.innerHTML='<div class="exam-start"><h2>Quel niveau prépares-tu ?</h2><div class="exam-levels">'+banque.map(function(x){var verrou=x.n>=3;return '<button type="button" class="'+(verrou?'exam-level-premium':'')+'" data-n="'+x.n+'">Galop '+x.n+(verrou?' <small>3,99 €</small>':'')+'</button>'}).join('')+'</div><p>Le chrono démarre à la première question. Ton bilan affichera les thèmes à retravailler.</p></div>';
  app.addEventListener('click',function(e){var b=e.target.closest('[data-n]');if(!b)return;var n=+b.dataset.n;var ouverts=(document.documentElement.getAttribute('data-acces')||'').split(',').filter(Boolean).map(Number);if(n>=3&&ouverts.indexOf(n)===-1){location.href='/premium/?niveau='+n+'&retour=%2Fexamen%2F';return;}demarrer(n)});
  function melanger(a){return a.slice().sort(function(){return Math.random()-.5})}
  function formater(ms){var s=Math.floor(ms/1000),m=Math.floor(s/60);return String(m).padStart(2,'0')+':'+String(s%60).padStart(2,'0')}
  function demarrer(n){var qs=melanger(banque.find(function(x){return x.n===n}).questions).slice(0,20),i=0,rep=[],debut=Date.now(),timer=setInterval(tick,250);function tick(){var t=document.getElementById('exam-chrono');if(t)t.textContent=formater(Date.now()-debut)}function render(){var q=qs[i],pct=Math.round(100*(i+1)/qs.length);app.innerHTML='<div class="exam-head"><span>Galop '+n+'</span><time id="exam-chrono">'+formater(Date.now()-debut)+'</time><strong>'+(i+1)+' / '+qs.length+'</strong></div><div class="quiz-barre" role="progressbar" aria-label="Progression de l’examen" aria-valuemin="0" aria-valuemax="100" aria-valuenow="'+pct+'"><i style="width:'+pct+'%"></i></div><div class="quiz-question" role="group" aria-labelledby="exam-enonce"><h2 class="enonce" id="exam-enonce" tabindex="-1">'+q.q+'</h2>'+(q.image?'<figure class="quiz-visuel"><img src="'+q.image+'" alt="'+(q.imageAlt||'')+'"></figure>':'')+'<div class="quiz-options" role="group" aria-labelledby="exam-enonce">'+q.options.map(function(o,k){return '<button class="quiz-option" type="button" data-r="'+k+'">'+o+'</button>'}).join('')+'</div></div>';var titre=document.getElementById('exam-enonce');if(titre)titre.focus();app.querySelectorAll('[data-r]').forEach(function(x){x.onclick=function(){rep.push(+x.dataset.r);i++;i<qs.length?render():resultat()}})}function resultat(){clearInterval(timer);var duree=formater(Date.now()-debut),score=qs.reduce(function(s,q,k){return s+(q.bonne===rep[k]?1:0)},0),themes={};qs.forEach(function(q,k){themes[q.theme]=themes[q.theme]||[0,0];themes[q.theme][1]++;if(q.bonne===rep[k])themes[q.theme][0]++});var faibles=Object.entries(themes).sort(function(a,b){return a[1][0]/a[1][1]-b[1][0]/b[1][1]}).slice(0,3);app.innerHTML='<div class="exam-result" role="status" aria-live="polite" tabindex="-1"><span>EXAMEN TERMINÉ · '+duree+'</span><strong>'+score+' / '+qs.length+'</strong><h2>'+(score/qs.length>=.75?'Bon niveau général':'Continue à consolider')+'</h2><p>Thèmes prioritaires :</p><ul>'+faibles.map(function(x){return '<li><b>'+x[0]+'</b><span>'+x[1][0]+' / '+x[1][1]+'</span></li>'}).join('')+'</ul><div><button class="btn-primaire" id="again">Nouvel examen</button><a class="btn-secondaire" href="/fiches/galop-'+n+'/">Revoir la fiche</a></div></div>';app.querySelector('.exam-result').focus();document.getElementById('again').onclick=function(){demarrer(n)}}render()}
  })();</script>`;
  return layout({path:'/examen/',title:'Examen blanc chronométré — Quizz Galop',description:'Simule un examen théorique Galop avec 20 questions mélangées, un chrono et un bilan par thème.',body,crumbs:[{nom:'Accueil',href:'/'},{nom:'Examen',href:'/examen/'}],bodyClass:'page-examen-reference'});
}

/* ================= ACHAT / STRIPE CHECKOUT ================= */
function pagePremium() {
  const cartesNiveaux = ACHAT.lockedLevels.map((n) => {
    const niv = NIVEAUX.find((x) => x.n === n);
    return `<article class="achat-niveau" data-niveau="${n}">
      <img src="/assets/badge-galop-${n}.webp" alt="" width="320" height="400" loading="lazy">
      <h3>Galop ${n}</h3>
      <p>${niv ? totalQuizzes(niv) : 0} quiz · ${niv ? totalQuestions(niv) : 0} questions</p>
      <div class="achat-prix"><strong>${ACHAT.niveau.prixAffiche}</strong><span>accès à vie</span></div>
      <a class="btn-secondaire" data-article="niveau" data-n="${n}" href="/premium/checkout/?article=niveau&niveau=${n}">Débloquer</a>
      <span class="achat-deja">Déjà débloqué ✓</span>
    </article>`;
  }).join('\n');

  const body = `<section class="premium-reference-hero">
    <div><img src="/assets/logo-embleme.svg" alt="" width="120" height="120"><p class="eyebrow">DÉBLOQUER UN GALOP</p>
    <h1>Paie une fois,<br>garde-le pour toujours</h1>
    <p class="lede">Les Galops 1 et 2 sont gratuits. Les Galops 3 à 7 se débloquent à l’unité, en un
    seul paiement. Pas d’abonnement, pas de reconduction, rien à résilier.</p>
    <div class="premium-hero-trust"><span>✓ Paiement unique</span><span>✓ Accès à vie</span><span>✓ Paiement sécurisé Stripe</span></div></div>
    <aside><span>Contenu total</span><strong>Galops 3 → 7</strong><p>${TOTAL_QUIZZES} quiz · ${TOTAL_QUESTIONS} questions · 7 fiches illustrées</p><small data-premium-status></small></aside>
  </section>

  <section class="premium-pricing" aria-labelledby="achat-offres">
    <div class="premium-heading"><p class="eyebrow">DEUX FAÇONS D’ACHETER</p><h2 id="achat-offres">Un seul Galop, ou les cinq</h2>
    <p>Le contenu est identique : le pack revient simplement à ${ACHAT.pack.equivalent} au lieu de ${ACHAT.niveau.prixAffiche}.</p></div>
    <div class="premium-plans">
      <article><span class="plan-kicker">À l’unité</span><h3>${ACHAT.niveau.nom}</h3>
        <div class="plan-price"><strong>${ACHAT.niveau.prixAffiche}</strong><span>${ACHAT.niveau.rythme}</span></div>
        <p>${ACHAT.niveau.engagement}</p>
        <ul><li>Tous les quiz du Galop choisi</li><li>Sa fiche PDF illustrée</li><li>Son examen blanc chronométré</li></ul>
        <a class="btn-secondaire" href="#choisir-galop">Choisir mon Galop</a></article>
      <article class="plan-featured"><span class="plan-badge">Le meilleur prix</span><span class="plan-kicker">Recommandé</span><h3>${ACHAT.pack.nom}</h3>
        <div class="plan-price"><strong>${ACHAT.pack.prixAffiche}</strong><span>${ACHAT.pack.rythme}</span></div>
        <p><b>${ACHAT.pack.equivalent}</b> · ${ACHAT.pack.engagement}</p>
        <ul><li>Les Galops 3, 4, 5, 6 et 7</li><li>Les 7 fiches PDF</li><li>Tous les examens blancs</li></ul>
        <a class="btn-primaire" data-article="pack" href="/premium/checkout/?article=pack">Prendre le pack</a></article>
    </div>
  </section>

  <section class="premium-benefits" id="choisir-galop"><p class="eyebrow">À L’UNITÉ</p><h2>Quel Galop prépares-tu ?</h2>
    <div class="achat-niveaux">${cartesNiveaux}</div>
  </section>

  <section class="premium-faq"><p class="eyebrow">QUESTIONS FRÉQUENTES</p><h2>Avant d’acheter</h2>
    <details><summary>Que reste-t-il gratuit ?</summary><p>Les Galops 1 et 2 en entier : leurs quiz, leurs fiches et leurs pages de révision restent accessibles sans payer.</p></details>
    <details><summary>Est-ce un abonnement ?</summary><p>Non. C’est un paiement unique par Galop, sans reconduction et sans rien à résilier. Une fois payé, l’accès reste ouvert.</p></details>
    <details><summary>Si j’achète un Galop, puis-je prendre le pack après ?</summary><p>Oui, mais le pack ne déduit pas l’achat déjà effectué. Si tu penses passer plusieurs Galops, le pack est plus avantageux dès le départ.</p></details>
    <details><summary>Où est enregistré mon accès ?</summary><p>Dans ce navigateur, sur cet appareil. Conserve l’e-mail de confirmation Stripe : il te servira de preuve d’achat si tu changes d’appareil.</p></details>
    <details><summary>Le contenu est-il officiel ?</summary><p>Non, Quizz Galop est indépendant et n’est affilié à aucune fédération. Le contenu suit l’esprit du programme mais doit toujours être vérifié face au livret de ton club.</p></details>
  </section>

  <div class="premium-active-panel" data-premium-content><div><p class="eyebrow">ACCÈS ACTIF</p><h2>Tu as déjà débloqué du contenu</h2><p data-premium-status></p></div><div><a class="btn-primaire" href="/quiz/">Voir les quiz</a><button class="btn-texte" type="button" data-premium-reset>Réinitialiser sur cet appareil</button></div></div>

  <script>(function(){
    var params=new URLSearchParams(location.search),retour=params.get('retour')||'/quiz/';
    var caracteresChemin='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/_-';
    if(retour.charAt(0)!=='/'||retour.charAt(1)==='/'||!retour.split('').every(function(c){return caracteresChemin.indexOf(c)!==-1;}))retour='/quiz/';
    document.querySelectorAll('[data-article]').forEach(function(lien){
      var url='/premium/checkout/?article='+lien.dataset.article;
      if(lien.dataset.n)url+='&niveau='+lien.dataset.n;
      lien.href=url+'&retour='+encodeURIComponent(retour);
    });
    /* Si un niveau est demandé dans l'URL, on met sa carte en avant. */
    var vise=params.get('niveau');
    if(vise){var carte=document.querySelector('.achat-niveau[data-niveau="'+vise.replace(/[^0-9]/g,'')+'"]');
      if(carte){carte.classList.add('is-vise');carte.scrollIntoView({block:'center'});}}
  })();</script>`;
  return layout({path:'/premium/',title:'Débloquer un Galop : 3,99 € l’unité, accès à vie | Quizz Galop',description:'Débloque les quiz, fiches PDF et examens blancs du Galop de ton choix pour 3,99 € en paiement unique. Galops 1 et 2 gratuits. Pas d’abonnement.',body,crumbs:[{nom:'Accueil',href:'/'},{nom:'Débloquer un Galop',href:'/premium/'}],bodyClass:'page-premium-reference'});
}

function pagePremiumCheckout() {
  const body = `<section class="checkout-shell"><a class="checkout-brand" href="/premium/"><img src="/assets/logo-embleme.svg" alt="" width="96" height="96"><span>QUIZZ GALOP</span></a>
    <div class="checkout-grid"><div><p class="eyebrow">FINALISER L’ACHAT</p><h1>Débloquer ton accès</h1><p class="lede">Tu vas être redirigé vers la page de paiement sécurisée Stripe. Le paiement est unique : aucun prélèvement ne sera reconduit.</p>
      <label for="checkout-email">Adresse e-mail <span>(pour recevoir ta preuve d’achat)</span></label><input id="checkout-email" type="email" autocomplete="email" placeholder="cavalier@exemple.fr">
      <button class="btn-primaire" id="checkout-submit" type="button">Payer</button><p class="checkout-feedback" id="checkout-feedback" role="status" aria-live="polite"></p><small>🔒 Les clés Stripe restent exclusivement côté serveur. Aucune donnée bancaire n’est saisie sur Quizz Galop.</small></div>
      <aside><span id="checkout-plan-label">Un Galop</span><div><strong id="checkout-price">${ACHAT.niveau.prixAffiche}</strong><small id="checkout-rhythm">paiement unique</small></div><ul id="checkout-details"><li>Accès à vie</li><li>Quiz, fiche PDF et examen</li></ul><a href="/premium/">Modifier mon choix</a></aside></div>
  </section>
  <script>(function(){
    var params=new URLSearchParams(location.search);
    var article=params.get('article')==='pack'?'pack':'niveau';
    var niveauBrut=parseInt(params.get('niveau'),10);
    var niveauxPayants=${JSON.stringify(ACHAT.lockedLevels)};
    var niveau=niveauxPayants.indexOf(niveauBrut)!==-1?niveauBrut:null;
    var retour=params.get('retour')||'/quiz/',caracteresChemin='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/_-';
    if(retour.charAt(0)!=='/'||retour.charAt(1)==='/'||!retour.split('').every(function(c){return caracteresChemin.indexOf(c)!==-1;}))retour='/quiz/';
    var offres=${JSON.stringify({ niveau: ACHAT.niveau, pack: ACHAT.pack }).replace(/</g, '\\u003c')};
    /* Un achat de niveau sans niveau valide : on renvoie choisir plutôt que de
       lancer un paiement sur un contenu indéterminé. */
    if(article==='niveau'&&niveau===null){location.replace('/premium/#choisir-galop');return;}
    var offre=offres[article];
    document.getElementById('checkout-plan-label').textContent=article==='pack'?'Pack Galops 3 à 7':'Galop '+niveau;
    document.getElementById('checkout-price').textContent=offre.prixAffiche;
    document.getElementById('checkout-rhythm').textContent=offre.rythme;
    document.getElementById('checkout-details').innerHTML=article==='pack'
      ?'<li>Les 5 Galops payants</li><li>Les 7 fiches PDF</li><li>Accès à vie</li>'
      :'<li>Tous les quiz du Galop '+niveau+'</li><li>Sa fiche PDF</li><li>Accès à vie</li>';
    var bouton=document.getElementById('checkout-submit'),feedback=document.getElementById('checkout-feedback');
    bouton.onclick=async function(){bouton.disabled=true;feedback.textContent='Préparation du paiement…';var email=document.getElementById('checkout-email').value.trim();
      try{var response=await fetch(${JSON.stringify(ACHAT.stripe.checkoutEndpoint)},{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({article:article,niveau:niveau,email:email,returnPath:retour})});if(!response.ok)throw new Error('endpoint');var resultat=await response.json();if(!resultat.url)throw new Error('url');location.href=resultat.url;}
      catch(e){bouton.disabled=false;feedback.textContent='Le paiement est momentanément indisponible. Réessaie dans un instant.';}
    };
  })();</script>`;
  return layout({path:'/premium/checkout/',title:'Paiement — Quizz Galop',description:'Finalisation de l’achat Quizz Galop.',body,crumbs:[],masquerHeader:true,masquerFooter:true,masquerFilCrumb:true,bodyClass:'page-checkout-reference',robots:'noindex,nofollow'});
}

function pagePremiumSucces() {
  const body = `<section class="success-shell"><img src="/assets/logo-embleme.svg" alt="" width="120" height="120"><p class="eyebrow">QUIZZ GALOP</p><h1 id="success-title">Vérification de ton paiement…</h1><p class="lede" id="success-message">Un instant, nous ouvrons ton accès.</p><div class="success-actions" id="success-actions" hidden><a class="btn-primaire" id="success-return" href="/quiz/">Commencer à réviser</a><a class="btn-secondaire" href="/premium/">Voir mes accès</a></div><div class="success-loader" id="success-loader" aria-hidden="true"></div></section>
  <script>(async function(){
    var params=new URLSearchParams(location.search),demo=params.get('demo')==='1',session=params.get('session_id');
    var niveauxPayants=${JSON.stringify(ACHAT.lockedLevels)};
    var article=params.get('article')==='pack'?'pack':'niveau';
    var niveauBrut=parseInt(params.get('niveau'),10);
    var niveauDemo=niveauxPayants.indexOf(niveauBrut)!==-1?niveauBrut:null;
    var retour=params.get('retour')||'/quiz/',caracteresChemin='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/_-';
    if(retour.charAt(0)!=='/'||retour.charAt(1)==='/'||!retour.split('').every(function(c){return caracteresChemin.indexOf(c)!==-1;}))retour='/quiz/';
    var titre=document.getElementById('success-title'),message=document.getElementById('success-message'),actions=document.getElementById('success-actions'),loader=document.getElementById('success-loader');
    /* On fusionne avec les niveaux déjà possédés : un second achat ne doit pas
       effacer le premier. */
    function ouvrir(niveaux,estDemo){
      var deja=[];
      try{var brut=JSON.parse(localStorage.getItem(${JSON.stringify(ACHAT.storageKey)})||'null');if(brut&&Array.isArray(brut.niveaux))deja=brut.niveaux.map(Number);}catch(e){}
      var fusion=deja.slice();
      niveaux.forEach(function(n){if(fusion.indexOf(Number(n))===-1)fusion.push(Number(n));});
      fusion.sort(function(a,b){return a-b;});
      try{localStorage.setItem(${JSON.stringify(ACHAT.storageKey)},JSON.stringify({niveaux:fusion,dernierAchat:Date.now(),test:!!estDemo}));}catch(e){}
      document.documentElement.setAttribute('data-premium','active');
      document.documentElement.setAttribute('data-acces',fusion.join(','));
      titre.textContent=fusion.length>1?'Tes Galops sont débloqués':'Ton Galop est débloqué';
      message.textContent=estDemo
        ?'Accès de démonstration ouvert : aucun débit n’a été effectué.'
        :'Ton paiement a été vérifié. Galops accessibles : '+fusion.join(', ')+'.';
      document.getElementById('success-return').href=retour;
      actions.hidden=false;loader.hidden=true;
    }
    function echouer(){titre.textContent='Paiement non confirmé';message.textContent='La session n’a pas pu être vérifiée. Aucun accès n’a été ouvert et, si un débit a eu lieu, contacte-nous avec ton e-mail Stripe.';actions.hidden=false;loader.hidden=true;}
    if(demo){ouvrir(article==='pack'?niveauxPayants:(niveauDemo!==null?[niveauDemo]:[]),true);return;}
    if(!session){echouer();return;}
    try{
      var response=await fetch(${JSON.stringify(ACHAT.stripe.verifyEndpoint)}+'?session_id='+encodeURIComponent(session));
      var resultat=await response.json();
      if(!response.ok||!resultat.active||!Array.isArray(resultat.niveaux)||!resultat.niveaux.length)throw new Error('invalid');
      ouvrir(resultat.niveaux,false);
    }catch(e){echouer();}
  })();</script>`;
  return layout({path:'/premium/succes/',title:'Accès ouvert — Quizz Galop',description:'Confirmation de l’achat Quizz Galop.',body,crumbs:[],masquerHeader:true,masquerFooter:true,masquerFilCrumb:true,bodyClass:'page-success-reference',robots:'noindex,nofollow'});
}

/* ================= Pages légales minimales ================= */
function pageMentionsLegales() {
  const body = `<article class="legal-document"><img src="/assets/logo-embleme.svg" alt="" width="120" height="120"><p class="eyebrow">INFORMATIONS LÉGALES</p>
<h1>Mentions légales</h1>
<p class="lede">Ce site propose des contenus de révision payants. Les informations d’identification de
l’éditeur ci-dessous doivent être complétées avant toute mise en vente effective.</p>

<div class="callout"><p><b>À compléter obligatoirement avant d’encaisser :</b> dénomination ou nom de
l’éditeur, statut (micro-entreprise, société…), numéro SIREN, adresse du siège, adresse e-mail de contact,
et numéro de TVA intracommunautaire le cas échéant. La dispense d’identification prévue par l’article
6-III-2 de la LCEN ne s’applique qu’aux éditeurs non professionnels : elle cesse dès qu’un site vend
quelque chose.</p></div>

<p>Hébergement : Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, États-Unis.</p>

<h2>Contenu</h2>
<p>Ce site propose des quiz de révision pour les examens de Galop. Il est indépendant et n’est affilié à
aucune fédération équestre. Le contenu de révision est fourni à titre indicatif : vérifie-le toujours face
au livret officiel de ton club avant un passage d’examen.</p>

<h2>Conditions de vente</h2>
<p>Les Galops 1 et 2 sont accessibles gratuitement. Les Galops 3 à 7 sont vendus par
<strong>paiement unique</strong> : ${ACHAT.niveau.prixAffiche} pour un Galop, ${ACHAT.pack.prixAffiche}
pour les cinq. Il ne s’agit pas d’un abonnement : aucun prélèvement n’est reconduit et il n’y a rien à
résilier. L’accès acheté est enregistré dans le navigateur utilisé lors de l’achat.</p>
<p>Le paiement est traité par <strong>Stripe Payments Europe</strong>. Aucune donnée bancaire ne transite
par ce site ni n’y est conservée.</p>

<h2>Droit de rétractation</h2>
<p>Il s’agit d’un contenu numérique fourni immédiatement après le paiement. Conformément à l’article
L221-28 13° du Code de la consommation, en validant l’achat l’acheteur demande expressément l’exécution
immédiate de la prestation et <strong>renonce à son droit de rétractation de quatorze jours</strong>. En
cas de problème technique empêchant l’accès au contenu acheté, un remboursement est effectué sur
présentation de l’e-mail de confirmation Stripe.</p>

<div class="callout"><p><b>Mineurs :</b> le public de ce site comprend des mineurs. L’achat doit être
effectué par un titulaire de l’autorité parentale ou avec son accord.</p></div></article>`;
  return layout({
    path: '/mentions-legales/',
    title: 'Mentions légales — Quizz Galop',
    description: 'Informations légales du site Quizz Galop.',
    body,
    crumbs: [{ nom: 'Accueil', href: '/' }, { nom: 'Mentions légales', href: '/mentions-legales/' }],
    bodyClass: 'page-legal-reference'
  });
}

function pageConfidentialite() {
  const body = `<article class="legal-document"><img src="/assets/logo-embleme.svg" alt="" width="120" height="120"><p class="eyebrow">DONNÉES PERSONNELLES</p>
<h1>Confidentialité</h1>
<p class="lede">Les réponses aux quiz, la progression et la liste des Galops débloqués restent dans ton
navigateur, sur ton appareil. Ce site ne possède aucun compte utilisateur et aucune base de données.</p>

<h2>Ce qui reste local</h2>
<p>Scores, progression et Galops achetés sont enregistrés en <code>localStorage</code>. Conséquence à
connaître : si tu changes de navigateur ou d’appareil, ou si tu effaces les données du site, l’accès acheté
n’est plus reconnu. <strong>Conserve l’e-mail de confirmation Stripe</strong>, il constitue ta preuve
d’achat.</p>

<h2>Paiement Stripe</h2>
<p>Le paiement est traité par Stripe Payments Europe. Lors d’un achat, ton adresse e-mail et les données
nécessaires à la transaction sont transmises directement à Stripe via sa page de paiement sécurisée.
Quizz Galop ne voit ni ne conserve aucun numéro de carte.</p>
<ul>
<li><b>Finalité :</b> exécution de la vente et délivrance de l’accès acheté.</li>
<li><b>Base légale :</b> exécution du contrat (article 6.1.b du RGPD).</li>
<li><b>Conservation :</b> les données de transaction sont conservées par Stripe selon ses propres durées
légales, notamment comptables.</li>
<li><b>Sous-traitant :</b> Stripe Payments Europe, Ltd., Irlande.</li>
</ul>

<div class="callout"><p>Pour exercer tes droits d’accès, de rectification ou d’effacement, l’adresse de
contact du responsable du traitement doit être renseignée dans les mentions légales.</p></div>
<h2>Cookies publicitaires</h2>
<p>Si tu acceptes le bandeau de cookies, Google peut déposer des cookies publicitaires. Si tu refuses,
aucun cookie publicitaire n’est déposé et le site fonctionne à l’identique. Tu peux changer d’avis à tout
moment depuis le pied de page.</p></article>`;
  return layout({
    path: '/confidentialite/',
    title: 'Confidentialité — Quizz Galop',
    description: 'Politique de confidentialité du site Quizz Galop.',
    body,
    crumbs: [{ nom: 'Accueil', href: '/' }, { nom: 'Confidentialité', href: '/confidentialite/' }],
    bodyClass: 'page-legal-reference'
  });
}

/* ================= Génération ================= */
let pages = 0;
ecrire('', pageAccueil()); pages++;
ecrire('quiz', pageHubQuiz()); pages++;
ecrire('fiches', pageFiches()); pages++;
ecrire('conseils', pageConseils()); pages++;
ecrire('progression', pageProgression()); pages++;
ecrire('examen', pageExamenBlanc()); pages++;
ecrire('premium', pagePremium()); pages++;
ecrire('premium/checkout', pagePremiumCheckout()); pages++;
ecrire('premium/succes', pagePremiumSucces()); pages++;
ecrire('mentions-legales', pageMentionsLegales()); pages++;
ecrire('confidentialite', pageConfidentialite()); pages++;

const urls = [
  { loc: url('/'), priority: '1.0' },
  { loc: url('/quiz/'), priority: '0.9' },
  { loc: url('/fiches/'), priority: '0.9' },
  { loc: url('/conseils/'), priority: '0.7' },
  { loc: url('/progression/'), priority: '0.6' },
  { loc: url('/examen/'), priority: '0.8' },
  { loc: url('/premium/'), priority: '0.8' }
];

for (const p of PROGRAMMES) {
  ecrire(`fiches/galop-${p.n}`, pageFiche(p)); pages++;
  urls.push({loc:url(`/fiches/galop-${p.n}/`),priority:'0.8'});
}

for (const a of CONSEILS) {
  ecrire(`conseils/${a.slug}`, pageConseil(a)); pages++;
  urls.push({loc:url(`/conseils/${a.slug}/`),priority:'0.6'});
}

for (const n of NIVEAUX) {
  ecrire(`galop-${n.n}`, pageNiveau(n)); pages++;
  urls.push({ loc: url(`/galop-${n.n}/`), priority: '0.9' });
  for (const cat of n.categories) {
    for (const quiz of n.categories.find((c) => c.slug === cat.slug).quizzes) {
      ecrire(`galop-${n.n}/${cat.slug}/${quiz.slug}`, pageQuiz(n, cat, quiz)); pages++;
      urls.push({ loc: url(`/galop-${n.n}/${cat.slug}/${quiz.slug}/`), priority: '0.7' });
    }
  }
}

/* ---------- Assets ---------- */
fs.mkdirSync(path.join(OUT, 'assets'), { recursive: true });
fs.writeFileSync(path.join(OUT, 'assets', 'site.css'), CSS, 'utf8');

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="15" fill="#fff8ed"/><rect x="1.5" y="1.5" width="61" height="61" rx="13.5" fill="none" stroke="#d2ad77" stroke-width="3"/><path d="M17 11c-6 9-8 20-6 30 2 13 10 20 21 20s19-7 21-20c2-10 0-21-6-30l-9 6c4 6 5 14 4 21-1 8-4 12-10 12s-9-4-10-12c-1-7 0-15 4-21l-9-6Z" fill="#c69652"/><circle cx="19" cy="26" r="2" fill="#fff8ed"/><circle cx="45" cy="26" r="2" fill="#fff8ed"/><path d="m32 25 2.5 5.5L40 33l-5.5 2.5L32 41l-2.5-5.5L24 33l5.5-2.5L32 25Z" fill="#fff8ed"/></svg>`;
fs.writeFileSync(path.join(OUT, 'assets', 'favicon.svg'), favicon, 'utf8');

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" rx="34" fill="#fbf6ee"/><rect x="12" y="12" width="1176" height="606" rx="28" fill="none" stroke="#c69652" stroke-width="2"/><path d="M565 95c-14 22-18 47-13 69 6 29 24 45 48 45s42-16 48-45c5-22 1-47-13-69l-20 13c9 14 12 33 9 48-3 18-10 26-24 26s-21-8-24-26c-3-15 0-34 9-48l-20-13Z" fill="#c69652"/><text x="600" y="350" font-size="96" text-anchor="middle" fill="#17130f" font-family="Georgia,serif" font-weight="600">Quizz Galop</text><line x1="360" y1="400" x2="530" y2="400" stroke="#c69652"/><circle cx="600" cy="400" r="6" fill="#c69652"/><line x1="670" y1="400" x2="840" y2="400" stroke="#c69652"/><text x="600" y="474" font-size="30" letter-spacing="5" text-anchor="middle" fill="#174d3b" font-family="Arial,sans-serif">GALOPS 1 À 7</text><text x="600" y="530" font-size="24" text-anchor="middle" fill="#665b50" font-family="Arial,sans-serif">Fiches, quiz et examens chronométrés</text></svg>`;
fs.writeFileSync(path.join(OUT, 'assets', 'og-quizzgalop.svg'), og, 'utf8');

/* ---------- robots.txt + sitemap.xml ---------- */
fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${url('/sitemap.xml')}\n`, 'utf8');

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.loc}</loc><priority>${u.priority}</priority></url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), sitemapXml, 'utf8');

console.log(`${pages} pages générées (${NIVEAUX.length} niveaux, fiches, conseils et examen chronométré).`);
