"use client";

import { motion } from "framer-motion";
import { Globe, Database, Shield, Activity } from "lucide-react";

export function ScaleStructure() {
  return (
    <section className="py-32 bg-[#050816] relative overflow-hidden border-b border-white/5">
      
      {/* 1. CINEMATIC ATMOSPHERE BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,102,255,0.04)_0%,transparent_100%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "64px 64px" }} />
      </div>

      <div className="container-custom max-w-[1240px] px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT SIDE: SCALE NARRATIVE (40%) */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_#f5b82e]" />
                <span className="text-brand-gold/80 tracking-[0.4em] uppercase text-[10px] font-black">
                  Institutional Scale
                </span>
              </div>
              <h2 className="text-[32px] md:text-[46px] font-bold text-white mb-6 leading-[1.05] tracking-tighter">
                Orchestrate at <br />
                <span className="text-brand-gold italic font-serif">global complexity.</span>
              </h2>
              <p className="text-[15px] text-white/40 leading-relaxed font-medium">
                Our infrastructure is built for high-stakes programme coordination, providing the stability and visibility required by global organisations to scale without friction.
              </p>
            </motion.div>

            <div className="space-y-8">
               {[
                 { label: "Global Sync Integrity", val: "99.995%", desc: "Cross-regional protocol synchronization." },
                 { label: "Operational Throughput", val: "1,240+", desc: "Concurrent high-stakes sessions per region." }
               ].map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2 + i * 0.1 }}
                   className="group"
                 >
                    <div className="flex items-baseline gap-4 mb-2">
                       <span className="text-3xl font-bold text-white tracking-tighter group-hover:text-brand-gold transition-colors">{item.val}</span>
                       <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">{item.label}</span>
                    </div>
                    <p className="text-[11px] text-white/20 leading-relaxed max-w-[320px]">{item.desc}</p>
                 </motion.div>
               ))}
            </div>
          </div>

          {/* RIGHT SIDE: GLOBAL NODE NETWORK VISUAL (60%) */}
          <div className="lg:col-span-7 relative">
             <motion.div
               initial={{ opacity: 0, scale: 0.98 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
               className="relative w-full aspect-video rounded-[48px] bg-[#0b1220]/40 backdrop-blur-3xl border border-white/10 overflow-hidden shadow-[0_80px_160px_rgba(0,0,0,0.8)]"
             >
                {/* SVG Global Network */}
                <div className="absolute inset-0 p-12">
                   <svg className="w-full h-full opacity-40" viewBox="0 0 800 450">
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 5, repeat: Infinity }}
                        d="M100 225 Q400 50 700 225 T1300 225" 
                        fill="none" 
                        stroke="#f5b82e" 
                        strokeWidth="0.5" 
                        strokeDasharray="4 4" 
                      />
                      {Array.from({ length: 8 }).map((_, i) => (
                        <circle key={i} cx={100 + i * 80} cy={225 + Math.sin(i) * 50} r="2" fill="#f5b82e" />
                      ))}
                   </svg>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-64 h-64 rounded-full border border-white/5 border-dashed animate-[spin_20s_linear_infinite]" />
                   <div className="absolute w-32 h-32 rounded-full bg-brand-gold/5 backdrop-blur-2xl border border-brand-gold/10 flex items-center justify-center">
                      <Globe className="w-10 h-10 text-brand-gold/40" />
                   </div>
                </div>

                <div className="absolute bottom-10 inset-x-10 flex justify-between items-end">
                   <div className="space-y-2">
                      <div className="text-[8px] font-black text-white/20 uppercase tracking-widest">Active Regional Nodes</div>
                      <div className="flex gap-1">
                         {Array.from({ length: 12 }).map((_, i) => (
                           <div key={i} className="w-4 h-1 rounded-full bg-brand-gold/30" />
                         ))}
                      </div>
                   </div>
                   <div className="px-4 py-2 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md">
                      <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Protocol Sync :: ACTIVE</span>
                   </div>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
