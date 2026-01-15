import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import logoBlue from "@/assets/logo-blue.png";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Lime accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
      
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              About Value Plus
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
              We're Your True{" "}
              <span className="text-gradient-royal">Growth Partner</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Value Plus is a modern digital marketing and content agency built around one simple belief: 
              <strong className="text-foreground"> growth should be smart, measurable, and driven by real value.</strong>
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Today, we partner with companies, online stores, and startups to help them build stronger brands, 
              generate sustainable sales, and communicate with their audiences in meaningful ways. With a deep 
              understanding of Arab and Gulf markets, and a mindset inspired by global standards, we position 
              ourselves not just as a service provider, but as a true growth partner.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "Value First", desc: "We prioritize outcomes and measure success by results." },
                { title: "Transparency", desc: "Clear processes, reporting, and honored commitments." },
                { title: "Innovation", desc: "Creativity + data + experience = smart solutions." },
                { title: "Partnership", desc: "We work side-by-side as one team." },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground">{value.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{value.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main visual card */}
            <div className="relative bg-gradient-to-br from-primary to-royal-dark rounded-2xl p-1">
              <div className="bg-background rounded-xl p-8 md:p-12">
                {/* Brand mark display */}
                <div className="aspect-square max-w-sm mx-auto flex items-center justify-center relative">
                  {/* Pattern background */}
                  <div className="absolute inset-0 star-pattern opacity-50 rounded-xl" />
                  
                  {/* VP Logo - using the actual logo */}
                  <img 
                    src={logoBlue}
                    alt="Value Plus" 
                    className="w-48 h-48 md:w-64 md:h-64 object-contain"
                  />

                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
