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
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050812] via-[#050812]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050812] via-transparent to-transparent" />
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-48 pb-32 min-h-[90vh] flex items-center">
        <div className="container-custom max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content: Tighter Typography */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <div className="flex items-center gap-3 mb-8">
                 <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#F5B301]" />
                 <span className="text-accent text-[11px] font-black tracking-[0.4em] uppercase">SYSTEM ARCHITECTURE</span>
              </div>
              <h1 className="text-[44px] md:text-[68px] font-bold leading-[1.02] mb-8 tracking-[-0.03em] text-white">
                Run structured programmes with <br />
                <span className="text-accent italic">full operational control.</span>
              </h1>
              <p className="text-[17px] md:text-[19px] text-white/60 leading-relaxed max-w-lg mb-12 font-light tracking-tight">
                The high-fidelity infrastructure for professional training and operations at global scale. Built for absolute governance and structural clarity.
              </p>
              <div className="flex flex-wrap items-center gap-6 mb-16">
                <button className="btn-primary h-[54px] px-10 text-[16px]">Start Building</button>
                <button className="flex items-center gap-2 text-white/80 hover:text-white font-bold text-[16px] transition-all group">
                   Talk to Strategic Sales <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>

              {/* Tighter Trusted Strip */}
              <div className="flex items-center gap-8 pt-12 border-t border-white/5 opacity-50">
                <div className="flex items-center gap-2">
                   <div className="text-[10px] font-black text-white tracking-[0.2em] uppercase">Trusted by Enterprise Leaders</div>
                </div>
                <div className="h-4 w-px bg-white/10" />
                <div className="flex items-center gap-1.5">
                   <Star className="w-3 h-3 text-accent fill-accent" />
                   <span className="text-xs font-bold text-white tracking-wider">4.9/5 RATING</span>
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
                {/* Restricted Glow */}
                <div className="absolute -inset-10 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
                
                {/* Dashboard with Perspective */}
                <div className="relative glass-card border-white/10 rounded-2xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.6)] transform perspective-1000 group-hover:rotate-y-[-2deg] transition-transform duration-1000">
                  <img 
                    src="/wide-dashboard.png" 
                    alt="System Dashboard" 
                    className="w-full aspect-[1.4/1] object-cover opacity-95"
                  />
                  {/* Subtle Layered Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-black/20 pointer-events-none" />
                </div>

                {/* Compact Floating Data Chips */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 glass-card p-5 bg-[#050814]/90 border-accent/20 backdrop-blur-2xl shadow-2xl w-48"
                >
                  <div className="text-[10px] font-black text-accent uppercase tracking-widest mb-3">Live Performance</div>
                  <div className="text-2xl font-bold text-white tracking-tighter">94.2%</div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* RESTRAINED METRICS BAND */}
      <section className="relative z-10 py-12 border-y border-white/5 bg-[#050814]/40 backdrop-blur-md">
        <div className="container-custom max-w-[1400px]">
          <div className="flex flex-wrap justify-between items-center opacity-40">
            {[
              { label: "Scale", val: "2k+ Programmes" },
              { label: "Uptime", val: "99.99% Global" },
              { label: "Security", val: "SOC2 TYPE II" },
              { label: "Presence", val: "45+ Countries" }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">{stat.label}</span>
                <span className="text-lg font-bold text-white tracking-tighter">{stat.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
