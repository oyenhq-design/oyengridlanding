"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Activity, Brain, Clock, Globe, Layers, FileCheck, 
  Mic, Video, Monitor, Users, Smile, MessageSquare, MoreHorizontal,
  ArrowUpRight, ShieldCheck, Zap, Globe2, ChevronRight, CheckCircle2,
  AlertCircle, BarChart3, TrendingUp, Search, Radio, Wifi
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  { title: "Operational Health", desc: "Real-time system monitoring.", icon: Activity, highlight: true },
  { title: "AI Facilitator", desc: "Automated session moderation.", icon: Brain, highlight: true },
  { title: "Delivery Timeline", desc: "Programme tracking.", icon: Clock },
  { title: "Coordination Map", desc: "Global visualization.", icon: Globe },
  { title: "Decision Layer", desc: "Intelligence-driven recs.", icon: Layers },
  { title: "Structured Outputs", desc: "Automated reporting.", icon: FileCheck },
];

const metrics = [
  { label: "Active Participants", val: "1,240+", sub: "GLOBAL" },
  { label: "System Uptime", val: "99.995%", sub: "NETWORK" },
  { label: "Average Sync", val: "0.8ms", sub: "LATENCY" },
  { label: "Global Reach", val: "140+", sub: "COUNTRIES" },
];

export function InstitutionalCommandCenter() {
  return (
    <section className="bg-[#050816] relative py-[90px] overflow-hidden">
      
      {/* ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/institutional-atmosphere.png" 
          alt="Atmosphere" 
          fill 
          className="object-cover opacity-[0.1] blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-transparent to-[#050816]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_top,rgba(245,185,66,0.06),transparent_50%)]" />
      </div>

      <div className="max-w-[1380px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_280px] gap-[18px] items-stretch">
          
          {/* LEFT SIDEBAR: COMPACT FEATURES */}
          <div className="flex flex-col gap-8">
            <div className="pl-1">
              <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.4em] mb-3 block">
                OPERATIONAL COMMAND
              </span>
              <h2 className="text-[28px] font-bold text-white leading-[0.92] tracking-[-0.04em] mb-4">
                Intelligent <br /> programme <span className="text-brand-gold italic">delivery.</span>
              </h2>
            </div>

            <div className="space-y-2">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-[58px] px-4 rounded-[14px] flex items-center gap-3.5 border transition-all duration-300",
                    feature.highlight 
                      ? "bg-white/[0.04] border-white/10" 
                      : "bg-transparent border-transparent opacity-40 hover:opacity-100"
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                    feature.highlight ? "bg-brand-gold/10 text-brand-gold" : "bg-white/5 text-white/40"
                  )}>
                    <feature.icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[12px] font-bold text-white truncate">{feature.title}</h3>
                    <p className="text-[9px] text-white/30 truncate uppercase tracking-tighter">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-4 border-t border-white/5">
              <button className="w-full h-12 rounded-xl bg-brand-gold text-black font-black text-[12px] uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-brand-gold/10">
                Explore Interface
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* CENTER: THE BALANCED INTERFACE */}
          <div className="flex flex-col gap-[18px]">
            {/* MAIN COMMAND PANEL (420px height) */}
            <div className="h-[420px] rounded-[24px] bg-[#0A0E18] border border-white/5 overflow-hidden flex flex-col shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
              {/* HEADER BAR (52px) */}
              <div className="h-[52px] border-b border-white/5 px-6 flex items-center justify-between bg-white/[0.02]">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]" />
                    <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">LIVE</span>
                  </div>
                  <span className="text-[12px] font-bold text-white/80">Leadership Alignment Session • Institutional OS</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-white/30">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-mono tracking-widest">01:24:58</span>
                  </div>
                  <div className="h-4 w-px bg-white/10" />
                  <div className="flex items-center gap-2 text-brand-gold">
                    <Wifi className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Connected</span>
                  </div>
                </div>
              </div>

              {/* MAIN VIDEO ROW (280px) */}
              <div className="h-[280px] flex p-3.5 gap-3.5">
                {/* Main Presenter (1fr) */}
                <div className="flex-1 relative rounded-[18px] overflow-hidden border border-white/5 bg-black/40">
                  <Image 
                    src="/institutional-leader-v2.png" 
                    alt="Presenter" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-5 flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center">
                      <Mic className="w-3.5 h-3.5 text-brand-gold" />
                    </div>
                    <span className="text-[11px] font-bold text-white">Director, Programme Operations</span>
                  </div>
                </div>

                {/* Participant Column (220px) */}
                <div className="w-[220px] flex flex-col gap-2.5">
                  {[1, 2, 3, 4].map(p => (
                    <div key={p} className="h-[58px] rounded-[14px] bg-black/40 border border-white/5 p-2 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/5 overflow-hidden relative grayscale">
                        <Image src="/institutional-participants.png" alt="Participant" fill className="object-cover opacity-60" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[11px] font-bold text-white/80 truncate">Partner Node {p}</div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-1 h-1 rounded-full bg-emerald-500" />
                          <span className="text-[9px] text-white/20 font-black uppercase tracking-widest">Sync Active</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CONTROL BAR (54px) */}
              <div className="h-[54px] border-t border-white/5 px-6 flex items-center justify-between bg-white/[0.01]">
                <div className="flex items-center gap-3">
                  <ControlBtn icon={Mic} active />
                  <ControlBtn icon={Video} active />
                  <ControlBtn icon={Monitor} />
                  <div className="h-6 w-px bg-white/10 mx-1" />
                  <ControlBtn icon={Users} />
                  <ControlBtn icon={MessageSquare} />
                </div>
                <div className="flex items-center gap-3">
                   <ControlBtn icon={MoreHorizontal} />
                   <button className="h-9 px-6 rounded-xl bg-red-500/10 text-red-500 text-[11px] font-black uppercase tracking-widest border border-red-500/20 hover:bg-red-500 hover:text-white transition-all">
                     End Sync
                   </button>
                </div>
              </div>
            </div>

            {/* ANALYTICS ROW (120px) */}
            <div className="h-[120px] grid grid-cols-2 gap-[18px]">
              <div className="rounded-[20px] bg-[#0A0E18] border border-white/5 p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-2 text-white/40">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">Live Timeline</span>
                   </div>
                   <div className="text-[9px] font-mono text-brand-gold opacity-60 uppercase">Node_B_Syncing</div>
                </div>
                <div className="space-y-2">
                   <TimelineItem label="Strategy Review" status="complete" />
                   <TimelineItem label="Operational Alignment" status="active" />
                </div>
              </div>
              <div className="rounded-[20px] bg-[#0A0E18] border border-white/5 relative overflow-hidden group">
                 <Image src="/operational-map.png" alt="Map" fill className="object-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E18] via-transparent to-transparent" />
                 <div className="absolute top-4 left-4 flex items-center gap-2 text-white/40">
                    <Globe className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Coordination Map</span>
                 </div>
                 <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex -space-x-1.5">
                       {[1,2,3].map(i => <div key={i} className="w-4 h-4 rounded-full bg-brand-gold/30 border border-[#0A0E18]" />)}
                    </div>
                    <span className="text-[9px] font-mono text-brand-gold">142 Connected</span>
                 </div>
              </div>
            </div>

            {/* METRIC ROW (88px) */}
            <div className="h-[88px] grid grid-cols-4 gap-[18px]">
              {metrics.map((m, i) => (
                <div key={i} className="rounded-[18px] bg-white/[0.02] border border-white/5 p-3.5 flex flex-col justify-center">
                   <div className="text-[8px] font-black text-brand-gold/60 uppercase tracking-widest mb-1">{m.sub}</div>
                   <div className="text-[18px] font-bold text-white tracking-tighter leading-none mb-0.5">{m.val}</div>
                   <div className="text-[9px] text-white/20 font-bold uppercase truncate">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDEBAR: INSIGHT PANEL */}
          <div className="flex flex-col gap-[18px]">
            {/* AI Assistant (Tighter) */}
            <div className="p-4 rounded-[20px] bg-[#0A0E18] border border-white/5 space-y-4 shadow-xl">
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                     <Brain className="w-4 h-4 text-brand-gold" />
                     <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">AI INSIGHT</span>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
               </div>
               <div className="text-[12px] text-white/60 leading-relaxed font-medium">
                  "Institutional engagement dropping. Suggest re-triggering alignment protocol B."
               </div>
               <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-bold">
                     <span className="text-white/20 uppercase tracking-widest">Confidence</span>
                     <span className="text-brand-gold">98%</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full w-[98%] bg-brand-gold" />
                  </div>
               </div>
               <button className="w-full h-10 rounded-xl bg-white/[0.04] text-[11px] font-black uppercase tracking-widest text-white hover:bg-brand-gold hover:text-black transition-all">
                  Trigger Sync
               </button>
            </div>

            {/* Operational Health */}
            <div className="p-4 rounded-[20px] bg-[#0A0E18] border border-white/5 space-y-4">
               <div className="flex items-center gap-2.5">
                  <Activity className="w-4 h-4 text-brand-gold" />
                  <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">System Health</span>
               </div>
               <div className="flex items-center gap-5">
                  <div className="relative w-14 h-14 flex items-center justify-center">
                     <svg className="w-full h-full -rotate-90">
                        <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="4" />
                        <circle cx="28" cy="28" r="24" fill="none" stroke="#F5B942" strokeWidth="4" strokeDasharray="150" strokeDashoffset="20" />
                     </svg>
                     <span className="absolute text-[12px] font-bold text-white">94%</span>
                  </div>
                  <div className="flex-1 space-y-2">
                     <HealthStatSmall label="Engagement" val="Opt" />
                     <HealthStatSmall label="Latency" val="12ms" />
                  </div>
               </div>
            </div>

            {/* Decision Matrix */}
            <div className="p-4 rounded-[20px] bg-[#0A0E18] border border-white/5 space-y-3.5">
               <div className="flex items-center gap-2.5">
                  <Layers className="w-4 h-4 text-brand-gold" />
                  <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Decision Matrix</span>
               </div>
               <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-[11px] font-bold text-white/80 mb-3">Reroute Sync Node 04</div>
                  <div className="flex gap-2">
                     <button className="flex-1 h-8 rounded-lg bg-brand-gold text-black text-[9px] font-black uppercase tracking-widest">Approve</button>
                     <button className="flex-1 h-8 rounded-lg bg-white/5 text-white/40 text-[9px] font-black uppercase tracking-widest hover:text-white">Ignore</button>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ControlBtn({ icon: Icon, active = false }: { icon: any, active?: boolean }) {
  return (
    <button className={cn(
      "w-[38px] h-[38px] rounded-full flex items-center justify-center transition-all duration-300",
      active ? "bg-white/10 text-white border border-white/10 shadow-lg" : "bg-transparent text-white/20 hover:bg-white/5 hover:text-white"
    )}>
      <Icon className="w-4 h-4" />
    </button>
  );
}

function TimelineItem({ label, status }: { label: string, status: "complete" | "active" }) {
  return (
    <div className="flex items-center gap-3">
       <div className={cn(
         "w-1.5 h-1.5 rounded-full shrink-0",
         status === "complete" ? "bg-brand-gold" : "bg-brand-gold animate-pulse shadow-[0_0_8px_#F5B942]"
       )} />
       <span className={cn(
         "text-[10px] font-bold truncate",
         status === "active" ? "text-white" : "text-white/40"
       )}>{label}</span>
    </div>
  );
}

function HealthStatSmall({ label, val }: { label: string, val: string }) {
  return (
    <div className="flex items-center justify-between">
       <span className="text-[9px] text-white/20 font-black uppercase tracking-widest">{label}</span>
       <span className="text-[10px] font-bold text-white">{val}</span>
    </div>
  );
}
