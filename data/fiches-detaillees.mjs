/**
 * Contenus longs des fiches de révision Galops 1 à 7.
 *
 * Ces textes sont des reformulations pédagogiques originales. Ils complètent
 * les axes synthétiques de data/content.mjs sans se substituer à
 * l’enseignement pratique dispensé par un encadrant.
 */
export const FICHES_DETAILLEES = [
  {
    n: 1,
    titre: 'Découvrir le cheval et agir en sécurité',
    intro: 'Le Galop 1 installe les bons réflexes : observer avant d’agir, rester prévisible pour le cheval et comprendre les gestes élémentaires à pied comme en selle. L’objectif n’est pas de tout savoir, mais de pouvoir expliquer pourquoi chaque geste protège le cavalier et le cheval.',
    illustrations: {
      principal: {
        src: '/assets/diagramme-g1-principal-v2.webp',
        alt: 'Cheval vu de profil avec repères sur les principales parties extérieures',
        legende: 'Les grands repères extérieurs à reconnaître : tête, encolure, garrot, dos, ventre, croupe et membres.',
        reperes: [
          { n: 1, label: 'Tête et chanfrein' },
          { n: 2, label: 'Encolure' },
          { n: 3, label: 'Garrot' },
          { n: 4, label: 'Dos' },
          { n: 5, label: 'Croupe' },
          { n: 6, label: 'Épaule' },
          { n: 7, label: 'Poitrail' },
          { n: 8, label: 'Ventre' },
          { n: 9, label: 'Membre antérieur' },
          { n: 10, label: 'Crins de la queue' },
          { n: 11, label: 'Crinière' },
          { n: 12, label: 'Attache de la queue' }
        ]
      },
      pratique: {
        src: '/assets/diagramme-g1-pratique.webp',
        alt: 'Quatre attitudes d’un même cheval : détendu, inquiet, défensif et curieux',
        legende: 'Les oreilles, le regard, l’encolure et la posture se lisent ensemble pour comprendre l’attitude du cheval.',
        reperes: [
          { n: 1, label: 'Détendu et attentif' },
          { n: 2, label: 'Inquiet ou en alerte' },
          { n: 3, label: 'Défensif' },
          { n: 4, label: 'Curieux' }
        ]
      }
    },
    sections: [
      {
        titre: 'Observer et aborder le cheval',
        texte: 'Le cheval perçoit très bien ce qui se passe autour de lui, mais certaines zones proches de sa tête et derrière sa croupe lui sont moins faciles à voir. On l’aborde calmement, de préférence vers l’épaule, en parlant avant de le toucher. Les oreilles, le regard, la tension de l’encolure et la posture se lisent ensemble.',
        points: [
          'Prévenir de sa présence par la voix et éviter les gestes soudains.',
          'Rester près de l’épaule, sans se placer directement devant ni derrière.',
          'Ne jamais conclure sur une seule oreille : observer toute la posture.'
        ]
      },
      {
        titre: 'Nommer les parties principales',
        texte: 'Des repères simples permettent de décrire le cheval et de suivre les consignes au club. Sur l’avant-main se trouvent notamment la tête, l’encolure, le garrot et les épaules ; le tronc comprend le dos, les flancs et le ventre ; l’arrière-main comprend la croupe et les hanches.',
        points: [
          'Le garrot est le relief situé entre la base de l’encolure et le dos.',
          'Le toupet, la crinière et la queue sont des crins.',
          'Chaque membre se termine par un pied protégé par un sabot.'
        ]
      },
      {
        titre: 'Reconnaître allures et robes de base',
        texte: 'Le pas, le trot et le galop se distinguent par leur rythme. Le pas est une allure à quatre temps sans suspension ; le trot fonctionne par bipèdes diagonaux avec un temps de suspension ; le galop courant est une allure dissymétrique à trois temps suivie d’une suspension. Les robes de base étudiées sont le noir, l’alezan et le bai.',
        points: [
          'Au pas, on entend quatre battues régulières.',
          'Au trot, les membres opposés en diagonale se déplacent ensemble.',
          'Un bai possède un corps fauve avec crins et extrémités noirs.'
        ]
      },
      {
        titre: 'Réaliser un premier pansage',
        texte: 'Le pansage retire la saleté, permet de contrôler la peau et prépare les zones en contact avec le matériel. On adapte chaque outil à la zone : l’étrille décolle la saleté sur les masses charnues, le bouchon l’évacue et la brosse douce termine le travail. Le visage et les membres demandent des gestes délicats.',
        points: [
          'Ne pas passer une étrille dure sur la tête ou les parties osseuses.',
          'Dégager particulièrement le dos, le passage de sangle et la tête.',
          'Ranger les outils au fur et à mesure pour éviter de trébucher.'
        ]
      },
      {
        titre: 'Se déplacer à pied et monter',
        texte: 'À pied, le cavalier conduit le cheval sans enrouler la longe autour de sa main et conserve une distance qui lui permet de voir où il va. À cheval, il vérifie casque, sangle et étriers, puis utilise son regard, son assiette, ses jambes et ses mains pour demander avancer, ralentir ou tourner.',
        points: [
          'Tenir la longe pliée dans la main, jamais en boucles serrées autour des doigts.',
          'Monter et descendre selon les consignes, avec un cheval immobile.',
          'Regarder la trajectoire aide à orienter tout le corps avec justesse.'
        ]
      }
    ],
    checklist: [
      'J’annonce ma présence avant de toucher le cheval.',
      'Je sais montrer le garrot, le dos, la croupe et les quatre membres.',
      'Je distingue le pas, le trot et le galop par leur rythme.',
      'Je choisis un outil de pansage adapté à la zone.',
      'Je vérifie casque, sangle et longueur des étriers avant de partir.',
      'Je mène sans enrouler la longe autour de ma main.'
    ],
    erreurs: [
      { erreur: 'Passer rapidement derrière un cheval.', correction: 'Contourner à distance sûre selon les consignes du club, ou rester très près en gardant le contact si l’encadrant l’enseigne.' },
      { erreur: 'Déduire que le cheval est agressif parce qu’une oreille est couchée.', correction: 'Croiser les indices : deux oreilles, yeux, naseaux, encolure, muscles et déplacement.' },
      { erreur: 'Confondre le licol et le filet.', correction: 'Le licol sert surtout à manipuler et attacher ; le filet comporte notamment un mors et des rênes pour monter.' },
      { erreur: 'Regarder ses mains ou le sol en selle.', correction: 'Porter le regard vers la trajectoire afin de conserver équilibre et anticipation.' }
    ],
    lexique: [
      { terme: 'Garrot', definition: 'Relief entre l’encolure et le dos, utilisé comme repère pour la taille et le placement de la selle.' },
      { terme: 'Croupe', definition: 'Partie supérieure de l’arrière-main, entre le dos et la naissance de la queue.' },
      { terme: 'Licol', definition: 'Harnachement sans mors utilisé pour tenir, mener ou attacher un cheval.' },
      { terme: 'Étrille', definition: 'Outil de pansage qui décolle boue, poussière et poils morts sur les zones charnues.' },
      { terme: 'Foulée', definition: 'Cycle complet des mouvements des membres dans une allure.' },
      { terme: 'Aides', definition: 'Moyens employés par le cavalier pour communiquer, notamment assiette, jambes, mains et voix.' }
    ]
  },
  {
    n: 2,
    titre: 'Préparer son cheval et conduire aux trois allures',
    intro: 'Au Galop 2, le cavalier devient plus autonome dans la préparation et comprend mieux les besoins quotidiens du cheval. Il relie alimentation, comportement, soin des pieds et réglage du matériel à une pratique plus précise sur les figures de manège et les transitions.',
    illustrations: {
      principal: {
        src: '/assets/diagramme-g2-principal.webp',
        alt: 'Membre antérieur et membre postérieur avec dix repères numérotés',
        legende: 'Repères du Galop 2 : genou, jarret, canon, boulet, paturon, couronne et sabot.',
        reperes: [
          { n: 1, label: 'Avant-bras' },
          { n: 2, label: 'Genou' },
          { n: 3, label: 'Canon antérieur' },
          { n: 4, label: 'Boulet antérieur' },
          { n: 5, label: 'Paturon antérieur' },
          { n: 6, label: 'Jambe' },
          { n: 7, label: 'Jarret' },
          { n: 8, label: 'Canon postérieur' },
          { n: 9, label: 'Boulet postérieur' },
          { n: 10, label: 'Paturon postérieur' }
        ]
      },
      pratique: {
        src: '/assets/diagramme-g2-pratique.webp',
        alt: 'Poney et cavalière abordant un petit obstacle avec trajectoire et flèches de rythme',
        legende: 'Un petit obstacle se prépare avec une trajectoire droite, une allure régulière et un équilibre stable.',
        reperes: [
          { n: 1, label: 'Abord droit et régulier' },
          { n: 2, label: 'Battue et franchissement' },
          { n: 3, label: 'Réception et reprise de la trajectoire' }
        ]
      }
    },
    sections: [
      {
        titre: 'Comprendre les sens et la vie en groupe',
        texte: 'Le cheval utilise particulièrement son ouïe, son odorat et sa vision pour surveiller son environnement. Animal social, il recherche ses congénères et communique par les postures, les déplacements et les contacts. Une réaction peut traduire peur, inconfort, excitation ou défense de ressources : le contexte compte.',
        points: [
          'Les oreilles mobiles renseignent sur la direction de l’attention.',
          'Une distance choisie entre deux chevaux peut exprimer affinité ou évitement.',
          'Laisser une marge de sécurité entre chevaux limite les conflits.'
        ]
      },
      {
        titre: 'Alimenter et abreuver',
        texte: 'Le système digestif du cheval est adapté à des prises alimentaires réparties. Le fourrage constitue la base de la ration ; l’eau propre doit rester disponible selon le mode de vie et les consignes de l’écurie. Les concentrés éventuels complètent une ration calculée, ils ne remplacent pas le foin ou l’herbe.',
        points: [
          'Distribuer uniquement ce qui a été prévu par le responsable.',
          'Contrôler propreté de l’eau, appétit et présence habituelle de crottins.',
          'Éviter tout changement brutal d’alimentation.'
        ]
      },
      {
        titre: 'Repérer tête, membres et sabot',
        texte: 'La tête comprend notamment nuque, front, chanfrein, naseaux et ganaches. Sur un membre, on repère genou ou jarret, canon, boulet et paturon. Sous le sabot, la sole entoure la fourchette ; la paroi forme l’enveloppe extérieure visible lorsque le pied est posé.',
        points: [
          'Le genou appartient au membre antérieur, le jarret au postérieur.',
          'La fourchette est la structure souple en forme de V sous le pied.',
          'Une chaleur, une douleur ou une odeur inhabituelle doit être signalée.'
        ]
      },
      {
        titre: 'Faire un pansage complet et seller',
        texte: 'Le curage commence après avoir demandé calmement le pied et s’être placé près du membre, tourné vers l’arrière. On nettoie sans blesser la fourchette et on vérifie le fer ou la paroi. Pour seller, le tapis propre est posé dans le bon sens, la selle est placée sans comprimer le garrot et la sangle est serrée progressivement.',
        points: [
          'Se positionner près du cheval limite l’impact d’un mouvement du membre.',
          'Vérifier les deux faces du tapis et l’absence de plis.',
          'Ressangler en plusieurs étapes, avant puis après quelques pas.'
        ]
      },
      {
        titre: 'Tracer des figures et enchaîner les transitions',
        texte: 'Cercle, volte, diagonale et doubler organisent l’espace du manège. Le regard prépare le tracé, les jambes entretiennent l’activité et les mains canalisent sans tirer. Une transition réussie conserve direction, équilibre et réponse aux aides, même lorsque l’allure change.',
        points: [
          'Une diagonale permet de changer de main à travers la carrière.',
          'Une volte est un petit cercle qui ramène sur la même piste et à la même main.',
          'Préparer chaque transition avant la lettre ou le point choisi.'
        ]
      }
    ],
    checklist: [
      'Je reconnais un signe d’attention, de peur ou d’évitement en observant l’ensemble du cheval.',
      'Je sais expliquer pourquoi le fourrage est la base de la ration.',
      'Je nomme le canon, le boulet, le paturon, la sole et la fourchette.',
      'Je cure les quatre pieds dans une position sûre, sous surveillance.',
      'Je contrôle le sens et la propreté du tapis avant de seller.',
      'Je sais dessiner cercle, volte, diagonale et doubler.'
    ],
    erreurs: [
      { erreur: 'Donner une friandise ou un aliment sans autorisation.', correction: 'Respecter la ration prévue : certains chevaux suivent un régime ou ont des troubles métaboliques.' },
      { erreur: 'S’accroupir loin du cheval pour curer un pied.', correction: 'Rester près du membre, dos placé hors de la trajectoire du pied et suivre la méthode apprise.' },
      { erreur: 'Poser la selle sur des poils sales ou rebroussés.', correction: 'Nettoyer et lisser soigneusement les zones sous le tapis et la sangle.' },
      { erreur: 'Tourner seulement avec la rêne intérieure.', correction: 'Associer regard, orientation du corps, jambes et deux rênes pour garder équilibre et tracé.' }
    ],
    lexique: [
      { terme: 'Fourrage', definition: 'Aliment végétal riche en fibres, comme l’herbe ou le foin, qui forme la base de la ration.' },
      { terme: 'Ration', definition: 'Ensemble des aliments distribués à un cheval sur une journée.' },
      { terme: 'Chanfrein', definition: 'Partie de la face comprise entre le front et les naseaux.' },
      { terme: 'Fourchette', definition: 'Structure souple en V située sous le sabot.' },
      { terme: 'Volte', definition: 'Petit cercle effectué depuis la piste et terminé au point de départ.' },
      { terme: 'Transition', definition: 'Passage d’une allure à une autre, ou variation organisée au sein d’une allure.' }
    ]
  },
  {
    n: 3,
    titre: 'Affiner ses soins, ses tracés et son équilibre',
    intro: 'Le Galop 3 demande de relier des connaissances plus détaillées à des actions précises. Le cavalier sait mieux lire les relations entre chevaux, entretenir le matériel, reconnaître les mécanismes du pas et du trot, puis contrôler trajectoire et cadence sur le plat comme à l’obstacle.',
    illustrations: {
      principal: {
        src: '/assets/diagramme-g3-principal.webp',
        alt: 'Cheval vu de profil avec huit repères numérotés sur les membres',
        legende: 'Comparer les repères des antérieurs et des postérieurs : épaule, genou, hanche, grasset, jarret et boulet.',
        reperes: [
          { n: 1, label: 'Épaule' },
          { n: 2, label: 'Avant-bras' },
          { n: 3, label: 'Genou' },
          { n: 4, label: 'Paturon antérieur' },
          { n: 5, label: 'Hanche' },
          { n: 6, label: 'Grasset' },
          { n: 7, label: 'Jarret' },
          { n: 8, label: 'Paturon postérieur' }
        ]
      },
      pratique: {
        src: '/assets/diagramme-g3-pratique.webp',
        alt: 'Cinq membres de chevaux présentant des marques blanches de hauteurs différentes',
        legende: 'Les balzanes se décrivent par leur hauteur et leur contour, du principe de couronne à la balzane haut chaussée.',
        reperes: [
          { n: 1, label: 'Principe de balzane' },
          { n: 2, label: 'Balzane à mi-paturon' },
          { n: 3, label: 'Balzane au-dessus du boulet' },
          { n: 4, label: 'Balzane à mi-canon' },
          { n: 5, label: 'Balzane haut chaussée, en haut du canon' }
        ]
      }
    },
    sections: [
      {
        titre: 'Lire les relations entre chevaux',
        texte: 'Un groupe stable s’organise grâce à des interactions répétées. Les chevaux peuvent entretenir des affinités, s’éviter ou défendre ponctuellement une ressource. La hiérarchie ne se résume pas à un individu qui commande tout : elle dépend des partenaires, de la situation et de l’accès à l’espace.',
        points: [
          'Observer qui s’approche, qui s’éloigne et dans quel contexte.',
          'Ne pas se placer entre deux chevaux en tension.',
          'Préserver des distances suffisantes aux portes et autour de la nourriture.'
        ]
      },
      {
        titre: 'Détailler le pied et le fer',
        texte: 'Le sabot comprend paroi, sole, fourchette, glomes, barres et lacunes visibles. Un fer correctement posé suit le bord porteur et laisse les structures sensibles intactes. Au curage, on recherche caillou, chaleur, odeur, fissure ou fer déplacé sans transformer le soin courant en diagnostic.',
        points: [
          'Nettoyer les lacunes de chaque côté de la fourchette avec contrôle.',
          'Vérifier que les rivets et le fer ne présentent pas de déplacement évident.',
          'Signaler toute douleur ou anomalie au responsable.'
        ]
      },
      {
        titre: 'Comprendre le pas, le trot et le diagonal',
        texte: 'Le pas enchaîne quatre battues et conserve toujours au moins un pied au sol. Le trot alterne deux bipèdes diagonaux séparés par une suspension. Au trot enlevé, le cavalier se lève lorsque l’antérieur extérieur avance et se rassoit lorsque cet antérieur revient au sol.',
        points: [
          'Identifier la main grâce au côté intérieur de la courbe ou de la piste.',
          'Contrôler le diagonal d’un coup d’œil vers l’épaule extérieure.',
          'Changer de diagonal en restant assis un temps supplémentaire.'
        ]
      },
      {
        titre: 'Reconnaître robes, marques et épis',
        texte: 'Une robe décrit la couleur des poils et des crins ; les marques blanches et les épis complètent le signalement. Une liste se situe sur le chanfrein, une balzane sur un membre. L’emplacement et la forme sont plus utiles à l’identification qu’un vocabulaire approximatif sur la taille.',
        points: [
          'Décrire du général vers le détail : robe, marques de tête, marques des membres.',
          'Distinguer une marque blanche permanente d’une salissure ou d’une zone tondue.',
          'Repérer les épis sans les confondre avec le sens aléatoire du poil.'
        ]
      },
      {
        titre: 'Entretenir le cheval et son filet',
        texte: 'Après le travail, doucher uniquement selon la météo et les consignes, enlever l’excès d’eau et surveiller le refroidissement. Les pieds propres peuvent recevoir un produit adapté si cela est demandé. Le filet se démonte méthodiquement : on mémorise le passage des montants, on nettoie les pièces et on contrôle coutures et boucles avant remontage.',
        points: [
          'Ne pas graisser un sabot encore sale ou humide sans consigne.',
          'Rincer et sécher le mors après usage.',
          'Remonter sans torsion et vérifier chaque boucle avant de brider.'
        ]
      },
      {
        titre: 'Conserver cadence et tracé à l’obstacle',
        texte: 'Sur un petit parcours, la priorité est une allure régulière, un tracé préparé et un cavalier équilibré. Accélérer dans les dernières foulées dégrade souvent l’abord. Après le saut, on retrouve sa direction avant de penser à l’obstacle suivant.',
        points: [
          'Regarder tôt le centre de l’obstacle puis la trajectoire suivante.',
          'Garder une cadence stable avant, pendant et après le saut.',
          'Accompagner avec le buste et les mains sans se jeter en avant.'
        ]
      }
    ],
    checklist: [
      'Je décris une interaction entre chevaux sans l’interpréter trop vite.',
      'Je sais montrer paroi, sole, fourchette, glomes et lacunes.',
      'Je peux reconstituer les battues du pas et les diagonaux du trot.',
      'Je décris une marque blanche par son emplacement et sa forme.',
      'Je démonte et remonte un filet selon une méthode constante.',
      'Je prépare mon tracé avant chaque obstacle.'
    ],
    erreurs: [
      { erreur: 'Appeler automatiquement « dominant » le cheval qui menace une fois.', correction: 'Observer plusieurs interactions et tenir compte de la ressource, de l’espace et du partenaire.' },
      { erreur: 'Creuser fortement la fourchette au cure-pied.', correction: 'Retirer la saleté avec un geste contrôlé et demander conseil en cas de tissu sensible ou d’odeur.' },
      { erreur: 'Changer de diagonal en se levant deux temps de suite.', correction: 'Rester assis un temps supplémentaire puis reprendre le trot enlevé.' },
      { erreur: 'Accélérer pour être certain que le cheval saute.', correction: 'Préserver impulsion, équilibre et cadence ; corriger le tracé en amont plutôt que précipiter l’abord.' }
    ],
    lexique: [
      { terme: 'Glomes', definition: 'Parties souples situées à l’arrière du sabot, de chaque côté de la fourchette.' },
      { terme: 'Lacunes', definition: 'Sillons bordant la fourchette sous le pied.' },
      { terme: 'Bipède diagonal', definition: 'Association d’un antérieur et du postérieur opposé.' },
      { terme: 'Balzane', definition: 'Marque blanche située sur la partie basse d’un membre.' },
      { terme: 'Épi', definition: 'Zone où les poils changent de direction autour d’un point.' },
      { terme: 'Cadence', definition: 'Régularité du rythme des foulées dans une allure.' }
    ]
  },
  {
    n: 4,
    titre: 'Contrôler, analyser et devenir autonome',
    intro: 'Le Galop 4 valide un premier niveau solide d’autonomie. Le cavalier apprend à repérer un cheval qui ne va pas bien, à raisonner alimentation et protections, à comprendre le galop sur chaque pied et à obtenir un cheval actif, incurvé et disponible sans confondre contact et traction.',
    illustrations: {
      principal: {
        src: '/assets/diagramme-g4-principal-v2.webp',
        alt: 'Quatre phases successives d’un cheval au galop avec appuis colorés',
        legende: 'Le galop se lit comme une succession d’appuis dissymétriques suivie d’un temps de suspension.',
        reperes: [
          { n: 1, label: 'Premier temps : postérieur extérieur' },
          { n: 2, label: 'Deuxième temps : bipède diagonal' },
          { n: 3, label: 'Troisième temps : antérieur directeur' },
          { n: 4, label: 'Temps de suspension' }
        ]
      },
      pratique: {
        src: '/assets/diagramme-g4-pratique.webp',
        alt: 'Comparaison d’une guêtre correctement centrée et d’une guêtre tournée sur le tendon',
        legende: 'Une protection propre, centrée et régulièrement serrée protège sans créer de point de pression.',
        reperes: [
          { n: 1, label: 'Guêtre correcte : centrée et régulièrement serrée' },
          { n: 2, label: 'Guêtre tournée : point de pression et frottement possibles' }
        ]
      }
    },
    sections: [
      {
        titre: 'Identifier un cheval',
        texte: 'L’identification associe un document, un numéro de transpondeur et un signalement descriptif ou graphique. Robe, sexe, marques blanches, épis et particularités permettent de vérifier que le document correspond au cheval présenté. Le cavalier alerte en cas d’incohérence plutôt que de la corriger lui-même.',
        points: [
          'Comparer les signes permanents dans un ordre constant.',
          'Le numéro de puce se lit avec un lecteur adapté.',
          'Un document d’identification doit rester associé au bon équidé.'
        ]
      },
      {
        titre: 'Surveiller les constantes et les signes de maladie',
        texte: 'Avant de mesurer, on observe comportement, appétit, posture, locomotion, respiration et crottins. Chez un adulte au repos, température, fréquence cardiaque et fréquence respiratoire se situent dans des plages habituelles qui varient selon l’individu et le contexte. Une mesure anormale se recontrôle calmement et se transmet au responsable.',
        points: [
          'Comparer après un véritable retour au calme, pas immédiatement après l’effort.',
          'Noter la valeur, l’heure, les conditions et les autres signes observés.',
          'Ne jamais administrer un traitement sans décision compétente.'
        ]
      },
      {
        titre: 'Raisonner alimentation et végétaux toxiques',
        texte: 'Les besoins dépendent notamment du poids, du travail, du climat et de l’état du cheval. Le fourrage reste le socle ; les apports concentrés et minéraux se raisonnent. Certaines plantes, comme l’if ou le laurier-rose, sont dangereuses : on empêche l’accès et on signale immédiatement toute ingestion suspectée.',
        points: [
          'Contrôler la qualité du foin et l’absence de moisissure ou de corps étranger.',
          'Fractionner les repas concentrés selon l’organisation de l’écurie.',
          'Ne pas laisser le cheval goûter une plante inconnue en promenade.'
        ]
      },
      {
        titre: 'Comprendre le galop à droite et à gauche',
        texte: 'Le galop est dissymétrique : au galop à droite, le latéral droit termine la séquence avant la suspension ; au galop à gauche, c’est le gauche. Sur une courbe, le bon pied facilite généralement l’équilibre. Le départ se prépare par l’activité, l’équilibre, le pli et une demande coordonnée.',
        points: [
          'Identifier le pied en observant l’antérieur qui avance le plus dans la foulée.',
          'Corriger un mauvais pied en repassant dans une allure organisée.',
          'Éviter de multiplier les demandes fortes qui précipitent le cheval.'
        ]
      },
      {
        titre: 'Choisir et poser les protections',
        texte: 'Guêtres, protège-boulets, cloches ou protections de transport répondent à des risques différents. Une protection propre se place dans le bon sens, sans pli ni compression excessive. Après le travail, on la retire pour contrôler chaleur, frottement, gonflement ou saleté.',
        points: [
          'Choisir la taille et le modèle pour l’usage prévu.',
          'Nettoyer le membre et la protection avant la pose.',
          'Vérifier la fermeture et le confort après quelques minutes.'
        ]
      },
      {
        titre: 'Obtenir contact, pli et incurvation',
        texte: 'Le contact est une relation élastique transmise par les rênes, pas un appui fixe. Le pli est une légère orientation de la tête et de l’encolure ; l’incurvation concerne l’ensemble du corps autour de la courbe. La jambe intérieure entretient activité et incurvation, les aides extérieures contrôlent épaule, allure et tracé.',
        points: [
          'Créer l’activité avant de chercher une forme d’encolure.',
          'Conserver les épaules et les hanches sur la trajectoire choisie.',
          'Céder dans les doigts quand le cheval répond, sans abandonner le contact.'
        ]
      }
    ],
    checklist: [
      'Je vérifie un signalement par des caractéristiques permanentes.',
      'Je commence un contrôle de santé par une observation globale.',
      'Je sais à qui transmettre une mesure ou un signe inhabituel.',
      'Je peux expliquer la différence entre fourrage et concentré.',
      'Je reconnais le pied du galop sur une décomposition simple.',
      'Je distingue pli, incurvation et traction sur la rêne intérieure.'
    ],
    erreurs: [
      { erreur: 'Considérer une constante isolée comme un diagnostic.', correction: 'Replacer la mesure dans le contexte et transmettre l’ensemble des observations à la personne responsable.' },
      { erreur: 'Faire travailler un cheval qui présente douleur ou boiterie.', correction: 'Arrêter, sécuriser et signaler ; la poursuite du travail relève d’une décision compétente.' },
      { erreur: 'Serrer fortement une protection pour éviter qu’elle tourne.', correction: 'Vérifier taille, sens, propreté et fermeture régulière ; une compression excessive crée son propre risque.' },
      { erreur: 'Chercher l’incurvation en tirant la rêne intérieure.', correction: 'Coordonner activité, jambe intérieure et aides extérieures avec un contact élastique.' }
    ],
    lexique: [
      { terme: 'Signalement', definition: 'Description des caractéristiques permanentes qui permettent d’identifier un équidé.' },
      { terme: 'Constante', definition: 'Paramètre physiologique mesurable, comme la température, le pouls ou la respiration.' },
      { terme: 'Muqueuses', definition: 'Tissus visibles notamment dans la bouche et les paupières, dont l’aspect contribue à l’observation clinique.' },
      { terme: 'Concentré', definition: 'Aliment plus dense en énergie ou nutriments, distribué en complément d’une ration raisonnée.' },
      { terme: 'Pli', definition: 'Légère orientation de la tête et de l’encolure par rapport à l’axe du corps.' },
      { terme: 'Incurvation', definition: 'Organisation du corps du cheval qui épouse une courbe de façon cohérente.' }
    ]
  },
  {
    n: 5,
    titre: 'Construire la cadence et comprendre l’apprentissage',
    intro: 'Le Galop 5 fait passer du geste exécuté au geste raisonné. Le cavalier comprend comment le cheval apprend, relie squelette, muscles et digestion à l’entraînement, manipule avec méthode à pied et recherche une cadence stable sur le plat, à l’obstacle et en terrain varié.',
    illustrations: {
      principal: {
        src: '/assets/diagramme-g5-principal.webp',
        alt: 'Cheval de profil avec représentation du système digestif et cinq repères numérotés',
        legende: 'Le petit estomac précède l’intestin grêle ; les fibres sont surtout fermentées dans le cæcum et le gros côlon.',
        reperes: [
          { n: 1, label: 'Œsophage' },
          { n: 2, label: 'Estomac' },
          { n: 3, label: 'Intestin grêle' },
          { n: 4, label: 'Cæcum' },
          { n: 5, label: 'Gros côlon' }
        ]
      },
      pratique: {
        src: '/assets/diagramme-g5-pratique-v2.webp',
        alt: 'Trois vues du dessus comparant des trajectoires de cession à la jambe',
        legende: 'Une cession correcte associe mouvement en avant, déplacement latéral, faible flexion opposée et épaules contrôlées.',
        reperes: [
          { n: 1, label: 'Préparation : cheval droit et actif' },
          { n: 2, label: 'Début : mouvement vers l’avant et de côté' },
          { n: 3, label: 'Cession installée : faible flexion opposée et épaules contrôlées' }
        ]
      }
    },
    sections: [
      {
        titre: 'Apprentissage, habituation et récompense',
        texte: 'Un comportement a davantage de chances de se reproduire lorsque sa conséquence est claire et immédiate. Le renforcement positif ajoute quelque chose d’agréable ; le renforcement négatif retire une pression dès la bonne réponse. « Négatif » signifie retrait, pas punition. L’habituation diminue progressivement une réaction à un stimulus non dangereux.',
        points: [
          'Relâcher la pression au moment précis de la réponse recherchée.',
          'Découper une difficulté en étapes que le cheval peut comprendre.',
          'Éviter la saturation : alterner demandes brèves, pauses et récompenses.'
        ]
      },
      {
        titre: 'Relier squelette, muscles et mouvement',
        texte: 'Le squelette soutient le corps et forme des leviers autour des articulations. Les muscles produisent le mouvement en se contractant ; ils travaillent en chaînes plutôt qu’isolément. Une posture, une douleur ou une fatigue modifie donc plusieurs régions et peut altérer amplitude, symétrie ou engagement.',
        points: [
          'Distinguer os, articulation, tendon, ligament et muscle.',
          'Observer la symétrie du déplacement plutôt que seulement la vitesse.',
          'Préparer l’effort progressivement et prévoir un retour au calme.'
        ]
      },
      {
        titre: 'Suivre le trajet digestif et prévenir les erreurs',
        texte: 'Les aliments passent par la bouche, l’œsophage, l’estomac, l’intestin grêle puis le gros intestin, où la fermentation des fibres joue un rôle majeur. Le petit volume de l’estomac et le besoin de fibres expliquent l’intérêt de prises réparties. Un changement brutal, un manque d’eau ou une ration mal adaptée augmente les risques digestifs.',
        points: [
          'Favoriser un accès au fourrage compatible avec les besoins du cheval.',
          'Surveiller appétit, eau bue, crottins et signes d’inconfort.',
          'Après une suspicion de colique, prévenir immédiatement et suivre les consignes.'
        ]
      },
      {
        titre: 'Identifier le cheval et préparer une sortie',
        texte: 'Le SIRE centralise l’identification des équidés en France ; le transpondeur, le document et le signalement doivent correspondre. Une participation en compétition suppose aussi de vérifier les conditions administratives, sanitaires et sportives applicables au cheval comme au cavalier.',
        points: [
          'Contrôler identité et documents bien avant le départ.',
          'Vérifier l’équipement et les exigences avec l’enseignant ou le responsable.',
          'Préparer eau, fourrage et pauses en tenant compte de la durée.'
        ]
      },
      {
        titre: 'Présenter, longer et embarquer',
        texte: 'Présenter en main demande une trajectoire nette et un cheval attentif sans être collé au conducteur. À la longe, le longeur forme un triangle entre sa main, le cheval et la chambrière, tout en restant mobile. Pour embarquer, on prépare un véhicule sûr et lumineux, puis on avance par étapes sans tirer en continu.',
        points: [
          'Porter gants et équipement adaptés au travail à pied.',
          'Garder la longe organisée et ne jamais la laisser s’enrouler autour du corps.',
          'Pour l’embarquement, supprimer les pressions inutiles dès chaque progrès.'
        ]
      },
      {
        titre: 'Cadence, incurvation et cession à la jambe',
        texte: 'La cadence décrit la régularité du rythme ; la vitesse décrit la distance parcourue dans un temps donné. Une cession à la jambe associe déplacement vers le côté et mouvement vers l’avant, avec une légère flexion opposée au déplacement. Elle se prépare d’abord au pas, sur peu de pas corrects.',
        points: [
          'Stabiliser le rythme avant de demander un exercice latéral.',
          'La jambe du côté opposé au déplacement demande le croisement.',
          'Les aides extérieures contrôlent les épaules et l’excès de déplacement.'
        ]
      }
    ],
    checklist: [
      'Je distingue renforcement négatif et punition.',
      'Je sais expliquer le rôle différent d’un tendon et d’un ligament.',
      'Je replace estomac, intestin grêle et gros intestin dans l’ordre.',
      'Je vérifie identité, équipement et besoins du cheval avant un déplacement.',
      'Je garde longe et chambrière organisées dans une zone sûre.',
      'Je différencie cadence, vitesse et impulsion.'
    ],
    erreurs: [
      { erreur: 'Maintenir la pression après la bonne réponse.', correction: 'Céder immédiatement : le retrait de la pression indique au cheval ce qui était attendu.' },
      { erreur: 'Utiliser « renforcement négatif » comme synonyme de punition.', correction: 'Le renforcement négatif retire un stimulus après la réponse ; la punition vise à diminuer un comportement.' },
      { erreur: 'Se placer immobile au centre et tirer sur la longe.', correction: 'Adapter sa position, marcher si nécessaire et coordonner orientation du corps, voix, longe et chambrière.' },
      { erreur: 'Confondre cadence plus active et cheval précipité.', correction: 'Rechercher régularité, équilibre et réponse aux aides plutôt qu’une simple augmentation de vitesse.' }
    ],
    lexique: [
      { terme: 'Habituation', definition: 'Diminution progressive de la réaction à un stimulus répété qui ne présente pas de conséquence dangereuse.' },
      { terme: 'Renforcement', definition: 'Conséquence qui augmente la probabilité de réapparition d’un comportement.' },
      { terme: 'Ligament', definition: 'Tissu fibreux reliant notamment des os et contribuant à la stabilité d’une articulation.' },
      { terme: 'Tendon', definition: 'Tissu fibreux qui transmet à l’os la force produite par un muscle.' },
      { terme: 'SIRE', definition: 'Système d’information relatif aux équidés, géré en France par l’IFCE.' },
      { terme: 'Cession à la jambe', definition: 'Déplacement latéral où le cheval avance et se déplace de côté avec une légère flexion opposée.' }
    ]
  },
  {
    n: 6,
    titre: 'Préserver la santé et organiser un travail autonome',
    intro: 'Le Galop 6 consolide une autonomie responsable. Le cavalier approfondit le fonctionnement du pied, reconnaît des signaux qui imposent d’alerter, évalue l’état corporel et bâtit une détente cohérente. À pied comme en selle, la précision ne doit jamais se faire au détriment du bien-être.',
    illustrations: {
      principal: {
        src: '/assets/diagramme-g6-principal-v2.webp',
        alt: 'Coupe pédagogique du pied du cheval montrant paroi, sole, fourchette, phalanges et structures internes',
        legende: 'Le pied associe enveloppe cornée, structures sensibles, os et tissus amortisseurs.',
        reperes: [
          { n: 1, label: 'Paroi' },
          { n: 2, label: 'Lamelles ou feuillets' },
          { n: 3, label: 'Sole' },
          { n: 4, label: 'Fourchette' },
          { n: 5, label: 'Os naviculaire' },
          { n: 6, label: 'Coussinet digital' },
          { n: 7, label: 'Tendon fléchisseur profond' }
        ]
      },
      pratique: {
        src: '/assets/diagramme-g6-pratique.webp',
        alt: 'Trois chevaux comparant un état corporel maigre, intermédiaire et excessif',
        legende: 'L’état corporel s’évalue par observation et palpation de plusieurs zones, jamais par le poids seul.',
        reperes: [
          { n: 1, label: 'État maigre : reliefs osseux très visibles' },
          { n: 2, label: 'État intermédiaire adapté' },
          { n: 3, label: 'État excessif : dépôts graisseux marqués' }
        ]
      }
    },
    sections: [
      {
        titre: 'Comprendre le pied et la ferrure',
        texte: 'À l’intérieur de la boîte cornée se trouvent notamment les phalanges distales, des articulations, tendons et tissus sensibles. La paroi porte une grande partie du poids ; sole, fourchette, coussinet digital et talons participent à la protection et à l’amortissement. Le parage entretient l’équilibre du pied ; la ferrure répond à un besoin défini.',
        points: [
          'Observer usure, pousse, symétrie, chaleur et sensibilité.',
          'Ne pas arracher un fer partiellement déplacé.',
          'Faire intervenir le professionnel compétent selon l’anomalie constatée.'
        ]
      },
      {
        titre: 'Reconnaître les signaux d’alerte',
        texte: 'Colique, boiterie, coup de chaleur, atteinte respiratoire ou plaie peuvent commencer par des signes discrets. Le rôle du cavalier est de repérer, sécuriser, relever des informations fiables et alerter ; ce n’est pas de poser seul un diagnostic. L’évolution rapide de certains troubles justifie une transmission immédiate.',
        points: [
          'Noter comportement, appétit, posture, locomotion et paramètres disponibles.',
          'Éloigner le cheval d’un danger et limiter les manipulations non nécessaires.',
          'Décrire les faits observés, leur heure de début et leur évolution.'
        ]
      },
      {
        titre: 'Évaluer l’état corporel et adapter les besoins',
        texte: 'La note d’état corporel se fonde sur l’observation et la palpation de zones standardisées, par exemple l’encolure, les côtes, le dos et l’attache de queue. Le poil peut masquer une perte ou un excès d’état. Les besoins évoluent avec poids, âge, travail, météo et état physiologique.',
        points: [
          'Comparer dans le temps avec la même méthode et plusieurs zones.',
          'Ne pas confondre ventre volumineux et réserves graisseuses.',
          'Modifier une ration progressivement et avec la personne responsable.'
        ]
      },
      {
        titre: 'Reproduction, identification et reculer',
        texte: 'La reproduction comprend cycle de la jument, saillie ou insémination, gestation, poulinage et suivi du poulain. Les démarches d’identification garantissent la traçabilité. Sur le plan locomoteur, le reculer est une allure symétrique sans suspension où les membres se déplacent par bipèdes diagonaux.',
        points: [
          'Respecter une grande distance de sécurité autour d’une jument suitée.',
          'Relier déclaration, identification et document au bon animal.',
          'Dans le reculer, rechercher des pas calmes, droits et diagonalisés.'
        ]
      },
      {
        titre: 'Longer avec un objectif précis',
        texte: 'Une séance de longe prépare un objectif : observer, échauffer, améliorer les transitions ou franchir un dispositif adapté. Le cercle peut se déplacer sans que le cheval tombe sur l’épaule. Le saut à la longe exige un espace sécurisé, un dispositif simple et une longueur de longe qui laisse au cheval son équilibre.',
        points: [
          'Changer de main et doser la durée sur chaque cercle.',
          'Installer le dispositif avant d’amener le cheval dans la zone de travail.',
          'Renoncer si le cheval perd calme, équilibre ou compréhension.'
        ]
      },
      {
        titre: 'Construire détente, transitions et extension',
        texte: 'Une détente autonome commence par l’observation de la locomotion, augmente progressivement l’activité, mobilise sur des courbes et des transitions, puis prépare les exigences de la séance. Une extension d’encolure correcte conserve équilibre et activité pendant que le cheval étire sa ligne du dessus ; elle ne consiste pas à tomber sur les épaules.',
        points: [
          'Formuler un objectif et adapter la détente aux réponses du jour.',
          'Alterner effort, récupération et changements de direction.',
          'Obtenir une transition nette avec des aides brèves puis redevenir discret.'
        ]
      }
    ],
    checklist: [
      'Je relie les structures externes du sabot à leur rôle général.',
      'Je distingue observation, alerte et diagnostic.',
      'Je peux relever et transmettre des signes dans un ordre clair.',
      'J’évalue l’état corporel sur plusieurs zones, par observation et palpation.',
      'Je donne un objectif mesurable à une séance de longe.',
      'Je construis une détente progressive et adaptable.'
    ],
    erreurs: [
      { erreur: 'Attendre que la boiterie soit forte avant de la signaler.', correction: 'Une asymétrie ou une gêne nouvelle suffit pour arrêter, comparer et prévenir le responsable.' },
      { erreur: 'Attribuer un gros ventre à un cheval « trop gras ».', correction: 'Utiliser les repères de l’état corporel et la palpation des zones prévues.' },
      { erreur: 'Multiplier les tours de longe sur un petit cercle.', correction: 'Doser la durée, varier diamètre et trajectoire, changer de main et prévoir des pauses.' },
      { erreur: 'Forcer l’encolure basse avec les rênes.', correction: 'Conserver activité, équilibre et contact extensible afin que le cheval étire volontairement sa ligne du dessus.' }
    ],
    lexique: [
      { terme: 'Boîte cornée', definition: 'Enveloppe externe du pied formée notamment par la paroi, la sole et la fourchette.' },
      { terme: 'Parage', definition: 'Entretien de la pousse et de l’équilibre du sabot par un professionnel compétent.' },
      { terme: 'État corporel', definition: 'Appréciation standardisée des réserves graisseuses par observation et palpation.' },
      { terme: 'Traçabilité', definition: 'Capacité à relier de façon fiable un équidé, son identité et ses documents.' },
      { terme: 'Reculer', definition: 'Allure symétrique vers l’arrière, réalisée par bipèdes diagonaux sans suspension.' },
      { terme: 'Extension d’encolure', definition: 'Étirement vers l’avant et le bas conservant activité, équilibre et continuité du contact.' }
    ]
  },
  {
    n: 7,
    titre: 'Raisonner le travail et le bien-être en autonomie',
    intro: 'Le Galop 7 demande une autonomie technique capable de s’autoévaluer. Le cavalier analyse aplombs, ration, transport et ajustement du matériel, puis organise le travail à pied et monté avec rectitude, équilibre et progression. Une performance n’est valable que si les moyens employés respectent le cheval.',
    illustrations: {
      principal: {
        src: '/assets/diagramme-g7-principal.webp',
        alt: 'Trois chevaux vus de face comparant des antérieurs droits, panards et cagneux',
        legende: 'Les aplombs se décrivent par rapport à un axe : droits, pinces vers l’extérieur ou pinces vers l’intérieur.',
        reperes: [
          { n: 1, label: 'Aplombs droits' },
          { n: 2, label: 'Aplombs panards : pinces vers l’extérieur' },
          { n: 3, label: 'Aplombs cagneux : pinces vers l’intérieur' }
        ]
      },
      pratique: {
        src: '/assets/diagramme-g7-pratique-v2.webp',
        alt: 'Tête de cheval portant une bride complète avec huit repères numérotés',
        legende: 'La bride associe deux mors, une gourmette et deux paires de rênes : son ajustement exige précision et mesure.',
        reperes: [
          { n: 1, label: 'Têtière' },
          { n: 2, label: 'Frontal' },
          { n: 3, label: 'Muserolle' },
          { n: 4, label: 'Sous-gorge' },
          { n: 5, label: 'Montants' },
          { n: 6, label: 'Mors de filet' },
          { n: 7, label: 'Mors de bride et gourmette' },
          { n: 8, label: 'Deux paires de rênes' }
        ]
      }
    },
    sections: [
      {
        titre: 'Observer aplombs et locomotion',
        texte: 'Les aplombs décrivent l’orientation des membres par rapport à des axes de référence, cheval immobile sur un sol régulier. L’examen se fait de face, de profil et de derrière, puis se complète en mouvement. Une particularité d’aplomb peut influencer les contraintes, mais ne suffit pas à prédire seule blessure ou performance.',
        points: [
          'Placer le cheval d’aplomb sans manipuler artificiellement chaque pied.',
          'Décrire factuellement avant de chercher une conséquence.',
          'Comparer symétrie, trajectoire des membres et usure des pieds.'
        ]
      },
      {
        titre: 'Vérifier signalement et transport',
        texte: 'Avant un déplacement, l’identité du cheval, ses documents et les exigences sanitaires ou sportives sont contrôlés. Le transport modifie appuis, équilibre, hydratation et comportement. Ventilation, température, durée, pauses, conduite, séparation des chevaux et accès à l’eau ou au fourrage se planifient.',
        points: [
          'Faire correspondre puce, signalement et document.',
          'Inspecter véhicule, sol, bas-flancs, fermetures et ventilation.',
          'Surveiller après arrivée : comportement, hydratation, température et locomotion.'
        ]
      },
      {
        titre: 'Raisonner la ration',
        texte: 'Une ration part des besoins, du poids du cheval et de la matière sèche réellement ingérée. Le fourrage en constitue la base ; énergie, protéines, minéraux, vitamines et eau sont ensuite équilibrés. Un complément n’est pertinent que s’il répond à un besoin identifié et s’intègre au reste de la ration.',
        points: [
          'Estimer le poids avec une méthode cohérente et suivre son évolution.',
          'Raisonner les quantités en matière sèche plutôt qu’au seul volume du seau.',
          'Éviter d’empiler des compléments qui peuvent créer excès ou déséquilibre.'
        ]
      },
      {
        titre: 'Ajuster bride et bandes de polo',
        texte: 'La bride ajoute un second mors et deux paires de rênes ; son emploi exige une main indépendante et un ajustement validé. Les bandes de polo se posent sur un membre propre, avec une tension régulière et un recouvrement constant. Leur mauvais usage peut comprimer ou créer un point dur.',
        points: [
          'Identifier filet de bride, mors de bride, gourmette et montants.',
          'Contrôler symétrie, plis, points de pression et liberté de la bouche.',
          'Poser des bandes uniquement après apprentissage pratique encadré.'
        ]
      },
      {
        titre: 'Longer avec enrênement et utiliser les longues rênes',
        texte: 'Un enrênement vise un objectif précis, se règle progressivement et ne remplace ni l’activité ni la justesse des aides. Aux longues rênes, le conducteur gère propulsion, direction et contact depuis une position sûre. Le passage derrière le cheval et les changements de direction exigent une méthode parfaitement maîtrisée.',
        points: [
          'Travailler d’abord sans dispositif pour évaluer la réponse naturelle.',
          'Vérifier absence de torsion, longueur et points de fixation avant de partir.',
          'Préserver une issue de sécurité et ne jamais laisser une rêne entourer le corps.'
        ]
      },
      {
        titre: 'Rectitude, mise sur la main et équilibre',
        texte: 'La rectitude aligne les épaules et les hanches sur la trajectoire et répartit l’effort aussi symétriquement que possible. La mise sur la main résulte de l’impulsion, de l’équilibre et d’un contact accepté ; elle ne se fabrique pas en ramenant la tête. Les transitions galop–pas testent disponibilité et équilibre.',
        points: [
          'Corriger la trajectoire avant de corriger la position de l’encolure.',
          'Préparer la transition par des demi-arrêts et une activité maintenue.',
          'Comparer la facilité aux deux mains sans forcer le côté difficile.'
        ]
      },
      {
        titre: 'Épaule en dedans et contre-épaule en dedans',
        texte: 'Dans l’épaule en dedans, les épaules quittent la piste vers l’intérieur tandis que le cheval reste incurvé autour de la jambe intérieure. La contre-épaule en dedans conserve une organisation comparable mais par rapport au côté opposé de la piste. L’angle reste modéré afin de préserver mouvement en avant, cadence et croisement.',
        points: [
          'Préparer l’incurvation avant de déplacer l’avant-main.',
          'La jambe intérieure entretient activité et incurvation.',
          'La rêne et la jambe extérieures limitent l’angle et contrôlent l’épaule.'
        ]
      }
    ],
    checklist: [
      'Je décris un aplomb sans transformer une observation en diagnostic.',
      'Je planifie documents, véhicule, eau, fourrage et surveillance du transport.',
      'Je distingue poids brut, volume distribué et matière sèche.',
      'Je contrôle l’ajustement d’une bride et connais les risques des bandes.',
      'Je formule l’objectif et les critères d’arrêt d’un enrênement.',
      'Je relie rectitude, activité, équilibre et qualité du contact.',
      'Je peux expliquer les aides de l’épaule en dedans sans oublier le mouvement en avant.'
    ],
    erreurs: [
      { erreur: 'Déduire qu’un aplomb imparfait provoquera forcément une lésion.', correction: 'Croiser morphologie, locomotion, historique, activité et avis professionnel avant toute conclusion.' },
      { erreur: 'Ajouter un complément parce qu’il est présenté comme performant.', correction: 'Identifier le besoin, analyser la ration complète et demander un conseil qualifié.' },
      { erreur: 'Chercher la mise sur la main en fermant fortement les doigts.', correction: 'Construire activité, équilibre, rectitude et contact élastique ; la forme de l’encolure en découle.' },
      { erreur: 'Augmenter fortement l’angle dans l’épaule en dedans.', correction: 'Réduire l’angle pour retrouver cadence, incurvation et contrôle des épaules.' }
    ],
    lexique: [
      { terme: 'Aplomb', definition: 'Orientation d’un membre par rapport à des axes de référence, observée à l’arrêt puis en mouvement.' },
      { terme: 'Matière sèche', definition: 'Partie d’un aliment restant après retrait de l’eau, utile pour comparer les apports réels.' },
      { terme: 'Bride', definition: 'Harnachement comportant généralement deux mors et deux paires de rênes, réservé à un usage maîtrisé.' },
      { terme: 'Enrênement', definition: 'Dispositif auxiliaire réglé pour un objectif de travail précis et temporaire.' },
      { terme: 'Rectitude', definition: 'Alignement et fonctionnement coordonné des épaules et des hanches sur la trajectoire.' },
      { terme: 'Épaule en dedans', definition: 'Exercice latéral où les épaules se déplacent sur une piste intérieure avec incurvation et mouvement en avant.' }
    ]
  }
];
