"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Activity, Brain, Clock, Globe, Layers, FileCheck, 
  Mic, Video, Monitor, Users, Smile, MessageSquare, MoreHorizontal,
  ArrowUpRight, ShieldCheck, Zap, Globe2, ChevronRight, CheckCircle2,
  AlertCircle, BarChart3, TrendingUp, Search
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  { title: "Operational Health Engine", desc: "Real-time system monitoring and health alerts.", icon: Activity },
  { title: "AI Facilitator Assistant", desc: "Automated session moderation and engagement.", icon: Brain },
  { title: "Live Delivery Timeline", desc: "Granular tracking of programme milestones.", icon: Clock },
  { title: "Coordination Map", desc: "Global visualization of participant distribution.", icon: Globe },
  { title: "Decision Layer", desc: "Intelligence-driven operational recommendations.", icon: Layers },
  { title: "Structured Outputs", desc: "Automated reporting and compliance records.", icon: FileCheck },
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
      {/* Cinematic Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_top,rgba(255,190,40,0.08),transparent_38%)]" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr_320px] gap-[22px] items-start">
          
          {/* LEFT PANEL */}
          <div className="space-y-8">
            <div>
              <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.25em] mb-4 block">
                LIVE OPERATION COMMAND
              </span>
              <h2 className="text-[34px] font-bold text-white leading-[1.1] tracking-tight mb-5">
                Built for intelligent programme <span className="text-brand-gold">delivery.</span>
              </h2>
              <p className="text-[13px] text-white/40 leading-relaxed font-medium">
                OYEN GRID orchestrates live programme operations using AI intelligence, coordination systems, structured outputs, and institutional monitoring.
              </p>
            </div>

            <div className="space-y-3">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="h-[76px] px-4 py-3.5 rounded-[18px] bg-[#0C1018]/88 border border-white/5 backdrop-blur-xl flex items-center gap-4 group hover:border-brand-gold/20 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-gold/5 border border-brand-gold/10 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/10 transition-colors">
                    <feature.icon className="w-4 h-4 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="text-[13px] font-bold text-white mb-0.5 group-hover:text-brand-gold transition-colors">{feature.title}</h3>
                    <p className="text-[10px] text-white/30 font-medium">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-4 space-y-4">
              <button className="w-full h-12 rounded-xl bg-brand-gold text-black font-bold text-[13px] flex items-center justify-center gap-2 hover:brightness-110 transition-all">
                Explore Live Command
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className="w-full text-center text-white/40 text-[12px] font-bold hover:text-white transition-colors flex items-center justify-center gap-2">
                See it in action
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* CENTER DASHBOARD */}
          <div className="space-y-[22px]">
            <div className="h-[760px] rounded-[26px] bg-[#0A0E18] border border-white/5 overflow-hidden flex flex-col shadow-[0_40px_100px_rgba(0,0,0,0.6)] relative">
              {/* TOP BAR */}
              <div className="h-14 border-b border-white/5 px-6 flex items-center justify-between bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[12px] font-bold text-white tracking-tight">Leadership Alignment Session</span>
                  <div className="h-4 w-px bg-white/10 mx-1" />
                  <span className="px-2 py-0.5 rounded-full bg-red-500/10 text-red-500 text-[9px] font-black uppercase tracking-wider border border-red-500/20">LIVE</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3 text-white/40" />
                    <span className="text-[11px] font-mono text-white/60">01:24:58</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4].map(b => <div key={b} className="w-0.5 h-2.5 bg-brand-gold/60 rounded-full" />)}
                    </div>
                    <span className="text-[10px] font-bold text-brand-gold/80 uppercase tracking-widest">Excellent Connection</span>
                  </div>
                </div>
              </div>

              {/* MAIN INTERFACE */}
              <div className="flex-1 flex overflow-hidden">
                {/* VIDEO AREA */}
                <div className="flex-1 relative bg-black/40 p-4 flex flex-col">
                  <div className="flex-1 relative rounded-2xl overflow-hidden border border-white/5 group">
                    <Image 
                      src="/institutional-leader.png" 
                      alt="Session Presenter" 
                      fill 
                      className="object-cover"
                    />
                    {/* Video Overlay Info */}
                    <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-gold/20 border border-brand-gold/20 flex items-center justify-center">
                        <Users className="w-3 h-3 text-brand-gold" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-white">Institutional Lead</div>
                        <div className="text-[9px] text-white/60 font-medium">Global Operations</div>
                      </div>
                    </div>

                    {/* Command Controls */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 p-2 rounded-2xl bg-[#0C1018]/90 backdrop-blur-xl border border-white/10 shadow-2xl">
                      <ControlBtn icon={Mic} active />
                      <ControlBtn icon={Video} active />
                      <ControlBtn icon={Monitor} />
                      <div className="w-px h-6 bg-white/10 mx-1" />
                      <ControlBtn icon={Users} />
                      <ControlBtn icon={Smile} />
                      <ControlBtn icon={MessageSquare} />
                      <div className="w-px h-6 bg-white/10 mx-1" />
                      <ControlBtn icon={MoreHorizontal} />
                      <button className="h-9 px-4 rounded-xl bg-red-500/10 text-red-500 text-[11px] font-bold hover:bg-red-500 hover:text-white transition-all">Leave</button>
                    </div>
                  </div>
                </div>

                {/* PARTICIPANT STACK */}
                <div className="w-64 border-l border-white/5 bg-white/[0.01] p-4 flex flex-col gap-3">
                  <div className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-1 px-1">Participants (124)</div>
                  {[1, 2, 3, 4, 5].map(p => (
                    <div key={p} className="h-20 rounded-xl bg-white/[0.03] border border-white/5 p-2 flex flex-col relative overflow-hidden group hover:bg-white/[0.06] transition-colors">
                      <Image src="/institutional-participants.png" alt="Participant" fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="mt-auto relative z-10">
                        <div className="text-[10px] font-bold text-white">Institutional Partner {p}</div>
                        <div className="flex items-center gap-1">
                          <div className="w-1 h-1 rounded-full bg-green-500" />
                          <span className="text-[8px] text-white/40 font-medium">Online</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button className="mt-auto h-10 rounded-xl border border-dashed border-white/10 flex items-center justify-center text-[10px] font-bold text-white/30 hover:text-white/60 transition-colors">
                    + 119 more
                  </button>
                </div>
              </div>

              {/* BOTTOM PANELS */}
              <div className="h-[220px] border-t border-white/5 p-4 grid grid-cols-2 gap-4 bg-white/[0.02]">
                {/* Live Delivery Timeline */}
                <div className="rounded-2xl bg-black/40 border border-white/5 p-4 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-brand-gold" />
                      <span className="text-[10px] font-bold text-white uppercase tracking-wider">Live Delivery Timeline</span>
                    </div>
                    <span className="text-[9px] font-mono text-brand-gold/60">01:24:58</span>
                  </div>
                  <div className="flex-1 space-y-3 overflow-hidden">
                    {[
                      { time: "12:00", event: "Alignment Kickoff", status: "complete" },
                      { time: "12:20", event: "Strategic Review", status: "active" },
                      { time: "12:45", event: "Operational Sync", status: "pending" },
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="text-[9px] font-mono text-white/20 w-8">{step.time}</div>
                        <div className={cn(
                          "w-1.5 h-1.5 rounded-full",
                          step.status === "complete" ? "bg-brand-gold" : step.status === "active" ? "bg-brand-gold animate-pulse" : "bg-white/10"
                        )} />
                        <div className="flex-1">
                          <div className={cn(
                            "text-[10px] font-bold",
                            step.status === "pending" ? "text-white/20" : "text-white/80"
                          )}>{step.event}</div>
                          {step.status === "active" && <div className="text-[8px] text-brand-gold/60 font-medium">AI Insights Processing...</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coordination Map */}
                <div className="rounded-2xl bg-black/40 border border-white/5 relative overflow-hidden group">
                  <Image src="/operational-map.png" alt="Global Sync Map" fill className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-[10s]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E18] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <Globe className="w-3 h-3 text-brand-gold" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">Coordination Map</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => <div key={i} className="w-4 h-4 rounded-full border border-[#050816] bg-brand-gold/20" />)}
                      </div>
                      <span className="text-[9px] font-bold text-white/60">Live across 14 nodes</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-brand-gold animate-ping" />
                      <span className="text-[9px] font-mono text-brand-gold">SYNCING</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* METRICS ROW */}
            <div className="grid grid-cols-4 gap-[22px]">
              {metrics.map((m, i) => (
                <div key={i} className="h-[110px] rounded-[18px] bg-[#0C1018]/92 border border-white/5 p-4 flex flex-col justify-between group hover:border-brand-gold/20 transition-all">
                  <div className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center">
                    <m.icon className="w-3.5 h-3.5 text-white/40 group-hover:text-brand-gold transition-colors" />
                  </div>
                  <div>
                    <div className="text-[18px] font-bold text-white tracking-tight">{m.val}</div>
                    <div className="text-[9px] font-black text-white/30 uppercase tracking-[0.1em]">{m.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-[22px]">
            {/* CARD 1: Operational Health */}
            <div className="p-5 rounded-[22px] bg-[#0C1018]/92 border border-white/5 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="w-3 h-3 text-brand-gold" />
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Operational Health</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
              </div>
              
              <div className="flex items-center gap-6">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90">
                    <circle cx="40" cy="40" r="36" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
                    <circle cx="40" cy="40" r="36" fill="none" stroke="#F5B942" strokeWidth="6" strokeDasharray="226" strokeDashoffset="45" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[16px] font-bold text-white">94%</span>
                    <span className="text-[7px] text-white/40 font-bold uppercase tracking-widest">Optimal</span>
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <HealthStat label="Engagement" val="Excellent" />
                  <HealthStat label="Attendance" val="98.4%" />
                  <HealthStat label="Latency" val="12ms" />
                </div>
              </div>
            </div>

            {/* CARD 2: AI Facilitator Assistant */}
            <div className="p-5 rounded-[22px] bg-[#0C1018]/92 border border-white/5 space-y-4">
              <div className="flex items-center gap-2">
                <Brain className="w-3 h-3 text-brand-gold" />
                <span className="text-[10px] font-black text-white uppercase tracking-widest">AI Assistant</span>
              </div>
              <div className="p-3 rounded-xl bg-brand-gold/5 border border-brand-gold/10">
                <div className="text-[11px] text-white/80 leading-relaxed font-medium italic">
                  "Engagement dropping in Cohort B. Suggest triggering interactive poll to maintain momentum."
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] font-bold">
                  <span className="text-white/40">Confidence Score</span>
                  <span className="text-brand-gold">98.2%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-gold w-[98%]" />
                </div>
              </div>
              <button className="w-full h-10 rounded-xl bg-white/[0.03] border border-white/5 text-[11px] font-bold text-white hover:bg-white/[0.06] transition-all">
                Action: Trigger Poll
              </button>
            </div>

            {/* CARD 3: Decision Layer */}
            <div className="p-5 rounded-[22px] bg-[#0C1018]/92 border border-white/5 space-y-4">
              <div className="flex items-center gap-2">
                <Layers className="w-3 h-3 text-brand-gold" />
                <span className="text-[10px] font-black text-white uppercase tracking-widest">Decision Layer</span>
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-[10px] text-white/60 mb-1">Optimisation Recommended</div>
                  <div className="text-[12px] font-bold text-white">Re-route Sync Cluster 04</div>
                  <div className="mt-2 flex gap-2">
                    <button className="flex-1 h-8 rounded-lg bg-brand-gold text-black text-[9px] font-black uppercase">Approve</button>
                    <button className="flex-1 h-8 rounded-lg bg-white/5 text-white/40 text-[9px] font-black uppercase">Dismiss</button>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 4: Live Outputs */}
            <div className="p-5 rounded-[22px] bg-[#0C1018]/92 border border-white/5 space-y-4">
              <div className="flex items-center gap-2">
                <FileCheck className="w-3 h-3 text-brand-gold" />
                <span className="text-[10px] font-black text-white uppercase tracking-widest">Live Outputs</span>
              </div>
              <div className="space-y-2">
                <OutputItem label="Operational Log" time="2m ago" />
                <OutputItem label="Compliance Audit" time="5m ago" />
                <OutputItem label="Attendance Record" time="12m ago" />
              </div>
              <button className="w-full text-center text-brand-gold/60 text-[10px] font-black uppercase tracking-widest hover:text-brand-gold transition-colors pt-2">
                View All Records
              </button>
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
      "w-9 h-9 rounded-xl flex items-center justify-center transition-all",
      active ? "bg-white/10 text-white" : "bg-transparent text-white/30 hover:bg-white/5 hover:text-white"
    )}>
      <Icon className="w-4 h-4" />
    </button>
  );
}

function HealthStat({ label, val }: { label: string, val: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[9px] text-white/30 font-bold uppercase tracking-wider">{label}</span>
      <span className="text-[10px] text-white font-bold">{val}</span>
    </div>
  );
}

function OutputItem({ label, time }: { label: string, time: string }) {
  return (
    <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/40" />
        <span className="text-[10px] font-bold text-white/70">{label}</span>
      </div>
      <span className="text-[9px] text-white/20 font-mono">{time}</span>
    </div>
  );
}
