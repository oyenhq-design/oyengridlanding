"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Activity, Brain, Clock, Globe, Layers, FileCheck, 
  Mic, Video, Monitor, Users, Smile, MessageSquare, MoreHorizontal,
  ArrowUpRight, ShieldCheck, Zap, Globe2, ChevronRight, CheckCircle2,
  AlertCircle, BarChart3, TrendingUp, Search, Radio, Wifi, 
  Bell, Share2, PhoneOff, Settings, Info, Shield, Target
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  { title: "Operational Health Engine", desc: "Live infrastructure monitoring.", icon: Activity },
  { title: "AI Facilitation Assistant", desc: "Intelligence-driven moderation.", icon: Brain },
  { title: "Delivery Intelligence", desc: "Predictive programme analytics.", icon: Target },
  { title: "Coordination Map", desc: "Global participant distribution.", icon: Globe },
  { title: "Decision Layer", desc: "AI-driven operational logic.", icon: Layers },
  { title: "Structured Outputs", desc: "Automated institutional records.", icon: FileCheck },
];

const bottomMetrics = [
  { label: "Active Participants", val: "1,240+", icon: Users },
  { label: "System Uptime", val: "99.995%", icon: ShieldCheck },
  { label: "Average Sync Latency", val: "0.8ms", icon: Zap },
  { label: "Active Programmes", val: "482", icon: BarChart3 },
  { label: "Sessions Today", val: "156", icon: Clock },
  { label: "Countries Connected", val: "140+", icon: Globe2 },
];

export function InstitutionalCommandCenter() {
  return (
    <section className="bg-[#050816] relative py-[90px] overflow-hidden min-h-[900px] flex items-center">
      
      {/* 1. ARCHITECTURAL BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/institutional-atmosphere.png" 
          alt="Atmosphere" 
          fill 
          className="object-cover opacity-[0.06] blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-transparent to-[#050816]" />
        
        {/* Subtle Structural Grids */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_top,rgba(245,185,66,0.05),transparent_60%)]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-10 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_320px] gap-8 items-start">
          
          {/* LEFT COLUMN: INFORMATION & FEATURES */}
          <div className="flex flex-col h-full py-2">
            <div className="mb-10">
              <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.4em] mb-4 block">
                OPERATIONAL COMMAND
              </span>
              <h2 className="text-[34px] font-bold text-white leading-[1.1] tracking-[-0.04em] mb-6">
                Built for intelligent <br /> programme <span className="text-brand-gold italic">delivery.</span>
              </h2>
              <p className="text-[14px] text-white/40 leading-relaxed font-medium">
                OYEN GRID orchestrates every layer of programme operations with real-time intelligence, AI guidance, and institutional control.
              </p>
            </div>

            <div className="space-y-2.5 mb-10">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="h-[52px] px-4 rounded-[14px] flex items-center gap-4 bg-white/[0.02] border border-white/5 hover:border-brand-gold/20 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0">
                    <feature.icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[12px] font-bold text-white truncate">{feature.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <button className="w-full h-14 rounded-2xl bg-brand-gold text-black font-black text-[13px] uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-xl shadow-brand-gold/10">
                Explore Platform
                <ArrowUpRight className="w-4.5 h-4.5" />
              </button>
              <button className="w-full h-14 rounded-2xl bg-white/[0.03] border border-white/10 text-white font-black text-[13px] uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/[0.06] transition-all">
                Request Demo
              </button>
            </div>
          </div>

          {/* CENTER DASHBOARD: LIVE OPERATIONAL SESSION */}
          <div className="flex flex-col gap-5">
            <div className="rounded-[32px] bg-[#0A0E18] border border-white/5 overflow-hidden flex flex-col shadow-[0_40px_100px_rgba(0,0,0,0.6)] relative">
              
              {/* TOP BAR */}
              <div className="h-[56px] border-b border-white/5 px-8 flex items-center justify-between bg-white/[0.02] backdrop-blur-xl">
                <div className="flex items-center gap-5">
                  <span className="text-[13px] font-bold text-white/80 tracking-tight">Institutional Global Delivery • Cluster_04</span>
                  <div className="flex items-center gap-2.5 px-2.5 py-1 rounded bg-red-500/10 border border-red-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[9px] font-black text-red-500 uppercase tracking-widest">LIVE SESSION</span>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-3.5 h-3.5 text-white/20" />
                    <span className="text-[11px] font-mono text-white/50 tracking-widest">01:24:58</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Wifi className="w-3.5 h-3.5 text-brand-gold" />
                    <span className="text-[10px] font-black text-brand-gold uppercase tracking-widest">CONNECTED</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/30">
                    <Users className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-mono">1,240</span>
                  </div>
                  <div className="h-4 w-px bg-white/10 mx-1" />
                  <Bell className="w-4 h-4 text-white/40 hover:text-white cursor-pointer" />
                </div>
              </div>

              {/* MAIN SESSION AREA: VIDEO & PARTICIPANTS */}
              <div className="h-[380px] flex p-4 gap-4 bg-black/40">
                {/* Facilitator Video Feed */}
                <div className="flex-1 relative rounded-[24px] overflow-hidden border border-white/5 bg-[#0D1018]">
                  <Image 
                    src="/institutional-leader-v2.png" 
                    alt="Facilitator" 
                    fill 
                    className="object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Branding Overlay */}
                  <div className="absolute top-5 left-6 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_#F5B942]" />
                    <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">FACILITATOR ACTIVE</span>
                  </div>

                  <div className="absolute bottom-6 left-8">
                    <div className="text-[18px] font-bold text-white tracking-tight leading-tight">Director of Institutional Operations</div>
                    <div className="text-[10px] font-black text-brand-gold/60 uppercase tracking-[0.3em] mt-1">OYEN GRID COMMAND</div>
                  </div>
                </div>

                {/* Participant Stack */}
                <div className="w-[200px] flex flex-col gap-2.5 overflow-hidden">
                  {[1, 2, 3, 4].map(p => (
                    <div key={p} className="h-[64px] rounded-[16px] bg-white/[0.02] border border-white/5 p-3 flex items-center gap-3 group transition-all hover:bg-white/[0.04]">
                      <div className="w-10 h-10 rounded-xl bg-white/5 overflow-hidden relative grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500">
                        <Image src="/institutional-participants.png" alt="Node" fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[11px] font-bold text-white truncate">Node Cluster {p}</div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_5px_#10b981]" />
                          <span className="text-[9px] text-white/30 font-black uppercase tracking-widest">ONLINE</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* BOTTOM CONTROLS */}
              <div className="h-[64px] border-t border-white/5 px-8 flex items-center justify-between bg-white/[0.01]">
                <div className="flex items-center gap-3">
                  <ControlBtn icon={Mic} active />
                  <ControlBtn icon={Video} active />
                  <ControlBtn icon={Share2} />
                  <div className="h-6 w-px bg-white/10 mx-2" />
                  <ControlBtn icon={Users} />
                  <ControlBtn icon={MessageSquare} />
                  <ControlBtn icon={Smile} />
                </div>
                <div className="flex items-center gap-4">
                  <ControlBtn icon={Settings} />
                  <ControlBtn icon={MoreHorizontal} />
                  <button className="h-10 px-6 rounded-xl bg-red-500/10 text-red-500 text-[11px] font-black uppercase tracking-widest border border-red-500/20 hover:bg-red-500 hover:text-white transition-all">
                    End Session
                  </button>
                </div>
              </div>
            </div>

            {/* LOWER ANALYTICS PANELS */}
            <div className="grid grid-cols-3 gap-5 h-[200px]">
              {/* 1. Delivery Timeline */}
              <div className="rounded-[24px] bg-[#0A0E18] border border-white/5 p-5 flex flex-col justify-between shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-4 h-4 text-brand-gold" />
                  <span className="text-[11px] font-black text-white uppercase tracking-[0.2em]">Delivery Timeline</span>
                </div>
                <div className="space-y-4">
                  <TimelineItem label="Strategy Review" status="complete" />
                  <TimelineItem label="Operational Alignment" status="active" />
                  <TimelineItem label="Final Sync" status="pending" />
                </div>
              </div>

              {/* 2. Programme Progress */}
              <div className="rounded-[24px] bg-[#0A0E18] border border-white/5 p-5 flex flex-col justify-between shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <Activity className="w-4 h-4 text-brand-gold" />
                  <span className="text-[11px] font-black text-white uppercase tracking-[0.2em]">Programme Progress</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90">
                      <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="6" />
                      <circle cx="40" cy="40" r="34" fill="none" stroke="#F5B942" strokeWidth="6" strokeDasharray="214" strokeDashoffset="54" />
                    </svg>
                    <span className="absolute text-[14px] font-bold text-white">75%</span>
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <div className="text-[10px] text-white/30 font-black uppercase tracking-widest">Active Module</div>
                    <div className="text-[12px] font-bold text-white leading-tight">Module 04: Scaling</div>
                    <div className="text-[9px] text-brand-gold font-bold uppercase">Assessments: 8/10</div>
                  </div>
                </div>
              </div>

              {/* 3. Coordination Map */}
              <div className="rounded-[24px] bg-[#0A0E18] border border-white/5 relative overflow-hidden group shadow-xl">
                <Image src="/operational-map.png" alt="Map" fill className="object-cover opacity-[0.15] grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E18] via-transparent to-transparent" />
                <div className="absolute top-5 left-6 flex items-center gap-3">
                  <Globe className="w-4 h-4 text-brand-gold" />
                  <span className="text-[11px] font-black text-white uppercase tracking-[0.2em]">Coordination Map</span>
                </div>
                <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
                   <div className="flex -space-x-1.5">
                      {[1,2,3].map(i => <div key={i} className="w-5 h-5 rounded-full bg-brand-gold/30 border border-[#0A0E18] backdrop-blur-md" />)}
                   </div>
                   <div className="text-[9px] font-mono text-brand-gold/60 uppercase">Live_Sync_142_Nodes</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR: INTELLIGENCE PANELS */}
          <div className="flex flex-col gap-5">
            {/* Operational Health Score */}
            <div className="p-5 rounded-[24px] bg-[#0A0E18] border border-white/5 space-y-5 shadow-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Activity className="w-4 h-4 text-brand-gold" />
                  <span className="text-[11px] font-black text-white uppercase tracking-[0.2em]">Health Score</span>
                </div>
                <span className="text-[16px] font-bold text-white tracking-tighter">94%</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <HealthMetric label="Engagement" val="88%" />
                <HealthMetric label="Attendance" val="94%" />
                <HealthMetric label="Response" val="92%" />
                <HealthMetric label="Latency" val="12ms" />
              </div>
            </div>

            {/* AI Assistant Panel */}
            <div className="p-5 rounded-[24px] bg-[#0A0E18] border border-white/5 space-y-4 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Brain className="w-4 h-4 text-brand-gold" />
                  <span className="text-[11px] font-black text-white uppercase tracking-[0.2em]">AI Assistant</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse shadow-[0_0_8px_#F5B942]" />
              </div>
              <div className="p-3.5 rounded-xl bg-brand-gold/5 border border-brand-gold/10">
                <div className="text-[12px] text-white/70 leading-relaxed font-medium italic mb-3">
                  "Engagement drop detected in Cluster B. Recommend triggering interactive poll."
                </div>
                <button className="w-full h-10 rounded-xl bg-brand-gold text-black text-[11px] font-black uppercase tracking-widest hover:brightness-110 transition-all">
                  Apply Recommendation
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-white/20 font-black uppercase tracking-widest">Confidence Score</span>
                <span className="text-[10px] text-brand-gold font-bold">98.2%</span>
              </div>
            </div>

            {/* Risk Alerts Panel */}
            <div className="p-5 rounded-[24px] bg-[#0A0E18] border border-white/5 space-y-4">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-4 h-4 text-red-500" />
                <span className="text-[11px] font-black text-white uppercase tracking-[0.2em]">Risk Alerts</span>
              </div>
              <div className="space-y-2.5">
                <RiskItem label="Engagement Drift" severity="low" />
                <RiskItem label="Attendance Risk" severity="med" />
                <RiskItem label="Low Participation" severity="low" />
              </div>
            </div>

            {/* Automated Outputs */}
            <div className="p-5 rounded-[24px] bg-[#0A0E18] border border-white/5 space-y-4">
              <div className="flex items-center gap-3">
                <FileCheck className="w-4 h-4 text-brand-gold" />
                <span className="text-[11px] font-black text-white uppercase tracking-[0.2em]">Automated Outputs</span>
              </div>
              <div className="space-y-2">
                <OutputItem label="Session Summary" />
                <OutputItem label="Action Items" />
                <OutputItem label="Attendance Report" />
                <OutputItem label="Compliance Log" />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM METRICS ROW: 6 CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-10">
          {bottomMetrics.map((m, i) => (
            <div key={i} className="p-5 rounded-[20px] bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.04] transition-all duration-500 group">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mb-3 group-hover:bg-brand-gold/10 group-hover:text-brand-gold transition-colors">
                <m.icon className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-[20px] font-bold text-white tracking-tighter mb-0.5">{m.val}</div>
              <div className="text-[10px] text-white/20 font-black uppercase tracking-widest">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ControlBtn({ icon: Icon, active = false }: { icon: any, active?: boolean }) {
  return (
    <button className={cn(
      "w-[38px] h-[38px] rounded-full flex items-center justify-center transition-all duration-300 relative group",
      active ? "bg-white/10 text-white border border-white/10 shadow-lg" : "bg-transparent text-white/30 hover:bg-white/5 hover:text-white"
    )}>
      <Icon className="w-4 h-4" />
      {active && <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-brand-gold/40 blur-[1px]" />}
    </button>
  );
}

function TimelineItem({ label, status }: { label: string, status: "complete" | "active" | "pending" }) {
  return (
    <div className="flex items-center gap-3 group">
      <div className={cn(
        "w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-500 relative",
        status === "complete" ? "bg-brand-gold" : status === "active" ? "bg-brand-gold shadow-[0_0_8px_#F5B942]" : "bg-white/10"
      )}>
        {status === "active" && <div className="absolute inset-0 bg-brand-gold animate-ping opacity-40 rounded-full" />}
      </div>
      <span className={cn(
        "text-[10px] font-bold tracking-tight uppercase",
        status === "active" ? "text-white" : "text-white/30"
      )}>{label}</span>
    </div>
  );
}

function HealthMetric({ label, val }: { label: string, val: string }) {
  return (
    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
      <div className="text-[9px] text-white/20 font-black uppercase tracking-widest mb-1">{label}</div>
      <div className="text-[14px] font-bold text-white">{val}</div>
    </div>
  );
}

function RiskItem({ label, severity }: { label: string, severity: "low" | "med" }) {
  return (
    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
      <span className="text-[10px] font-bold text-white/60">{label}</span>
      <span className={cn(
        "text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded",
        severity === "med" ? "bg-orange-500/10 text-orange-500 border border-orange-500/20" : "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
      )}>{severity}</span>
    </div>
  );
}

function OutputItem({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5 group hover:border-brand-gold/30 transition-all cursor-pointer">
      <span className="text-[10px] font-bold text-white/40 group-hover:text-white transition-colors">{label}</span>
      <ArrowUpRight className="w-3 h-3 text-white/10 group-hover:text-brand-gold transition-all" />
    </div>
  );
}
