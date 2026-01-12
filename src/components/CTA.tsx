import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MessageCircle, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import StarDecoration from "./StarDecoration";
import { GradFlow } from "gradflow";
import { Link } from "react-router-dom";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 md:p-16 overflow-hidden"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0">
            <GradFlow
              config={{
                color1: '#003DFA',
                color2: '#001a6e',
                color3: '#8BED02',
                speed: 0.3,
                scale: 1.2,
                type: 'stripe',
                noise: 0.06,
              }}
            />
          </div>

          {/* Background decorations */}
          <div className="absolute inset-0 star-pattern opacity-10" />
          <div className="absolute top-10 right-10 opacity-30">
            <StarDecoration size="lg" variant="white" />
          </div>
          <div className="absolute bottom-10 left-10 opacity-20">
            <StarDecoration size="md" variant="lime" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Ready to Grow Your Brand?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/80 mb-10 max-w-xl mx-auto"
            >
              Let's discuss how we can help you achieve measurable results and build 
              a brand that stands out in the market.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 gap-2 text-base px-8"
                asChild
              >
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 gap-2 text-base px-8"
                asChild
              >
                <Link to="/contact">
                  <MessageCircle className="w-4 h-4" />
                  Book a Call
                </Link>
              </Button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 pt-10 border-t border-white/10"
            >
              <a href="mailto:hello@valueplus.sa" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>hello@valueplus.sa</span>
              </a>
              <a href="tel:+966500000000" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>+966 50 000 0000</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
