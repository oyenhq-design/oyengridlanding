"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Activity, Users, Zap, Shield, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050812]">
      {/* Background Depth Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full grid-mesh opacity-40" />
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-accent/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[#1a2b5e]/20 blur-[100px] rounded-full" />
      </div>

      <div className="container-custom relative z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-md">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_#F5B301]" />
                <span className="text-[11px] font-black tracking-[0.3em] text-accent uppercase">Operational Infrastructure</span>
              </div>

              <h1 className="text-[48px] md:text-[60px] font-bold text-white leading-[1.05] tracking-tight mb-8">
                Run global programmes <br />
                <span className="text-white/40 italic">at absolute scale.</span>
              </h1>

              <p className="text-[18px] text-white/50 leading-relaxed max-w-xl font-light mb-12">
                Unify your curriculum, cohorts, and analytics into a single high-fidelity operating environment. Engineered for the world&apos;s most complex training operations.
              </p>

              <div className="flex flex-wrap gap-6">
                <button className="btn-primary h-[56px] px-10 text-[15px] font-black uppercase tracking-widest flex items-center gap-3 group">
                  Start Building <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>
                <button className="flex items-center gap-4 text-white/60 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-black transition-all">
                    <Play className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-[14px] font-bold uppercase tracking-widest">Watch Infrastructure Overview</span>
                </button>
              </div>

              {/* Mini Status Indicators */}
              <div className="mt-20 flex items-center gap-12 border-t border-white/5 pt-10">
                 <div>
                    <div className="text-2xl font-bold text-white tracking-tighter">99.9%</div>
                    <div className="text-[10px] font-black text-white/20 uppercase tracking-widest mt-1">Global Uptime</div>
                 </div>
                 <div className="w-px h-8 bg-white/10" />
                 <div>
                    <div className="text-2xl font-bold text-white tracking-tighter">1.2M+</div>
                    <div className="text-[10px] font-black text-white/20 uppercase tracking-widest mt-1">Cohorts Managed</div>
                 </div>
                 <div className="w-px h-8 bg-white/10" />
                 <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                       {[1,2,3].map(i => (
                         <div key={i} className="w-8 h-8 rounded-full border-2 border-[#050812] bg-white/10" />
                       ))}
                    </div>
                    <div className="text-[10px] font-black text-accent uppercase tracking-widest">+12k Active Operators</div>
                 </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Product Screenshot with Atmosphere */}
              <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.6)] group">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-transparent opacity-40" />
                <img 
                  src="/hero-dashboard.png" 
                  alt="OYEN GRID Dashboard" 
                  className="w-full h-auto grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
                />
                
                {/* Live UI Overlay - Metric Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute bottom-8 left-8 glass-card p-6 bg-[#050A19]/90 border-accent/20 backdrop-blur-2xl shadow-2xl"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Activity className="w-4 h-4 text-accent" />
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Live Performance</span>
                  </div>
                  <div className="text-3xl font-bold text-white tracking-tighter mb-1">94.8%</div>
                  <div className="text-[9px] font-bold text-green-500 uppercase tracking-widest flex items-center gap-1">
                     <TrendingUp className="w-3 h-3" /> +2.4% Completion Rate
                  </div>
                </motion.div>

                {/* Live UI Overlay - Active Sessions */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute top-12 right-8 glass-card p-5 bg-[#050A19]/90 border-white/10 backdrop-blur-2xl shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-500 animate-ping" />
                    </div>
                    <span className="text-[11px] font-bold text-white tracking-tight">Active Analytics Sync</span>
                  </div>
                </motion.div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000" />
              </div>

              {/* Background Glows */}
              <div className="absolute -inset-4 bg-accent/5 blur-3xl -z-10 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/[0.02] blur-3xl -z-10" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

function TrendingUp(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
