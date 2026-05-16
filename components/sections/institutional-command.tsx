"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Activity, Brain, Clock, Globe, Layers, FileCheck, 
  Mic, Video, Monitor, Users, Smile, MessageSquare, MoreHorizontal,
  ArrowUpRight, ShieldCheck, Zap, Globe2, ChevronRight, CheckCircle2,
  AlertCircle, BarChart3, TrendingUp, Search, Radio, Wifi, 
  Bell, Share2, PhoneOff, Settings, Info, Shield, Target, Play,
  Download, FileText, FileSpreadsheet, Lock
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  { title: "Operational Health Engine", icon: Activity },
  { title: "AI Facilitation Assistant", icon: Brain },
  { title: "Decision Intelligence", icon: Target },
  { title: "Coordination Infrastructure", icon: Globe },
];

export function InstitutionalCommandCenter() {
  return (
    <section className="bg-[#050816] relative py-16 overflow-hidden min-h-[900px] flex items-center">
      
      {/* 1. CINEMATIC ATMOSPHERE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/institutional-atmosphere.png" 
          alt="Atmosphere" 
          fill 
          className="object-cover opacity-[0.12] blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-transparent to-[#050816]" />
        
        {/* Futuristic Grid & Lighting */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_top,rgba(245,184,46,0.1),transparent_70%)]" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(245,184,46,0.03),transparent_60%)]" />
      </div>

      <div className="max-w-[1450px] mx-auto px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[28fr_47fr_25fr] gap-8 items-stretch">
          
          {/* LEFT COLUMN: INFORMATION & FEATURES (28%) */}
          <div className="flex flex-col h-full justify-center">
            <div className="mb-10">
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[10px] font-black text-[#f5b82e] uppercase tracking-[0.45em] mb-4 block"
              >
                LIVE OPERATION COMMAND
              </motion.span>
              <h2 className="text-[42px] font-bold text-white leading-[1.05] tracking-[-0.05em] mb-6">
                Built for intelligent <br /> programme <span className="text-[#f5b82e] italic">delivery.</span>
              </h2>
              <p className="text-[14px] text-white/40 leading-relaxed font-medium max-w-[320px]">
                OYEN GRID orchestrates global institutional programme operations with real-time intelligence and autonomous control.
              </p>
            </div>

            <div className="space-y-2.5 mb-10">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="h-[52px] px-4 rounded-[18px] flex items-center gap-4 bg-gradient-to-r from-white/[0.02] to-transparent border border-white/[0.05] hover:border-[#f5b82e]/30 hover:bg-white/[0.04] transition-all duration-500 group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#f5b82e]/10 text-[#f5b82e] flex items-center justify-center shrink-0">
                    <feature.icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[12px] font-bold text-white/80 group-hover:text-white transition-colors tracking-tight">{feature.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button className="h-12 px-8 rounded-2xl bg-[#f5b82e] text-black font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-2.5 hover:brightness-110 transition-all shadow-[0_15px_30px_rgba(245,184,46,0.15)] active:scale-[0.98]">
                INITIALIZE PLATFORM
              </button>
              <button className="h-12 px-8 rounded-2xl bg-white/[0.02] border border-white/[0.1] text-white/60 font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/[0.06] hover:text-white transition-all">
                WATCH INFRASTRUCTURE
              </button>
            </div>
          </div>

          {/* CENTER COLUMN: MAIN FUTURISTIC DASHBOARD (47%) */}
          <div className="flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="rounded-[30px] bg-[#0A0E18]/80 backdrop-blur-3xl border border-white/10 overflow-hidden flex flex-col shadow-[0_40px_100px_rgba(0,0,0,0.6)] relative"
            >
              
              {/* TOP BAR */}
              <div className="h-[52px] border-b border-white/[0.08] px-8 flex items-center justify-between bg-white/[0.02]">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-[#f5b82e]/60">
                    <Radio className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-bold tracking-tight">Programme Sync • CL04</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1 rounded-md bg-red-500/10 border border-red-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]" />
                    <span className="text-[8px] font-black text-red-500 uppercase tracking-widest">LIVE</span>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-white/20">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-mono tracking-widest">01:24:58</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/20">
                    <Wifi className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-mono uppercase">Connected</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/20">
                    <Users className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-mono">1,240</span>
                  </div>
                  <Bell className="w-4 h-4 text-white/30 cursor-pointer" />
                </div>
              </div>

              {/* MAIN PANEL: VIDEO & NODES */}
              <div className="h-[360px] flex p-4 gap-4 bg-black/40 relative">
                {/* Facilitator Video Panel */}
                <div className="flex-1 relative rounded-[24px] overflow-hidden border border-white/[0.08] bg-[#0D1018] group/video">
                  <Image 
                    src="/institutional-leader-v2.png" 
                    alt="Facilitator" 
                    fill 
                    className="object-cover opacity-90 transition-transform duration-[30s] group-hover/video:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                  
                  {/* Overlay Label */}
                  <div className="absolute top-5 left-6 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#f5b82e] shadow-[0_0_10px_#f5b82e]" />
                    <span className="text-[9px] font-black text-white uppercase tracking-[0.2em]">OPERATIONAL FACILITATOR</span>
                  </div>

                  <div className="absolute bottom-6 left-8">
                    <div className="text-[18px] font-bold text-white tracking-tighter leading-tight mb-1">Director of Institutional Operations</div>
                    <div className="text-[10px] font-black text-[#f5b82e]/50 uppercase tracking-[0.3em]">OYEN GRID LIVE SYSTEM</div>
                  </div>
                </div>

                {/* Participant Node Cards (Stacked Right) */}
                <div className="w-[180px] flex flex-col gap-2 overflow-hidden">
                  {[1, 2, 3, 4].map(p => (
                    <motion.div 
                      key={p} 
                      whileHover={{ x: -4, backgroundColor: "rgba(255,255,255,0.06)" }}
                      className="h-[64px] rounded-[18px] bg-white/[0.02] border border-white/[0.05] p-3 flex items-center gap-3 transition-all duration-300"
                    >
                      <div className="w-9 h-9 rounded-xl bg-white/5 overflow-hidden relative grayscale opacity-30">
                        <Image src="/institutional-participants.png" alt="Node" fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[11px] font-bold text-white/80 truncate">Node Cluster {p}</div>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <div className="w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)] animate-pulse" />
                          <span className="text-[8px] text-white/20 font-black uppercase tracking-widest">ACTIVE</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* BOTTOM CONTROL BAR */}
              <div className="h-[60px] border-t border-white/[0.08] px-8 flex items-center justify-between bg-white/[0.01] backdrop-blur-2xl">
                <div className="flex items-center gap-3">
                  <ControlBtn icon={Mic} active />
                  <ControlBtn icon={Video} active />
                  <ControlBtn icon={Share2} />
                  <div className="h-6 w-px bg-white/10 mx-1" />
                  <ControlBtn icon={Users} />
                  <ControlBtn icon={MessageSquare} />
                  <ControlBtn icon={Smile} />
                  <ControlBtn icon={Settings} />
                </div>
                <button className="h-9 px-6 rounded-xl bg-red-500/10 text-red-500 text-[10px] font-black uppercase tracking-widest border border-red-500/20 hover:bg-red-500 hover:text-white transition-all shadow-lg active:scale-95">
                  END SYNC
                </button>
              </div>
            </motion.div>

            {/* BOTTOM ANALYTICS (3 Cards) */}
            <div className="grid grid-cols-3 gap-6 h-[180px]">
              {/* Delivery Timeline */}
              <div className="rounded-[24px] bg-[#0A0E18]/60 backdrop-blur-xl border border-white/5 p-5 flex flex-col justify-between shadow-2xl relative overflow-hidden group/timeline">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f5b82e]/20 to-transparent" />
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-4 h-4 text-[#f5b82e]" />
                  <span className="text-[11px] font-black text-white/60 uppercase tracking-[0.2em]">Delivery Timeline</span>
                </div>
                <div className="space-y-4">
                  <TimelineItem label="Protocol_A" status="complete" />
                  <TimelineItem label="Operational_Sync" status="active" />
                  <TimelineItem label="Sync_Output" status="pending" />
                </div>
              </div>

              {/* Session Health */}
              <div className="rounded-[24px] bg-[#0A0E18]/60 backdrop-blur-xl border border-white/5 p-5 flex flex-col justify-between shadow-2xl group/progress">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f5b82e]/20 to-transparent" />
                <div className="flex items-center gap-3 mb-2">
                  <Activity className="w-4 h-4 text-[#f5b82e]" />
                  <span className="text-[11px] font-black text-white/60 uppercase tracking-[0.2em]">Session Health</span>
                </div>
                <div className="flex items-center gap-5 pt-1">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90">
                      <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="6" />
                      <circle cx="32" cy="32" r="28" fill="none" stroke="#f5b82e" strokeWidth="6" strokeDasharray="176" strokeDashoffset="44" className="drop-shadow-[0_0_8px_#f5b82e]" />
                    </svg>
                    <span className="absolute text-[13px] font-bold text-white">75%</span>
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <div className="text-[9px] text-white/30 font-black uppercase tracking-widest">Active_Node</div>
                    <div className="text-[12px] font-bold text-white leading-tight">Module 04: SCALE</div>
                  </div>
                </div>
              </div>

              {/* Coordination Map */}
              <div className="rounded-[24px] bg-[#0A0E18]/60 backdrop-blur-xl border border-white/5 relative overflow-hidden group/map shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f5b82e]/20 to-transparent" />
                <Image src="/operational-map.png" alt="Map" fill className="object-cover opacity-[0.2] grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E18] via-transparent to-transparent" />
                <div className="absolute top-5 left-6 flex items-center gap-3">
                  <Globe className="w-4 h-4 text-[#f5b82e]" />
                  <span className="text-[11px] font-black text-white/60 uppercase tracking-[0.2em]">Coordination Map</span>
                </div>
                <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
                   <div className="flex -space-x-1.5">
                      {[1,2,3].map(i => <div key={i} className="w-5 h-5 rounded-full bg-[#f5b82e]/30 border border-[#0A0E18]" />)}
                   </div>
                   <div className="text-[9px] font-mono text-[#f5b82e] tracking-widest">142_NODES</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: INTELLIGENCE CARDS (25%) */}
          <div className="flex flex-col gap-6">
            {/* Card 1: Operational Intelligence */}
            <div className="p-6 rounded-[24px] bg-[#0A0E18] border border-white/10 space-y-5 shadow-2xl relative overflow-hidden">
               <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                     <ShieldCheck className="w-4 h-4 text-[#f5b82e]" />
                     <span className="text-[11px] font-black text-white/60 uppercase tracking-[0.3em]">Operational Intel</span>
                  </div>
                  <span className="text-[24px] font-bold text-white tracking-tighter">94%</span>
               </div>
               <div className="grid grid-cols-2 gap-3 relative z-10">
                  <HealthStat label="Engagement" val="88%" />
                  <HealthStat label="Attendance" val="94%" />
                  <HealthStat label="Response" val="92%" />
                  <HealthStat label="Latency" val="12ms" />
               </div>
            </div>

            {/* Card 2: AI Facilitator */}
            <div className="p-6 rounded-[24px] bg-[#0A0E18] border border-white/10 space-y-4 shadow-2xl">
               <div className="flex items-center gap-3">
                  <Brain className="w-4.5 h-4.5 text-[#f5b82e]" />
                  <span className="text-[11px] font-black text-white/60 uppercase tracking-[0.3em]">AI Facilitator</span>
               </div>
               <div className="p-4 rounded-xl bg-[#f5b82e]/5 border border-[#f5b82e]/10 text-[12px] text-white/70 leading-relaxed font-medium italic">
                  "Engagement drop detected in Cluster_04. Initiating alignment protocol B."
               </div>
               <button className="w-full h-10 rounded-xl bg-[#f5b82e] text-black text-[11px] font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-xl active:scale-95">
                  EXECUTE PROTOCOL
               </button>
            </div>

            {/* Card 3: Decision Layer */}
            <div className="p-6 rounded-[24px] bg-[#0A0E18] border border-white/10 space-y-4 shadow-2xl">
               <div className="flex items-center gap-3">
                  <Layers className="w-4.5 h-4.5 text-[#f5b82e]" />
                  <span className="text-[11px] font-black text-white/60 uppercase tracking-[0.3em]">Decision Layer</span>
               </div>
               <div className="space-y-2.5">
                  <StatusRow label="Engagement Protocol" status="LIVE" />
                  <StatusRow label="Institutional Alignment" status="HIGH" />
                  <StatusRow label="Sync Infrastructure" status="LIVE" />
               </div>
            </div>

            {/* Card 4: Live Outputs */}
            <div className="p-6 rounded-[24px] bg-[#0A0E18] border border-white/10 space-y-4 shadow-2xl">
               <div className="flex items-center gap-3">
                  <FileCheck className="w-4.5 h-4.5 text-[#f5b82e]" />
                  <span className="text-[11px] font-black text-white/60 uppercase tracking-[0.3em]">Live Outputs</span>
               </div>
               <div className="space-y-2">
                  <FileRow label="Session_Sync_Report.pdf" icon={FileText} />
                  <FileRow label="Institutional_Audit.csv" icon={FileSpreadsheet} />
                  <FileRow label="Governance_Log_04.pdf" icon={Lock} />
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
      "w-[36px] h-[36px] rounded-full flex items-center justify-center transition-all duration-300 relative group",
      active ? "bg-white/10 text-white border border-white/10 shadow-lg" : "bg-transparent text-white/20 hover:bg-white/5 hover:text-white"
    )}>
      <Icon className="w-4 h-4" />
      {active && <div className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-[#f5b82e]/60 blur-[1px]" />}
    </button>
  );
}

function TimelineItem({ label, status }: { label: string, status: "complete" | "active" | "pending" }) {
  return (
    <div className="flex items-center gap-3">
      <div className={cn(
        "w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-500 relative",
        status === "complete" ? "bg-[#f5b82e]" : status === "active" ? "bg-[#f5b82e] shadow-[0_0_8px_#f5b82e] animate-pulse" : "bg-white/10"
      )}>
        {status === "active" && <div className="absolute inset-0 bg-[#f5b82e] animate-ping opacity-30 rounded-full" />}
      </div>
      <span className={cn(
        "text-[10px] font-bold tracking-tight uppercase",
        status === "active" ? "text-white" : "text-white/30"
      )}>{label}</span>
    </div>
  );
}

function HealthStat({ label, val }: { label: string, val: string }) {
  return (
    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
      <div className="text-[9px] text-white/20 font-black uppercase tracking-widest mb-1">{label}</div>
      <div className="text-[13px] font-bold text-white">{val}</div>
    </div>
  );
}

function StatusRow({ label, status }: { label: string, status: "LIVE" | "HIGH" }) {
  return (
    <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5">
       <span className="text-[10px] font-bold text-white/50">{label}</span>
       <div className="flex items-center gap-1.5">
          <div className={cn(
            "w-1 h-1 rounded-full",
            status === "LIVE" ? "bg-emerald-500 animate-pulse" : "bg-orange-500"
          )} />
          <span className={cn(
            "text-[9px] font-black tracking-widest",
            status === "LIVE" ? "text-emerald-500" : "text-orange-500"
          )}>{status}</span>
       </div>
    </div>
  );
}

function FileRow({ label, icon: Icon }: { label: string, icon: any }) {
  return (
    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5 group hover:border-[#f5b82e]/40 hover:bg-white/[0.04] transition-all cursor-pointer">
       <div className="flex items-center gap-2.5">
          <Icon className="w-3.5 h-3.5 text-white/20 group-hover:text-[#f5b82e] transition-colors" />
          <span className="text-[10px] font-bold text-white/40 group-hover:text-white transition-colors truncate max-w-[120px]">{label}</span>
       </div>
       <Download className="w-3 h-3 text-white/10 group-hover:text-[#f5b82e] transition-all" />
    </div>
  );
}
