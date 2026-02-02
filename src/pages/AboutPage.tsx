import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Target, Zap, Globe, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/ui/timeline";
import { Link } from "react-router-dom";
import { GradFlow } from "gradflow";
import logoBlue from "@/assets/logo-blue.png";

import { useLanguage } from "@/contexts/LanguageContext";

const AboutPage = () => {
  const { t, isRTL } = useLanguage();
  
  const timelineData = [
    {
      title: isRTL ? "٢٠١٩" : "2019",
      content: (
        <div className={isRTL ? 'text-right' : ''}>
          <h4 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            {isRTL ? 'الشرارة الأولى' : 'The Spark'}
          </h4>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            {isRTL 
              ? 'بدأنا كمجموعة مستقلة برؤية لتغيير طريقة تواصل العلامات التجارية في العالم العربي.'
              : 'Started as a freelance collective with a vision to change how brands communicate in the Arab world.'}
          </p>
        </div>
      ),
    },
    {
      title: isRTL ? "٢٠٢٠" : "2020",
      content: (
        <div className={isRTL ? 'text-right' : ''}>
          <h4 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            {isRTL ? 'المكتب الأول' : 'First Office'}
          </h4>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            {isRTL 
              ? 'افتتحنا مقرنا الرئيسي في الرياض وجمعنا فريقاً من 5 مسوقين ومبدعين متحمسين.'
              : 'Opened our Riyadh headquarters and assembled a team of 5 passionate marketers and creatives.'}
          </p>
        </div>
      ),
    },
    {
      title: isRTL ? "٢٠٢٢" : "2022",
      content: (
        <div className={isRTL ? 'text-right' : ''}>
          <h4 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            {isRTL ? 'إنجاز كبير' : 'Major Milestone'}
          </h4>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            {isRTL 
              ? 'تجاوزنا 100+ مشروع ناجح ووسعنا خدماتنا لتشمل التسويق المتكامل.'
              : 'Crossed 100+ successful projects and expanded our service offerings to full-stack marketing.'}
          </p>
        </div>
      ),
    },
    {
      title: isRTL ? "٢٠٢٤" : "2024",
      content: (
        <div className={isRTL ? 'text-right' : ''}>
          <h4 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            {isRTL ? 'التوسع الإقليمي' : 'Regional Expansion'}
          </h4>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            {isRTL 
              ? 'نخدم الآن عملاء في جميع أنحاء الخليج بفريق من 15+ متخصصاً ونستمر في النمو.'
              : 'Now serving clients across the GCC with a team of 15+ specialists and growing.'}
          </p>
        </div>
      ),
    },
  ];

  const team = [
    {
      name: isRTL ? "أحمد الراشد" : "Ahmed Al-Rashid",
      role: isRTL ? "المؤسس والرئيس التنفيذي" : "Founder & CEO",
      bio: isRTL ? "+10 سنوات في استراتيجية العلامات" : "10+ years in brand strategy",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: isRTL ? "سارة الفهد" : "Sara Al-Fahad",
      role: isRTL ? "المديرة الإبداعية" : "Creative Director",
      bio: isRTL ? "مصممة حائزة على جوائز" : "Award-winning designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: isRTL ? "محمد حسن" : "Mohammed Hassan",
      role: isRTL ? "قائد الاستراتيجية" : "Strategy Lead",
      bio: isRTL ? "خبير نمو قائم على البيانات" : "Data-driven growth expert",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: isRTL ? "فاطمة القحطاني" : "Fatima Al-Qahtani",
      role: isRTL ? "رئيسة المحتوى" : "Head of Content",
      bio: isRTL ? "متخصصة في سرد القصص" : "Storytelling specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const principles = [
    {
      icon: Target,
      title: isRTL ? "الدقة فوق الكمية" : "Precision Over Volume",
      description: isRTL 
        ? "لا نعمل بشكل عشوائي. كل حملة مركزة على النتائج التي تهم أرباحك."
        : "We don't spray and pray. Every campaign is laser-focused on outcomes that matter to your bottom line."
    },
    {
      icon: Heart,
      title: isRTL ? "العلاقات أولاً" : "Relationships First",
      description: isRTL 
        ? "لم نفقد أي عميل بسبب سوء الخدمة. معدل احتفاظنا يتحدث أعلى من أي عرض."
        : "We've never lost a client due to poor service. Our retention rate speaks louder than any pitch."
    },
    {
      icon: Zap,
      title: isRTL ? "السرعة مع الجودة" : "Speed With Quality",
      description: isRTL 
        ? "في التسويق، التوقيت هو كل شيء. نتحرك بسرعة دون المساومة على الجودة."
        : "In marketing, timing is everything. We move fast without cutting corners."
    },
    {
      icon: Globe,
      title: isRTL ? "رؤية محلية، معايير عالمية" : "Local Insight, Global Standards",
      description: isRTL 
        ? "فهم عميق للأسواق العربية مع تنفيذ على مستوى عالمي."
        : "Deep understanding of Arab markets combined with world-class execution."
    }
  ];

  const AnimatedCounter = ({
    value,
    suffix = ""
  }: {
    value: number;
    suffix?: string;
  }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInViewCounter = useInView(ref, { once: true });
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (isInViewCounter) {
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
    }, [isInViewCounter, value]);
    
    return <span ref={ref}>{count}{suffix}</span>;
  };

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" });
  
  const principlesRef = useRef(null);
  const principlesInView = useInView(principlesRef, { once: true, margin: "-100px" });
  
  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
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
        
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }} 
          className="container mx-auto px-6 relative z-10 text-center"
        >
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3, duration: 0.8 }} 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
          >
            <motion.span 
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {isRTL ? 'نحن لا نسوّق' : "We Don't Just"}
            </motion.span>
            <br />
            <motion.span 
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.7, duration: 0.6 }} 
              className="text-white"
            >
              {isRTL ? 'العلامات التجارية' : 'Market Brands'}
            </motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1, duration: 0.8 }} 
            className="text-2xl md:text-3xl text-white/60 max-w-3xl mx-auto font-light"
          >
            {isRTL ? 'نحن ' : 'We '}
            <span className="text-primary font-semibold">{isRTL ? 'نحوّلها' : 'transform'}</span>
            {isRTL ? '.' : ' them.'}
          </motion.p>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-background" ref={timelineRef}>
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={timelineInView ? { opacity: 1, y: 0 } : {}} 
            className={`text-center mb-10 ${isRTL ? 'text-right' : ''}`}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              {isRTL ? 'رحلتنا' : 'Our Journey'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              {isRTL ? 'من الفكرة إلى ' : 'From Idea to '}
              <span className="text-primary">{isRTL ? 'التأثير' : 'Impact'}</span>
            </h2>
          </motion.div>

          <Timeline data={timelineData} />
        </div>
      </section>

      {/* Principles Section */}
      <section className="section-padding bg-card" ref={principlesRef}>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className={`flex flex-col lg:flex-row gap-16 items-start ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            {/* Left side - Header */}
            <motion.div 
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }} 
              animate={principlesInView ? { opacity: 1, x: 0 } : {}} 
              transition={{ duration: 0.6 }}
              className={`lg:w-1/3 lg:sticky lg:top-32 ${isRTL ? 'text-right' : ''}`}
            >
              {/* Big Logo */}
              <img 
                src={logoBlue} 
                alt="Value Plus" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain mb-8"
              />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                {isRTL ? 'كيف نعمل' : 'How We Work'}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
                {isRTL ? '' : 'Our '}
                <span className="text-primary">{isRTL ? 'مبادئنا' : 'Principles'}</span>
              </h2>
              <div className="w-16 h-1 bg-primary mt-6" />
              <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
                {isRTL 
                  ? 'المعايير التي توجه كل قرار نتخذه والتي بنينا عليها سمعتنا.'
                  : 'The standards that guide every decision we make and have built our reputation on.'}
              </p>
            </motion.div>

            {/* Right side - Principles list */}
            <div className="lg:w-2/3 space-y-0">
              {principles.map((principle, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={principlesInView ? { opacity: 1, y: 0 } : {}} 
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }} 
                  className="group"
                >
                  <div className={`flex gap-6 py-8 border-b border-border/50 hover:border-primary/30 transition-colors ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    {/* Number */}
                    <div className="flex-shrink-0">
                      <span className="text-5xl font-black text-foreground/20 group-hover:text-foreground/40 transition-colors">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <div className={`flex items-center gap-4 mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <principle.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {principle.title}
                        </h3>
                      </div>
                      <p className={`text-muted-foreground leading-relaxed ${isRTL ? 'pr-14' : 'pl-14'}`}>
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background" ref={teamRef}>
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={teamInView ? { opacity: 1, y: 0 } : {}} 
            className={`text-center mb-16 ${isRTL ? 'text-right' : ''}`}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              {isRTL ? 'الفريق' : 'The People'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              {isRTL ? 'تعرف على ' : 'Meet the '}
              <span className="text-primary">{isRTL ? 'الفريق' : 'Team'}</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              {isRTL 
                ? 'مجموعة متنوعة من الاستراتيجيين والمبدعين وخبراء النمو متحدين بمهمة واحدة.'
                : 'A diverse group of strategists, creatives, and growth hackers united by one mission.'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50 }} 
                animate={teamInView ? { opacity: 1, y: 0 } : {}} 
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }} 
                whileHover={{ y: -10 }} 
                className="group text-center"
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }}>
                    <img src={member.image} alt={member.name} className="w-full aspect-square object-cover" />
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    whileHover={{ opacity: 1 }} 
                    className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end justify-center pb-6"
                  >
                    <span className="text-white font-medium">{member.bio}</span>
                  </motion.div>
                </div>
                
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </motion.div>
            ))}
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
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }} 
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {isRTL ? 'مستعد' : 'Ready to'}
              <br />
              <span className="text-white">{isRTL ? 'للانطلاق؟' : 'Launch?'}</span>
            </h2>
            
            <p className="text-xl text-white/60 mb-10">
              {isRTL 
                ? 'دعنا نبني شيئاً استثنائياً معاً.'
                : "Let's build something extraordinary together."}
            </p>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className={`gap-2 text-lg px-10 py-7 ${isRTL ? 'flex-row-reverse' : ''}`} asChild>
                <Link to="/contact">
                  {isRTL ? 'ابدأ المحادثة' : 'Start the Conversation'}
                  <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
