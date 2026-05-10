"use client";

import { motion } from "framer-motion";
import { Globe, Shield, Users, Database, Zap, Activity } from "lucide-react";
import Image from "next/image";

export function ScaleStructure() {
  const metrics = [
    { label: "Active Programmes", val: "1,240+", icon: Database },
    { label: "Total Participants", val: "84,000+", icon: Users },
    { label: "Global Nodes", val: "42", icon: Globe },
    { label: "System Uptime", val: "99.99%", icon: Shield }
  ];

  return (
    <section className="section-gap relative overflow-hidden bg-[#05070B] border-y border-white/5">
      {/* Cinematic Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand-gold/[0.03] blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-gold/[0.02] blur-[120px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-24 items-start">
          
          {/* LEFT: Scaling Narrative (Span 5) */}
          <div className="lg:col-span-5 pt-12">
            <div className="inline-flex items-center gap-4 px-5 py-2.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-12 backdrop-blur-md">
              <Activity className="w-4 h-4 text-brand-gold" />
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-brand-gold">Scaling Protocol Active</span>
            </div>

            <h2 className="mb-12 tracking-[-0.07em]">
              Infrastructure built for <br />
              <span className="text-gold-highlight italic underline decoration-white/5 underline-offset-[16px]">institutional scale.</span>
            </h2>

            <p className="text-editorial mb-16 opacity-90 max-w-xl">
              OYEN GRID transforms fragmented training programmes into a unified institutional operating system. Coordinate hundreds of cohorts and thousands of participants through a single architectural layer designed for absolute reliability.
            </p>

            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/5">
               {metrics.map((m, i) => (
                 <div key={i} className="space-y-4 group">
                    <div className="flex items-center gap-3">
                       <m.icon className="w-4 h-4 text-brand-gold/40 group-hover:text-brand-gold transition-colors" />
                       <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">{m.label}</span>
                    </div>
                    <div className="text-[42px] font-black text-white tracking-tighter leading-none group-hover:text-brand-gold transition-colors">{m.val}</div>
                 </div>
               ))}
            </div>

            <button className="mt-20 btn-cinematic-gold h-[68px] px-16 group">
               Scale Your Infrastructure <Zap className="ml-5 w-5 h-5 group-hover:scale-125 transition-transform" />
            </button>
          </div>

          {/* RIGHT: High-Fidelity Operations Grid (Span 7) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
             {/* The "Operations Grid" Visual */}
             <div className="relative aspect-[16/10] rounded-[64px] overflow-hidden border border-white/10 shadow-[0_80px_160px_rgba(0,0,0,0.7)] bg-[#0A0D14] group">
                
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 opacity-20 bg-[url('/grid.png')] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-transparent opacity-80" />

                {/* Animated "Nodes" */}
                <div className="absolute inset-0 p-12 overflow-hidden">
                   <div className="grid grid-cols-6 gap-6 opacity-40 group-hover:opacity-60 transition-opacity duration-1000">
                      {Array.from({ length: 36 }).map((_, i) => (
                        <motion.div 
                          key={i}
                          animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.05, 1] }}
                          transition={{ duration: Math.random() * 5 + 3, repeat: Infinity, delay: Math.random() * 2 }}
                          className="aspect-square rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center"
                        >
                           {i % 7 === 0 && <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_10px_#F5B942]" />}
                        </motion.div>
                      ))}
                   </div>
                </div>

                {/* Centered Focus Panel */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                   <motion.div 
                     animate={{ y: [0, -20, 0] }}
                     transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                     className="glass-panel p-10 border-brand-gold/30 shadow-[0_40px_120px_rgba(245,185,66,0.15)] max-w-[480px] w-full"
                   >
                      <div className="flex justify-between items-center mb-8">
                         <div className="flex items-center gap-4">
                            <div className="w-3 h-3 rounded-full bg-brand-gold shadow-[0_0_15px_#F5B942] animate-pulse" />
                            <span className="text-[12px] font-black uppercase tracking-[0.5em] text-white">Live Operations Overview</span>
                         </div>
                         <span className="text-[10px] font-mono text-white/20">NODE_001A_SYNC</span>
                      </div>
                      
                      <div className="space-y-6">
                         {[
                            { label: "Active Cohorts", val: "142", pct: 92 },
                            { label: "Resource Allocation", val: "Institutional", pct: 100 },
                            { label: "Engagement Velocity", val: "Critical", pct: 78 }
                         ].map((item, i) => (
                           <div key={i} className="space-y-3">
                              <div className="flex justify-between text-[11px] font-black uppercase tracking-widest">
                                 <span className="text-white/40">{item.label}</span>
                                 <span className="text-brand-gold">{item.val}</span>
                              </div>
                              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                 <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${item.pct}%` }}
                                    transition={{ duration: 2, delay: i * 0.2 }}
                                    className="h-full bg-brand-gold shadow-[0_0_10px_#F5B942]" 
                                 />
                              </div>
                           </div>
                         ))}
                      </div>

                      <div className="mt-10 pt-8 border-t border-white/10 flex justify-between items-center">
                         <div className="flex -space-x-3">
                            {[1,2,3].map(i => (
                               <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0A0D14] bg-white/5 overflow-hidden">
                                  <Image src={`/exec-avatar-${i}.png`} alt="Member" width={40} height={40} className="opacity-40 grayscale" />
                               </div>
                            ))}
                         </div>
                         <span className="text-[11px] font-black uppercase tracking-[0.3em] text-white/20 italic">Architects Monitoring Sync</span>
                      </div>
                   </motion.div>
                </div>

                {/* Environmental Detail Overlay */}
                <div className="absolute bottom-12 right-12 flex flex-col items-end gap-2 opacity-30">
                   <span className="text-[9px] font-mono text-white tracking-[0.3em] uppercase">Security Protocol: L4_AUTHORIZED</span>
                   <div className="flex gap-2">
                      <div className="w-8 h-1 bg-brand-gold" />
                      <div className="w-4 h-1 bg-white/20" />
                      <div className="w-12 h-1 bg-white/5" />
                   </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
