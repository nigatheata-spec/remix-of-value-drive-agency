import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { GradFlow } from "gradflow";
import { useLanguage } from "@/contexts/LanguageContext";

// Import client logos
import tihama from "@/assets/clients/tihama.jpg";
import sanaa from "@/assets/clients/sanaa.jpg";
import alaqeed from "@/assets/clients/alaqeed.jpg";
import royalLoyalley from "@/assets/clients/royal-loyalley.jpg";
import tayba from "@/assets/clients/tayba.jpg";
import star360 from "@/assets/clients/star360.png";
import misuar from "@/assets/clients/misuar.jpg";
import istanbulChicken from "@/assets/clients/istanbul-chicken.jpg";
import mandyMeydan from "@/assets/clients/mandy-meydan.jpg";
import orange from "@/assets/clients/orange.jpg";

const clients = [
  { name: "Tihama", logo: tihama },
  { name: "Sana'a", logo: sanaa },
  { name: "Alaqeed Lokantasi", logo: alaqeed },
  { name: "Royal Loyalley", logo: royalLoyalley },
  { name: "Tayba Special Restaurant", logo: tayba },
  { name: "Star 360 Cafe", logo: star360 },
  { name: "Misuar Restaurant", logo: misuar },
  { name: "Istanbul Chicken", logo: istanbulChicken },
  { name: "Mandy Meydan", logo: mandyMeydan },
  { name: "Orange Şirinevler", logo: orange },
];

const PortfolioPage = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
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
            className={`max-w-4xl ${isRTL ? 'text-right' : ''}`}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
              {isRTL ? 'شركاء النجاح' : 'Success Partners'}
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {isRTL ? 'عملاؤنا' : 'Our Clients'}
            </h1>
            <p className="text-xl text-white/60 max-w-2xl">
              {isRTL 
                ? 'نفخر بشراكتنا مع أفضل العلامات التجارية التي منحتنا ثقتها لبناء هويتها ونجاحها.'
                : 'We are proud to partner with the best brands who trusted us to build their identity and success.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8"
          >
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-card border border-border p-4 flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-1">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className={`mt-3 text-sm font-medium text-muted-foreground text-center group-hover:text-foreground transition-colors`}>
                  {client.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
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
                {isRTL ? 'هل تريد أن تكون' : 'Ready to Be Our Next'}
                <br />
                <span className="text-white">{isRTL ? 'عميلنا القادم؟' : 'Success Story?'}</span>
              </h2>
              <p className="text-xl text-white/70 mb-10">
                {isRTL 
                  ? 'دعنا نصنع شيئاً استثنائياً معاً.'
                  : "Let's create something extraordinary together."}
              </p>
              <Button size="lg" className={`gap-2 text-base px-10 py-6 ${isRTL ? 'flex-row-reverse' : ''}`} asChild>
                <Link to="/contact">
                  {isRTL ? 'ابدأ مشروعك' : 'Start Your Project'}
                  <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
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

export default PortfolioPage;
