import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Megaphone, TrendingUp, Globe, Video, BarChart3 } from "lucide-react";
import { GradFlow } from "gradflow";

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
    <section id="services" className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-20">
        <GradFlow config={{
          color1: '#003DFA',
          color2: '#00102A',
          color3: '#001a6e',
          speed: 0.2,
          scale: 2,
          type: 'smoke',
          noise: 0.03
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
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
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative bg-midnight-light/50 hover:bg-midnight-light rounded-2xl p-8 transition-all duration-300 border border-white/5 hover:border-accent/30 backdrop-blur-sm"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
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
