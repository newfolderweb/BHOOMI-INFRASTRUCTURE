"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, ArrowUp } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#construction-services" },
  { label: "Projects", href: "#projects" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#040C16] overflow-hidden">
      {/* ── Animated ambient glow orbs (CSS keyframes for reliability) ── */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          top: "-50px",
          left: "10%",
          background: "radial-gradient(circle, rgba(136,83,44,0.18) 0%, rgba(136,83,44,0.06) 40%, transparent 70%)",
          filter: "blur(80px)",
          animation: "floatOrb1 16s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{
          bottom: "-40px",
          right: "5%",
          background: "radial-gradient(circle, rgba(136,83,44,0.14) 0%, rgba(136,83,44,0.04) 40%, transparent 70%)",
          filter: "blur(70px)",
          animation: "floatOrb2 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          top: "40%",
          left: "40%",
          background: "radial-gradient(circle, rgba(136,83,44,0.1) 0%, transparent 60%)",
          filter: "blur(60px)",
          animation: "floatOrb3 14s ease-in-out infinite",
        }}
      />

      {/* ── Slow shimmer sweep ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(105deg, transparent 40%, rgba(136,83,44,0.06) 50%, transparent 60%)",
          backgroundSize: "200% 100%",
          animation: "shimmerSweep 10s ease-in-out infinite",
        }}
      />

      {/* ── Dot grid ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.6) 0.5px, transparent 0.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Keyframes injected via style tag */}
      <style jsx>{`
        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, -30px) scale(1.15); }
          66% { transform: translate(-30px, 20px) scale(0.92); }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, 25px) scale(1.1); }
          66% { transform: translate(35px, -20px) scale(0.88); }
        }
        @keyframes floatOrb3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(25px, -15px) scale(1.2); }
        }
        @keyframes shimmerSweep {
          0% { background-position: 200% 0; }
          50% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>

      {/* ── Top decorative separator ── */}
      <div className="relative h-[1px]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>

      <div className="relative z-10 px-6 md:px-13 pt-20 md:pt-24 pb-0">
        <div className="max-w-[1200px] mx-auto">
          {/* ═══ BRAND ROW — Full width horizontal ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16 pb-14 border-b border-white/[0.06]"
          >
            {/* Logo + Tagline */}
            <div className="flex items-center gap-5">
              <div className="relative shrink-0">
                <Image
                  src="/images/logo-transparent.png"
                  alt="Bhoomi Infrastructure"
                  width={52}
                  height={52}
                  className="w-12 h-12 object-contain relative z-10"
                />
                <div className="absolute inset-0 bg-gold/10 rounded-full blur-[12px]" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-[22px] font-bold text-white tracking-[0.06em] leading-none">
                  BHOOMI
                </span>
                <span className="text-[9px] font-medium text-white/45 tracking-[0.26em] mt-[3px]">
                  INFRASTRUCTURE
                </span>
              </div>
              <span className="hidden md:block w-[1px] h-8 bg-white/[0.08] mx-3" />
              <p className="hidden md:block text-[13px] text-white/35 leading-[1.7] max-w-[320px]">
                We Construct Dreams! — End-to-end infrastructure construction
                and skilled outsourcing. Transfer your burden to us.
              </p>
              <Image
                src="/images/logo-blue.jpeg"
                alt="Bhoomi Infrastructure - Secondary Logo"
                width={56}
                height={56}
                className="hidden md:block w-14 h-14 object-contain rounded-full shrink-0"
              />
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 text-[10px] font-bold tracking-[0.18em] text-gold hover:text-gold-light uppercase no-underline transition-colors duration-300 shrink-0"
            >
              <span className="w-5 h-[1.5px] bg-gold/50 group-hover:w-8 transition-all duration-300" />
              Start a Project
              <ArrowRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* ═══ COLUMNS GRID — Nav / Contact / Office ═══ */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 mb-20"
          >

            {/* ── Navigation ── */}
            <motion.div variants={itemVariants}>
              <h4 className="text-[10px] font-bold tracking-[0.24em] text-gold/80 uppercase mb-7 flex items-center gap-3">
                <span className="w-4 h-[1px] bg-gold/30" />
                Navigate
              </h4>
              <ul className="space-y-4 list-none">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group text-[13px] text-white/45 hover:text-white no-underline transition-all duration-250 inline-flex items-center gap-0 hover:gap-2.5"
                    >
                      <span className="w-0 group-hover:w-3 h-[1px] bg-gold/70 transition-all duration-300 origin-left" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* ── Contact ── */}
            <motion.div variants={itemVariants}>
              <h4 className="text-[10px] font-bold tracking-[0.24em] text-gold/80 uppercase mb-7 flex items-center gap-3">
                <span className="w-4 h-[1px] bg-gold/30" />
                Contact
              </h4>
              <ul className="space-y-5 list-none">
                {/* Phone */}
                <li className="group flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-white/[0.04] border border-white/[0.06] group-hover:border-gold/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <Phone size={18} className="text-gold/60 group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <div className="pt-0.5">
                    <a
                      href="tel:+918604042326"
                      className="text-[13px] text-white/50 hover:text-white no-underline transition-colors block leading-[1.7]"
                    >
                      8604042326
                    </a>
                    <a
                      href="tel:+917390090241"
                      className="text-[13px] text-white/50 hover:text-white no-underline transition-colors block leading-[1.7]"
                    >
                      +91 73900 90241
                    </a>
                  </div>
                </li>
                {/* Email */}
                <li className="group flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-white/[0.04] border border-white/[0.06] group-hover:border-gold/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <Mail size={18} className="text-gold/60 group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <a
                    href="mailto:bhoomiinfrastructures@gmail.com"
                    className="text-[13px] text-white/50 hover:text-white no-underline transition-colors break-all pt-2"
                  >
                    bhoomiinfrastructures@gmail.com
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* ── Offices ── */}
            <motion.div variants={itemVariants}>
              <h4 className="text-[10px] font-bold tracking-[0.24em] text-gold/80 uppercase mb-7 flex items-center gap-3">
                <span className="w-4 h-[1px] bg-gold/30" />
                Our Offices
              </h4>

              <div className="space-y-4">
                {/* Corporate Office — Lucknow */}
                <div className="group bg-white/[0.025] border border-white/[0.06] hover:border-gold/15 rounded-sm p-5 transition-all duration-400">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] group-hover:border-gold/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                      <MapPin size={14} className="text-gold/60 group-hover:text-gold transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <p className="text-[13px] font-semibold text-white/80">
                          Lucknow
                        </p>
                        <span className="text-[8px] font-bold tracking-[0.14em] text-gold/50 bg-gold/[0.07] px-2 py-0.5 uppercase rounded-sm">
                          Corporate Office
                        </span>
                      </div>
                      <p className="text-[12px] text-white/38 leading-[1.7] mb-3">
                        07, Nandini Vihar, Sector-12,
                        <br />
                        Indira Nagar, Lucknow — 226016
                        <br />
                        Uttar Pradesh
                      </p>
                      <p className="text-[9.5px] text-gold/35 font-mono tracking-[0.06em]">
                        GSTIN: 09AASFB7214R1ZM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Registered Office — Dhanbad, Jharkhand */}
                <div className="group bg-white/[0.025] border border-white/[0.06] hover:border-gold/15 rounded-sm p-5 transition-all duration-400">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] group-hover:border-gold/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                      <MapPin size={14} className="text-gold/60 group-hover:text-gold transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <p className="text-[13px] font-semibold text-white/80">
                          Dhanbad
                        </p>
                        <span className="text-[8px] font-bold tracking-[0.14em] text-gold/50 bg-gold/[0.07] px-2 py-0.5 uppercase rounded-sm">
                          Regd. Office
                        </span>
                      </div>
                      <p className="text-[12px] text-white/38 leading-[1.7] mb-3">
                        New Bishnupur, Dhanbad
                        <br />
                        Jharkhand — 828130
                      </p>
                      <p className="text-[9.5px] text-gold/35 font-mono tracking-[0.06em]">
                        GSTIN: 20AASFB7214R1Z2
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ═══════════════ BOTTOM BAR ═══════════════ */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Bottom row */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-7">
              {/* Left — Legal */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
                <p className="text-[11px] text-white/30 tracking-wide">
                  © {currentYear} Bhoomi Infrastructure Pvt. Ltd.
                </p>
              </div>

              {/* Right — Back to top */}
              <button
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className="group flex items-center gap-2.5 text-[10px] font-semibold tracking-[0.16em] text-white/30 hover:text-gold uppercase transition-colors duration-300 cursor-pointer bg-transparent border-none p-0"
              >
                Back to Top
                <div className="w-8 h-8 rounded-full border border-white/[0.08] group-hover:border-gold/40 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1">
                  <ArrowUp size={13} className="transition-transform duration-300" />
                </div>
              </button>
            </div>

            {/* Decorative divider */}
            <div className="relative h-[1px] mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
              {/* Diamond accent */}
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 bg-[#040C16] flex items-center justify-center">
                <div className="w-[6px] h-[6px] rotate-45 border border-gold/30" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
