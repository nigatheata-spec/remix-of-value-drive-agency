import { forwardRef } from "react";
import starSvg from "@/assets/star.svg";

interface StarDecorationProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "blue" | "lime" | "white";
}

const StarDecoration = forwardRef<HTMLImageElement, StarDecorationProps>(({
  className = "",
  size = "md",
  variant = "blue"
}, ref) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-10 h-10"
  };

  const filterStyles = {
    blue: "", // Original blue color
    lime: "brightness(0) saturate(100%) invert(83%) sepia(46%) saturate(523%) hue-rotate(29deg) brightness(103%) contrast(102%)",
    white: "brightness(0) invert(1)"
  };

  return (
    <img
      ref={ref}
      src={starSvg}
      alt=""
      className={`${sizeClasses[size]} ${className}`}
      style={{ filter: filterStyles[variant] }}
    />
  );
});

StarDecoration.displayName = 'StarDecoration';

export default StarDecoration;
