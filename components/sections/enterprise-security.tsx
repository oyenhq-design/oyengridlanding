"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Eye, Database, Lock } from "lucide-react";

export function EnterpriseSecurity() {
  const blocks = [
    { label: "Audit", icon: ShieldCheck, desc: "Immutable structural logging across all nodes." },
    { label: "Monitoring", icon: Eye, desc: "Institutional threat detection and mitigation." },
    { label: "Backup", icon: Database, desc: "Global redundant storage at enterprise scale." }
  ];

  return (
    <section className="relative overflow-hidden py-32 md:py-48">
      
      {/* ENVIRONMENTAL BACKGROUND: Secure SOC Environment */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/env-security-dark.png" 
          alt="Security Infrastructure Environment" 
          fill
          className="object-cover blur-[60px] scale-110 opacity-[0.1] grayscale"
        />
        <div className="absolute inset-0 bg-navy-deep/95 backdrop-blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-center">
          
          {/* LARGE DOMINANT VISUAL (Left) - Security Anchor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <div className="relative group">
               <div className="absolute -inset-10 bg-accent-gold/5 blur-[120px] opacity-0 group-hover:opacity-30 transition-opacity duration-1000" />
               <div className="relative rounded-[60px] overflow-hidden border border-white/10 shadow-[0_80px_160px_rgba(0,0,0,0.9)] bg-navy-mid/40 cinematic-bleed aspect-[16/11]">
                 <Image 
                   src="/security-visual.png" 
                   alt="Security Operations Architecture" 
                   fill
                   className="object-cover opacity-90 grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/80 via-transparent to-transparent" />
                 
                 {/* Floating Compliance Terminal */}
                 <div className="absolute top-10 left-10 p-8 glass-card border-white/10 bg-navy-deep/90 min-w-[280px]">
                    <div className="flex items-center gap-4 mb-6">
                       <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.6)]" />
                       <span className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em]">Protocol_Structural_Active</span>
                    </div>
                    <div className="space-y-4">
                       {[
                         { label: "Data Integrity", value: "Confirmed" },
                         { label: "Access Control", value: "Verified" },
                         { label: "Audit Log", value: "Syncing" }
                       ].map((stat, i) => (
                         <div key={i} className="flex items-center justify-between">
                            <span className="text-[10px] text-white/20 uppercase tracking-widest">{stat.label}</span>
                            <span className="text-[11px] text-accent-gold font-bold">{stat.value}</span>
                         </div>
                       ))}
                    </div>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* SUPPORTING CONTENT (Right) - Security Specs */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="flex items-center gap-4 mb-10">
               <div className="h-[1px] w-12 bg-accent-gold/40" />
               <span className="text-[11px] font-black text-accent-gold uppercase tracking-[0.4em]">Section 04 // Security</span>
            </div>

            <h2 className="text-[48px] md:text-[64px] font-bold text-white mb-10 leading-[0.95] tracking-tighter">
              Institutional <br />
              <span className="text-gold-gradient italic font-medium">structural protection.</span>
            </h2>
            
            <p className="text-[20px] text-white/40 mb-14 max-w-[480px] leading-relaxed font-light tracking-wide">
              We provide mission-critical protection for your delivery infrastructure. From encrypted data streams to multi-node redundancy.
            </p>
            
            <div className="space-y-4 mb-16">
              {blocks.map((block, i) => (
                <div key={i} className="flex items-center justify-between p-6 glass-card bg-white/[0.01] border-white/[0.03] hover:border-accent-gold/10 group cursor-default transition-all duration-500">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover:bg-accent-gold/10 transition-colors duration-500">
                       <block.icon className="w-5 h-5 text-accent-gold/30 group-hover:text-accent-gold transition-colors duration-500" />
                    </div>
                    <div>
                       <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-1">{block.label}</div>
                       <div className="text-[15px] font-bold text-white group-hover:text-white transition-colors duration-500">{block.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn-gold px-12 h-14 text-[12px] tracking-widest uppercase shadow-[0_15px_30px_rgba(200,155,45,0.2)]">
              Review Security
            </button>
          </motion.div>

        </div>
      </div>

      <div className="atmos-fade-bottom h-64 opacity-60" />
    </section>
  );
}
