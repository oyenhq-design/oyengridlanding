"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { 
  Activity, Brain, Clock, Globe, Layers, FileCheck, 
  Mic, Video, Monitor, Users, Smile, MessageSquare, MoreHorizontal,
  ArrowUpRight, ShieldCheck, Zap, Globe2, ChevronRight, CheckCircle2,
  AlertCircle, BarChart3, TrendingUp, Search, Radio
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef } from "react";

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [2, -2]);

  return (
    <section ref={sectionRef} className="bg-[#050816] relative py-[120px] overflow-hidden perspective-1000">
      
      {/* 1. ULTRA-CINEMATIC BACKGROUND SYSTEM */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
          <Image 
            src="/institutional-atmosphere.png" 
            alt="Atmosphere" 
            fill 
            className="object-cover opacity-[0.22] blur-[3px]"
          />
        </motion.div>
        
        {/* Layered Lighting & Atmospheric Glows */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-transparent to-[#050816]" />
        
        {/* Apple-style Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-[radial-gradient(ellipse_at_top,rgba(245,185,66,0.12),transparent_50%)]" />
        
        {/* Cyan System Accents */}
        <div className="absolute top-1/4 -left-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(91,231,196,0.06),transparent_60%)] blur-[100px]" />
        <div className="absolute bottom-1/4 -right-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,130,246,0.06),transparent_60%)] blur-[100px]" />

        {/* Floating Data Particles (Simulated) */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: Math.random() * 1000 }}
              animate={{ 
                y: [Math.random() * 1000, Math.random() * 1000 - 500],
                opacity: [0, 0.5, 0]
              }}
              transition={{ 
                duration: 10 + Math.random() * 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute w-0.5 h-0.5 bg-brand-gold/40 rounded-full"
              style={{ left: `${Math.random() * 100}%` }}
            />
          ))}
        </div>

        {/* Scan Line Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-[0.03]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr_320px] gap-[40px] items-start">
          
          {/* LEFT PANEL: OPERATIONAL CONTROL */}
          <div className="space-y-12">
            <div>
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[11px] font-black text-brand-gold uppercase tracking-[0.4em] mb-5 block"
              >
                LIVE OPERATION COMMAND
              </motion.span>
              <h2 className="text-[42px] font-bold text-white leading-[0.92] tracking-[-0.05em] mb-8">
                Intelligent <br /> programme <span className="text-brand-gold italic">delivery.</span>
              </h2>
              <p className="text-[15px] text-white/40 leading-relaxed font-medium max-w-[280px]">
                Orchestrating institutional programme operations with Netflix-level precision and AI intelligence.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="h-[80px] px-6 py-5 rounded-[22px] bg-gradient-to-b from-[#101420]/96 to-[#0A0E18]/92 border border-white/5 backdrop-blur-[24px] flex items-center gap-5 group hover:border-brand-gold/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(245,185,66,0.05)] transition-all duration-700"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-gold/5 border border-brand-gold/10 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/20 group-hover:scale-105 transition-all duration-500">
                    <feature.icon className="w-5 h-5 text-brand-gold/60 group-hover:text-brand-gold transition-all" />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-white mb-0.5 group-hover:text-brand-gold transition-colors">{feature.title}</h3>
                    <p className="text-[10px] text-white/20 font-black uppercase tracking-widest">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-4 space-y-5">
              <button className="w-full h-16 rounded-[22px] bg-brand-gold text-black font-black text-[14px] uppercase tracking-[0.15em] flex items-center justify-center gap-3 hover:brightness-110 hover:shadow-[0_20px_50px_rgba(245,185,66,0.3)] transition-all active:scale-95">
                Initialize Command
                <ArrowUpRight className="w-5 h-5" />
              </button>
              <button className="w-full text-center text-white/30 text-[12px] font-black uppercase tracking-[0.2em] hover:text-white transition-colors flex items-center justify-center gap-2 group">
                Review Operational Protocol
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* CENTER PANEL: THE IMMERSIVE CENTERPIECE */}
          <motion.div 
            style={{ rotateX }}
            className="space-y-[40px] lg:scale-[1.05] z-20"
          >
            <div className="h-[820px] rounded-[40px] bg-[#0A0E18] border border-white/10 overflow-hidden flex flex-col shadow-[0_60px_150px_rgba(0,0,0,0.7),0_0_100px_rgba(245,185,66,0.08)] relative group">
              
              {/* Glass Reflection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.05] pointer-events-none z-50" />

              {/* TOP BAR: SYSTEM TELEMETRY */}
              <div className="h-16 border-b border-white/5 px-10 flex items-center justify-between bg-white/[0.04] backdrop-blur-3xl z-40">
                <div className="flex items-center gap-5">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_15px_#ef4444]" />
                  <span className="text-[14px] font-bold text-white tracking-tight">Institutional Global Delivery • LIVE OPS</span>
                  <div className="h-6 w-px bg-white/10 mx-2" />
                  <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-red-500/10 border border-red-500/20">
                    <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Command Center</span>
                  </div>
                </div>
                <div className="flex items-center gap-10">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-white/40" />
                    <span className="text-[13px] font-mono text-white/80 tracking-[0.2em]">01:24:58</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      {[1, 2, 3, 4, 5].map(b => (
                        <motion.div 
                          key={b} 
                          animate={{ height: [12, 16, 12] }} 
                          transition={{ duration: 1 + b * 0.2, repeat: Infinity }}
                          className={cn("w-1 bg-brand-gold rounded-full", b > 4 && "opacity-20")} 
                        />
                      ))}
                    </div>
                    <span className="text-[11px] font-black text-brand-gold uppercase tracking-[0.2em]">Sync Active</span>
                  </div>
                </div>
              </div>

              {/* MAIN INTERFACE: CINEMATIC ENVIRONMENT */}
              <div className="flex-1 flex overflow-hidden">
                <div className="flex-1 relative bg-black/70 p-6 flex flex-col">
                  <div className="flex-1 relative rounded-[32px] overflow-hidden border border-white/15 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] group/video">
                    <Image 
                      src="/institutional-leader-v2.png" 
                      alt="Session Presenter" 
                      fill 
                      className="object-cover transition-transform duration-[30s] group-hover/video:scale-110"
                    />
                    
                    {/* Immersive Lighting Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(245,185,66,0.15),transparent_40%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(91,231,196,0.08),transparent_40%)]" />
                    
                    {/* Participant Stack: Floating 3D Cards */}
                    <div className="absolute top-8 right-8 bottom-24 w-64 flex flex-col gap-4 z-20 overflow-hidden pointer-events-none">
                       {[1, 2, 3, 4].map(p => (
                         <motion.div 
                            key={p} 
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: p * 0.1 }}
                            className="h-28 rounded-3xl bg-black/60 backdrop-blur-2xl border border-white/10 p-4 flex flex-col justify-end overflow-hidden relative shadow-2xl"
                         >
                           <Image src="/institutional-participants.png" alt="Partner" fill className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/95 to-transparent" />
                           <div className="relative z-10">
                              <div className="text-[12px] font-bold text-white mb-1">Partner Node {p}</div>
                              <div className="flex items-center justify-between">
                                 <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                                    <span className="text-[9px] text-white/50 font-black uppercase tracking-widest">Live Sync</span>
                                 </div>
                                 <BarChart3 className="w-3 h-3 text-white/20" />
                              </div>
                           </div>
                         </motion.div>
                       ))}
                    </div>

                    {/* Command Controls: High-End Glass Bar */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 p-4 rounded-3xl bg-[#0C1018]/98 backdrop-blur-[40px] border border-white/20 shadow-[0_40px_80px_rgba(0,0,0,0.9),0_0_20px_rgba(255,255,255,0.05)] z-30">
                      <ControlBtn icon={Mic} active />
                      <ControlBtn icon={Video} active />
                      <ControlBtn icon={Monitor} />
                      <div className="w-px h-10 bg-white/10 mx-2" />
                      <ControlBtn icon={Users} />
                      <ControlBtn icon={Smile} />
                      <ControlBtn icon={MessageSquare} />
                      <div className="w-px h-10 bg-white/10 mx-2" />
                      <ControlBtn icon={MoreHorizontal} />
                      <button className="h-12 px-8 rounded-2xl bg-red-600/20 text-red-500 text-[12px] font-black uppercase tracking-[0.2em] border border-red-500/30 hover:bg-red-600 hover:text-white transition-all duration-500 active:scale-95 shadow-lg">Terminate</button>
                    </div>

                    {/* System HUD Overlay */}
                    <div className="absolute inset-0 pointer-events-none border-[20px] border-white/[0.01] rounded-[32px] box-border" />
                    <div className="absolute top-10 left-10 flex items-center gap-4 px-5 py-3 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10">
                       <div className="w-10 h-10 rounded-xl bg-brand-gold/20 flex items-center justify-center border border-brand-gold/30">
                          <Radio className="w-5 h-5 text-brand-gold animate-pulse" />
                       </div>
                       <div className="flex flex-col">
                          <span className="text-[13px] font-bold text-white tracking-tight leading-none">INSTITUTIONAL_OS_V4</span>
                          <span className="text-[9px] text-brand-gold font-black uppercase tracking-[0.2em] mt-1.5 flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-brand-gold" />
                            Secure Environment
                          </span>
                       </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM TELEMETRY PANELS */}
              <div className="h-[260px] border-t border-white/10 p-6 grid grid-cols-2 gap-6 bg-white/[0.02] backdrop-blur-[50px]">
                <div className="rounded-[32px] bg-[#080B14]/90 border border-white/5 p-6 flex flex-col shadow-[inset_0_0_40px_rgba(0,0,0,0.4)] relative overflow-hidden group/timeline">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/[0.02] to-transparent opacity-0 group-hover/timeline:opacity-100 transition-opacity duration-1000" />
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20">
                        <Clock className="w-5 h-5 text-brand-gold" />
                      </div>
                      <span className="text-[12px] font-black text-white uppercase tracking-[0.3em]">Operational Flow</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20">
                       <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                       <span className="text-[10px] font-mono text-brand-gold font-bold">NODE_SYNC: 100%</span>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-4 overflow-hidden relative z-10">
                    {[
                      { time: "12:00", event: "Alignment Protocol", status: "complete", desc: "Global cluster synchronization established" },
                      { time: "12:20", event: "Strategic Synthesis", status: "active", desc: "AI-facilitated insight generation in progress..." },
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-5 group/step">
                        <div className="text-[11px] font-mono text-white/20 w-12">{step.time}</div>
                        <div className="relative flex flex-col items-center">
                           <div className={cn(
                             "w-2.5 h-2.5 rounded-full z-10 transition-all duration-700",
                             step.status === "complete" ? "bg-brand-gold" : "bg-brand-gold shadow-[0_0_15px_#F5B942]"
                           )} />
                           {i === 0 && <div className="absolute top-2.5 w-0.5 h-10 bg-brand-gold/20" />}
                        </div>
                        <div className="flex-1">
                          <div className={cn(
                            "text-[14px] font-bold group-hover/step:text-brand-gold transition-colors",
                            step.status === "pending" ? "text-white/20" : "text-white/90"
                          )}>{step.event}</div>
                          <div className="text-[10px] text-white/30 font-medium mt-1">{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[32px] bg-[#080B14]/90 border border-white/5 relative overflow-hidden group/map shadow-[inset_0_0_40px_rgba(0,0,0,0.4)]">
                  <Image src="/operational-map.png" alt="Global Sync Map" fill className="object-cover opacity-50 transition-transform duration-[40s] group-hover/map:scale-125" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E18] via-transparent to-[#0A0E18]/60" />
                  <div className="absolute top-6 left-8 flex items-center gap-3">
                    <Globe className="w-5 h-5 text-brand-gold" />
                    <span className="text-[12px] font-black text-white uppercase tracking-[0.3em]">Infrastructure Map</span>
                  </div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
                     <div className="flex items-center justify-between mb-3">
                        <div className="flex -space-x-3">
                           {[1, 2, 3, 4, 5, 6].map(i => (
                             <motion.div 
                               key={i} 
                               animate={{ scale: [1, 1.1, 1] }} 
                               transition={{ duration: 2 + i * 0.5, repeat: Infinity }}
                               className="w-8 h-8 rounded-full border-2 border-[#050816] bg-brand-gold/30 backdrop-blur-md shadow-xl" 
                             />
                           ))}
                        </div>
                        <div className="flex flex-col items-end">
                           <div className="text-[11px] font-mono text-brand-gold font-bold">UPLINK_STABLE</div>
                           <div className="text-[9px] font-mono text-white/30 tracking-widest mt-1">LATENCY_VAR: 0.002ms</div>
                        </div>
                     </div>
                     <div className="h-1.5 bg-white/5 rounded-full overflow-hidden shadow-inner">
                        <motion.div 
                           animate={{ x: [-400, 400] }}
                           transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                           className="w-1/3 h-full bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-60" 
                        />
                     </div>
                  </div>
                </div>
              </div>
            </div>

            {/* METRICS ROW: ELITE STATUS */}
            <div className="grid grid-cols-4 gap-8">
              {metrics.map((m, i) => (
                <div key={i} className="h-[130px] rounded-[30px] bg-[#0C1018]/96 border border-white/5 p-7 flex flex-col justify-between group hover:border-brand-gold/40 hover:shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(245,185,66,0.05)] transition-all duration-700 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent opacity-40" />
                  <div className="text-[10px] font-black text-brand-gold/60 uppercase tracking-[0.3em] mb-1">{m.sub}</div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-[32px] font-bold text-white tracking-tighter leading-none mb-1 group-hover:text-brand-gold transition-colors group-hover:scale-105 origin-left duration-500">{m.val}</div>
                      <div className="text-[11px] font-black text-white/20 uppercase tracking-[0.2em]">{m.label}</div>
                    </div>
                    <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-brand-gold/30 group-hover:bg-brand-gold/10 transition-all duration-500">
                      <m.icon className="w-5 h-5 text-white/20 group-hover:text-brand-gold transition-all" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDEBAR: INTELLIGENCE & HEALTH */}
          <div className="space-y-[40px] pt-8">
            {/* CARD 1: Operational Health */}
            <div className="p-8 rounded-[32px] bg-gradient-to-b from-[#101420]/96 to-[#0A0E18]/92 border border-white/10 backdrop-blur-[32px] space-y-8 shadow-[0_40px_80px_rgba(0,0,0,0.6)] group/health relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/[0.02] to-transparent opacity-0 group-hover/health:opacity-100 transition-opacity duration-1000" />
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-brand-gold" />
                  <span className="text-[12px] font-black text-white uppercase tracking-[0.4em]">System Health</span>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                   <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Optimal</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-8 relative z-10">
                <div className="flex items-center gap-10">
                   <div className="relative w-28 h-28 flex items-center justify-center">
                     <svg className="w-full h-full -rotate-90">
                       <circle cx="56" cy="56" r="50" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="10" />
                       <motion.circle 
                          cx="56" cy="56" r="50" fill="none" stroke="#F5B942" strokeWidth="10" 
                          strokeDasharray="314" 
                          initial={{ strokeDashoffset: 314 }}
                          whileInView={{ strokeDashoffset: 50 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="shadow-[0_0_20px_#F5B942]" 
                       />
                     </svg>
                     <div className="absolute inset-0 flex flex-col items-center justify-center">
                       <span className="text-[24px] font-bold text-white tracking-tighter">94%</span>
                       <span className="text-[9px] text-brand-gold font-black uppercase tracking-widest mt-1">Status</span>
                     </div>
                   </div>
                   <div className="flex-1 space-y-4">
                     <HealthStat label="Engagement" val="Excellent" color="emerald" />
                     <HealthStat label="Attendance" val="98.4%" />
                     <HealthStat label="Network" val="Verified" color="emerald" />
                   </div>
                </div>
              </div>
            </div>

            {/* CARD 2: AI Facilitator Assistant */}
            <div className="p-8 rounded-[32px] bg-gradient-to-b from-[#101420]/96 to-[#0A0E18]/92 border border-white/10 backdrop-blur-[32px] space-y-6 shadow-[0_40px_80px_rgba(0,0,0,0.6)] group/ai relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-brand-gold" />
                  <span className="text-[12px] font-black text-white uppercase tracking-[0.4em]">AI Synthesis</span>
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_10px_#F5B942] animate-ping" />
                </div>
              </div>
              
              <div className="p-5 rounded-3xl bg-brand-gold/5 border border-brand-gold/10 relative overflow-hidden shadow-inner">
                <div className="text-[13px] text-white/90 leading-[1.6] font-medium italic relative z-10">
                  "Institutional engagement optimization required in session cluster B. Initializing breakout protocols."
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/0 via-brand-gold/[0.05] to-brand-gold/0 animate-shimmer" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-[12px] font-bold">
                  <span className="text-white/30 uppercase tracking-widest">Confidence</span>
                  <span className="text-brand-gold font-mono">98.2%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden shadow-inner">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "98.2%" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-brand-gold shadow-[0_0_15px_#F5B942]" 
                  />
                </div>
              </div>
              <button className="w-full h-14 rounded-2xl bg-white/[0.03] border border-white/10 text-[12px] font-black uppercase tracking-[0.2em] text-white hover:bg-brand-gold hover:text-black hover:border-brand-gold transition-all duration-500 shadow-xl group">
                Initialize Action
              </button>
            </div>

            {/* CARD 3: Decision Layer */}
            <div className="p-8 rounded-[32px] bg-gradient-to-b from-[#101420]/96 to-[#0A0E18]/92 border border-white/10 backdrop-blur-[32px] space-y-6 shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-3">
                <Layers className="w-5 h-5 text-brand-gold" />
                <span className="text-[12px] font-black text-white uppercase tracking-[0.4em]">Decision Matrix</span>
              </div>
              <div className="space-y-5">
                <div className="p-5 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-gold/30 transition-all duration-700 group/decision shadow-inner">
                  <div className="text-[11px] text-white/30 font-black uppercase tracking-[0.2em] mb-2">System Re-route</div>
                  <div className="text-[16px] font-bold text-white mb-5 tracking-tight">Sync Cluster 04 Priority</div>
                  <div className="flex gap-3">
                    <button className="flex-1 h-11 rounded-xl bg-brand-gold text-black text-[11px] font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">Approve</button>
                    <button className="flex-1 h-11 rounded-xl bg-white/5 text-white/40 text-[11px] font-black uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all">Reject</button>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 4: Live Records */}
            <div className="p-8 rounded-[32px] bg-gradient-to-b from-[#101420]/96 to-[#0A0E18]/92 border border-white/10 backdrop-blur-[32px] space-y-6 shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-3">
                <FileCheck className="w-5 h-5 text-brand-gold" />
                <span className="text-[12px] font-black text-white uppercase tracking-[0.4em]">System Logs</span>
              </div>
              <div className="space-y-3">
                <OutputItem label="Operational Audit" time="2m ago" />
                <OutputItem label="Network Sync Log" time="5m ago" />
                <OutputItem label="Compliance Check" time="12m ago" />
              </div>
              <button className="w-full text-center text-brand-gold/50 text-[11px] font-black uppercase tracking-[0.2em] hover:text-brand-gold transition-colors pt-4 flex items-center justify-center gap-2 group">
                View Repository
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1500px;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite linear;
        }
        .animate-spin-slow {
          animation: spin 12s infinite linear;
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
      "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 relative group/btn overflow-hidden",
      active ? "bg-white/15 text-white border border-white/20 shadow-lg" : "bg-transparent text-white/30 hover:bg-white/10 hover:text-white"
    )}>
      <Icon className="w-6 h-6 z-10" />
      {active && <div className="absolute inset-0 bg-brand-gold/10 blur-xl" />}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
    </button>
  );
}

function HealthStat({ label, val, color = "white" }: { label: string, val: string, color?: string }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-white/[0.05] group/stat">
      <span className="text-[11px] text-white/30 font-black uppercase tracking-[0.2em] group-hover/stat:text-white/50 transition-colors">{label}</span>
      <span className={cn(
        "text-[12px] font-bold tracking-tight",
        color === "emerald" ? "text-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.2)]" : "text-white"
      )}>{val}</span>
    </div>
  );
}

function OutputItem({ label, time }: { label: string, time: string }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-gold/40 hover:bg-white/[0.06] transition-all duration-500 group shadow-inner">
      <div className="flex items-center gap-4">
        <div className="w-2.5 h-2.5 rounded-full bg-brand-gold/40 shadow-[0_0_12px_rgba(245,185,66,0.3)] group-hover:bg-brand-gold transition-all duration-500" />
        <span className="text-[12px] font-bold text-white/80 group-hover:text-white transition-colors">{label}</span>
      </div>
      <span className="text-[11px] text-white/20 font-mono tracking-tighter">{time}</span>
    </div>
  );
}
