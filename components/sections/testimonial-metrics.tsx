"use client";

import { motion } from "framer-motion";
import { Quote, Star, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

export function TestimonialMetrics() {
  return (
    <div className="bg-[#050816]">
      
      {/* TESTIMONIAL PANEL: Human-Centered Editorial */}
    <section className="py-32 relative bg-[#050816] overflow-hidden">
      <div className="container-custom max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* LEFT: QUOTE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <Quote className="w-16 h-16 text-accent/10 mb-8" />
            <p className="text-[26px] md:text-[34px] font-medium text-white leading-[1.1] tracking-tight italic mb-12">
              &quot;OYEN GRID hasn&apos;t just improved our operations; it has redefined how we think about scale. We now operate with a level of precision that was previously impossible.&quot;
            </p>
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-accent/20">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" alt="David Chen" className="w-full h-full object-cover grayscale" />
              </div>
              <div>
                <div className="text-lg font-bold text-white tracking-tight">David Chen</div>
                <div className="text-accent text-[9px] font-black uppercase tracking-[0.3em] mt-1 opacity-80">Director of Operations, TechFlow</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: STATS CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
             <div className="relative glass-card p-10 bg-[#050816]/40 border-none rounded-[40px] shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
                <div className="flex items-center gap-4 mb-10">
                   <TrendingUp className="w-6 h-6 text-accent" />
                   <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Operational ROI</div>
                </div>
                
                <div className="space-y-8">
                   {[
                     { label: "Delivery Efficiency", val: "+4.5x", desc: "Automated programme orchestration." },
                     { label: "Retention Rate", val: "98.2%", desc: "High-fidelity participant tracking." }
                   ].map((stat, i) => (
                     <div key={i} className="group">
                        <div className="flex items-end gap-3 mb-2">
                           <div className="text-4xl font-bold text-white tracking-tighter">{stat.val}</div>
                           <div className="text-accent text-[9px] font-black uppercase tracking-widest pb-1 opacity-0 group-hover:opacity-100 transition-opacity">VERIFIED</div>
                        </div>
                        <div className="text-[13px] font-bold text-white/60 tracking-tight mb-1">{stat.label}</div>
                        <p className="text-[11px] text-white/20">{stat.desc}</p>
                     </div>
                   ))}
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
    </div>
  );
}
