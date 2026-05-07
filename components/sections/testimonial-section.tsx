"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function TestimonialSection() {
  return (
    <section className="section-padding bg-testimonial-luxury overflow-hidden border-t border-white/5">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-center"
          >
            <Quote className="w-16 h-16 text-accent-gold/10 mx-auto mb-16" />
            
            <blockquote className="text-white text-[28px] md:text-[38px] font-medium leading-[1.3] tracking-tight mb-20 max-w-4xl mx-auto">
              "OYEN GRID has fundamentally transformed our global delivery logic. We now operate with <span className="text-gold-gradient font-medium italic">absolute structural clarity</span> and institutional governance at a scale we previously thought impossible."
            </blockquote>
            
            <div className="flex flex-col items-center gap-10">
              <div className="w-24 h-24 rounded-full overflow-hidden border border-white/10 p-1 bg-gradient-to-tr from-accent-gold/30 to-transparent">
                <img 
                  src="/exec-portrait.png" 
                  alt="Executive" 
                  className="w-full h-full object-cover rounded-full grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="space-y-3">
                <div className="text-white font-semibold text-[22px] tracking-tight">Marcus Thorne</div>
                <div className="text-white/20 text-[11px] font-black uppercase tracking-[0.4em]">Director of Global Operations, Stratos Group</div>
              </div>
            </div>
          </motion.div>

          {/* MINIMAL INSTITUTIONAL STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 mt-40 pt-20 border-t border-white/5">
            {[
              { val: "+4.5x", label: "Efficiency" },
              { val: "98.2%", label: "Resilience" },
              { val: "1.2M", label: "Daily Ops" },
              { val: "45+", label: "Regions" }
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="text-[36px] font-medium text-white tracking-tighter">{stat.val}</div>
                <div className="text-white/10 text-[10px] font-black uppercase tracking-[0.4em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
