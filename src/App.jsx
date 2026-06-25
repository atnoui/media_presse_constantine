import { useState, useEffect } from "react";

const C = {
  fr: {
    nav: { home:"Accueil", services:"Services", portfolio:"Portfolio", contact:"Contact", portal:"Espace Client", quote:"Devis Gratuit" },
    hero: { badge:"🚀 Agence Digitale #1 — Constantine, Algérie", h1:"Élevez Votre Marque", h1b:"& Votre Tech", sub:"Design graphique, développement web, marketing digital et maintenance IT. Votre partenaire digital de confiance à Constantine.", cta1:"Devis Gratuit →", cta2:"📞 Réserver Support IT", scroll:"Découvrir nos services" },
    services: {
      eyebrow:"Nos Expertises", title:"Services sur Mesure", sub:"Des solutions complètes pour transformer votre présence digitale",
      cards:[
        { emoji:"🎨", title:"Design Graphique", desc:"Logos, chartes graphiques, cartes de visite, affiches et packaging. Une identité visuelle forte qui vous distingue.", tags:["Logo","Branding","Print"], col:"#7c3aed", colb:"#a78bfa" },
        { emoji:"💻", title:"Développement Web", desc:"Sites vitrine, e-commerce, applications web sur mesure. Code propre, performance optimale, design responsive.", tags:["WordPress","E-commerce","SEO"], col:"#2563eb", colb:"#60a5fa" },
        { emoji:"📊", title:"Marketing Digital", desc:"Réseaux sociaux, Google & Facebook Ads, email marketing. Plus de visibilité, plus de clients.", tags:["SEO","Social Media","Ads"], col:"#0891b2", colb:"#22d3ee" },
        { emoji:"🛠️", title:"Maintenance IT", desc:"Dépannage à domicile, installation réseaux, réparation PC/Mac. Service rapide dans tout Constantine.", tags:["PC/Mac","Réseau","Dépannage"], col:"#059669", colb:"#34d399" },
      ]
    },
    pricing: {
      eyebrow:"Tarification", title:"Des Offres Pour Chaque Besoin", sub:"Transparents sur nos prix, flexibles sur nos solutions",
      tiers:[
        { name:"Starter", price:"15 000", unit:"DA / projet", desc:"Indépendants & petites structures", feats:["Site vitrine 5 pages","Logo + charte couleurs","Hébergement inclus","1 mois de support"], cta:"Commencer", pop:false },
        { name:"Pro", price:"45 000", unit:"DA / projet", desc:"La solution complète pour les PME", feats:["Site e-commerce complet","Identité visuelle complète","Formation CMS","SEO de base","3 mois de support prioritaire"], cta:"Choisir Pro", pop:true },
        { name:"Enterprise", price:"Sur devis", unit:"", desc:"Grandes entreprises, besoins spécifiques", feats:["Solution entièrement sur mesure","Application web dédiée","Stratégie marketing complète","SLA garanti","Support 24/7 dédié"], cta:"Nous Contacter", pop:false },
      ]
    },
    stats: {
      eyebrow:"Nos Résultats", title:"Pourquoi Constantine Nous Fait Confiance",
      items:[
        { n:"200+", l:"Projets livrés", d:"Depuis notre création" },
        { n:"98%", l:"Clients satisfaits", d:"Taux de satisfaction" },
        { n:"48h", l:"Délai moyen", d:"Livraison express" },
        { n:"10+", l:"Années d'expertise", d:"Dans le digital" },
      ]
    },
    whyus: {
      eyebrow:"Notre Différence", title:"Locaux, Experts & Engagés",
      items:[
        { icon:"📍", t:"Basés à Constantine", d:"Présence physique, réactivité immédiate. Nous connaissons le marché local." },
        { icon:"⚡", t:"Livraison Express", d:"Sites en 48h à 7 jours. Vos délais respectés, votre business lancé rapidement." },
        { icon:"🔒", t:"Garantie Satisfaction", d:"Révisions illimitées jusqu'à votre satisfaction totale, sans conditions." },
        { icon:"🌐", t:"Stack 2026", d:"Next.js, Tailwind, WordPress, WooCommerce, Figma, Adobe Suite CC." },
        { icon:"💬", t:"Support Continu", d:"WhatsApp, email et téléphone. Toujours disponibles pour vous accompagner." },
        { icon:"💰", t:"Prix Transparents", d:"Devis détaillés, aucune surprise. Prix adaptés au marché algérien." },
      ]
    },
    portfolio: {
      eyebrow:"Portfolio", title:"Nos Réalisations", sub:"Chaque projet, une histoire de transformation digitale",
      filters:[{k:"all",l:"Tout voir"},{k:"web",l:"Web"},{k:"print",l:"Print"},{k:"it",l:"IT"}],
      items:[
        { cat:"web", title:"Boutique E-commerce", client:"Mode Constantine", bg:"#1e3a8a", ac:"#60a5fa", icon:"🛍️" },
        { cat:"print", title:"Identité Complète", client:"Restaurant El Maqam", bg:"#4c1d95", ac:"#c084fc", icon:"🍽️" },
        { cat:"web", title:"Site Médical", client:"Clinique Ibn Sina", bg:"#0f766e", ac:"#34d399", icon:"🏥" },
        { cat:"print", title:"Carte de Visite Premium", client:"Maître Boukhalfa", bg:"#78350f", ac:"#fbbf24", icon:"⚖️" },
        { cat:"it", title:"Infrastructure Réseau", client:"Hotel Cirta Palace", bg:"#7f1d1d", ac:"#f87171", icon:"🏨" },
        { cat:"web", title:"Portail Immobilier", client:"Numide Properties", bg:"#14532d", ac:"#4ade80", icon:"🏢" },
      ]
    },
    contact: {
      eyebrow:"Contact", title:"Démarrons Ensemble", sub:"Devis gratuit sous 24h",
      steps:["Type de Projet","Budget & Délai","Vos Coordonnées"],
      s1:{ q:"Quel service vous intéresse ?", opts:["🎨 Design Graphique","💻 Développement Web","📊 Marketing Digital","🛠️ Maintenance IT","📦 Pack Complet"] },
      s2:{ bq:"Votre budget approximatif ?", bs:["< 15 000 DA","15 000–50 000 DA","50 000–150 000 DA","+ 150 000 DA","À discuter"], tq:"Délai souhaité", ts:["Urgent (< 1 semaine)","2 semaines","1 mois","Flexible"] },
      s3:{ np:"Nom & Prénom", ep:"Email", pp:"Téléphone", mp:"Décrivez votre projet..." },
      next:"Continuer →", back:"← Retour", send:"Envoyer ma Demande ✓",
      success:{ title:"Demande Envoyée ! 🎉", msg:"Nous vous contacterons dans les 24 heures.", action:"Nouvelle demande" },
      info:{ title:"Parlons Directement", items:[{ icon:"📞", l:"Téléphone", v:"0550 93 19 93" },{ icon:"📧", l:"Email", v:"mediapresseconstantine@gmail.com" },{ icon:"📍", l:"Adresse", v:"Constantine, Algérie" },{ icon:"🕐", l:"Horaires", v:"Dim–Jeu, 9h–18h" }] }
    },
    footer: { tagline:"Votre partenaire digital de confiance à Constantine depuis plus d'une décennie.", navT:"Navigation", navL:["Accueil","Services","Portfolio","Contact"], svcT:"Services", svcL:["Design Graphique","Développement Web","Marketing Digital","Maintenance IT"], ctT:"Contact", legal:"© 2026 Media Presse Constantine · Tous droits réservés · Fait avec ❤️ à Constantine" },
    portal: {
      title:"Espace Client MPC",
      loginT:"Connexion", loginBtn:"Se Connecter", forgot:"Mot de passe oublié ?", orTxt:"ou", googleBtn:"Continuer avec Google", registerLink:"Créer un compte",
      regT:"Créer un Compte", regBtn:"S'inscrire",
      dash:{ welcome:"Bonjour, Ahmed !", sub:"État de vos projets en cours.", tabs:["Mes Projets","Factures","Support"], logout:"Déconnexion", ticket:"Nouveau Ticket",
        projects:[{ name:"Site E-commerce", status:"En cours", progress:65, due:"15 Juil 2026", col:"#2563eb" },{ name:"Logo & Charte", status:"Révision", progress:85, due:"28 Jun 2026", col:"#7c3aed" },{ name:"Campagne SEO", status:"Planifié", progress:15, due:"01 Aoû 2026", col:"#0891b2" }]
      }
    }
  },
  ar: {
    nav: { home:"الرئيسية", services:"الخدمات", portfolio:"الأعمال", contact:"اتصل بنا", portal:"بوابة العملاء", quote:"عرض مجاني" },
    hero: { badge:"🚀 الوكالة الرقمية #1 — قسنطينة، الجزائر", h1:"ارفع مستوى علامتك", h1b:"التجارية وتقنيتك", sub:"تصميم جرافيكي، تطوير مواقع، تسويق رقمي وصيانة تقنية. شريكك الرقمي الموثوق في قسنطينة.", cta1:"← عرض مجاني", cta2:"📞 احجز دعماً تقنياً", scroll:"اكتشف خدماتنا" },
    services: {
      eyebrow:"خبراتنا", title:"خدمات على قياسك", sub:"حلول متكاملة لتحويل حضورك الرقمي",
      cards:[
        { emoji:"🎨", title:"التصميم الجرافيكي", desc:"شعارات، هويات بصرية، بطاقات عمل، ملصقات وتغليف. هوية قوية تميزك وتجذب عملاءك.", tags:["شعار","هوية","طباعة"], col:"#7c3aed", colb:"#a78bfa" },
        { emoji:"💻", title:"تطوير المواقع", desc:"مواقع عرض، متاجر إلكترونية، تطبيقات ويب مخصصة. كود نظيف، أداء مثالي، تصميم متجاوب.", tags:["وردبريس","متجر","SEO"], col:"#2563eb", colb:"#60a5fa" },
        { emoji:"📊", title:"التسويق الرقمي", desc:"إدارة وسائل التواصل، إعلانات جوجل وفيسبوك، تسويق بالبريد. وصول مضمون لعملاء جدد.", tags:["SEO","سوشيال","إعلانات"], col:"#0891b2", colb:"#22d3ee" },
        { emoji:"🛠️", title:"الصيانة التقنية", desc:"إصلاح في المنزل، تركيب شبكات، إصلاح PC/Mac. خدمة سريعة في قسنطينة وضواحيها.", tags:["PC/Mac","شبكة","إصلاح"], col:"#059669", colb:"#34d399" },
      ]
    },
    pricing: {
      eyebrow:"التسعير", title:"عروض تناسب كل احتياج", sub:"شفافية في الأسعار، مرونة في الحلول",
      tiers:[
        { name:"مبتدئ", price:"15,000", unit:"دج / مشروع", desc:"المستقلون والمؤسسات الصغيرة", feats:["موقع عرض 5 صفحات","شعار + ألوان","استضافة مشمولة","شهر دعم"], cta:"ابدأ الآن", pop:false },
        { name:"احترافي", price:"45,000", unit:"دج / مشروع", desc:"الحل المتكامل للمؤسسات الطموحة", feats:["متجر إلكتروني كامل","هوية بصرية شاملة","تدريب على النظام","SEO أساسي","3 أشهر دعم أولوية"], cta:"اختر الاحترافي", pop:true },
        { name:"مؤسسي", price:"حسب الطلب", unit:"", desc:"الشركات الكبرى ذات الاحتياجات الخاصة", feats:["حل مخصص بالكامل","تطبيق ويب مخصص","استراتيجية تسويقية شاملة","ضمان SLA","دعم 24/7 مخصص"], cta:"تواصل معنا", pop:false },
      ]
    },
    stats: {
      eyebrow:"نتائجنا", title:"لماذا تثق بنا قسنطينة",
      items:[
        { n:"+200", l:"مشروع مسلَّم", d:"منذ تأسيسنا" },
        { n:"98%", l:"عملاء راضون", d:"نسبة الرضا" },
        { n:"48h", l:"المتوسط", d:"للتسليم السريع" },
        { n:"+10", l:"سنوات خبرة", d:"في المجال الرقمي" },
      ]
    },
    whyus: {
      eyebrow:"ما يميزنا", title:"محليون، خبراء وملتزمون",
      items:[
        { icon:"📍", t:"في قسنطينة", d:"حضور محلي وسرعة استجابة فورية. نعرف السوق جيداً." },
        { icon:"⚡", t:"تسليم سريع", d:"مواقع في 48 ساعة إلى 7 أيام. مواعيدك محترمة دائماً." },
        { icon:"🔒", t:"ضمان الرضا", d:"مراجعات غير محدودة حتى رضاك التام بلا شروط." },
        { icon:"🌐", t:"تقنيات 2026", d:"Next.js، Tailwind، WordPress، WooCommerce، Figma، Adobe Suite CC." },
        { icon:"💬", t:"دعم متواصل", d:"واتساب، بريد إلكتروني وهاتف. دائماً في خدمتك." },
        { icon:"💰", t:"أسعار شفافة", d:"عروض مفصلة، لا مفاجآت. أسعار تناسب السوق الجزائري." },
      ]
    },
    portfolio: {
      eyebrow:"أعمالنا", title:"منجزاتنا", sub:"كل مشروع قصة تحول رقمي",
      filters:[{k:"all",l:"الكل"},{k:"web",l:"ويب"},{k:"print",l:"طباعة"},{k:"it",l:"تقني"}],
      items:[
        { cat:"web", title:"متجر إلكتروني", client:"أزياء قسنطينة", bg:"#1e3a8a", ac:"#60a5fa", icon:"🛍️" },
        { cat:"print", title:"هوية كاملة", client:"مطعم المقام", bg:"#4c1d95", ac:"#c084fc", icon:"🍽️" },
        { cat:"web", title:"موقع طبي", client:"عيادة ابن سينا", bg:"#0f766e", ac:"#34d399", icon:"🏥" },
        { cat:"print", title:"بطاقة عمل فاخرة", client:"المحامي بوخلفة", bg:"#78350f", ac:"#fbbf24", icon:"⚖️" },
        { cat:"it", title:"بنية تحتية شبكية", client:"فندق سيرتا بالاس", bg:"#7f1d1d", ac:"#f87171", icon:"🏨" },
        { cat:"web", title:"بوابة عقارات", client:"نوميد للعقارات", bg:"#14532d", ac:"#4ade80", icon:"🏢" },
      ]
    },
    contact: {
      eyebrow:"اتصل بنا", title:"لنبدأ معاً", sub:"عرض مجاني خلال 24 ساعة",
      steps:["نوع المشروع","الميزانية والمدة","معلوماتك"],
      s1:{ q:"ما الخدمة التي تهمك؟", opts:["🎨 تصميم جرافيكي","💻 تطوير مواقع","📊 تسويق رقمي","🛠️ صيانة تقنية","📦 باقة كاملة"] },
      s2:{ bq:"ميزانيتك التقريبية؟", bs:["أقل من 15,000 دج","15,000–50,000 دج","50,000–150,000 دج","+150,000 دج","للنقاش"], tq:"الأجل المطلوب", ts:["عاجل (أقل من أسبوع)","أسبوعان","شهر","مرن"] },
      s3:{ np:"الاسم الكامل", ep:"البريد الإلكتروني", pp:"رقم الهاتف", mp:"اشرح مشروعك..." },
      next:"متابعة ←", back:"→ رجوع", send:"✓ إرسال الطلب",
      success:{ title:"تم إرسال طلبك! 🎉", msg:"سنتواصل معك خلال 24 ساعة.", action:"طلب جديد" },
      info:{ title:"تواصل مباشرة", items:[{ icon:"📞", l:"الهاتف", v:"0550 93 19 93" },{ icon:"📧", l:"البريد", v:"mediapresseconstantine@gmail.com" },{ icon:"📍", l:"العنوان", v:"قسنطينة، الجزائر" },{ icon:"🕐", l:"ساعات العمل", v:"الأحد–الخميس، 9ص–6م" }] }
    },
    footer: { tagline:"شريكك الرقمي الموثوق في قسنطينة منذ أكثر من عقد.", navT:"التنقل", navL:["الرئيسية","الخدمات","الأعمال","اتصل بنا"], svcT:"الخدمات", svcL:["تصميم جرافيكي","تطوير مواقع","تسويق رقمي","صيانة تقنية"], ctT:"اتصل بنا", legal:"© 2026 ميديا بريس قسنطينة · جميع الحقوق محفوظة · صُنع بـ ❤️ في قسنطينة" },
    portal: {
      title:"بوابة عملاء MPC",
      loginT:"تسجيل الدخول", loginBtn:"دخول", forgot:"نسيت كلمة المرور؟", orTxt:"أو", googleBtn:"المتابعة مع جوجل", registerLink:"إنشاء حساب",
      regT:"إنشاء حساب", regBtn:"إنشاء الحساب",
      dash:{ welcome:"مرحباً، أحمد!", sub:"إليك حالة مشاريعك الجارية.", tabs:["مشاريعي","الفواتير","الدعم"], logout:"خروج", ticket:"تذكرة دعم",
        projects:[{ name:"متجر إلكتروني", status:"جارٍ", progress:65, due:"15 جويلية 2026", col:"#2563eb" },{ name:"شعار وهوية", status:"مراجعة", progress:85, due:"28 جوان 2026", col:"#7c3aed" },{ name:"حملة SEO", status:"مخطط", progress:15, due:"01 أوت 2026", col:"#0891b2" }]
      }
    }
  }
};

const NAV_IDS = ["hero","services","portfolio","contact"];

export default function MPCWebsite() {
  const [lang, setLang] = useState("fr");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showPortal, setShowPortal] = useState(false);
  const [portalTab, setPortalTab] = useState("login");
  const [showDash, setShowDash] = useState(false);
  const [dashTab, setDashTab] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [step, setStep] = useState(1);
  const [sel, setSel] = useState({ service:"", budget:"", timeline:"" });
  const [submitted, setSubmitted] = useState(false);
  const [hovered, setHovered] = useState(null);

  const t = C[lang];
  const isRTL = lang === "ar";

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@700;800;900&family=Cairo:wght@400;600;700;800;900&display=swap";
    document.head.appendChild(link);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ff = isRTL ? "'Cairo', 'Noto Kufi Arabic', sans-serif" : "'Inter', sans-serif";
  const scrollTo = (id) => { setMenuOpen(false); setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" }), 100); };
  const items = filter === "all" ? t.portfolio.items : t.portfolio.items.filter(i => i.cat === filter);

  const cardColors = ["#7c3aed","#2563eb","#0891b2","#059669"];

  const S = {
    page:{ minHeight:"100vh", backgroundColor:"#f1f5f9", fontFamily:ff },
    nav:{ position:"fixed", top:0, left:0, right:0, zIndex:1000, padding:"0 1.5rem",
      backgroundColor: scrolled ? "rgba(2,6,23,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
      transition:"all 0.35s ease" },
    navInner:{ maxWidth:1200, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", height:72 },
    logo:{ cursor:"pointer", display:"flex", alignItems:"center", gap:10 },
    logoBox:{ width:40, height:40, borderRadius:10, background:"linear-gradient(135deg,#2563eb,#06b6d4)", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:900, color:"white", fontSize:18 },
    logoText:{ fontWeight:800, color:"white", fontSize:16, lineHeight:1, letterSpacing:"-0.5px" },
    logoSub:{ fontSize:10, color:"#06b6d4", fontWeight:700, letterSpacing:"2.5px", textTransform:"uppercase" },
    navLinks:{ display:"flex", alignItems:"center", gap:28 },
    navLink:{ background:"none", border:"none", color:"rgba(255,255,255,0.75)", fontSize:14, fontWeight:500, cursor:"pointer", padding:"4px 0", fontFamily:ff, transition:"color 0.2s" },
    langToggle:{ display:"flex", alignItems:"center", gap:2, background:"rgba(255,255,255,0.1)", borderRadius:20, padding:3 },
    langBtn:(active) => ({ padding:"4px 13px", borderRadius:16, border:"none", cursor:"pointer", fontSize:13, fontWeight:700, transition:"all 0.2s", background:active?"#2563eb":"transparent", color:active?"white":"rgba(255,255,255,0.55)", fontFamily:ff }),
    portalBtn:{ background:"rgba(255,255,255,0.09)", border:"1px solid rgba(255,255,255,0.14)", color:"white", borderRadius:8, padding:"8px 14px", fontSize:13, fontWeight:500, cursor:"pointer", fontFamily:ff },
    ctaBtn:{ background:"linear-gradient(135deg,#2563eb,#1d4ed8)", border:"none", color:"white", borderRadius:8, padding:"9px 18px", fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:ff },
    hamburger:{ background:"none", border:"none", color:"white", cursor:"pointer", fontSize:22 },
    mobileMenu:{ background:"rgba(2,6,23,0.98)", backdropFilter:"blur(20px)", padding:"20px 1.5rem", borderTop:"1px solid rgba(255,255,255,0.07)" },
    mobileLink:{ display:"block", background:"none", border:"none", color:"white", fontSize:16, padding:"13px 0", cursor:"pointer", fontFamily:ff, borderBottom:"1px solid rgba(255,255,255,0.06)", width:"100%", textAlign:isRTL?"right":"left" },
    hero:{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center",
      background:"linear-gradient(135deg,#020617 0%,#0f172a 45%,#0c1a3a 75%,#020617 100%)",
      position:"relative", overflow:"hidden", padding:"120px 1.5rem 80px" },
    heroGrid:{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(37,99,235,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(37,99,235,0.06) 1px,transparent 1px)", backgroundSize:"60px 60px" },
    orb1:{ position:"absolute", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(37,99,235,0.13) 0%,transparent 70%)", top:-120, left:-120, pointerEvents:"none" },
    orb2:{ position:"absolute", width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle,rgba(6,182,212,0.08) 0%,transparent 70%)", bottom:0, right:0, pointerEvents:"none" },
    heroBadge:{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(37,99,235,0.13)", border:"1px solid rgba(37,99,235,0.28)", borderRadius:50, padding:"8px 20px", marginBottom:32, color:"#60a5fa", fontSize:13, fontWeight:600, letterSpacing:"0.4px" },
    heroH1:{ fontSize:"clamp(2.4rem,7vw,5rem)", fontWeight:900, lineHeight:1.1, marginBottom:24, letterSpacing:"-2px", fontFamily:isRTL?"'Cairo',sans-serif":"'Poppins','Inter',sans-serif" },
    heroSub:{ fontSize:18, color:"rgba(255,255,255,0.55)", lineHeight:1.75, maxWidth:600, margin:"0 auto 48px", fontWeight:400 },
    heroCtaRow:{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" },
    heroCta1:{ background:"linear-gradient(135deg,#2563eb,#1d4ed8)", color:"white", border:"none", borderRadius:12, padding:"16px 34px", fontSize:16, fontWeight:700, cursor:"pointer", boxShadow:"0 0 40px rgba(37,99,235,0.38)", transition:"all 0.3s", fontFamily:ff },
    heroCta2:{ background:"rgba(255,255,255,0.06)", color:"white", border:"1px solid rgba(255,255,255,0.14)", borderRadius:12, padding:"16px 30px", fontSize:16, fontWeight:600, cursor:"pointer", backdropFilter:"blur(10px)", transition:"all 0.3s", fontFamily:ff },
    heroScroll:{ marginTop:64, color:"rgba(255,255,255,0.28)", fontSize:13, display:"flex", flexDirection:"column", alignItems:"center", gap:8 },
    heroStats:{ position:"absolute", bottom:32, left:"50%", transform:"translateX(-50%)", display:"flex", gap:12, flexWrap:"wrap", justifyContent:"center" },
    heroStatCard:{ background:"rgba(255,255,255,0.05)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.09)", borderRadius:12, padding:"12px 20px", textAlign:"center" },
    sectionLight:{ padding:"100px 1.5rem", backgroundColor:"#f8fafc" },
    sectionDark:{ padding:"100px 1.5rem", background:"linear-gradient(135deg,#0f172a 0%,#0c1a3a 100%)" },
    sectionAlt:{ padding:"80px 1.5rem", backgroundColor:"#f8fafc" },
    container:{ maxWidth:1200, margin:"0 auto" },
    eyebrow:(col) => ({ color:col||"#2563eb", fontSize:12, fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", marginBottom:12 }),
    sectionTitle:(dark) => ({ fontSize:"clamp(1.8rem,4vw,3rem)", fontWeight:800, color:dark?"white":"#0f172a", marginBottom:16, letterSpacing:"-1px", fontFamily:isRTL?"'Cairo',sans-serif":"'Poppins','Inter',sans-serif" }),
    sectionSub:(dark) => ({ fontSize:17, color:dark?"rgba(255,255,255,0.48)":"#64748b", maxWidth:520, lineHeight:1.7 }),
    textCenter:{ textAlign:"center" },
    grid4:{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:24 },
    grid2:{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:20 },
    grid3:{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:24, alignItems:"center" },
    serviceCard:{ background:"white", borderRadius:20, padding:"30px 28px", border:"1px solid rgba(0,0,0,0.06)", boxShadow:"0 4px 24px rgba(0,0,0,0.06)", transition:"all 0.3s", cursor:"pointer", position:"relative", overflow:"hidden" },
    tag:(col) => ({ background:col+"18", color:col, borderRadius:20, padding:"4px 11px", fontSize:12, fontWeight:700, display:"inline-block" }),
    statCard:{ background:"white", borderRadius:16, padding:"30px 22px", textAlign:"center", border:"1px solid rgba(0,0,0,0.06)", boxShadow:"0 4px 20px rgba(0,0,0,0.04)", transition:"all 0.3s" },
    whyCard:{ display:"flex", gap:14, padding:"22px", borderRadius:16, background:"white", border:"1px solid rgba(0,0,0,0.06)", transition:"all 0.3s" },
    portCard:{ borderRadius:16, overflow:"hidden", cursor:"pointer", transition:"all 0.3s" },
    filterBtn:(active) => ({ padding:"10px 22px", borderRadius:50, border:"none", cursor:"pointer", fontSize:14, fontWeight:600, transition:"all 0.25s", background:active?"linear-gradient(135deg,#2563eb,#06b6d4)":"rgba(255,255,255,0.08)", color:active?"white":"rgba(255,255,255,0.58)", boxShadow:active?"0 4px 18px rgba(37,99,235,0.38)":"none", fontFamily:ff }),
    formCard:{ background:"white", borderRadius:20, padding:"34px", boxShadow:"0 20px 60px rgba(0,0,0,0.08)", border:"1px solid rgba(0,0,0,0.05)" },
    formInput:{ width:"100%", padding:"12px 15px", borderRadius:10, border:"2px solid #e2e8f0", fontSize:15, outline:"none", transition:"border-color 0.2s", boxSizing:"border-box", fontFamily:ff, color:"#0f172a" },
    formTextarea:{ width:"100%", padding:"12px 15px", borderRadius:10, border:"2px solid #e2e8f0", fontSize:15, outline:"none", resize:"vertical", fontFamily:ff, boxSizing:"border-box", color:"#0f172a" },
    optBtn:(sel) => ({ padding:"14px 17px", borderRadius:10, border:sel?"2px solid #2563eb":"2px solid #e2e8f0", background:sel?"#eff6ff":"white", color:sel?"#1d4ed8":"#374151", textAlign:isRTL?"right":"left", fontSize:15, fontWeight:sel?700:500, cursor:"pointer", transition:"all 0.2s", display:"flex", alignItems:"center", gap:8, fontFamily:ff }),
    smallOptBtn:(sel) => ({ padding:"10px", borderRadius:8, border:sel?"2px solid #2563eb":"2px solid #e2e8f0", background:sel?"#eff6ff":"white", color:sel?"#1d4ed8":"#374151", fontSize:13, fontWeight:sel?700:400, cursor:"pointer", transition:"all 0.2s", textAlign:"center", fontFamily:ff }),
    nextBtn:(en) => ({ marginTop:22, width:"100%", padding:14, background:en?"linear-gradient(135deg,#2563eb,#1d4ed8)":"#e2e8f0", color:en?"white":"#94a3b8", border:"none", borderRadius:10, fontSize:15, fontWeight:700, cursor:en?"pointer":"not-allowed", transition:"all 0.2s", fontFamily:ff }),
    backBtn:{ flex:1, padding:14, background:"transparent", border:"2px solid #e2e8f0", borderRadius:10, fontSize:15, fontWeight:600, cursor:"pointer", color:"#64748b", fontFamily:ff },
    sendBtn:{ flex:2, padding:14, background:"linear-gradient(135deg,#2563eb,#06b6d4)", color:"white", border:"none", borderRadius:10, fontSize:15, fontWeight:700, cursor:"pointer", fontFamily:ff },
    infoItem:{ display:"flex", gap:14, marginBottom:20, alignItems:"flex-start" },
    infoIcon:{ width:44, height:44, borderRadius:10, background:"linear-gradient(135deg,#2563eb,#06b6d4)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, flexShrink:0 },
    socialBtn:(col) => ({ width:43, height:43, borderRadius:10, background:col+"18", border:`1px solid ${col}30`, fontSize:19, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", transition:"all 0.2s" }),
    footer:{ background:"#020617", padding:"60px 1.5rem 28px", borderTop:"1px solid rgba(255,255,255,0.07)" },
    footerGrid:{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:36, marginBottom:44 },
    footerLabel:{ fontSize:11, fontWeight:700, color:"rgba(255,255,255,0.28)", letterSpacing:"2px", textTransform:"uppercase", marginBottom:18 },
    footerLink:{ display:"block", background:"none", border:"none", color:"rgba(255,255,255,0.48)", fontSize:14, cursor:"pointer", padding:"4px 0", fontFamily:ff, textAlign:isRTL?"right":"left", transition:"color 0.2s" },
    overlay:{ position:"fixed", inset:0, zIndex:2000, display:"flex", alignItems:"center", justifyContent:"center", padding:"1rem" },
    overlayBg:{ position:"absolute", inset:0, background:"rgba(0,0,0,0.78)", backdropFilter:"blur(8px)" },
    modal:{ position:"relative", width:"100%", maxWidth:420, background:"#0f172a", borderRadius:20, padding:"34px", border:"1px solid rgba(255,255,255,0.1)", boxShadow:"0 40px 100px rgba(0,0,0,0.6)", maxHeight:"90vh", overflowY:"auto" },
    modalLg:{ position:"relative", width:"100%", maxWidth:760, background:"#0f172a", borderRadius:20, padding:"34px", border:"1px solid rgba(255,255,255,0.1)", boxShadow:"0 40px 100px rgba(0,0,0,0.6)", maxHeight:"90vh", overflowY:"auto" },
    closeBtn:{ position:"absolute", top:14, right:isRTL?"auto":14, left:isRTL?14:"auto", background:"rgba(255,255,255,0.09)", border:"none", color:"white", borderRadius:"50%", width:30, height:30, cursor:"pointer", fontSize:15, display:"flex", alignItems:"center", justifyContent:"center" },
    tabRow:{ display:"flex", gap:4, marginBottom:24, background:"rgba(255,255,255,0.05)", borderRadius:10, padding:4 },
    tabBtn:(a) => ({ flex:1, padding:"9px", borderRadius:8, border:"none", cursor:"pointer", fontSize:14, fontWeight:600, transition:"all 0.2s", background:a?"#2563eb":"transparent", color:a?"white":"rgba(255,255,255,0.48)", fontFamily:ff }),
    darkInput:{ width:"100%", padding:"12px 14px", background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:10, color:"white", fontSize:14, outline:"none", boxSizing:"border-box", fontFamily:ff, marginTop:6, marginBottom:14 },
    darkLabel:{ display:"block", fontSize:12, color:"rgba(255,255,255,0.45)", fontWeight:500, marginTop:4 },
    darkBtn:{ width:"100%", padding:13, background:"linear-gradient(135deg,#2563eb,#1d4ed8)", color:"white", border:"none", borderRadius:10, fontSize:15, fontWeight:700, cursor:"pointer", marginBottom:14, fontFamily:ff },
    googleBtn:{ width:"100%", padding:12, background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)", color:"white", borderRadius:10, fontSize:14, fontWeight:600, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:8, fontFamily:ff },
    progressBar:(pct,col) => ({ width:`${pct}%`, height:"100%", background:`linear-gradient(90deg,${col},${col}cc)`, borderRadius:100, transition:"width 0.6s ease" }),
    whatsBtn:{ width:58, height:58, borderRadius:"50%", background:"linear-gradient(135deg,#25d366,#128c7e)", border:"none", cursor:"pointer", fontSize:26, boxShadow:"0 4px 28px rgba(37,211,102,0.38)", display:"flex", alignItems:"center", justifyContent:"center", transition:"all 0.3s" },
    chatWindow:{ width:300, background:"#0f172a", borderRadius:18, border:"1px solid rgba(255,255,255,0.09)", overflow:"hidden", boxShadow:"0 20px 60px rgba(0,0,0,0.42)" },
  };

  const GradientText = ({children, style={}}) => (
    <span style={{ background:"linear-gradient(135deg,#2563eb,#06b6d4,#3b82f6)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", ...style }}>{children}</span>
  );

  const StepDots = () => (
    <div style={{ display:"flex", marginBottom:30 }}>
      {t.contact.steps.map((s,i) => (
        <div key={i} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:7, position:"relative" }}>
          {i < t.contact.steps.length-1 && <div style={{ position:"absolute", top:15, left:"50%", right:"-50%", height:2, background:step>i+1?"#2563eb":"#e2e8f0", transition:"background 0.3s", zIndex:0 }} />}
          <div style={{ width:30, height:30, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", background:step>i+1?"#2563eb":step===i+1?"white":"#e2e8f0", border:step===i+1?"3px solid #2563eb":step>i+1?"none":"3px solid #e2e8f0", color:step>i+1?"white":step===i+1?"#2563eb":"#94a3b8", fontWeight:700, fontSize:12, position:"relative", zIndex:1, transition:"all 0.3s" }}>
            {step>i+1?"✓":i+1}
          </div>
          <div style={{ fontSize:10, color:step===i+1?"#2563eb":"#94a3b8", fontWeight:step===i+1?700:400, textAlign:"center", lineHeight:1.3 }}>{s}</div>
        </div>
      ))}
    </div>
  );

  return (
    <div dir={isRTL?"rtl":"ltr"} style={S.page}>

      {/* ── NAVBAR ── */}
      <nav style={S.nav}>
        <div style={S.navInner}>
          <div style={S.logo} onClick={() => scrollTo("hero")}>
            <div style={S.logoBox}>M</div>
            <div><div style={S.logoText}>Media Presse</div><div style={S.logoSub}>Constantine</div></div>
          </div>

          <div style={S.navLinks} className="mpc-desktop-only">
            {t.nav && [t.nav.home,t.nav.services,t.nav.portfolio,t.nav.contact].map((label,i) => (
              <button key={i} style={S.navLink} onClick={() => scrollTo(NAV_IDS[i])}
                onMouseEnter={e=>{e.target.style.color="#06b6d4"}} onMouseLeave={e=>{e.target.style.color="rgba(255,255,255,0.75)"}}>
                {label}
              </button>
            ))}
          </div>

          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <div style={S.langToggle}>
              <button style={S.langBtn(lang==="fr")} onClick={()=>setLang("fr")}>FR</button>
              <button style={S.langBtn(lang==="ar")} onClick={()=>setLang("ar")}>ع</button>
            </div>
            <button style={S.portalBtn} className="mpc-desktop-only" onClick={()=>setShowPortal(true)}>{t.nav.portal}</button>
            <button style={S.ctaBtn} className="mpc-desktop-only" onClick={()=>scrollTo("contact")}>{t.nav.quote}</button>
            <button style={S.hamburger} className="mpc-mobile-only" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?"✕":"☰"}</button>
          </div>
        </div>
        {menuOpen && (
          <div style={S.mobileMenu}>
            {[t.nav.home,t.nav.services,t.nav.portfolio,t.nav.contact].map((l,i)=>(
              <button key={i} style={S.mobileLink} onClick={()=>scrollTo(NAV_IDS[i])}>{l}</button>
            ))}
            <div style={{ display:"flex", gap:8, marginTop:14 }}>
              <button style={{ ...S.portalBtn, flex:1 }} onClick={()=>{setShowPortal(true);setMenuOpen(false);}}>{t.nav.portal}</button>
              <button style={{ ...S.ctaBtn, flex:1, textAlign:"center" }} onClick={()=>scrollTo("contact")}>{t.nav.quote}</button>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="hero" style={S.hero}>
        <div style={S.heroGrid} />
        <div style={S.orb1} /><div style={S.orb2} />
        <div style={{ maxWidth:860, margin:"0 auto", textAlign:"center", position:"relative", zIndex:1 }}>
          <div style={S.heroBadge}>{t.hero.badge}</div>
          <h1 style={S.heroH1}>
            <span style={{ color:"white", display:"block" }}>{t.hero.h1}</span>
            <GradientText>{t.hero.h1b}</GradientText>
          </h1>
          <p style={S.heroSub}>{t.hero.sub}</p>
          <div style={S.heroCtaRow}>
            <button style={S.heroCta1} onClick={()=>scrollTo("contact")}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 8px 48px rgba(37,99,235,0.55)"}}
              onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 0 40px rgba(37,99,235,0.38)"}}>
              {t.hero.cta1}
            </button>
            <button style={S.heroCta2} onClick={()=>window.open("tel:0550931993")}
              onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.11)";e.currentTarget.style.transform="translateY(-2px)"}}
              onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.06)";e.currentTarget.style.transform="translateY(0)"}}>
              {t.hero.cta2}
            </button>
          </div>
          <div style={S.heroScroll}><span>{t.hero.scroll}</span><span style={{ animation:"mpc-bounce 2s infinite", display:"block" }}>↓</span></div>
        </div>
        <div style={S.heroStats} className="mpc-desktop-only">
          {t.stats.items.map((s,i)=>(
            <div key={i} style={S.heroStatCard}>
              <div style={{ fontSize:22, fontWeight:800, color:"white" }}>{s.n}</div>
              <div style={{ fontSize:11, color:"rgba(255,255,255,0.44)", marginTop:2 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={S.sectionLight}>
        <div style={S.container}>
          <div style={{ ...S.textCenter, marginBottom:52 }}>
            <div style={S.eyebrow()}>{t.services.eyebrow}</div>
            <h2 style={S.sectionTitle()}>{t.services.title}</h2>
            <p style={{ ...S.sectionSub(), margin:"0 auto" }}>{t.services.sub}</p>
          </div>
          <div style={S.grid4}>
            {t.services.cards.map((card,i)=>(
              <div key={i} style={S.serviceCard}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-6px)";e.currentTarget.style.boxShadow="0 20px 60px rgba(37,99,235,0.13)";e.currentTarget.style.borderColor="rgba(37,99,235,0.18)"}}
                onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 4px 24px rgba(0,0,0,0.06)";e.currentTarget.style.borderColor="rgba(0,0,0,0.06)"}}>
                <div style={{ position:"absolute", top:0, left:0, right:0, height:4, background:`linear-gradient(90deg,${card.col},${card.colb})` }} />
                <div style={{ fontSize:38, marginBottom:18 }}>{card.emoji}</div>
                <h3 style={{ fontSize:19, fontWeight:700, color:"#0f172a", marginBottom:11 }}>{card.title}</h3>
                <p style={{ fontSize:14, color:"#64748b", lineHeight:1.75, marginBottom:18 }}>{card.desc}</p>
                <div style={{ display:"flex", gap:6, flexWrap:"wrap", marginBottom:20 }}>
                  {card.tags.map((tg,j)=><span key={j} style={S.tag(card.col)}>{tg}</span>)}
                </div>
                <button onClick={()=>scrollTo("contact")} style={{ width:"100%", padding:"11px", background:"transparent", border:`2px solid ${card.col}`, color:card.col, borderRadius:10, fontSize:14, fontWeight:600, cursor:"pointer", transition:"all 0.2s", fontFamily:ff }}
                  onMouseEnter={e=>{e.currentTarget.style.background=card.col;e.currentTarget.style.color="white"}}
                  onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.color=card.col}}>
                  {lang==="ar"?"اطلب الخدمة":"Demander un Devis"} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section style={S.sectionDark}>
        <div style={S.container}>
          <div style={{ ...S.textCenter, marginBottom:52 }}>
            <div style={S.eyebrow("#06b6d4")}>{t.pricing.eyebrow}</div>
            <h2 style={S.sectionTitle(true)}>{t.pricing.title}</h2>
            <p style={{ ...S.sectionSub(true), margin:"0 auto" }}>{t.pricing.sub}</p>
          </div>
          <div style={S.grid3}>
            {t.pricing.tiers.map((tier,i)=>(
              <div key={i} style={{ background:tier.pop?"linear-gradient(135deg,#1e3a8a,#1e40af)":"rgba(255,255,255,0.04)", backdropFilter:"blur(20px)", border:tier.pop?"2px solid #3b82f6":"1px solid rgba(255,255,255,0.09)", borderRadius:20, padding:"34px 26px", position:"relative", transform:tier.pop?"scale(1.04)":"scale(1)", boxShadow:tier.pop?"0 20px 60px rgba(37,99,235,0.38)":"none", transition:"all 0.3s" }}
                onMouseEnter={e=>{if(!tier.pop){e.currentTarget.style.borderColor="rgba(255,255,255,0.18)";e.currentTarget.style.transform="scale(1.01)";}}}
                onMouseLeave={e=>{if(!tier.pop){e.currentTarget.style.borderColor="rgba(255,255,255,0.09)";e.currentTarget.style.transform="scale(1)";}}}
              >
                {tier.pop && <div style={{ position:"absolute", top:14, right:isRTL?"auto":14, left:isRTL?14:"auto", background:"#06b6d4", color:"white", borderRadius:20, padding:"3px 13px", fontSize:11, fontWeight:700 }}>{lang==="ar"?"الأكثر طلباً":"Le Plus Populaire"}</div>}
                <div style={{ fontSize:19, fontWeight:700, color:"white", marginBottom:8 }}>{tier.name}</div>
                <div style={{ marginBottom:10 }}>
                  <span style={{ fontSize:tier.price.length>8?22:34, fontWeight:900, color:tier.pop?"#93c5fd":"white" }}>{tier.price}</span>
                  {tier.unit && <span style={{ fontSize:13, color:"rgba(255,255,255,0.44)", marginLeft:6 }}>{tier.unit}</span>}
                </div>
                <p style={{ fontSize:13, color:"rgba(255,255,255,0.44)", marginBottom:22, lineHeight:1.6 }}>{tier.desc}</p>
                <div style={{ marginBottom:26 }}>
                  {tier.feats.map((f,j)=>(
                    <div key={j} style={{ display:"flex", alignItems:"center", gap:9, marginBottom:9, color:"rgba(255,255,255,0.78)", fontSize:14 }}>
                      <span style={{ color:"#06b6d4", fontSize:15, flexShrink:0 }}>✓</span>{f}
                    </div>
                  ))}
                </div>
                <button onClick={()=>scrollTo("contact")} style={{ width:"100%", padding:13, background:tier.pop?"white":"rgba(255,255,255,0.09)", color:tier.pop?"#1e3a8a":"white", border:tier.pop?"none":"1px solid rgba(255,255,255,0.18)", borderRadius:10, fontSize:15, fontWeight:700, cursor:"pointer", transition:"all 0.2s", fontFamily:ff }}
                  onMouseEnter={e=>{e.currentTarget.style.opacity="0.88";e.currentTarget.style.transform="translateY(-1px)"}}
                  onMouseLeave={e=>{e.currentTarget.style.opacity="1";e.currentTarget.style.transform="translateY(0)"}}>
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS + WHY US ── */}
      <section style={S.sectionAlt}>
        <div style={S.container}>
          <div style={{ ...S.textCenter, marginBottom:48 }}>
            <div style={S.eyebrow()}>{t.stats.eyebrow}</div>
            <h2 style={S.sectionTitle()}>{t.stats.title}</h2>
          </div>
          <div style={{ ...S.grid4, marginBottom:72 }}>
            {t.stats.items.map((s,i)=>(
              <div key={i} style={S.statCard}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="0 16px 50px rgba(37,99,235,0.1)"}}
                onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 4px 20px rgba(0,0,0,0.04)"}}>
                <div style={{ fontSize:"2.7rem", fontWeight:900, lineHeight:1, background:"linear-gradient(135deg,#2563eb,#06b6d4)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", marginBottom:8 }}>{s.n}</div>
                <div style={{ fontSize:15, fontWeight:700, color:"#0f172a", marginBottom:3 }}>{s.l}</div>
                <div style={{ fontSize:12, color:"#94a3b8" }}>{s.d}</div>
              </div>
            ))}
          </div>
          <div style={{ ...S.textCenter, marginBottom:40 }}>
            <div style={S.eyebrow()}>{t.whyus.eyebrow}</div>
            <h2 style={S.sectionTitle()}>{t.whyus.title}</h2>
          </div>
          <div style={S.grid2}>
            {t.whyus.items.map((item,i)=>(
              <div key={i} style={S.whyCard}
                onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 8px 30px rgba(37,99,235,0.1)";e.currentTarget.style.borderColor="rgba(37,99,235,0.18)"}}
                onMouseLeave={e=>{e.currentTarget.style.boxShadow="none";e.currentTarget.style.borderColor="rgba(0,0,0,0.06)"}}>
                <div style={{ fontSize:26, flexShrink:0 }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize:15, fontWeight:700, color:"#0f172a", marginBottom:5 }}>{item.t}</div>
                  <div style={{ fontSize:13, color:"#64748b", lineHeight:1.65 }}>{item.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" style={S.sectionDark}>
        <div style={S.container}>
          <div style={{ ...S.textCenter, marginBottom:44 }}>
            <div style={S.eyebrow("#06b6d4")}>{t.portfolio.eyebrow}</div>
            <h2 style={S.sectionTitle(true)}>{t.portfolio.title}</h2>
            <p style={{ ...S.sectionSub(true), margin:"0 auto" }}>{t.portfolio.sub}</p>
          </div>
          <div style={{ display:"flex", gap:8, justifyContent:"center", marginBottom:44, flexWrap:"wrap" }}>
            {t.portfolio.filters.map(f=>(
              <button key={f.k} style={S.filterBtn(filter===f.k)} onClick={()=>setFilter(f.k)}>{f.l}</button>
            ))}
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:20 }}>
            {items.map((item,i)=>(
              <div key={item.title+i} style={S.portCard}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-6px)";e.currentTarget.style.boxShadow="0 20px 60px rgba(0,0,0,0.44)"}}
                onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none"}}>
                <div style={{ height:190, background:`linear-gradient(135deg,${item.bg},${item.bg}cc)`, display:"flex", alignItems:"center", justifyContent:"center", position:"relative", overflow:"hidden" }}>
                  <div style={{ position:"absolute", inset:0, backgroundImage:`radial-gradient(${item.ac}20 1px,transparent 1px)`, backgroundSize:"20px 20px" }} />
                  <span style={{ fontSize:52, position:"relative", zIndex:1 }}>{item.icon}</span>
                  <div style={{ position:"absolute", bottom:10, left:10, right:10 }}>
                    <div style={{ height:5, background:item.ac+"38", borderRadius:3, marginBottom:4 }} />
                    <div style={{ height:3, background:item.ac+"22", borderRadius:2, width:"58%" }} />
                  </div>
                  <div style={{ position:"absolute", top:10, right:isRTL?"auto":10, left:isRTL?10:"auto", background:item.ac+"22", border:`1px solid ${item.ac}44`, borderRadius:20, padding:"3px 9px", fontSize:10, fontWeight:700, color:item.ac, backdropFilter:"blur(10px)" }}>{item.cat.toUpperCase()}</div>
                </div>
                <div style={{ background:"rgba(255,255,255,0.05)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.07)", borderTop:"none", padding:18 }}>
                  <div style={{ fontSize:15, fontWeight:700, color:"white", marginBottom:3 }}>{item.title}</div>
                  <div style={{ fontSize:12, color:"rgba(255,255,255,0.38)" }}>{item.client}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={S.sectionLight}>
        <div style={S.container}>
          <div style={{ ...S.textCenter, marginBottom:52 }}>
            <div style={S.eyebrow()}>{t.contact.eyebrow}</div>
            <h2 style={S.sectionTitle()}>{t.contact.title}</h2>
            <p style={{ ...S.sectionSub(), margin:"0 auto" }}>{t.contact.sub}</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1.55fr", gap:36, alignItems:"start" }} className="mpc-contact-grid">
            <div>
              <h3 style={{ fontSize:19, fontWeight:700, color:"#0f172a", marginBottom:22 }}>{t.contact.info.title}</h3>
              {t.contact.info.items.map((item,i)=>(
                <div key={i} style={S.infoItem}>
                  <div style={S.infoIcon}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize:11, color:"#94a3b8", fontWeight:600, letterSpacing:"1px", textTransform:"uppercase", marginBottom:2 }}>{item.l}</div>
                    <div style={{ fontSize:14, color:"#0f172a", fontWeight:600, wordBreak:"break-all" }}>{item.v}</div>
                  </div>
                </div>
              ))}
              <div style={{ marginTop:28, padding:22, background:"white", borderRadius:14, border:"1px solid rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize:13, fontWeight:700, color:"#0f172a", marginBottom:14 }}>{lang==="ar"?"تابعنا على":"Suivez-nous sur"}</div>
                <div style={{ display:"flex", gap:8 }}>
                  {[{icon:"📘",col:"#1877f2"},{icon:"📸",col:"#e1306c"},{icon:"💼",col:"#0a66c2"},{icon:"🎬",col:"#ff0050"}].map((s,i)=>(
                    <button key={i} style={S.socialBtn(s.col)}
                      onMouseEnter={e=>{e.currentTarget.style.background=s.col}}
                      onMouseLeave={e=>{e.currentTarget.style.background=s.col+"18"}}>
                      {s.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div style={S.formCard}>
              {submitted ? (
                <div style={{ textAlign:"center", padding:"38px 14px" }}>
                  <div style={{ fontSize:60, marginBottom:14 }}>🎉</div>
                  <h3 style={{ fontSize:22, fontWeight:800, color:"#0f172a", marginBottom:10 }}>{t.contact.success.title}</h3>
                  <p style={{ color:"#64748b", lineHeight:1.7, marginBottom:26 }}>{t.contact.success.msg}</p>
                  <button onClick={()=>{setSubmitted(false);setStep(1);setSel({service:"",budget:"",timeline:""});}} style={{ ...S.sendBtn, width:"auto", padding:"12px 28px" }}>{t.contact.success.action}</button>
                </div>
              ) : (
                <>
                  <StepDots />
                  {step===1 && (
                    <div>
                      <h3 style={{ fontSize:17, fontWeight:700, color:"#0f172a", marginBottom:18 }}>{t.contact.s1.q}</h3>
                      <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
                        {t.contact.s1.opts.map((opt,i)=>(
                          <button key={i} style={S.optBtn(sel.service===opt)} onClick={()=>setSel(p=>({...p,service:opt}))}>
                            {sel.service===opt && <span style={{ color:"#2563eb" }}>✓</span>}{opt}
                          </button>
                        ))}
                      </div>
                      <button style={S.nextBtn(!!sel.service)} disabled={!sel.service} onClick={()=>sel.service&&setStep(2)}>{t.contact.next}</button>
                    </div>
                  )}
                  {step===2 && (
                    <div>
                      <h3 style={{ fontSize:16, fontWeight:700, color:"#0f172a", marginBottom:14 }}>{t.contact.s2.bq}</h3>
                      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))", gap:8, marginBottom:24 }}>
                        {t.contact.s2.bs.map((b,i)=><button key={i} style={S.smallOptBtn(sel.budget===b)} onClick={()=>setSel(p=>({...p,budget:b}))}>{b}</button>)}
                      </div>
                      <h3 style={{ fontSize:16, fontWeight:700, color:"#0f172a", marginBottom:14 }}>{t.contact.s2.tq}</h3>
                      <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:8 }}>
                        {t.contact.s2.ts.map((tm,i)=><button key={i} style={S.smallOptBtn(sel.timeline===tm)} onClick={()=>setSel(p=>({...p,timeline:tm}))}>{tm}</button>)}
                      </div>
                      <div style={{ display:"flex", gap:9, marginTop:22 }}>
                        <button style={S.backBtn} onClick={()=>setStep(1)}>{t.contact.back}</button>
                        <button style={{ ...S.sendBtn, opacity:(sel.budget&&sel.timeline)?1:0.45, cursor:(sel.budget&&sel.timeline)?"pointer":"not-allowed" }} disabled={!sel.budget||!sel.timeline} onClick={()=>(sel.budget&&sel.timeline)&&setStep(3)}>{t.contact.next}</button>
                      </div>
                    </div>
                  )}
                  {step===3 && (
                    <div>
                      {[{id:"n",l:t.contact.s3.np,tp:"text"},{id:"e",l:t.contact.s3.ep,tp:"email"},{id:"p",l:t.contact.s3.pp,tp:"tel"}].map(f=>(
                        <div key={f.id} style={{ marginBottom:14 }}>
                          <label style={{ display:"block", fontSize:12, fontWeight:600, color:"#374151", marginBottom:5 }}>{f.l}</label>
                          <input type={f.tp} placeholder={f.l} style={S.formInput}
                            onFocus={e=>e.target.style.borderColor="#2563eb"} onBlur={e=>e.target.style.borderColor="#e2e8f0"} />
                        </div>
                      ))}
                      <div style={{ marginBottom:18 }}>
                        <label style={{ display:"block", fontSize:12, fontWeight:600, color:"#374151", marginBottom:5 }}>{t.contact.s3.mp}</label>
                        <textarea rows={4} placeholder={t.contact.s3.mp} style={S.formTextarea}
                          onFocus={e=>e.target.style.borderColor="#2563eb"} onBlur={e=>e.target.style.borderColor="#e2e8f0"} />
                      </div>
                      <div style={{ display:"flex", gap:9 }}>
                        <button style={S.backBtn} onClick={()=>setStep(2)}>{t.contact.back}</button>
                        <button style={S.sendBtn} onClick={()=>setSubmitted(true)}>{t.contact.send}</button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={S.footer}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={S.footerGrid}>
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:9, marginBottom:14 }}>
                <div style={{ ...S.logoBox, width:34, height:34, fontSize:15 }}>M</div>
                <div><div style={{ ...S.logoText, fontSize:13 }}>Media Presse</div><div style={{ ...S.logoSub, fontSize:9 }}>CONSTANTINE</div></div>
              </div>
              <p style={{ fontSize:13, color:"rgba(255,255,255,0.37)", lineHeight:1.75, maxWidth:210 }}>{t.footer.tagline}</p>
            </div>
            <div>
              <div style={S.footerLabel}>{t.footer.navT}</div>
              {t.footer.navL.map((l,i)=>(
                <button key={i} style={S.footerLink} onClick={()=>scrollTo(NAV_IDS[i])}
                  onMouseEnter={e=>e.target.style.color="#06b6d4"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.48)"}>{l}</button>
              ))}
            </div>
            <div>
              <div style={S.footerLabel}>{t.footer.svcT}</div>
              {t.footer.svcL.map((l,i)=><div key={i} style={{ color:"rgba(255,255,255,0.44)", fontSize:14, padding:"4px 0" }}>{l}</div>)}
            </div>
            <div>
              <div style={S.footerLabel}>{t.footer.ctT}</div>
              <div style={{ color:"rgba(255,255,255,0.68)", fontSize:14, marginBottom:8 }}>📞 0550 93 19 93</div>
              <div style={{ color:"rgba(255,255,255,0.68)", fontSize:12, marginBottom:8, wordBreak:"break-all" }}>✉️ mediapresseconstantine@gmail.com</div>
              <div style={{ color:"rgba(255,255,255,0.68)", fontSize:14 }}>📍 {lang==="ar"?"قسنطينة، الجزائر":"Constantine, Algérie"}</div>
            </div>
          </div>
          <div style={{ borderTop:"1px solid rgba(255,255,255,0.07)", paddingTop:22, textAlign:"center", color:"rgba(255,255,255,0.26)", fontSize:12 }}>{t.footer.legal}</div>
        </div>
      </footer>

      {/* ── CLIENT PORTAL MODAL ── */}
      {showPortal && (
        <div style={S.overlay}>
          <div style={S.overlayBg} onClick={()=>{setShowPortal(false);setShowDash(false);setPortalTab("login");}} />
          <div style={showDash?S.modalLg:S.modal}>
            <button style={S.closeBtn} onClick={()=>{setShowPortal(false);setShowDash(false);setPortalTab("login");}}>✕</button>
            <div style={{ textAlign:"center", marginBottom:24 }}>
              <div style={{ display:"inline-flex", alignItems:"center", gap:8 }}>
                <div style={{ ...S.logoBox, width:32, height:32, fontSize:14 }}>M</div>
                <span style={{ fontWeight:800, color:"white", fontSize:15 }}>{t.portal.title}</span>
              </div>
            </div>
            {!showDash ? (
              <>
                <div style={S.tabRow}>
                  {[["login",t.portal.loginT],["register",t.portal.regT]].map(([key,label])=>(
                    <button key={key} style={S.tabBtn(portalTab===key)} onClick={()=>setPortalTab(key)}>{label}</button>
                  ))}
                </div>
                {portalTab==="login" ? (
                  <div>
                    <label style={S.darkLabel}>{lang==="ar"?"البريد الإلكتروني":"Email"}</label>
                    <input type="email" placeholder="email@exemple.com" style={S.darkInput} onFocus={e=>e.target.style.borderColor="#2563eb"} onBlur={e=>e.target.style.borderColor="rgba(255,255,255,0.1)"} />
                    <label style={S.darkLabel}>{lang==="ar"?"كلمة المرور":"Mot de passe"}</label>
                    <input type="password" placeholder="••••••••" style={S.darkInput} onFocus={e=>e.target.style.borderColor="#2563eb"} onBlur={e=>e.target.style.borderColor="rgba(255,255,255,0.1)"} />
                    <button style={{ color:"#60a5fa", background:"none", border:"none", fontSize:13, cursor:"pointer", marginBottom:18, fontFamily:ff }}>{t.portal.forgot}</button>
                    <button style={S.darkBtn} onClick={()=>setShowDash(true)}>{t.portal.loginBtn}</button>
                    <div style={{ textAlign:"center", color:"rgba(255,255,255,0.28)", fontSize:12, marginBottom:14 }}>— {t.portal.orTxt} —</div>
                    <button style={S.googleBtn}>🔵 {t.portal.googleBtn}</button>
                  </div>
                ) : (
                  <div>
                    {[[lang==="ar"?"الاسم الكامل":"Nom complet","text"],[lang==="ar"?"البريد الإلكتروني":"Email","email"],[lang==="ar"?"كلمة المرور":"Mot de passe","password"]].map(([l,tp],i)=>(
                      <div key={i}><label style={S.darkLabel}>{l}</label><input type={tp} placeholder={l} style={S.darkInput} onFocus={e=>e.target.style.borderColor="#2563eb"} onBlur={e=>e.target.style.borderColor="rgba(255,255,255,0.1)"} /></div>
                    ))}
                    <button style={S.darkBtn} onClick={()=>setShowDash(true)}>{t.portal.regBtn}</button>
                    <div style={{ textAlign:"center", color:"rgba(255,255,255,0.28)", fontSize:12, marginBottom:14 }}>— {t.portal.orTxt} —</div>
                    <button style={S.googleBtn}>🔵 {t.portal.googleBtn}</button>
                  </div>
                )}
              </>
            ) : (
              <div>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:22 }}>
                  <div>
                    <div style={{ fontSize:21, fontWeight:800, color:"white" }}>{t.portal.dash.welcome}</div>
                    <div style={{ fontSize:13, color:"rgba(255,255,255,0.44)", marginTop:2 }}>{t.portal.dash.sub}</div>
                  </div>
                  <button style={{ ...S.portalBtn, fontSize:12 }} onClick={()=>setShowDash(false)}>{t.portal.dash.logout}</button>
                </div>
                <div style={S.tabRow}>
                  {t.portal.dash.tabs.map((tb,i)=><button key={i} style={S.tabBtn(dashTab===i)} onClick={()=>setDashTab(i)}>{tb}</button>)}
                </div>
                {dashTab===0 && (
                  <div>
                    {t.portal.dash.projects.map((proj,i)=>(
                      <div key={i} style={{ background:"rgba(255,255,255,0.04)", borderRadius:12, padding:18, marginBottom:10, border:"1px solid rgba(255,255,255,0.07)" }}>
                        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:12 }}>
                          <div>
                            <div style={{ fontSize:14, fontWeight:700, color:"white" }}>{proj.name}</div>
                            <div style={{ fontSize:11, color:"rgba(255,255,255,0.36)", marginTop:2 }}>{lang==="ar"?"موعد التسليم:":"Livraison:"} {proj.due}</div>
                          </div>
                          <span style={{ background:proj.col+"22", color:proj.col, borderRadius:20, padding:"3px 11px", fontSize:11, fontWeight:700, border:`1px solid ${proj.col}44` }}>{proj.status}</span>
                        </div>
                        <div style={{ background:"rgba(255,255,255,0.07)", borderRadius:100, height:6, overflow:"hidden" }}>
                          <div style={S.progressBar(proj.progress,proj.col)} />
                        </div>
                        <div style={{ fontSize:11, color:"rgba(255,255,255,0.36)", marginTop:5, textAlign:isRTL?"left":"right" }}>{proj.progress}%</div>
                      </div>
                    ))}
                    <button onClick={()=>{setShowPortal(false);scrollTo("contact");}} style={{ width:"100%", padding:11, background:"rgba(37,99,235,0.13)", border:"1px solid rgba(37,99,235,0.28)", color:"#60a5fa", borderRadius:10, fontSize:13, fontWeight:600, cursor:"pointer", marginTop:4, fontFamily:ff }}>
                      + {t.portal.dash.ticket}
                    </button>
                  </div>
                )}
                {dashTab===1 && <div style={{ textAlign:"center", padding:"44px 0" }}><div style={{ fontSize:44, marginBottom:12 }}>📄</div><div style={{ color:"rgba(255,255,255,0.44)", fontSize:14 }}>{lang==="ar"?"لا توجد فواتير بعد":"Aucune facture pour le moment"}</div></div>}
                {dashTab===2 && <div style={{ textAlign:"center", padding:"44px 0" }}><div style={{ fontSize:44, marginBottom:12 }}>🎫</div><div style={{ color:"rgba(255,255,255,0.44)", fontSize:14, marginBottom:16 }}>{lang==="ar"?"لا توجد تذاكر مفتوحة":"Aucun ticket ouvert"}</div><button onClick={()=>{setShowPortal(false);scrollTo("contact");}} style={{ padding:"10px 22px", background:"linear-gradient(135deg,#2563eb,#06b6d4)", color:"white", border:"none", borderRadius:10, fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:ff }}>+ {t.portal.dash.ticket}</button></div>}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── WHATSAPP FLOAT ── */}
      <div style={{ position:"fixed", bottom:24, right:isRTL?"auto":22, left:isRTL?22:"auto", zIndex:999, display:"flex", flexDirection:"column", alignItems:isRTL?"flex-start":"flex-end", gap:10 }}>
        {chatOpen && (
          <div style={S.chatWindow}>
            <div style={{ background:"linear-gradient(135deg,#25d366,#128c7e)", padding:"14px 18px", display:"flex", alignItems:"center", gap:10 }}>
              <div style={{ width:38, height:38, borderRadius:"50%", background:"rgba(255,255,255,0.18)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}>👨‍💻</div>
              <div>
                <div style={{ fontWeight:700, color:"white", fontSize:13 }}>Support MPC</div>
                <div style={{ fontSize:11, color:"rgba(255,255,255,0.72)" }}>● {lang==="ar"?"متصل الآن":"En ligne maintenant"}</div>
              </div>
              <button onClick={()=>setChatOpen(false)} style={{ marginLeft:"auto", background:"none", border:"none", color:"white", cursor:"pointer", fontSize:16, padding:2 }}>✕</button>
            </div>
            <div style={{ padding:"16px 16px 4px" }}>
              <div style={{ background:"rgba(255,255,255,0.06)", borderRadius:"12px 12px 12px 4px", padding:"11px 13px", marginBottom:13 }}>
                <div style={{ fontSize:13, color:"rgba(255,255,255,0.8)", lineHeight:1.65 }}>{lang==="ar"?"مرحباً! 👋 كيف يمكنني مساعدتك اليوم؟":"Bonjour ! 👋 Comment puis-je vous aider ?"}</div>
                <div style={{ fontSize:10, color:"rgba(255,255,255,0.28)", marginTop:5 }}>maintenant</div>
              </div>
              <div style={{ display:"flex", gap:7, marginBottom:14 }}>
                {[lang==="ar"?"طلب عرض سعر":"Demander un devis", lang==="ar"?"دعم تقني":"Support IT"].map((opt,i)=>(
                  <button key={i} onClick={()=>{scrollTo("contact");setChatOpen(false);}} style={{ flex:1, padding:"7px", background:"rgba(37,211,102,0.1)", border:"1px solid rgba(37,211,102,0.2)", color:"#25d366", borderRadius:8, fontSize:11, fontWeight:600, cursor:"pointer", fontFamily:ff }}>{opt}</button>
                ))}
              </div>
            </div>
            <div style={{ display:"flex", gap:7, padding:"0 14px 14px" }}>
              <input placeholder={lang==="ar"?"اكتب رسالتك...":"Tapez votre message..."} style={{ flex:1, padding:"9px 12px", background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.09)", borderRadius:9, color:"white", fontSize:12, outline:"none", fontFamily:ff }} />
              <button onClick={()=>window.open(`https://wa.me/213550931993?text=${encodeURIComponent(lang==="ar"?"مرحبا، أود الاستفسار عن خدماتكم":"Bonjour, je voudrais des informations sur vos services")}`)}
                style={{ width:38, height:38, background:"#25d366", border:"none", borderRadius:9, cursor:"pointer", fontSize:17, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center" }}>➤</button>
            </div>
          </div>
        )}
        <button style={S.whatsBtn} onClick={()=>setChatOpen(!chatOpen)} title="WhatsApp"
          onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.1)";e.currentTarget.style.boxShadow="0 8px 38px rgba(37,211,102,0.55)"}}
          onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.boxShadow="0 4px 28px rgba(37,211,102,0.38)"}}>
          💬
        </button>
      </div>

      <style>{`
        *{margin:0;padding:0;box-sizing:border-box}
        body{overflow-x:hidden;scroll-behavior:smooth}
        @keyframes mpc-bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(8px)}}
        .mpc-desktop-only{display:flex!important}
        .mpc-mobile-only{display:none!important}
        @media(max-width:767px){
          .mpc-desktop-only{display:none!important}
          .mpc-mobile-only{display:flex!important}
          .mpc-contact-grid{grid-template-columns:1fr!important}
        }
        input[type=text]::placeholder,input[type=email]::placeholder,input[type=tel]::placeholder,input[type=password]::placeholder{color:#94a3b8}
        textarea::placeholder{color:#94a3b8}
        [dir=rtl] input[type=text]::placeholder,[dir=rtl] input[type=email]::placeholder,[dir=rtl] textarea::placeholder{color:rgba(255,255,255,0.3)}
        ::-webkit-scrollbar{width:5px}
        ::-webkit-scrollbar-track{background:#0f172a}
        ::-webkit-scrollbar-thumb{background:#2563eb;border-radius:3px}
      `}</style>
    </div>
  );
}
