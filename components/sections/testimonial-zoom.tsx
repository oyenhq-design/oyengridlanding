"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function TestimonialZoom() {
  return (
    <section className="relative py-48 md:py-80 bg-[#040816] overflow-hidden">
      
      {/* ATMOSPHERIC BLOOM */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] gold-glow opacity-30 blur-[120px]" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* LEFT: MASSIVE QUOTE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6 }}
            className="lg:col-span-8"
          >
             <div className="flex items-center gap-6 mb-16">
                <div className="h-px w-10 bg-brand-gold/40" />
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white/30">Executive Validation</span>
             </div>
             
             <blockquote className="text-[36px] md:text-[68px] font-bold text-white leading-[1.05] tracking-[-0.06em] mb-20 text-balance">
                "OYEN GRID hasn't just improved our operations; it has redefined how we think about <span className="text-gold-gradient italic">global scale.</span>"
             </blockquote>

             <div className="flex items-center gap-8">
                <div className="w-20 h-20 rounded-3xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000 group cursor-pointer shadow-2xl">
                   <Image src="/exec-avatar-1.png" alt="Executive" width={80} height={80} className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div>
                   <div className="text-[20px] font-bold text-white tracking-tight">Marcus Thorne</div>
                   <div className="text-[12px] text-white/20 font-black uppercase tracking-[0.3em] mt-2">Director of Institutional Logics</div>
                </div>
             </div>
          </motion.div>

          {/* RIGHT: MINIMAL METRICS CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay: 0.3 }}
            className="lg:col-span-4"
          >
             <div className="bg-[#080C1A]/80 backdrop-blur-3xl border border-white/5 rounded-[40px] p-12 shadow-[0_80px_160px_rgba(0,0,0,0.7)] relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-gold/40 group-hover:h-2 transition-all duration-500" />
                
                <div className="text-[10px] font-black uppercase tracking-[0.45em] text-white/10 mb-16">Operational Impact Analysis</div>
                
                <div className="space-y-16">
                   {[
                     { label: "Operational efficiency", val: "+340%", color: "text-gold-gradient" },
                     { label: "Coordination overhead", val: "-82%", color: "text-white/40" }
                   ].map((item, i) => (
                     <div key={i} className="flex flex-col">
                        <span className={`text-[56px] font-bold ${item.color} mb-2 tracking-tighter`}>{item.val}</span>
                        <span className="text-[11px] font-black uppercase tracking-[0.25em] text-white/10">{item.label}</span>
                     </div>
                   ))}
                </div>

                <div className="mt-20 pt-10 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-white/5 group-hover:text-white/20 transition-colors">
                   Institutional Node Metrics // Verified
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
