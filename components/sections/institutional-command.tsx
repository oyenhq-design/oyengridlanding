"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Activity, Brain, Clock, Globe, Layers, FileCheck, 
  Mic, Video, Monitor, Users, Smile, MessageSquare, MoreHorizontal,
  ArrowUpRight, ShieldCheck, Zap, Globe2, ChevronRight, CheckCircle2,
  AlertCircle, BarChart3, TrendingUp, Search, Radio, Wifi, 
  Bell, Share2, PhoneOff, Settings, Info, Shield, Target, Play,
  Download, FileText, FileSpreadsheet, Lock, Cpu, Network, Database,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  { title: "Intelligent Orchestration", desc: "Automated programme coordination.", icon: Cpu },
  { title: "AI Operational Guidance", desc: "Live facilitator intelligence.", icon: Brain },
  { title: "Institutional Control", desc: "Enterprise governance layer.", icon: Shield },
];

const topMetrics = [
  { label: "Operational Health", val: "94.8%", status: "OPTIMAL" },
  { label: "Engagement Quality", val: "A+", status: "STABLE" },
  { label: "Response Rate", val: "92%", status: "ACTIVE" },
  { label: "Coordination Latency", val: "0.04ms", status: "NOMINAL" },
];

export function InstitutionalCommandCenter() {
  return (
    <section className="bg-[#040816] relative py-16 overflow-hidden min-h-[800px] flex items-center selection:bg-[#f5b82e] selection:text-black">
      
      {/* 1. CINEMATIC ATMOSPHERE & VOLUMETRIC LIGHTING */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/institutional-atmosphere.png" 
          alt="Atmosphere" 
          fill 
          className="object-cover opacity-[0.08] blur-[8px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040816] via-transparent to-[#040816]" />
        
        {/* Advanced Tech Grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        
        {/* Layered Lighting Effects */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_top,rgba(245,184,46,0.08),transparent_70%)]" />
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[1400px] h-[700px] bg-[radial-gradient(circle,rgba(245,184,46,0.03),transparent_60%)]" />
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(59,130,246,0.01),transparent_70%)]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[28%_44%_28%] gap-10 items-stretch">
          
          {/* LEFT COLUMN: BRAND & FEATURES */}
          <div className="flex flex-col h-full py-6">
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-8">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-[#f5b82e] shadow-[0_0_12px_#f5b82e]" 
                />
                <span className="text-[10px] font-black text-[#f5b82e] uppercase tracking-[0.6em] opacity-80">
                  LIVE OPERATION COMMAND
                </span>
              </div>
              <h1 className="text-[52px] font-bold text-white leading-[0.9] tracking-[-0.05em] mb-8">
                Built for <br /> intelligent <br /> 
                <span className="text-[#f5b82e] italic relative inline-block">
                  delivery.
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    className="absolute -bottom-2 left-0 h-[1px] bg-gradient-to-r from-[#f5b82e] to-transparent opacity-30" 
                  />
                </span>
              </h1>
              <p className="text-[15px] text-white/40 leading-relaxed font-medium max-w-[320px] tracking-tight">
                The enterprise-grade operating system for global institutional programme coordination and automated delivery.
              </p>
            </div>

            <div className="space-y-6 mb-10">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4 group cursor-default">
                  <div className="w-10 h-10 rounded-[14px] bg-white/[0.02] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#f5b82e]/40 group-hover:bg-[#f5b82e]/5 transition-all duration-500 shadow-xl">
                    <feature.icon className="w-4.5 h-4.5 text-[#f5b82e] opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="pt-0.5">
                    <h3 className="text-[14px] font-bold text-white mb-1 tracking-tight group-hover:text-[#f5b82e] transition-colors">{feature.title}</h3>
                    <p className="text-[12px] text-white/30 leading-snug font-medium">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-12">
               <button className="h-12 px-6 rounded-xl bg-gradient-to-br from-[#f5b82e] via-[#f5b82e] to-[#d49a20] text-black font-black text-[11px] uppercase tracking-[0.2em] hover:brightness-110 transition-all shadow-[0_20px_40px_rgba(245,184,46,0.2),inset_0_2px_4px_rgba(255,255,255,0.4)] active:scale-[0.98] flex items-center gap-2.5">
                  EXPLORE COMMAND
                  <ArrowRight className="w-3.5 h-3.5" />
               </button>
               <button className="h-12 px-6 rounded-xl bg-white/[0.02] border border-white/10 text-white/60 font-black text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-2.5 hover:bg-white/[0.06] hover:text-white transition-all group">
                  <Play className="w-3 h-3 fill-white/20 group-hover:fill-white" />
                  PREVIEW INFRA
               </button>
            </div>

            <div className="flex items-center justify-between gap-10 pr-8">
               <StatItem label="Active Nodes" val="1,248+" />
               <div className="w-px h-8 bg-white/5" />
               <StatItem label="Uptime Sync" val="99.995%" />
               <div className="w-px h-8 bg-white/5" />
               <StatItem label="Geo Zones" val="140+" />
            </div>
          </div>

          {/* CENTER SECTION: MISSION-CRITICAL HUD */}
          <div className="flex flex-col gap-8 relative">
            <div className="flex items-center justify-center gap-4">
               <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
               <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.6em]">OPERATIONAL_COMMAND_HUB</span>
               <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            </div>

            {/* Top Metric Cards: Premium Glass */}
            <div className="grid grid-cols-4 gap-4 px-1">
               {topMetrics.map((m, i) => (
                 <div key={i} className="p-3.5 rounded-[16px] bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-2xl border border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.4)] relative group hover:border-[#f5b82e]/20 transition-all duration-500">
                    <div className="flex items-center justify-between mb-1.5">
                       <span className="text-[7px] font-black text-white/30 uppercase tracking-widest">{m.label}</span>
                       <span className="text-[7px] font-black text-[#f5b82e] opacity-60">{m.status}</span>
                    </div>
                    <div className="text-[14px] font-bold text-white tracking-tight mb-1.5">{m.val}</div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: "70%" }}
                         transition={{ duration: 2, delay: i * 0.2 }}
                         className="h-full bg-gradient-to-r from-[#f5b82e]/40 to-[#f5b82e]" 
                       />
                    </div>
                 </div>
               ))}
            </div>

            {/* MAIN OPERATIONAL PANEL: BELIEVABLE COMPLEXITY */}
            <div className="flex-1 relative rounded-[48px] bg-[#0A0E18]/80 backdrop-blur-3xl border border-white/10 shadow-[0_120px_200px_rgba(0,0,0,0.9),inset_0_0_80px_rgba(245,184,46,0.02)] overflow-hidden group">
               {/* Internal Map Interface with Animated Routes */}
               <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <Image 
                    src="/operational-map.png" 
                    alt="Map" 
                    fill 
                    className="object-cover opacity-[0.2] grayscale group-hover:scale-105 transition-transform duration-[40s] ease-linear"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E18] via-transparent to-[#0A0E18]/40" />
                  
                  {/* Simulated Data Routes (SVG) */}
                  <svg className="absolute inset-0 w-full h-full opacity-30">
                    <motion.path 
                      d="M 200,300 Q 400,250 600,350" 
                      fill="none" 
                      stroke="#f5b82e" 
                      strokeWidth="1" 
                      strokeDasharray="4,4"
                      animate={{ strokeDashoffset: [0, -20] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.path 
                      d="M 150,150 Q 350,100 550,200" 
                      fill="none" 
                      stroke="#f5b82e" 
                      strokeWidth="1" 
                      strokeDasharray="4,4"
                      animate={{ strokeDashoffset: [0, -20] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.path 
                      d="M 500,400 Q 300,450 100,380" 
                      fill="none" 
                      stroke="#f5b82e" 
                      strokeWidth="1" 
                      strokeDasharray="4,4"
                      animate={{ strokeDashoffset: [0, -20] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    />
                  </svg>
               </div>

               {/* Tactical Overlays */}
               <div className="absolute inset-0 p-10 flex flex-col justify-between">
                  <div className="flex items-center justify-between relative z-10">
                     <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.1)]">
                           <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_12px_#ef4444]" />
                           <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">LIVE_SESSION</span>
                        </div>
                        <div className="flex flex-col">
                           <span className="text-[11px] font-black text-white/80 uppercase tracking-[0.25em] mb-0.5">Global Cluster Sync</span>
                           <span className="text-[9px] font-black text-white/20 uppercase tracking-widest leading-none">NODE_ORCHESTRATION_V4.2</span>
                        </div>
                     </div>
                     <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5">
                           <Clock className="w-4 h-4 text-white/30" />
                           <span className="text-[12px] font-mono tracking-[0.2em] text-white/60 font-bold">01:24:58</span>
                        </div>
                     </div>
                  </div>

                  {/* Sidebar HUD */}
                  <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 p-2.5 rounded-[22px] bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl relative z-10">
                     <ToolbarIcon icon={Globe} active />
                     <ToolbarIcon icon={Users} />
                     <ToolbarIcon icon={MessageSquare} />
                     <ToolbarIcon icon={Layers} />
                     <ToolbarIcon icon={Shield} />
                     <div className="h-px w-full bg-white/5" />
                     <ToolbarIcon icon={Settings} />
                  </div>

                  {/* Bottom Real-time Telemetry */}
                  <div className="flex items-center justify-between gap-8 mt-auto relative z-10">
                     <div className="flex-1 h-12 rounded-[14px] bg-black/40 backdrop-blur-xl border border-white/10 p-3 flex items-center justify-between shadow-2xl group/waveform">
                        <div className="flex items-center gap-2.5 shrink-0">
                           <div className="w-1.5 h-1.5 rounded-full bg-[#f5b82e] shadow-[0_0_8px_#f5b82e]" />
                           <span className="text-[8px] font-black text-white/40 uppercase tracking-[0.3em]">Operational Waveform</span>
                        </div>
                        <div className="flex-1 flex items-end gap-1.5 px-6 h-full">
                           {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
                             <motion.div 
                               key={i} 
                               animate={{ height: [`${20 + Math.random() * 60}%`, `${30 + Math.random() * 70}%`, `${20 + Math.random() * 60}%`] }}
                               transition={{ duration: 1 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
                               className="w-1 bg-[#f5b82e]/20 rounded-full" 
                             />
                           ))}
                        </div>
                        <span className="text-[9px] font-mono text-[#f5b82e]/40 shrink-0">94.8% SYNC</span>
                     </div>
                     <div className="w-32 h-12 rounded-[14px] bg-black/40 backdrop-blur-xl border border-white/10 p-3 flex items-center justify-center shadow-2xl group/radar cursor-pointer hover:border-[#f5b82e]/40 transition-colors">
                        <Radio className="w-4 h-4 text-[#f5b82e] animate-pulse" />
                        <span className="ml-2.5 text-[8px] font-black text-white/30 uppercase tracking-widest">MAP_SCAN</span>
                     </div>
                  </div>
               </div>

               {/* ADVANCED PLATFORM BASE: Holographic Radar */}
               <div className="absolute bottom-[-140px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full border border-[#f5b82e]/10 animate-spin-slow opacity-30" />
                  <div className="absolute top-[60px] left-1/2 -translate-x-1/2 w-[380px] h-[380px] rounded-full border border-[#f5b82e]/5 animate-spin-reverse opacity-20" />
                  <div className="absolute top-[120px] left-1/2 -translate-x-1/2 text-center">
                     <span className="text-[13px] font-black text-[#f5b82e] uppercase tracking-[1.2em] opacity-40 blur-[0.5px]">OYEN GRID OS</span>
                     <div className="mt-4 flex items-center justify-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-[#f5b82e] animate-ping" />
                        <span className="text-[8px] font-black text-[#f5b82e]/40 uppercase tracking-widest">AUTHENTICATED_SECURE_LINK</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>

           {/* RIGHT COLUMN: INTELLIGENCE & SYNC */}
           <div className="flex flex-col h-full py-6 gap-5">
              {/* AI Confidence: High Fidelity */}
              <div className="p-5 rounded-[24px] bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-2xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.5)] space-y-4 relative group overflow-hidden">
                 <div className="absolute top-0 right-0 p-5 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                    <Target className="w-20 h-20 text-[#f5b82e]" />
                 </div>
                 <div className="flex items-center justify-between relative z-10">
                    <div className="flex flex-col">
                       <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-1">AI_CONFIDENCE_SCORE</span>
                       <span className="text-[32px] font-bold text-white tracking-tighter leading-none">94.8<span className="text-[18px] text-[#f5b82e]/60">%</span></span>
                    </div>
                    <div className="w-20 h-10 flex items-end gap-1.5 px-1 pt-2">
                       {[1,2,3,4,5,6].map(i => (
                         <motion.div 
                           key={i} 
                           initial={{ height: 0 }}
                           whileInView={{ height: `${40 + i * 10}%` }}
                           className="flex-1 bg-emerald-500/30 rounded-sm" 
                         />
                       ))}
                    </div>
                 </div>
                 <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Elite Validation Environment</span>
                 </div>
              </div>

              {/* AI Facilitator Assistant: Active Refinement */}
              <div className="p-5 rounded-[24px] bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-2xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.5)] space-y-5 group">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#f5b82e]/10 border border-[#f5b82e]/20 flex items-center justify-center">
                       <Brain className="w-4 h-4 text-[#f5b82e]" />
                    </div>
                    <span className="text-[11px] font-black text-white/60 uppercase tracking-[0.4em]">AI Facilitator</span>
                 </div>
                 <div className="p-4 rounded-[14px] bg-[#f5b82e]/[0.03] border border-[#f5b82e]/10 space-y-3 shadow-inner">
                    <div className="text-[12px] text-white/70 leading-relaxed font-medium italic">
                      "Programme engagement drifting in Cluster_04. Deployment of institutional alignment protocol recommended."
                   </div>
                   <button className="w-full h-11 rounded-xl bg-gradient-to-r from-[#f5b82e] to-[#d49a20] text-black text-[11px] font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-lg active:scale-95">
                      INITIALIZE PROTOCOL
                   </button>
                </div>
                <div className="flex items-center justify-between px-1">
                   <span className="text-[9px] text-white/20 font-black uppercase tracking-widest">Confidence Index</span>
                   <span className="text-[11px] text-[#f5b82e] font-mono font-bold tracking-widest">98.2%</span>
                </div>
             </div>

              {/* Delivery Timeline: Detailed Realism */}
              <div className="p-5 rounded-[24px] bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-2xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.5)] space-y-4">
                 <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black text-white/60 uppercase tracking-[0.4em]">Live Timeline</span>
                   <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                      <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest leading-none">SYNC_STABLE</span>
                   </div>
                 </div>
                 <div className="h-10 flex items-center gap-2">
                    <TimelineSegment color="#3b82f6" width="35%" label="STRAT" active />
                   <TimelineSegment color="#10b981" width="25%" label="SYNC" />
                   <TimelineSegment color="#f5b82e" width="20%" label="ORCH" />
                   <TimelineSegment color="#ef4444" width="20%" label="DELIV" />
                </div>
             </div>

              {/* Active Infrastructure Status */}
              <div className="mt-auto p-5 rounded-[20px] bg-white/[0.02] border border-white/5 space-y-3">
                 <div className="flex items-center gap-2.5 mb-1">
                    <Shield className="w-3.5 h-3.5 text-white/30" />
                    <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em]">Governance & Security</span>
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                   <StatusItem label="Infrastructure" />
                   <StatusItem label="Compliance" />
                   <StatusItem label="Data Integrity" />
                   <StatusItem label="Encryption" />
                </div>
             </div>
          </div>
        </div>

        {/* REFINED BOTTOM FEATURE DOCK */}
        <div className="mt-14 h-16 rounded-[24px] bg-gradient-to-r from-white/[0.03] via-white/[0.05] to-white/[0.03] border border-white/10 px-8 flex items-center justify-between backdrop-blur-2xl shadow-2xl relative group overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,184,46,0.03),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
           
           <StripItem icon={Target} title="Live Visibility" desc="Real-time infra view" />
           <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
           <StripItem icon={Layers} title="Smart Sync" desc="AI-driven coordination" />
           <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
           <StripItem icon={Brain} title="Strategic Insights" desc="Predictive programme logic" />
           <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
           <StripItem icon={ShieldCheck} title="Institutional Security" desc="Military-grade governance" />
           <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
           <StripItem icon={Globe2} title="Global Scale" desc="Distributed infrastructure" />
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 25s linear infinite;
        }
      `}</style>
    </section>
  );
}

function StatItem({ label, val }: { label: string, val: string }) {
  return (
    <div className="flex flex-col">
       <span className="text-[22px] font-bold text-white tracking-tighter mb-1 leading-none">{val}</span>
       <span className="text-[10px] text-white/30 font-black uppercase tracking-widest leading-none">{label}</span>
    </div>
  );
}

function ToolbarIcon({ icon: Icon, active = false }: { icon: any, active?: boolean }) {
  return (
    <div className={cn(
      "w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 relative group",
      active ? "bg-[#f5b82e]/20 text-[#f5b82e] shadow-[0_0_20px_rgba(245,184,46,0.15)]" : "text-white/20 hover:text-white hover:bg-white/5"
    )}>
       <Icon className="w-4.5 h-4.5" />
       {active && <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-1 h-3 rounded-full bg-[#f5b82e] shadow-[0_0_8px_#f5b82e]" />}
    </div>
  );
}

function TimelineSegment({ color, width, label, active = false }: { color: string, width: string, label: string, active?: boolean }) {
  return (
    <div className="h-full rounded-xl relative group cursor-default" style={{ width }}>
       <div className="absolute inset-0 rounded-xl bg-white/[0.03] border border-white/5" />
       <div className={cn("absolute inset-0 rounded-xl transition-all duration-1000", active && "animate-pulse")} style={{ backgroundColor: color, opacity: active ? 0.4 : 0.1 }} />
       <div className="absolute inset-0 flex items-center justify-center">
          <span className={cn("text-[8px] font-black tracking-widest", active ? "text-white" : "text-white/20")}>{label}</span>
       </div>
       {active && <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white shadow-[0_0_8px_#fff]" />}
    </div>
  );
}

function StatusItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 group">
       <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
          <CheckCircle2 className="w-3 h-3 text-emerald-500 group-hover:scale-110 transition-transform" />
       </div>
       <span className="text-[11px] font-bold text-white/40 tracking-tight group-hover:text-white/60 transition-colors">{label}</span>
    </div>
  );
}

function StripItem({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex items-center gap-3 group cursor-pointer py-1.5">
       <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-[#f5b82e]/40 group-hover:bg-[#f5b82e]/10 transition-all duration-500">
          <Icon className="w-4 h-4 text-[#f5b82e] opacity-70 group-hover:opacity-100 transition-opacity" />
       </div>
       <div className="flex flex-col">
          <h4 className="text-[11px] font-bold text-white tracking-tight group-hover:text-[#f5b82e] transition-colors">{title}</h4>
          <p className="text-[9px] text-white/20 font-black uppercase tracking-widest leading-none mt-0.5 group-hover:text-white/40 transition-colors">{desc}</p>
       </div>
    </div>
  );
}
