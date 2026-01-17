import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Palette, 
  Megaphone, 
  TrendingUp, 
  Globe, 
  Video, 
  BarChart3,
  Sparkles,
  Target,
  PenTool,
  Camera,
  Share2,
  Zap
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Create a unique, consistent visual system that defines your brand and makes it memorable.",
    features: ["Logo Design", "Color Palette", "Typography System", "Brand Guidelines", "Stationery Design"],
    color: "primary"
  },
  {
    icon: Megaphone,
    title: "Social Media Management",
    description: "Strategic content creation and community management across all social platforms.",
    features: ["Content Strategy", "Post Design", "Community Management", "Analytics Reporting", "Engagement Growth"],
    color: "accent"
  },
  {
    icon: TrendingUp,
    title: "Paid Advertising",
    description: "Data-driven campaigns that maximize ROI across Google, Meta, and other platforms.",
    features: ["Google Ads", "Meta Ads", "TikTok Ads", "Retargeting", "A/B Testing"],
    color: "primary"
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Beautiful, high-performing websites that convert visitors into customers.",
    features: ["UI/UX Design", "Responsive Development", "E-commerce", "SEO Optimization", "CMS Integration"],
    color: "accent"
  },
  {
    icon: Video,
    title: "Content Production",
    description: "Engaging videos, photography, and creative assets that tell your story.",
    features: ["Video Production", "Photography", "Motion Graphics", "Podcast Production", "Live Streaming"],
    color: "primary"
  },
  {
    icon: BarChart3,
    title: "Growth Strategy",
    description: "Comprehensive planning and consulting to scale your business sustainably.",
    features: ["Market Research", "Competitor Analysis", "Growth Roadmap", "KPI Tracking", "Consultation"],
    color: "accent"
  },
];

const additionalServices = [
  { icon: PenTool, title: "Copywriting", desc: "Compelling copy that converts" },
  { icon: Camera, title: "Photography", desc: "Professional brand imagery" },
  { icon: Share2, title: "Influencer Marketing", desc: "Strategic partnerships" },
  { icon: Zap, title: "Marketing Automation", desc: "Streamlined workflows" },
  { icon: Target, title: "Lead Generation", desc: "Quality leads on demand" },
  { icon: Sparkles, title: "AI Integration", desc: "Smart marketing tools" },
];

const ServicesPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsla(var(--royal-blue)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsla(var(--royal-blue)/0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold text-accent uppercase tracking-wider"
          >
            What We Do
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6 text-secondary-foreground"
          >
            Our <span className="text-primary">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-secondary-foreground/70 max-w-2xl"
          >
            End-to-end marketing solutions designed to accelerate your growth and deliver measurable results.
          </motion.p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="section-padding" ref={ref}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover-lift"
              >
                <div className={`w-14 h-14 rounded-xl ${service.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} flex items-center justify-center mb-6`}>
                  <service.icon className={`w-7 h-7 ${service.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              More Ways We Can Help
            </h2>
            <p className="text-secondary-foreground/70">
              Specialized services to complement your marketing strategy
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-secondary-foreground/5 rounded-xl p-6 text-center hover:bg-secondary-foreground/10 transition-colors"
              >
                <service.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-secondary-foreground text-sm mb-1">{service.title}</h4>
                <p className="text-xs text-secondary-foreground/60">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Let's discuss how we can help grow your business with our tailored marketing solutions.
          </p>
          <Button size="lg" variant="secondary" className="text-base px-8" asChild>
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;