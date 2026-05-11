"use client";

import { motion } from "framer-motion";
import { LayoutGrid, Users, Activity, PlayCircle, ShieldCheck, PieChart, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    title: "Programme Governance",
    desc: "Orchestrate multi-session programmes with centralized coordination and structural oversight.",
    icon: LayoutGrid,
    offset: "mt-0"
  },
  {
    title: "Participant Lifecycle",
    desc: "Unified visibility for cohorts, onboarding protocols and institutional participant management.",
    icon: Users,
    offset: "mt-8"
  },
  {
    title: "Operational Telemetry",
    desc: "Monitor real-time engagement and attendance consistency across distributed delivery nodes.",
    icon: Activity,
    offset: "mt-4"
  },
  {
    title: "Delivery Integrity",
    desc: "Execute structured live sessions with coordinated operational flow and verified outcomes.",
    icon: PlayCircle,
    offset: "mt-12"
  },
  {
    title: "Communication Layer",
    desc: "Establish secure institutional channels between coordinators, trainers and participants.",
    icon: ShieldCheck,
    offset: "mt-6"
  },
  {
    title: "Institutional Intelligence",
    desc: "Generate high-stakes operational insights, verified data and board-ready reporting.",
    icon: PieChart,
    offset: "mt-2"
  }
];

export function PowerfulCapabilities() {
  return (
    <section className="py-32 bg-[#050816] relative overflow-hidden border-b border-white/5">
      
      {/* BACKGROUND ARCHITECTURAL INTELLIGENCE */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
         {/* Animated Operational Flow Lines */}
         <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              d="M0 100 Q 300 150 600 100 T 1200 100" 
              fill="none" 
              stroke="#F5B942" 
              strokeWidth="0.5" 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
            <motion.path 
              d="M-200 400 Q 400 350 800 400 T 1600 400" 
              fill="none" 
              stroke="#F5B942" 
              strokeWidth="0.5" 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 2 }}
            />
         </svg>
         
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-brand-gold/5 blur-[140px] rounded-full" />
         <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
             <div className="w-1 h-1 rounded-full bg-brand-gold animate-pulse" />
             <span className="eyebrow tracking-[0.3em]">OPERATIONAL INFRASTRUCTURE</span>
             <div className="w-1 h-1 rounded-full bg-brand-gold animate-pulse" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[40px] md:text-[54px] font-bold text-white max-w-[900px] mx-auto leading-[1.05] tracking-tighter"
          >
            Everything needed to coordinate <br className="hidden md:block" />
            <span className="text-brand-gold">institutional programme operations.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 items-start">
           {capabilities.map((cap, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               whileHover={{ y: -8 }}
               className={cn(
                 "group relative p-7 rounded-[28px] bg-white/[0.015] border border-white/5 backdrop-blur-md transition-all duration-500 hover:bg-white/[0.04] hover:border-brand-gold/30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)]",
                 cap.offset
               )}
             >
                {/* Blueprint Accent */}
                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-white/5 group-hover:bg-brand-gold/40 transition-colors" />
                
                <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-8 group-hover:border-brand-gold/40 group-hover:bg-brand-gold/5 transition-all duration-500 shadow-inner">
                   <cap.icon className="w-6 h-6 text-brand-gold/40 group-hover:text-brand-gold transition-colors duration-500" />
                </div>
                
                <h3 className="text-[17px] font-bold text-white mb-4 tracking-tight group-hover:text-brand-gold transition-colors duration-500 leading-snug">{cap.title}</h3>
                
                <p className="text-[13px] leading-relaxed text-white/30 group-hover:text-white/50 transition-colors duration-500 mb-6">
                  {cap.desc}
                </p>

                {/* Subtle Telemetry Indicator */}
                <div className="flex items-center gap-2 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                   <div className="w-1 h-1 rounded-full bg-brand-gold" />
                   <span className="text-[9px] font-black text-brand-gold uppercase tracking-widest">Active Capability</span>
                </div>

                {/* Inner Glow Effect */}
                <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
