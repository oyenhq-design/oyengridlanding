"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Shield, Activity, Brain, Clock, Globe, Layers, FileCheck, 
  Mic, Video, Monitor, Users, Smile, MessageSquare, MoreHorizontal,
  ArrowUpRight, ShieldCheck, Zap, Globe2, ChevronRight, CheckCircle2,
  AlertCircle, BarChart3, TrendingUp, Search, Radio, Wifi, 
  Lock, Target, Info, Terminal, Database, LineChart, Bell, Maximize2,
  PlayCircle, FileText, Settings, Share2, Power, Hand, Sparkles, Workflow,
  LayoutDashboard, PieChart
} from "lucide-react";
import { cn } from "@/lib/utils";

export function InstitutionalDashboardHero() {
  const features = [
    { title: 'Operational Health Engine', desc: 'Live monitoring of engagement and risk.', icon: Activity },
    { title: 'AI Facilitator Assistant', desc: 'Real-time insights and smart summaries.', icon: Brain },
    { title: 'Live Delivery Timeline', desc: 'Track every interaction as it happens.', icon: Clock },
    { title: 'Coordination Map', desc: 'Visualize connected global operations.', icon: Globe },
    { title: 'Decision Layer', desc: 'AI-powered recommendations and outcomes.', icon: Layers },
    { title: 'Structured Outputs', desc: 'Automated reports and compliance logs.', icon: FileCheck }
  ];

  const participants = [
    { name: "Sarah Chen", role: "Programme Director", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" },
    { name: "Marcus Thorne", role: "Ops Lead", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop" },
    { name: "Elena Rossi", role: "Stakeholder", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop" },
    { name: "David Okafor", role: "Facilitator", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop" }
  ];

  return (
    <section className="relative min-h-screen bg-[#02040A] text-white overflow-hidden py-20 px-4 lg:px-8">
      
      {/* CINEMATIC BACKGROUND SYSTEM */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-blue-900/10 blur-[150px] rounded-full opacity-30" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-brand-gold/5 blur-[150px] rounded-full opacity-20" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "40px 40px" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#02040A]/80 to-[#02040A]" />
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* 1. LEFT SIDEBAR PANEL (NARRATIVE) */}
          <div className="lg:col-span-3 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center gap-3 mb-8">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_#F5B82E]" />
                 <p className="text-[#F5B82E] tracking-[0.35em] uppercase text-[10px] font-black">
                   Live Operation Command
                 </p>
              </div>

              <h1 className="text-[44px] xl:text-[54px] font-black leading-[0.95] tracking-tight mb-8">
                Built for intelligent <br /> 
                programme <span className="text-brand-gold italic font-serif">delivery.</span>
              </h1>

              <p className="text-[14px] text-white/40 mb-12 leading-relaxed font-medium max-w-sm">
                OYEN GRID provides the orchestration layer for complex institutional delivery, unifying every module, cohort and participant into one live operational intelligence center.
              </p>

              {/* Vertical Feature List */}
              <div className="space-y-4 mb-12">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-brand-gold/20 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-gold/5 border border-brand-gold/10 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/10 transition-colors">
                      <feature.icon className="w-5 h-5 text-brand-gold/60" />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-white/90 group-hover:text-white transition-colors">{feature.title}</h4>
                      <p className="text-[12px] text-white/20 mt-0.5 line-clamp-1">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <button className="h-14 px-10 rounded-xl bg-brand-gold text-black font-black uppercase text-[12px] tracking-widest hover:bg-[#FFC84A] transition-all shadow-xl shadow-brand-gold/10">
                  Explore Live Command
                </button>
                <button className="h-14 px-10 rounded-xl bg-white/5 border border-white/10 text-white/60 font-black uppercase text-[12px] tracking-widest hover:bg-white/10 hover:text-white transition-all">
                  See it in action
                </button>
              </div>
            </motion.div>
          </div>

          {/* 2. CENTER MAIN PANEL (VIRTUAL OPS) */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[32px] border border-white/10 bg-[#0B101B]/80 backdrop-blur-3xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)]"
            >
              {/* TOP BAR */}
              <div className="h-16 px-8 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                <div className="flex items-center gap-4">
                   <div className="flex gap-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                     <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                     <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                   </div>
                   <div className="h-6 w-px bg-white/5 mx-2" />
                   <h2 className="text-[14px] font-bold text-white/90">Leadership Alignment Session</h2>
                   <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-[9px] font-black text-red-500 uppercase tracking-widest">Live</span>
                   </div>
                </div>
                <div className="flex items-center gap-6">
                   <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-white/20" />
                      <span className="text-[11px] font-mono text-white/40">01:42:08</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <Wifi className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Secure_Node_V3</span>
                   </div>
                </div>
              </div>

              {/* MAIN VIDEO AREA */}
              <div className="p-6 grid grid-cols-12 gap-6 h-[600px]">
                {/* Speaker (Center) */}
                <div className="col-span-9 relative rounded-3xl overflow-hidden bg-black/40 group">
                   <Image 
                     src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop" 
                     alt="Speaker" 
                     fill 
                     className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                   
                   {/* AI Insight Badge */}
                   <motion.div 
                     animate={{ y: [0, -10, 0] }}
                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                     className="absolute top-6 right-6 p-4 rounded-2xl bg-black/40 backdrop-blur-2xl border border-brand-gold/20 shadow-2xl flex items-center gap-4"
                   >
                      <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                         <Brain className="w-5 h-5 text-brand-gold" />
                      </div>
                      <div>
                         <div className="text-[8px] font-black text-brand-gold uppercase tracking-[0.2em] mb-0.5">AI Insights</div>
                         <div className="text-[12px] font-bold text-white/90">Engagement is trending high</div>
                      </div>
                   </motion.div>

                   {/* Speaker Name HUD */}
                   <div className="absolute bottom-6 left-6 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full border-2 border-brand-gold/40 p-0.5">
                         <div className="w-full h-full rounded-full bg-brand-gold flex items-center justify-center">
                            <Mic className="w-5 h-5 text-black" />
                         </div>
                      </div>
                      <div>
                         <div className="text-[14px] font-bold text-white tracking-tight">Marcus Thorne</div>
                         <div className="text-[10px] text-white/40 uppercase tracking-widest font-black">Presenting: Operational Blueprint</div>
                      </div>
                   </div>

                   {/* Controls HUD */}
                   <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 p-2 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10">
                      {[Mic, Video, Monitor, Users, MessageSquare, Smile, MoreHorizontal].map((Icon, i) => (
                        <div key={i} className="w-10 h-10 rounded-xl hover:bg-white/10 flex items-center justify-center transition-all cursor-pointer">
                           <Icon className={cn("w-4.5 h-4.5", i === 0 || i === 1 ? "text-emerald-500" : "text-white/60")} />
                        </div>
                      ))}
                      <div className="w-px h-6 bg-white/10 mx-2" />
                      <button className="px-4 py-2 rounded-lg bg-red-500 text-white text-[10px] font-black uppercase tracking-widest hover:bg-red-600 transition-all">
                        End Session
                      </button>
                   </div>
                </div>

                {/* Participant Cards (Stacked Right) */}
                <div className="col-span-3 space-y-3 h-full overflow-y-auto pr-2 custom-scrollbar">
                   {participants.map((p, i) => (
                     <div key={i} className="relative aspect-square rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] group">
                        <Image src={p.img} alt={p.name} fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3">
                           <div className="text-[10px] font-bold text-white/90">{p.name}</div>
                           <div className="text-[7px] text-white/40 uppercase tracking-widest font-black">{p.role}</div>
                        </div>
                        <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10B981]" />
                     </div>
                   ))}
                </div>
              </div>

              {/* BOTTOM PANELS (TIMELINE & MAP) */}
              <div className="grid grid-cols-2 gap-px bg-white/5 border-t border-white/5">
                {/* 1. Timeline */}
                <div className="p-8 space-y-6">
                   <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                         <Clock className="w-4 h-4 text-white/20" />
                         <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Live Delivery Timeline</span>
                      </div>
                      <Maximize2 className="w-3.5 h-3.5 text-white/20" />
                   </div>
                   <div className="space-y-4">
                      {[
                        { t: "14:20", e: "Module Introduction", status: "Done" },
                        { t: "14:42", e: "Live Facilitation Active", status: "Active" },
                        { t: "15:10", e: "Breakout Session", status: "Next" }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between group">
                           <div className="flex items-center gap-4">
                              <span className="text-[10px] font-mono text-white/20">{item.t}</span>
                              <span className={cn("text-[11px] font-bold", item.status === "Active" ? "text-brand-gold" : "text-white/60")}>{item.e}</span>
                           </div>
                           <div className={cn("w-1.5 h-1.5 rounded-full", item.status === "Active" ? "bg-brand-gold shadow-[0_0_8px_#F5B82E]" : "bg-white/5")} />
                        </div>
                      ))}
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mt-4">
                         <motion.div animate={{ x: ["-100%", "0%"] }} transition={{ duration: 10, repeat: Infinity }} className="h-full w-1/2 bg-brand-gold/20" />
                      </div>
                   </div>
                </div>

                {/* 2. Map */}
                <div className="p-8 bg-white/[0.01] border-l border-white/5 space-y-6 relative overflow-hidden group">
                   <div className="flex justify-between items-center relative z-10">
                      <div className="flex items-center gap-2">
                         <Globe className="w-4 h-4 text-white/20" />
                         <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Coordination Map</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                         <span className="text-[8px] font-black text-blue-500">14 Nodes Connected</span>
                      </div>
                   </div>
                   
                   {/* World Map Mockup (SVG or Simple Visual) */}
                   <div className="h-32 w-full relative flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                      <Globe2 className="w-24 h-24 text-white/10 absolute" />
                      <svg className="w-full h-full" viewBox="0 0 400 200">
                         {[
                           { x: 100, y: 50 }, { x: 300, y: 80 }, { x: 250, y: 140 }, { x: 80, y: 150 }
                         ].map((node, i) => (
                           <g key={i}>
                              <circle cx={node.x} cy={node.y} r="2" fill="#F5B82E" className="animate-pulse" />
                              <circle cx={node.x} cy={node.y} r="8" fill="#F5B82E" opacity="0.1" />
                              {i > 0 && (
                                <motion.line 
                                  initial={{ pathLength: 0 }}
                                  animate={{ pathLength: 1 }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                  x1="100" y1="50" x2={node.x} y2={node.y} stroke="white" strokeWidth="0.5" strokeOpacity="0.1" 
                                />
                              )}
                           </g>
                         ))}
                      </svg>
                   </div>
                </div>
              </div>
            </motion.div>

            {/* BOTTOM METRICS */}
            <div className="grid grid-cols-4 gap-4">
               {[
                 { label: "Active Participants", val: "1,240+", icon: Users, color: "text-brand-gold" },
                 { label: "System Uptime", val: "99.99%", icon: ShieldCheck, color: "text-emerald-500" },
                 { label: "Average Sync", val: "0.8ms", icon: Zap, color: "text-blue-500" },
                 { label: "Countries Connected", val: "140+", icon: Globe2, color: "text-brand-gold" }
               ].map((m, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 0.8 + i * 0.1 }}
                   className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-xl group hover:border-white/20 transition-all"
                 >
                   <div className="flex items-center gap-3 mb-3">
                      <m.icon className={cn("w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity", m.color)} />
                      <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">{m.label}</span>
                   </div>
                   <div className="text-[22px] font-bold text-white/90 tracking-tighter">{m.val}</div>
                 </motion.div>
               ))}
            </div>
          </div>

          {/* 3. RIGHT SIDEBAR (INTELLIGENCE) */}
          <div className="lg:col-span-3 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              {/* CARD 1: Operational Intelligence */}
              <div className="p-6 rounded-3xl border border-white/10 bg-[#0B101B]/60 backdrop-blur-2xl space-y-6 group hover:border-brand-gold/20 transition-all">
                 <div className="flex justify-between items-center">
                    <h3 className="text-[14px] font-bold text-white/90 tracking-tight">Operational Intelligence</h3>
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                 </div>
                 
                 <div className="flex items-center gap-6">
                    <div className="relative w-24 h-24 flex items-center justify-center">
                       <svg className="w-full h-full -rotate-90">
                          <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.05)" strokeWidth="8" fill="none" />
                          <motion.circle 
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 0.94 }}
                            transition={{ duration: 2 }}
                            cx="48" cy="48" r="40" stroke="#F5B82E" strokeWidth="8" strokeDasharray="251.2" fill="none" strokeLinecap="round" 
                          />
                       </svg>
                       <div className="absolute flex flex-col items-center">
                          <span className="text-[18px] font-black text-white">94%</span>
                          <span className="text-[7px] text-white/30 uppercase tracking-widest font-black">Health</span>
                       </div>
                    </div>
                    <div className="flex-1 space-y-3">
                       {[
                         { l: "Engagement", v: "High" },
                         { l: "Attendance", v: "98.2%" },
                         { l: "Latency", v: "0.8ms" }
                       ].map((item, i) => (
                         <div key={i} className="flex justify-between">
                            <span className="text-[9px] text-white/30 uppercase tracking-widest">{item.l}</span>
                            <span className="text-[10px] font-bold text-white/80">{item.v}</span>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="p-3 rounded-xl bg-red-500/5 border border-red-500/10 flex items-center gap-3">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                    <span className="text-[9px] font-bold text-red-500/80">Risk detected in Breakout_04</span>
                 </div>
              </div>

              {/* CARD 2: AI Facilitator Assistant */}
              <div className="p-6 rounded-3xl border border-white/10 bg-[#0B101B]/60 backdrop-blur-2xl space-y-5">
                 <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-brand-gold" />
                    <h3 className="text-[12px] font-black uppercase tracking-widest text-brand-gold/60">Facilitator Assistant</h3>
                 </div>
                 <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 relative group">
                       <p className="text-[12px] text-white/70 leading-relaxed italic">
                         "Low participation detected in the current activity. Suggested action: Interactive Poll."
                       </p>
                       <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-brand-gold flex items-center justify-center text-[8px] font-black text-black">
                          !
                       </div>
                    </div>
                    <button className="w-full h-11 rounded-xl bg-brand-gold text-black font-black uppercase text-[10px] tracking-widest hover:bg-[#FFC84A] transition-all">
                       Launch Poll
                    </button>
                    <div className="flex items-center justify-between px-1">
                       <span className="text-[9px] text-white/20 uppercase tracking-widest">AI Confidence</span>
                       <span className="text-[10px] font-black text-emerald-500">98%</span>
                    </div>
                 </div>
              </div>

              {/* CARD 3: Decision Layer */}
              <div className="p-6 rounded-3xl border border-white/10 bg-[#0B101B]/60 backdrop-blur-2xl space-y-4">
                 <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-blue-500" />
                    <h3 className="text-[12px] font-black uppercase tracking-widest text-blue-500/60">Decision Layer</h3>
                 </div>
                 <div className="space-y-4">
                    <div>
                       <div className="text-[10px] text-white/40 mb-2">Outcome Prediction</div>
                       <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "82%" }}
                            transition={{ duration: 2 }}
                            className="h-full bg-blue-500" 
                          />
                       </div>
                    </div>
                    <div className="flex gap-2">
                       <button className="flex-1 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[9px] font-black uppercase tracking-widest text-blue-500 hover:bg-blue-500 hover:text-white transition-all">
                          Apply
                       </button>
                       <button className="flex-1 h-9 rounded-lg bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/30 hover:bg-white/10 transition-all">
                          Dismiss
                       </button>
                    </div>
                 </div>
              </div>

              {/* CARD 4: Live Outputs */}
              <div className="p-6 rounded-3xl border border-white/10 bg-[#0B101B]/60 backdrop-blur-2xl">
                 <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                       <FileCheck className="w-4 h-4 text-emerald-500" />
                       <h3 className="text-[12px] font-black uppercase tracking-widest text-white/30">Live Outputs</h3>
                    </div>
                    <span className="text-[8px] font-mono text-white/20">READY</span>
                 </div>
                 <div className="grid grid-cols-2 gap-2">
                    {['Reports', 'Attendance', 'Compliance', 'Summary'].map((out, i) => (
                      <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col gap-2 hover:bg-white/[0.05] transition-all cursor-pointer">
                         <FileText className="w-4 h-4 text-white/20" />
                         <span className="text-[9px] font-bold text-white/60">{out}</span>
                      </div>
                    ))}
                 </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
