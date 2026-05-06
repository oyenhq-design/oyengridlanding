"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, Activity, MousePointer2, Star } from "lucide-react";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-background">
      
      {/* BACKGROUND: Cinematic Layering */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.png" 
          alt="Office background" 
          className="w-full h-full object-cover opacity-30 grayscale blur-[10px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        {/* Floating Particles (Subtle) */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-48 pb-32 min-h-screen flex items-center">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-[1.05] mb-8 tracking-tighter">
                Run structured programmes with full <span className="text-accent relative inline-block">
                  operational control.
                  <span className="absolute bottom-2 left-0 w-full h-1 bg-accent/30 blur-sm" />
                </span>
              </h1>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-lg mb-12 font-light">
                The high-fidelity infrastructure for professional training and operations at global scale. Built for clarity, control, and absolute governance.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <button className="btn-primary px-10 py-5 text-[17px] shadow-[0_0_20px_rgba(245,179,1,0.2)]">Start Building</button>
                <button className="btn-outline px-10 py-5 text-[17px]">Talk to Sales</button>
              </div>

              {/* Metrics Chip */}
              <div className="flex items-center gap-6 pt-12 border-t border-white/5">
                <div className="flex items-center gap-2">
                   <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-gray-800" />
                      ))}
                   </div>
                   <div className="text-xs font-bold text-white tracking-wide uppercase ml-2">Trusted by 500+ leaders</div>
                </div>
                <div className="h-4 w-px bg-white/10" />
                <div className="flex items-center gap-1.5">
                   <Star className="w-4 h-4 text-accent fill-accent" />
                   <span className="text-sm font-bold text-white">4.9/5 Rating</span>
                </div>
              </div>
            </motion.div>

            {/* Right Dashboard Mockup with Depth & Atmosphere */}
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.95, rotateY: -10 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="lg:col-span-6 relative perspective-1000"
            >
              <div className="relative group">
                {/* Golden Glow behind dashboard */}
                <div className="absolute -inset-20 bg-accent/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-accent/20 transition-all duration-700" />
                
                {/* Main Dashboard UI with Tilt */}
                <div className="relative glass-card border-white/10 rounded-2xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] transform transition-transform duration-700 hover:scale-[1.02] hover:-rotate-y-2">
                  <img 
                    src="/hero-bg.png" 
                    alt="Dashboard Mockup" 
                    className="w-full aspect-[1.3/1] object-cover opacity-90 transition-transform duration-1000 group-hover:scale-[1.02]"
                  />
                  {/* Glass Reflections Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/40 pointer-events-none" />
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer pointer-events-none" />
                </div>

                {/* Secondary Floating Mini Cards */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -top-12 -right-8 glass-card p-6 bg-secondary/80 border-white/20 shadow-2xl backdrop-blur-xl w-56"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Activity className="w-4 h-4 text-accent" />
                    </div>
                    <div className="text-[10px] font-bold text-accent uppercase tracking-widest">Live Sync</div>
                  </div>
                  <div className="text-2xl font-black text-white mb-1">94.2%</div>
                  <div className="text-[10px] text-text-secondary font-bold uppercase tracking-widest">System Efficiency</div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-8 -left-12 glass-card p-6 bg-black/60 border-white/10 shadow-2xl backdrop-blur-xl w-64"
                >
                   <div className="flex items-center gap-3 mb-4">
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      <div className="text-[10px] font-bold text-white uppercase tracking-widest">Active Cohorts</div>
                   </div>
                   <div className="flex items-center gap-2">
                      <div className="h-1.5 flex-1 bg-white/5 rounded-full overflow-hidden">
                         <div className="h-full bg-accent w-[78%]" />
                      </div>
                      <span className="text-xs font-bold text-white">78%</span>
                   </div>
                </motion.div>

                {/* Mouse Cursor Mockup */}
                <motion.div 
                  animate={{ x: [0, 20, 0], y: [0, -30, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/3 z-20 pointer-events-none"
                >
                   <MousePointer2 className="w-6 h-6 text-white drop-shadow-lg" />
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* TRUST / METRICS STRIP */}
      <section className="relative z-10 py-16 border-y border-white/5 bg-secondary/30 backdrop-blur-md">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-32 opacity-60">
            {[
              { label: "Enterprise Scale", val: "2k+ Programs" },
              { label: "Global Uptime", val: "99.99%" },
              { label: "Security", val: "SOC2 Type II" },
              { label: "Regions", val: "45+ Countries" }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-default">
                <div className="h-8 w-px bg-white/10 group-hover:bg-accent/40 transition-colors" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white mb-0.5 tracking-tighter">{stat.val}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-text-secondary font-bold">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
