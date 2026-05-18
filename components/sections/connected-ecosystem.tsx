"use client";

import { motion } from "framer-motion";
import { Users, FileText, CheckCircle, Database, Shield, Zap, Target, Activity, Cpu, Network, Radio, Link as LinkIcon, BarChart } from "lucide-react";
import { cn } from "@/lib/utils";

const leftInputs = [
  { title: "Participants", metric: "12M+ Active", icon: Users },
  { title: "Facilitators", metric: "Global Nodes", icon: Radio },
  { title: "Cohorts", metric: "Synchronized", icon: Network },
  { title: "Sessions", metric: "Live Delivery", icon: Activity },
  { title: "Assessments", metric: "Verified", icon: FileText },
  { title: "Resources", metric: "Distributed", icon: Database },
];

const rightOutputs = [
  { title: "Delivery Precision", metric: "99.9%", icon: Target },
  { title: "Operational Visibility", metric: "Real-time", icon: Zap },
  { title: "Attendance Intelligence", metric: "Automated", icon: CheckCircle },
  { title: "Governance Compliance", metric: "SOC2", icon: Shield },
  { title: "Enterprise Coordination", metric: "Scaled", icon: Cpu },
  { title: "Programme Reliability", metric: "Guaranteed", icon: BarChart },
];

const bottomMetrics = [
  "99.99% Operational Uptime",
  "42 Active Infrastructure Nodes",
  "12M+ Participants Coordinated",
  "0.8ms Global Sync Latency",
  "480K Secure Cohorts"
];

export function ConnectedEcosystem() {
  return (
    <section className="relative py-32 bg-[#02040A] overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-[radial-gradient(ellipse,rgba(232,184,74,0.03),transparent_70%)] opacity-80" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.015] mix-blend-overlay" />
      </div>

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#E8B84A]/5 border border-[#E8B84A]/10 mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84A] shadow-[0_0_10px_#E8B84A] animate-pulse" />
            <span className="text-[10px] font-black text-[#E8B84A] uppercase tracking-[0.25em]">Connected Operational Ecosystem</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-[1.1]"
          >
            The infrastructure layer behind coordinated institutional delivery.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[16px] text-white/50 max-w-2xl leading-relaxed font-medium"
          >
            OYEN GRID connects participants, programmes, facilitators, analytics and operational intelligence into one synchronized delivery ecosystem.
          </motion.p>
        </div>

        {/* ECOSYSTEM ARCHITECTURE */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 mb-24">
          
          {/* Animated Connecting Lines (Desktop Behind) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] -translate-y-1/2 z-0">
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E8B84A]/10 to-transparent" />
             <motion.div 
               className="absolute top-0 left-0 h-full w-[200px] bg-gradient-to-r from-transparent via-[#E8B84A]/40 to-transparent"
               animate={{ x: ["-100%", "700%"] }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
             />
          </div>

          {/* LEFT PANEL: Inputs */}
          <div className="w-full lg:w-[320px] shrink-0 grid grid-cols-2 lg:grid-cols-1 gap-4 relative z-10">
            {leftInputs.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.015] border border-white/[0.04] backdrop-blur-md hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-[#E8B84A]/10 group-hover:border-[#E8B84A]/20 transition-all duration-300">
                    <item.icon className="w-4 h-4 text-white/40 group-hover:text-[#E8B84A] transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-white/90 group-hover:text-white transition-colors">{item.title}</h4>
                    <p className="text-[10px] font-black text-[#E8B84A]/60 uppercase tracking-widest mt-0.5">{item.metric}</p>
                  </div>
                </div>
                <div className="hidden lg:flex w-2 h-2 rounded-full bg-[#E8B84A]/20 group-hover:bg-[#E8B84A] group-hover:shadow-[0_0_10px_#E8B84A] transition-all duration-300" />
              </motion.div>
            ))}
          </div>

          {/* CENTER CORE */}
          <div className="relative shrink-0 flex items-center justify-center w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] z-10">
            {/* Outer Rings */}
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }} 
              className="absolute inset-0 rounded-full border border-dashed border-[#E8B84A]/10 opacity-50" 
            />
            <motion.div 
              animate={{ rotate: -360 }} 
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }} 
              className="absolute inset-[30px] lg:inset-[40px] rounded-full border border-[#E8B84A]/5" 
            />
            
            {/* Core Glow */}
            <div className="absolute inset-[60px] lg:inset-[80px] rounded-full bg-[#E8B84A]/5 blur-3xl" />
            
            {/* Core Node */}
            <div className="absolute inset-[60px] lg:inset-[80px] rounded-full bg-[#040816] border border-[#E8B84A]/15 shadow-[0_0_40px_rgba(232,184,74,0.1),inset_0_0_40px_rgba(232,184,74,0.05)] backdrop-blur-xl flex flex-col items-center justify-center text-center group hover:border-[#E8B84A]/30 transition-all duration-700">
               <div className="relative mb-5">
                 <div className="w-4 h-4 rounded-full bg-[#E8B84A] shadow-[0_0_20px_#E8B84A] z-10 relative" />
                 <div className="absolute inset-0 w-4 h-4 rounded-full bg-[#E8B84A]/40 animate-ping" />
                 <div className="absolute -inset-2 rounded-full border border-[#E8B84A]/30 animate-pulse" />
               </div>
               
               <h3 className="text-[12px] lg:text-[13px] font-black text-white tracking-[0.15em] mb-1.5 drop-shadow-sm">
                 OYEN GRID
               </h3>
               <p className="text-[9px] font-black text-[#E8B84A] uppercase tracking-[0.3em]">
                 Operational Core
               </p>

               {/* Tiny internal telemetry */}
               <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
                 {[40, 70, 45, 90, 60].map((h, i) => (
                   <motion.div 
                     key={i}
                     className="w-1 bg-[#E8B84A]"
                     animate={{ height: [4, h/3, 4] }}
                     transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                   />
                 ))}
               </div>
            </div>
          </div>

          {/* RIGHT PANEL: Outputs */}
          <div className="w-full lg:w-[320px] shrink-0 grid grid-cols-2 lg:grid-cols-1 gap-4 relative z-10">
            {rightOutputs.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.015] border border-white/[0.04] backdrop-blur-md hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 group flex-row-reverse lg:flex-row"
              >
                <div className="hidden lg:flex w-2 h-2 rounded-full bg-[#E8B84A]/20 group-hover:bg-[#E8B84A] group-hover:shadow-[0_0_10px_#E8B84A] transition-all duration-300" />
                <div className="flex items-center gap-4 flex-row-reverse lg:flex-row text-right lg:text-left w-full lg:w-auto">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-[#E8B84A]/10 group-hover:border-[#E8B84A]/20 transition-all duration-300">
                    <item.icon className="w-4 h-4 text-white/40 group-hover:text-[#E8B84A] transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-white/90 group-hover:text-white transition-colors">{item.title}</h4>
                    <p className="text-[10px] font-black text-[#E8B84A]/60 uppercase tracking-widest mt-0.5">{item.metric}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM INFRASTRUCTURE STRIP */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative rounded-[24px] bg-gradient-to-r from-transparent via-[#E8B84A]/[0.02] to-transparent border border-[#E8B84A]/[0.05] p-[1px] group overflow-hidden"
        >
          {/* Animated border shine */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E8B84A]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          
          <div className="bg-[#02040A] rounded-[23px] py-6 px-8 flex flex-wrap items-center justify-center lg:justify-between gap-y-6 gap-x-4">
             {bottomMetrics.map((metric, i) => (
               <div key={i} className="flex items-center gap-3">
                  <div className="relative flex items-center justify-center">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84A]/50 shadow-[0_0_8px_rgba(232,184,74,0.3)] relative z-10 group-hover:bg-[#E8B84A] transition-colors" />
                     <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#E8B84A]/20 animate-ping" />
                  </div>
                  <span className="text-[10px] font-bold text-white/60 uppercase tracking-[0.15em] group-hover:text-white/90 transition-colors">
                    {metric}
                  </span>
                  {i !== bottomMetrics.length - 1 && (
                    <div className="hidden lg:block w-px h-3 bg-white/10 ml-4" />
                  )}
               </div>
             ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
