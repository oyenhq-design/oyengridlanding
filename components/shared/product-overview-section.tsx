"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Layout, Activity, Database, Shield } from "lucide-react";

const features = [
  "Centralised dashboard for total operational visibility",
  "Automated workflows to eliminate manual bottlenecks",
  "Real-time analytics and predictive performance tracking",
  "Enterprise-grade security and role-based access"
];

export function ProductOverviewSection() {
  return (
    <section className="py-24 bg-transparent overflow-hidden relative border-t border-white/5">
      <div className="relative z-10 max-w-[1400px] mx-auto px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Glass Card with Animated Graph */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            {/* Glow Behind Graph */}
            <div className="absolute inset-0 bg-radial-gradient from-[#D4AF37]/10 to-transparent blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" 
                 style={{ background: 'radial-gradient(circle, rgba(250,204,21,0.12), transparent 60%)' }} />

            <div className="relative bg-[rgba(20,20,20,0.5)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.06)] rounded-[32px] p-8 md:p-10 shadow-[0_40px_100px_rgba(0,0,0,0.4)] overflow-hidden">
              {/* Card Header */}
              <div className="flex justify-between items-center mb-12">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-transparent border border-[#D4AF37]/30 flex items-center justify-center">
                    <Activity className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg tracking-tight">Performance Stream</h4>
                    <p className="text-[#A1A1AA] text-xs font-medium tracking-wider uppercase">Live operational metrics</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/10" />
                  ))}
                </div>
              </div>

              {/* Graph Area */}
              <div className="relative h-[300px] w-full">
                {/* Background Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between opacity-20">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-full h-[1px] bg-white/10" />
                  ))}
                </div>

                <svg viewBox="0 0 400 200" className="w-full h-full relative z-10 overflow-visible" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Floating Motion Path */}
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    animate={{ y: [0, -5, 0, 5, 0] }}
                    transition={{ 
                      pathLength: { duration: 2, ease: "easeInOut" },
                      opacity: { duration: 0.5 },
                      y: { repeat: Infinity, duration: 8, ease: "easeInOut" }
                    }}
                    d="M0,150 Q50,120 100,140 T200,90 T300,50 T400,20"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="3"
                    className="drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]"
                  />
                  
                  <motion.path
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    animate={{ y: [0, -5, 0, 5, 0] }}
                    transition={{ 
                      opacity: { duration: 1, delay: 1 },
                      y: { repeat: Infinity, duration: 8, ease: "easeInOut" }
                    }}
                    d="M0,150 Q50,120 100,140 T200,90 T300,50 T400,20 V200 H0 Z"
                    fill="url(#lineGradient)"
                  />
                </svg>

                {/* Floating Indicators */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute top-10 right-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl z-20"
                >
                  <div className="text-[10px] text-[#A1A1AA] uppercase tracking-widest font-bold mb-1">Efficiency</div>
                  <div className="text-2xl font-bold text-white tracking-tighter">94.8%</div>
                </motion.div>
              </div>

              {/* Bottom Nav Mockup */}
              <div className="mt-12 flex justify-between items-center text-[11px] font-bold text-[#71717A] tracking-widest uppercase">
                <span>JAN</span><span>MAR</span><span>MAY</span><span>JUL</span><span>SEP</span><span>NOV</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >
            <div className="inline-flex items-center gap-3 text-[#D4AF37] text-[13px] font-bold tracking-[0.2em] uppercase mb-8">
              <Shield className="w-4 h-4" />
              Infrastructure
            </div>
            
            <h2 className="text-[40px] md:text-[56px] font-bold text-white leading-[1.05] tracking-tight mb-8">
              A unified system for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFF0B3]">high-performance</span> delivery
            </h2>
            
            <p className="text-lg text-[#A1A1AA] leading-relaxed mb-12 font-light max-w-xl">
              Stop fighting fragmented tools. OYEN GRID provides the absolute structural integrity required to scale complex programmes with precision and total operational visibility.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { label: "Dashboards", icon: Layout },
                { label: "Workflows", icon: Activity },
                { label: "Data Integrity", icon: Database },
                { label: "Security", icon: Shield }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37]/40 group-hover:bg-[#D4AF37]/5 transition-all">
                    <item.icon className="w-5 h-5 text-[#A1A1AA] group-hover:text-[#D4AF37] transition-colors" strokeWidth={1.5} />
                  </div>
                  <span className="text-white font-medium group-hover:text-[#D4AF37] transition-colors">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
