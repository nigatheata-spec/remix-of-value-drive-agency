import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Megaphone, TrendingUp, Globe, Video, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Create a unique, consistent visual system that defines your brand and makes it memorable."
  },
  {
    icon: Megaphone,
    title: "Social Media Management",
    description: "Strategic content creation and community management across all social platforms."
  },
  {
    icon: TrendingUp,
    title: "Paid Advertising",
    description: "Data-driven campaigns that maximize ROI across Google, Meta, and other platforms."
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Beautiful, high-performing websites that convert visitors into customers."
  },
  {
    icon: Video,
    title: "Content Production",
    description: "Engaging videos, photography, and creative assets that tell your story."
  },
  {
    icon: BarChart3,
    title: "Growth Strategy",
    description: "Comprehensive planning and consulting to scale your business sustainably."
  }
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  return (
    <section id="services" className="section-padding bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold text-accent uppercase tracking-wider"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6"
          >
            Everything You Need to{" "}
            <span className="text-accent">Grow</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-secondary-foreground/70"
          >
            Comprehensive solutions tailored to your needs—from brand strategy 
            to execution, we've got you covered.
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
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group bg-background rounded-2xl p-8 border border-border hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
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
