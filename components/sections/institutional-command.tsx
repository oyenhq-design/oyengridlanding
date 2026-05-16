"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Activity, Brain, Clock, Globe, Layers, FileCheck, 
  Mic, Video, Monitor, Users, Smile, MessageSquare, MoreHorizontal,
  ArrowUpRight, ShieldCheck, Zap, Globe2, ChevronRight, CheckCircle2,
  AlertCircle, BarChart3, TrendingUp, Search, Radio, Wifi, 
  Bell, Share2, PhoneOff, Settings, Info, Shield, Target, Play,
  Download, FileText, FileSpreadsheet, Lock, Cpu, Network, Database
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  { title: "Intelligent Orchestration", desc: "Automated programme coordination.", icon: Cpu },
  { title: "AI Operational Guidance", desc: "Live facilitator intelligence.", icon: Brain },
  { title: "Institutional Control", desc: "Enterprise governance layer.", icon: Shield },
];

const topMetrics = [
  { label: "Operational Health", val: "94.8%", color: "#f5b82e" },
  { label: "Engagement Quality", val: "A+", color: "#10b981" },
  { label: "Response Rate", val: "92%", color: "#f5b82e" },
  { label: "Coordination Latency", val: "0.04ms", color: "#10b981" },
];

export function InstitutionalCommandCenter() {
  return (
    <section className="bg-[#040816] relative py-20 overflow-hidden min-h-[920px] flex items-center selection:bg-[#f5b82e] selection:text-black">
      
      {/* 1. CINEMATIC ATMOSPHERE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/institutional-atmosphere.png" 
          alt="Atmosphere" 
          fill 
          className="object-cover opacity-[0.1] blur-[4px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040816] via-transparent to-[#040816]" />
        
        {/* Subtle Tech Grids */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "40px 40px" }} />
        
        {/* Cinematic Atmospheric Light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_top,rgba(245,184,46,0.06),transparent_65%)]" />
        <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[radial-gradient(circle,rgba(245,184,46,0.04),transparent_60%)]" />
      </div>

      <div className="max-w-[1550px] mx-auto px-10 relative z-10 w-full scale-[0.95]">
        <div className="grid grid-cols-1 lg:grid-cols-[28%_44%_28%] gap-10 items-stretch">
          
          {/* LEFT COLUMN: BRAND & FEATURES */}
          <div className="flex flex-col h-full py-4">
            <div className="mb-12">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f5b82e] shadow-[0_0_8px_#f5b82e]" />
                <span className="text-[11px] font-black text-[#f5b82e] uppercase tracking-[0.45em]">
                  LIVE OPERATION COMMAND
                </span>
              </div>
              <h1 className="text-[62px] font-bold text-white leading-[0.95] tracking-[-0.05em] mb-10">
                Built for <br /> intelligent <br /> 
                <span className="text-[#f5b82e] italic">delivery.</span>
              </h1>
              <p className="text-[16px] text-white/40 leading-relaxed font-medium max-w-[340px]">
                The world&apos;s most advanced operating system for institutional programme coordination and global sync.
              </p>
            </div>

            <div className="space-y-6 mb-12">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-5 group">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#f5b82e]/50 transition-colors">
                    <feature.icon className="w-5 h-5 text-[#f5b82e]" />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-[12px] text-white/30 leading-snug">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-5 mb-14">
               <button className="h-14 px-8 rounded-2xl bg-[#f5b82e] text-black font-black text-[12px] uppercase tracking-widest hover:brightness-110 transition-all shadow-[0_20px_50px_rgba(245,184,46,0.15)] active:scale-[0.98]">
                  EXPLORE LIVE COMMAND
               </button>
               <button className="h-14 px-8 rounded-2xl bg-white/[0.03] border border-white/10 text-white font-black text-[12px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/[0.06] transition-all">
                  SEE IT IN ACTION
               </button>
            </div>

            <div className="flex items-center justify-between gap-6 pr-10">
               <StatItem label="Live Participants" val="1,248+" />
               <StatItem label="System Uptime" val="99.99%" />
               <StatItem label="Countries" val="140+" />
            </div>
          </div>

          {/* CENTER SECTION: MASSIVE COMMAND INTERFACE */}
          <div className="flex flex-col gap-6 relative">
            <div className="text-center">
               <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em]">OPERATIONAL COMMAND CENTER</span>
            </div>

            {/* Top Metric Cards (4 floating) */}
            <div className="grid grid-cols-4 gap-4 px-2">
               {topMetrics.map((m, i) => (
                 <div key={i} className="p-3 rounded-[16px] bg-[#0A0E18]/40 backdrop-blur-xl border border-white/[0.08] shadow-xl">
                    <div className="text-[8px] font-black text-white/30 uppercase tracking-widest mb-1">{m.label}</div>
                    <div className="flex items-center justify-between">
                       <span className="text-[14px] font-bold text-white">{m.val}</span>
                       <div className="w-6 h-2 rounded-full bg-white/5 overflow-hidden">
                          <div className="h-full w-2/3 bg-white/20" />
                       </div>
                    </div>
                 </div>
               ))}
            </div>

            {/* MAIN OPERATIONAL PANEL */}
            <div className="flex-1 relative rounded-[40px] bg-[#0A0E18]/60 backdrop-blur-3xl border border-white/10 shadow-[0_80px_160px_rgba(0,0,0,0.8)] overflow-hidden group">
               {/* Internal Map Interface */}
               <div className="absolute inset-0 pointer-events-none">
                  <Image 
                    src="/operational-map.png" 
                    alt="Map" 
                    fill 
                    className="object-cover opacity-[0.25] grayscale transition-transform duration-[60s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E18] via-transparent to-[#0A0E18]/40" />
               </div>

               {/* Map Overlays: Nodes & Routes */}
               <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-red-500/10 border border-red-500/20">
                           <div className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
                           <span className="text-[9px] font-black text-red-500 uppercase tracking-widest">LIVE</span>
                        </div>
                        <span className="text-[11px] font-black text-white/60 uppercase tracking-[0.2em]">GLOBAL OPERATIONAL VIEW</span>
                     </div>
                     <div className="flex items-center gap-4 text-white/30">
                        <Clock className="w-4 h-4" />
                        <span className="text-[12px] font-mono tracking-widest">01:24:58</span>
                     </div>
                  </div>

                  {/* Sidebar Inside Panel */}
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-5 p-2 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
                     <ToolbarIcon icon={Globe} active />
                     <ToolbarIcon icon={Users} />
                     <ToolbarIcon icon={MessageSquare} />
                     <ToolbarIcon icon={Layers} />
                     <ToolbarIcon icon={Settings} />
                  </div>

                  {/* Bottom Overlays Inside */}
                  <div className="flex items-center justify-between gap-10 mt-auto">
                     <div className="flex-1 h-12 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                           <Activity className="w-3.5 h-3.5 text-[#f5b82e]" />
                           <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Live Sync Waveform</span>
                        </div>
                        <div className="flex-1 flex items-center gap-1.5 px-6">
                           {[1,2,3,4,5,6,7,8,9,10].map(i => (
                             <div key={i} className="w-1 bg-[#f5b82e]/20 rounded-full" style={{ height: `${20 + Math.random() * 60}%` }} />
                           ))}
                        </div>
                     </div>
                     <div className="w-32 h-12 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 p-3 flex items-center justify-center">
                        <Radio className="w-4 h-4 text-[#f5b82e] animate-pulse" />
                     </div>
                  </div>
               </div>

               {/* PLATFORM BASE: Holographic Radar */}
               <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full border border-[#f5b82e]/20 animate-spin-slow" />
                  <div className="absolute top-[50px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full border border-[#f5b82e]/10 animate-spin-reverse" />
                  <div className="absolute top-[100px] left-1/2 -translate-x-1/2 text-center">
                     <span className="text-[12px] font-black text-[#f5b82e] uppercase tracking-[1em] opacity-40">OYEN GRID</span>
                  </div>
               </div>
            </div>
          </div>

          {/* RIGHT COLUMN: STACKED INTELLIGENCE CARDS */}
          <div className="flex flex-col h-full py-4 gap-5">
             {/* Card 1: AI Confidence */}
             <div className="p-5 rounded-[28px] bg-[#0A0E18]/40 backdrop-blur-xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                   <div className="flex flex-col">
                      <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">AI Confidence</span>
                      <span className="text-[32px] font-bold text-white tracking-tighter">94%</span>
                   </div>
                   <div className="w-16 h-8 flex items-end gap-1 px-1">
                      {[1,2,3,4,5].map(i => <div key={i} className="flex-1 bg-[#10b981]/40 rounded-sm" style={{ height: `${40 + i * 10}%` }} />)}
                   </div>
                </div>
                <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">High Confidence Environment</div>
             </div>

             {/* Card 2: AI Facilitator Assistant */}
             <div className="p-6 rounded-[28px] bg-[#0A0E18]/40 backdrop-blur-xl border border-white/10 space-y-5 group">
                <div className="flex items-center gap-3">
                   <Brain className="w-5 h-5 text-[#f5b82e]" />
                   <span className="text-[11px] font-black text-white uppercase tracking-[0.3em]">AI Facilitator</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#f5b82e]/5 border border-[#f5b82e]/10 space-y-3">
                   <div className="text-[12px] text-white/70 leading-relaxed font-medium">
                      "Institutional engagement metrics drifting. Suggest deploying protocol sync."
                   </div>
                   <button className="w-full h-10 rounded-xl bg-[#f5b82e] text-black text-[11px] font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-lg active:scale-95">
                      LAUNCH ACTION
                   </button>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                   <div className="h-full w-[94%] bg-[#f5b82e]" />
                </div>
             </div>

             {/* Card 3: Live Delivery Timeline */}
             <div className="p-6 rounded-[28px] bg-[#0A0E18]/40 backdrop-blur-xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                   <span className="text-[11px] font-black text-white uppercase tracking-[0.3em]">Live Timeline</span>
                   <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">SYNC_ACTIVE</span>
                </div>
                <div className="h-12 flex items-center gap-2">
                   <TimelineSegment color="#3b82f6" width="30%" active />
                   <TimelineSegment color="#10b981" width="25%" />
                   <TimelineSegment color="#f5b82e" width="20%" />
                   <TimelineSegment color="#ef4444" width="15%" />
                </div>
             </div>

             {/* Card 4: Active Initiatives */}
             <div className="p-6 rounded-[28px] bg-[#0A0E18]/40 backdrop-blur-xl border border-white/10 space-y-4">
                <span className="text-[11px] font-black text-white uppercase tracking-[0.3em]">Active Initiatives</span>
                <div className="space-y-3">
                   <TaskRow label="Institutional Alignment" status="On Track" color="#10b981" />
                   <TaskRow label="Strategic Protocol Sync" status="At Risk" color="#ef4444" />
                   <TaskRow label="Global Sync Cluster 04" status="On Track" color="#10b981" />
                </div>
             </div>

             {/* Bottom Right: System Status */}
             <div className="mt-auto p-5 rounded-[24px] bg-white/[0.02] border border-white/5 grid grid-cols-2 gap-y-3">
                <StatusItem label="Infrastructure" />
                <StatusItem label="Security" />
                <StatusItem label="Data Integrity" />
                <StatusItem label="Compliance" />
             </div>
          </div>
        </div>

        {/* BOTTOM FEATURE STRIP */}
        <div className="mt-16 h-16 rounded-[24px] bg-white/[0.02] border border-white/5 px-10 flex items-center justify-between backdrop-blur-md">
           <StripItem icon={Target} title="Real-time Visibility" desc="Live infra view" />
           <div className="w-px h-8 bg-white/5" />
           <StripItem icon={Layers} title="Smart Coordination" desc="AI-driven sync" />
           <div className="w-px h-8 bg-white/5" />
           <StripItem icon={Brain} title="AI-Powered Insights" desc="Predictive logic" />
           <div className="w-px h-8 bg-white/5" />
           <StripItem icon={ShieldCheck} title="Secure & Compliant" desc="Military-grade" />
           <div className="w-px h-8 bg-white/5" />
           <StripItem icon={Globe2} title="Scalable Infrastructure" desc="Global reach" />
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
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
      `}</style>
    </section>
  );
}

function StatItem({ label, val }: { label: string, val: string }) {
  return (
    <div className="flex flex-col">
       <span className="text-[18px] font-bold text-white tracking-tighter mb-0.5">{val}</span>
       <span className="text-[10px] text-white/20 font-black uppercase tracking-widest">{label}</span>
    </div>
  );
}

function ToolbarIcon({ icon: Icon, active = false }: { icon: any, active?: boolean }) {
  return (
    <div className={cn(
      "w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer transition-all",
      active ? "bg-[#f5b82e]/20 text-[#f5b82e]" : "text-white/20 hover:text-white hover:bg-white/5"
    )}>
       <Icon className="w-4.5 h-4.5" />
    </div>
  );
}

function TimelineSegment({ color, width, active = false }: { color: string, width: string, active?: boolean }) {
  return (
    <div className="h-full rounded-full relative" style={{ width, backgroundColor: `${color}20` }}>
       <div className={cn("absolute inset-0 rounded-full", active && "animate-pulse")} style={{ backgroundColor: color, opacity: active ? 0.6 : 0.2 }} />
    </div>
  );
}

function TaskRow({ label, status, color }: { label: string, status: string, color: string }) {
  return (
    <div className="flex items-center justify-between">
       <span className="text-[11px] font-bold text-white/50">{label}</span>
       <div className="flex items-center gap-1.5">
          <div className="w-1 h-1 rounded-full" style={{ backgroundColor: color }} />
          <span className="text-[9px] font-black uppercase tracking-widest" style={{ color }}>{status}</span>
       </div>
    </div>
  );
}

function StatusItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2">
       <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
       <span className="text-[10px] font-bold text-white/40">{label}</span>
    </div>
  );
}

function StripItem({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex items-center gap-3.5 group">
       <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#f5b82e]/10 transition-colors">
          <Icon className="w-4.5 h-4.5 text-[#f5b82e]" />
       </div>
       <div>
          <h4 className="text-[11px] font-bold text-white group-hover:text-[#f5b82e] transition-colors">{title}</h4>
          <p className="text-[9px] text-white/20 font-black uppercase tracking-widest">{desc}</p>
       </div>
    </div>
  );
}
