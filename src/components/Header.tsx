import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { Button } from "./ui/button";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.home'), href: "/" },
    { label: t('nav.about'), href: "/about" },
    { label: t('nav.services'), href: "/services" },
    { label: t('nav.portfolio'), href: "/portfolio" },
    { label: t('nav.contact'), href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;
  
  // Check if we're on a page with dark hero (home, about, services, portfolio)
  const hasDarkHero = ["/", "/about", "/services", "/portfolio"].includes(location.pathname);
  const showWhiteLogo = hasDarkHero && !isScrolled;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`flex items-center justify-between h-20 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <Link to="/">
            <Logo variant={showWhiteLogo ? "white" : "default"} />
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href) 
                    ? "text-primary" 
                    : showWhiteLogo 
                      ? "text-white/80 hover:text-white" 
                      : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={`hidden md:flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <ThemeToggle variant={showWhiteLogo ? "white" : "default"} />
            <LanguageToggle variant={showWhiteLogo ? "white" : "default"} />
            <Button 
              size="sm" 
              asChild
              className={showWhiteLogo ? "bg-white text-primary hover:bg-white/90" : ""}
            >
              <Link to="/contact">{t('nav.getStarted')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 ${showWhiteLogo ? "text-white" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <nav className={`container mx-auto px-6 py-6 flex flex-col gap-4 ${isRTL ? 'items-end' : 'items-start'}`}>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-lg font-medium transition-colors ${
                    isActive(link.href) 
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className={`flex flex-col gap-3 pt-4 border-t border-border w-full ${isRTL ? 'items-end' : 'items-start'}`}>
                <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <ThemeToggle />
                  <LanguageToggle />
                </div>
                <Button className="w-full" asChild>
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    {t('nav.getStarted')}
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
