/**
 * Extension éditoriale — Galops 1 à 3.
 *
 * Ces quiz originaux consolident les axes déjà structurés dans content.mjs.
 * Ils constituent un support de révision pédagogique et ne prétendent pas
 * reproduire exhaustivement un règlement ou un questionnaire fédéral.
 */
let questionIndex = 0;
const Q = (q, options, bonne, explication, image = null, imageAlt = null) => {
  // Fait varier la position de la bonne réponse sans modifier le contenu.
  const decalage = questionIndex++ % options.length;
  const choix = options.map((_, index) => options[(index - decalage + options.length) % options.length]);
  return {
    q,
    options: choix,
    bonne: (bonne + decalage) % options.length,
    explication,
    ...(image ? { image, imageAlt } : {})
  };
};

export const QUIZ_EXPANSION = {
  1: [
    {
      slug: 'observer-avant-approcher',
      titre: 'Observer avant d’approcher',
      questions: [
        Q(
          'Sur l’illustration, quel signe invite surtout à rester à distance et à demander conseil ?',
          ['Les oreilles plaquées et le corps tendu', 'Une encolure basse et souple', 'Un postérieur au repos', 'Un regard calme vers le cavalier'],
          0,
          'Des oreilles plaquées associées à une posture tendue peuvent annoncer de l’inconfort ou une menace. On garde une distance sûre et on sollicite un encadrant.',
          '/assets/diagramme-g1-attitudes.webp',
          'Illustration pédagogique de quatre attitudes de cheval, dont un cheval tendu aux oreilles plaquées'
        ),
        Q(
          'Un poney tourne la tête vers toi lorsque tu arrives. Quelle est la meilleure suite ?',
          ['Courir pour l’attraper avant qu’il parte', 'Rester visible, parler calmement puis avancer sans geste brusque', 'Passer derrière sa croupe', 'Agiter la longe au-dessus de sa tête'],
          1,
          'Rester dans son champ de vision et annoncer sa présence réduit l’effet de surprise. L’approche doit rester calme et lisible.'
        ),
        Q(
          'Pourquoi observe-t-on l’ensemble du corps plutôt que les oreilles seules ?',
          ['Parce que les oreilles ne bougent jamais', 'Parce qu’un signe isolé peut être ambigu', 'Parce que seule la queue indique l’humeur', 'Parce que le cheval cache toujours ses oreilles'],
          1,
          'Les oreilles, les yeux, les naseaux, la tension musculaire et les mouvements se lisent ensemble. Un indice isolé ne suffit pas à conclure.'
        ),
        Q(
          'Un cheval sursaute pendant que tu le brosses. Quel réflexe est le plus adapté ?',
          ['Crier pour l’immobiliser', 'Maintenir une pression forte avec la brosse', 'Rester calme, se replacer en sécurité et identifier ce qui l’a surpris', 'Se glisser immédiatement sous son encolure'],
          2,
          'La priorité est de préserver une position sûre, puis de comprendre la cause de la réaction sans ajouter de peur.'
        ),
        Q(
          'Dans quelle zone évite-t-on particulièrement de rester immobile ?',
          ['À côté de l’épaule, en restant visible', 'À distance devant le cheval', 'Directement derrière la croupe', 'Près de la porte du box ouverte'],
          2,
          'Le cheval voit mal juste derrière lui et peut donner un coup de pied s’il est surpris. Cette zone ne doit pas être une zone d’attente.'
        ),
        Q(
          'Quel comportement montre que le cavalier respecte le cheval au box ?',
          ['Entrer sans prévenir parce qu’il est attaché', 'Prévenir, attendre une réaction calme et garder une sortie accessible', 'Fermer la porte puis se placer derrière lui', 'Poser le matériel sous ses pieds'],
          1,
          'Une entrée annoncée, un cheval attentif et un passage dégagé protègent à la fois le cavalier et le cheval.'
        )
      ]
    },
    {
      slug: 'reconnaitre-noir-alezan-bai',
      titre: 'Reconnaître noir, alezan et bai',
      questions: [
        Q(
          'Sur la planche illustrée, quel cheval présente un corps brun avec des crins et des extrémités noirs ?',
          ['Le cheval noir', 'Le cheval alezan', 'Le cheval bai', 'Le cheval gris'],
          2,
          'Le bai associe un corps brun ou fauve à des crins noirs et, en général, des extrémités de membres noires.',
          '/assets/diagramme-g1-robes.webp',
          'Planche pédagogique montrant de profil un cheval noir, un alezan et un bai avec leurs différences de robe'
        ),
        Q(
          'Quel détail distingue le plus sûrement un bai d’un alezan ?',
          ['La présence d’une crinière', 'La couleur noire des crins et des extrémités chez le bai', 'La taille des oreilles', 'La longueur du dos'],
          1,
          'Les crins et les extrémités noirs sont caractéristiques du bai, alors que l’alezan ne possède pas de crins noirs.'
        ),
        Q(
          'Un cheval au corps et aux crins brun-roux, sans extrémités noires, est le plus probablement :',
          ['Alezan', 'Bai', 'Noir', 'Pie'],
          0,
          'Une robe alezane présente des poils fauves à roux et des crins de teinte semblable ou plus claire, mais pas noirs.'
        ),
        Q(
          'Quel énoncé décrit correctement la robe noire ?',
          ['Corps fauve et crins noirs', 'Poils et crins noirs', 'Corps roux et crins lavés', 'Grandes plages blanches et noires'],
          1,
          'Dans la robe noire, les poils et les crins sont noirs. Une marque blanche éventuelle ne change pas le nom de la robe de base.'
        ),
        Q(
          'Une petite étoile blanche sur le front d’un cheval bai :',
          ['Transforme sa robe en pie', 'En fait un cheval gris', 'Est une marque qui ne change pas sa robe de base', 'Le fait classer comme alezan'],
          2,
          'Une marque blanche sur la tête s’ajoute au signalement, mais la robe de base reste bai.'
        ),
        Q(
          'Pourquoi regarde-t-on aussi les crins et le bas des membres pour identifier une robe ?',
          ['Parce que la couleur du corps seule peut prêter à confusion', 'Parce que tous les chevaux ont le même corps', 'Parce que la robe dépend de la selle', 'Parce que seuls les sabots définissent la robe'],
          0,
          'La combinaison entre couleur du corps, crins et extrémités permet notamment de distinguer correctement bai et alezan.'
        )
      ]
    },
    {
      slug: 'tenue-cavalier-securite',
      titre: 'La tenue du cavalier en sécurité',
      questions: [
        Q(
          'Quel critère est essentiel pour le casque d’équitation ?',
          ['Il doit être assorti au tapis', 'Il doit être ajusté et attaché', 'Il doit pouvoir glisser sur la tête', 'Il doit être porté seulement au galop'],
          1,
          'Un casque adapté à la tête et correctement attaché reste en place. Les consignes du club et l’état du matériel doivent aussi être respectés.'
        ),
        Q(
          'Pourquoi privilégie-t-on des chaussures fermées avec un petit talon pour monter ?',
          ['Pour tenir la jambe rigide', 'Pour limiter le risque que le pied traverse l’étrier', 'Pour alourdir les pieds', 'Pour remplacer les mini-chaps'],
          1,
          'Une chaussure fermée protège le pied et son talon aide à éviter qu’il ne s’enfonce trop loin dans l’étrier.'
        ),
        Q(
          'Quelle tenue présente le plus de risques près d’un cheval ?',
          ['Un haut ajusté et fermé', 'Un pantalon confortable', 'Une longue écharpe flottante', 'Des bottines fermées'],
          2,
          'Un vêtement ou accessoire flottant peut s’accrocher au matériel ou effrayer le cheval. Il faut le retirer ou le sécuriser.'
        ),
        Q(
          'Avant de monter, la jugulaire du casque est trop lâche. Que faire ?',
          ['Monter puis la régler au trot', 'La glisser derrière le menton sans la fermer', 'La régler avant de se mettre en selle', 'Ajouter un bonnet sous le casque'],
          2,
          'Le casque se vérifie avant l’activité. Une jugulaire bien réglée contribue à son maintien en cas de chute.'
        ),
        Q(
          'Pourquoi attache-t-on les cheveux longs ?',
          ['Pour changer l’équilibre du cavalier', 'Pour garder une vision dégagée et limiter les accrochages', 'Pour mieux tenir le casque trop grand', 'Pour ralentir le cheval'],
          1,
          'Des cheveux maîtrisés gênent moins la vue et risquent moins de s’accrocher, sans servir à compenser un casque mal ajusté.'
        ),
        Q(
          'Qui faut-il prévenir si un équipement paraît abîmé ou mal ajusté ?',
          ['Personne si le cours commence', 'Seulement un autre débutant', 'L’enseignant ou un responsable du club', 'Le cheval en lui parlant'],
          2,
          'Un responsable peut contrôler le matériel et décider s’il doit être réglé, remplacé ou retiré du service.'
        )
      ]
    },
    {
      slug: 'checklist-avant-monter',
      titre: 'La checklist avant de monter',
      questions: [
        Q(
          'Avant de poser le tapis, que faut-il vérifier en priorité sur le dos du cheval ?',
          ['Qu’il est propre et sans zone manifestement douloureuse', 'Que la crinière est tressée', 'Que la queue est coupée', 'Que les sabots sont mouillés'],
          0,
          'La saleté ou une sensibilité sous le harnachement peut provoquer une gêne. Toute anomalie doit être signalée.'
        ),
        Q(
          'Dans quel sens pose-t-on d’abord le tapis de selle ?',
          ['Très en arrière puis on le tire vers l’avant', 'Un peu en avant puis on le fait glisser dans le sens du poil', 'Sous la sangle uniquement', 'Plié en deux sur le garrot'],
          1,
          'Le tapis est placé légèrement en avant puis ajusté vers l’arrière, dans le sens du poil, afin de ne pas rebrousser celui-ci.'
        ),
        Q(
          'Que contrôle-t-on avant de conduire le cheval jusqu’au montoir ?',
          ['Que les rênes sont posées au sol', 'Que selle et filet sont en place selon les consignes et que le passage est libre', 'Que le cheval a mangé des friandises', 'Que les étriers pendent très bas'],
          1,
          'Le harnachement doit être vérifié et la circulation organisée avant de déplacer le cheval.'
        ),
        Q(
          'Pourquoi remonte-t-on les étriers avant de mener un cheval sellé ?',
          ['Pour qu’ils ne ballotent pas et ne s’accrochent pas', 'Pour raccourcir les rênes', 'Pour desserrer la sangle', 'Pour empêcher le cheval de marcher'],
          0,
          'Des étriers remontés limitent les chocs contre le cheval et les risques d’accrochage pendant la conduite en main.'
        ),
        Q(
          'Le cheval gonfle son ventre pendant le sanglage. Quelle attitude est correcte ?',
          ['Serrer d’un seul coup au maximum', 'Sangler progressivement et vérifier de nouveau avant de monter', 'Renoncer à toute vérification', 'Tirer sur les rênes en même temps'],
          1,
          'Le sanglage se fait progressivement. Une nouvelle vérification au montoir est nécessaire, idéalement sous la supervision demandée au niveau débutant.'
        ),
        Q(
          'Une boucle du filet semble tournée. Que faut-il faire ?',
          ['Monter et attendre qu’elle se replace', 'La cacher sous la crinière', 'Demander une vérification et la remettre correctement avant de partir', 'Serrer toutes les autres boucles'],
          2,
          'Un montant vrillé ou une boucle mal placée peut gêner le cheval. Le matériel doit être corrigé avant le travail.'
        )
      ]
    },
    {
      slug: 'monter-descendre-methodiquement',
      titre: 'Monter et descendre méthodiquement',
      questions: [
        Q(
          'Pourquoi utilise-t-on un montoir lorsqu’il est disponible ?',
          ['Pour éviter de régler les étriers', 'Pour réduire les contraintes sur le dos du cheval et la selle', 'Pour apprendre à sauter', 'Pour raccourcir la sangle'],
          1,
          'Le montoir facilite une montée contrôlée et limite la traction latérale exercée sur la selle et le dos.'
        ),
        Q(
          'Au moment de monter, que doit faire le cheval ?',
          ['Marcher rapidement', 'Rester immobile', 'Reculer contre le montoir', 'Tourner sur place'],
          1,
          'L’immobilité rend la montée plus sûre. Si le cheval bouge, on le replace calmement avec l’aide de l’enseignant.'
        ),
        Q(
          'Que faut-il éviter en passant la jambe droite au-dessus de la croupe ?',
          ['Garder le buste stable', 'Toucher ou heurter la croupe', 'Tenir les rênes ajustées sans tirer', 'Poser le pied gauche dans l’étrier'],
          1,
          'La jambe passe sans frapper le cheval. Un geste brusque sur la croupe pourrait le surprendre.'
        ),
        Q(
          'Une fois en selle, comment pose-t-on le pied droit dans l’étrier ?',
          ['En lâchant les deux rênes', 'Calmement, sans regarder longtemps au sol', 'En tirant sur la bouche', 'En se couchant sur l’encolure'],
          1,
          'Le cavalier garde sa stabilité et ses rênes organisées, puis chausse l’étrier sans perdre l’attention portée à son cheval.'
        ),
        Q(
          'Avant de descendre, quelle préparation est la plus sûre ?',
          ['Arrêter le cheval et libérer les pieds des étriers selon la méthode enseignée', 'Garder le cheval au trot', 'Lâcher les rênes', 'Desserrer complètement la sangle en selle'],
          0,
          'La descente commence avec un cheval immobile et des pieds dégagés suivant les consignes de l’enseignant.'
        ),
        Q(
          'Après avoir touché le sol, quelle action vient en premier ?',
          ['S’éloigner en laissant le cheval seul', 'Garder le contrôle du cheval et remonter les étriers', 'Passer sous son ventre', 'Retirer immédiatement le filet'],
          1,
          'Le cavalier conserve ses rênes en main et organise le matériel pour mener le cheval sans étriers pendants.'
        )
      ]
    },
    {
      slug: 'diriger-et-changer-allure',
      titre: 'Diriger et changer d’allure',
      questions: [
        Q(
          'Pour préparer un départ au pas, quelle combinaison est la plus cohérente ?',
          ['Regarder devant, se grandir et agir progressivement avec les jambes', 'Regarder le sol et tirer sur les rênes', 'Se pencher en arrière et crier', 'Écarter les deux mains brutalement'],
          0,
          'Le regard donne une direction, la posture reste équilibrée et les jambes demandent l’avancée de façon progressive.'
        ),
        Q(
          'Pour ralentir sans geste brusque, le cavalier commence par :',
          ['Se redresser, respirer et fermer progressivement les doigts', 'Tirer une seule rêne vers le haut', 'Lâcher les rênes', 'Donner des coups de talon'],
          0,
          'La posture et une action graduée des doigts permettent de demander une transition descendante sans traction soudaine.'
        ),
        Q(
          'Quel rôle joue principalement le regard dans une courbe ?',
          ['Il aide à anticiper et orienter la trajectoire', 'Il remplace toutes les aides', 'Il fait accélérer automatiquement', 'Il sert à surveiller ses pieds'],
          0,
          'Regarder la direction choisie aide le corps à rester organisé et permet d’anticiper le tracé.'
        ),
        Q(
          'Le cheval ne répond pas à une demande légère d’avancer. Quelle progression est adaptée ?',
          ['Répéter exactement la même aide sans fin', 'Renforcer clairement l’aide puis relâcher dès la réponse', 'Tirer sur les deux rênes', 'Abandonner les rênes'],
          1,
          'Une aide se gradue. Le relâchement immédiat lorsque le cheval répond lui indique qu’il a compris.'
        ),
        Q(
          'Pour rester en équilibre au trot enlevé, le cavalier cherche surtout à :',
          ['Se lever très haut avec les genoux', 'Suivre régulièrement le rythme sans s’appuyer sur les rênes', 'Bloquer le bassin', 'Regarder l’encolure'],
          1,
          'Le mouvement accompagne la cadence du cheval. Les mains restent aussi stables que possible et les rênes ne servent pas d’appui.'
        ),
        Q(
          'Après une transition réussie, pourquoi relâche-t-on l’action qui l’a demandée ?',
          ['Pour récompenser la réponse et retrouver un contact adapté', 'Pour faire demi-tour', 'Pour perdre la direction', 'Pour rallonger les étriers'],
          0,
          'Cesser l’aide au bon moment rend la demande compréhensible et évite une pression permanente.'
        )
      ]
    },
    {
      slug: 'retour-ecurie-apres-seance',
      titre: 'Le retour à l’écurie après la séance',
      questions: [
        Q(
          'Pourquoi laisse-t-on le cheval revenir au calme avant de le rentrer ?',
          ['Pour observer sa récupération et faire baisser progressivement l’effort', 'Pour salir le tapis', 'Pour retarder le pansage', 'Pour éviter de dessangler'],
          0,
          'Une récupération progressive permet de contrôler le souffle, la locomotion et le comportement après le travail.'
        ),
        Q(
          'Dans quel ordre retire-t-on généralement le matériel une fois le cheval sécurisé ?',
          ['On suit la méthode du club en dessellant puis en retirant le filet sans laisser le cheval libre', 'On jette d’abord les rênes au sol', 'On retire le licol et on ouvre la porte', 'On retire le tapis en laissant la selle sanglée'],
          0,
          'L’ordre exact dépend de l’installation, mais le cheval doit rester contrôlé et le matériel retiré méthodiquement.'
        ),
        Q(
          'Pourquoi rince-t-on le mors après utilisation ?',
          ['Pour retirer salive et résidus avant de le ranger', 'Pour modifier sa taille', 'Pour durcir le métal', 'Pour éviter de nettoyer le filet'],
          0,
          'Un rinçage simple évite que des dépôts sèchent sur le mors. Son état peut être contrôlé au même moment.'
        ),
        Q(
          'Que vérifie-t-on pendant le pansage après la séance ?',
          ['L’absence de blessure, chaleur anormale ou gêne', 'Uniquement la couleur de la robe', 'La marque du tapis', 'La longueur des rênes'],
          0,
          'Le pansage est aussi un moment d’observation. Une zone sensible, gonflée ou anormalement chaude doit être signalée.'
        ),
        Q(
          'Le cheval est encore très essoufflé plusieurs minutes après un effort modéré. Que faire ?',
          ['Le remettre immédiatement au galop', 'Le couvrir de plusieurs tapis', 'Prévenir l’enseignant et suivre ses consignes', 'Lui donner seul une grande ration'],
          2,
          'Une récupération inhabituelle mérite l’avis immédiat d’un responsable, qui évaluera la situation.'
        ),
        Q(
          'Comment range-t-on une selle après usage ?',
          ['Sur un porte-selle, matériel organisé et sangle relevée', 'Posée côté siège sur le sol', 'Suspendue par un étrier', 'La sangle traînant dans l’allée'],
          0,
          'Un rangement stable protège la selle, évite les chutes de matériel et garde l’allée dégagée.'
        )
      ]
    },
    {
      slug: 'situations-poney-club',
      titre: 'Les bons réflexes au poney-club',
      questions: [
        Q(
          'Un seau est posé au milieu de l’allée. Quel est le bon réflexe ?',
          ['Le contourner avec le cheval sans rien dire', 'Le mettre hors du passage ou prévenir un responsable', 'Le pousser avec le pied du cheval', 'Le laisser comme exercice surprise'],
          1,
          'Une allée dégagée réduit les risques de chute et d’effroi. On sécurise l’obstacle si cela peut être fait sans danger.'
        ),
        Q(
          'Avant d’ouvrir une porte avec un cheval en main, il faut surtout :',
          ['Vérifier l’espace de l’autre côté et garder le cheval contrôlé', 'Passer la longe autour du poignet', 'Se placer derrière la croupe', 'Lâcher le cheval pour ouvrir plus vite'],
          0,
          'Anticiper ce qui se trouve derrière la porte évite une collision. La longe reste tenue sans être enroulée autour de la main.'
        ),
        Q(
          'Deux chevaux doivent se croiser dans un passage étroit. Que fait un débutant ?',
          ['Il accélère pour passer en premier', 'Il applique la consigne du responsable et attend si nécessaire', 'Il se glisse entre les deux', 'Il tend sa longe en travers'],
          1,
          'Dans un espace étroit, l’organisation par un encadrant et le maintien de distances adaptées priment.'
        ),
        Q(
          'Pourquoi ne pose-t-on pas une boîte de pansage sous le ventre du cheval ?',
          ['Elle pourrait gêner ses pieds et provoquer une chute', 'Elle abîme toujours les brosses', 'Le cheval ne peut plus respirer', 'Cela change sa robe'],
          0,
          'Tout matériel doit rester hors de la zone des pieds et des déplacements pour éviter trébuchement et réaction de surprise.'
        ),
        Q(
          'Tu remarques une petite plaie avant le cours. Quelle décision est correcte ?',
          ['La cacher sous le tapis', 'La nettoyer avec n’importe quel produit', 'La montrer à l’enseignant avant de seller', 'Monter pour voir si elle gêne'],
          2,
          'Un responsable doit observer la plaie et décider des soins et de l’aptitude du cheval à travailler.'
        ),
        Q(
          'À quoi sert une consigne donnée pour tout le groupe ?',
          ['À organiser les déplacements et la sécurité de tous', 'Seulement à aider le premier cavalier', 'À remplacer le casque', 'À choisir la robe des chevaux'],
          0,
          'Dans une écurie ou une carrière partagée, chaque cavalier contribue à la sécurité en respectant les mêmes règles.'
        )
      ]
    }
  ],

  2: [
    {
      slug: 'signaux-entre-chevaux',
      titre: 'Les signaux entre chevaux',
      questions: [
        Q(
          'Un cheval couche les oreilles et menace un congénère qui approche de son foin. Que peut signifier cette attitude ?',
          ['Une volonté de garder l’accès à la ressource', 'Une invitation certaine au jeu', 'Un endormissement', 'Une demande de pansage'],
          0,
          'La nourriture est une ressource qui peut susciter de l’évitement ou une menace. Le cavalier ne doit pas se placer entre les chevaux.'
        ),
        Q(
          'Deux chevaux se grattent doucement l’encolure avec les dents. Ce comportement est souvent :',
          ['Un toilettage mutuel pouvant renforcer les liens', 'Une boiterie', 'Une façon de galoper', 'Une demande de selle'],
          0,
          'Le toilettage mutuel est un comportement social. Il ne doit pas être confondu avec une morsure agressive.'
        ),
        Q(
          'Pourquoi faut-il laisser suffisamment d’espace entre deux chevaux en main ?',
          ['Pour éviter qu’une réaction de l’un n’atteigne l’autre ou le cavalier', 'Pour allonger les longes', 'Pour les empêcher de se voir', 'Pour modifier leur hiérarchie'],
          0,
          'Une distance adaptée limite le risque de morsure, de coup ou d’entraînement en chaîne en cas de surprise.'
        ),
        Q(
          'Quel sens aide particulièrement le cheval à repérer un bruit venant de directions différentes ?',
          ['L’ouïe, grâce à ses oreilles mobiles', 'Le goût', 'Le toucher du sabot', 'L’odorat uniquement au galop'],
          0,
          'Les oreilles mobiles s’orientent vers des sons. Leur position informe aussi sur l’attention du cheval.'
        ),
        Q(
          'Pourquoi le cheval relève-t-il parfois la tête face à un élément nouveau ?',
          ['Pour mieux observer et évaluer son environnement', 'Pour demander automatiquement à galoper', 'Pour empêcher ses oreilles de bouger', 'Pour changer de robe'],
          0,
          'Relever la tête peut accompagner une prise d’informations. Le cavalier laisse le temps d’observer sans forcer une approche.'
        ),
        Q(
          'Dans un groupe au pré, quelle observation est la plus pertinente ?',
          ['Les distances, déplacements et accès aux ressources', 'Seulement la couleur des licols', 'Uniquement le cheval le plus grand', 'Le nombre de clôtures sans regarder les chevaux'],
          0,
          'Les interactions et la façon dont les chevaux partagent espace, eau, nourriture et repos renseignent sur leur organisation sociale.'
        )
      ]
    },
    {
      slug: 'tete-et-membres-en-detail',
      titre: 'Tête et membres : se repérer',
      questions: [
        Q(
          'Sur l’illustration, quelle partie est indiquée entre le boulet et la couronne du sabot ?',
          ['Le canon', 'Le paturon', 'Le jarret', 'Le grasset'],
          1,
          'Le paturon se situe entre le boulet et la couronne. Son orientation participe au fonctionnement du bas du membre.',
          '/assets/diagramme-g2-membres.webp',
          'Illustration pédagogique d’un antérieur de cheval avec une flèche entre le boulet et la couronne du sabot'
        ),
        Q(
          'Quelle partie de la tête se trouve entre le front et les naseaux ?',
          ['La ganache', 'Le chanfrein', 'La nuque', 'La commissure des lèvres'],
          1,
          'Le chanfrein est la région allongée de la face située sous le front et au-dessus des naseaux.'
        ),
        Q(
          'Comment s’appelle l’articulation saillante située au-dessus du paturon ?',
          ['Le boulet', 'Le coude', 'Le grasset', 'Le garrot'],
          0,
          'Le boulet se situe entre le canon et le paturon. Il ne faut pas le confondre avec le genou ou le jarret, plus hauts.'
        ),
        Q(
          'Sur quel membre trouve-t-on le jarret ?',
          ['Le membre postérieur', 'Le membre antérieur', 'Les deux à la même place', 'Aucun membre'],
          0,
          'Le jarret est une articulation du postérieur. Sur l’antérieur, l’articulation visible à mi-hauteur est le genou.'
        ),
        Q(
          'Quelle zone forme le bord supérieur du sabot, à la naissance de la corne ?',
          ['La couronne', 'La sole', 'La fourchette', 'La lacune médiane'],
          0,
          'La couronne est la jonction visible entre le bas du membre et la paroi du sabot.'
        ),
        Q(
          'Pourquoi apprend-on à nommer précisément les régions du membre ?',
          ['Pour localiser clairement une anomalie à signaler', 'Pour choisir une robe', 'Pour mesurer les rênes', 'Pour remplacer l’avis d’un professionnel'],
          0,
          'Un vocabulaire précis aide à décrire une chaleur, une plaie ou un gonflement, sans établir soi-même un diagnostic.'
        )
      ]
    },
    {
      slug: 'races-et-types-morphologiques',
      titre: 'Races et types morphologiques',
      questions: [
        Q(
          'Quelle différence générale distingue un poney d’un cheval dans les catégories de taille ?',
          ['La taille au garrot selon les règles de la discipline, avec des exceptions de race', 'La couleur de robe', 'Le nombre d’allures', 'La forme des sabots uniquement'],
          0,
          'La distinction sportive utilise la taille au garrot, mais certaines races conservent une appellation traditionnelle particulière.'
        ),
        Q(
          'Un cheval compact, très musclé et doté de fanons abondants évoque plutôt :',
          ['Un type trait ou cob', 'Un type course léger', 'Un poulain nouveau-né', 'Une robe et non un type'],
          0,
          'Les chevaux de trait et certains cobs présentent souvent une morphologie puissante, même si chaque race a ses particularités.'
        ),
        Q(
          'Pourquoi deux chevaux de même robe peuvent-ils appartenir à des races différentes ?',
          ['Parce que la robe décrit la couleur, pas l’origine ni l’ensemble de la morphologie', 'Parce que toutes les races sont identiques', 'Parce que la selle change la race', 'Parce que seuls les crins comptent'],
          0,
          'La robe est un caractère visible. Une race se définit par une origine, un standard et une population, pas par une seule couleur.'
        ),
        Q(
          'Quel ensemble aide à décrire la morphologie d’un équidé ?',
          ['Taille, proportions, ossature et musculature', 'Nom du cavalier et couleur du tapis', 'Nombre de brosses utilisées', 'Uniquement la longueur de la queue'],
          0,
          'La description morphologique prend en compte plusieurs proportions corporelles et ne se limite jamais à un détail.'
        ),
        Q(
          'Dans un club, pourquoi identifie-t-on aussi le tempérament individuel plutôt que de se fier seulement à la race ?',
          ['Parce que chaque cheval a son expérience et son comportement propres', 'Parce que la race change chaque semaine', 'Parce que la taille ne se mesure pas', 'Parce que tous les chevaux d’une race réagissent exactement pareil'],
          0,
          'La race peut donner des tendances générales, mais l’observation de l’individu et les consignes de l’équipe restent essentielles.'
        ),
        Q(
          'Une race est dite adaptée à une activité. Quelle conclusion reste juste ?',
          ['Les capacités et la préparation de chaque individu doivent être évaluées', 'Tous ses représentants réussissent automatiquement', 'Elle n’a pas besoin d’entraînement', 'Son bien-être peut être ignoré'],
          0,
          'Aucune étiquette de race ne remplace l’évaluation du cheval, de son entraînement et de son état du jour.'
        )
      ]
    },
    {
      slug: 'distribuer-aliments-prudemment',
      titre: 'Distribuer les aliments prudemment',
      questions: [
        Q(
          'Avant de distribuer une ration préparée, que faut-il vérifier ?',
          ['Le nom du cheval, la quantité et les consignes', 'Uniquement la couleur du seau', 'La longueur de la crinière', 'Le nombre d’étriers'],
          0,
          'Les rations ne sont pas interchangeables. L’identification du cheval et la consigne de quantité doivent être contrôlées.'
        ),
        Q(
          'Pourquoi ne modifie-t-on pas seul la quantité de concentrés ?',
          ['Parce que la ration dépend des besoins et doit être décidée par les responsables', 'Parce que tous les chevaux reçoivent toujours la même quantité', 'Parce que les concentrés remplacent l’eau', 'Parce que le seau devient trop lourd'],
          0,
          'Une ration est construite selon le cheval et son activité. Une modification non prévue peut perturber son équilibre alimentaire.'
        ),
        Q(
          'Quel aliment constitue généralement la base de la ration du cheval ?',
          ['Le fourrage', 'Les friandises', 'Le pain', 'Le sucre'],
          0,
          'Le fourrage apporte des fibres et occupe une place centrale dans l’alimentation du cheval.'
        ),
        Q(
          'Pourquoi contrôle-t-on régulièrement l’abreuvoir ?',
          ['Pour vérifier que l’eau est disponible, propre et que le dispositif fonctionne', 'Pour mesurer la taille du box', 'Pour empêcher le cheval de boire', 'Pour refroidir la selle'],
          0,
          'Un cheval doit disposer d’une eau accessible et de qualité. Un abreuvoir bloqué ou sale doit être signalé.'
        ),
        Q(
          'Un aliment présente une odeur inhabituelle et des traces de moisissure. Que faire ?',
          ['Ne pas le distribuer et prévenir un responsable', 'Le mélanger à une ration saine', 'Ajouter de l’eau', 'Le donner seulement au plus grand cheval'],
          0,
          'Un aliment suspect est écarté. Le responsable décidera de son retrait et vérifiera le stockage.'
        ),
        Q(
          'Pourquoi évite-t-on de se placer entre deux chevaux au moment des repas ?',
          ['Parce que la nourriture peut provoquer compétition et mouvements brusques', 'Parce que les chevaux ne mangent jamais ensemble', 'Parce que le fourrage est trop léger', 'Parce que la ration change leur robe'],
          0,
          'L’excitation et la protection d’une ressource augmentent le risque. La distribution suit une organisation sécurisée.'
        )
      ]
    },
    {
      slug: 'sortie-pre-et-paddock',
      titre: 'Sortir et lâcher au paddock',
      questions: [
        Q(
          'Avant d’entrer dans un paddock, quel contrôle est prioritaire ?',
          ['L’état de la porte, de la clôture et la présence d’autres chevaux', 'La couleur de l’herbe uniquement', 'La propreté du tapis de selle', 'La longueur des étriers'],
          0,
          'L’environnement doit être observé avant d’engager le cheval afin d’anticiper fuite, rencontre ou obstacle.'
        ),
        Q(
          'Pour franchir une porte avec un cheval en main, le cavalier :',
          ['Garde une position sûre et évite que le cheval ne le dépasse précipitamment', 'Passe sous son encolure', 'Enroule la longe autour de son bras', 'Laisse la longe traîner'],
          0,
          'Le passage se fait de manière contrôlée, avec une longe organisée et suffisamment d’espace.'
        ),
        Q(
          'Pourquoi tourne-t-on généralement le cheval vers la porte avant de le lâcher ?',
          ['Pour se replacer hors de la trajectoire de départ et refermer en sécurité', 'Pour lui faire peur', 'Pour serrer davantage le licol', 'Pour l’empêcher de voir le paddock'],
          0,
          'La méthode enseignée permet au cavalier de ne pas rester derrière un cheval susceptible de partir vivement.'
        ),
        Q(
          'Au moment de retirer le licol, quelle règle reste essentielle ?',
          ['Respecter la procédure du club et ne pas rester dans la trajectoire des postérieurs', 'S’agenouiller derrière le cheval', 'Garder le licol à moitié fermé', 'Faire claquer la longe'],
          0,
          'Le lâcher doit être préparé, calme et conforme aux consignes locales, particulièrement si plusieurs chevaux sont présents.'
        ),
        Q(
          'Le cheval part rapidement après avoir été lâché. Que doit faire le cavalier ?',
          ['Rester protégé près de la sortie puis fermer selon la procédure', 'Courir derrière lui', 'Attraper sa queue', 'Se placer au milieu du troupeau'],
          0,
          'On ne poursuit pas le cheval. Le cavalier conserve sa sécurité et sécurise l’accès dès que possible.'
        ),
        Q(
          'Une clôture semble endommagée. Quelle décision prendre ?',
          ['Ne pas lâcher le cheval et prévenir immédiatement', 'Lâcher puis réparer', 'Placer un seau devant le trou', 'Attendre que le cheval la teste'],
          0,
          'Un défaut de clôture expose à une fuite ou une blessure. Il doit être traité avant l’utilisation de l’espace.'
        )
      ]
    },
    {
      slug: 'regler-etriviere-et-sangle',
      titre: 'Régler étriers et sanglage',
      questions: [
        Q(
          'Avant de régler un étrier à pied, que vérifie-t-on ?',
          ['Que le cheval est tenu et que l’étrivière n’est pas vrillée', 'Que la rêne est posée au sol', 'Que la sangle est retirée', 'Que le mors est dans le seau'],
          0,
          'Un cheval contrôlé et une étrivière à plat permettent un réglage sans créer de torsion ou de gêne.'
        ),
        Q(
          'Le réglage de la longueur d’étrier à pied donne :',
          ['Une première estimation à vérifier une fois en selle', 'Une mesure définitive pour tous les cavaliers', 'La taille de la sangle', 'La longueur des rênes'],
          0,
          'La comparaison avec le bras constitue seulement un repère. La longueur finale dépend du cavalier et de l’exercice.'
        ),
        Q(
          'Une fois en selle, pourquoi ajuste-t-on les étriers avec le cheval immobile ?',
          ['Pour conserver une situation stable pendant la manipulation', 'Pour le faire reculer', 'Pour desserrer le casque', 'Pour l’empêcher de respirer'],
          0,
          'Un cheval à l’arrêt réduit le risque de perte d’équilibre pendant que le cavalier manipule l’étrivière.'
        ),
        Q(
          'Comment doit reposer une étrivière correctement placée ?',
          ['À plat, sans torsion', 'Enroulée autour du quartier', 'Sous la sangle', 'Croisée devant la selle'],
          0,
          'Une étrivière vrillée peut gêner la jambe et rendre l’étrier instable.'
        ),
        Q(
          'Pourquoi vérifie-t-on le sanglage après quelques minutes au pas ?',
          ['Parce que le cheval peut se décontracter et la selle doit rester stable', 'Parce que la sangle doit toujours être au maximum', 'Parce que le tapis doit tomber', 'Parce que les étriers s’allongent seuls'],
          0,
          'Le volume du thorax et le placement du matériel peuvent évoluer. On contrôle sans serrage excessif.'
        ),
        Q(
          'Un étrier est nettement plus long que l’autre. Quel effet probable faut-il éviter ?',
          ['Une position asymétrique du cavalier', 'Une modification de la robe', 'Une usure du mors', 'Un cheval qui change automatiquement de main'],
          0,
          'Des étriers de longueur différente perturbent la symétrie et la stabilité du cavalier.'
        )
      ]
    },
    {
      slug: 'mobiliser-a-pied',
      titre: 'Reculer et mobiliser à pied',
      questions: [
        Q(
          'Avant de demander un reculer en main, le cavalier doit :',
          ['Vérifier l’espace derrière le cheval', 'Se placer derrière sa croupe', 'Lâcher la longe', 'Fermer les yeux du cheval'],
          0,
          'Le cheval ne doit pas reculer vers un mur, une personne ou du matériel. La trajectoire se contrôle avant la demande.'
        ),
        Q(
          'Une demande à pied efficace suit quelle logique ?',
          ['Signal léger, augmentation progressive si nécessaire, relâchement à la réponse', 'Pression maximale maintenue', 'Succession de gestes imprévisibles', 'Traction continue sur la longe'],
          0,
          'La gradation et le relâchement rendent la demande compréhensible et évitent une pression constante.'
        ),
        Q(
          'Pour déplacer les hanches, que cherche-t-on à observer ?',
          ['Le croisement contrôlé des postérieurs autour des épaules', 'Un départ rapide au trot', 'Le cheval qui tire en avant', 'Les antérieurs complètement immobiles dans tous les cas'],
          0,
          'L’exercice mobilise l’arrière-main latéralement, sans précipitation et sur une demande localisée.'
        ),
        Q(
          'Pour déplacer les épaules, quel élément doit rester sous contrôle ?',
          ['La tête, l’allure et l’espace personnel du cavalier', 'Uniquement la queue', 'La longueur de la crinière', 'La couleur du licol'],
          0,
          'Le cavalier organise l’ensemble du mouvement et garde une distance qui évite d’être bousculé.'
        ),
        Q(
          'Le cheval envahit l’espace du cavalier pendant l’exercice. Que faire ?',
          ['Rétablir calmement une distance sûre avec les codes enseignés', 'Le pousser avec les deux mains sur la tête', 'Passer sous son encolure', 'Enrouler la longe autour du poignet'],
          0,
          'La priorité est la sécurité. Les codes utilisés doivent être cohérents avec l’enseignement du club.'
        ),
        Q(
          'Pourquoi récompense-t-on dès le premier pas correct ?',
          ['Pour indiquer précisément au cheval la réponse attendue', 'Pour terminer forcément toute la séance', 'Pour supprimer le licol', 'Pour l’empêcher de recommencer'],
          0,
          'Un relâchement immédiat associe la bonne réponse à la disparition de la demande et facilite l’apprentissage.'
        )
      ]
    },
    {
      slug: 'aborder-petit-obstacle',
      titre: 'Aborder un petit obstacle',
      questions: [
        Q(
          'Sur le schéma, quelle trajectoire prépare l’abord le plus lisible ?',
          ['La ligne droite centrée sur l’obstacle', 'La courbe qui arrive en biais au dernier moment', 'La ligne passant contre le chandelier', 'La trajectoire qui change deux fois devant la barre'],
          0,
          'Une trajectoire droite et centrée aide le cheval à comprendre l’exercice et le cavalier à conserver son équilibre.',
          '/assets/diagramme-g2-abord.webp',
          'Vue du dessus d’une carrière montrant quatre trajectoires vers une petite croix, dont une ligne droite centrée'
        ),
        Q(
          'Avant un petit obstacle, le regard du cavalier se porte :',
          ['Vers la trajectoire et au-delà de l’obstacle', 'Sur les mains uniquement', 'Sur un autre cheval', 'Sur le sol juste devant les pieds'],
          0,
          'Regarder loin aide à conserver une direction stable et à préparer la suite du tracé.'
        ),
        Q(
          'Quelle allure convient à un premier exercice selon la consigne de l’enseignant ?',
          ['Une allure régulière et contrôlée', 'La vitesse la plus élevée possible', 'Une accélération à la dernière foulée', 'Une allure choisie sans écouter la consigne'],
          0,
          'La régularité et le contrôle priment. L’enseignant choisit le dispositif et l’allure adaptés.'
        ),
        Q(
          'Pourquoi garde-t-on des mains qui accompagnent au-dessus du saut ?',
          ['Pour permettre à l’encolure de se déployer sans lâcher tout contrôle', 'Pour soulever le cheval avec les rênes', 'Pour raccourcir les étriers', 'Pour forcer le regard vers le bas'],
          0,
          'Le cheval utilise son encolure pour s’équilibrer. Les mains suivent le mouvement sans traction.'
        ),
        Q(
          'Après la réception, quelle priorité vient en premier ?',
          ['Retrouver équilibre, direction et allure demandée', 'Accélérer immédiatement', 'Regarder derrière soi', 'Lâcher les rênes complètement'],
          0,
          'La réception fait partie de l’exercice. Le cavalier poursuit une trajectoire préparée avec un cheval contrôlé.'
        ),
        Q(
          'Le cheval dévie avant l’obstacle. Quelle analyse est la plus utile ?',
          ['Revoir trajectoire, regard, allure et encadrement avec l’enseignant', 'Conclure qu’il refuse toujours', 'Augmenter fortement la hauteur', 'Tirer uniquement la rêne intérieure'],
          0,
          'Une déviation peut venir de plusieurs facteurs. On revient à un exercice simple et on corrige la préparation.'
        )
      ]
    }
  ],

  3: [
    {
      slug: 'marques-membres-et-epis',
      titre: 'Marques des membres et épis',
      questions: [
        Q(
          'Sur la planche, quelle balzane monte le plus haut sur le membre ?',
          ['La trace blanche limitée à la couronne', 'La balzane jusqu’au paturon', 'La balzane jusqu’au canon', 'La marque blanche sur le sabot uniquement'],
          2,
          'Une balzane se décrit notamment par sa hauteur. Celle qui remonte sur le canon est plus étendue que celles limitées à la couronne ou au paturon.',
          '/assets/diagramme-g3-balzanes.webp',
          'Planche pédagogique de quatre membres de cheval présentant des marques blanches de hauteurs différentes'
        ),
        Q(
          'Qu’est-ce qu’un épi dans le signalement d’un cheval ?',
          ['Une zone où les poils changent de direction autour d’un point ou d’une ligne', 'Une tache causée par la boue', 'Une marque du fer', 'Une mèche de crinière coupée'],
          0,
          'La forme et l’emplacement des épis sont des caractéristiques durables utiles à l’identification.'
        ),
        Q(
          'Pourquoi précise-t-on le membre concerné par une balzane ?',
          ['Parce que sa localisation participe au signalement individuel', 'Parce qu’elle change l’allure du cheval', 'Parce que seule la balzane antérieure compte', 'Parce que les quatre membres sont toujours identiques'],
          0,
          'Le signalement distingue antérieur ou postérieur et côté droit ou gauche afin de décrire précisément le cheval.'
        ),
        Q(
          'Une marque blanche irrégulière au-dessus d’un sabot doit être décrite :',
          ['Avec sa forme, sa hauteur et le membre concerné', 'Seulement comme une robe blanche', 'Comme un épi de tête', 'Comme une lésion sans l’observer'],
          0,
          'Une description précise sépare les marques naturelles des observations de santé et facilite l’identification.'
        ),
        Q(
          'Quel énoncé est exact à propos des épis ?',
          ['Ils peuvent se trouver sur différentes régions du corps', 'Ils sont toujours au milieu du front', 'Ils disparaissent après le pansage', 'Ils ne servent jamais à l’identification'],
          0,
          'Les épis peuvent être observés sur la tête, l’encolure ou d’autres régions et sont consignés pour identifier le cheval.'
        ),
        Q(
          'Pourquoi nettoie-t-on la région avant de relever une marque ?',
          ['Pour distinguer correctement poils blancs, épis et salissures', 'Pour modifier la forme de la balzane', 'Pour faire pousser la corne', 'Pour changer la robe de base'],
          0,
          'La propreté améliore l’observation et évite de confondre une marque permanente avec une trace temporaire.'
        )
      ]
    },
    {
      slug: 'anatomie-membres-reperes',
      titre: 'Les repères des quatre membres',
      questions: [
        Q(
          'Sur l’illustration, quelle articulation du postérieur est indiquée par la flèche ?',
          ['Le genou', 'Le jarret', 'Le coude', 'Le boulet antérieur'],
          1,
          'Le jarret est l’articulation anguleuse du membre postérieur. Il se situe plus haut que le boulet.',
          '/assets/diagramme-g3-membres.webp',
          'Illustration anatomique simplifiée d’un cheval de profil avec une flèche vers le jarret du membre postérieur'
        ),
        Q(
          'Quel segment relie le genou au boulet sur l’antérieur ?',
          ['Le canon', 'Le paturon', 'L’avant-bras', 'Le bras'],
          0,
          'Le canon est le segment vertical situé sous le genou et au-dessus du boulet.'
        ),
        Q(
          'Sur le postérieur, quelle articulation se situe au-dessus et en avant du jarret ?',
          ['Le grasset', 'Le coude', 'Le genou', 'La couronne'],
          0,
          'Le grasset correspond à une articulation haute du postérieur, proche du ventre.'
        ),
        Q(
          'Quelle partie se trouve entre le boulet et le sabot ?',
          ['Le paturon', 'Le canon', 'Le jarret', 'Le grasset'],
          0,
          'Le paturon relie la région du boulet à la couronne du sabot.'
        ),
        Q(
          'Pourquoi compare-t-on souvent un membre à son symétrique ?',
          ['Pour repérer une différence de chaleur, volume ou sensibilité', 'Pour savoir lequel est antérieur', 'Pour choisir la robe', 'Pour calculer la ration'],
          0,
          'La comparaison droite-gauche aide à détecter une anomalie. Toute différence inquiétante est signalée à un responsable.'
        ),
        Q(
          'Un gonflement apparaît au niveau du boulet. Quelle formulation est la plus utile ?',
          ['Préciser le membre, la zone et ce qui a été observé', 'Dire seulement que le cheval va mal', 'Cacher la zone sous une bande', 'Faire soi-même un diagnostic'],
          0,
          'Une description factuelle et localisée aide l’encadrant ou le professionnel à examiner le cheval.'
        )
      ]
    },
    {
      slug: 'doucher-et-entretenir-pieds',
      titre: 'Doucher les membres et entretenir les pieds',
      questions: [
        Q(
          'Avant de doucher les membres, que faut-il vérifier ?',
          ['Que le cheval accepte l’eau, que le sol n’est pas dangereux et que le tuyau est organisé', 'Que le filet est démonté', 'Que la ration est distribuée', 'Que les étriers sont réglés'],
          0,
          'La préparation évite qu’un tuyau s’enroule dans les membres ou qu’une réaction de surprise ne provoque une glissade.'
        ),
        Q(
          'Pourquoi commence-t-on généralement le jet plus bas et progressivement ?',
          ['Pour habituer le cheval à la sensation et observer sa réaction', 'Pour faire courir le cheval', 'Pour chauffer le sabot', 'Pour remplacer le pansage'],
          0,
          'Une progression calme rend la douche plus prévisible et permet d’adapter la méthode au cheval.'
        ),
        Q(
          'Après la douche, pourquoi retire-t-on l’excès d’eau si nécessaire ?',
          ['Pour faciliter le séchage et éviter de laisser durablement certaines zones humides', 'Pour changer la couleur des poils', 'Pour rendre les membres plus lourds', 'Pour remplacer le contrôle des pieds'],
          0,
          'Le séchage et les soins suivent les consignes du club, notamment dans les plis du paturon.'
        ),
        Q(
          'Avant d’appliquer un produit d’entretien sur le sabot, celui-ci doit être :',
          ['Curé et observé', 'Couvert de boue', 'Laissé avec des cailloux', 'Trempé sans contrôle'],
          0,
          'Un pied propre permet d’observer sole, fourchette et paroi. Un produit ne doit pas masquer une anomalie.'
        ),
        Q(
          'Quelle zone évite-t-on de piquer avec le cure-pied ?',
          ['La fourchette', 'La paroi externe', 'Le canon', 'Le boulet'],
          0,
          'La fourchette est une structure sensible. On retire les débris autour avec un geste orienté et prudent.'
        ),
        Q(
          'Une odeur forte et inhabituelle vient de la fourchette. Que faire ?',
          ['Nettoyer prudemment et signaler l’observation', 'Recouvrir immédiatement de graisse', 'Ignorer si le cheval marche', 'Creuser profondément avec le cure-pied'],
          0,
          'Une odeur ou un aspect inhabituel mérite d’être signalé afin qu’un responsable décide du soin adapté.'
        )
      ]
    },
    {
      slug: 'litiere-et-abreuvoir',
      titre: 'Entretenir litière et abreuvoir',
      questions: [
        Q(
          'Quel est le premier objectif d’une litière entretenue ?',
          ['Offrir une surface propre, sèche et confortable', 'Empêcher le cheval de se coucher', 'Décorer le box', 'Remplacer le fourrage'],
          0,
          'La litière contribue au confort, à l’hygiène et à la qualité de l’environnement du cheval.'
        ),
        Q(
          'Que retire-t-on lors d’un entretien courant du box ?',
          ['Les crottins et les zones très souillées', 'Toute la litière propre chaque fois', 'L’abreuvoir', 'Le fourrage non entamé sans consigne'],
          0,
          'Le curage quotidien enlève les souillures et réorganise la litière selon la méthode du club.'
        ),
        Q(
          'Pourquoi garde-t-on les outils orientés loin du cheval ?',
          ['Pour éviter de le blesser ou de le surprendre', 'Pour travailler plus lentement', 'Pour déplacer l’abreuvoir', 'Pour mesurer le box'],
          0,
          'Les dents de fourche et les manches peuvent blesser. Le cheval doit être placé et contrôlé selon les consignes.'
        ),
        Q(
          'Que vérifie-t-on sur un abreuvoir automatique ?',
          ['La propreté et l’arrivée effective de l’eau', 'Uniquement sa couleur', 'Qu’il ne contient jamais d’eau', 'La hauteur du plafond'],
          0,
          'Un dispositif peut sembler normal tout en étant bloqué. Son fonctionnement réel doit être contrôlé.'
        ),
        Q(
          'Un box dégage une forte odeur d’ammoniac. Que peut indiquer ce signe ?',
          ['Une litière insuffisamment entretenue ou une ventilation à vérifier', 'Un fourrage trop sec uniquement', 'Une selle mal rangée', 'Une robe grise'],
          0,
          'Une odeur d’ammoniac signale une accumulation d’urine et invite à revoir entretien et aération avec le responsable.'
        ),
        Q(
          'Où range-t-on fourche et pelle après usage ?',
          ['À leur emplacement, hors des passages et des chevaux', 'Dans le box contre la porte', 'Sous le foin', 'En travers de l’allée'],
          0,
          'Un rangement stable et hors circulation évite chutes, blessures et obstruction des sorties.'
        )
      ]
    },
    {
      slug: 'demonter-nettoyer-filet',
      titre: 'Démonter et entretenir un filet',
      questions: [
        Q(
          'Avant de démonter un filet pour la première fois, quelle précaution aide au remontage ?',
          ['Observer ou photographier le passage des pièces et leurs réglages', 'Couper les montants', 'Mélanger toutes les boucles', 'Retirer les passants'],
          0,
          'Repérer l’orientation des pièces et les trous utilisés évite les erreurs au remontage.'
        ),
        Q(
          'Quelle pièce relie le mors à la têtière de chaque côté ?',
          ['Le montant du mors', 'La rêne seule', 'La sous-gorge', 'Le frontal'],
          0,
          'Les montants du mors descendent de la têtière vers les anneaux du mors.'
        ),
        Q(
          'Pourquoi sépare-t-on le mors des cuirs pour le nettoyer ?',
          ['Pour adapter le nettoyage au métal et au cuir', 'Pour raccourcir le filet', 'Pour supprimer la têtière', 'Pour changer l’embouchure sans autorisation'],
          0,
          'Le mors se rince tandis que le cuir reçoit des produits adaptés. On en profite pour contrôler l’état des pièces.'
        ),
        Q(
          'Lors du nettoyage du cuir, quelle quantité de produit convient ?',
          ['Une petite quantité adaptée, appliquée sur un cuir dépoussiéré', 'Une couche épaisse sur la poussière', 'De l’eau laissée à tremper', 'Du produit pour sabots'],
          0,
          'Un entretien raisonnable nettoie et nourrit sans saturer le cuir ni masquer une faiblesse.'
        ),
        Q(
          'Quel défaut doit conduire à signaler le filet plutôt qu’à le remettre en service ?',
          ['Une couture ouverte ou un cuir fissuré près d’une boucle', 'Une légère trace de poussière', 'Une rêne rangée en boucle', 'Un mors rincé'],
          0,
          'Une pièce fragilisée peut rompre. Elle doit être contrôlée et réparée ou remplacée par une personne compétente.'
        ),
        Q(
          'Après remontage, comment valide-t-on le filet ?',
          ['On vérifie le sens des pièces, les boucles, les passants et les réglages', 'On le pose au sol', 'On serre toutes les boucles au dernier trou', 'On enlève les rênes'],
          0,
          'Un contrôle méthodique évite les pièces vrillées, inversées ou mal passées avant la prochaine utilisation.'
        )
      ]
    },
    {
      slug: 'reculer-droit-et-mobiliser',
      titre: 'Reculer droit, épaules et hanches',
      questions: [
        Q(
          'Pour obtenir un reculer droit à pied, le cavalier surveille surtout :',
          ['L’alignement du cheval et le déplacement régulier des membres', 'Uniquement la queue', 'La hauteur du garrot', 'La couleur de la longe'],
          0,
          'Le cheval doit reculer sans pousser ses hanches d’un côté. Une demande légère et un couloir visuel peuvent aider.'
        ),
        Q(
          'Le cheval décale ses hanches à gauche pendant le reculer. Quelle correction est cohérente ?',
          ['Revenir à un pas simple et réorganiser l’alignement avec l’encadrant', 'Tirer plus fort en continu', 'Accélérer le reculer', 'Se placer derrière lui'],
          0,
          'On simplifie l’exercice, restaure le calme et l’alignement, puis redemande peu de pas précis.'
        ),
        Q(
          'Déplacer les épaules signifie principalement :',
          ['Obtenir un mouvement latéral des antérieurs autour de l’arrière-main', 'Faire partir le cheval au galop', 'Déplacer seulement la tête', 'Reculer rapidement'],
          0,
          'La mobilisation des épaules déplace les antérieurs sur le côté, avec contrôle de l’allure et de la position du cheval.'
        ),
        Q(
          'Déplacer les hanches demande notamment :',
          ['Un croisement contrôlé des postérieurs', 'Un saut des deux antérieurs', 'Une traction permanente sur le licol', 'Un mouvement de recul uniquement'],
          0,
          'Le mouvement latéral de l’arrière-main se repère par le déplacement et le croisement des postérieurs.'
        ),
        Q(
          'Pourquoi demande-t-on d’abord un ou deux pas bien exécutés ?',
          ['Pour privilégier compréhension et précision avant la durée', 'Pour fatiguer le cheval plus vite', 'Parce que le cheval ne peut jamais en faire davantage', 'Pour éviter toute récompense'],
          0,
          'Une réponse courte et correcte permet de relâcher au bon moment et de construire progressivement l’exercice.'
        ),
        Q(
          'Quelle position est dangereuse lors d’une mobilisation à pied ?',
          ['Dans la trajectoire directe d’un membre ou collé derrière la croupe', 'À une distance organisée près de l’épaule', 'Face à un espace dégagé', 'Avec une longe pliée en boucles'],
          0,
          'Le cavalier doit anticiper où vont se déplacer les pieds et préserver son espace de sécurité.'
        )
      ]
    },
    {
      slug: 'courbes-et-changements-main',
      titre: 'Courbes et changements de main précis',
      questions: [
        Q(
          'Quelle différence essentielle existe entre une volte et une demi-volte ?',
          ['La volte revient sur la même piste à la même main, la demi-volte change de main', 'La volte se fait toujours au galop', 'La demi-volte ne comporte aucune courbe', 'Les deux changent toujours de main'],
          0,
          'Une volte est un cercle qui ramène sur la même piste. La demi-volte combine une demi-courbe et une ligne permettant de changer de main.'
        ),
        Q(
          'Pour conserver une courbe régulière, le cavalier prépare :',
          ['Son regard, le tracé et un rythme constant avant d’entrer dans la courbe', 'Une traction tardive sur la rêne intérieure', 'Une accélération au milieu', 'Un arrêt avant chaque coin'],
          0,
          'Une courbe se dessine en amont. Le cheval est encadré par des aides coordonnées, sans tourner seulement l’encolure.'
        ),
        Q(
          'Une diagonale bien tracée commence et se termine :',
          ['Aux repères prévus, avec quelques foulées droites dans les coins', 'Au hasard au milieu de la piste', 'Sur un cercle complet', 'En longeant toujours le pare-botte'],
          0,
          'Le cavalier anticipe la sortie du coin, vise son point d’arrivée puis prépare le nouveau tournant.'
        ),
        Q(
          'Pourquoi évite-t-on de couper les coins sans consigne ?',
          ['Parce que cela déforme le tracé et réduit le temps de préparation', 'Parce que le cheval doit toucher le pare-botte', 'Parce que les coins sont interdits', 'Parce que cela change la robe'],
          0,
          'Utiliser le coin améliore la précision et aide à préparer la figure suivante, sans chercher à coller dangereusement à la paroi.'
        ),
        Q(
          'Sur un cercle, le cheval agrandit progressivement le tracé. Quel élément analyser ?',
          ['L’encadrement entre aides intérieures et extérieures ainsi que le regard', 'Seulement la longueur de la crinière', 'La couleur des barres', 'Uniquement la main intérieure'],
          0,
          'Le contrôle du cercle dépend d’aides coordonnées. Une seule rêne ne suffit pas à organiser les épaules et les hanches.'
        ),
        Q(
          'Quel indice montre une figure précise ?',
          ['Le tracé rejoint les repères annoncés dans une allure régulière', 'Le cheval va le plus vite possible', 'Le cavalier regarde le sol', 'La figure est différente à chaque essai'],
          0,
          'La précision associe géométrie, anticipation et stabilité de l’allure.'
        )
      ]
    },
    {
      slug: 'construire-abord-50-60',
      titre: 'Construire un abord à 50–60 cm',
      questions: [
        Q(
          'Quelles sont les trois qualités principales d’un bon abord ?',
          ['Tracé, allure et équilibre', 'Vitesse, force et hauteur', 'Crinière, robe et taille', 'Rênes courtes, talons hauts et regard bas'],
          0,
          'Un abord lisible associe une ligne précise, une allure régulière et un cheval équilibré.'
        ),
        Q(
          'Pourquoi stabilise-t-on l’allure plusieurs foulées avant l’obstacle ?',
          ['Pour éviter une correction brusque au dernier moment', 'Pour empêcher le cheval de voir la barre', 'Pour raccourcir automatiquement le saut', 'Pour supprimer la direction'],
          0,
          'Une allure préparée laisse au cheval et au cavalier le temps d’organiser leur équilibre.'
        ),
        Q(
          'Le cavalier regarde la barre jusqu’à la réception. Quel risque cela favorise ?',
          ['Une trajectoire moins anticipée et un buste qui plonge', 'Un cheval forcément trop lent', 'Une selle qui se dessangle seule', 'Un changement de robe'],
          0,
          'Le regard doit se porter vers la suite du parcours afin de stabiliser le haut du corps et de préparer la direction.'
        ),
        Q(
          'Dans une ligne de petits obstacles, pourquoi garde-t-on la cadence ?',
          ['Pour conserver des foulées régulières sans précipiter', 'Pour accélérer après chaque barre', 'Pour éviter tout contact', 'Pour sauter uniquement avec les mains'],
          0,
          'La cadence stable facilite l’équilibre et la lecture de la ligne. Elle ne signifie pas vitesse maximale.'
        ),
        Q(
          'Après une réception déséquilibrée, quelle décision est la plus sûre ?',
          ['Se rééquilibrer et reprendre le contrôle avant l’obstacle suivant', 'Accélérer pour rattraper le temps', 'Tourner brutalement', 'Lâcher les rênes'],
          0,
          'La qualité du parcours vient après la sécurité. On réorganise allure et trajectoire avant de poursuivre.'
        ),
        Q(
          'Le cheval s’arrête devant un obstacle. Quelle réponse pédagogique convient ?',
          ['Analyser l’abord avec l’enseignant et revenir sur un exercice adapté', 'Punir immédiatement', 'Augmenter la hauteur', 'Repartir plus vite sans corriger le tracé'],
          0,
          'Un arrêt peut avoir plusieurs causes. L’encadrant aide à identifier la préparation, la confiance ou une gêne éventuelle.'
        )
      ]
    }
  ]
};
