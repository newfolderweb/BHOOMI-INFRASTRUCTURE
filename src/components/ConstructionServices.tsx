"use client";

import { motion } from "framer-motion";
import {
  HardHat,
  Factory,
  Landmark,
  Home,
  Zap,
  ClipboardCheck,
} from "lucide-react";

const services = [
  {
    icon: <HardHat size={28} strokeWidth={1.5} />,
    title: "Civil Engineering",
    bullets: [
      "Foundation & structural engineering",
      "RCC & steel frame construction",
      "Road, bridge & drainage works",
    ],
  },
  {
    icon: <Factory size={28} strokeWidth={1.5} />,
    title: "Industrial Construction",
    bullets: [
      "Factory & warehouse buildings",
      "Heavy-duty flooring & yards",
      "Industrial shed fabrication",
    ],
  },
  {
    icon: <Landmark size={28} strokeWidth={1.5} />,
    title: "Government Infrastructure",
    bullets: [
      "Defence establishment projects",
      "Government office & quarters",
      "Public utility construction",
    ],
  },
  {
    icon: <Home size={28} strokeWidth={1.5} />,
    title: "Residential & Commercial",
    bullets: [
      "High-rise residential complexes",
      "Commercial mall & retail fit-outs",
      "Interior finishing & turnkey delivery",
    ],
  },
  {
    icon: <Zap size={28} strokeWidth={1.5} />,
    title: "Electrical & MEP",
    bullets: [
      "HT/LT electrical installation",
      "HVAC duct & plumbing systems",
      "Fire detection & suppression",
    ],
  },
  {
    icon: <ClipboardCheck size={28} strokeWidth={1.5} />,
    title: "Project Management",
    bullets: [
      "End-to-end project planning",
      "Quality assurance & auditing",
      "Cost estimation & BOQ preparation",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function ConstructionServices() {
  return (
    <section
      id="construction-services"
      className="bg-white py-20 md:py-28 px-6 md:px-13"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="text-[10.5px] font-bold tracking-[0.26em] text-gold uppercase block mb-4">
            Construction &amp; Infrastructure
          </span>
          <h2 className="font-heading text-[clamp(28px,4vw,42px)] font-extrabold text-navy leading-[1.1] mb-4">
            Building India&apos;s Future
          </h2>
          <p className="text-[14px] md:text-[15px] text-mid-grey leading-[1.8] max-w-[540px] mx-auto">
            From civil engineering to turnkey project management — precision-driven
            construction solutions delivered with military discipline.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative bg-off-white/60 border border-transparent hover:border-gold/25 p-7 md:p-9 transition-all duration-400 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              {/* Gold left accent */}
              <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-gold/8 flex items-center justify-center text-gold mb-5 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading text-[20px] md:text-[22px] font-bold text-navy mb-4 leading-[1.2]">
                {service.title}
              </h3>

              {/* Bullet Points */}
              <ul className="space-y-2.5">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-[13px] md:text-[13.5px] text-mid-grey leading-[1.6]"
                  >
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
