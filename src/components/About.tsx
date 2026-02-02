import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, isRTL } = useLanguage();

  const values = [
    { title: t('about.value1.title'), desc: t('about.value1.desc') },
    { title: t('about.value2.title'), desc: t('about.value2.desc') },
    { title: t('about.value3.title'), desc: t('about.value3.desc') },
    { title: t('about.value4.title'), desc: t('about.value4.desc') },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Primary accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
      
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`grid lg:grid-cols-1 gap-16 items-center`}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={isRTL ? 'text-right' : ''}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              {t('about.tag')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
              {t('about.title')}{" "}
              <span className="text-primary">{t('about.titleHighlight')}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="group"
                >
                  <div className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground">{value.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{value.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
