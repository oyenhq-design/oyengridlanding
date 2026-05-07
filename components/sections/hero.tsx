"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Activity, Globe, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#050816] min-h-screen flex flex-col justify-center pt-20">
      {/* ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="noise-bg absolute inset-0" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <section className="relative z-10 py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Content: Executive Restraint */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="lg:col-span-6"
            >
              <div className="flex flex-wrap gap-4 mb-10">
                {[
                  { text: "Live Monitoring", icon: Activity },
                  { text: "99.9% Uptime", icon: Globe },
                  { text: "Governance Active", icon: Shield }
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10">
                    <badge.icon className="w-3 h-3 text-accent" />
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{badge.text}</span>
                  </div>
                ))}
              </div>

              <h1 className="mb-8 text-white max-w-[520px]">
                Professional programme <br />
                <span className="text-gold-gradient italic">infrastructure for scale.</span>
              </h1>
              
              <p className="max-w-md mb-12 text-white/70 text-[17px] leading-relaxed font-light">
                Coordinate complex cohorts and delivery logic with absolute structural integrity. Built for global governance and executive operational control.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-16">
                <button className="btn-primary h-14 px-12 text-sm">Deploy Infrastructure</button>
                <button className="flex items-center gap-3 text-white/30 hover:text-white font-bold text-[13px] transition-all group uppercase tracking-widest">
                  Speak with Architects <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>

              {/* Tighter Trusted Strip */}
              <div className="flex items-center gap-6 opacity-40">
                <div className="text-[10px] font-black text-white/60 tracking-[0.4em] uppercase">Enterprise Standard</div>
                <div className="h-4 w-px bg-white/10" />
                <div className="flex items-center gap-6">
                   <div className="w-20 h-5 bg-white/10 rounded-sm" />
                   <div className="w-24 h-5 bg-white/10 rounded-sm" />
                </div>
              </div>
            </motion.div>

            {/* Right: Realistic Operations Visual */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative group">
                {/* Visual Glow */}
                <div className="absolute -inset-10 bg-accent/5 blur-[100px] rounded-full pointer-events-none opacity-40" />
                
                {/* Photographic Scene */}
                <div className="relative rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.8)] border border-white/5 bg-[#070B1D]">
                  <img 
                    src="/hero-ops.png" 
                    alt="Enterprise Operations Room" 
                    className="w-full h-auto object-cover opacity-90 group-hover:scale-105 transition-transform duration-[3s]"
                  />
                  
                  {/* Subtle Glass Overlay Card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-6 left-6 p-5 glass-card bg-[#050816]/80 border-white/10 backdrop-blur-xl max-w-[220px]"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                      <span className="text-[10px] font-black text-accent uppercase tracking-widest">Active Cohorts</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-[18px] font-bold text-white mb-0.5">284</div>
                        <div className="text-[9px] text-white/30 uppercase font-black tracking-widest">Ongoing</div>
                      </div>
                      <div>
                        <div className="text-[18px] font-bold text-white mb-0.5">98%</div>
                        <div className="text-[9px] text-white/30 uppercase font-black tracking-widest">Health</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* METRICS TRUST BAR */}
      <section className="relative z-10 py-10 border-t border-white/5 bg-[#050816]/40 backdrop-blur-sm">
        <div className="container-custom">
          <div className="flex flex-wrap justify-between items-center gap-8 md:gap-4 opacity-40">
            {[
              { label: "Infrastructure", val: "Global Scale" },
              { label: "Performance", val: "99.9% Uptime" },
              { label: "Compliance", val: "SOC2 + Audit" },
              { label: "Deployment", val: "Multi-Region" }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">{stat.label}</span>
                <span className="text-[15px] font-bold text-white tracking-tight">{stat.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
