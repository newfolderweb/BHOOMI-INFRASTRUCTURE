"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";

interface ProjectItem {
  image: string;
  title: string;
  category: string;
  location: string;
}

/* ── Featured (shown on page) ── */
const featuredProjects: ProjectItem[] = [
  {
    image: "/images/projects/image13.jpeg",
    title: "Sify Data Centre — 3D Render",
    category: "Architectural Visualization",
    location: "Sultanpur Road, Lucknow",
  },
  {
    image: "/images/projects/image14.jpeg",
    title: "Structural Construction & RCC",
    category: "Civil Engineering",
    location: "Sultanpur Road, Lucknow",
  },
  {
    image: "/images/projects/image27.jpeg",
    title: "External Cladding & Finishing",
    category: "Infrastructure",
    location: "Sultanpur Road, Lucknow",
  },
  {
    image: "/images/projects/image25.jpeg",
    title: "HVAC & Cooling Systems",
    category: "MEP Works",
    location: "Sultanpur Road, Lucknow",
  },
  {
    image: "/images/projects/image20.jpeg",
    title: "Structural Steel Framework",
    category: "Industrial Construction",
    location: "Sultanpur Road, Lucknow",
  },
  {
    image: "/images/projects/image24.jpeg",
    title: "Electrical Panel Installation",
    category: "Electrical & MEP",
    location: "Sultanpur Road, Lucknow",
  },
  {
    image: "/images/projects/image19.jpeg",
    title: "Underground Tank Installation",
    category: "Civil Engineering",
    location: "Sultanpur Road, Lucknow",
  },
  {
    image: "/images/projects/image22.jpeg",
    title: "Tower Crane & Erection Works",
    category: "Industrial Construction",
    location: "Sultanpur Road, Lucknow",
  },
  {
    image: "/images/projects/image17.jpeg",
    title: "Foundation & Slab Work",
    category: "Civil Engineering",
    location: "Sultanpur Road, Lucknow",
  },
];

/* ── All projects (for the gallery modal) ── */
const allProjects: ProjectItem[] = [
  ...featuredProjects,
  {
    image: "/images/projects/image15.jpeg",
    title: "Earthworks & Excavation",
    category: "Civil Engineering",
    location: "Sultanpur Road, Lucknow",
  },
  {
    image: "/images/projects/image16.jpeg",
    title: "Site Grading & Compaction",
    category: "Civil Engineering",
    location: "Sultanpur Road, Lucknow",
  },
  {
    image: "/images/projects/image18.jpeg",
    title: "Heavy Equipment & Crane Operations",
    category: "Industrial Construction",
    location: "Sultanpur Road, Lucknow",
  },
  {
    image: "/images/projects/image21.jpeg",
    title: "Foundation Curing & RCC",
    category: "Civil Engineering",
    location: "Sultanpur Road, Lucknow",
  },
  {
    image: "/images/projects/image23.jpeg",
    title: "Plumbing & Utility Works",
    category: "MEP Works",
    location: "Sultanpur Road, Lucknow",
  },
  {
    image: "/images/projects/image26.jpeg",
    title: "RCC Column Reinforcement",
    category: "Civil Engineering",
    location: "Sultanpur Road, Lucknow",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

/* ── Gallery Modal ── */
function GalleryModal({
  isOpen,
  onClose,
  projects,
}: {
  isOpen: boolean;
  onClose: () => void;
  projects: ProjectItem[];
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop — glass blur */}
          <div className="absolute inset-0 bg-navy/70 backdrop-blur-xl" />

          {/* Modal container — 80% of screen */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative z-10 w-full max-w-[90vw] max-h-[85vh] bg-[#0A1628] border border-white/[0.08] rounded-sm shadow-[0_30px_80px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-white/[0.06] shrink-0">
              <div>
                <h3 className="font-heading text-[20px] md:text-[24px] font-bold text-white">
                  Complete Project Gallery
                </h3>
                <p className="text-[12px] text-white/40 mt-1">
                  Sify Data Centre — Sultanpur Road, Lucknow •{" "}
                  {projects.length} photos
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.08] hover:border-gold/30 hover:bg-white/[0.1] flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 cursor-pointer"
                aria-label="Close gallery"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable grid */}
            <div className="overflow-y-auto flex-1 p-6 md:p-10">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                {projects.map((project, i) => (
                  <motion.div
                    key={project.image}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.03 }}
                    className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-navy/10 group-hover:bg-gold/20 transition-all duration-500" />

                    {/* Category tag */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-[8px] font-bold tracking-[0.12em] text-white uppercase bg-navy/70 backdrop-blur-sm px-2.5 py-1">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover info */}
                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent">
                      <h4 className="text-[13px] md:text-[14px] font-bold text-white leading-[1.3]">
                        {project.title}
                      </h4>
                      <p className="text-[10px] font-medium tracking-[0.08em] text-muted-dim uppercase mt-1">
                        {project.location}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Main Component ── */
export default function FeaturedProjects() {
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <>
      <section
        id="projects"
        className="bg-off-white py-20 md:py-28 px-6 md:px-13"
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14 md:mb-20"
          >
            <span className="text-[10.5px] font-bold tracking-[0.26em] text-gold uppercase block mb-4">
              Our Portfolio
            </span>
            <h2 className="font-heading text-[clamp(28px,4vw,42px)] font-extrabold text-navy leading-[1.1] mb-4">
              Featured Projects
            </h2>
            <p className="text-[14px] md:text-[15px] text-mid-grey leading-[1.8] max-w-[520px] mx-auto">
              A glimpse into our flagship project — the Sify Data Centre at
              Sultanpur Road, Lucknow, delivered end-to-end by Bhoomi Infrastructure.
            </p>
          </motion.div>

          {/* Projects Grid — Masonry-style with varying heights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="columns-1 md:columns-2 lg:columns-3 gap-5 md:gap-6 space-y-5 md:space-y-6"
          >
            {featuredProjects.map((project, i) => {
              // Varying aspect ratios for masonry effect
              const heights = [
                "aspect-[4/5]",
                "aspect-[16/10]",
                "aspect-[3/4]",
                "aspect-[16/10]",
                "aspect-[4/5]",
                "aspect-[16/10]",
                "aspect-[16/10]",
                "aspect-[4/5]",
                "aspect-[3/4]",
              ];
              return (
                <motion.div
                  key={project.title}
                  variants={cardVariants}
                  className={`group relative ${heights[i]} overflow-hidden break-inside-avoid cursor-pointer`}
                >
                  {/* Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Default overlay — subtle navy */}
                  <div className="absolute inset-0 bg-navy/15 transition-all duration-500 group-hover:bg-gold/25" />

                  {/* Category tag — always visible */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[9px] font-bold tracking-[0.14em] text-white uppercase bg-navy/70 backdrop-blur-sm px-3 py-1.5">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover content — slides up from bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent">
                    <h3 className="font-heading text-[17px] md:text-[18px] font-bold text-white mb-1 leading-[1.3]">
                      {project.title}
                    </h3>
                    <p className="text-[11px] font-medium tracking-[0.1em] text-muted-dim uppercase">
                      {project.location}
                    </p>
                  </div>

                  {/* Corner accent on hover */}
                  <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-full h-[2px] bg-gold" />
                    <div className="absolute top-0 right-0 h-full w-[2px] bg-gold" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Show More Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center mt-14"
          >
            <button
              onClick={() => setGalleryOpen(true)}
              className="group inline-flex items-center gap-3 bg-navy hover:bg-navy-mid text-white px-10 py-4 text-[11px] font-semibold tracking-[0.16em] uppercase transition-all duration-300 cursor-pointer border border-navy hover:border-gold/30 hover:shadow-[0_8px_30px_rgba(5,15,27,0.3)]"
            >
              View Full Gallery
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Gallery Modal */}
      <GalleryModal
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        projects={allProjects}
      />
    </>
  );
}
