"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, Globe, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-32 overflow-hidden bg-hero-cinematic">
      {/* ATMOSPHERIC DEPTH LAYERS */}
      <div className="absolute inset-0 z-0">
        <div className="noise-bg absolute inset-0 opacity-[0.02]" />
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-accent-gold/5 blur-[160px] rounded-full" />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT CONTENT: ELEGANT & SPACIOUS */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-5"
          >
            <div className="flex items-center gap-3 mb-10">
               <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                  <span className="text-accent-gold text-[10px] font-black uppercase tracking-[0.3em]">Institutional Grade</span>
               </div>
            </div>

            <h1 className="text-white mb-10 leading-[1.05] tracking-tight">
              Professional programme <br />
              <span className="text-gold-gradient font-medium italic">infrastructure</span> for scale.
            </h1>
            
            <p className="max-w-[460px] mb-14 text-white/40 text-[18px] leading-[1.8] font-light">
              Orchestrate complex delivery networks with absolute structural integrity. Built for global governance and high-fidelity operational control.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-12">
              <button className="btn-gold px-12 group">
                Start Building <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="text-white/30 hover:text-white font-bold text-[13px] transition-all uppercase tracking-[0.3em]">
                Speak with Architects
              </button>
            </div>

            {/* SUBTLE TRUST INDICATOR */}
            <div className="mt-20 pt-10 border-t border-white/5 flex items-center gap-10 opacity-30">
               <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest">ISO 27001 Certified</span>
               </div>
               <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Global Node Network</span>
               </div>
            </div>
          </motion.div>

          {/* RIGHT: IMMERSIVE CINEMATIC VISUAL */}
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-6 xl:col-span-7 relative"
          >
            <div className="relative group">
              {/* Environmental Ambient Glow */}
              <div className="absolute -inset-40 bg-accent-gold/5 blur-[160px] rounded-full pointer-events-none group-hover:bg-accent-gold/8 transition-colors duration-1000" />
              
              {/* Immersive Photography (No Hard Box) */}
              <div className="relative rounded-[48px] overflow-hidden shadow-[0_80px_160px_rgba(0,0,0,0.9)] bg-[#01030a] aspect-[16/11]">
                <img 
                  src="/hero-immersive.png" 
                  alt="Enterprise Command Center" 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[3s] ease-out"
                />
                
                {/* Advanced Depth Blending */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-transparent opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating KPI Badge: Glassmorphic */}
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-10 p-8 glass-card bg-[#020617]/80 backdrop-blur-3xl shadow-2xl min-w-[220px] z-20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-accent-gold animate-pulse shadow-[0_0_10px_#D4A63A]" />
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">Node Health</span>
                </div>
                <div className="text-[44px] font-medium text-white mb-1 tracking-tighter">98.2%</div>
                <div className="text-[10px] text-accent-gold font-black uppercase tracking-[0.2em]">+1.4% Efficiency</div>
              </motion.div>

              {/* Subtle Reflection Layer */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-20" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
