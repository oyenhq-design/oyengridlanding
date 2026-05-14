"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Activity, Brain, Clock, Globe, Layers, FileCheck, 
  Mic, Video, Monitor, Users, Smile, MessageSquare, MoreHorizontal,
  ArrowUpRight, ShieldCheck, Zap, Globe2, ChevronRight, CheckCircle2,
  AlertCircle, BarChart3, TrendingUp, Search, Radio, Wifi, Shield,
  Lock, Target, Info, Terminal, Database, LineChart, Bell, Maximize2,
  PlayCircle, FileText, Settings, Share2, Power, Hand
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
        
        {/* LEFT PANEL (col-span-3) */}
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

        {/* CENTER PANEL (col-span-6) */}
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
                <Image 
                   src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1400&auto=format&fit=crop" 
                   alt="Presenter" 
                   fill 
                   className="object-cover opacity-90 transition-transform duration-[30s] group-hover/video:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

                <div className="absolute top-6 left-6 p-4 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 flex items-center gap-4 shadow-2xl">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                     <Users className="w-4.5 h-4.5 text-white/40" />
                  </div>
                  <div>
                    <div className="text-[9px] text-white/20 font-black uppercase tracking-[0.2em] mb-1">Speaking</div>
                    <div className="font-bold text-[13px]">Daniel Okafor</div>
                  </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 p-4 rounded-[22px] bg-[#0C1018]/95 backdrop-blur-[40px] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
                  {[
                    { icon: Mic, label: 'Mute', active: true },
                    { icon: Video, label: 'Video', active: true },
                    { icon: Monitor, label: 'Share' },
                    { icon: Users, label: 'Participants' },
                    { icon: MessageSquare, label: 'Chat' },
                    { icon: Smile, label: 'Reactions' }
                  ].map((item) => (
                    <button
                      key={item.label}
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group/btn",
                        item.active ? "bg-white/10 text-white border border-white/10" : "bg-transparent text-white/30 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      <item.icon className="w-5 h-5" />
                    </button>
                  ))}
                  <div className="w-px h-8 bg-white/10 mx-2" />
                  <button className="h-12 px-8 rounded-xl bg-red-600/10 text-red-500 text-[11px] font-black uppercase tracking-widest border border-red-500/20 hover:bg-red-600 hover:text-white transition-all shadow-xl">
                     End Session
                  </button>
                </div>
              </div>

              {/* PARTICIPANTS */}
              <div className="col-span-12 xl:col-span-3 flex xl:flex-col gap-4 overflow-x-auto pb-4 xl:pb-0">
                {[
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop'
                ].map((img, index) => (
                  <div
                    key={index}
                    className="h-[134px] w-full min-w-[140px] rounded-[22px] overflow-hidden relative border border-white/5 group/p shadow-xl"
                  >
                    <Image src={img} alt="Participant" fill className="object-cover grayscale opacity-60 group-hover/p:grayscale-0 group-hover/p:opacity-100 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2.5 right-2.5">
                       <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    </div>
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

        {/* RIGHT SIDEBAR (col-span-3) */}
        <section className="col-span-12 lg:col-span-3 space-y-6">
          {/* HEALTH */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="rounded-[32px] border border-white/10 bg-[#0b1220]/60 p-8 backdrop-blur-3xl shadow-2xl"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                 <Activity className="w-5 h-5 text-brand-gold" />
                 <h3 className="text-xl font-bold tracking-tight">Operational Intelligence</h3>
              </div>
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
            </div>

            <div className="flex items-center gap-8">
              <div className="relative h-28 w-28 shrink-0 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90">
                   <circle cx="56" cy="56" r="48" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="8" />
                   <motion.circle 
                      cx="56" cy="56" r="48" fill="none" stroke="#f5b82e" strokeWidth="8" 
                      strokeDasharray="301" 
                      initial={{ strokeDashoffset: 301 }}
                      whileInView={{ strokeDashoffset: 24 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="shadow-[0_0_15px_#f5b82e]" 
                   />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                   <span className="text-[22px] font-black text-white leading-none">92%</span>
                   <span className="text-[8px] font-black text-brand-gold uppercase tracking-widest mt-1">Excellent</span>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <HealthItem label="Engagement" val="High" color="text-emerald-500" />
                <HealthItem label="Attendance" val="98%" />
                <HealthItem label="Response" val="94%" />
              </div>
            </div>
          </motion.div>

          {/* AI FACILITATOR */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.1 }}
             className="rounded-[32px] border border-white/10 bg-[#0b1220]/60 p-8 backdrop-blur-3xl shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                 <Brain className="w-5 h-5 text-brand-gold" />
                 <h3 className="text-xl font-bold tracking-tight">AI Assistant</h3>
              </div>
              <span className="text-white/20 text-[10px] font-mono tracking-widest">09:42 AM</span>
            </div>

            <div className="rounded-2xl border border-brand-gold/20 bg-brand-gold/5 p-6 space-y-6">
              <p className="font-bold leading-relaxed text-[14px] text-white/80 italic">
                "12 participants have not interacted for 18 minutes. Engagement drift detected."
              </p>

              <div className="flex items-center justify-between gap-4">
                <button className="flex-1 bg-[#f5b82e] hover:bg-[#ffc93c] text-black h-11 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all shadow-lg shadow-brand-gold/10">
                  Launch Poll
                </button>
                <div className="text-emerald-500 text-[9px] font-black uppercase tracking-[0.2em] text-right">
                   94%<br/>Confidence
                </div>
              </div>
            </div>
          </motion.div>

          {/* DECISION LAYER */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="rounded-[32px] border border-white/10 bg-[#0b1220]/60 p-8 backdrop-blur-3xl shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
               <Layers className="w-5 h-5 text-brand-gold" />
               <h3 className="text-xl font-bold tracking-tight">Decision Layer</h3>
            </div>

            <div className="rounded-2xl border border-white/5 p-6 bg-white/[0.02] space-y-6">
              <p className="font-bold leading-relaxed text-[14px] text-white/80">
                Extend breakout discussion by 8 minutes for deeper alignment.
              </p>

              <div className="flex gap-3">
                <button className="flex-1 bg-[#f5b82e] hover:bg-[#ffc93c] text-black h-11 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all">
                  Apply
                </button>
                <button className="flex-1 border border-white/10 text-white/40 hover:text-white h-11 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all">
                  Dismiss
                </button>
              </div>
            </div>
          </motion.div>

          {/* OUTPUTS */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="rounded-[32px] border border-white/10 bg-[#0b1220]/60 p-8 backdrop-blur-3xl shadow-2xl"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                 <FileCheck className="w-5 h-5 text-brand-gold" />
                 <h3 className="text-xl font-bold tracking-tight">Live Outputs</h3>
              </div>
              <div className="text-white/20 text-[9px] font-black uppercase tracking-widest">Auto-Sync</div>
            </div>

            <div className="space-y-3">
              {[
                'Summary Report',
                'Action Items',
                'Attendance Log',
                'Compliance Record'
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-4 group hover:border-brand-gold/20 transition-all cursor-pointer"
                >
                  <span className="text-[13px] font-bold text-white/70 group-hover:text-white transition-colors">{item}</span>
                  <div className="flex items-center gap-2">
                     <span className="text-[9px] text-white/20 font-black uppercase tracking-widest">Updated</span>
                     <CheckCircle2 className="w-3 h-3 text-emerald-500 opacity-40" />
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

function HealthItem({ label, val, color }: { label: string, val: string, color?: string }) {
  return (
    <div className="flex items-center justify-between group">
       <span className="text-[10px] text-white/20 font-black uppercase tracking-[0.2em] group-hover:text-white/40 transition-colors">{label}</span>
       <span className={cn("text-[12px] font-bold", color ? color : "text-white")}>{val}</span>
    </div>
  );
}
