"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function OperationalClarity() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={containerRef} className="relative overflow-hidden py-32 md:py-64 bg-[#04070D]">
      
      {/* CONTINUOUS ENVIRONMENT BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-[#04070D] via-[#04070D]/95 to-[#04070D]" />
        <div className="atmos-glow-radial absolute inset-0 opacity-40" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-32 items-center">
          
          {/* LARGE VISUAL ANCHOR (Left) - Bleed & Perspective */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 -ml-24 lg:-ml-48"
          >
            <div className="relative group">
               <div className="absolute -inset-20 bg-[#d6a63c]/5 blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-[2s]" />
               <motion.div style={{ y: imageY }} className="relative rounded-r-[60px] overflow-hidden border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.65)]">
                 <Image 
                   src="/ops-infrastructure-main.png" 
                   alt="Operational Systems" 
                   width={1400}
                   height={900}
                   className="object-cover opacity-90 grayscale-[0.3] group-hover:grayscale-0 transition-all duration-[1.5s] group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#020617]/40" />
               </motion.div>
            </div>
          </motion.div>

          {/* RESTRAINED CONTENT (Right) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-5 mb-10">
               <div className="h-px w-12 bg-[#d6a63c]/30" />
               <span className="label-institutional">Operational Infrastructure</span>
            </div>

            <h2 className="text-white mb-10">
              Built for clarity at <br />
              <span className="text-accent-gold italic font-medium">global scale.</span>
            </h2>
            
            <p className="mb-14 max-w-[480px]">
              Eliminate the fragmentation that compromises institutional delivery. OYEN GRID provides the single operational source of truth for global programmes.
            </p>
            
            <div className="space-y-12">
              {[
                { title: "Governance Logic", desc: "Institutional compliance layers integrated at the core of every operation." },
                { title: "Node Integrity", desc: "Immutable structural logging across all active points in the delivery chain." }
              ].map((item, i) => (
                <div key={i} className="group relative pl-8 border-l border-white/5 hover:border-accent-gold/40 transition-colors duration-500">
                   <h4 className="text-[17px] font-bold text-white mb-4 group-hover:text-accent-gold transition-colors">{item.title}</h4>
                   <p className="text-[14px] opacity-60 group-hover:opacity-100 transition-opacity font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
