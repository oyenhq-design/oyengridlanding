"use client";

import { motion } from "framer-motion";
import { Activity, BarChart3, TrendingUp } from "lucide-react";

export function Insights() {
  return (
    <section className="py-32 bg-background border-t border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Operational insights <br />
              <span className="text-accent">that drive results.</span>
            </h2>
            <p className="text-lg text-text-secondary font-light leading-relaxed mb-10 max-w-lg">
              Transform raw data into a strategic advantage. OYEN GRID provides deep visibility into participant engagement and programme efficiency.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Efficiency", val: "42%", icon: Activity },
                { label: "Completion", val: "94%", icon: BarChart3 }
              ].map((stat, i) => (
                <div key={i} className="glass-card p-6 border-white/5 bg-secondary/30">
                  <stat.icon className="w-5 h-5 text-accent mb-4" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.val}</div>
                  <div className="text-xs font-bold text-text-secondary uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Analytics Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card p-8 lg:p-12 border-white/10 shadow-2xl bg-tertiary">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Performance Index</div>
                    <div className="text-[10px] text-text-secondary font-medium tracking-wide">Updated just now</div>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-[10px] font-bold tracking-widest">+12.5%</div>
              </div>

              <div className="space-y-6">
                {[75, 45, 90, 60].map((h, i) => (
                  <div key={i} className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${h}%` }}
                      transition={{ duration: 1.5, delay: i * 0.2 }}
                      className="h-full bg-accent" 
                    />
                  </div>
                ))}
              </div>
              
              <div className="mt-12 flex justify-between gap-4">
                <div className="h-24 flex-1 bg-white/5 rounded-lg" />
                <div className="h-24 flex-1 bg-accent/10 border border-accent/20 rounded-lg" />
                <div className="h-24 flex-1 bg-white/5 rounded-lg" />
              </div>
            </div>
            {/* Secondary Floating Card */}
            <div className="absolute -bottom-6 -right-6 glass-card p-6 bg-black border-white/20 hidden md:block w-48 shadow-2xl">
               <div className="text-xl font-bold text-white">14.2k</div>
               <div className="text-[10px] text-text-secondary font-bold uppercase tracking-widest mt-1">Data Points</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
