"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

      {/* Marquee — double the logos for seamless loop */}
      <div className="relative">
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
    </section>
  );
}
