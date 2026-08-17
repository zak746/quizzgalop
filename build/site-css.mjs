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

@media (max-width:600px){
  body{padding:10px;gap:10px;font-size:16px}
  header.site{padding:12px 16px;min-height:auto}
  main.site{border-radius:1.5rem}
  footer.site{padding:24px 20px;border-radius:1.5rem}
}
@media (max-width:760px){
  .parcours-rapide,.axes-grid,.pieges-grid,.features-grid,.pricing,.progression-resume{grid-template-columns:1fr}
  .fiches-grid,.conseils-grid{grid-template-columns:1fr}.fiche-hero{grid-template-columns:100px 1fr;gap:18px}.fiche-sommaire{position:static;border-radius:1.2rem}.source-officielle{display:block}.source-officielle span{display:block;margin-bottom:5px}.diagnostic{align-items:flex-start;flex-direction:column}.premium-hero{grid-template-columns:1fr;padding:30px}.pricing-star{transform:none}.exam-levels{grid-template-columns:repeat(2,1fr);margin:20px 0}.quiz-question{padding:22px 18px}.examen-hero{align-items:flex-start;flex-direction:column}.examen-horloge{width:100%}.quiz-carousel{margin-right:-22px;padding-right:22px}.quiz-carousel .quiz-card{flex-basis:min(78vw,258px)}
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
`;
