"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Activity, Brain, Clock, Globe, Layers, FileCheck, 
  Mic, Video, Monitor, Users, Smile, MessageSquare, MoreHorizontal,
  ArrowUpRight, ShieldCheck, Zap, Globe2, ChevronRight, CheckCircle2,
  AlertCircle, BarChart3, TrendingUp, Search, Radio, Wifi, 
  Bell, Share2, PhoneOff, Settings, Info, Shield, Target, Play
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  { title: "Operational Health Engine", icon: Activity },
  { title: "AI Facilitation Assistant", icon: Brain },
  { title: "Decision Intelligence", icon: Target },
  { title: "Coordination Infrastructure", icon: Globe },
];

const bottomMetrics = [
  { label: "Active Participants", val: "1,240+", icon: Users },
  { label: "System Uptime", val: "99.995%", icon: ShieldCheck },
  { label: "Sync Latency", val: "0.8ms", icon: Zap },
  { label: "Active Programmes", val: "482", icon: BarChart3 },
];

export function InstitutionalCommandCenter() {
  return (
    <section className="bg-[#050816] relative py-[120px] overflow-hidden min-h-[960px] flex items-center">
      
      {/* 1. LUXURY BACKGROUND SYSTEM */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/institutional-atmosphere.png" 
          alt="Atmosphere" 
          fill 
          className="object-cover opacity-[0.1] blur-[4px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-transparent to-[#050816]" />
        
        {/* Subtle Tech Grids */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "40px 40px" }} />
        
        {/* Cinematic Atmospheric Light (Yellow Focus) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_top,rgba(245,184,46,0.08),transparent_65%)]" />
        <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_bottom_right,rgba(245,184,46,0.02),transparent_50%)]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-10 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr_320px] gap-12 items-start">
          
          {/* LEFT COLUMN: LIVE OPERATION COMMAND */}
          <div className="flex flex-col h-full py-2">
            <div className="mb-14">
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[11px] font-black text-[#f5b82e] uppercase tracking-[0.45em] mb-6 block"
              >
                LIVE OPERATION COMMAND
              </motion.span>
              <h2 className="text-[48px] font-bold text-white leading-[1.02] tracking-[-0.05em] mb-8">
                Built for intelligent <br /> programme <span className="text-[#f5b82e] italic">delivery.</span>
              </h2>
              <p className="text-[15px] text-white/40 leading-relaxed font-medium max-w-[300px]">
                OYEN GRID orchestrates global institutional programme operations with real-time intelligence and autonomous control infrastructure.
              </p>
            </div>

            <div className="space-y-3 mb-14">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="h-[56px] px-5 rounded-[18px] flex items-center gap-4 bg-white/[0.02] border border-white/[0.05] hover:border-[#f5b82e]/40 hover:bg-white/[0.04] transition-all duration-500 group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#f5b82e]/10 text-[#f5b82e] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[13px] font-bold text-white/80 group-hover:text-white transition-colors tracking-tight">{feature.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <button className="h-14 px-8 rounded-2xl bg-[#f5b82e] text-black font-black text-[13px] uppercase tracking-widest flex items-center justify-center gap-2.5 hover:brightness-110 transition-all shadow-[0_20px_50px_rgba(245,184,46,0.2)] active:scale-[0.98]">
                Initialize Platform
                <ArrowUpRight className="w-5 h-5" />
              </button>
              <button className="h-14 px-8 rounded-2xl bg-white/[0.02] border border-white/[0.1] text-white/60 font-black text-[12px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white/[0.06] hover:text-white transition-all group">
                <Play className="w-4 h-4 fill-white/20 group-hover:fill-white" />
                Watch Infrastructure
              </button>
            </div>
          </div>

          {/* CENTER: MASSIVE FUTURISTIC DASHBOARD */}
          <div className="flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="rounded-[40px] bg-[#0A0E18]/80 backdrop-blur-3xl border border-white/10 overflow-hidden flex flex-col shadow-[0_80px_160px_rgba(0,0,0,0.8),inset_0_0_100px_rgba(245,184,46,0.03)] relative"
            >
              
              {/* Top Session Bar */}
              <div className="h-[64px] border-b border-white/[0.08] px-10 flex items-center justify-between bg-white/[0.03] relative z-10">
                <div className="flex items-center gap-6">
                  <span className="text-[13px] font-bold text-white/70 tracking-tight flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#f5b82e] shadow-[0_0_10px_#f5b82e]" />
                    Programme Operational Sync • Cluster_04
                  </span>
                  <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-red-500/[0.08] border border-red-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_12px_#ef4444]" />
                    <span className="text-[9px] font-black text-red-500 uppercase tracking-widest">LIVE SESSION</span>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-white/20" />
                    <span className="text-[12px] font-mono text-white/50 tracking-[0.2em]">01:24:58</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/20">
                    <Wifi className="w-4 h-4" />
                    <span className="text-[11px] font-mono">CONNECTED</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/20">
                    <Users className="w-4 h-4" />
                    <span className="text-[11px] font-mono">1,240</span>
                  </div>
                  <div className="h-5 w-px bg-white/10" />
                  <Bell className="w-5 h-5 text-white/30 hover:text-white transition-colors cursor-pointer" />
                </div>
              </div>

              {/* Main Session Area: Video & Participants */}
              <div className="h-[440px] flex p-6 gap-6 bg-black/60 relative">
                {/* Large Live Video Call */}
                <div className="flex-1 relative rounded-[32px] overflow-hidden border border-white/[0.08] bg-[#0D1018] group/video shadow-2xl">
                  <Image 
                    src="/institutional-leader-v2.png" 
                    alt="Facilitator" 
                    fill 
                    className="object-cover opacity-90 transition-transform duration-[40s] group-hover/video:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                  
                  {/* Floating Participant Overlay */}
                  <div className="absolute top-6 left-8 px-4 py-2 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#f5b82e] shadow-[0_0_12px_#f5b82e]" />
                    <span className="text-[11px] font-black text-white uppercase tracking-[0.25em]">OPERATIONAL FACILITATOR</span>
                  </div>

                  <div className="absolute bottom-10 left-10">
                    <div className="text-[24px] font-bold text-white tracking-tighter leading-none mb-2">Director of Global Operations</div>
                    <div className="text-[12px] font-black text-[#f5b82e]/50 uppercase tracking-[0.35em]">OYEN GRID LIVE INFRASTRUCTURE</div>
                  </div>
                </div>

                {/* Floating Participant Cards Stack */}
                <div className="w-[240px] flex flex-col gap-3.5 overflow-hidden pr-1">
                  <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-1 pl-1">Live Participant Nodes</div>
                  {[1, 2, 3, 4].map(p => (
                    <motion.div 
                      key={p} 
                      whileHover={{ x: -6, backgroundColor: "rgba(255,255,255,0.06)" }}
                      className="h-[76px] rounded-[22px] bg-white/[0.02] border border-white/[0.05] p-4 flex items-center gap-4 group cursor-pointer transition-all duration-500 shadow-lg"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/5 overflow-hidden relative grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700">
                        <Image src="/institutional-participants.png" alt="Node" fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[13px] font-bold text-white/80 group-hover:text-white transition-colors truncate">Node Cluster {p}</div>
                        <div className="flex items-center gap-2 mt-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)] animate-pulse" />
                          <span className="text-[10px] text-white/30 font-black uppercase tracking-widest">SYNC_ACTIVE</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom Controls Row */}
              <div className="h-[72px] border-t border-white/[0.08] px-10 flex items-center justify-between bg-white/[0.02] backdrop-blur-3xl">
                <div className="flex items-center gap-4">
                  <ControlBtn icon={Mic} active />
                  <ControlBtn icon={Video} active />
                  <ControlBtn icon={Share2} />
                  <div className="h-8 w-px bg-white/10 mx-2" />
                  <ControlBtn icon={Users} />
                  <ControlBtn icon={MessageSquare} />
                  <ControlBtn icon={Smile} />
                </div>
                <div className="flex items-center gap-6">
                  <ControlBtn icon={Settings} />
                  <ControlBtn icon={MoreHorizontal} />
                  <button className="h-11 px-10 rounded-2xl bg-red-500/[0.08] text-red-500 text-[11px] font-black uppercase tracking-[0.25em] border border-red-500/20 hover:bg-red-500 hover:text-white transition-all duration-500 shadow-lg">
                    END SYNC
                  </button>
                </div>
              </div>
            </motion.div>

            {/* LOWER DASHBOARD ANALYTICS */}
            <div className="grid grid-cols-3 gap-8 h-[240px]">
              {/* Timeline Analytics */}
              <div className="rounded-[32px] bg-[#0A0E18]/60 backdrop-blur-2xl border border-white/5 p-7 flex flex-col justify-between shadow-2xl relative overflow-hidden group/timeline">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f5b82e]/[0.02] to-transparent opacity-0 group-hover/timeline:opacity-100 transition-opacity duration-1000" />
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-[#f5b82e]/10 flex items-center justify-center border border-[#f5b82e]/20">
                    <Clock className="w-5 h-5 text-[#f5b82e]" />
                  </div>
                  <span className="text-[13px] font-black text-white/80 uppercase tracking-[0.3em]">Delivery Timeline</span>
                </div>
                <div className="space-y-5 relative z-10">
                  <TimelineItem label="STRATEGY_INIT" status="complete" />
                  <TimelineItem label="OPERATIONAL_SYNC" status="active" />
                  <TimelineItem label="INSTITUTIONAL_OUTPUT" status="pending" />
                </div>
              </div>

              {/* Programme Progress / Stats */}
              <div className="rounded-[32px] bg-[#0A0E18]/60 backdrop-blur-2xl border border-white/5 p-7 flex flex-col justify-between shadow-2xl relative group/progress">
                <div className="flex items-center gap-4 mb-4">
                  <Activity className="w-5 h-5 text-[#f5b82e]" />
                  <span className="text-[13px] font-black text-white/80 uppercase tracking-[0.3em]">Session Health</span>
                </div>
                <div className="flex items-center gap-6 py-2">
                  <div className="relative w-28 h-28 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90">
                      <circle cx="56" cy="56" r="48" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="10" />
                      <motion.circle 
                        cx="56" cy="56" r="48" fill="none" stroke="#f5b82e" strokeWidth="10" 
                        strokeDasharray="301" 
                        initial={{ strokeDashoffset: 301 }}
                        whileInView={{ strokeDashoffset: 75 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="drop-shadow-[0_0_15px_#f5b82e]" 
                      />
                    </svg>
                    <span className="absolute text-[22px] font-bold text-white tracking-tighter">75%</span>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="text-[11px] text-white/30 font-black uppercase tracking-widest leading-none">ACTIVE_NODE</div>
                    <div className="text-[15px] font-bold text-white leading-tight">Module 04: SCALE_SYNC</div>
                    <div className="flex items-center gap-3">
                      <div className="h-1.5 flex-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full w-[75%] bg-[#f5b82e]" />
                      </div>
                      <span className="text-[10px] text-[#f5b82e] font-black">8/10</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Global Coordination Map */}
              <div className="rounded-[32px] bg-[#0A0E18]/60 backdrop-blur-2xl border border-white/5 relative overflow-hidden group/map shadow-2xl">
                <Image src="/operational-map.png" alt="Map" fill className="object-cover opacity-[0.2] grayscale group-hover/map:scale-110 transition-transform duration-[40s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E18] via-transparent to-transparent" />
                <div className="absolute top-7 left-8 flex items-center gap-4">
                  <Globe className="w-5 h-5 text-[#f5b82e]" />
                  <span className="text-[13px] font-black text-white/80 uppercase tracking-[0.3em]">Coordination Map</span>
                </div>
                <div className="absolute bottom-7 left-8 right-8 flex items-center justify-between">
                   <div className="flex -space-x-2">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full bg-[#f5b82e]/30 border-2 border-[#0A0E18] backdrop-blur-md shadow-lg" />
                      ))}
                   </div>
                   <div className="text-right">
                      <div className="text-[12px] font-mono text-[#f5b82e] font-bold tracking-widest">142_NODES</div>
                      <div className="text-[10px] font-black text-white/20 uppercase tracking-widest mt-1">SYNC_ACTIVE</div>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: STACKED INTELLIGENCE CARDS */}
          <div className="flex flex-col gap-6 py-2">
            {/* 1. Operational Intelligence */}
            <div className="p-7 rounded-[32px] bg-gradient-to-b from-[#101420]/96 to-[#0A0E18]/92 border border-white/10 backdrop-blur-3xl space-y-6 shadow-2xl relative overflow-hidden group/intel">
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover/intel:opacity-10 transition-opacity">
                <Activity className="w-24 h-24 text-[#f5b82e]" />
              </div>
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-4">
                  <ShieldCheck className="w-5 h-5 text-[#f5b82e]" />
                  <span className="text-[12px] font-black text-white/60 uppercase tracking-[0.4em]">Operational Intelligence</span>
                </div>
                <span className="text-[20px] font-bold text-white tracking-tighter leading-none">94%</span>
              </div>
              <div className="grid grid-cols-2 gap-3 relative z-10">
                <HealthMetric label="Engagement" val="88%" />
                <HealthMetric label="Attendance" val="94%" />
                <HealthMetric label="Response" val="92%" />
                <HealthMetric label="Latency" val="12ms" />
              </div>
            </div>

            {/* 2. AI Facilitator Assistant */}
            <div className="p-7 rounded-[32px] bg-gradient-to-b from-[#101420]/96 to-[#0A0E18]/92 border border-white/10 backdrop-blur-3xl space-y-5 shadow-2xl relative group/assistant">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Brain className="w-5 h-5 text-[#f5b82e]" />
                  <span className="text-[12px] font-black text-white/60 uppercase tracking-[0.4em]">AI Facilitator</span>
                </div>
                <div className="w-3 h-3 rounded-full bg-[#f5b82e] animate-pulse shadow-[0_0_15px_#f5b82e]" />
              </div>
              <div className="p-5 rounded-2xl bg-[#f5b82e]/[0.04] border border-[#f5b82e]/10">
                <div className="text-[14px] text-white/70 leading-relaxed font-medium italic mb-4">
                  "Engagement drop detected in Cluster_04. Initiating interactive protocol B."
                </div>
                <button className="w-full h-11 rounded-xl bg-[#f5b82e] text-black text-[11px] font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-lg active:scale-[0.97]">
                  EXECUTE PROTOCOL
                </button>
              </div>
              <div className="flex items-center justify-between px-1">
                <span className="text-[10px] text-white/20 font-black uppercase tracking-widest">CONFIDENCE_INDEX</span>
                <span className="text-[11px] text-[#f5b82e]/80 font-bold font-mono tracking-widest">98.2%</span>
              </div>
            </div>

            {/* 3. Decision Layer */}
            <div className="p-7 rounded-[32px] bg-gradient-to-b from-[#101420]/96 to-[#0A0E18]/92 border border-white/10 backdrop-blur-3xl space-y-5 shadow-2xl">
              <div className="flex items-center gap-4">
                <AlertCircle className="w-5 h-5 text-red-500/80" />
                <span className="text-[12px] font-black text-white/60 uppercase tracking-[0.4em]">Decision Layer</span>
              </div>
              <div className="space-y-3">
                <RiskItem label="Engagement Drift" severity="low" />
                <RiskItem label="Attendance Protocol" severity="med" />
                <RiskItem label="Network Latency" severity="low" />
              </div>
            </div>

            {/* 4. Live Outputs */}
            <div className="p-7 rounded-[32px] bg-gradient-to-b from-[#101420]/96 to-[#0A0E18]/92 border border-white/10 backdrop-blur-3xl space-y-5 shadow-2xl">
              <div className="flex items-center gap-4">
                <FileCheck className="w-5 h-5 text-[#f5b82e]" />
                <span className="text-[12px] font-black text-white/60 uppercase tracking-[0.4em]">Live Outputs</span>
              </div>
              <div className="space-y-2.5">
                <OutputItem label="Session_Sync_Report" />
                <OutputItem label="Action_Item_Protocol" />
                <OutputItem label="Institutional_Audit" />
              </div>
            </div>
          </div>
        </div>

        {/* STATS CARDS ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {bottomMetrics.map((m, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[28px] bg-white/[0.02] border border-white/5 hover:border-[#f5b82e]/40 hover:bg-white/[0.05] transition-all duration-700 group cursor-default relative overflow-hidden shadow-xl"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-[#f5b82e]/10 group-hover:text-[#f5b82e] transition-all duration-500">
                <m.icon className="w-5 h-5 opacity-30 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-[28px] font-bold text-white tracking-tighter mb-1.5 leading-none group-hover:text-[#f5b82e] transition-colors">{m.val}</div>
              <div className="text-[11px] text-white/20 font-black uppercase tracking-[0.2em] leading-tight">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ControlBtn({ icon: Icon, active = false }: { icon: any, active?: boolean }) {
  return (
    <button className={cn(
      "w-[44px] h-[44px] rounded-full flex items-center justify-center transition-all duration-500 relative group active:scale-90",
      active ? "bg-white/10 text-white border border-white/20 shadow-lg" : "bg-transparent text-white/30 hover:bg-white/5 hover:text-white"
    )}>
      <Icon className="w-5 h-5 z-10" />
      {active && <div className="absolute inset-0 bg-[#f5b82e]/10 blur-lg rounded-full" />}
    </button>
  );
}

function TimelineItem({ label, status }: { label: string, status: "complete" | "active" | "pending" }) {
  return (
    <div className="flex items-center gap-4 group cursor-default">
      <div className={cn(
        "w-2.5 h-2.5 rounded-full shrink-0 transition-all duration-700 relative",
        status === "complete" ? "bg-[#f5b82e]" : status === "active" ? "bg-[#f5b82e] shadow-[0_0_15px_#f5b82e] animate-pulse" : "bg-white/10"
      )}>
        {status === "active" && <div className="absolute inset-0 bg-[#f5b82e] animate-ping opacity-40 rounded-full" />}
      </div>
      <span className={cn(
        "text-[12px] font-bold tracking-tight uppercase",
        status === "active" ? "text-white" : "text-white/30"
      )}>{label}</span>
    </div>
  );
}

function HealthMetric({ label, val }: { label: string, val: string }) {
  return (
    <div className="p-4 rounded-xl bg-white/[0.015] border border-white/[0.06] hover:border-[#f5b82e]/30 transition-all group/metric">
      <div className="text-[10px] text-white/20 font-black uppercase tracking-widest mb-1.5 group-hover/metric:text-white/40 transition-colors">{label}</div>
      <div className="text-[16px] font-bold text-white group-hover/metric:text-[#f5b82e] transition-colors">{val}</div>
    </div>
  );
}

function RiskItem({ label, severity }: { label: string, severity: "low" | "med" }) {
  return (
    <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.015] border border-white/[0.06] hover:bg-white/[0.03] transition-all">
      <span className="text-[12px] font-bold text-white/50 tracking-tight">{label}</span>
      <span className={cn(
        "text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md",
        severity === "med" ? "bg-orange-500/[0.08] text-orange-500 border border-orange-500/20 shadow-[0_0_20px_rgba(249,115,22,0.1)]" : "bg-emerald-500/[0.08] text-emerald-500 border border-emerald-500/20"
      )}>{severity}</span>
    </div>
  );
}

function OutputItem({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.015] border border-white/[0.06] group hover:border-[#f5b82e]/40 hover:bg-white/[0.04] transition-all cursor-pointer">
      <span className="text-[12px] font-bold text-white/40 group-hover:text-white transition-colors tracking-tight">{label}</span>
      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#f5b82e]/10 transition-colors">
        <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-[#f5b82e] transition-all duration-500 group-hover:scale-110" />
      </div>
    </div>
  );
}
