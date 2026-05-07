"use client";

import { motion } from "framer-motion";
import { Quote, Star, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

export function TestimonialMetrics() {
  return (
    <div className="bg-[#050816]">
      
      {/* TESTIMONIAL PANEL: Human-Centered Editorial */}
      <section className="py-40 relative overflow-hidden">
        <div className="container-custom max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            
            {/* Left: Performance Visual Panel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6"
            >
               <div className="relative group">
                  <div className="absolute -inset-10 bg-accent/5 blur-[100px] rounded-full pointer-events-none opacity-40" />
                  <div className="relative rounded-[48px] overflow-hidden border-none shadow-[0_60px_100px_rgba(0,0,0,0.8)]">
                     <img 
                       src="/success-dashboard.png" 
                       alt="Success Dashboard" 
                       className="w-full h-auto opacity-80 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-[#050816]/20 to-transparent pointer-events-none" />
                  </div>
                  
                  {/* Floating Metric Highlight */}
                  <div className="absolute -bottom-8 -right-8 glass-card p-10 bg-[#050816]/95 border-none backdrop-blur-3xl shadow-[0_50px_80px_rgba(0,0,0,0.8)] w-64">
                     <TrendingUp className="w-8 h-8 text-accent mb-5 shadow-[0_0_15px_rgba(212,166,42,0.3)]" />
                     <div className="text-5xl font-bold text-white tracking-tighter mb-1">98.2%</div>
                     <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mt-2">Retention Rate</div>
                  </div>
               </div>
            </motion.div>

            {/* Right: Large Editorial Quote */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6"
            >
              <Quote className="w-20 h-20 text-accent/10 mb-12" />
              <p className="text-[28px] md:text-[38px] font-medium text-white leading-[1.05] tracking-tight italic mb-16">
                &quot;OYEN GRID hasn&apos;t just improved our operations; it has redefined how we think about scale. We now operate with a level of precision that was previously impossible.&quot;
              </p>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent/20 bg-gray-800">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" alt="David Chen" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white tracking-tight">David Chen</div>
                  <div className="text-accent text-[11px] font-black uppercase tracking-[0.2em] mt-1">Director of Operations, TechFlow</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
