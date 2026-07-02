import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { TrendingUp, Users, Target, BarChart3, Rocket, Award } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

type Metric = {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix: string;
  label: string;
  detail: string;
  unit: string;
  series: { month: string; value: number }[];
};

const METRICS: Metric[] = [
  {
    id: "revenue",
    icon: TrendingUp,
    value: 320,
    suffix: "%",
    label: "Avg. Revenue Growth",
    detail: "Across managed client accounts in 12 months",
    unit: "%",
    series: [
      { month: "Jan", value: 40 },
      { month: "Feb", value: 65 },
      { month: "Mar", value: 90 },
      { month: "Apr", value: 130 },
      { month: "May", value: 175 },
      { month: "Jun", value: 210 },
      { month: "Jul", value: 240 },
      { month: "Aug", value: 260 },
      { month: "Sep", value: 285 },
      { month: "Oct", value: 300 },
      { month: "Nov", value: 315 },
      { month: "Dec", value: 320 },
    ],
  },
  {
    id: "reach",
    icon: Users,
    value: 4200000,
    suffix: "+",
    label: "Audience Reached",
    detail: "Impressions delivered through paid & organic",
    unit: "",
    series: [
      { month: "Jan", value: 150000 },
      { month: "Feb", value: 320000 },
      { month: "Mar", value: 480000 },
      { month: "Apr", value: 720000 },
      { month: "May", value: 1050000 },
      { month: "Jun", value: 1480000 },
      { month: "Jul", value: 1900000 },
      { month: "Aug", value: 2350000 },
      { month: "Sep", value: 2820000 },
      { month: "Oct", value: 3300000 },
      { month: "Nov", value: 3780000 },
      { month: "Dec", value: 4200000 },
    ],
  },
  {
    id: "roas",
    icon: Target,
    value: 8.4,
    suffix: "x",
    label: "Average ROAS",
    detail: "Return on ad spend on performance campaigns",
    unit: "x",
    series: [
      { month: "Jan", value: 2.1 },
      { month: "Feb", value: 2.8 },
      { month: "Mar", value: 3.4 },
      { month: "Apr", value: 4.1 },
      { month: "May", value: 4.9 },
      { month: "Jun", value: 5.6 },
      { month: "Jul", value: 6.2 },
      { month: "Aug", value: 6.9 },
      { month: "Sep", value: 7.4 },
      { month: "Oct", value: 7.8 },
      { month: "Nov", value: 8.1 },
      { month: "Dec", value: 8.4 },
    ],
  },
  {
    id: "cpa",
    icon: BarChart3,
    value: 65,
    suffix: "%",
    label: "Lower CPA",
    detail: "Cost per acquisition reduction vs. baseline",
    unit: "%",
    series: [
      { month: "Jan", value: 8 },
      { month: "Feb", value: 15 },
      { month: "Mar", value: 22 },
      { month: "Apr", value: 30 },
      { month: "May", value: 37 },
      { month: "Jun", value: 43 },
      { month: "Jul", value: 48 },
      { month: "Aug", value: 53 },
      { month: "Sep", value: 57 },
      { month: "Oct", value: 60 },
      { month: "Nov", value: 63 },
      { month: "Dec", value: 65 },
    ],
  },
  {
    id: "brands",
    icon: Rocket,
    value: 120,
    suffix: "+",
    label: "Brands Launched",
    detail: "Full identity & go-to-market rollouts",
    unit: "",
    series: [
      { month: "Jan", value: 12 },
      { month: "Feb", value: 22 },
      { month: "Mar", value: 34 },
      { month: "Apr", value: 46 },
      { month: "May", value: 58 },
      { month: "Jun", value: 68 },
      { month: "Jul", value: 78 },
      { month: "Aug", value: 88 },
      { month: "Sep", value: 96 },
      { month: "Oct", value: 105 },
      { month: "Nov", value: 113 },
      { month: "Dec", value: 120 },
    ],
  },
  {
    id: "retention",
    icon: Award,
    value: 97,
    suffix: "%",
    label: "Client Retention",
    detail: "Long-term partnerships year over year",
    unit: "%",
    series: [
      { month: "Jan", value: 82 },
      { month: "Feb", value: 84 },
      { month: "Mar", value: 86 },
      { month: "Apr", value: 88 },
      { month: "May", value: 89 },
      { month: "Jun", value: 91 },
      { month: "Jul", value: 92 },
      { month: "Aug", value: 93 },
      { month: "Sep", value: 94 },
      { month: "Oct", value: 95 },
      { month: "Nov", value: 96 },
      { month: "Dec", value: 97 },
    ],
  },
];

const Counter = ({ to, suffix, inView }: { to: number; suffix: string; inView: boolean }) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, inView]);

  const display =
    to >= 1000
      ? Math.round(n).toLocaleString()
      : Number.isInteger(to)
      ? Math.round(n).toString()
      : n.toFixed(1);

  return (
    <span className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
};

const formatValue = (v: number, unit: string) => {
  if (unit === "%") return `${Math.round(v)}%`;
  if (unit === "x") return `${v.toFixed(1)}x`;
  if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1_000) return `${(v / 1_000).toFixed(0)}K`;
  return v.toString();
};

const ClientStatsDashboard = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { isRTL } = useLanguage();
  const [activeId, setActiveId] = useState<string>(METRICS[0].id);

  const active = useMemo(
    () => METRICS.find((m) => m.id === activeId) ?? METRICS[0],
    [activeId]
  );

  return (
    <section
      ref={ref}
      className={`section-padding bg-background ${isRTL ? 'font-["Tajawal"]' : ""}`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            Client Impact Dashboard
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Real numbers we've delivered to our clients.
          </h2>
          <p className="text-lg text-muted-foreground">
            A live snapshot of the growth, reach and efficiency our partners see when they work with Value Plus. Click any metric to explore its trend.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {/* Metric cards */}
          <div className="lg:col-span-1 grid grid-cols-2 lg:grid-cols-1 gap-3">
            {METRICS.map((m, i) => {
              const Icon = m.icon;
              const isActive = m.id === activeId;
              return (
                <motion.button
                  key={m.id}
                  type="button"
                  onClick={() => setActiveId(m.id)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={cn(
                    "text-left rounded-xl border p-4 transition-all",
                    "hover:border-primary/50 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    isActive
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-border bg-card"
                  )}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={cn(
                        "w-9 h-9 rounded-lg flex items-center justify-center transition-colors",
                        isActive ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {m.label}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-foreground">
                    <Counter to={m.value} suffix={m.suffix} inView={inView} />
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Interactive chart */}
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="h-full border-border/60">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-1">
                      {active.label} · trailing 12 months
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-foreground">
                      <Counter to={active.value} suffix={active.suffix} inView={inView} />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 max-w-md">
                      {active.detail}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-wider uppercase text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    Live data
                  </span>
                </div>

                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={active.series} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="metricFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.35} />
                          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                      <XAxis
                        dataKey="month"
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(v) => formatValue(Number(v), active.unit)}
                        width={50}
                      />
                      <Tooltip
                        cursor={{ stroke: "hsl(var(--primary))", strokeWidth: 1, strokeDasharray: "3 3" }}
                        contentStyle={{
                          background: "hsl(var(--background))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                          fontSize: "12px",
                        }}
                        labelStyle={{ color: "hsl(var(--foreground))", fontWeight: 600 }}
                        formatter={(v: number) => [formatValue(v, active.unit), active.label]}
                      />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="hsl(var(--primary))"
                        strokeWidth={2.5}
                        fill="url(#metricFill)"
                        activeDot={{ r: 6, strokeWidth: 2, stroke: "hsl(var(--background))" }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientStatsDashboard;
