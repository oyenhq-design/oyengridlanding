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

  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={containerRef} className="relative overflow-hidden py-32 md:py-48 bg-[#020617]" style={{ background: 'var(--section-bg)' }}>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* VISUAL ANCHOR (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 -ml-24 lg:-ml-32"
          >
            <div className="relative group perspective-[2000px]">
               <motion.div style={{ y: imageY, rotateY: 6 }} className="relative rounded-r-[48px] overflow-hidden cinematic-shadow border border-white/10">
                 <Image 
                   src="/ops-infrastructure-main.png" 
                   alt="Operational Systems" 
                   width={1400}
                   height={900}
                   className="object-cover opacity-90 grayscale-[0.2] group-hover:grayscale-0 transition-all duration-[1.5s] group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#020617]/40" />
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
               <span className="premium-label">System Architecture</span>
            </div>

            <h2 className="text-[36px] md:text-[48px] font-bold text-white mb-10 tracking-[-0.05em] leading-[1.1]">
              Built for operational <br />
              clarity at <span className="text-[#d6a63c] italic font-medium">global scale.</span>
            </h2>
            
            <p className="mb-14 max-w-[480px]">
              Eliminate the fragmentation that compromises institutional delivery. OYEN GRID provides the single operational source of truth for global programmes.
            </p>
            
            <div className="grid grid-cols-1 gap-12">
              {[
                { title: "Governance Logic", desc: "Institutional compliance layers integrated at the core of every operation." },
                { title: "Node Integrity", desc: "Immutable structural logging across all active points in the delivery chain." }
              ].map((item, i) => (
                <div key={i} className="group">
                   <h4 className="text-[17px] font-bold text-white mb-3 group-hover:text-[#d6a63c] transition-colors tracking-tight">{item.title}</h4>
                   <p className="text-[14px] leading-relaxed group-hover:text-white/50 transition-colors">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.04]" />
    </section>
  );
}
