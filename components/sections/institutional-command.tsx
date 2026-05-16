"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Activity, Brain, Clock, Globe, Layers, FileCheck, 
  Mic, Video, Monitor, Users, Smile, MessageSquare, MoreHorizontal,
  ArrowUpRight, ShieldCheck, Zap, Globe2, ChevronRight, CheckCircle2,
  AlertCircle, BarChart3, TrendingUp, Search, Radio, Wifi, 
  Bell, Share2, PhoneOff, Settings, Info, Shield, Target, Play,
  Cpu, Network, Database, Lock
} from "lucide-react";
import { cn } from "@/lib/utils";

export function InstitutionalCommandCenter() {
  return (
    <section className="bg-[#050816] relative py-24 lg:py-32 overflow-hidden min-h-[1000px] flex items-center">
      
      {/* 1. CINEMATIC ATMOSPHERE & LIGHTING */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Core Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-[radial-gradient(circle,rgba(245,184,46,0.05),transparent_70%)]" />
        
        {/* Secondary Blue Accents */}
        <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(91,231,196,0.02),transparent_60%)]" />
        
        {/* Tech Grid System */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "64px 64px" }} />
        
        {/* Moving Data Streams (Visual Texture) */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "100% 4px" }} />
      </div>

      <div className="max-w-[1440px] mx-auto px-10 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-20 items-center">
          
          {/* LEFT: CINEMATIC NARRATIVE */}
          <div className="flex flex-col max-w-[500px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <span className="text-[11px] font-black text-[#f5b82e] uppercase tracking-[0.5em] mb-6 block">
                GLOBAL AI COMMAND
              </span>
              <h2 className="text-[64px] font-bold text-white leading-[0.9] tracking-[-0.06em] mb-10">
                Built for <br /> intelligent <br /> 
                <span className="text-[#f5b82e] italic relative">
                  delivery.
                  <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-[#f5b82e] to-transparent opacity-30" />
                </span>
              </h2>
              <p className="text-[18px] text-white/40 leading-relaxed font-medium">
                OYEN GRID is the operating system for institutional programme coordination—orchestrating global infrastructure with autonomous intelligence.
              </p>
            </motion.div>

            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                 <SimpleFeature icon={Cpu} label="AI Orchestration" />
                 <SimpleFeature icon={Network} label="Global Sync" />
                 <SimpleFeature icon={Database} label="Knowledge Layer" />
                 <SimpleFeature icon={Shield} label="Governance" />
              </div>
              
              <div className="pt-10 flex items-center gap-8">
                 <button className="h-16 px-10 rounded-2xl bg-[#f5b82e] text-black font-black text-[13px] uppercase tracking-widest hover:brightness-110 transition-all shadow-[0_20px_60px_rgba(245,184,46,0.2)] active:scale-95">
                    Initialize Protocol
                 </button>
                 <button className="group flex items-center gap-3 text-white/40 hover:text-white transition-colors">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#f5b82e] transition-colors">
                       <Play className="w-4 h-4 fill-white/20 group-hover:fill-[#f5b82e]" />
                    </div>
                    <span className="text-[12px] font-black uppercase tracking-widest">System Preview</span>
                 </button>
              </div>
            </div>
          </div>

          {/* CENTER: DOMINANT COMMAND INTERFACE (CINEMATIC) */}
          <div className="relative h-[700px] flex items-center justify-center">
            {/* 1. THE CORE ORCHESTRATOR */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full aspect-[4/3] max-w-[800px] rounded-[48px] bg-[#0A0E18]/60 backdrop-blur-3xl border border-white/10 shadow-[0_80px_160px_rgba(0,0,0,0.8),inset_0_0_100px_rgba(245,184,46,0.02)] overflow-hidden flex flex-col group"
            >
              {/* Internal Holographic Grid */}
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(245,184,46,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(245,184,46,0.2) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
              
              {/* Top Operational Bar */}
              <div className="h-[64px] border-b border-white/[0.08] px-10 flex items-center justify-between bg-white/[0.02]">
                 <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2.5">
                       <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                       <span className="text-[11px] font-black text-white/40 uppercase tracking-[0.3em]">SYSTEM_STABLE</span>
                    </div>
                    <div className="h-4 w-px bg-white/10" />
                    <span className="text-[12px] font-bold text-white/70">ORCHESTRATION_CLUSTER_04</span>
                 </div>
                 <div className="flex items-center gap-6">
                    <div className="text-[12px] font-mono text-white/30 tracking-widest">LATENCY: 0.04ms</div>
                    <Settings className="w-4 h-4 text-white/20" />
                 </div>
              </div>

              {/* Central Visualization: Global Infrastructure Map */}
              <div className="flex-1 relative">
                 <Image 
                   src="/operational-map.png" 
                   alt="Global Sync" 
                   fill 
                   className="object-cover opacity-[0.15] grayscale transition-transform duration-[60s] group-hover:scale-110"
                 />
                 {/* Floating Orchestration HUDs */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-[400px] h-[400px] rounded-full border border-[#f5b82e]/20 flex items-center justify-center"
                    >
                       <div className="w-[300px] h-[300px] rounded-full border border-[#f5b82e]/10 flex items-center justify-center">
                          <div className="w-[200px] h-[200px] rounded-full border border-[#f5b82e]/5" />
                       </div>
                    </motion.div>
                 </div>

                 {/* Core Intelligence Overlay */}
                 <div className="absolute bottom-12 left-12 right-12 flex items-end justify-between">
                    <div className="space-y-4">
                       <div className="text-[11px] font-black text-white/20 uppercase tracking-[0.4em]">Autonomous Facilitator</div>
                       <div className="flex items-center gap-6">
                          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 overflow-hidden relative">
                             <Image src="/institutional-leader-v2.png" alt="Facilitator" fill className="object-cover opacity-60" />
                          </div>
                          <div>
                             <div className="text-[18px] font-bold text-white mb-1">Director of Systems</div>
                             <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#f5b82e]" />
                                <span className="text-[10px] font-black text-[#f5b82e]/60 uppercase tracking-widest">Operational Core</span>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div className="text-right space-y-2">
                       <div className="text-[32px] font-bold text-white tracking-tighter">1,240+</div>
                       <div className="text-[11px] font-black text-white/20 uppercase tracking-[0.2em]">Live Nodes Connected</div>
                    </div>
                 </div>
              </div>

              {/* Bottom Navigation System */}
              <div className="h-[72px] border-t border-white/[0.08] px-10 flex items-center gap-10 bg-black/40">
                 <NavBtn icon={Activity} label="Monitoring" active />
                 <NavBtn icon={Brain} label="Intelligence" />
                 <NavBtn icon={Globe} label="Network" />
                 <NavBtn icon={Lock} label="Security" />
                 <div className="ml-auto flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Secure_Protocol_Active</span>
                 </div>
              </div>
            </motion.div>

            {/* 2. FLOATING INTELLIGENCE CARDS (Absolute Positioned around core) */}
            
            {/* Card: Intelligence Stream */}
            <motion.div 
              initial={{ opacity: 0, x: 40, y: -40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute top-[10%] -right-10 w-[280px] p-6 rounded-[24px] bg-[#0A0E18]/40 backdrop-blur-2xl border border-white/10 shadow-2xl space-y-4"
            >
               <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                     <Brain className="w-4 h-4 text-[#f5b82e]" />
                     <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.3em]">AI Stream</span>
                  </div>
                  <div className="px-2 py-0.5 rounded bg-[#f5b82e]/10 text-[#f5b82e] text-[8px] font-black uppercase">Active</div>
               </div>
               <div className="text-[12px] text-white/50 leading-relaxed font-medium italic">
                  "Network synchronization at 99.8%. Orchestrating next delivery sequence in Cluster 04."
               </div>
               <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">Confidence</span>
                  <span className="text-[10px] text-[#f5b82e] font-bold">98%</span>
               </div>
            </motion.div>

            {/* Card: Operational Health */}
            <motion.div 
              initial={{ opacity: 0, x: -40, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -left-10 w-[240px] p-6 rounded-[24px] bg-[#0A0E18]/40 backdrop-blur-2xl border border-white/10 shadow-2xl space-y-4"
            >
               <div className="flex items-center gap-3 mb-2">
                  <Activity className="w-4 h-4 text-[#f5b82e]" />
                  <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.3em]">System Health</span>
               </div>
               <div className="flex items-end gap-3">
                  <div className="text-[32px] font-bold text-white tracking-tighter leading-none">94.8%</div>
                  <TrendingUp className="w-4 h-4 text-emerald-500 mb-1" />
               </div>
               <div className="space-y-1.5">
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full w-[94.8%] bg-[#f5b82e]" />
                  </div>
                  <div className="text-[9px] text-white/20 font-bold uppercase tracking-widest">Uptime Performance</div>
               </div>
            </motion.div>

            {/* Card: Live Sync Nodes */}
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -bottom-16 right-20 w-[320px] p-6 rounded-[32px] bg-[#0A0E18]/40 backdrop-blur-2xl border border-white/10 shadow-2xl"
            >
               <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                     <Radio className="w-4 h-4 text-[#f5b82e]" />
                     <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.3em]">Live Node Sync</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#f5b82e]/60">0.04ms</span>
               </div>
               <div className="flex gap-2">
                  {[1,2,3,4,5,6].map(i => (
                    <div key={i} className="flex-1 h-8 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#f5b82e] animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                    </div>
                  ))}
               </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

function SimpleFeature({ icon: Icon, label }: { icon: any, label: string }) {
  return (
    <div className="flex items-center gap-4 group cursor-default">
      <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-[#f5b82e] transition-colors duration-500">
         <Icon className="w-4.5 h-4.5 text-white/30 group-hover:text-[#f5b82e] transition-colors" />
      </div>
      <span className="text-[13px] font-bold text-white/50 group-hover:text-white transition-colors tracking-tight">{label}</span>
    </div>
  );
}

function NavBtn({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <div className={cn(
      "flex items-center gap-3 cursor-pointer group transition-all",
      active ? "opacity-100" : "opacity-30 hover:opacity-100"
    )}>
       <Icon className={cn("w-4 h-4", active ? "text-[#f5b82e]" : "text-white")} />
       <span className="text-[10px] font-black uppercase tracking-[0.2em]">{label}</span>
    </div>
  );
}
