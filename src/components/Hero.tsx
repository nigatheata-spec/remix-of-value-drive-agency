import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { GradFlow } from "gradflow";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-midnight">
      {/* Animated gradient background - matching CTA style */}
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
      
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-midnight/40" />

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-5xl mx-auto text-center ${isRTL ? 'font-["Tajawal"]' : ''}`}>
          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.1 }} 
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white"
          >
            {t('hero.title1')}
            <br />
            <span className="text-white">{t('hero.title2')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.3 }} 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}
          >
            <Button size="lg" className="gap-2 text-base px-8" asChild>
              <Link to="/contact">
                {t('hero.cta1')}
                <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 border-white/50 text-white hover:bg-white hover:text-midnight bg-white/10" asChild>
              <Link to="/portfolio">
                {t('hero.cta2')}
              </Link>
            </Button>
          </motion.div>

          {/* Stats Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.5 }} 
            className={`grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16 pt-16 border-t border-white/20 ${isRTL ? 'direction-rtl' : ''}`}
          >
            {[
              { value: t('hero.stat1.value'), label: t('hero.stat1.label') },
              { value: t('hero.stat2.value'), label: t('hero.stat2.label') },
              { value: t('hero.stat3.value'), label: t('hero.stat3.label') }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
