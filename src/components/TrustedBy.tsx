"use client";

import { motion } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";

const clients = [
  {
    name: "Sify Infinity Spaces Ltd",
    logo: "sify-spaces",
    text: "sify",
    subtext: "Infinity Spaces",
    color: "#6DB33F",
  },
  {
    name: "HCL · IT City Campus, Lucknow",
    logo: "hcl",
    text: "HCL",
    subtext: "IT City Campus, Lucknow",
    color: "#0063B1",
  },
  {
    name: "RAD Architects",
    logo: "rad",
    text: "RAD",
    subtext: "RAD Architects",
    color: "#1a1a1a",
  },
  {
    name: "Sify Technologies Ltd.",
    logo: "sify-tech",
    text: "sify",
    subtext: "Technologies",
    color: "#6DB33F",
  },
];

function LogoItem({ client }: { client: (typeof clients)[0] }) {
  if (client.logo === "sify-spaces" || client.logo === "sify-tech") {
    return (
      <div className="flex flex-col items-center gap-2 flex-shrink-0 mx-10 md:mx-14">
        <div className="h-[36px] flex items-center">
          <div className="flex items-center gap-[2px]">
            <span
              className="font-body text-[28px] font-extrabold tracking-[-0.02em]"
              style={{ color: client.color }}
            >
              sify
            </span>
            <span className="text-[18px]" style={{ color: client.color }}>
              ✦
            </span>
            <span className="text-[9px] font-semibold text-mid-grey tracking-[0.12em] uppercase ml-1 self-end mb-[2px] leading-tight">
              {client.subtext}
            </span>
          </div>
        </div>
        <span className="text-[10px] font-medium text-mid-grey tracking-[0.05em] text-center leading-[1.4]">
          {client.name}
        </span>
      </div>
    );
  }
  if (client.logo === "hcl") {
    return (
      <div className="flex flex-col items-center gap-2 flex-shrink-0 mx-10 md:mx-14">
        <div className="h-[36px] flex items-center">
          <span
            className="font-body text-[30px] font-black tracking-[0.02em] italic"
            style={{ color: client.color }}
          >
            HCL
          </span>
        </div>
        <span className="text-[10px] font-medium text-mid-grey tracking-[0.05em] text-center leading-[1.4]">
          {client.name}
        </span>
      </div>
    );
  }
  if (client.logo === "rad") {
    return (
      <div className="flex flex-col items-center gap-2 flex-shrink-0 mx-10 md:mx-14">
        <div className="h-[36px] flex items-center">
          <span
            className="font-heading text-[26px] font-bold tracking-[0.06em]"
            style={{ color: client.color }}
          >
            R∆D
          </span>
        </div>
        <span className="text-[10px] font-medium text-mid-grey tracking-[0.05em] text-center leading-[1.4]">
          {client.name}
        </span>
      </div>
    );
  }
  return null;
}

function MobileSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const isTouching = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const [dragged, setDragged] = useState(false);
  const animRef = useRef<number>(0);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const SPEED_PX_PER_FRAME = useRef(1);

  const autoScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    if (!isDragging.current && !isTouching.current) {
      track.scrollLeft += SPEED_PX_PER_FRAME.current;
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
    const raf = requestAnimationFrame(() => {
      SPEED_PX_PER_FRAME.current = 1;
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

  const loopedClients = [...clients, ...clients];

  return (
    <div className="relative">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-[32px] bg-gradient-to-r from-off-white to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-[32px] bg-gradient-to-l from-off-white to-transparent z-10 pointer-events-none" />

      <div
        ref={trackRef}
        className="flex overflow-x-auto gap-4 px-8 pb-2"
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
            key={`${client.logo}-${i}`}
            style={{ pointerEvents: dragged ? "none" : undefined }}
          >
            <LogoItem client={client} />
          </div>
        ))}
      </div>

      {/* Swipe hint */}
      <p className="text-center text-[9px] text-mid-grey/50 tracking-[0.1em] uppercase mt-3">
        ← swipe to explore →
      </p>
    </div>
  );
}

export default function TrustedBy() {
  // Double the list for seamless marquee loop
  const doubled = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="bg-off-white py-16 md:py-[68px] px-0 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-5 mb-14 px-6"
      >
        <div className="h-[1px] w-[60px] bg-gold" />
        <span className="text-[10.5px] font-bold tracking-[0.26em] text-gold uppercase">
          Trusted By
        </span>
        <div className="h-[1px] w-[60px] bg-gold" />
      </motion.div>

      {/* Desktop: Marquee */}
      <div className="hidden md:block relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-[60px] bg-gradient-to-r from-off-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-[60px] bg-gradient-to-l from-off-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {doubled.map((client, i) => (
            <LogoItem key={`${client.logo}-${i}`} client={client} />
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
