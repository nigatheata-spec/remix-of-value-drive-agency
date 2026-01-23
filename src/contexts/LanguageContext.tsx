import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    
    // Hero
    'hero.title1': 'Grow Smarter.',
    'hero.title2': 'Deliver Real Value.',
    'hero.subtitle': 'We help brands grow through integrated marketing strategies, impactful content, and data-driven digital solutions—turning every opportunity into measurable results.',
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
    'marquee.content': 'Content Production',
    'marquee.growth': 'Growth Strategy',
    'marquee.uiux': 'UI/UX Design',
    'marquee.motion': 'Motion Graphics',
    
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
    
    // Services
    'services.tag': 'Our Services',
    'services.title': 'Everything You Need to',
    'services.titleHighlight': 'Grow',
    'services.subtitle': 'Comprehensive solutions tailored to your needs—from brand strategy to execution, we\'ve got you covered.',
    'services.brandIdentity.title': 'Brand Identity',
    'services.brandIdentity.desc': 'Create a unique, consistent visual system that defines your brand and makes it memorable.',
    'services.socialMedia.title': 'Social Media Management',
    'services.socialMedia.desc': 'Strategic content creation and community management across all social platforms.',
    'services.paidAds.title': 'Paid Advertising',
    'services.paidAds.desc': 'Data-driven campaigns that maximize ROI across Google, Meta, and other platforms.',
    'services.webDev.title': 'Website Development',
    'services.webDev.desc': 'Beautiful, high-performing websites that convert visitors into customers.',
    'services.content.title': 'Content Production',
    'services.content.desc': 'Engaging videos, photography, and creative assets that tell your story.',
    'services.growth.title': 'Growth Strategy',
    'services.growth.desc': 'Comprehensive planning and consulting to scale your business sustainably.',
    
    // Process
    'process.tag': 'Our Process',
    'process.title': 'How We',
    'process.titleHighlight': 'Work',
    'process.subtitle': 'Clear steps, real outcomes. We ensure every step is focused on delivering measurable results.',
    'process.step1.title': 'Discover',
    'process.step1.subtitle': 'Research & Strategy',
    'process.step1.desc': 'We start by understanding your brand, audience, and goals to build a solid foundation.',
    'process.step2.title': 'Create',
    'process.step2.subtitle': 'Design & Development',
    'process.step2.desc': 'Our team crafts compelling visuals and content that resonate with your audience.',
    'process.step3.title': 'Launch',
    'process.step3.subtitle': 'Execute & Optimize',
    'process.step3.desc': 'We execute campaigns with precision and continuously optimize for better results.',
    
    // Portfolio
    'portfolio.tag': 'Our Work',
    'portfolio.title': 'Featured',
    'portfolio.titleHighlight': 'Projects',
    'portfolio.subtitle': 'Take a look at some of our recent work and see how we help brands achieve their goals.',
    'portfolio.viewAll': 'View All Projects',
    
    // CTA
    'cta.title': 'Ready to Grow Your Brand?',
    'cta.subtitle': "Let's discuss how we can help you achieve measurable results and build a brand that stands out in the market.",
    'cta.button1': 'Start Your Project',
    'cta.button2': 'Book a Call',
    
    // Footer
    'footer.description': 'Your true growth partner. We help brands grow through integrated marketing strategies and data-driven digital solutions.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.location': 'Location',
    'footer.address': 'Saudi Arabia\nRiyadh, Kingdom of Saudi Arabia',
    'footer.email': 'Email:',
    'footer.rights': '© {year} Value Plus. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.aboutUs': 'About Us',
    'footer.ourProcess': 'Our Process',
    'footer.careers': 'Careers',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.portfolio': 'أعمالنا',
    'nav.contact': 'تواصل معنا',
    'nav.getStarted': 'ابدأ الآن',
    
    // Hero
    'hero.title1': 'نبني حضورك الرقمي',
    'hero.title2': 'ونساعدك على النمو',
    'hero.subtitle': 'نحن وكالة تسويق نشتغل مع البراندات اللي تبغى تظهر بشكل قوي وواضح. نساعدك توصل رسالتك، تجذب جمهورك، وتبني صورة احترافية لعلامتك التجارية.',
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
    'marquee.paidAds': 'الإعلانات المدفوعة',
    'marquee.webDev': 'تطوير المواقع',
    'marquee.content': 'صناعة المحتوى',
    'marquee.growth': 'استراتيجية النمو',
    'marquee.uiux': 'تصميم الواجهات',
    'marquee.motion': 'موشن جرافيك',
    
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
    
    // Services
    'services.tag': 'خدماتنا',
    'services.title': 'كل ما تحتاجه',
    'services.titleHighlight': 'للنمو',
    'services.subtitle': 'نقدّم حلول تسويقية شاملة تساعد العلامات التجارية على الظهور بقوة في السوق، وبناء صورة واضحة ومميزة أمام الجمهور المستهدف.',
    'services.brandIdentity.title': 'الهوية البصرية',
    'services.brandIdentity.desc': 'نصمّم أو نطوّر هوية بصرية تعكس روح العلامة التجارية وقيمها، وتناسب طبيعة النشاط والجمهور المستهدف.',
    'services.socialMedia.title': 'إدارة السوشال ميديا',
    'services.socialMedia.desc': 'نُدير حسابات التواصل الاجتماعي باحترافية، من جدولة المحتوى إلى التفاعل اليومي مع الجمهور.',
    'services.paidAds.title': 'الإعلانات المدفوعة',
    'services.paidAds.desc': 'نخطط وننفذ حملات إعلانية مدروسة توصل رسالتك للجمهور الصحيح.',
    'services.webDev.title': 'تطوير المواقع',
    'services.webDev.desc': 'نصمم وننفذ مواقع احترافية تعكس هوية العلامة وتقدم تجربة مستخدم سلسة.',
    'services.content.title': 'صناعة المحتوى',
    'services.content.desc': 'نصنع محتوى كتابي ومرئي يحكي قصة العلامة بوضوح ويبني تفاعل وثقة.',
    'services.growth.title': 'إدارة العمليات',
    'services.growth.desc': 'ندعم العلامات التجارية في إدارة العمليات التسويقية لضمان سير العمل بكفاءة.',
    
    // Process
    'process.tag': 'طريقة عملنا',
    'process.title': 'كيف',
    'process.titleHighlight': 'نعمل',
    'process.subtitle': 'خطوات واضحة ونتائج ملموسة. نحرص أن تكون كل خطوة واضحة، وأن ينعكس العمل بنتائج حقيقة يمكن ملاحظتها.',
    'process.step1.title': 'اكتشاف',
    'process.step1.subtitle': 'البحث والاستراتيجية',
    'process.step1.desc': 'نبدأ بفهم العلامة التجارية وأهدافها لبناء أساس متين.',
    'process.step2.title': 'إنشاء',
    'process.step2.subtitle': 'التصميم والتطوير',
    'process.step2.desc': 'فريقنا يصنع محتوى ومرئيات تتواصل مع جمهورك.',
    'process.step3.title': 'إطلاق',
    'process.step3.subtitle': 'التنفيذ والتحسين',
    'process.step3.desc': 'ننفذ الحملات بدقة ونحسّنها باستمرار للحصول على نتائج أفضل.',
    
    // Portfolio
    'portfolio.tag': 'أعمالنا',
    'portfolio.title': 'مشاريع',
    'portfolio.titleHighlight': 'مميزة',
    'portfolio.subtitle': 'ألقِ نظرة على بعض أعمالنا الأخيرة وشاهد كيف نساعد العلامات التجارية على تحقيق أهدافها.',
    'portfolio.viewAll': 'عرض جميع المشاريع',
    
    // CTA
    'cta.title': 'جاهز لتنمية علامتك التجارية؟',
    'cta.subtitle': 'خلّنا نبدأ رحلتك التسويقية معاً. تواصل معنا اليوم وخلي براندك يعبّر عنك بسهولة.',
    'cta.button1': 'ابدأ مشروعك',
    'cta.button2': 'احجز مكالمة',
    
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
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  const isRTL = language === 'ar';

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
    <LanguageContext.Provider value={{ language, setLanguage, isRTL, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
