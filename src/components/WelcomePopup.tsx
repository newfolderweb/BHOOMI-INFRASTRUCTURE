"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const AUTO_SLIDE_INTERVAL = 4500;

/* ─── Slide data ─── */
const slides = [
  {
    logo: "/images/logo-blue.jpeg",
    heading: "Bhoomi Infrastructure",
    subtitle: "Reliable outsourcing solutions for modern infrastructure needs.",
    tagline: "WE OUTSOURCE.",
    accentColor: "#1a4b8c",
    accentLight: "#3B82F6",
    accentSuperLight: "rgba(59,130,246,0.12)",
    dotColor: "#1a4b8c",
    btnGradient: "linear-gradient(135deg, #1a3a6e 0%, #1a4b8c 50%, #2563EB 100%)",
    arcColor: "rgba(59,130,246,0.12)",
    arcColorStrong: "rgba(59,130,246,0.18)",
    dotDecorColor: "#3B82F6",
    bgTint: "linear-gradient(145deg, #f0f4fa 0%, #f7f8fb 40%, #eef2f9 100%)",
    cornerGlow1: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
    cornerGlow2: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)",
  },
  {
    logo: "/images/logo.png",
    heading: "Bhoomi Infrastructure",
    subtitle: "Reliable constructing solutions for modern infrastructure needs.",
    tagline: "WE CONSTRUCT.",
    accentColor: "#88532C",
    accentLight: "#B8773E",
    accentSuperLight: "rgba(136,83,44,0.10)",
    dotColor: "#88532C",
    btnGradient: "linear-gradient(135deg, #6E421F 0%, #88532C 50%, #A0693A 100%)",
    arcColor: "rgba(184,119,62,0.10)",
    arcColorStrong: "rgba(184,119,62,0.16)",
    dotDecorColor: "#B8773E",
    bgTint: "linear-gradient(145deg, #faf5f0 0%, #fbf8f5 40%, #f5efe8 100%)",
    cornerGlow1: "radial-gradient(circle, rgba(184,119,62,0.08) 0%, transparent 70%)",
    cornerGlow2: "radial-gradient(circle, rgba(184,119,62,0.06) 0%, transparent 70%)",
  },
];

/* ─── Decorative Dots Row ─── */
function DecorDots({ color, className }: { color: string; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-[6px] ${className || ""}`}>
      <span style={{ width: 5, height: 5, borderRadius: "50%", background: color, opacity: 0.5 }} />
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: color, opacity: 0.7 }} />
      <span style={{ width: 5, height: 5, borderRadius: "50%", background: color, opacity: 0.5 }} />
    </span>
  );
}

/* ─── Horizontal divider with center dot ─── */
function Divider({ color }: { color: string }) {
  return (
    <div className="flex items-center justify-center gap-3 w-[70%] mx-auto">
      <span className="flex-1 h-[1px]" style={{ background: `linear-gradient(to right, transparent, ${color}40)` }} />
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: color,
          opacity: 0.6,
        }}
      />
      <span className="flex-1 h-[1px]" style={{ background: `linear-gradient(to left, transparent, ${color}40)` }} />
    </div>
  );
}

export default function WelcomePopup() {
  const [visible, setVisible] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);
  const dragStartRef = useRef<number>(0);

  /* ── Entry animation trigger ── */
  useEffect(() => {
    const t = setTimeout(() => setHasEntered(true), 50);
    return () => clearTimeout(t);
  }, []);

  /* ── Auto-slide ── */
  const resetAutoSlide = useCallback(() => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => {
      setActiveSlide((p) => (p + 1) % slides.length);
    }, AUTO_SLIDE_INTERVAL);
  }, []);

  useEffect(() => {
    if (!visible) return;
    resetAutoSlide();
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [visible, resetAutoSlide]);

  /* ── Navigation ── */
  const goTo = useCallback(
    (i: number) => {
      setActiveSlide(i);
      resetAutoSlide();
    },
    [resetAutoSlide]
  );

  /* ── Drag/swipe ── */
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartRef.current = e.clientX;
    setDragOffset(0);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setDragOffset(e.clientX - dragStartRef.current);
  };
  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -50 && activeSlide < slides.length - 1) goTo(activeSlide + 1);
    else if (dragOffset > 50 && activeSlide > 0) goTo(activeSlide - 1);
    setDragOffset(0);
  };

  /* ── Dismiss ── */
  const handleContinue = () => {
    setExiting(true);
    setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 650);
  };

  /* ── Keyboard ── */
  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goTo(Math.min(activeSlide + 1, slides.length - 1));
      if (e.key === "ArrowLeft") goTo(Math.max(activeSlide - 1, 0));
      if (e.key === "Enter" || e.key === "Escape") handleContinue();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, activeSlide]);

  /* ── Lock scroll ── */
  useEffect(() => {
    if (visible) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  const current = slides[activeSlide];

  return (
    <div
      id="welcome-popup-overlay"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(ellipse at center, rgba(5,15,27,0.90) 0%, rgba(0,0,0,0.96) 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        opacity: exiting ? 0 : hasEntered ? 1 : 0,
        transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* ── Left arrow ── */}
      {activeSlide > 0 && (
        <button
          aria-label="Previous slide"
          onClick={() => goTo(activeSlide - 1)}
          style={{
            position: "absolute",
            left: "max(8px, calc(50% - 310px))",
            top: "50%",
            transform: "translateY(-50%)",
            width: 44,
            height: 44,
            borderRadius: "50%",
            border: "1.5px solid rgba(255,255,255,0.2)",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            color: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
            zIndex: 10,
            padding: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = `${current.accentColor}cc`;
            e.currentTarget.style.borderColor = current.accentLight;
            e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            e.currentTarget.style.boxShadow = `0 0 20px ${current.accentColor}40`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.08)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 5l-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      {/* ── Right arrow ── */}
      {activeSlide < slides.length - 1 && (
        <button
          aria-label="Next slide"
          onClick={() => goTo(activeSlide + 1)}
          style={{
            position: "absolute",
            right: "max(8px, calc(50% - 310px))",
            top: "50%",
            transform: "translateY(-50%)",
            width: 44,
            height: 44,
            borderRadius: "50%",
            border: "1.5px solid rgba(255,255,255,0.2)",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            color: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
            zIndex: 10,
            padding: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = `${current.accentColor}cc`;
            e.currentTarget.style.borderColor = current.accentLight;
            e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            e.currentTarget.style.boxShadow = `0 0 20px ${current.accentColor}40`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.08)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M8 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      {/* ── Main card ── */}
      <div
        style={{
          width: "92vw",
          maxWidth: 540,
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 30px 90px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.05)",
          transform: exiting
            ? "translateY(30px) scale(0.94)"
            : hasEntered
            ? "translateY(0) scale(1)"
            : "translateY(40px) scale(0.95)",
          opacity: exiting ? 0 : hasEntered ? 1 : 0,
          transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease",
        }}
      >
        {/* Slider viewport */}
        <div
          style={{ overflow: "hidden", touchAction: "pan-y", userSelect: "none" }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <div
            style={{
              display: "flex",
              transform: `translateX(calc(-${activeSlide * 100}% + ${isDragging ? dragOffset : 0}px))`,
              transition: isDragging ? "none" : "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                style={{
                  flex: "0 0 100%",
                  width: "100%",
                  position: "relative",
                  background: slide.bgTint,
                  padding: "48px 36px 36px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 0,
                  minHeight: 520,
                  boxSizing: "border-box",
                }}
              >
                {/* ── Top-left decorative arcs ── */}
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                  style={{ position: "absolute", top: 0, left: 0, opacity: 0.7 }}
                >
                  <circle cx="-10" cy="-10" r="80" stroke={slide.arcColor} strokeWidth="1" fill="none" />
                  <circle cx="-10" cy="-10" r="100" stroke={slide.arcColor} strokeWidth="0.8" fill="none" />
                  <circle cx="-10" cy="-10" r="118" stroke={slide.arcColor} strokeWidth="0.5" fill="none" />
                  <circle cx="22" cy="40" r="4" fill={slide.dotDecorColor} opacity="0.4" />
                </svg>

                {/* ── Bottom-right decorative arcs ── */}
                <svg
                  width="180"
                  height="180"
                  viewBox="0 0 180 180"
                  fill="none"
                  style={{ position: "absolute", bottom: 0, right: 0, opacity: 0.6 }}
                >
                  <circle cx="200" cy="200" r="120" stroke={slide.arcColorStrong} strokeWidth="1" fill="none" />
                  <circle cx="200" cy="200" r="150" stroke={slide.arcColor} strokeWidth="0.8" fill="none" />
                  {i === 1 && (
                    <>
                      {/* Extra warm glow for brown slide */}
                      <circle cx="140" cy="140" r="60" fill="rgba(184,119,62,0.04)" />
                      <circle cx="155" cy="155" r="45" fill="rgba(184,119,62,0.03)" />
                    </>
                  )}
                  <circle cx="160" cy="50" r="3.5" fill={slide.dotDecorColor} opacity="0.35" />
                </svg>

                {/* ── Corner glow blobs ── */}
                <div
                  style={{
                    position: "absolute",
                    top: -60,
                    left: -60,
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    background: slide.cornerGlow1,
                    pointerEvents: "none",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: -80,
                    right: -80,
                    width: 280,
                    height: 280,
                    borderRadius: "50%",
                    background: slide.cornerGlow2,
                    pointerEvents: "none",
                  }}
                />

                {/* ── Logo ── */}
                <div
                  style={{
                    position: "relative",
                    width: 160,
                    height: 160,
                    marginBottom: 20,
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={slide.logo}
                    alt={`Bhoomi Infrastructure ${i === 0 ? "Outsourcing" : "Construction"} Logo`}
                    fill
                    className="object-contain"
                    priority={i === 0}
                    sizes="160px"
                    draggable={false}
                  />
                </div>

                {/* ── Divider ── */}
                <Divider color={slide.accentColor} />

                {/* ── Heading ── */}
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.6rem, 4.5vw, 2.1rem)",
                    fontWeight: 700,
                    color: slide.accentColor,
                    margin: "18px 0 6px",
                    textAlign: "center",
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {slide.heading}
                </h2>

                {/* ── Subtitle ── */}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(0.82rem, 2.2vw, 0.95rem)",
                    color: "#5A6A7A",
                    textAlign: "center",
                    maxWidth: 360,
                    lineHeight: 1.55,
                    margin: "0 0 18px",
                    fontWeight: 400,
                  }}
                >
                  {slide.subtitle}
                </p>

                {/* ── Divider 2 ── */}
                <Divider color={slide.accentColor} />

                {/* ── Tagline with decorative dots ── */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 14,
                    margin: "20px 0 24px",
                  }}
                >
                  <DecorDots color={slide.dotDecorColor} />
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
                      fontWeight: 700,
                      letterSpacing: "0.25em",
                      color: slide.accentColor,
                      textTransform: "uppercase",
                    }}
                  >
                    {slide.tagline}
                  </span>
                  <DecorDots color={slide.dotDecorColor} />
                </div>

                {/* ── Continue button ── */}
                <button
                  id={`welcome-popup-continue-${i}`}
                  onClick={handleContinue}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    background: slide.btnGradient,
                    color: "#fff",
                    border: "none",
                    borderRadius: 10,
                    padding: "14px 40px",
                    fontSize: "1rem",
                    fontWeight: 600,
                    fontFamily: "var(--font-body)",
                    letterSpacing: "0.03em",
                    cursor: "pointer",
                    boxShadow: `0 6px 24px ${slide.accentColor}30`,
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                    position: "relative",
                    zIndex: 2,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 10px 32px ${slide.accentColor}45`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 6px 24px ${slide.accentColor}30`;
                  }}
                >
                  Continue
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M4 9h10M10 5l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ── Slide indicator dots ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            padding: "14px 0 16px",
            background: "#fff",
            borderTop: "1px solid rgba(0,0,0,0.04)",
          }}
        >
          {slides.map((s, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => goTo(i)}
              style={{
                width: activeSlide === i ? 30 : 10,
                height: 10,
                borderRadius: 20,
                border: "none",
                cursor: "pointer",
                background:
                  activeSlide === i
                    ? `linear-gradient(135deg, ${s.accentColor}, ${s.accentLight})`
                    : "rgba(0,0,0,0.12)",
                transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
