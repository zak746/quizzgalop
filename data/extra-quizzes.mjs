/** Quiz complémentaires originaux, alignés sur les modules du programme officiel FFE. */
const positionStable = (texte, taille) => Array.from(texte).reduce(
  (empreinte, caractere) => (empreinte * 31 + caractere.codePointAt(0)) >>> 0,
  2166136261
) % taille;

const Q = (q, options, explication, bonne = 0, extra = {}) => {
  const decalage = positionStable(q, options.length);
  const optionsReparties = options.map((_, index) => options[(index + decalage) % options.length]);
  const bonneRepartie = (bonne - decalage + options.length) % options.length;
  return { q, options:optionsReparties, bonne:bonneRepartie, ...extra, explication };
};
const visuel = (n, q, alt) => ({ image:`/assets/visuel-g${n}-${['corps','pansage','serpentine','galop','squelette','pied','aplombs'][n-1]}.webp`, imageAlt:alt, explication:q });

export const EXTRA_QUIZZES = {
  1: [
    { slug:'comportement-et-sens', titre:'Comportement et sens du cheval', questions:[
      Q('Quelle attitude du cavalier est la plus rassurante ?', ['Rester visible et approcher calmement par le côté','Arriver en courant par derrière','Faire de grands gestes','Se cacher derrière le cheval'], 'Une approche calme, visible et latérale permet au cheval d’identifier le cavalier sans être surpris.'),
      Q('Des oreilles plaquées en arrière peuvent signaler :',['De l’inconfort ou une menace','Un sommeil profond','Une demande de nourriture uniquement','Toujours de la joie'], 'Des oreilles fortement couchées accompagnent souvent une tension, une douleur ou un avertissement adressé à l’entourage.'),
      Q('Pourquoi parle-t-on avant de toucher un cheval ?',['Pour signaler sa présence','Pour le faire avancer','Pour remplacer le licol','Pour tester son audition'], 'La voix prévient le cheval de l’approche du cavalier, particulièrement lorsqu’il ne peut pas encore le voir.'),
      Q('Le cheval voit difficilement :',['Juste derrière lui et très près devant son front','Uniquement à droite','Uniquement la nuit','Seulement les couleurs claires'], 'La position latérale de ses yeux laisse deux petites zones aveugles : derrière la croupe et immédiatement devant le front.'),
      Q('Un cheval détendu peut notamment :',['Souffler et garder une posture souple','Plaquer ses oreilles et fouailler','Taper du pied sans arrêt','Contracter tout son corps'], 'Une respiration relâchée, des muscles souples et une attitude disponible sont des signes habituels de détente.')
    ]},
    { slug:'licol-et-attache', titre:'Licol, conduite et attache', questions:[
      Q('Avant de mettre le licol, il faut :',['Aborder et prévenir le cheval','Se placer derrière lui','Lancer la longe autour du cou','Fermer la porte sans regarder'], 'Prévenir puis aborder à l’épaule évite l’effet de surprise et permet de contrôler la réaction du cheval.'),
      Q('Pour mener au pas, on se place généralement :',['À hauteur de l’épaule','Juste derrière la croupe','Très loin devant','Sous l’encolure'], 'À hauteur de l’épaule, le cavalier reste visible, guide la direction et ne se fait ni dépasser ni traîner.'),
      Q('La longe ne doit jamais être :',['Enroulée autour de la main','Tenue avec les deux mains','Pliée en boucles','Reliée au licol'], 'Une longe enroulée peut se resserrer brutalement si le cheval tire et provoquer une grave blessure à la main.'),
      Q('Le nœud d’attache recherché doit :',['Pouvoir se défaire rapidement','Être impossible à ouvrir','Être placé au ras du sol','Serrer le licol'], 'Un nœud d’attache sécurisé se libère rapidement en cas de panique afin d’éviter que le cheval reste prisonnier.'),
      Q('Pour arrêter le cheval en main, on :',['Ralentit, se redresse et donne un signal clair','Tire brutalement en arrière','Passe devant ses pieds','Lâche la longe'], 'Le ralentissement du pas, la posture du meneur et un signal mesuré préparent un arrêt calme et droit.')
    ]},
    { slug:'position-et-aides', titre:'Position et aides élémentaires', questions:[
      Q('Les aides naturelles comprennent principalement :',['Mains, jambes, assiette et voix','Cravache et éperons uniquement','Selle et filet','Barres et plots'], 'Les mains, les jambes, le poids du corps et la voix appartiennent au cavalier et transmettent directement ses demandes.'),
      Q('Pour regarder sa trajectoire, le cavalier tourne d’abord :',['Le regard et la tête sans se tordre','Les épaules au maximum','Les talons vers l’extérieur','Les mains vers le ciel'], 'Orienter d’abord le regard anticipe le tracé tout en laissant le bassin et les épaules accompagner naturellement le mouvement.'),
      Q('Au pas, une position stable garde :',['Le buste grandi et les épaules relâchées','Les genoux serrés fortement','Les pieds sortis des étriers','Le regard au sol'], 'Un buste vertical mais souple permet d’absorber le mouvement du pas sans se crisper ni perdre l’équilibre.'),
      Q('Pour demander d’avancer, l’aide principale est :',['Une action progressive des jambes','Une traction des deux rênes','Un mouvement brusque du buste','Le regard vers l’arrière'], 'Les jambes agissent progressivement près de la sangle ; elles cessent dès que le cheval répond en avançant.'),
      Q('Après une réponse correcte, il faut :',['Céder et récompenser','Maintenir toutes les aides','Augmenter la demande','Changer immédiatement de consigne'], 'Céder rend la bonne réponse confortable et aide le cheval à associer précisément la demande à l’action attendue.')
    ]}
  ],
  2: [
    { slug:'aliments-et-eau', titre:'Aliments et besoins en eau', questions:[
      Q('Quel élément doit rester disponible en permanence ?', ['Une eau propre et fraîche','Des friandises','Des céréales à volonté','Du pain'], 'Le cheval doit pouvoir boire régulièrement une eau saine afin de couvrir ses besoins et de soutenir son transit digestif.'),
      Q('Le foin appartient à la famille :',['Des fourrages','Des concentrés','Des minéraux','Des médicaments'], 'Le foin est une herbe conservée riche en fibres : il constitue donc un fourrage et non un aliment concentré.'),
      Q('La paille sert surtout :',['De litière, même si elle peut être grignotée','De ration complète','À remplacer l’eau','À graisser les pieds'], 'En box, la paille forme principalement une litière absorbante ; sa valeur alimentaire ne permet pas d’en faire une ration complète.'),
      Q('Pourquoi vérifier un abreuvoir ?',['Pour contrôler propreté et fonctionnement','Pour choisir la robe du cheval','Pour régler la selle','Pour mesurer le trot'], 'Un abreuvoir propre mais bloqué, ou fonctionnel mais souillé, peut empêcher le cheval de boire suffisamment.'),
      Q('Une distribution d’aliment se fait :',['Selon les consignes de l’écurie et sans entrer en conflit avec les chevaux','Sans regarder les chevaux','En donnant la même quantité à tous','Avant de remplir l’eau'], 'Chaque cheval reçoit une ration définie ; respecter l’ordre et les consignes limite les erreurs et les conflits autour de la nourriture.')
    ]},
    { slug:'sabot-et-membres', titre:'Parties du sabot et des membres', questions:[
      Q('La partie visible et dure du sabot s’appelle :',['La paroi','La sole','La fourchette','Le paturon'], 'La paroi est l’enveloppe cornée externe du sabot ; elle porte une grande partie du poids du cheval.'),
      Q('Sous le pied, la structure en V est :',['La fourchette','Le canon','Le boulet','Le talon du cavalier'], 'La fourchette, reconnaissable à sa forme en V, contribue à l’amortissement et au fonctionnement du pied.'),
      Q('Le boulet est :',['Une articulation au-dessus du paturon','Une partie de la tête','Une brosse','Une pièce du filet'], 'Le boulet relie le canon au paturon et joue un rôle important dans l’amortissement de la locomotion.'),
      Q('Le jarret appartient :',['Au membre postérieur','À la tête','Au membre antérieur uniquement','Au sabot antérieur'], 'Le jarret est l’articulation anguleuse du membre postérieur, située entre la jambe et le canon.'),
      Q('Avant de curer un pied, on se place :',['Près du membre, orienté vers l’arrière du cheval','À genoux sous le ventre','Face au sabot','Derrière la croupe'], 'Rester près du membre, accroupi sans se mettre à genoux, permet d’accompagner un mouvement et de s’écarter rapidement.')
    ]},
    { slug:'figures-et-priorites', titre:'Figures et règles de circulation', questions:[
      Q('Sur l’illustration, quel tracé change plusieurs fois d’incurvation ?', ['La serpentine','La volte','La ligne droite','L’arrêt'], 'La serpentine enchaîne plusieurs boucles : l’incurvation s’inverse à chaque franchissement de la ligne du milieu.',0,visuel(3,'La serpentine alterne des courbes symétriques.','Carrière vue du dessus avec tracé de serpentine')),
      Q('Une volte est :',['Un petit cercle','Une diagonale','Un arrêt','Un passage de coin à coin'], 'La volte quitte la piste pour décrire un cercle de petit diamètre avant de revenir au point de départ.'),
      Q('Un doubler dans la longueur suit :',['Une ligne parallèle aux grands côtés','Une courbe fermée','La piste entière','Une diagonale'], 'Le doubler dans la longueur traverse la carrière sur une ligne droite parallèle aux deux grands côtés.'),
      Q('Lors d’un croisement face à face, on applique généralement :',['Gauche contre gauche','Droite contre droite','Le plus rapide au centre','Aucune règle'], 'La règle « gauche contre gauche » organise les croisements : chaque cavalier garde l’autre sur sa gauche.'),
      Q('Pour changer de main, on peut utiliser :',['Une diagonale','Une volte complète','Un cercle complet','Un arrêt seul'], 'Traverser la carrière par une diagonale conduit le cheval sur la piste dans le sens opposé, donc à l’autre main.')
    ]}
  ],
  3: [
    { slug:'vie-sociale-du-cheval', titre:'Vie sociale et besoins du cheval', questions:[
      Q('Dans un groupe, les chevaux établissent :',['Des relations, affinités et une hiérarchie','Une égalité parfaite sans interaction','Un isolement permanent','Un ordre basé uniquement sur la taille'], 'Les interactions répétées construisent des affinités et un ordre social qui ne dépend pas seulement de la force ou de la taille.'),
      Q('Le toilettage mutuel participe :',['Aux liens sociaux','À la ferrure','À la digestion','Au réglage du filet'], 'Lorsque deux chevaux se grattent réciproquement, ils entretiennent leurs relations sociales tout en atteignant des zones difficiles.'),
      Q('Un cheval est naturellement :',['Un animal social et mobile','Un prédateur solitaire','Un animal nocturne immobile','Un ruminant'], 'À l’état naturel, le cheval vit en groupe et se déplace de nombreuses heures pour chercher eau et nourriture.'),
      Q('L’accès au mouvement contribue :',['Au bien-être physique et mental','Uniquement à user les fers','À supprimer le besoin de fourrage','À remplacer les contacts sociaux'], 'Le mouvement soutient la locomotion, le transit et l’équilibre mental, sans remplacer l’alimentation ni les contacts sociaux.'),
      Q('Observer un groupe demande de :',['Regarder les interactions sans intervenir inutilement','Se placer au milieu des chevaux','Distribuer des friandises au hasard','Séparer tous les individus'], 'Observer à distance laisse apparaître les comportements naturels et évite de provoquer compétition ou déplacement des chevaux.')
    ]},
    { slug:'pied-et-fer', titre:'Le pied et le fer', questions:[
      Q('La sole se situe :',['Sous le sabot','Sur le front','Au-dessus du genou','Dans la bouche'], 'La sole est la surface cornée légèrement concave visible sous le pied, autour de la fourchette.'),
      Q('Les lacunes bordent :',['La fourchette','Le garrot','La crinière','Le boulet'], 'Les lacunes sont les sillons situés de part et d’autre, et au centre, de la fourchette.'),
      Q('Le fer est fixé sur :',['La corne insensible de la paroi','La fourchette','La sole vive','Le paturon'], 'Les clous traversent uniquement la partie insensible de la paroi afin de ne pas atteindre les tissus vivants.'),
      Q('Après le travail, on vérifie notamment :',['Chaleur, cailloux et état de la corne','La couleur du tapis','Le nombre de crins','La longueur des rênes'], 'Curer et toucher les pieds après l’effort aide à repérer corps étrangers, chaleur anormale, fissures ou fer desserré.'),
      Q('Un fer qui bouge doit être :',['Signalé rapidement à un responsable','Resserré par le cavalier avec n’importe quel outil','Ignoré','Retiré en tirant dessus'], 'Un fer instable peut arracher la corne ou blesser le cheval ; son traitement relève d’un responsable et du maréchal-ferrant.')
    ]},
    { slug:'diagonal-pied-et-parcours', titre:'Diagonal, bon pied et parcours', questions:[
      Q('Sur l’illustration, quel tracé aide à travailler précision et changements d’incurvation ?', ['La serpentine','La piste uniquement','Le reculer','Le montoir'], 'Chaque boucle de serpentine impose un tracé précis, puis une inversion progressive de la flexion et de l’incurvation.',0,visuel(3,'La serpentine exige anticipation et changement d’incurvation.','Tracé de serpentine dans une carrière')),
      Q('Au trot enlevé, on se lève généralement avec :',['L’antérieur extérieur','L’antérieur intérieur','Les deux antérieurs','Le postérieur intérieur seulement'], 'Sur le bon diagonal, le cavalier se soulève lorsque l’antérieur extérieur et le postérieur intérieur avancent ensemble.'),
      Q('Pour changer de diagonal, on reste assis :',['Un temps de plus','Dix foulées','Jamais','Jusqu’à l’arrêt'], 'Rester assis pendant un battement supplémentaire inverse le moment où le cavalier se lève dans le cycle du trot.'),
      Q('À main droite, le cheval galope normalement :',['À droite','À gauche','Toujours désuni','Sans temps de suspension'], 'À main droite, l’antérieur droit termine la séquence des appuis : on dit que le cheval galope à droite.'),
      Q('Sur un petit parcours, la priorité est :',['Contrôle, tracé et équilibre','Vitesse maximale','Nombre de coups de talon','Hauteur des mains'], 'Un tracé anticipé, une allure contrôlée et un équilibre stable permettent d’aborder chaque difficulté en sécurité.')
    ]}
  ],
  4: [
    { slug:'constantes-et-sante', titre:'Constantes et signes de santé', questions:[
      Q('Un changement brutal de comportement peut indiquer :',['Un inconfort ou un problème de santé','Une nouvelle robe','Une meilleure condition','Toujours de la fatigue normale'], 'Agressivité inhabituelle, abattement ou agitation soudaine peuvent être les premiers signes observables d’une douleur ou d’une maladie.'),
      Q('La température se mesure avec :',['Un thermomètre adapté','Un cure-pied','Une étrille','Un ruban de poids'], 'Seul un thermomètre prévu et correctement utilisé fournit une mesure corporelle exploitable ; les autres outils n’évaluent pas la température.'),
      Q('Une fréquence respiratoire s’observe de préférence :',['Au repos','Juste après un galop','Pendant un transport','Pendant le pansage énergique'], 'La valeur de référence se relève sur un cheval calme au repos, car l’effort, le stress et la chaleur accélèrent la respiration.'),
      Q('Des muqueuses très pâles ou anormales doivent être :',['Signalées immédiatement','Ignorées si le cheval mange','Nettoyées avec une brosse','Masquées avant le travail'], 'La couleur des muqueuses renseigne sur la circulation et l’état général ; une anomalie justifie un avis rapide.'),
      Q('En cas de doute, le cavalier doit :',['Prévenir l’enseignant ou le responsable','Diagnostiquer seul','Faire travailler davantage','Donner un médicament'], 'Le cavalier observe et transmet les signes ; le responsable décide de la conduite à tenir et contacte le vétérinaire si nécessaire.')
    ]},
    { slug:'protections-et-transport', titre:'Protections de travail et transport', questions:[
      Q('Une protection bien posée doit :',['Tenir sans comprimer ni tourner','Serrer le tendon au maximum','Couvrir le sabot entier','Être mouillée'], 'La protection doit rester en place tout en laissant circuler le sang et fonctionner librement les articulations et tendons.'),
      Q('Avant un transport, on vérifie :',['État du véhicule, fermetures et protections','Seulement la couleur du licol','Uniquement la ration','La longueur de la crinière'], 'Plancher, portes, barres, aérations et protections sont contrôlés pour prévenir chute, fuite ou blessure pendant le trajet.'),
      Q('Le protège-boulet se place :',['Sur le membre postérieur','Sur la tête','Sur le canon antérieur uniquement','Sous la selle'], 'Le protège-boulet protège la face interne du boulet postérieur contre les atteintes du membre opposé.'),
      Q('Après la séance, retirer les protections permet :',['D’inspecter les membres','D’éviter de desseller','De remplacer le pansage','De refroidir le mors'], 'Une fois les protections retirées, on peut détecter chaleur, gonflement, irritation ou petite blessure apparue au travail.'),
      Q('Une guêtre tournée ou pleine de sable peut :',['Provoquer frottement et gêne','Améliorer l’équilibre','Rendre le cheval plus rapide','Protéger davantage'], 'Le sable emprisonné et les bords déplacés frottent la peau ; une guêtre mal placée peut donc blesser au lieu de protéger.')
    ]},
    { slug:'incurvation-et-controle', titre:'Incurvation, contact et contrôle', questions:[
      Q('Sur cette décomposition, quel indice caractérise le galop après ses trois temps ?',['Un temps de suspension où aucun pied ne touche le sol','Deux antérieurs posés ensemble','Quatre appuis successifs sans suspension','Deux bipèdes diagonaux alternés'], 'Après les trois temps du galop, les quatre membres quittent brièvement le sol : cette suspension précède la foulée suivante.',0,visuel(4,'Après les trois temps du galop vient une phase de suspension, visible lorsque les quatre membres quittent le sol.','Décomposition générative des trois temps du galop et de la phase de suspension')),
      Q('L’incurvation concerne :',['L’ensemble du corps sur la courbe','La tête uniquement','Les postérieurs uniquement','Le regard du cavalier'], 'Dans une incurvation juste, la flexion se répartit de la nuque à la queue selon le rayon de la courbe.'),
      Q('Un contact moelleux est :',['Stable, élastique et sans traction continue','Très fort','Absent en permanence','Alterné par secousses'], 'Le contact suit les mouvements de l’encolure avec élasticité : il informe et encadre sans bloquer ni tirer.'),
      Q('Pour déplacer les hanches, on utilise notamment :',['Une jambe isolée adaptée','Les deux rênes tirées','Le regard seul','Le talon extérieur levé'], 'Une jambe reculée agit sur les hanches tandis que les autres aides maintiennent l’impulsion, l’équilibre et les épaules.'),
      Q('Sur un parcours, contrôler l’allure signifie :',['Conserver rythme et équilibre adaptés','Ralentir avant chaque barre','Accélérer dans tous les virages','Rester toujours au trot'], 'Le contrôle consiste à maintenir l’allure, la cadence et l’équilibre nécessaires au tracé, pas à changer de vitesse sans cesse.')
    ]}
  ],
  5: [
    { slug:'robes-et-signalement', titre:'Robes, signalement et identification', questions:[
      Q('Quel élément relève du signalement descriptif ?', ['Les marques et particularités visibles','La couleur de la selle','Le nom du cavalier','Le type de carrière'], 'Le signalement décrit les caractères propres au cheval, comme sa robe, ses marques blanches, épis et particularités permanentes.'),
      Q('Un cheval pie présente :',['De grandes plages blanches et colorées','Uniquement des poils gris','Des crins forcément noirs','Aucune marque'], 'Une robe pie associe des plages blanches étendues à des plages d’une autre couleur nettement délimitées.'),
      Q('La puce électronique contribue à :',['Identifier l’équidé','Mesurer sa température','Calculer sa ration','Choisir sa discipline'], 'Le transpondeur porte un numéro unique lu par un appareil et relié aux données d’identification de l’équidé.'),
      Q('Le numéro SIRE est :',['Un identifiant administratif','Une note de dressage','Une taille de mors','Un type de robe'], 'Le numéro SIRE rattache administrativement l’équidé à son dossier dans le système français d’information relatif aux équidés.'),
      Q('Le livret doit correspondre :',['Au cheval présenté','Au propriétaire uniquement','À la selle','Au club'], 'Le document d’identification accompagne un équidé précis ; signalement et numéro de puce doivent correspondre à l’animal contrôlé.')
    ]},
    { slug:'bandes-et-embouchures', titre:'Bandes et embouchures', questions:[
      Q('Une bande de repos se pose avec :',['Une tension régulière et sans pli','Une forte tension au boulet','Des plis volontaires','Une partie mouillée'], 'Des tours réguliers et sans plis répartissent la pression ; un point de compression peut gêner la circulation ou blesser.'),
      Q('Le coton sous une bande de repos sert à :',['Répartir la pression et protéger','Fixer le fer','Nettoyer le sabot','Raccourcir le canon'], 'Le coton matelasse le membre et homogénéise l’appui de la bande sur toute la zone couverte.'),
      Q('Un mors à aiguilles aide notamment :',['À encadrer latéralement la bouche','À supprimer toute action de main','À remplacer la muserolle','À attacher le cheval'], 'Ses branches latérales limitent le coulissement du mors dans la bouche et renforcent l’indication de direction.'),
      Q('Le choix d’une embouchure dépend :',['Du cheval, du cavalier et du travail','De la couleur du tapis','Uniquement du prix','Uniquement de la discipline'], 'Morphologie de la bouche, sensibilité, niveau de dressage et qualité de main déterminent ensemble l’embouchure adaptée.'),
      Q('Après usage, le mors doit être :',['Rincé et contrôlé','Laissé sale sur le filet','Graisser avec du savon de selle','Posé au sol'], 'Rincer le mors retire salive et résidus ; le contrôle révèle arête, usure ou articulation susceptible de pincer.')
    ]},
    { slug:'cadence-cession-et-cross', titre:'Cadence, cession et terrain varié', questions:[
      Q('La cadence désigne :',['Le rythme des foulées','La vitesse maximale','La longueur des rênes','La hauteur du saut'], 'La cadence correspond à la régularité temporelle des foulées ; elle peut rester stable malgré une amplitude différente.'),
      Q('Dans une cession à la jambe, le cheval se déplace :',['Vers l’avant et de côté','Uniquement en arrière','Sans croiser les membres','Sur place'], 'La cession combine propulsion vers l’avant et déplacement latéral, avec croisement des membres du côté intérieur.'),
      Q('La flexion légère est généralement :',['Opposée au sens du déplacement','Toujours vers le déplacement','Absente dans tous les cas','Fixée par la rêne extérieure'], 'Dans la cession, le cheval reste presque droit avec une légère flexion à la nuque opposée à son déplacement latéral.'),
      Q('Sur terrain varié, le cavalier adapte :',['Équilibre, allure et trajectoire','Uniquement la longueur des étriers','La couleur des protections','La main intérieure'], 'Pente, sol, visibilité et obstacles modifient les risques ; le cavalier ajuste donc position, vitesse et ligne suivie.'),
      Q('Avant un obstacle de cross, on recherche :',['Un galop équilibré et un tracé lisible','Une accélération tardive','Un cheval très près du précédent','Une rêne intérieure forte'], 'Un abord régulier, droit et équilibré donne au cheval le temps de lire l’obstacle et d’organiser son saut.')
    ]}
  ],
  6: [
    { slug:'symptomes-et-boiteries', titre:'Symptômes, maladies et boiteries', questions:[
      Q('Sur l’illustration du pied, quelle zone doit rester souple et saine ?', ['La fourchette','Le canon','Le garrot','Le chanfrein'], 'La fourchette saine reste élastique et participe à l’amortissement ainsi qu’au mécanisme de circulation dans le pied.',0,visuel(6,'Une fourchette saine participe au fonctionnement du pied.','Vue générative du dessous du sabot avec flèche vers la fourchette')),
      Q('Une boiterie est :',['Une irrégularité de locomotion liée à une gêne ou douleur possible','Une allure apprise','Une robe','Un défaut de pansage'], 'Une boiterie traduit une locomotion asymétrique ; elle peut révéler une douleur et nécessite d’en rechercher l’origine.'),
      Q('Face à une boiterie, il faut :',['Arrêter et prévenir un responsable','Continuer pour échauffer','Donner un médicament seul','Sauter pour vérifier'], 'Poursuivre l’effort risque d’aggraver la lésion ; le cheval doit être arrêté puis examiné selon les consignes du responsable.'),
      Q('Un membre chaud et gonflé doit être :',['Comparé, observé et signalé','Caché sous une bande serrée','Ignoré','Massé fortement sans avis'], 'Comparer avec le membre opposé précise l’anomalie, mais chaleur et gonflement doivent toujours être transmis avant toute intervention.'),
      Q('La prévention passe notamment par :',['Observation quotidienne, soins et travail adapté','Une ration identique pour tous','Des séances toujours intenses','L’absence de récupération'], 'Le suivi quotidien repère tôt les changements, tandis qu’un entraînement progressif et la récupération limitent les surcharges.')
    ]},
    { slug:'etat-corporel', titre:'État corporel et besoins variables', questions:[
      Q('Pourquoi complète-t-on l’observation de l’état corporel par une palpation ?',['Pour mieux apprécier les dépôts graisseux sous le poil','Pour mesurer la taille du squelette','Pour identifier la robe','Pour contrôler uniquement la température'], 'Un poil long ou dense peut masquer les reliefs : la palpation précise l’état des côtes, du garrot, de l’encolure et de la croupe.',0,{explication:'Un poil long ou dense peut masquer les reliefs : la palpation complète l’observation des côtes, du garrot, de l’encolure et de la croupe.'}),
      Q('Les besoins énergétiques augmentent souvent avec :',['Le travail, le froid ou certains états physiologiques','La couleur de robe','Le nombre de brosses','La taille du box uniquement'], 'L’effort, la thermorégulation, la croissance, la gestation ou la lactation demandent davantage d’énergie à l’organisme.'),
      Q('Une ration se modifie :',['Progressivement et avec suivi','Brutalement la veille d’un concours','Sans mesurer le cheval','Chaque jour au hasard'], 'La flore digestive s’adapte lentement ; une transition progressive réduit les risques de troubles digestifs et permet d’évaluer l’effet du changement.'),
      Q('Le fourrage apporte en priorité :',['Fibres et temps de mastication','Uniquement des vitamines','De l’eau uniquement','Des protéines animales'], 'Les fibres entretiennent le transit et la mastication prolongée produit de la salive, importante pour le confort digestif.'),
      Q('Un cheval trop maigre ou trop gras nécessite :',['Une analyse globale et un avis compétent','Plus de friandises','Moins d’eau','Un travail intense immédiat'], 'Il faut examiner ration, dents, santé, parasitisme, activité et conditions de vie avant d’établir une correction progressive.')
    ]},
    { slug:'contre-galop-et-longe', titre:'Contre-galop, cession et longe', questions:[
      Q('Au contre-galop, le cheval :',['Conserve volontairement le pied extérieur à la courbe','Est forcément désuni','Change de pied à chaque foulée','Galope sans équilibre'], 'Au contre-galop, le cheval garde le même pied de galop alors que la courbe s’oriente du côté opposé.'),
      Q('L’exercice développe notamment :',['Équilibre et contrôle des épaules','Vitesse maximale','Immobilité','Souplesse de la crinière'], 'Maintenir un galop juste sur une courbe opposée sollicite la rectitude, l’équilibre latéral et la maîtrise des épaules.'),
      Q('À la longe, déplacer le cercle demande :',['Une communication claire et un cheval qui reste équilibré','De tirer le cheval vers soi','De courir derrière lui','D’enrouler la longe'], 'Le longeur déplace son propre cercle et ajuste triangle des aides, impulsion et diamètre sans tirer le cheval vers le centre.'),
      Q('Pour sauter à la longe, on prépare :',['Un dispositif simple, progressif et sécurisé','Un obstacle maximal','Une longe très courte','Un départ sans échauffement'], 'Une barre d’appel lisible, un obstacle modeste, une zone dégagée et un échauffement permettent une progression sûre.'),
      Q('Si le cheval accélère et tombe sur les épaules pendant une extension d’encolure, il faut d’abord :',['Rétablir un rythme calme et l’équilibre avant de redemander l’étirement','Allonger davantage la longe','Bloquer la main en continu','Augmenter immédiatement le diamètre du cercle'], 'L’étirement n’est bénéfique que si activité, cadence et équilibre restent présents ; on réorganise d’abord ces paramètres.',0,{explication:'L’étirement reste utile seulement si le cheval conserve activité, cadence et équilibre ; on réorganise d’abord ces paramètres.'})
    ]}
  ],
  7: [
    { slug:'livret-et-transport', titre:'Livret, signalement et transport', questions:[
      Q('Sur l’illustration, quel défaut correspond à des pinces orientées vers l’extérieur ?', ['Panard','Cagneux','Campé','Sous lui'], 'Vu de face, un cheval panard présente une rotation externe du membre : ses pinces s’écartent vers l’extérieur.',0,visuel(7,'Un cheval panard présente des pinces tournées vers l’extérieur.','Antérieurs vus de face avec flèches vers l’extérieur')),
      Q('Vérifier un signalement consiste à :',['Comparer le cheval aux éléments de son document','Lire seulement son nom','Mesurer uniquement sa taille','Contrôler la selle'], 'La comparaison porte sur la robe, les marques, les épis et, si nécessaire, la puce afin de confirmer l’identité.'),
      Q('Pendant un long transport, on surveille :',['Ventilation, température, hydratation et comportement','Uniquement les protections','La couleur du véhicule','Le score du cavalier'], 'La chaleur, une ventilation insuffisante ou la déshydratation peuvent altérer rapidement l’état général pendant un trajet prolongé.'),
      Q('Le stress de transport peut influencer :',['Comportement, transit et fatigue','La robe définitive','Le numéro SIRE','La taille du sabot'], 'Le confinement, les mouvements et le changement d’environnement peuvent provoquer agitation, baisse du transit, sudation et fatigue.'),
      Q('À l’arrivée, on prévoit :',['Débarquement calme, observation et récupération','Travail intense immédiat','Aliment concentré en grande quantité','Isolement sans eau'], 'Après le débarquement, on contrôle l’état du cheval, lui propose eau et repos, puis adapte la reprise d’activité.')
    ]},
    { slug:'bandes-et-longues-renes', titre:'Bandes de polo et longues rênes', questions:[
      Q('Une bande de polo doit être posée :',['Avec tension uniforme et tours réguliers','Plus serrée sur le tendon','Avec des plis','Sur un membre humide'], 'La tension identique à chaque tour évite les points de pression ; les plis peuvent provoquer échauffement et blessure.'),
      Q('La fermeture se place de façon à :',['Limiter le risque d’accrochage et tenir correctement','Appuyer sur le tendon','Toucher le sol','Couvrir le sabot'], 'Une fermeture orientée et fixée correctement ne doit ni frotter le tendon ni pouvoir s’ouvrir en accrochant l’autre membre.'),
      Q('Aux longues rênes, le meneur doit :',['Garder une position sûre et des lignes organisées','Enrouler les rênes autour des mains','Rester collé aux postérieurs','Tirer en continu'], 'Des rênes rangées sans boucle autour des mains et une distance adaptée permettent d’agir précisément tout en restant hors d’atteinte.'),
      Q('Le travail en cercle précède souvent :',['Des lignes droites et exercices plus complexes','Le saut maximal','Le transport','La mise au pré'], 'Le cercle permet d’installer codes, direction et transitions avant d’aborder les déplacements du meneur et les lignes droites.'),
      Q('Les longues rênes permettent notamment :',['De travailler direction, transitions et mobilisation sans cavalier','De remplacer tous les soins','De ferrer le cheval','De mesurer la ration'], 'Elles transmettent des aides proches de celles des rênes montées pour travailler locomotion et dressage depuis le sol.')
    ]},
    { slug:'rectitude-et-epaule-en-dedans', titre:'Rectitude et épaule en dedans', questions:[
      Q('La rectitude recherche :',['Épaules et hanches alignées sur la trajectoire','Une encolure droite uniquement','Une flexion maximale','Une vitesse constante'], 'Un cheval droit place ses postérieurs sur les traces de ses antérieurs, que la trajectoire soit droite ou courbe.'),
      Q('Dans l’épaule en dedans, les épaules sont :',['Déplacées à l’intérieur tandis que les hanches restent sur la piste','Sur la piste avec les hanches dedans','Toujours à l’extérieur','Immobiles'], 'L’avant-main quitte la piste intérieurement tandis que les postérieurs suivent la piste, créant généralement trois pistes.'),
      Q('Cet exercice améliore notamment :',['Souplesse, engagement et contrôle latéral','Vitesse de pointe','Hauteur du saut uniquement','Immobilité du dos'], 'L’épaule en dedans mobilise latéralement le cheval, favorise l’engagement du postérieur intérieur et améliore son équilibre.'),
      Q('La mise sur la main résulte :',['De l’impulsion reçue par un contact juste','D’une traction des rênes','D’un enrênement serré','D’une nuque forcée'], 'L’énergie produite par les postérieurs se transmet dans un dos actif jusqu’à une main stable et élastique.'),
      Q('Une transition galop-pas réussie conserve :',['Équilibre, rectitude et réponse aux aides','Une accélération avant l’arrêt','Un passage obligatoire par le trot long','Les épaules décalées'], 'Le cheval rassemble sa foulée, reste droit et passe nettement au pas sans foulée de trot intermédiaire ni chute sur les épaules.')
    ]}
  ]
};
