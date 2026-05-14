"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Activity, Sparkles, Clock, Globe, Layers, FileText, 
  Mic, Video, Monitor, Users, Smile, MessageSquare, MoreHorizontal,
  TrendingUp, AlertCircle, CheckCircle2, ChevronRight, Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

const operationalFeatures = [
  { title: "Operational Health Engine", desc: "Real-time monitoring of institutional vitals.", icon: Activity },
  { title: "AI Facilitator Assistant", desc: "Intelligent moderation and engagement support.", icon: Sparkles },
  { title: "Live Delivery Timeline", desc: "Chronological tracking of programme milestones.", icon: Clock },
  { title: "Coordination Map", desc: "Global node orchestration and sync visualization.", icon: Globe },
  { title: "Decision Layer", desc: "AI-driven recommendations for programme leads.", icon: Layers },
  { title: "Structured Outputs", desc: "Automated compliance and performance records.", icon: FileText },
];

export function OperationalIntelligenceDashboard() {
  return (
    <section className="bg-[#050816] relative overflow-hidden py-[110px]">
      {/* Subtle Cinematic Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute top-0 left-0 right-0 h-full opacity-40"
          style={{ 
            backgroundImage: "radial-gradient(circle at top, rgba(255,190,40,0.08), transparent 38%)" 
          }} 
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[320px_1fr_320px] gap-[22px] items-start">
          
          {/* LEFT PANEL: OPERATIONAL CONTROL */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.3em]">LIVE OPERATION COMMAND</span>
              </div>
              <h2 className="text-[32px] font-bold text-white leading-tight tracking-tighter">
                Built for intelligent programme <span className="text-brand-gold">delivery.</span>
              </h2>
              <p className="text-[13px] text-white/40 leading-relaxed font-medium">
                OYEN GRID orchestrates live programme operations using AI intelligence, coordination systems, structured outputs, and institutional monitoring.
              </p>
            </div>

            <div className="space-y-3">
              {operationalFeatures.map((feat, i) => (
                <div 
                  key={i} 
                  className="h-[76px] px-4 py-3.5 rounded-[18px] bg-[#0C1018]/88 border border-white/[0.06] flex items-center gap-4 group cursor-pointer hover:border-brand-gold/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/10 transition-colors">
                    <feat.icon className="w-5 h-5 text-brand-gold/60 group-hover:text-brand-gold transition-colors" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[13px] font-bold text-white tracking-tight leading-none mb-1">{feat.title}</span>
                    <span className="text-[10px] text-white/30 truncate uppercase tracking-wider">{feat.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col gap-4">
              <button className="h-12 w-full bg-brand-gold text-black font-black text-[11px] uppercase tracking-widest rounded-xl hover:bg-brand-gold/90 transition-all shadow-[0_0_20px_rgba(245,185,66,0.2)]">
                Explore Live Command
              </button>
              <button className="flex items-center justify-center gap-2 text-[11px] font-black text-white/40 uppercase tracking-widest hover:text-white transition-colors">
                See it in action
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* CENTER PANEL: THE MAIN INTERFACE */}
          <div className="space-y-[18px]">
            {/* MAIN DASHBOARD CONTAINER */}
            <div className="relative h-[760px] rounded-[26px] bg-[#0A0D14] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col">
              
              {/* TOP BAR */}
              <div className="h-[60px] px-6 border-b border-white/[0.05] flex items-center justify-between bg-white/[0.02] shrink-0">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <span className="text-[12px] font-bold text-white/90">Leadership Alignment Session</span>
                    <span className="text-[9px] text-white/30 font-bold uppercase tracking-widest">AltSchool Africa : Batch 04</span>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-red-500/10 border border-red-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[9px] font-black text-red-500 uppercase tracking-widest">LIVE</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[12px] font-mono text-white/80 tabular-nums">01:24:58</span>
                    <span className="text-[8px] text-brand-gold font-bold uppercase tracking-widest">Excellent Connection</span>
                  </div>
                </div>
              </div>

              {/* MAIN CONTENT AREA */}
              <div className="flex-1 relative flex overflow-hidden">
                {/* VIDEO AREA */}
                <div className="flex-1 relative bg-black/40">
                  <Image 
                    src="/presenter-cinematic.png" 
                    alt="Presenter" 
                    fill 
                    className="object-cover"
                  />
                  
                  {/* OVERLAY: LIVE TELEMETRY */}
                  <div className="absolute top-4 left-4 p-3 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                      <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">Presenter_ID: AM-YF-01</span>
                      <div className="w-1 h-1 rounded-full bg-emerald-500" />
                    </div>
                    <div className="h-6 flex items-end gap-0.5">
                      {[30, 60, 45, 80, 50, 70, 40].map((h, i) => (
                        <div key={i} className="w-1 bg-brand-gold/30 rounded-t-[1px]" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>

                  {/* BOTTOM CONTROLS */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#0C1018]/90 backdrop-blur-xl border border-white/10 shadow-2xl">
                    <div className="flex items-center gap-2 border-r border-white/10 pr-3">
                      <button className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                        <Mic className="w-4 h-4 text-white/80" />
                      </button>
                      <button className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                        <Video className="w-4 h-4 text-white/80" />
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      {[
                        { icon: Monitor, label: "Share" },
                        { icon: Users, label: "Participants" },
                        { icon: Smile, label: "Reactions" },
                        { icon: MessageSquare, label: "Chat" },
                        { icon: MoreHorizontal, label: "More" }
                      ].map((btn, i) => (
                        <button key={i} className="w-9 h-9 rounded-lg hover:bg-white/5 transition-colors flex flex-col items-center justify-center gap-0.5">
                          <btn.icon className="w-4 h-4 text-white/40" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT: PARTICIPANT STACK */}
                <div className="w-[180px] bg-[#050816]/60 backdrop-blur-sm border-l border-white/[0.05] p-3 flex flex-col gap-2 overflow-y-auto">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="relative aspect-video rounded-lg bg-[#1A1D26] border border-white/5 overflow-hidden group">
                      <Image src={`/exec-avatar-1.png`} alt={`User ${i}`} fill className="object-cover grayscale group-hover:grayscale-0 transition-all" />
                      <div className="absolute bottom-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/40 backdrop-blur-md">
                        <span className="text-[7px] font-bold text-white/60">Node_0{i+1}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* LOWER ANALYTICS ROW */}
              <div className="h-[240px] px-6 py-6 bg-white/[0.01] border-t border-white/[0.05] grid grid-cols-2 gap-[18px]">
                {/* LIVE DELIVERY TIMELINE */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Live Delivery Timeline</span>
                    <span className="text-[8px] font-bold text-brand-gold uppercase tracking-[0.2em]">Operational Tracking</span>
                  </div>
                  <div className="flex-1 relative bg-white/[0.02] border border-white/5 rounded-xl p-4 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                      <div className="absolute top-1/2 left-0 w-full h-px bg-brand-gold/30" />
                      <div className="absolute top-0 left-1/4 w-px h-full bg-white/10" />
                      <div className="absolute top-0 left-1/2 w-px h-full bg-white/10" />
                      <div className="absolute top-0 left-3/4 w-px h-full bg-white/10" />
                    </div>
                    <div className="relative z-10 space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_#F5B942]" />
                        <span className="text-[11px] font-bold text-white/90">09:45 : Breakout Session Triggered</span>
                      </div>
                      <div className="ml-1.5 pl-4 border-l border-white/5 space-y-3">
                        <div className="p-2 rounded bg-brand-gold/5 border border-brand-gold/10">
                          <span className="text-[9px] text-brand-gold font-bold">AI Insight: Engagement spike detected in Cohort B</span>
                        </div>
                        <div className="flex gap-2">
                           <div className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[8px] font-bold text-white/40">Action Item: Review logs</div>
                           <div className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[8px] font-bold text-white/40">Status: Nominal</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* COORDINATION MAP */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Coordination Map</span>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-brand-gold animate-ping" />
                      <span className="text-[8px] font-bold text-brand-gold uppercase tracking-[0.2em]">Active Nodes</span>
                    </div>
                  </div>
                  <div className="flex-1 relative rounded-xl overflow-hidden border border-white/5">
                    <Image src="/global-network-map.png" alt="Map" fill className="object-cover opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] to-transparent opacity-40" />
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM METRICS */}
            <div className="grid grid-cols-4 gap-[18px]">
              {[
                { label: "Active Participants", val: "1,240+" },
                { label: "System Uptime", val: "99.995%" },
                { label: "Average Sync", val: "0.8ms" },
                { label: "Countries Connected", val: "140+" }
              ].map((m, i) => (
                <div key={i} className="h-[110px] p-5 rounded-[18px] bg-[#0C1018]/92 border border-white/[0.06] flex flex-col justify-between">
                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest leading-tight">{m.label}</span>
                  <div className="text-[24px] font-extrabold text-white tracking-tighter leading-none">{m.val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL: INTELLIGENCE STACK */}
          <div className="space-y-[18px]">
            {/* CARD 1: OPERATIONAL HEALTH */}
            <div className="p-6 rounded-[22px] bg-[#0C1018]/90 border border-white/[0.06] space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black text-white/40 uppercase tracking-widest">Operational Health</span>
                <TrendingUp className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="flex justify-center relative">
                <div className="w-28 h-28 rounded-full border-4 border-white/5 flex items-center justify-center relative">
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle cx="56" cy="56" r="52" fill="none" stroke="#F5B942" strokeWidth="4" strokeDasharray="326" strokeDashoffset="40" className="opacity-40" />
                  </svg>
                  <div className="flex flex-col items-center">
                    <span className="text-[20px] font-bold text-white tracking-tighter">94%</span>
                    <span className="text-[8px] font-black text-white/30 uppercase">Score</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                {[
                  { l: "Engagement", v: "88%" },
                  { l: "Attendance", v: "92%" },
                  { l: "Latency", v: "12ms" },
                  { l: "Risk Alerts", v: "02" }
                ].map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">{stat.l}</span>
                    <div className="text-[13px] font-bold text-white/80">{stat.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CARD 2: AI ASSISTANT */}
            <div className="p-6 rounded-[22px] bg-[#0C1018]/90 border border-white/[0.06] space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-brand-gold" />
                </div>
                <span className="text-[11px] font-black text-white/40 uppercase tracking-widest">AI Facilitator Assistant</span>
              </div>
              <div className="p-4 rounded-xl bg-brand-gold/5 border border-brand-gold/10 space-y-3">
                <p className="text-[12px] text-white/90 font-medium leading-relaxed">
                  "Engagement in breakout room 4 is dropping. Suggested intervention: deploy quick poll."
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[8px] font-bold text-brand-gold uppercase tracking-widest">Confidence Score</span>
                    <span className="text-[9px] font-mono text-brand-gold/60">0.98</span>
                  </div>
                  <button className="px-3 py-1 rounded bg-brand-gold text-black font-black text-[9px] uppercase tracking-widest">Deploy</button>
                </div>
              </div>
            </div>

            {/* CARD 3: DECISION LAYER */}
            <div className="p-6 rounded-[22px] bg-[#0C1018]/90 border border-white/[0.06] space-y-5">
              <span className="text-[11px] font-black text-white/40 uppercase tracking-widest">Decision Layer</span>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-white/90">Adjust Programme Velocity</span>
                    <p className="text-[9px] text-white/30">Current pace is 12% faster than target retention curve.</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 h-8 rounded bg-white/5 border border-white/10 text-[9px] font-black text-white/60 uppercase tracking-widest hover:bg-white/10 transition-colors">Dismiss</button>
                  <button className="flex-1 h-8 rounded bg-brand-gold/10 border border-brand-gold/20 text-[9px] font-black text-brand-gold uppercase tracking-widest hover:bg-brand-gold/20 transition-colors">Approve</button>
                </div>
              </div>
            </div>

            {/* CARD 4: LIVE OUTPUTS */}
            <div className="p-6 rounded-[22px] bg-[#0C1018]/90 border border-white/[0.06] space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black text-white/40 uppercase tracking-widest">Live Outputs</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="space-y-3">
                {[
                  "Operational_Report_S04.pdf",
                  "Compliance_Logs_Verified",
                  "Attendance_Summary_Live"
                ].map((log, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/[0.05]">
                    <div className="flex items-center gap-2">
                      <FileText className="w-3 h-3 text-white/20" />
                      <span className="text-[10px] text-white/60 font-medium">{log}</span>
                    </div>
                    <Zap className="w-3 h-3 text-brand-gold/40" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
