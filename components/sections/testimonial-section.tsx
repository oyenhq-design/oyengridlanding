"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function TestimonialSection() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* LEFT: QUOTE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <Quote className="w-16 h-16 text-accent-gold/20 mb-8" />
            <blockquote className="text-white text-[32px] md:text-[40px] font-bold leading-[1.2] tracking-tight mb-12">
              "OYEN GRID has fundamentally transformed our global delivery logic. We now operate with absolute structural clarity and institutional-grade governance at every level of our programme ecosystem."
            </blockquote>
            
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10">
                <img 
                  src="/testimonial-avatar.png" 
                  alt="Executive" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-white font-bold text-[18px]">Marcus Thorne</div>
                <div className="text-white/30 text-[12px] font-black uppercase tracking-[0.2em]">Director of Global Operations, Stratos Group</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: STATS CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5"
          >
            <div className="glass-card p-12 bg-[#040816]/60 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 blur-[60px] rounded-full" />
              
              <div className="space-y-12 relative z-10">
                <div>
                  <div className="text-[48px] font-bold text-white mb-2 tracking-tighter">
                    +4.5x
                  </div>
                  <div className="text-accent-gold text-[12px] font-black uppercase tracking-[0.3em]">
                    Operational Efficiency
                  </div>
                </div>
                
                <div className="w-full h-px bg-white/5" />
                
                <div>
                  <div className="text-[48px] font-bold text-white mb-2 tracking-tighter">
                    98.2%
                  </div>
                  <div className="text-accent-gold text-[12px] font-black uppercase tracking-[0.3em]">
                    Infrastructure Resilience
                  </div>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
