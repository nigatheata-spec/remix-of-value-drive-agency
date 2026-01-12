import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Heart, Lightbulb, Users, Award, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StarDecoration from "@/components/StarDecoration";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy is designed with measurable outcomes in mind."
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your success is our success. We treat your brand as our own."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of trends to keep your brand relevant and competitive."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "True partnership means working together, not just for you."
  },
];

const stats = [
  { value: "200+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "15+", label: "Team Members" },
];

const team = [
  { name: "Ahmed Al-Rashid", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop" },
  { name: "Sara Al-Fahad", role: "Creative Director", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop" },
  { name: "Mohammed Hassan", role: "Strategy Lead", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" },
  { name: "Fatima Al-Qahtani", role: "Head of Content", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop" },
];

const AboutPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsla(var(--royal-blue)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsla(var(--royal-blue)/0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <motion.div 
          className="absolute top-32 right-[15%]"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <StarDecoration size="lg" variant="lime" />
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold text-accent uppercase tracking-wider"
          >
            Who We Are
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6 text-secondary-foreground"
          >
            About <span className="text-gradient-royal">Value Plus</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-secondary-foreground/70 max-w-2xl"
          >
            We're a full-service marketing agency based in Saudi Arabia, dedicated to helping brands grow smarter and deliver real value.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding" ref={ref}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-primary">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2020, Value Plus emerged from a simple belief: every brand deserves access to world-class marketing that delivers real, measurable results.
                </p>
                <p>
                  What started as a small team with big ambitions has grown into a full-service agency serving clients across Saudi Arabia and the GCC region. We've helped over 50 brands transform their digital presence and achieve unprecedented growth.
                </p>
                <p>
                  Our approach combines creative excellence with data-driven strategies, ensuring every campaign not only looks great but performs exceptionally. We believe in building lasting partnerships, not just completing projects.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32">
                <StarDecoration size="lg" variant="blue" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6">
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
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Our Values
            </h2>
            <p className="text-secondary-foreground/70 max-w-xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-foreground mb-3">{value.title}</h3>
                <p className="text-secondary-foreground/60">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet the <span className="text-primary">Team</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Passionate professionals dedicated to your success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <StarDecoration size="sm" variant="lime" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Let's discuss how we can help your brand grow.
          </p>
          <Button size="lg" variant="secondary" className="text-base px-8" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;