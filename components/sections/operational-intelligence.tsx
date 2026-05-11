"use client";

import { motion } from "framer-motion";
import { 
  Shield, Globe, BarChart3, Check, Zap, 
  Activity, ShieldCheck, Lock, Database, Search,
  ArrowUpRight, RefreshCw, Cpu, Server, Network
} from "lucide-react";
import { cn } from "@/lib/utils";

const metrics = {
  analytics: [
    { label: "Attendance Rate", val: "97%" },
    { label: "Completion Rate", val: "74%" },
    { label: "Engagement Score", val: "92%" },
    { label: "Session Quality", val: "4.8/5" }
  ],
  governance: [
    "Role-based access control",
    "End-to-end encryption",
    "Audit logs and activity tracking",
    "Compliance-ready infrastructure"
  ],
  scale: [
    { label: "Uptime", val: "99.995%" },
    { label: "Global Regions", val: "6" },
    { label: "Data Centers", val: "12" },
    { label: "Avg Response", val: "0.8ms" }
  ]
};

export function OperationalIntelligence() {
  return (
    <section className="py-20 bg-[#04060C] relative overflow-hidden border-b border-white/5">
      
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(245,185,66,0.03),transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-3 gap-4 items-stretch">
          
          {/* CARD 1: OPERATIONAL ANALYTICS - DASHBOARD UI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative p-5 rounded-[22px] bg-[#0A0D16]/40 border border-white/10 backdrop-blur-2xl transition-all duration-700 hover:border-brand-gold/40 flex flex-col min-h-[320px] overflow-hidden"
          >
            {/* Header Telemetry */}
            <div className="flex justify-between items-start mb-4 relative z-20">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                  <h3 className="text-[14px] font-black uppercase tracking-[0.15em] text-white">Operational Analytics</h3>
                </div>
                <p className="text-[10px] text-white/40 max-w-[180px] leading-relaxed font-medium">Data-driven orchestration and real-time delivery insights.</p>
              </div>
              <div className="flex gap-2">
                <div className="px-2 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-1.5">
                   <Activity className="w-2.5 h-2.5 text-brand-gold" />
                   <span className="text-[8px] font-black text-brand-gold uppercase tracking-widest">Live Sync</span>
                </div>
              </div>
            </div>

            {/* Metrics Cluster */}
            <div className="grid grid-cols-2 gap-4 relative z-20 mt-2">
               {metrics.analytics.map((m, i) => (
                 <div key={i} className="space-y-0.5 border-l border-white/10 pl-3">
                    <div className="text-[18px] font-bold text-white tracking-tighter">{m.val}</div>
                    <div className="text-[8px] font-black uppercase tracking-[0.1em] text-white/20">{m.label}</div>
                 </div>
               ))}
            </div>

            {/* Dashboard Visual Area */}
            <div className="absolute bottom-4 right-4 left-4 h-32 bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden group-hover:bg-white/[0.04] transition-all duration-700">
               {/* Grid Overlay */}
               <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "12px 12px" }} />
               
               {/* Live Chart Visual */}
               <div className="absolute inset-0 flex items-end justify-between px-4 pb-4 gap-1">
                  {[45, 62, 55, 85, 70, 92, 80, 65, 88].map((h, i) => (
                    <div key={i} className="relative flex-1 group/bar">
                       <motion.div 
                         initial={{ height: 0 }}
                         whileInView={{ height: `${h}%` }}
                         transition={{ delay: 0.3 + (i * 0.05), duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                         className="w-full bg-gradient-to-t from-brand-gold/10 to-brand-gold/40 rounded-t-[2px] relative"
                       >
                          {/* Top Pulse Dot */}
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-gold shadow-[0_0_10px_rgba(245,185,66,1)] opacity-0 group-hover:opacity-100 transition-opacity" />
                       </motion.div>
                    </div>
                  ))}
               </div>

               {/* Floating Chips */}
               <motion.div 
                 animate={{ y: [0, -5, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-4 right-4 px-2 py-1 rounded bg-brand-gold/10 border border-brand-gold/20 backdrop-blur-md flex items-center gap-1.5"
               >
                  <ArrowUpRight className="w-2.5 h-2.5 text-brand-gold" />
                  <span className="text-[8px] font-bold text-brand-gold">+18% Engagement</span>
               </motion.div>
            </div>

            {/* Micro Detail */}
            <div className="absolute top-1/2 right-[-20px] -translate-y-1/2 opacity-[0.03] rotate-90 select-none pointer-events-none">
               <span className="text-[40px] font-black tracking-[0.5em] text-white">ANALYTICS_CORE</span>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </motion.div>

          {/* CARD 2: GOVERNANCE & SECURITY - SHIELD OPERATING SYSTEM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative p-5 rounded-[22px] bg-[#0A0D16]/40 border border-white/10 backdrop-blur-2xl transition-all duration-700 hover:border-emerald-500/40 flex flex-col min-h-[320px] overflow-hidden"
          >
            {/* Header Telemetry */}
            <div className="flex justify-between items-start mb-4 relative z-20">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <h3 className="text-[14px] font-black uppercase tracking-[0.15em] text-white">Governance & Security</h3>
                </div>
                <p className="text-[10px] text-white/40 max-w-[180px] leading-relaxed font-medium">Enterprise encryption protocols and secure delivery control.</p>
              </div>
              <div className="px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1.5">
                 <ShieldCheck className="w-2.5 h-2.5 text-emerald-500" />
                 <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">Protected</span>
              </div>
            </div>

            {/* Security Checklist UI */}
            <div className="space-y-2.5 relative z-20 mt-2">
              {metrics.governance.map((item, i) => (
                <div key={i} className="flex items-center gap-3 group/item">
                   <div className="w-4 h-4 rounded-md bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover/item:border-emerald-500/50 transition-colors">
                      <Check className="w-2.5 h-2.5 text-emerald-500" />
                   </div>
                   <span className="text-[10px] font-bold text-white/40 group-hover:text-white/80 transition-colors duration-500">{item}</span>
                </div>
              ))}
            </div>

            {/* Visual: Cinematic Holographic Shield */}
            <div className="absolute bottom-4 right-4 left-4 h-32 flex items-center justify-center pointer-events-none overflow-hidden">
               <div className="relative">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-40px] border border-dashed border-emerald-500/10 rounded-full"
                  />
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-25px] border border-emerald-500/20 rounded-full"
                  />
                  <div className="relative z-10 p-6 bg-emerald-500/5 rounded-full border border-emerald-500/20 backdrop-blur-xl shadow-[0_0_40px_rgba(16,185,129,0.1)]">
                     <Shield className="w-12 h-12 text-emerald-500/60" strokeWidth={1} />
                  </div>
                  
                  {/* Scan Line */}
                  <motion.div 
                    animate={{ top: ["-20%", "120%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-10 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent z-20"
                  />
               </div>
            </div>

            {/* Floating Status Badges */}
            <div className="absolute top-24 right-8 flex flex-col gap-2 z-20">
               {["Verified", "Encrypted"].map((s, i) => (
                 <div key={i} className="px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/10 flex items-center gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
                    <div className="w-1 h-1 rounded-full bg-emerald-500" />
                    <span className="text-[7px] font-black uppercase text-white/60 tracking-tighter">{s}</span>
                 </div>
               ))}
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </motion.div>

          {/* CARD 3: BUILT FOR SCALE - INFRASTRUCTURE LAYER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative p-5 rounded-[22px] bg-[#0A0D16]/40 border border-white/10 backdrop-blur-2xl transition-all duration-700 hover:border-blue-500/40 flex flex-col min-h-[320px] overflow-hidden"
          >
            {/* Header Telemetry */}
            <div className="flex justify-between items-start mb-4 relative z-20">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  <h3 className="text-[14px] font-black uppercase tracking-[0.15em] text-white">Built for Scale</h3>
                </div>
                <p className="text-[10px] text-white/40 max-w-[180px] leading-relaxed font-medium">Global infrastructure designed for high-stakes programme delivery.</p>
              </div>
              <div className="px-2 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 flex items-center gap-1.5">
                 <RefreshCw className="w-2.5 h-2.5 text-blue-500 animate-spin-slow" />
                 <span className="text-[8px] font-black text-blue-500 uppercase tracking-widest">Stable</span>
              </div>
            </div>

            {/* Telemetry Metrics Area */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 relative z-20 mt-2">
              {metrics.scale.map((m, i) => (
                <div key={i} className="space-y-0.5 border-r border-white/10 pr-3">
                  <div className="text-[16px] font-bold text-white tracking-tighter">{m.val}</div>
                  <div className="text-[8px] font-black uppercase tracking-[0.1em] text-white/20">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Visual: Cinematic World Map with Connected Nodes */}
            <div className="absolute bottom-4 right-4 left-4 h-32 bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden group-hover:bg-white/[0.04] transition-all duration-700">
               <div className="absolute inset-0 flex items-center justify-center">
                  {/* Simplified World Map SVG Dots */}
                  <div className="w-full h-full opacity-10 flex items-center justify-center p-4">
                     <div className="grid grid-cols-12 grid-rows-6 gap-1.5 w-full h-full">
                        {Array.from({ length: 72 }).map((_, i) => (
                          <div key={i} className={cn(
                            "w-0.5 h-0.5 rounded-full transition-colors duration-1000",
                            Math.random() > 0.7 ? "bg-white/40" : "bg-white/5"
                          )} />
                        ))}
                     </div>
                  </div>

                  {/* Operational Nodes */}
                  <div className="absolute inset-0">
                     {[
                       { top: "30%", left: "20%" },
                       { top: "50%", left: "45%" },
                       { top: "40%", left: "75%" },
                       { top: "70%", left: "60%" }
                     ].map((pos, i) => (
                       <motion.div 
                         key={i}
                         animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }}
                         transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                         className="absolute w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]"
                         style={{ top: pos.top, left: pos.left }}
                       />
                     ))}
                     
                     {/* Connection Lines (Simulated with SVG) */}
                     <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 120">
                        <motion.path 
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: 1 }}
                          d="M60 40 Q150 20 220 50" 
                          fill="none" 
                          stroke="rgba(96,165,250,0.15)" 
                          strokeWidth="0.5" 
                        />
                        <motion.path 
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: 1.5 }}
                          d="M135 60 Q180 80 220 50" 
                          fill="none" 
                          stroke="rgba(96,165,250,0.15)" 
                          strokeWidth="0.5" 
                        />
                     </svg>
                  </div>
               </div>

               {/* Live Status Label */}
               <div className="absolute bottom-3 left-4 flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[7px] font-black uppercase text-blue-400 tracking-widest">42 Active Regions</span>
               </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
