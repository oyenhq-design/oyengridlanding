"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Activity, Brain, Clock, Globe, Layers, FileCheck, 
  Mic, Video, Monitor, Users, Smile, MessageSquare, MoreHorizontal,
  ArrowUpRight, ShieldCheck, Zap, Globe2, ChevronRight, CheckCircle2,
  AlertCircle, BarChart3, TrendingUp, Search, Radio, Wifi, Shield,
  Lock, Target, Info, Terminal, Database, LineChart
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  { title: "Operational Health Engine", desc: "Live infrastructure monitoring.", icon: Activity, highlight: true },
  { title: "AI Facilitation Assistant", desc: "Intelligence-driven moderation.", icon: Brain, highlight: true },
  { title: "Delivery Timeline", desc: "Live programme milestones.", icon: Clock },
  { title: "Coordination Map", desc: "Global participant distribution.", icon: Globe },
  { title: "Decision Layer", desc: "AI-driven operational logic.", icon: Layers },
  { title: "Structured Outputs", desc: "Automated institutional records.", icon: FileCheck },
];

const metrics = [
  { label: "Nodes Connected", val: "1,240+", sub: "INFRASTRUCTURE" },
  { label: "System Uptime", val: "99.995%", sub: "AVAILABILITY" },
  { label: "Sync Latency", val: "0.8ms", sub: "NETWORK" },
  { label: "Active Regions", val: "140+", sub: "GLOBAL REACH" },
];

export function InstitutionalCommandCenter() {
  return (
    <section className="bg-[#050816] relative py-[90px] overflow-hidden">
      
      {/* 1. ARCHITECTURAL BACKGROUND SYSTEM */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/institutional-atmosphere.png" 
          alt="Atmosphere" 
          fill 
          className="object-cover opacity-[0.08] blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-transparent to-[#050816]" />
        
        {/* Subtle Structural Grids */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        
        {/* Cinematic Lighting Accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-[radial-gradient(circle_at_top,rgba(245,185,66,0.04),transparent_50%)]" />
      </div>

      <div className="max-w-[1380px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_280px] gap-[22px] items-stretch">
          
          {/* LEFT: INSTITUTIONAL MESSAGING & INFRASTRUCTURE FEATURES */}
          <div className="flex flex-col gap-10">
            <div>
              <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.4em] mb-4 block">
                DELIVERY INFRASTRUCTURE
              </span>
              <h2 className="text-[32px] font-bold text-white leading-[0.9] tracking-[-0.05em] mb-6">
                Built for intelligent <br /> programme <span className="text-brand-gold italic">delivery.</span>
              </h2>
              <p className="text-[13px] text-white/30 leading-relaxed font-medium">
                The operating system for global institutional programme coordination.
              </p>
            </div>

            <div className="space-y-2">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-[62px] px-4 rounded-[14px] flex items-center gap-4 border transition-all duration-500",
                    feature.highlight 
                      ? "bg-white/[0.03] border-white/10" 
                      : "bg-transparent border-transparent opacity-30 hover:opacity-100"
                  )}
                >
                  <div className={cn(
                    "w-9 h-9 rounded-xl flex items-center justify-center shrink-0",
                    feature.highlight ? "bg-brand-gold/10 text-brand-gold" : "bg-white/5 text-white/40"
                  )}>
                    <feature.icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[13px] font-bold text-white truncate">{feature.title}</h3>
                    <p className="text-[9px] text-white/20 font-black uppercase tracking-widest">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto">
               <button className="w-full h-14 rounded-2xl bg-brand-gold text-black font-black text-[13px] uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-xl shadow-brand-gold/5">
                 Initialize Infrastructure
                 <ArrowUpRight className="w-4.5 h-4.5" />
               </button>
            </div>
          </div>

          {/* CENTER: LIVE OPERATIONAL SESSION PANEL */}
          <div className="flex flex-col gap-[18px]">
            {/* THE COMMAND INTERFACE (Horizontal & Dense) */}
            <div className="h-[440px] rounded-[32px] bg-[#0A0E18] border border-white/5 overflow-hidden flex flex-col shadow-[0_40px_100px_rgba(0,0,0,0.6)] relative group">
              
              {/* TOP HEADER BAR (Governance & Control) */}
              <div className="h-[56px] border-b border-white/5 px-8 flex items-center justify-between bg-white/[0.02]">
                <div className="flex items-center gap-5">
                   <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-[11px] font-black text-white uppercase tracking-widest">LIVE_COMMAND</span>
                   </div>
                   <div className="h-4 w-px bg-white/10" />
                   <span className="text-[13px] font-bold text-white/70">Institutional Alignment Session • Cluster_04</span>
                </div>
                <div className="flex items-center gap-8">
                   <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-white/20" />
                      <span className="text-[12px] font-mono text-white/60 tracking-widest">01:24:58</span>
                   </div>
                   <div className="flex items-center gap-3 px-3 py-1.5 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                      <Wifi className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Secure_Sync</span>
                   </div>
                </div>
              </div>

              {/* MAIN CONTENT AREA: ORCHESTRATION ROW */}
              <div className="flex-1 flex p-4 gap-4 overflow-hidden">
                {/* Facilitator Video: Cinematic Overlay (2/3 width) */}
                <div className="flex-[1.8] relative rounded-[24px] overflow-hidden border border-white/5 bg-black/60 shadow-inner">
                   <Image 
                     src="/institutional-leader-v2.png" 
                     alt="Facilitator" 
                     fill 
                     className="object-cover opacity-90 transition-transform duration-[40s] group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                   
                   {/* HUD Overlays */}
                   <div className="absolute top-5 left-6 flex items-center gap-4">
                      <div className="px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                         <span className="text-[10px] font-black text-white uppercase tracking-widest">FACILITATOR</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/10">
                         <Smile className="w-3.5 h-3.5 text-white/40" />
                         <span className="text-[10px] font-bold text-white/60 uppercase">Engagement: High</span>
                      </div>
                   </div>

                   <div className="absolute bottom-6 left-8">
                      <div className="text-[18px] font-bold text-white tracking-tight mb-1">Director of Institutional Operations</div>
                      <div className="text-[11px] font-black text-brand-gold uppercase tracking-[0.2em]">Live Synchronization Active</div>
                   </div>

                   {/* AI Activity Feed: Floating HUD */}
                   <div className="absolute bottom-6 right-8 w-56 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 space-y-3 shadow-2xl">
                      <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                         <Terminal className="w-3.5 h-3.5 text-brand-gold" />
                         <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">AI_FACILITATION</span>
                      </div>
                      <div className="text-[11px] text-white/70 leading-relaxed italic">
                         Analyzing participant nodes...
                      </div>
                   </div>
                </div>

                {/* Participant Stack: Structured Grid (1/3 width) */}
                <div className="flex-1 flex flex-col gap-2.5 overflow-hidden">
                   <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-1 pl-1">Global Participation Stack</div>
                   {[1, 2, 3, 4].map(p => (
                     <div key={p} className="h-[64px] rounded-[16px] bg-white/[0.02] border border-white/5 p-3 flex items-center gap-3.5 transition-all hover:bg-white/[0.05] hover:border-white/10">
                        <div className="w-10 h-10 rounded-xl bg-white/5 overflow-hidden relative grayscale opacity-40">
                           <Image src="/institutional-participants.png" alt="Node" fill className="object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                           <div className="text-[12px] font-bold text-white truncate">Institutional Node {p}</div>
                           <div className="flex items-center justify-between mt-0.5">
                              <span className="text-[9px] text-white/20 font-black uppercase tracking-widest">UK_Sync_Region</span>
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]" />
                           </div>
                        </div>
                     </div>
                   ))}
                </div>
              </div>

              {/* BOTTOM CONTROL BAR (Minimal & Pro) */}
              <div className="h-[60px] border-t border-white/5 px-8 flex items-center justify-between bg-white/[0.01] backdrop-blur-md">
                 <div className="flex items-center gap-4">
                    <ControlBtn icon={Mic} active />
                    <ControlBtn icon={Video} active />
                    <ControlBtn icon={Monitor} />
                    <div className="h-6 w-px bg-white/10 mx-1" />
                    <ControlBtn icon={Users} />
                    <ControlBtn icon={LineChart} />
                    <ControlBtn icon={MessageSquare} />
                 </div>
                 <div className="flex items-center gap-4">
                    <ControlBtn icon={MoreHorizontal} />
                    <button className="h-10 px-8 rounded-xl bg-red-500/10 text-red-500 text-[11px] font-black uppercase tracking-widest border border-red-500/20 hover:bg-red-500 hover:text-white transition-all shadow-lg">
                       End Operational Sync
                    </button>
                 </div>
              </div>
            </div>

            {/* LOWER INFRASTRUCTURE ROW: Analytics & Map */}
            <div className="h-[130px] grid grid-cols-2 gap-[18px]">
              {/* Delivery Timeline (Structured) */}
              <div className="rounded-[24px] bg-[#0A0E18] border border-white/5 p-5 flex flex-col justify-between shadow-xl">
                 <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <div className="flex items-center gap-3">
                       <Clock className="w-4 h-4 text-brand-gold" />
                       <span className="text-[11px] font-black text-white/60 uppercase tracking-widest">Delivery Timeline</span>
                    </div>
                    <span className="text-[10px] font-mono text-brand-gold opacity-60 uppercase">PHASE_03_ACTIVE</span>
                 </div>
                 <div className="grid grid-cols-3 gap-4 pt-4">
                    <TimelineNode label="Protocol_A" status="complete" />
                    <TimelineNode label="Alignment" status="active" />
                    <TimelineNode label="Sync_Output" status="pending" />
                 </div>
              </div>

              {/* Synchronized Operational Map */}
              <div className="rounded-[24px] bg-[#0A0E18] border border-white/5 relative overflow-hidden group shadow-xl">
                 <Image src="/operational-map.png" alt="Map" fill className="object-cover opacity-[0.15] grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-30" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E18] via-transparent to-transparent" />
                 <div className="absolute top-5 left-6 flex items-center gap-3">
                    <Globe className="w-4 h-4 text-brand-gold" />
                    <span className="text-[11px] font-black text-white/60 uppercase tracking-widest">Global Coordination</span>
                 </div>
                 <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
                    <div className="flex -space-x-2">
                       {[1,2,3,4].map(i => <div key={i} className="w-6 h-6 rounded-full bg-brand-gold/30 border-2 border-[#0A0E18] backdrop-blur-md" />)}
                    </div>
                    <div className="text-right">
                       <div className="text-[11px] font-bold text-white tracking-tight">1,240 Sync Nodes</div>
                       <div className="text-[9px] font-black text-brand-gold/40 uppercase tracking-widest">Worldwide Coverage</div>
                    </div>
                 </div>
              </div>
            </div>

            {/* ENTERPRISE METRICS (Compact & Clean) */}
            <div className="h-[90px] grid grid-cols-4 gap-[18px]">
              {metrics.map((m, i) => (
                <div key={i} className="rounded-[20px] bg-white/[0.02] border border-white/5 p-4 flex flex-col justify-center transition-all hover:bg-white/[0.04]">
                   <div className="text-[9px] font-black text-brand-gold/50 uppercase tracking-[0.2em] mb-1.5">{m.sub}</div>
                   <div className="text-[20px] font-bold text-white tracking-tighter leading-none mb-1">{m.val}</div>
                   <div className="text-[10px] text-white/20 font-bold uppercase truncate tracking-widest">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: ADVANCED INTELLIGENCE & GOVERNANCE PANELS */}
          <div className="flex flex-col gap-[18px]">
            {/* Operational Health Score (The Main HUD) */}
            <div className="p-5 rounded-[24px] bg-[#0A0E18] border border-white/5 space-y-6 shadow-2xl relative overflow-hidden group/health">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/health:opacity-40 transition-opacity">
                  <Activity className="w-16 h-16 text-brand-gold" />
               </div>
               <div className="flex items-center gap-3 relative z-10">
                  <Activity className="w-4.5 h-4.5 text-brand-gold" />
                  <span className="text-[11px] font-black text-white uppercase tracking-[0.3em]">Operational Health</span>
               </div>
               
               <div className="flex items-center gap-6 relative z-10">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                     <svg className="w-full h-full -rotate-90">
                        <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="6" />
                        <motion.circle 
                           cx="40" cy="40" r="34" fill="none" stroke="#F5B942" strokeWidth="6" 
                           strokeDasharray="214" 
                           initial={{ strokeDashoffset: 214 }}
                           whileInView={{ strokeDashoffset: 30 }}
                           transition={{ duration: 1.5, ease: "easeOut" }}
                           className="drop-shadow-[0_0_8px_#F5B942]" 
                        />
                     </svg>
                     <span className="absolute text-[16px] font-bold text-white tracking-tighter">94%</span>
                  </div>
                  <div className="flex-1 space-y-3">
                     <div className="flex items-center justify-between">
                        <span className="text-[10px] text-white/30 font-black uppercase tracking-widest">Engagement</span>
                        <span className="text-[11px] font-bold text-emerald-500">EXCELLENT</span>
                     </div>
                     <div className="flex items-center justify-between">
                        <span className="text-[10px] text-white/30 font-black uppercase tracking-widest">Network_Sync</span>
                        <span className="text-[11px] font-bold text-white">99.8%</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* AI Recommendations & Compliance (Active) */}
            <div className="p-5 rounded-[24px] bg-[#0A0E18] border border-white/5 space-y-5 shadow-2xl relative">
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <Brain className="w-4.5 h-4.5 text-brand-gold" />
                     <span className="text-[11px] font-black text-white uppercase tracking-[0.3em]">Intelligence assistant</span>
                  </div>
                  <div className="px-2 py-0.5 rounded bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-[9px] font-black uppercase tracking-widest animate-pulse">ACTIVE</div>
               </div>
               
               <div className="p-4 rounded-xl bg-brand-gold/5 border border-brand-gold/10 space-y-3">
                  <div className="text-[12px] text-white/70 leading-relaxed font-medium">
                    "Institutional engagement score fluctuating in Node 04. Trigger alignment protocol B to ensure synchronization."
                  </div>
                  <button className="w-full h-10 rounded-xl bg-brand-gold text-black text-[11px] font-black uppercase tracking-widest hover:brightness-110 transition-all">
                     Execute Action Protocol
                  </button>
               </div>

               <div className="space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-black text-white/20 uppercase tracking-widest">Confidence Index</div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full w-[98%] bg-brand-gold shadow-[0_0_8px_#F5B942]" />
                  </div>
               </div>
            </div>

            {/* Governance & Governance Compliance */}
            <div className="p-5 rounded-[24px] bg-[#0A0E18] border border-white/5 space-y-5 shadow-2xl">
               <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4.5 h-4.5 text-brand-gold" />
                  <span className="text-[11px] font-black text-white uppercase tracking-[0.3em]">Governance & compliance</span>
               </div>
               <div className="space-y-3">
                  <ComplianceItem label="Governance Protocol" status="verified" />
                  <ComplianceItem label="Institutional Audit" status="active" />
                  <ComplianceItem label="Data Sovereignty" status="verified" />
                  <ComplianceItem label="Output Verification" status="active" />
               </div>
            </div>

            {/* Live Risks & Risk Alerts */}
            <div className="mt-auto p-4 rounded-2xl bg-red-500/5 border border-red-500/10 flex items-center gap-4">
               <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5 text-red-500 animate-pulse" />
               </div>
               <div>
                  <div className="text-[11px] font-black text-red-500 uppercase tracking-widest mb-0.5">Risk Protocol 04</div>
                  <div className="text-[10px] text-red-500/60 font-medium">No operational risks detected.</div>
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
      "w-[42px] h-[42px] rounded-full flex items-center justify-center transition-all duration-300 relative group",
      active ? "bg-white/10 text-white border border-white/10 shadow-lg" : "bg-transparent text-white/20 hover:bg-white/5 hover:text-white"
    )}>
      <Icon className="w-4.5 h-4.5" />
      {active && <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-brand-gold/40 blur-[2px]" />}
    </button>
  );
}

function TimelineNode({ label, status }: { label: string, status: "complete" | "active" | "pending" }) {
  return (
    <div className="flex flex-col items-center gap-3 group">
       <div className={cn(
         "w-2.5 h-2.5 rounded-full z-10 transition-all duration-500 relative",
         status === "complete" ? "bg-brand-gold" : status === "active" ? "bg-brand-gold shadow-[0_0_12px_#F5B942] animate-pulse" : "bg-white/10"
       )}>
          {status === "active" && <div className="absolute inset-0 bg-brand-gold/40 rounded-full animate-ping" />}
       </div>
       <span className={cn(
         "text-[10px] font-bold text-center tracking-tighter whitespace-nowrap",
         status === "active" ? "text-white" : "text-white/20"
       )}>{label}</span>
    </div>
  );
}

function ComplianceItem({ label, status }: { label: string, status: "verified" | "active" }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 group hover:border-brand-gold/20 transition-all duration-500">
       <div className="flex items-center gap-3">
          <div className={cn(
            "w-1.5 h-1.5 rounded-full",
            status === "verified" ? "bg-emerald-500" : "bg-brand-gold animate-pulse"
          )} />
          <span className="text-[11px] font-bold text-white/70 group-hover:text-white transition-colors">{label}</span>
       </div>
       {status === "verified" ? (
         <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/50" />
       ) : (
         <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
            <Radio className="w-3.5 h-3.5 text-brand-gold/30" />
         </motion.div>
       )}
    </div>
  );
}
