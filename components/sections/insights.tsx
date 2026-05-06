"use client";

import { motion } from "framer-motion";
import { Activity, BarChart3, TrendingUp, Zap, Target, MousePointer2 } from "lucide-react";

export function Insights() {
  return (
    <section className="py-40 bg-[#0B0B0D] relative overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(245,179,1,0.08),transparent_50%)]" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-8">
               <Zap className="w-5 h-5 text-accent fill-accent" />
               <span className="text-accent text-[11px] font-black tracking-[0.3em] uppercase">INTELLIGENCE ENGINE</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white leading-none mb-10 tracking-tighter">
              Operational <br />
              <span className="text-accent italic">insights.</span>
            </h2>
            <p className="text-lg text-text-secondary font-light leading-relaxed mb-12 max-w-sm">
              Transform raw cohort data into a strategic advantage. OYEN GRID provides deep visibility into every participant touchpoint.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: "Completion Index", val: "94.8%", color: "text-accent" },
                { label: "Operational ROI", val: "40.2%", color: "text-green-400" }
              ].map((stat, i) => (
                <div key={i} className="glass-card p-8 bg-secondary/10 border-white/5 hover:border-accent/30 transition-all">
                  <div className={`text-3xl font-black mb-2 tracking-tighter ${stat.color}`}>{stat.val}</div>
                  <div className="text-[10px] font-black text-text-secondary uppercase tracking-[0.2em]">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Analytics Card with Floating Overlays */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative"
          >
            {/* Main Chart Card */}
            <div className="glass-card p-12 lg:p-16 border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.9)] bg-tertiary relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,179,1,0.1),transparent_70%)]" />
              
              <div className="flex items-center justify-between mb-12 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-white">Performance Velocity</div>
                    <div className="text-xs text-text-secondary font-medium tracking-wide">Live cohort progression</div>
                  </div>
                </div>
                <div className="flex gap-2">
                   <div className="w-2 h-2 rounded-full bg-accent" />
                   <div className="w-2 h-2 rounded-full bg-white/10" />
                   <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
              </div>

              {/* Blurred Graph Background Mockup */}
              <div className="h-64 w-full relative mb-12">
                 <div className="absolute inset-0 flex items-end justify-between gap-4">
                    {[65, 45, 90, 70, 85, 50, 75].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ duration: 1.5, delay: i * 0.1 }}
                        className="flex-1 bg-gradient-to-t from-accent/20 to-accent/40 rounded-t-lg relative group"
                      >
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity bg-accent text-black text-[10px] font-black px-2 py-1 rounded">
                            {h}%
                         </div>
                      </motion.div>
                    ))}
                 </div>
              </div>

              {/* Floating Metrics Overlays */}
              <motion.div 
                 animate={{ x: [0, 10, 0] }}
                 transition={{ duration: 5, repeat: Infinity }}
                 className="absolute top-1/2 -right-12 glass-card p-6 bg-black border-accent/30 shadow-2xl backdrop-blur-2xl w-52"
              >
                 <div className="flex items-center gap-2 mb-4">
                    <Target className="w-4 h-4 text-accent" />
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">Active Target</span>
                 </div>
                 <div className="text-2xl font-black text-accent tracking-tighter">98.2%</div>
              </motion.div>

              <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                 className="absolute bottom-10 -left-12 glass-card p-6 bg-secondary/90 border-white/20 shadow-2xl backdrop-blur-2xl w-48"
              >
                 <div className="text-[10px] font-black text-text-secondary uppercase tracking-widest mb-2">Efficiency Gain</div>
                 <div className="text-xl font-black text-white tracking-tighter">+4.5x</div>
              </motion.div>
            </div>

            {/* Decorative Grid Behind */}
            <div className="absolute -inset-10 bg-[radial-gradient(rgba(245,179,1,0.05)_1px,transparent_1px)] bg-[size:40px:40px] pointer-events-none -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
