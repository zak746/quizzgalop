/** Quiz complémentaires originaux, alignés sur les modules du programme officiel FFE. */
const Q = (q, options, bonne = 0, extra = {}) => ({ q, options, bonne, ...extra });
const visuel = (n, q, alt) => ({ image:`/assets/visuel-g${n}-${['corps','pansage','serpentine','galop','squelette','pied','aplombs'][n-1]}.webp`, imageAlt:alt, explication:q });

export const EXTRA_QUIZZES = {
  1: [
    { slug:'comportement-et-sens', titre:'Comportement et sens du cheval', questions:[
      Q('Quelle attitude du cavalier est la plus rassurante ?', ['Rester visible et approcher calmement par le côté','Arriver en courant par derrière','Faire de grands gestes','Se cacher derrière le cheval']),
      Q('Des oreilles plaquées en arrière peuvent signaler :',['De l’inconfort ou une menace','Un sommeil profond','Une demande de nourriture uniquement','Toujours de la joie']),
      Q('Pourquoi parle-t-on avant de toucher un cheval ?',['Pour signaler sa présence','Pour le faire avancer','Pour remplacer le licol','Pour tester son audition']),
      Q('Le cheval voit difficilement :',['Juste derrière lui et très près devant son front','Uniquement à droite','Uniquement la nuit','Seulement les couleurs claires']),
      Q('Un cheval détendu peut notamment :',['Souffler et garder une posture souple','Plaquer ses oreilles et fouailler','Taper du pied sans arrêt','Contracter tout son corps'])
    ]},
    { slug:'licol-et-attache', titre:'Licol, conduite et attache', questions:[
      Q('Avant de mettre le licol, il faut :',['Aborder et prévenir le cheval','Se placer derrière lui','Lancer la longe autour du cou','Fermer la porte sans regarder']),
      Q('Pour mener au pas, on se place généralement :',['À hauteur de l’épaule','Juste derrière la croupe','Très loin devant','Sous l’encolure']),
      Q('La longe ne doit jamais être :',['Enroulée autour de la main','Tenue avec les deux mains','Pliée en boucles','Reliée au licol']),
      Q('Le nœud d’attache recherché doit :',['Pouvoir se défaire rapidement','Être impossible à ouvrir','Être placé au ras du sol','Serrer le licol']),
      Q('Pour arrêter le cheval en main, on :',['Ralentit, se redresse et donne un signal clair','Tire brutalement en arrière','Passe devant ses pieds','Lâche la longe'])
    ]},
    { slug:'position-et-aides', titre:'Position et aides élémentaires', questions:[
      Q('Les aides naturelles comprennent principalement :',['Mains, jambes, assiette et voix','Cravache et éperons uniquement','Selle et filet','Barres et plots']),
      Q('Pour regarder sa trajectoire, le cavalier tourne d’abord :',['Le regard et la tête sans se tordre','Les épaules au maximum','Les talons vers l’extérieur','Les mains vers le ciel']),
      Q('Au pas, une position stable garde :',['Le buste grandi et les épaules relâchées','Les genoux serrés fortement','Les pieds sortis des étriers','Le regard au sol']),
      Q('Pour demander d’avancer, l’aide principale est :',['Une action progressive des jambes','Une traction des deux rênes','Un mouvement brusque du buste','Le regard vers l’arrière']),
      Q('Après une réponse correcte, il faut :',['Céder et récompenser','Maintenir toutes les aides','Augmenter la demande','Changer immédiatement de consigne'])
    ]}
  ],
  2: [
    { slug:'aliments-et-eau', titre:'Aliments et besoins en eau', questions:[
      Q('Quel élément doit rester disponible en permanence ?', ['Une eau propre et fraîche','Des friandises','Des céréales à volonté','Du pain']),
      Q('Le foin appartient à la famille :',['Des fourrages','Des concentrés','Des minéraux','Des médicaments']),
      Q('La paille sert surtout :',['De litière, même si elle peut être grignotée','De ration complète','À remplacer l’eau','À graisser les pieds']),
      Q('Pourquoi vérifier un abreuvoir ?',['Pour contrôler propreté et fonctionnement','Pour choisir la robe du cheval','Pour régler la selle','Pour mesurer le trot']),
      Q('Une distribution d’aliment se fait :',['Selon les consignes de l’écurie et sans entrer en conflit avec les chevaux','Sans regarder les chevaux','En donnant la même quantité à tous','Avant de remplir l’eau'])
    ]},
    { slug:'sabot-et-membres', titre:'Parties du sabot et des membres', questions:[
      Q('La partie visible et dure du sabot s’appelle :',['La paroi','La sole','La fourchette','Le paturon']),
      Q('Sous le pied, la structure en V est :',['La fourchette','Le canon','Le boulet','Le talon du cavalier']),
      Q('Le boulet est :',['Une articulation au-dessus du paturon','Une partie de la tête','Une brosse','Une pièce du filet']),
      Q('Le jarret appartient :',['Au membre postérieur','À la tête','Au membre antérieur uniquement','Au sabot antérieur']),
      Q('Avant de curer un pied, on se place :',['Près du membre, orienté vers l’arrière du cheval','À genoux sous le ventre','Face au sabot','Derrière la croupe'])
    ]},
    { slug:'figures-et-priorites', titre:'Figures et règles de circulation', questions:[
      Q('Sur l’illustration, quel tracé change plusieurs fois d’incurvation ?', ['La serpentine','La volte','La ligne droite','L’arrêt'],0,visuel(3,'La serpentine alterne des courbes symétriques.','Carrière vue du dessus avec tracé de serpentine')),
      Q('Une volte est :',['Un petit cercle','Une diagonale','Un arrêt','Un passage de coin à coin']),
      Q('Un doubler dans la longueur suit :',['Une ligne parallèle aux grands côtés','Une courbe fermée','La piste entière','Une diagonale']),
      Q('Lors d’un croisement face à face, on applique généralement :',['Gauche contre gauche','Droite contre droite','Le plus rapide au centre','Aucune règle']),
      Q('Pour changer de main, on peut utiliser :',['Une diagonale','Une volte complète','Un cercle complet','Un arrêt seul'])
    ]}
  ],
  3: [
    { slug:'vie-sociale-du-cheval', titre:'Vie sociale et besoins du cheval', questions:[
      Q('Dans un groupe, les chevaux établissent :',['Des relations, affinités et une hiérarchie','Une égalité parfaite sans interaction','Un isolement permanent','Un ordre basé uniquement sur la taille']),
      Q('Le toilettage mutuel participe :',['Aux liens sociaux','À la ferrure','À la digestion','Au réglage du filet']),
      Q('Un cheval est naturellement :',['Un animal social et mobile','Un prédateur solitaire','Un animal nocturne immobile','Un ruminant']),
      Q('L’accès au mouvement contribue :',['Au bien-être physique et mental','Uniquement à user les fers','À supprimer le besoin de fourrage','À remplacer les contacts sociaux']),
      Q('Observer un groupe demande de :',['Regarder les interactions sans intervenir inutilement','Se placer au milieu des chevaux','Distribuer des friandises au hasard','Séparer tous les individus'])
    ]},
    { slug:'pied-et-fer', titre:'Le pied et le fer', questions:[
      Q('La sole se situe :',['Sous le sabot','Sur le front','Au-dessus du genou','Dans la bouche']),
      Q('Les lacunes bordent :',['La fourchette','Le garrot','La crinière','Le boulet']),
      Q('Le fer est fixé sur :',['La corne insensible de la paroi','La fourchette','La sole vive','Le paturon']),
      Q('Après le travail, on vérifie notamment :',['Chaleur, cailloux et état de la corne','La couleur du tapis','Le nombre de crins','La longueur des rênes']),
      Q('Un fer qui bouge doit être :',['Signalé rapidement à un responsable','Resserré par le cavalier avec n’importe quel outil','Ignoré','Retiré en tirant dessus'])
    ]},
    { slug:'diagonal-pied-et-parcours', titre:'Diagonal, bon pied et parcours', questions:[
      Q('Sur l’illustration, quel tracé aide à travailler précision et changements d’incurvation ?', ['La serpentine','La piste uniquement','Le reculer','Le montoir'],0,visuel(3,'La serpentine exige anticipation et changement d’incurvation.','Tracé de serpentine dans une carrière')),
      Q('Au trot enlevé, on se lève généralement avec :',['L’antérieur extérieur','L’antérieur intérieur','Les deux antérieurs','Le postérieur intérieur seulement']),
      Q('Pour changer de diagonal, on reste assis :',['Un temps de plus','Dix foulées','Jamais','Jusqu’à l’arrêt']),
      Q('À main droite, le cheval galope normalement :',['À droite','À gauche','Toujours désuni','Sans temps de suspension']),
      Q('Sur un petit parcours, la priorité est :',['Contrôle, tracé et équilibre','Vitesse maximale','Nombre de coups de talon','Hauteur des mains'])
    ]}
  ],
  4: [
    { slug:'constantes-et-sante', titre:'Constantes et signes de santé', questions:[
      Q('Un changement brutal de comportement peut indiquer :',['Un inconfort ou un problème de santé','Une nouvelle robe','Une meilleure condition','Toujours de la fatigue normale']),
      Q('La température se mesure avec :',['Un thermomètre adapté','Un cure-pied','Une étrille','Un ruban de poids']),
      Q('Une fréquence respiratoire s’observe de préférence :',['Au repos','Juste après un galop','Pendant un transport','Pendant le pansage énergique']),
      Q('Des muqueuses très pâles ou anormales doivent être :',['Signalées immédiatement','Ignorées si le cheval mange','Nettoyées avec une brosse','Masquées avant le travail']),
      Q('En cas de doute, le cavalier doit :',['Prévenir l’enseignant ou le responsable','Diagnostiquer seul','Faire travailler davantage','Donner un médicament'])
    ]},
    { slug:'protections-et-transport', titre:'Protections de travail et transport', questions:[
      Q('Une protection bien posée doit :',['Tenir sans comprimer ni tourner','Serrer le tendon au maximum','Couvrir le sabot entier','Être mouillée']),
      Q('Avant un transport, on vérifie :',['État du véhicule, fermetures et protections','Seulement la couleur du licol','Uniquement la ration','La longueur de la crinière']),
      Q('Le protège-boulet se place :',['Sur le membre postérieur','Sur la tête','Sur le canon antérieur uniquement','Sous la selle']),
      Q('Après la séance, retirer les protections permet :',['D’inspecter les membres','D’éviter de desseller','De remplacer le pansage','De refroidir le mors']),
      Q('Une guêtre tournée ou pleine de sable peut :',['Provoquer frottement et gêne','Améliorer l’équilibre','Rendre le cheval plus rapide','Protéger davantage'])
    ]},
    { slug:'incurvation-et-controle', titre:'Incurvation, contact et contrôle', questions:[
      Q('Sur cette décomposition, quel indice caractérise le galop après ses trois temps ?',['Un temps de suspension où aucun pied ne touche le sol','Deux antérieurs posés ensemble','Quatre appuis successifs sans suspension','Deux bipèdes diagonaux alternés'],0,visuel(4,'Après les trois temps du galop vient une phase de suspension, visible lorsque les quatre membres quittent le sol.','Décomposition générative des trois temps du galop et de la phase de suspension')),
      Q('L’incurvation concerne :',['L’ensemble du corps sur la courbe','La tête uniquement','Les postérieurs uniquement','Le regard du cavalier']),
      Q('Un contact moelleux est :',['Stable, élastique et sans traction continue','Très fort','Absent en permanence','Alterné par secousses']),
      Q('Pour déplacer les hanches, on utilise notamment :',['Une jambe isolée adaptée','Les deux rênes tirées','Le regard seul','Le talon extérieur levé']),
      Q('Sur un parcours, contrôler l’allure signifie :',['Conserver rythme et équilibre adaptés','Ralentir avant chaque barre','Accélérer dans tous les virages','Rester toujours au trot'])
    ]}
  ],
  5: [
    { slug:'robes-et-signalement', titre:'Robes, signalement et identification', questions:[
      Q('Quel élément relève du signalement descriptif ?', ['Les marques et particularités visibles','La couleur de la selle','Le nom du cavalier','Le type de carrière']),
      Q('Un cheval pie présente :',['De grandes plages blanches et colorées','Uniquement des poils gris','Des crins forcément noirs','Aucune marque']),
      Q('La puce électronique contribue à :',['Identifier l’équidé','Mesurer sa température','Calculer sa ration','Choisir sa discipline']),
      Q('Le numéro SIRE est :',['Un identifiant administratif','Une note de dressage','Une taille de mors','Un type de robe']),
      Q('Le livret doit correspondre :',['Au cheval présenté','Au propriétaire uniquement','À la selle','Au club'])
    ]},
    { slug:'bandes-et-embouchures', titre:'Bandes et embouchures', questions:[
      Q('Une bande de repos se pose avec :',['Une tension régulière et sans pli','Une forte tension au boulet','Des plis volontaires','Une partie mouillée']),
      Q('Le coton sous une bande de repos sert à :',['Répartir la pression et protéger','Fixer le fer','Nettoyer le sabot','Raccourcir le canon']),
      Q('Un mors à aiguilles aide notamment :',['À encadrer latéralement la bouche','À supprimer toute action de main','À remplacer la muserolle','À attacher le cheval']),
      Q('Le choix d’une embouchure dépend :',['Du cheval, du cavalier et du travail','De la couleur du tapis','Uniquement du prix','Uniquement de la discipline']),
      Q('Après usage, le mors doit être :',['Rincé et contrôlé','Laissé sale sur le filet','Graisser avec du savon de selle','Posé au sol'])
    ]},
    { slug:'cadence-cession-et-cross', titre:'Cadence, cession et terrain varié', questions:[
      Q('La cadence désigne :',['Le rythme des foulées','La vitesse maximale','La longueur des rênes','La hauteur du saut']),
      Q('Dans une cession à la jambe, le cheval se déplace :',['Vers l’avant et de côté','Uniquement en arrière','Sans croiser les membres','Sur place']),
      Q('La flexion légère est généralement :',['Opposée au sens du déplacement','Toujours vers le déplacement','Absente dans tous les cas','Fixée par la rêne extérieure']),
      Q('Sur terrain varié, le cavalier adapte :',['Équilibre, allure et trajectoire','Uniquement la longueur des étriers','La couleur des protections','La main intérieure']),
      Q('Avant un obstacle de cross, on recherche :',['Un galop équilibré et un tracé lisible','Une accélération tardive','Un cheval très près du précédent','Une rêne intérieure forte'])
    ]}
  ],
  6: [
    { slug:'symptomes-et-boiteries', titre:'Symptômes, maladies et boiteries', questions:[
      Q('Sur l’illustration du pied, quelle zone doit rester souple et saine ?', ['La fourchette','Le canon','Le garrot','Le chanfrein'],0,visuel(6,'Une fourchette saine participe au fonctionnement du pied.','Vue générative du dessous du sabot avec flèche vers la fourchette')),
      Q('Une boiterie est :',['Une irrégularité de locomotion liée à une gêne ou douleur possible','Une allure apprise','Une robe','Un défaut de pansage']),
      Q('Face à une boiterie, il faut :',['Arrêter et prévenir un responsable','Continuer pour échauffer','Donner un médicament seul','Sauter pour vérifier']),
      Q('Un membre chaud et gonflé doit être :',['Comparé, observé et signalé','Caché sous une bande serrée','Ignoré','Massé fortement sans avis']),
      Q('La prévention passe notamment par :',['Observation quotidienne, soins et travail adapté','Une ration identique pour tous','Des séances toujours intenses','L’absence de récupération'])
    ]},
    { slug:'etat-corporel', titre:'État corporel et besoins variables', questions:[
      Q('Pourquoi complète-t-on l’observation de l’état corporel par une palpation ?',['Pour mieux apprécier les dépôts graisseux sous le poil','Pour mesurer la taille du squelette','Pour identifier la robe','Pour contrôler uniquement la température'],0,{explication:'Un poil long ou dense peut masquer les reliefs : la palpation complète l’observation des côtes, du garrot, de l’encolure et de la croupe.'}),
      Q('Les besoins énergétiques augmentent souvent avec :',['Le travail, le froid ou certains états physiologiques','La couleur de robe','Le nombre de brosses','La taille du box uniquement']),
      Q('Une ration se modifie :',['Progressivement et avec suivi','Brutalement la veille d’un concours','Sans mesurer le cheval','Chaque jour au hasard']),
      Q('Le fourrage apporte en priorité :',['Fibres et temps de mastication','Uniquement des vitamines','De l’eau uniquement','Des protéines animales']),
      Q('Un cheval trop maigre ou trop gras nécessite :',['Une analyse globale et un avis compétent','Plus de friandises','Moins d’eau','Un travail intense immédiat'])
    ]},
    { slug:'contre-galop-et-longe', titre:'Contre-galop, cession et longe', questions:[
      Q('Au contre-galop, le cheval :',['Conserve volontairement le pied extérieur à la courbe','Est forcément désuni','Change de pied à chaque foulée','Galope sans équilibre']),
      Q('L’exercice développe notamment :',['Équilibre et contrôle des épaules','Vitesse maximale','Immobilité','Souplesse de la crinière']),
      Q('À la longe, déplacer le cercle demande :',['Une communication claire et un cheval qui reste équilibré','De tirer le cheval vers soi','De courir derrière lui','D’enrouler la longe']),
      Q('Pour sauter à la longe, on prépare :',['Un dispositif simple, progressif et sécurisé','Un obstacle maximal','Une longe très courte','Un départ sans échauffement']),
      Q('Si le cheval accélère et tombe sur les épaules pendant une extension d’encolure, il faut d’abord :',['Rétablir un rythme calme et l’équilibre avant de redemander l’étirement','Allonger davantage la longe','Bloquer la main en continu','Augmenter immédiatement le diamètre du cercle'],0,{explication:'L’étirement reste utile seulement si le cheval conserve activité, cadence et équilibre ; on réorganise d’abord ces paramètres.'})
    ]}
  ],
  7: [
    { slug:'livret-et-transport', titre:'Livret, signalement et transport', questions:[
      Q('Sur l’illustration, quel défaut correspond à des pinces orientées vers l’extérieur ?', ['Panard','Cagneux','Campé','Sous lui'],0,visuel(7,'Un cheval panard présente des pinces tournées vers l’extérieur.','Antérieurs vus de face avec flèches vers l’extérieur')),
      Q('Vérifier un signalement consiste à :',['Comparer le cheval aux éléments de son document','Lire seulement son nom','Mesurer uniquement sa taille','Contrôler la selle']),
      Q('Pendant un long transport, on surveille :',['Ventilation, température, hydratation et comportement','Uniquement les protections','La couleur du véhicule','Le score du cavalier']),
      Q('Le stress de transport peut influencer :',['Comportement, transit et fatigue','La robe définitive','Le numéro SIRE','La taille du sabot']),
      Q('À l’arrivée, on prévoit :',['Débarquement calme, observation et récupération','Travail intense immédiat','Aliment concentré en grande quantité','Isolement sans eau'])
    ]},
    { slug:'bandes-et-longues-renes', titre:'Bandes de polo et longues rênes', questions:[
      Q('Une bande de polo doit être posée :',['Avec tension uniforme et tours réguliers','Plus serrée sur le tendon','Avec des plis','Sur un membre humide']),
      Q('La fermeture se place de façon à :',['Limiter le risque d’accrochage et tenir correctement','Appuyer sur le tendon','Toucher le sol','Couvrir le sabot']),
      Q('Aux longues rênes, le meneur doit :',['Garder une position sûre et des lignes organisées','Enrouler les rênes autour des mains','Rester collé aux postérieurs','Tirer en continu']),
      Q('Le travail en cercle précède souvent :',['Des lignes droites et exercices plus complexes','Le saut maximal','Le transport','La mise au pré']),
      Q('Les longues rênes permettent notamment :',['De travailler direction, transitions et mobilisation sans cavalier','De remplacer tous les soins','De ferrer le cheval','De mesurer la ration'])
    ]},
    { slug:'rectitude-et-epaule-en-dedans', titre:'Rectitude et épaule en dedans', questions:[
      Q('La rectitude recherche :',['Épaules et hanches alignées sur la trajectoire','Une encolure droite uniquement','Une flexion maximale','Une vitesse constante']),
      Q('Dans l’épaule en dedans, les épaules sont :',['Déplacées à l’intérieur tandis que les hanches restent sur la piste','Sur la piste avec les hanches dedans','Toujours à l’extérieur','Immobiles']),
      Q('Cet exercice améliore notamment :',['Souplesse, engagement et contrôle latéral','Vitesse de pointe','Hauteur du saut uniquement','Immobilité du dos']),
      Q('La mise sur la main résulte :',['De l’impulsion reçue par un contact juste','D’une traction des rênes','D’un enrênement serré','D’une nuque forcée']),
      Q('Une transition galop-pas réussie conserve :',['Équilibre, rectitude et réponse aux aides','Une accélération avant l’arrêt','Un passage obligatoire par le trot long','Les épaules décalées'])
    ]}
  ]
};
