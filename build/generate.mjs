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

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const OUT = ROOT;

for (const niveau of NIVEAUX) {
  const extras = EXTRA_QUIZZES[niveau.n] || [];
  if (extras.length) niveau.categories.push({
    slug:'programme-officiel',
    titre:'Programme officiel approfondi',
    intro:'Des quiz complémentaires pour couvrir les connaissances, soins et pratiques attendus à ce niveau.',
    quizzes:extras
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
  return `<a class="quiz-card" href="/galop-${n.n}/${cat.slug}/${quiz.slug}/">
  <img class="quiz-card-img" src="${imageQuiz(n, quiz)}" alt="" width="960" height="720" loading="lazy">
  <span class="quiz-card-corps">
    <span class="titre">${quiz.titre}</span>
    <span class="n-questions">${quiz.questions.length} questions · Galop ${n.n}</span>
  </span>
</a>`;
}

function quizCarouselHtml(items, label = 'Quiz') {
  return `<div class="quiz-carousel-shell" aria-label="${label}">
    <div class="quiz-carousel-controls"><button type="button" data-carousel-prev aria-label="Quiz précédents">←</button><button type="button" data-carousel-next aria-label="Quiz suivants">→</button></div>
    <div class="quiz-carousel">${items}</div>
  </div>`;
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

/* ================= ACCUEIL ================= */
function pageAccueil() {
  const cartes = NIVEAUX.map((n) => `<a class="niveau-card" href="/galop-${n.n}/">
  <img class="niveau-badge" src="/assets/badge-galop-${n.n}.webp" alt="Badge Galop ${n.n}" width="640" height="800" loading="lazy">
  <div class="niveau-card-corps">
    <div class="num">Galop ${n.n}</div>
    <div class="titre">${n.accroche}</div>
    <div class="meta">${totalQuizzes(n)} quiz · ${totalQuestions(n)} questions</div>
  </div>
</a>`).join('\n');

  const banniere = banniereAccueil();
  const hero = banniere
    ? `<div class="hero-bleed accueil-hero">
  <img src="${banniere}" alt="Révise ton Galop en t’amusant, avec Quizz Galop" width="1800" height="1013" loading="eager">
  ${HERO_TRANSITION}
  <div class="accueil-hero-texte">
    <p class="eyebrow">RÉVISION ÉQUESTRE EN LIGNE</p>
    <h1>Révise ton Galop en t’amusant</h1>
    <p class="lede">Des quiz gratuits, conformes à l’esprit du programme FFE, pour réviser la théorie de ton
    examen de Galop entre deux séances au club.</p>
    <a class="accueil-hero-cta" href="#niveaux">Choisir mon niveau ↓</a>
  </div>
</div>`
    : `<p class="eyebrow">RÉVISION ÉQUESTRE EN LIGNE</p>
<h1>Révise ton Galop en t’amusant</h1>
<p class="lede">Des quiz gratuits, conformes à l’esprit du programme FFE, pour réviser la théorie de ton examen
de Galop entre deux séances au club. Choisis ton niveau, réponds aux questions, corrige-toi tout de suite.</p>`;

  const body = `${hero}

<div class="parcours-rapide" aria-label="Parcours de révision">
  <a href="/fiches/"><b>1</b><span><strong>Comprendre</strong> avec les fiches</span></a>
  <a href="/quiz/"><b>2</b><span><strong>Mémoriser</strong> avec les quiz</span></a>
  <a href="/progression/"><b>3</b><span><strong>Progresser</strong> grâce au diagnostic</span></a>
</div>

<h2 id="niveaux">Choisis ton niveau</h2>
<div class="niveaux-grid">
${cartes}
</div>

<div class="callout">
  <p><strong>Comment on procède ?</strong> Chaque niveau est découpé en catégories (connaissance du cheval,
  matériel, théorie…), elles-mêmes découpées en petits quiz de 4 à 8 questions. Tu réponds, tu vois tout de
  suite si c’est correct, et un score s’affiche à la fin.</p>
</div>

<h2>Pourquoi réviser avec des quiz ?</h2>
<p>La théorie du Galop se retient mieux en la pratiquant qu’en la lisant une seule fois. Se tromper sur un
quiz, comprendre pourquoi, puis recommencer plus tard : c’est la méthode la plus efficace pour arriver à
l’examen sans stress sur les questions de théorie.</p>`;

  return layout({
    path: '/',
    title: 'Quizz Galop — révise les Galops 1 à 7 en ligne',
    description: 'Quiz, fiches structurées et progression pour réviser la théorie des Galops 1 à 7 selon les grands axes du programme officiel FFE.',
    body,
    ogType: 'website'
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
  <img src="${banniere}" alt="Tous les quiz équestres" width="1600" height="900" loading="eager">
  ${HERO_TRANSITION}
  <div class="hub-hero-large-texte">
    <p class="eyebrow">TOUS LES QUIZ</p><h1>Tous les quiz, par niveau</h1>
    <p class="lede">La liste complète des quiz disponibles pour les Galops 1 à 7.</p>
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
    masquerFilCrumb: Boolean(banniere)
  });
}

/* ================= PAGE NIVEAU /galop-N/ ================= */
function pageNiveau(n) {
  const sections = n.categories.map((c) => {
    const items = c.quizzes.map((q) => quizCardHtml(n, c, q)).join('\n');
    return `<div class="categorie">
  <h2>${c.titre}</h2>
  <p class="categorie-intro">${c.intro}</p>
  ${quizCarouselHtml(items, `${c.titre} — Galop ${n.n}`)}
</div>`;
  }).join('\n');

  const autres = NIVEAUX.filter((x) => x.n !== n.n)
    .map((x) => `<li><a href="/galop-${x.n}/">Quiz Galop ${x.n}</a></li>`).join('\n');

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

  const body = `${hero}
<div class="niveau-outils">
  <a class="btn-primaire" href="/fiches/galop-${n.n}/">Lire la fiche Galop ${n.n}</a>
  <a class="btn-secondaire" href="/progression/">Voir ma progression</a>
</div>
${sections}
<h2>Réviser un autre niveau</h2>
<ul>${autres}</ul>`;

  return layout({
    path: `/galop-${n.n}/`,
    title: `Quiz Galop ${n.n} : révise la théorie gratuitement — Quizz Galop`,
    description: `Quiz Galop ${n.n} gratuit et en ligne : ${n.accroche} Réponses immédiates, ${totalQuestions(n)} questions au total.`,
    body,
    crumbs: [{ nom: 'Accueil', href: '/' }, { nom: `Galop ${n.n}`, href: `/galop-${n.n}/` }],
    masquerFilCrumb: Boolean(banniere)
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

  const body = `<div class="quiz-intro">
  <img src="${imageQuiz(n, quiz)}" alt="Illustration : ${quiz.titre}" width="960" height="720" loading="eager">
  <div>
    <p class="eyebrow">GALOP ${n.n} · ${cat.titre.toUpperCase()}</p>
    <h1>${quiz.titre}</h1>
    <p class="lede">${quiz.questions.length} questions sur ce thème. Choisis ta réponse : la correction s’affiche tout de suite.</p>
  </div>
</div>

<div class="quiz-app" id="quiz-app" data-quiz="${dataId}">
  <div class="quiz-barre"><div class="quiz-barre-remplie" id="quiz-progres" style="width:0%"></div></div>
  <div id="quiz-zone"></div>
</div>
<script type="application/json" id="${dataId}">${questionsJson}</script>

<h2>D’autres quiz sur ce thème</h2>
${quizCarouselHtml(autresQuiz, `D’autres quiz Galop ${n.n}`)}

<canvas id="quiz-confettis"></canvas>
<script>
(function () {
  var zone = document.getElementById('quiz-zone');
  var barre = document.getElementById('quiz-progres');
  var data = JSON.parse(document.getElementById('${dataId}').textContent);
  var index = 0, score = 0, repondu = false, serie = 0, meilleureSerie = 0;

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

  function rendreQuestion() {
    repondu = false;
    var q = data[index];
    barre.style.width = Math.round((index / data.length) * 100) + '%';
    var html = '<div class="quiz-question">' +
      '<div class="quiz-question-tete">' +
      '<span class="compteur">Question ' + (index + 1) + ' / ' + data.length + '</span>' +
      (serie > 1 ? '<span class="quiz-serie">🔥 ' + serie + '</span>' : '') +
      '</div>' +
      '<div class="enonce">' + q.q + '</div>' +
      (q.image ? '<figure class="quiz-visuel"><img src="' + q.image + '" alt="' + (q.imageAlt || '') + '" width="960" height="720"></figure>' : '') +
      '<div class="quiz-options">' +
      q.options.map(function (opt, i) {
        return '<button type="button" class="quiz-option" data-i="' + i + '">' + opt + '</button>';
      }).join('') +
      '</div>' +
      '<div class="quiz-feedback" id="quiz-feedback"></div>' +
      '<div class="quiz-suite"><button type="button" class="quiz-btn" id="quiz-suivant" disabled>' +
      (index + 1 < data.length ? 'Question suivante' : 'Voir mon score') + '</button></div>' +
      '</div>';
    zone.innerHTML = html;
    var feedback = document.getElementById('quiz-feedback');
    zone.querySelectorAll('.quiz-option').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (repondu) return;
        repondu = true;
        var i = parseInt(btn.getAttribute('data-i'), 10);
        var bonne = q.bonne;
        var juste = i === bonne;
        zone.querySelectorAll('.quiz-option').forEach(function (b, bi) {
          b.disabled = true;
          if (bi === bonne) b.classList.add('correcte');
          else if (bi === i) b.classList.add('incorrecte');
        });
        if (juste) {
          score++; serie++;
          if (serie > meilleureSerie) meilleureSerie = serie;
          btn.classList.add('pop');
          feedback.className = 'quiz-feedback quiz-feedback-bonne visible';
          feedback.innerHTML = '<strong>' + (serie > 2 ? ('✅ Bien joué ! Série de ' + serie) : '✅ Bien joué !') + '</strong>' +
            (q.explication ? '<span>' + q.explication + '</span>' : '');
        } else {
          serie = 0;
          btn.classList.add('secoue');
          feedback.className = 'quiz-feedback quiz-feedback-mauvaise visible';
          feedback.innerHTML = '<strong>La bonne réponse : ' + q.options[bonne] + '.</strong>' +
            (q.explication ? '<span>' + q.explication + '</span>' : '<span>Repère-la en vert puis relis la question avant de continuer.</span>');
        }
        document.getElementById('quiz-suivant').disabled = false;
      });
    });
    document.getElementById('quiz-suivant').addEventListener('click', function () {
      index++;
      if (index < data.length) rendreQuestion();
      else rendreResultat();
    });
  }

  function rendreResultat() {
    barre.style.width = '100%';
    var pct = Math.round((score / data.length) * 100);
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
    zone.innerHTML = '<div class="quiz-question quiz-resultat">' +
      '<div class="quiz-resultat-emoji">' + emoji + '</div>' +
      '<div class="score">' + score + ' / ' + data.length + '</div>' +
      '<p class="appreciation">' + appreciation + '</p>' +
      '<p class="quiz-record">Meilleur score enregistré : <strong>' + meilleur + ' / ' + data.length + '</strong></p>' +
      (meilleureSerie > 2 ? '<p class="quiz-meilleure-serie">🔥 Meilleure série : ' + meilleureSerie + ' bonnes réponses d’affilée</p>' : '') +
      '<div class="quiz-resultat-actions"><button type="button" class="quiz-btn" id="quiz-recommencer">Recommencer</button>' +
      '<a class="btn-secondaire" href="/fiches/galop-${n.n}/">Revoir la fiche</a>' +
      '<a class="btn-secondaire" href="/progression/">Mon diagnostic</a></div>' +
      '</div>';
    document.getElementById('quiz-recommencer').addEventListener('click', function () {
      index = 0; score = 0; serie = 0; meilleureSerie = 0; rendreQuestion();
    });
  }

  rendreQuestion();
})();
</script>`;

  return layout({
    path: `/galop-${n.n}/${cat.slug}/${quiz.slug}/`,
    title: `${quiz.titre} — Quiz Galop ${n.n} — Quizz Galop`,
    description: `${quiz.titre} : quiz de ${quiz.questions.length} questions pour réviser le Galop ${n.n}. Correction immédiate, gratuit.`,
    body,
    crumbs: [
      { nom: 'Accueil', href: '/' },
      { nom: `Galop ${n.n}`, href: `/galop-${n.n}/` },
      { nom: quiz.titre, href: `/galop-${n.n}/${cat.slug}/${quiz.slug}/` }
    ],
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
  return `<a class="fiche-card" href="/fiches/galop-${p.n}/">
    <span class="fiche-num">${p.n}</span><span><strong>Fiche Galop ${p.n}</strong>
    <small>${p.objectif}</small><em>${totalQuizzes(niveau)} quiz associés →</em></span></a>`;
}

function pageFiches() {
  const body = `<p class="eyebrow">PROGRAMME & MÉMORISATION</p><h1>Fiches de révision Galops 1 à 7</h1>
  <p class="lede">Des synthèses originales, structurées selon les trois grands modules du programme fédéral : connaître le cheval, s’en occuper, pratiquer à pied et à cheval.</p>
  <div class="source-officielle"><span>Source de cadrage</span><p>Contenus organisés à partir du <a href="https://www.ffe.com/system/files/cavalier/documents/pdf/PROGRAMME_OFFICIEL_GALOPS_CAVALIER_1a7_PAR_MODULE.pdf" target="_blank" rel="noopener">programme officiel FFE des Galops 1 à 7</a>. Ces fiches sont des reformulations pédagogiques indépendantes.</p></div>
  <div class="fiches-grid">${PROGRAMMES.map(ficheCard).join('')}</div>`;
  return layout({path:'/fiches/', title:'Fiches de révision Galops 1 à 7 — Quizz Galop', description:'Fiches structurées pour réviser les programmes des Galops 1 à 7 : connaissances, soins, pratique à pied et à cheval.', body, crumbs:[{nom:'Accueil',href:'/'},{nom:'Fiches',href:'/fiches/'}]});
}

function pageFiche(p) {
  const niveau = NIVEAUX.find((n) => n.n === p.n);
  const axes = p.axes.map((a, i) => `<section class="axe-card"><span class="axe-index">0${i + 1}</span><h2>${a.titre}</h2><ul>${a.items.map((x) => `<li>${x}</li>`).join('')}</ul></section>`).join('');
  const quizzes = niveau.categories.flatMap((c) => c.quizzes.slice(0, 2).map((q) => quizCardHtml(niveau, c, q))).join('');
  const suivant = p.n < 7 ? `<a class="btn-secondaire" href="/fiches/galop-${p.n + 1}/">Fiche Galop ${p.n + 1} →</a>` : '';
  const body = `<div class="fiche-hero"><img src="/assets/badge-galop-${p.n}.webp" alt="Badge Galop ${p.n}" width="640" height="800"><div><p class="eyebrow">FICHE DE RÉVISION</p><h1>Programme du Galop ${p.n}</h1><p class="lede">${p.objectif}</p><a class="btn-primaire" href="#programme">Commencer la fiche</a></div></div>
  <div class="fiche-sommaire"><strong>Sur cette fiche</strong><a href="#programme">Programme</a><a href="#essentiels">À retenir</a><a href="#pieges">Pièges</a><a href="#entrainement">Quiz</a></div>
  <div id="programme" class="axes-grid">${axes}</div>
  <section id="essentiels" class="memo-panel"><p class="eyebrow">LES 3 ESSENTIELS</p><h2>À savoir expliquer simplement</h2><ol>${p.essentiels.map((x) => `<li>${x}</li>`).join('')}</ol></section>
  <section id="pieges"><p class="eyebrow">AUTO-CORRECTION</p><h2>Les erreurs fréquentes</h2><div class="pieges-grid">${p.erreurs.map((x) => `<div><span>À éviter</span><p>${x}</p></div>`).join('')}</div></section>
  <section id="entrainement"><p class="eyebrow">PASSER À L’ACTION</p><h2>Vérifie tes acquis</h2><div class="quiz-grid">${quizzes}</div></section>
  <div class="fiche-nav"><a class="btn-primaire" href="/galop-${p.n}/">Tous les quiz Galop ${p.n}</a>${suivant}</div>`;
  return layout({path:`/fiches/galop-${p.n}/`, title:`Fiche de révision Galop ${p.n} — Programme et essentiels`, description:`Fiche Galop ${p.n} structurée d’après les grands axes du programme officiel : connaissances, soins, travail à pied et à cheval.`, body, crumbs:[{nom:'Accueil',href:'/'},{nom:'Fiches',href:'/fiches/'},{nom:`Galop ${p.n}`,href:`/fiches/galop-${p.n}/`}]});
}

/* ================= CONSEILS ================= */
function pageConseils() {
  const cards = CONSEILS.map((a) => `<a class="conseil-card" href="/conseils/${a.slug}/"><span>${a.niveaux}</span><h2>${a.titre}</h2><p>${a.intro}</p><em>Lire le conseil →</em></a>`).join('');
  const body = `<p class="eyebrow">MÉTHODE & VIE AU CLUB</p><h1>Conseils pour progresser à cheval</h1><p class="lede">Des contenus pratiques et durables pour mieux réviser, observer son cheval et préparer ses séances.</p><div class="conseils-grid">${cards}</div>`;
  return layout({path:'/conseils/',title:'Conseils équitation et préparation des Galops — Quizz Galop',description:'Conseils pratiques pour préparer son Galop, réviser efficacement, lire son cheval et organiser ses séances.',body,crumbs:[{nom:'Accueil',href:'/'},{nom:'Conseils',href:'/conseils/'}]});
}

function pageConseil(a) {
  const sections = a.sections.map(([titre, texte], i) => `<section class="article-section"><span>0${i + 1}</span><div><h2>${titre}</h2><p>${texte}</p></div></section>`).join('');
  const body = `<article class="article"><p class="eyebrow">CONSEIL · ${a.niveaux.toUpperCase()}</p><h1>${a.titre}</h1><p class="lede">${a.intro}</p>${sections}<div class="callout"><strong>À retenir</strong><p>Une notion devient solide quand tu peux l’expliquer avec tes mots et la reconnaître dans une situation réelle au club.</p></div><a class="btn-primaire" href="/progression/">Construire mon diagnostic</a></article>`;
  return layout({path:`/conseils/${a.slug}/`,title:`${a.titre} — Quizz Galop`,description:a.intro,body,crumbs:[{nom:'Accueil',href:'/'},{nom:'Conseils',href:'/conseils/'},{nom:a.titre,href:`/conseils/${a.slug}/`}]});
}

/* ================= PROGRESSION LOCALE ================= */
function pageProgression() {
  const catalogue = NIVEAUX.flatMap((n) => n.categories.flatMap((c) => c.quizzes.map((q) => ({id:`g${n.n}-${q.slug}`,niveau:n.n,titre:q.titre,total:q.questions.length,url:`/galop-${n.n}/${c.slug}/${q.slug}/`}))));
  const body = `<p class="eyebrow">TABLEAU DE BORD</p><h1>Ma progression</h1><p class="lede">Ton historique reste uniquement dans ce navigateur. Nous transformons tes résultats en prochaines actions concrètes.</p>
  <div class="progression-resume" id="progression-resume"><div class="skeleton-line"></div></div>
  <div id="progression-niveaux" class="progression-grid"></div>
  <div class="diagnostic" id="diagnostic"></div>
  <div class="progression-actions"><a class="btn-primaire" href="/examen/">Lancer un examen chronométré</a><button class="btn-texte" id="effacer-progression" type="button">Effacer mes résultats</button></div>
  <script>(function(){
    var catalogue=${JSON.stringify(catalogue).replace(/</g,'\\u003c')};
    var key='quizzgalop-progression-v2', hist={}; try{hist=JSON.parse(localStorage.getItem(key)||'{}')}catch(e){}
    var faits=Object.keys(hist).length, tentatives=Object.values(hist).reduce(function(s,x){return s+(x.attempts||0)},0);
    var bests=Object.values(hist).filter(function(x){return x.total}).map(function(x){return 100*x.best/x.total});
    var moyenne=bests.length?Math.round(bests.reduce(function(a,b){return a+b},0)/bests.length):0;
    document.getElementById('progression-resume').innerHTML='<div><strong>'+faits+'</strong><span>quiz commencés</span></div><div><strong>'+tentatives+'</strong><span>tentatives</span></div><div><strong>'+moyenne+' %</strong><span>meilleure moyenne</span></div>';
    document.getElementById('progression-niveaux').innerHTML=[1,2,3,4,5,6,7].map(function(n){var liste=catalogue.filter(function(q){return q.niveau===n}), termines=liste.filter(function(q){return hist[q.id]}), pct=Math.round(100*termines.length/liste.length);return '<a href="/galop-'+n+'/" class="progression-card"><span>Galop '+n+'</span><strong>'+termines.length+' / '+liste.length+' quiz</strong><div><i style="width:'+pct+'%"></i></div><small>'+pct+' % du parcours</small></a>'}).join('');
    var cible=catalogue.filter(function(q){return !hist[q.id]}).sort(function(a,b){return a.niveau-b.niveau})[0];
    var faible=catalogue.filter(function(q){return hist[q.id]}).sort(function(a,b){return (hist[a.id].best/a.total)-(hist[b.id].best/b.total)})[0];
    var reco=faible&&hist[faible.id].best/faible.total<.75?faible:cible;
    document.getElementById('diagnostic').innerHTML=reco?'<div><span>PROCHAINE ÉTAPE CONSEILLÉE</span><h2>'+reco.titre+'</h2><p>'+(hist[reco.id]?'Consolide ce thème : ton meilleur score est de '+hist[reco.id].best+' / '+reco.total+'.':'Découvre ce thème pour faire avancer ton parcours Galop '+reco.niveau+'.')+'</p></div><a class="btn-primaire" href="'+reco.url+'">Commencer →</a>':'<div><span>PARCOURS TERMINÉ</span><h2>Bravo, tous les quiz ont été essayés.</h2><p>Passe en mode examen pour mélanger les thèmes.</p></div>';
    document.getElementById('effacer-progression').onclick=function(){if(confirm('Effacer tous les scores enregistrés sur cet appareil ?')){localStorage.removeItem(key);location.reload()}};
  })();</script>`;
  return layout({path:'/progression/',title:'Ma progression — Quizz Galop',description:'Tableau de bord local : scores, avancement par Galop et recommandation du prochain quiz.',body,crumbs:[{nom:'Accueil',href:'/'},{nom:'Progression',href:'/progression/'}]});
}

/* ================= PREMIUM & EXAMEN BLANC ================= */
function pagePremium() {
  const body = `<div class="premium-hero"><div><p class="eyebrow">QUIZZ GALOP PREMIUM</p><h1>Révise avec un vrai plan, pas au hasard.</h1><p class="lede">Les quiz et les fiches restent accessibles. Premium ajoute les conditions d’examen, le diagnostic avancé et un parcours sans publicité.</p><div class="premium-cta"><button class="btn-premium" id="activer-essai" type="button">Essayer 7 jours sur cet appareil</button><small>Aucune carte demandée · démonstration locale</small></div></div><div class="premium-score"><span>PRÊT POUR LE GALOP 7</span><strong>84<sup>%</sup></strong><p>3 thèmes à consolider</p><i style="width:84%"></i></div></div>
  <div class="features-grid"><div><b>01</b><h2>Examens blancs</h2><p>Questions mélangées, correction à la fin et analyse par thème.</p></div><div><b>02</b><h2>Plan personnalisé</h2><p>Une prochaine étape claire selon tes résultats enregistrés.</p></div><div><b>03</b><h2>Concentration</h2><p>Les emplacements publicitaires disparaissent pendant l’essai.</p></div></div>
  <div class="pricing"><div><span>GRATUIT</span><h2>Découvrir</h2><strong>0 €</strong><ul><li>Quiz thématiques</li><li>Fiches Galops 1 à 7</li><li>Progression locale</li></ul><a class="btn-secondaire" href="/quiz/">Commencer</a></div><div class="pricing-star"><span>RECOMMANDÉ</span><h2>Premium annuel</h2><strong>39,90 € <small>/ an</small></strong><ul><li>Examens blancs illimités</li><li>Diagnostic et plan adaptatif</li><li>Expérience sans publicité</li><li>Nouveaux contenus inclus</li></ul><button class="btn-premium" data-activer type="button">Tester gratuitement</button><small>Tarification de pré-lancement, paiement à connecter.</small></div><div><span>FLEXIBLE</span><h2>Premium mensuel</h2><strong>4,90 € <small>/ mois</small></strong><ul><li>Tous les outils Premium</li><li>Sans engagement</li><li>Résiliation à tout moment</li></ul><button class="btn-secondaire" data-activer type="button">Tester 7 jours</button></div></div>
  <div class="faq"><h2>Questions fréquentes</h2><details><summary>Les fiches et quiz gratuits vont-ils disparaître ?</summary><p>Non. Le cœur pédagogique reste accessible sans compte. Premium finance les outils avancés et l’absence de publicité.</p></details><details><summary>Mes résultats sont-ils envoyés à un serveur ?</summary><p>Dans cette version, non : progression et essai sont enregistrés uniquement dans ton navigateur.</p></details><details><summary>Est-ce un paiement réel ?</summary><p>Pas encore. Cette interface de pré-lancement doit être reliée à un prestataire de paiement avant commercialisation.</p></details></div>
  <script>(function(){function activer(){localStorage.setItem('quizzgalop-premium-demo',JSON.stringify({expires:Date.now()+7*864e5}));location.href='/examen-blanc/'}document.querySelectorAll('#activer-essai,[data-activer]').forEach(function(b){b.onclick=activer})})();</script>`;
  return layout({path:'/premium/',title:'Premium — Examens blancs et plan de révision',description:'Découvre Quizz Galop Premium : examens blancs, diagnostic adaptatif et expérience sans publicité.',body,crumbs:[{nom:'Accueil',href:'/'},{nom:'Premium',href:'/premium/'}]});
}

function pageExamenBlanc() {
  const banque = NIVEAUX.map((n) => ({n:n.n,questions:n.categories.flatMap((c) => c.quizzes.flatMap((q) => q.questions.map((x) => ({...x,theme:q.titre}))))}));
  const body = `<div class="examen-hero"><div><p class="eyebrow">CONDITIONS D’EXAMEN</p><h1>Examen blanc chronométré</h1><p class="lede">20 questions mélangées, un chrono visible et aucune correction avant le résultat final.</p></div><div class="examen-horloge" aria-hidden="true"><span>20</span><small>questions</small><i>⏱</i></div></div><div id="exam-app" class="exam-app"></div>
  <script>(function(){var app=document.getElementById('exam-app'), banque=${JSON.stringify(banque).replace(/</g,'\\u003c')};
  app.innerHTML='<div class="exam-start"><h2>Quel niveau prépares-tu ?</h2><div class="exam-levels">'+banque.map(function(x){return '<button type="button" data-n="'+x.n+'">Galop '+x.n+'</button>'}).join('')+'</div><p>Le chrono démarre à la première question. Ton bilan affichera les thèmes à retravailler.</p></div>';
  app.addEventListener('click',function(e){var b=e.target.closest('[data-n]');if(b)demarrer(+b.dataset.n)});
  function melanger(a){return a.slice().sort(function(){return Math.random()-.5})}
  function formater(ms){var s=Math.floor(ms/1000),m=Math.floor(s/60);return String(m).padStart(2,'0')+':'+String(s%60).padStart(2,'0')}
  function demarrer(n){var qs=melanger(banque.find(function(x){return x.n===n}).questions).slice(0,20),i=0,rep=[],debut=Date.now(),timer=setInterval(tick,250);function tick(){var t=document.getElementById('exam-chrono');if(t)t.textContent=formater(Date.now()-debut)}function render(){var q=qs[i];app.innerHTML='<div class="exam-head"><span>Galop '+n+'</span><time id="exam-chrono">'+formater(Date.now()-debut)+'</time><strong>'+(i+1)+' / '+qs.length+'</strong></div><div class="quiz-barre"><i style="width:'+(100*i/qs.length)+'%"></i></div><div class="quiz-question"><div class="enonce">'+q.q+'</div>'+(q.image?'<figure class="quiz-visuel"><img src="'+q.image+'" alt="'+(q.imageAlt||'')+'"></figure>':'')+'<div class="quiz-options">'+q.options.map(function(o,k){return '<button class="quiz-option" type="button" data-r="'+k+'">'+o+'</button>'}).join('')+'</div></div>';app.querySelectorAll('[data-r]').forEach(function(x){x.onclick=function(){rep.push(+x.dataset.r);i++;i<qs.length?render():resultat()}})}function resultat(){clearInterval(timer);var duree=formater(Date.now()-debut),score=qs.reduce(function(s,q,k){return s+(q.bonne===rep[k]?1:0)},0),themes={};qs.forEach(function(q,k){themes[q.theme]=themes[q.theme]||[0,0];themes[q.theme][1]++;if(q.bonne===rep[k])themes[q.theme][0]++});var faibles=Object.entries(themes).sort(function(a,b){return a[1][0]/a[1][1]-b[1][0]/b[1][1]}).slice(0,3);app.innerHTML='<div class="exam-result"><span>EXAMEN TERMINÉ · '+duree+'</span><strong>'+score+' / '+qs.length+'</strong><h2>'+(score/qs.length>=.75?'Bon niveau général':'Continue à consolider')+'</h2><p>Thèmes prioritaires :</p><ul>'+faibles.map(function(x){return '<li><b>'+x[0]+'</b><span>'+x[1][0]+' / '+x[1][1]+'</span></li>'}).join('')+'</ul><div><button class="btn-primaire" id="again">Nouvel examen</button><a class="btn-secondaire" href="/fiches/galop-'+n+'/">Revoir la fiche</a></div></div>';document.getElementById('again').onclick=function(){demarrer(n)}}render()}
  })();</script>`;
  return layout({path:'/examen/',title:'Examen blanc chronométré — Quizz Galop',description:'Simule un examen théorique Galop avec 20 questions mélangées, un chrono et un bilan par thème.',body,crumbs:[{nom:'Accueil',href:'/'},{nom:'Examen',href:'/examen/'}]});
}

/* ================= Pages légales minimales ================= */
function pageMentionsLegales() {
  const body = `<p class="eyebrow">INFORMATIONS LÉGALES</p>
<h1>Mentions légales</h1>
<p>Site édité à titre non professionnel, conformément à l’article 6-III-2 de la loi n° 2004-575 du 21 juin
2004 pour la confiance dans l’économie numérique (LCEN), qui permet à un éditeur non professionnel de
conserver l’anonymat vis-à-vis du public tant que le site n’est pas monétisé.</p>
<p>Hébergement : Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, États-Unis.</p>
<h2>Contenu</h2>
<p>Ce site propose des quiz de révision pour les examens de Galop. Il est indépendant et n’est affilié à
aucune fédération équestre. Le contenu de révision est fourni à titre indicatif : vérifie-le toujours face
au livret officiel de ton club avant un passage d’examen.</p>`;
  return layout({
    path: '/mentions-legales/',
    title: 'Mentions légales — Quizz Galop',
    description: 'Informations légales du site Quizz Galop.',
    body,
    crumbs: [{ nom: 'Accueil', href: '/' }, { nom: 'Mentions légales', href: '/mentions-legales/' }]
  });
}

function pageConfidentialite() {
  const body = `<p class="eyebrow">DONNÉES PERSONNELLES</p>
<h1>Confidentialité</h1>
<p>Ce site ne demande aucune inscription et ne collecte aucune donnée personnelle pour fonctionner. Les
réponses aux quiz restent dans ton navigateur et ne sont pas envoyées à un serveur.</p>
<h2>Cookies publicitaires</h2>
<p>Si tu acceptes le bandeau de cookies, Google peut déposer des cookies publicitaires. Si tu refuses,
aucun cookie publicitaire n’est déposé et le site fonctionne à l’identique. Tu peux changer d’avis à tout
moment depuis le pied de page.</p>`;
  return layout({
    path: '/confidentialite/',
    title: 'Confidentialité — Quizz Galop',
    description: 'Politique de confidentialité du site Quizz Galop.',
    body,
    crumbs: [{ nom: 'Accueil', href: '/' }, { nom: 'Confidentialité', href: '/confidentialite/' }]
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
ecrire('mentions-legales', pageMentionsLegales()); pages++;
ecrire('confidentialite', pageConfidentialite()); pages++;

const urls = [
  { loc: url('/'), priority: '1.0' },
  { loc: url('/quiz/'), priority: '0.9' },
  { loc: url('/fiches/'), priority: '0.9' },
  { loc: url('/conseils/'), priority: '0.7' },
  { loc: url('/progression/'), priority: '0.6' },
  { loc: url('/examen/'), priority: '0.8' }
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

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="15" fill="#007aff"/><path d="M18 13c-5 6-8 14-8 23 0 13 10 22 22 22s22-9 22-22c0-9-3-17-8-23l-8 6c3 4 5 10 5 16 0 7-5 12-11 12s-11-5-11-12c0-6 2-12 5-16z" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="18" cy="17" r="2.4" fill="#fff"/><circle cx="46" cy="17" r="2.4" fill="#fff"/></svg>`;
fs.writeFileSync(path.join(OUT, 'assets', 'favicon.svg'), favicon, 'utf8');

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#f5f5f7"/><rect x="0" y="0" width="1200" height="630" fill="none" stroke="#007aff" stroke-width="16"/><text x="600" y="300" font-size="86" text-anchor="middle" fill="#1d1d1f" font-family="-apple-system,'Plus Jakarta Sans',sans-serif" font-weight="800">Quizz Galop</text><text x="600" y="380" font-size="34" text-anchor="middle" fill="#007aff" font-family="-apple-system,'Plus Jakarta Sans',sans-serif" font-weight="600">Fiches & quiz · Galops 1 à 7</text></svg>`;
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
