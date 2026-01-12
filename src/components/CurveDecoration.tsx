import { motion } from "framer-motion";

interface CurveDecorationProps {
  variant?: "blue" | "white";
  className?: string;
}

const CurveDecoration = ({ variant = "blue", className = "" }: CurveDecorationProps) => {
  const strokeColor = variant === "blue" ? "hsl(var(--royal-blue))" : "hsl(var(--pearl-white))";
  
  return (
    <svg 
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      viewBox="0 0 400 200"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M0,100 C50,50 100,150 150,80 C200,10 250,120 300,60 C350,0 400,80 400,100"
        fill="none"
        stroke={strokeColor}
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      />
      {/* Four-pointed star at curve apex */}
      <motion.path
        d="M150,80 L160,60 L150,80 L140,60 Z M150,80 L170,80 L150,80 L130,80 Z"
        fill={strokeColor}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.8 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
      />
    </svg>
  );
};

export default CurveDecoration;