"use client";

import { motion } from "framer-motion";
import { 
  Shield, Globe, BarChart3, Check, Zap, 
  Activity, ShieldCheck, Lock, Database, Search,
  ArrowUpRight, RefreshCw, Cpu, Server, Network,
  Radio, Hexagon
} from "lucide-react";
import { cn } from "@/lib/utils";

export function OperationalIntelligence() {
  return (
    <section className="py-16 bg-[#020408] theme-navy-section relative overflow-hidden border-b border-white/5">
      
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

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-3 gap-5 items-stretch">
          
          {/* CARD 1 — LIVE OPERATIONS ANALYTICS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative p-5 rounded-[20px] bg-[#080B14]/60 border border-white/5 backdrop-blur-[40px] transition-all duration-700 hover:border-brand-gold/40 flex flex-col min-h-[320px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            {/* Command Header */}
            <div className="flex justify-between items-start mb-5 relative z-30">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(245,185,66,0.8)] animate-pulse" />
                  <h3 className="text-[13px] font-black uppercase tracking-[0.2em] text-white/90">Live Operations Analytics</h3>
                </div>
                <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Real-time institutional performance intelligence</p>
              </div>
              <div className="flex gap-2">
                 <div className="px-2 py-0.5 rounded bg-brand-gold/10 border border-brand-gold/30 flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-brand-gold" />
                    <span className="text-[8px] font-black text-brand-gold uppercase tracking-widest">Live Sync</span>
                 </div>
              </div>
            </div>

            {/* Dashboard Visual Area — The Wall */}
            <div className="relative flex-1 bg-black/40 rounded-[14px] border border-white/5 overflow-hidden p-3.5 group-hover:bg-black/60 transition-all duration-700">
               {/* Internal Matrix Detail */}
               <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
               
               {/* Programme Activity Waveform */}
               <div className="absolute inset-x-0 top-6 h-12 opacity-40">
                  <svg className="w-full h-full" viewBox="0 0 400 40">
                    <motion.path 
                      animate={{ d: [
                        "M0 20 Q50 5 100 20 T200 20 T300 20 T400 20",
                        "M0 20 Q50 35 100 20 T200 20 T300 20 T400 20",
                        "M0 20 Q50 5 100 20 T200 20 T300 20 T400 20"
                      ]}}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      d="M0 20 Q50 5 100 20 T200 20 T300 20 T400 20" 
                      fill="none" 
                      stroke="#F5B942" 
                      strokeWidth="1" 
                    />
                  </svg>
               </div>

               {/* Central Analytics Cluster */}
               <div className="mt-12 grid grid-cols-2 gap-4">
                  {[
                    { l: "Operational Score", v: "98.2", unit: "%" },
                    { l: "Participant Flow", v: "12,402", unit: "SYNC" }
                  ].map((stat, i) => (
                    <div key={i} className="space-y-1">
                       <div className="text-[20px] font-bold text-white tracking-tighter flex items-baseline gap-1">
                          {stat.v} <span className="text-[8px] text-brand-gold/40">{stat.unit}</span>
                       </div>
                       <div className="text-[7px] font-black text-white/20 uppercase tracking-widest">{stat.l}</div>
                    </div>
                  ))}
               </div>

               {/* Live Attendance Pulse Graph */}
               <div className="absolute bottom-4 inset-x-4 h-16 flex items-end justify-between gap-1">
                  {[30, 60, 40, 80, 50, 70, 90, 65, 85, 45, 75, 55].map((h, i) => (
                    <div key={i} className="flex-1 relative group/bar">
                       <motion.div 
                         initial={{ height: 0 }}
                         whileInView={{ height: `${h}%` }}
                         transition={{ delay: 0.5 + (i * 0.04), duration: 2, ease: [0.16, 1, 0.3, 1] }}
                         className="w-full bg-gradient-to-t from-brand-gold/5 via-brand-gold/20 to-brand-gold/60 rounded-t-[1px]"
                       />
                       <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-gold opacity-0 group-hover:opacity-100 shadow-[0_0_10px_#F5B942]" />
                    </div>
                  ))}
               </div>

               {/* Floating Operational Chip */}
               <motion.div 
                 animate={{ y: [0, -4, 0] }}
                 transition={{ duration: 5, repeat: Infinity }}
                 className="absolute top-4 right-4 px-2 py-1 rounded bg-black/80 border border-brand-gold/20 backdrop-blur-md flex items-center gap-2"
               >
                  <Activity className="w-2.5 h-2.5 text-brand-gold" />
                  <span className="text-[8px] font-black text-brand-gold uppercase tracking-widest">AI Monitoring Active</span>
               </motion.div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </motion.div>

          {/* CARD 2 — GOVERNANCE MATRIX */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative p-5 rounded-[20px] bg-[#080B14]/60 border border-white/5 backdrop-blur-[40px] transition-all duration-700 hover:border-emerald-500/40 flex flex-col min-h-[320px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            {/* Command Header */}
            <div className="flex justify-between items-start mb-5 relative z-30">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
                  <h3 className="text-[13px] font-black uppercase tracking-[0.2em] text-white/90">Governance Matrix</h3>
                </div>
                <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Security, compliance and institutional control systems</p>
              </div>
              <div className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-1.5">
                 <ShieldCheck className="w-2.5 h-2.5 text-emerald-500" />
                 <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">Secure</span>
              </div>
            </div>

            {/* Matrix Operational Area */}
            <div className="relative flex-1 bg-black/40 rounded-[14px] border border-white/5 overflow-hidden flex flex-col group-hover:bg-black/60 transition-all duration-700">
               {/* Holographic Core Visual */}
               <div className="h-32 relative flex items-center justify-center pointer-events-none">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_70%)]" />
                  
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[30px] border border-dashed border-emerald-500/10 rounded-full"
                  />
                  
                  <div className="relative z-10 w-20 h-20 flex items-center justify-center">
                     <motion.div 
                        animate={{ scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute inset-0 bg-emerald-500/10 rounded-xl blur-2xl"
                     />
                     <Hexagon className="w-10 h-10 text-emerald-500/60" strokeWidth={1} />
                     <Lock className="absolute w-4 h-4 text-emerald-500" />
                  </div>

                  {/* Operational Integrity Indicators */}
                  <div className="absolute inset-x-8 bottom-4 flex justify-between">
                     {["VERIFIED", "ENCRYPTED"].map((t, i) => (
                       <div key={i} className="flex items-center gap-1.5">
                          <div className="w-1 h-1 rounded-full bg-emerald-500" />
                          <span className="text-[7px] font-black text-white/40 uppercase tracking-widest">{t}</span>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Governance Grid List */}
               <div className="p-3.5 pt-0 space-y-1.5">
                  {[
                    "Role-based governance",
                    "End-to-end encryption",
                    "Audit infrastructure"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 rounded bg-white/[0.02] border border-white/5 group-hover:border-emerald-500/20 transition-all">
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
                       <span className="text-[9px] font-bold text-white/50 group-hover:text-white/80">{item}</span>
                    </div>
                  ))}
               </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </motion.div>

          {/* CARD 3 — GLOBAL SCALE NETWORK */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative p-5 rounded-[20px] bg-[#080B14]/60 border border-white/5 backdrop-blur-[40px] transition-all duration-700 hover:border-blue-500/40 flex flex-col min-h-[320px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            {/* Command Header */}
            <div className="flex justify-between items-start mb-5 relative z-30">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse" />
                  <h3 className="text-[13px] font-black uppercase tracking-[0.2em] text-white/90">Global Scale Network</h3>
                </div>
                <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Distributed institutional operations infrastructure</p>
              </div>
              <div className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/30 flex items-center gap-1.5">
                 <RefreshCw className="w-2.5 h-2.5 text-blue-500 animate-spin-slow" />
                 <span className="text-[8px] font-black text-blue-500 uppercase tracking-widest">Global Sync</span>
              </div>
            </div>

            {/* Infrastructure Map Visual */}
            <div className="relative flex-1 bg-black/40 rounded-[14px] border border-white/5 overflow-hidden flex flex-col group-hover:bg-black/60 transition-all duration-700">
               <div className="h-36 relative flex items-center justify-center p-3.5">
                  {/* Digital World Map Background Dots */}
                  <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "12px 12px" }} />
                  
                  {/* Global Pulse Visualization */}
                  <motion.div 
                    animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute w-40 h-40 rounded-full border border-blue-500/40"
                  />

                  {/* Connected Hubs (SVG Paths) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 200">
                     {[
                       { d: "M100 80 Q200 40 300 100", delay: 0 },
                       { d: "M100 80 Q150 140 250 80", delay: 1 },
                       { d: "M300 100 Q200 160 100 80", delay: 2 }
                     ].map((line, i) => (
                       <motion.path 
                         key={i}
                         initial={{ pathLength: 0, opacity: 0 }}
                         animate={{ pathLength: 1, opacity: 1 }}
                         transition={{ duration: 2, delay: line.delay, repeat: Infinity }}
                         d={line.d} 
                         fill="none" 
                         stroke="rgba(59,130,246,0.2)" 
                         strokeWidth="0.5" 
                       />
                     ))}
                     
                     {/* Glowing Hub Nodes */}
                     {[
                       { x: 100, y: 80 }, { x: 300, y: 100 }, { x: 250, y: 80 }
                     ].map((node, i) => (
                       <g key={i}>
                          <circle cx={node.x} cy={node.y} r="2" fill="#3B82F6" className="shadow-[0_0_10px_#3B82F6]" />
                          <circle cx={node.x} cy={node.y} r="6" fill="rgba(59,130,246,0.1)" />
                       </g>
                     ))}
                  </svg>
                  
                  {/* Telemetry Labels (Layered) */}
                  <div className="absolute top-4 left-4 space-y-1">
                     <div className="text-[7px] font-black text-blue-400 uppercase tracking-widest">Latency_Opt_01</div>
                     <div className="text-[12px] font-bold text-white">0.8ms</div>
                  </div>
                  <div className="absolute bottom-4 right-4 text-right">
                     <div className="text-[7px] font-black text-white/20 uppercase tracking-widest">Infrastructure Health</div>
                     <div className="text-[10px] font-bold text-emerald-400">NOMINAL</div>
                  </div>
               </div>

               {/* Metrics Strip */}
               <div className="mt-auto px-3.5 pb-3.5 grid grid-cols-2 gap-4 border-t border-white/5 pt-3.5">
                  {[
                    { l: "Global Regions", v: "42" },
                    { l: "System Uptime", v: "99.995%" }
                  ].map((m, i) => (
                    <div key={i} className="space-y-0.5">
                       <div className="text-[14px] font-bold text-white tracking-tighter">{m.v}</div>
                       <div className="text-[7px] font-black text-white/20 uppercase tracking-widest">{m.l}</div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
