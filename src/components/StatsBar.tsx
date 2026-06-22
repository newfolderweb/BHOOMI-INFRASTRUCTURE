"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  prefix?: string;
  value: number;
  suffix: string;
  label: string;
  sublabel?: string;
  decimals?: number;
}

const stats: StatItem[] = [
  { value: 90, suffix: "+", label: "Projects Delivered" },
  { value: 90, suffix: "+", label: "Trusted Clients" },
  { value: 7, suffix: "", label: "Years of Excellence" },
];

function CountUp({
  target,
  decimals = 0,
  prefix = "",
  suffix = "",
  trigger,
}: {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  trigger: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 16;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCount(current);
    }, stepTime);

    return () => clearInterval(timer);
  }, [trigger, target]);

  return (
    <span>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-navy py-14 md:py-18 px-6 md:px-13">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-0">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            viewport={{ once: true }}
            className={`text-center ${
              i > 0 ? "lg:border-l lg:border-white/10" : ""
            }`}
          >
            <div className="font-heading text-[clamp(36px,5vw,56px)] font-extrabold text-gold leading-none mb-2">
              <CountUp
                target={stat.value}
                decimals={stat.decimals ?? 0}
                prefix={stat.prefix ?? ""}
                suffix={stat.suffix}
                trigger={isInView}
              />
            </div>
            <p className="text-[11px] md:text-[12px] font-medium tracking-[0.16em] text-muted uppercase">
              {stat.label}
            </p>
            {stat.sublabel && (
              <p className="text-[10px] font-normal tracking-[0.1em] text-white/30 italic mt-1">
                {stat.sublabel}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
