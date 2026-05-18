"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Brain, Shield, Activity, Target, Layers, FileText,
  Map, Cpu, ArrowRight, Mic, MicOff, Video, VideoOff,
  Monitor, Users, MessageSquare, Smile, MoreHorizontal,
  PhoneOff, Wifi, Clock, CheckCircle2, AlertCircle, ChevronRight
} from "lucide-react";

const leftCapabilities = [
  { icon: Activity, title: "Operational Health Engine", desc: "Live monitoring of engagement, attendance quality, and delivery risk." },
  { icon: Brain, title: "AI Facilitator Assistant", desc: "Real-time insights, smart summaries, and action recommendations." },
  { icon: Clock, title: "Live Delivery Timeline", desc: "Track every moment, action, and interaction as it happens." },
  { icon: Map, title: "Coordination Map", desc: "Visualize connected teams, regions, and operational dependencies." },
  { icon: Target, title: "Decision Layer", desc: "AI-powered recommendations to keep programmes on track." },
  { icon: FileText, title: "Structured Outputs", desc: "Automated reports, actions, attendance, and compliance logs." },
];

const timelineEvents = [
  { label: "Presentation", color: "#3b82f6", width: "22%", time: "09:00" },
  { label: "Discussion", color: "#10b981", width: "18%", time: "09:22" },
  { label: "Breakout", color: "#f5b82e", width: "20%", time: "09:40" },
  { label: "Q&A", color: "#8b5cf6", width: "18%", time: "10:00" },
  { label: "Action Items", color: "#ef4444", width: "22%", time: "10:18" },
];

const participants = [
  { label: "Facilitator", color: "#f5b82e" },
  { label: "Co-Facilitator", color: "#10b981" },
  { label: "Participant", color: "#3b82f6" },
  { label: "Participant", color: "#8b5cf6" },
];

const metrics = [
  { val: "1,240+", label: "Active Participants" },
  { val: "99.995%", label: "System Uptime" },
  { val: "0.8ms", label: "Average Sync" },
  { val: "140+", label: "Countries Connected" },
];

export function InstitutionalCommandCenter() {
  return (
    <section className="bg-[#040816] relative py-16 overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[700px] bg-[radial-gradient(ellipse_at_top,rgba(245,184,46,0.05),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-[radial-gradient(ellipse,rgba(59,130,246,0.03),transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-[24%_48%_28%] gap-6 items-start">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-[#f5b82e] shadow-[0_0_8px_#f5b82e]" />
                <span className="text-[9px] font-black text-[#f5b82e] uppercase tracking-[0.5em]">Live Operation Command</span>
              </div>
              <h2 className="text-[42px] font-bold text-white leading-[0.95] tracking-tight mb-4">
                Built for intelligent<br />programme{" "}
                <span className="text-[#f5b82e] italic">delivery.</span>
              </h2>
              <p className="text-[13px] text-white/40 leading-relaxed font-light max-w-[300px]">
                OYEN GRID goes beyond meetings. Orchestrate live operations with real-time intelligence, AI guidance, and institutional control.
              </p>
            </div>

            {/* Capability Stack */}
            <div className="flex flex-col gap-3">
              {leftCapabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3 p-3.5 rounded-[14px] bg-white/[0.02] border border-white/[0.05] hover:border-[#f5b82e]/20 hover:bg-[#f5b82e]/[0.02] transition-all duration-300 group cursor-default"
                >
                  <div className="w-8 h-8 rounded-xl bg-white/[0.03] border border-white/[0.07] flex items-center justify-center shrink-0 group-hover:border-[#f5b82e]/30 group-hover:bg-[#f5b82e]/5 transition-all">
                    <cap.icon className="w-3.5 h-3.5 text-[#f5b82e] opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <h3 className="text-[12px] font-bold text-white/80 mb-0.5 group-hover:text-white transition-colors">{cap.title}</h3>
                    <p className="text-[11px] text-white/30 leading-snug font-light">{cap.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3">
              <button className="h-10 px-5 rounded-xl bg-[#f5b82e] text-black font-bold text-[11px] uppercase tracking-[0.15em] hover:brightness-105 transition-all flex items-center gap-2 shadow-[0_8px_24px_rgba(245,184,46,0.15)]">
                Explore Live Command <ArrowRight className="w-3 h-3" />
              </button>
              <button className="text-[12px] text-white/40 hover:text-white/80 font-medium transition-colors">
                See it in action →
              </button>
            </div>
          </div>

          {/* ── CENTER COLUMN ── */}
          <div className="flex flex-col gap-4">
            {/* Live Session Interface */}
            <div className="rounded-[24px] bg-[#07111F]/90 border border-white/[0.07] backdrop-blur-2xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.7)]">
              {/* Top Bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06] bg-[#040a15]/60">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-red-500/10 border border-red-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[9px] font-black text-red-400 uppercase tracking-widest">LIVE</span>
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-white">Leadership Alignment Session</div>
                    <div className="flex items-center gap-2">
                      <Wifi className="w-3 h-3 text-[#10b981]" />
                      <span className="text-[10px] text-[#10b981] font-medium">Excellent Connection</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 text-white/30">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-mono text-white/50">01:24:38</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  </div>
                </div>
              </div>

              {/* Video Area */}
              <div className="flex gap-3 p-4">
                {/* Main Feed */}
                <div className="flex-1 relative rounded-[18px] overflow-hidden aspect-video bg-[#030711]">
                  <Image src="/institutional-leader.png" alt="Session Participant" fill className="object-cover opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
                  {/* Speaking indicator */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
                      <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1, repeat: Infinity }} className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981]" />
                      <span className="text-[11px] font-bold text-white">Speaking: Daniel Okafor</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 px-2 py-1 rounded-lg bg-[#f5b82e]/10 border border-[#f5b82e]/20">
                    <span className="text-[9px] font-black text-[#f5b82e] uppercase tracking-widest">Programme Director</span>
                  </div>
                </div>

                {/* Participant Stack */}
                <div className="flex flex-col gap-2 w-[90px]">
                  {participants.map((p, i) => (
                    <div key={i} className="relative rounded-[12px] overflow-hidden bg-[#0a1628] border border-white/[0.07] aspect-[4/3] flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `${p.color}20`, border: `1px solid ${p.color}40` }}>
                        <Users className="w-3.5 h-3.5" style={{ color: p.color }} />
                      </div>
                      <div className="absolute bottom-1 left-1 right-1 text-center">
                        <span className="text-[8px] text-white/40 font-medium truncate">{p.label}</span>
                      </div>
                      <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#10b981] border border-[#040816]" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between px-5 pb-4">
                <div className="flex items-center gap-2">
                  {[
                    { icon: MicOff, label: "Mute", active: true },
                    { icon: Video, label: "Video" },
                    { icon: Monitor, label: "Share" },
                    { icon: Users, label: "Participants" },
                    { icon: MessageSquare, label: "Chat" },
                    { icon: Smile, label: "Reactions" },
                    { icon: MoreHorizontal, label: "More" },
                  ].map((ctrl, i) => (
                    <button key={i} className={`flex flex-col items-center gap-1 px-2.5 py-1.5 rounded-xl transition-all ${ctrl.active ? "bg-red-500/10 border border-red-500/20" : "bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06]"}`}>
                      <ctrl.icon className={`w-3.5 h-3.5 ${ctrl.active ? "text-red-400" : "text-white/50"}`} />
                      <span className="text-[8px] text-white/25 font-medium">{ctrl.label}</span>
                    </button>
                  ))}
                </div>
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/90 hover:bg-red-500 transition-colors">
                  <PhoneOff className="w-3.5 h-3.5 text-white" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">End Session</span>
                </button>
              </div>
            </div>

            {/* Lower 2 panels */}
            <div className="grid grid-cols-2 gap-4">
              {/* Timeline */}
              <div className="p-4 rounded-[18px] bg-[#07111F]/80 border border-white/[0.06] backdrop-blur-xl">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.25em]">Live Delivery Timeline</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                    <span className="text-[9px] text-[#10b981] font-bold uppercase tracking-widest">Active</span>
                  </div>
                </div>
                <div className="flex gap-1 h-8 mb-2">
                  {timelineEvents.map((ev, i) => (
                    <div key={i} className="relative rounded-lg flex items-center justify-center" style={{ width: ev.width, backgroundColor: `${ev.color}20`, border: `1px solid ${ev.color}30` }}>
                      <span className="text-[7px] font-black uppercase tracking-wide" style={{ color: ev.color }}>{ev.label}</span>
                      {i === 2 && <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white" />}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between">
                  {timelineEvents.map((ev, i) => (
                    <span key={i} className="text-[8px] text-white/20 font-mono">{ev.time}</span>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="p-4 rounded-[18px] bg-[#07111F]/80 border border-white/[0.06] backdrop-blur-xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.25em]">Coordination Map</span>
                </div>
                <div className="relative h-28 rounded-xl overflow-hidden bg-[#030811]">
                  <Image src="/global-network-map.png" alt="Map" fill className="object-cover opacity-30 grayscale" />
                  <div className="absolute inset-0">
                    {[
                      { x: "22%", y: "35%", color: "#10b981" },
                      { x: "48%", y: "28%", color: "#10b981" },
                      { x: "65%", y: "40%", color: "#f5b82e" },
                      { x: "75%", y: "55%", color: "#10b981" },
                      { x: "35%", y: "60%", color: "#ef4444" },
                      { x: "55%", y: "65%", color: "#3b82f6" },
                    ].map((node, i) => (
                      <div key={i} className="absolute" style={{ left: node.x, top: node.y }}>
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: node.color, boxShadow: `0 0 6px ${node.color}` }} />
                      </div>
                    ))}
                    <svg className="absolute inset-0 w-full h-full opacity-20">
                      <line x1="22%" y1="35%" x2="48%" y2="28%" stroke="#10b981" strokeWidth="1" strokeDasharray="3,3" />
                      <line x1="48%" y1="28%" x2="65%" y2="40%" stroke="#f5b82e" strokeWidth="1" strokeDasharray="3,3" />
                      <line x1="65%" y1="40%" x2="75%" y2="55%" stroke="#10b981" strokeWidth="1" strokeDasharray="3,3" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  {[{ label: "Active", color: "#10b981" }, { label: "At Risk", color: "#f5b82e" }, { label: "Offline", color: "#ef4444" }, { label: "Syncing", color: "#3b82f6" }].map((leg, i) => (
                    <div key={i} className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: leg.color }} />
                      <span className="text-[8px] text-white/30">{leg.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics Strip */}
            <div className="grid grid-cols-4 gap-3">
              {metrics.map((m, i) => (
                <div key={i} className="p-4 rounded-[16px] bg-white/[0.02] border border-white/[0.05] text-center backdrop-blur-xl">
                  <div className="text-[22px] font-bold text-white tracking-tighter leading-none mb-1">{m.val}</div>
                  <div className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em]">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="flex flex-col gap-4">
            {/* Panel 1: Operational Intelligence */}
            <div className="p-5 rounded-[20px] bg-[#07111F]/80 border border-white/[0.07] backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">Operational Intelligence</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                  <span className="text-[9px] text-[#10b981] font-bold uppercase tracking-widest">Live</span>
                </div>
              </div>
              {/* Circular Chart */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 shrink-0">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 60 60">
                    <circle cx="30" cy="30" r="24" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="6" />
                    <motion.circle cx="30" cy="30" r="24" fill="none" stroke="#10b981" strokeWidth="6" strokeLinecap="round"
                      strokeDasharray="150.8" initial={{ strokeDashoffset: 150.8 }} whileInView={{ strokeDashoffset: 13.5 }} viewport={{ once: true }} transition={{ duration: 1.5 }} />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[13px] font-bold text-white">92%</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  {[
                    { label: "Engagement", val: "88%", color: "#10b981" },
                    { label: "Attendance Quality", val: "94%", color: "#f5b82e" },
                    { label: "Response Rate", val: "79%", color: "#3b82f6" },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between gap-4">
                      <span className="text-[10px] text-white/35">{stat.label}</span>
                      <span className="text-[10px] font-bold" style={{ color: stat.color }}>{stat.val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#f5b82e]/[0.05] border border-[#f5b82e]/10">
                <AlertCircle className="w-3.5 h-3.5 text-[#f5b82e] shrink-0" />
                <span className="text-[10px] text-[#f5b82e]/80 font-medium">Coordination latency spike in Region 3</span>
              </div>
            </div>

            {/* Panel 2: AI Facilitator */}
            <div className="p-5 rounded-[20px] bg-[#07111F]/80 border border-white/[0.07] backdrop-blur-xl">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-7 h-7 rounded-xl bg-[#f5b82e]/10 border border-[#f5b82e]/20 flex items-center justify-center">
                  <Brain className="w-3.5 h-3.5 text-[#f5b82e]" />
                </div>
                <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.3em]">AI Facilitator Assistant</span>
              </div>
              <div className="p-3.5 rounded-[14px] bg-[#f5b82e]/[0.04] border border-[#f5b82e]/10 mb-3">
                <p className="text-[12px] text-white/60 leading-relaxed font-light mb-1">12 participants have not interacted for 18 minutes.</p>
                <p className="text-[11px] text-white/40 font-light italic">Suggested: Launch interactive poll to re-engage the session.</p>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 h-9 rounded-xl bg-[#f5b82e] text-black font-bold text-[10px] uppercase tracking-widest hover:brightness-105 transition-all">Launch Poll</button>
                <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                  <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">AI 94%</span>
                </div>
              </div>
            </div>

            {/* Panel 3: Decision Layer */}
            <div className="p-5 rounded-[20px] bg-[#07111F]/80 border border-white/[0.07] backdrop-blur-xl">
              <div className="flex items-center gap-2.5 mb-3">
                <Target className="w-4 h-4 text-white/30" />
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">Decision Layer</span>
              </div>
              <p className="text-[12px] text-white/60 leading-relaxed font-light mb-4">Extend breakout discussion by 8 minutes for deeper alignment.</p>
              <div className="flex gap-2 mb-3">
                <button className="flex-1 h-8 rounded-xl bg-[#10b981]/20 border border-[#10b981]/30 text-[#10b981] font-bold text-[10px] uppercase tracking-widest hover:bg-[#10b981]/30 transition-all">Apply</button>
                <button className="flex-1 h-8 rounded-xl bg-white/[0.03] border border-white/[0.07] text-white/40 font-bold text-[10px] uppercase tracking-widest hover:bg-white/[0.06] transition-all">Dismiss</button>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1 bg-white/[0.05] rounded-full overflow-hidden">
                  <motion.div className="h-full bg-[#10b981]" initial={{ width: 0 }} whileInView={{ width: "93%" }} viewport={{ once: true }} transition={{ duration: 1.2 }} />
                </div>
                <span className="text-[9px] text-white/30 font-bold shrink-0">AI 93%</span>
              </div>
            </div>

            {/* Panel 4: Live Outputs */}
            <div className="p-5 rounded-[20px] bg-[#07111F]/80 border border-white/[0.07] backdrop-blur-xl">
              <div className="flex items-center gap-2.5 mb-4">
                <FileText className="w-4 h-4 text-white/30" />
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">Live Outputs</span>
              </div>
              <div className="flex flex-col gap-2.5">
                {[
                  { label: "Summary Report", status: "Generating", color: "#f5b82e" },
                  { label: "Action Items", status: "12 logged", color: "#10b981" },
                  { label: "Attendance Log", status: "Live", color: "#3b82f6" },
                  { label: "Compliance Record", status: "Verified", color: "#10b981" },
                ].map((output, i) => (
                  <div key={i} className="flex items-center justify-between group cursor-default">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]/60" />
                      <span className="text-[12px] font-medium text-white/60 group-hover:text-white/80 transition-colors">{output.label}</span>
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: output.color }}>{output.status}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.05]">
                <button className="flex items-center gap-1.5 text-[10px] font-bold text-[#f5b82e]/70 hover:text-[#f5b82e] transition-colors uppercase tracking-widest">
                  View All Outputs <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
