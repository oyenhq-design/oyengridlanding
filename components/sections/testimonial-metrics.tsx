"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function TestimonialMetrics() {
  const stats = [
    { label: "Operational Speed", val: "+240%" },
    { label: "Governance Efficiency", val: "+85%" },
    { label: "Administrative Overhead", val: "-42%" }
  ];

  return (
    <section className="relative py-48 md:py-80 bg-[#050505] overflow-hidden">
      
      {/* CINEMATIC ACCENT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] cinematic-glow opacity-30" />

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6 }}
            className="text-center mb-40"
          >
             <div className="label-enterprise mb-16">Global Validation</div>
             
             <blockquote className="text-[36px] md:text-[64px] font-bold text-white leading-[1.1] tracking-[-0.04em] mb-16 text-balance">
                "OYEN GRID hasn't just improved our operations; it has redefined how we think about <span className="text-brand-gold italic font-semibold">global scale.</span>"
             </blockquote>

             <div className="flex flex-col items-center gap-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 grayscale">
                   <Image src="/exec-avatar-1.png" alt="Executive Protocol Officer" width={64} height={64} className="object-cover" />
                </div>
                <div>
                   <div className="text-[18px] font-bold text-white">Marcus Thorne</div>
                   <div className="text-[11px] text-white/30 font-black uppercase tracking-[0.4em] mt-2">Director of Strategic Infrastructure</div>
                </div>
             </div>
          </motion.div>

          {/* PERFORMANCE METRICS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-32 border-t border-white/5">
             {stats.map((stat, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1, delay: i * 0.1 }}
                 className="text-center"
               >
                  <div className="text-[52px] font-bold text-white mb-3 tracking-tighter">{stat.val}</div>
                  <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/20">{stat.label}</div>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
