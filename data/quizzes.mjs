/**
 * Banque de quiz — Galops 1 à 4 (MVP).
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
              { q: "Comment s'appelle la zone en haut du dos, entre l'encolure et le dos ?", options: ['Le garrot', 'Le paturon', 'Le chanfrein', 'La croupe'], bonne: 0 },
              { q: "Quel est le nom de l'arrière-train du cheval, en haut de la queue ?", options: ['Le boulet', "L'ars", 'La croupe', 'La ganache'], bonne: 2 },
              { q: "Comment appelle-t-on la partie avant du visage du cheval, entre les yeux et les naseaux ?", options: ['Le chanfrein', 'Le paturon', 'Le sabot', 'Le boulet'], bonne: 0 },
              { q: 'Par où le cheval respire-t-il principalement ?', options: ['La bouche', 'Les naseaux', 'Les oreilles', 'La gorge'], bonne: 1 },
              { q: "Comment s'appelle l'articulation située juste au-dessus du sabot ?", options: ['Le paturon', 'Le grasset', 'Le coude', 'Le jarret'], bonne: 0 },
              { q: "Quel est le nom donné à l'ensemble des poils longs le long de l'encolure ?", options: ['La queue', 'Le toupet', 'La crinière', "Le fanon"], bonne: 2 },
              { q: 'Combien de membres possède un cheval ?', options: ['2', '4', '6', '8'], bonne: 1 },
              { q: "Comment s'appelle le repli de peau et de poils au-dessus de l'œil ?", options: ['Le toupet', 'Le fanon', 'La ganache', "L'ars"], bonne: 0 }
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
              { q: 'Comment se déplace-t-on autour d’un cheval attaché, pour rester en sécurité ?', options: ['En passant loin de lui, jamais collé', 'En passant sous son encolure', 'En passant juste derrière, collé à la croupe', "Peu importe"], bonne: 0 }
            ]
          },
          {
            slug: 'materiel-de-pansage',
            titre: 'Le matériel de pansage',
            questions: [
              { q: 'Quel outil sert à enlever la boue et les poils morts en larges mouvements circulaires ?', options: ['L’étrille', 'Le cure-pied', 'La brosse douce', 'Le peigne à crins'], bonne: 0 },
              { q: 'Quel outil utilise-t-on pour nettoyer l’intérieur du sabot ?', options: ['L’étrille', 'Le cure-pied', 'La brosse dure', "L'éponge"], bonne: 1 },
              { q: 'Quelle brosse utilise-t-on en dernier, sur le visage du cheval, car elle est douce ?', options: ['L’étrille', 'La brosse dure (bouchon)', 'La brosse douce', 'Le cure-pied'], bonne: 2 },
              { q: 'À quoi sert l’éponge lors du pansage ?', options: ['Nettoyer les yeux, naseaux et sous la queue', 'Brosser la crinière', 'Nettoyer les sabots', 'Peigner la queue'], bonne: 0 },
              { q: 'Dans quel ordre pense-t-on généralement le pansage ?', options: ['Brosse douce puis étrille', 'Étrille puis brosse dure puis brosse douce', 'Cure-pied en premier toujours', "L'ordre n'a pas d'importance"], bonne: 1 },
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
              { q: 'Quelle robe est de couleur crème à jaune pâle, avec crins clairs ?', options: ['Isabelle', 'Bai', 'Alezan', 'Noir'], bonne: 0 }
            ]
          },
          {
            slug: 'marques-blanches',
            titre: 'Les marques blanches de la tête',
            questions: [
              { q: 'Comment s’appelle une petite marque blanche sur le front ?', options: ['Liste', 'Pelote', 'Balzane', 'Lentille'], bonne: 1 },
              { q: 'Comment s’appelle une fine ligne blanche verticale sur le chanfrein ?', options: ['Pelote', 'Liste', 'Étoile', 'Balzane'], bonne: 1 },
              { q: 'Comment s’appelle une large marque blanche couvrant tout le chanfrein ?', options: ['Liste', 'Balzane', 'Bande', 'Pelote'], bonne: 2 },
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
              { q: 'Comment s’appelle la zone charnue à l’arrière du paturon, juste au-dessus du sabot ?', options: ['Le fanon', 'La châtaigne', 'La ganache', 'Le chanfrein'], bonne: 0 },
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
              { q: 'Au pas, dans quel ordre se lèvent les membres ?', options: ['Un par un, en diagonale alternée', 'Les deux antérieurs ensemble', 'Les deux postérieurs ensemble', 'Aléatoirement'], bonne: 0 },
              { q: 'Qu’appelle-t-on le « pied » sur lequel un cheval galope ?', options: ['Le dernier membre antérieur qui se pose à chaque foulée', 'Le sabot le plus large', 'Le membre arrière gauche toujours', 'Cela n’existe pas'], bonne: 0 },
              { q: 'Dans un manège, être « à main droite » signifie que :', options: ['Le cheval tourne vers la droite, le centre du manège à droite', 'Le cavalier tient les rênes de la main droite', 'Le cheval part du pied droit', 'Cela concerne uniquement le trot'], bonne: 0 }
            ]
          },
          {
            slug: 'figures-de-manege',
            titre: 'Les figures de manège de base',
            questions: [
              { q: 'Comment s’appelle la figure en forme de boucle ronde tracée dans le manège ?', options: ['La volte', 'La diagonale', 'Le changement de main', 'La serpentine'], bonne: 0 },
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
              { q: 'Quel mors est composé d’une seule pièce brisée en son centre (« canon brisé ») et agit surtout sur les coins de la bouche ?', options: ['Le mors à aiguilles / filet', 'Le mors de bride', 'Le mors western sans embouchure', 'Aucun'], bonne: 0 },
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
            slug: 'alimentation-du-cheval',
            titre: 'L’alimentation du cheval',
            questions: [
              { q: 'Quel type d’aliment doit constituer la base de la ration d’un cheval ?', options: ['Le fourrage (foin, herbe)', 'Les céréales uniquement', 'Les friandises', 'La viande'], bonne: 0 },
              { q: 'Pourquoi fractionne-t-on les repas d’un cheval en plusieurs fois par jour ?', options: ['Son estomac est petit par rapport à sa taille', 'Pour le faire maigrir', 'Ce n’est pas nécessaire', 'Pour l’occuper'], bonne: 0 },
              { q: 'Que doit-on toujours mettre à disposition du cheval, en libre accès ?', options: ['De l’eau propre', 'Des céréales', 'Du sucre', 'Des friandises'], bonne: 0 },
              { q: 'Combien de temps attend-on environ après un repas copieux avant un travail intense, pour limiter les risques digestifs ?', options: ['Environ 1 à 2 heures', 'Aucun délai nécessaire', '10 minutes suffisent', 'Une semaine'], bonne: 0 }
            ]
          },
          {
            slug: 'robes-complexes',
            titre: 'Les robes plus complexes',
            questions: [
              { q: 'Une robe « bai brun » se distingue d’un bai classique par :', options: ['Une teinte plus sombre, presque marron foncé', 'Des taches blanches', 'Une robe entièrement noire', 'Des crins blancs'], bonne: 0 },
              { q: 'Le terme « pangaré » désigne :', options: ['Des zones plus claires autour du museau, des yeux et du ventre', 'Une robe entièrement blanche', 'Une tache sur le front uniquement', 'Un type de mors'], bonne: 0 },
              { q: 'Un cheval « louvet » a une robe qui ressemble à celle :', options: ['D’un loup, gris-brun avec crins noirs', 'D’un tigre', 'D’une zèbre', 'D’un mouton'], bonne: 0 }
            ]
          }
        ]
      }
    ]
  }
];
