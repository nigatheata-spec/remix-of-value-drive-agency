import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Target, PenTool, Camera, Share2, Zap, ArrowRight } from "lucide-react";
import visualIdentityIcon from "@/assets/icons/visual-identity.svg";
import socialMediaIcon from "@/assets/icons/social-media-management.svg";
import advertisingIcon from "@/assets/icons/advertising-campaigns.svg";
import webDevIcon from "@/assets/icons/website-development.svg";
import contentCreationIcon from "@/assets/icons/content-creation.svg";
import operationsIcon from "@/assets/icons/operations-management.svg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { GradFlow } from "gradflow";
const ServicesPage = () => {
  const {
    t,
    isRTL
  } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const services = [{
    icon: visualIdentityIcon,
    title: t('services.brandIdentity.title'),
    description: t('services.brandIdentity.desc'),
    features: isRTL ? ["تصميم الشعار", "لوحة الألوان", "نظام الخطوط", "دليل الهوية", "تصميم القرطاسية"] : ["Logo Design", "Color Palette", "Typography System", "Brand Guidelines", "Stationery Design"]
  }, {
    icon: socialMediaIcon,
    title: t('services.socialMedia.title'),
    description: t('services.socialMedia.desc'),
    features: isRTL ? ["استراتيجية المحتوى", "تصميم المنشورات", "إدارة المجتمع", "تقارير التحليلات", "نمو التفاعل"] : ["Content Strategy", "Post Design", "Community Management", "Analytics Reporting", "Engagement Growth"]
  }, {
    icon: advertisingIcon,
    title: t('services.paidAds.title'),
    description: t('services.paidAds.desc'),
    features: isRTL ? ["إعلانات جوجل", "إعلانات ميتا", "إعلانات تيك توك", "إعادة الاستهداف", "اختبار A/B"] : ["Google Ads", "Meta Ads", "TikTok Ads", "Retargeting", "A/B Testing"]
  }, {
    icon: webDevIcon,
    title: t('services.webDev.title'),
    description: t('services.webDev.desc'),
    features: isRTL ? ["تصميم الواجهات", "التطوير المتجاوب", "التجارة الإلكترونية", "تحسين SEO", "دمج CMS"] : ["UI/UX Design", "Responsive Development", "E-commerce", "SEO Optimization", "CMS Integration"]
  }, {
    icon: contentCreationIcon,
    title: t('services.content.title'),
    description: t('services.content.desc'),
    features: isRTL ? ["إنتاج الفيديو", "التصوير", "موشن جرافيك", "إنتاج البودكاست", "البث المباشر"] : ["Video Production", "Photography", "Motion Graphics", "Podcast Production", "Live Streaming"]
  }, {
    icon: operationsIcon,
    title: t('services.growth.title'),
    description: t('services.growth.desc'),
    features: isRTL ? ["بحث السوق", "تحليل المنافسين", "خارطة النمو", "تتبع المؤشرات", "الاستشارات"] : ["Market Research", "Competitor Analysis", "Growth Roadmap", "KPI Tracking", "Consultation"]
  }];
  const additionalServices = [{
    icon: PenTool,
    title: isRTL ? "كتابة المحتوى" : "Copywriting",
    desc: isRTL ? "نصوص مقنعة تحقق النتائج" : "Compelling copy that converts"
  }, {
    icon: Camera,
    title: isRTL ? "التصوير" : "Photography",
    desc: isRTL ? "صور احترافية للعلامة" : "Professional brand imagery"
  }, {
    icon: Share2,
    title: isRTL ? "التسويق عبر المؤثرين" : "Influencer Marketing",
    desc: isRTL ? "شراكات استراتيجية" : "Strategic partnerships"
  }, {
    icon: Zap,
    title: isRTL ? "أتمتة التسويق" : "Marketing Automation",
    desc: isRTL ? "سير عمل مبسط" : "Streamlined workflows"
  }, {
    icon: Target,
    title: isRTL ? "توليد العملاء" : "Lead Generation",
    desc: isRTL ? "عملاء محتملين بجودة عالية" : "Quality leads on demand"
  }, {
    icon: Sparkles,
    title: isRTL ? "دمج الذكاء الاصطناعي" : "AI Integration",
    desc: isRTL ? "أدوات تسويق ذكية" : "Smart marketing tools"
  }];
  return <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <SEO
        title="Services — Performance & Digital Marketing in Saudi Arabia | Value Plus"
        description="Growth marketing, performance marketing, Meta Ads, Google Ads, CRO, Shopify, website design, brand strategy, content and social media marketing for brands in Saudi Arabia, UAE and the Gulf."
        path="/services"
        keywords="growth marketing, performance marketing, digital marketing, marketing agency, lead generation, Meta Ads, Google Ads, CRO, Shopify, website design, brand strategy, content marketing, social media marketing, AI automation, CRM, sales automation, revenue operations, business consulting"
      />
      <Header />
      
      {/* Hero Section - Matching other pages */}
      <section className="relative pt-32 pb-24 bg-midnight overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <GradFlow config={{
          color1: '#003DFA',
          color2: '#000000',
          color3: '#FFFFFF',
          speed: 0.25,
          scale: 1.3,
          type: 'stripe',
          noise: 0.08
        }} />
        </div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-midnight/50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} className={`max-w-4xl ${isRTL ? 'text-right' : ''}`}>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {t('servicesPage.title')} <span className="text-white">{t('servicesPage.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl">
              {t('servicesPage.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="section-padding" ref={ref}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className={`group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover-lift ${isRTL ? 'text-right' : ''}`}>
                <div className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 ${isRTL ? 'mr-0 ml-auto' : ''}`}>
                  <img src={service.icon} alt="" className="w-7 h-7 dark:invert" />
                </div>
                
                <h2 className="text-xl font-semibold mb-3">{service.title}</h2>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, i) => <li key={i} className={`flex items-center gap-2 text-sm text-muted-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>)}
                </ul>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              {t('servicesPage.more.title')}
            </h2>
            <p className="text-secondary-foreground/70">
              {t('servicesPage.more.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalServices.map((service, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: index * 0.05
          }} viewport={{
            once: true
          }} className="bg-secondary-foreground/5 rounded-xl p-6 text-center hover:bg-secondary-foreground/10 transition-colors">
                <service.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-secondary-foreground text-sm mb-1">{service.title}</h3>
                <p className="text-xs text-secondary-foreground/60">{service.desc}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* CTA Section - Matching other pages */}
      <section className="py-24 bg-midnight relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <GradFlow config={{
          color1: '#003DFA',
          color2: '#000000',
          color3: '#FFFFFF',
          speed: 0.25,
          scale: 1.3,
          type: 'stripe',
          noise: 0.08
        }} />
        </div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-midnight/50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t('servicesPage.cta.title')}
              </h2>
              <p className="text-xl text-white/70 mb-10 max-w-xl mx-auto">
                {t('servicesPage.cta.subtitle')}
              </p>
              <Button size="lg" className={`gap-2 text-base px-10 py-6 ${isRTL ? 'flex-row-reverse' : ''}`} asChild>
                <Link to="/contact">
                  {t('servicesPage.cta.button')}
                  <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default ServicesPage;