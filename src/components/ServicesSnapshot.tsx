"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Users } from "lucide-react";

const services = [
  {
    icon: <Building2 size={32} strokeWidth={1.5} />,
    title: "Construction & Infrastructure",
    description:
      "Technology-driven infrastructure & construction — delivering end-to-end civil engineering, industrial construction and government projects with innovative, sustainable solutions.",
    href: "#construction-services",
    tags: ["Civil Engineering", "Industrial", "Government"],
  },
  {
    icon: <Users size={32} strokeWidth={1.5} />,
    title: "Outsourcing Services",
    description:
      "Comprehensive manpower outsourcing, housekeeping, sanitation, facility management and support staffing — transfer your burden to expert hands.",
    href: "#outsourcing-services",
    tags: ["Manpower", "Housekeeping", "Sanitation", "Facility Mgmt"],
  },
];

export default function ServicesSnapshot() {
  return (
    <section className="bg-off-white py-16 md:py-24 px-6 md:px-13">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16"
      >
        <span className="text-[10.5px] font-bold tracking-[0.26em] text-gold uppercase block mb-4">
          What We Do
        </span>
        <h2 className="font-heading text-[clamp(28px,4vw,42px)] font-extrabold text-navy leading-[1.1]">
          Two Pillars. One Promise.
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[960px] mx-auto">
        {services.map((service, i) => (
          <motion.a
            key={service.title}
            href={service.href}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="group relative bg-white p-8 md:p-10 border border-transparent hover:border-gold/40 transition-all duration-400 no-underline cursor-pointer shadow-[0_1px_6px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
          >
            {/* Gold top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            {/* Icon */}
            <div className="w-14 h-14 rounded-lg bg-gold/8 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-all duration-300">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="font-heading text-[22px] md:text-[24px] font-bold text-navy mb-3 leading-[1.2]">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-[13.5px] text-mid-grey leading-[1.75] mb-6">
              {service.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold tracking-[0.08em] text-gold bg-gold/8 px-3 py-1.5 uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Arrow link */}
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] text-navy uppercase group-hover:text-gold transition-colors duration-300">
              Learn More
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
