"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT US", href: "#about" },
  { label: "SERVICES", href: "#construction-services" },
  { label: "PROJECTS", href: "#projects" },
  { label: "OUR CLIENTS", href: "#clients" },
  { label: "CONTACT", href: "#contact" },
];

// Map section IDs for scroll-spy — some nav links correspond to different section ids
const sectionIds = [
  "home",
  "about",
  "construction-services",
  "projects",
  "clients",
  "contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [logoPopup, setLogoPopup] = useState(false);

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Scroll detection for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: "-30% 0px -60% 0px",
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = useCallback(
    (href: string) => {
      const id = href.replace("#", "");
      return activeSection === id;
    },
    [activeSection]
  );

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gold z-[60] origin-left"
        style={{ scaleX }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-[3px] left-3 right-3 md:left-6 md:right-6 z-50 flex items-center justify-between px-6 md:px-10 py-4 md:py-5 rounded-2xl transition-all duration-500 overflow-hidden ${scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg"
          : "bg-white/[0.06] backdrop-blur-[12px] border border-white/10"
          }`}
      >
        {/* Subtle flowing light bar */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 45%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 55%, transparent 100%)",
            backgroundSize: "200% 100%",
            animation: "navShimmer 14s ease-in-out infinite",
          }}
        />
        <style jsx>{`
          @keyframes navShimmer {
            0%, 100% { background-position: 200% 0; }
            50% { background-position: -200% 0; }
          }
        `}</style>
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 no-underline">
          <Image
            src="/images/logo-transparent.png"
            alt="Bhoomi Infrastructure"
            width={48}
            height={48}
            className="w-10 h-10 md:w-12 md:h-12 object-contain cursor-pointer"
            priority
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setLogoPopup(true); }}
          />
          <div className="flex flex-col">
            <span className="font-heading text-[18px] md:text-[22px] font-bold text-white tracking-[0.06em] leading-none">
              BHOOMI
            </span>
            <span className="text-[8px] md:text-[9px] font-medium text-white/65 tracking-[0.22em] mt-[3px]">
              INFRASTRUCTURE
            </span>
          </div>
          <Image
            src="/images/logo-blue.jpeg"
            alt="Bhoomi Infrastructure - Secondary Logo"
            width={56}
            height={56}
            className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-full cursor-pointer"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setLogoPopup(true); }}
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-9 xl:gap-11 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-[11px] xl:text-[12px] font-medium tracking-[0.1em] no-underline uppercase transition-colors duration-200 pb-1 relative ${isActive(link.href)
                  ? "text-gold"
                  : "text-white/85 hover:text-white"
                  }`}
              >
                {link.label}
                {/* Active indicator dot */}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="activeNavDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="bg-gold text-white px-5 py-[10px] text-[11px] tracking-[0.14em] font-semibold no-underline uppercase transition-all duration-200 hover:bg-gold-dark"
            >
              GET A QUOTE
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2 z-50"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-navy flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-8 list-none">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-[14px] font-medium tracking-[0.15em] no-underline uppercase ${isActive(link.href) ? "text-gold" : "text-white"
                      }`}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
              >
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="bg-gold text-white px-8 py-3 text-[12px] tracking-[0.14em] font-semibold no-underline uppercase transition-all duration-200 hover:bg-gold-dark mt-4 inline-block"
                >
                  GET A QUOTE
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logo Lightbox Popup */}
      <AnimatePresence>
        {logoPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center cursor-pointer"
            style={{
              background: "radial-gradient(ellipse at center, rgba(5,15,27,0.92) 0%, rgba(0,0,0,0.96) 100%)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
            onClick={() => setLogoPopup(false)}
          >
            {/* Close button */}
            <button
              onClick={() => setLogoPopup(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors duration-200"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
              aria-label="Close logo popup"
            >
              <X size={20} />
            </button>

            {/* Logos */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row items-center gap-10 md:gap-16 cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Brown / Construction logo */}
              <div className="flex flex-col items-center gap-4">
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "#fff",
                    padding: "24px",
                    boxShadow: "0 20px 60px rgba(136,83,44,0.2), 0 0 0 1px rgba(255,255,255,0.06)",
                  }}
                >
                  <Image
                    src="/images/logo-transparent.png"
                    alt="Bhoomi Infrastructure - Construction"
                    width={220}
                    height={220}
                    className="object-contain"
                  />
                </div>
                <span
                  className="text-[11px] font-semibold tracking-[0.2em] uppercase"
                  style={{ color: "#B8773E" }}
                >
                  We Construct
                </span>
              </div>

              {/* Divider */}
              <div
                className="hidden md:block w-[1px] h-40"
                style={{
                  background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.15), transparent)",
                }}
              />
              <div
                className="block md:hidden h-[1px] w-40"
                style={{
                  background: "linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent)",
                }}
              />

              {/* Blue / Outsourcing logo */}
              <div className="flex flex-col items-center gap-4">
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "#fff",
                    padding: "24px",
                    boxShadow: "0 20px 60px rgba(59,130,246,0.15), 0 0 0 1px rgba(255,255,255,0.06)",
                  }}
                >
                  <Image
                    src="/images/logo-blue.jpeg"
                    alt="Bhoomi Infrastructure - Outsourcing"
                    width={220}
                    height={220}
                    className="object-contain"
                  />
                </div>
                <span
                  className="text-[11px] font-semibold tracking-[0.2em] uppercase"
                  style={{ color: "#3B82F6" }}
                >
                  We Outsource
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
