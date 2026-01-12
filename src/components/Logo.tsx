import { motion } from "framer-motion";
import logoBlue from "@/assets/logo-blue.png";
import logoWhite from "@/assets/logo-white.png";
import logoDark from "@/assets/logo-dark.png";

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: "default" | "white" | "dark";
}

const Logo = ({ className = "", showText = false, variant = "default" }: LogoProps) => {
  const logoSrc = variant === "white" ? logoWhite : variant === "dark" ? logoDark : logoBlue;

  return (
    <motion.div 
      className={`flex items-center ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src={logoSrc} 
        alt="Value Plus" 
        className="h-10 md:h-12 w-auto"
      />
    </motion.div>
  );
};

export default Logo;
