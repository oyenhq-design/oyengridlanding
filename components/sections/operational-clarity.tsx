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
    <section ref={containerRef} className="relative overflow-hidden py-40 md:py-56 bg-[#020617]" style={{ background: 'var(--section-bg)' }}>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* VISUAL ANCHOR (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 -ml-24 lg:-ml-40"
          >
            <div className="relative group perspective-[2000px]">
               <motion.div style={{ y: imageY, rotateY: 4 }} className="relative rounded-r-[64px] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.6)] border border-white/10">
                 <Image 
                   src="/ops-infrastructure-main.png" 
                   alt="Operational Systems" 
                   width={1400}
                   height={900}
                   className="object-cover opacity-90 grayscale-[0.3] group-hover:grayscale-0 transition-all duration-[2s]"
                 />
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#020617]/60" />
               </motion.div>
            </div>
          </motion.div>

          {/* CONTENT (Right) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-4 mb-10">
               <div className="h-[1px] w-12 bg-[#d6a63c]/30" />
               <span className="text-[10px] font-bold text-[#d6a63c]/60 uppercase tracking-[0.4em]">Infrastructure Layer</span>
            </div>

            <h2 className="text-[36px] md:text-[52px] font-bold text-white mb-10 tracking-[-0.05em] leading-[1.1]">
              Orchestrate global <br />
              programme <span className="text-[#d6a63c] italic font-medium">integrity.</span>
            </h2>
            
            <p className="mb-14 max-w-[480px] text-[17px] text-white/50 leading-[1.8] font-light">
              Coordinate large-scale delivery nodes through a unified architectural interface. Eliminate the fragmentation that compromises institutional delivery at scale.
            </p>
            
            <div className="space-y-12">
              {[
                { title: "Governance Protocols", desc: "Institutional compliance layers integrated at the core of every delivery node." },
                { title: "Structural Logic", desc: "Immutable structural coordination for complex global programme operations." }
              ].map((item, i) => (
                <div key={i} className="group">
                   <h4 className="text-[18px] font-bold text-white mb-3 group-hover:text-[#d6a63c] transition-colors tracking-tight">{item.title}</h4>
                   <p className="text-[15px] text-white/40 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
