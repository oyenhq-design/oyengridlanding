"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function TestimonialSection() {
  return (
    <section className="relative overflow-hidden section-transition">
      
      {/* Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-gold/5 blur-[120px] opacity-20" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7"
          >
            <div className="text-[120px] font-serif text-accent-gold/5 leading-none mb-[-40px] select-none">“</div>
            <blockquote className="text-[32px] md:text-[42px] font-medium text-white mb-14 leading-[1.15] tracking-tight">
              OYEN GRID hasn’t just improved our operations; it has redefined how we think about <span className="text-gold-gradient italic">scale.</span>
            </blockquote>
            
            <div className="flex items-center gap-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border border-white/10 p-0.5 bg-gradient-to-tr from-accent-gold/20 to-transparent">
                <Image 
                  src="/exec-avatar.png" 
                  alt="Sarah Jenkins" 
                  width={64}
                  height={64}
                  className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div>
                <div className="text-[18px] font-bold text-white mb-1">Sarah Jenkins</div>
                <div className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em]">Global Programme Director</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - FLOATING CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="p-12 glass-card bg-navy-mid/40 border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)] relative overflow-hidden group">
               <div className="absolute inset-0 bg-accent-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="relative space-y-12">
                  <div className="group/item">
                    <div className="text-5xl md:text-6xl font-bold text-white mb-4 group-hover/item:text-accent-gold transition-colors tracking-tighter">+4.5x</div>
                    <div className="text-[11px] font-black text-white/20 uppercase tracking-[0.4em]">Operational Efficiency</div>
                  </div>
                  <div className="h-px w-full bg-white/5" />
                  <div className="group/item">
                    <div className="text-5xl md:text-6xl font-bold text-white mb-4 group-hover/item:text-accent-gold transition-colors tracking-tighter">98.2%</div>
                    <div className="text-[11px] font-black text-white/20 uppercase tracking-[0.4em]">Infrastructure Resilience</div>
                  </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="atmos-fade-bottom h-48" />
    </section>
  );
}
