
export type Language = 'fr' | 'ln';

export const translations = {
  fr: {
    nav: {
      products: "Produits",
      useCases: "Cas d'usage",
      pricing: "Tarifs",
      devs: "Développeurs",
      faq: "FAQ",
      login: "Se connecter",
      cta: "Commencer maintenant",
      home_return: "Retour à l'accueil",
      cancel: "Annuler"
    },
    hero: {
      badge: "DÉCOUVREZ LES NOUVEAUTÉS CHEZ TOONAPHAR",
      title_start: "Accélérez la performance de votre",
      title_pharmacy: "pharmacie",
      title_end: "avec ToonaPHAR",
      subtitle: "Accédez à une gestion de stock intelligente, automatisez vos ventes et optimisez la rentabilité de votre officine en temps réel.",
      stats_offices: "+500 officines",
      stats_products: "+25M produits gérés",
      stats_uptime: "99.9% uptime",
      tagline: "Réinventer la pharmacie, propulser votre croissance"
    },
    overview: {
      label: "Pourquoi ToonaPHAR ?",
      title: "Fini le stress de la gestion manuelle.",
      desc: "Nous avons conçu ToonaPHAR pour résoudre les défis quotidiens des officines modernes. Gagnez du temps et sécurisez vos marges.",
      items: [
        { title: "Zéro Rupture", desc: "Suivez vos stocks en temps réel. Recevez des alertes intelligentes avant que les rayons ne soient vides." },
        { title: "Évitez les Pertes", desc: "Identifiez les médicaments proches de l'expiration et optimisez vos commandes fournisseurs." },
        { title: "Focus Patient", desc: "Accélérez le passage en caisse et améliorez le conseil client grâce à une interface ultra-rapide." },
        { title: "Sécurité Totale", desc: "Vos données sont chiffrées et sauvegardées quotidiennement sur des serveurs hautement sécurisés." }
      ]
    },
    features: {
      label: "Fonctionnalités Clés",
      title: "Tout ce dont vous avez besoin pour piloter votre officine.",
      btn_all: "Voir toutes les fonctions",
      items: [
        { title: "Gestion des Stocks", desc: "Inventaire complet avec gestion des lots, dates de péremption et transferts entre officines." },
        { title: "Ventes & Facturation", desc: "Point de vente rapide, compatible douchettes code-barres et impression de tickets personnalisés." },
        { title: "Base de Données Médicaments", desc: "Accès à un catalogue de milliers de références avec prix officiels et interactions médicamenteuses." },
        { title: "Suivi Fournisseurs", desc: "Gérez vos bons de commande, bons de livraison et suivez vos dettes fournisseurs en un clic." },
        { title: "Alertes Intelligentes", desc: "Notifications SMS et E-mail pour les produits périmés ou les seuils critiques de stock." },
        { title: "Version Mobile", desc: "Consultez l'état de votre pharmacie n'importe où depuis votre smartphone ou tablette." }
      ]
    },
    pricing: {
      title: "Des tarifs conçus pour votre croissance.",
      subtitle: "Commencez gratuitement, aucune carte de crédit requise. Changez de plan à tout moment.",
      monthly: "Mensuel",
      annual: "Annuel",
      discount: "-20%",
      recommended: "RECOMMANDÉ",
      cta_trial: "Commencer l'essai",
      cta_sub: "S'abonner maintenant",
      cta_contact: "Nous contacter",
      compare: "Comparer tous les forfaits détaillés →",
      unit: "FCFA / mois"
    },
    faq: {
      title: "Questions fréquemment posées",
      subtitle: "Vous avez une question spécifique ? Notre équipe est là pour vous répondre.",
      cta_title: "Vous avez encore des questions ?",
      cta_desc: "Vous ne trouvez pas la réponse que vous cherchez ? N'hésitez pas à nous écrire, notre équipe vous répondra sous 2 heures.",
      cta_btn: "Écrivez-nous",
      items: [
        { q: "Mes données sont-elles sécurisées ?", a: "Absolument. Nous utilisons un chiffrement AES-256 pour toutes vos données sensibles. Nos serveurs sont situés dans des datacenters certifiés ISO/IEC 27001." },
        { q: "Comment se passe l'installation ?", a: "ToonaPHAR est une solution SaaS. Il n'y a rien à installer sur vos serveurs. Il vous suffit d'un navigateur internet et d'une connexion." },
        { q: "Puis-je l'utiliser sans connexion ?", a: "Oui, notre mode hors-ligne intelligent vous permet de continuer vos ventes en cas de coupure." },
        { q: "Quel type de support proposez-vous ?", a: "Pour le plan Pro et Entreprise, vous disposez d'un support technique dédié par téléphone et WhatsApp 7j/7." }
      ]
    },
    cta: {
      title: "Prêt à vous lancer ?",
      desc: "Créez un compte maintenant et révolutionnez la gestion de votre officine, ou contactez-nous pour une solution sur mesure adaptée à vos besoins.",
      btn: "Commencer maintenant"
    },
    footer: {
      newsletter_title: "Recevez les dernières actualités ToonaPHAR directement dans votre boîte mail",
      newsletter_placeholder: "Votre adresse email",
      newsletter_btn: "Souscrire",
      tagline: "La solution leader en Afrique francophone.",
      copyright: "Tous droits réservés."
    },
    login: {
      title_step1: "Connexion à ToonaPHAR",
      title_step2: "Entrez votre mot de passe",
      desc_step1: "Utilisez le numéro de téléphone associé à votre officine.",
      desc_step2: "Saisissez le mot de passe pour",
      placeholder_phone: "Numéro de téléphone",
      placeholder_pass: "Mot de passe",
      btn_continue: "Continuer",
      btn_login: "Se connecter",
      btn_logging: "Connexion...",
      forgot: "Mot de passe oublié ?",
      footer_text: "En continuant, vous accédez à votre espace sécurisé ToonaPHAR.",
      contact_support: "Contactez le support",
      error_phone: "Veuillez entrer votre numéro de téléphone",
      error_phone_short: "Le numéro de téléphone doit contenir au moins 9 chiffres",
      error_pass: "Veuillez entrer votre mot de passe"
    },
    payment: {
      header_title: "Vérification de l'officine",
      header_desc: "Veuillez confirmer les détails de votre établissement avant de procéder au règlement.",
      step_client: "Client",
      step_pay: "Paiement",
      step_conf: "Confirmation",
      owner: "Titulaire de la licence",
      license: "Numéro d'agrément",
      pay_title: "Mode de paiement",
      pay_desc: "Choisissez votre fournisseur de paiement mobile habituel.",
      phone_label: "Numéro de téléphone mobile",
      phone_info: "Gardez votre téléphone à portée de main pour valider.",
      final_title: "Finaliser le règlement",
      final_desc: "Récapitulatif final de votre commande.",
      pay_total: "Net à payer",
      btn_pay: "Payer maintenant",
      success_title: "Succès !",
      success_desc: "Félicitations ! Votre pharmacie bénéficie désormais du nouveau plan.",
      btn_dashboard: "Tableau de bord",
      error_fields: "Veuillez remplir tous les champs de paiement",
      waiting: "Attente de confirmation",
      waiting_desc: "Validez la transaction sur votre terminal mobile."
    }
  },
  ln: {
    nav: {
      products: "Biloko",
      useCases: "Ndakisa",
      pricing: "Talo",
      devs: "Basali",
      faq: "Mituna",
      login: "Kokota",
      cta: "Banda sikoyo",
      home_return: "Zonga na ebandeli",
      cancel: "Longwa"
    },
    hero: {
      badge: "YEBA MAKAMBO YA SIKA NA TOONAPHAR",
      title_start: "Bakisa nguya ya mosala ya",
      title_pharmacy: "falamasi",
      title_end: "na yo na ToonaPHAR",
      subtitle: "Boyangeli biloko na mayele, teka pete mpe bakisa mbongo ya mosala na yo sikoyo.",
      stats_offices: "+500 falamasi",
      stats_products: "+25M biloko",
      stats_uptime: "99.9% mosala",
      tagline: "Kobongola falamasi, kopesa yo makasi"
    },
    overview: {
      label: "Mpo na nini ToonaPHAR ?",
      title: "Tika kobungisa ntango na maboko.",
      desc: "Tosali ToonaPHAR mpo na kosilisa mikakatano ya bofalami ya lelo. Zwaka ntango mpe batela mbongo na yo.",
      items: [
        { title: "Biloko esilaka te", desc: "Tala biloko na yo ntango nyonso. Zwaka nsango liboso biloko esila na bakaizi." },
        { title: "Tika kobungisa", desc: "Yeba biloko oyo elingui esila ntango (péremption) mpo obongisa kopesa komande." },
        { title: "Kotala malamu bapasi", desc: "Teka noki mpe pesa bapasi toli malamu mpo ordinatere eza noki mingi." },
        { title: "Bokengi makasi", desc: "Makambo na yo ebatelami malamu mpe eza na bokengi ya makasi mpenza." }
      ]
    },
    features: {
      label: "Makamu ya Ntina",
      title: "Nyonso osengeli mpo na kotambwisa falamasi na yo.",
      btn_all: "Tala makambo nyonso",
      items: [
        { title: "Boyangeli biloko", desc: "Tala biloko nyonso, ntango ya kosila mpe kopesana biloko kati na bafalamasi." },
        { title: "Koteka mpe Faktire", desc: "Teka noki mpe bimisa batike mpo na bapasi na yo pamba pamba." },
        { title: "Buku ya Milongo", desc: "Tala milongo ya bankisi ebele mpe talo na yango ya l'Etat." },
        { title: "Kotala ba Fournisseurs", desc: "Salela bakomande mpe kofuta ba fournisseurs na yo malamu." },
        { title: "Kosaka makambo", desc: "Zwaka nsango na SMS to E-mail soki biloko elingi esila ntango to soki esili." },
        { title: "Mosala na Telefone", desc: "Tala falamasi na yo esika nyonso ozali na nzela ya telefone na yo." }
      ]
    },
    pricing: {
      title: "Talo mpo na kokola ya mosala na yo.",
      subtitle: "Banda ofele, tosengaka karte ya banke te. Bongola plan ntango nyonso.",
      monthly: "Sanza",
      annual: "Mbula",
      discount: "-20%",
      recommended: "OPONAMI",
      cta_trial: "Meka ofele",
      cta_sub: "Banda sikoyo",
      cta_contact: "Solola na biso",
      compare: "Tala talo nyonso malamu →",
      unit: "FCFA / sanza"
    },
    faq: {
      title: "Mituna mimesanaki kotunama",
      subtitle: "Oza na motuna moko? Biso baza mpo na kopesa yo eyano.",
      cta_title: "Oza naino na mituna?",
      cta_desc: "Omoni eyano te? Koma na biso, tokopesa eyano nsima ya bangonga mibale.",
      cta_btn: "Koma na biso",
      items: [
        { q: "Makambo na ngai eza na bokengi ?", a: "Iyo mpenza. Tosalelaka bokengi ya AES-256 mpo na makambo na yo nyonso ya sekele." },
        { q: "Ndenge nini tokotiaka yango ?", a: "ToonaPHAR eza na ordinatere ya likolo. Osengeli kotia eloko te, kaka telefone to ordinatere na yo." },
        { q: "Nakoki kosala soki internet eza te ?", a: "Iyo, nakoki kokoba koteka ata internet eza te, mpe ekosimba ntango internet ekozonga." },
        { q: "Lisungi nini tokopesaka ?", a: "Mpo na ba plan Pro, toza na lisungi na telefone mpe WhatsApp mikolo nyonso (7j/7)." }
      ]
    },
    cta: {
      title: "Omiyelisami mpo na kobanda ?",
      desc: "Fungola konte sikoyo mpo obongola boyangeli ya falamasi na yo malamu mpenza.",
      btn: "Banda sikoyo"
    },
    footer: {
      newsletter_title: "Zwaka nsango ya ToonaPHAR mbala moko na email na yo",
      newsletter_placeholder: "Email na yo",
      newsletter_btn: "Koma",
      tagline: "Boyangeli ya liboso na Afrika ya nase.",
      copyright: "Nyonso ebatelami."
    },
    login: {
      title_step1: "Kokota na ToonaPHAR",
      title_step2: "Kotisa liloba ya sekele",
      desc_step1: "Salela nimero ya telefone ya falamasi na yo.",
      desc_step2: "Kotisa liloba ya sekele mpo na",
      placeholder_phone: "Nimero ya telefone",
      placeholder_pass: "Liloba ya sekele",
      btn_continue: "Kende liboso",
      btn_login: "Kokota",
      btn_logging: "Koti... ",
      forgot: "Obosani liloba ya sekele?",
      footer_text: "Soki okobi, okoti na esika ya bokengi ya ToonaPHAR.",
      contact_support: "Solola na biso",
      error_phone: "Kotisa nimero ya telefone",
      error_phone_short: "Nimero ya telefone eza mokuse mingi",
      error_pass: "Kotisa liloba ya sekele"
    },
    payment: {
      header_title: "Kotala makambo ya falamasi",
      header_desc: "Tala soki makambo nyonso eza sembo liboso ya kofuta mbongo.",
      step_client: "Moto",
      step_pay: "Kofuta",
      step_conf: "Bokengi",
      owner: "Nkolo falamasi",
      license: "Nimero ya agrema",
      pay_title: "Lolenge ya kofuta",
      pay_desc: "Pona lolenge yo omesana kofuta na telefone.",
      phone_label: "Nimero ya telefone ya kofuta",
      phone_info: "Simba telefone na yo mpo na kopesa nzela.",
      final_title: "Silisa kofuta",
      final_desc: "Tala nyonso oyo oponi.",
      pay_total: "Mbongo ya kofuta",
      btn_pay: "Futa sikoyo",
      success_title: "Elonga !",
      success_desc: "Félicitations ! Falamasi na yo ekoti sikoyo na plan ya sika.",
      btn_dashboard: "Esika ya mosala",
      error_fields: "Tondisa makambo nyonso ya kofuta",
      waiting: "Zela tina moke",
      waiting_desc: "Pesa nzela na telefone na yo sikoyo."
    }
  }
};
