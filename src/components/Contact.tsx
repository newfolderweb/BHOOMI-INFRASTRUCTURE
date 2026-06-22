"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, FileText, MessageCircle } from "lucide-react";

// Row 1: Phone, WhatsApp
// Row 2: Email, Address
// Row 3: GSTIN UP, GSTIN JH
const contactGrid = [
  [
    {
      icon: <Phone size={20} strokeWidth={1.5} />,
      label: "Phone",
      value: "8604042326",
      href: "tel:+918604042326",
    },
    {
      icon: <MessageCircle size={20} strokeWidth={1.5} />,
      label: "WhatsApp",
      value: "+91 73900 90241, 8604042326",
      href: "https://wa.me/917390090241",
    },
  ],
  [
    {
      icon: <Mail size={20} strokeWidth={1.5} />,
      label: "Email",
      value: "bhoomiinfrastructures@gmail.com",
      href: "mailto:bhoomiinfrastructures@gmail.com",
    },
    {
      icon: <MapPin size={20} strokeWidth={1.5} />,
      label: "Address",
      value: "07, Nandini Vihar, Sector-12, Indira Nagar, Lucknow — 226016, UP",
      href: "https://maps.google.com/?q=Nandini+Vihar+Sector+12+Indira+Nagar+Lucknow",
    },
  ],
  [
    {
      icon: <FileText size={20} strokeWidth={1.5} />,
      label: "GSTIN — Uttar Pradesh",
      value: "09AASFB7214R1ZM",
      isGstin: true,
    },
    {
      icon: <FileText size={20} strokeWidth={1.5} />,
      label: "GSTIN — Jharkhand",
      value: "20AASFB7214R1Z2",
      isGstin: true,
    },
  ],
];

export default function Contact() {
  return (
    <section id="contact" className="bg-navy py-20 md:py-28 px-6 md:px-13 relative overflow-hidden border-b border-gold/15">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/[0.03] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

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
            Get In Touch
          </span>
          <h2 className="font-heading text-[clamp(28px,4vw,42px)] font-extrabold text-white leading-[1.1] mb-4">
            Ready to Break Ground?
          </h2>
          <p className="text-[14px] md:text-[15px] text-muted leading-[1.8] max-w-[480px] mx-auto">
            Let&apos;s discuss your next infrastructure or outsourcing project.
            Reach out — we respond within 24 hours.
          </p>
        </motion.div>

        {/* Contact Grid — 2-column aligned layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-12 max-w-[800px] mx-auto">
          {contactGrid.flat().map((item, i) => {
            const inner = (
              <>
                {/* Gold top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-[20px]" />

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <p className="text-[10px] font-bold tracking-[0.18em] text-gold uppercase mb-1.5">
                    {item.label}
                  </p>
                  <p className={`text-[14px] md:text-[15px] text-white/90 leading-[1.6] group-hover:text-white transition-colors ${"isGstin" in item && item.isGstin ? "font-mono tracking-wider" : ""}`}>
                    {item.value}
                  </p>
                </div>
              </>
            );

            return "href" in item && item.href ? (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden flex items-start gap-5 bg-white/[0.06] backdrop-blur-xl border border-white/[0.12] hover:border-gold/40 rounded-[20px] p-6 md:p-7 transition-all duration-400 no-underline hover:bg-white/[0.10] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
                style={{ borderRadius: '20px' }}
              >
                {inner}
              </motion.a>
            ) : (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden flex items-start gap-5 bg-white/[0.06] backdrop-blur-xl border border-white/[0.12] hover:border-gold/40 rounded-[20px] p-6 md:p-7 transition-all duration-400 hover:bg-white/[0.10] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
                style={{ borderRadius: '20px' }}
              >
                {inner}
              </motion.div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 md:mt-16"
        >
          <a
            href="https://wa.me/917390090241"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-gold hover:bg-gold-dark text-white px-8 py-3.5 text-[11px] font-semibold tracking-[0.14em] uppercase no-underline transition-all duration-300"
            style={{ borderRadius: '14px' }}
          >
            <MessageCircle size={16} />
            WhatsApp Us
          </a>
          <a
            href="mailto:bhoomiinfrastructures@gmail.com"
            className="flex items-center gap-2.5 border border-white/20 hover:border-gold/50 text-white backdrop-blur-xl bg-white/[0.06] px-8 py-3.5 text-[11px] font-semibold tracking-[0.14em] uppercase no-underline transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
            style={{ borderRadius: '14px' }}
          >
            <Mail size={16} />
            Send an Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
