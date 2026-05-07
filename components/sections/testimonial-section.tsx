"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function TestimonialSection() {
  return (
    <section className="section-padding bg-testimonial-luxury overflow-hidden">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <Quote className="w-12 h-12 text-accent-gold/20 mx-auto mb-12" />
            
            <blockquote className="text-white text-[28px] md:text-[36px] font-bold leading-[1.2] tracking-tight mb-16 max-w-4xl mx-auto">
              "OYEN GRID has fundamentally transformed our global delivery logic. We now operate with <span className="text-gold-gradient italic">absolute structural clarity</span> and institutional governance."
            </blockquote>
            
            <div className="flex flex-col items-center gap-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10 p-0.5 bg-gradient-to-tr from-accent-gold/20 to-transparent">
                <img 
                  src="/testimonial-avatar.png" 
                  alt="Executive" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <div className="text-white font-bold text-[18px] mb-1">Marcus Thorne</div>
                <div className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">Director of Global Operations, Stratos Group</div>
              </div>
            </div>
          </motion.div>

          {/* MINIMAL STATS ROW */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-32 pt-16 border-t border-white/5">
            {[
              { val: "+4.5x", label: "Efficiency" },
              { val: "98.2%", label: "Resilience" },
              { val: "1.2M", label: "Daily Ops" },
              { val: "45+", label: "Regions" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-[32px] font-bold text-white mb-2 tracking-tighter">{stat.val}</div>
                <div className="text-white/20 text-[9px] font-black uppercase tracking-[0.3em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
