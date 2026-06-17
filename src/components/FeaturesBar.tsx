"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Infrastructure\nConstruction",
    subtitle: "We Construct Dreams!",
    icon: (
      <svg className="w-[38px] h-[38px] text-gold" viewBox="0 0 38 38" fill="none">
        <rect x="3" y="16" width="32" height="20" rx="1" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="8" y="20" width="5" height="8" rx="0.5" fill="currentColor" opacity="0.4"/>
        <rect x="17" y="20" width="5" height="8" rx="0.5" fill="currentColor" opacity="0.4"/>
        <rect x="26" y="20" width="5" height="8" rx="0.5" fill="currentColor" opacity="0.4"/>
        <path d="M10 16V10a9 9 0 0 1 18 0v6" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M3 22h32" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
      </svg>
    ),
  },
  {
    title: "Outsourcing\nExcellence",
    subtitle: "Transfer Your Burden to Us.",
    icon: (
      <svg className="w-[38px] h-[38px] text-gold" viewBox="0 0 38 38" fill="none">
        <circle cx="19" cy="19" r="7" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="7" cy="10" r="4" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="31" cy="10" r="4" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="7" cy="28" r="4" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="31" cy="28" r="4" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M11 12 L15 16M23 22 L27 26M11 26 L15 22M23 16 L27 12" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    title: "Quality & Safety\nCommitment",
    subtitle: "Built on Discipline. Backed by Engineering.",
    icon: (
      <svg className="w-[38px] h-[38px] text-gold" viewBox="0 0 38 38" fill="none">
        <path d="M19 4 L34 10 L34 20 C34 28 27 34 19 36 C11 34 4 28 4 20 L4 10 Z" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M12 19 L17 24 L26 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Experienced\nProfessionals",
    subtitle: "Driven by Expertise. Focused on Results.",
    icon: (
      <svg className="w-[38px] h-[38px] text-gold" viewBox="0 0 38 38" fill="none">
        <rect x="4" y="14" width="30" height="20" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M13 14V10a6 6 0 0 1 12 0v4" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="19" cy="23" r="3" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M19 26 L19 30" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M7 21 h4 M27 21 h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
];

export default function FeaturesBar() {
  return (
    <div className="bg-navy px-6 md:px-13">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/15">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`flex items-center gap-5 py-9 lg:py-10 px-6 lg:px-7 ${
              i > 0 ? "lg:border-l lg:border-white/15" : ""
            } ${
              i > 0 ? "border-t sm:border-t-0 border-white/15" : ""
            } ${i % 2 !== 0 ? "sm:border-l sm:border-white/15" : ""}`}
          >
            <div className="flex-shrink-0">{feature.icon}</div>
            <div>
              <h3 className="text-[11px] font-bold tracking-[0.12em] text-white uppercase leading-[1.4] mb-2 whitespace-pre-line">
                {feature.title}
              </h3>
              <p className="text-[12px] font-normal text-white/50 leading-[1.5]">
                {feature.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
