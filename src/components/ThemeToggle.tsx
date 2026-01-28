import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

interface ThemeToggleProps {
  variant?: "default" | "white";
}

const ThemeToggle = ({ variant = "default" }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();
  const isWhite = variant === "white";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={`relative w-9 h-9 ${
        isWhite 
          ? "text-white hover:bg-white/10 hover:text-white" 
          : "text-muted-foreground hover:text-foreground"
      }`}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === 'dark' ? 180 : 0,
          scale: theme === 'dark' ? 0 : 1,
          opacity: theme === 'dark' ? 0 : 1
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Sun className="w-4 h-4" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === 'light' ? -180 : 0,
          scale: theme === 'light' ? 0 : 1,
          opacity: theme === 'light' ? 0 : 1
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Moon className="w-4 h-4" />
      </motion.div>
    </Button>
  );
};

export default ThemeToggle;
