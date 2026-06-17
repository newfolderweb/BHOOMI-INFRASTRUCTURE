"use client";

import { motion } from "framer-motion";
import {
  Users,
  Sparkles,
  Building,
  HeadsetIcon,
  Wrench,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: <Users size={26} strokeWidth={1.5} />,
    title: "Manpower Supply",
    description:
      "Skilled, semi-skilled and unskilled workforce deployed across industries — vetted, trained and compliance-ready.",
  },
  {
    icon: <Sparkles size={26} strokeWidth={1.5} />,
    title: "Housekeeping Services",
    description:
      "Professional housekeeping for corporate offices, industrial facilities, government premises and residential complexes.",
  },
  {
    icon: <Building size={26} strokeWidth={1.5} />,
    title: "Facility Management",
    description:
      "Integrated facility management covering maintenance, operations, safety and day-to-day premises upkeep.",
  },
  {
    icon: <HeadsetIcon size={26} strokeWidth={1.5} />,
    title: "Support Staffing",
    description:
      "Administrative support, reception, data-entry and back-office personnel — placed on contract or permanent basis.",
  },
  {
    icon: <Wrench size={26} strokeWidth={1.5} />,
    title: "Skilled Labour",
    description:
      "Electricians, plumbers, carpenters, welders and technicians supplied for project-based or ongoing requirements.",
  },
  {
    icon: <ShieldCheck size={26} strokeWidth={1.5} />,
    title: "Site Supervision",
    description:
      "Experienced site engineers and supervisors ensuring quality, safety and timeline adherence on every project.",
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

export default function OutsourcingServices() {
  return (
    <section
      id="outsourcing-services"
      className="bg-navy py-20 md:py-28 px-6 md:px-13 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="text-[10.5px] font-bold tracking-[0.26em] text-gold uppercase block mb-4">
            Outsourcing &amp; Facility Management
          </span>
          <h2 className="font-heading text-[clamp(28px,4vw,42px)] font-extrabold text-white leading-[1.1] mb-4">
            Transfer Your Burden to Us
          </h2>
          <p className="text-[14px] md:text-[15px] text-muted leading-[1.8] max-w-[520px] mx-auto">
            Comprehensive manpower outsourcing, housekeeping, sanitation, facility
            management and support staffing — serving government departments,
            PSUs, defence establishments and private enterprises across India.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] hover:border-gold/30 p-7 md:p-8 transition-all duration-400 hover:bg-white/[0.07]"
            >
              {/* Gold top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Icon */}
              <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-5 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading text-[18px] md:text-[20px] font-bold text-white mb-3 leading-[1.2]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-muted leading-[1.75]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-14 md:mt-18"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-white/[0.08] rounded-full">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-[11px] font-semibold tracking-[0.16em] text-muted-dim uppercase">
              Trusted by 18+ government &amp; corporate clients across India
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
