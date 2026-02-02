import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { CardStack, CardStackItem } from "./ui/card-stack";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

// Import real client images
import tihama from "@/assets/clients/tihama.jpg";
import mandyMeydan from "@/assets/clients/mandy-meydan.jpg";
import qalatAlsham from "@/assets/clients/qalat-alsham.jpg";
import laNovia from "@/assets/clients/la-novia.jpg";
import kayaTravel from "@/assets/clients/kaya-travel.jpg";

const projects: CardStackItem[] = [
  {
    id: 1,
    title: "Tihama Restaurant",
    description: "Complete brand identity and visual presence for authentic cuisine",
    imageSrc: tihama,
    href: "/portfolio",
    tag: "Branding • Social Media",
  },
  {
    id: 2,
    title: "Mandy Meydan",
    description: "Premium restaurant identity reflecting tradition and quality",
    imageSrc: mandyMeydan,
    href: "/portfolio",
    tag: "Branding • Photography",
  },
  {
    id: 3,
    title: "Qalat Alsham",
    description: "Authentic Syrian restaurant branding with cultural depth",
    imageSrc: qalatAlsham,
    href: "/portfolio",
    tag: "Branding • Menu Design",
  },
  {
    id: 4,
    title: "La Novia",
    description: "Elegant branding for memorable celebrations",
    imageSrc: laNovia,
    href: "/portfolio",
    tag: "Branding • Event Design",
  },
  {
    id: 5,
    title: "Kaya Travel",
    description: "Dynamic travel agency branding with global appeal",
    imageSrc: kayaTravel,
    href: "/portfolio",
    tag: "Branding • Marketing",
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, isRTL } = useLanguage();

  return (
    <section id="portfolio" className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <div className={isRTL ? 'text-right' : ''}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-sm font-semibold text-primary uppercase tracking-wider"
            >
              {t('portfolio.tag')}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4"
            >
              {t('portfolio.title')} <span className="text-primary">{t('portfolio.titleHighlight')}</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button variant="outline" className={`gap-2 ${isRTL ? 'flex-row-reverse' : ''}`} asChild>
              <Link to="/portfolio">
                {t('portfolio.viewAll')}
                <ExternalLink className={`w-4 h-4 ${isRTL ? 'mr-2' : ''}`} />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Card Stack Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full flex justify-center"
        >
          <CardStack
            items={projects}
            cardWidth={480}
            cardHeight={320}
            autoAdvance={true}
            intervalMs={4000}
            spreadDeg={35}
            overlap={0.45}
            renderCard={(item, { active }) => (
              <div className="relative h-full w-full bg-card overflow-hidden">
                {/* Image */}
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/70 to-transparent" />
                
                {/* Tag */}
                {item.tag && (
                  <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'}`}>
                    <span className="px-3 py-1 rounded-full bg-accent/90 text-midnight text-xs font-semibold">
                      {item.tag}
                    </span>
                  </div>
                )}
                
                {/* Content */}
                <div className={`absolute bottom-0 left-0 right-0 p-6 ${isRTL ? 'text-right' : ''}`}>
                  <h3 className={`text-2xl font-bold text-white transition-all ${active ? 'mb-2' : ''}`}>
                    {item.title}
                  </h3>
                  {active && item.description && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-white/80"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </div>
              </div>
            )}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
