import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Settings, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, isRTL } = useLanguage();

  const steps = [
    {
      number: "01",
      icon: Rocket,
      title: t('process.step1.title'),
      subtitle: t('process.step1.subtitle'),
      description: t('process.step1.desc'),
      color: "primary"
    },
    {
      number: "02",
      icon: Settings,
      title: t('process.step2.title'),
      subtitle: t('process.step2.subtitle'),
      description: t('process.step2.desc'),
      color: "accent"
    },
    {
      number: "03",
      icon: Zap,
      title: t('process.step3.title'),
      subtitle: t('process.step3.subtitle'),
      description: t('process.step3.desc'),
      color: "primary"
    }
  ];

  return (
    <section id="process" className="section-padding relative overflow-hidden bg-background">
      {/* Decorative lime line */}
      <div className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} w-1 h-full bg-gradient-to-b from-accent via-primary to-accent opacity-20`} />
      
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-20 ${isRTL ? 'font-["Tajawal"]' : ''}`}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold text-primary uppercase tracking-wider"
          >
            {t('process.tag')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6"
          >
            {t('process.title')}{" "}
            <span className="text-primary">{t('process.titleHighlight')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            {t('process.subtitle')}
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-20 -translate-y-1/2" />

          <div className={`grid lg:grid-cols-3 gap-8 lg:gap-12 ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="relative"
              >
                {/* Card */}
                <div className={`bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover-lift ${isRTL ? 'text-right' : ''}`}>
                  {/* Step Number */}
                  <div className={`flex items-center justify-between mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="text-6xl font-black text-secondary">{step.number}</span>
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${step.color === "accent" ? "bg-accent/20" : "bg-primary/20"}`}>
                      <step.icon className={`w-7 h-7 ${step.color === "accent" ? "text-accent" : "text-primary"}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <span className={`text-sm font-medium ${step.color === "accent" ? "text-accent" : "text-primary"}`}>
                    {step.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Decorative dot */}
                  <div className={`hidden lg:block absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 ${step.color === "accent" ? "bg-accent border-background" : "bg-primary border-background"}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
