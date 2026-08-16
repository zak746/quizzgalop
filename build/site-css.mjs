/**
 * Feuille de style des pages statiques — Quizz Galop.
 * Identité propre : fond crème chaud, accent vert pâturage, titres en serif
 * pour les gros intitulés (contraste avec les sites concurrents tout bleu/gris).
 */

export const CSS = `/* Quizz Galop — pages statiques */
:root{
  color-scheme:light;
  --bg:#f6f3ec;--card:#fff;--ink:#241f18;--muted:#6b6255;--soft:#a29a8a;
  --line:#e8e2d5;--accent:#3f7d54;--accent-ink:#2c5a3c;--shadow:0 8px 30px rgba(60,45,20,.06);
  --carte-bord:rgba(255,255,255,.6);--voile:rgba(255,255,255,.6);
  --accent-faible:#eaf3ec;--accent-bord:#cfe4d5;
  --bon:#2e8b4f;--bon-bg:#e7f6ec;--mauvais:#c0392b;--mauvais-bg:#fbe9e7;
  --r-lg:3rem;--r-md:2rem;--r-sm:1.25rem;
  --serif:'Fraunces',Georgia,serif;
}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){
  color-scheme:dark;
  --bg:#1c1a16;--card:#242019;--ink:#eee8dd;--muted:#b3a996;--soft:#7d7566;
  --line:#3a352b;--accent:#6cbf83;--accent-ink:#8fd6a2;--shadow:0 8px 30px rgba(0,0,0,.4);
  --carte-bord:#38332a;--voile:rgba(255,255,255,.03);
  --accent-faible:#1e2b21;--accent-bord:#2d4433;
  --bon:#6cbf83;--bon-bg:#1e2b21;--mauvais:#e08074;--mauvais-bg:#3a2320;
}}
:root[data-theme="dark"]{
  color-scheme:dark;
  --bg:#1c1a16;--card:#242019;--ink:#eee8dd;--muted:#b3a996;--soft:#7d7566;
  --line:#3a352b;--accent:#6cbf83;--accent-ink:#8fd6a2;--shadow:0 8px 30px rgba(0,0,0,.4);
  --carte-bord:#38332a;--voile:rgba(255,255,255,.03);
  --accent-faible:#1e2b21;--accent-bord:#2d4433;
  --bon:#6cbf83;--bon-bg:#1e2b21;--mauvais:#e08074;--mauvais-bg:#3a2320;
}
*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{margin:0;padding:16px;background:var(--bg);color:var(--ink);
  font-family:'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
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

/* ---- Hero page niveau (bannière incrustée de texte) ---- */
/* Le titre/texte est déjà incrusté dans le visuel : la légende HTML reste pour le SEO et les
   lecteurs d'écran, mais visuellement masquée pour ne pas dupliquer ce que montre l'image. */
.niveau-hero-large-texte{position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden}

/* ---- Hero accueil : texte réel superposé sur la zone claire de la bannière ---- */
.accueil-hero-texte{position:absolute;left:6%;top:50%;transform:translateY(-50%);width:38%;z-index:2}
.accueil-hero-texte .eyebrow{color:#3f7d54}
.accueil-hero-texte h1{color:#241f18;margin-top:.1em}
.accueil-hero-texte .lede{color:#4a4335}
.accueil-hero-cta{display:inline-flex;align-items:center;gap:8px;background:#241f18;color:#fff;
  border-radius:999px;padding:14px 26px;font-size:14.5px;font-weight:800;margin-top:6px;
  box-shadow:0 4px 0 rgba(0,0,0,.25);transition:transform .15s}
.accueil-hero-cta:hover{transform:translateY(-2px);text-decoration:none}
@media (max-width:900px){
  .accueil-hero-texte{position:static;transform:none;width:auto;padding:22px 4px 0;text-align:center}
  .accueil-hero-texte .lede{margin-left:auto;margin-right:auto;max-width:46ch}
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
.quiz-feedback.visible{max-height:60px;opacity:1;margin-top:16px;padding:12px 16px}
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
footer h2{font-family:'Plus Jakarta Sans',sans-serif;font-size:12px;text-transform:uppercase;letter-spacing:.1em;color:var(--soft);margin:0 0 10px;font-weight:700}
footer ul{list-style:none;padding:0;margin:0}
footer li{margin:6px 0}
footer a{color:var(--muted);font-size:14px}
footer a:hover{color:var(--ink)}

@media (max-width:600px){
  body{padding:10px;gap:10px;font-size:16px}
  header.site{padding:12px 16px;min-height:auto}
  main.site{border-radius:1.5rem}
  footer.site{padding:24px 20px;border-radius:1.5rem}
}
`;
