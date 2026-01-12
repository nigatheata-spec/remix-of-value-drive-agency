import { motion } from "framer-motion";
import { forwardRef } from "react";

interface StarDecorationProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "blue" | "lime" | "white";
  animated?: boolean;
}

const StarDecoration = forwardRef<HTMLDivElement, StarDecorationProps>(({
  className = "",
  size = "md",
  variant = "blue",
  animated = true
}, ref) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-10 h-10"
  };

  const colorClasses = {
    blue: "fill-primary",
    lime: "fill-accent",
    white: "fill-white"
  };

  const StarSVG = (
    <svg
      viewBox="0 0 24 24"
      className={`${sizeClasses[size]} ${colorClasses[variant]} ${className}`}
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );

  if (animated) {
    return (
      <motion.div
        ref={ref}
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          },
          scale: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        {StarSVG}
      </motion.div>
    );
  }

  return <div ref={ref}>{StarSVG}</div>;
});

StarDecoration.displayName = 'StarDecoration';

export default StarDecoration;
