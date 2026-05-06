"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Layout, Activity, Database, Shield } from "lucide-react";

export function ProductOverviewSection() {
  return (
    <section className="py-32 bg-transparent overflow-hidden relative border-t border-white/[0.06]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#F5B942] opacity-[0.03] blur-[140px] rounded-full pointer-events-none translate-x-1/2" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Product Interface Mockup (7 Columns) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 relative group"
          >
            {/* Visual Depth Glow */}
            <div className="absolute -inset-10 bg-[#F5B942] opacity-[0.06] blur-[100px] rounded-full pointer-events-none group-hover:opacity-[0.1] transition-opacity duration-700" />

            <div className="relative bg-[rgba(10,10,10,0.8)] backdrop-blur-3xl border border-white/[0.08] rounded-[40px] p-8 md:p-12 shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden ring-1 ring-white/5">
              {/* Mockup Header */}
              <div className="flex justify-between items-center mb-12">
                <div className="flex gap-4 items-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#F5B942]/10 border border-[#F5B942]/30 flex items-center justify-center">
                    <Activity className="w-7 h-7 text-[#F5B942]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl tracking-tight">Performance Stream</h4>
                    <p className="text-[#A1A1AA] text-xs font-bold tracking-widest uppercase mt-0.5">Live operational metrics</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-2 h-2 rounded-full bg-white/10" />
                  ))}
                </div>
              </div>

              {/* Data Visualization Mockup */}
              <div className="relative h-[320px] w-full">
                {/* Background Grid */}
                <div className="absolute inset-0 flex flex-col justify-between opacity-10">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-full h-[1px] bg-white" />
                  ))}
                </div>

                <svg viewBox="0 0 400 200" className="w-full h-full relative z-10 overflow-visible" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lineGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#F5B942" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#F5B942" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    animate={{ y: [0, -4, 0, 4, 0] }}
                    transition={{ 
                      pathLength: { duration: 2.5, ease: "easeInOut" },
                      opacity: { duration: 1 },
                      y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
                    }}
                    d="M0,160 Q60,130 120,150 T240,80 T400,30"
                    fill="none"
                    stroke="#F5B942"
                    strokeWidth="4"
                    className="drop-shadow-[0_0_20px_rgba(245,185,66,0.6)]"
                  />
                  
                  <motion.path
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    animate={{ y: [0, -4, 0, 4, 0] }}
                    transition={{ 
                      opacity: { duration: 1.5, delay: 1 },
                      y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
                    }}
                    d="M0,160 Q60,130 120,150 T240,80 T400,30 V200 H0 Z"
                    fill="url(#lineGlow)"
                  />
                </svg>

                {/* Floating Metric Card */}
                <motion.div 
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                  className="absolute top-4 right-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl z-20"
                >
                  <div className="text-[11px] text-[#A1A1AA] uppercase tracking-[0.2em] font-bold mb-2">Efficiency Gain</div>
                  <div className="text-3xl font-bold text-white tracking-tighter">+42.5%</div>
                </motion.div>
              </div>

              {/* Mockup Footer */}
              <div className="mt-12 flex justify-between items-center text-[12px] font-bold text-[#52525B] tracking-[0.2em] uppercase">
                {["JAN", "MAR", "MAY", "JUL", "SEP", "NOV"].map(m => <span key={m}>{m}</span>)}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content (5 Columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="inline-flex items-center gap-3 text-[#F5B942] text-[13px] font-bold tracking-[0.3em] uppercase mb-8">
              <Shield className="w-4 h-4" />
              Structural Integrity
            </div>
            
            <h2 className="text-[40px] md:text-[56px] font-bold text-white leading-[1.05] tracking-tight mb-10">
              A unified system for <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B942] via-white to-[#D4A017]">high-stakes</span> delivery
            </h2>
            
            <p className="text-[19px] md:text-[21px] text-[#A1A1AA] leading-relaxed mb-12 font-light">
              Stop fighting fragmented tools. OYEN GRID provides the absolute operational control required to scale complex programmes with precision and total structural clarity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {[
                { label: "Dashboards", icon: Layout },
                { label: "Workflows", icon: Activity },
                { label: "Data Guardrails", icon: Database },
                { label: "Security", icon: Shield }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:border-[#F5B942]/40 group-hover:bg-[#F5B942]/5 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-[#71717A] group-hover:text-[#F5B942] transition-colors" strokeWidth={1.5} />
                  </div>
                  <span className="text-white font-bold text-[17px] group-hover:text-[#F5B942] transition-colors">{item.label}</span>
                </div>
              ))}
            </div>
            
            <button className="w-fit flex items-center gap-2 text-[#F5B942] font-bold text-[14px] uppercase tracking-[0.2em] group/btn">
              View platform details <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
