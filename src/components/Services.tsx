import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Megaphone, TrendingUp, Globe, Video, BarChart3, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Create a unique, consistent visual system that defines your brand and makes it memorable.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity"]
  },
  {
    icon: Megaphone,
    title: "Social Media",
    description: "Strategic content creation and community management across all social platforms.",
    features: ["Content Strategy", "Community Management", "Analytics"]
  },
  {
    icon: TrendingUp,
    title: "Paid Advertising",
    description: "Data-driven campaigns that maximize ROI across Google, Meta, and other platforms.",
    features: ["Google Ads", "Meta Ads", "Performance Tracking"]
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Beautiful, high-performing websites that convert visitors into customers.",
    features: ["Custom Design", "Responsive Build", "SEO Optimization"]
  },
  {
    icon: Video,
    title: "Content Production",
    description: "Engaging videos, photography, and creative assets that tell your story.",
    features: ["Video Production", "Photography", "Motion Graphics"]
  },
  {
    icon: BarChart3,
    title: "Growth Strategy",
    description: "Comprehensive planning and consulting to scale your business sustainably.",
    features: ["Market Research", "Strategy Planning", "Consulting"]
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
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold text-primary uppercase tracking-wider"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6"
          >
            Services That <span className="text-primary">Drive Results</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-secondary-foreground/70"
          >
            End-to-end solutions to elevate your brand and accelerate growth.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group relative bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-secondary-foreground/60 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-sm text-secondary-foreground/50 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Arrow */}
              <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
