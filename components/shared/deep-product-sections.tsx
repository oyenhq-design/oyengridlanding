"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Activity, BarChart3, Globe, Shield, Zap, LayoutGrid, ListChecks } from "lucide-react";

export function DeepProductSections() {
  return (
    <div className="bg-[#0B0B0C]">
      
      {/* 6. ENGINE FOR ENTERPRISE OPERATIONS (Workflow/System UI) */}
      <section className="py-40 relative overflow-hidden bg-[#0B0B0C] border-t border-white/5">
        {/* Subtle blue + gold gradient blend */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-[#F5B800]/5 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-3 text-[#F5B800] text-[12px] font-bold tracking-[0.3em] uppercase mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#F5B800]" />
              System Architecture
            </div>
            <h2 className="text-[42px] md:text-[56px] font-bold text-white tracking-tight leading-[1.05] mb-8">
              Engine for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-[#F5B800]">enterprise operations</span>
            </h2>
            <div className="space-y-6">
              {[
                { title: "Curriculum Orchestration", icon: LayoutGrid },
                { title: "Automated Progression Logic", icon: Zap },
                { title: "Structural Integrity Checks", icon: ListChecks },
                { title: "Multi-tenant Governance", icon: Shield }
              ].map((b) => (
                <div key={b.title} className="flex items-center gap-5 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all">
                    <b.icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-[#D4D4D8] text-[18px] font-medium group-hover:text-white transition-colors">{b.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: WORKFLOW / SYSTEM UI MOCKUP (CRITICAL) */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-7 relative"
          >
            {/* Slight blur glow behind UI */}
            <div className="absolute -inset-20 bg-blue-500/10 blur-[100px] rounded-full opacity-60" />
            
            <div className="relative p-1 bg-gradient-to-br from-white/10 via-transparent to-blue-500/10 rounded-[32px] shadow-[0_60px_120px_rgba(0,0,0,0.8)] overflow-hidden ring-1 ring-white/10 group">
              <div className="relative aspect-[16/11] bg-[#0D0D10] rounded-[31px] overflow-hidden border border-white/10">
                <Image 
                  src="/oyen_grid_workflow_ui_mockup_1778082069_png_1778091699255.png" 
                  alt="Workflow Progression System UI" 
                  fill
                  className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. ANALYTICS SECTION (MAKE IT FEEL ALIVE) */}
      <section className="py-40 bg-[#0D0D10]/30 relative overflow-hidden border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Text + Stat Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[36px] md:text-[52px] font-bold text-white tracking-tight leading-tight mb-8">
              Operational insights <br />
              <span className="text-[#F5B800]">that drive results</span>
            </h2>
            <p className="text-[19px] text-[#A1A1AA] leading-relaxed mb-12 font-light">
              Stop guessing. Our deep analytics layer surfaces engagement trends, learning velocity, and operational bottlenecks before they become risks.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Completion Velocity", value: "32.4%", trend: "+4.8%", color: "emerald" },
                { label: "Participant Satisfaction", value: "4.92", valueSub: "/5", trend: "+0.12", color: "blue" }
              ].map((stat) => (
                <div key={stat.label} className="p-8 rounded-[28px] bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-all group shadow-xl">
                  <p className="text-[#71717A] text-xs font-bold uppercase tracking-widest mb-4 group-hover:text-[#F5B800] transition-colors">{stat.label}</p>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-3xl font-bold text-white tracking-tighter">{stat.value}</span>
                    {stat.valueSub && <span className="text-[#52525B] text-lg font-medium">{stat.valueSub}</span>}
                  </div>
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold ${stat.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-blue-500/10 text-blue-400'}`}>
                    <TrendingUp className="w-3 h-3" /> {stat.trend}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Chart UI (Animated Highlights) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-[#F5B800] opacity-[0.05] blur-[100px] rounded-full" />
            <div className="relative p-10 bg-[#0D0D10] border border-white/10 rounded-[32px] shadow-[0_60px_100px_rgba(0,0,0,0.8)] overflow-hidden ring-1 ring-white/10 group">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">Engagement Velocity</h4>
                  <p className="text-[#52525B] text-xs">Live data across all active cohorts</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                  <Activity className="w-4 h-4 text-[#F5B800] animate-pulse" />
                  <span className="text-[#F5B800] text-[10px] font-bold uppercase tracking-widest">Live Now</span>
                </div>
              </div>
              
              <div className="flex items-end gap-3.5 h-56 relative">
                {[0, 25, 50, 75, 100].map((line) => (
                  <div key={line} className="absolute left-0 right-0 border-t border-white/[0.03] pointer-events-none" style={{ bottom: `${line}%` }} />
                ))}
                
                {[45, 65, 85, 55, 95, 75, 88, 98].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-3 group/bar">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                      className={`w-full rounded-t-xl transition-all duration-500 relative ${
                        i === 7 ? "bg-[#F5B800] shadow-[0_0_30px_rgba(245,184,0,0.4)]" : "bg-white/10 group-hover/bar:bg-white/20"
                      }`}
                    >
                      {i === 7 && <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-t from-transparent via-white/40 to-white/60" />}
                    </motion.div>
                    <span className="text-[#3F3F46] text-[10px] font-bold group-hover/bar:text-white transition-colors">W0{i+1}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. FEATURE GRID */}
      <section className="py-40 relative border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center mb-28">
            <h2 className="text-[36px] md:text-[52px] font-bold text-white tracking-tight">
              Everything you need <br />
              <span className="text-[#F5B800]">to operate at scale</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "Global Scalability", desc: "Build once, deploy everywhere. OYEN GRID is designed to support rapid multi-region cohort expansion." },
              { icon: BarChart3, title: "Precision Analytics", desc: "Granular reporting and real-time dashboards across every participant and program module." },
              { icon: Shield, title: "Hardened Security", desc: "Enterprise-grade compliance (SOC2, GDPR) and structural integrity for high-stakes programs." },
              { icon: Zap, title: "Seamless Integrations", desc: "Connect with your existing CRM, LMS, and communication tools via our developer-first API." }
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-10 rounded-[32px] bg-white/[0.02] border border-white/10 hover:border-[#F5B800]/30 hover:bg-white/[0.04] transition-all group shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#F5B800]/10 transition-all duration-500 border border-white/5">
                  <item.icon className="w-6 h-6 text-[#71717A] group-hover:text-[#F5B800]" />
                </div>
                <h4 className="text-white font-bold text-[20px] mb-4">{item.title}</h4>
                <p className="text-[#71717A] text-[15px] leading-relaxed font-light group-hover:text-[#A1A1AA] transition-colors">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
