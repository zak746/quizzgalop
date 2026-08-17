/**
 * Banque de quiz — Galops 1 à 7.
 *
 * Contenu de culture équestre générale et stable (anatomie, robes, allures,
 * matériel, sécurité) : volontairement limité à des notions qui ne varient
 * pas d'une édition à l'autre du programme FFE. Avant publication en vue
 * d'un vrai passage d'examen, fais relire ce contenu par un enseignant
 * d'équitation ou vérifie-le face au livret officiel du Galop concerné :
 * le programme FFE détaillé (barèmes, points précis exigés) n'est pas
 * reproduit ici, seules des connaissances généralement admises le sont.
 */

export const NIVEAUX = [
  {
    n: 1,
    titre: 'Galop 1',
    accroche: 'Les toutes premières notions : le cheval, les allures, la sécurité.',
    categories: [
      {
        slug: 'connaitre-le-cheval',
        titre: 'Connaître le cheval',
        intro: 'Les bases pour reconnaître les parties du corps du cheval et ses allures.',
        quizzes: [
          {
            slug: 'parties-du-corps',
            titre: 'Les parties du corps du cheval',
            questions: [
              { q: "Quelle partie du cheval est indiquée par la flèche dorée ?", image:'/assets/visuel-g1-corps.webp', imageAlt:'Cheval de profil ; une flèche dorée vise la ligne supérieure juste derrière la base de l’encolure', options: ['Le dos', 'Le paturon', 'Le chanfrein', 'La croupe'], bonne: 0, explication:'Le dos suit le garrot et s’étend jusqu’aux reins ; la flèche vise ici sa partie antérieure.' },
              { q: "Quel est le nom de l'arrière-train du cheval, en haut de la queue ?", options: ['Le boulet', "L'ars", 'La croupe', 'La ganache'], bonne: 2 },
              { q: "Comment appelle-t-on la partie avant du visage du cheval, entre les yeux et les naseaux ?", options: ['Le chanfrein', 'Le paturon', 'Le sabot', 'Le boulet'], bonne: 0 },
              { q: 'Par où le cheval respire-t-il principalement ?', options: ['La bouche', 'Les naseaux', 'Les oreilles', 'La gorge'], bonne: 1 },
              { q: "Comment s'appelle la région située entre le boulet et la couronne, juste au-dessus du sabot ?", options: ['Le paturon', 'Le grasset', 'Le coude', 'Le jarret'], bonne: 0 },
              { q: "Quel est le nom donné à l'ensemble des poils longs le long de l'encolure ?", options: ['La queue', 'Le toupet', 'La crinière', "Le fanon"], bonne: 2 },
              { q: 'Combien de membres possède un cheval ?', options: ['2', '4', '6', '8'], bonne: 1 },
              { q: "Comment s'appelle la mèche de crins qui retombe entre les oreilles sur le front ?", options: ['Le toupet', 'Le fanon', 'La ganache', "L'ars"], bonne: 0 }
            ]
          },
          {
            slug: 'les-allures',
            titre: 'Les trois allures naturelles',
            questions: [
              { q: 'Combien y a-t-il d’allures naturelles chez le cheval ?', options: ['Deux', 'Trois', 'Quatre', 'Cinq'], bonne: 1 },
              { q: 'Quelle est l’allure la plus lente du cheval ?', options: ['Le trot', 'Le galop', 'Le pas', "L'amble"], bonne: 2 },
              { q: 'Combien de temps compte le pas ?', options: ['2 temps', '3 temps', '4 temps', '1 temps'], bonne: 2 },
              { q: 'Quelle est l’allure à deux temps, où les membres bougent par paires diagonales ?', options: ['Le pas', 'Le trot', 'Le galop', 'Le reculer'], bonne: 1 },
              { q: 'Combien de temps compte le galop ?', options: ['2 temps', '3 temps', '4 temps', '5 temps'], bonne: 1 },
              { q: 'Quelle est l’allure la plus rapide parmi les trois allures naturelles ?', options: ['Le pas', 'Le trot', 'Le galop', 'Aucune'], bonne: 2 },
              { q: 'À l’arrêt, sur combien de membres le cheval peut-il se tenir en équilibre ?', options: ['2', '3', '4', '1'], bonne: 2 }
            ]
          }
        ]
      },
      {
        slug: 'securite-et-materiel',
        titre: 'Sécurité et matériel',
        intro: 'Les règles de base pour s’approcher du cheval en toute sécurité et le matériel de pansage.',
        quizzes: [
          {
            slug: 'securite-a-pied',
            titre: 'La sécurité à pied',
            questions: [
              { q: "Par où faut-il s'approcher d'un cheval de préférence ?", options: ['Par derrière', 'Par le côté, en vue du cheval', 'En courant', "Peu importe"], bonne: 1 },
              { q: 'Que faut-il faire avant de toucher un cheval ?', options: ['Rien de particulier', 'Lui parler pour signaler sa présence', 'Le siffler', "Courir vers lui"], bonne: 1 },
              { q: 'Pourquoi évite-t-on de se placer juste derrière un cheval ?', options: ['Il n’aime pas ça', 'Risque de coup de pied, zone qu’il voit mal', 'Ça salit les vêtements', 'Aucune raison'], bonne: 1 },
              { q: 'Quel type de nœud utilise-t-on pour attacher un cheval, pour pouvoir le détacher vite en cas de besoin ?', options: ['Un nœud plat classique', 'Un nœud de vache', 'Un nœud de sécurité (nœud coulant simple)', 'Plusieurs nœuds serrés'], bonne: 2 },
              { q: 'Quelle chaussure est déconseillée pour s’occuper d’un cheval ?', options: ['Des bottes ou chaussures fermées', 'Des sandales ouvertes', 'Des baskets fermées', 'Des chaussures à semelle plate'], bonne: 1 },
              { q: 'Si l’on doit contourner l’arrière d’un cheval attaché, quelle conduite est la plus sûre ?', options: ['Le prévenir et passer largement hors de portée de ses postérieurs', 'Passer sous son encolure sans le prévenir', 'Passer juste derrière, dans son angle mort', "Passer à n’importe quelle distance"], bonne: 0 }
            ]
          },
          {
            slug: 'materiel-de-pansage',
            titre: 'Le matériel de pansage',
            questions: [
              { q: 'Quel outil sert à enlever la boue et les poils morts en larges mouvements circulaires ?', options: ['L’étrille', 'Le cure-pied', 'La brosse douce', 'Le peigne à crins'], bonne: 0 },
              { q: 'Quel outil de pansage est indiqué par la flèche ?', image:'/assets/visuel-g2-pansage.webp', imageAlt:'Cinq outils de pansage ; une flèche dorée vise l’outil métallique courbé placé en bas', options: ['L’étrille', 'Le cure-pied', 'La brosse dure', "L'éponge"], bonne: 1, explication:'Le cure-pied sert à retirer terre, cailloux et débris sous le sabot en évitant la fourchette.' },
              { q: 'Quelle brosse utilise-t-on en dernier, sur le visage du cheval, car elle est douce ?', options: ['L’étrille', 'La brosse dure (bouchon)', 'La brosse douce', 'Le cure-pied'], bonne: 2 },
              { q: 'À quoi sert l’éponge lors du pansage ?', options: ['Nettoyer les yeux, naseaux et sous la queue', 'Brosser la crinière', 'Nettoyer les sabots', 'Peigner la queue'], bonne: 0 },
              { q: 'Dans quel ordre effectue-t-on généralement le brossage lors du pansage ?', options: ['Brosse douce puis étrille', 'Étrille puis brosse dure puis brosse douce', 'Cure-pied en premier dans tous les cas', "L'ordre n'a pas d'importance"], bonne: 1 },
              { q: 'Pourquoi panse-t-on un cheval avant de le seller ?', options: ['Pour le plaisir seulement', 'Pour enlever la saleté qui pourrait blesser sous la selle', 'Ce n’est pas nécessaire', 'Pour le faire grossir'], bonne: 1 }
            ]
          }
        ]
      }
    ]
  },
  {
    n: 2,
    titre: 'Galop 2',
    accroche: 'Les robes du cheval, le pansage complet et le matériel de base.',
    categories: [
      {
        slug: 'robes-du-cheval',
        titre: 'Les robes du cheval',
        intro: 'Reconnaître les robes de base et quelques marques blanches courantes.',
        quizzes: [
          {
            slug: 'robes-de-base',
            titre: 'Les robes de base',
            questions: [
              { q: 'Comment s’appelle la robe brun-rouge avec crins noirs (crinière, queue, bas des membres) ?', options: ['Alezan', 'Bai', 'Gris', 'Isabelle'], bonne: 1 },
              { q: 'Comment s’appelle la robe entièrement brun-rouge, y compris les crins ?', options: ['Bai', 'Alezan', 'Noir', 'Aubère'], bonne: 1 },
              { q: 'Quelle robe est composée de poils blancs mélangés à des poils noirs, à la peau noire ?', options: ['Gris', 'Alezan', 'Isabelle', 'Rouan'], bonne: 0 },
              { q: 'Quelle robe est unie et totalement noire, sans marques fauves ?', options: ['Bai brun', 'Noir', 'Bai', 'Gris'], bonne: 1 },
              { q: 'Comment s’appelle une robe à grandes taches blanches et une autre couleur ?', options: ['Rouan', 'Pie', 'Isabelle', 'Aubère'], bonne: 1 },
              { q: 'Quelle robe présente un corps doré à crème avec des crins blancs ou très clairs ?', options: ['Palomino', 'Bai', 'Alezan', 'Noir'], bonne: 0 }
            ]
          },
          {
            slug: 'marques-blanches',
            titre: 'Les marques blanches de la tête',
            questions: [
              { q: 'Comment s’appelle une petite marque blanche arrondie située sur le front ?', options: ['Liste', 'Pelote', 'Balzane', 'Lentille'], bonne: 1 },
              { q: 'Comment s’appelle une fine ligne blanche verticale sur le chanfrein ?', options: ['Pelote', 'Liste', 'Étoile', 'Balzane'], bonne: 1 },
              { q: 'Comment s’appelle une marque blanche verticale nettement plus large qu’une liste sur le chanfrein ?', options: ['Liste', 'Balzane', 'Bande', 'Pelote'], bonne: 2 },
              { q: 'Comment appelle-t-on une marque blanche sur un membre, au niveau du sabot ou plus haut ?', options: ['Une balzane', 'Une pelote', 'Une liste', 'Une étoile'], bonne: 0 }
            ]
          }
        ]
      },
      {
        slug: 'prendre-soin-du-cheval',
        titre: 'Prendre soin du cheval',
        intro: 'Le pansage complet et les bases du filet et de la selle.',
        quizzes: [
          {
            slug: 'pansage-complet',
            titre: 'Le pansage complet',
            questions: [
              { q: 'À quel moment fait-on le pansage, par rapport au travail du cheval ?', options: ['Seulement après le travail', 'Avant et après le travail', 'Jamais nécessaire', 'Une fois par semaine seulement'], bonne: 1 },
              { q: 'Que vérifie-t-on aux pieds du cheval avant de le travailler ?', options: ['Rien de spécial', 'La présence de cailloux ou de boue avec le cure-pied', 'La couleur des sabots', 'La température'], bonne: 1 },
              { q: 'Avec quoi peigne-t-on délicatement la crinière et la queue ?', options: ['L’étrille', 'Un peigne ou une brosse à crins', 'Le cure-pied', 'La brosse dure'], bonne: 1 },
              { q: 'Pourquoi est-il important d’attacher le cheval pendant le pansage ?', options: ['Pour le décorer', 'Pour la sécurité du soigneur et du cheval', 'Ce n’est pas nécessaire', 'Pour le punir'], bonne: 1 }
            ]
          },
          {
            slug: 'le-filet-et-la-selle',
            titre: 'Le filet et la selle : les grandes parties',
            questions: [
              { q: 'Quelle pièce du filet passe dans la bouche du cheval ?', options: ['La muserolle', 'Le mors', 'La têtière', 'La rêne'], bonne: 1 },
              { q: 'À quoi servent les rênes ?', options: ['À attacher le cheval', 'À communiquer avec la bouche du cheval depuis la main', 'À le brosser', 'À le nourrir'], bonne: 1 },
              { q: 'Comment s’appelle la sangle qui maintient la selle sur le dos du cheval ?', options: ['La muserolle', 'La sangle', 'L’étrivière', 'La têtière'], bonne: 1 },
              { q: 'Sur quoi pose-t-on le pied du cavalier une fois en selle ?', options: ['Le troussequin', 'L’étrier', 'Le pommeau', 'Le quartier'], bonne: 1 },
              { q: 'Comment s’appelle la partie avant, surélevée, de la selle ?', options: ['Le pommeau', 'Le troussequin', 'Le quartier', 'La matelassure'], bonne: 0 }
            ]
          }
        ]
      }
    ]
  },
  {
    n: 3,
    titre: 'Galop 3',
    accroche: 'Anatomie approfondie, robes, mécanisme des allures et figures de manège.',
    categories: [
      {
        slug: 'anatomie-et-robes',
        titre: 'Anatomie et robes',
        intro: 'Approfondis les parties du corps et les principales déclinaisons de robes.',
        quizzes: [
          {
            slug: 'parties-du-corps-approfondi',
            titre: 'Les parties du corps (approfondi)',
            questions: [
              { q: 'Comment s’appelle le repli de peau formant l’aisselle du membre antérieur ?', options: ["L'ars", 'Le grasset', 'Le jarret', 'Le boulet'], bonne: 0 },
              { q: 'Comment s’appelle l’articulation du membre postérieur équivalente au genou humain, à mi-hauteur ?', options: ['Le grasset', 'Le paturon', 'Le boulet', 'Le sabot'], bonne: 0 },
              { q: 'Comment s’appelle l’articulation coudée du membre postérieur, plus bas que le grasset ?', options: ['Le jarret', 'Le coude', 'Le genou', "L'ars"], bonne: 0 },
              { q: 'Comment s’appelle l’articulation du membre antérieur équivalente au poignet ?', options: ['Le genou', 'Le jarret', 'Le grasset', 'Le paturon'], bonne: 0 },
              { q: 'Comment s’appelle la touffe de poils située à l’arrière du boulet et du paturon ?', options: ['Le fanon', 'La châtaigne', 'La ganache', 'Le chanfrein'], bonne: 0 },
              { q: 'Comment s’appelle la petite callosité sur la face interne des membres du cheval ?', options: ['La châtaigne', 'Le fanon', 'La couronne', 'La sole'], bonne: 0 }
            ]
          },
          {
            slug: 'robes-et-declinaisons',
            titre: 'Les robes et leurs déclinaisons',
            questions: [
              { q: 'Un bai « cerise » se distingue d’un bai classique par :', options: ['Une teinte rouge plus soutenue', 'Des crins blancs', 'Une robe grise', 'Une robe pie'], bonne: 0 },
              { q: 'Un alezan « crins lavés » a :', options: ['Des crins plus clairs que le corps', 'Une robe grise', 'Des crins noirs', 'Une robe pie'], bonne: 0 },
              { q: 'Quelle robe résulte du mélange régulier de poils blancs et colorés, sans zones distinctes comme le pie ?', options: ['Le rouan', 'Le bai', 'L’alezan', 'Le noir'], bonne: 0 },
              { q: 'Un cheval « aubère » a une robe :', options: ['Mélange de poils blancs et alezans', 'Entièrement noire', 'Grise pommelée', 'Pie noir et blanc'], bonne: 0 },
              { q: 'Le gris devient généralement plus clair avec :', options: ['L’âge', 'La saison uniquement', 'Le climat', 'Rien, il ne change pas'], bonne: 0 }
            ]
          }
        ]
      },
      {
        slug: 'theorie-equestre',
        titre: 'Théorie équestre',
        intro: 'Le mécanisme détaillé des allures et les figures de manège de base.',
        quizzes: [
          {
            slug: 'mecanisme-des-allures',
            titre: 'Le mécanisme des allures',
            questions: [
              { q: 'Au trot, quels membres se lèvent ensemble ?', options: ['Les deux antérieurs', 'Un antérieur et le postérieur diagonalement opposé', 'Les deux postérieurs', 'Un seul membre à la fois'], bonne: 1 },
              { q: 'Au galop, combien de membres touchent le sol lors du temps de suspension ?', options: ['Aucun', 'Un', 'Deux', 'Quatre'], bonne: 0 },
              { q: 'Comment les membres se déplacent-ils au pas ?', options: ['Un par un, en quatre battues successives', 'Les deux antérieurs ensemble', 'Les deux postérieurs ensemble', 'Sans ordre régulier'], bonne: 0 },
              { q: 'Qu’appelle-t-on le « pied » sur lequel un cheval galope ?', options: ['Le dernier membre antérieur qui se pose à chaque foulée', 'Le sabot le plus large', 'Le membre arrière gauche toujours', 'Cela n’existe pas'], bonne: 0 },
              { q: 'Dans un manège, être « à main droite » signifie que :', options: ['Le cheval tourne vers la droite, le centre du manège à droite', 'Le cavalier tient les rênes de la main droite', 'Le cheval part du pied droit', 'Cela concerne uniquement le trot'], bonne: 0 }
            ]
          },
          {
            slug: 'figures-de-manege',
            titre: 'Les figures de manège de base',
            questions: [
              { q: 'Quelle figure de manège est représentée sur cette illustration ?', image:'/assets/visuel-g3-serpentine.webp', imageAlt:'Carrière vue du dessus avec un tracé bleu formant trois courbes successives', options: ['La serpentine', 'La diagonale', 'La volte', 'Le doubler'], bonne: 0, explication:'La serpentine enchaîne plusieurs demi-cercles de part et d’autre de la ligne du milieu.' },
              { q: 'Comment appelle-t-on le trajet qui traverse le manège en biais, d’un coin à l’autre ?', options: ['La diagonale', 'La volte', 'Le cercle', 'La ligne du milieu'], bonne: 0 },
              { q: 'Une figure qui permet de passer de la main droite à la main gauche s’appelle :', options: ['Un changement de main', 'Une volte', 'Un arrêt', 'Un reculer'], bonne: 0 },
              { q: 'Une serpentine se caractérise par :', options: ['Une succession de courbes en S le long du manège', 'Un seul grand cercle', 'Une ligne droite', 'Un arrêt prolongé'], bonne: 0 }
            ]
          }
        ]
      }
    ]
  },
  {
    n: 4,
    titre: 'Galop 4',
    accroche: 'Le matériel avancé (mors, selle), et les bases de l’alimentation du cheval.',
    categories: [
      {
        slug: 'le-materiel',
        titre: 'Le matériel',
        intro: 'Les principaux types de mors et les parties détaillées de la selle.',
        quizzes: [
          {
            slug: 'les-mors',
            titre: 'Les principaux types de mors',
            questions: [
              { q: 'Quelle embouchure de filet possède deux canons reliés par une articulation centrale ?', options: ['Le filet simple brisé', 'Le mors de bride droit', 'Le hackamore sans embouchure', 'Le mors droit non articulé'], bonne: 0 },
              { q: 'Un mors « à olives » se distingue par :', options: ['Des anneaux en forme d’olive qui limitent le pincement des lèvres', 'Une embouchure en métal doré', 'L’absence d’anneaux', 'Une taille plus grande'], bonne: 0 },
              { q: 'Le mors de bride, utilisé en dressage avancé, agit principalement sur :', options: ['La bouche et la nuque via un effet de levier', 'Uniquement le nez', 'Uniquement les oreilles', 'Rien, il est décoratif'], bonne: 0 },
              { q: 'Un filet à aiguilles a la particularité d’avoir :', options: ['De longues branches qui empêchent le mors de tourner dans la bouche', 'Deux embouchures', 'Aucune branche', 'Une forme ronde uniquement'], bonne: 0 }
            ]
          },
          {
            slug: 'parties-de-la-selle',
            titre: 'Les parties détaillées de la selle',
            questions: [
              { q: 'Comment s’appelle la partie arrière relevée de la selle, derrière le cavalier ?', options: ['Le troussequin', 'Le pommeau', 'Le quartier', 'La matelassure'], bonne: 0 },
              { q: 'Comment s’appelle la partie de cuir sur laquelle repose la jambe du cavalier ?', options: ['Le quartier', 'Le pommeau', 'Le troussequin', 'La sangle'], bonne: 0 },
              { q: 'Les sanglons, situés sous le quartier, servent à :', options: ['Attacher la sangle à l’arçon', 'Attacher les étriers', 'Décorer la selle', 'Fixer les rênes'], bonne: 0 },
              { q: 'Comment s’appelle la lanière réglable qui relie l’étrier à la selle ?', options: ['L’étrivière', 'Le sanglon', 'La têtière', 'La sous-gorge'], bonne: 0 },
              { q: 'La structure rigide interne de la selle, sur laquelle tout est construit, s’appelle :', options: ['L’arçon', 'Le troussequin', 'Le quartier', 'La matelassure'], bonne: 0 }
            ]
          }
        ]
      },
      {
        slug: 'theorie-avancee',
        titre: 'Théorie avancée',
        intro: 'Les bases de l’alimentation du cheval et des robes plus complexes.',
        quizzes: [
          {
            slug: 'mecanisme-du-galop',
            titre: 'Équilibre et mécanisme du galop',
            questions: [
              { q:'Quelle allure est décomposée sur cette illustration ?', image:'/assets/visuel-g4-galop.webp', imageAlt:'Trois silhouettes successives d’un cheval en mouvement avec une phase aérienne', options:['Le galop','Le pas','Le trot','Le reculer'], bonne:0, explication:'Le galop est une allure sautée à trois temps suivis d’un temps de suspension.' },
              { q:'Le galop est une allure :', options:['À trois temps avec un temps de suspension','À deux temps sans suspension','À quatre temps réguliers','Toujours latérale'], bonne:0 },
              { q:'Sur un cercle à main droite, on recherche normalement un galop :', options:['À droite','À gauche','Désuni','Sans pied déterminé'], bonne:0 },
              { q:'Un cheval galope à faux lorsqu’il :', options:['Galope sur le pied extérieur par rapport à la courbe','Accélère au trot','Change de direction au pas','S’arrête sur la piste'], bonne:0 },
              { q:'Une transition descendante est par exemple :', options:['Galop-trot','Pas-trot','Trot-galop','Arrêt-pas'], bonne:0 },
              { q:'Pour conserver l’équilibre dans une courbe, le cavalier doit surtout :', options:['Regarder sa trajectoire et rester centré','Se pencher fortement à l’intérieur','Tirer sur la rêne intérieure','Bloquer son bassin'], bonne:0 },
              { q:'Une cadence régulière signifie que :', options:['Les foulées se succèdent selon un rythme stable','Le cheval va le plus vite possible','Le cavalier change souvent d’allure','Le cheval raccourcit toujours ses foulées'], bonne:0 },
              { q:'Avant de demander le galop, il faut préparer :', options:['L’équilibre, l’impulsion et la direction','Uniquement la vitesse','Uniquement la rêne intérieure','Un arrêt complet obligatoire'], bonne:0 }
            ]
          },
          {
            slug: 'alimentation-du-cheval',
            titre: 'L’alimentation du cheval',
            questions: [
              { q: 'Quel type d’aliment doit constituer la base de la ration d’un cheval ?', options: ['Le fourrage (foin, herbe)', 'Les céréales uniquement', 'Les friandises', 'La viande'], bonne: 0 },
              { q: 'Pourquoi fractionne-t-on les repas d’un cheval en plusieurs fois par jour ?', options: ['Son estomac est petit par rapport à sa taille', 'Pour le faire maigrir', 'Ce n’est pas nécessaire', 'Pour l’occuper'], bonne: 0 },
              { q: 'Que doit-on toujours mettre à disposition du cheval, en libre accès ?', options: ['De l’eau propre', 'Des céréales', 'Du sucre', 'Des friandises'], bonne: 0 },
              { q: 'Après un repas copieux, quelle conduite adopter avant un travail intense ?', options: ['Éviter l’effort immédiat et prévoir avec l’encadrement un délai adapté au repas et au cheval', 'Commencer immédiatement, quel que soit le repas', 'Attendre exactement 10 minutes dans tous les cas', 'Appliquer toujours le même délai sans tenir compte de la ration'], bonne: 0 }
            ]
          },
          {
            slug: 'robes-complexes',
            titre: 'Les robes plus complexes',
            questions: [
              { q: 'Une robe « bai brun » se distingue d’un bai classique par :', options: ['Une teinte plus sombre, presque marron foncé', 'Des taches blanches', 'Une robe entièrement noire', 'Des crins blancs'], bonne: 0, explication:'Le bai brun conserve les extrémités et les crins noirs du bai, avec un corps nettement plus sombre.' },
              { q: 'Le terme « pangaré » désigne :', options: ['Des zones plus claires autour du museau, des yeux et du ventre', 'Une robe entièrement blanche', 'Une tache sur le front uniquement', 'Un type de mors'], bonne: 0, explication:'Le pangaré correspond à des zones éclaircies caractéristiques, notamment au museau et sous le ventre.' },
              { q: 'Un cheval « louvet » a une robe qui ressemble à celle :', options: ['D’un loup, gris-brun avec crins noirs', 'D’un tigre', 'D’une zèbre', 'D’un mouton'], bonne: 0, explication:'La robe louvet associe une teinte fauve ou gris-brun à des crins et extrémités plus foncés.' },
              { q: 'Quel ensemble décrit le mieux une robe isabelle ?', options: ['Un corps beige à jaune avec crins et extrémités noirs', 'Un corps alezan avec crins alezans', 'Un mélange uniforme de poils blancs et noirs', 'De grandes plages blanches et noires'], bonne: 0, explication:'L’isabelle présente un fond jaune ou beige, associé à des crins et des extrémités noirs.' }
            ]
          }
        ]
      }
    ]
  },
  {
    n: 5,
    titre: 'Galop 5',
    accroche: 'Apprentissage, anatomie, digestion et autonomie dans le travail à pied.',
    categories: [
      {
        slug: 'connaissance-du-cheval', titre: 'Connaissance du cheval',
        intro: 'Comprendre comment le cheval apprend et comment son corps produit le mouvement.',
        quizzes: [
          {
            slug: 'principes-apprentissage', titre: 'Les principes d’apprentissage',
            questions: [
              { q:'Qu’est-ce que l’habituation ?', options:['La diminution progressive d’une réaction face à un stimulus répété et non dangereux','Une récompense alimentaire systématique','Une punition après chaque erreur','Un apprentissage réservé au poulain'], bonne:0, explication:'L’exposition doit être progressive, répétée et rester sous le seuil de panique.' },
              { q:'Quand une récompense est-elle la plus efficace ?', options:['Immédiatement après la bonne réponse','Plusieurs minutes plus tard','Avant toute demande','Uniquement en fin de semaine'], bonne:0, explication:'Le cheval associe mieux la conséquence au comportement quand elle est immédiate.' },
              { q:'Le renforcement négatif consiste à :', options:['Retirer une pression dès que le cheval donne la réponse attendue','Punir physiquement','Ignorer toute réponse','Ajouter systématiquement une friandise'], bonne:0 },
              { q:'Pour apprendre à céder à une pression légère, il faut d’abord :', options:['Commencer avec une demande faible et augmenter graduellement si nécessaire','Commencer par la demande maximale','Répéter sans jamais relâcher','Surprendre le cheval'], bonne:0 },
              { q:'Quelle limite doit toujours encadrer une punition ?', options:['Elle ne doit jamais provoquer peur, douleur ou incompréhension','Elle doit être retardée','Elle doit durer longtemps','Elle remplace la récompense'], bonne:0 },
              { q:'La sensibilisation vise à :', options:['Obtenir une réponse à un signal de plus en plus fin','Faire disparaître toute réaction','Fatiguer le cheval','Changer son alimentation'], bonne:0 },
              { q:'Pourquoi découper un exercice complexe ?', options:['Pour renforcer chaque étape réussie et garder le cheval disponible','Pour aller moins vite sans raison','Pour éviter toute récompense','Pour rendre la consigne imprévisible'], bonne:0 },
              { q:'Quel signe indique qu’il faut diminuer la difficulté ?', options:['Le cheval se tend, fuit ou ne peut plus réfléchir','Le cheval souffle calmement','La réponse devient plus légère','Le cheval mâchouille tranquillement'], bonne:0 }
            ]
          },
          {
            slug: 'squelette-et-muscles', titre: 'Le squelette et les grands groupes musculaires',
            questions: [
              { q:'Sur l’illustration, quelle zone est indiquée par la flèche dorée ?', image:'/assets/visuel-g5-squelette.webp', imageAlt:'Squelette d’un cheval de profil ; une flèche vise un os plat triangulaire de l’avant-main', options:['L’omoplate','Le bassin','Le crâne','Le canon'], bonne:0, explication:'L’omoplate est un os plat de l’épaule, relié au tronc par des muscles.' },
              { q:'Quel ensemble protège principalement la moelle épinière ?', options:['La colonne vertébrale','Les côtes','Le sternum','Les phalanges'], bonne:0 },
              { q:'Quel os long se situe entre l’épaule et le coude ?', options:['L’humérus','Le fémur','Le tibia','Le canon'], bonne:0 },
              { q:'Le bassin transmet surtout la poussée :', options:['Des postérieurs vers le tronc','Des antérieurs vers la tête','De la bouche vers l’encolure','Du garrot vers le sabot'], bonne:0 },
              { q:'Les muscles abdominaux participent notamment à :', options:['Soutenir le dos et engager le tronc','Faire pousser les crins','Durcir le sabot','Modifier la robe'], bonne:0 },
              { q:'Le tendon relie principalement :', options:['Un muscle à un os','Deux os entre eux','La peau au poil','Une dent à la mâchoire'], bonne:0 },
              { q:'Le ligament relie principalement :', options:['Deux os au niveau d’une articulation','Un muscle à la peau','Le sabot au fer','Les crins à l’encolure'], bonne:0 },
              { q:'Un échauffement progressif permet :', options:['D’augmenter progressivement température et souplesse des tissus','De remplacer la récupération','D’éviter tout travail au pas','De fatiguer les muscles avant la séance'], bonne:0 }
            ]
          }
        ]
      },
      {
        slug: 'soins-et-pratique', titre: 'Soins et pratique à pied',
        intro: 'Digestion, identification, longe et transport : les bases de l’autonomie Galop 5.',
        quizzes: [
          {
            slug: 'digestion-et-identification', titre: 'Digestion et identification',
            questions: [
              { q:'Quelle particularité digestive explique l’intérêt de repas fréquents et riches en fibres ?', options:['Un petit estomac et une production continue d’acide','Un estomac à quatre compartiments','L’absence d’intestin','Une digestion uniquement nocturne'], bonne:0 },
              { q:'Où les fibres sont-elles principalement fermentées ?', options:['Dans le cæcum et le gros côlon','Dans la bouche uniquement','Dans l’œsophage','Dans le rein'], bonne:0 },
              { q:'Un changement de ration doit être :', options:['Progressif sur plusieurs jours','Brutal pour stimuler l’appétit','Fait uniquement le jour d’un concours','Sans tenir compte du fourrage'], bonne:0 },
              { q:'Le numéro SIRE sert à :', options:['Identifier administrativement un équidé','Mesurer sa taille','Calculer sa ration','Choisir son mors'], bonne:0 },
              { q:'Où la puce d’identification est-elle habituellement implantée ?', options:['Dans l’encolure, côté gauche','Dans le sabot','Dans l’oreille','Sous la queue'], bonne:0 },
              { q:'Quel document accompagne l’identification et le suivi sanitaire ?', options:['Le document d’identification ou livret','La licence du cavalier','Le carnet de reprise','Le plan de carrière'], bonne:0 },
              { q:'Pourquoi le fourrage doit-il rester la base de la ration ?', options:['Il répond au besoin de fibres et d’occupation alimentaire','Il remplace toujours l’eau','Il apporte uniquement du sucre','Il empêche le cheval de marcher'], bonne:0 },
              { q:'Avant une compétition, il faut notamment vérifier :', options:['L’inscription du cavalier et du cheval sur les listes adaptées','La couleur du tapis uniquement','Le nombre de brosses','La longueur de la crinière'], bonne:0 }
            ]
          },
          {
            slug: 'longe-et-embarquement', titre: 'Longer et embarquer en sécurité',
            questions: [
              { q:'En longe, le longeur forme avec le cheval et la chambrière :', options:['Un triangle de communication','Une ligne droite rigide','Un cercle fermé par la longe','Aucune forme utile'], bonne:0 },
              { q:'La chambrière sert principalement à :', options:['Prolonger l’action et entretenir l’impulsion sans frapper','Attacher le cheval','Remplacer la longe','Bloquer les épaules'], bonne:0 },
              { q:'Où doit se placer le longeur ?', options:['Au centre dynamique du cercle, orienté vers l’épaule et la hanche','Juste derrière le cheval','Devant sa tête','À l’extérieur de la carrière'], bonne:0 },
              { q:'Avant d’embarquer, le van doit être :', options:['Stable, ouvert, lumineux et sécurisé','Dételé et incliné','Sombre et fermé','Placé sur une pente'], bonne:0 },
              { q:'Si le cheval hésite sur le pont, la meilleure attitude est :', options:['Rester calme, garder un axe droit et récompenser chaque progrès','Tirer brutalement','Se placer derrière lui','Fermer toutes les issues immédiatement'], bonne:0 },
              { q:'Pourquoi ne faut-il jamais enrouler la longe autour de la main ?', options:['Elle pourrait serrer et blesser si le cheval tire','Elle deviendrait trop courte uniquement','Le cheval ne la verrait plus','Cela abîme le cuir'], bonne:0 },
              { q:'Les protections de transport doivent être :', options:['Ajustées sans compression et vérifiées avant le départ','Très lâches','Posées uniquement sur un membre','Humides pour mieux tenir'], bonne:0 },
              { q:'Après embarquement, on sécurise normalement :', options:['La barre ou le bas-flanc avant d’attacher court de façon adaptée','La tête avant toute fermeture arrière','Uniquement la porte avant','Rien si le trajet est court'], bonne:0 }
            ]
          }
        ]
      }
    ]
  },
  {
    n: 6,
    titre: 'Galop 6',
    accroche: 'Pied, ferrure, santé, alimentation et précision dans le travail.',
    categories: [
      {
        slug: 'sante-et-alimentation', titre: 'Santé et alimentation',
        intro: 'Comprendre le pied, surveiller la santé et adapter la ration aux besoins.',
        quizzes: [
          {
            slug: 'pied-et-ferrure', titre: 'Le pied et la ferrure',
            questions: [
              { q:'Sur l’illustration, quelle structure est indiquée par la flèche ?', image:'/assets/visuel-g6-pied.webp', imageAlt:'Face solaire d’un sabot ; une flèche vise la structure centrale sombre en forme de V', options:['La fourchette','La pince','La couronne','Le tendon fléchisseur'], bonne:0, explication:'La fourchette est la structure triangulaire et souple visible sous le pied.' },
              { q:'Quel est le rôle majeur de la fourchette ?', options:['Participer à l’amortissement et au fonctionnement du pied','Produire le poil','Fixer la selle','Refroidir le membre'], bonne:0 },
              { q:'La muraille du sabot est constituée principalement de :', options:['Corne','Os','Cartilage uniquement','Muscle'], bonne:0 },
              { q:'Quel professionnel pare et ferre le cheval ?', options:['Le maréchal-ferrant','Le vétérinaire uniquement','Le dentiste équin','Le sellier'], bonne:0 },
              { q:'Que signifie “parer” un pied ?', options:['Rétablir longueur, forme et équilibre de la corne','Peindre le sabot','Retirer la fourchette','Poser une bande'], bonne:0 },
              { q:'Un fer perdu ou déplacé impose :', options:['De limiter le travail et prévenir l’encadrement','De continuer normalement','De clouer soi-même le fer','De doucher uniquement'], bonne:0 },
              { q:'Une chaleur anormale et un pouls digité marqué peuvent signaler :', options:['Une inflammation du pied','Une robe qui change','Une bonne détente','Un manque de pansage'], bonne:0 },
              { q:'Pourquoi cure-t-on les pieds avant et après le travail ?', options:['Pour retirer les corps étrangers et contrôler l’état du pied','Pour accélérer le galop','Pour user la sole','Pour tendre les tendons'], bonne:0 }
            ]
          },
          {
            slug: 'besoins-alimentaires', titre: 'Évaluer les besoins alimentaires',
            questions: [
              { q:'Quel facteur augmente généralement les besoins énergétiques ?', options:['Un travail plus intense','Une journée de repos','Une baisse d’activité','Une ration plus volumineuse'], bonne:0 },
              { q:'L’état corporel s’évalue notamment en observant :', options:['Côtes, garrot, encolure, dos et attache de queue','Uniquement les oreilles','La couleur des yeux','La longueur des crins'], bonne:0 },
              { q:'Un cheval en surpoids présente un risque accru de :', options:['Troubles métaboliques et locomoteurs','Meilleure endurance automatique','Déshydratation uniquement','Perte de crins'], bonne:0 },
              { q:'Le besoin en eau augmente notamment avec :', options:['Chaleur, exercice et lactation','Repos au frais uniquement','Une tonte légère','Le pansage'], bonne:0 },
              { q:'Les concentrés doivent être :', options:['Adaptés au besoin réel et fractionnés','Distribués à volonté à tous les chevaux','Donnés avant tout fourrage','Identiques toute l’année'], bonne:0 },
              { q:'Pourquoi peser le foin plutôt que compter les quartiers ?', options:['Le volume et la densité varient fortement','Tous les quartiers ont le même poids','Le foin ne se mesure pas','Seul le poids du seau compte'], bonne:0 },
              { q:'Une ration équilibrée se juge d’abord sur :', options:['Les besoins du cheval, le fourrage et son état corporel','La couleur du sac','Le prix du complément','La préférence du cavalier'], bonne:0 },
              { q:'Quel changement demande une transition alimentaire ?', options:['Nouveau foin ou nouvel aliment concentré','Changement de brosse','Nouvelle couverture','Changement de carrière'], bonne:0 }
            ]
          }
        ]
      },
      {
        slug: 'biologie-et-locomotion', titre: 'Biologie et locomotion',
        intro: 'Identification, reproduction, allures et reculer au niveau Galop 6.',
        quizzes: [
          {
            slug: 'reproduction-et-identification', titre: 'Reproduction et identification',
            questions: [
              { q:'La gestation de la jument dure environ :', options:['Onze mois','Six mois','Dix-huit mois','Trois mois'], bonne:0 },
              { q:'Comment appelle-t-on la mise bas chez la jument ?', options:['Le poulinage','Le sevrage','La saillie','Le débourrage'], bonne:0 },
              { q:'Le colostrum apporte principalement au poulain :', options:['Des anticorps essentiels','Des fibres longues','Un apprentissage moteur','Une identification électronique'], bonne:0 },
              { q:'Le sevrage correspond à :', options:['La séparation alimentaire progressive d’avec la mère','La naissance','La saillie','La pose de la puce'], bonne:0 },
              { q:'Le signalement graphique décrit :', options:['Les marques et particularités visibles du cheval','Son programme de travail','Sa ration','Son caractère uniquement'], bonne:0 },
              { q:'Quel outil lit le transpondeur électronique ?', options:['Un lecteur de puce','Un stéthoscope','Un nuancier','Une pince à sonder'], bonne:0 },
              { q:'Le nuancier aide principalement à :', options:['Déterminer précisément une robe','Mesurer le pied','Lire une puce','Évaluer la cadence'], bonne:0 },
              { q:'Avant tout déplacement, il faut vérifier :', options:['Identité, documents et exigences sanitaires applicables','Uniquement la selle','La couleur du licol','Le nombre de friandises'], bonne:0 }
            ]
          },
          {
            slug: 'allures-et-reculer', titre: 'Qualité des allures et mécanisme du reculer',
            questions: [
              { q:'Une allure régulière conserve :', options:['Un rythme constant','Une vitesse toujours maximale','Une encolure figée','Des foulées toutes plus longues'], bonne:0 },
              { q:'La cadence désigne principalement :', options:['Le rythme des foulées','La longueur de la crinière','La hauteur du garrot','La direction du regard'], bonne:0 },
              { q:'L’amplitude correspond :', options:['À la distance couverte par une foulée','Au nombre de repas','À la fréquence cardiaque','À la hauteur du cavalier'], bonne:0 },
              { q:'Au reculer, les membres se déplacent :', options:['Par bipèdes diagonaux, sans temps de suspension','Les deux antérieurs ensemble','Un seul à la fois comme au pas','Par bipèdes latéraux'], bonne:0 },
              { q:'Un reculer correct doit rester :', options:['Droit, calme, diagonal et actif','Rapide et précipité','Avec la tête très haute','Sans engagement des postérieurs'], bonne:0 },
              { q:'Une allure défectueuse est :', options:['Une altération du mécanisme normal ou de sa régularité','Une allure lente seulement','Une transition montante','Un changement de direction'], bonne:0 },
              { q:'L’impulsion est :', options:['Le désir contrôlé de se porter en avant','La vitesse maximale','Le poids du cavalier','Une action permanente de la main'], bonne:0 },
              { q:'Une extension d’encolure correcte conserve :', options:['Activité, équilibre et contact qui s’étire','Une perte totale d’activité','Une accélération incontrôlée','Une encolure bloquée'], bonne:0 }
            ]
          }
        ]
      }
    ]
  },
  {
    n: 7,
    titre: 'Galop 7',
    accroche: 'Aplombs, rationnement, bride, transport et autonomie technique.',
    categories: [
      {
        slug: 'expertise-du-cheval', titre: 'Expertise du cheval',
        intro: 'Évaluer la conformation, lire les documents et raisonner l’alimentation.',
        quizzes: [
          {
            slug: 'aplombs', titre: 'Les aplombs du cheval',
            questions: [
              { q:'Sur l’illustration, quel défaut d’aplomb montre la flèche ?', image:'/assets/visuel-g7-aplombs.webp', imageAlt:'Antérieurs vus de face ; deux flèches partent des pinces vers l’extérieur', options:['Panard','Cagneux','Campé','Sous lui'], bonne:0, explication:'Panard signifie que les pinces sont orientées vers l’extérieur.' },
              { q:'Des aplombs corrects favorisent :', options:['Une répartition régulière des contraintes','Une usure volontairement asymétrique','Une vitesse supérieure automatique','Une robe plus brillante'], bonne:0 },
              { q:'Un cheval cagneux présente des pinces orientées :', options:['Vers l’intérieur','Vers l’extérieur','Vers l’arrière','Sans direction particulière'], bonne:0 },
              { q:'“Campé du devant” signifie que les antérieurs sont :', options:['Placés trop en avant de la verticale','Placés sous le corps','Croisés','Orientés vers l’intérieur'], bonne:0 },
              { q:'L’observation dynamique sert à repérer :', options:['Déviation des membres et irrégularités en mouvement','Uniquement la taille','La couleur des sabots','Le numéro SIRE'], bonne:0 },
              { q:'Un défaut d’aplomb peut influencer :', options:['Usure du pied, articulations et locomotion','Uniquement le pansage','La digestion seulement','Le sexe du cheval'], bonne:0 },
              { q:'Pour observer de face, le cheval doit être :', options:['D’aplomb sur un sol plat et régulier','Sur une pente','En mouvement rapide','Avec un antérieur levé'], bonne:0 },
              { q:'L’analyse d’un aplomb doit être reliée :', options:['À la locomotion, au pied et à l’usage du cheval','À un seul angle photographique','À la robe uniquement','Au niveau du cavalier'], bonne:0 }
            ]
          },
          {
            slug: 'rationnement', titre: 'Les principes du rationnement',
            questions: [
              { q:'La première étape d’un rationnement est :', options:['Estimer le poids, l’état corporel et les besoins','Choisir une marque de granulés','Ajouter des compléments','Supprimer le fourrage'], bonne:0 },
              { q:'La matière sèche permet de comparer :', options:['Les aliments indépendamment de leur teneur en eau','La couleur des sacs','La taille des mangeoires','La longueur des fibres uniquement'], bonne:0 },
              { q:'Le fourrage doit généralement représenter :', options:['La base quantitative de la ration','Une friandise occasionnelle','Moins que les céréales dans tous les cas','Un aliment réservé au repos'], bonne:0 },
              { q:'Un complément minéral et vitaminé sert à :', options:['Corriger des apports insuffisants identifiés','Remplacer l’eau','Augmenter le volume de paille','Soigner toute maladie'], bonne:0 },
              { q:'Pourquoi fractionner les concentrés ?', options:['Pour limiter la charge digestive de chaque repas','Pour réduire l’accès à l’eau','Pour remplacer le foin','Pour accélérer l’ingestion'], bonne:0 },
              { q:'Une étiquette d’aliment doit être lue pour connaître :', options:['Composition, constituants analytiques et recommandations','Uniquement la couleur','Le nom du cheval conseillé','La taille du sac en photo'], bonne:0 },
              { q:'Le suivi d’une ration comprend :', options:['Poids, état corporel, comportement, crottins et performance','Uniquement l’appétit du jour','La fréquence de pansage','Le nombre de couvertures'], bonne:0 },
              { q:'Toute ration complexe ou problème de santé doit être discuté avec :', options:['Un vétérinaire ou nutritionniste qualifié','N’importe quel vendeur','Un autre cavalier uniquement','Personne'], bonne:0 }
            ]
          }
        ]
      },
      {
        slug: 'materiel-et-bien-etre', titre: 'Matériel et bien-être',
        intro: 'Bride, enrênements et transport au niveau d’autonomie Galop 7.',
        quizzes: [
          {
            slug: 'bride-et-enrenements', titre: 'La bride et les enrênements',
            questions: [
              { q:'La bride complète associe généralement :', options:['Un filet de bride et un mors de bride','Deux licols','Une muserolle seule','Un caveçon et une longe'], bonne:0 },
              { q:'Le mors de bride produit un effet de levier grâce :', options:['Aux branches et à la gourmette','À la têtière uniquement','Aux rênes de filet seules','Au frontal'], bonne:0 },
              { q:'La gourmette doit être :', options:['À plat, ajustée et contrôlée','Torsadée volontairement','Très lâche dans tous les cas','Posée sur le chanfrein'], bonne:0 },
              { q:'Monter à quatre rênes permet :', options:['De doser séparément filet et bride','D’attacher le cheval','De supprimer l’action des jambes','D’allonger les étriers'], bonne:0 },
              { q:'Un enrênement de longe doit être choisi selon :', options:['L’objectif, le niveau et la morphologie du cheval','La couleur du tapis','Le prix uniquement','La préférence du public'], bonne:0 },
              { q:'Le rôle d’un enrênement n’est jamais de :', options:['Forcer une attitude par douleur ou contrainte excessive','Guider ponctuellement une attitude','S’intégrer à une progression','Être réglé symétriquement'], bonne:0 },
              { q:'Avant utilisation, il faut vérifier :', options:['Réglage, symétrie, état du matériel et liberté de mouvement','Uniquement la propreté','La marque','La couleur des boucles'], bonne:0 },
              { q:'La mise sur la main résulte prioritairement :', options:['De l’activité, de l’équilibre et d’un contact juste','D’une traction continue des mains','D’un enrênement très court','De l’immobilité de l’encolure'], bonne:0 }
            ]
          },
          {
            slug: 'transport-et-bien-etre', titre: 'Transport et bien-être du cheval',
            questions: [
              { q:'Quel risque augmente lors d’un transport long et mal ventilé ?', options:['Déshydratation et troubles respiratoires','Amélioration automatique de l’endurance','Pousse rapide de la corne','Baisse du stress dans tous les cas'], bonne:0 },
              { q:'Avant le départ, on vérifie notamment :', options:['État du véhicule, ventilation, sol, séparations et fermetures','Uniquement le carburant','La couleur des protections','Le nombre de selles'], bonne:0 },
              { q:'Le cheval doit pouvoir pendant le trajet :', options:['Trouver un équilibre stable sans être attaché trop court','Se coucher systématiquement','Tourner librement dans le van','Manger des concentrés en continu'], bonne:0 },
              { q:'Pourquoi proposer de l’eau régulièrement ?', options:['Le stress et la chaleur peuvent accroître les pertes hydriques','Pour éviter toute pause','Pour remplacer le fourrage','Pour refroidir les protections'], bonne:0 },
              { q:'Après l’arrivée, il faut d’abord :', options:['Observer état général, respiration, hydratation et locomotion','Travailler immédiatement','Donner un gros repas de concentrés','Laisser les protections toute la nuit'], bonne:0 },
              { q:'Un cheval qui ne voyage pas bien doit être :', options:['Préparé progressivement avec un professionnel compétent','Forcé jusqu’à céder','Privé d’eau','Attaché plus court'], bonne:0 },
              { q:'Les protections ne remplacent pas :', options:['Une conduite souple et un véhicule adapté','Le pansage décoratif','La licence du cavalier','Le choix du tapis'], bonne:0 },
              { q:'Le bien-être en transport repose sur :', options:['Préparation, espace adapté, ventilation, conduite et surveillance','La vitesse maximale','Le silence absolu uniquement','Un trajet sans aucune pause'], bonne:0 }
            ]
          }
        ]
      }
    ]
  }
];

// Les explications sont centralisées par quiz afin de garder la banque lisible
// tout en garantissant une correction pédagogique pour chaque réponse.
const EXPLICATIONS_PAR_QUIZ = {
  '1/parties-du-corps': [
    null,
    'La croupe forme la partie supérieure de l’arrière-main, entre le rein et l’attache de la queue.',
    'Le chanfrein est la ligne osseuse de la face qui descend du front jusqu’aux naseaux.',
    'Le cheval est un respirateur nasal obligatoire : l’air entre et sort normalement par ses naseaux, et non par sa bouche.',
    'Le paturon est la zone du bas du membre comprise entre le boulet et la couronne, juste au-dessus du sabot.',
    'La crinière désigne l’ensemble des longs crins implantés sur le bord supérieur de l’encolure.',
    'Le cheval est un quadrupède : il possède deux membres antérieurs et deux membres postérieurs, soit quatre membres.',
    'Le toupet est la mèche de crins qui retombe entre les oreilles et peut couvrir le haut du front et des yeux.'
  ],
  '1/les-allures': [
    'Le pas, le trot et le galop constituent les trois allures naturelles de base étudiées chez le cheval.',
    'Le pas est l’allure naturelle la plus lente, avec quatre battues successives et aucun temps de suspension.',
    'Au pas, chaque membre se pose séparément : on entend donc quatre battues régulières par cycle.',
    'Au trot, un antérieur se déplace avec le postérieur opposé ; ces deux diagonaux produisent les deux temps de l’allure.',
    'Une foulée de galop comporte trois battues, puis une phase de suspension pendant laquelle aucun pied ne touche le sol.',
    'Parmi le pas, le trot et le galop, le galop permet les foulées les plus rapides grâce à son mécanisme sauté.',
    'À l’arrêt carré, le cheval répartit son poids sur ses deux antérieurs et ses deux postérieurs.'
  ],
  '1/securite-a-pied': [
    'En arrivant par le côté et dans son champ de vision, on permet au cheval de nous identifier sans être surpris.',
    'Lui parler avant le contact l’avertit de notre présence et réduit le risque d’une réaction de peur.',
    'Juste derrière lui se trouve une zone qu’il distingue mal et où un mouvement de défense peut provoquer un coup de pied.',
    'Le nœud de sécurité maintient le cheval tout en pouvant être défait rapidement si celui-ci tire ou panique.',
    'Les sandales laissent les orteils exposés aux écrasements et offrent peu de stabilité près des sabots.',
    'Prévenir le cheval puis rester largement hors de portée de ses postérieurs réduit le risque de le surprendre et d’être atteint par un coup de pied.'
  ],
  '1/materiel-de-pansage': [
    'L’étrille décolle la boue sèche, la poussière profonde et les poils morts grâce à des mouvements circulaires sur les masses musculaires.',
    null,
    'La brosse douce retire les dernières poussières sans irriter les zones sensibles, ce qui la rend adaptée à la tête.',
    'Une éponge propre et dédiée permet de nettoyer doucement les yeux et les naseaux ; une autre doit être réservée à la région sous la queue.',
    'L’étrille décolle les saletés, le bouchon les évacue, puis la brosse douce enlève la poussière fine et lustre le poil.',
    'Retirer boue, sable et poils collés évite les frottements et les points de pression douloureux sous le tapis et la selle.'
  ],
  '2/robes-de-base': [
    'Le bai associe un corps brun à rouge et des points noirs caractéristiques : crinière, queue et extrémités des membres.',
    'Chez l’alezan, le corps et les crins appartiennent à la même famille fauve, sans extrémités noires de type bai.',
    'La robe grise résulte d’un mélange évolutif de poils blancs et colorés sur une peau généralement pigmentée.',
    'Une robe noire possède des poils et des crins noirs sans les zones brunes ou fauves qui caractérisent le bai.',
    'Le terme pie décrit de grandes plages blanches juxtaposées à des plages d’une autre couleur nettement délimitées.',
    'Le palomino associe une robe dorée à crème à des crins blancs ou très clairs, contrairement à l’isabelle dont les crins et extrémités sont foncés.'
  ],
  '2/marques-blanches': [
    'Une pelote est une petite marque blanche arrondie située sur le front, plus étendue qu’une simple tache ponctuelle.',
    'La liste suit verticalement le chanfrein sous la forme d’une bande blanche relativement étroite.',
    'Une bande est plus large qu’une liste et couvre une portion importante du chanfrein.',
    'La balzane est une marque blanche d’un membre qui part du sabot et remonte plus ou moins haut.'
  ],
  '2/pansage-complet': [
    'Avant le travail, le pansage prépare et permet d’inspecter le cheval ; après, il sert à contrôler son état et retirer sueur et saletés.',
    'Le cure-pied permet de retirer boue et cailloux et de vérifier la sole, la fourchette et la présence d’une anomalie.',
    'Une brosse ou un peigne à crins démêle progressivement les mèches sans arracher inutilement les crins.',
    'Un cheval correctement attaché reste contrôlable et ne peut pas s’éloigner ou se retourner brusquement sur la personne qui le soigne.'
  ],
  '2/le-filet-et-la-selle': [
    'Le mors est l’embouchure du filet placée dans la bouche, au niveau des barres, entre incisives et molaires.',
    'Reliées au mors, les rênes transmettent les actions fines des mains du cavalier vers la bouche du cheval.',
    'La sangle passe sous le thorax et relie les deux côtés de la selle pour empêcher celle-ci de tourner ou reculer.',
    'L’étrier reçoit le pied du cavalier et contribue à son équilibre lorsqu’il est correctement chaussé.',
    'Le pommeau est la partie avant de la selle, tandis que la partie relevée située derrière le cavalier est le troussequin.'
  ],
  '3/parties-du-corps-approfondi': [
    'L’ars est le pli situé à la jonction du thorax et du membre antérieur, correspondant à la région de l’aisselle.',
    'Le grasset se trouve en haut du membre postérieur et correspond anatomiquement à l’articulation du genou humain.',
    'Le jarret est la grande articulation anguleuse du postérieur placée entre le grasset et le canon.',
    'Sur l’antérieur du cheval, l’articulation appelée genou correspond au carpe, l’équivalent de notre poignet.',
    'Le fanon est la touffe de poils située à l’arrière du bas du membre, au niveau du boulet et du paturon.',
    'La châtaigne est une plaque cornée naturelle visible sur la face interne des membres, vestige de l’évolution du cheval.'
  ],
  '3/robes-et-declinaisons': [
    'Le bai cerise garde les crins et extrémités noirs du bai, mais son corps présente des reflets rouges plus vifs.',
    'Chez l’alezan crins lavés, la crinière et la queue sont nettement plus claires que la teinte fauve du corps.',
    'Le rouan présente des poils blancs mêlés aux poils colorés dans une même zone, contrairement aux plages séparées d’une robe pie.',
    'L’aubère est un mélange de poils blancs et de poils alezans qui donne au corps une apparence rosée ou rousse éclaircie.',
    'Le gène gris provoque une dépigmentation progressive des poils : le cheval naît coloré puis sa robe s’éclaircit avec l’âge.'
  ],
  '3/mecanisme-des-allures': [
    'Le trot fonctionne par bipèdes diagonaux : antérieur gauche avec postérieur droit, puis antérieur droit avec postérieur gauche.',
    'Le temps de suspension est précisément la phase où les quatre membres sont simultanément décollés du sol.',
    'Le pas est une allure marchée à quatre temps : les pieds se posent l’un après l’autre selon une séquence régulière.',
    'Le pied du galop est nommé d’après l’antérieur qui se pose en dernier et avance le plus loin dans la foulée.',
    'À main droite, le cavalier évolue avec sa main droite tournée vers l’intérieur de la piste et le centre du manège.'
  ],
  '3/figures-de-manege': [
    null,
    'La diagonale relie deux coins opposés en traversant la carrière selon une ligne oblique.',
    'Un changement de main modifie le sens de déplacement : la nouvelle main intérieure devient celle du nouveau côté de la courbe.',
    'La serpentine alterne plusieurs boucles de courbure opposée, dessinant une succession de S dans la carrière.'
  ],
  '4/les-mors': [
    'Le filet simple brisé est formé de deux canons reliés au centre ; cette articulation le distingue d’un mors droit non articulé.',
    'Les olives sont des anneaux épaissis et fixes qui réduisent le risque que la commissure des lèvres soit pincée par la jonction du mors.',
    'Les branches et la gourmette du mors de bride créent un levier qui agit à la fois sur la bouche, la mandibule et la nuque.',
    'Les longues aiguilles encadrent la bouche et limitent le déplacement latéral ou la rotation du mors lors des actions de rêne.'
  ],
  '4/parties-de-la-selle': [
    'Le troussequin est le bord arrière relevé du siège ; il aide à délimiter la place du cavalier.',
    'Le quartier est le large panneau de cuir qui descend sur le flanc et sépare la jambe du cavalier des contre-sanglons.',
    'Les sanglons sont les lanières fixées à l’arçon sur lesquelles on boucle la sangle pour maintenir la selle.',
    'L’étrivière passe dans le couteau d’étrivière et porte l’étrier ; ses trous permettent d’en régler la longueur.',
    'L’arçon est l’ossature interne qui donne sa forme à la selle et répartit les charges de part et d’autre de la colonne.'
  ],
  '4/mecanisme-du-galop': [
    null,
    'Le galop enchaîne trois battues distinctes avant une phase de suspension où les quatre membres quittent le sol.',
    'Sur un cercle à droite, le galop à droite place l’antérieur droit en dernier temps et correspond au pied intérieur de la courbe.',
    'À faux, le cheval galope sur le pied opposé au sens de la courbe, donc sur le pied extérieur.',
    'La transition galop-trot fait passer d’une allure plus rapide à une allure plus lente : elle est donc descendante.',
    'Un regard porté sur la trajectoire et un buste centré permettent d’accompagner la courbe sans déséquilibrer le cheval.',
    'La cadence est régulière lorsque l’intervalle entre les foulées reste constant, sans accélération ni ralentissement involontaire.',
    'Une demande de galop claire nécessite un cheval en avant, équilibré et guidé sur une trajectoire préparée.'
  ],
  '4/alimentation-du-cheval': [
    'L’appareil digestif du cheval est adapté à l’ingestion prolongée de fibres : herbe et foin doivent donc former la base de sa ration.',
    'Le petit volume de l’estomac supporte mieux plusieurs apports modérés qu’un ou deux repas très volumineux.',
    'L’eau propre doit rester accessible car elle est indispensable à la digestion, à la thermorégulation et au fonctionnement de l’organisme.',
    'Il n’existe pas de délai universel : le volume et la nature du repas, l’intensité du travail et le cheval comptent ; on évite l’effort immédiat et on suit les consignes de l’encadrement.'
  ],
  '5/principes-apprentissage': [
    null,
    null,
    'Le renforcement est dit négatif parce qu’on retire le stimulus : la pression cesse exactement lorsque le cheval répond correctement.',
    'Commencer par une aide légère laisse au cheval la possibilité de répondre au signal le plus fin avant toute augmentation progressive.',
    'Une punition qui crée peur ou douleur dégrade la confiance et n’indique pas clairement au cheval la réponse recherchée.',
    'La sensibilisation rend le cheval attentif à un signal pertinent afin qu’il réagisse à une aide de plus en plus discrète.',
    'En fractionnant l’exercice, chaque réussite devient identifiable et renforçable avant d’enchaîner avec l’étape suivante.',
    'Tension, fuite ou incapacité à rester attentif montrent que le seuil d’apprentissage est dépassé et qu’il faut simplifier.'
  ],
  '5/squelette-et-muscles': [
    null,
    'Les vertèbres s’alignent autour du canal vertébral, qui entoure et protège la moelle épinière.',
    'L’humérus relie l’omoplate au radius : il constitue donc l’os long du bras entre l’épaule et le coude.',
    'Le bassin relie les membres postérieurs à la colonne et transmet vers le tronc la force produite par l’arrière-main.',
    'La sangle abdominale soutient les viscères et stabilise le tronc, ce qui contribue au fonctionnement du dos.',
    'Un tendon prolonge un muscle jusqu’à son point d’insertion osseux et transmet la force de la contraction.',
    'Un ligament unit des os entre eux et stabilise l’articulation tout en guidant son amplitude de mouvement.',
    'L’échauffement augmente progressivement la circulation, la température musculaire et l’élasticité des tissus avant l’effort.'
  ],
  '5/digestion-et-identification': [
    'Le cheval produit continuellement de l’acide dans un estomac de faible capacité ; des fibres disponibles régulièrement tamponnent cette acidité.',
    'Le cæcum et le gros côlon hébergent les micro-organismes qui dégradent les fibres par fermentation.',
    'Une transition sur plusieurs jours laisse à la flore digestive le temps de s’adapter au nouvel aliment et limite les troubles digestifs.',
    'Le numéro SIRE est l’identifiant administratif unique qui rattache l’équidé à son dossier officiel.',
    'En France, le transpondeur est habituellement placé dans le ligament nuchal, sur le côté gauche de l’encolure.',
    'Le document d’identification rassemble le signalement et les données administratives nécessaires au suivi de l’équidé.',
    'Le fourrage fournit les fibres nécessaires au transit et permet au cheval de conserver un temps d’ingestion proche de son comportement naturel.',
    'Les listes et engagements réglementaires confirment que le couple cavalier-cheval est autorisé à prendre part à l’épreuve.'
  ],
  '5/longe-et-embarquement': [
    'Le cheval, le longeur et la chambrière constituent trois sommets : la longe guide l’avant-main et la chambrière influence l’arrière-main.',
    'La chambrière prolonge le bras du longeur pour soutenir l’impulsion à distance ; elle transmet un signal, elle ne sert pas à frapper.',
    'Depuis le centre mobile du cercle, le longeur peut orienter son corps vers l’épaule pour guider et vers la hanche pour activer.',
    'Un véhicule immobilisé, stable, clair et entièrement préparé réduit les sources d’hésitation et les risques pendant l’embarquement.',
    'Le calme, l’alignement vers l’entrée et les récompenses graduelles favorisent un apprentissage durable sans lutte dangereuse.',
    'Si le cheval tire, une longe enroulée peut se resserrer brutalement autour des doigts et provoquer de graves lésions.',
    'Des protections bien ajustées couvrent les zones exposées sans glisser, tourner ni comprimer les tendons.',
    'Fermer d’abord la barre arrière ou le bas-flanc empêche le cheval de reculer avant que son attache de tête soit finalisée.'
  ],
  '6/pied-et-ferrure': [
    null,
    'La fourchette se déforme à l’appui et participe, avec les structures internes du pied, à l’amortissement et à la circulation locale.',
    'La muraille est faite de corne kératinisée, une matière résistante produite en continu depuis la couronne.',
    'Le maréchal-ferrant est formé pour équilibrer le pied par le parage et, lorsque nécessaire, fabriquer et poser une ferrure.',
    'Parer consiste à retirer l’excès de corne pour restaurer des longueurs et des appuis adaptés au pied.',
    'Un fer déplacé peut blesser ou modifier les appuis ; il faut donc limiter l’activité et faire intervenir une personne compétente.',
    'Une augmentation du pouls digité et de la chaleur peut accompagner une inflammation douloureuse située dans le pied.',
    'Le curage retire les pierres et la litière tout en permettant d’inspecter la sole, la fourchette, la corne et la ferrure.'
  ],
  '6/besoins-alimentaires': [
    'Plus le travail est long ou intense, plus les muscles dépensent d’énergie et plus les apports doivent être adaptés.',
    'Ces zones révèlent les dépôts de graisse et la couverture osseuse ; leur palpation permet d’attribuer une note d’état corporel.',
    'L’excès de graisse favorise notamment l’insulinorésistance, la fourbure et une surcharge des articulations.',
    'La chaleur, l’effort et la production de lait augmentent les pertes d’eau, notamment par la sueur et le lait.',
    'Les concentrés apportent beaucoup d’énergie dans peu de volume : les adapter et les fractionner réduit les surcharges digestives.',
    'Deux quartiers de foin visuellement semblables peuvent avoir des densités très différentes ; seule la pesée donne une quantité fiable.',
    'On construit une ration à partir des besoins individuels, puis du fourrage disponible, et on la contrôle grâce à l’évolution de l’état corporel.',
    'Un nouveau foin ou concentré modifie les nutriments et la flore digestive sollicitée, ce qui justifie une transition progressive.'
  ],
  '6/reproduction-et-identification': [
    'La gestation équine dure en moyenne environ 340 jours, soit un peu plus de onze mois.',
    'Le terme poulinage désigne la mise bas de la jument et la naissance du poulain.',
    'Le colostrum, premier lait de la jument, transmet des anticorps indispensables à l’immunité initiale du nouveau-né.',
    'Le sevrage réduit puis supprime progressivement la dépendance du poulain au lait et à la présence maternelle.',
    'Le signalement graphique reporte les épis, marques blanches et autres particularités permettant de reconnaître visuellement l’équidé.',
    'Le lecteur de puce émet un signal qui active le transpondeur et affiche son numéro d’identification.',
    'Le nuancier compare la couleur des poils à des références normalisées afin de préciser la robe observée.',
    'L’identité et les documents doivent correspondre au cheval transporté, et les règles sanitaires varient selon le trajet et la destination.'
  ],
  '6/allures-et-reculer': [
    'La régularité désigne la conservation du même enchaînement et du même rythme de battues au fil des foulées.',
    'La cadence mesure la fréquence et le rythme auxquels les foulées se répètent, indépendamment de leur longueur.',
    'L’amplitude est la longueur de terrain parcourue entre deux phases comparables d’une même foulée.',
    'Le reculer reprend un mécanisme diagonal proche du trot, mais sans projection ni temps de suspension.',
    'Un bon reculer conserve l’alignement, la sérénité et l’activité des diagonaux sans précipitation.',
    'Une allure devient défectueuse quand son ordre des battues, son rythme ou sa symétrie s’écarte du mécanisme attendu.',
    'L’impulsion est l’énergie propulsive, disponible et contrôlable avec laquelle le cheval se porte vers l’avant.',
    'Dans une extension juste, le cheval avance son encolure tout en gardant l’engagement, l’équilibre et un contact élastique.'
  ],
  '7/aplombs': [
    null,
    'Des axes corrects répartissent plus uniformément le poids et les forces sur les os, articulations, tendons et sabots.',
    'Cagneux décrit des membres dont les pinces convergent vers l’intérieur lorsqu’on les observe de face.',
    'Campé du devant signifie que les antérieurs prennent appui en avant de la verticale abaissée depuis le tronc.',
    'L’examen en mouvement montre la trajectoire réelle des membres et révèle déviations ou asymétries invisibles à l’arrêt.',
    'Un axe imparfait modifie la distribution des charges, ce qui peut changer l’usure de la corne et solliciter la locomotion.',
    'Un sol plat et une station équilibrée évitent qu’une pente ou une posture momentanée ne fausse l’observation des axes.',
    'Un aplomb ne s’interprète pas isolément : son effet dépend du pied, du mouvement, de la morphologie globale et du travail demandé.'
  ],
  '7/rationnement': [
    'Le poids, l’état corporel, l’activité et l’état physiologique déterminent les besoins avant tout choix d’aliment.',
    'Ramener les aliments à leur matière sèche retire l’effet de l’eau et permet de comparer réellement leurs apports nutritifs.',
    'Le fourrage fournit les fibres indispensables au fonctionnement digestif et doit constituer la plus grande part de l’ingéré.',
    'Un complément minéral et vitaminé comble des écarts précis entre les besoins et les apports de la ration de base.',
    'Répartir les concentrés diminue la quantité d’amidon et la charge digestive reçues en une seule fois.',
    'La composition et les constituants analytiques indiquent ce que contient l’aliment, tandis que les recommandations guident sa distribution.',
    'Ces indicateurs montrent si la ration maintient durablement la santé digestive, le poids, le comportement et l’aptitude au travail.',
    'Un vétérinaire ou nutritionniste peut intégrer les analyses, la pathologie et les interactions entre aliments sans exposer le cheval à un déséquilibre.'
  ],
  '7/bride-et-enrenements': [
    'La bride complète réunit deux embouchures distinctes, le filet de bride et le mors de bride, chacune reliée à sa paire de rênes.',
    'Les longues branches pivotent lorsque les rênes agissent, tandis que la gourmette limite la rotation et complète l’effet de levier.',
    'Une gourmette posée à plat et correctement réglée répartit son action sans torsion ni compression permanente.',
    'Quatre rênes donnent accès séparément à l’action directe du filet et à l’effet de levier de la bride.',
    'L’enrênement doit répondre à un objectif précis sans dépasser les capacités physiques, techniques et mentales du cheval.',
    'La douleur et la contrainte excessive imposent une posture sans construire équilibre, compréhension ni musculature juste.',
    'Un contrôle du réglage et de l’état des pièces prévient asymétrie, rupture, frottement et restriction anormale du mouvement.',
    'La mise sur la main apparaît lorsque l’impulsion traverse un cheval équilibré jusqu’à un contact stable et élastique, pas par traction.'
  ],
  '7/transport-et-bien-etre': [
    'Une ventilation insuffisante concentre chaleur, humidité et particules, ce qui favorise pertes hydriques et irritation respiratoire.',
    'Vérifier ces éléments prévient glissade, blessure, échappement et défaut d’aération avant que le véhicule ne roule.',
    'Une attache adaptée laisse au cheval assez de liberté pour utiliser son encolure et stabiliser son corps sans pouvoir se retourner.',
    'La sudation liée à la chaleur et au stress augmente les pertes d’eau ; des propositions régulières limitent la déshydratation.',
    'Ce bilan immédiat permet de détecter fatigue, détresse respiratoire, déshydratation ou blessure apparue pendant le trajet.',
    'Une habituation graduelle encadrée décompose l’approche, la montée et l’immobilité afin de réduire peur et danger.',
    'Même bien posées, les protections ne compensent ni les accélérations brusques ni un espace ou un sol inadapté.',
    'Ces facteurs agissent ensemble sur la stabilité, la respiration, le stress et la récupération du cheval transporté.'
  ]
};

for (const niveau of NIVEAUX) {
  for (const categorie of niveau.categories) {
    for (const quiz of categorie.quizzes) {
      const explications = EXPLICATIONS_PAR_QUIZ[`${niveau.n}/${quiz.slug}`];
      for (const [index, question] of quiz.questions.entries()) {
        if (!question.explication && explications?.[index]) {
          question.explication = explications[index];
        }
      }
    }
  }
}

function empreinteDeterministe(texte) {
  let empreinte = 0;
  for (const caractere of texte) {
    empreinte = (empreinte * 31 + caractere.codePointAt(0)) >>> 0;
  }
  return empreinte;
}

function rotationADroite(options, decalage) {
  const rotation = ((decalage % options.length) + options.length) % options.length;
  if (rotation === 0) return [...options];
  return [...options.slice(-rotation), ...options.slice(0, -rotation)];
}

// La position correcte varie d’une question à l’autre tout en restant stable
// entre deux générations du site. Seul l’ordre des quatre options est modifié.
function repartirPositionsCorrectes() {
  for (const niveau of NIVEAUX) {
    for (const categorie of niveau.categories) {
      for (const quiz of categorie.quizzes) {
        const depart = (niveau.n + empreinteDeterministe(quiz.slug)) % 4;
        for (const [index, question] of quiz.questions.entries()) {
          const positionCible = (depart + index) % question.options.length;
          const decalage = positionCible - question.bonne;
          question.options = rotationADroite(question.options, decalage);
          question.bonne = positionCible;
        }
      }
    }
  }
}

repartirPositionsCorrectes();
