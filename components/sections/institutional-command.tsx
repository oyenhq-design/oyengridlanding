"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Activity, Brain, Clock, Target, Layers, FileText,
  Map, ArrowRight, MicOff, Video, VideoOff,
  Monitor, Users, MessageSquare, Smile, MoreHorizontal,
  PhoneOff, Wifi, Search, Settings, Shield, Mic
} from "lucide-react";
import {
  OperationalIntelligencePanel, AIFacilitatorPanel,
  DecisionLayerPanel, LiveOutputsPanel
} from "./command-panels";

const leftCaps = [
  { icon: Activity, title: "Operational Health Engine", desc: "Live monitoring of engagement, attendance quality, and delivery risk." },
  { icon: Brain,    title: "AI Facilitator Assistant",  desc: "Real-time insights, smart summaries, and action recommendations." },
  { icon: Clock,    title: "Live Delivery Timeline",    desc: "Track every moment, action, and interaction as it happens." },
  { icon: Map,      title: "Coordination Map",          desc: "Visualize connected teams, regions, and operational dependencies." },
  { icon: Target,   title: "Decision Layer",            desc: "AI-powered recommendations to keep programmes on track." },
  { icon: FileText, title: "Structured Outputs",        desc: "Automated reports, actions, attendance, and compliance logs." },
];

export function InstitutionalCommandCenter() {
  return (
    <section className="bg-[#040816] relative py-14 overflow-hidden">
      {/* ── Background Atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(245,184,46,0.035),transparent_65%)]" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[500px] bg-[radial-gradient(ellipse,rgba(59,130,246,0.025),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      <div className="max-w-[1480px] mx-auto px-5 relative z-10">
        {/* 3-Column Layout: 22% | 50% | 28% */}
        <div className="grid grid-cols-1 lg:grid-cols-[21%_49%_29%] gap-4 items-start">

          {/* ══════════════════════════════
              LEFT COLUMN
          ══════════════════════════════ */}
          <div className="flex flex-col pt-1">

            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 mb-5">
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-[#f5b82e] shadow-[0_0_8px_#f5b82e] shrink-0"
              />
              <span className="text-[8.5px] font-black text-[#f5b82e] uppercase tracking-[0.38em] whitespace-nowrap">Live Operation Command</span>
            </div>

            {/* Heading */}
            <h2 className="text-[40px] font-extrabold text-white leading-[1.02] tracking-[-0.03em] mb-5">
              Built for intelligent<br />
              programme{" "}
              <span
                className="italic font-bold"
                style={{
                  background: "linear-gradient(135deg, #f5b82e 0%, #e8a020 60%, #c87c10 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                delivery.
              </span>
            </h2>

            {/* Supporting Paragraph */}
            <p className="text-[13px] text-white/40 leading-[1.65] font-light max-w-[280px] mb-7">
              OYEN GRID goes beyond meetings. Orchestrate live operations with real-time intelligence, AI guidance, and institutional control.
            </p>

            {/* Capability Stack */}
            <div className="flex flex-col gap-[9px] mb-8">
              {leftCaps.map((cap, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-[13px] border border-white/[0.04] border-l-[2px] border-l-[#f5b82e]/30 bg-white/[0.015] hover:bg-white/[0.025] hover:border-[#f5b82e]/15 transition-all duration-300 group cursor-default"
                >
                  <div className="w-7 h-7 rounded-[8px] bg-[#f5b82e]/10 border border-[#f5b82e]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <cap.icon className="w-3.5 h-3.5 text-[#f5b82e] opacity-75" />
                  </div>
                  <div>
                    <div className="text-[11.5px] font-bold text-white/90 mb-[3px] leading-tight">{cap.title}</div>
                    <div className="text-[10px] text-white/30 leading-snug font-light">{cap.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3 flex-wrap">
              <button className="h-[40px] px-5 rounded-full bg-[#f5b82e] text-black font-bold text-[11px] tracking-wide hover:brightness-105 transition-all flex items-center gap-1.5 shadow-[0_8px_28px_rgba(245,184,46,0.18)] whitespace-nowrap shrink-0">
                Explore Live Command <ArrowRight className="w-3 h-3" />
              </button>
              <button className="text-[11px] text-white/35 hover:text-white/70 font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0">
                <span className="w-4 h-4 rounded-full border border-white/15 flex items-center justify-center text-[7px] text-white/40">▶</span>
                See it in action
              </button>
            </div>
          </div>

          {/* ══════════════════════════════
              CENTER COLUMN — Live Session Interface
          ══════════════════════════════ */}
          <div className="flex flex-col gap-[14px]">

            {/* ── Main Session Panel ── */}
            <div className="rounded-[18px] bg-[#0a1221]/95 border border-white/[0.07] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.55)]">

              {/* ── Top Bar ── */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                  {/* Session icon + title */}
                  <div className="flex items-center gap-1.5">
                    <div className="w-[18px] h-[18px] rounded-md bg-[#f5b82e]/15 flex items-center justify-center shrink-0">
                      <Activity className="w-2.5 h-2.5 text-[#f5b82e]" />
                    </div>
                    <span className="text-[11px] font-bold text-white/90 whitespace-nowrap">Leadership Alignment Session</span>
                  </div>
                  {/* LIVE badge */}
                  <div className="flex items-center gap-1 px-2 py-[3px] rounded-full bg-red-500/15 border border-red-500/25">
                    <motion.div
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-1.5 h-1.5 rounded-full bg-red-500"
                    />
                    <span className="text-[7.5px] font-black text-red-400 uppercase tracking-widest">Live</span>
                  </div>
                  {/* Timer */}
                  <div className="flex items-center gap-1 px-1.5 py-[3px] rounded-lg bg-white/[0.04]">
                    <Clock className="w-2.5 h-2.5 text-white/30" />
                    <span className="text-[9.5px] font-mono text-white/45 tracking-wider">01:24:58</span>
                  </div>
                  {/* Connection */}
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                    <span className="text-[9.5px] text-[#10b981] font-medium whitespace-nowrap">Excellent Connection</span>
                  </div>
                </div>
                {/* Right icons */}
                <div className="flex items-center gap-2.5 text-white/25">
                  <Users className="w-3 h-3" />
                  <Settings className="w-3 h-3" />
                  <Shield className="w-3 h-3" />
                  <MoreHorizontal className="w-3 h-3" />
                </div>
              </div>

              {/* ── Video Area ── */}
              <div className="flex gap-2.5 p-3">
                {/* Main Speaker Feed */}
                <div className="flex-1 relative rounded-[14px] overflow-hidden bg-[#030711]" style={{ aspectRatio: "16/10" }}>
                  <Image
                    src="/institutional-leader.png"
                    alt="Daniel Okafor — Speaking"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
                  {/* Speaking label */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-black/55 backdrop-blur-md border border-white/[0.08]">
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 1.1, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_6px_#10b981]"
                      />
                      <span className="text-[10px] font-bold text-white">Speaking: Daniel Okafor →</span>
                    </div>
                  </div>
                </div>

                {/* Participant Strip */}
                <div className="flex flex-col gap-2 w-[100px]">
                  {[
                    { name: "Aleha Khan",  role: "Facilitator",     img: "/exec-avatar-1.png" },
                    { name: "Michael O.",  role: "Co-Facilitator",   img: "/institutional-leader-v2.png" },
                    { name: "Emily J.",    role: "Participant",      img: "/institutional-participants.png" },
                    { name: "David A.",    role: "Participant",      img: "/presenter-cinematic.png" },
                  ].map((p, i) => (
                    <div
                      key={i}
                      className="relative rounded-[10px] overflow-hidden bg-[#080e1a] border border-white/[0.07]"
                      style={{ aspectRatio: "4/3" }}
                    >
                      <Image src={p.img} alt={p.name} fill className="object-cover opacity-85" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      {/* Role tag */}
                      <div className="absolute top-1 left-1">
                        <span className="text-[6.5px] font-bold text-[#f5b82e] uppercase tracking-widest bg-black/45 px-1 py-[2px] rounded">
                          {p.role}
                        </span>
                      </div>
                      {/* Name */}
                      <div className="absolute bottom-1 left-1.5">
                        <span className="text-[8px] font-bold text-white/80">{p.name}</span>
                      </div>
                      {/* Online dot */}
                      <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#10b981] border border-[#080e1a]" />
                    </div>
                  ))}

                  {/* +26 more */}
                  <div className="relative rounded-[10px] bg-[#0d1929] border border-white/[0.07] flex items-center justify-center" style={{ aspectRatio: "4/3" }}>
                    <span className="text-[11px] font-bold text-white/40">+26</span>
                  </div>
                </div>
              </div>

              {/* ── Conferencing Controls ── */}
              <div className="flex items-center justify-between px-4 pb-3.5 pt-1">
                <div className="flex items-center gap-1">
                  {[
                    { icon: MicOff,        label: "Mute",         muted: true },
                    { icon: VideoOff,      label: "Stop Video" },
                    { icon: Monitor,       label: "Share Screen" },
                    { icon: Users,         label: "Participants", badge: "22" },
                    { icon: MessageSquare, label: "Chat" },
                    { icon: Smile,         label: "Reactions" },
                    { icon: MoreHorizontal,label: "More" },
                  ].map((c, i) => (
                    <button
                      key={i}
                      className={`relative flex flex-col items-center gap-[3px] px-2.5 py-[7px] rounded-xl transition-all ${
                        c.muted
                          ? "bg-red-500/10 border border-red-500/20"
                          : "bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06]"
                      }`}
                    >
                      <c.icon className={`w-[14px] h-[14px] ${c.muted ? "text-red-400" : "text-white/45"}`} />
                      <span className="text-[6.5px] text-white/20 font-medium">{c.label}</span>
                      {c.badge && (
                        <span className="absolute -top-1 -right-1 text-[6px] font-bold bg-[#f5b82e] text-black w-3.5 h-3.5 rounded-full flex items-center justify-center">
                          {c.badge}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
                <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 transition-colors">
                  <PhoneOff className="w-3 h-3 text-white" />
                  <span className="text-[9.5px] font-bold text-white uppercase tracking-widest">End Session</span>
                </button>
              </div>
            </div>

            {/* ── Lower 2-Panel Row ── */}
            <div className="grid grid-cols-2 gap-[14px]">

              {/* Live Delivery Timeline */}
              <div className="p-4 rounded-[14px] bg-[#0a1221]/92 border border-white/[0.06]">
                <span className="text-[11px] font-bold text-white/70 mb-3 block">Live Delivery Timeline</span>

                {/* Time axis */}
                <div className="flex items-center justify-between text-[7.5px] text-white/20 font-mono mb-1.5">
                  {["00:00","15:00","30:00","45:00","75:00","26:00"].map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                  <span className="text-red-500 font-bold">LIVE</span>
                </div>

                {/* Timeline Segments */}
                <div className="flex gap-[3px] h-[22px] mb-3 rounded-md overflow-hidden">
                  {[
                    { label: "Presentation", color: "#3b82f6", w: "20%" },
                    { label: "Discussion",   color: "#10b981", w: "17%" },
                    { label: "Breakout",     color: "#f5b82e", w: "22%" },
                    { label: "Q&A",          color: "#8b5cf6", w: "16%" },
                    { label: "Action Items", color: "#ef4444", w: "25%" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="rounded-[4px] flex items-center justify-center"
                      style={{ width: s.w, backgroundColor: `${s.color}28`, border: `1px solid ${s.color}45` }}
                    >
                      <span className="text-[6.5px] font-bold" style={{ color: s.color }}>{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* Live Events */}
                <div className="text-[9px] font-bold text-white/40 uppercase tracking-widest mb-2">Live Events</div>
                <div className="flex flex-col gap-[9px]">
                  {[
                    { time: "09:24", dot: "#10b981", title: "Breakout session started",   desc: "Marketing Team • 8 participants" },
                    { time: "09:32", dot: "#8b5cf6", title: "AI Insight generated",       desc: "Engagement drift detected" },
                    { time: "09:41", dot: "#3b82f6", title: "Action item created",        desc: "Define Q2 delivery priorities" },
                  ].map((ev, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="text-[8.5px] text-white/18 font-mono shrink-0 pt-px">{ev.time}</span>
                      <div className="w-2 h-2 rounded-full mt-[3px] shrink-0" style={{ backgroundColor: ev.dot }} />
                      <div>
                        <div className="text-[9.5px] font-bold text-white/65 leading-tight">{ev.title}</div>
                        <div className="text-[8.5px] text-white/28 leading-tight">{ev.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coordination Map */}
              <div className="p-4 rounded-[14px] bg-[#0a1221]/92 border border-white/[0.06]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-white/70">Coordination Map</span>
                  <span className="text-[9.5px] text-[#f5b82e]/55 font-medium cursor-pointer hover:text-[#f5b82e]/80 transition-colors">View Full Map</span>
                </div>

                {/* Map Visual */}
                <div className="relative h-[118px] rounded-[10px] overflow-hidden bg-[#05101e] border border-white/[0.04] mb-3">
                  <Image
                    src="/global-network-map.png"
                    alt="Coordination Map"
                    fill
                    className="object-cover opacity-20 grayscale"
                  />
                  {/* SVG Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
                    <line x1="20%" y1="30%" x2="45%" y2="25%" stroke="#10b981" strokeWidth="0.8" />
                    <line x1="45%" y1="25%" x2="62%" y2="38%" stroke="#f5b82e" strokeWidth="0.8" />
                    <line x1="62%" y1="38%" x2="78%" y2="50%" stroke="#10b981" strokeWidth="0.8" />
                    <line x1="30%" y1="55%" x2="52%" y2="60%" stroke="#3b82f6" strokeWidth="0.8" />
                  </svg>
                  {/* Location Dots */}
                  {[
                    { x: "20%", y: "30%", c: "#10b981" },
                    { x: "45%", y: "25%", c: "#10b981" },
                    { x: "62%", y: "38%", c: "#f5b82e" },
                    { x: "78%", y: "50%", c: "#10b981" },
                    { x: "30%", y: "55%", c: "#ef4444" },
                    { x: "52%", y: "60%", c: "#3b82f6" },
                  ].map((n, i) => (
                    <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: n.x, top: n.y }}>
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2.5 + i * 0.4, repeat: Infinity }}
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: n.c, boxShadow: `0 0 6px ${n.c}` }}
                      />
                    </div>
                  ))}
                </div>

                {/* Legend */}
                <div className="flex items-center gap-3 flex-wrap">
                  {[
                    { label: "Active",   color: "#10b981" },
                    { label: "At Risk",  color: "#f5b82e" },
                    { label: "Offline",  color: "#ef4444" },
                    { label: "Syncing",  color: "#3b82f6" },
                  ].map((l, i) => (
                    <div key={i} className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: l.color }} />
                      <span className="text-[8.5px] text-white/30">{l.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Bottom KPI Strip ── */}
            <div className="grid grid-cols-4 gap-3">
              {[
                { val: "1,240+",   label: "Active Participants", sub: "Across all sessions" },
                { val: "99.995%",  label: "System Uptime",       sub: "Last 30 days" },
                { val: "0.8ms",    label: "Average Sync",        sub: "Global network" },
                { val: "140+",     label: "Countries Connected", sub: "Live operations" },
              ].map((m, i) => (
                <div key={i} className="p-4 rounded-[14px] bg-white/[0.02] border border-white/[0.05] text-center">
                  <div className="text-[22px] font-bold text-white tracking-tighter leading-none mb-1">{m.val}</div>
                  <div className="text-[9.5px] font-bold text-white/40 mb-0.5">{m.label}</div>
                  <div className="text-[8.5px] text-white/20">{m.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ══════════════════════════════
              RIGHT COLUMN — Intelligence Sidebar
          ══════════════════════════════ */}
          <div className="flex flex-col gap-3">
            <OperationalIntelligencePanel />
            <AIFacilitatorPanel />
            <DecisionLayerPanel />
            <LiveOutputsPanel />
          </div>

        </div>
      </div>
    </section>
  );
}
