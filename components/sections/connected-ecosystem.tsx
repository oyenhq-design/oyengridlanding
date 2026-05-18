"use client";

import { motion } from "framer-motion";
import { Users, Shield, Zap, Activity, Cpu, Network, Bot, Globe, CheckCircle2, Server, LineChart } from "lucide-react";
import { cn } from "@/lib/utils";

const microIndicators = [
  { label: "AI Coordination Active", icon: Bot },
  { label: "Multi-Region Infrastructure", icon: Globe },
  { label: "Governance Monitoring", icon: Shield },
  { label: "Operational Telemetry", icon: Activity },
  { label: "Enterprise Synchronization", icon: Network },
];

const infrastructureClusters = [
  { 
    title: "Programme Systems", 
    desc: "Structured lifecycle coordination and delivery orchestration.",
    icon: Network,
    delay: 0.1,
    className: "lg:-ml-8 z-10"
  },
  { 
    title: "Participant Intelligence", 
    desc: "Attendance telemetry, engagement visibility, and operational analytics.",
    icon: Users,
    delay: 0.2,
    className: "lg:ml-12 z-20"
  },
  { 
    title: "Governance Layer", 
    desc: "Enterprise-grade oversight, compliance systems, and audit tracking.",
    icon: Shield,
    delay: 0.3,
    className: "lg:-ml-4 z-10"
  },
  { 
    title: "AI Coordination", 
    desc: "Operational recommendations, summaries, and workflow intelligence.",
    icon: Bot,
    delay: 0.4,
    className: "lg:ml-8 z-20"
  },
  { 
    title: "Analytics Infrastructure", 
    desc: "Real-time institutional telemetry and synchronized reporting systems.",
    icon: LineChart,
    delay: 0.5,
    className: "lg:-ml-12 z-10"
  }
];

const bottomStrip = [
  "Live Operational Sync", "AI Monitoring Active", "Governance Infrastructure", 
  "Enterprise Delivery Layer", "Multi-Region Coordination", "Real-Time Telemetry"
];

export function ConnectedEcosystem() {
  return (
    <section className="relative py-32 lg:py-40 bg-[#02040A] overflow-hidden">
      {/* Cinematic Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[800px] bg-[radial-gradient(ellipse,rgba(232,184,74,0.02),transparent_70%)] opacity-80" />
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(16,185,129,0.015),transparent_70%)] opacity-50" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.015] mix-blend-overlay" />
        
        {/* Soft moving particles (CSS animation via framer motion could be heavy, using subtle static textures) */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        
        {/* ASYMMETRICAL LAYOUT */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 mb-24 lg:mb-32">
          
          {/* LEFT SIDE: Headline & Indicators */}
          <div className="w-full lg:w-[480px] shrink-0 relative z-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h4 className="text-[10px] font-black text-[#E8B84A]/70 uppercase tracking-[0.25em] mb-6">
                Synchronized Operational Infrastructure
              </h4>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] tracking-tight mb-8">
                The operational core powering <br />
                <span className="text-[#E8B84A] italic font-serif">institutional delivery.</span>
              </h2>
              <p className="text-[16px] text-white/50 leading-relaxed font-medium max-w-[520px]">
                OYEN GRID synchronizes programmes, participants, facilitators, analytics, governance systems, and operational intelligence into one coordinated infrastructure layer.
              </p>
            </motion.div>

            {/* Micro Infrastructure Indicators */}
            <div className="flex flex-col gap-3">
              {microIndicators.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-6 h-6 rounded-md bg-white/[0.02] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#E8B84A]/10 group-hover:border-[#E8B84A]/20 transition-all duration-500">
                    <item.icon className="w-3 h-3 text-white/30 group-hover:text-[#E8B84A] transition-colors duration-500" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-[#10b981] group-hover:shadow-[0_0_8px_#10b981] transition-all duration-500" />
                    <span className="text-[12px] font-medium text-white/40 group-hover:text-white/80 transition-colors duration-500">{item.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CENTER: Massive Operational Core */}
          <div className="relative shrink-0 flex items-center justify-center w-[340px] h-[340px] lg:w-[500px] lg:h-[500px] z-10">
            
            {/* Flowing connection lines (Desktop) */}
            <svg className="hidden lg:block absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20" viewBox="0 0 800 800">
              <motion.path d="M400,400 C600,200 700,300 800,250" fill="none" stroke="#E8B84A" strokeWidth="1" strokeDasharray="4 8" animate={{ strokeDashoffset: [0, -100] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />
              <motion.path d="M400,400 C500,600 700,500 800,550" fill="none" stroke="#E8B84A" strokeWidth="1" strokeDasharray="4 8" animate={{ strokeDashoffset: [0, 100] }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} />
              <motion.path d="M400,400 C600,400 650,450 800,400" fill="none" stroke="#E8B84A" strokeWidth="1" strokeDasharray="4 8" animate={{ strokeDashoffset: [0, -100] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
              
              {/* Lines to left side as well to show full sync */}
              <motion.path d="M400,400 C200,300 100,400 0,350" fill="none" stroke="#E8B84A" strokeWidth="1" strokeDasharray="4 8" animate={{ strokeDashoffset: [0, 100] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} />
            </svg>

            {/* Layered Concentric Rings */}
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-dashed border-white/5 opacity-50" />
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} className="absolute inset-[40px] rounded-full border border-white/[0.02]" />
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-[80px] rounded-full border border-[#E8B84A]/10 border-t-[#E8B84A]/30 opacity-70" />
            
            {/* Ambient Core Glow */}
            <div className="absolute inset-[100px] rounded-full bg-[#E8B84A]/5 blur-[60px]" />
            
            {/* The Intelligent Core */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-[110px] lg:inset-[140px] rounded-full bg-gradient-to-b from-[#040816] to-[#010205] border border-[#E8B84A]/20 shadow-[0_0_80px_rgba(232,184,74,0.15),inset_0_0_60px_rgba(232,184,74,0.05)] backdrop-blur-2xl flex flex-col items-center justify-center text-center group"
            >
               {/* Internal Operational Waveforms */}
               <div className="absolute inset-0 rounded-full overflow-hidden opacity-30 flex items-center justify-center pointer-events-none">
                  <div className="w-[150%] h-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,rgba(232,184,74,0.05)_0deg,transparent_60deg,rgba(232,184,74,0.05)_180deg,transparent_240deg)] animate-[spin_10s_linear_infinite]" />
               </div>

               <div className="relative z-10 flex flex-col items-center">
                 <h3 className="text-[14px] lg:text-[16px] font-black text-white tracking-[0.2em] mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                   OYEN GRID
                 </h3>
                 <p className="text-[9px] lg:text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] mb-6">
                   Operational Coordination Core
                 </p>
                 
                 <div className="flex items-center gap-2 bg-[#E8B84A]/[0.05] border border-[#E8B84A]/10 px-3 py-1.5 rounded-full">
                   <div className="relative flex items-center justify-center">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] shadow-[0_0_10px_#10b981] z-10" />
                     <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#10b981]/40 animate-ping" />
                   </div>
                   <span className="text-[8px] font-black text-[#10b981] uppercase tracking-[0.2em]">Sync Active</span>
                 </div>
               </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Infrastructure Clusters */}
          <div className="w-full lg:w-[400px] shrink-0 flex flex-col gap-4 relative z-20 mt-12 lg:mt-0">
            {infrastructureClusters.map((cluster, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: cluster.delay, duration: 0.8, ease: "easeOut" }}
                className={cn(
                  "p-5 rounded-[20px] bg-gradient-to-br from-[#040816]/80 to-[#02040A]/90 border border-white/[0.03] backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.5)] group hover:border-[#E8B84A]/20 transition-all duration-700 relative overflow-hidden",
                  cluster.className
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E8B84A]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="flex gap-4 items-start relative z-10">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#E8B84A]/5 group-hover:border-[#E8B84A]/20 group-hover:shadow-[0_0_15px_rgba(232,184,74,0.1)] transition-all duration-500">
                    <cluster.icon className="w-4 h-4 text-white/40 group-hover:text-[#E8B84A] transition-colors duration-500" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-white/90 group-hover:text-white transition-colors duration-500 mb-1.5 tracking-wide">{cluster.title}</h4>
                    <p className="text-[11px] text-white/40 leading-[1.6] group-hover:text-white/60 transition-colors duration-500">
                      {cluster.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* BOTTOM MICRO TRUST STRIP */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-12 border-t border-white/[0.02] relative z-10"
        >
          {bottomStrip.map((item, i) => (
            <div key={i} className="flex items-center gap-2 opacity-30 hover:opacity-100 transition-opacity duration-500">
               <div className="w-1 h-1 rounded-full bg-[#E8B84A] shadow-[0_0_8px_rgba(232,184,74,0.4)]" />
               <span className="text-[9px] font-black text-white uppercase tracking-[0.2em]">{item}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
