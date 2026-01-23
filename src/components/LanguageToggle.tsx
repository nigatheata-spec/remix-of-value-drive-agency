import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  variant?: "default" | "white";
}

const LanguageToggle = ({ variant = "default" }: LanguageToggleProps) => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const isWhite = variant === "white";

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className={`gap-2 font-medium ${
        isWhite 
          ? "text-white hover:bg-white/10 hover:text-white" 
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      <Globe className="w-4 h-4" />
      <span>{language === 'en' ? 'العربية' : 'English'}</span>
    </Button>
  );
};

export default LanguageToggle;
