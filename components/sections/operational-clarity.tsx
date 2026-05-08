"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function OperationalClarity() {
  return (
    <section className="relative overflow-hidden py-32 md:py-48 bg-[#040816]">
      
      {/* ENVIRONMENTAL DEPTH */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/env-map-system.png" 
          alt="Global Infrastructure" 
          fill
          className="object-cover opacity-[0.1] grayscale blur-[60px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040816] via-transparent to-[#040816]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* LARGE VISUAL ANCHOR (Left) - Bleed & Asymmetry */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 -ml-24 lg:-ml-32"
          >
            <div className="relative group">
               <div className="absolute -inset-20 bg-[#C89B2D]/5 blur-[140px] opacity-0 group-hover:opacity-100 transition-opacity duration-[2s]" />
               <div className="relative rounded-r-[60px] overflow-hidden shadow-2xl">
                 <Image 
                   src="/ops-infrastructure-main.png" 
                   alt="Operational Systems" 
                   width={1400}
                   height={900}
                   className="object-cover opacity-90 grayscale-[0.2] group-hover:grayscale-0 transition-all duration-[1.5s] group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#040816]/40" />
               </div>
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
            <div className="flex items-center gap-4 mb-10">
               <div className="h-[1px] w-12 bg-[#C89B2D]/40" />
               <span className="text-[11px] font-medium text-[#C89B2D] uppercase tracking-[0.5em]">System Logic</span>
            </div>

            <h2 className="text-[36px] md:text-[56px] font-bold text-white mb-10 leading-[1.1] tracking-tight">
              Built for operational <br />
              clarity at <span className="text-[#C89B2D] italic font-medium">global scale.</span>
            </h2>
            
            <p className="text-[19px] text-white/40 mb-14 max-w-[480px] leading-relaxed font-light">
              Eliminate the fragmentation that compromises institutional delivery. OYEN GRID provides the single operational source of truth for global programmes.
            </p>
            
            <div className="grid grid-cols-1 gap-10 mb-16">
              {[
                { title: "Governance Logic", desc: "Institutional compliance layers integrated at the core of every operation." },
                { title: "Node Integrity", desc: "Immutable structural logging across all active points in the delivery chain." }
              ].map((item, i) => (
                <div key={i} className="group">
                   <h4 className="text-[18px] font-bold text-white mb-3 group-hover:text-[#C89B2D] transition-colors">{item.title}</h4>
                   <p className="text-[15px] text-white/30 leading-relaxed group-hover:text-white/50 transition-colors">{item.desc}</p>
                </div>
              ))}
            </div>

            <button className="text-[13px] font-black text-[#C89B2D] uppercase tracking-[0.4em] flex items-center gap-4 group">
              Explore Architecture <span className="group-hover:translate-x-3 transition-transform duration-500">→</span>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
