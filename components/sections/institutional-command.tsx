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
  { title: 'Operational Health Engine', text: 'Live monitoring of engagement, attendance quality, and delivery risk.', icon: Activity },
  { title: 'AI Facilitator Assistant', text: 'Real-time insights, smart summaries, and action recommendations.', icon: Brain },
  { title: 'Live Delivery Timeline', text: 'Track every moment, action, and interaction as it happens.', icon: Clock },
  { title: 'Coordination Map', text: 'Visualize connected teams, regions, and operational dependencies.', icon: Globe },
  { title: 'Decision Layer', text: 'AI-powered recommendations to keep programmes on track.', icon: Layers },
  { title: 'Structured Outputs', text: 'Automated reports, actions, attendance, and compliance logs.', icon: FileCheck }
];

const metrics = [
  ['1,240+', 'Active Participants'],
  ['99.995%', 'System Uptime'],
  ['0.8ms', 'Average Sync'],
  ['140+', 'Countries Connected']
];

export function InstitutionalCommandCenter() {
  return (
    <div className="relative min-h-screen bg-[#050816] text-white overflow-hidden py-12 px-6 lg:py-24 lg:px-12">
      
      {/* 1. PREMIUM BACKGROUND SYSTEM (NO REDESIGN, ONLY ENHANCEMENT) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         {/* Layered Radial Gradients */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,184,46,0.06),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(0,150,255,0.05),transparent_40%)]" />
         
         {/* Animated Grid Texture */}
         <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.03 }}
            className="absolute inset-0" 
            style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "50px 50px" }} 
         />

         {/* Floating Blur Orbs */}
         <FloatingOrb color="rgba(245,184,46,0.03)" delay={0} size={600} top="-10%" left="-5%" />
         <FloatingOrb color="rgba(0,150,255,0.02)" delay={2} size={800} top="40%" left="60%" />
         <FloatingOrb color="rgba(245,184,46,0.02)" delay={4} size={500} top="70%" left="10%" />

         {/* Ambient Lighting */}
         <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-[#050816] via-transparent to-[#050816] z-10" />
      </div>

      <main className="relative z-10 max-w-[1780px] mx-auto grid grid-cols-12 gap-6 lg:gap-8">
        
        {/* LEFT PANEL: FEATURE STACK (Responsive: Full on mobile/tablet, 3/12 on Desktop) */}
        <section className="col-span-12 xl:col-span-3 flex flex-col justify-between space-y-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[#f5b82e] tracking-[0.4em] uppercase text-[10px] font-black mb-10 flex items-center gap-3">
              <span className="w-8 h-px bg-brand-gold/20" />
              Live Operation Command
            </p>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.95] tracking-tight mb-10">
              Built for intelligent <br /> <span className="text-[#f5b82e] italic">programme delivery.</span>
            </h1>

            <p className="text-white/30 text-lg lg:text-xl leading-relaxed max-w-lg mb-14">
              OYEN GRID goes beyond meetings. Orchestrate live operations with real-time intelligence,
              AI guidance, and institutional control.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="group flex gap-5 p-5 rounded-[22px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/10 transition-all duration-500 shadow-2xl backdrop-blur-sm"
                >
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-[#f5b82e]/10 border border-[#f5b82e]/20 flex items-center justify-center text-[#f5b82e] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(245,184,46,0.2)] transition-all duration-500">
                    <item.icon className="w-5 h-5" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-bold text-white text-[16px] tracking-tight">{item.title}</h3>
                    <p className="text-white/20 text-[13px] leading-relaxed mt-1.5 line-clamp-2 font-medium">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center gap-6 pb-6">
            <motion.button 
               whileHover={{ scale: 1.02, y: -2 }}
               whileTap={{ scale: 0.98 }}
               className="w-full sm:w-auto bg-[#f5b82e] hover:bg-[#ffc93c] text-black px-10 py-5 rounded-2xl font-black uppercase text-[12px] tracking-widest transition-all shadow-[0_20px_40px_rgba(245,184,46,0.15)]"
            >
              Explore Live Command
            </motion.button>
            <button className="text-white/30 hover:text-white transition-all font-black uppercase text-[11px] tracking-widest flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-all group-hover:scale-110">
                 <PlayCircle className="w-5 h-5" />
              </div>
              See it in action
            </button>
          </div>
        </section>

        {/* CENTER PANEL: COMMAND INTERFACE (Responsive: Full on mobile/tablet, 6/12 on Desktop) */}
        <section className="col-span-12 xl:col-span-6 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[40px] border border-white/10 bg-[#0b1220]/60 backdrop-blur-[60px] overflow-hidden shadow-[0_80px_160px_rgba(0,0,0,0.9)] group/dashboard"
          >
            {/* HEADER (POLISHED) */}
            <div className="flex items-center justify-between px-10 py-7 border-b border-white/5 bg-white/[0.03]">
              <div className="flex items-center gap-5">
                <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center">
                   <Monitor className="w-5 h-5 text-white/30" />
                </div>
                <div>
                   <h2 className="font-bold text-xl tracking-tight text-white/90">Leadership Alignment Session</h2>
                   <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] text-white/30 font-black uppercase tracking-widest">Protocol Cluster_04</span>
                   </div>
                </div>
                <div className="hidden sm:flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 ml-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]" />
                  <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Live Sync</span>
                </div>
              </div>

              <div className="flex items-center gap-8 text-[12px] font-black uppercase tracking-widest">
                <div className="hidden md:flex items-center gap-3 text-white/40">
                   <Clock className="w-4.5 h-4.5" />
                   <span className="font-mono tracking-[0.2em]">01:24:58</span>
                </div>
                <div className="flex items-center gap-2.5 text-emerald-500">
                   <Wifi className="w-4.5 h-4.5" />
                   <span className="hidden sm:inline">Secure Node Sync</span>
                </div>
              </div>
            </div>

            {/* VIDEO SECTION: ENHANCED FIDELITY */}
            <div className="grid grid-cols-12 gap-6 p-6">
              <div className="col-span-12 lg:col-span-9 relative rounded-[32px] overflow-hidden h-[620px] bg-black group/video shadow-3xl border border-white/5">
                {/* Speaking Border Animation (Polished) */}
                <motion.div 
                   animate={{ opacity: [0.2, 0.5, 0.2], borderColor: ["rgba(245,184,46,0.1)", "rgba(245,184,46,0.3)", "rgba(245,184,46,0.1)"] }}
                   transition={{ duration: 3, repeat: Infinity }}
                   className="absolute inset-0 border-[4px] rounded-[32px] pointer-events-none z-10" 
                />

                <Image 
                   src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1400&auto=format&fit=crop" 
                   alt="Presenter" 
                   fill 
                   className="object-cover opacity-95 transition-transform duration-[40s] group-hover/video:scale-105" 
                />
                
                {/* Cinematic Glass Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/30 z-20 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)] z-20 pointer-events-none" />

                {/* HUD Top-Left: Speaker Info */}
                <div className="absolute top-8 left-8 p-5 rounded-3xl bg-black/50 backdrop-blur-3xl border border-white/10 flex items-center gap-5 shadow-3xl z-30 group/speaker hover:border-brand-gold/20 transition-all cursor-default">
                  <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center relative">
                     <div className="absolute inset-0 bg-brand-gold/20 animate-ping rounded-2xl" />
                     <Mic className="w-5 h-5 text-brand-gold relative z-10" />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/30 font-black uppercase tracking-[0.3em] mb-1.5 flex items-center gap-2">
                       Active Presenter
                       <div className="flex gap-1">
                          {[1,2,3,4].map(i => <motion.div key={i} animate={{ height: [2, 12, 2] }} transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }} className="w-0.5 bg-brand-gold/60" />)}
                       </div>
                    </div>
                    <div className="font-bold text-[15px] tracking-tight text-white">Daniel Okafor</div>
                  </div>
                </div>

                {/* AI Intelligence Badge (Top-Right) */}
                <motion.div 
                   initial={{ opacity: 0, y: -10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="absolute top-8 right-8 z-30"
                >
                   <div className="flex items-center gap-4 px-5 py-3 rounded-2xl bg-[#0b1220]/60 backdrop-blur-3xl border border-brand-gold/20 shadow-3xl group/ai cursor-pointer hover:border-brand-gold/50 transition-all active:scale-95">
                      <div className="w-6 h-6 rounded-xl bg-brand-gold/20 flex items-center justify-center">
                         <Sparkles className="w-4 h-4 text-brand-gold" />
                      </div>
                      <div className="text-[11px] font-black text-white/90 uppercase tracking-[0.2em]">
                         AI Insight: <span className="text-brand-gold">Optimized Alignment</span>
                      </div>
                   </div>
                </motion.div>

                {/* REFINED CONTROL BAR (Tactile & Professional) */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 p-4 rounded-[28px] bg-[#0C1018]/80 backdrop-blur-[60px] border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.95)] z-40 transition-all hover:bg-[#0C1018]/95">
                  <div className="flex items-center gap-2 px-3">
                    <ControlBtn icon={Mic} label="Mute" active />
                    <ControlBtn icon={Video} label="Video" active />
                  </div>
                  <div className="w-px h-10 bg-white/10 mx-1" />
                  <div className="flex items-center gap-2 px-3">
                    <ControlBtn icon={Monitor} label="Share" />
                    <ControlBtn icon={Users} label="People" count={48} />
                    <ControlBtn icon={MessageSquare} label="Sync_Chat" count={12} active />
                    <ControlBtn icon={Smile} label="React" />
                  </div>
                  <div className="w-px h-10 bg-white/10 mx-1" />
                  <ControlBtn icon={MoreHorizontal} label="Controls" />
                  <div className="w-px h-10 bg-white/10 mx-3" />
                  <motion.button 
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="h-12 px-9 rounded-2xl bg-red-500/10 text-red-500 text-[11px] font-black uppercase tracking-widest border border-red-500/20 hover:bg-red-500 hover:text-white transition-all shadow-[0_0_30px_rgba(239,68,68,0.15)]"
                  >
                     End Deployment
                  </motion.button>
                </div>
              </div>

              {/* PARTICIPANTS: STATUS RINGS & POLISHED HOVER */}
              <div className="col-span-12 lg:col-span-3 flex lg:flex-col gap-5 overflow-x-auto pb-4 lg:pb-0 z-30 scrollbar-hide">
                {[
                  { img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop', status: 'speaking', name: 'Alisha K.' },
                  { img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop', status: 'online', name: 'Michael R.' },
                  { img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop', status: 'online', name: 'Emily T.' },
                  { img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop', status: 'online', name: 'James W.' }
                ].map((p, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.04, y: -4 }}
                    className="h-[142px] w-full min-w-[150px] rounded-[28px] overflow-hidden relative border border-white/5 group/p shadow-2xl transition-all duration-700 cursor-pointer"
                  >
                    {/* Status Ring (Polished) */}
                    {p.status === 'speaking' && (
                       <motion.div 
                          animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.02, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 border-2 border-brand-gold/40 rounded-[28px] z-10" 
                       />
                    )}

                    <Image src={p.img} alt="Participant" fill className="object-cover grayscale opacity-50 group-hover/p:grayscale-0 group-hover/p:opacity-100 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                    
                    {/* Participant Name Overlay */}
                    <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover/p:opacity-100 transition-opacity duration-500">
                       <span className="text-[10px] font-bold text-white/90">{p.name}</span>
                    </div>

                    {/* Status Indicator */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 z-20">
                       <div className={cn(
                          "w-1.5 h-1.5 rounded-full shadow-[0_0_10px_currentColor]",
                          p.status === 'speaking' ? "text-brand-gold" : "text-emerald-500"
                       )} />
                       <span className="text-[8px] font-black text-white/60 uppercase tracking-widest">{p.status}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* LOWER GRID: TIMELINE & MAP (Responsive: Collapsed on small, Side-by-side on md+) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* TIMELINE (POLISHED) */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 0.2 }}
               className="rounded-[40px] border border-white/10 bg-[#0b1220]/60 p-10 backdrop-blur-[60px] shadow-3xl hover:border-white/20 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center">
                      <Clock className="w-5.5 h-5.5 text-brand-gold" />
                   </div>
                   <h3 className="text-2xl font-bold tracking-tight">Delivery Timeline</h3>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
                   <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                   <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Live Sync</span>
                </div>
              </div>

              <div className="flex gap-3 mb-12">
                {[20, 20, 20, 20, 10, 10].map((w, i) => (
                  <div
                    key={i}
                    style={{ width: `${w}%` }}
                    className={cn(
                      "h-2 rounded-full transition-all duration-1000",
                      i < 4 ? 'bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.4)]' : 'bg-brand-gold shadow-[0_0_12px_rgba(245,184,46,0.3)]'
                    )}
                  />
                ))}
              </div>

              <div className="space-y-7">
                {[
                  { label: 'Strategic session initialized', time: '09:20' },
                  { label: 'AI facilitation protocol active', time: '09:21' },
                  { label: 'Operational records generated', time: '09:22' },
                  { label: 'Global sync verification', time: '09:23' }
                ].map((event, i) => (
                  <div key={i} className="flex items-center justify-between group cursor-pointer hover:translate-x-2 transition-transform duration-500">
                    <div className="flex items-center gap-5">
                      <div className="w-2 h-2 rounded-full bg-brand-gold/30 group-hover:bg-brand-gold transition-all duration-500 group-hover:shadow-[0_0_10px_#F5B942]" />
                      <div>
                        <p className="font-bold text-white/80 group-hover:text-white transition-colors text-[15px]">{event.label}</p>
                        <p className="text-white/20 text-[11px] font-mono tracking-tighter mt-1">{event.time} SYNC</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-white/10 group-hover:text-brand-gold transition-all" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* MAP (POLISHED) */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 0.3 }}
               className="rounded-[40px] border border-white/10 bg-[#0b1220]/60 p-10 backdrop-blur-[60px] shadow-3xl relative overflow-hidden group/map"
            >
              <div className="flex items-center justify-between mb-10 relative z-20">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center">
                      <Globe className="w-5.5 h-5.5 text-brand-gold" />
                   </div>
                   <h3 className="text-2xl font-bold tracking-tight">Coordination Map</h3>
                </div>
                <button className="text-[11px] font-black text-brand-gold uppercase tracking-[0.2em] hover:brightness-125 transition-all">Global View</button>
              </div>

              <div className="h-[300px] rounded-3xl border border-white/5 bg-black/40 relative overflow-hidden shadow-inner group-hover/map:border-white/10 transition-colors duration-500">
                <Image 
                   src="/operational-map.png" 
                   alt="Map" 
                   fill 
                   className="object-cover opacity-[0.12] grayscale group-hover/map:grayscale-0 group-hover/map:opacity-40 transition-all duration-[2000ms] group-hover/map:scale-110" 
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <div className="text-[11px] font-black text-white/10 uppercase tracking-[0.5em] group-hover/map:text-white/20 transition-colors">Institutional Nodes Active</div>
                </div>
                {/* Floating Map Nodes */}
                {[1,2,3].map(i => (
                  <motion.div 
                     key={i}
                     animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                     transition={{ duration: 3, repeat: Infinity, delay: i * 1 }}
                     className="absolute w-3 h-3 rounded-full bg-brand-gold/40 blur-[2px]" 
                     style={{ top: `${20*i}%`, left: `${30*i}%` }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* STATS (Responsive: 2 columns on mobile, 4 columns on desktop) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map(([value, label], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="rounded-[32px] border border-white/10 bg-[#0b1220]/60 p-8 backdrop-blur-[60px] shadow-3xl hover:border-brand-gold/40 transition-all duration-700 group hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 transition-colors">
                   <Zap className="w-5 h-5 text-white/20 group-hover:text-brand-gold transition-colors" />
                </div>
                <h4 className="text-4xl font-black mb-2 group-hover:text-brand-gold transition-colors tracking-tighter">{value}</h4>
                <p className="text-white/20 text-[11px] font-black uppercase tracking-[0.2em]">{label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* RIGHT SIDEBAR: INTELLIGENCE HUB (Responsive: Stacked after main on smaller, 3/12 on Desktop) */}
        <section className="col-span-12 xl:col-span-3 space-y-6">
          {/* HEALTH INTELLIGENCE */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="rounded-[40px] border border-white/10 bg-[#0b1220]/60 p-10 backdrop-blur-[60px] shadow-3xl relative overflow-hidden group/health"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover/health:opacity-[0.15] transition-opacity duration-1000">
               <Activity className="w-24 h-24 text-brand-gold" />
            </div>

            <div className="flex items-center justify-between mb-10 relative z-10">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Activity className="w-6 h-6 text-brand-gold" />
                 </div>
                 <h3 className="text-2xl font-bold tracking-tight">Command Intel</h3>
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_12px_#10b981]" />
            </div>

            <div className="flex items-center gap-10 relative z-10">
              <div className="relative h-32 w-32 shrink-0 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90">
                   <circle cx="64" cy="64" r="56" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="10" />
                   <motion.circle 
                      cx="64" cy="64" r="56" fill="none" stroke="#f5b82e" strokeWidth="10" 
                      strokeDasharray="351" 
                      initial={{ strokeDashoffset: 351 }}
                      whileInView={{ strokeDashoffset: 28 }}
                      transition={{ duration: 2, ease: "easeOut" }}
                      className="drop-shadow-[0_0_20px_rgba(245,184,46,0.5)]" 
                   />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                   <span className="text-[28px] font-black text-white tracking-tighter">92%</span>
                   <span className="text-[9px] font-black text-brand-gold uppercase tracking-[0.2em] mt-2">Optimal</span>
                </div>
              </div>

              <div className="flex-1 space-y-5">
                <HealthItem label="Engagement" val="Peak" color="text-emerald-500" glowing />
                <HealthItem label="Attendance" val="98.2%" glowing />
                <HealthItem label="Sync_Rate" val="94.8%" glowing />
              </div>
            </div>
          </motion.div>

          {/* AI ASSISTANT (UPGRADED) */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 0.1 }}
             className="rounded-[40px] border border-white/10 bg-[#0b1220]/60 p-10 backdrop-blur-[60px] shadow-3xl relative overflow-hidden group/ai"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-brand-gold" />
                 </div>
                 <h3 className="text-2xl font-bold tracking-tight">AI Assistant</h3>
              </div>
              <div className="text-white/20 text-[11px] font-mono tracking-[0.2em] flex items-center gap-2">
                 <div className="flex gap-1">
                    {[1,2,3].map(i => <motion.div key={i} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }} className="w-1 h-1 rounded-full bg-brand-gold/50" />)}
                 </div>
                 ANALYZING
              </div>
            </div>

            <div className="rounded-3xl border border-brand-gold/20 bg-brand-gold/5 p-8 space-y-8 relative hover:border-brand-gold/40 transition-colors duration-500">
              {/* Scanline Effect */}
              <motion.div 
                 animate={{ top: ['0%', '100%', '0%'] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-x-0 h-px bg-brand-gold/30 z-0 pointer-events-none" 
              />
              
              <div className="relative z-10">
                 <p className="font-bold leading-relaxed text-[16px] text-white/90 italic tracking-tight">
                    "12 participants in Cluster_04 show decreasing interaction metrics. Engagement drift detected."
                 </p>
              </div>

              <div className="flex items-center justify-between gap-6 relative z-10">
                <motion.button 
                   whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(245,184,46,0.3)" }}
                   whileTap={{ scale: 0.95 }}
                   className="flex-1 bg-[#f5b82e] hover:bg-[#ffc93c] text-black h-13 rounded-2xl font-black uppercase text-[11px] tracking-widest transition-all shadow-2xl"
                >
                  Apply Protocol
                </motion.button>
                <div className="text-right">
                   <div className="text-emerald-500 text-[14px] font-black tracking-tight">94%</div>
                   <div className="text-white/20 text-[8px] font-black uppercase tracking-widest mt-1">Confidence</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* DECISION LAYER */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 0.2 }}
             className="rounded-[40px] border border-white/10 bg-[#0b1220]/60 p-10 backdrop-blur-[60px] shadow-3xl"
          >
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                  <Layers className="w-6 h-6 text-brand-gold" />
               </div>
               <h3 className="text-2xl font-bold tracking-tight">Decision Matrix</h3>
            </div>

            <div className="rounded-3xl border border-white/5 p-8 bg-white/[0.02] space-y-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500">
              <p className="font-bold leading-relaxed text-[16px] text-white/80 tracking-tight">
                Extend synchronization sequence by 8 minutes to ensure deep institutional alignment.
              </p>

              <div className="flex gap-4">
                <motion.button 
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="flex-[1.5] bg-[#f5b82e] hover:bg-[#ffc93c] text-black h-12 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all"
                >
                  Approve
                </motion.button>
                <motion.button 
                   whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                   whileTap={{ scale: 0.95 }}
                   className="flex-1 border border-white/10 text-white/40 hover:text-white h-12 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all"
                >
                  Dismiss
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* OUTPUTS (POLISHED) */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 0.3 }}
             className="rounded-[40px] border border-white/10 bg-[#0b1220]/60 p-10 backdrop-blur-[60px] shadow-3xl"
          >
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                    <FileCheck className="w-6 h-6 text-brand-gold" />
                 </div>
                 <h3 className="text-2xl font-bold tracking-tight">Live Outputs</h3>
              </div>
              <div className="flex items-center gap-2">
                 <motion.div 
                    animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2.5 h-2.5 rounded-full bg-brand-gold/40 blur-[1px]" 
                 />
                 <span className="text-white/20 text-[9px] font-black uppercase tracking-[0.3em]">Sync Active</span>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { label: 'Summary Protocol', icon: FileText },
                { label: 'Action Items', icon: Target },
                { label: 'Attendance Audit', icon: ShieldCheck },
                { label: 'Compliance Record', icon: Lock }
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.01] p-5 group/item hover:bg-white/[0.05] hover:border-brand-gold/30 transition-all duration-500 cursor-pointer shadow-inner"
                >
                  <div className="flex items-center gap-5">
                     <item.icon className="w-5 h-5 text-white/20 group-hover/item:text-brand-gold transition-colors duration-500" />
                     <span className="text-[14px] font-bold text-white/60 group-hover/item:text-white transition-colors duration-500">{item.label}</span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500/30 group-hover/item:text-emerald-500 transition-all duration-500 group-hover:scale-110" />
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  )
}

function FloatingOrb({ color, delay, size, top, left }: { color: string, delay: number, size: number, top: string, left: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        x: [0, 50, -30, 0],
        y: [0, -50, 40, 0],
      }}
      transition={{ 
        opacity: { duration: 2 },
        duration: 20, 
        repeat: Infinity, 
        delay, 
        ease: "easeInOut" 
      }}
      className="absolute blur-[120px] rounded-full z-0 pointer-events-none"
      style={{ 
        backgroundColor: color, 
        width: size, 
        height: size, 
        top, 
        left 
      }}
    />
  );
}

function ControlBtn({ icon: Icon, label, count, active = false }: { icon: any, label: string, count?: number, active?: boolean }) {
  return (
    <motion.button 
       whileHover={{ scale: 1.05 }}
       whileTap={{ scale: 0.95 }}
       className="flex flex-col items-center gap-2 group cursor-pointer relative"
    >
       <div className={cn(
         "w-12 h-12 rounded-[18px] flex items-center justify-center transition-all duration-500 relative",
         active ? "bg-brand-gold/15 text-brand-gold border border-brand-gold/30 shadow-[0_0_20px_rgba(245,184,46,0.2)]" : "bg-white/5 text-white/40 border border-white/5 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/20"
       )}>
          <Icon className="w-5 h-5" />
          {count !== undefined && (
            <div className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-md bg-brand-gold text-black text-[9px] font-black flex items-center justify-center shadow-2xl">
               {count}
            </div>
          )}
       </div>
       <span className="text-[9px] font-black text-white/20 group-hover:text-white/50 uppercase tracking-widest transition-colors duration-500">{label}</span>
       
       {/* High-end Active Glow */}
       {active && <div className="absolute -inset-2 bg-brand-gold/5 blur-xl rounded-2xl -z-10" />}
    </motion.button>
  );
}

function HealthItem({ label, val, color, glowing = false }: { label: string, val: string, color?: string, glowing?: boolean }) {
  return (
    <div className="flex items-center justify-between group">
       <span className="text-[11px] text-white/20 font-black uppercase tracking-[0.2em] group-hover:text-white/40 transition-colors duration-500">{label}</span>
       <div className="flex items-center gap-3">
          {glowing && (
             <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={cn("w-1.5 h-1.5 rounded-full shadow-[0_0_10px_currentColor]", color ? color : "text-brand-gold bg-brand-gold")} 
             />
          )}
          <span className={cn("text-[14px] font-bold tracking-tight", color ? color : "text-white/90")}>{val}</span>
       </div>
    </div>
  );
}
