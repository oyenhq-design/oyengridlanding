"use client";

import { motion } from "framer-motion";
import { Layers, ShieldCheck, Zap } from "lucide-react";

export function OperationalClarity() {
  const points = [
    { title: "Programme Mapping", desc: "Design complex delivery structures with high-fidelity visualization and node-based logic.", icon: Layers },
    { title: "Governance Layers", desc: "Enforce absolute structural integrity and compliance across every regional node.", icon: ShieldCheck },
    { title: "Structural Logic", desc: "Automate participant progression and session sequencing with zero administrative friction.", icon: Zap }
  ];

  return (
    <section className="section-padding relative bg-[#050816] overflow-hidden">
      {/* BACKGROUND DEPTH */}
      <div className="absolute inset-0 z-0">
        <div className="noise-bg absolute inset-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[160px] rounded-full pointer-events-none" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 mb-8">
               <div className="w-1.5 h-1.5 rounded-full bg-accent" />
               <span className="text-accent text-[10px] font-black tracking-[0.4em] uppercase opacity-60">OPERATIONAL ARCHITECTURE</span>
            </div>
             <h2 className="mb-8 text-white max-w-md">
               Built for operational clarity <br />
               <span className="text-gold-gradient italic">at global enterprise scale.</span>
             </h2>
             <p className="mb-12 text-white/50 max-w-sm leading-relaxed font-light">
               OYEN GRID transforms fragmented operations into a cohesive, high-performance system designed for executive oversight.
             </p>
            
            <div className="space-y-10">
               {points.map((point, i) => (
                 <div key={i} className="flex gap-6 group">
                   <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center shrink-0 group-hover:border-accent/40 transition-all duration-500">
                      <point.icon className="w-5 h-5 text-accent/40 group-hover:text-accent transition-colors" />
                   </div>
                   <div>
                      <h4 className="text-white font-bold text-[17px] mb-2 tracking-tight">{point.title}</h4>
                      <p className="text-white/40 text-[14px] font-light leading-relaxed max-w-xs">{point.desc}</p>
                   </div>
                 </div>
               ))}
            </div>

            <button className="btn-outline mt-16 h-12 px-10 text-[13px] uppercase tracking-widest font-black">
              Request Platform Audit
            </button>
          </motion.div>

          {/* Right: Realistic Human Operator */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <div className="relative group">
               {/* Restricted Glow */}
               <div className="absolute -inset-10 bg-accent/5 blur-[100px] rounded-full pointer-events-none opacity-40" />
               
               <div className="relative rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.8)] border border-white/5 bg-[#070B1D]">
                   <img 
                     src="/architecture-ops.png" 
                     alt="Enterprise Infrastructure Operator" 
                     className="w-full h-auto opacity-90 group-hover:scale-105 transition-transform duration-[4s]"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-60" />
                </div>

                {/* Status Overlay */}
                <div className="absolute top-8 right-8 glass-card py-3 px-5 bg-[#050816]/60 border-white/10 backdrop-blur-xl">
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
                      <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">System Active</span>
                   </div>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
