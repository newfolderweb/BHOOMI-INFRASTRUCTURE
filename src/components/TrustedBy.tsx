"use client";

import { motion } from "framer-motion";

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

      {/* Marquee */}
      <div className="relative">
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
    </section>
  );
}
