import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Megaphone, TrendingUp, Globe, Video, BarChart3 } from "lucide-react";
import { GradFlow } from "gradflow";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: Palette,
      title: t('services.brandIdentity.title'),
      description: t('services.brandIdentity.desc')
    },
    {
      icon: Megaphone,
      title: t('services.socialMedia.title'),
      description: t('services.socialMedia.desc')
    },
    {
      icon: TrendingUp,
      title: t('services.paidAds.title'),
      description: t('services.paidAds.desc')
    },
    {
      icon: Globe,
      title: t('services.webDev.title'),
      description: t('services.webDev.desc')
    },
    {
      icon: Video,
      title: t('services.content.title'),
      description: t('services.content.desc')
    },
    {
      icon: BarChart3,
      title: t('services.growth.title'),
      description: t('services.growth.desc')
    }
  ];

  return (
    <section id="services" className="section-padding bg-midnight text-white relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-20">
        <GradFlow config={{
          color1: '#003DFA',
          color2: '#000000',
          color3: '#FFFFFF',
          speed: 0.2,
          scale: 2,
          type: 'smoke',
          noise: 0.03
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isRTL ? 'font-["Tajawal"]' : ''}`}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold text-accent uppercase tracking-wider"
          >
            {t('services.tag')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6"
          >
            {t('services.title')}{" "}
            <span className="text-accent">{t('services.titleHighlight')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-secondary-foreground/70"
          >
            {t('services.subtitle')}
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`group relative bg-midnight-light/50 hover:bg-midnight-light rounded-2xl p-8 transition-all duration-300 border border-white/5 hover:border-accent/30 backdrop-blur-sm ${isRTL ? 'text-right' : ''}`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors ${isRTL ? 'mr-auto' : 'ml-0'}`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-secondary-foreground/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
