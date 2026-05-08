"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, Workflow, Shield, Activity } from "lucide-react";

export function OperationalIntelligence() {
  const capabilities = [
    { title: "AI Forecasting", icon: Brain, desc: "Predictive operational logic for proactive scaling." },
    { title: "Automated Orchestration", icon: Workflow, desc: "Seamless coordination across all delivery nodes." },
    { title: "Content Governance", icon: Shield, desc: "Secure asset management with institutional integrity." },
    { title: "Live Analytics", icon: Activity, desc: "Real-time decision metrics for global visibility." }
  ];

  return (
    <section className="relative overflow-hidden py-48 md:py-64 border-none">
      
      {/* ENVIRONMENTAL BACKGROUND: Intelligence Room */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/env-intelligence.png" 
          alt="System Intelligence Environment" 
          fill
          className="object-cover opacity-[0.15] grayscale blur-[40px]"
        />
        <div className="absolute inset-0 bg-navy-deep/90 backdrop-blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-[url('/dashboard-textures.png')] opacity-[0.05] mix-blend-screen scale-150 rotate-12" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* CONTENT SIDE (Left) - Authoritative Info Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-4 mb-10">
               <div className="h-[1px] w-12 bg-accent-gold/40" />
               <span className="text-[11px] font-black text-accent-gold uppercase tracking-[0.4em]">Section 03 // Intelligence</span>
            </div>

            <h2 className="text-[48px] md:text-[84px] font-bold text-white mb-10 leading-[0.85] tracking-tighter uppercase">
              Orchestrate with <br />
              <span className="text-gold-gradient italic font-medium lowercase">systemic awareness.</span>
            </h2>
            
            <p className="text-[20px] text-white/40 mb-14 max-w-[480px] leading-relaxed font-light tracking-wide">
              Transform fragmented data into a high-fidelity operating system. Our intelligence layer provides real-time governance across every node.
            </p>

            {/* Embedded Cards: NOT Boxed Grid */}
            <div className="space-y-4">
               {capabilities.map((cap, i) => (
                 <div key={i} className="group relative p-6 rounded-[24px] border border-white/[0.03] bg-white/[0.01] hover:bg-white/[0.03] hover:border-accent-gold/10 transition-all duration-500">
                    <div className="flex items-center gap-5">
                       <div className="w-10 h-10 rounded-xl bg-accent-gold/5 flex items-center justify-center shrink-0 group-hover:bg-accent-gold/10 transition-colors">
                          <cap.icon className="w-5 h-5 text-accent-gold/40 group-hover:text-accent-gold" />
                       </div>
                       <div>
                          <h4 className="text-[15px] font-bold text-white group-hover:text-accent-gold transition-colors">{cap.title}</h4>
                          <p className="text-[12px] text-white/20 group-hover:text-white/40 transition-colors">{cap.desc}</p>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* LARGE VISUAL ANCHOR (Right) - Intelligence Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 60 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative aspect-[16/11] lg:mr-[-160px]">
               <div className="absolute -inset-20 bg-accent-gold/5 blur-[160px] animate-pulse" />
               <div className="relative h-full rounded-[60px] overflow-hidden border border-white/10 shadow-[0_80px_160px_rgba(0,0,0,0.9)] bg-navy-mid/60 cinematic-bleed">
                 <Image 
                   src="/intelligence-visual.png" 
                   alt="System Intelligence Visual" 
                   fill
                   className="object-cover opacity-90 grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-l from-navy-deep/80 via-transparent to-transparent" />
                 
                 {/* Floating Analytics Node */}
                 <div className="absolute top-12 right-12 p-8 glass-card border-white/10 bg-navy-deep/80 min-w-[240px]">
                    <div className="flex items-center gap-3 mb-4">
                       <div className="w-2 h-2 rounded-full bg-accent-gold shadow-[0_0_10px_rgba(200,155,45,0.6)]" />
                       <span className="text-[10px] text-white/20 font-black uppercase tracking-widest">Node Orchestration Logic</span>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2 tracking-tighter">+14.2%</div>
                    <div className="text-[11px] text-accent-gold/60 font-bold uppercase tracking-widest">Efficiency Projection</div>
                    
                    <div className="mt-8 space-y-3">
                       {[0, 1, 2].map((i) => (
                         <div key={i} className="flex items-center justify-between">
                            <div className="w-24 h-1 bg-white/5 rounded-full overflow-hidden">
                               <motion.div 
                                 animate={{ x: ["-100%", "100%"] }}
                                 transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                                 className="w-full h-full bg-accent-gold/20" 
                               />
                            </div>
                            <span className="text-[9px] text-white/20 font-mono">NODE_0{i+1}_SYNC</span>
                         </div>
                       ))}
                    </div>
                 </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="atmos-fade-top h-64 opacity-50" />
      <div className="atmos-fade-bottom h-64 opacity-50" />
    </section>
  );
}
