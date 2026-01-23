import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MessageCircle, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { GradFlow } from "gradflow";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, isRTL } = useLanguage();

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 md:p-16 overflow-hidden"
        >
          <div className="absolute inset-0">
            <GradFlow config={{ color1: '#003DFA', color2: '#000000', color3: '#1a1a2e', speed: 0.25, scale: 1.3, type: 'stripe', noise: 0.08 }} />
          </div>
          <div className="absolute inset-0 bg-midnight/30" />

          <div className={`relative z-10 max-w-3xl mx-auto text-center ${isRTL ? 'font-["Tajawal"]' : ''}`}>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t('cta.title')}
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
              {t('cta.subtitle')}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2 text-base px-8" asChild>
                <Link to="/contact">
                  {t('cta.button1')}
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className={`border-white/30 text-white hover:bg-white/10 gap-2 text-base px-8 ${isRTL ? 'flex-row-reverse' : ''}`} asChild>
                <Link to="/contact">
                  <MessageCircle className="w-4 h-4" />
                  {t('cta.button2')}
                </Link>
              </Button>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className={`flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 pt-10 border-t border-white/10 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <a href="mailto:hello@valueplus.sa" className={`flex items-center gap-2 text-white/70 hover:text-white transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Mail className="w-4 h-4" />
                <span>hello@valueplus.sa</span>
              </a>
              <a href="tel:+966500000000" className={`flex items-center gap-2 text-white/70 hover:text-white transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Phone className="w-4 h-4" />
                <span>+966 50 000 0000</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
