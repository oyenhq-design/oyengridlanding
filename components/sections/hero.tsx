"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Activity, Globe } from "lucide-react";

export function Hero() {
  return (
    <section className="relative z-10 pt-[160px] pb-32 overflow-hidden bg-hero-cinematic">
      {/* ATMOSPHERIC DEPTH */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="noise-bg absolute inset-0" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* LEFT CONTENT: RESTRAINED & EDITORIAL */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-2 mb-8">
               <div className="w-1.5 h-1.5 rounded-full bg-accent-gold shadow-[0_0_8px_#D4A63A]" />
               <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">Infrastructure Layer v4.0</span>
            </div>

            <h1 className="text-white mb-8 max-w-[500px]">
              Professional programme <br />
              <span className="text-gold-gradient">infrastructure</span> for scale.
            </h1>
            
            <p className="max-w-[420px] mb-12 text-white/50 text-[18px] leading-relaxed">
              Orchestrate complex delivery networks with absolute structural integrity. Built for global governance and operational control.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <button className="btn-gold w-full sm:w-auto px-10">Start Building</button>
              <button className="flex items-center gap-3 text-white/40 hover:text-white font-bold text-[13px] transition-all group uppercase tracking-widest">
                Speak with Architects <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* RIGHT: CINEMATIC VISUAL (OVERFLOWING) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-7 relative lg:-mr-32 xl:-mr-48"
          >
            <div className="relative">
              {/* Environmental Glow */}
              <div className="absolute -inset-20 bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />
              
              {/* Immersive Image */}
              <div className="relative rounded-l-[40px] rounded-r-none overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.9)] border-l border-y border-white/10 bg-[#070B1D] aspect-[16/10]">
                <img 
                  src="/hero-cinematic.png" 
                  alt="Enterprise Command Center" 
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
                />
                
                {/* Glass Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Metric Card 1 */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-12 -left-12 p-6 glass-card bg-navy-deep/80 border-white/10 backdrop-blur-3xl shadow-2xl min-w-[200px] z-20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-accent-gold" />
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Live Resilience</span>
                  </div>
                </div>
                <div className="text-[32px] font-bold text-white mb-1">98.2%</div>
                <div className="text-[9px] text-accent-gold font-black uppercase tracking-widest">+1.4% Improvement</div>
              </motion.div>

              {/* Floating Metric Card 2 */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 right-24 p-5 glass-card bg-navy-midnight/90 border-white/10 backdrop-blur-2xl shadow-2xl min-w-[160px] z-20"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-3 h-3 text-blue-400" />
                  <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">Global Nodes</span>
                </div>
                <div className="text-[24px] font-bold text-white">4,284</div>
                <div className="mt-2 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-blue-400/40" />
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
