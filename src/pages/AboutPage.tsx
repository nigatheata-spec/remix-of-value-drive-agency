import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Target, Zap, Globe, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GradFlow } from "gradflow";
import logoWhite from "@/assets/logo-white.png";
const timeline = [{
  year: "2019",
  title: "The Spark",
  description: "Started as a freelance collective with a vision to change how brands communicate in the Arab world."
}, {
  year: "2020",
  title: "First Office",
  description: "Opened our Riyadh headquarters and assembled a team of 5 passionate marketers and creatives."
}, {
  year: "2022",
  title: "Major Milestone",
  description: "Crossed 100+ successful projects and expanded our service offerings to full-stack marketing."
}, {
  year: "2024",
  title: "Regional Expansion",
  description: "Now serving clients across the GCC with a team of 15+ specialists and growing."
}];
const team = [{
  name: "Ahmed Al-Rashid",
  role: "Founder & CEO",
  bio: "10+ years in brand strategy",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
}, {
  name: "Sara Al-Fahad",
  role: "Creative Director",
  bio: "Award-winning designer",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face"
}, {
  name: "Mohammed Hassan",
  role: "Strategy Lead",
  bio: "Data-driven growth expert",
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
}, {
  name: "Fatima Al-Qahtani",
  role: "Head of Content",
  bio: "Storytelling specialist",
  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
}];
const principles = [{
  icon: Target,
  title: "Precision Over Volume",
  description: "We don't spray and pray. Every campaign is laser-focused on outcomes that matter to your bottom line."
}, {
  icon: Heart,
  title: "Relationships First",
  description: "We've never lost a client due to poor service. Our retention rate speaks louder than any pitch."
}, {
  icon: Zap,
  title: "Speed With Quality",
  description: "In marketing, timing is everything. We move fast without cutting corners."
}, {
  icon: Globe,
  title: "Local Insight, Global Standards",
  description: "Deep understanding of Arab markets combined with world-class execution."
}];
const AnimatedCounter = ({
  value,
  suffix = ""
}: {
  value: number;
  suffix?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true
  });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);
  return <span ref={ref}>
      {count}{suffix}
    </span>;
};
const AboutPage = () => {
  const heroRef = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, {
    once: true,
    margin: "-100px"
  });
  const principlesRef = useRef(null);
  const principlesInView = useInView(principlesRef, {
    once: true,
    margin: "-100px"
  });
  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, {
    once: true,
    margin: "-100px"
  });
  return <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      
      {/* Hero Section - Full Screen with Parallax */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-midnight overflow-hidden">
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
        
        <div className="absolute inset-0 bg-midnight/40" />
        
        <motion.div style={{
        y: heroY,
        opacity: heroOpacity
      }} className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{
          scale: 0,
          rotate: -180
        }} animate={{
          scale: 1,
          rotate: 0
        }} transition={{
          duration: 0.8,
          type: "spring",
          bounce: 0.4
        }} className="w-24 h-24 mx-auto mb-8">
            <img src={logoWhite} alt="Value Plus" className="w-full h-full object-contain" />
          </motion.div>
          
          <motion.h1 initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3,
          duration: 0.8
        }} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            <motion.span initial={{
            opacity: 0,
            x: -50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.5,
            duration: 0.6
          }}>
              We Don't Just
            </motion.span>
            <br />
            <motion.span initial={{
            opacity: 0,
            x: 50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.7,
            duration: 0.6
          }} className="text-white">
              Market Brands
            </motion.span>
          </motion.h1>
          
          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 1,
          duration: 0.8
        }} className="text-2xl md:text-3xl text-white/60 max-w-3xl mx-auto font-light">
            We <span className="text-accent font-semibold">transform</span> them.
          </motion.p>

          
        </motion.div>
      </section>

      {/* Stats Bar - Horizontal Scroll Effect */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <motion.div initial={{
        x: "-100%"
      }} whileInView={{
        x: 0
      }} transition={{
        duration: 0.8,
        ease: "easeOut"
      }} viewport={{
        once: true
      }} className="absolute inset-0 bg-gradient-to-r from-primary via-royal-dark to-primary" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{
            value: 200,
            suffix: "+",
            label: "Projects Delivered"
          }, {
            value: 50,
            suffix: "+",
            label: "Happy Clients"
          }, {
            value: 5,
            suffix: "+",
            label: "Years Experience"
          }, {
            value: 15,
            suffix: "+",
            label: "Team Members"
          }].map((stat, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.5
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: index * 0.1,
            duration: 0.5,
            type: "spring"
          }} viewport={{
            once: true
          }}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-background" ref={timelineRef}>
        <div className="container mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={timelineInView ? {
          opacity: 1,
          y: 0
        } : {}} className="text-center mb-20">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              From Idea to <span className="text-primary">Impact</span>
            </h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <motion.div initial={{
            scaleY: 0
          }} animate={timelineInView ? {
            scaleY: 1
          } : {}} transition={{
            duration: 1,
            delay: 0.3
          }} className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary origin-top" style={{
            transform: "translateX(-50%)"
          }} />

            {timeline.map((item, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50
          }} animate={timelineInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            delay: 0.5 + index * 0.2,
            duration: 0.6
          }} className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Year Bubble */}
                <motion.div initial={{
              scale: 0
            }} animate={timelineInView ? {
              scale: 1
            } : {}} transition={{
              delay: 0.7 + index * 0.2,
              type: "spring",
              bounce: 0.5
            }} className="absolute left-8 md:left-1/2 w-16 h-16 -translate-x-1/2 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-primary/30 z-10">
                  {item.year}
                </motion.div>

                {/* Content Card */}
                <div className={`ml-24 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                  <motion.div whileHover={{
                scale: 1.02,
                y: -5
              }} className="bg-card p-6 rounded-2xl border border-border shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </motion.div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Principles Section - Staggered Grid */}
      <section className="section-padding bg-secondary" ref={principlesRef}>
        <div className="container mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={principlesInView ? {
          opacity: 1,
          y: 0
        } : {}} className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mt-4">
              Our <span className="text-primary">Principles</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {principles.map((principle, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 50,
            rotate: -2
          }} animate={principlesInView ? {
            opacity: 1,
            y: 0,
            rotate: 0
          } : {}} transition={{
            delay: 0.2 + index * 0.15,
            duration: 0.6,
            type: "spring"
          }} whileHover={{
            scale: 1.03,
            rotate: 1
          }} className="group">
                <div className="bg-background p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 h-full relative overflow-hidden">
                  {/* Hover gradient */}
                  <motion.div initial={{
                opacity: 0,
                scale: 0
              }} whileHover={{
                opacity: 1,
                scale: 1
              }} className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                  
                  <div className="relative z-10">
                    <motion.div whileHover={{
                  rotate: 360,
                  scale: 1.1
                }} transition={{
                  duration: 0.5
                }} className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <principle.icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background" ref={teamRef}>
        <div className="container mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={teamInView ? {
          opacity: 1,
          y: 0
        } : {}} className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">The People</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Meet the <span className="text-primary">Team</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              A diverse group of strategists, creatives, and growth hackers united by one mission.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 50
          }} animate={teamInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            delay: 0.2 + index * 0.1,
            duration: 0.6
          }} whileHover={{
            y: -10
          }} className="group text-center">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <motion.div whileHover={{
                scale: 1.1
              }} transition={{
                duration: 0.4
              }}>
                    <img src={member.image} alt={member.name} className="w-full aspect-square object-cover" />
                  </motion.div>
                  
                  {/* Overlay on hover */}
                  <motion.div initial={{
                opacity: 0
              }} whileHover={{
                opacity: 1
              }} className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end justify-center pb-6">
                    <span className="text-white font-medium">{member.bio}</span>
                  </motion.div>
                </div>
                
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-midnight relative overflow-hidden">
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
        
        <div className="absolute inset-0 bg-midnight/50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="max-w-3xl mx-auto text-center">
            
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to
              <br />
              <span className="text-white">Launch?</span>
            </h2>
            
            <p className="text-xl text-white/60 mb-10">
              Let's build something extraordinary together.
            </p>
            
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Button size="lg" className="gap-2 text-lg px-10 py-7" asChild>
                <Link to="/contact">
                  Start the Conversation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default AboutPage;