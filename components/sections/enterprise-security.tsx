"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Eye, Database, Lock } from "lucide-react";

export function EnterpriseSecurity() {
  const blocks = [
    { label: "Audit", icon: ShieldCheck, desc: "Immutable structural logging" },
    { label: "Monitoring", icon: Eye, desc: "Real-time threat detection" },
    { label: "Backup", icon: Database, desc: "Global redundant nodes" }
  ];

  return (
    <section className="relative overflow-hidden section-transition">
      
      {/* ENVIRONMENTAL BACKGROUND: Cinematic Infrastructure */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/env-infrastructure.png" 
          alt="Security Infrastructure" 
          fill
          className="object-cover blur-[40px] scale-110 opacity-[0.08] grayscale"
        />
        <div className="absolute inset-0 bg-navy-deep/90 backdrop-blur-3xl" />
        <div className="absolute inset-0 bg-[url('/dashboard-textures.png')] opacity-[0.03] mix-blend-screen scale-125" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* VISUAL SIDE (Left) - Security Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <div className="relative group">
               <div className="absolute -inset-4 bg-accent-gold/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-[0_60px_120px_rgba(0,0,0,0.8)] bg-navy-mid aspect-[1.2]">
                 <Image 
                   src="/security-soc.png" 
                   alt="Security Operations Center" 
                   fill
                   className="object-cover opacity-60 grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000"
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep via-transparent to-transparent" />
                 
                 {/* Floating Terminal Overlay */}
                 <div className="absolute top-10 left-10 p-6 glass-card border-white/10 bg-navy-deep/80 min-w-[240px]">
                    <div className="flex items-center gap-3 mb-6">
                       <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                       <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Protocol-11 Security Active</span>
                    </div>
                    <div className="space-y-3">
                       {[0, 1, 2].map((i) => (
                         <div key={i} className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: "70%" }}
                              transition={{ duration: 2, delay: i * 0.2 }}
                              className="h-full bg-accent-gold/40" 
                            />
                         </div>
                       ))}
                    </div>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* CONTENT SIDE (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-8">
               <Lock className="w-4 h-4 text-accent-gold" />
               <span className="text-[11px] font-black text-accent-gold uppercase tracking-[0.4em]">Structural Integrity</span>
            </div>

            <h2 className="text-[36px] md:text-[54px] font-bold text-white mb-10 leading-[1] tracking-tight">
              Institutional security <br />
              <span className="text-gold-gradient italic font-medium text-[48px] md:text-[72px]">at every layer.</span>
            </h2>
            
            <p className="text-[18px] text-white/30 mb-14 max-w-[480px] leading-relaxed font-light">
              We provide mission-critical protection for your delivery infrastructure. From encrypted data streams to multi-node redundancy.
            </p>
            
            <div className="space-y-4">
              {blocks.map((block, i) => (
                <div key={i} className="flex items-center justify-between p-6 glass-card bg-white/[0.01] border-white/[0.03] hover:border-accent-gold/10 group cursor-default transition-all">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover:bg-accent-gold/10 transition-colors">
                       <block.icon className="w-5 h-5 text-accent-gold/40 group-hover:text-accent-gold transition-colors" />
                    </div>
                    <div>
                       <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-1">{block.label}</div>
                       <div className="text-[15px] font-bold text-white/80">{block.desc}</div>
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-accent-gold/20 group-hover:bg-accent-gold transition-all" />
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      <div className="atmos-fade-bottom h-48" />
    </section>
  );
}
