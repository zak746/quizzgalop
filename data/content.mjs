/** Contenus éditoriaux originaux, structurés d'après le programme fédéral FFE 1 à 7. */
export const PROGRAMMES = [
  {
    n: 1, objectif: 'Devenir cavalier et découvrir le cheval en sécurité.',
    axes: [
      { titre: 'Connaître le cheval', items: ['Comportement et attitudes principales', 'Trois allures et trois robes de base', 'Parties extérieures principales', 'Aides naturelles et artificielles'] },
      { titre: 'S’occuper du cheval', items: ['Aborder, caresser et mettre un licol', 'Étriller et brosser tout le corps', 'Faire un nœud d’attache sécurisé', 'Desseller, enlever le filet et laver le mors'] },
      { titre: 'À pied et à cheval', items: ['Mener au pas, s’arrêter et tracer des courbes', 'Monter et descendre en sécurité', 'Diriger au pas et trotter enlevé en rythme', 'Galoper quelques foulées'] }
    ],
    essentiels: ['Toujours signaler sa présence au cheval.', 'Le pas est à 4 temps, le trot à 2 temps, le galop à 3 temps.', 'Noir, alezan et bai sont les trois robes de base.'],
    erreurs: ['Passer juste derrière un cheval', 'Confondre filet et licol', 'Se crisper ou regarder au sol à cheval']
  },
  {
    n: 2, objectif: 'Évoluer aux trois allures et préparer son cheval avec davantage d’autonomie.',
    axes: [
      { titre: 'Connaître le cheval', items: ['Cinq sens et comportements entre chevaux', 'Aliments de base et besoins en eau', 'Parties de la tête, des membres et du sabot', 'Autres robes, pies et races présentes au club'] },
      { titre: 'S’occuper du cheval', items: ['Pansage complet et curage des pieds', 'Mettre filet et selle', 'Distribuer les aliments sans danger', 'Aborder et lâcher au pré ou au paddock'] },
      { titre: 'À pied et à cheval', items: ['Reculer et déplacer épaules ou hanches', 'Régler ses étriers et ressangler seul', 'Transitions entre les trois allures', 'Cercle, volte, diagonale, doubler et petit obstacle'] }
    ],
    essentiels: ['Le fourrage constitue la base de l’alimentation.', 'On croise à main gauche : priorité à celui qui garde la piste.', 'Les aides se graduent : demander doucement puis renforcer.'],
    erreurs: ['Confondre paille et foin', 'Seller sur un poil sale ou rebroussé', 'Regarder l’obstacle au lieu de la trajectoire']
  },
  {
    n: 3, objectif: 'Conduire avec précision, contrôler les allures et enchaîner de petits sauts.',
    axes: [
      { titre: 'Connaître le cheval', items: ['Vie en groupe, hiérarchie et affinités', 'Parties détaillées du corps, du sabot et du fer', 'Mécanismes du pas et du trot', 'Marques blanches, épis et déclinaisons des robes'] },
      { titre: 'S’occuper du cheval', items: ['Pansage complet et pieds postérieurs', 'Doucher les membres et graisser les pieds', 'Entretenir litière et abreuvoir', 'Démonter, remonter et entretenir un filet'] },
      { titre: 'À pied et à cheval', items: ['Courbes serrées, reculer droit, mobiliser épaules et hanches', 'Trotter sur le bon diagonal', 'Partir au galop sur le bon pied', 'Contrôler allure et direction sur un parcours à 50–60 cm'] }
    ],
    essentiels: ['Au trot enlevé, on se lève avec l’antérieur extérieur.', 'Le bon abord combine tracé, vitesse et équilibre.', 'Une demi-volte change de main, une volte n’en change pas.'],
    erreurs: ['Changer de diagonal trop tard', 'Accélérer devant l’obstacle', 'Graisser un pied mal nettoyé']
  },
  {
    n: 4, objectif: 'Obtenir le brevet de cavalier avec contrôle, autonomie et analyse.',
    axes: [
      { titre: 'Connaître le cheval', items: ['Identification de base et livret signalétique', 'Normes physiologiques et signes de maladie', 'Besoins alimentaires et végétaux toxiques', 'Mécanisme du galop à droite et à gauche'] },
      { titre: 'S’occuper du cheval', items: ['Protections de travail et de transport', 'Inspection et soins des membres', 'Préparer le cheval pour le travail et le transport', 'Reconnaître les mors de filet usuels'] },
      { titre: 'À pied et à cheval', items: ['Contact moelleux, flexions et embûches simples', 'Pli et incurvation', 'Déplacer épaules et hanches au pas', 'Parcours de 8 à 10 obstacles et sortie aux trois allures'] }
    ],
    essentiels: ['Température, fréquence cardiaque et comportement donnent des indices de santé.', 'L’incurvation concerne tout le corps, pas seulement l’encolure.', 'Le fourrage reste prioritaire, les concentrés complètent selon le besoin.'],
    erreurs: ['Masquer un signe de douleur par le travail', 'Confondre pli et incurvation', 'Serrer excessivement les protections']
  },
  {
    n: 5, objectif: 'Affirmer sa technique, sa cadence et sa capacité à travailler à pied.',
    axes: [
      { titre: 'Connaître le cheval', items: ['Principes d’apprentissage et renforcements', 'Squelette, groupes musculaires et digestion', 'Robes pies, tachetées et adjonctions', 'SIRE, puce et inscription en compétition'] },
      { titre: 'S’occuper du cheval', items: ['Poser et rouler des bandes de repos', 'Présenter un cheval en main', 'Embarquer dans un van ou un camion', 'Reconnaître les principaux mors de filet'] },
      { titre: 'À pied et à cheval', items: ['Longer aux trois allures et découvrir les longues rênes', 'Incurvation et cadence régulière', 'Cession à la jambe au pas', 'Parcours Club 3 et cross simple en terrain varié'] }
    ],
    essentiels: ['L’habituation diminue une réaction par exposition progressive.', 'La récompense doit suivre immédiatement le bon comportement.', 'Une cession à la jambe conserve une légère flexion opposée au déplacement.'],
    erreurs: ['Punir sans lien temporel avec le comportement', 'Tirer pour embarquer un cheval', 'Confondre cadence et vitesse']
  },
  {
    n: 6, objectif: 'Gagner en précision, autonomie et connaissance de la santé du cheval.',
    axes: [
      { titre: 'Connaître le cheval', items: ['Anatomie du pied, ferrure et travail du maréchal', 'Maladies courantes et symptômes', 'État corporel et besoins alimentaires variables', 'Reproduction, identification et mécanisme du reculer'] },
      { titre: 'S’occuper du cheval', items: ['Soins après le travail', 'Toiletter et tresser pour une compétition', 'Évaluer l’état corporel', 'Reconnaître allures artificielles ou défectueuses'] },
      { titre: 'À pied et à cheval', items: ['Longer, déplacer le cercle et sauter à la longe', 'Détente autonome et transitions nettes', 'Extension d’encolure et cession au trot', 'Contre-galop, parcours Club 2 et cross à 80 cm'] }
    ],
    essentiels: ['La fourchette participe à l’amortissement et à la circulation dans le pied.', 'Les besoins varient avec poids, travail, âge, climat et état physiologique.', 'Le reculer est une allure symétrique par bipèdes diagonaux.'],
    erreurs: ['Négliger une boiterie légère', 'Confondre cheval rond et cheval enfermé', 'Détendre sans objectif ni progression']
  },
  {
    n: 7, objectif: 'Atteindre l’autonomie technique et raisonner le bien-être du cheval.',
    axes: [
      { titre: 'Connaître le cheval', items: ['Aplombs statiques et dynamiques', 'Lecture du livret et vérification du signalement', 'Impact du transport sur santé et bien-être', 'Rationnement et familles de compléments'] },
      { titre: 'S’occuper du cheval', items: ['Démonter, remonter et ajuster une bride', 'Poser des bandes de polo', 'Longer avec un enrênement adapté', 'Utiliser les longues rênes en cercle et en ligne droite'] },
      { titre: 'À pied et à cheval', items: ['Mise sur la main, rectitude et équilibre', 'Épaule en dedans et contre-épaule en dedans', 'Transitions galop–pas et contre-galop', 'Parcours Club 1 et cross précis en terrain varié'] }
    ],
    essentiels: ['La rectitude aligne les épaules et les hanches sur la trajectoire.', 'Un enrênement ne remplace jamais les aides ni la progression du travail.', 'La ration se raisonne d’abord en fourrage, matière sèche et besoins réels.'],
    erreurs: ['Chercher la mise sur la main uniquement avec les rênes', 'Poser une bande avec tension irrégulière', 'Sous-estimer stress, chaleur et fatigue en transport']
  }
];

export const CONSEILS = [
  { slug:'plan-revision-galop', titre:'Construire un plan de révision efficace avant son Galop', niveaux:'Galops 1 à 7', intro:'Une méthode simple sur trois semaines pour alterner fiches, quiz et pratique au club.', sections:[['Semaine 1 : comprendre','Lis une fiche par séance et reformule les notions sans regarder. Note les mots que tu ne maîtrises pas.'],['Semaine 2 : tester','Fais des quiz courts par thème. Reviens immédiatement à la fiche pour chaque erreur.'],['Semaine 3 : simuler','Mélange les thèmes, limite ton temps et explique oralement chaque réponse comme devant ton enseignant.']] },
  { slug:'reussir-theorie-galop', titre:'Réussir la théorie sans apprendre par cœur', niveaux:'Tous niveaux', intro:'Relier chaque notion à une situation vécue au club rend la mémorisation plus durable.', sections:[['Observer','Pendant le pansage, nomme les parties du corps, les outils et les contrôles de sécurité.'],['Expliquer','Décris à voix haute pourquoi tu choisis une action, pas seulement comment tu la réalises.'],['Espacer','Refais le même thème après un jour, puis une semaine : l’espacement consolide la mémoire.']] },
  { slug:'securite-avant-tout', titre:'La checklist sécurité avant de monter', niveaux:'Galops 1 à 4', intro:'Six vérifications rapides pour protéger le cavalier et le cheval.', sections:[['Équipement du cavalier','Casque ajusté, chaussures fermées avec petit talon, tenue sans élément flottant.'],['Cheval et harnachement','État général, pieds, propreté sous la selle, filet ajusté, sangle vérifiée.'],['Environnement','Portes, obstacles, autres chevaux et règles de circulation sont identifiés avant d’entrer.']] },
  { slug:'lire-son-cheval', titre:'Lire les signaux du cheval avant qu’il ne réagisse', niveaux:'Galops 1 à 7', intro:'Oreilles, regard, tension musculaire et posture donnent des informations complémentaires.', sections:[['Observer l’ensemble','Un seul signe ne suffit pas : compare oreilles, yeux, naseaux, encolure et déplacement.'],['Conserver une distance sûre','Reste visible, parle calmement et évite les gestes brusques lorsque la tension monte.'],['Adapter la demande','Diminue la difficulté, laisse le cheval comprendre, puis récompense un retour au calme.']] },
  { slug:'detente-autonome', titre:'Organiser une détente autonome et progressive', niveaux:'Galops 5 à 7', intro:'Une bonne détente prépare le corps, l’attention et les objectifs de la séance.', sections:[['Phase libre et active','Commence au pas, observe la locomotion et obtiens une activité régulière sans contrainte excessive.'],['Mobilité','Ajoute transitions, courbes larges et changements de direction avant de réduire les tracés.'],['Spécificité','Termine par quelques exercices proches du travail prévu, avec des pauses et un cheval disponible.']] },
  { slug:'reviser-apres-erreur', titre:'Transformer une erreur de quiz en acquis durable', niveaux:'Tous niveaux', intro:'Le score motive, mais l’explication de l’erreur fait réellement progresser.', sections:[['Identifier','Distingue oubli, confusion de vocabulaire et mauvaise lecture de la question.'],['Corriger','Écris la bonne réponse sous forme de règle courte et rattache-la à une situation réelle.'],['Vérifier','Refais le thème plus tard et cherche à expliquer la réponse avant de regarder les options.']] }
];
