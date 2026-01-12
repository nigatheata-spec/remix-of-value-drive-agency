import { motion } from "framer-motion";
import Logo from "./Logo";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import StarDecoration from "./StarDecoration";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Brand Identity", href: "#" },
      { label: "Social Media", href: "#" },
      { label: "Paid Advertising", href: "#" },
      { label: "Website Development", href: "#" },
      { label: "Content Production", href: "#" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Process", href: "#process" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
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
      {/* Lime accent line at top */}
      <div className="h-1 bg-accent" />
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 py-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Logo variant="white" />
            <p className="mt-6 text-secondary-foreground/60 leading-relaxed">
              Your true growth partner. We help brands grow through integrated marketing 
              strategies and data-driven digital solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <StarDecoration size="sm" variant="lime" animated={false} />
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <StarDecoration size="sm" variant="blue" animated={false} />
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <StarDecoration size="sm" variant="lime" animated={false} />
              Location
            </h3>
            <address className="not-italic text-secondary-foreground/60 leading-relaxed">
              Saudi Arabia<br />
              Riyadh, Kingdom of Saudi Arabia
            </address>
            <div className="mt-6">
              <p className="text-secondary-foreground/60">
                <strong className="text-secondary-foreground">Email:</strong><br />
                hello@valueplus.sa
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/50">
            © {currentYear} Value Plus. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-secondary-foreground/50 hover:text-secondary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-secondary-foreground/50 hover:text-secondary-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
