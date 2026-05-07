"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, Activity, MousePointer2, Star, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#050812]">
      
      {/* CINEMATIC BACKGROUND: Integrated Human Element */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/manager-ops.png" 
          alt="Programme Manager in Ops Room" 
          className="w-full h-full object-cover opacity-60 scale-105 blur-[2px] grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/90 to-[#050816]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-40 pb-20 min-h-[85vh] flex items-center">
        <div className="container-custom max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content: Tighter Typography */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative"
            >
              <div className="glow-ambient w-[400px] h-[400px] top-[-200px] left-[-150px]" />
              
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#D4A62A]" />
                 <span className="text-accent text-[10px] font-black tracking-[0.4em] uppercase opacity-80">SYSTEM ARCHITECTURE</span>
              </div>
              <h1 className="mb-6 text-white text-[44px] md:text-[68px] leading-[0.95]">
                Professional programme <br />
                <span className="text-gold-gradient italic">infrastructure for scale.</span>
              </h1>
              <p className="max-w-md mb-10 font-light tracking-tight opacity-60 text-[17px] leading-relaxed">
                Coordinate complex cohorts and delivery logic with absolute structural clarity. Built for global governance and high-performance teams.
              </p>
              <div className="flex items-center gap-8">
                <button className="btn-primary h-12 px-10 text-xs">Start Building</button>
                <button className="flex items-center gap-2 text-white/40 hover:text-white font-bold text-[14px] transition-all group">
                   Speak with Architects <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>

              {/* Tighter Trusted Strip */}
              <div className="flex items-center gap-6 pt-10 mt-12 border-t border-white/5 opacity-30">
                <div className="text-[9px] font-black text-white tracking-[0.3em] uppercase">Trusted by Global Leaders</div>
                <div className="h-3 w-px bg-white/10" />
                <div className="flex items-center gap-1.5">
                   <Star className="w-2.5 h-2.5 text-accent fill-accent" />
                   <span className="text-[10px] font-bold text-white tracking-widest">ENTERPRISE GRADE</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Refined Immersive UI Preview */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative group">
                <div className="absolute -inset-10 bg-accent/5 blur-[120px] rounded-full pointer-events-none opacity-40" />
                
                <div className="relative rounded-[40px] overflow-hidden shadow-[0_60px_100px_rgba(0,0,0,0.9)] transform perspective-2000 group-hover:rotate-y-[-1deg] transition-transform duration-1000">
                  <img 
                    src="/wide-dashboard.png" 
                    alt="System Dashboard" 
                    className="w-full aspect-[1.5/1] object-cover opacity-90 grayscale-[0.2]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#050816]/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 glass-card p-6 bg-[#050816]/90 border-none backdrop-blur-3xl shadow-2xl w-52"
                >
                  <div className="text-[9px] font-black text-accent uppercase tracking-[0.2em] mb-4 opacity-60">System Velocity</div>
                  <div className="text-3xl font-bold text-white tracking-tighter">98.2%</div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* RESTRAINED METRICS BAND (TRUST BAR) */}
      <section className="relative z-10 py-8 border-y border-white/5 bg-[#050816]/20">
        <div className="container-custom max-w-[1400px]">
          <div className="flex flex-wrap justify-between items-center opacity-30">
            {[
              { label: "Execution", val: "2,400+ Nodes" },
              { label: "Uptime", val: "99.99% Core" },
              { label: "Security", val: "ISO 27001" },
              { label: "Regions", val: "Global Availability" }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/50">{stat.label}</span>
                <span className="text-[15px] font-bold text-white tracking-tight">{stat.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
