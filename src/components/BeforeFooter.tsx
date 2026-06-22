"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function BeforeFooter() {
  return (
    <section className="bg-off-white relative">
      {/* Top gold accent line */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Left — CTA Panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-2 bg-navy px-8 md:px-14 py-16 md:py-20 flex flex-col justify-center"
        >
          <span className="text-[10.5px] font-bold tracking-[0.26em] text-gold uppercase block mb-5">
            Let&apos;s Build Together
          </span>
          <h2 className="font-heading text-[clamp(26px,3.5vw,38px)] font-extrabold text-white leading-[1.15] mb-5">
            Ready to Work<br />With Us?
          </h2>
          <p className="text-[14px] text-muted leading-[1.8] mb-8 max-w-[340px]">
            From groundbreaking to handover — accuracy, efficiency, and
            innovation in every project we deliver.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-dark text-white px-7 py-3.5 text-[11px] font-semibold tracking-[0.14em] uppercase no-underline transition-all duration-300"
            >
              Contact Now
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="https://wa.me/917390090241"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 border border-white/20 hover:border-gold/50 text-white px-7 py-3.5 text-[11px] font-semibold tracking-[0.14em] uppercase no-underline transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Right — Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="lg:col-span-3 relative min-h-[350px] md:min-h-[420px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2!2d80.99!3d26.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be37eb1f1b0a5%3A0x0!2sNandini+Vihar+Sector+12+Indira+Nagar+Lucknow+226016!5e0!3m2!1sen!2sin!4v1718000000000"
            width="100%"
            height="100%"
            style={{ border: 0, position: "absolute", inset: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bhoomi Infrastructure — Lucknow Office"
            className="grayscale-[30%] contrast-[1.05]"
          />
          {/* Map overlay pin label */}
          <div className="absolute bottom-6 left-6 z-10 bg-navy/90 backdrop-blur-sm px-4 py-2.5 border border-white/10">
            <p className="text-[10px] font-bold tracking-[0.14em] text-gold uppercase mb-0.5">
              Head Office
            </p>
            <p className="text-[12px] text-white/80">
              Indira Nagar, Lucknow — 226016
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom gold accent line — separator before footer */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
}
