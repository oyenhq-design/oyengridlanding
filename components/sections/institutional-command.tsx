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
  { title: "Operational Health Engine", desc: "Live infrastructure monitoring.", icon: Activity },
  { title: "AI Facilitator Assistant", desc: "Intelligence-driven moderation.", icon: Brain },
  { title: "Live Delivery Timeline", desc: "Programme tracking milestones.", icon: Clock },
  { title: "Coordination Map", desc: "Global participant distribution.", icon: Globe },
  { title: "Decision Layer", desc: "AI-driven operational logic.", icon: Layers },
  { title: "Structured Outputs", desc: "Automated institutional records.", icon: FileCheck },
];

const metrics = [
  { label: "Active Participants", val: "1,240+", icon: Users },
  { label: "System Uptime", val: "99.995%", icon: ShieldCheck },
  { label: "Average Sync", val: "0.8ms", icon: Zap },
  { label: "Countries Connected", val: "140+", icon: Globe2 },
];

export function InstitutionalCommandCenter() {
  return (
    <section className="bg-[#050816] relative py-[110px] overflow-hidden">
      
      {/* 1. ATMOSPHERIC BACKGROUND SYSTEM */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/institutional-atmosphere.png" 
          alt="Atmosphere" 
          fill 
          className="object-cover opacity-[0.05] blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-transparent to-[#050816]" />
        
        {/* Subtle World-Grid & Faint Glow */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_top,rgba(255,190,40,0.08),transparent_38%)]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr_320px] gap-[22px] items-start">
          
          {/* LEFT PANEL: INFORMATION & FEATURE LIST */}
          <div className="flex flex-col gap-10">
            <div>
              <span className="text-[11px] font-black text-brand-gold uppercase tracking-[0.4em] mb-4 block">
                LIVE OPERATION COMMAND
              </span>
              <h2 className="text-[44px] font-bold text-white leading-[0.95] tracking-[-0.05em] mb-8">
                Built for intelligent <br /> programme <span className="text-brand-gold">delivery.</span>
              </h2>
              <p className="text-[14px] text-white/40 leading-relaxed font-medium">
                OYEN GRID orchestrates every layer of programme operations with real-time intelligence, AI guidance, and institutional control.
              </p>
            </div>

            <div className="space-y-3.5">
              {features.map((feature, i) => (
                <div key={i} className="h-[76px] px-5 py-4 rounded-[18px] bg-[#0C1018]/88 border border-white/5 flex items-center gap-4 group hover:border-brand-gold/20 transition-all duration-500 shadow-xl">
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-4.5 h-4.5 text-brand-gold" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[13px] font-bold text-white/90 mb-0.5 truncate">{feature.title}</h3>
                    <p className="text-[10px] text-white/20 font-black uppercase tracking-widest truncate">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 mt-2">
              <button className="h-14 rounded-2xl bg-brand-gold text-black font-black text-[13px] uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-xl shadow-brand-gold/10">
                Explore Live Command
                <ArrowUpRight className="w-4.5 h-4.5" />
              </button>
              <button className="h-14 rounded-2xl bg-white/[0.04] border border-white/5 text-[12px] font-black uppercase tracking-widest text-white/60 hover:text-white transition-all">
                See it in action
              </button>
            </div>
          </div>

          {/* CENTER COMMAND INTERFACE: THE HERO DASHBOARD */}
          <div className="flex flex-col gap-[22px]">
            <div className="h-[760px] rounded-[26px] bg-[#0A0E18] border border-white/10 overflow-hidden flex flex-col shadow-[0_60px_120px_rgba(0,0,0,0.8)] relative group">
              
              {/* TOP BAR: SESSION TELEMETRY */}
              <div className="h-[60px] border-b border-white/5 px-8 flex items-center justify-between bg-white/[0.03] backdrop-blur-xl z-20">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <Settings className="w-4 h-4 text-white/40" />
                    <span className="text-[13px] font-bold text-white tracking-tight">Leadership Alignment Session</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-1 rounded-md bg-brand-gold/10 border border-brand-gold/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                    <span className="text-[10px] font-black text-brand-gold uppercase tracking-widest">LIVE</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-white/30 text-[11px] font-mono tracking-widest">
                    <Clock className="w-4 h-4" />
                    <span>01:24:58</span>
                  </div>
                  <div className="h-4 w-px bg-white/10" />
                  <div className="flex items-center gap-2.5 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
                    <Wifi className="w-4 h-4" />
                    <span>Excellent Connection</span>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                   <div className="flex items-center gap-2 text-white/40">
                      <Users className="w-4.5 h-4.5" />
                      <span className="text-[12px] font-bold">48</span>
                   </div>
                   <Bell className="w-4.5 h-4.5 text-white/40 hover:text-white transition-colors" />
                   <Maximize2 className="w-4.5 h-4.5 text-white/40 hover:text-white transition-colors" />
                </div>
              </div>

              {/* MAIN CONTENT AREA: CINEMATIC SESSION */}
              <div className="flex-1 flex p-5 gap-5 overflow-hidden relative">
                {/* LARGE PRESENTER VIDEO */}
                <div className="flex-1 relative rounded-[22px] overflow-hidden border border-white/10 bg-black/60 shadow-inner group/video">
                   <Image 
                     src="/institutional-leader-v2.png" 
                     alt="Presenter" 
                     fill 
                     className="object-cover opacity-90 transition-transform duration-[30s] group-hover/video:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                   <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "url('/operational-map.png')", backgroundSize: 'cover' }} />
                   
                   {/* FLOATING HUD: Facilitator Info */}
                   <div className="absolute top-6 left-6 p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                         <div className="w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_8px_#F5B942]" />
                      </div>
                      <div>
                         <div className="text-[10px] text-white/30 font-black uppercase tracking-widest leading-none mb-1.5">Facilitator</div>
                         <div className="text-[13px] font-bold text-white tracking-tight flex items-center gap-2">
                           Daniel Okafor
                           <ArrowUpRight className="w-3 h-3 text-brand-gold opacity-60" />
                         </div>
                      </div>
                   </div>

                   {/* LIVE CONTROLS ROW */}
                   <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 p-4 rounded-[22px] bg-[#0C1018]/95 backdrop-blur-[40px] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-30">
                      <ControlBtn icon={Mic} active />
                      <ControlBtn icon={Video} active />
                      <ControlBtn icon={Monitor} />
                      <div className="w-px h-10 bg-white/10 mx-2" />
                      <ControlBtn icon={Users} count={48} />
                      <ControlBtn icon={MessageSquare} count={12} active />
                      <ControlBtn icon={Smile} />
                      <ControlBtn icon={MoreHorizontal} />
                      <div className="w-px h-10 bg-white/10 mx-2" />
                      <button className="h-12 px-8 rounded-xl bg-red-600/10 text-red-500 text-[11px] font-black uppercase tracking-widest border border-red-500/20 hover:bg-red-600 hover:text-white transition-all shadow-xl">
                        End Sync
                      </button>
                   </div>
                </div>

                {/* STACKED PARTICIPANT COLUMN */}
                <div className="w-[200px] flex flex-col gap-3.5">
                   {[1, 2, 3, 4].map(p => (
                     <div key={p} className="h-[104px] rounded-[20px] bg-white/[0.03] border border-white/5 overflow-hidden relative group">
                        <Image src="/institutional-participants.png" alt="Node" fill className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between">
                           <div className="min-w-0">
                              <div className="text-[8px] text-white/30 font-black uppercase tracking-widest leading-none mb-1">Institutional Node</div>
                              <div className="text-[11px] font-bold text-white truncate">Partner Cluster {p}</div>
                           </div>
                           <div className="w-2 h-2 rounded-full bg-emerald-500/60 shadow-[0_0_8px_rgba(16,185,129,0.3)]" />
                        </div>
                     </div>
                   ))}
                </div>
              </div>

              {/* LOWER PANELS: TIMELINE & MAP */}
              <div className="h-[220px] border-t border-white/5 p-5 grid grid-cols-2 gap-5 bg-white/[0.01] backdrop-blur-2xl">
                 {/* Live Delivery Timeline */}
                 <div className="rounded-[24px] bg-[#080B14]/80 border border-white/5 p-5 flex flex-col shadow-inner overflow-hidden">
                    <div className="flex items-center justify-between mb-5">
                       <div className="flex items-center gap-2.5">
                          <Clock className="w-4 h-4 text-brand-gold" />
                          <span className="text-[11px] font-black text-white uppercase tracking-[0.3em]">Operational Timeline</span>
                       </div>
                       <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                          <span className="text-[10px] font-mono text-brand-gold/60">PHASE_03_SYNC</span>
                       </div>
                    </div>
                    <div className="space-y-4">
                       <TimelineStep label="Strategic Protocol Alignment" time="01:21 PM" status="complete" />
                       <TimelineStep label="AI Facilitation Logic Sync" time="01:18 PM" status="active" />
                       <TimelineStep label="Governance Verification" time="01:15 PM" status="pending" />
                    </div>
                 </div>

                 {/* Coordination Map */}
                 <div className="rounded-[24px] bg-[#080B14]/80 border border-white/5 relative overflow-hidden group/map shadow-inner">
                    <Image src="/operational-map.png" alt="Map" fill className="object-cover opacity-[0.15] grayscale transition-all duration-1000 group-hover/map:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E18] via-transparent to-transparent" />
                    <div className="absolute top-5 left-6 flex items-center gap-3">
                       <Globe className="w-4 h-4 text-brand-gold" />
                       <span className="text-[11px] font-black text-white uppercase tracking-[0.3em]">Global Coordination</span>
                    </div>
                    <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
                       <div className="flex -space-x-3">
                          {[1,2,3,4,5].map(i => <div key={i} className="w-7 h-7 rounded-full bg-brand-gold/20 border-2 border-[#0A0E18] backdrop-blur-md shadow-xl" />)}
                       </div>
                       <div className="text-right">
                          <div className="text-[12px] font-bold text-white tracking-tight leading-none mb-1">1,240 Nodes Connected</div>
                          <div className="text-[9px] font-black text-brand-gold/40 uppercase tracking-widest">Live Regional Sync</div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>

            {/* BOTTOM METRICS ROW: 4 EQUAL CARDS */}
            <div className="grid grid-cols-4 gap-5">
              {metrics.map((m, i) => (
                <div key={i} className="h-[110px] rounded-[18px] bg-[#0C1018]/92 border border-white/5 p-5 flex flex-col justify-between group hover:border-brand-gold/30 transition-all duration-500 shadow-xl">
                   <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-brand-gold/20 transition-all">
                      <m.icon className="w-4.5 h-4.5 text-white/30 group-hover:text-brand-gold transition-colors" />
                   </div>
                   <div>
                      <div className="text-[22px] font-bold text-white tracking-tighter leading-none mb-1">{m.val}</div>
                      <div className="text-[10px] font-black text-white/20 uppercase tracking-widest">{m.label}</div>
                   </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDEBAR: INTELLIGENCE PANELS */}
          <div className="flex flex-col gap-[22px]">
            {/* OPERATIONAL HEALTH */}
            <div className="p-6 rounded-[28px] bg-[#0A0E18] border border-white/5 space-y-6 shadow-2xl relative group/health overflow-hidden">
               <div className="absolute top-0 right-0 p-5 opacity-[0.03] group-hover/health:opacity-[0.08] transition-opacity">
                  <Activity className="w-16 h-16 text-white" />
               </div>
               <div className="flex items-center gap-3 relative z-10">
                  <Activity className="w-4.5 h-4.5 text-brand-gold" />
                  <span className="text-[11px] font-black text-white uppercase tracking-[0.3em]">Operational Health</span>
               </div>
               <div className="flex items-center gap-8 relative z-10">
                  <div className="relative w-24 h-24 flex items-center justify-center">
                     <svg className="w-full h-full -rotate-90">
                        <circle cx="48" cy="48" r="42" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="8" />
                        <motion.circle 
                           cx="48" cy="48" r="42" fill="none" stroke="#F5B942" strokeWidth="8" 
                           strokeDasharray="264" 
                           initial={{ strokeDashoffset: 264 }}
                           whileInView={{ strokeDashoffset: 40 }}
                           transition={{ duration: 1.5, ease: "easeOut" }}
                           className="shadow-[0_0_15px_rgba(245,185,66,0.3)]" 
                        />
                     </svg>
                     <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-[20px] font-bold text-white tracking-tighter">94%</span>
                        <span className="text-[8px] text-brand-gold font-black uppercase tracking-widest">Health</span>
                     </div>
                  </div>
                  <div className="flex-1 space-y-3">
                     <HealthStatSmall label="Engagement" val="Optimal" color="text-emerald-500" />
                     <HealthStatSmall label="Attendance" val="98.2%" />
                     <HealthStatSmall label="Sync Latency" val="12ms" />
                  </div>
               </div>
            </div>

            {/* AI FACILITATOR ASSISTANT */}
            <div className="p-6 rounded-[28px] bg-[#0A0E18] border border-white/5 space-y-5 shadow-2xl relative">
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <Brain className="w-4.5 h-4.5 text-brand-gold" />
                     <span className="text-[11px] font-black text-white uppercase tracking-[0.3em]">AI Facilitator Assistant</span>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
               </div>
               <div className="p-4 rounded-xl bg-brand-gold/5 border border-brand-gold/10 space-y-4">
                  <div className="text-[12px] text-white/70 leading-relaxed font-medium italic">
                    "Engagement drift detected in Cluster_04. Suggest initializing interactive protocol B to maintain momentum."
                  </div>
                  <button className="w-full h-11 rounded-xl bg-brand-gold text-black text-[11px] font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-brand-gold/10">
                     Apply Recommendation
                  </button>
               </div>
               <div className="space-y-3 pt-1">
                  <div className="flex items-center justify-between text-[10px] font-black text-white/20 uppercase tracking-widest">AI Confidence Index</div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full w-[98%] bg-brand-gold" />
                  </div>
               </div>
            </div>

            {/* DECISION LAYER */}
            <div className="p-6 rounded-[28px] bg-[#0A0E18] border border-white/5 space-y-5 shadow-2xl">
               <div className="flex items-center gap-3">
                  <Layers className="w-4.5 h-4.5 text-brand-gold" />
                  <span className="text-[11px] font-black text-white uppercase tracking-[0.3em]">Decision Matrix</span>
               </div>
               <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 group hover:border-brand-gold/20 transition-all duration-500 shadow-inner">
                     <div className="text-[10px] text-white/30 font-black uppercase tracking-widest mb-2">Protocol Action</div>
                     <div className="text-[14px] font-bold text-white mb-4 leading-tight">Re-route Sync Cluster 04 to Primary Infrastructure</div>
                     <div className="flex gap-2.5">
                        <button className="flex-1 h-9 rounded-lg bg-brand-gold text-black text-[10px] font-black uppercase tracking-widest hover:brightness-110">Approve</button>
                        <button className="flex-1 h-9 rounded-lg bg-white/5 text-white/40 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">Dismiss</button>
                     </div>
                  </div>
               </div>
            </div>

            {/* LIVE OUTPUTS */}
            <div className="p-6 rounded-[28px] bg-[#0A0E18] border border-white/5 space-y-5 shadow-2xl">
               <div className="flex items-center gap-3">
                  <FileCheck className="w-4.5 h-4.5 text-brand-gold" />
                  <span className="text-[11px] font-black text-white uppercase tracking-[0.3em]">Institutional Outputs</span>
               </div>
               <div className="space-y-3">
                  <OutputLine label="Operational Sync Log" time="2m ago" />
                  <OutputLine label="Compliance Audit" time="5m ago" />
                  <OutputLine label="Attendance Record" time="12m ago" />
               </div>
               <button className="w-full text-center text-brand-gold/40 text-[10px] font-black uppercase tracking-[0.3em] hover:text-brand-gold transition-colors pt-3">
                  View full logs
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ControlBtn({ icon: Icon, count, active = false }: { icon: any, count?: number, active?: boolean }) {
  return (
    <button className={cn(
      "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 relative group",
      active ? "bg-white/10 text-white border border-white/10 shadow-lg" : "bg-transparent text-white/30 hover:bg-white/5 hover:text-white"
    )}>
      <Icon className="w-5 h-5" />
      {count !== undefined && (
        <div className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-md bg-brand-gold text-black text-[9px] font-black flex items-center justify-center shadow-lg">
           {count}
        </div>
      )}
    </button>
  );
}

function TimelineStep({ label, time, status }: { label: string, time: string, status: "complete" | "active" | "pending" }) {
  return (
    <div className="flex items-center gap-4 group/step">
       <div className="text-[10px] font-mono text-white/20 w-12">{time}</div>
       <div className="relative flex flex-col items-center">
          <div className={cn(
            "w-2 h-2 rounded-full z-10 transition-all duration-500",
            status === "complete" ? "bg-brand-gold" : status === "active" ? "bg-brand-gold shadow-[0_0_10px_#F5B942]" : "bg-white/10"
          )} />
          <div className="absolute top-2 w-px h-8 bg-white/5" />
       </div>
       <div className="flex-1">
          <div className={cn(
            "text-[12px] font-bold group-hover/step:text-brand-gold transition-colors",
            status === "pending" ? "text-white/20" : "text-white/80"
          )}>{label}</div>
       </div>
    </div>
  );
}

function HealthStatSmall({ label, val, color }: { label: string, val: string, color?: string }) {
  return (
    <div className="flex items-center justify-between group">
       <span className="text-[10px] text-white/30 font-black uppercase tracking-widest group-hover:text-white/50 transition-colors">{label}</span>
       <span className={cn("text-[11px] font-bold", color ? color : "text-white")}>{val}</span>
    </div>
  );
}

function OutputLine({ label, time }: { label: string, time: string }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/20 transition-all duration-500 group">
       <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/40 group-hover:bg-brand-gold transition-all" />
          <span className="text-[11px] font-bold text-white/70 group-hover:text-white transition-colors">{label}</span>
       </div>
       <span className="text-[10px] text-white/20 font-mono tracking-tighter">{time}</span>
    </div>
  );
}
