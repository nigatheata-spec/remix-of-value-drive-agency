import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Home, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { GradFlow } from "gradflow";

const NotFound = () => {
  const location = useLocation();
  const { isRTL } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const title = isRTL ? "الصفحة غير موجودة" : "Page Not Found";
  const subtitle = isRTL
    ? "عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها."
    : "Sorry, the page you're looking for doesn't exist or has been moved.";
  const backHome = isRTL ? "العودة إلى الرئيسية" : "Back to Home";
  const contactUs = isRTL ? "تواصل معنا" : "Contact Us";

  return (
    <div className="min-h-screen bg-background flex flex-col" dir={isRTL ? "rtl" : "ltr"}>
      <SEO
        title="404 — Page Not Found | Value Plus"
        description="The page you're looking for doesn't exist. Return to Value Plus, a marketing agency in Riyadh."
        path={location.pathname}
      />
      <Header />

      <section className="relative flex-1 flex items-center justify-center overflow-hidden pt-32 pb-24 bg-midnight">
        <div className="absolute inset-0">
          <GradFlow config={{
            color1: '#003DFA',
            color2: '#000000',
            color3: '#FFFFFF',
            speed: 0.25,
            scale: 1.3,
            type: 'stripe',
            noise: 0.08,
          }} />
        </div>
        <div className="absolute inset-0 bg-midnight/60" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h1 className="text-[8rem] md:text-[12rem] leading-none font-bold text-white/90 tracking-tight">
              4<span className="text-primary">0</span>4
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">{title}</h2>
            <p className="text-lg text-white/70 mb-10">{subtitle}</p>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? "sm:flex-row-reverse" : ""}`}>
              <Button size="lg" className="gap-2" asChild>
                <Link to="/">
                  <Home className="w-4 h-4" />
                  {backHome}
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2" asChild>
                <Link to="/contact">
                  <MessageCircle className="w-4 h-4" />
                  {contactUs}
                  <ArrowLeft className={`w-4 h-4 ${isRTL ? "" : "rotate-180"}`} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
