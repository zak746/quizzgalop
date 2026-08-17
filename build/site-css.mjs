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

/* Quiz immersif — trois colonnes, carte centrale et session latérale. */
.page-quiz-reference{padding:9px;gap:0;background:#fbf8f2;overflow-x:hidden}
.page-quiz-reference .shell-main{max-width:1800px;display:block}
.page-quiz-reference main.site{position:relative;padding:0;border:0;border-radius:0;background:transparent;box-shadow:none;overflow:visible}
.quiz-ref-background{position:absolute;inset:0 0 auto;height:min(100vh - 18px,1013px);min-height:830px;z-index:-1;overflow:hidden;border-radius:24px}
.quiz-ref-background img{width:100%;height:100%;object-fit:cover}
.quiz-ref-stage{min-height:calc(100vh - 18px);height:auto;border:1px solid #d3b17a;border-radius:24px;display:grid;grid-template-columns:minmax(330px,430px) minmax(580px,760px) minmax(245px,292px);justify-content:space-between;align-items:center;gap:28px;padding:54px 52px 50px 48px;overflow:hidden}
.quiz-ref-left{align-self:stretch;display:flex;flex-direction:column;justify-content:center;text-align:center;min-width:0}
.quiz-ref-brand{display:flex;flex-direction:column;align-items:center;color:#815233;font:600 12px var(--sans);letter-spacing:.35em}.quiz-ref-brand img{width:54px;height:54px;margin-bottom:6px}
.quiz-ref-left>h1{font:600 clamp(48px,3.8vw,64px)/1 var(--serif);letter-spacing:-.035em;margin:8px 0 16px}.quiz-ref-left>.ornement-line{width:250px;margin:0 auto 20px}.quiz-ref-left>p{font-size:16px;line-height:1.5;color:#4d4943;margin:0 0 20px}
.quiz-ref-panel,.quiz-ref-card{position:relative;background:rgba(255,250,243,.9);border:1px solid #dec7a5;box-shadow:0 10px 28px rgba(80,54,25,.09)}
.quiz-ref-panel{border-radius:20px}.quiz-ref-panel h2{position:relative;z-index:1;display:flex;justify-content:center;align-items:center;gap:8px;font:600 18px var(--serif);margin:0 0 17px}.quiz-ref-panel h2 img{width:25px;height:25px}
.quiz-ref-progress{padding:20px 20px 17px;margin-bottom:12px}
.quiz-ref-steps{position:relative;z-index:1;display:flex;align-items:flex-start;justify-content:center}.quiz-ref-steps>i{height:2px;width:26px;border-top:2px dotted #cba76e;margin:23px 4px 0}
.quiz-ref-step{display:flex;flex-direction:column;align-items:center;gap:4px}.quiz-ref-step span{display:grid;place-items:center;width:47px;height:47px;border-radius:50%;border:1px solid currentColor;font:600 25px var(--serif);background:#fffaf3}.quiz-ref-step small{font-size:10px;white-space:nowrap}.quiz-ref-step.valide{color:#315d82}.quiz-ref-step.valide span{color:#fff;background:linear-gradient(145deg,#6f91b0,#315d82)}.quiz-ref-step.encours{color:#9e671f}.quiz-ref-step.encours span{border-width:2px}.quiz-ref-step.avenir:nth-of-type(3){color:#174d3b}.quiz-ref-step.avenir:nth-of-type(5){color:#741e2b}
.quiz-ref-objectif{position:relative;z-index:1;display:grid;grid-template-columns:1fr auto;align-items:center;gap:6px 14px;border-top:1px solid #e6d8c6;padding-top:13px;margin-top:14px;text-align:left}.quiz-ref-objectif span{grid-column:1/-1;font-size:11px}.quiz-ref-objectif>div{height:7px;border-radius:7px;background:#e3ddd3;overflow:hidden}.quiz-ref-objectif>div i{display:block;height:100%;background:linear-gradient(90deg,#b47429,#e2b574);border-radius:inherit}.quiz-ref-objectif em{font:normal 11px var(--sans)}
.quiz-ref-scores{padding:20px 20px 12px}.quiz-ref-scores h2{justify-content:flex-start;color:#b17b35;padding-left:3px}.quiz-ref-scores h2 span{color:var(--ink)}.quiz-ref-scores ul{position:relative;z-index:1;list-style:none;margin:0;padding:0}.quiz-ref-scores li{display:grid;grid-template-columns:26px 1fr auto 62px;align-items:center;gap:8px;padding:8px 0;margin:0;border-top:1px solid #e6d8c6;font-size:11px}.quiz-ref-scores li:first-child{border-top:0}.quiz-ref-scores img{width:22px;height:22px;opacity:.75}.quiz-ref-scores li:nth-child(2) img{filter:sepia(1)}.quiz-ref-scores strong{font-weight:600}.quiz-ref-scores em{text-align:center;font:normal 9px var(--sans);padding:4px;border:1px solid #ddd2c3;border-radius:5px;background:#f7f2e9}.quiz-ref-scores .done em{color:#174d3b;background:#edf2e9}.quiz-ref-scores .active em{color:#9e671f;background:#fbf1e2}
.quiz-ref-center{min-width:0;align-self:stretch;display:flex;flex-direction:column;justify-content:center}
.quiz-ref-card{border-radius:22px;min-height:620px;padding:28px 44px 22px;display:flex;flex-direction:column}
.quiz-ref-card>header{position:relative;z-index:2;display:grid;grid-template-columns:auto 1fr auto;gap:18px;align-items:center;font-size:13px;margin-bottom:18px}.quiz-ref-track{height:7px;background:#e3ddd3;border-radius:8px;overflow:hidden}.quiz-ref-track i{display:block;height:100%;width:0;background:linear-gradient(90deg,#b2762f,#e2b574);border-radius:inherit;transition:width .25s}.quiz-ref-card>header strong{font-weight:500}
#quiz-zone{position:relative;z-index:1;flex:1;display:flex}
.quiz-ref-question{width:100%;display:flex;flex-direction:column}.quiz-ref-question .enonce{font:600 clamp(25px,2.2vw,34px)/1.12 var(--serif);margin:0 0 20px;color:#1b160f;min-height:39px}
.quiz-ref-options{display:grid;gap:8px}.quiz-ref-option{width:100%;min-height:52px;display:grid;grid-template-columns:42px 1fr 28px;align-items:center;gap:10px;text-align:left;padding:7px 16px;border:1px solid #dfd0bd;border-radius:999px;background:rgba(255,250,243,.7);color:#24201b;font:500 16px var(--serif);cursor:pointer;transition:border .15s,background .15s,transform .15s}.quiz-ref-option:hover:not(:disabled){border-color:#b88a4a;transform:translateX(3px)}.quiz-ref-option img{width:34px;height:34px;opacity:.68;filter:grayscale(1)}.quiz-ref-option b{display:grid;place-items:center;width:25px;height:25px;border-radius:50%;background:#174d3b;color:#fff;font:700 15px var(--sans)}.quiz-ref-option.correcte{border:1.5px solid #174d3b;background:rgba(230,239,229,.44);color:#174d3b}.quiz-ref-option.correcte img{opacity:1;filter:none}.quiz-ref-option.incorrecte{border-color:#a35359;background:rgba(247,235,232,.5)}
.quiz-visuel{margin:0 0 10px;border-radius:13px;overflow:hidden;border:1px solid #decdb7;display:flex;justify-content:center;background:#f3eee6}.quiz-visuel img{width:100%;max-height:145px;object-fit:contain}
.quiz-ref-feedback{visibility:hidden;opacity:0;min-height:88px;margin-top:auto;transform:translateY(5px);display:grid;grid-template-columns:68px 1fr;align-items:center;padding:10px 19px;border:1px solid transparent;border-radius:13px;transition:.2s}.quiz-ref-feedback.visible{visibility:visible;opacity:1;transform:none}.quiz-ref-feedback.good{background:#eff1e9;border-color:#c2cbb7;color:#174d3b}.quiz-ref-feedback.bad{background:#f7ebe8;border-color:#dfc2bd;color:#741e2b}.quiz-ref-feedback>img{width:58px;height:58px}.quiz-ref-feedback>div{display:flex;flex-direction:column}.quiz-ref-feedback strong{font:600 17px var(--serif);margin-bottom:2px}.quiz-ref-feedback span{font-size:11.5px;line-height:1.5;color:#35413a}
.quiz-ref-nav{display:flex;justify-content:space-between;gap:20px;padding:24px 2px 0}.quiz-ref-nav button{min-width:230px;height:58px;padding:0 24px;border:1px solid #c99451;border-radius:9px;background:rgba(255,250,243,.85);color:#2d241b;font:600 17px var(--serif);cursor:pointer}.quiz-ref-nav button:last-child{background:#12432f;color:white;border-color:#12432f}.quiz-ref-nav button:disabled{opacity:.35;cursor:not-allowed}.quiz-ref-nav button[hidden]{display:none}
.quiz-ref-session{align-self:center;min-width:0}.quiz-ref-session>.quiz-ref-panel{padding:26px 22px 20px}.session-title{position:relative;z-index:1;text-align:center}.session-title img{width:62px;height:62px}.session-title h2{font:600 18px var(--serif);margin:3px 0 10px}.quiz-ref-session .ornement-line{position:relative;z-index:1;width:180px;margin:0 auto 18px}
.session-streak{position:relative;z-index:1;width:150px;height:150px;margin:0 auto 18px;border:6px double #e5d9c8;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center}.session-streak img{width:27px;height:27px}.session-streak strong{font:600 40px/.9 var(--serif)}.session-streak span{font-size:10px}.session-streak small{font:600 11px var(--serif);color:#865529;margin-top:4px}
.session-stats{position:relative;z-index:1;list-style:none;margin:0;padding:5px 10px;border:1px solid #e5d8c6;border-radius:10px}.session-stats li{display:grid;grid-template-columns:23px 1fr auto;align-items:center;gap:9px;margin:0;padding:9px 0;border-top:1px solid #e8ddd0;font-size:10px}.session-stats li:first-child{border:0}.session-stats b{display:grid;place-items:center;width:20px;height:20px;border-radius:50%;color:white;font:600 13px var(--sans)}.session-stats b.good{background:#174d3b}.session-stats b.bad{background:#741e2b}.session-stats b.time{border:1.5px solid #a16b2e;background:transparent;color:#a16b2e}.session-stats strong{font:600 12px var(--sans)}
.session-tip{position:relative;z-index:1;border-top:1px solid #e4d5c3;margin-top:15px;padding:12px 4px 0;text-align:left}.session-tip h3{font:600 16px var(--serif);color:#9e671f;margin:0 0 5px}.session-tip p{font:italic 10.5px/1.5 var(--sans);color:#504940;margin:0}
.quiz-ref-related{max-width:1280px;margin:38px auto 0;padding:50px 55px 65px;border:1px solid #d7bd94;border-radius:24px;background:#fbf6ee}.quiz-ref-related h2{font:600 42px/1 var(--serif);margin:6px 0 25px}.quiz-ref-related .eyebrow{color:#885832}
.page-quiz-reference .quiz-resultat{justify-content:center;text-align:center;align-items:center}.page-quiz-reference .quiz-resultat .score{font:600 58px/1 var(--serif);color:#174d3b}.page-quiz-reference .quiz-resultat .appreciation{font:600 20px var(--serif)}

/* Grand pied de page éditorial. */
.shell:has(>.footer-luxury){max-width:1800px}
footer.site.footer-luxury{position:relative;overflow:hidden;margin-top:0;border:1px solid #d5b887;border-radius:28px;background:#fbf6ee;padding:94px clamp(55px,7vw,126px) 0;box-shadow:none;color:#302b25}
.footer-luxury::before,.footer-luxury::after{content:'';position:absolute;width:280px;height:500px;background:url('/assets/maquette-feuillage.png') center/contain no-repeat;opacity:.35;pointer-events:none}.footer-luxury::before{right:-30px;top:80px;transform:scaleX(-1) rotate(8deg)}.footer-luxury::after{left:-80px;bottom:30px;transform:rotate(-32deg)}
.footer-ornement{position:absolute;top:28px;left:50%;transform:translateX(-50%);display:flex;align-items:center;width:780px}.footer-ornement::before,.footer-ornement::after{content:'';height:1px;flex:1;background:linear-gradient(90deg,transparent,#b98746)}.footer-ornement::after{background:linear-gradient(90deg,#b98746,transparent)}.footer-ornement img{width:58px;height:58px;margin:0 15px}
.footer-grid-luxury{position:relative;z-index:1;display:grid;grid-template-columns:1.35fr repeat(4,1fr);gap:55px;padding:50px 0 46px}.footer-grid-luxury>div:not(.footer-marque){border-left:1px solid #e0ccb0;padding-left:38px}.footer-grid-luxury h2{font:600 15px var(--serif);color:#9b6428;letter-spacing:.15em;margin:0 0 27px}.footer-grid-luxury h2::after{content:'';display:block;width:38px;height:2px;background:#b9823e;margin-top:13px}.footer-grid-luxury ul{list-style:none;margin:0;padding:0}.footer-grid-luxury li{margin:0 0 14px}.footer-grid-luxury li a{font-size:13px;color:#454039}.footer-grid-luxury li a::before{content:'›';font:600 22px var(--serif);color:#b9823e;margin-right:12px;vertical-align:-1px}
.footer-marque{text-align:left;padding-right:25px}.footer-marque .footer-fer{display:block;width:75px;height:75px;margin:0 auto 9px}.footer-marque>strong{display:block;text-align:center;font:500 15px/1.9 var(--sans);letter-spacing:.3em}.footer-marque>strong em{font-style:normal;color:#a66d31}.footer-marque .ornement-line{margin:24px 0 27px;width:260px}.footer-marque>p{font-size:15px;line-height:1.75;max-width:290px}
.footer-newsletter{position:relative;z-index:1;margin:0 0 52px 32%;border:1px solid #d7bd94;border-radius:15px;min-height:138px;display:grid;grid-template-columns:90px 1fr 1.6fr;gap:25px;align-items:center;padding:22px 28px;background:rgba(255,250,243,.62)}.newsletter-icon{display:grid;place-items:center;border-right:1px solid #dec9aa;height:86px;color:#c08c45;font-size:45px}.footer-newsletter h2{font:600 21px var(--serif);letter-spacing:0;color:#28221c;margin:0 0 5px}.footer-newsletter p{font-size:12px;line-height:1.6;margin:0}.footer-newsletter form{display:grid;grid-template-columns:1fr 150px;gap:10px}.footer-newsletter input,.footer-newsletter button{height:50px;border-radius:10px;font:12px var(--sans)}.footer-newsletter input{border:1px solid #ded1bf;background:#fffaf3;padding:0 18px}.footer-newsletter button{border:1px solid #12432f;background:#12432f;color:white;font:600 15px var(--serif)}.footer-newsletter small{grid-column:1/-1;font-size:10px;color:#70675c}
.footer-bas{position:relative;z-index:1;margin:0 calc(clamp(55px,7vw,126px) * -1);min-height:94px;border-top:1px solid #d7bd94;display:grid;grid-template-columns:1fr 1fr 1fr;align-items:center;padding:0 clamp(55px,7vw,126px);font-size:12px}.footer-bas>span:nth-child(2){text-align:center}.footer-social{display:flex;justify-content:flex-end;gap:18px}.footer-social a{display:grid;place-items:center;width:36px;height:36px;border:1px solid #b98746;border-radius:50%;color:#a66d31;font-weight:600}

/* La même matière et les mêmes proportions sur les pages de catalogue. */
body:not(.home-reference):not(.page-quiz-reference) main.site{background:#fffaf3;border-color:#d9c09a;border-radius:24px}
body:not(.home-reference):not(.page-quiz-reference) .quiz-card,body:not(.home-reference):not(.page-quiz-reference) .niveau-card{background:#fbf6ee;border-color:#dbc4a2}
body:not(.home-reference):not(.page-quiz-reference) h1{font-size:clamp(44px,5vw,68px);font-weight:600}

@media (max-width:1380px){
  .quiz-ref-stage{grid-template-columns:340px minmax(540px,680px) 240px;padding-left:32px;padding-right:32px;gap:20px}.quiz-ref-card{padding-left:34px;padding-right:34px}.quiz-ref-panel{font-size:90%}
  .home-ref-copy{padding-left:58px}.home-ref-trust{gap:11px;font-size:12px}.btn-ref-primary{min-width:250px}.btn-ref-secondary{min-width:215px}
  .method-steps article{grid-template-columns:100px 1fr;padding-left:24px;padding-right:24px}.method-icon img{width:88px;height:88px}
  .footer-grid-luxury{gap:24px}.footer-grid-luxury>div:not(.footer-marque){padding-left:25px}
}
@media (max-width:1160px){
  .home-ref-hero{aspect-ratio:auto;min-height:770px}.home-ref-bg{object-position:62% center}.home-ref-copy{width:54%;padding-left:45px}.home-ref-copy h1{font-size:58px}.home-ref-copy>p:not(.eyebrow){font-size:16px}.home-ref-actions{gap:12px}.btn-ref-primary,.btn-ref-secondary{min-width:0;padding:0 19px;font-size:17px}.home-ref-trust{flex-wrap:wrap}
  .method-steps{grid-template-columns:1fr}.method-steps article{min-height:170px}.method-proof{grid-template-columns:1fr}.home-method{min-height:auto}.home-levels .niveaux-grid{grid-template-columns:repeat(3,1fr)}
  .quiz-ref-stage{grid-template-columns:minmax(540px,720px) 260px;justify-content:center}.quiz-ref-left{display:none}.quiz-ref-background{min-height:760px}.quiz-ref-session>.quiz-ref-panel{padding-left:16px;padding-right:16px}
  .footer-grid-luxury{grid-template-columns:1.3fr repeat(2,1fr)}.footer-grid-luxury>div:nth-child(n+4){margin-top:12px}.footer-newsletter{margin-left:0}.footer-marque{grid-row:span 2}
}
@media (max-width:820px){
  .home-reference,.page-quiz-reference{padding:6px}.home-ref-hero{min-height:0;display:flex;flex-direction:column;padding-top:55vw;background:#f9f3e9}.home-ref-bg{height:55vw;object-position:69% center}.home-ref-copy{width:100%;height:auto;padding:34px 25px 40px;align-items:center;text-align:center;background:linear-gradient(#fffaf3,#f8f1e6)}.hero-fer{width:48px;height:48px}.home-ref-copy>.eyebrow{transform:none;font-size:10px;margin-bottom:18px}.home-ref-copy h1{font-size:clamp(45px,13vw,63px)}.home-ref-copy>p:not(.eyebrow){font-size:15px}.home-ref-actions{width:100%;flex-direction:column}.btn-ref-primary,.btn-ref-secondary{width:100%;min-height:58px}.home-ref-trust{justify-content:center;white-space:normal}.home-ref-copy>.ornement-line{width:230px}
  .home-method,.home-levels{padding:30px 16px;border-radius:20px}.decor-leaf{width:130px;opacity:.32}.method-heading h2{font-size:46px}.method-heading>p:last-child{font-size:14px}.method-steps{margin-top:35px}.method-steps article{grid-template-columns:80px 1fr;padding:25px 18px 20px}.method-icon img{width:72px;height:72px}.method-steps h3{font-size:21px;white-space:normal}.method-proof{display:block}.testimonial{grid-template-columns:130px 1fr;height:210px;margin-bottom:15px}.testimonial>div{padding:14px}.testimonial blockquote{font-size:14px}.method-stats{height:auto;grid-template-columns:1fr;padding:0 20px}.method-stats>div{border-right:0;border-bottom:1px solid #dfc9aa;padding:20px}.method-cta{display:block;min-height:430px;padding:30px 20px;background:#fbf4e8}.method-cta>img{object-position:68% center;opacity:.35}.method-cta>div{position:relative}.method-cta .home-ref-actions{display:flex;margin-top:25px}.home-levels .niveaux-grid{grid-template-columns:repeat(2,1fr)}
  .quiz-ref-background{height:100%;min-height:0}.quiz-ref-stage{display:block;min-height:calc(100vh - 12px);padding:16px 12px 24px;border-radius:18px}.quiz-ref-center{min-height:calc(100vh - 52px)}.quiz-ref-card{min-height:calc(100vh - 135px);padding:23px 18px 18px;border-radius:17px}.quiz-ref-card>header{grid-template-columns:1fr auto;gap:8px;font-size:11px}.quiz-ref-track{grid-row:2;grid-column:1/-1}.quiz-ref-question .enonce{font-size:27px}.quiz-ref-option{min-height:55px;grid-template-columns:34px 1fr 27px;padding:7px 13px;font-size:16px}.quiz-ref-option img{width:30px;height:30px}.quiz-ref-feedback{grid-template-columns:55px 1fr;padding:10px 13px;min-height:90px}.quiz-ref-feedback>img{width:48px;height:48px}.quiz-ref-nav{padding-top:13px}.quiz-ref-nav button{min-width:0;flex:1;padding:0 12px;height:52px;font-size:15px}.quiz-ref-session{display:none}.quiz-ref-related{margin-top:12px;padding:35px 18px 45px;border-radius:18px}.quiz-ref-related h2{font-size:36px}.page-quiz-reference .quiz-carousel{margin-right:-18px;padding-right:18px}
  footer.site.footer-luxury{border-radius:20px;padding:78px 24px 0}.footer-ornement{width:75%;top:20px}.footer-grid-luxury{grid-template-columns:1fr 1fr;gap:30px 16px;padding-top:25px}.footer-marque{grid-column:1/-1;grid-row:auto;text-align:center}.footer-marque .ornement-line{margin-left:auto;margin-right:auto}.footer-marque>p{margin-left:auto;margin-right:auto}.footer-grid-luxury>div:not(.footer-marque){border-left:0;padding-left:0}.footer-grid-luxury h2{font-size:13px}.footer-newsletter{grid-template-columns:1fr;text-align:center;padding:24px 18px}.newsletter-icon{border-right:0;border-bottom:1px solid #dec9aa;height:55px}.footer-newsletter form{grid-template-columns:1fr}.footer-newsletter button,.footer-newsletter small{grid-column:1}.footer-bas{margin:0 -24px;grid-template-columns:1fr;text-align:center;gap:12px;padding:22px}.footer-bas>span:nth-child(2){text-align:center}.footer-social{justify-content:center}
}
@media (max-width:500px){.home-levels .niveaux-grid{grid-template-columns:1fr}.home-ref-trust i{display:none}.testimonial{grid-template-columns:100px 1fr}.method-cta h2{font-size:34px}.quiz-ref-nav button span{font-size:0}.quiz-ref-nav button span::after{content:'Précédente';font-size:14px}.quiz-ref-nav button:last-child span::after{content:'Suivante'}.footer-grid-luxury{grid-template-columns:1fr}.footer-grid-luxury>div{grid-column:auto}.footer-marque{grid-column:auto}}
`;
