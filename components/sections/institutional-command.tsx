"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Activity, Brain, Clock, Globe, Layers, FileCheck, 
  Mic, Video, Monitor, Users, Smile, MessageSquare, MoreHorizontal,
  ArrowUpRight, ShieldCheck, Zap, Globe2, ChevronRight, CheckCircle2,
  AlertCircle, BarChart3, TrendingUp, Search, Radio
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
  { label: "Active Participants", val: "1,240+", icon: Users, sub: "GLOBAL DELIVERY" },
  { label: "System Uptime", val: "99.995%", icon: ShieldCheck, sub: "NETWORK INTEGRITY" },
  { label: "Average Sync", val: "0.8ms", icon: Zap, sub: "LATENCY OPTIMIZED" },
  { label: "Countries Connected", val: "140+", icon: Globe2, sub: "TOTAL REACH" },
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
          className="object-cover opacity-[0.16] blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-transparent to-[#050816]" />
        
        {/* Cinematic Lighting Layers */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_top,rgba(245,185,66,0.1),transparent_45%)]" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_bottom_right,rgba(91,231,196,0.04),transparent_50%)]" />
        
        {/* Subtle World Map Overlay */}
        <div className="absolute inset-0 opacity-[0.03] scale-110" style={{ backgroundImage: "url('/operational-map.png')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        
        {/* Technical Grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "48px 48px" }} />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr_320px] gap-[32px] items-start">
          
          {/* LEFT PANEL: OPERATIONAL CONTROL */}
          <div className="space-y-10">
            <div>
              <span className="text-[11px] font-black text-brand-gold uppercase tracking-[0.3em] mb-4 block">
                LIVE OPERATION COMMAND
              </span>
              <h2 className="text-[38px] font-bold text-white leading-[0.92] tracking-[-0.04em] mb-6">
                Built for intelligent <br /> programme <span className="text-brand-gold italic">delivery.</span>
              </h2>
              <p className="text-[14px] text-white/40 leading-relaxed font-medium max-w-[280px]">
                OYEN GRID orchestrates live programme operations using AI coordination, structured outputs, and monitoring.
              </p>
            </div>

            <div className="space-y-3.5">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="h-[76px] px-5 py-4 rounded-[18px] bg-gradient-to-b from-[#101420]/96 to-[#0A0E18]/92 border border-white/5 backdrop-blur-[18px] flex items-center gap-4 group hover:border-brand-gold/20 hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-500"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/5 border border-brand-gold/10 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/10 transition-colors">
                    <feature.icon className="w-4.5 h-4.5 text-brand-gold/60 group-hover:text-brand-gold transition-all" />
                  </div>
                  <div>
                    <h3 className="text-[13px] font-bold text-white mb-0.5 group-hover:text-brand-gold transition-colors">{feature.title}</h3>
                    <p className="text-[10px] text-white/20 font-medium tracking-tight">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-2 space-y-4">
              <button className="w-full h-14 rounded-2xl bg-brand-gold text-black font-black text-[14px] uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 hover:shadow-[0_10px_40px_rgba(245,185,66,0.2)] transition-all">
                Explore Live Command
                <ArrowUpRight className="w-5 h-5" />
              </button>
              <button className="w-full text-center text-white/30 text-[12px] font-bold hover:text-white transition-colors flex items-center justify-center gap-2 group">
                See it in action
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* CENTER PANEL: THE DOMINANT INTERFACE */}
          <div className="space-y-[32px] lg:scale-[1.02]">
            <div className="h-[780px] rounded-[32px] bg-[#0A0E18] border border-white/5 overflow-hidden flex flex-col shadow-[0_40px_120px_rgba(0,0,0,0.55),0_0_80px_rgba(245,185,66,0.06)] relative group">
              {/* TOP BAR */}
              <div className="h-16 border-b border-white/5 px-8 flex items-center justify-between bg-white/[0.03] backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_#ef4444]" />
                  <span className="text-[13px] font-bold text-white tracking-tight">Leadership Alignment Session • Institutional OS</span>
                  <div className="h-5 w-px bg-white/10 mx-2" />
                  <span className="px-2.5 py-1 rounded-md bg-red-500/10 text-red-500 text-[10px] font-black uppercase tracking-widest border border-red-500/20">LIVE COMMAND</span>
                </div>
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-white/30" />
                    <span className="text-[12px] font-mono text-white/70 tracking-widest">01:24:58</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(b => <div key={b} className={cn("w-0.5 h-3 bg-brand-gold rounded-full", b > 4 && "opacity-20")} />)}
                    </div>
                    <span className="text-[11px] font-black text-brand-gold uppercase tracking-[0.15em]">System Sync</span>
                  </div>
                </div>
              </div>

              {/* MAIN INTERFACE: OPERATIONAL ENVIRONMENT */}
              <div className="flex-1 flex overflow-hidden">
                {/* VIDEO AREA: CINEMATIC PRESENTATION */}
                <div className="flex-1 relative bg-black/60 p-5 flex flex-col">
                  <div className="flex-1 relative rounded-[24px] overflow-hidden border border-white/10 shadow-inner group/video">
                    <Image 
                      src="/institutional-leader-v2.png" 
                      alt="Session Presenter" 
                      fill 
                      className="object-cover transition-transform duration-[20s] group-hover/video:scale-105"
                    />
                    
                    {/* Cinematic Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(245,185,66,0.1),transparent_40%)]" />
                    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "url('/operational-map.png')", backgroundSize: 'cover' }} />

                    {/* Participant Stack: Floating Vertical Cards */}
                    <div className="absolute top-6 right-6 bottom-20 w-56 flex flex-col gap-3.5 z-20 overflow-hidden pointer-events-none">
                       {[1, 2, 3, 4].map(p => (
                         <div key={p} className="h-24 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 p-3 flex flex-col justify-end overflow-hidden relative">
                           <Image src="/institutional-participants.png" alt="Partner" fill className="object-cover opacity-40 grayscale" />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                           <div className="relative z-10">
                              <div className="text-[11px] font-bold text-white mb-0.5">Partner Cluster {p}</div>
                              <div className="flex items-center gap-1.5">
                                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                                 <span className="text-[9px] text-white/40 font-black uppercase tracking-widest">Connected</span>
                              </div>
                           </div>
                         </div>
                       ))}
                    </div>

                    {/* Command Controls: Premium Floating Bar */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 p-3 rounded-2xl bg-[#0C1018]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-30">
                      <ControlBtn icon={Mic} active />
                      <ControlBtn icon={Video} active />
                      <ControlBtn icon={Monitor} />
                      <div className="w-px h-8 bg-white/10 mx-1" />
                      <ControlBtn icon={Users} />
                      <ControlBtn icon={Smile} />
                      <ControlBtn icon={MessageSquare} />
                      <div className="w-px h-8 bg-white/10 mx-1" />
                      <ControlBtn icon={MoreHorizontal} />
                      <button className="h-10 px-6 rounded-xl bg-red-500/10 text-red-500 text-[12px] font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all duration-300">End Sync</button>
                    </div>

                    {/* Branding Detail */}
                    <div className="absolute top-8 left-8 flex items-center gap-3 px-4 py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/10">
                       <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center">
                          <Radio className="w-4 h-4 text-brand-gold" />
                       </div>
                       <div className="flex flex-col">
                          <span className="text-[11px] font-bold text-white tracking-tight leading-none">OYEN COMMAND</span>
                          <span className="text-[8px] text-brand-gold font-black uppercase tracking-widest mt-1">Institutional OS</span>
                       </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM PANELS: SYSTEM TELEMETRY */}
              <div className="h-[240px] border-t border-white/5 p-5 grid grid-cols-2 gap-5 bg-white/[0.01] backdrop-blur-2xl">
                {/* Live Delivery Timeline */}
                <div className="rounded-3xl bg-[#080B14]/80 border border-white/5 p-5 flex flex-col shadow-inner">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-brand-gold/5 flex items-center justify-center">
                        <Clock className="w-4 h-4 text-brand-gold" />
                      </div>
                      <span className="text-[11px] font-black text-white uppercase tracking-[0.2em]">Operational Timeline</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                       <span className="text-[10px] font-mono text-brand-gold/60">SESSION_SYNC_ACTIVE</span>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-3 overflow-hidden">
                    {[
                      { time: "12:00", event: "Alignment Kickoff", status: "complete", desc: "Institutional nodes initialized" },
                      { time: "12:20", event: "Strategic Review", status: "active", desc: "Live participation monitoring..." },
                      { time: "12:45", event: "Operational Sync", status: "pending", desc: "Awaiting session cluster B" },
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-4 group/step">
                        <div className="text-[10px] font-mono text-white/20 w-10">{step.time}</div>
                        <div className="relative flex flex-col items-center">
                           <div className={cn(
                             "w-2 h-2 rounded-full z-10 transition-all duration-500",
                             step.status === "complete" ? "bg-brand-gold" : step.status === "active" ? "bg-brand-gold shadow-[0_0_10px_#F5B942]" : "bg-white/10"
                           )} />
                           {i < 2 && <div className="absolute top-2 w-px h-8 bg-white/5" />}
                        </div>
                        <div className="flex-1">
                          <div className={cn(
                            "text-[12px] font-bold group-hover/step:translate-x-1 transition-transform",
                            step.status === "pending" ? "text-white/20" : "text-white/80"
                          )}>{step.event}</div>
                          <div className="text-[9px] text-white/30 font-medium">{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coordination Map: Immersive Sync */}
                <div className="rounded-3xl bg-[#080B14]/80 border border-white/5 relative overflow-hidden group/map shadow-inner">
                  <Image src="/operational-map.png" alt="Global Sync Map" fill className="object-cover opacity-60 transition-transform duration-[30s] group-hover/map:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E18] via-transparent to-[#0A0E18]/40" />
                  <div className="absolute top-5 left-6 flex items-center gap-2.5">
                    <Globe className="w-4 h-4 text-brand-gold" />
                    <span className="text-[11px] font-black text-white uppercase tracking-[0.2em]">Global Coordination Map</span>
                  </div>
                  
                  {/* Map Data Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end pointer-events-none">
                     <div className="flex items-center justify-between mb-1">
                        <div className="flex -space-x-3">
                           {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-[#050816] bg-brand-gold/20 backdrop-blur-md" />)}
                        </div>
                        <div className="text-[10px] font-mono text-brand-gold">NODE_LATENCY: 12ms</div>
                     </div>
                     <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                           animate={{ x: [-300, 300] }}
                           transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                           className="w-1/2 h-full bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" 
                        />
                     </div>
                  </div>
                </div>
              </div>
            </div>

            {/* METRICS ROW: ELITE INFRASTRUCTURE */}
            <div className="grid grid-cols-4 gap-6">
              {metrics.map((m, i) => (
                <div key={i} className="h-[120px] rounded-[24px] bg-[#0C1018]/94 border border-white/5 p-6 flex flex-col justify-between group hover:border-brand-gold/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(245,185,66,0.03)] transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent" />
                  <div className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em] mb-1">{m.sub}</div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-[26px] font-bold text-white tracking-tighter leading-none mb-1 group-hover:text-brand-gold transition-colors">{m.val}</div>
                      <div className="text-[10px] font-black text-white/20 uppercase tracking-widest">{m.label}</div>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-brand-gold/20 transition-all">
                      <m.icon className="w-4.5 h-4.5 text-white/20 group-hover:text-brand-gold transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDEBAR: INTELLIGENCE & HEALTH */}
          <div className="space-y-[32px] pt-4">
            {/* CARD 1: Operational Health */}
            <div className="p-6 rounded-[28px] bg-gradient-to-b from-[#101420]/96 to-[#0A0E18]/92 border border-white/5 backdrop-blur-[18px] space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group/health">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Activity className="w-4 h-4 text-brand-gold" />
                  <span className="text-[11px] font-black text-white uppercase tracking-[0.2em]">Operational Health</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                   <span className="text-[8px] font-black text-emerald-500 uppercase">Optimal</span>
                </div>
              </div>
              
              <div className="flex items-center gap-8">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90">
                    <circle cx="48" cy="48" r="42" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="8" />
                    <circle cx="48" cy="48" r="42" fill="none" stroke="#F5B942" strokeWidth="8" strokeDasharray="264" strokeDashoffset="40" className="transition-all duration-1000 group-hover/health:stroke-dashoffset-[20]" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[20px] font-bold text-white tracking-tighter">94%</span>
                    <span className="text-[8px] text-brand-gold font-black uppercase tracking-widest mt-0.5">Health</span>
                  </div>
                  <div className="absolute inset-0 bg-brand-gold/5 blur-2xl rounded-full opacity-0 group-hover/health:opacity-100 transition-opacity duration-1000" />
                </div>
                <div className="flex-1 space-y-3">
                  <HealthStat label="Engagement" val="Excellent" color="emerald" />
                  <HealthStat label="Attendance" val="98.4%" />
                  <HealthStat label="Latency" val="12ms" />
                </div>
              </div>
            </div>

            {/* CARD 2: AI Facilitator Assistant */}
            <div className="p-6 rounded-[28px] bg-gradient-to-b from-[#101420]/96 to-[#0A0E18]/92 border border-white/5 backdrop-blur-[18px] space-y-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group/ai">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Brain className="w-4 h-4 text-brand-gold" />
                  <span className="text-[11px] font-black text-white uppercase tracking-[0.2em]">AI Assistant</span>
                </div>
                <div className="w-4 h-4 rounded-full bg-brand-gold/10 flex items-center justify-center animate-spin-slow">
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/60" />
                </div>
              </div>
              
              <div className="p-4 rounded-2xl bg-brand-gold/5 border border-brand-gold/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2">
                   <div className="w-1 h-1 rounded-full bg-brand-gold animate-ping" />
                </div>
                <div className="text-[12px] text-white/80 leading-relaxed font-medium italic relative z-10">
                  "Engagement dropping in Cohort B. Suggest triggering interactive poll to maintain momentum."
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/0 via-brand-gold/[0.03] to-brand-gold/0 animate-shimmer" />
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-bold tracking-tight">
                  <span className="text-white/30">Intelligence Confidence</span>
                  <span className="text-brand-gold">98.2%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "98.2%" }}
                    className="h-full bg-brand-gold shadow-[0_0_10px_#F5B942]" 
                  />
                </div>
              </div>
              <button className="w-full h-12 rounded-xl bg-white/[0.03] border border-white/5 text-[12px] font-black uppercase tracking-widest text-white hover:bg-brand-gold hover:text-black transition-all duration-500 group">
                Action: Trigger Poll
              </button>
            </div>

            {/* CARD 3: Decision Layer */}
            <div className="p-6 rounded-[28px] bg-gradient-to-b from-[#101420]/96 to-[#0A0E18]/92 border border-white/5 backdrop-blur-[18px] space-y-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-brand-gold" />
                <span className="text-[11px] font-black text-white uppercase tracking-[0.2em]">Decision Layer</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-brand-gold/20 transition-all duration-500 group/decision">
                  <div className="text-[10px] text-white/30 font-black uppercase tracking-widest mb-1">Impact Analysis</div>
                  <div className="text-[14px] font-bold text-white mb-3">Re-route Sync Cluster 04</div>
                  <div className="flex gap-2.5">
                    <button className="flex-1 h-9 rounded-xl bg-brand-gold text-black text-[10px] font-black uppercase tracking-widest hover:brightness-110">Approve</button>
                    <button className="flex-1 h-9 rounded-xl bg-white/5 text-white/40 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">Dismiss</button>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 4: Live Outputs */}
            <div className="p-6 rounded-[28px] bg-gradient-to-b from-[#101420]/96 to-[#0A0E18]/92 border border-white/5 backdrop-blur-[18px] space-y-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-2.5">
                <FileCheck className="w-4 h-4 text-brand-gold" />
                <span className="text-[11px] font-black text-white uppercase tracking-[0.2em]">Institutional Outputs</span>
              </div>
              <div className="space-y-2.5">
                <OutputItem label="Operational Log" time="2m ago" />
                <OutputItem label="Compliance Audit" time="5m ago" />
                <OutputItem label="Attendance Record" time="12m ago" />
              </div>
              <button className="w-full text-center text-brand-gold/40 text-[11px] font-black uppercase tracking-[0.2em] hover:text-brand-gold transition-colors pt-3">
                Access Audit Logs
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
        .animate-spin-slow {
          animation: spin 8s infinite linear;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

function ControlBtn({ icon: Icon, active = false }: { icon: any, active?: boolean }) {
  return (
    <button className={cn(
      "w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 relative group",
      active ? "bg-white/10 text-white border border-white/10" : "bg-transparent text-white/30 hover:bg-white/5 hover:text-white"
    )}>
      <Icon className="w-5 h-5" />
      {active && <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-brand-gold/40 blur-[2px]" />}
    </button>
  );
}

function HealthStat({ label, val, color = "white" }: { label: string, val: string, color?: string }) {
  return (
    <div className="flex items-center justify-between py-1.5 border-b border-white/[0.03]">
      <span className="text-[10px] text-white/30 font-black uppercase tracking-widest">{label}</span>
      <span className={cn(
        "text-[11px] font-bold tracking-tight",
        color === "emerald" ? "text-emerald-500" : "text-white"
      )}>{val}</span>
    </div>
  );
}

function OutputItem({ label, time }: { label: string, time: string }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-gold/20 transition-all duration-500 group">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-brand-gold/40 shadow-[0_0_8px_rgba(245,185,66,0.2)] group-hover:bg-brand-gold transition-colors" />
        <span className="text-[11px] font-bold text-white/70 group-hover:text-white transition-colors">{label}</span>
      </div>
      <span className="text-[10px] text-white/20 font-mono tracking-tighter">{time}</span>
    </div>
  );
}
