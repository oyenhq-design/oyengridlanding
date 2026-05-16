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
    <section className="bg-[#050816] relative py-[110px] overflow-hidden min-h-[920px] flex items-center">
      
      {/* 1. ARCHITECTURAL BACKGROUND & GRID SYSTEM */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/institutional-atmosphere.png" 
          alt="Atmosphere" 
          fill 
          className="object-cover opacity-[0.08] blur-[4px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-transparent to-[#050816]" />
        
        {/* Subtle Tech Grids */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "160px 160px" }} />
        
        {/* Cinematic Atmospheric Light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_top,rgba(245,185,66,0.06),transparent_65%)]" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_bottom_right,rgba(91,231,196,0.02),transparent_50%)]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-10 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_300px] gap-8 items-start">
          
          {/* LEFT COLUMN: INFORMATION & COMPACT FEATURES */}
          <div className="flex flex-col h-full py-1">
            <div className="mb-12">
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[10px] font-black text-brand-gold uppercase tracking-[0.45em] mb-5 block"
              >
                OPERATIONAL COMMAND
              </motion.span>
              <h2 className="text-[36px] font-bold text-white leading-[1.05] tracking-[-0.05em] mb-6">
                Built for intelligent <br /> programme <span className="text-brand-gold italic">delivery.</span>
              </h2>
              <p className="text-[14px] text-white/30 leading-relaxed font-medium max-w-[260px]">
                OYEN GRID orchestrates institutional programme operations with real-time intelligence and autonomous control.
              </p>
            </div>

            <div className="space-y-2 mb-12">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="h-[48px] px-4 rounded-[12px] flex items-center gap-4 bg-white/[0.015] border border-white/[0.05] hover:border-brand-gold/30 hover:bg-white/[0.04] transition-all duration-500 group cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[11px] font-bold text-white/70 group-hover:text-white transition-colors tracking-tight">{feature.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              <button className="w-full h-14 rounded-2xl bg-brand-gold text-black font-black text-[12px] uppercase tracking-widest flex items-center justify-center gap-2.5 hover:brightness-110 transition-all shadow-[0_15px_40px_rgba(245,185,66,0.15)] active:scale-[0.98]">
                Explore Platform
                <ArrowUpRight className="w-4.5 h-4.5" />
              </button>
              <button className="w-full h-14 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-white/50 font-black text-[12px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/[0.06] hover:text-white transition-all">
                Request Protocol
              </button>
            </div>
          </div>

          {/* CENTER DASHBOARD: ELITE OPERATIONAL INTERFACE */}
          <div className="flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="rounded-[40px] bg-[#0A0E18]/80 backdrop-blur-3xl border border-white/10 overflow-hidden flex flex-col shadow-[0_60px_120px_rgba(0,0,0,0.7),inset_0_0_80px_rgba(245,185,66,0.02)] relative"
            >
              
              {/* TOP STATUS BAR */}
              <div className="h-[60px] border-b border-white/[0.08] px-10 flex items-center justify-between bg-white/[0.03] relative z-10">
                <div className="flex items-center gap-6">
                  <span className="text-[12px] font-bold text-white/60 tracking-tight flex items-center gap-3">
                    <Radio className="w-4 h-4 text-brand-gold/40" />
                    Global Delivery Infrastructure • Cluster_04
                  </span>
                  <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-red-500/[0.08] border border-red-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_#ef4444]" />
                    <span className="text-[9px] font-black text-red-500 uppercase tracking-widest">LIVE SESSION</span>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-white/20" />
                    <span className="text-[12px] font-mono text-white/50 tracking-[0.2em]">01:24:58</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Wifi className="w-4 h-4 text-brand-gold/60" />
                    <span className="text-[10px] font-black text-brand-gold/80 uppercase tracking-widest">SECURE_SYNC</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/20">
                    <Users className="w-4 h-4" />
                    <span className="text-[11px] font-mono">1,240</span>
                  </div>
                  <div className="h-5 w-px bg-white/10" />
                  <Bell className="w-4.5 h-4.5 text-white/30 hover:text-white transition-colors cursor-pointer" />
                </div>
              </div>

              {/* MAIN CONTENT AREA: VIDEO & NODES */}
              <div className="h-[420px] flex p-5 gap-5 bg-black/50 relative">
                {/* Facilitator Video Environment */}
                <div className="flex-1 relative rounded-[32px] overflow-hidden border border-white/[0.08] bg-[#0D1018] group/video shadow-2xl">
                  <Image 
                    src="/institutional-leader-v2.png" 
                    alt="Facilitator" 
                    fill 
                    className="object-cover opacity-90 transition-transform duration-[40s] group-hover/video:scale-105"
                  />
                  {/* Cinematic Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/30" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(245,185,66,0.1),transparent_45%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(91,231,196,0.05),transparent_40%)]" />
                  
                  {/* HUD Branding */}
                  <div className="absolute top-6 left-8 px-4 py-2 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_12px_#F5B942]" />
                    <span className="text-[11px] font-black text-white uppercase tracking-[0.25em]">ORCHESTRATOR_ACTIVE</span>
                  </div>

                  <div className="absolute bottom-8 left-10">
                    <div className="text-[20px] font-bold text-white tracking-tighter leading-none mb-1.5">Director of Institutional Operations</div>
                    <div className="text-[11px] font-black text-brand-gold/50 uppercase tracking-[0.35em]">OYEN GRID COMMAND SYSTEM</div>
                  </div>
                </div>

                {/* Node Cluster Stack */}
                <div className="w-[220px] flex flex-col gap-3 overflow-hidden pr-1">
                  {[1, 2, 3, 4].map(p => (
                    <motion.div 
                      key={p} 
                      whileHover={{ x: -4, backgroundColor: "rgba(255,255,255,0.06)" }}
                      className="h-[72px] rounded-[20px] bg-white/[0.02] border border-white/[0.05] p-3.5 flex items-center gap-4 group cursor-pointer transition-all duration-500"
                    >
                      <div className="w-11 h-11 rounded-xl bg-white/5 overflow-hidden relative grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 shadow-lg">
                        <Image src="/institutional-participants.png" alt="Node" fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[12px] font-bold text-white/80 group-hover:text-white transition-colors truncate">Node Cluster {p}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)] animate-pulse" />
                          <span className="text-[10px] text-white/30 font-black uppercase tracking-widest">STABLE</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* BOTTOM CONTROL LAYER */}
              <div className="h-[70px] border-t border-white/[0.08] px-10 flex items-center justify-between bg-white/[0.02] backdrop-blur-2xl">
                <div className="flex items-center gap-4">
                  <ControlBtn icon={Mic} active />
                  <ControlBtn icon={Video} active />
                  <ControlBtn icon={Share2} />
                  <div className="h-7 w-px bg-white/10 mx-2" />
                  <ControlBtn icon={Users} />
                  <ControlBtn icon={MessageSquare} />
                  <ControlBtn icon={Smile} />
                </div>
                <div className="flex items-center gap-5">
                  <ControlBtn icon={Settings} />
                  <ControlBtn icon={MoreHorizontal} />
                  <button className="h-11 px-8 rounded-2xl bg-red-500/[0.08] text-red-500 text-[11px] font-black uppercase tracking-[0.2em] border border-red-500/20 hover:bg-red-500 hover:text-white transition-all duration-500 shadow-lg active:scale-95">
                    TERMINATE SESSION
                  </button>
                </div>
              </div>
            </motion.div>

            {/* LOWER ANALYTICS SYSTEM */}
            <div className="grid grid-cols-3 gap-6 h-[220px]">
              {/* Delivery Timeline Overlay */}
              <div className="rounded-[32px] bg-[#0A0E18]/60 backdrop-blur-xl border border-white/5 p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden group/timeline">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/[0.02] to-transparent opacity-0 group-hover/timeline:opacity-100 transition-opacity duration-1000" />
                <div className="flex items-center gap-3.5 mb-5 relative z-10">
                  <div className="w-9 h-9 rounded-xl bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20">
                    <Clock className="w-4.5 h-4.5 text-brand-gold" />
                  </div>
                  <span className="text-[12px] font-black text-white/80 uppercase tracking-[0.3em]">Operational Flow</span>
                </div>
                <div className="space-y-5 relative z-10">
                  <TimelineItem label="STRATEGY_INIT" status="complete" />
                  <TimelineItem label="ALIGNMENT_SYNC" status="active" />
                  <TimelineItem label="OUTPUT_GENERATION" status="pending" />
                </div>
              </div>

              {/* Programme Infrastructure Progress */}
              <div className="rounded-[32px] bg-[#0A0E18]/60 backdrop-blur-xl border border-white/5 p-6 flex flex-col justify-between shadow-2xl relative group/progress">
                <div className="flex items-center gap-3.5 mb-3">
                  <Activity className="w-4.5 h-4.5 text-brand-gold" />
                  <span className="text-[12px] font-black text-white/80 uppercase tracking-[0.3em]">Infrastructure Health</span>
                </div>
                <div className="flex items-center gap-6 py-2">
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90">
                      <circle cx="48" cy="48" r="42" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="8" />
                      <motion.circle 
                        cx="48" cy="48" r="42" fill="none" stroke="#F5B942" strokeWidth="8" 
                        strokeDasharray="264" 
                        initial={{ strokeDashoffset: 264 }}
                        whileInView={{ strokeDashoffset: 66 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="drop-shadow-[0_0_12px_#F5B942]" 
                      />
                    </svg>
                    <span className="absolute text-[20px] font-bold text-white tracking-tighter">75%</span>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="text-[10px] text-white/30 font-black uppercase tracking-widest leading-none">ACTIVE_NODE</div>
                    <div className="text-[14px] font-bold text-white leading-tight">Module 04: SCALE</div>
                    <div className="flex items-center gap-2">
                      <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full w-[80%] bg-brand-gold/60" />
                      </div>
                      <span className="text-[9px] text-brand-gold font-black">8/10</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Immersive Coordination Map */}
              <div className="rounded-[32px] bg-[#0A0E18]/60 backdrop-blur-xl border border-white/5 relative overflow-hidden group/map shadow-2xl">
                <Image src="/operational-map.png" alt="Map" fill className="object-cover opacity-[0.2] grayscale group-hover/map:scale-110 transition-transform duration-[30s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E18] via-transparent to-transparent" />
                <div className="absolute top-6 left-7 flex items-center gap-3.5">
                  <Globe className="w-4.5 h-4.5 text-brand-gold" />
                  <span className="text-[12px] font-black text-white/80 uppercase tracking-[0.3em]">Coordination Map</span>
                </div>
                <div className="absolute bottom-6 left-7 right-7 flex items-center justify-between">
                   <div className="flex -space-x-2">
                      {[1,2,3,4].map(i => (
                        <motion.div 
                          key={i} 
                          animate={{ scale: [1, 1.1, 1] }} 
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                          className="w-7 h-7 rounded-full bg-brand-gold/30 border-2 border-[#0A0E18] backdrop-blur-md shadow-lg" 
                        />
                      ))}
                   </div>
                   <div className="text-right">
                      <div className="text-[11px] font-mono text-brand-gold font-bold">142_NODES</div>
                      <div className="text-[9px] font-black text-white/20 uppercase tracking-widest mt-0.5">SYNC_ACTIVE</div>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR: INTELLIGENCE & GOVERNANCE PANELS */}
          <div className="flex flex-col gap-6 py-1">
            {/* Real-time Health Matrix */}
            <div className="p-6 rounded-[32px] bg-gradient-to-b from-[#101420]/96 to-[#0A0E18]/92 border border-white/10 backdrop-blur-3xl space-y-6 shadow-2xl relative overflow-hidden group/matrix">
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover/matrix:opacity-10 transition-opacity">
                <Activity className="w-20 h-20 text-brand-gold" />
              </div>
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4.5 h-4.5 text-brand-gold" />
                  <span className="text-[11px] font-black text-white/60 uppercase tracking-[0.4em]">Health Score</span>
                </div>
                <span className="text-[18px] font-bold text-white tracking-tighter leading-none">94%</span>
              </div>
              <div className="grid grid-cols-2 gap-3 relative z-10">
                <HealthMetric label="Engagement" val="88%" />
                <HealthMetric label="Attendance" val="94%" />
                <HealthMetric label="Response" val="92%" />
                <HealthMetric label="Latency" val="12ms" />
              </div>
            </div>

            {/* AI Strategic Assistant */}
            <div className="p-6 rounded-[32px] bg-gradient-to-b from-[#101420]/96 to-[#0A0E18]/92 border border-white/10 backdrop-blur-3xl space-y-5 shadow-2xl relative group/assistant">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Brain className="w-4.5 h-4.5 text-brand-gold" />
                  <span className="text-[11px] font-black text-white/60 uppercase tracking-[0.4em]">AI Assistant</span>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-pulse shadow-[0_0_12px_#F5B942]" />
              </div>
              <div className="p-4 rounded-2xl bg-brand-gold/[0.04] border border-brand-gold/10 relative overflow-hidden group-hover/assistant:border-brand-gold/30 transition-colors duration-500">
                <div className="text-[13px] text-white/70 leading-relaxed font-medium italic mb-4 relative z-10">
                  "Engagement drop detected in Cluster_04. Initiating interactive protocol B."
                </div>
                <button className="w-full h-11 rounded-xl bg-brand-gold text-black text-[11px] font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-lg active:scale-[0.97]">
                  EXECUTE PROTOCOL
                </button>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold/[0.03] to-transparent animate-shimmer pointer-events-none" />
              </div>
              <div className="flex items-center justify-between px-1">
                <span className="text-[10px] text-white/20 font-black uppercase tracking-widest">CONFIDENCE_INDEX</span>
                <span className="text-[10px] text-brand-gold/80 font-bold font-mono tracking-widest">98.2%</span>
              </div>
            </div>

            {/* Mission-Critical Alerts */}
            <div className="p-6 rounded-[32px] bg-gradient-to-b from-[#101420]/96 to-[#0A0E18]/92 border border-white/10 backdrop-blur-3xl space-y-5 shadow-2xl">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-4.5 h-4.5 text-red-500/80" />
                <span className="text-[11px] font-black text-white/60 uppercase tracking-[0.4em]">Risk Matrix</span>
              </div>
              <div className="space-y-2.5">
                <RiskItem label="Engagement Drift" severity="low" />
                <RiskItem label="Attendance Protocol" severity="med" />
                <RiskItem label="Network Latency" severity="low" />
              </div>
            </div>

            {/* Automated Governance Outputs */}
            <div className="p-6 rounded-[32px] bg-gradient-to-b from-[#101420]/96 to-[#0A0E18]/92 border border-white/10 backdrop-blur-3xl space-y-5 shadow-2xl">
              <div className="flex items-center gap-3">
                <FileCheck className="w-4.5 h-4.5 text-brand-gold" />
                <span className="text-[11px] font-black text-white/60 uppercase tracking-[0.4em]">Governance</span>
              </div>
              <div className="space-y-2">
                <OutputItem label="Session_Sync_Report" />
                <OutputItem label="Action_Item_Protocol" />
                <OutputItem label="Institutional_Audit" />
                <OutputItem label="Compliance_Log_04" />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM METRICS SYSTEM: 6 HIGH-FIDELITY CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
          {bottomMetrics.map((m, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-[24px] bg-white/[0.02] border border-white/5 hover:border-brand-gold/40 hover:bg-white/[0.05] transition-all duration-700 group cursor-default relative overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-brand-gold/10 group-hover:text-brand-gold transition-all duration-500 shadow-inner">
                <m.icon className="w-4 h-4 opacity-30 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-[22px] font-bold text-white tracking-tighter mb-1 leading-none group-hover:text-brand-gold transition-colors">{m.val}</div>
              <div className="text-[10px] text-white/20 font-black uppercase tracking-[0.15em] leading-tight">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite linear;
        }
      `}</style>
    </section>
  );
}

function ControlBtn({ icon: Icon, active = false }: { icon: any, active?: boolean }) {
  return (
    <button className={cn(
      "w-[42px] h-[42px] rounded-full flex items-center justify-center transition-all duration-500 relative group active:scale-90",
      active ? "bg-white/10 text-white border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)]" : "bg-transparent text-white/30 hover:bg-white/5 hover:text-white"
    )}>
      <Icon className="w-4.5 h-4.5 z-10" />
      {active && <div className="absolute inset-0 bg-brand-gold/10 blur-md rounded-full" />}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
    </button>
  );
}

function TimelineItem({ label, status }: { label: string, status: "complete" | "active" | "pending" }) {
  return (
    <div className="flex items-center gap-4 group cursor-default">
      <div className={cn(
        "w-2 h-2 rounded-full shrink-0 transition-all duration-700 relative",
        status === "complete" ? "bg-brand-gold" : status === "active" ? "bg-brand-gold shadow-[0_0_12px_#F5B942] animate-pulse" : "bg-white/10"
      )}>
        {status === "active" && <div className="absolute inset-0 bg-brand-gold animate-ping opacity-30 rounded-full" />}
      </div>
      <span className={cn(
        "text-[11px] font-bold tracking-tight uppercase group-hover:translate-x-1 transition-transform duration-500",
        status === "active" ? "text-white" : "text-white/30"
      )}>{label}</span>
    </div>
  );
}

function HealthMetric({ label, val }: { label: string, val: string }) {
  return (
    <div className="p-3.5 rounded-xl bg-white/[0.015] border border-white/[0.06] hover:border-brand-gold/20 transition-all group/metric">
      <div className="text-[9px] text-white/20 font-black uppercase tracking-widest mb-1.5 group-hover/metric:text-white/40 transition-colors">{label}</div>
      <div className="text-[15px] font-bold text-white/90 group-hover/metric:text-brand-gold transition-colors">{val}</div>
    </div>
  );
}

function RiskItem({ label, severity }: { label: string, severity: "low" | "med" }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.015] border border-white/[0.06] hover:bg-white/[0.03] transition-all">
      <span className="text-[11px] font-bold text-white/50 tracking-tight">{label}</span>
      <span className={cn(
        "text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md",
        severity === "med" ? "bg-orange-500/[0.08] text-orange-500 border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.1)]" : "bg-emerald-500/[0.08] text-emerald-500 border border-emerald-500/20"
      )}>{severity}</span>
    </div>
  );
}

function OutputItem({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.015] border border-white/[0.06] group hover:border-brand-gold/40 hover:bg-white/[0.04] transition-all cursor-pointer">
      <span className="text-[11px] font-bold text-white/40 group-hover:text-white transition-colors tracking-tight">{label}</span>
      <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-brand-gold/10 transition-colors">
        <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-brand-gold transition-all duration-500 group-hover:scale-110" />
      </div>
    </div>
  );
}
