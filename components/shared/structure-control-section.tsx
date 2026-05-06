"use client";

import { ShieldCheck, Network, Eye, Layers } from "lucide-react";
import { motion } from "framer-motion";

export function StructureControlSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-transparent border-t border-white/[0.06]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#D4AF37] opacity-[0.04] blur-[120px] rounded-full pointer-events-none -translate-x-1/2" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 text-[#D4AF37] text-[13px] font-bold tracking-[0.2em] uppercase mb-8">
              <Layers className="w-4 h-4" />
              Hierarchical Control
            </div>
            <h2 className="text-[42px] md:text-[56px] font-bold text-white mb-8 tracking-tight leading-[1.1]">
              Maintain structure at <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACC15] via-white to-[#EAB308]">every level.</span>
            </h2>
            <p className="text-[19px] md:text-[21px] text-[#A1A1AA] mb-12 leading-relaxed font-light max-w-xl">
              Unlike generic tools, OYEN GRID is built specifically for the complexities of structured learning. We give you the guardrails to ensure consistency, security, and quality across every cohort.
            </p>
            
            <div className="space-y-10">
              {[
                { title: "Centralised Control", desc: "Set permissions, manage roles, and lock down sensitive materials. Ensure instructors and participants only see what they are supposed to see.", icon: ShieldCheck },
                { title: "Organised Delivery", desc: "Prevent scheduling conflicts and link chaos. OYEN Grid enforces a strict, reliable framework for all live sessions and asynchronous content.", icon: Network },
                { title: "Clear Oversight", desc: "Get a bird's-eye view of your entire operation. Instantly identify at-risk participants, dropping attendance rates, or missing assignments.", icon: Eye }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mt-1 group-hover:border-[#D4AF37]/40 group-hover:bg-[#D4AF37]/5 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-[20px] font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
                    <p className="text-[16px] text-[#A1A1AA] leading-relaxed font-light group-hover:text-white/80 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-full min-h-[450px] flex items-center justify-center lg:justify-end"
          >
            {/* Visual representation of structure - Enhanced */}
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-[#D4AF37] opacity-[0.08] blur-[100px] rounded-full animate-pulse" />
              
              {/* Central Hub */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-2xl flex items-center justify-center z-20 shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
              >
                <div className="w-28 h-28 rounded-full border border-[#D4AF37]/20 flex items-center justify-center bg-[#050505] shadow-[inset_0_0_20px_rgba(212,175,55,0.1)]">
                  <ShieldCheck className="w-10 h-10 text-[#D4AF37]" strokeWidth={1.5} />
                </div>
              </motion.div>
              
              {/* Outer Nodes - Floating */}
              {[
                { pos: "top-[5%] left-1/2 -translate-x-1/2", icon: Network, delay: 0 },
                { pos: "bottom-[15%] left-[5%]", icon: Eye, delay: 1 },
                { pos: "bottom-[15%] right-[5%]", icon: ShieldCheck, delay: 2 }
              ].map((node, i) => (
                <motion.div 
                  key={i}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: node.delay }}
                  className={`absolute ${node.pos} w-20 h-20 rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl flex items-center justify-center z-10 shadow-2xl`}
                >
                  <node.icon className="w-7 h-7 text-white/40" strokeWidth={1.5} />
                </motion.div>
              ))}
              
              {/* Connecting Lines (SVG) - Animated */}
              <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 400 400" fill="none">
                <motion.path 
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.2 }}
                  viewport={{ once: true }}
                  d="M200 200 L200 60" 
                  stroke="#D4AF37" strokeWidth="2" strokeDasharray="4 4" 
                />
                <motion.path 
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.2 }}
                  viewport={{ once: true }}
                  d="M200 200 L80 320" 
                  stroke="#D4AF37" strokeWidth="2" strokeDasharray="4 4" 
                />
                <motion.path 
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.2 }}
                  viewport={{ once: true }}
                  d="M200 200 L320 320" 
                  stroke="#D4AF37" strokeWidth="2" strokeDasharray="4 4" 
                />
                
                {/* Orbit Rings */}
                <circle cx="200" cy="200" r="140" stroke="white" strokeWidth="1" className="opacity-[0.03]" />
                <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="1" strokeDasharray="2 8" className="opacity-[0.05]" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section Transition Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
}
