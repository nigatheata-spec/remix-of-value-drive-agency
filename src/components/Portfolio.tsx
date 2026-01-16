import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { CardStack, CardStackItem } from "./ui/card-stack";
import { Link } from "react-router-dom";

const projects: CardStackItem[] = [
  {
    id: 1,
    title: "Chau Education",
    description: "Complete brand identity and digital presence for educational excellence",
    imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    href: "/portfolio",
    tag: "Branding • Website • Social Media",
  },
  {
    id: 2,
    title: "Muzoon Investment",
    description: "Premium corporate identity reflecting trust and growth",
    imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    href: "/portfolio",
    tag: "Branding • Website • Printing",
  },
  {
    id: 3,
    title: "Sofa Health",
    description: "Modern healthcare branding with intuitive digital experience",
    imageSrc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    href: "/portfolio",
    tag: "Branding • Website • Mobile App",
  },
  {
    id: 4,
    title: "Miras Show",
    description: "Dynamic entertainment brand with captivating animations",
    imageSrc: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=600&h=400&fit=crop",
    href: "/portfolio",
    tag: "Branding • Animation",
  },
  {
    id: 5,
    title: "Al Faisal Group",
    description: "Luxury real estate branding with sophisticated visual language",
    imageSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    href: "/portfolio",
    tag: "Branding • Website • Marketing",
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-sm font-semibold text-primary uppercase tracking-wider"
            >
              Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4"
            >
              Latest <span className="text-primary">Work</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button variant="outline" className="gap-2" asChild>
              <Link to="/portfolio">
                View All Projects
                <ExternalLink className="w-4 h-4" />
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
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-accent/90 text-midnight text-xs font-semibold">
                      {item.tag}
                    </span>
                  </div>
                )}
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
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
