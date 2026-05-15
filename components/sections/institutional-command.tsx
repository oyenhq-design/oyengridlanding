"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Activity, Brain, Clock, Globe, Layers, FileCheck, 
  Mic, Video, Monitor, Users, Smile, MessageSquare, MoreHorizontal,
  ArrowUpRight, ShieldCheck, Zap, Globe2, ChevronRight, CheckCircle2,
  AlertCircle, BarChart3, TrendingUp, Search, Radio, Wifi, Shield,
  Lock, Target, Info, Terminal, Database, LineChart, Bell, Maximize2,
  PlayCircle, FileText, Settings, Share2, Power, Hand, Sparkles, Workflow, ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

export function InstitutionalCommandCenter() {
  const capabilities = [
    { title: "Programme Governance", desc: "Institutional control and oversight for all delivery.", icon: Database },
    { title: "Participant Control", desc: "Real-time engagement and cohort tracking.", icon: Users },
    { title: "Delivery Coordination", desc: "Orchestrate live sessions and resources.", icon: Workflow }
  ];

  const metrics = [
    { label: 'Active Participants', val: '1,240+', icon: Users, sub: "Real-time synchronization" },
    { label: 'System Uptime', val: '99.995%', icon: ShieldCheck, sub: "Institutional continuity" },
    { label: 'Average Sync', val: '0.8ms', icon: Zap, sub: "Latency optimized" },
    { label: 'Countries Connected', val: '140+', icon: Globe2, sub: "Global delivery nodes" }
  ];

  return (
    <section className="relative bg-[#050816] text-white py-24 overflow-hidden">
      
      {/* PREMIUM BACKGROUND SYSTEM */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,185,66,0.05),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.03),transparent_40%)]" />
         <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      </div>

      <div className="container-custom relative z-10">
        
        {/* TOP LAYOUT: 40/60 Split */}
        <div className="grid lg:grid-cols-12 gap-16 items-center mb-24">
          
          {/* LEFT NARRATIVE (40%) */}
          <div className="lg:col-span-5 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-8">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_#f5b82e]" />
                 <p className="text-[#f5b82e] tracking-[0.35em] uppercase text-[10px] font-black">
                   Live Operation Command
                 </p>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold leading-[0.95] tracking-tighter mb-8">
                Built for intelligent <br /> 
                <span className="text-[#f5b82e] italic font-serif">programme delivery.</span>
              </h2>

              <p className="text-[15px] text-white/40 mb-12 leading-relaxed font-medium max-w-md">
                OYEN GRID provides the orchestration layer for complex institutional delivery, unifying every module, cohort and participant into one live operational intelligence center.
              </p>

              {/* 3 Key Capabilities */}
              <div className="space-y-6 mb-12">
                {capabilities.map((cap, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-brand-gold/40 transition-all duration-500">
                      <cap.icon className="w-5 h-5 text-white/40 group-hover:text-brand-gold transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-white/90 group-hover:text-white transition-colors">{cap.title}</h4>
                      <p className="text-[12px] text-white/20 mt-1">{cap.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <button className="btn-institutional-primary px-10 h-14">
                  Initialize Infrastructure
                </button>
                <button className="btn-institutional-secondary group px-10 h-14">
                  Consult Solutions <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* RIGHT OPERATIONAL INTERFACE (60%) */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[16/10] rounded-[32px] border border-white/10 bg-[#0b1220]/60 backdrop-blur-3xl overflow-hidden shadow-[0_80px_160px_rgba(0,0,0,0.8)]"
            >
              {/* Interface Header */}
              <div className="h-14 px-8 border-b border-white/5 bg-white/[0.02] flex items-center justify-between relative z-20">
                <div className="flex items-center gap-4">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>
                  <div className="h-6 w-px bg-white/5 mx-2" />
                  <div className="flex items-center gap-2">
                    <Monitor className="w-3.5 h-3.5 text-brand-gold/60" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Core Operations Center</span>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                   <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500/80">Network Active</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-white/20" />
                      <span className="text-[9px] font-mono text-white/40">14:22:08 UTC</span>
                   </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="absolute inset-0 pt-14 grid grid-cols-12">
                
                {/* Left: Session View (Main) */}
                <div className="col-span-8 p-6 relative overflow-hidden">
                   <div className="relative h-full rounded-2xl overflow-hidden bg-black group/video">
                      <Image 
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1400&auto=format&fit=crop" 
                        alt="Session" 
                        fill 
                        className="object-cover opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                      
                      {/* Speaker HUD */}
                      <div className="absolute top-6 left-6 flex items-center gap-4 p-3 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10">
                        <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center">
                           <Mic className="w-4 h-4 text-brand-gold" />
                        </div>
                        <div>
                          <div className="text-[8px] font-black text-white/40 uppercase tracking-widest">Presenter</div>
                          <div className="text-[13px] font-bold text-white">Daniel Okafor</div>
                        </div>
                      </div>

                      {/* AI Intelligence Overlay */}
                      <div className="absolute bottom-6 right-6 w-56 p-4 rounded-xl bg-black/60 backdrop-blur-2xl border border-brand-gold/20 shadow-2xl">
                         <div className="flex items-center gap-2 mb-3">
                            <Sparkles className="w-3 h-3 text-brand-gold" />
                            <span className="text-[9px] font-black text-brand-gold uppercase tracking-widest">AI Intelligence</span>
                         </div>
                         <div className="space-y-2">
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                               <motion.div animate={{ width: ["20%", "60%", "45%"] }} transition={{ duration: 4, repeat: Infinity }} className="h-full bg-brand-gold" />
                            </div>
                            <p className="text-[10px] text-white/60 leading-snug">Engagement drift detected in breakout region 04. Recommendation: Active poll.</p>
                         </div>
                      </div>

                      {/* Control HUD (Compact) */}
                      <div className="absolute bottom-6 left-6 flex items-center gap-2 p-2 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10">
                         {[Mic, Video, Monitor, MoreHorizontal].map((Icon, i) => (
                           <div key={i} className="w-9 h-9 rounded-xl hover:bg-white/10 flex items-center justify-center transition-all cursor-pointer">
                              <Icon className="w-4 h-4 text-white/60" />
                           </div>
                         ))}
                      </div>
                   </div>
                </div>

                {/* Right: Operational Sidebar */}
                <div className="col-span-4 border-l border-white/5 bg-white/[0.01] p-5 space-y-6 flex flex-col">
                   
                   {/* Participants */}
                   <div>
                      <div className="flex items-center justify-between mb-4">
                         <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Participants</span>
                         <span className="text-[10px] font-bold text-brand-gold">1,242 Active</span>
                      </div>
                      <div className="space-y-2">
                         {[1, 2, 3].map((i) => (
                           <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5">
                              <div className="flex items-center gap-3">
                                 <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10" />
                                 <div className="w-20 h-2 bg-white/5 rounded-full" />
                              </div>
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
                           </div>
                         ))}
                      </div>
                   </div>

                   {/* Coordination Status */}
                   <div className="flex-1 bg-black/20 rounded-xl border border-white/5 p-4 flex flex-col">
                      <div className="flex items-center gap-2 mb-4">
                         <Workflow className="w-3.5 h-3.5 text-white/40" />
                         <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Live Coordination</span>
                      </div>
                      <div className="space-y-4 flex-1">
                         {[
                           { t: "Global Sync", p: "80%" },
                           { t: "Node Latency", p: "12%" }
                         ].map((item, i) => (
                           <div key={i}>
                              <div className="flex justify-between mb-1.5">
                                 <span className="text-[9px] text-white/40">{item.t}</span>
                                 <span className="text-[9px] text-brand-gold">{item.p}</span>
                              </div>
                              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                 <div className="h-full bg-brand-gold/60" style={{ width: item.p }} />
                              </div>
                           </div>
                         ))}
                      </div>
                      <div className="mt-auto pt-4 border-t border-white/5">
                         <div className="flex items-center gap-2">
                            <Activity className="w-3 h-3 text-emerald-500" />
                            <span className="text-[9px] font-bold text-white/60">Operational Integrity: NOMINAL</span>
                         </div>
                      </div>
                   </div>

                </div>

              </div>
            </motion.div>
          </div>

        </div>

        {/* BOTTOM: Integrated Metrics Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
        >
          {metrics.map((m, i) => (
            <div key={i} className="bg-[#050816]/80 backdrop-blur-xl p-8 group hover:bg-white/[0.02] transition-all duration-700">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:border-brand-gold/20 transition-all">
                     <m.icon className="w-4.5 h-4.5 text-white/20 group-hover:text-brand-gold transition-colors" />
                  </div>
                  <div className="text-[9px] font-black text-white/30 uppercase tracking-[0.25em]">{m.label}</div>
               </div>
               <div className="text-4xl font-bold tracking-tighter text-white mb-2">{m.val}</div>
               <div className="text-[10px] text-white/10 font-medium">{m.sub}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
