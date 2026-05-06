"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Activity, BarChart3, Globe, Shield, Zap, LayoutGrid, ListChecks } from "lucide-react";

export function DeepProductSections() {
  return (
    <div className="bg-[#0B0B0D]">
      
      {/* 6. ENGINE FOR ENTERPRISE OPERATIONS (Text LEFT | Image RIGHT) */}
      <section className="py-32 relative overflow-hidden bg-[#0B0B0D] border-t border-white/5">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-3 text-[#F5B942] text-[11px] font-bold tracking-[0.3em] uppercase mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#F5B942]" />
              System Architecture
            </div>
            <h2 className="text-[40px] md:text-[52px] font-bold text-white tracking-tight leading-[1.05] mb-8">
              Engine for <br />
              <span className="text-[#F5B942]">enterprise operations</span>
            </h2>
            <div className="space-y-6">
              {[
                { title: "Curriculum Orchestration", icon: LayoutGrid },
                { title: "Automated Progression Logic", icon: Zap },
                { title: "Structural Integrity Checks", icon: ListChecks }
              ].map((b) => (
                <div key={b.title} className="flex items-center gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-[#F5B942]/10 transition-all">
                    <b.icon className="w-4 h-4 text-[#71717A] group-hover:text-[#F5B942]" />
                  </div>
                  <span className="text-[#A1A1AA] text-[17px] font-medium group-hover:text-white transition-colors">{b.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Human + Product Mix */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 relative"
          >
            {/* Blur glow behind UI */}
            <div className="absolute -inset-10 bg-[#F5B942] opacity-[0.08] blur-[100px] rounded-full" />
            
            <div className="relative p-1 bg-white/5 rounded-[32px] shadow-2xl overflow-hidden ring-1 ring-white/10 group">
              <div className="relative aspect-video rounded-[31px] overflow-hidden">
                <Image 
                  src="/team_working_large_screen_1778083091_png_prompt_1778092803789.png" 
                  alt="Team using OYEN GRID" 
                  fill
                  className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent opacity-60" />
                
                {/* Floating UI Overlay */}
                <div className="absolute top-6 right-6 w-1/2 aspect-video bg-[#0D0D10] border border-white/10 rounded-2xl shadow-2xl overflow-hidden scale-90 group-hover:scale-100 transition-transform duration-700">
                   <Image src="/oyen_grid_workflow_ui_mockup_1778082069_png_1778091699255.png" alt="Workflow UI" fill className="object-cover" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. ANALYTICS (Centered Content) */}
      <section className="py-32 bg-[#0B0B0D] border-t border-white/5">
        <div className="max-w-[900px] mx-auto px-6 text-center mb-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-white tracking-tight mb-8">
             Operational insights that <br />
             <span className="text-[#F5B942]">drive actual results</span>
          </h2>
          <p className="text-[18px] text-[#71717A] leading-relaxed max-w-2xl mx-auto">
            Surface engagement trends, learning velocity, and operational bottlenecks before they become risks.
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
           {/* Chart UI */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="p-10 bg-white/[0.02] border border-white/5 rounded-[32px] shadow-2xl"
           >
              <div className="flex items-center justify-between mb-10">
                <p className="text-white font-bold text-lg">Engagement Velocity</p>
                <Activity className="w-5 h-5 text-[#F5B942] animate-pulse" />
              </div>
              <div className="h-48 flex items-end gap-3">
                 {[40, 60, 80, 50, 90, 70, 85].map((h, i) => (
                   <div key={i} className="flex-1 bg-white/5 rounded-t-lg group relative">
                      <motion.div initial={{ height: 0 }} whileInView={{ height: `${h}%` }} transition={{ delay: i*0.1 }} className="absolute bottom-0 left-0 right-0 bg-[#F5B942]/20 group-hover:bg-[#F5B942]/40 rounded-t-lg transition-colors" />
                   </div>
                 ))}
              </div>
           </motion.div>

           {/* Stat Cards */}
           <div className="grid grid-cols-1 gap-6">
              {[
                { label: "Completion Velocity", value: "32.4%", trend: "+4.8%" },
                { label: "Data Integrity Score", value: "100%", trend: "Stable" }
              ].map((stat) => (
                <div key={stat.label} className="p-8 rounded-[24px] bg-white/[0.02] border border-white/5 hover:border-[#F5B942]/20 transition-all flex items-center justify-between">
                   <div>
                     <p className="text-[#71717A] text-[12px] font-bold uppercase tracking-widest mb-2">{stat.label}</p>
                     <p className="text-3xl font-bold text-white tracking-tighter">{stat.value}</p>
                   </div>
                   <div className="px-3 py-1.5 rounded-full bg-[#F5B942]/10 text-[#F5B942] text-[11px] font-bold">{stat.trend}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

    </div>
  );
}
