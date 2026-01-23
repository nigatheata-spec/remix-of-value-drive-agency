import { motion } from "framer-motion";
import StarDecoration from "./StarDecoration";
import { useLanguage } from "@/contexts/LanguageContext";

const MarqueeBanner = () => {
  const { t } = useLanguage();

  const services = [
    t('marquee.brandIdentity'),
    t('marquee.socialMedia'),
    t('marquee.paidAds'),
    t('marquee.webDev'),
    t('marquee.content'),
    t('marquee.growth'),
    t('marquee.uiux'),
    t('marquee.motion'),
  ];

  return (
    <div className="bg-primary py-4 overflow-hidden">
      <div className="flex animate-marquee">
        {[...services, ...services].map((service, index) => (
          <div key={index} className="flex items-center gap-6 mx-6 whitespace-nowrap">
            <StarDecoration size="sm" variant="white" />
            <span className="text-primary-foreground font-medium">{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
