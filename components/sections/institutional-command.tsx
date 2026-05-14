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
  { title: 'Operational Health Engine', text: 'Live monitoring of engagement, attendance quality, and delivery risk.' },
  { title: 'AI Facilitator Assistant', text: 'Real-time insights, smart summaries, and action recommendations.' },
  { title: 'Live Delivery Timeline', text: 'Track every moment, action, and interaction as it happens.' },
  { title: 'Coordination Map', text: 'Visualize connected teams, regions, and operational dependencies.' },
  { title: 'Decision Layer', text: 'AI-powered recommendations to keep programmes on track.' },
  { title: 'Structured Outputs', text: 'Automated reports, actions, attendance, and compliance logs.' }
];

const metrics = [
  ['1,240+', 'Active Participants'],
  ['99.995%', 'System Uptime'],
  ['0.8ms', 'Average Sync'],
  ['140+', 'Countries Connected']
];

export function InstitutionalCommandCenter() {
  return (
    <div className="relative min-h-screen bg-[#050816] text-white overflow-hidden py-12 px-6">
      {/* Premium Background System */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,184,46,0.08),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(0,150,255,0.08),transparent_40%)]" />
         <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "40px 40px" }} />
      </div>

      <main className="relative z-10 max-w-[1700px] mx-auto grid grid-cols-12 gap-6">
        
        {/* LEFT PANEL */}
        <section className="col-span-12 lg:col-span-3 flex flex-col justify-between space-y-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#f5b82e] tracking-[0.3em] uppercase text-[10px] font-black mb-8">
              Live Operation Command
            </p>

            <h1 className="text-5xl xl:text-6xl font-bold leading-[1.05] tracking-tight mb-8">
              Built for intelligent <span className="text-[#f5b82e]">programme delivery.</span>
            </h1>

            <p className="text-white/40 text-lg leading-relaxed max-w-md mb-12">
              OYEN GRID goes beyond meetings. Orchestrate live operations with real-time intelligence,
              AI guidance, and institutional control.
            </p>

            <div className="space-y-4">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 shadow-xl"
                >
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-[#f5b82e]/10 border border-[#f5b82e]/20 flex items-center justify-center text-[#f5b82e] group-hover:scale-110 transition-transform">
                    <Zap className="w-5 h-5" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-bold text-white text-[15px]">{item.title}</h3>
                    <p className="text-white/30 text-[12px] leading-relaxed mt-1 line-clamp-2">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="flex items-center gap-6 pb-6">
            <button className="bg-[#f5b82e] hover:bg-[#ffc93c] text-black px-8 py-4 rounded-2xl font-black uppercase text-[12px] tracking-widest transition-all shadow-xl shadow-brand-gold/10">
              Explore Live Command
            </button>
            <button className="text-white/40 hover:text-white transition-all font-black uppercase text-[11px] tracking-widest flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-all">
                 <PlayCircle className="w-4 h-4" />
              </div>
              See it in action
            </button>
          </div>
        </section>

        {/* CENTER PANEL */}
        <section className="col-span-12 lg:col-span-6 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[32px] border border-white/10 bg-[#0b1220]/60 backdrop-blur-3xl overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.8)]"
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                   <Monitor className="w-4.5 h-4.5 text-white/40" />
                </div>
                <h2 className="font-bold text-lg tracking-tight">Leadership Alignment Session</h2>
                <div className="flex items-center gap-2.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Live</span>
                </div>
              </div>

              <div className="flex items-center gap-6 text-[12px] font-black uppercase tracking-widest">
                <div className="flex items-center gap-2 text-white/30">
                   <Clock className="w-4 h-4" />
                   <span className="font-mono">01:24:58</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-500">
                   <Wifi className="w-4 h-4" />
                   <span>Excellent Connection</span>
                </div>
              </div>
            </div>

            {/* VIDEO SECTION */}
            <div className="grid grid-cols-12 gap-5 p-5">
              <div className="col-span-12 xl:col-span-9 relative rounded-[28px] overflow-hidden h-[580px] bg-black group/video shadow-2xl">
                {/* Speaking Border Animation */}
                <motion.div 
                   animate={{ opacity: [0.3, 0.6, 0.3] }}
                   transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute inset-0 border-[3px] border-[#f5b82e]/20 rounded-[28px] pointer-events-none z-10" 
                />

                <Image 
                   src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1400&auto=format&fit=crop" 
                   alt="Presenter" 
                   fill 
                   className="object-cover opacity-90 transition-transform duration-[30s] group-hover/video:scale-105" 
                />
                
                {/* Cinematic Glass Overlay & Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/40 z-20" />

                {/* HUD Top-Left: Speaker Info */}
                <div className="absolute top-6 left-6 p-4 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 flex items-center gap-4 shadow-2xl z-30">
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                     <Mic className="w-4.5 h-4.5 text-brand-gold" />
                  </div>
                  <div>
                    <div className="text-[9px] text-white/40 font-black uppercase tracking-[0.2em] mb-1">Speaking</div>
                    <div className="font-bold text-[13px] tracking-tight">Daniel Okafor</div>
                  </div>
                </div>

                {/* AI Intelligence Badge (Top-Right) */}
                <div className="absolute top-6 right-6 z-30">
                   <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#0b1220]/60 backdrop-blur-xl border border-brand-gold/20 shadow-2xl">
                      <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                      <div className="text-[10px] font-black text-white/80 uppercase tracking-widest">
                         AI Insight: <span className="text-brand-gold">Alignment 98%</span>
                      </div>
                   </div>
                </div>

                {/* REFINED CONTROL BAR */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3.5 p-3.5 rounded-[22px] bg-[#0C1018]/80 backdrop-blur-[40px] border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.9)] z-40 transition-all hover:bg-[#0C1018]/90">
                  <ControlBtn icon={Mic} label="Mute" active />
                  <ControlBtn icon={Video} label="Video" active />
                  <div className="w-px h-8 bg-white/10 mx-1" />
                  <ControlBtn icon={Monitor} label="Share" />
                  <ControlBtn icon={Users} label="People" count={48} />
                  <ControlBtn icon={MessageSquare} label="Chat" count={12} active />
                  <ControlBtn icon={Smile} label="Emoji" />
                  <div className="w-px h-8 bg-white/10 mx-1" />
                  <ControlBtn icon={MoreHorizontal} label="Options" />
                  <div className="w-px h-8 bg-white/10 mx-2" />
                  <button className="h-11 px-7 rounded-xl bg-red-500/10 text-red-500 text-[10px] font-black uppercase tracking-widest border border-red-500/20 hover:bg-red-500 hover:text-white transition-all shadow-xl">
                     End Sync
                  </button>
                </div>
              </div>

              {/* PARTICIPANTS */}
              <div className="col-span-12 xl:col-span-3 flex xl:flex-col gap-4 overflow-x-auto pb-4 xl:pb-0 z-30">
                {[
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop'
                ].map((img, index) => (
                  <div
                    key={index}
                    className="h-[134px] w-full min-w-[140px] rounded-[22px] overflow-hidden relative border border-white/5 group/p shadow-xl transition-all duration-500 hover:scale-[1.03]"
                  >
                    <Image src={img} alt="Participant" fill className="object-cover grayscale opacity-60 group-hover/p:grayscale-0 group-hover/p:opacity-100 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* LOWER GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* TIMELINE */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="rounded-[32px] border border-white/10 bg-[#0b1220]/60 p-8 backdrop-blur-3xl shadow-2xl"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                   <Clock className="w-5 h-5 text-brand-gold" />
                   <h3 className="text-xl font-bold tracking-tight">Live Delivery Timeline</h3>
                </div>
                <div className="flex items-center gap-2 px-2 py-0.5 rounded-md bg-red-500/10 border border-red-500/20">
                   <span className="text-[9px] font-black text-red-500 uppercase tracking-widest">Live</span>
                </div>
              </div>

              <div className="flex gap-2.5 mb-10">
                {[20, 20, 20, 20, 10, 10].map((w, i) => (
                  <div
                    key={i}
                    style={{ width: `${w}%` }}
                    className={cn(
                      "h-1.5 rounded-full",
                      i < 4 ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]' : 'bg-brand-gold shadow-[0_0_8px_rgba(245,184,46,0.3)]'
                    )}
                  />
                ))}
              </div>

              <div className="space-y-6">
                {[
                  { label: 'Breakout session started', time: '09:20' },
                  { label: 'AI insight generated', time: '09:21' },
                  { label: 'Action item created', time: '09:22' },
                  { label: 'Engagement drift detected', time: '09:23' }
                ].map((event, i) => (
                  <div key={i} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/40 group-hover:bg-brand-gold transition-all" />
                      <div>
                        <p className="font-bold text-white/80 group-hover:text-white transition-colors text-[14px]">{event.label}</p>
                        <p className="text-white/20 text-[11px] font-mono tracking-tighter mt-0.5">{event.time}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white/10 group-hover:text-brand-gold transition-all" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* MAP */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.3 }}
               className="rounded-[32px] border border-white/10 bg-[#0b1220]/60 p-8 backdrop-blur-3xl shadow-2xl relative overflow-hidden group/map"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                   <Globe className="w-5 h-5 text-brand-gold" />
                   <h3 className="text-xl font-bold tracking-tight">Coordination Map</h3>
                </div>
                <button className="text-[11px] font-black text-brand-gold uppercase tracking-widest hover:underline">View Full Map</button>
              </div>

              <div className="h-[280px] rounded-2xl border border-white/5 bg-black/40 relative overflow-hidden shadow-inner">
                <Image 
                   src="/operational-map.png" 
                   alt="Map" 
                   fill 
                   className="object-cover opacity-[0.15] grayscale group-hover/map:grayscale-0 group-hover/map:opacity-30 transition-all duration-1000" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="text-[11px] font-black text-white/20 uppercase tracking-[0.4em]">Global Sync Visualization</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map(([value, label], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-3xl border border-white/10 bg-[#0b1220]/60 p-6 backdrop-blur-3xl shadow-xl hover:border-brand-gold/30 transition-all duration-500 group"
              >
                <h4 className="text-3xl font-black mb-1 group-hover:text-brand-gold transition-colors">{value}</h4>
                <p className="text-white/30 text-[11px] font-black uppercase tracking-widest">{label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* RIGHT SIDEBAR: UPGRADED AI COMMAND INTELLIGENCE */}
        <section className="col-span-12 lg:col-span-3 space-y-6">
          {/* HEALTH INTELLIGENCE */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="rounded-[32px] border border-white/10 bg-[#0b1220]/80 p-8 backdrop-blur-3xl shadow-2xl relative overflow-hidden group/health"
          >
            {/* Subtle Pulse Background */}
            <div className="absolute top-0 right-0 p-6 opacity-[0.05] group-hover/health:opacity-[0.12] transition-opacity">
               <Activity className="w-20 h-20 text-brand-gold" />
            </div>

            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-brand-gold" />
                 </div>
                 <h3 className="text-xl font-bold tracking-tight">Command Intel</h3>
              </div>
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                 <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Active</span>
              </div>
            </div>

            <div className="flex items-center gap-8 relative z-10">
              <div className="relative h-28 w-28 shrink-0 flex items-center justify-center">
                {/* Animated Progress Ring */}
                <svg className="w-full h-full -rotate-90">
                   <circle cx="56" cy="56" r="48" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="8" />
                   <motion.circle 
                      cx="56" cy="56" r="48" fill="none" stroke="#f5b82e" strokeWidth="8" 
                      strokeDasharray="301" 
                      initial={{ strokeDashoffset: 301 }}
                      whileInView={{ strokeDashoffset: 24 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="drop-shadow-[0_0_12px_rgba(245,184,46,0.4)]" 
                   />
                </svg>
                {/* Secondary Pulse Ring */}
                <motion.div 
                   animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
                   transition={{ duration: 3, repeat: Infinity }}
                   className="absolute inset-0 border border-brand-gold/20 rounded-full" 
                />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                   <span className="text-[24px] font-black text-white leading-none tracking-tighter">92%</span>
                   <span className="text-[8px] font-black text-brand-gold uppercase tracking-[0.2em] mt-1.5">Optimal</span>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <HealthItem label="Engagement" val="Peak" color="text-emerald-500" glowing />
                <HealthItem label="Attendance" val="98.2%" glowing />
                <HealthItem label="Sync_Rate" val="94.8%" glowing />
              </div>
            </div>
          </motion.div>

          {/* AI FACILITATOR: FUTURISTIC REFINEMENT */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.1 }}
             className="rounded-[32px] border border-white/10 bg-[#0b1220]/80 p-8 backdrop-blur-3xl shadow-2xl relative overflow-hidden group/ai"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-brand-gold" />
                 </div>
                 <h3 className="text-xl font-bold tracking-tight">AI Facilitator</h3>
              </div>
              <div className="flex items-center gap-2">
                 <div className="flex gap-0.5">
                    {[1,2,3].map(i => <motion.div key={i} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }} className="w-1 h-1 rounded-full bg-brand-gold/40" />)}
                 </div>
                 <span className="text-white/20 text-[9px] font-mono tracking-widest">ANALYZING</span>
              </div>
            </div>

            <div className="rounded-2xl border border-brand-gold/20 bg-brand-gold/5 p-6 space-y-6 relative group-hover/ai:border-brand-gold/40 transition-colors">
              {/* Scanline Animation */}
              <motion.div 
                 animate={{ top: ['0%', '100%', '0%'] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-x-0 h-px bg-brand-gold/20 z-0 pointer-events-none" 
              />
              
              <div className="relative z-10">
                 <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-3.5 h-3.5 text-brand-gold" />
                    <span className="text-[10px] font-black text-brand-gold uppercase tracking-widest">Drift Detected</span>
                 </div>
                 <p className="font-bold leading-relaxed text-[14px] text-white/90 italic">
                   "Participation delta exceeding 18% in Cluster_04. Response latency increasing."
                 </p>
              </div>

              <div className="flex items-center justify-between gap-4 relative z-10">
                <button className="flex-1 bg-[#f5b82e] hover:bg-[#ffc93c] text-black h-11 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all shadow-[0_0_20px_rgba(245,184,46,0.2)] hover:shadow-[0_0_30px_rgba(245,184,46,0.4)]">
                  Launch Protocol
                </button>
                <div className="text-right">
                   <div className="text-emerald-500 text-[11px] font-black leading-none">94%</div>
                   <div className="text-white/20 text-[7px] font-black uppercase tracking-widest mt-1">Confidence</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* DECISION LAYER: REALTIME INTERACTIONS */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="rounded-[32px] border border-white/10 bg-[#0b1220]/80 p-8 backdrop-blur-3xl shadow-2xl group/decision"
          >
            <div className="flex items-center gap-3 mb-8">
               <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-brand-gold" />
               </div>
               <h3 className="text-xl font-bold tracking-tight">Decision Layer</h3>
            </div>

            <div className="rounded-2xl border border-white/5 p-6 bg-white/[0.02] space-y-6 hover:bg-white/[0.04] transition-all duration-500 group-hover/decision:border-white/10">
              <p className="font-bold leading-relaxed text-[14px] text-white/80">
                Extend synchronization sequence by 8m to ensure institutional alignment.
              </p>

              <div className="flex gap-3">
                <button className="flex-[1.5] bg-[#f5b82e] hover:bg-[#ffc93c] text-black h-11 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all shadow-lg active:scale-95">
                  Approve_Action
                </button>
                <button className="flex-1 border border-white/10 text-white/40 hover:text-white h-11 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all hover:bg-white/5">
                  Dismiss
                </button>
              </div>
            </div>
          </motion.div>

          {/* LIVE OUTPUTS: PULSE INDICATORS */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="rounded-[32px] border border-white/10 bg-[#0b1220]/80 p-8 backdrop-blur-3xl shadow-2xl"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-brand-gold" />
                 </div>
                 <h3 className="text-xl font-bold tracking-tight">Live Artifacts</h3>
              </div>
              <div className="flex items-center gap-2">
                 <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-brand-gold/40" 
                 />
                 <span className="text-white/20 text-[8px] font-black uppercase tracking-[0.3em]">ORCHESTRATING</span>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { label: 'Summary Protocol', icon: FileText },
                { label: 'Action Matrix', icon: Target },
                { label: 'Attendance Audit', icon: ShieldCheck },
                { label: 'Compliance Record', icon: Lock }
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.01] p-4 group/item hover:bg-white/[0.04] hover:border-brand-gold/20 transition-all cursor-pointer overflow-hidden relative"
                >
                  <div className="flex items-center gap-4 relative z-10">
                     <item.icon className="w-4 h-4 text-white/20 group-hover/item:text-brand-gold transition-colors" />
                     <span className="text-[13px] font-bold text-white/60 group-hover/item:text-white transition-colors">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2 relative z-10">
                     <span className="text-[8px] text-white/20 font-black uppercase tracking-widest opacity-0 group-hover/item:opacity-100 transition-opacity">Ready</span>
                     <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 opacity-20 group-hover/item:opacity-60 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  )
}

function ControlBtn({ icon: Icon, label, count, active = false }: { icon: any, label: string, count?: number, active?: boolean }) {
  return (
    <button className="flex flex-col items-center gap-1.5 group cursor-pointer relative">
       <div className={cn(
         "w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 relative",
         active ? "bg-brand-gold/10 text-brand-gold border border-brand-gold/20 shadow-lg" : "bg-white/5 text-white/40 border border-white/5 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/10"
       )}>
          <Icon className="w-4.5 h-4.5" />
          {count !== undefined && (
            <div className="absolute -top-1 -right-1 min-w-[16px] h-[16px] px-1 rounded-md bg-brand-gold text-black text-[9px] font-black flex items-center justify-center shadow-lg">
               {count}
            </div>
          )}
       </div>
       <span className="text-[8px] font-black text-white/20 group-hover:text-white/40 uppercase tracking-widest transition-colors">{label}</span>
       {active && <div className="absolute -inset-1 bg-brand-gold/5 blur-md rounded-xl -z-10" />}
    </button>
  );
}

function HealthItem({ label, val, color, glowing = false }: { label: string, val: string, color?: string, glowing?: boolean }) {
  return (
    <div className="flex items-center justify-between group">
       <span className="text-[10px] text-white/20 font-black uppercase tracking-[0.2em] group-hover:text-white/40 transition-colors">{label}</span>
       <div className="flex items-center gap-2">
          {glowing && <div className={cn("w-1 h-1 rounded-full animate-pulse", color ? color : "bg-brand-gold")} />}
          <span className={cn("text-[12px] font-bold tracking-tight", color ? color : "text-white/90")}>{val}</span>
       </div>
    </div>
  );
}
