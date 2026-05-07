"use client";

import { motion } from "framer-motion";
import { Activity, BarChart3, TrendingUp, Zap, Target } from "lucide-react";

export function Insights() {
  return (
    <section className="py-40 bg-background relative overflow-hidden">
      
      {/* Background Atmosphere Band */}
      <div className="absolute inset-0 z-0">
         <img 
           src="/command-wide.png" 
           alt="Command Wide" 
           className="w-full h-full object-cover opacity-20 grayscale-[0.5] scale-110"
         />
         <div className="absolute inset-0 bg-linear-to-r from-background via-background/90 to-background" />
      </div>

      <div className="container-custom relative z-10" style={{maxWidth:1400}}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* Left Content: Editorial Spacing */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-8">
               <Zap className="w-5 h-5 text-accent fill-accent" />
               <span className="text-accent text-[11px] font-black tracking-[0.4em] uppercase">INTELLIGENCE INFRASTRUCTURE</span>
            </div>
             <h2 className="mb-10 text-white">
               Operational <span className="text-gold-gradient italic">insights.</span>
             </h2>
             <p className="mb-12 opacity-60">
               Transform raw cohort performance into a strategic advantage. OYEN GRID provides absolute visibility across every programme touchpoint.
             </p>
            <div className="flex flex-col gap-6">
              {[
                { label: "Completion Index", val: "94.8%", color: "text-accent" },
                { label: "Operational ROI", val: "40.2%", color: "text-green-400" }
              ].map((stat, i) => (
                <div key={i} className="flex items-center justify-between py-6 border-b border-white/5">
                   <div className="text-[12px] font-black text-white/40 uppercase tracking-[0.3em]">{stat.label}</div>
                   <div className={`text-3xl font-bold tracking-tighter ${stat.color}`}>{stat.val}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Immersive Analytics Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative"
          >
            <div className="relative group">
              <div className="absolute -inset-10 bg-accent/5 blur-[100px] rounded-full pointer-events-none opacity-40" />
              
              <div className="glass-card p-12 lg:p-16 border-none bg-[#050816]/60 shadow-[0_60px_100px_rgba(0,0,0,0.8)] relative overflow-hidden rounded-[48px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,166,42,0.05),transparent_70%)]" />
                
                <div className="flex items-center justify-between mb-16 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white tracking-tight">Performance Velocity</div>
                      <div className="text-[11px] text-white/40 font-medium tracking-wide uppercase">Live Programme Flow</div>
                    </div>
                  </div>
                </div>

                {/* Editorial Graph Mockup */}
                <div className="h-64 w-full relative mb-12">
                   <div className="absolute inset-0 flex items-end justify-between gap-6 px-4">
                      {[65, 45, 90, 70, 85, 50, 75].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          transition={{ duration: 1.5, delay: i * 0.1 }}
                          className="flex-1 bg-white/[0.03] border border-white/5 rounded-t-lg relative group"
                        >
                           <div className="absolute top-[-1px] left-0 w-full h-[2px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                      ))}
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-12 relative z-10">
                   <div>
                      <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-3">Retention</div>
                      <div className="text-2xl font-bold text-white tracking-tighter">98.2%</div>
                   </div>
                   <div>
                      <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-3">Efficiency</div>
                      <div className="text-2xl font-bold text-white tracking-tighter">+4.5x</div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
