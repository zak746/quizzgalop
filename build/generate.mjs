/**
 * Générateur statique — Quizz Galop (MVP Galop 1 à 4).
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

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const OUT = ROOT;

/** Bannière large optionnelle par niveau — utilisée dès qu'elle existe dans assets/. */
function banniereLarge(n) {
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
  return fs.existsSync(path.join(ROOT, 'assets', nom)) ? `/assets/${nom}` : `/assets/badge-galop-${n.n}.webp`;
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
    title: 'Quizz Galop — révise ton Galop 1, 2, 3 et 4 en ligne, gratuit',
    description: 'Quiz gratuits pour réviser la théorie des Galops 1 à 4 : anatomie du cheval, robes, allures, matériel. Réponses immédiates, conforme à l’esprit du programme FFE.',
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
  <div class="quiz-grid">
  ${items}
  </div>
</div>`;
  }).join('\n');

  const banniere = banniereQuiz();
  const hero = banniere ? `<div class="hero-bleed hub-hero-large">
  <nav class="crumb-survol" aria-label="Fil d’Ariane"><a href="/">Accueil</a><span>›</span><span aria-current="page">Tous les quiz</span></nav>
  <img src="${banniere}" alt="Tous les quiz équestres" width="1600" height="900" loading="eager">
  ${HERO_TRANSITION}
  <div class="hub-hero-large-texte">
    <p class="eyebrow">TOUS LES QUIZ</p><h1>Tous les quiz, par niveau</h1>
    <p class="lede">La liste complète des quiz disponibles pour les Galops 1 à 4.</p>
  </div>
</div>` : `<p class="eyebrow">TOUS LES QUIZ</p><h1>Tous les quiz, par niveau</h1>
<p class="lede">La liste complète des quiz disponibles pour les Galops 1 à 4.</p>`;

  const body = `${hero}
${sections}`;

  return layout({
    path: '/quiz/',
    title: 'Tous les quiz Galop 1, 2, 3, 4 — Quizz Galop',
    description: 'La liste complète des quiz de révision pour les Galops 1 à 4 : anatomie, robes, allures, matériel, sécurité.',
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
  <div class="quiz-grid">
  ${items}
  </div>
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
<div class="quiz-grid">
${cat.quizzes.filter((q) => q.slug !== quiz.slug).map((q) => quizCardHtml(n, cat, q)).join('\n') || '<p>C’était le seul quiz de cette catégorie pour l’instant.</p>'}

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
          feedback.textContent = serie > 2 ? ('✅ Bien joué ! Série de ' + serie) : '✅ Bien joué !';
        } else {
          serie = 0;
          btn.classList.add('secoue');
          feedback.className = 'quiz-feedback quiz-feedback-mauvaise visible';
          feedback.textContent = '❌ La bonne réponse est surlignée en vert.';
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
    zone.innerHTML = '<div class="quiz-question quiz-resultat">' +
      '<div class="quiz-resultat-emoji">' + emoji + '</div>' +
      '<div class="score">' + score + ' / ' + data.length + '</div>' +
      '<p class="appreciation">' + appreciation + '</p>' +
      (meilleureSerie > 2 ? '<p class="quiz-meilleure-serie">🔥 Meilleure série : ' + meilleureSerie + ' bonnes réponses d’affilée</p>' : '') +
      '<button type="button" class="quiz-btn" id="quiz-recommencer">Recommencer ce quiz</button>' +
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
ecrire('mentions-legales', pageMentionsLegales()); pages++;
ecrire('confidentialite', pageConfidentialite()); pages++;

const urls = [
  { loc: url('/'), priority: '1.0' },
  { loc: url('/quiz/'), priority: '0.8' }
];

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

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="15" fill="#173f30"/><path d="M18 13c-5 6-8 14-8 23 0 13 10 22 22 22s22-9 22-22c0-9-3-17-8-23l-8 6c3 4 5 10 5 16 0 7-5 12-11 12s-11-5-11-12c0-6 2-12 5-16z" fill="none" stroke="#f2d28a" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="18" cy="17" r="2.4" fill="#fff7df"/><circle cx="46" cy="17" r="2.4" fill="#fff7df"/></svg>`;
fs.writeFileSync(path.join(OUT, 'assets', 'favicon.svg'), favicon, 'utf8');

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#f6f3ec"/><rect x="0" y="0" width="1200" height="630" fill="none" stroke="#3f7d54" stroke-width="16"/><text x="600" y="300" font-size="86" text-anchor="middle" fill="#241f18" font-family="Georgia,serif" font-weight="700">Quizz Galop</text><text x="600" y="380" font-size="34" text-anchor="middle" fill="#3f7d54" font-family="sans-serif">Révise tes Galops 1 à 4 en ligne, gratuit</text></svg>`;
fs.writeFileSync(path.join(OUT, 'assets', 'og-quizzgalop.svg'), og, 'utf8');

/* ---------- robots.txt + sitemap.xml ---------- */
fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${url('/sitemap.xml')}\n`, 'utf8');

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.loc}</loc><priority>${u.priority}</priority></url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), sitemapXml, 'utf8');

console.log(`${pages} pages générées (${NIVEAUX.length} niveaux, ${urls.length - 2} quiz/niveaux indexés).`);
