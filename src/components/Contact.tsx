"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, FileText, MessageCircle } from "lucide-react";

const contactDetails = [
  {
    icon: <Phone size={20} strokeWidth={1.5} />,
    label: "Phone",
    value: "0522-3524986",
    href: "tel:05223524986",
  },
  {
    icon: <MessageCircle size={20} strokeWidth={1.5} />,
    label: "WhatsApp",
    value: "+91 73900 90241",
    href: "https://wa.me/917390090241",
  },
  {
    icon: <Mail size={20} strokeWidth={1.5} />,
    label: "Email",
    value: "bhoomiinfrastructures@gmail.com",
    href: "mailto:bhoomiinfrastructures@gmail.com",
  },
  {
    icon: <MapPin size={20} strokeWidth={1.5} />,
    label: "Head Office",
    value: "07, Nandini Vihar, Sector-12, Indira Nagar, Lucknow — 226016",
    href: "https://maps.google.com/?q=Nandini+Vihar+Sector+12+Indira+Nagar+Lucknow",
  },
];

const gstinInfo = [
  { state: "Uttar Pradesh", gstin: "09AALCB6498R1Z3" },

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

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-12">
          {contactDetails.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group flex items-start gap-5 bg-white/[0.04] border border-white/[0.08] hover:border-gold/30 p-6 md:p-7 transition-all duration-400 no-underline hover:bg-white/[0.07]"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <p className="text-[10px] font-bold tracking-[0.18em] text-gold uppercase mb-1.5">
                  {item.label}
                </p>
                <p className="text-[14px] md:text-[15px] text-white/90 leading-[1.6] group-hover:text-white transition-colors">
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* GSTIN Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center [&>div]:w-full [&>div]:max-w-[530px]"
        >
          {gstinInfo.map((gst) => (
            <div
              key={gst.gstin}
              className="flex flex-col items-center gap-3 bg-white/[0.03] border border-white/[0.06] px-6 py-5 text-center"
            >
              <FileText size={16} className="text-gold/60" />
              <div>
                <p className="text-[10px] font-bold tracking-[0.16em] text-gold/70 uppercase mb-1">
                  GSTIN — {gst.state}
                </p>
                <p className="text-[13px] text-white/70 font-mono tracking-wider">
                  {gst.gstin}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

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
          >
            <MessageCircle size={16} />
            WhatsApp Us
          </a>
          <a
            href="mailto:bhoomiinfrastructures@gmail.com"
            className="flex items-center gap-2.5 border border-white/20 hover:border-gold/50 text-white px-8 py-3.5 text-[11px] font-semibold tracking-[0.14em] uppercase no-underline transition-all duration-300"
          >
            <Mail size={16} />
            Send an Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
