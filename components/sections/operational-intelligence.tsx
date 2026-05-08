"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function OperationalIntelligence() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  const protocols = [
    { title: "Predictive Resourcing", desc: "Institutional logic for proactive resource allocation across global nodes." },
    { title: "Node Orchestration", desc: "Centralized coordination of diverse infrastructure points and delivery teams." },
    { title: "Asset Integrity", desc: "Secure management of institutional content with absolute version governance." },
    { title: "Telemetry Feed", desc: "Live operational metrics providing executive visibility across the delivery chain." }
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-48 md:py-64 bg-[#020617]" style={{ background: 'var(--section-bg)' }}>
      
      {/* PANORAMIC BACKDROP */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0">
          <Image 
            src="/intelligence-ops-room.png" 
            alt="Operations Intelligence" 
            fill
            className="object-cover opacity-[0.25] grayscale-[0.4]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/40 to-[#020617]" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto mb-32"
        >
          <div className="flex items-center justify-center gap-6 mb-12">
             <div className="h-[1px] w-12 bg-[#d6a63c]/30" />
             <span className="text-[10px] font-bold text-[#d6a63c]/60 uppercase tracking-[0.6em]">Systemic Intelligence Layer</span>
             <div className="h-[1px] w-12 bg-[#d6a63c]/30" />
          </div>

          <h2 className="text-[40px] md:text-[64px] font-bold text-white mb-10 tracking-[-0.05em] leading-[1]">
            Deploy with <br />
            <span className="text-[#d6a63c] italic font-medium">architectural awareness.</span>
          </h2>
          
          <p className="max-w-2xl mx-auto mb-16 text-[18px] text-white/50 font-light leading-[1.8]">
            Transform fragmented data into a cohesive operational layer. Our intelligence protocols provide the governance required for institutional infrastructure management.
          </p>
        </motion.div>

        {/* PROTOCOL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
           {protocols.map((p, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: i * 0.1 }}
               className="text-left group"
             >
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-2 h-2 rounded-full bg-[#d6a63c]/20 group-hover:bg-[#d6a63c] transition-all" />
                   <div className="text-[10px] text-[#d6a63c]/40 font-bold uppercase tracking-[0.4em]">Protocol L-0{i+1}</div>
                </div>
                <h4 className="text-[19px] font-bold text-white mb-4 group-hover:text-[#d6a63c] transition-colors tracking-tight">{p.title}</h4>
                <p className="text-[15px] text-white/40 leading-relaxed font-light">{p.desc}</p>
                <div className="mt-12 h-[1px] w-12 bg-white/5 group-hover:w-full group-hover:bg-[#d6a63c]/20 transition-all duration-1000" />
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
