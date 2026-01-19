import patternSvg from "@/assets/pattern.svg";

interface PatternDecorationProps {
  className?: string;
  variant?: "blue" | "white";
}

const PatternDecoration = ({ className = "", variant = "blue" }: PatternDecorationProps) => {
  const filterStyles = {
    blue: "", // Original blue color
    white: "brightness(0) invert(1)"
  };

  return (
    <img
      src={patternSvg}
      alt=""
      className={`pointer-events-none select-none ${className}`}
      style={{ filter: filterStyles[variant] }}
    />
  );
};

export default PatternDecoration;
