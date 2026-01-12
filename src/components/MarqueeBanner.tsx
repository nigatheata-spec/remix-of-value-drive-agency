import { motion } from "framer-motion";
import StarDecoration from "./StarDecoration";

const services = [
  "Brand Identity",
  "Social Media Management",
  "Paid Advertising",
  "Website Development",
  "Content Production",
  "Growth Strategy",
  "UI/UX Design",
  "Motion Graphics",
];

const MarqueeBanner = () => {
  return (
    <div className="bg-primary py-4 overflow-hidden">
      <div className="flex animate-marquee">
        {[...services, ...services].map((service, index) => (
          <div key={index} className="flex items-center gap-6 mx-6 whitespace-nowrap">
            <StarDecoration size="sm" variant="white" animated={false} />
            <span className="text-primary-foreground font-medium">{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
