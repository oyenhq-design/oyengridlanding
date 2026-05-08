"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function OperationalClarity() {
  return (
    <section className="relative overflow-hidden py-32 md:py-48">
      
      {/* ENVIRONMENTAL BACKGROUND: Global Map Operations */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/env-map-system.png" 
          alt="Global Infrastructure Environment" 
          fill
          className="object-cover blur-[60px] scale-110 opacity-[0.12] grayscale"
        />
        <div className="absolute inset-0 bg-navy-deep/90 backdrop-blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-center">
          
          {/* LARGE DOMINANT VISUAL (Left) - Asymmetric Anchor */}
          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative group">
               <div className="absolute -inset-8 bg-accent-gold/10 blur-[120px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000" />
               <div className="relative rounded-[60px] overflow-hidden border border-white/10 shadow-[0_80px_160px_rgba(0,0,0,0.9)] bg-navy-mid/60 cinematic-bleed aspect-[16/10]">
                 <Image 
                   src="/ops-infrastructure-main.png" 
                   alt="Operational Infrastructure Systems" 
                   fill
                   className="object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/60 via-transparent to-white/5" />
                 
                 {/* Embedded Logic Panel */}
                 <div className="absolute bottom-10 left-10 p-8 glass-card border-white/10 bg-navy-deep/80 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                    <div className="flex items-center gap-3 mb-4">
                       <div className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
                       <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">System Topology</span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-2 tracking-tight">Active Node Synchronization</div>
                    <div className="text-[13px] text-white/30 font-light max-w-[300px]">Real-time coordination across 1,200+ global delivery endpoints.</div>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* SUPPORTING CONTENT (Right) - Authoritative Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-4 mb-10">
               <div className="h-[1px] w-12 bg-accent-gold/40" />
               <span className="text-[11px] font-black text-accent-gold uppercase tracking-[0.4em]">Section 02 // Infrastructure</span>
            </div>

            <h2 className="text-[48px] md:text-[84px] font-bold text-white mb-10 leading-[0.85] tracking-tighter uppercase">
              Structural <br />
              <span className="text-gold-gradient italic font-medium lowercase">operational clarity.</span>
            </h2>
            
            <p className="text-[20px] text-white/40 mb-14 max-w-[480px] leading-relaxed font-light tracking-wide">
              Eliminate the fragmentation that compromises institutional delivery. OYEN GRID provides the single operational source of truth for your entire delivery network.
            </p>
            
            <div className="space-y-6 mb-16">
              {[
                { title: "Governance Logic", desc: "Institutional compliance layers integrated at the core." },
                { title: "Dynamic Scaling", desc: "Elastic infrastructure that expands with delivery demand." },
                { title: "Node Integrity", desc: "Immutable structural logging across all active points." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 group">
                   <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent-gold/10 group-hover:border-accent-gold/20 transition-all">
                      <CheckCircle2 className="w-5 h-5 text-accent-gold/40 group-hover:text-accent-gold transition-colors" />
                   </div>
                   <div>
                      <h4 className="text-[16px] font-bold text-white mb-1 tracking-tight group-hover:text-accent-gold transition-colors">{item.title}</h4>
                      <p className="text-[14px] text-white/20 leading-relaxed group-hover:text-white/40 transition-colors">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>

            <button className="btn-gold px-10 h-14 text-[12px] tracking-widest uppercase shadow-[0_15px_30px_rgba(200,155,45,0.2)]">
              Explore Architecture
            </button>
          </motion.div>

        </div>
      </div>
      
      {/* Cinematic Transition */}
      <div className="atmos-fade-bottom h-64 opacity-60" />
    </section>
  );
}
