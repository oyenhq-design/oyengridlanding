"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Activity, Brain, Clock, Globe, Layers, FileCheck, 
  Mic, Video, Monitor, Users, Smile, MessageSquare, MoreHorizontal,
  ArrowUpRight, ShieldCheck, Zap, Globe2, ChevronRight, CheckCircle2,
  AlertCircle, BarChart3, TrendingUp, Search, Radio, Wifi, Shield,
  Lock, Target, Info, Terminal, Database, LineChart, Bell, Maximize2,
  PlayCircle, FileText, Settings, Share2
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  { title: "Operational Health Engine", desc: "Real-time monitoring of engagement, attendance, quality and delivery risk.", icon: Activity },
  { title: "AI Facilitation Assistant", desc: "Smart summaries, action points and facilitator recommendations.", icon: Brain },
  { title: "Delivery Intelligence", desc: "Track every moment, interaction and outcome with precision.", icon: Clock },
  { title: "Coordination Map", desc: "Global visibility across cohorts, regions and operational dependencies.", icon: Globe },
  { title: "Decision Layer", desc: "AI-powered recommendations to keep programmes on track.", icon: Layers },
  { title: "Structured Outputs", desc: "Automated reports, actions, logs and compliance records.", icon: FileCheck },
];

const metrics = [
  { label: "Active Participants", val: "1,240+", sub: "Across all sessions", icon: Users },
  { label: "System Uptime", val: "99.995%", sub: "Last 30 days", icon: ShieldCheck },
  { label: "Average Sync Latency", val: "0.8ms", sub: "Global network", icon: Zap },
  { label: "Active Programmes", val: "24", sub: "Across 8 regions", icon: Database },
  { label: "Sessions Today", val: "96", sub: "Live and recorded", icon: Video },
  { label: "Countries Connected", val: "140+", sub: "Global operations", icon: Globe2 },
];

export function InstitutionalCommandCenter() {
  return (
    <section className="bg-[#050816] relative py-[110px] overflow-hidden">
      
      {/* 1. ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/institutional-atmosphere.png" 
          alt="Atmosphere" 
          fill 
          className="object-cover opacity-[0.05] blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-transparent to-[#050816]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_320px] gap-[24px] items-start mb-10">
          
          {/* LEFT COLUMN: INFORMATION & FEATURES */}
          <div className="flex flex-col gap-10">
            <div>
              <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.4em] mb-4 block">
                LIVE OPERATION COMMAND
              </span>
              <h2 className="text-[44px] font-bold text-white leading-[0.95] tracking-[-0.05em] mb-8">
                Built for intelligent <br /> programme <span className="text-brand-gold">delivery.</span>
              </h2>
              <p className="text-[14px] text-white/40 leading-relaxed font-medium">
                OYEN GRID orchestrates every layer of programme operations with real-time intelligence, AI guidance, and institutional control.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center shrink-0 group-hover:border-brand-gold/20 transition-all">
                    <feature.icon className="w-4.5 h-4.5 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="text-[13px] font-bold text-white/90 mb-1">{feature.title}</h3>
                    <p className="text-[11px] text-white/30 leading-snug font-medium">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-2">
              <button className="h-12 px-6 rounded-xl bg-brand-gold text-black font-black text-[12px] uppercase tracking-wider flex items-center gap-2 hover:brightness-110 transition-all">
                Explore Live Command
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2.5 text-white/60 hover:text-white transition-all text-[12px] font-bold uppercase tracking-widest group">
                <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30">
                  <PlayCircle className="w-4 h-4" />
                </div>
                See it in action
              </button>
            </div>
          </div>

          {/* CENTER DASHBOARD: LIVE OPERATIONAL SESSION */}
          <div className="flex flex-col gap-[20px]">
            <div className="rounded-[32px] bg-[#0A0E18] border border-white/5 overflow-hidden flex flex-col shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
              {/* Top Bar */}
              <div className="h-[60px] border-b border-white/5 px-8 flex items-center justify-between bg-white/[0.02]">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center">
                       <Settings className="w-4 h-4 text-brand-gold" />
                    </div>
                    <span className="text-[13px] font-bold text-white">Leadership Alignment Programme</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-brand-gold/10 border border-brand-gold/20">
                    <span className="text-[10px] font-black text-brand-gold uppercase tracking-widest">Live Session</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/30 text-[11px] font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>01:24:58</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-500 text-[10px] font-bold uppercase">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Excellent Connection</span>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                   <div className="flex items-center gap-2 text-white/40">
                      <Users className="w-4 h-4" />
                      <span className="text-[12px] font-bold">48</span>
                   </div>
                   <Bell className="w-4 h-4 text-white/40" />
                   <Maximize2 className="w-4 h-4 text-white/40" />
                </div>
              </div>

              {/* Main Session Area */}
              <div className="h-[460px] flex p-4 gap-4 bg-black/40">
                {/* Facilitator Video */}
                <div className="flex-1 relative rounded-[24px] overflow-hidden border border-white/10 bg-black/60">
                   <Image 
                     src="/institutional-leader-v2.png" 
                     alt="Facilitator" 
                     fill 
                     className="object-cover"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                   <div className="absolute top-6 left-6 p-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                         <Users className="w-4 h-4 text-white/40" />
                      </div>
                      <div>
                         <div className="text-[9px] text-white/30 font-black uppercase tracking-widest leading-none mb-1">Facilitator</div>
                         <div className="text-[12px] font-bold text-white flex items-center gap-2">
                           Daniel Okafor
                           <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                              <ArrowUpRight className="w-2 h-2 text-emerald-500" />
                           </div>
                         </div>
                      </div>
                   </div>
                   <div className="absolute top-6 right-6">
                      <button className="w-9 h-9 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
                         <Maximize2 className="w-4 h-4 text-white" />
                      </button>
                   </div>
                </div>

                {/* Participant Stack */}
                <div className="w-[200px] flex flex-col gap-3">
                  {[
                    { name: "Alisha Khan", role: "Co-Facilitator", id: "ak" },
                    { name: "Michael O.", role: "Participant", id: "mo" },
                    { name: "Emily J.", role: "Participant", id: "ej" },
                    { name: "David A.", role: "Participant", id: "da", extra: "+44" },
                  ].map((p, i) => (
                    <div key={i} className="h-[96px] rounded-[20px] bg-white/[0.03] border border-white/5 overflow-hidden relative group">
                       <Image src="/institutional-participants.png" alt={p.name} fill className="object-cover opacity-60 grayscale" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                       <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                          <div>
                             <div className="text-[8px] text-white/40 font-black uppercase tracking-widest leading-none mb-1">{p.role}</div>
                             <div className="text-[11px] font-bold text-white">{p.name} {p.extra && <span className="opacity-40">{p.extra}</span>}</div>
                          </div>
                          <Mic className="w-3 h-3 text-emerald-500 opacity-60" />
                       </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Controls */}
              <div className="h-[72px] border-t border-white/5 px-8 flex items-center justify-between bg-white/[0.01]">
                <div className="flex items-center gap-8">
                  <ControlBtn icon={Mic} label="Mic" active />
                  <ControlBtn icon={Video} label="Camera" active />
                  <ControlBtn icon={Monitor} label="Share Screen" />
                  <div className="h-8 w-px bg-white/10 mx-2" />
                  <ControlBtn icon={Users} label="Participants" count={48} />
                  <ControlBtn icon={MessageSquare} label="Chat" count={12} active />
                  <ControlBtn icon={Smile} label="Reactions" />
                  <ControlBtn icon={MoreHorizontal} label="More" />
                </div>
                <button className="h-10 px-6 rounded-xl bg-red-600/10 border border-red-600/20 text-red-500 text-[11px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center">
                     <div className="w-1.5 h-1.5 rounded-sm bg-white" />
                  </div>
                  End Session
                </button>
              </div>
            </div>

            {/* Lower Analytics Panels */}
            <div className="grid grid-cols-3 gap-[20px]">
               {/* Delivery Timeline */}
               <div className="rounded-[28px] bg-[#0A0E18] border border-white/5 p-6 flex flex-col shadow-xl">
                  <div className="flex items-center justify-between mb-6">
                     <span className="text-[11px] font-black text-white uppercase tracking-widest">Delivery Timeline</span>
                  </div>
                  <div className="flex-1 flex flex-col gap-6">
                     <div className="flex items-center justify-between px-1">
                        {['09:00', '10:00', '11:00', '12:00', '01:00', '02:00'].map((t, i) => (
                           <div key={i} className="flex flex-col items-center gap-2">
                              <span className="text-[9px] font-mono text-white/20">{t}</span>
                              <div className={cn(
                                "h-1 rounded-full w-full min-w-[32px]",
                                i === 0 ? "bg-emerald-500" : i === 1 ? "bg-emerald-500" : i === 2 ? "bg-emerald-500" : i === 3 ? "bg-brand-gold" : i === 4 ? "bg-brand-gold" : "bg-red-500"
                              )} />
                           </div>
                        ))}
                     </div>
                     <div className="flex items-center justify-between px-1 mb-2">
                        <LegendItem label="Session" color="bg-emerald-500" />
                        <LegendItem label="Discussion" color="bg-blue-500" />
                        <LegendItem label="Breakout" color="bg-brand-gold" />
                        <LegendItem label="Q&A" color="bg-red-500" />
                     </div>
                     <div className="space-y-4">
                        <TimelineEvent time="01:21 PM" label="Breakout session started" sub="Team Alpha - 12 participants" />
                        <TimelineEvent time="01:18 PM" label="AI Insight generated" sub="Engagement drift detected" />
                        <TimelineEvent time="01:15 PM" label="Action item created" sub="Define Q2 delivery priorities" />
                     </div>
                     <button className="text-[10px] font-black text-brand-gold uppercase tracking-widest mt-2 hover:underline">View full timeline &gt;</button>
                  </div>
               </div>

               {/* Programme Progress */}
               <div className="rounded-[28px] bg-[#0A0E18] border border-white/5 p-6 flex flex-col shadow-xl">
                  <div className="flex items-center justify-between mb-6">
                     <span className="text-[11px] font-black text-white uppercase tracking-widest">Programme Progress</span>
                     <select className="bg-transparent text-[10px] font-bold text-white/40 border-none focus:ring-0">
                        <option>Cohort Alpha</option>
                     </select>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center gap-8">
                     <div className="relative w-32 h-32 flex items-center justify-center">
                        <svg className="w-full h-full -rotate-90">
                           <circle cx="64" cy="64" r="58" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="10" />
                           <circle cx="64" cy="64" r="58" fill="none" stroke="#F5B942" strokeWidth="10" strokeDasharray="364" strokeDashoffset="116" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                           <span className="text-[24px] font-bold text-white">68%</span>
                           <span className="text-[8px] text-white/30 font-black uppercase tracking-widest">Completed</span>
                        </div>
                     </div>
                     <div className="w-full space-y-4">
                        <ProgressDetail label="Current Module" val="Strategic Leadership" sub="Module 3 of 4" />
                        <ProgressDetail label="Sessions Completed" val="12 / 18" />
                        <ProgressDetail label="Assessments Passed" val="8 / 12" />
                        <ProgressDetail label="Participants Active" val="84%" />
                     </div>
                  </div>
                  <button className="text-[10px] font-black text-brand-gold uppercase tracking-widest mt-6 hover:underline">View programme &gt;</button>
               </div>

               {/* Coordination Map */}
               <div className="rounded-[28px] bg-[#0A0E18] border border-white/5 p-6 flex flex-col shadow-xl">
                  <div className="flex items-center justify-between mb-6">
                     <span className="text-[11px] font-black text-white uppercase tracking-widest">Coordination Map</span>
                     <select className="bg-transparent text-[10px] font-bold text-white/40 border-none focus:ring-0">
                        <option>Global View</option>
                     </select>
                  </div>
                  <div className="flex-1 relative mb-6">
                     <Image src="/operational-map.png" alt="Map" fill className="object-cover opacity-[0.15] grayscale" />
                     <div className="absolute inset-0 flex items-center justify-center">
                        {/* Pulse points */}
                        <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                        <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_10px_#F5B942]" />
                        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                     </div>
                  </div>
                  <div className="flex items-center justify-between px-2">
                     <MapLegend label="Active" color="bg-emerald-500" />
                     <MapLegend label="At Risk" color="bg-brand-gold" />
                     <MapLegend label="Offline" color="bg-red-500" />
                     <MapLegend label="Syncing" color="bg-blue-500" />
                  </div>
                  <div className="mt-auto flex justify-end pt-4">
                     <div className="flex flex-col gap-1">
                        <button className="w-6 h-6 rounded bg-white/5 flex items-center justify-center text-[14px] text-white/40 hover:bg-white/10">+</button>
                        <button className="w-6 h-6 rounded bg-white/5 flex items-center justify-center text-[14px] text-white/40 hover:bg-white/10">-</button>
                     </div>
                  </div>
               </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR: OPERATIONAL INTELLIGENCE */}
          <div className="flex flex-col gap-[20px]">
            {/* Operational Health Score */}
            <div className="p-6 rounded-[28px] bg-[#0A0E18] border border-white/5 space-y-6 shadow-xl">
               <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-black text-white uppercase tracking-widest">Operational Intelligence</span>
                  <div className="flex items-center gap-1.5">
                     <span className="text-[10px] font-bold text-emerald-500">Live</span>
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
               </div>
               <div className="pt-2">
                  <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-6 block">Operational Health Score</span>
                  <div className="flex items-center gap-8">
                     <div className="relative w-24 h-24 flex items-center justify-center">
                        <svg className="w-full h-full -rotate-90">
                           <circle cx="48" cy="48" r="42" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="8" />
                           <circle cx="48" cy="48" r="42" fill="none" stroke="#10B981" strokeWidth="8" strokeDasharray="264" strokeDashoffset="40" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                           <span className="text-[20px] font-bold text-white tracking-tighter">92</span>
                           <span className="text-[8px] text-emerald-500 font-black uppercase tracking-widest">Excellent</span>
                        </div>
                     </div>
                     <div className="flex-1 space-y-3">
                        <HealthItem label="Engagement" val="High" color="text-emerald-500" />
                        <HealthItem label="Attendance Quality" val="98%" />
                        <HealthItem label="Response Rate" val="94%" />
                        <HealthItem label="Coordination Latency" val="0.4s" />
                        <HealthItem label="Risk Alerts" val="None" color="text-emerald-500" />
                     </div>
                  </div>
               </div>
            </div>

            {/* AI Facilitator Assistant */}
            <div className="p-6 rounded-[28px] bg-[#0A0E18] border border-white/5 space-y-5 shadow-xl">
               <span className="text-[11px] font-black text-white uppercase tracking-widest block mb-1">AI Facilitator Assistant</span>
               <div className="space-y-4">
                  <div className="flex items-start justify-between">
                     <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                        <span className="text-[11px] font-bold text-brand-gold">Recommended Action</span>
                     </div>
                     <span className="text-[9px] font-mono text-white/20">09:42 AM</span>
                  </div>
                  <p className="text-[12px] text-white/60 leading-relaxed">
                     Engagement levels in Cohort Alpha have dropped by 18% in the last 30 minutes.
                  </p>
                  <div className="space-y-1">
                     <span className="text-[10px] font-bold text-white/80">Suggested Action:</span>
                     <p className="text-[12px] text-white/40 leading-relaxed">
                        Introduce interactive activity or breakout discussion to re-engage participants.
                     </p>
                  </div>
                  <div className="flex gap-3 pt-1">
                     <button className="flex-1 h-10 rounded-xl bg-brand-gold text-black text-[11px] font-black uppercase tracking-widest hover:brightness-110 transition-all">
                        Apply Recommendation
                     </button>
                     <button className="flex-1 h-10 rounded-xl bg-white/5 text-white/40 text-[11px] font-black uppercase tracking-widest hover:text-white transition-all">
                        Dismiss
                     </button>
                  </div>
               </div>
            </div>

            {/* Live Risk Alerts */}
            <div className="p-6 rounded-[28px] bg-[#0A0E18] border border-white/5 space-y-5 shadow-xl">
               <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-black text-white uppercase tracking-widest">Live Risk Alerts</span>
                  <span className="text-[10px] font-bold text-white/20 hover:text-white cursor-pointer">View all</span>
               </div>
               <div className="space-y-3">
                  <RiskItem icon={AlertCircle} label="Engagement Drift" target="Cohort Beta" severity="High" color="text-red-500" />
                  <RiskItem icon={Users} label="Attendance Risk" target="Cohort Gamma" severity="Medium" color="text-brand-gold" />
                  <RiskItem icon={Smile} label="Low Participation" target="Cohort Delta" severity="Low" color="text-emerald-500" />
               </div>
            </div>

            {/* Automated Outputs */}
            <div className="p-6 rounded-[28px] bg-[#0A0E18] border border-white/5 space-y-5 shadow-xl">
               <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-black text-white uppercase tracking-widest">Automated Outputs</span>
                  <span className="text-[10px] font-bold text-white/20 hover:text-white cursor-pointer">View all</span>
               </div>
               <div className="space-y-4">
                  <OutputRow icon={FileText} label="Session Summary" status="Generated 2 min ago" />
                  <OutputRow icon={Target} label="Action Items" status="12 new items" />
                  <OutputRow icon={CheckCircle2} label="Attendance Report" status="98% present" />
                  <OutputRow icon={ShieldCheck} label="Compliance Log" status="All good" />
               </div>
            </div>
          </div>
        </div>

        {/* BOTTOM METRICS ROW: 6 EQUAL CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[20px]">
           {metrics.map((m, i) => (
             <div key={i} className="rounded-[24px] bg-white/[0.02] border border-white/5 p-6 flex flex-col gap-4 group hover:bg-white/[0.04] transition-all duration-500">
                <div className="w-11 h-11 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-brand-gold/20 transition-all">
                   <m.icon className="w-5 h-5 text-white/30 group-hover:text-brand-gold transition-colors" />
                </div>
                <div>
                   <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] mb-1">{m.label}</div>
                   <div className="text-[24px] font-bold text-white tracking-tighter leading-none mb-1.5">{m.val}</div>
                   <div className="text-[11px] text-white/40 font-medium">{m.sub}</div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}

function ControlBtn({ icon: Icon, label, count, active = false }: { icon: any, label: string, count?: number, active?: boolean }) {
  return (
    <button className="flex flex-col items-center gap-2 group">
       <div className={cn(
         "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 relative",
         active ? "bg-white/10 text-white border border-white/10 shadow-lg" : "bg-transparent text-white/30 group-hover:bg-white/5 group-hover:text-white"
       )}>
          <Icon className="w-4.5 h-4.5" />
          {count !== undefined && (
            <div className="absolute -top-1 -right-1 min-w-[16px] h-[16px] px-1 rounded-md bg-brand-gold text-black text-[9px] font-black flex items-center justify-center">
               {count}
            </div>
          )}
       </div>
       <span className="text-[9px] font-bold text-white/20 group-hover:text-white/40 tracking-tight">{label}</span>
    </button>
  );
}

function LegendItem({ label, color }: { label: string, color: string }) {
  return (
    <div className="flex items-center gap-1.5">
       <div className={cn("w-1.5 h-1.5 rounded-full", color)} />
       <span className="text-[9px] font-bold text-white/40">{label}</span>
    </div>
  );
}

function TimelineEvent({ time, label, sub }: { time: string, label: string, sub: string }) {
  return (
    <div className="flex gap-4">
       <span className="text-[9px] font-mono text-white/20 w-14 shrink-0">{time}</span>
       <div className="relative flex flex-col items-center">
          <div className="w-2 h-2 rounded-full border border-brand-gold/40 flex items-center justify-center">
             <div className="w-0.5 h-0.5 rounded-full bg-brand-gold" />
          </div>
       </div>
       <div className="min-w-0">
          <div className="text-[11px] font-bold text-white/80 truncate leading-tight">{label}</div>
          <div className="text-[9px] text-white/30 font-medium truncate">{sub}</div>
       </div>
    </div>
  );
}

function ProgressDetail({ label, val, sub }: { label: string, val: string, sub?: string }) {
  return (
    <div className="flex items-center justify-between">
       <span className="text-[10px] text-white/20 font-black uppercase tracking-widest">{label}</span>
       <div className="text-right">
          <div className="text-[11px] font-bold text-white leading-none">{val}</div>
          {sub && <div className="text-[9px] text-white/30 font-medium mt-1">{sub}</div>}
       </div>
    </div>
  );
}

function MapLegend({ label, color }: { label: string, color: string }) {
  return (
    <div className="flex items-center gap-2">
       <div className={cn("w-2 h-2 rounded-full", color)} />
       <span className="text-[9px] font-bold text-white/40">{label}</span>
    </div>
  );
}

function HealthItem({ label, val, color }: { label: string, val: string, color?: string }) {
  return (
    <div className="flex items-center justify-between group">
       <span className="text-[10px] text-white/30 font-black uppercase tracking-widest group-hover:text-white/50 transition-colors">{label}</span>
       <span className={cn("text-[11px] font-bold", color ? color : "text-white")}>{val}</span>
    </div>
  );
}

function RiskItem({ icon: Icon, label, target, severity, color }: { icon: any, label: string, target: string, severity: string, color: string }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 group hover:border-white/10 transition-all">
       <div className="flex items-center gap-3">
          <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center bg-black/40 border border-white/5", color)}>
             <Icon className="w-4 h-4 opacity-70" />
          </div>
          <div>
             <div className="text-[11px] font-bold text-white/80">{label}</div>
             <div className="text-[9px] text-white/20 font-black uppercase tracking-widest">{target}</div>
          </div>
       </div>
       <span className={cn("text-[10px] font-black uppercase tracking-widest", color)}>{severity}</span>
    </div>
  );
}

function OutputRow({ icon: Icon, label, status }: { icon: any, label: string, status: string }) {
  return (
    <div className="flex items-center justify-between group cursor-pointer">
       <div className="flex items-center gap-3">
          <Icon className="w-4 h-4 text-brand-gold opacity-60 group-hover:opacity-100 transition-opacity" />
          <span className="text-[11px] font-bold text-white/80 group-hover:text-white transition-colors">{label}</span>
       </div>
       <span className="text-[10px] text-white/20 font-medium group-hover:text-white/40 transition-all">{status}</span>
    </div>
  );
}
