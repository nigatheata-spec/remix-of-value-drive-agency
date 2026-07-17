import Logo from "./Logo";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import StarDecoration from "./StarDecoration";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, isRTL } = useLanguage();

  const footerLinks = {
    services: [
      { label: t('services.brandIdentity.title'), href: "#" },
      { label: t('services.socialMedia.title'), href: "#" },
      { label: t('services.paidAds.title'), href: "#" },
      { label: t('services.webDev.title'), href: "#" },
      { label: t('services.content.title'), href: "#" },
    ],
    company: [
      { label: t('footer.aboutUs'), href: "/about" },
      { label: t('footer.ourProcess'), href: "#process" },
      { label: t('portfolio.tag'), href: "/portfolio" },
      { label: t('footer.careers'), href: "#" },
      { label: t('nav.contact'), href: "/contact" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground pt-20 pb-8">
      <div className="h-1 bg-primary" />
      
      <div className="container mx-auto px-6">
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-12 py-12 ${isRTL ? 'text-right' : ''}`}>
          <div className="lg:col-span-1">
            <Logo variant="white" />
            <p className="mt-6 text-secondary-foreground/60 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className={`flex items-center gap-4 mt-6 ${isRTL ? 'justify-end' : ''}`}>
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} aria-label={social.label} className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-6 flex items-center gap-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
              <StarDecoration size="sm" variant="blue" />
              {t('footer.services')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-secondary-foreground/60 hover:text-accent transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-6 flex items-center gap-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
              <StarDecoration size="sm" variant="blue" />
              {t('footer.company')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-secondary-foreground/60 hover:text-accent transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-6 flex items-center gap-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
              <StarDecoration size="sm" variant="blue" />
              {t('footer.location')}
            </h3>
            <address className="not-italic text-secondary-foreground/60 leading-relaxed whitespace-pre-line">
              {t('footer.address')}
            </address>
            <div className="mt-6">
              <p className="text-secondary-foreground/60">
                <strong className="text-secondary-foreground">{t('footer.email')}</strong><br />
                hello@valueplusgrowth.com<br />
                info@valueplusgrowth.com
              </p>
            </div>
          </div>
        </div>

        <div className={`border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <p className="text-sm text-secondary-foreground/50">
            {t('footer.rights').replace('{year}', currentYear.toString())}
          </p>
          <div className={`flex items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <a href="#" className="text-sm text-secondary-foreground/50 hover:text-secondary-foreground transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="text-sm text-secondary-foreground/50 hover:text-secondary-foreground transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
