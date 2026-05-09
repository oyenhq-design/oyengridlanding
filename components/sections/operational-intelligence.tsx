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
    <section ref={sectionRef} className="relative overflow-hidden py-48 md:py-80 bg-[#04070D]">
      
      {/* CINEMATIC ENVIRONMENT BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0">
          <Image 
            src="/intelligence-ops-room.png" 
            alt="System Intelligence Environment" 
            fill
            className="object-cover opacity-[0.4] grayscale-[0.2]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#04070D] via-transparent to-[#04070D]" />
        <div className="atmos-glow-radial absolute inset-0 opacity-40" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl mx-auto mb-32"
        >
          <div className="flex items-center justify-center gap-5 mb-10">
             <div className="h-px w-12 bg-[#d6a63c]/30" />
             <span className="label-institutional">Intelligence Layer</span>
             <div className="h-px w-12 bg-[#d6a63c]/30" />
          </div>

          <h2 className="text-white mb-10">
            Orchestrate with <br />
            <span className="text-accent-gold italic font-medium">systemic awareness.</span>
          </h2>
          
          <p className="max-w-2xl mx-auto opacity-70">
            Coordinate large-scale programme operations through a unified operational infrastructure layer. Built for absolute structural integrity.
          </p>
        </motion.div>

        {/* INTEGRATED PROTOCOL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {capabilities.map((cap, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: i * 0.1 }}
               className="premium-card text-left flex flex-col justify-between"
             >
                <div>
                   <div className="flex items-center gap-3 mb-8">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d6a63c]/40 group-hover:bg-[#d6a63c] transition-all" />
                      <div className="text-[10px] text-white/20 font-black uppercase tracking-[0.3em]">Protocol L-0{i+1}</div>
                   </div>
                   <h4 className="text-[19px] font-bold text-white mb-5 group-hover:text-accent-gold transition-colors">{cap.title}</h4>
                   <p className="text-[13.5px] opacity-60 leading-relaxed font-light">{cap.desc}</p>
                </div>
                <div className="mt-12 h-[1px] w-full bg-white/5 group-hover:bg-accent-gold/20 transition-all duration-1000" />
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
