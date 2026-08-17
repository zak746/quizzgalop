/** Configuration commune + gabarit des pages statiques — Quizz Galop. */

export const SITE = {
  origin: 'https://quizzgalop.fr',
  nom: 'Quizz Galop',
  nomLong: 'Quizz Galop — révise tes Galops FFE',
  langue: 'fr',
  auteur: 'Quizz Galop'
};

export const url = (p = '/') => SITE.origin + p;

/** Un identifiant par build : casse le cache un an sur /assets/site.css. */
export const BUILD_ID = Date.now().toString(36);

export function slugify(s) {
  return String(s)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/['’`]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export { CSS } from './site-css.mjs';

const NIVEAUX = [1, 2, 3, 4, 5, 6, 7];

const NAV = [
  ['/', 'Accueil'],
  ['/quiz/', 'Quiz'],
  ['/fiches/', 'Fiches'],
  ['/conseils/', 'Conseils'],
  ['/progression/', 'Progression'],
  ['/examen/', 'Examen']
];

function navHtml(pathCourant) {
  const liens = NAV.map(([href, nom]) => {
    const actif = href === pathCourant || (href !== '/' && pathCourant.startsWith(href)) ||
      (href === '/quiz/' && /^\/galop-\d+\//.test(pathCourant));
    return `<a href="${href}"${actif ? ' class="site-nav-current" aria-current="page"' : ''}>${nom}</a>`;
  }).join('\n        ');
  return `<div class="site-nav-row">
      <a class="site-brand" href="/" aria-label="Quizz Galop — Accueil">
        <img src="/assets/logo-embleme.svg" alt="" width="120" height="120">
        <span class="site-brand-copy"><strong>QUIZZ GALOP</strong><small>RÉVISION ÉQUESTRE</small></span>
      </a>
      <div class="site-nav-sep"></div>
      <nav class="site-nav" id="site-nav" aria-label="Navigation principale">
        ${liens}
      </nav>
      <a class="nav-cta" href="/quiz/"><img src="/assets/icon-horseshoe.svg" alt="" width="22" height="22">Faire un quiz</a>
      ${BOUTON_MENU}
    </div>`;
}

export const BOUTON_MENU = `<button class="nav-burger" id="nav-burger" type="button"
        aria-expanded="false" aria-controls="site-nav" aria-label="Ouvrir le menu">
        <svg class="ouvrir" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        <svg class="fermer" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
      </button>`;

export const SCRIPT_MENU = `<script>
document.addEventListener('click', function (e) {
  var b = document.getElementById('nav-burger');
  var nav = document.getElementById('site-nav');
  if (!b || !nav) return;
  if (e.target.closest('#nav-burger')) {
    var ouvert = nav.classList.toggle('ouvert');
    b.setAttribute('aria-expanded', ouvert ? 'true' : 'false');
    b.setAttribute('aria-label', ouvert ? 'Fermer le menu' : 'Ouvrir le menu');
    if (ouvert) setTimeout(function () { var premier = nav.querySelector('a'); if (premier) premier.focus(); }, 0);
    return;
  }
  if (e.target.closest('#site-nav a')) {
    nav.classList.remove('ouvert');
    b.setAttribute('aria-expanded', 'false');
    b.setAttribute('aria-label', 'Ouvrir le menu');
    return;
  }
  if (nav.classList.contains('ouvert') && !e.target.closest('#site-nav')) {
    nav.classList.remove('ouvert');
    b.setAttribute('aria-expanded', 'false');
  }
});
document.addEventListener('keydown', function (e) {
  if (e.key !== 'Escape') return;
  var b = document.getElementById('nav-burger');
  var nav = document.getElementById('site-nav');
  if (!b || !nav || !nav.classList.contains('ouvert')) return;
  nav.classList.remove('ouvert');
  b.setAttribute('aria-expanded', 'false');
  b.setAttribute('aria-label', 'Ouvrir le menu');
  b.focus();
});
window.addEventListener('resize', function () {
  if (window.innerWidth <= 860) return;
  var b = document.getElementById('nav-burger');
  var nav = document.getElementById('site-nav');
  if (!b || !nav) return;
  nav.classList.remove('ouvert');
  b.setAttribute('aria-expanded', 'false');
});
</script>`;

export const BOUTON_THEME = `<button class="theme-toggle" id="theme-toggle" type="button"
        aria-label="Basculer entre le thème clair et sombre" title="Thème clair / sombre">
        <svg class="soleil" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
        <svg class="lune" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
      </button>`;

/** Régie publicitaire — vide tant que le compte AdSense n'est pas validé. */
export const PUB = { client: '', slotGauche: '', slotDroite: '' };
const pubActive = () => Boolean(PUB.client && PUB.slotGauche && PUB.slotDroite);

export const PUB_HTML = ['gauche', 'droite'].map((cote) => {
  const slot = cote === 'gauche' ? PUB.slotGauche : PUB.slotDroite;
  const contenu = pubActive()
    ? `<ins class="adsbygoogle" style="display:inline-block;width:160px;height:600px"
       data-ad-client="${PUB.client}" data-ad-slot="${slot}"></ins>`
    : `<div class="pub-creatif" data-pub="${cote}">
    <span class="pub-titre">Emplacement libre</span>
    <span class="pub-sous">Espace réservé à une annonce</span>
  </div>
  <span class="pub-format">160 × 600</span>
  <span class="pub-compteur" data-pub-compteur="${cote}"></span>`;
  return `<aside class="pub pub-${cote}" aria-hidden="true" data-nosnippet>
  <span class="pub-etiquette">Publicité</span>
  ${contenu}
</aside>`;
}).join('\n');

export const SCRIPT_ADSENSE = '';

export const CONSENTEMENT_HTML = `<div class="consent" id="consent" role="dialog"
  aria-live="polite" aria-label="Consentement aux cookies publicitaires" hidden>
  <div class="consent-txt">
    <p class="consent-titre">Cookies publicitaires</p>
    <p>Ce site est gratuit et financé par la publicité. Avec votre accord, Google dépose des
    cookies pour afficher des annonces. Si vous refusez, aucun cookie publicitaire n’est déposé
    et le site fonctionne à l’identique.
    <a href="/confidentialite/">En savoir plus</a></p>
  </div>
  <div class="consent-btns">
    <button type="button" class="consent-refus" data-consent="refuse">Refuser</button>
    <button type="button" class="consent-ok" data-consent="accepte">Accepter</button>
  </div>
</div>`;

export const SCRIPT_CONSENTEMENT = `<script>
(function () {
  var CLE = 'quizzgalop-consent';
  var CLIENT = ${JSON.stringify(PUB.client || '')};
  var banniere = document.getElementById('consent');
  function lire() { try { return localStorage.getItem(CLE); } catch (e) { return null; } }
  function chargerPub() {
    if (!CLIENT || window.__pubChargee) return;
    window.__pubChargee = true;
    var s = document.createElement('script');
    s.async = true;
    s.crossOrigin = 'anonymous';
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + CLIENT;
    document.head.appendChild(s);
    document.querySelectorAll('.adsbygoogle').forEach(function () {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    });
  }
  function afficher() { if (banniere) banniere.hidden = false; }
  function masquer() { if (banniere) banniere.hidden = true; }
  if (!CLIENT) { masquer(); return; }
  var choix = lire();
  if (choix === 'accepte') chargerPub();
  else if (choix !== 'refuse') afficher();
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-consent]');
    if (b) {
      var v = b.dataset.consent;
      try { localStorage.setItem(CLE, v); } catch (err) {}
      masquer();
      if (v === 'accepte') chargerPub();
      return;
    }
    if (e.target.closest && e.target.closest('#rouvrir-consentement, [data-rouvrir-consent]')) {
      e.preventDefault();
      try { localStorage.removeItem(CLE); } catch (err) {}
      afficher();
    }
  });
})();
</script>`;

export const SCRIPT_PUB = pubActive() ? '' : `<script>
(function () {
  var CREATIFS = [
    { t: 'Emplacement libre',       s: 'Espace réservé à une annonce' },
    { t: 'Votre annonce ici',       s: 'Format skyscraper 160 × 600' },
    { t: 'Espace disponible',       s: 'Contactez-nous pour cet emplacement' },
    { t: 'Publicité',               s: 'Emplacement de démonstration' }
  ];
  var PERIODE = 30;
  var rails = document.querySelectorAll('[data-pub]');
  if (!rails.length) return;
  var i = Math.floor(Math.random() * CREATIFS.length);
  var reste = PERIODE;
  function peindre() {
    rails.forEach(function (el, n) {
      var c = CREATIFS[(i + n) % CREATIFS.length];
      el.classList.add('pub-transition');
      setTimeout(function () {
        el.querySelector('.pub-titre').textContent = c.t;
        el.querySelector('.pub-sous').textContent = c.s;
        el.classList.remove('pub-transition');
      }, 350);
    });
  }
  function tic() {
    reste--;
    if (reste <= 0) { i++; peindre(); reste = PERIODE; }
    document.querySelectorAll('[data-pub-compteur]').forEach(function (el) {
      el.textContent = 'actualisation dans ' + reste + ' s';
    });
  }
  peindre();
  tic();
  setInterval(tic, 1000);
})();
</script>`;

export const SCRIPT_THEME_INLINE =
  `<script>(function(){try{var t=localStorage.getItem('quizzgalop-theme');` +
  `if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t);}catch(e){}})();</script>`;

export const SCRIPT_THEME = `<script>
document.addEventListener('click', function (e) {
  if (!e.target.closest || !e.target.closest('#theme-toggle')) return;
  var r = document.documentElement;
  var sombreActuel = r.getAttribute('data-theme')
    ? r.getAttribute('data-theme') === 'dark'
    : matchMedia('(prefers-color-scheme: dark)').matches;
  var suivant = sombreActuel ? 'light' : 'dark';
  r.setAttribute('data-theme', suivant);
  try { localStorage.setItem('quizzgalop-theme', suivant); } catch (err) {}
});
</script>`;

export const SCRIPT_CAROUSEL = `<script>
(function () {
  function actualiser(shell) {
    var track = shell.querySelector('.quiz-carousel');
    var prev = shell.querySelector('[data-carousel-prev]');
    var next = shell.querySelector('[data-carousel-next]');
    if (!track || !prev || !next) return;
    prev.disabled = track.scrollLeft < 8;
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
  }
  document.querySelectorAll('.quiz-carousel-shell').forEach(function (shell) {
    var track = shell.querySelector('.quiz-carousel');
    actualiser(shell);
    shell.querySelector('[data-carousel-prev]').onclick = function () {
      track.scrollBy({left:-Math.max(240, track.clientWidth * .82),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
    };
    shell.querySelector('[data-carousel-next]').onclick = function () {
      track.scrollBy({left:Math.max(240, track.clientWidth * .82),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
    };
    track.addEventListener('scroll', function(){ actualiser(shell); }, {passive:true});
  });
})();
</script>`;

export const SCRIPT_UI_POLISH = `<script>
(function () {
  var selecteur = '.editorial-hero,.categorie-heading,.quiz-card,.niveau-card,.fiche-card,.conseil-card,.progression-card,.article-section,.axe-card,.other-levels-wrap,.method-steps article,.method-proof>*';
  var elements = Array.prototype.slice.call(document.querySelectorAll(selecteur));
  if (!elements.length || !('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  elements.forEach(function (el, index) {
    el.classList.add('ui-reveal');
    el.style.setProperty('--reveal-delay', Math.min(index % 5, 4) * 45 + 'ms');
  });
  var observateur = new IntersectionObserver(function (entrees) {
    entrees.forEach(function (entree) {
      if (!entree.isIntersecting) return;
      entree.target.classList.add('ui-visible');
      observateur.unobserve(entree.target);
    });
  }, {rootMargin:'0px 0px -5% 0px', threshold:.06});
  elements.forEach(function (el) { observateur.observe(el); });
})();
</script>`;

function breadcrumbHtml(crumbs) {
  if (!crumbs?.length) return '';
  const items = crumbs
    .map((c, i) =>
      i === crumbs.length - 1
        ? `<li aria-current="page">${c.nom}</li>`
        : `<li><a href="${c.href}">${c.nom}</a></li>`
    )
    .join('');
  return `<nav class="crumb" aria-label="Fil d’Ariane"><ol>${items}</ol></nav>`;
}

function breadcrumbJsonLd(crumbs) {
  if (!crumbs?.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.nom,
      item: url(c.href)
    }))
  };
}

/**
 * Gabarit HTML complet.
 * @param {{path:string,title:string,description:string,h1?:string,body:string,
 *          crumbs?:{nom:string,href:string}[],jsonLd?:object[],modifie?:string}} o
 */
export function layout(o) {
  const canonical = url(o.path);
  const jsonLd = [breadcrumbJsonLd(o.crumbs), ...(o.jsonLd || [])].filter(Boolean);
  const ld = jsonLd
    .map((j) => `<script type="application/ld+json">${JSON.stringify(j)}</script>`)
    .join('\n');

  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${o.title}</title>
<meta name="description" content="${o.description}">
<link rel="canonical" href="${canonical}">
<meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1">
<meta name="author" content="${SITE.auteur}">
<meta property="og:type" content="${o.ogType || 'article'}">
<meta property="og:site_name" content="${SITE.nomLong}">
<meta property="og:locale" content="fr_FR">
<meta property="og:title" content="${o.title}">
<meta property="og:description" content="${o.description}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${url('/assets/og-quizzgalop.svg')}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${o.title}">
<meta name="twitter:description" content="${o.description}">
<meta name="twitter:image" content="${url('/assets/og-quizzgalop.svg')}">
<meta name="theme-color" content="#f9f3e9">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="/assets/site.css?v=${BUILD_ID}">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
${SCRIPT_ADSENSE}
${ld}
</head>
<body class="${o.bodyClass || ''}">
<a class="skip" href="#contenu">Aller au contenu</a>
${CONSENTEMENT_HTML}
${PUB_HTML}
${o.masquerHeader ? '' : `
<div class="shell">
<header class="site">
  ${navHtml(o.path)}
</header>
</div>`}
<div class="shell shell-main">
<main class="site" id="contenu">
${o.masquerFilCrumb ? '' : breadcrumbHtml(o.crumbs)}
${o.body}
</main>
</div>
${o.masquerFooter ? '' : `<div class="shell">
<footer class="site footer-luxury">
  <div class="footer-ornement"><img src="/assets/icon-horseshoe.svg" alt="" width="96" height="96"></div>
  <div class="footer-grid-luxury">
    <div class="footer-marque"><img class="footer-fer" src="/assets/icon-horseshoe.svg" alt="" width="96" height="96"><strong>RÉVISION ÉQUESTRE<br><em>EN LIGNE</em></strong><div class="ornement-line"><i></i><b>✦</b><i></i></div><p>La plateforme de référence pour réviser et réussir ses examens de Galop, du Galop 1 à 7, selon le programme officiel.</p></div>
    <div><h2>Niveaux</h2><ul>${NIVEAUX.map((n) => `<li><a href="/galop-${n}/">Galop ${n}</a></li>`).join('')}<li><a href="/quiz/">Tous les niveaux</a></li></ul></div>
    <div><h2>Quiz</h2><ul><li><a href="/quiz/">Quiz par thème</a></li><li><a href="/examen/">Quiz aléatoires</a></li><li><a href="/examen/">Examens blancs</a></li><li><a href="/progression/">Suivre ma progression</a></li></ul></div>
    <div><h2>Ressources</h2><ul><li><a href="/fiches/">Programme FFE</a></li><li><a href="/conseils/">Conseils pour réviser</a></li><li><a href="/fiches/">Fiches pratiques</a></li></ul></div>
    <div><h2>Légal</h2><ul><li><a href="/mentions-legales/">Mentions légales</a></li><li><a href="/confidentialite/">Confidentialité</a></li>${pubActive() ? '<li><a href="#" data-rouvrir-consent>Cookies</a></li>' : ''}</ul></div>
  </div>
  <div class="footer-newsletter footer-resources"><div class="newsletter-icon"><img src="/assets/icon-cap.svg" alt="" width="64" height="64"></div><div><h2>Continue ta révision</h2><p>Retrouve une ressource adaptée à ton objectif du moment.</p></div><div class="footer-resource-actions"><a href="/fiches/">Voir les fiches <span>→</span></a><a href="/examen/">Examen blanc <span>→</span></a></div></div>
  <div class="footer-bas"><span class="footer-compliance"><img src="/assets/icon-medal.svg" alt="" width="24" height="24">Conforme au programme officiel FFE</span><span>© ${new Date().getFullYear()} Quizz Galop — Tous droits réservés.</span><div class="footer-social footer-shortcuts"><a href="/fiches/" aria-label="Fiches de révision">F</a><a href="/quiz/" aria-label="Tous les quiz">Q</a><a href="/examen/" aria-label="Examen blanc">E</a></div></div>
</footer>
</div>`}
${SCRIPT_CAROUSEL}
${SCRIPT_MENU}
${SCRIPT_UI_POLISH}
${SCRIPT_CONSENTEMENT}
${SCRIPT_PUB}
</body>
</html>`;
}
