"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Subtle parallax: background moves slower than scroll
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  // Content fades out as you scroll past
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.7], [0, -40]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full flex-1 flex flex-col justify-center bg-navy overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: "url('/images/hero-bg-hd-upscaled.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          imageRendering: "auto",
          y: bgY,
          scale: 1.1,
        }}
      />

      {/* Left-side gradient — dark where text sits, clear on right for image */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(5,15,27,0.85) 0%, rgba(5,15,27,0.6) 35%, rgba(5,15,27,0.1) 60%, transparent 100%)",
        }}
      />
      {/* Bottom gradient — transition into features bar */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(5,15,27,1) 0%, rgba(5,15,27,0.6) 12%, rgba(5,15,27,0.1) 30%, transparent 50%)",
        }}
      />

      {/* Content — fades and moves up as user scrolls down */}
      <motion.div
        className="relative z-10 mx-4 md:mx-0 mt-20 md:mt-0 px-6 py-8 md:py-0 md:px-13 md:pt-20 max-w-[640px] rounded-2xl md:rounded-none bg-[#050F1B]/60 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border border-white/10 md:border-transparent shadow-2xl md:shadow-none"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-x-[12px] gap-y-[8px] mb-6"
        >
          <span className="text-[10.5px] md:text-[11.5px] font-bold tracking-[0.30em] uppercase" style={{ color: "#D4943A" }}>
            Civil Engineering
          </span>
          <div className="w-[5px] h-[5px] rounded-full" style={{ background: "#FFFFFF" }} />
          <span className="text-[10.5px] md:text-[11.5px] font-bold tracking-[0.30em] uppercase" style={{ color: "#D4943A" }}>
            Construction
          </span>
          <div className="w-[5px] h-[5px] rounded-full" style={{ background: "#FFFFFF" }} />
          <span className="text-[10.5px] md:text-[11.5px] font-bold tracking-[0.30em] uppercase" style={{ color: "#D4943A" }}>
            Outsourcing
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-heading text-[clamp(40px,5.2vw,76px)] font-extrabold text-white leading-[1.05] tracking-[-0.01em] mb-5"
        >
          <span className="block">We Construct.</span>
          <span className="block">We Outsource.</span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-[13.5px] md:text-[15px] font-normal text-muted leading-[1.7] max-w-[430px] mb-9"
        >
          End-to-end infrastructure and construction solutions
          <br className="hidden md:block" />
          with skilled outsourcing that builds better, faster and smarter.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#construction-services"
            className="inline-flex items-center gap-[10px] bg-gold text-white text-[11px] font-bold tracking-[0.14em] uppercase px-7 py-4 no-underline transition-all duration-200 hover:bg-gold-dark group"
          >
            OUR SERVICES
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-[10px] bg-transparent text-white text-[11px] font-bold tracking-[0.14em] uppercase px-7 py-[15px] border-[1.5px] border-white/55 no-underline transition-all duration-200 hover:border-white hover:bg-white/[0.06] group"
          >
            GET A QUOTE
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
