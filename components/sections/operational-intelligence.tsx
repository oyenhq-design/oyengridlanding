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

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const capabilities = [
    { title: "AI Forecasting", desc: "Predictive operational logic for proactive scaling and resource management." },
    { title: "Automated Orchestration", desc: "Seamless coordination across all global delivery nodes and team structures." },
    { title: "Content Governance", desc: "Secure asset management with institutional integrity and compliance." },
    { title: "Real-time Telemetry", desc: "Real-time decision metrics for global visibility and executive oversight." }
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-48 md:py-64 bg-[#020617]" style={{ background: 'var(--section-bg)' }}>
      
      {/* IMMERSIVE BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0">
          <Image 
            src="/intelligence-ops-room.png" 
            alt="Intelligence Environment" 
            fill
            className="object-cover opacity-[0.35] grayscale-[0.3]"
          />
        </motion.div>
        {/* Controlled Gradients for Sharpness */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/40 to-[#020617]" />
        <div className="absolute inset-0 bg-[#020617]/40 backdrop-blur-[1px]" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto mb-32"
        >
          <div className="flex items-center justify-center gap-4 mb-10">
             <div className="h-[1px] w-12 bg-[#d6a63c]/30" />
             <span className="premium-label">Intelligence Layer</span>
             <div className="h-[1px] w-12 bg-[#d6a63c]/30" />
          </div>

          <h2 className="text-[40px] md:text-[56px] font-bold text-white mb-10 tracking-[-0.05em] leading-[1]">
            Orchestrate with <br />
            <span className="text-[#d6a63c] italic font-medium">systemic awareness.</span>
          </h2>
          
          <p className="max-w-2xl mx-auto mb-16 text-white/50 font-light">
            Transform fragmented data into a high-fidelity operating system. Our intelligence layer provides real-time governance across every node.
          </p>
        </motion.div>

        {/* CAPABILITY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
           {capabilities.map((cap, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: i * 0.1 }}
               className="text-left group"
             >
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#d6a63c]/40 group-hover:bg-[#d6a63c] transition-all" />
                   <div className="text-[10px] text-[#d6a63c]/60 font-bold uppercase tracking-[0.3em]">Protocol L-0{i+1}</div>
                </div>
                <h4 className="text-[19px] font-bold text-white mb-4 group-hover:text-[#d6a63c] transition-colors tracking-tight">{cap.title}</h4>
                <p className="text-[14px] leading-relaxed group-hover:text-white/50 transition-colors">{cap.desc}</p>
                <div className="mt-10 h-[1px] w-12 bg-white/5 group-hover:w-full group-hover:bg-[#d6a63c]/20 transition-all duration-1000" />
             </motion.div>
           ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.04]" />
    </section>
  );
}
