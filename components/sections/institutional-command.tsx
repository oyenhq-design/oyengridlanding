"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Activity, Brain, Clock, Globe, Layers, FileCheck, 
  Mic, Video, Monitor, Users, Smile, MessageSquare, MoreHorizontal,
  ArrowUpRight, ShieldCheck, Zap, Globe2, ChevronRight, CheckCircle2,
  AlertCircle, BarChart3, TrendingUp, Search, Radio, Wifi, Shield,
  Lock, Target, Info, Terminal, Database, LineChart, Bell, Maximize2,
  PlayCircle, FileText, Settings, Share2, Power, Hand, Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  { title: 'Operational Health Engine', text: 'Live monitoring of engagement and risk.', icon: Activity },
  { title: 'AI Facilitator Assistant', text: 'Real-time insights and recommendations.', icon: Brain },
  { title: 'Live Delivery Timeline', text: 'Track every interaction as it happens.', icon: Clock },
  { title: 'Coordination Map', text: 'Visualize dependencies and sync nodes.', icon: Globe },
  { title: 'Decision Layer', text: 'AI-powered alignment protocols.', icon: Layers },
  { title: 'Structured Outputs', text: 'Automated reports and compliance logs.', icon: FileCheck }
];

const metrics = [
  ['1,240+', 'Participants'],
  ['99.995%', 'Uptime'],
  ['0.8ms', 'Sync Rate'],
  ['140+', 'Connected']
];

export function InstitutionalCommandCenter() {
  return (
    <div className="relative min-h-screen xl:h-screen bg-[#050816] text-white overflow-hidden py-8 px-4 lg:py-12 lg:px-8 xl:flex xl:items-center">
      
      {/* 1. PREMIUM BACKGROUND SYSTEM (COMPACT) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,184,46,0.06),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(0,150,255,0.05),transparent_40%)]" />
         <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.02 }}
            className="absolute inset-0" 
            style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "40px 40px" }} 
         />
         <FloatingOrb color="rgba(245,184,46,0.02)" delay={0} size={500} top="-10%" left="-5%" />
         <FloatingOrb color="rgba(0,150,255,0.015)" delay={2} size={700} top="40%" left="60%" />
      </div>

      <main className="relative z-10 max-w-[1800px] mx-auto w-full grid grid-cols-12 gap-4 lg:gap-5 xl:h-full xl:max-h-[920px]">
        
        {/* LEFT PANEL: 22% (Approx col-span-3) */}
        <section className="col-span-12 xl:col-span-3 flex flex-col justify-between space-y-6 h-full">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#f5b82e] tracking-[0.3em] uppercase text-[9px] font-black mb-6 flex items-center gap-2">
              <span className="w-6 h-px bg-brand-gold/20" />
              Institutional OS
            </p>

            <h1 className="text-3xl lg:text-4xl xl:text-[44px] font-bold leading-[1] tracking-tight mb-6">
              Built for intelligent <br /> <span className="text-[#f5b82e]">programme delivery.</span>
            </h1>

            <p className="text-white/20 text-sm lg:text-[15px] leading-relaxed max-w-sm mb-8">
              Orchestrate live operations with real-time intelligence and AI-powered governance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-2.5">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group flex gap-3 p-3 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] transition-all duration-300 shadow-lg"
                >
                  <div className="h-9 w-9 shrink-0 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:scale-105 transition-transform">
                    <item.icon className="w-4 h-4" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-bold text-white text-[13px] tracking-tight">{item.title}</h3>
                    <p className="text-white/20 text-[11px] leading-tight mt-0.5 line-clamp-1">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="flex items-center gap-4 py-4">
            <motion.button 
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
               className="bg-[#f5b82e] hover:bg-[#ffc93c] text-black px-6 py-3.5 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all shadow-xl"
            >
              Live Command
            </motion.button>
            <button className="text-white/20 hover:text-white transition-all font-black uppercase text-[10px] tracking-widest flex items-center gap-2 group">
              <PlayCircle className="w-4 h-4" />
              Watch Demo
            </button>
          </div>
        </section>

        {/* CENTER PANEL: 50% (Approx col-span-6) */}
        <section className="col-span-12 xl:col-span-6 space-y-4 flex flex-col h-full overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[24px] border border-white/10 bg-[#0b1220]/60 backdrop-blur-3xl overflow-hidden shadow-2xl flex flex-col flex-1 min-h-0"
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center border border-white/5">
                   <Monitor className="w-4 h-4 text-white/30" />
                </div>
                <h2 className="font-bold text-base tracking-tight">Leadership Alignment Session</h2>
                <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-red-500/10 border border-red-500/20">
                  <div className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[8px] font-black text-red-500 uppercase tracking-widest">Live Sync</span>
                </div>
              </div>

              <div className="flex items-center gap-5 text-[10px] font-black uppercase tracking-widest">
                <div className="flex items-center gap-2 text-white/20">
                   <Clock className="w-3.5 h-3.5" />
                   <span className="font-mono">01:24:58</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-500">
                   <Wifi className="w-3.5 h-3.5" />
                   <span>Secure</span>
                </div>
              </div>
            </div>

            {/* VIDEO SECTION: COMPACT SCALE */}
            <div className="grid grid-cols-12 gap-4 p-4 flex-1 min-h-0 overflow-hidden">
              <div className="col-span-12 lg:col-span-9 relative rounded-[20px] overflow-hidden bg-black group/video shadow-xl border border-white/5 h-full min-h-[360px]">
                <Image 
                   src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1400&auto=format&fit=crop" 
                   alt="Presenter" 
                   fill 
                   className="object-cover opacity-90 transition-transform duration-[30s]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />

                <div className="absolute top-4 left-4 p-3 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10 flex items-center gap-3 z-20">
                  <Mic className="w-3.5 h-3.5 text-brand-gold" />
                  <div className="font-bold text-[12px] tracking-tight">Daniel Okafor</div>
                </div>

                <div className="absolute top-4 right-4 z-20">
                   <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-xl border border-brand-gold/20">
                      <Sparkles className="w-3 h-3 text-brand-gold" />
                      <span className="text-[8px] font-black text-white/80 uppercase tracking-widest">AI Sync</span>
                   </div>
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 p-2.5 rounded-[20px] bg-[#0C1018]/80 backdrop-blur-3xl border border-white/10 z-30 shadow-2xl">
                  <ControlBtn icon={Mic} label="Mute" active />
                  <ControlBtn icon={Video} label="Video" active />
                  <div className="w-px h-6 bg-white/10 mx-1" />
                  <ControlBtn icon={Monitor} label="Share" />
                  <ControlBtn icon={Users} label="People" count={48} />
                  <ControlBtn icon={MessageSquare} label="Chat" count={12} active />
                  <div className="w-px h-6 bg-white/10 mx-1" />
                  <ControlBtn icon={MoreHorizontal} label="Menu" />
                  <div className="w-px h-6 bg-white/10 mx-2" />
                  <button className="h-9 px-5 rounded-xl bg-red-500/10 text-red-500 text-[9px] font-black uppercase tracking-widest border border-red-500/20 hover:bg-red-500 hover:text-white transition-all">
                     End
                  </button>
                </div>
              </div>

              {/* PARTICIPANTS: COMPACT SCALE */}
              <div className="col-span-12 lg:col-span-3 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto scrollbar-hide">
                {[
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop'
                ].map((img, index) => (
                  <div
                    key={index}
                    className="h-24 lg:h-[110px] w-full min-w-[100px] rounded-[18px] overflow-hidden relative border border-white/5 group shadow-lg"
                  >
                    <Image src={img} alt="Participant" fill className="object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-2 right-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* LOWER GRID: COMPACT SCALE */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-[24px] border border-white/10 bg-[#0b1220]/60 p-5 backdrop-blur-3xl shadow-xl h-[180px]">
              <div className="flex items-center justify-between mb-4">
                 <h3 className="text-[14px] font-bold tracking-tight flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-brand-gold" />
                    Timeline
                 </h3>
                 <span className="text-[8px] font-black text-red-500 uppercase tracking-widest bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">Live</span>
              </div>
              <div className="flex gap-1.5 mb-5">
                {[1,2,3,4,5,6].map(i => <div key={i} className={cn("h-1 flex-1 rounded-full", i < 5 ? "bg-emerald-500" : "bg-brand-gold")} />)}
              </div>
              <div className="space-y-2.5">
                {[ 'Protocol initialized', 'AI scan active', 'Outputs synced' ].map((e, i) => (
                  <div key={i} className="flex items-center justify-between group cursor-pointer">
                    <p className="text-[11px] font-bold text-white/60 group-hover:text-white transition-colors">{e}</p>
                    <span className="text-[9px] font-mono text-white/20">09:2{i}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-[#0b1220]/60 p-5 backdrop-blur-3xl shadow-xl h-[180px] overflow-hidden relative group/map">
               <h3 className="text-[14px] font-bold tracking-tight mb-4 flex items-center gap-2 relative z-10">
                  <Globe className="w-3.5 h-3.5 text-brand-gold" />
                  Map
               </h3>
               <div className="absolute inset-0 bg-black/40 z-0">
                  <Image src="/operational-map.png" alt="Map" fill className="object-cover opacity-[0.1] grayscale" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <span className="text-[8px] font-black text-white/10 uppercase tracking-[0.4em]">Nodes Active</span>
                  </div>
               </div>
            </div>
          </div>

          {/* STATS: COMPACT SCALE */}
          <div className="grid grid-cols-4 gap-4">
            {metrics.map(([value, label], i) => (
              <div key={i} className="rounded-[20px] border border-white/10 bg-[#0b1220]/60 p-4 backdrop-blur-3xl shadow-xl hover:border-brand-gold/30 transition-all">
                <h4 className="text-xl font-black mb-1 tracking-tighter">{value}</h4>
                <p className="text-white/20 text-[9px] font-black uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* RIGHT PANEL: 28% (Approx col-span-3) */}
        <section className="col-span-12 xl:col-span-3 space-y-4 h-full flex flex-col overflow-y-auto xl:overflow-visible">
          {/* HEALTH (COMPACT) */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="rounded-[24px] border border-white/10 bg-[#0b1220]/80 p-5 backdrop-blur-3xl shadow-2xl relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[14px] font-bold tracking-tight uppercase tracking-widest text-white/80">Command Intel</h3>
              <Activity className="w-3.5 h-3.5 text-brand-gold" />
            </div>
            <div className="flex items-center gap-6">
              <div className="relative h-20 w-20 shrink-0 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90">
                   <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="6" />
                   <motion.circle 
                      cx="40" cy="40" r="34" fill="none" stroke="#f5b82e" strokeWidth="6" 
                      strokeDasharray="213" 
                      initial={{ strokeDashoffset: 213 }}
                      whileInView={{ strokeDashoffset: 18 }}
                      transition={{ duration: 1.5 }}
                   />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                   <span className="text-[16px] font-black text-white leading-none">92%</span>
                </div>
              </div>
              <div className="flex-1 space-y-2.5">
                <HealthItem label="Engagement" val="Optimal" color="text-emerald-500" small />
                <HealthItem label="Attendance" val="98%" small />
                <HealthItem label="Latency" val="42ms" small />
              </div>
            </div>
          </motion.div>

          {/* AI ASSISTANT (COMPACT) */}
          <div className="rounded-[24px] border border-white/10 bg-[#0b1220]/80 p-5 backdrop-blur-3xl shadow-2xl flex-1 flex flex-col min-h-0">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[14px] font-bold tracking-tight uppercase tracking-widest text-white/80">AI Facilitator</h3>
              <Brain className="w-3.5 h-3.5 text-brand-gold" />
            </div>
            <div className="rounded-xl border border-brand-gold/10 bg-brand-gold/5 p-4 space-y-4 flex-1">
              <p className="text-[12px] font-bold leading-relaxed text-white/70 italic">
                "Participation delta detected in Cluster_04. Deployment of alignment poll recommended."
              </p>
              <div className="flex items-center justify-between gap-3">
                <button className="flex-1 bg-[#f5b82e] hover:bg-[#ffc93c] text-black h-9 rounded-lg font-black uppercase text-[9px] tracking-widest transition-all">
                  Approve
                </button>
                <div className="text-[11px] font-black text-emerald-500">94%</div>
              </div>
            </div>
          </div>

          {/* DECISION LAYER (COMPACT) */}
          <div className="rounded-[24px] border border-white/10 bg-[#0b1220]/80 p-5 backdrop-blur-3xl shadow-2xl">
             <h3 className="text-[14px] font-bold tracking-tight uppercase tracking-widest text-white/80 mb-4">Decision Matrix</h3>
             <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                   <p className="text-[12px] font-bold text-white/60 mb-3">Sync sequence extension requested (+8m).</p>
                   <div className="flex gap-2">
                      <button className="flex-1 bg-white/10 hover:bg-white/20 text-white h-8 rounded-lg font-black uppercase text-[8px] tracking-widest transition-all">Authorize</button>
                      <button className="flex-1 border border-white/10 text-white/30 h-8 rounded-lg font-black uppercase text-[8px] tracking-widest transition-all">Ignore</button>
                   </div>
                </div>
             </div>
          </div>

          {/* ARTIFACTS (COMPACT) */}
          <div className="rounded-[24px] border border-white/10 bg-[#0b1220]/80 p-5 backdrop-blur-3xl shadow-2xl">
            <h3 className="text-[14px] font-bold tracking-tight uppercase tracking-widest text-white/80 mb-4">Artifacts</h3>
            <div className="space-y-2">
              {[ 'Summary Protocol', 'Action Matrix', 'Audit Log' ].map((item, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.01] p-2.5 group hover:bg-white/[0.03] cursor-pointer">
                  <span className="text-[11px] font-bold text-white/40 group-hover:text-white transition-colors">{item}</span>
                  <CheckCircle2 className="w-3 h-3 text-emerald-500/40" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function FloatingOrb({ color, delay, size, top, left }: { color: string, delay: number, size: number, top: string, left: string }) {
  return (
    <motion.div
      animate={{ 
        x: [0, 30, -20, 0],
        y: [0, -30, 20, 0],
      }}
      transition={{ 
        duration: 15, 
        repeat: Infinity, 
        delay, 
        ease: "easeInOut" 
      }}
      className="absolute blur-[100px] rounded-full z-0 pointer-events-none opacity-[0.2]"
      style={{ backgroundColor: color, width: size, height: size, top, left }}
    />
  );
}

function ControlBtn({ icon: Icon, label, count, active = false }: { icon: any, label: string, count?: number, active?: boolean }) {
  return (
    <button className="flex flex-col items-center gap-1 group cursor-pointer relative">
       <div className={cn(
         "w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300",
         active ? "bg-brand-gold/20 text-brand-gold border border-brand-gold/30 shadow-lg" : "bg-white/5 text-white/30 border border-white/5 group-hover:bg-white/10 group-hover:text-white"
       )}>
          <Icon className="w-4 h-4" />
          {count !== undefined && (
            <div className="absolute -top-1 -right-1 min-w-[14px] h-[14px] px-1 rounded-md bg-brand-gold text-black text-[7px] font-black flex items-center justify-center">
               {count}
            </div>
          )}
       </div>
       <span className="text-[7px] font-black text-white/20 group-hover:text-white/40 uppercase tracking-widest">{label}</span>
    </button>
  );
}

function HealthItem({ label, val, color, small = false }: { label: string, val: string, color?: string, small?: boolean }) {
  return (
    <div className="flex items-center justify-between group">
       <span className="text-[9px] text-white/20 font-black uppercase tracking-widest group-hover:text-white/40 transition-colors">{label}</span>
       <span className={cn("font-bold tracking-tight", small ? "text-[11px]" : "text-[13px]", color ? color : "text-white/90")}>{val}</span>
    </div>
  );
}
