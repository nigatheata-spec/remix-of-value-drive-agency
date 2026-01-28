import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Palette, 
  Megaphone, 
  TrendingUp, 
  Globe, 
  Video, 
  BarChart3,
  Sparkles,
  Target,
  PenTool,
  Camera,
  Share2,
  Zap
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesPage = () => {
  const { t, isRTL } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Palette,
      title: t('services.brandIdentity.title'),
      description: t('services.brandIdentity.desc'),
      features: isRTL 
        ? ["تصميم الشعار", "لوحة الألوان", "نظام الخطوط", "دليل الهوية", "تصميم القرطاسية"]
        : ["Logo Design", "Color Palette", "Typography System", "Brand Guidelines", "Stationery Design"],
      color: "primary"
    },
    {
      icon: Megaphone,
      title: t('services.socialMedia.title'),
      description: t('services.socialMedia.desc'),
      features: isRTL
        ? ["استراتيجية المحتوى", "تصميم المنشورات", "إدارة المجتمع", "تقارير التحليلات", "نمو التفاعل"]
        : ["Content Strategy", "Post Design", "Community Management", "Analytics Reporting", "Engagement Growth"],
      color: "accent"
    },
    {
      icon: TrendingUp,
      title: t('services.paidAds.title'),
      description: t('services.paidAds.desc'),
      features: isRTL
        ? ["إعلانات جوجل", "إعلانات ميتا", "إعلانات تيك توك", "إعادة الاستهداف", "اختبار A/B"]
        : ["Google Ads", "Meta Ads", "TikTok Ads", "Retargeting", "A/B Testing"],
      color: "primary"
    },
    {
      icon: Globe,
      title: t('services.webDev.title'),
      description: t('services.webDev.desc'),
      features: isRTL
        ? ["تصميم الواجهات", "التطوير المتجاوب", "التجارة الإلكترونية", "تحسين SEO", "دمج CMS"]
        : ["UI/UX Design", "Responsive Development", "E-commerce", "SEO Optimization", "CMS Integration"],
      color: "accent"
    },
    {
      icon: Video,
      title: t('services.content.title'),
      description: t('services.content.desc'),
      features: isRTL
        ? ["إنتاج الفيديو", "التصوير", "موشن جرافيك", "إنتاج البودكاست", "البث المباشر"]
        : ["Video Production", "Photography", "Motion Graphics", "Podcast Production", "Live Streaming"],
      color: "primary"
    },
    {
      icon: BarChart3,
      title: t('services.growth.title'),
      description: t('services.growth.desc'),
      features: isRTL
        ? ["بحث السوق", "تحليل المنافسين", "خارطة النمو", "تتبع المؤشرات", "الاستشارات"]
        : ["Market Research", "Competitor Analysis", "Growth Roadmap", "KPI Tracking", "Consultation"],
      color: "accent"
    },
  ];

  const additionalServices = [
    { icon: PenTool, title: isRTL ? "كتابة المحتوى" : "Copywriting", desc: isRTL ? "نصوص مقنعة تحقق النتائج" : "Compelling copy that converts" },
    { icon: Camera, title: isRTL ? "التصوير" : "Photography", desc: isRTL ? "صور احترافية للعلامة" : "Professional brand imagery" },
    { icon: Share2, title: isRTL ? "التسويق عبر المؤثرين" : "Influencer Marketing", desc: isRTL ? "شراكات استراتيجية" : "Strategic partnerships" },
    { icon: Zap, title: isRTL ? "أتمتة التسويق" : "Marketing Automation", desc: isRTL ? "سير عمل مبسط" : "Streamlined workflows" },
    { icon: Target, title: isRTL ? "توليد العملاء" : "Lead Generation", desc: isRTL ? "عملاء محتملين بجودة عالية" : "Quality leads on demand" },
    { icon: Sparkles, title: isRTL ? "دمج الذكاء الاصطناعي" : "AI Integration", desc: isRTL ? "أدوات تسويق ذكية" : "Smart marketing tools" },
  ];

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-midnight overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsla(var(--royal-blue)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsla(var(--royal-blue)/0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold text-accent uppercase tracking-wider"
          >
            {t('servicesPage.tag')}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6 text-white"
          >
            {t('servicesPage.title')} <span className="text-primary">{t('servicesPage.titleHighlight')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl"
          >
            {t('servicesPage.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="section-padding" ref={ref}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover-lift ${isRTL ? 'text-right' : ''}`}
              >
                <div className={`w-14 h-14 rounded-xl ${service.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} flex items-center justify-center mb-6 ${isRTL ? 'mr-0 ml-auto' : ''}`}>
                  <service.icon className={`w-7 h-7 ${service.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className={`flex items-center gap-2 text-sm text-muted-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-midnight">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('servicesPage.more.title')}
            </h2>
            <p className="text-white/70">
              {t('servicesPage.more.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
              >
                <service.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-white text-sm mb-1">{service.title}</h4>
                <p className="text-xs text-white/60">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            {t('servicesPage.cta.title')}
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            {t('servicesPage.cta.subtitle')}
          </p>
          <Button size="lg" variant="secondary" className="text-base px-8" asChild>
            <Link to="/contact">{t('servicesPage.cta.button')}</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
