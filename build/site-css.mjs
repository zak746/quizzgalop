/**
 * Feuille de style des pages statiques — Quizz Galop.
 * Reprend pixel pour pixel le langage visuel de Coran Tajwid : fond #F5F5F7,
 * cartes blanches très arrondies, ombre douce, bleu Apple, Plus Jakarta Sans.
 */

export const CSS = `/* Quizz Galop — pages statiques (design aligné sur Coran Tajwid) */
:root{
  color-scheme:light;
  --bg:#f5f5f7;--card:#fff;--ink:#1d1d1f;--muted:#6b7280;--soft:#9ca3af;
  --line:#ececf0;--accent:#007aff;--accent-ink:#007aff;--shadow:0 8px 30px rgba(0,0,0,.04);
  --carte-bord:rgba(255,255,255,.5);--voile:rgba(255,255,255,.5);
  --accent-faible:#eff6ff;--accent-bord:#dbeafe;
  --bon:#1c8a4b;--bon-bg:#e6f8ee;--mauvais:#d0342c;--mauvais-bg:#fdecea;
  --r-lg:3rem;--r-md:2rem;--r-sm:1.25rem;
  --serif:'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
  --sans:'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){
  color-scheme:dark;
  --bg:#1f2125;--card:#212529;--ink:#e7e9ea;--muted:#a2a8ae;--soft:#777;
  --line:#464b50;--accent:#2ca4ab;--accent-ink:#2ca4ab;--shadow:0 8px 30px rgba(0,0,0,.35);
  --carte-bord:#33383d;--voile:rgba(255,255,255,.03);
  --accent-faible:#1a2b2c;--accent-bord:#2a4245;
  --bon:#5fcb8a;--bon-bg:#17281e;--mauvais:#e0837a;--mauvais-bg:#3a2420;
}}
:root[data-theme="dark"]{
  color-scheme:dark;
  --bg:#1f2125;--card:#212529;--ink:#e7e9ea;--muted:#a2a8ae;--soft:#777;
  --line:#464b50;--accent:#2ca4ab;--accent-ink:#2ca4ab;--shadow:0 8px 30px rgba(0,0,0,.35);
  --carte-bord:#33383d;--voile:rgba(255,255,255,.03);
  --accent-faible:#1a2b2c;--accent-bord:#2a4245;
  --bon:#5fcb8a;--bon-bg:#17281e;--mauvais:#e0837a;--mauvais-bg:#3a2420;
}
*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{margin:0;padding:16px;background:var(--bg);color:var(--ink);
  font-family:var(--sans);
  line-height:1.65;font-size:17px;display:flex;flex-direction:column;gap:16px;min-height:100vh}
img{max-width:100%;height:auto}
a{color:var(--accent-ink);text-decoration:none}
a:hover{text-decoration:underline}
.skip{position:absolute;left:-9999px}
.skip:focus{left:20px;top:20px;background:var(--card);padding:10px 16px;border-radius:12px;z-index:99}
.shell{max-width:1280px;margin:0 auto;width:100%;min-width:0}
.shell-main{flex:1;display:flex;min-width:0}

header.site{background:var(--voile);border:1px solid var(--carte-bord);
  border-radius:var(--r-md);box-shadow:var(--shadow);min-height:5.5rem;padding:16px 34px;
  display:flex;align-items:center;flex-shrink:0}
.site-nav-row{display:flex;align-items:center;gap:20px;width:100%;min-width:0}
.site-brand{font-family:var(--serif);font-weight:700;letter-spacing:-.01em;font-size:22px;color:var(--ink);white-space:nowrap}
.site-brand:hover{text-decoration:none}
.site-brand span{color:var(--accent)}
.site-nav-sep{width:1px;height:18px;background:var(--line);flex-shrink:0}
.site-nav{display:flex;align-items:center;gap:26px;flex-wrap:wrap;min-width:0}
.site-nav a{font-size:15px;font-weight:600;color:var(--soft);white-space:nowrap;transition:color .2s}
.site-nav a:hover{color:var(--ink);text-decoration:none}
.site-nav a.site-nav-current{color:var(--accent-ink)}

main.site{background:var(--card);border:1px solid var(--carte-bord);border-radius:var(--r-lg);
  box-shadow:var(--shadow);padding:56px 64px 64px;flex:1;min-width:0;overflow-wrap:break-word;
  overflow:hidden}
.crumb{font-size:12px;color:var(--soft);margin:0 0 22px;font-weight:600}
.crumb ol{list-style:none;display:flex;flex-wrap:wrap;gap:8px;margin:0;padding:0}
.crumb li:not(:last-child)::after{content:"›";margin-left:8px;color:var(--soft)}
.crumb a{color:var(--soft)}
.crumb a:hover{color:var(--ink);text-decoration:none}

h1{font-family:var(--serif);font-size:clamp(2rem,4.6vw,2.9rem);line-height:1.08;letter-spacing:-.01em;margin:.2em 0 .35em;font-weight:700}
h2{font-family:var(--serif);font-size:clamp(1.3rem,2.8vw,1.6rem);letter-spacing:-.005em;margin:2.4em 0 .7em;font-weight:600}
h3{font-size:1.08rem;letter-spacing:-.01em;margin:1.9em 0 .4em;font-weight:700}
p{margin:0 0 1.1em}
.lede{font-size:1.14rem;color:var(--muted);line-height:1.7}
.eyebrow{font-size:11px;font-weight:700;letter-spacing:.3em;text-transform:uppercase;color:var(--accent-ink);margin:0}
ol,ul{padding-left:1.3em}
li{margin:.35em 0}

.card{background:var(--bg);border:1px solid var(--line);border-radius:var(--r-md);padding:28px 32px;margin:24px 0}
.callout{background:var(--accent-faible);border:1px solid var(--accent-bord);border-radius:var(--r-md);padding:22px 28px;margin:24px 0}
.callout p:last-child{margin-bottom:0}

/* ---- Cartes niveau (accueil) ---- */
.niveaux-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:18px;margin:28px 0}
.niveau-card{background:var(--bg);border:1px solid var(--line);border-radius:var(--r-md);overflow:hidden;
  transition:transform .15s,box-shadow .15s;display:block}
.niveau-card:hover{transform:translateY(-3px);box-shadow:var(--shadow);text-decoration:none}
.niveau-badge{display:block;width:100%;aspect-ratio:4/5;object-fit:cover;object-position:top center}
.niveau-card-corps{padding:18px 22px 22px}
.niveau-card .num{font-family:var(--serif);font-size:1.7rem;font-weight:700;color:var(--accent-ink);line-height:1}
.niveau-card .titre{font-weight:700;margin-top:8px;color:var(--ink);font-size:14.5px}
.niveau-card .meta{font-size:12.5px;color:var(--soft);margin-top:6px}

/* ---- Hero page niveau ---- */
.niveau-hero{display:grid;grid-template-columns:200px 1fr;gap:32px;align-items:center;margin-bottom:12px}
.niveau-hero img{width:100%;border-radius:var(--r-md);box-shadow:var(--shadow)}
.niveau-hero h1{margin-top:0}
@media (max-width:640px){
  .niveau-hero{grid-template-columns:1fr;text-align:center}
  .niveau-hero img{max-width:220px;margin:0 auto}
}

/* ---- Bannières pleine largeur : touchent les bords de la carte (haut + côtés) en
   annulant le padding de main.site par une marge négative égale. main.site a
   overflow:hidden, donc l'image se fait automatiquement recouper par le même arrondi
   que la carte — pas besoin de dupliquer le rayon sur l'image elle-même. ---- */
.hero-bleed{position:relative;margin:-56px -64px 28px}
.hero-bleed img{display:block;width:100%;height:auto}
@media (max-width:860px){ .hero-bleed{margin:-32px -22px 22px} }

/* Flou + fondu en bas de bannière : transition douce vers le contenu qui suit.
   Deux calques superposés : un flou progressif (masqué en dégradé), puis un
   fondu de couleur pure qui termine le mélange avec le fond de la carte. */
.hero-blur-bas{position:absolute;left:0;right:0;bottom:0;height:22%;min-height:90px;
  backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px);
  mask-image:linear-gradient(to bottom,transparent,#000 70%);
  -webkit-mask-image:linear-gradient(to bottom,transparent,#000 70%);
  pointer-events:none}
.hero-fade-bas{position:absolute;left:0;right:0;bottom:0;height:12%;min-height:56px;
  background:linear-gradient(to bottom,transparent,var(--card) 92%);pointer-events:none}

/* ---- Fil d'Ariane en surimpression sur une bannière pleine largeur ---- */
.crumb-survol{position:absolute;left:20px;top:20px;z-index:3;display:flex;align-items:center;gap:6px;
  background:rgba(20,16,10,.45);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);
  color:#fff;font-size:12px;font-weight:600;padding:8px 14px;border-radius:999px}
.crumb-survol a{color:#fff;opacity:.85}
.crumb-survol a:hover{opacity:1;text-decoration:none}
.crumb-survol span{opacity:.6}
.crumb-survol span[aria-current]{opacity:1;font-weight:700}

/* ---- Hero page niveau : visuel de collection + vrai texte HTML ---- */
.niveau-hero-large-texte{position:absolute;left:5%;top:50%;z-index:2;transform:translateY(-50%);width:min(43%,520px);
  background:rgba(255,251,242,.9);backdrop-filter:blur(10px);color:#241f18;border:1px solid rgba(184,145,66,.42);
  border-radius:1.7rem;padding:24px 28px;box-shadow:0 18px 50px rgba(35,25,10,.14)}
.niveau-hero-large-texte .eyebrow{color:#3f6f50}.niveau-hero-large-texte h1{font-size:clamp(1.8rem,3vw,2.7rem)}
.niveau-hero-large-texte .lede{color:#5e5548;font-size:14px;margin:0}
.hub-hero-large-texte{position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden}

/* ---- Hero accueil : texte réel superposé sur la zone claire de la bannière ---- */
.accueil-hero-texte{position:absolute;left:6%;top:50%;transform:translateY(-50%);width:38%;z-index:2}
.accueil-hero-texte .eyebrow{color:#007aff}
.accueil-hero-texte h1{color:#241f18;margin-top:.1em}
.accueil-hero-texte .lede{color:#4a4335}
.accueil-hero-cta{display:inline-flex;align-items:center;gap:8px;background:#241f18;color:#fff;
  border-radius:999px;padding:14px 26px;font-size:14.5px;font-weight:800;margin-top:6px;
  box-shadow:0 4px 0 rgba(0,0,0,.25);transition:transform .15s}
.accueil-hero-cta:hover{transform:translateY(-2px);text-decoration:none}
@media (max-width:900px){
  .accueil-hero-texte{position:relative;left:auto;top:auto;transform:none;width:auto;padding:22px 4px 0;text-align:center}
  .accueil-hero-texte .lede{margin-left:auto;margin-right:auto;max-width:46ch}
  .accueil-hero .hero-blur-bas,.accueil-hero .hero-fade-bas{display:none}
}

/* ---- Catégories de quiz (page niveau) ---- */
.categorie{margin:32px 0}
.categorie-intro{color:var(--muted);margin-bottom:16px}
.quiz-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px}
.quiz-card{background:var(--bg);border:1px solid var(--line);border-radius:var(--r-md);overflow:hidden;
  display:flex;flex-direction:column;transition:transform .15s,box-shadow .15s}
.quiz-card:hover{transform:translateY(-3px);box-shadow:var(--shadow);text-decoration:none}
.quiz-card-img{display:block;width:100%;aspect-ratio:4/3;object-fit:cover;object-position:top center}
.quiz-card-corps{display:flex;flex-direction:column;gap:6px;padding:14px 16px 18px}
.quiz-card .titre{font-weight:700;color:var(--ink);font-size:14.5px;line-height:1.3}
.quiz-card .n-questions{font-size:11.5px;color:var(--soft);font-weight:600}

/* ---- Carrousel quiz partagé : desktop aux flèches, mobile au swipe natif ---- */
.quiz-carousel-shell{position:relative;margin:12px 0 28px}
.quiz-carousel{display:flex;gap:16px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;
  overscroll-behavior-inline:contain;padding:4px 2px 16px;scrollbar-width:thin;scrollbar-color:var(--line) transparent}
.quiz-carousel .quiz-card{flex:0 0 clamp(220px,23vw,258px);scroll-snap-align:start}
.quiz-carousel-controls{display:flex;justify-content:flex-end;gap:8px;margin:0 0 8px}
.quiz-carousel-controls button{width:38px;height:38px;border-radius:50%;border:1px solid var(--line);background:var(--card);color:var(--ink);font:800 16px var(--sans);cursor:pointer}
.quiz-carousel-controls button:hover:not(:disabled){border-color:var(--accent);color:var(--accent-ink)}
.quiz-carousel-controls button:disabled{opacity:.3;cursor:default}

/* ---- Introduction des pages quiz : couverture dédiée + hiérarchie éditoriale ---- */
.quiz-intro{display:grid;grid-template-columns:minmax(230px,38%) 1fr;gap:clamp(24px,4vw,48px);align-items:center;margin-bottom:30px}
.quiz-intro>img{width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:var(--r-md);box-shadow:var(--shadow)}
.quiz-intro h1{margin-top:.18em}
.quiz-intro .lede{margin-bottom:0}
@media (max-width:720px){.quiz-intro{grid-template-columns:1fr}.quiz-intro>img{max-height:320px}}

/* ---- Moteur de quiz interactif (façon Duolingo : rond, coloré, animé) ---- */
.quiz-app{margin:24px 0}
.quiz-barre{height:10px;background:var(--line);border-radius:99px;overflow:hidden;margin-bottom:24px}
.quiz-barre-remplie{height:100%;background:linear-gradient(90deg,var(--accent),var(--accent-ink));
  border-radius:99px;transition:width .35s cubic-bezier(.34,1.56,.64,1)}
.quiz-question{background:var(--bg);border:1px solid var(--line);border-radius:var(--r-md);padding:30px 32px;
  animation:quizEntree .3s ease}
@keyframes quizEntree{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
.quiz-question-tete{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}
.quiz-question .compteur{font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--soft)}
.quiz-serie{background:var(--accent-faible);border:1px solid var(--accent-bord);color:var(--accent-ink);
  font-size:12.5px;font-weight:800;padding:4px 12px;border-radius:999px;animation:quizPop .3s ease}
.quiz-question .enonce{font-size:1.2rem;font-weight:700;line-height:1.4;margin-bottom:20px}
.quiz-visuel{margin:0 0 20px;border-radius:1.4rem;overflow:hidden;border:1px solid var(--line);background:var(--card)}
.quiz-visuel img{display:block;width:100%;aspect-ratio:4/3;object-fit:cover}
.quiz-options{display:grid;gap:10px}
.quiz-option{background:var(--card);border:2px solid var(--line);border-radius:999px;
  padding:14px 22px;text-align:left;font-size:15px;font-weight:700;cursor:pointer;color:var(--ink);
  transition:border-color .15s,background .15s,transform .15s}
.quiz-option:hover:not(:disabled){border-color:var(--accent);transform:translateY(-1px)}
.quiz-option.correcte{border-color:var(--bon);background:var(--bon-bg);color:var(--bon)}
.quiz-option.incorrecte{border-color:var(--mauvais);background:var(--mauvais-bg);color:var(--mauvais)}
.quiz-option.pop{animation:quizPop .35s ease}
.quiz-option.secoue{animation:quizSecoue .4s ease}
.quiz-option:disabled{cursor:default}
@keyframes quizPop{0%{transform:scale(1)}40%{transform:scale(1.045)}100%{transform:scale(1)}}
@keyframes quizSecoue{0%,100%{transform:translateX(0)}20%{transform:translateX(-6px)}40%{transform:translateX(6px)}
  60%{transform:translateX(-4px)}80%{transform:translateX(4px)}}
.quiz-feedback{max-height:0;overflow:hidden;opacity:0;font-weight:700;font-size:14.5px;border-radius:var(--r-sm);
  transition:all .25s ease;margin-top:0}
.quiz-feedback.visible{max-height:180px;opacity:1;margin-top:16px;padding:12px 16px}
.quiz-feedback strong,.quiz-feedback span{display:block}.quiz-feedback span{font-weight:600;margin-top:3px;opacity:.9}
.quiz-feedback-bonne{background:var(--bon-bg);color:var(--bon)}
.quiz-feedback-mauvaise{background:var(--mauvais-bg);color:var(--mauvais)}
.quiz-suite{margin-top:22px;display:flex;justify-content:flex-end}
.quiz-btn{background:var(--accent);color:#fff;border:none;border-radius:999px;padding:14px 28px;
  font-size:14.5px;font-weight:800;cursor:pointer;transition:transform .15s,opacity .15s;
  box-shadow:0 4px 0 var(--accent-ink)}
.quiz-btn:active:not(:disabled){transform:translateY(3px);box-shadow:0 1px 0 var(--accent-ink)}
.quiz-btn:disabled{opacity:.35;cursor:default;box-shadow:none}
.quiz-btn:hover:not(:disabled){opacity:.92}
.quiz-resultat{text-align:center;padding:44px 20px;animation:quizPop .4s ease}
.quiz-resultat-emoji{font-size:3.4rem;line-height:1;margin-bottom:6px}
.quiz-resultat .score{font-family:var(--serif);font-size:3.2rem;font-weight:700;color:var(--accent-ink)}
.quiz-resultat .appreciation{font-size:1.05rem;color:var(--muted);margin:8px 0 6px}
.quiz-meilleure-serie{font-size:13.5px;color:var(--accent-ink);font-weight:700;margin:0 0 22px}
.quiz-resultat .quiz-btn{margin-top:6px}
.quiz-record{font-size:13px;color:var(--soft);margin:8px 0 18px}
.quiz-resultat-actions{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;align-items:center}
#quiz-confettis{display:none;position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:200}

/* ---- Légende / faits ---- */
.facts{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin:28px 0;padding:0;list-style:none}
.facts li{background:var(--bg);border:1px solid var(--line);border-radius:var(--r-sm);padding:16px 18px;margin:0}
.facts b{display:block;font-size:10px;text-transform:uppercase;letter-spacing:.14em;color:var(--soft);font-weight:700;margin-bottom:2px}
.facts span{font-size:1.05rem;font-weight:700;letter-spacing:-.02em}

/* ---- Thème clair/sombre ---- */
.theme-toggle{margin-left:auto;flex:0 0 auto;width:36px;height:36px;border-radius:12px;
  border:1px solid var(--line);background:var(--card);color:var(--soft);
  cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;transition:all .2s}
.theme-toggle:hover{color:var(--ink);border-color:var(--accent)}
.theme-toggle svg{width:17px;height:17px}
.theme-toggle .lune{display:none}
:root[data-theme="dark"] .theme-toggle .soleil{display:none}
:root[data-theme="dark"] .theme-toggle .lune{display:block}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]) .theme-toggle .soleil{display:none}
:root:not([data-theme="light"]) .theme-toggle .lune{display:block}}

/* ---- Burger mobile ---- */
.nav-burger{display:none;flex:0 0 auto;width:36px;height:36px;border-radius:12px;border:1px solid var(--line);
  background:var(--card);color:var(--ink);align-items:center;justify-content:center;cursor:pointer}
.nav-burger svg{width:20px;height:20px}
.nav-burger .fermer{display:none}
.nav-burger[aria-expanded="true"] .ouvrir{display:none}
.nav-burger[aria-expanded="true"] .fermer{display:block}
@media (max-width:860px){
  .nav-burger{display:flex}
  .site-nav{position:absolute;top:calc(100% + 8px);left:16px;right:16px;background:var(--card);
    border:1px solid var(--line);border-radius:var(--r-md);box-shadow:var(--shadow);
    flex-direction:column;align-items:flex-start;padding:10px;gap:2px;display:none;z-index:50}
  .site-nav.ouvert{display:flex}
  .site-nav a{padding:10px 12px;width:100%;border-radius:10px}
  .site-nav a:hover{background:var(--bg)}
  header.site{position:relative}
  main.site{padding:32px 22px 40px}
}

/* ---- Pubs latérales ---- */
.pub{display:none}
@media (min-width:1400px){
  .pub{display:flex;flex-direction:column;align-items:center;gap:8px;position:fixed;top:50%;
    transform:translateY(-50%);width:170px;padding:10px;background:var(--card);
    border:1px solid var(--line);border-radius:var(--r-sm);box-shadow:var(--shadow);z-index:5}
  .pub-gauche{left:12px}
  .pub-droite{right:12px}
  .pub-etiquette{font-size:9px;text-transform:uppercase;letter-spacing:.1em;color:var(--soft);font-weight:700}
  .pub-creatif{width:160px;height:560px;background:var(--bg);border:1px dashed var(--line);border-radius:12px;
    display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:6px;
    padding:14px;transition:opacity .35s}
  .pub-transition{opacity:0}
  .pub-titre{font-size:12px;font-weight:700;color:var(--muted)}
  .pub-sous{font-size:10.5px;color:var(--soft)}
  .pub-format,.pub-compteur{font-size:9px;color:var(--soft)}
}

/* ---- Bandeau consentement ---- */
.consent[hidden]{display:none}
.consent{position:fixed;left:16px;right:16px;bottom:16px;z-index:100;background:var(--card);
  border:1px solid var(--line);border-radius:var(--r-md);box-shadow:var(--shadow);
  padding:20px 24px;display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:space-between;
  max-width:900px;margin:0 auto}
.consent-titre{font-weight:700;margin:0 0 4px}
.consent-txt p{margin:0 0 4px;font-size:13.5px;color:var(--muted)}
.consent-btns{display:flex;gap:10px;flex-shrink:0}
.consent-refus,.consent-ok{border-radius:999px;padding:10px 20px;font-size:13px;font-weight:700;cursor:pointer;border:1px solid var(--line)}
.consent-refus{background:transparent;color:var(--muted)}
.consent-ok{background:var(--accent);color:#fff;border-color:var(--accent)}

.legal{font-size:12px;color:var(--soft);margin-top:20px}
footer.site{background:var(--voile);border:1px solid var(--carte-bord);border-radius:var(--r-md);
  box-shadow:var(--shadow);padding:32px 40px;margin-top:8px}
footer .cols{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:24px}
footer h2{font-family:var(--sans);font-size:12px;text-transform:uppercase;letter-spacing:.1em;color:var(--soft);margin:0 0 10px;font-weight:700}
footer ul{list-style:none;padding:0;margin:0}
footer li{margin:6px 0}
footer a{color:var(--muted);font-size:14px}
footer a:hover{color:var(--ink)}

/* ---- Parcours, boutons et outils transversaux ---- */
.btn-primaire,.btn-secondaire,.btn-premium{display:inline-flex;align-items:center;justify-content:center;border-radius:999px;padding:13px 22px;font:800 14px var(--sans);border:1px solid transparent;cursor:pointer;text-decoration:none;transition:transform .15s,box-shadow .15s}
.btn-primaire{background:var(--accent);color:#fff;box-shadow:0 3px 0 var(--accent-ink)}
.btn-primaire:hover,.btn-premium:hover{transform:translateY(-2px);text-decoration:none}
.btn-secondaire{background:var(--card);border-color:var(--line);color:var(--ink)}
.btn-secondaire:hover{text-decoration:none;border-color:var(--accent)}
.btn-premium{background:#642d3b;color:#fff;box-shadow:0 3px 0 #3f1b25}
.btn-premium span{margin-left:8px;font-size:10px;background:#e2b960;color:#2b1b08;border-radius:999px;padding:3px 8px}
.parcours-rapide{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin:8px 0 42px}
.parcours-rapide a{display:flex;gap:14px;align-items:center;background:var(--bg);border:1px solid var(--line);padding:18px;border-radius:1.4rem;color:var(--ink)}
.parcours-rapide a:hover{text-decoration:none;border-color:var(--accent)}
.parcours-rapide b{display:grid;place-items:center;width:34px;height:34px;flex:0 0 auto;border-radius:50%;background:var(--accent);color:#fff}.parcours-rapide span{font-size:12px;color:var(--muted)}.parcours-rapide strong{display:block;color:var(--ink);font-size:14px}
.niveau-outils,.fiche-nav,.progression-actions{display:flex;flex-wrap:wrap;gap:10px;margin:24px 0 38px;align-items:center}

/* ---- Fiches ---- */
.source-officielle{display:flex;gap:18px;align-items:flex-start;background:var(--accent-faible);border:1px solid var(--accent-bord);border-radius:1.4rem;padding:18px 22px;margin:26px 0}.source-officielle span{font-size:10px;letter-spacing:.12em;font-weight:800;color:var(--accent-ink);white-space:nowrap}.source-officielle p{margin:0;font-size:13px;color:var(--muted)}
.fiches-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:28px}.fiche-card{display:flex;gap:20px;align-items:center;background:var(--bg);border:1px solid var(--line);border-radius:1.6rem;padding:18px 22px;color:var(--ink)}.fiche-card:hover{text-decoration:none;border-color:var(--accent);transform:translateY(-2px)}.fiche-num{font:700 2.4rem var(--serif);color:var(--accent-ink);width:42px;text-align:center}.fiche-card strong,.fiche-card small,.fiche-card em{display:block}.fiche-card small{font-size:12px;color:var(--muted);line-height:1.4;margin:4px 0}.fiche-card em{font-size:11px;color:var(--accent-ink);font-style:normal;font-weight:800}
.fiche-hero{display:grid;grid-template-columns:180px 1fr;gap:36px;align-items:center;margin-bottom:34px}.fiche-hero>img{border-radius:2rem;box-shadow:var(--shadow)}.fiche-sommaire{position:sticky;top:10px;z-index:4;display:flex;flex-wrap:wrap;gap:8px;align-items:center;background:color-mix(in srgb,var(--card) 88%,transparent);backdrop-filter:blur(12px);border:1px solid var(--line);border-radius:999px;padding:8px 12px;margin-bottom:34px}.fiche-sommaire strong{font-size:11px;margin:0 8px}.fiche-sommaire a{font-size:11px;font-weight:700;padding:5px 9px;border-radius:99px}.fiche-sommaire a:hover{background:var(--accent-faible);text-decoration:none}
.axes-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.axe-card{background:var(--bg);border:1px solid var(--line);border-radius:1.7rem;padding:24px}.axe-index{font-size:10px;font-weight:800;color:var(--accent-ink);letter-spacing:.12em}.axe-card h2{margin:.35em 0 .6em;font-size:1.35rem}.axe-card ul{padding-left:1.05em;font-size:13px;color:var(--muted)}
.memo-panel{margin:50px 0 36px;background:#173f30;color:#fff;border-radius:2rem;padding:32px}.memo-panel .eyebrow{color:#e2b960}.memo-panel h2{margin:.25em 0}.memo-panel ol{padding-left:1.3em}.memo-panel li{padding:7px 0}.pieges-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.pieges-grid>div{border:1px solid #efcbc6;background:var(--mauvais-bg);border-radius:1.3rem;padding:18px}.pieges-grid span{font-size:9px;font-weight:800;letter-spacing:.14em;color:var(--mauvais)}.pieges-grid p{margin:5px 0 0;font-size:13px;font-weight:700}

/* ---- Conseils ---- */
.conseils-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-top:30px}.conseil-card{display:block;border:1px solid var(--line);border-radius:1.7rem;padding:26px;background:var(--bg);color:var(--ink)}.conseil-card:hover{text-decoration:none;transform:translateY(-2px);box-shadow:var(--shadow)}.conseil-card>span{font-size:10px;font-weight:800;letter-spacing:.12em;color:var(--accent-ink)}.conseil-card h2{font-size:1.45rem;margin:.4em 0}.conseil-card p{font-size:13px;color:var(--muted)}.conseil-card em{font-size:12px;font-style:normal;font-weight:800;color:var(--accent-ink)}
.article{max-width:800px;margin:auto}.article-section{display:grid;grid-template-columns:50px 1fr;gap:18px;border-top:1px solid var(--line);padding:28px 0}.article-section>span{font:700 1.8rem var(--serif);color:var(--accent)}.article-section h2{margin:0 0 .4em}.article-section p{color:var(--muted)}

/* ---- Progression ---- */
.progression-resume{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:28px 0}.progression-resume>div{background:var(--bg);border:1px solid var(--line);border-radius:1.4rem;padding:20px}.progression-resume strong,.progression-resume span{display:block}.progression-resume strong{font:700 2rem var(--serif);color:var(--accent-ink)}.progression-resume span{font-size:11px;color:var(--muted)}
.progression-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px}.progression-card{background:var(--card);border:1px solid var(--line);border-radius:1.3rem;padding:16px;color:var(--ink)}.progression-card:hover{text-decoration:none;border-color:var(--accent)}.progression-card>span,.progression-card>strong,.progression-card>small{display:block}.progression-card>span{font-size:10px;font-weight:800;color:var(--accent-ink);text-transform:uppercase}.progression-card>strong{margin:4px 0}.progression-card>div{height:7px;background:var(--line);border-radius:9px;overflow:hidden}.progression-card i,.quiz-barre i{height:100%;display:block;background:var(--accent);border-radius:9px}.progression-card small{font-size:10px;color:var(--soft);margin-top:5px}.diagnostic{display:flex;justify-content:space-between;align-items:center;gap:22px;background:#173f30;color:#fff;border-radius:2rem;padding:28px;margin:34px 0}.diagnostic span{font-size:9px;letter-spacing:.15em;color:#e2b960;font-weight:800}.diagnostic h2{margin:.2em 0}.diagnostic p{margin:0;color:#d6e2da}.btn-texte{border:0;background:none;color:var(--muted);font:700 12px var(--sans);cursor:pointer}

/* ---- Premium & examen ---- */
.premium-hero{display:grid;grid-template-columns:1.3fr .7fr;gap:34px;align-items:center;background:linear-gradient(135deg,#f3e7da,#efe8d7);color:#241f18;margin:-20px -20px 42px;padding:54px;border-radius:2.3rem}.premium-hero .eyebrow{color:#642d3b}.premium-hero .lede{color:#5d5143}.premium-cta{display:flex;flex-direction:column;align-items:flex-start;gap:7px}.premium-cta small{font-size:10px;color:#786b5d}.premium-score{background:#173f30;color:#fff;border-radius:2rem;padding:28px;box-shadow:0 20px 50px rgba(23,63,48,.2)}.premium-score span{font-size:9px;letter-spacing:.14em;color:#e2b960;font-weight:800}.premium-score strong{display:block;font:700 4rem var(--serif);line-height:1}.premium-score sup{font-size:1.5rem}.premium-score p{font-size:12px;color:#d6e2da}.premium-score i{display:block;height:8px;border-radius:8px;background:#e2b960}
.features-grid,.pricing{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin:28px 0 50px}.features-grid>div,.pricing>div{border:1px solid var(--line);border-radius:1.6rem;padding:24px;background:var(--bg)}.features-grid b{font:700 1.5rem var(--serif);color:var(--accent)}.features-grid h2{margin:.3em 0;font-size:1.25rem}.features-grid p{font-size:13px;color:var(--muted)}.pricing>div{display:flex;flex-direction:column;align-items:flex-start}.pricing>div>span{font-size:9px;letter-spacing:.12em;font-weight:800;color:var(--accent-ink)}.pricing h2{margin:.3em 0}.pricing>div>strong{font:700 2rem var(--serif)}.pricing strong small{font:600 11px var(--sans);color:var(--muted)}.pricing ul{padding-left:1.1em;font-size:12px;color:var(--muted);flex:1}.pricing>div>small{font-size:9px;color:var(--soft);margin-top:10px}.pricing-star{border:2px solid #8b4558!important;transform:translateY(-10px);box-shadow:var(--shadow)}.faq{max-width:800px;margin:auto}.faq details{border-top:1px solid var(--line);padding:18px 0}.faq summary{font-weight:800;cursor:pointer}.faq details p{font-size:13px;color:var(--muted);padding-top:8px}.premium-actif .pub{display:none!important}
.examen-hero{display:flex;align-items:center;justify-content:space-between;gap:28px;background:linear-gradient(135deg,var(--accent-faible),var(--bg));border:1px solid var(--line);border-radius:2rem;padding:30px 34px}.examen-hero .lede{margin:0}.examen-horloge{display:grid;grid-template-columns:auto auto;align-items:center;background:#173f30;color:#fff;border-radius:1.5rem;padding:18px 22px;min-width:160px}.examen-horloge span{font:700 2.5rem var(--serif);line-height:1}.examen-horloge small{align-self:end}.examen-horloge i{grid-column:1/-1;color:#e2b960;font-style:normal;font-size:22px;text-align:right}
.exam-app{max-width:800px;margin:30px auto}.exam-lock,.exam-start,.exam-result{text-align:center;background:var(--bg);border:1px solid var(--line);border-radius:2rem;padding:40px}.exam-lock>span,.exam-result>span{font-size:9px;letter-spacing:.14em;font-weight:800;color:var(--accent-ink)}.exam-levels{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:24px}.exam-levels button{border:1px solid var(--line);border-radius:999px;background:var(--card);color:var(--ink);padding:12px;font-weight:800;cursor:pointer}.exam-levels button:hover{border-color:var(--accent)}.exam-head{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;font-size:12px;font-weight:800;margin-bottom:10px}.exam-head span{text-align:left}.exam-head strong{text-align:right}.exam-head time{font:800 16px var(--sans);color:var(--accent-ink);background:var(--accent-faible);border-radius:999px;padding:7px 13px;min-width:74px}.exam-result>strong{display:block;font:700 4rem var(--serif);color:var(--accent-ink)}.exam-result ul{list-style:none;padding:0;text-align:left}.exam-result li{display:flex;justify-content:space-between;border-top:1px solid var(--line);padding:10px}.exam-result>div{display:flex;justify-content:center;gap:10px;flex-wrap:wrap}.skeleton-line{height:40px;background:var(--line);border-radius:10px}

/* ---- Abonnement Premium et paywall ---- */
html[data-premium="inactive"] [data-premium-content]{display:none!important}
html[data-premium="active"] [data-premium-locked]{display:none!important}
html[data-premium="active"] .pub{display:none!important}
.niveau-card,.quiz-card,.fiche-card{position:relative}
.premium-level-badge,.premium-card-badge{position:absolute;z-index:3;top:13px;right:13px;display:inline-flex;align-items:center;min-height:25px;padding:4px 10px;border-radius:999px;background:#6d3340;color:#fff;font:800 9px var(--sans);letter-spacing:.08em;text-transform:uppercase;box-shadow:0 4px 12px rgba(57,27,32,.18)}
.premium-level-badge.is-free,.premium-card-badge.is-free{background:#174d3b}
.premium-gate{max-width:1040px;margin:34px auto 48px;display:grid;grid-template-columns:92px minmax(0,1fr) 220px;gap:26px;align-items:center;padding:30px 34px;border:1px solid #d2ae76;border-radius:20px;background:linear-gradient(135deg,#fffaf3,#f3e6d3);box-shadow:0 18px 48px rgba(86,56,24,.1);color:#282119}
.premium-gate-icon{display:grid;place-items:center;width:78px;height:78px;border:1px solid #d2ae76;border-radius:50%;background:#174d3b;color:#e7c58c;font-size:38px}
.premium-gate h2{font:600 34px/1.05 var(--serif);margin:4px 0 9px}.premium-gate p{font-size:13px;color:#655d54;margin:0}.premium-gate ul{display:flex;flex-wrap:wrap;gap:6px 20px;margin:12px 0 0;padding:0;list-style:none;font-size:10px;font-weight:700;color:#6d3340}.premium-gate li::before{content:'✓';margin-right:5px;color:#174d3b}
.premium-gate-price{display:flex;flex-direction:column;align-items:stretch;text-align:center}.premium-gate-price strong{font:600 23px var(--serif);color:#174d3b}.premium-gate-price span{font-size:10px;color:#655d54;margin-bottom:10px}.premium-gate-price small{margin-top:7px;font-size:9px;color:#8c7251}
.page-quiz-reference .premium-gate{margin:70px auto;position:relative;z-index:2;background:rgba(255,250,243,.96)}

.premium-reference-hero{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(280px,.7fr);gap:34px;align-items:center;margin:-30px -32px 54px;padding:60px 64px;border:1px solid #d7bd94;border-radius:22px;background:radial-gradient(circle at 76% 20%,rgba(213,177,118,.28),transparent 34%),linear-gradient(135deg,#fffaf3,#f0e3ce);overflow:hidden}
.premium-reference-hero>div>img{width:78px;height:78px}.premium-reference-hero h1{font:600 clamp(52px,5.2vw,76px)/.94 var(--serif);letter-spacing:-.035em}.premium-reference-hero .lede{max-width:62ch;color:#54493d}.premium-hero-trust{display:flex;flex-wrap:wrap;gap:8px 18px;font-size:10px;font-weight:700;color:#174d3b}
.premium-reference-hero>aside{padding:30px;border:1px solid #4c6d5e;border-radius:19px;background:#174d3b;color:#fff;box-shadow:0 20px 48px rgba(23,77,59,.18)}.premium-reference-hero>aside>span{font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:#e7c58c}.premium-reference-hero>aside>strong{display:block;font:600 38px var(--serif);margin:4px 0}.premium-reference-hero>aside>p{font-size:12px;color:#d5e0da}.premium-reference-hero>aside>small{display:block;padding-top:14px;border-top:1px solid rgba(255,255,255,.2);color:#f1dcc0}
.premium-heading{text-align:center;max-width:720px;margin:0 auto 30px}.premium-heading h2,.premium-benefits>h2,.premium-faq>h2{font:600 clamp(38px,4vw,56px)/1 var(--serif);margin:7px 0 12px}.premium-heading>p{color:#655d54}
.premium-plans{display:grid;grid-template-columns:repeat(2,minmax(280px,1fr));gap:20px;max-width:900px;margin:0 auto}.premium-plans>article{position:relative;display:flex;flex-direction:column;padding:32px;border:1px solid #d7bd94;border-radius:20px;background:#fffaf3}.premium-plans .plan-featured{border:2px solid #174d3b;box-shadow:0 20px 45px rgba(23,77,59,.12);transform:translateY(-7px)}.plan-badge{position:absolute;right:18px;top:16px;border-radius:99px;background:#174d3b;color:#fff;padding:5px 10px;font-size:9px;font-weight:800}.plan-kicker{font-size:9px;font-weight:800;letter-spacing:.18em;color:#9a6429;text-transform:uppercase}.premium-plans h3{font:600 31px var(--serif);margin:8px 0 2px}.plan-price{display:flex;align-items:baseline;gap:8px}.plan-price strong{font:600 43px var(--serif);color:#174d3b}.plan-price span{font-size:11px;color:#655d54}.premium-plans article>p{min-height:46px;font-size:12px;color:#655d54}.premium-plans ul{flex:1;list-style:none;padding:13px 0;border-top:1px solid #e1d1bb;font-size:12px}.premium-plans li::before{content:'✓';color:#174d3b;font-weight:900;margin-right:8px}.premium-test-note{display:flex;gap:18px;align-items:center;max-width:900px;margin:24px auto 0;padding:17px 22px;border:1px dashed #b98746;border-radius:13px;background:#f7ecdc}.premium-test-note b{white-space:nowrap;font:600 15px var(--serif);color:#6d3340}.premium-test-note p{font-size:11px;margin:0;color:#655d54}
.premium-benefits,.premium-faq{max-width:1050px;margin:72px auto}.premium-benefits>div{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.premium-benefits article{padding:24px;border:1px solid #dec7a5;border-radius:16px;background:#fbf6ee}.premium-benefits article>b{color:#b98746;font:600 24px var(--serif)}.premium-benefits h3{font:600 25px var(--serif);margin:6px 0}.premium-benefits p{font-size:12px;color:#655d54}.premium-faq{max-width:820px}.premium-faq details{border-top:1px solid #d7bd94;padding:18px 0}.premium-faq summary{font:600 18px var(--serif);cursor:pointer}.premium-faq details p{font-size:12px;color:#655d54;margin:9px 0 0}.premium-active-panel{display:flex;align-items:center;justify-content:space-between;gap:22px;margin:45px auto 0;max-width:900px;padding:26px 30px;border:1px solid #6e9684;border-radius:17px;background:#eaf1ec}.premium-active-panel h2{margin:4px 0}.premium-active-panel p{margin:0}.premium-active-panel>div:last-child{display:flex;gap:10px;align-items:center;flex-wrap:wrap}

/* ---- Grille de choix du Galop à débloquer (achat unique) ----
   La mention « Déjà débloqué » est masquée par défaut : elle n'apparaît que
   lorsque le script d'accès a posé data-achete sur la carte, sinon elle
   s'afficherait sur les cinq niveaux non achetés. */
.achat-niveaux{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:16px;margin-top:26px}
.achat-niveau{display:flex;flex-direction:column;align-items:center;gap:7px;padding:18px;border:1px solid #dec7a5;border-radius:16px;background:#fbf6ee;text-align:center;transition:border-color .18s,transform .18s}
.achat-niveau:hover{border-color:#174d3b;transform:translateY(-3px)}
.achat-niveau.is-vise{border:2px solid #174d3b;box-shadow:0 14px 34px rgba(23,77,59,.14)}
.achat-niveau img{width:100%;height:auto;border-radius:11px}
.achat-niveau h3{font:600 23px var(--serif);margin:6px 0 0}
.achat-niveau p{margin:0;font-size:11px;color:#756a5d}
.achat-prix{display:flex;align-items:baseline;gap:6px;margin:3px 0 6px}
.achat-prix strong{font:600 27px var(--serif);color:#174d3b}
.achat-prix span{font-size:10px;color:#756a5d}
.achat-niveau .btn-secondaire{width:100%}
.achat-deja{display:none;font-size:11px;font-weight:800;color:#174d3b}
.achat-niveau[data-achete] .btn-secondaire,.achat-niveau[data-achete] .achat-prix{display:none}
.achat-niveau[data-achete] .achat-deja{display:inline}
.achat-niveau[data-achete]{border-color:#6e9684;background:#eaf1ec}

.checkout-shell,.success-shell{max-width:1050px;margin:38px auto;padding:42px;border:1px solid #d7bd94;border-radius:22px;background:#fffaf3}.checkout-brand{display:flex;align-items:center;gap:10px;color:#174d3b;font:600 20px var(--serif);letter-spacing:.08em}.checkout-brand img{width:55px;height:55px}.checkout-grid{display:grid;grid-template-columns:minmax(0,1.2fr) 320px;gap:52px;margin-top:34px}.checkout-grid h1{font:600 58px/1 var(--serif)}.checkout-grid label{display:block;margin:22px 0 7px;font-size:12px;font-weight:800}.checkout-grid label span{font-weight:400;color:#756a5d}.checkout-grid input{width:100%;height:52px;padding:0 15px;border:1px solid #d7bd94;border-radius:10px;background:#fff;color:#282119;font:14px var(--sans)}.checkout-grid button{width:100%;margin-top:12px}.checkout-grid>div>small{display:block;margin-top:15px;color:#756a5d;font-size:10px}.checkout-feedback{min-height:22px;margin:8px 0 0;color:#174d3b;font-size:11px}.checkout-grid aside{align-self:start;padding:26px;border-radius:17px;background:#174d3b;color:#fff}.checkout-grid aside>span{font-size:10px;letter-spacing:.15em;color:#e7c58c;text-transform:uppercase}.checkout-grid aside>div{display:flex;align-items:baseline;gap:8px;margin:7px 0}.checkout-grid aside strong{font:600 35px var(--serif)}.checkout-grid aside small{color:#d5e0da}.checkout-grid aside ul{padding-left:1.1em;font-size:11px}.checkout-grid aside a{color:#e7c58c;font-size:11px}.success-shell{text-align:center;max-width:720px;margin-top:10vh}.success-shell>img{width:88px;height:88px}.success-shell h1{font:600 52px/1 var(--serif)}.success-actions{display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin-top:25px}.success-loader{width:36px;height:36px;margin:22px auto;border:3px solid #e2d2bc;border-top-color:#174d3b;border-radius:50%;animation:spin .8s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}
.exam-levels .exam-level-premium{position:relative;border-color:#c9a66c}.exam-level-premium small{display:block;color:#6d3340;font-size:8px;letter-spacing:.08em;text-transform:uppercase}
.fiche-reperes{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:7px;margin:15px 0 0;padding:0;list-style:none;text-align:left}.fiche-reperes li{display:grid;grid-template-columns:27px 1fr;align-items:start;gap:7px;margin:0;padding:7px 8px;border:1px solid #e3d2bb;border-radius:8px;background:#fffaf3;font-size:10px;line-height:1.35}.fiche-reperes b{display:grid;place-items:center;width:23px;height:23px;border-radius:50%;background:#b98746;color:#fff;font-size:10px}

@media (max-width:600px){
  body{padding:10px;gap:10px;font-size:16px}
  header.site{padding:12px 16px;min-height:auto}
  main.site{border-radius:1.5rem}
  footer.site{padding:24px 20px;border-radius:1.5rem}
}
@media (max-width:760px){
  .parcours-rapide,.axes-grid,.pieges-grid,.features-grid,.pricing,.progression-resume{grid-template-columns:1fr}
  .fiches-grid,.conseils-grid{grid-template-columns:1fr}.fiche-hero{grid-template-columns:100px 1fr;gap:18px}.fiche-sommaire{position:static;border-radius:1.2rem}.source-officielle{display:block}.source-officielle span{display:block;margin-bottom:5px}.diagnostic{align-items:flex-start;flex-direction:column}.premium-hero{grid-template-columns:1fr;padding:30px}.pricing-star{transform:none}.exam-levels{grid-template-columns:repeat(2,1fr);margin:20px 0}.quiz-question{padding:22px 18px}.examen-hero{align-items:flex-start;flex-direction:column}.examen-horloge{width:100%}.quiz-carousel{margin-right:-22px;padding-right:22px}.quiz-carousel .quiz-card{flex-basis:min(78vw,258px)}
  .premium-gate{grid-template-columns:1fr;padding:25px 21px;text-align:center}.premium-gate-icon{margin:auto}.premium-gate ul{justify-content:center}.premium-reference-hero{grid-template-columns:1fr;margin:-18px -12px 40px;padding:38px 24px}.premium-reference-hero h1{font-size:46px}.premium-plans,.premium-benefits>div,.checkout-grid{grid-template-columns:1fr}.premium-plans .plan-featured{transform:none}.premium-test-note,.premium-active-panel{align-items:flex-start;flex-direction:column}.checkout-shell,.success-shell{margin:20px auto;padding:25px 20px}.checkout-grid{gap:24px}.checkout-grid h1,.success-shell h1{font-size:42px}
}
@media (max-width:900px){
  .niveau-hero-large-texte{position:relative;left:auto;top:auto;transform:none;width:auto;margin:0 16px 16px;padding:20px}
  .niveau-hero-large .hero-blur-bas,.niveau-hero-large .hero-fade-bas{display:none}
}

/* ---- Direction artistique équestre éditoriale ---- */
:root{--gold:#b78a3d;--gold-soft:#dbc18d;--leather:#6d3340;--r-lg:1.4rem;--r-md:1rem;--r-sm:.7rem}
body{background-color:var(--bg);background-image:radial-gradient(rgba(87,69,40,.035) .8px,transparent .8px),linear-gradient(135deg,rgba(183,138,61,.04),transparent 38%);background-size:7px 7px,100% 100%}
header.site,footer.site{background:color-mix(in srgb,var(--card) 92%,#d8c39b);border-color:color-mix(in srgb,var(--gold) 35%,var(--line));box-shadow:0 7px 24px rgba(65,48,20,.07)}
header.site{border-top:3px solid var(--gold)}
.site-brand{font-size:24px}.site-brand::before{content:'♞';font-size:15px;color:var(--gold);margin-right:8px;vertical-align:2px}
.site-nav a{border-bottom:2px solid transparent;padding:8px 0}.site-nav a.site-nav-current{border-color:var(--gold)}
main.site{border:1px solid color-mix(in srgb,var(--gold) 28%,var(--line));box-shadow:0 12px 35px rgba(65,48,20,.07)}
h1,h2{color:color-mix(in srgb,var(--ink) 92%,var(--leather))}.eyebrow{color:var(--leather)}
.niveau-hero-large-texte h1{color:#241f18}.niveau-hero-large-texte .eyebrow{color:#3f6f50}
.card,.callout,.niveau-card,.quiz-card,.axe-card,.fiche-card,.conseil-card,.progression-card{border-radius:var(--r-md)}
.niveau-card,.quiz-card,.fiche-card,.conseil-card{position:relative;border-color:color-mix(in srgb,var(--gold) 30%,var(--line))}
.niveau-card::before,.quiz-card::before,.fiche-card::before,.conseil-card::before{content:'';position:absolute;left:14px;right:14px;top:0;height:2px;background:linear-gradient(90deg,transparent,var(--gold),transparent);z-index:2}
.quiz-card:hover,.niveau-card:hover,.fiche-card:hover,.conseil-card:hover{box-shadow:0 12px 24px rgba(74,48,18,.12);border-color:var(--gold)}
.btn-primaire,.btn-secondaire,.btn-premium,.quiz-btn,.accueil-hero-cta{border-radius:.7rem;box-shadow:none;text-transform:none;letter-spacing:.01em}
.btn-primaire,.quiz-btn{background:#234f3c;border:1px solid #173f30}.btn-secondaire{border-color:color-mix(in srgb,var(--gold) 55%,var(--line))}
.quiz-option{border-radius:.75rem;border-width:1px;border-left:4px solid var(--line);box-shadow:0 2px 0 rgba(80,58,25,.04)}
.quiz-option:hover:not(:disabled){border-left-color:var(--gold)}
.quiz-question,.memo-panel,.diagnostic,.exam-start,.exam-result{border-radius:1rem}
.quiz-carousel-controls button,.theme-toggle,.nav-burger{border-radius:.55rem;border-color:color-mix(in srgb,var(--gold) 38%,var(--line))}
.quiz-carousel-controls button{color:var(--leather)}
.fiche-sommaire{border-radius:.7rem;border-color:color-mix(in srgb,var(--gold) 30%,var(--line))}
.source-officielle{border-left:4px solid var(--gold);border-radius:.7rem}
.examen-hero,.examen-horloge{border-radius:1rem}.examen-horloge{border:1px solid var(--gold)}
.progression-card>div,.quiz-barre{border-radius:2px}.progression-card i,.quiz-barre i,.quiz-barre-remplie{border-radius:2px}
@media (max-width:860px){.site-nav a{padding:10px 12px;border-bottom:0;border-left:3px solid transparent}.site-nav a.site-nav-current{border-left-color:var(--gold)}}

/* ========================================================================== */
/*  Direction de maquette — ivoire, laiton, typographie éditoriale équestre   */
/* ========================================================================== */
:root,:root:not([data-theme]),:root[data-theme="light"],:root[data-theme="dark"]{
  color-scheme:light;
  --bg:#f8f2e8;--card:#fffaf3;--ink:#17130f;--muted:#4b4741;--soft:#867d72;
  --line:#e4d7c5;--accent:#174d3b;--accent-ink:#174d3b;--shadow:0 14px 34px rgba(74,48,20,.08);
  --carte-bord:#dfcaa9;--voile:#fffaf3;--accent-faible:#eef0e7;--accent-bord:#cbd5c5;
  --bon:#174d3b;--bon-bg:#edf2e9;--mauvais:#741e2b;--mauvais-bg:#f7ebe8;
  --gold:#c69652;--gold-soft:#e4c99f;--leather:#774628;
  --serif:'Cormorant Garamond',Georgia,'Times New Roman',serif;
  --sans:'Manrope','Segoe UI',sans-serif;
}
html{scroll-behavior:smooth;background:#fbf8f2}
body{background-color:#fbf8f2;background-image:radial-gradient(rgba(150,103,44,.045) .7px,transparent .7px);background-size:6px 6px}
h1,h2,h3{font-family:var(--serif);color:var(--ink)}
.sr-only{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}
.ornement-line{display:flex;align-items:center;justify-content:center;gap:9px;color:var(--gold);width:min(280px,100%)}
.ornement-line i{height:1px;flex:1;background:linear-gradient(90deg,transparent,var(--gold))}
.ornement-line i:last-child{background:linear-gradient(90deg,var(--gold),transparent)}
.ornement-line b{font-size:14px;line-height:1}
.pub{display:none!important}

/* Accueil — composition 16/9 calée sur la maquette fournie. */
.home-reference{padding:9px;gap:16px;background:#fbf8f2}
.home-reference .shell-main{max-width:1800px;display:block}
.home-reference main.site{padding:0;border:0;border-radius:0;background:transparent;box-shadow:none;overflow:visible}
.home-ref-hero{position:relative;isolation:isolate;overflow:hidden;width:100%;aspect-ratio:1800/1013;min-height:720px;border:1px solid #d5b887;border-radius:28px;background:#f9f3e9}
.home-ref-bg{position:absolute;inset:0;z-index:-1;width:100%;height:100%;object-fit:cover;object-position:center}
.home-ref-copy{height:100%;width:46.5%;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:48px 26px 46px clamp(54px,5.4vw,96px);color:#2c2823}
.hero-fer{display:block;width:66px;height:66px;margin:0 auto 12px;align-self:center;transform:translateX(-8%)}
.home-ref-copy>.eyebrow{align-self:center;transform:translateX(-4%);color:#885832;font:600 14px/1 var(--sans);letter-spacing:.34em;margin:0 0 26px}
.home-ref-copy h1{font-size:clamp(60px,5.35vw,88px);line-height:.96;letter-spacing:-.035em;margin:0 0 28px;font-weight:600;color:#1b160f}
.home-ref-copy>.ornement-line{margin:0 auto 30px;width:320px}
.home-ref-copy>p:not(.eyebrow){font-size:clamp(17px,1.35vw,22px);line-height:1.55;margin:0 0 10px;letter-spacing:-.02em}
.home-ref-actions{display:flex;align-items:stretch;gap:24px;margin-top:23px}
.btn-ref-primary,.btn-ref-secondary{display:inline-flex;align-items:center;justify-content:center;gap:12px;min-height:72px;padding:0 28px;border-radius:10px;font:600 20px var(--serif);text-decoration:none!important;white-space:nowrap;transition:transform .18s,box-shadow .18s,background .18s}
.btn-ref-primary{min-width:292px;color:#fff;background:#123e2f;border:1px solid #123e2f;box-shadow:inset 0 0 0 1px rgba(255,255,255,.06)}
.btn-ref-primary:hover{color:#fff;background:#0b3124;transform:translateY(-2px);box-shadow:0 10px 20px rgba(18,62,47,.16)}
.btn-ref-primary img{width:30px;height:30px;filter:brightness(1.18)}
.btn-ref-secondary{min-width:250px;color:#241b12;background:rgba(255,250,243,.78);border:1px solid var(--gold)}
.btn-ref-secondary:hover{color:#241b12;background:#fffaf3;transform:translateY(-2px)}
.btn-ref-secondary span{margin-left:auto;color:#a56c2e;font:400 32px/1 var(--serif)}
.home-ref-trust{display:flex;align-items:center;gap:18px;margin-top:35px;color:#534c43;font-size:14px;white-space:nowrap}
.home-ref-trust i{width:4px;height:4px;border-radius:50%;background:var(--gold)}

.home-method,.home-levels{position:relative;overflow:hidden;border:1px solid #d7bd94;border-radius:28px;background:#fbf6ee;margin-top:16px;padding:22px clamp(45px,6.5vw,112px) 22px;min-height:900px}
.decor-leaf{position:absolute;width:235px;opacity:.6;pointer-events:none}
.decor-leaf-left{left:30px;top:100px;transform:rotate(-30deg)}
.decor-leaf-right{right:24px;top:70px;transform:scaleX(-1) rotate(-20deg)}
.method-heading{position:relative;z-index:1;text-align:center;display:flex;flex-direction:column;align-items:center}
.section-fer{display:block;width:58px;height:58px;margin:-1px auto 4px}
.method-heading .eyebrow{font:600 12px/1 var(--sans);letter-spacing:.34em;color:#885832;margin-bottom:9px}
.method-heading h2{font:600 clamp(48px,4.4vw,70px)/.98 var(--serif);letter-spacing:-.03em;margin:0 0 6px}
.method-heading>p:last-child{font-size:16px;color:#3d3934;margin:0}
.method-steps{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:26px;margin:37px auto 28px;max-width:1220px}
.method-steps article{position:relative;min-height:216px;display:grid;grid-template-columns:120px 1fr;gap:12px;align-items:center;padding:34px 34px 26px;background:rgba(255,250,243,.82);border:1px solid #dec39c;border-radius:22px;box-shadow:0 8px 18px rgba(96,68,30,.055)}
.method-steps article::after,.quiz-ref-panel::after,.quiz-ref-card::after{content:'';position:absolute;inset:6px;border:1px solid rgba(215,187,145,.55);border-radius:17px;pointer-events:none}
.method-steps article>b{position:absolute;left:50%;top:-19px;transform:translateX(-50%);display:grid;place-items:center;width:38px;height:38px;border-radius:50%;background:linear-gradient(#d3aa70,#b87c35);color:white;font:600 20px var(--serif);z-index:2}
.method-icon{display:grid;place-items:center}
.method-icon img{width:100px;height:100px}
.method-steps h3{font:600 23px/1.1 var(--serif);margin:0;color:#174d3b;white-space:nowrap}
.method-steps article:nth-child(2) h3{color:#285e84}.method-steps article:nth-child(3) h3{color:#741e2b}
.mini-ornement{color:var(--gold);font-size:12px;letter-spacing:.2em;margin:5px 0}
.method-steps p{font-size:12.5px;line-height:1.6;color:#514a41;margin:0}
.method-proof{position:relative;z-index:1;display:grid;grid-template-columns:1fr 1fr;gap:25px;max-width:1220px;margin:0 auto 20px}
.testimonial,.method-stats{height:220px;border:1px solid #d7bd94;border-radius:18px;background:rgba(255,250,243,.86);overflow:hidden}
.testimonial{display:grid;grid-template-columns:250px 1fr;align-items:center}
.testimonial>img{width:100%;height:100%;object-fit:cover;object-position:center 26%}
.testimonial>div{padding:18px 30px}.testimonial>div>b{display:block;font:600 48px/.5 var(--serif);color:#b88a4a}
.testimonial blockquote{font:500 17px/1.28 var(--serif);margin:9px 0 7px;color:#211b14}
.testimonial .stars{color:#c69652;letter-spacing:.12em;font-size:17px}.testimonial strong,.testimonial small{display:block;font:600 15px var(--serif)}.testimonial small{font:12px var(--sans);color:#625a50}
.method-stats{display:grid;grid-template-columns:repeat(3,1fr);padding:26px 18px}
.method-stats>div{display:flex;flex-direction:column;align-items:center;text-align:center;padding:0 18px;border-right:1px solid #dfc9aa}.method-stats>div:last-child{border:0}
.method-stats img,.method-stats span{width:44px;height:44px;object-fit:contain;font:500 36px/1 var(--serif);color:#741e2b}
.method-stats strong{font:600 29px/1 var(--serif);margin-top:4px}.method-stats b{font:600 15px var(--serif);margin-top:5px}.method-stats small{font-size:10px;line-height:1.45;color:#625a50;margin-top:4px}
.method-cta{position:relative;z-index:1;overflow:hidden;display:grid;grid-template-columns:1.05fr 1.35fr;align-items:center;min-height:188px;max-width:1450px;margin:0 auto;border:1px solid #d1af7c;border-radius:18px;padding:24px 72px;background:#fbf4e8}
.method-cta>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-1}
.method-cta h2{font:600 40px/1 var(--serif);color:#123e2f;margin:0 0 12px}.method-cta p{font-size:16px;max-width:420px;margin:0;color:#403b34}
.method-cta .home-ref-actions{margin:0;display:grid;grid-template-columns:1fr 1fr;gap:15px}.method-cta .btn-ref-primary,.method-cta .btn-ref-secondary{min-width:0;min-height:58px;font-size:17px;padding:0 20px}.method-cta small{grid-column:1/-1;text-align:center;color:#6c6257;font-size:10px}
.home-levels{min-height:auto;padding-bottom:70px}.home-levels .niveaux-grid{position:relative;z-index:1;grid-template-columns:repeat(4,1fr);max-width:1400px;margin:38px auto 0}.home-levels .niveau-card{background:#fffaf3}

/* Quiz immersif — une seule colonne aérée ; le bilan détaillé n’apparaît qu’à la fin. */
.page-quiz-reference{padding:9px;gap:0;background:#fbf8f2;overflow-x:hidden}
.page-quiz-reference .shell-main{max-width:1800px;display:block}
.page-quiz-reference main.site{position:relative;padding:0;border:0;border-radius:0;background:transparent;box-shadow:none;overflow:visible}
.quiz-ref-background{position:absolute;inset:0;height:100%;min-height:0;z-index:-1;overflow:hidden;border-radius:24px}
.quiz-ref-background img{width:100%;height:100%;object-fit:cover}
.quiz-ref-stage{min-height:0;height:auto;max-width:1220px;margin:0 auto;border:1px solid #d3b17a;border-radius:24px;display:grid;grid-template-columns:minmax(0,1040px);justify-content:center;align-items:start;padding:46px 70px 44px;overflow:hidden}
.quiz-ref-left{align-self:stretch;display:flex;flex-direction:column;justify-content:center;text-align:center;min-width:0}
.quiz-ref-brand{display:flex;flex-direction:column;align-items:center;color:#815233;font:600 12px var(--sans);letter-spacing:.35em}.quiz-ref-brand img{width:54px;height:54px;margin-bottom:6px}
.quiz-ref-left>h1{font:600 clamp(48px,3.8vw,64px)/1 var(--serif);letter-spacing:-.035em;margin:8px 0 16px}.quiz-ref-left>.ornement-line{width:250px;margin:0 auto 20px}.quiz-ref-left>p{font-size:16px;line-height:1.5;color:#4d4943;margin:0 0 20px}
.quiz-ref-panel,.quiz-ref-card{position:relative;background:rgba(255,250,243,.9);border:1px solid #dec7a5;box-shadow:0 10px 28px rgba(80,54,25,.09)}
.quiz-ref-panel{border-radius:20px}.quiz-ref-panel h2{position:relative;z-index:1;display:flex;justify-content:center;align-items:center;gap:8px;font:600 18px var(--serif);margin:0 0 17px}.quiz-ref-panel h2 img{width:25px;height:25px}
.quiz-ref-progress{padding:20px 20px 17px;margin-bottom:12px}
.quiz-ref-steps{position:relative;z-index:1;display:flex;align-items:flex-start;justify-content:center}.quiz-ref-steps>i{height:2px;width:26px;border-top:2px dotted #cba76e;margin:23px 4px 0}
.quiz-ref-step{display:flex;flex-direction:column;align-items:center;gap:4px}.quiz-ref-step span{display:grid;place-items:center;width:47px;height:47px;border-radius:50%;border:1px solid currentColor;font:600 25px var(--serif);background:#fffaf3}.quiz-ref-step small{font-size:10px;white-space:nowrap}.quiz-ref-step.valide{color:#315d82}.quiz-ref-step.valide span{color:#fff;background:linear-gradient(145deg,#6f91b0,#315d82)}.quiz-ref-step.encours{color:#9e671f}.quiz-ref-step.encours span{border-width:2px}.quiz-ref-step.avenir:nth-of-type(3){color:#174d3b}.quiz-ref-step.avenir:nth-of-type(5){color:#741e2b}
.quiz-ref-objectif{position:relative;z-index:1;display:grid;grid-template-columns:1fr auto;align-items:center;gap:6px 14px;border-top:1px solid #e6d8c6;padding-top:13px;margin-top:14px;text-align:left}.quiz-ref-objectif span{grid-column:1/-1;font-size:11px}.quiz-ref-objectif>div{height:7px;border-radius:7px;background:#e3ddd3;overflow:hidden}.quiz-ref-objectif>div i{display:block;height:100%;background:linear-gradient(90deg,#b47429,#e2b574);border-radius:inherit}.quiz-ref-objectif em{font:normal 11px var(--sans)}
.quiz-ref-scores{padding:20px 20px 12px}.quiz-ref-scores h2{justify-content:flex-start;color:#b17b35;padding-left:3px}.quiz-ref-scores h2 span{color:var(--ink)}.quiz-ref-scores ul{position:relative;z-index:1;list-style:none;margin:0;padding:0}.quiz-ref-scores li{display:grid;grid-template-columns:30px 1fr auto 62px;align-items:center;gap:8px;padding:8px 0;margin:0;border-top:1px solid #e6d8c6;font-size:11px}.quiz-ref-scores li:first-child{border-top:0}.quiz-ref-scores img{width:28px;height:20px;object-fit:contain;opacity:.98}.quiz-ref-scores strong{font-weight:600}.quiz-ref-scores em{text-align:center;font:normal 9px var(--sans);padding:4px;border:1px solid #ddd2c3;border-radius:5px;background:#f7f2e9}.quiz-ref-scores .done em{color:#174d3b;background:#edf2e9}.quiz-ref-scores .active em{color:#9e671f;background:#fbf1e2}
.quiz-ref-center{width:100%;min-width:0;align-self:start;display:flex;flex-direction:column;justify-content:flex-start}
.quiz-ref-card{border-radius:22px;min-height:620px;padding:32px 52px 28px;display:flex;flex-direction:column}
.quiz-ref-card>header{position:relative;z-index:2;display:grid;grid-template-columns:auto 1fr auto;gap:18px;align-items:center;font-size:13px;margin-bottom:18px}.quiz-ref-track{height:7px;background:#e3ddd3;border-radius:8px;overflow:hidden}.quiz-ref-track i{display:block;height:100%;width:0;background:linear-gradient(90deg,#b2762f,#e2b574);border-radius:inherit;transition:width .25s}.quiz-ref-card>header strong{font-weight:500}
#quiz-zone{position:relative;z-index:1;flex:1;display:flex}
.quiz-ref-question{width:100%;display:flex;flex-direction:column}.quiz-ref-question .enonce{font:600 clamp(25px,2.2vw,34px)/1.12 var(--serif);margin:0 0 20px;color:#1b160f;min-height:39px}
.quiz-ref-options{display:grid;gap:8px}.quiz-ref-option{width:100%;min-height:52px;display:grid;grid-template-columns:48px 1fr 28px;align-items:center;gap:10px;text-align:left;padding:7px 16px;border:1px solid #dfd0bd;border-radius:999px;background:rgba(255,250,243,.7);color:#24201b;font:500 16px var(--serif);cursor:pointer;transition:border .15s,background .15s,transform .15s}.quiz-ref-option:hover:not(:disabled){border-color:#b88a4a;transform:translateX(3px)}.quiz-ref-option img{width:43px;height:29px;object-fit:contain;opacity:.98}.quiz-ref-option b{display:grid;place-items:center;width:25px;height:25px;border-radius:50%;background:#174d3b;color:#fff;font:700 15px var(--sans)}.quiz-ref-option.correcte{border:1.5px solid #174d3b;background:rgba(230,239,229,.44);color:#174d3b}.quiz-ref-option.correcte img{opacity:1}.quiz-ref-option.incorrecte{border-color:#a35359;background:rgba(247,235,232,.5)}
.quiz-visuel{margin:0 0 16px;border-radius:15px;overflow:hidden;border:1px solid #decdb7;display:flex;justify-content:center;background:#f3eee6}.quiz-visuel img{width:100%;max-height:360px;object-fit:contain}.quiz-visuel-large{min-height:260px;padding:8px}
.quiz-ref-feedback{display:none;visibility:hidden;opacity:0;min-height:0;margin-top:14px;transform:translateY(5px);grid-template-columns:78px 1fr;align-items:center;padding:10px 19px;border:1px solid transparent;border-radius:13px;transition:.2s}.quiz-ref-feedback.visible{display:grid;visibility:visible;opacity:1;transform:none;min-height:84px}.quiz-ref-feedback.good{background:#eff1e9;border-color:#c2cbb7;color:#174d3b}.quiz-ref-feedback.bad{background:#f7ebe8;border-color:#dfc2bd;color:#741e2b}.quiz-ref-feedback>img{width:70px;height:48px;object-fit:contain}.quiz-ref-feedback>div{display:flex;flex-direction:column}.quiz-ref-feedback strong{font:600 17px var(--serif);margin-bottom:2px}.quiz-ref-feedback span{font-size:11.5px;line-height:1.5;color:#35413a}
.quiz-ref-nav{display:flex;justify-content:space-between;gap:20px;padding:24px 2px 0}.quiz-ref-nav button{min-width:230px;height:58px;padding:0 24px;border:1px solid #c99451;border-radius:9px;background:rgba(255,250,243,.85);color:#2d241b;font:600 17px var(--serif);cursor:pointer}.quiz-ref-nav button:last-child{background:#12432f;color:white;border-color:#12432f}.quiz-ref-nav button:disabled{opacity:.35;cursor:not-allowed}.quiz-ref-nav button[hidden]{display:none}
.quiz-ref-session{align-self:center;min-width:0}.quiz-ref-session>.quiz-ref-panel{padding:26px 22px 20px}.session-title{position:relative;z-index:1;text-align:center}.session-title img{width:62px;height:62px}.session-title h2{font:600 18px var(--serif);margin:3px 0 10px}.quiz-ref-session .ornement-line{position:relative;z-index:1;width:180px;margin:0 auto 18px}
.session-streak{position:relative;z-index:1;width:150px;height:150px;margin:0 auto 18px;border:6px double #e5d9c8;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center}.session-streak img{width:27px;height:27px}.session-streak strong{font:600 40px/.9 var(--serif)}.session-streak span{font-size:10px}.session-streak small{font:600 11px var(--serif);color:#865529;margin-top:4px}
.session-stats{position:relative;z-index:1;list-style:none;margin:0;padding:5px 10px;border:1px solid #e5d8c6;border-radius:10px}.session-stats li{display:grid;grid-template-columns:23px 1fr auto;align-items:center;gap:9px;margin:0;padding:9px 0;border-top:1px solid #e8ddd0;font-size:10px}.session-stats li:first-child{border:0}.session-stats b{display:grid;place-items:center;width:20px;height:20px;border-radius:50%;color:white;font:600 13px var(--sans)}.session-stats b.good{background:#174d3b}.session-stats b.bad{background:#741e2b}.session-stats b.time{border:1.5px solid #a16b2e;background:transparent;color:#a16b2e}.session-stats strong{font:600 12px var(--sans)}
.session-tip{position:relative;z-index:1;border-top:1px solid #e4d5c3;margin-top:15px;padding:12px 4px 0;text-align:left}.session-tip h3{font:600 16px var(--serif);color:#9e671f;margin:0 0 5px}.session-tip p{font:italic 10.5px/1.5 var(--sans);color:#504940;margin:0}
.quiz-ref-related{max-width:1280px;margin:38px auto 0;padding:50px 55px 65px;border:1px solid #d7bd94;border-radius:24px;background:#fbf6ee}.quiz-ref-related h2{font:600 42px/1 var(--serif);margin:6px 0 25px}.quiz-ref-related .eyebrow{color:#885832}
.page-quiz-reference .quiz-resultat{justify-content:center;text-align:center;align-items:center}.page-quiz-reference .quiz-resultat .score{font:600 58px/1 var(--serif);color:#174d3b}.page-quiz-reference .quiz-resultat .appreciation{font:600 20px var(--serif)}
.quiz-resultat-stats{width:100%;display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}.quiz-resultat-stats>div{display:flex;flex-direction:column;justify-content:center;min-height:86px;padding:12px;border:1px solid #decdb7;border-radius:12px;background:#fbf6ee}.quiz-resultat-stats strong{font:600 24px var(--serif);color:#174d3b}.quiz-resultat-stats span{font-size:10px;color:#655d54}.quiz-resultat-actions{display:flex;flex-wrap:wrap;justify-content:center;gap:9px;margin-top:14px}

/* Grand pied de page éditorial. */
.shell:has(>.footer-luxury){max-width:1800px}
footer.site.footer-luxury{position:relative;overflow:hidden;margin-top:0;border:1px solid #d5b887;border-radius:28px;background:#fbf6ee;padding:94px clamp(55px,7vw,126px) 0;box-shadow:none;color:#302b25}
.footer-luxury::before,.footer-luxury::after{content:'';position:absolute;width:280px;height:500px;background:url('/assets/maquette-feuillage.png') center/contain no-repeat;opacity:.35;pointer-events:none}.footer-luxury::before{right:-30px;top:80px;transform:scaleX(-1) rotate(8deg)}.footer-luxury::after{left:-80px;bottom:30px;transform:rotate(-32deg)}
.footer-ornement{position:absolute;top:28px;left:50%;transform:translateX(-50%);display:flex;align-items:center;width:780px}.footer-ornement::before,.footer-ornement::after{content:'';height:1px;flex:1;background:linear-gradient(90deg,transparent,#b98746)}.footer-ornement::after{background:linear-gradient(90deg,#b98746,transparent)}.footer-ornement span{display:grid;place-items:center;width:38px;height:38px;margin:0 15px;color:#b98746;font-size:18px}
.footer-grid-luxury{position:relative;z-index:1;display:grid;grid-template-columns:1.35fr repeat(4,1fr);gap:55px;padding:50px 0 46px}.footer-grid-luxury>div:not(.footer-marque){border-left:1px solid #e0ccb0;padding-left:38px}.footer-grid-luxury h2{font:600 15px var(--serif);color:#9b6428;letter-spacing:.15em;margin:0 0 27px}.footer-grid-luxury h2::after{content:'';display:block;width:38px;height:2px;background:#b9823e;margin-top:13px}.footer-grid-luxury ul{list-style:none;margin:0;padding:0}.footer-grid-luxury li{margin:0 0 14px}.footer-grid-luxury li a{font-size:13px;color:#454039}.footer-grid-luxury li a::before{content:'›';font:600 22px var(--serif);color:#b9823e;margin-right:12px;vertical-align:-1px}
.footer-marque{text-align:left;padding-right:25px}.footer-marque .footer-fer{display:block;width:75px;height:75px;margin:0 auto 9px}.footer-marque>strong{display:block;text-align:center;font:500 15px/1.9 var(--sans);letter-spacing:.3em}.footer-marque>strong em{font-style:normal;color:#a66d31}.footer-marque .ornement-line{margin:24px 0 27px;width:260px}.footer-marque>p{font-size:15px;line-height:1.75;max-width:290px}
.footer-newsletter{position:relative;z-index:1;margin:0 0 52px 32%;border:1px solid #d7bd94;border-radius:15px;min-height:138px;display:grid;grid-template-columns:90px 1fr 1.6fr;gap:25px;align-items:center;padding:22px 28px;background:rgba(255,250,243,.62)}.newsletter-icon{display:grid;place-items:center;border-right:1px solid #dec9aa;height:86px;color:#c08c45;font-size:45px}.footer-newsletter h2{font:600 21px var(--serif);letter-spacing:0;color:#28221c;margin:0 0 5px}.footer-newsletter p{font-size:12px;line-height:1.6;margin:0}.footer-newsletter form{display:grid;grid-template-columns:1fr 150px;gap:10px}.footer-newsletter input,.footer-newsletter button{height:50px;border-radius:10px;font:12px var(--sans)}.footer-newsletter input{border:1px solid #ded1bf;background:#fffaf3;padding:0 18px}.footer-newsletter button{border:1px solid #12432f;background:#12432f;color:white;font:600 15px var(--serif)}.footer-newsletter small{grid-column:1/-1;font-size:10px;color:#70675c}
.footer-bas{position:relative;z-index:1;margin:0 calc(clamp(55px,7vw,126px) * -1);min-height:94px;border-top:1px solid #d7bd94;display:grid;grid-template-columns:1fr 1fr 1fr;align-items:center;padding:0 clamp(55px,7vw,126px);font-size:12px}.footer-bas>span:nth-child(2){text-align:center}.footer-social{display:flex;justify-content:flex-end;gap:18px}.footer-social a{display:grid;place-items:center;width:36px;height:36px;border:1px solid #b98746;border-radius:50%;color:#a66d31;font-weight:600}

/* La même matière et les mêmes proportions sur les pages de catalogue. */
body:not(.home-reference):not(.page-quiz-reference) main.site{background:#fffaf3;border-color:#d9c09a;border-radius:24px}
body:not(.home-reference):not(.page-quiz-reference) .quiz-card,body:not(.home-reference):not(.page-quiz-reference) .niveau-card{background:#fbf6ee;border-color:#dbc4a2}
body:not(.home-reference):not(.page-quiz-reference) h1{font-size:clamp(44px,5vw,68px);font-weight:600}

/* Hub Tous les quiz : bannière claire, texte HTML et enchaînement compact. */
.page-hub-reference .hub-hero-large{position:relative;isolation:isolate;aspect-ratio:5/2;max-height:510px;overflow:hidden;background:#f9f3e9}
.page-hub-reference .hub-hero-large>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center}
.page-hub-reference .hub-hero-large::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(255,250,243,.2) 0,rgba(255,250,243,.04) 48%,transparent 68%);pointer-events:none}
.page-hub-reference .hub-hero-large-texte{position:absolute;z-index:3;left:6.5%;top:50%;transform:translateY(-47%);width:42%;height:auto;overflow:visible;text-align:left}
.page-hub-reference .hub-hero-large-texte>img{display:block;position:static;width:58px;height:58px;margin:0 0 6px 8px;object-fit:contain}
.page-hub-reference .hub-hero-large-texte .eyebrow{color:#885832;font:600 11px var(--sans);letter-spacing:.3em}
.page-hub-reference .hub-hero-large-texte h1{font:600 clamp(45px,4.7vw,66px)/.95 var(--serif);letter-spacing:-.035em;color:#17130f;margin:14px 0 16px}
.page-hub-reference .hub-hero-large-texte .ornement-line{justify-content:flex-start;width:240px;margin-bottom:17px}
.page-hub-reference .hub-hero-large-texte .lede{max-width:39ch;color:#49433b;font-size:15px;line-height:1.65;margin:0}
.page-hub-reference .hub-hero-large .crumb-survol{background:rgba(255,250,243,.78);color:#4d443a;border:1px solid rgba(198,150,82,.45)}
.page-hub-reference .hub-hero-large .crumb-survol a{color:#174d3b}
.page-hub-reference .hero-bleed{margin-bottom:22px}
.page-hub-reference .categorie{margin:24px 0 34px}
.page-hub-reference .categorie:first-of-type{margin-top:12px}

/* Progression : médaillons laurés cohérents avec les sept niveaux. */
.progression-grid{grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:15px}
.progression-card{--level:#315d82;display:grid;grid-template-columns:100px minmax(0,1fr);align-items:center;gap:16px;min-height:142px;padding:17px 20px;background:#fbf6ee;border-color:#dbc4a2}
.progression-card.progression-g2{--level:#b67832}.progression-card.progression-g3{--level:#39705a}.progression-card.progression-g4{--level:#7b2230}.progression-card.progression-g5{--level:#76623d}.progression-card.progression-g6{--level:#565b83}.progression-card.progression-g7{--level:#8d6931}
.progression-card>.progression-medallion{position:relative;display:grid;place-items:center;width:96px;height:108px;min-height:0;background:transparent;border:0;border-radius:0;overflow:visible}
.progression-medallion>img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
.progression-horse{position:absolute;left:27px;top:27px;width:43px;height:43px;background:var(--level);-webkit-mask:var(--horse) center/contain no-repeat;mask:var(--horse) center/contain no-repeat}
.progression-medallion>b{position:absolute;bottom:5px;display:grid;place-items:center;width:25px;height:25px;border-radius:50%;background:#fffaf3;border:1px solid color-mix(in srgb,var(--level) 70%,#c69652);color:var(--level);font:600 14px var(--serif)}
.progression-card>.progression-card-copy{display:block;height:auto;min-height:0;background:transparent;border-radius:0;overflow:visible}
.progression-card-copy>span,.progression-card-copy>strong,.progression-card-copy>small{display:block}.progression-card-copy>span{color:var(--level);font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.progression-card-copy>strong{font:600 19px var(--serif);margin:4px 0 10px}.progression-card-copy>small{font-size:10px;color:var(--soft);margin-top:6px}
.progression-card-copy>.progression-bar{height:7px;background:#e3d9cb;border-radius:8px;overflow:hidden}.progression-card-copy>.progression-bar i{display:block;height:100%;background:var(--level);border-radius:inherit}

@media (max-width:1380px){
  .quiz-ref-stage{grid-template-columns:minmax(0,960px);padding-left:42px;padding-right:42px}.quiz-ref-card{padding-left:44px;padding-right:44px}.quiz-ref-panel{font-size:90%}
  .home-ref-copy{padding-left:58px}.home-ref-trust{gap:11px;font-size:12px}.btn-ref-primary{min-width:250px}.btn-ref-secondary{min-width:215px}
  .method-steps article{grid-template-columns:100px 1fr;padding-left:24px;padding-right:24px}.method-icon img{width:88px;height:88px}
  .footer-grid-luxury{gap:24px}.footer-grid-luxury>div:not(.footer-marque){padding-left:25px}
}
@media (max-width:1160px){
  .home-ref-hero{aspect-ratio:auto;min-height:770px}.home-ref-bg{object-position:62% center}.home-ref-copy{width:54%;padding-left:45px}.home-ref-copy h1{font-size:58px}.home-ref-copy>p:not(.eyebrow){font-size:16px}.home-ref-actions{gap:12px}.btn-ref-primary,.btn-ref-secondary{min-width:0;padding:0 19px;font-size:17px}.home-ref-trust{flex-wrap:wrap}
  .method-steps{grid-template-columns:1fr}.method-steps article{min-height:170px}.method-proof{grid-template-columns:1fr}.home-method{min-height:auto}.home-levels .niveaux-grid{grid-template-columns:repeat(3,1fr)}
  .quiz-ref-stage{grid-template-columns:minmax(0,820px);justify-content:center}.quiz-ref-left{display:none}.quiz-ref-background{min-height:0}.quiz-ref-session>.quiz-ref-panel{padding-left:16px;padding-right:16px}
  .footer-grid-luxury{grid-template-columns:1.3fr repeat(2,1fr)}.footer-grid-luxury>div:nth-child(n+4){margin-top:12px}.footer-newsletter{margin-left:0}.footer-marque{grid-row:span 2}
}
@media (max-width:820px){
  .home-reference,.page-quiz-reference{padding:6px}.home-ref-hero{min-height:0;display:flex;flex-direction:column;padding-top:55vw;background:#f9f3e9}.home-ref-bg{height:55vw;object-position:69% center}.home-ref-copy{width:100%;height:auto;padding:34px 25px 40px;align-items:center;text-align:center;background:linear-gradient(#fffaf3,#f8f1e6)}.hero-fer{width:48px;height:48px}.home-ref-copy>.eyebrow{transform:none;font-size:10px;margin-bottom:18px}.home-ref-copy h1{font-size:clamp(45px,13vw,63px)}.home-ref-copy>p:not(.eyebrow){font-size:15px}.home-ref-actions{width:100%;flex-direction:column}.btn-ref-primary,.btn-ref-secondary{width:100%;min-height:58px}.home-ref-trust{justify-content:center;white-space:normal}.home-ref-copy>.ornement-line{width:230px}
  .home-method,.home-levels{padding:30px 16px;border-radius:20px}.decor-leaf{width:130px;opacity:.32}.method-heading h2{font-size:46px}.method-heading>p:last-child{font-size:14px}.method-steps{margin-top:35px}.method-steps article{grid-template-columns:80px 1fr;padding:25px 18px 20px}.method-icon img{width:72px;height:72px}.method-steps h3{font-size:21px;white-space:normal}.method-proof{display:block}.testimonial{grid-template-columns:130px 1fr;height:210px;margin-bottom:15px}.testimonial>div{padding:14px}.testimonial blockquote{font-size:14px}.method-stats{height:auto;grid-template-columns:1fr;padding:0 20px}.method-stats>div{border-right:0;border-bottom:1px solid #dfc9aa;padding:20px}.method-cta{display:block;min-height:430px;padding:30px 20px;background:#fbf4e8}.method-cta>img{object-position:68% center;opacity:.35}.method-cta>div{position:relative}.method-cta .home-ref-actions{display:flex;margin-top:25px}.home-levels .niveaux-grid{grid-template-columns:repeat(2,1fr)}
  .quiz-ref-background{height:100%;min-height:0}.quiz-ref-stage{display:block;min-height:calc(100vh - 12px);padding:16px 12px 24px;border-radius:18px}.quiz-ref-center{min-height:calc(100vh - 52px)}.quiz-ref-card{min-height:calc(100vh - 135px);padding:23px 18px 18px;border-radius:17px}.quiz-ref-card>header{grid-template-columns:1fr auto;gap:8px;font-size:11px}.quiz-ref-track{grid-row:2;grid-column:1/-1}.quiz-ref-question .enonce{font-size:27px}.quiz-visuel-large{min-height:0;padding:0}.quiz-visuel img{max-height:145px}.quiz-ref-option{min-height:55px;grid-template-columns:34px 1fr 27px;padding:7px 13px;font-size:16px}.quiz-ref-option img{width:30px;height:30px}.quiz-ref-feedback{grid-template-columns:55px 1fr;padding:10px 13px;min-height:90px}.quiz-ref-feedback>img{width:48px;height:48px}.quiz-ref-nav{padding-top:13px}.quiz-ref-nav button{min-width:0;flex:1;padding:0 12px;height:52px;font-size:15px}.quiz-ref-session{display:none}.quiz-ref-related{margin-top:12px;padding:35px 18px 45px;border-radius:18px}.quiz-ref-related h2{font-size:36px}.page-quiz-reference .quiz-carousel{margin-right:-18px;padding-right:18px}.quiz-resultat-stats{grid-template-columns:repeat(2,1fr)}
  footer.site.footer-luxury{border-radius:20px;padding:78px 24px 0}.footer-ornement{width:75%;top:20px}.footer-grid-luxury{grid-template-columns:1fr 1fr;gap:30px 16px;padding-top:25px}.footer-marque{grid-column:1/-1;grid-row:auto;text-align:center}.footer-marque .ornement-line{margin-left:auto;margin-right:auto}.footer-marque>p{margin-left:auto;margin-right:auto}.footer-grid-luxury>div:not(.footer-marque){border-left:0;padding-left:0}.footer-grid-luxury h2{font-size:13px}.footer-newsletter{grid-template-columns:1fr;text-align:center;padding:24px 18px}.newsletter-icon{border-right:0;border-bottom:1px solid #dec9aa;height:55px}.footer-newsletter form{grid-template-columns:1fr}.footer-newsletter button,.footer-newsletter small{grid-column:1}.footer-bas{margin:0 -24px;grid-template-columns:1fr;text-align:center;gap:12px;padding:22px}.footer-bas>span:nth-child(2){text-align:center}.footer-social{justify-content:center}
}
@media (max-width:500px){.home-levels .niveaux-grid{grid-template-columns:1fr}.home-ref-trust i{display:none}.testimonial{grid-template-columns:100px 1fr}.method-cta h2{font-size:34px}.quiz-ref-nav button span{font-size:0}.quiz-ref-nav button span::after{content:'Précédente';font-size:14px}.quiz-ref-nav button:last-child span::after{content:'Suivante'}.footer-grid-luxury{grid-template-columns:1fr}.footer-grid-luxury>div{grid-column:auto}.footer-marque{grid-column:auto}}
@media (max-width:820px){
  .page-hub-reference .hub-hero-large{aspect-ratio:1.22;max-height:none}
  .page-hub-reference .hub-hero-large>img{object-position:69% center}
  .page-hub-reference .hub-hero-large::after{background:linear-gradient(90deg,rgba(255,250,243,.72),rgba(255,250,243,.28) 57%,transparent 82%)}
  .page-hub-reference .hub-hero-large-texte{left:7%;width:55%;transform:translateY(-41%)}
  .page-hub-reference .hub-hero-large-texte>img{width:42px;height:42px}
  .page-hub-reference .hub-hero-large-texte .eyebrow{font-size:8px;letter-spacing:.22em}
  .page-hub-reference .hub-hero-large-texte h1{font-size:clamp(34px,10vw,44px);margin:10px 0 13px}
  .page-hub-reference .hub-hero-large-texte .ornement-line{width:150px;margin-bottom:11px}
  .page-hub-reference .hub-hero-large-texte .lede{font-size:11px;line-height:1.5}
  .page-hub-reference .hub-hero-large .crumb-survol{left:10px;top:10px;font-size:9px;padding:5px 8px}
  .page-hub-reference .categorie{margin:20px 0 28px}
  .quiz-ref-stage{min-height:0}.quiz-ref-center{min-height:0}.quiz-ref-card{min-height:0}
  .quiz-ref-option{grid-template-columns:43px 1fr 27px}.quiz-ref-option img{width:39px;height:27px}
  .progression-grid{grid-template-columns:1fr}.progression-card{grid-template-columns:94px 1fr;min-height:132px}
}

/* Cohérence de marque et finition éditoriale des pages intérieures. */
.site-nav-row{min-height:86px;padding:8px 22px 8px 18px}
.site-brand{display:flex;align-items:center;gap:10px;min-width:190px;color:#201b16;font-size:inherit;letter-spacing:0}
.site-brand::before{content:none}
.site-brand>img{width:52px;height:52px;flex:0 0 auto;filter:drop-shadow(0 4px 7px rgba(86,55,20,.12))}
.site-brand-copy{display:flex!important;flex-direction:column;color:inherit!important;line-height:1}
.site-brand-copy strong{font:600 20px/1 var(--serif);letter-spacing:.055em;color:#172a21}
.site-brand-copy small{margin-top:6px;font:700 7px/1 var(--sans);letter-spacing:.24em;color:#a36c30}
.site-nav-sep{height:36px;background:#decbb0}
.site-nav a{font-size:12px;letter-spacing:.01em}.site-nav-current{color:#174d3b!important}

body:not(.home-reference):not(.page-quiz-reference) main.site{position:relative;overflow:hidden}
body:not(.home-reference):not(.page-quiz-reference) main.site::after{content:'';position:absolute;z-index:0;right:-95px;top:100px;width:260px;height:430px;background:url('/assets/maquette-feuillage.png') center/contain no-repeat;opacity:.09;pointer-events:none}
body:not(.home-reference):not(.page-quiz-reference) main.site>*{position:relative;z-index:1}
body:not(.home-reference):not(.page-quiz-reference) h1{font-family:var(--serif);font-weight:600;letter-spacing:-.035em;line-height:.98}
body:not(.home-reference):not(.page-quiz-reference) h2{font-family:var(--serif);font-weight:600;letter-spacing:-.015em}
body:not(.home-reference):not(.page-quiz-reference) .lede{max-width:78ch;font-size:15px;line-height:1.75;color:#5a534b}

.editorial-hero{position:relative;isolation:isolate;display:grid;grid-template-columns:105px minmax(0,1fr);align-items:center;gap:25px;margin:10px 0 26px;padding:36px 48px 38px;border:1px solid #d8bd93;border-radius:18px;background:linear-gradient(110deg,#fbf4e9 0%,#fffaf3 65%,#f4e9d8 100%);overflow:hidden}
.editorial-hero::before{content:'';position:absolute;z-index:-1;right:-12px;bottom:-118px;width:310px;height:370px;background:url('/assets/maquette-feuillage.png') center/contain no-repeat;opacity:.22;transform:rotate(15deg)}
.editorial-hero::after{content:'';position:absolute;left:47px;right:47px;top:16px;height:1px;background:linear-gradient(90deg,transparent,#c69652,transparent)}
.editorial-hero>img{width:94px;height:94px;object-fit:contain;filter:drop-shadow(0 7px 12px rgba(94,58,17,.12))}
.editorial-hero h1{font-size:clamp(46px,5vw,68px)!important;margin:8px 0 12px}.editorial-hero .lede{margin:0}
.editorial-hero-conseils>img,.editorial-hero-progress>img{width:76px;height:76px;margin:auto}

/* Niveaux : même voix typographique que la page d'accueil. */
.page-level-reference{--level:#315d82}.page-level-reference.level-2{--level:#b67832}.page-level-reference.level-3{--level:#39705a}.page-level-reference.level-4{--level:#7b2230}.page-level-reference.level-5{--level:#76623d}.page-level-reference.level-6{--level:#565b83}.page-level-reference.level-7{--level:#8d6931}
.page-level-reference .niveau-hero-large-texte{padding:32px 34px 30px;border-color:color-mix(in srgb,var(--level) 35%,#d6bb91);background:rgba(255,250,243,.94)}
.page-level-reference .niveau-hero-large-texte::before{content:'';position:absolute;left:26px;right:26px;top:14px;height:1px;background:linear-gradient(90deg,transparent,var(--level),transparent);opacity:.55}
.page-level-reference .niveau-hero-large-texte h1{font:600 clamp(44px,4.4vw,62px)/.93 var(--serif);letter-spacing:-.045em;margin:11px 0 17px;max-width:11ch}
.page-level-reference .niveau-hero-large-texte .eyebrow{color:var(--level);font-size:10px;letter-spacing:.28em}
.page-level-reference .niveau-hero-large-texte .lede{font-size:13px;line-height:1.65}
.page-level-reference .niveau-outils{justify-content:center;margin:22px 0 16px}
.niveau-facts{display:grid;grid-template-columns:repeat(3,1fr);max-width:810px;margin:0 auto 48px;border:1px solid #dcc7a8;border-radius:14px;background:#fbf6ee;box-shadow:0 8px 20px rgba(83,55,24,.05)}
.niveau-facts>div{padding:15px 25px;text-align:center}.niveau-facts>div+div{border-left:1px solid #dfcbae}
.niveau-facts strong,.niveau-facts span{display:block}.niveau-facts strong{font:600 28px/1 var(--serif);color:var(--level)}.niveau-facts span{margin-top:5px;font-size:9px;letter-spacing:.08em;text-transform:uppercase;color:#70675d}
.page-level-reference .categorie{margin:0 0 52px}
.categorie-heading{display:grid;grid-template-columns:74px 1fr;gap:18px;align-items:start;margin-bottom:18px}
.categorie-heading>span{display:grid;place-items:center;width:64px;height:64px;border:1px solid color-mix(in srgb,var(--level) 45%,#d7bd94);border-radius:50%;font:700 9px var(--sans);letter-spacing:.12em;color:var(--level);background:#fbf6ee}
.categorie-heading h2{font-size:36px;margin:0 0 3px}.categorie-heading .categorie-intro{margin:0;color:#6a6258;font-size:13px}
.other-levels-wrap{margin:66px 0 22px;padding:34px 38px;border:1px solid #d8bd93;border-radius:18px;background:#fbf6ee}.other-levels-wrap h2{font-size:38px;margin:6px 0 24px}
.other-levels{display:grid;grid-template-columns:repeat(6,1fr);gap:10px}.other-level{display:flex;align-items:center;gap:9px;padding:10px 12px;border:1px solid #decdb5;border-radius:10px;color:#342d26;background:#fffaf3}.other-level:hover{text-decoration:none;border-color:#b98746;transform:translateY(-2px)}.other-level span{display:grid;place-items:center;width:30px;height:30px;border:1px solid #b98746;border-radius:50%;font:600 15px var(--serif);color:#174d3b}.other-level strong{font-size:11px}

/* Fiches : couvertures visibles et véritable page éditoriale. */
.page-fiches-reference .source-officielle{margin:0 0 25px}.page-fiches-reference .fiches-grid{gap:18px;margin-top:0}
.page-fiches-reference .fiche-card{min-height:145px;padding:12px 24px 12px 13px;gap:22px;overflow:hidden;background:linear-gradient(105deg,#f7ecdc,#fffaf3)}
.fiche-card-art{width:78px;height:108px;object-fit:cover;border-radius:9px;box-shadow:0 7px 15px rgba(70,44,19,.17);transform:rotate(-2deg);transition:transform .25s ease}
.fiche-card:hover .fiche-card-art{transform:rotate(0) translateY(-2px)}
.fiche-card>span:last-child{min-width:0}.fiche-card strong{font:600 23px var(--serif);color:#282119}.fiche-card small{font-size:11px;line-height:1.55}.fiche-card em{margin-top:7px;letter-spacing:.03em}
.page-fiche-reference{--level:#315d82}.page-fiche-reference.level-2{--level:#b67832}.page-fiche-reference.level-3{--level:#39705a}.page-fiche-reference.level-4{--level:#7b2230}.page-fiche-reference.level-5{--level:#76623d}.page-fiche-reference.level-6{--level:#565b83}.page-fiche-reference.level-7{--level:#8d6931}
.page-fiche-reference .fiche-hero{position:relative;grid-template-columns:220px 1fr;gap:45px;margin:8px 0 28px;padding:30px 52px 30px 34px;border:1px solid #d8bd93;border-radius:18px;background:linear-gradient(105deg,color-mix(in srgb,var(--level) 7%,#fbf6ee),#fffaf3);overflow:hidden}
.page-fiche-reference .fiche-hero::after{content:'';position:absolute;right:-45px;bottom:-130px;width:330px;height:400px;background:url('/assets/maquette-feuillage.png') center/contain no-repeat;opacity:.15;pointer-events:none}.page-fiche-reference .fiche-hero>*{position:relative;z-index:1}
.page-fiche-reference .fiche-hero>img{width:190px;height:238px;object-fit:cover;border-radius:14px;transform:rotate(-2deg);box-shadow:0 14px 28px rgba(60,38,15,.18)}
.page-fiche-reference .fiche-hero h1{font-size:clamp(48px,5vw,68px)!important;margin:8px 0 12px}.page-fiche-reference .fiche-hero .lede{margin-bottom:13px}.page-fiche-reference .fiche-hero .ornement-line{width:230px;margin:0 0 18px;justify-content:flex-start}
.page-fiche-reference .axes-grid{gap:16px}.page-fiche-reference .axe-card{position:relative;padding:30px 25px 26px;background:#fbf6ee;border-color:#dcc5a2}.page-fiche-reference .axe-card::before{content:'';position:absolute;top:0;left:22px;right:22px;height:2px;background:linear-gradient(90deg,transparent,var(--level),transparent)}.page-fiche-reference .axe-card h2{font-size:25px;color:#2a241e}.page-fiche-reference .axe-index{color:var(--level)}

/* Conseils, progression et examen : cartes moins génériques. */
.page-conseils-reference .conseils-grid{gap:18px;margin-top:0}.page-conseils-reference .conseil-card{min-height:225px;padding:30px 34px;background:linear-gradient(135deg,#fbf6ee,#fffaf3);overflow:hidden}.conseil-card>b{position:absolute;right:24px;top:17px;font:600 48px/1 var(--serif);color:rgba(198,150,82,.18)}.conseil-card>span{display:block;max-width:70%;color:#8d5b29}.conseil-card h2{font-size:27px;line-height:1.05;margin:17px 0 12px;max-width:20ch}.conseil-card p{max-width:58ch;line-height:1.65}.conseil-card em{position:absolute;left:34px;bottom:26px}.conseil-card em i{display:inline-grid;place-items:center;width:25px;height:25px;margin-left:7px;border:1px solid #b98746;border-radius:50%;font-style:normal}
.page-progression-reference .progression-resume{margin-top:20px}.page-progression-reference .progression-resume>div{position:relative;padding:24px 28px;background:linear-gradient(125deg,#fbf6ee,#fffaf3);overflow:hidden}.page-progression-reference .progression-resume>div::after{content:'✦';position:absolute;right:21px;top:15px;color:#c69652;opacity:.55}.page-progression-reference .progression-resume strong{font-size:36px}.page-progression-reference .progression-card{box-shadow:0 7px 18px rgba(73,46,17,.045)}
.page-examen-reference .examen-hero{position:relative;display:grid;grid-template-columns:88px 1fr 165px;padding:32px 34px;background:linear-gradient(110deg,#f3eadc,#fffaf3);overflow:hidden}.page-examen-reference .examen-hero::after{content:'';position:absolute;right:110px;bottom:-185px;width:350px;height:390px;background:url('/assets/maquette-feuillage.png') center/contain no-repeat;opacity:.12}.exam-emblem{width:78px;height:78px;align-self:start}.page-examen-reference .examen-hero h1{font-size:clamp(45px,4.6vw,65px)!important;margin:8px 0 14px}.page-examen-reference .examen-hero>*,.page-examen-reference .exam-app{position:relative;z-index:1}.page-examen-reference .examen-horloge{box-shadow:0 11px 25px rgba(19,65,47,.14)}.page-examen-reference .exam-start{border-color:#d9c09a;background:linear-gradient(#fffaf3,#fbf4e9)}.page-examen-reference .exam-start h2{font-size:32px}.page-examen-reference .exam-levels button{font-family:var(--serif);font-size:16px;color:#2b241d;background:#fffaf3;border-color:#d8c4a7}.page-examen-reference .exam-levels button:hover{background:#174d3b;color:white;border-color:#174d3b}
.page-article-reference .article{max-width:900px;margin:0 auto}.page-article-reference .article>h1{font-size:clamp(49px,6vw,76px)!important}.page-article-reference .article>.lede{font-size:17px;margin-bottom:42px}.page-article-reference .article-section{border-top-color:#d7bd94}.page-article-reference .article-section>span{font-family:var(--serif);font-size:24px;color:#b98746}.page-article-reference .article-section h2{font-size:31px}

@media(max-width:980px){
  .site-brand{min-width:165px}.site-brand>img{width:44px;height:44px}.site-brand-copy strong{font-size:17px}.site-brand-copy small{font-size:6px}.site-nav{gap:17px}
  .other-levels{grid-template-columns:repeat(3,1fr)}
  .page-examen-reference .examen-hero{grid-template-columns:70px 1fr}.page-examen-reference .examen-horloge{grid-column:1/-1;width:100%}
}
@media(max-width:820px){
  .site-nav-row{min-height:70px;padding:7px 12px}.site-brand{min-width:0}.site-brand>img{width:43px;height:43px}.site-brand-copy strong{font-size:16px}.site-brand-copy small{display:none}.site-nav-sep{display:none}
  body:not(.home-reference):not(.page-quiz-reference) h1{font-size:clamp(39px,12vw,52px)}
  .editorial-hero{grid-template-columns:55px 1fr;gap:14px;padding:29px 20px 27px}.editorial-hero>img,.editorial-hero-conseils>img,.editorial-hero-progress>img{width:54px;height:54px}.editorial-hero h1{font-size:clamp(38px,10vw,49px)!important}.editorial-hero .lede{font-size:12px}
  .page-level-reference .niveau-hero-large-texte{padding:23px 21px}.page-level-reference .niveau-hero-large-texte h1{font-size:clamp(38px,10.5vw,50px);max-width:none}.page-level-reference .niveau-outils{margin-top:12px}.niveau-facts{margin-bottom:36px}.niveau-facts>div{padding:13px 6px}.niveau-facts strong{font-size:24px}.niveau-facts span{font-size:7px}
  .categorie-heading{grid-template-columns:52px 1fr;gap:12px}.categorie-heading>span{width:48px;height:48px;font-size:7px}.categorie-heading h2{font-size:30px}.other-levels-wrap{padding:27px 18px;margin-top:45px}.other-levels{grid-template-columns:repeat(2,1fr)}
  .page-fiches-reference .fiche-card{min-height:132px}.fiche-card-art{width:70px;height:98px}.fiche-card strong{font-size:21px}
  .page-fiche-reference .fiche-hero{grid-template-columns:100px 1fr;gap:18px;padding:22px 18px}.page-fiche-reference .fiche-hero>img{width:96px;height:140px}.page-fiche-reference .fiche-hero h1{font-size:clamp(38px,10vw,50px)!important}.page-fiche-reference .fiche-hero .ornement-line{display:none}.page-fiche-reference .fiche-hero .btn-primaire{padding:11px 14px;font-size:11px}
  .page-conseils-reference .conseil-card{min-height:230px;padding:25px}.conseil-card em{left:25px}.conseil-card h2{font-size:25px}
  .page-examen-reference .examen-hero{grid-template-columns:53px 1fr;padding:25px 20px}.exam-emblem{width:49px;height:49px}.page-examen-reference .examen-hero h1{font-size:clamp(38px,10vw,50px)!important}.page-examen-reference .examen-hero .lede{font-size:12px}
  .page-article-reference .article>h1{font-size:clamp(42px,12vw,58px)!important}
}
@media(max-width:500px){
  .site-brand-copy strong{font-size:14px;letter-spacing:.025em}.site-brand>img{width:39px;height:39px}.theme-toggle{margin-left:auto}
  .editorial-hero{grid-template-columns:1fr;text-align:center}.editorial-hero>img{margin:auto}.editorial-hero::after{left:20px;right:20px}
  .page-fiche-reference .fiche-hero{grid-template-columns:82px 1fr}.page-fiche-reference .fiche-hero>img{width:78px;height:116px}.page-fiche-reference .fiche-hero .lede{font-size:11px}.page-fiche-reference .fiche-hero .eyebrow{font-size:7px}
  .page-examen-reference .examen-hero{display:block;text-align:center}.page-examen-reference .exam-emblem{display:block;margin:0 auto 10px}.page-examen-reference .examen-hero h1{max-width:none;font-size:39px!important;margin-left:auto;margin-right:auto;overflow-wrap:normal;hyphens:none}.page-examen-reference .examen-horloge{margin-top:22px;text-align:left}
}

/* Passe de finition 9.5 : densité, interactions, accessibilité et continuité. */
html{font-kerning:normal;text-rendering:optimizeLegibility}
:target{scroll-margin-top:108px}
:where(a,button,input,summary,[tabindex]):focus-visible{outline:3px solid #9a6427;outline-offset:3px;box-shadow:0 0 0 5px rgba(255,250,243,.92);border-radius:8px}
:where(.btn-primaire,.btn-ref-primary,.nav-cta):focus-visible{outline-color:#f0c982}
.skip:focus{left:18px;top:18px;z-index:9999;border:1px solid #b98746;border-radius:8px;background:#fffaf3;color:#174d3b;box-shadow:0 10px 24px rgba(55,35,12,.16)}

body:not(.home-reference):not(.page-quiz-reference)>.shell:has(>header.site){position:sticky;top:8px;z-index:60}
header.site{min-height:80px;padding:5px 24px;background:rgba(255,250,243,.94);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px)}
.site-nav-row{min-height:66px;padding:4px 10px 4px 6px;gap:18px}.site-brand{min-width:184px}.site-brand>img{width:47px;height:47px}.site-brand-copy strong{font-size:19px}.site-brand-copy small{font-size:8px;color:#8d5923}
.site-nav{gap:24px}.site-nav a{font-size:13px}.site-nav a.site-nav-current{position:relative}.site-nav a.site-nav-current::after{content:'✦';position:absolute;left:50%;bottom:-9px;transform:translateX(-50%);font-size:7px;color:#a66d31;background:#fffaf3;padding:0 4px}
.nav-cta{margin-left:auto;display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:44px;padding:0 17px;border:1px solid #174d3b;border-radius:9px;background:#174d3b;color:white;font:600 14px var(--serif);white-space:nowrap;box-shadow:0 5px 13px rgba(23,77,59,.13);transition:transform .2s,background .2s,box-shadow .2s}.nav-cta:hover{color:white;text-decoration:none;background:#103c2d;transform:translateY(-1px);box-shadow:0 8px 17px rgba(23,77,59,.18)}.nav-cta img{width:20px;height:20px;filter:brightness(1.17)}

/* Les bannières restent immersives mais la première action apparaît dès le premier écran. */
@media(min-width:901px){.page-level-reference .niveau-hero-large>img{height:600px;object-fit:cover;object-position:center}.page-level-reference .niveau-hero-large{height:600px}.page-level-reference .niveau-hero-large-texte{top:49%}}
body:not(.home-reference) .shell:has(>.footer-luxury){max-width:1280px}

/* Contexte compact du quiz lorsque les panneaux latéraux disparaissent. */
.quiz-mobile-context{display:flex;align-items:center;gap:12px;margin:0 0 10px;padding:9px 12px;border:1px solid #d8bf99;border-radius:12px;background:rgba(255,250,243,.92);box-shadow:0 7px 18px rgba(74,48,20,.06)}
.quiz-mobile-context>a{display:grid;place-items:center;flex:0 0 auto;width:42px;height:42px;border:1px solid #c69a5b;border-radius:50%;color:#174d3b;font:600 23px var(--serif)}.quiz-mobile-context>a:hover{text-decoration:none;background:#f4eadb}.quiz-mobile-context>span{min-width:0;display:flex;flex-direction:column}.quiz-mobile-context small{font-size:9px;letter-spacing:.2em;color:#8d5923}.quiz-mobile-context h1{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font:600 18px var(--serif);color:#211a14;margin:0}
@media(max-width:1160px){.quiz-mobile-context{display:flex}}

/* Micro-interactions sobres, sans modifier les dimensions validées des cartes. */
.quiz-card-img,.niveau-badge{transition:transform .45s cubic-bezier(.2,.65,.3,1),filter .3s}.quiz-card:hover .quiz-card-img,.niveau-card:hover .niveau-badge{transform:scale(1.025);filter:saturate(1.04)}
.quiz-ref-option img,.quiz-ref-scores img{filter:contrast(1.18) saturate(1.28) brightness(.84)}
.quiz-card-corps{position:relative;padding-right:52px}.quiz-card-corps::after{content:'→';position:absolute;right:15px;bottom:17px;display:grid;place-items:center;width:27px;height:27px;border:1px solid #bd8b49;border-radius:50%;color:#986024;font:500 18px/1 var(--serif);transition:transform .2s,background .2s,color .2s}.quiz-card:hover .quiz-card-corps::after{transform:translateX(2px);background:#174d3b;border-color:#174d3b;color:white}
.quiz-carousel{overscroll-behavior-inline:contain;scrollbar-width:none}.quiz-carousel::-webkit-scrollbar{display:none}.quiz-carousel-controls button,.nav-burger,.footer-social a{min-width:44px;width:44px;height:44px;min-height:44px}
.btn-ref-primary,.btn-primaire,.nav-cta{position:relative;isolation:isolate;overflow:hidden}.btn-ref-primary::after,.btn-primaire::after,.nav-cta::after{content:'';position:absolute;z-index:-1;inset:-40% auto -40% -65%;width:38%;transform:skewX(-18deg);background:linear-gradient(90deg,transparent,rgba(255,255,255,.17),transparent);transition:left .5s ease}.btn-ref-primary:hover::after,.btn-primaire:hover::after,.nav-cta:hover::after{left:125%}
.btn-texte{min-height:44px;padding:8px 12px;border-radius:8px;text-decoration:underline;text-underline-offset:3px}.fiche-sommaire a{min-height:38px;display:inline-flex;align-items:center}

/* Iconographie fonctionnelle sans caractères d'échecs. */
.home-ref-trust>span{display:inline-flex;align-items:center;gap:7px}.home-ref-trust img{width:18px;height:18px;object-fit:contain}.home-ref-trust b{display:grid;place-items:center;width:17px;height:17px;border:1px solid #b98746;border-radius:50%;color:#174d3b;font-size:10px}.cta-trust{display:flex!important;align-items:center;justify-content:center;gap:9px}.cta-trust i{width:3px;height:3px;border-radius:50%;background:#b98746}

/* Footer sans faux formulaire ni liens morts. */
.footer-resources{grid-template-columns:90px 1fr 1.4fr}.newsletter-icon img{width:55px;height:55px}.footer-resource-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px}.footer-resource-actions a{min-height:50px;display:flex;align-items:center;justify-content:center;gap:13px;border:1px solid #cda66e;border-radius:10px;background:#fffaf3;color:#2b2219;font:600 16px var(--serif)}.footer-resource-actions a:first-child{background:#174d3b;border-color:#174d3b;color:#fff}.footer-resource-actions a:hover{text-decoration:none;transform:translateY(-1px)}.footer-resource-actions span{color:#c69652;font-size:22px}.footer-compliance{display:flex;align-items:center;gap:8px}.footer-compliance img{width:23px;height:23px}.footer-shortcuts a{font:600 15px var(--serif)}

/* Guides de révision longs, illustrés et téléchargeables. */
.fiches-resume{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:24px 0 31px}.fiches-resume>div{display:flex;align-items:baseline;gap:12px;padding:18px 22px;border:1px solid #dcc6a5;border-radius:15px;background:linear-gradient(135deg,#fbf6ee,#fffaf3)}.fiches-resume strong{font:600 32px/1 var(--serif);color:#174d3b}.fiches-resume span{font-size:12px;color:#655d54}
.fiche-hero-actions{display:flex;flex-wrap:wrap;gap:10px}.fiche-download{border-color:#b9823e;color:#6e451f;background:rgba(255,250,243,.72)}
.fiche-section{margin:64px 0}.fiche-section-heading{margin-bottom:25px}.fiche-section-heading h2{max-width:20ch;margin:5px 0 0;font-size:clamp(36px,4.4vw,54px);line-height:1}.fiche-planches{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}.fiche-planche{margin:0;overflow:hidden;border:1px solid #d9bf98;border-radius:18px;background:#fbf6ee;box-shadow:0 11px 27px rgba(72,43,16,.07)}.fiche-planche img{display:block;width:100%;aspect-ratio:3/2;object-fit:cover;background:#fbf6ee}.fiche-planche figcaption{display:grid;grid-template-columns:90px 1fr;gap:15px;align-items:start;padding:18px 20px;border-top:1px solid #dfccb0}.fiche-planche figcaption span{font-size:9px;font-weight:800;letter-spacing:.15em;color:#956022}.fiche-planche figcaption p{margin:0;font-size:13px;line-height:1.55;color:#5f574e}
.fiche-cours{max-width:980px}.fiche-chapitre{display:grid;grid-template-columns:64px minmax(0,1fr);gap:22px;padding:29px 0;border-top:1px solid #dcc5a2}.fiche-chapitre:last-child{border-bottom:1px solid #dcc5a2}.fiche-chapitre>span{font:600 24px/1 var(--serif);color:#b57d3a}.fiche-chapitre h3{margin:0 0 9px;font:600 29px/1.1 var(--serif);color:#282119}.fiche-chapitre p{max-width:75ch;margin:0 0 15px;color:#544d45;line-height:1.72}.fiche-chapitre ul{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px 22px;margin:0;padding:0;list-style:none}.fiche-chapitre li{position:relative;padding-left:19px;font-size:13px;line-height:1.55;color:#655d54}.fiche-chapitre li::before{content:'✦';position:absolute;left:0;top:1px;color:#b9823e;font-size:9px}
.fiche-checklist{padding:34px;border:1px solid #2f6753;border-radius:22px;background:linear-gradient(135deg,#143e2f,#1c523e);color:white}.fiche-checklist .eyebrow{color:#e6bd79}.fiche-checklist .fiche-section-heading h2{color:white}.fiche-checklist ul{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:0;padding:0;list-style:none}.fiche-checklist li{display:flex;gap:12px;align-items:flex-start;padding:13px 15px;border:1px solid rgba(255,255,255,.16);border-radius:12px;background:rgba(255,255,255,.055);font-size:13px;line-height:1.5}.fiche-checklist li span{display:grid;place-items:center;flex:0 0 21px;width:21px;height:21px;border:1px solid #d9ae68;border-radius:50%;color:#f0ca8e;font-size:11px}
.fiche-erreurs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.fiche-erreurs article{padding:23px;border:1px solid #e0c5b9;border-radius:16px;background:linear-gradient(145deg,#fff7f2,#fbf6ee)}.fiche-erreurs article>span{font-size:9px;font-weight:800;letter-spacing:.15em;color:#8b3037}.fiche-erreurs h3{margin:8px 0 10px;font:600 21px/1.15 var(--serif)}.fiche-erreurs p{margin:0;font-size:13px;line-height:1.6;color:#5e554d}.fiche-erreurs p strong{color:#174d3b}
.fiche-lexique dl{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 28px;margin:0}.fiche-lexique dl>div{display:grid;grid-template-columns:145px 1fr;gap:16px;padding:17px 0;border-top:1px solid #dcc5a2}.fiche-lexique dt{font:600 19px/1.2 var(--serif);color:#174d3b}.fiche-lexique dd{margin:0;font-size:12px;line-height:1.55;color:#655d54}.fiche-source{margin:50px 0}.page-fiche-reference .quiz-carousel-shell{margin-top:0}

/* Lecture longue cadrée comme le reste du produit. */
.page-legal-reference .legal-document{position:relative;max-width:840px;margin:5px auto 35px;padding:43px 50px 48px;border:1px solid #d7bd94;border-radius:18px;background:linear-gradient(145deg,#fbf6ee,#fffaf3);overflow:hidden}.page-legal-reference .legal-document::after{content:'';position:absolute;right:-95px;bottom:-160px;width:340px;height:430px;background:url('/assets/maquette-feuillage.png') center/contain no-repeat;opacity:.12}.legal-document>*{position:relative;z-index:1}.legal-document>img{display:block;width:72px;height:72px;margin:0 0 10px}.legal-document h1{margin:7px 0 22px}.legal-document h2{font-size:30px;margin:38px 0 10px;padding-top:25px;border-top:1px solid #d9c3a1}.legal-document p{max-width:70ch;color:#4f4840}.legal-document .lede{font-size:16px}

/* Examen : le moteur actif reprend la même grammaire que les quiz. */
.page-examen-reference .exam-app{max-width:860px}.page-examen-reference .quiz-question{padding:30px 34px;border:1px solid #d7bd94;border-radius:16px;background:linear-gradient(#fffaf3,#fbf6ee);box-shadow:0 10px 24px rgba(75,47,18,.05)}.page-examen-reference .quiz-question .enonce{font:600 30px/1.15 var(--serif);color:#211a14;margin:0 0 23px}.page-examen-reference .quiz-options{display:grid;gap:10px}.page-examen-reference .quiz-option{min-height:52px;padding:10px 18px;text-align:left;border:1px solid #dbc9af;border-radius:999px;background:#fffaf3;color:#29221b;font:500 17px var(--serif);cursor:pointer;transition:transform .18s,border-color .18s,background .18s}.page-examen-reference .quiz-option:hover{transform:translateX(3px);border-color:#a87635;background:#f9f0e4}.page-examen-reference .quiz-barre{height:7px;margin:0 0 14px;background:#e3d9cb}.page-examen-reference .quiz-barre i{background:linear-gradient(90deg,#a96d29,#dfb16d)}

/* Contrastes : l'or clair reste décoratif, les textes utilisent une teinte plus profonde. */
:root{--soft:#6f675e;--gold-ink:#925b20}.site-brand-copy small,.quiz-mobile-context small,.page-level-reference.level-2 .categorie-heading>span,.progression-g2 .progression-card-copy>span{color:#8a5522}.quiz-ref-scores li,.session-stats li{font-size:11px}.niveau-facts span{font-size:10px;color:#655d54}

/* Révélations au défilement, activées uniquement lorsque le navigateur les gère. */
.ui-reveal{opacity:0;transform:translateY(13px);transition:opacity .52s ease var(--reveal-delay,0ms),transform .52s cubic-bezier(.2,.7,.3,1) var(--reveal-delay,0ms)}.ui-reveal.ui-visible{opacity:1;transform:none}

@media(max-width:860px){
  body:not(.home-reference):not(.page-quiz-reference)>.shell:has(>header.site){top:5px}
  header.site{min-height:70px;padding:4px 10px}.site-nav-row{min-height:58px;padding:2px 4px;gap:10px}.site-brand{min-width:0}.site-brand>img{width:43px;height:43px}.site-brand-copy strong{font-size:16px}.site-brand-copy small{font-size:8px}.nav-cta{display:none}.nav-burger{margin-left:auto}.site-nav a{font-size:14px}.site-nav a.site-nav-current::after{content:none}
  .footer-resources{grid-template-columns:1fr}.footer-resource-actions{grid-template-columns:1fr}.newsletter-icon{border:0;border-bottom:1px solid #dec9aa}.footer-compliance{justify-content:center}
  .page-examen-reference .quiz-question{padding:23px 18px}.page-examen-reference .quiz-question .enonce{font-size:26px}.page-examen-reference .quiz-option{font-size:16px}
  .niveau-facts span{font-size:9px}.page-fiche-reference .fiche-hero .eyebrow{font-size:9px}
}
@media(max-width:520px){
  .page-hub-reference .hub-hero-large{aspect-ratio:auto;display:flex;flex-direction:column;padding-top:62vw;background:#f9f3e9}.page-hub-reference .hub-hero-large>img{position:absolute;top:0;height:62vw;object-position:68% center}.page-hub-reference .hub-hero-large::after{height:62vw;background:linear-gradient(90deg,rgba(255,250,243,.48),transparent 75%)}.page-hub-reference .hub-hero-large-texte{position:relative;left:auto;top:auto;transform:none;width:auto;padding:24px 24px 28px;background:linear-gradient(#fffaf3,#f8f1e6);text-align:center}.page-hub-reference .hub-hero-large-texte>img{margin:0 auto 5px}.page-hub-reference .hub-hero-large-texte .ornement-line{justify-content:center;margin:0 auto 12px}.page-hub-reference .hub-hero-large-texte .lede{font-size:13px;max-width:34ch;margin:auto}.page-hub-reference .hub-hero-large .crumb-survol{z-index:5}
  .page-fiche-reference .fiche-hero{grid-template-columns:1fr;text-align:center}.page-fiche-reference .fiche-hero>img{width:105px;height:145px;margin:auto}.page-fiche-reference .fiche-hero .btn-primaire{margin:auto}.page-fiche-reference .fiche-hero .lede{font-size:13px}
  .page-legal-reference .legal-document{padding:32px 22px}.legal-document>img{margin-left:auto;margin-right:auto}.legal-document>.eyebrow{text-align:center}.legal-document h1{text-align:center}
  .testimonial,.method-stats{height:auto;min-height:220px}.testimonial{min-height:230px}
  .cta-trust{flex-wrap:wrap;line-height:1.5}
}
@media(max-width:900px){.fiches-resume{grid-template-columns:1fr}.fiche-planches{grid-template-columns:1fr}.fiche-chapitre ul,.fiche-checklist ul,.fiche-erreurs,.fiche-lexique dl{grid-template-columns:1fr}.fiche-section{margin:48px 0}.fiche-section-heading h2{font-size:40px}.fiche-hero-actions{justify-content:flex-start}}
@media(max-width:620px){.fiche-chapitre{grid-template-columns:40px 1fr;gap:12px}.fiche-chapitre h3{font-size:24px}.fiche-checklist{padding:25px 18px}.fiche-planche figcaption{grid-template-columns:1fr;gap:5px}.fiche-lexique dl>div{grid-template-columns:1fr;gap:7px}.fiche-hero-actions{justify-content:center}.fiche-hero-actions a{width:100%}.fiche-sommaire{position:relative;top:auto;border-radius:16px}.fiches-resume>div{justify-content:center}.fiche-section-heading h2{font-size:35px}}
@media(hover:none){.quiz-card:hover,.niveau-card:hover,.fiche-card:hover,.conseil-card:hover,.nav-cta:hover,.btn-primaire:hover,.btn-ref-primary:hover{transform:none}.quiz-card:hover .quiz-card-img,.niveau-card:hover .niveau-badge{transform:none}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto!important}*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}.ui-reveal{opacity:1!important;transform:none!important}}
`;
