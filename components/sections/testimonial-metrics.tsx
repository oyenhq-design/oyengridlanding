"use client";

import { motion } from "framer-motion";
import { Quote, ArrowUpRight, CheckCircle2 } from "lucide-react";

export function TestimonialMetrics() {
  const metrics = [
    { label: "Cohort Growth", val: "2x", desc: "Institutional scaling capability." },
    { label: "Operational Efficiency", val: "40%", desc: "Reduced administrative overhead." },
    { label: "Completion Accuracy", val: "98%", desc: "High-fidelity outcome tracking." }
  ];

  return (
    <section className="section-padding relative bg-[#050816] overflow-hidden">
      <div className="noise-bg absolute inset-0" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: EDITORIAL QUOTE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-10">
               <div className="w-1.5 h-1.5 rounded-full bg-accent" />
               <span className="text-accent text-[10px] font-black tracking-[0.4em] uppercase opacity-60">EXECUTIVE TESTIMONIAL</span>
            </div>
            
            <p className="text-[24px] md:text-[32px] font-medium text-white leading-tight tracking-tight italic mb-12 max-w-2xl">
              &quot;OYEN GRID has redefined how we think about scale. We now operate global programmes with a level of precision that was previously unattainable.&quot;
            </p>
            
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="/executive-portrait.png" 
                  alt="Director of Operations" 
                  className="w-full h-full object-cover grayscale-[0.2]" 
                />
              </div>
              <div>
                <div className="text-lg font-bold text-white tracking-tight">Marcus Sterling</div>
                <div className="text-accent text-[10px] font-black uppercase tracking-[0.3em] mt-1 opacity-60">Director of Operations, Sterling Group</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: METRICS STACK */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5"
          >
             <div className="relative glass-card p-12 bg-[#070B1D]/40 border-white/5 shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
                <div className="flex items-center gap-4 mb-12">
                   <ArrowUpRight className="w-5 h-5 text-accent" />
                   <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Verified Institutional ROI</span>
                </div>
                
                <div className="space-y-10">
                   {metrics.map((stat, i) => (
                     <div key={i} className="group">
                        <div className="flex items-baseline gap-3 mb-2">
                           <div className="text-4xl font-bold text-white tracking-tighter group-hover:text-gold-gradient transition-all duration-500">{stat.val}</div>
                           <CheckCircle2 className="w-3.5 h-3.5 text-accent/20 group-hover:text-accent transition-colors" />
                        </div>
                        <div className="text-[14px] font-bold text-white/60 tracking-tight mb-1">{stat.label}</div>
                        <p className="text-[12px] text-white/20 font-light leading-relaxed">{stat.desc}</p>
                     </div>
                   ))}
                </div>
                
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[60px] rounded-full pointer-events-none" />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
