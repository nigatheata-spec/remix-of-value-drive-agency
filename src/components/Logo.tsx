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
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoSrc} 
        alt="Value Plus" 
        className="h-10 md:h-12 w-auto transition-opacity duration-200"
      />
    </div>
  );
};

export default Logo;
