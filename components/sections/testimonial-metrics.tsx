"use client";

import { motion } from "framer-motion";
import { Quote, Star, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

export function TestimonialMetrics() {
  return (
    <div className="bg-[#050812]">
      
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
                  <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.7)]">
                     <img 
                       src="/success-dashboard.png" 
                       alt="Success Dashboard" 
                       className="w-full h-auto opacity-90 grayscale group-hover:grayscale-0 transition-all duration-1000"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                  </div>
                  
                  {/* Floating Metric Highlight */}
                  <div className="absolute -bottom-8 -right-8 glass-card p-8 bg-[#050812]/95 border-accent/20 backdrop-blur-2xl shadow-2xl w-56">
                     <TrendingUp className="w-8 h-8 text-accent mb-4" />
                     <div className="text-4xl font-bold text-white tracking-tighter mb-1">98.2%</div>
                     <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">Retention Rate</div>
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
              <Quote className="w-16 h-16 text-accent/10 mb-10" />
              <p className="text-[28px] md:text-[34px] font-medium text-white leading-tight tracking-tight italic mb-16">
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

      {/* FINAL CTA: Immersive Full-Width Section */}
      <section className="py-60 relative overflow-hidden">
        {/* Full-Width Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/command-wide.png" 
            alt="Enterprise Atmosphere" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050812] via-transparent to-[#050812]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,179,1,0.03),transparent_70%)]" />
        </div>

        <div className="container-custom max-w-[1400px] relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[40px] md:text-[56px] font-bold text-white tracking-tighter leading-[1.05] mb-12">
              Structure your programme <br />
              <span className="text-accent italic">with absolute confidence.</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-10 mb-20">
              <button className="btn-primary h-[60px] px-14 text-[18px] group flex items-center gap-4">
                Start Building Today <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
              </button>
              <button className="h-[60px] px-14 text-[18px] text-white/60 hover:text-white font-bold transition-all">
                Talk to Strategic Sales
              </button>
            </div>

            <div className="pt-20 border-t border-white/5 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 opacity-40">
               {[
                 "Global Deployment Ready",
                 "SOC2 TYPE II COMPLIANT",
                 "ISO 27001 CERTIFIED"
               ].map((text, i) => (
                 <div key={i} className="flex items-center justify-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">{text}</span>
                 </div>
               ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
