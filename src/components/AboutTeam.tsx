"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield } from "lucide-react";

interface TeamMember {
  name: string;
  title: string;
  credential?: string;
  image?: string;
  initials: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sudhir Kumar Singh",
    title: "Managing Director",
    credential: "Ex-Indian Air Force",
    image: "/images/team/sudhir.jpeg",
    initials: "SK",
  },
  {
    name: "Sarita Singh",
    title: "Director",
    credential: "B.Com",
    image: "/images/team/sarita.jpeg",
    initials: "SS",
  },
  {
    name: "Subrat Kr. Sagar",
    title: "Executive Engineer",
    credential: "Electrical",
    image: "/images/team/subrat.jpeg",
    initials: "SK",
  },
  {
    name: "Satya Singh",
    title: "Office Manager",
    credential: "B.Com",
    image: "/images/team/satya.jpg",
    initials: "SS",
  },
  {
    name: "Ar. Deepak Kumar Singh",
    title: "Architect",
    credential: "B.Arch",
    image: "/images/team/deepak.jpeg",
    initials: "DK",
  },
  {
    name: "Sahil Singh",
    title: "Assistant Engineer",
    credential: "Elec. & Comm.",
    image: "/images/team/sahil.jpeg",
    initials: "SS",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function AboutTeam() {
  return (
    <section id="about" className="bg-white py-20 md:py-28 px-6 md:px-13">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="text-[10.5px] font-bold tracking-[0.26em] text-gold uppercase block mb-4">
            About Us
          </span>
          <h2 className="font-heading text-[clamp(28px,4vw,42px)] font-extrabold text-navy leading-[1.1] mb-6">
            We Construct Dreams!
          </h2>
          <p className="text-[14px] md:text-[15px] text-mid-grey leading-[1.85] max-w-[620px] mx-auto mb-4">
            We are a technology-driven Infrastructure & Construction Services
            provider, delivering end-to-end Civil Engineering, Industrial
            Construction, and Government Infrastructure Projects. Our capabilities
            cover Residential, Commercial, Industrial & Institutional developments
            across Uttar Pradesh and Jharkhand.
          </p>
          <p className="text-[14px] md:text-[15px] text-mid-grey leading-[1.85] max-w-[620px] mx-auto mb-4">
            Our Mission is to build a future where every infrastructure project
            embodies accuracy, efficiency, and innovation, and every construction
            endeavour stands as smart, safe, and exemplary in quality.
          </p>
          <p className="text-[14px] md:text-[15px] text-mid-grey leading-[1.85] max-w-[620px] mx-auto">
            With 90+ completed projects, 90+ trusted clients, and a portfolio
            spanning data centres to defence establishments — we don&apos;t just
            build structures, we build trust.
          </p>
        </motion.div>

        {/* Military Credential Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-navy px-6 py-3.5 border border-gold/20">
            <Shield size={18} className="text-gold" />
            <span className="text-[11px] font-semibold tracking-[0.14em] text-white/90 uppercase">
              Founded by an Ex-Indian Air Force Professional
            </span>
            <Shield size={18} className="text-gold" />
          </div>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="font-heading text-[24px] md:text-[28px] font-bold text-navy">
            Our Leadership
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              className="group text-center"
            >
              {/* Avatar */}
              <div className="relative w-[100px] h-[100px] md:w-[120px] md:h-[120px] mx-auto mb-5 rounded-full overflow-hidden border-2 border-off-white group-hover:border-gold/40 transition-all duration-400">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-navy to-navy-mid flex items-center justify-center">
                    <span className="font-heading text-[28px] md:text-[32px] font-bold text-gold/80">
                      {member.initials}
                    </span>
                  </div>
                )}
                {/* Hover ring */}
                <div className="absolute inset-0 rounded-full border-2 border-gold/0 group-hover:border-gold/50 transition-all duration-400" />
              </div>

              {/* Name */}
              <h4 className="font-heading text-[16px] md:text-[18px] font-bold text-navy mb-1 leading-[1.2]">
                {member.name}
              </h4>

              {/* Title */}
              <p className="text-[12px] md:text-[13px] text-mid-grey mb-2">
                {member.title}
              </p>

              {/* Credential Tag */}
              {member.credential && (
                <span className="inline-block text-[9px] font-semibold tracking-[0.1em] text-gold bg-gold/8 px-3 py-1 uppercase">
                  {member.credential}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
