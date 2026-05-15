"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function OperationalIntelligence() {
  return (
    <section className="py-32 bg-[#050816] relative overflow-hidden border-b border-white/5">
      
      {/* 1. GLOBAL COMMAND CENTER ATMOSPHERE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep Cinematic Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(10,15,30,1)_0%,transparent_100%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(245,185,66,0.02),transparent_60%)]" />
        
        {/* Atmospheric Fog/Glow */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 blur-[140px] rounded-full opacity-30" />
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-gold/5 blur-[140px] rounded-full opacity-20" />

        {/* Technical Grid & Telemetry Dots */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "48px 48px" }} />
        
        {/* Synchronized Infrastructure Connection Lines (Shared) */}
        <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
           <motion.path 
             initial={{ pathLength: 0, opacity: 0 }}
             animate={{ pathLength: 1, opacity: 1 }}
             transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
             d="M0 150 Q500 120 1000 150 T2000 150" 
             fill="none" 
             stroke="rgba(245,185,66,0.2)" 
             strokeWidth="0.5" 
           />
           <motion.path 
             initial={{ pathLength: 0, opacity: 0 }}
             animate={{ pathLength: 1, opacity: 1 }}
             transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
             d="M0 350 Q600 380 1200 350 T2400 350" 
             fill="none" 
             stroke="rgba(245,185,66,0.1)" 
             strokeWidth="0.5" 
           />
        </svg>
      </div>

      <div className="container-custom max-w-[1240px] relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT SIDE: Narrative & KPIs (40%) */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.3em] block mb-4">Intelligence Layer</span>
              <h2 className="text-[32px] md:text-[42px] font-bold text-white mb-6 leading-[1.05] tracking-tighter">
                Institutional performance <br />
                <span className="text-brand-gold italic font-serif">visualized in real-time.</span>
              </h2>
              <p className="text-[15px] text-white/40 leading-relaxed font-medium">
                Transform raw programme delivery data into actionable institutional intelligence. Monitor participant drift, session impact, and operational throughput through one unified telemetry layer.
              </p>
            </div>

            {/* KPI ROWS */}
            <div className="space-y-4">
              {[
                { label: "Session Intelligence", value: "94.8", unit: "AQI", trend: "+2.4%" },
                { label: "Operational Health", value: "NOMINAL", unit: "STAT", trend: "Stable" },
                { label: "Delivery Stability", value: "99.995", unit: "UP", trend: "0.8ms" }
              ].map((kpi, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between group hover:bg-white/[0.05] transition-all">
                   <div className="space-y-1">
                      <div className="text-[8px] font-black text-white/30 uppercase tracking-widest">{kpi.label}</div>
                      <div className="text-[16px] font-bold text-white tracking-tight">{kpi.value} <span className="text-[10px] text-brand-gold/40">{kpi.unit}</span></div>
                   </div>
                   <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{kpi.trend}</div>
                </div>
              ))}
            </div>

            {/* Credibility Indicators */}
            <div className="pt-6 border-t border-white/5 flex items-center gap-8">
               <div className="space-y-1">
                  <div className="text-[14px] font-bold text-white/80">ISO 27001</div>
                  <div className="text-[8px] font-black text-white/20 uppercase tracking-widest">Certified</div>
               </div>
               <div className="space-y-1">
                  <div className="text-[14px] font-bold text-white/80">SOC 2 TYPE II</div>
                  <div className="text-[8px] font-black text-white/20 uppercase tracking-widest">Compliant</div>
               </div>
            </div>
          </div>

          {/* RIGHT SIDE: PREMIUM ANALYTICS PANEL (60%) */}
          <div className="lg:col-span-7">
            <motion.div 
               initial={{ opacity: 0, scale: 0.98 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2 }}
               className="relative p-1 rounded-[32px] bg-gradient-to-br from-white/10 via-transparent to-white/5 shadow-3xl"
            >
               <div className="rounded-[30px] bg-[#080B14] overflow-hidden border border-white/5 relative">
                  {/* Internal Grid Header */}
                  <div className="px-8 py-5 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
                     <div className="flex items-center gap-3">
                        <Activity className="w-4 h-4 text-brand-gold" />
                        <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-white/80">Institutional Intelligence Center</h3>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                           <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Processing</span>
                        </div>
                     </div>
                  </div>

                  {/* Complex Analytics Content */}
                  <div className="p-8 grid grid-cols-12 gap-8">
                     
                     {/* Main Graph Area (8 Cols) */}
                     <div className="col-span-8 space-y-6">
                        <div className="p-6 rounded-2xl bg-black/40 border border-white/5 relative overflow-hidden h-[240px]">
                           <div className="flex items-center justify-between mb-8">
                              <div>
                                 <div className="text-[9px] font-black text-white/20 uppercase tracking-widest">Global Attendance Flow</div>
                                 <div className="text-[20px] font-bold text-white tracking-tight">12,402 <span className="text-[10px] text-brand-gold">SYNCED</span></div>
                              </div>
                              <div className="flex gap-2">
                                 {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-gold/20" />)}
                              </div>
                           </div>
                           
                           {/* SVG Live Line Chart */}
                           <div className="absolute inset-x-0 bottom-0 h-32 px-6">
                              <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                                 <motion.path 
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    d="M0 80 Q50 20 100 60 T200 40 T300 70 T400 30" 
                                    fill="none" 
                                    stroke="url(#lineGradient)" 
                                    strokeWidth="2" 
                                 />
                                 <defs>
                                    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                                       <stop offset="0%" stopColor="#f5b82e" stopOpacity="0.2" />
                                       <stop offset="50%" stopColor="#f5b82e" stopOpacity="1" />
                                       <stop offset="100%" stopColor="#f5b82e" stopOpacity="0.5" />
                                    </linearGradient>
                                 </defs>
                              </svg>
                           </div>
                        </div>

                        {/* Secondary Metrics Row */}
                        <div className="grid grid-cols-2 gap-6">
                           <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                              <div className="text-[8px] font-black text-white/20 uppercase tracking-widest">Engagement Matrix</div>
                              <div className="grid grid-cols-6 gap-1 h-8 items-end">
                                 {[40, 70, 50, 90, 60, 80].map((h, i) => (
                                    <motion.div key={i} animate={{ height: [`${h}%`, `${h+10}%`, `${h}%`] }} transition={{ repeat: Infinity, duration: 2, delay: i*0.2 }} className="bg-brand-gold/40 rounded-t-[1px]" />
                                 ))}
                              </div>
                           </div>
                           <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                              <div className="text-[8px] font-black text-white/20 uppercase tracking-widest">Delivery Integrity</div>
                              <div className="flex items-center gap-4">
                                 <div className="text-[24px] font-bold text-emerald-500 tracking-tighter">99.8%</div>
                                 <ShieldCheck className="w-6 h-6 text-emerald-500/30" />
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Sidebar Analytics Area (4 Cols) */}
                     <div className="col-span-4 space-y-6">
                        {/* Operational Health Circle */}
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center space-y-4">
                           <div className="relative w-24 h-24 flex items-center justify-center">
                              <svg className="w-full h-full -rotate-90">
                                 <circle cx="48" cy="48" r="44" fill="none" stroke="rgba(245,184,46,0.1)" strokeWidth="4" />
                                 <motion.circle cx="48" cy="48" r="44" fill="none" stroke="#f5b82e" strokeWidth="4" strokeDasharray="276" initial={{ strokeDashoffset: 276 }} animate={{ strokeDashoffset: 40 }} transition={{ duration: 2 }} />
                              </svg>
                              <div className="absolute text-[18px] font-bold text-white">94%</div>
                           </div>
                           <div className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">Health Score</div>
                        </div>

                        {/* AI Monitoring Logs */}
                        <div className="p-5 rounded-2xl bg-brand-gold/[0.02] border border-brand-gold/10 space-y-4">
                           <div className="flex items-center gap-2">
                              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                              <span className="text-[8px] font-black text-brand-gold uppercase tracking-widest">AI MONITORING</span>
                           </div>
                           <div className="space-y-3">
                              {[
                                "Attendance nominal across APAC",
                                "Engagement drift in EMEA-A",
                                "Regional sync optimized"
                              ].map((log, i) => (
                                <div key={i} className="flex gap-2 items-start">
                                   <div className="w-1 h-1 rounded-full bg-brand-gold mt-1" />
                                   <div className="text-[10px] text-white/50 leading-tight font-medium">{log}</div>
                                </div>
                              ))}
                           </div>
                        </div>
                     </div>

                  </div>

                  {/* Heatmap Footer Strip */}
                  <div className="px-8 py-4 border-t border-white/5 bg-black/40 flex items-center justify-between">
                     <div className="flex items-center gap-6">
                        <div className="text-[8px] font-black text-white/20 uppercase tracking-widest">Coordination Map</div>
                        <div className="flex gap-1">
                           {Array.from({ length: 24 }).map((_, i) => (
                             <div key={i} className={cn("w-2 h-2 rounded-[1px]", i % 5 === 0 ? "bg-brand-gold/60" : "bg-brand-gold/10")} />
                           ))}
                        </div>
                     </div>
                     <div className="text-[9px] font-black text-white/40 uppercase tracking-widest">Live Updates Available</div>
                  </div>
               </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
