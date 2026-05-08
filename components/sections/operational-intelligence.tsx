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
    { label: "Live Analytics", title: "Real-time Telemetry", desc: "Real-time decision metrics for global visibility and executive oversight." }
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-48 md:py-64 bg-[#040816]">
      
      {/* FULL-WIDTH IMMERSIVE BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0">
          <Image 
            src="/intelligence-ops-room.png" 
            alt="System Intelligence Environment" 
            fill
            className="object-cover opacity-[0.45] grayscale-[0.2]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#040816] via-[#040816]/50 to-[#040816]" />
        <div className="absolute inset-0 bg-[#040816]/40 backdrop-blur-[2px]" />
        <div className="smoke-overlay opacity-[0.04]" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl mx-auto mb-32"
        >
          <div className="flex items-center justify-center gap-4 mb-10">
             <div className="h-[1px] w-12 bg-[#C89B2D]/40" />
             <span className="text-[11px] font-medium text-[#C89B2D] uppercase tracking-[0.6em]">Intelligence Layer</span>
             <div className="h-[1px] w-12 bg-[#C89B2D]/40" />
          </div>

          <h2 className="text-[40px] md:text-[52px] font-bold text-white mb-10 leading-[1.1] tracking-tight">
            Orchestrate with <br />
            <span className="text-[#C89B2D] italic font-medium">systemic awareness.</span>
          </h2>
          
          <p className="text-[19px] text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
            Transform fragmented data into a high-fidelity operating system. Our intelligence layer provides real-time governance across every node.
          </p>
        </motion.div>

        {/* INTEGRATED CAPABILITIES (NO BOXES) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24">
           {capabilities.map((cap, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: i * 0.1 }}
               className="text-left group"
             >
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-1 h-1 rounded-full bg-[#C89B2D]/40 group-hover:bg-[#C89B2D] transition-all" />
                   <div className="text-[10px] text-[#C89B2D]/60 font-black uppercase tracking-[0.4em]">Protocol L-0{i+1}</div>
                </div>
                <h4 className="text-[20px] font-bold text-white mb-4 group-hover:text-[#C89B2D] transition-colors">{cap.title}</h4>
                <p className="text-[14px] text-white/30 leading-relaxed group-hover:text-white/50 transition-colors font-light">{cap.desc}</p>
                <div className="mt-10 h-px w-12 bg-white/5 group-hover:w-full group-hover:bg-[#C89B2D]/20 transition-all duration-1000" />
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
