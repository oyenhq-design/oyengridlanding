"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function TestimonialSection() {
  return (
    <section className="relative overflow-hidden py-32 md:py-48">
      
      {/* ENVIRONMENTAL BACKGROUND: Executive Boardroom */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/env-boardroom.png" 
          alt="Executive Boardroom Environment" 
          fill
          className="object-cover blur-[60px] scale-110 opacity-[0.15] grayscale"
        />
        <div className="absolute inset-0 bg-navy-deep/90 backdrop-blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-center">
          
          {/* CONTENT SIDE (Left) - Executive Endorsement */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4 mb-10">
               <div className="h-[1px] w-12 bg-accent-gold/40" />
               <span className="text-[11px] font-black text-accent-gold uppercase tracking-[0.4em]">Section 05 // Social Proof</span>
            </div>

            <blockquote className="text-[36px] md:text-[52px] font-medium text-white mb-16 leading-[1.05] tracking-tighter uppercase">
              OYEN GRID hasn’t just improved our operations; it has redefined how we think about <br />
              <span className="text-gold-gradient italic font-medium lowercase">global scale.</span>
            </blockquote>
            
            <div className="flex items-center gap-8">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border border-white/10 p-1 bg-gradient-to-tr from-accent-gold/30 to-transparent shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                <Image 
                  src="/exec-avatar-new.png" 
                  alt="Sarah Jenkins" 
                  fill
                  className="object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div>
                <div className="text-[22px] font-bold text-white mb-1 tracking-tight">Sarah Jenkins</div>
                <div className="text-[12px] font-black text-white/30 uppercase tracking-[0.4em]">Global Programme Director</div>
              </div>
            </div>
          </motion.div>

          {/* LARGE VISUAL SUPPORT (Right) - Performance Metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="p-16 rounded-[48px] glass-card bg-navy-mid/60 border-white/10 shadow-[0_100px_200px_rgba(0,0,0,0.8)] relative overflow-hidden group">
               <div className="absolute inset-0 bg-accent-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
               <div className="relative space-y-16">
                  <div className="group/item">
                    <div className="text-7xl md:text-8xl font-bold text-white mb-6 group-hover/item:text-accent-gold transition-colors tracking-tighter leading-none">+4.5x</div>
                    <div className="text-[12px] font-black text-white/20 uppercase tracking-[0.5em]">Operational Efficiency</div>
                  </div>
                  <div className="h-px w-full bg-white/5" />
                  <div className="group/item">
                    <div className="text-7xl md:text-8xl font-bold text-white mb-6 group-hover/item:text-accent-gold transition-colors tracking-tighter leading-none">98.2%</div>
                    <div className="text-[12px] font-black text-white/20 uppercase tracking-[0.5em]">Systemic Resilience</div>
                  </div>
               </div>
               
               {/* Institutional Seal */}
               <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-white/5 rounded-full flex items-center justify-center opacity-20 rotate-12">
                  <div className="w-32 h-32 border border-white/5 rounded-full flex items-center justify-center">
                     <span className="text-[10px] font-black text-white uppercase tracking-widest">Verified Infrastructure</span>
                  </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="atmos-fade-bottom h-64 opacity-60" />
    </section>
  );
}
