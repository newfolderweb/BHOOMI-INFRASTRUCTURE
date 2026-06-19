"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";

const clients = [
  { src: "/images/clients/image6.jpeg", name: "Indian Army" },
  { src: "/images/clients/image7.jpeg", name: "Indian Air Force" },
  { src: "/images/clients/image8.jpeg", name: "Indian Navy" },
  { src: "/images/clients/image9.jpeg", name: "Ministry of Tourism" },
  { src: "/images/clients/image11.jpeg", name: "EPFO" },
  { src: "/images/clients/image12.jpeg", name: "Power Grid" },
  { src: "/images/clients/image13.jpeg", name: "Ordnance Factory Board" },
  { src: "/images/clients/image14.jpeg", name: "Ministry of Education" },
  { src: "/images/clients/image15.jpeg", name: "Election Commission" },
  { src: "/images/clients/image16.jpeg", name: "Kendriya Vidyalaya" },
  { src: "/images/clients/image17.jpeg", name: "Bharat Petroleum" },
  { src: "/images/clients/image18.jpeg", name: "Indian Railways" },
  { src: "/images/clients/image19.jpeg", name: "CGHS" },
  { src: "/images/clients/image20.jpeg", name: "Akashvani" },
  { src: "/images/clients/image21.jpeg", name: "MSME" },
  { src: "/images/clients/image23.jpeg", name: "DRDO" },
  { src: "/images/clients/image24.jpeg", name: "UP Power Corp." },
  { src: "/images/clients/image25.png", name: "NTRO" },
];

function MobileSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const isTouching = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const [dragged, setDragged] = useState(false);
  const animRef = useRef<number>(0);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Calculate speed: total scroll width / duration(28s) / 60fps
  const SPEED_PX_PER_FRAME = useRef(1); // will be calculated on mount

  // Auto-scroll logic
  const autoScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    if (!isDragging.current && !isTouching.current) {
      track.scrollLeft += SPEED_PX_PER_FRAME.current;
      // Seamless loop: when we've scrolled past the first set, jump back
      const halfWidth = track.scrollWidth / 2;
      if (track.scrollLeft >= halfWidth) {
        track.scrollLeft -= halfWidth;
      }
    }
    animRef.current = requestAnimationFrame(autoScroll);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    // Wait a tick for layout to finish, then calculate speed
    const raf = requestAnimationFrame(() => {
      const halfWidth = track.scrollWidth / 2;
      // 28s at 60fps = 1680 frames to traverse half the content
      SPEED_PX_PER_FRAME.current = halfWidth / (28 * 60);
      animRef.current = requestAnimationFrame(autoScroll);
    });
    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(animRef.current);
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, [autoScroll]);

  const pauseAutoScroll = useCallback(() => {
    isTouching.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  }, []);

  const resumeAutoScroll = useCallback(() => {
    // Resume after a short delay so the scroll settles
    resumeTimer.current = setTimeout(() => {
      isTouching.current = false;
    }, 1200);
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    pauseAutoScroll();
    startX.current = e.clientX;
    scrollStart.current = trackRef.current?.scrollLeft ?? 0;
    trackRef.current?.setPointerCapture(e.pointerId);
    setDragged(false);
  }, [pauseAutoScroll]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const dx = startX.current - e.clientX;
    if (Math.abs(dx) > 4) setDragged(true);
    trackRef.current.scrollLeft = scrollStart.current + dx;
  }, []);

  const onPointerUp = useCallback(() => {
    isDragging.current = false;
    resumeAutoScroll();
  }, [resumeAutoScroll]);

  // Duplicate clients for seamless loop
  const loopedClients = [...clients, ...clients];

  return (
    <div className="relative">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-[32px] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-[32px] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div
        ref={trackRef}
        className="flex overflow-x-auto gap-3 px-6 pb-2"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          cursor: isDragging.current ? "grabbing" : "grab",
          userSelect: "none",
          WebkitOverflowScrolling: "touch",
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {loopedClients.map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            className="flex-shrink-0 flex flex-col items-center gap-2"
            style={{ pointerEvents: dragged ? "none" : undefined }}
          >
            <div className="w-[90px] h-[68px] bg-white border border-gray-100 rounded-lg flex items-center justify-center p-3 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
              <Image
                src={client.src}
                alt={client.name}
                width={80}
                height={50}
                className="object-contain max-h-[44px]"
                draggable={false}
              />
            </div>
            <p className="text-[9px] font-semibold text-mid-grey text-center tracking-[0.04em] leading-tight max-w-[90px]">
              {client.name}
            </p>
          </div>
        ))}
      </div>

      {/* Swipe hint */}
      <p className="text-center text-[9px] text-mid-grey/60 tracking-[0.1em] uppercase mt-3">
        ← swipe to explore →
      </p>
    </div>
  );
}

export default function ClientsStrip() {
  return (
    <section id="clients" className="bg-white py-16 md:py-20 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-3 bg-gold/10 border border-gold/20 px-6 py-2.5 mb-6">
          <div className="w-[5px] h-[5px] bg-gold rounded-full" />
          <span className="text-[10px] font-bold tracking-[0.22em] text-gold uppercase">
            High-Value Government &amp; Defence Clients
          </span>
          <div className="w-[5px] h-[5px] bg-gold rounded-full" />
        </div>
        <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-extrabold text-navy leading-[1.1] mb-3">
          Trusted by India&apos;s Finest
        </h2>
        <p className="text-[14px] text-mid-grey max-w-[420px] mx-auto leading-[1.7]">
          We serve prestigious government, defence and corporate organisations across the country.
        </p>
      </motion.div>

      {/* Desktop: Marquee */}
      <div className="hidden md:block relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-[80px] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-[80px] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex-shrink-0 mx-4 md:mx-6 group"
            >
              <div className="w-[110px] h-[80px] md:w-[130px] md:h-[90px] bg-white border border-gray-100 rounded-lg flex items-center justify-center p-3 shadow-[0_1px_4px_rgba(0,0,0,0.04)] transition-all duration-400 group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] group-hover:border-gold/30">
                <Image
                  src={client.src}
                  alt={client.name}
                  width={100}
                  height={60}
                  className="object-contain max-h-[50px] md:max-h-[58px]"
                />
              </div>
              <p className="text-[9px] font-medium text-mid-grey text-center mt-2 tracking-[0.04em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: Draggable slider */}
      <div className="md:hidden">
        <MobileSlider />
      </div>
    </section>
  );
}
