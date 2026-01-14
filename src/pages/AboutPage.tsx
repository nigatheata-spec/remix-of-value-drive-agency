import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Heart, Lightbulb, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GradFlow } from "gradflow";
import logoBlue from "@/assets/logo-blue.png";

const values = [
  {
    icon: Target,
    title: "Value First",
    description: "We prioritize outcomes and measure success by results, not just activities."
  },
  {
    icon: Heart,
    title: "Transparency",
    description: "Clear processes, detailed reporting, and commitments we always honor."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Creativity + data + experience = smart solutions that actually work."
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work side-by-side with you as one unified team toward shared goals."
  },
];

const stats = [
  { value: "200+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "95%", label: "Client Satisfaction" },
];

const capabilities = [
  "Strategic brand positioning and identity",
  "Data-driven digital marketing campaigns",
  "Content creation that connects and converts",
  "Performance analytics and optimization",
  "Market research and competitive analysis",
  "Social media management and growth",
];

const AboutPage = () => {
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-midnight overflow-hidden">
        {/* Animated gradient background */}
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
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-midnight/50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              We're Your True
              <br />
              <span className="text-gradient-royal">Growth Partner</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Value Plus is a modern digital marketing and content agency built around one simple belief: 
              growth should be smart, measurable, and driven by real value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding" ref={storyRef}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                From Vision to <span className="text-gradient-royal">Reality</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a vision to bridge the gap between creative excellence and measurable results, 
                  Value Plus emerged as a response to the growing need for authentic, value-driven marketing 
                  in the Arab and Gulf markets.
                </p>
                <p>
                  Today, we partner with companies, online stores, and startups to help them build stronger 
                  brands, generate sustainable sales, and communicate with their audiences in meaningful ways.
                </p>
                <p>
                  With a deep understanding of regional markets and a mindset inspired by global standards, 
                  we position ourselves not just as a service provider, but as a true growth partner invested 
                  in your success.
                </p>
              </div>

              {/* Capabilities List */}
              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={storyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{capability}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Logo Display Card */}
              <div className="relative bg-gradient-to-br from-primary to-royal-dark rounded-2xl p-1">
                <div className="bg-background rounded-xl p-12 md:p-16">
                  <div className="aspect-square max-w-sm mx-auto flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl" />
                    <img 
                      src={logoBlue}
                      alt="Value Plus" 
                      className="w-48 h-48 md:w-64 md:h-64 object-contain relative z-10"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-midnight relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 opacity-50">
          <GradFlow config={{
            color1: '#003DFA',
            color2: '#000000',
            color3: '#FFFFFF',
            speed: 0.15,
            scale: 2,
            type: 'smoke',
            noise: 0.05
          }} />
        </div>
        
        <div className="absolute inset-0 bg-midnight/60" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary" ref={valuesRef}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              className="text-sm font-semibold text-primary uppercase tracking-wider"
            >
              What Drives Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-secondary-foreground mt-4 mb-4"
            >
              Our Core <span className="text-gradient-royal">Values</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-secondary-foreground/70 max-w-xl mx-auto"
            >
              The principles that guide everything we do and define who we are
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="bg-background rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-midnight relative overflow-hidden">
        {/* Animated gradient background */}
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
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-midnight/50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Work
                <br />
                <span className="text-gradient-royal">Together?</span>
              </h2>
              <p className="text-xl text-white/70 mb-10">
                Let's discuss how we can help your brand grow smarter and deliver real value.
              </p>
              <Button size="lg" className="gap-2 text-base px-10 py-6" asChild>
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;