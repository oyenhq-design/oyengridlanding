"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Bot, Globe, Activity, CheckCircle2, Server, Cpu, Database, Network } from "lucide-react";
import { cn } from "@/lib/utils";

const trustCards = [
  {
    title: "Enterprise Governance",
    desc: "Role-based operational control with institutional oversight and audit visibility.",
    badge: "ACTIVE",
    icon: Shield
  },
  {
    title: "Secure Coordination",
    desc: "Encrypted communication, participant orchestration, and protected workflows.",
    badge: "VERIFIED",
    icon: Lock
  },
  {
    title: "AI Operational Layer",
    desc: "AI-assisted summaries, engagement monitoring, and intelligent recommendations.",
    badge: "LIVE",
    icon: Bot
  },
  {
    title: "Multi-Region Infrastructure",
    desc: "Distributed infrastructure optimized for synchronized institutional delivery.",
    badge: "GLOBAL",
    icon: Globe
  }
];

const microBadges = [
  "SOC2 Ready", "GDPR Ready", "Enterprise Encryption", "Audit Logs", 
  "AI Monitoring", "Operational Continuity", "Governance Layer", "Secure Delivery Systems"
];

export function EnterpriseTrust() {
  return (
    <section className="relative py-32 bg-[#02040A] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(232,184,74,0.02),transparent_70%)] opacity-60" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[1000px] h-[800px] bg-[radial-gradient(ellipse,rgba(4,8,22,0.8),transparent_70%)] opacity-80" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.015] mix-blend-overlay" />
        {/* Faint telemetry lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <motion.line x1="0" y1="20%" x2="100%" y2="20%" stroke="#E8B84A" strokeWidth="0.5" strokeDasharray="4 8" animate={{ strokeDashoffset: [0, -100] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
          <motion.line x1="0" y1="80%" x2="100%" y2="80%" stroke="#E8B84A" strokeWidth="0.5" strokeDasharray="4 8" animate={{ strokeDashoffset: [0, 100] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 relative z-10 flex flex-col gap-24">
        
        {/* Main 2-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* LEFT COLUMN: Headline & Trust Cards */}
          <div className="w-full lg:w-[480px] shrink-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h4 className="text-[10px] font-black text-[#E8B84A]/70 uppercase tracking-[0.25em] mb-6">
                Enterprise Readiness
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-6">
                Reliable infrastructure for <br />
                <span className="text-[#E8B84A] italic font-serif">institutional operations.</span>
              </h2>
              <p className="text-[15px] text-white/60 leading-relaxed font-medium">
                OYEN GRID is engineered for secure programme orchestration, operational continuity, governance visibility, and AI-assisted institutional delivery at scale.
              </p>
            </motion.div>

            <div className="space-y-4">
              {trustCards.map((card, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-4 rounded-2xl bg-[#040816]/60 border border-white/[0.04] hover:bg-[#040816] hover:border-white/10 transition-all duration-300 backdrop-blur-md overflow-hidden flex items-start gap-4"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E8B84A]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center shrink-0 group-hover:border-[#E8B84A]/20 group-hover:bg-[#E8B84A]/5 transition-all">
                    <card.icon className="w-4.5 h-4.5 text-white/40 group-hover:text-[#E8B84A] transition-colors" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-[14px] font-bold text-white/90 group-hover:text-white transition-colors">{card.title}</h4>
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.05]">
                         <div className="w-1 h-1 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981]" />
                         <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">{card.badge}</span>
                      </div>
                    </div>
                    <p className="text-[12px] text-white/40 leading-relaxed group-hover:text-white/50 transition-colors">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Telemetry / Governance Panel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
             <div className="relative w-full aspect-[4/3] rounded-[32px] bg-[#02040A] border border-white/[0.05] shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col p-8 group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E8B84A]/20 to-transparent opacity-50" />
                
                {/* Panel Header */}
                <div className="flex items-start justify-between mb-12">
                   <div>
                     <h5 className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] mb-2">Global Operational Status</h5>
                     <div className="flex items-center gap-3">
                        <div className="relative flex items-center justify-center">
                           <div className="w-3 h-3 rounded-full bg-[#10b981] shadow-[0_0_15px_#10b981] relative z-10" />
                           <div className="absolute inset-0 w-6 h-6 rounded-full bg-[#10b981]/20 animate-ping" />
                        </div>
                        <span className="text-4xl font-bold text-white tracking-tight">STABLE</span>
                     </div>
                   </div>
                   <div className="flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-white/10" />
                     <div className="w-2 h-2 rounded-full bg-white/10" />
                     <div className="w-2 h-2 rounded-full bg-white/10" />
                   </div>
                </div>

                {/* Main Metrics Grid */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-10 flex-1">
                   {/* Metric 1 */}
                   <div className="space-y-3">
                     <div className="flex justify-between items-end">
                       <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Uptime</span>
                       <span className="text-[10px] font-bold text-[#10b981]">99.99%</span>
                     </div>
                     <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                       <motion.div className="h-full bg-[#10b981]" initial={{ width: 0 }} whileInView={{ width: "99.99%" }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.2 }} />
                     </div>
                     {/* subtle waveform graph */}
                     <div className="h-6 flex items-end gap-1 opacity-20">
                       {[10, 15, 8, 12, 16, 14, 18, 15, 20].map((h, i) => (
                         <motion.div key={i} className="w-full bg-[#10b981]" animate={{ height: [h, h*1.5, h] }} transition={{ duration: 2, repeat: Infinity, delay: i*0.1 }} />
                       ))}
                     </div>
                   </div>

                   {/* Metric 2 */}
                   <div className="space-y-3">
                     <div className="flex justify-between items-end">
                       <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Avg Latency</span>
                       <span className="text-[10px] font-bold text-[#E8B84A]">0.8ms</span>
                     </div>
                     <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                       <motion.div className="h-full bg-[#E8B84A]" initial={{ width: 0 }} whileInView={{ width: "15%" }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.3 }} />
                     </div>
                     <div className="flex items-center gap-2 mt-2 opacity-50">
                        <Activity className="w-3 h-3 text-[#E8B84A]" />
                        <span className="text-[8px] uppercase tracking-widest text-white/40">Sync Nominal</span>
                     </div>
                   </div>
                   
                   {/* Metric 3: System Indicators */}
                   <div className="col-span-2 grid grid-cols-2 gap-4 mt-auto">
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col gap-2 relative overflow-hidden group-hover:border-white/10 transition-colors">
                        <div className="absolute top-0 right-0 p-2"><Cpu className="w-3 h-3 text-[#E8B84A]/30" /></div>
                        <span className="text-[20px] font-bold text-white">42</span>
                        <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">Active Regions</span>
                      </div>
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col gap-2 relative overflow-hidden group-hover:border-white/10 transition-colors">
                        <div className="absolute top-0 right-0 p-2"><Database className="w-3 h-3 text-[#E8B84A]/30" /></div>
                        <div className="flex items-center gap-1.5 mt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84A] animate-pulse" />
                          <span className="text-[11px] font-bold text-white">Active</span>
                        </div>
                        <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">AI Orchestration</span>
                      </div>
                   </div>
                </div>

                {/* Floating Chips */}
                <div className="absolute bottom-6 right-6 flex flex-col gap-2 items-end">
                   <div className="px-3 py-1.5 rounded-md bg-[#10b981]/10 border border-[#10b981]/20 flex items-center gap-2 backdrop-blur-md">
                     <CheckCircle2 className="w-3 h-3 text-[#10b981]" />
                     <span className="text-[8px] font-black text-[#10b981] uppercase tracking-widest">Encrypted Layer</span>
                   </div>
                   <div className="px-3 py-1.5 rounded-md bg-[#E8B84A]/10 border border-[#E8B84A]/20 flex items-center gap-2 backdrop-blur-md">
                     <Shield className="w-3 h-3 text-[#E8B84A]" />
                     <span className="text-[8px] font-black text-[#E8B84A] uppercase tracking-widest">Audit-Ready Logging</span>
                   </div>
                </div>

                {/* Animated Governance Ring (Background) */}
                <div className="absolute -right-20 -top-20 w-[400px] h-[400px] border border-[#E8B84A]/5 rounded-full pointer-events-none flex items-center justify-center">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="w-full h-full border border-dashed border-[#E8B84A]/10 rounded-full" />
                </div>
             </div>
          </motion.div>

        </div>

        {/* BOTTOM MICRO TRUST ROW */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-8 border-t border-white/[0.04] relative z-10">
          {microBadges.map((badge, i) => (
            <div key={i} className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity duration-300">
               <Shield className="w-3 h-3 text-[#E8B84A]" />
               <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">{badge}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
