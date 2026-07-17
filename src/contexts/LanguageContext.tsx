import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  t: (key: string) => string;
  isTransitioning: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Our Clients',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Free Consultation',
    
    // Hero
    'hero.title1': 'We Build Your Digital Presence',
    'hero.title2': 'and Help You Grow',
    'hero.subtitle': 'We are a marketing agency that works with brands that want a strong and clear presence. We help you deliver your message, attract your audience, and build a professional brand image.',
    'hero.tagline': 'We work with simple strategies, clear execution, and visible results.',
    'hero.cta1': 'Start Your Project',
    'hero.cta2': 'View Our Work',
    'hero.stat1.value': '200+',
    'hero.stat1.label': 'Projects',
    'hero.stat2.value': '50+',
    'hero.stat2.label': 'Happy Clients',
    'hero.stat3.value': '5+',
    'hero.stat3.label': 'Years Experience',
    
    // Marquee
    'marquee.brandIdentity': 'Brand Identity',
    'marquee.socialMedia': 'Social Media Management',
    'marquee.paidAds': 'Paid Advertising',
    'marquee.webDev': 'Website Development',
    'marquee.content': 'Content Creation',
    'marquee.growth': 'Operations Management',
    'marquee.uiux': 'Visual Design',
    'marquee.motion': 'Advertising Campaigns',
    
    // About
    'about.tag': 'About Us',
    'about.title': 'Your Marketing Partner,',
    'about.titleHighlight': 'Step by Step',
    'about.description': 'We are a team specialized in marketing, design, and content creation. We believe successful marketing starts with understanding, not hard selling. We understand your idea, define your goal, and turn it into a simple and actionable marketing plan.',
    'about.value1.title': 'Value First',
    'about.value1.desc': 'We prioritize delivering real value over quick wins.',
    'about.value2.title': 'Transparency',
    'about.value2.desc': 'Clear communication at every step of the journey.',
    'about.value3.title': 'Innovation',
    'about.value3.desc': 'Fresh ideas that set your brand apart.',
    'about.value4.title': 'Partnership',
    'about.value4.desc': 'Your success is our success.',
    
    // Vision
    'about.vision.tag': 'Our Vision',
    'about.vision.title': 'Making Brands Closer to People',
    'about.vision.desc': 'We believe that strong brands are the ones people easily understand and feel connected to. Our vision is to help brands build real relationships with their audience and create a clear presence with a noticeable impact in the market.',
    'about.vision.goal': 'Our goal is to ensure every brand we work with has a clear identity and a strong voice.',
    
    // Mission
    'about.mission.tag': 'Our Mission',
    'about.mission.title': 'Clear Marketing Without Complexity',
    'about.mission.desc': 'Our mission is to deliver marketing that is simple, clear, and easy to implement. We focus on clear planning, organized execution, and ideas that truly support the brand.',
    'about.mission.desc2': 'We deliver marketing solutions that fit different stages of brand growth, from early foundation to building a strong and sustainable presence.',
    
    // Services
    'services.tag': 'What We Offer',
    'services.title': 'Integrated Marketing',
    'services.titleHighlight': 'Solutions',
    'services.subtitle': 'We provide comprehensive marketing services that help brands stand out in the market and build a clear, strong image in front of their target audience. We focus on delivering well-thought-out, practical, and easy-to-implement solutions that convey your message smartly, simply, and effectively.',
    'services.brandIdentity.title': 'Visual Identity',
    'services.brandIdentity.desc': 'We design or refine visual identities that reflect the brand\'s spirit and values and align with the business type and target audience. Our goal is to create a clear, consistent identity that works across all platforms.',
    'services.socialMedia.title': 'Social Media Management',
    'services.socialMedia.desc': 'We manage social media accounts professionally, including content scheduling, daily monitoring, and audience interaction. Our goal is to build a consistent and positive brand presence.',
    'services.paidAds.title': 'Advertising Campaigns',
    'services.paidAds.desc': 'We plan and execute structured advertising campaigns that deliver the marketing message to the right audience.',
    'services.webDev.title': 'Website Development',
    'services.webDev.desc': 'We design and develop professional websites that reflect brand identity and provide a smooth user experience across all devices.',
    'services.content.title': 'Content Creation',
    'services.content.desc': 'We create written and visual content that tells the brand story clearly and builds engagement and trust.',
    'services.growth.title': 'Operations Management',
    'services.growth.desc': 'We support brands in managing marketing-related operations to ensure smooth workflows and higher efficiency.',
    'services.design.title': 'Social Media Design',
    'services.design.desc': 'We create attractive and consistent designs for posts, stories, and promotions that strengthen brand presence and visual appeal.',
    
    // Process
    'process.tag': 'How We Work',
    'process.title': 'Clear Steps,',
    'process.titleHighlight': 'Real Outcomes',
    'process.subtitle': 'We start by understanding the brand and its goals, then move to planning, execution, and continuous follow-up. We ensure every step is clear and focused on delivering real, measurable outcomes.',
    'process.step1.title': 'Discover',
    'process.step1.subtitle': 'Understand & Research',
    'process.step1.desc': 'We start by understanding your brand, audience, and goals to build a solid foundation.',
    'process.step2.title': 'Plan',
    'process.step2.subtitle': 'Strategy & Design',
    'process.step2.desc': 'We craft a simple and actionable marketing plan tailored to your needs.',
    'process.step3.title': 'Execute',
    'process.step3.subtitle': 'Launch & Optimize',
    'process.step3.desc': 'We execute campaigns with precision and continuously optimize for better results.',
    
    // Portfolio
    'portfolio.tag': 'Our Clients',
    'portfolio.title': 'Success',
    'portfolio.titleHighlight': 'Partners',
    'portfolio.subtitle': 'We are proud to partner with the best brands who trusted us to build their identity and success.',
    'portfolio.viewAll': 'View All Clients',
    
    // CTA
    'cta.title': 'Let\'s Start Your Marketing Journey Together',
    'cta.subtitle': 'Contact us today and let your brand speak clearly for you.',
    'cta.button1': 'Start Your Project',
    'cta.button2': 'Book a Call',
    
    // Contact
    'contact.tag': 'Get in Touch',
    'contact.title': 'Let\'s',
    'contact.titleHighlight': 'Connect',
    'contact.subtitle': 'Ready to take your brand to the next level? We\'re here to help you achieve your goals.',
    'contact.email.title': 'Email Us',
    'contact.email.desc': 'We\'ll respond within 24 hours',
    'contact.phone.title': 'Call Us',
    'contact.phone.desc': 'Sun-Thu, 9am-6pm',
    'contact.address.title': 'Visit Us',
    'contact.address.value': 'Riyadh',
    'contact.address.desc': 'King Fahd Road, Business District',
    'contact.guarantee.title': 'Quick Response Guarantee',
    'contact.guarantee.desc': 'We respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.',
    'contact.form.title': 'Send Us a Message',
    'contact.form.name': 'Your Name *',
    'contact.form.email': 'Email Address *',
    'contact.form.company': 'Company',
    'contact.form.service': 'Service Interested In',
    'contact.form.serviceSelect': 'Select a service',
    'contact.form.message': 'Your Message *',
    'contact.form.messagePlaceholder': 'Tell us about your project and goals...',
    'contact.form.submit': 'Send Message',
    'contact.form.success': 'Message sent! We\'ll get back to you soon.',
    'contact.info.title': 'Contact Information',
    
    // Footer
    'footer.description': 'Your true growth partner. We help brands grow through integrated marketing strategies and data-driven digital solutions.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.location': 'Location',
    'footer.address': 'Riyadh',
    'footer.email': 'Email:',
    'footer.rights': '© {year} Value Plus. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.aboutUs': 'About Us',
    'footer.ourProcess': 'Our Process',
    'footer.careers': 'Careers',
    
    // Services Page
    'servicesPage.tag': 'What We Do',
    'servicesPage.title': 'Our',
    'servicesPage.titleHighlight': 'Services',
    'servicesPage.subtitle': 'End-to-end marketing solutions designed to accelerate your growth and deliver measurable results.',
    'servicesPage.more.title': 'More Ways We Can Help',
    'servicesPage.more.subtitle': 'Specialized services to complement your marketing strategy',
    'servicesPage.cta.title': 'Ready to Get Started?',
    'servicesPage.cta.subtitle': 'Let\'s discuss how we can help grow your business with our tailored marketing solutions.',
    'servicesPage.cta.button': 'Schedule a Consultation',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.portfolio': 'عملاؤنا',
    'nav.contact': 'تواصل معنا',
    'nav.getStarted': 'استشارة مجانية',
    
    // Hero
    'hero.title1': 'نبني حضورك الرقمي',
    'hero.title2': 'ونساعدك على النمو',
    'hero.subtitle': 'نحن وكالة تسويق نشتغل مع البراندات اللي تبغى تظهر بشكل قوي وواضح. نساعدك توصل رسالتك، تجذب جمهورك، وتبني صورة احترافية لعلامتك التجارية.',
    'hero.tagline': 'نشتغل بخطط بسيطة، تنفيذ واضح، ونتائج تقدر تشوفها.',
    'hero.cta1': 'ابدأ مشروعك',
    'hero.cta2': 'شاهد أعمالنا',
    'hero.stat1.value': '+200',
    'hero.stat1.label': 'مشروع',
    'hero.stat2.value': '+50',
    'hero.stat2.label': 'عميل سعيد',
    'hero.stat3.value': '+5',
    'hero.stat3.label': 'سنوات خبرة',
    
    // Marquee
    'marquee.brandIdentity': 'الهوية البصرية',
    'marquee.socialMedia': 'إدارة السوشال ميديا',
    'marquee.paidAds': 'الحملات الإعلانية',
    'marquee.webDev': 'تطوير المواقع',
    'marquee.content': 'صناعة المحتوى',
    'marquee.growth': 'إدارة العمليات',
    'marquee.uiux': 'التصميم البصري',
    'marquee.motion': 'الإعلانات المدفوعة',
    
    // About
    'about.tag': 'من نحن',
    'about.title': 'شريكك التسويقي،',
    'about.titleHighlight': 'خطوة بخطوة',
    'about.description': 'نحن فريق متخصص في التسويق والتصميم وصناعة المحتوى. نؤمن أن التسويق الناجح يبدأ بالفهم، وليس بالبيع المباشر. نفهم فكرتك، نحدد هدفك، ونحولها إلى خطة تسويقية بسيطة وقابلة للتنفيذ.',
    'about.value1.title': 'القيمة أولاً',
    'about.value1.desc': 'نعطي الأولوية لتقديم قيمة حقيقية.',
    'about.value2.title': 'الشفافية',
    'about.value2.desc': 'تواصل واضح في كل خطوة.',
    'about.value3.title': 'الابتكار',
    'about.value3.desc': 'أفكار جديدة تميز علامتك.',
    'about.value4.title': 'الشراكة',
    'about.value4.desc': 'نجاحك هو نجاحنا.',
    
    // Vision
    'about.vision.tag': 'رؤيتنا',
    'about.vision.title': 'نقرّب العلامات التجارية من الناس',
    'about.vision.desc': 'نؤمن أن العلامة التجارية القوية هي التي يفهمها الناس بسهولة ويشعرون بقربها منهم. رؤيتنا نساعد العلامات التجارية على بناء علاقة حقيقية مع جمهورها، وأن يكون لها حضور واضح وتأثير ملموس في السوق.',
    'about.vision.goal': 'هدفنا أن تمتلك كل علامة تجارية نعمل معها هوية واضحة وصوتًا مميزًا.',
    
    // Mission
    'about.mission.tag': 'مهمتنا',
    'about.mission.title': 'تسويق واضح بدون تعقيد',
    'about.mission.desc': 'مهمتنا هي تقديم تسويق بسيط، واضح، وسهل التنفيذ. نركز على التخطيط الواضح، التنفيذ المنظم، والأفكار التي تدعم العلامة التجارية فعلاً.',
    'about.mission.desc2': 'نقدّم حلول تسويقية تناسب مراحل نمو العلامات التجارية المختلفة، من التأسيس المبكر إلى بناء حضور قوي ومستدام.',
    
    // Services
    'services.tag': 'ماذا نقدم',
    'services.title': 'حلول تسويقية',
    'services.titleHighlight': 'متكاملة',
    'services.subtitle': 'نقدّم خدمات تسويقية شاملة تساعد العلامات التجارية على الظهور بقوة في السوق، وبناء صورة واضحة وقوية أمام المستهدف. تركيزنا هو على تقديم حلول مدروسة، عملية، وسهلة التنفيذ، توصل رسالتك بطريقة ذكية، بسيطة، وفعّالة.',
    'services.brandIdentity.title': 'الهوية البصرية',
    'services.brandIdentity.desc': 'نصمّم أو نطوّر هوية بصرية تعكس روح العلامة التجارية وقيمها، وتناسب طبيعة النشاط والجمهور المستهدف. نحرص على أن تكون الهوية واضحة، متناسقة، وقابلة للتطبيق في جميع المنصات.',
    'services.socialMedia.title': 'إدارة السوشال ميديا',
    'services.socialMedia.desc': 'نُدير حسابات التواصل الاجتماعي باحترافية، من جدولة المحتوى إلى المتابعة اليومية والتفاعل مع الجمهور. هدفنا بناء حضور مستمر وإيجابي للعلامة التجارية.',
    'services.paidAds.title': 'الحملات الإعلانية',
    'services.paidAds.desc': 'نخطط وننفذ حملات إعلانية مدروسة توصل الرسالة التسويقية للجمهور الصحيح.',
    'services.webDev.title': 'تطوير المواقع',
    'services.webDev.desc': 'نصمم وننفذ مواقع احترافية تعكس هوية العلامة التجارية وتقدم تجربة مستخدم سلسة على جميع الأجهزة.',
    'services.content.title': 'صناعة المحتوى',
    'services.content.desc': 'نصنع محتوى كتابي ومرئي يحكي قصة العلامة بوضوح ويبني تفاعل وثقة مع الجمهور.',
    'services.growth.title': 'إدارة العمليات',
    'services.growth.desc': 'ندعم العلامات التجارية في إدارة العمليات المتعلقة بالتسويق لضمان سير العمل بسلاسة وكفاءة أعلى.',
    'services.design.title': 'تصميم السوشال ميديا',
    'services.design.desc': 'نقدّم تصاميم جذابة ومنسّقة للبوستات، القصص، والعروض الترويجية، بأسلوب موحّد يعكس هوية العلامة التجارية ويزيد من جاذبيتها.',
    
    // Process
    'process.tag': 'طريقة عملنا',
    'process.title': 'خطوات واضحة',
    'process.titleHighlight': 'ونتائج ملموسة',
    'process.subtitle': 'نبدأ بفهم العلامة التجارية وأهدافها، ثم ننتقل إلى التخطيط، وبعدها التنفيذ والمتابعة المستمرة. نحرص على أن تكون كل خطوة واضحة، وأن ينعكس العمل بنتائج حقيقة يمكن ملاحظتها.',
    'process.step1.title': 'اكتشاف',
    'process.step1.subtitle': 'الفهم والبحث',
    'process.step1.desc': 'نبدأ بفهم العلامة التجارية وجمهورها وأهدافها لبناء أساس متين.',
    'process.step2.title': 'تخطيط',
    'process.step2.subtitle': 'الاستراتيجية والتصميم',
    'process.step2.desc': 'نصنع خطة تسويقية بسيطة وقابلة للتنفيذ مصممة لاحتياجاتك.',
    'process.step3.title': 'تنفيذ',
    'process.step3.subtitle': 'الإطلاق والتحسين',
    'process.step3.desc': 'ننفذ الحملات بدقة ونحسّنها باستمرار للحصول على نتائج أفضل.',
    
    // Portfolio
    'portfolio.tag': 'عملاؤنا',
    'portfolio.title': 'شركاء',
    'portfolio.titleHighlight': 'النجاح',
    'portfolio.subtitle': 'نفخر بشراكتنا مع أفضل العلامات التجارية التي منحتنا ثقتها لبناء هويتها ونجاحها.',
    'portfolio.viewAll': 'عرض جميع العملاء',
    
    // CTA
    'cta.title': 'خلّنا نبدأ رحلتك التسويقية مع بعض',
    'cta.subtitle': 'تواصل معنا اليوم وخلي براندك يعبّر عنك بسهولة.',
    'cta.button1': 'ابدأ مشروعك',
    'cta.button2': 'احجز مكالمة',
    
    // Contact
    'contact.tag': 'تواصل معنا',
    'contact.title': 'خلّنا',
    'contact.titleHighlight': 'نتواصل',
    'contact.subtitle': 'جاهز ترفع علامتك للمستوى القادم؟ نحن هنا لمساعدتك تحقق أهدافك.',
    'contact.email.title': 'راسلنا',
    'contact.email.desc': 'نرد خلال 24 ساعة',
    'contact.phone.title': 'اتصل بنا',
    'contact.phone.desc': 'أحد-خميس، 9ص-6م',
    'contact.address.title': 'زرنا',
    'contact.address.value': 'الرياض، السعودية',
    'contact.address.desc': 'طريق الملك فهد، منطقة الأعمال',
    'contact.guarantee.title': 'ضمان الرد السريع',
    'contact.guarantee.desc': 'نرد على جميع الاستفسارات خلال 24 ساعة في أيام العمل. للأمور العاجلة، اتصل بنا مباشرة.',
    'contact.form.title': 'أرسل لنا رسالة',
    'contact.form.name': 'اسمك *',
    'contact.form.email': 'البريد الإلكتروني *',
    'contact.form.company': 'الشركة',
    'contact.form.service': 'الخدمة المطلوبة',
    'contact.form.serviceSelect': 'اختر خدمة',
    'contact.form.message': 'رسالتك *',
    'contact.form.messagePlaceholder': 'أخبرنا عن مشروعك وأهدافك...',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.form.success': 'تم إرسال الرسالة! سنتواصل معك قريباً.',
    'contact.info.title': 'معلومات التواصل',
    
    // Footer
    'footer.description': 'شريكك الحقيقي للنمو. نساعد العلامات التجارية على النمو من خلال استراتيجيات تسويقية متكاملة وحلول رقمية مبنية على البيانات.',
    'footer.services': 'خدماتنا',
    'footer.company': 'الشركة',
    'footer.location': 'الموقع',
    'footer.address': 'المملكة العربية السعودية\nالرياض',
    'footer.email': 'البريد الإلكتروني:',
    'footer.rights': '© {year} فاليو بلس. جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.aboutUs': 'من نحن',
    'footer.ourProcess': 'طريقة عملنا',
    'footer.careers': 'الوظائف',
    
    // Services Page
    'servicesPage.tag': 'ماذا نقدم',
    'servicesPage.title': 'جميع',
    'servicesPage.titleHighlight': 'خدماتنا',
    'servicesPage.subtitle': 'حلول تسويقية شاملة مصممة لتسريع نموك وتحقيق نتائج قابلة للقياس.',
    'servicesPage.more.title': 'طرق أخرى لمساعدتك',
    'servicesPage.more.subtitle': 'خدمات متخصصة لتكمل استراتيجيتك التسويقية',
    'servicesPage.cta.title': 'جاهز للبدء؟',
    'servicesPage.cta.subtitle': 'دعنا نناقش كيف يمكننا مساعدة نمو عملك بحلولنا التسويقية المخصصة.',
    'servicesPage.cta.button': 'احجز استشارة',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });
  const [isTransitioning, setIsTransitioning] = useState(false);

  const isRTL = language === 'ar';

  const setLanguage = (newLang: Language) => {
    if (newLang !== language) {
      setIsTransitioning(true);
      // Small delay to show loading before changing
      setTimeout(() => {
        setLanguageState(newLang);
      }, 100);
    }
  };

  const handleTransitionComplete = () => {
    setIsTransitioning(false);
  };

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const t = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations.en];
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL, t, isTransitioning }}>
      {children}
      {isTransitioning && (
        <LanguageTransitionScreen onComplete={handleTransitionComplete} />
      )}
    </LanguageContext.Provider>
  );
};

// Inline transition component to avoid circular imports
const LanguageTransitionScreen = ({ onComplete }: { onComplete: () => void }) => {
  const { useEffect } = React;
  
  useEffect(() => {
    const timer = setTimeout(onComplete, 1600);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return null; // We'll render the actual loading screen in App.tsx
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
