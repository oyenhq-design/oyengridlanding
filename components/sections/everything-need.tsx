"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Monitor, Cpu, Database, Network } from "lucide-react";

export function EverythingNeed() {
  const capabilities = [
    { title: "Modular Architecture", desc: "Build multi-layered programmes with absolute prerequisite logic.", icon: Cpu },
    { title: "Automated Governance", desc: "System-wide tracking and auditing of every participant touchpoint.", icon: Database },
    { title: "Scale Infrastructure", desc: "Provision thousands of sessions with zero manual orchestration.", icon: Network }
  ];

  return (
    <section className="py-40 bg-[#050816] relative overflow-hidden">
      
      {/* IMMERSIVE FULL-WIDTH BACKGROUND */}
      <div className="absolute inset-0 z-0">
         <img 
           src="/workstation.png" 
           alt="Workstation Cinematic" 
           className="w-full h-full object-cover opacity-30 grayscale-[0.5] scale-110"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/80 to-transparent" />
      </div>

      <div className="container-custom max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <h2 className="mb-10 text-white">
              Operate with <br />
              <span className="text-gold-gradient italic">absolute structural power.</span>
            </h2>
            <p className="mb-16 opacity-60">
              OYEN GRID provides the professional workstation suite designed for programme leaders who require high-fidelity control over global training operations.
            </p>
            
            <div className="space-y-12">
               {capabilities.map((cap, i) => (
                 <div key={i} className="flex gap-8 group">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border-none flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:shadow-[0_0_20px_rgba(212,166,42,0.4)] transition-all">
                       <cap.icon className="w-6 h-6 text-accent group-hover:text-black transition-all" />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-accent transition-colors">{cap.title}</h3>
                       <p className="opacity-40 text-[15px] font-light leading-relaxed max-w-sm group-hover:opacity-60 transition-opacity">{cap.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* Right: Immersive Workstation Environment */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
             <div className="relative group">
                <div className="absolute -inset-10 bg-accent/5 blur-[120px] rounded-full pointer-events-none opacity-40" />
                 <div className="relative glass-card p-4 bg-[#050816]/40 border-none rounded-[48px] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.8)]">
                    <img 
                      src="/workstation.png" 
                      alt="Cinematic Workstation" 
                      className="w-full h-auto grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 opacity-90 group-hover:scale-105"
                    />
                    
                    {/* Operational State Label */}
                    <div className="absolute top-12 right-12 flex items-center gap-3 glass-card px-6 py-2.5 bg-[#050816]/90 border-none shadow-2xl">
                       <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_10px_#D4A62A]" />
                       <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Live Operations</span>
                    </div>
                 </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
