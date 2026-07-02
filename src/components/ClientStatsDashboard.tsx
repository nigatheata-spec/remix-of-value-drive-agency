import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Target, BarChart3, Rocket, Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

type Stat = {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix: string;
  label: string;
  detail: string;
};

const Counter = ({ to, suffix, inView }: { to: number; suffix: string; inView: boolean }) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, inView]);
  return (
    <span className="tabular-nums">
      {n.toLocaleString()}
      {suffix}
    </span>
  );
};

const ClientStatsDashboard = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { isRTL } = useLanguage();

  const stats: Stat[] = [
    { icon: TrendingUp, value: 320, suffix: "%", label: "Avg. Revenue Growth", detail: "Across managed client accounts in 12 months" },
    { icon: Users, value: 4200000, suffix: "+", label: "Audience Reached", detail: "Impressions delivered through paid & organic" },
    { icon: Target, value: 8.4, suffix: "x", label: "Average ROAS", detail: "Return on ad spend on performance campaigns" },
    { icon: BarChart3, value: 65, suffix: "%", label: "Lower CPA", detail: "Cost per acquisition reduction vs. baseline" },
    { icon: Rocket, value: 120, suffix: "+", label: "Brands Launched", detail: "Full identity & go-to-market rollouts" },
    { icon: Award, value: 97, suffix: "%", label: "Client Retention", detail: "Long-term partnerships year over year" },
  ];

  return (
    <section ref={ref} className={`section-padding bg-background ${isRTL ? 'font-["Tajawal"]' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            Client Impact Dashboard
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Real numbers we've delivered to our clients.
          </h2>
          <p className="text-lg text-muted-foreground">
            A live snapshot of the growth, reach and efficiency our partners see when they work with Value Plus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className="h-full border-border/60 hover:border-primary/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-[11px] font-semibold tracking-wider uppercase text-muted-foreground">
                        Live
                      </span>
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-foreground leading-none mb-3">
                      <Counter to={s.value} suffix={s.suffix} inView={inView} />
                    </div>
                    <div className="text-sm font-semibold text-foreground mb-1">{s.label}</div>
                    <p className="text-sm text-muted-foreground">{s.detail}</p>
                    <div className="mt-5 h-1.5 w-full rounded-full bg-muted overflow-hidden">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${60 + ((i * 7) % 35)}%` } : {}}
                        transition={{ duration: 1.2, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientStatsDashboard;
