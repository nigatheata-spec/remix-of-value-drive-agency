import { cn } from "@/lib/utils";
import { GradFlow } from 'gradflow';

interface StripeGradientProps {
  className?: string;
  children?: React.ReactNode;
  type?: 'stripe' | 'silk' | 'wave' | 'smoke' | 'animated' | 'conic' | 'linear';
}

export const StripeGradient = ({ className, children, type = 'stripe' }: StripeGradientProps) => {
  return (
    <div className={cn("relative w-full h-full", className)}>
      <GradFlow
        config={{
          color1: '#003DFA', // Royal Blue
          color2: '#8BED02', // Neon Lime
          color3: '#00102A', // Midnight Navy
          speed: 0.4,
          scale: 1.2,
          type: type,
          noise: 0.08,
        }}
        className="absolute inset-0 w-full h-full"
      />
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  );
};

export default StripeGradient;
