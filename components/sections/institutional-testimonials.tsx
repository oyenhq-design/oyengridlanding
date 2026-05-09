"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function InstitutionalTestimonials() {
  return (
    <section className="relative py-48 md:py-80 bg-[#040816] overflow-hidden">
      
      {/* BACKGROUND ATMOSPHERE */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(circle,rgba(212,166,58,0.03)_0%,transparent_70%)] blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* LEFT: MASSIVE QUOTE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="lg:col-span-8"
          >
             <div className="label-institutional mb-16">Global Validation</div>
             
             <blockquote className="text-[32px] md:text-[56px] font-bold text-white leading-[1.1] tracking-[-0.04em] mb-16">
                "OYEN GRID hasn't just improved our operations; it has redefined how we think about <span className="text-accent-gold italic font-semibold">global scale.</span>"
             </blockquote>

             <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 grayscale">
                   <Image src="/exec-avatar-1.png" alt="Executive" width={64} height={64} className="object-cover" />
                </div>
                <div>
                   <div className="text-[18px] font-bold text-white">Marcus Thorne</div>
                   <div className="text-[12px] text-white/30 font-light uppercase tracking-widest mt-1">Head of Strategy // Institutional Logics</div>
                </div>
             </div>
          </motion.div>

          {/* RIGHT: FLOATING ANALYTICS CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: 0.3 }}
            className="lg:col-span-4"
          >
             <div className="bg-[#06101F]/60 backdrop-blur-3xl border border-white/10 rounded-[32px] p-10 shadow-[0_60px_120px_rgba(0,0,0,0.6)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-accent-gold/40" />
                
                <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/10 mb-12">Operational Impact Report</div>
                
                <div className="space-y-12">
                   {[
                     { label: "Delivery Speed", val: "+340%", color: "text-accent-gold" },
                     { label: "Operational Overhead", val: "-82%", color: "text-white" },
                     { label: "Sync Error Node", val: "-64%", color: "text-white" }
                   ].map((item, i) => (
                     <div key={i} className="flex flex-col">
                        <span className={`text-[44px] font-bold ${item.color} mb-1`}>{item.val}</span>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-white/20">{item.label}</span>
                     </div>
                   ))}
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 text-[9px] font-black uppercase tracking-widest text-white/10">
                   Verified Institutional Telemetry
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
