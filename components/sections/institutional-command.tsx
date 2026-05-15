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
  { label: 'Active Participants', val: '1,240+', icon: Users },
  { label: 'System Uptime', val: '99.995%', icon: ShieldCheck },
  { label: 'Average Sync', val: '0.8ms', icon: Zap },
  { label: 'Countries Connected', val: '140+', icon: Globe2 }
];

export function InstitutionalCommandCenter() {
  return (
    <div className="relative min-h-[620px] bg-[#050816] text-white overflow-hidden py-10 px-6 lg:py-20">
      
      {/* 1. PREMIUM BACKGROUND SYSTEM: DO NOT REDESIGN, ONLY ENHANCE VISUAL FIDELITY */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
         {/* Layered Radial Gradients */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,184,46,0.06),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(0,150,255,0.06),transparent_40%)]" />
         
         {/* Animated Grid Texture */}
         <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.04 }}
            className="absolute inset-0"
            style={{ 
               backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
               backgroundSize: "60px 60px"
            }}
         />

         {/* Floating Blur Orbs: Depth Effects */}
         <motion.div 
            animate={{ 
               x: [0, 40, 0], 
               y: [0, -40, 0],
               scale: [1, 1.2, 1] 
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[120px]" 
         />
         <motion.div 
            animate={{ 
               x: [0, -60, 0], 
               y: [0, 60, 0],
               scale: [1.2, 1, 1.2] 
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px]" 
         />
      </div>

      <div className="container-custom max-w-[1240px] px-6 mx-auto grid grid-cols-12 gap-6">
        
        {/* LEFT PANEL: PRESERVE EXACT STRUCTURE, ADD POLISH */}
        <section className="col-span-12 lg:col-span-3 flex flex-col justify-between space-y-12">
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

            <h1 className="text-6xl xl:text-[5.5rem] font-bold leading-[0.95] tracking-tighter mb-10">
              Built for intelligent <br /> 
              <span className="text-[#f5b82e] relative inline-block">
                 programme delivery.
                 <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute bottom-1 left-0 h-1 bg-brand-gold/20 -z-10" 
                 />
              </span>
            </h1>

            <p className="text-[14px] text-white/40 mb-10 leading-relaxed font-medium">
              OYEN GRID provides the orchestration layer for complex institutional delivery, unifying every module, cohort and participant into one live operational intelligence center.
            </p>

            <div className="space-y-4">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.8 }}
                  className="group flex gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/10 transition-all duration-500 shadow-2xl backdrop-blur-sm cursor-pointer"
                >
                  <div className="h-14 w-14 shrink-0 rounded-xl bg-brand-gold/5 border border-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold/10 group-hover:border-brand-gold/30 transition-all duration-500">
                    <item.icon className="w-6 h-6" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-bold text-white text-[18px] tracking-tight group-hover:text-brand-gold transition-colors">{item.title}</h3>
                    <p className="text-white/20 text-[14px] leading-relaxed mt-1.5 line-clamp-2 group-hover:text-white/30 transition-colors">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-wrap items-center gap-6 pb-6">
            <motion.button 
               whileHover={{ scale: 1.02, translateY: -2 }}
               whileTap={{ scale: 0.98 }}
               className="bg-[#f5b82e] hover:bg-[#ffc93c] text-black px-8 h-14 rounded-2xl font-black uppercase text-[12px] tracking-widest transition-all shadow-xl shadow-brand-gold/10"
            >
              Explore Live Command
            </motion.button>
            <motion.button 
               whileHover={{ x: 5 }}
               className="text-white/40 hover:text-white transition-all font-black uppercase text-[11px] tracking-widest flex items-center gap-3 group"
            >
              <div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-all bg-white/5 backdrop-blur-md">
                 <PlayCircle className="w-4 h-4" />
              </div>
              See it in action
            </motion.button>
          </div>
        </section>

        {/* CENTER PANEL: PRESERVE EXACT STRUCTURE, ADD POLISH & RESPONSIVENESS */}
        <section className="col-span-12 lg:col-span-6 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[36px] border border-white/10 bg-[#0b1220]/60 backdrop-blur-3xl overflow-hidden shadow-[0_80px_160px_rgba(0,0,0,0.9)] relative"
          >
            {/* Glossy Reflection Overlay */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            {/* HEADER */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-white/[0.03]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                   <Monitor className="w-4.5 h-4.5 text-brand-gold/60" />
                </div>
                <h2 className="font-bold text-lg tracking-tight">Leadership Alignment Session</h2>
                <div className="flex items-center gap-2.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]" />
                  <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Live</span>
                </div>
              </div>
            </div>

            {/* VIDEO SECTION: ENHANCED FIDELITY */}
            <div className="grid lg:grid-cols-[300px_1fr_300px] gap-6 items-start">
              <div className="col-span-12 xl:col-span-9 relative rounded-[32px] overflow-hidden h-[680px] bg-black group/video shadow-2xl">
                {/* Speaking Border Animation: Final Polish */}
                <motion.div 
                   animate={{ opacity: [0.2, 0.5, 0.2] }}
                   transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute inset-0 border-[4px] border-[#f5b82e]/10 rounded-[32px] pointer-events-none z-10" 
                />

                <Image 
                   src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1400&auto=format&fit=crop" 
                   alt="Presenter" 
                   fill 
                   className="object-cover opacity-95 transition-transform duration-[40s] group-hover/video:scale-105" 
                />
                
                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/30 z-20" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)] z-20 pointer-events-none" />

                {/* HUD Speak Info */}
                <div className="absolute top-8 left-8 p-4 rounded-2xl bg-black/50 backdrop-blur-2xl border border-white/10 flex items-center gap-4 shadow-3xl z-30">
                  <div className="w-11 h-11 rounded-xl bg-brand-gold/10 flex items-center justify-center relative group-hover/video:bg-brand-gold/20 transition-all">
                     <Mic className="w-5 h-5 text-brand-gold" />
                     <motion.div animate={{ height: [2, 10, 2] }} transition={{ repeat: Infinity, duration: 0.5 }} className="absolute -bottom-1 w-6 h-0.5 bg-brand-gold/40 blur-[1px]" />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/30 font-black uppercase tracking-[0.25em] mb-1">Speaker</div>
                    <div className="font-bold text-[14px] tracking-tight text-white/90">Daniel Okafor</div>
                  </div>
                </div>

                {/* AI Insight Overlay */}
                <div className="absolute top-8 right-8 z-30">
                   <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-4 px-5 py-3 rounded-2xl bg-[#0b1220]/70 backdrop-blur-2xl border border-brand-gold/20 shadow-3xl cursor-pointer group/ai"
                   >
                      <div className="w-6 h-6 rounded-lg bg-brand-gold/10 flex items-center justify-center shadow-[0_0_15px_rgba(245,185,46,0.2)]">
                         <Sparkles className="w-4 h-4 text-brand-gold" />
                      </div>
                      <h2 className="text-[36px] font-bold text-white mb-6 leading-[1.05] tracking-tighter">
              Built for intelligent <span className="text-brand-gold italic font-serif">programme delivery.</span>
            </h2>
                      <ChevronRight className="w-3.5 h-3.5 text-white/20 group-hover/ai:translate-x-1 transition-transform" />
                   </motion.div>
                </div>

                {/* REFINED CONTROL HUD */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 p-4 rounded-[26px] bg-[#0C1018]/85 backdrop-blur-[60px] border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.9)] z-40 transition-all hover:bg-[#0C1018]/95">
                  <div className="flex items-center gap-2 px-2">
                    <ControlBtn icon={Mic} label="Mute" active />
                    <ControlBtn icon={Video} label="Video" active />
                  </div>
                  <div className="w-px h-10 bg-white/10 mx-2" />
                  <div className="flex items-center gap-2 px-2">
                    <ControlBtn icon={Monitor} label="Share" />
                    <ControlBtn icon={Users} label="People" count={48} />
                    <ControlBtn icon={MessageSquare} label="Chat" count={12} active />
                    <ControlBtn icon={Smile} label="Emoji" />
                  </div>
                  <div className="w-px h-10 bg-white/10 mx-2" />
                  <ControlBtn icon={MoreHorizontal} label="Menu" />
                  <div className="w-px h-10 bg-white/10 mx-3" />
                  <motion.button 
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="h-12 px-8 rounded-xl bg-red-500/10 text-red-500 text-[11px] font-black uppercase tracking-[0.2em] border border-red-500/20 hover:bg-red-500 hover:text-white transition-all shadow-2xl"
                  >
                     End Sync
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* LOWER GRID: PRESERVE STRUCTURE, ADD POLISH */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* TIMELINE */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, delay: 0.3 }}
               className="rounded-[36px] border border-white/10 bg-[#0b1220]/60 p-10 backdrop-blur-3xl shadow-3xl relative overflow-hidden group/timeline"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover/timeline:opacity-[0.08] transition-opacity">
                 <Clock className="w-24 h-24 text-brand-gold" />
              </div>

              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                   <div className="w-11 h-11 rounded-xl bg-brand-gold/5 border border-brand-gold/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-brand-gold" />
                   </div>
                   <h3 className="text-2xl font-bold tracking-tight">Live Delivery Timeline</h3>
                </div>
              </div>

              <div className="space-y-7">
                {[
                  { label: 'Breakout session started', time: '09:20', icon: Users },
                  { label: 'AI insight generated', time: '09:21', icon: Brain },
                  { label: 'Action item created', time: '09:22', icon: Target },
                  { label: 'Engagement drift detected', time: '09:23', icon: Activity }
                ].map((event, i) => (
                  <div key={i} className="flex items-center justify-between group/event cursor-pointer">
                    <div className="flex items-center gap-5">
                      <div key={i} className="h-[110px] rounded-2xl bg-white/[0.02] border border-white/5 p-4 flex flex-col justify-between group/node">
                         <event.icon className="w-4 h-4 text-white/20 group-hover/event:text-brand-gold transition-colors" />
                      </div>
                      <div>
                        <p className="font-bold text-white/80 group-hover/event:text-white transition-colors text-[15px] tracking-tight">{event.label}</p>
                        <p className="text-white/20 text-[11px] font-mono tracking-tighter mt-1">{event.time} UTC</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* MAP: ENHANCED FIDELITY */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, delay: 0.4 }}
               className="rounded-[36px] border border-white/10 bg-[#0b1220]/60 p-10 backdrop-blur-3xl shadow-3xl relative overflow-hidden group/map"
            >
              <div className="lg:col-span-1 space-y-4">
             {/* METRIC 1 — OPERATIONAL HEALTH */}
             <motion.div
               whileHover={{ y: -2 }}
               className="p-5 rounded-[22px] bg-white/[0.02] border border-white/5 backdrop-blur-xl relative overflow-hidden group"
             >
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                   <div className="w-11 h-11 rounded-xl bg-blue-500/5 border border-blue-500/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-blue-400" />
                   </div>
                   <h3 className="text-2xl font-bold tracking-tight">Coordination Map</h3>
                </div>
              </div>
            </motion.div>
            </div>
            </motion.div>
          </div>

          {/* STATS: PRESERVE STRUCTURE, ADD POLISH */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
                whileHover={{ y: -8, border: "rgba(245,184,46,0.3)" }}
                className="rounded-[28px] border border-white/10 bg-[#0b1220]/70 p-10 backdrop-blur-3xl shadow-2xl transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 group-hover:border-brand-gold/20 transition-all">
                   <m.icon className="w-5 h-5 text-white/20 group-hover:text-brand-gold transition-colors" />
                </div>
                <h4 className="text-5xl font-black mb-3 tracking-tighter group-hover:text-brand-gold transition-colors">{m.val}</h4>
                <p className="text-white/30 text-[12px] font-black uppercase tracking-[0.2em]">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* RIGHT SIDEBAR: PRESERVE EXACT STRUCTURE, ENHANCE FIDELITY & RESPONSIVENESS */}
        <section className="col-span-12 lg:col-span-3 space-y-6">
          <div className="space-y-4">
              {[
                { label: "Real-time sync protocol", active: true },
                { label: "End-to-end security architecture", active: true },
                { label: "Multi-region orchestration", active: true }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 8, border: "rgba(245,184,46,0.2)", backgroundColor: "rgba(255,255,255,0.04)" }}
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-5 group cursor-pointer transition-all duration-500"
                >
                  <div className="flex items-center gap-5">
                     <Zap className="w-4 h-4 text-white/20 group-hover:text-brand-gold transition-colors" />
                     <span className="text-[14px] font-bold text-white/60 group-hover:text-white transition-colors tracking-tight">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <span className="text-[10px] text-white/20 font-black uppercase tracking-widest hidden sm:inline">Active</span>
                     <div className="w-4 h-4 rounded-full border border-emerald-500/20 flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500/60" />
                     </div>
                  </div>
                </motion.div>
              ))}
            </div>
        </section>
      </div>
    </div>
  )
}

function ControlBtn({ icon: Icon, label, count, active = false }: { icon: any, label: string, count?: number, active?: boolean }) {
  return (
    <motion.button 
       whileHover={{ scale: 1.1, translateY: -5 }}
       whileTap={{ scale: 0.9 }}
       className="flex flex-col items-center gap-2.5 group cursor-pointer relative"
    >
       <div className={cn(
         "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 relative",
         active ? "bg-brand-gold/15 text-brand-gold border border-brand-gold/30 shadow-[0_0_20px_rgba(245,184,46,0.1)]" : "bg-white/5 text-white/30 border border-white/10 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/30"
       )}>
          <Icon className="w-5 h-5" />
          {count !== undefined && (
            <div className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-md bg-brand-gold text-black text-[9px] font-black flex items-center justify-center shadow-[0_0_15px_rgba(245,184,46,0.5)]">
               {count}
            </div>
          )}
       </div>
       <span className="text-[9px] font-black text-white/20 group-hover:text-white/40 uppercase tracking-[0.15em] transition-colors">{label}</span>
       
       {active && (
         <motion.div 
            layoutId="activeControl"
            className="absolute -inset-1.5 bg-brand-gold/5 blur-xl rounded-2xl -z-10" 
         />
       )}
    </motion.button>
  );
}

function HealthItem({ label, val, color, glowing = false }: { label: string, val: string, color?: string, glowing?: boolean }) {
  return (
    <div className="flex items-center justify-between group py-1">
       <span className="text-[10px] text-white/20 font-black uppercase tracking-[0.25em] group-hover:text-white/40 transition-colors">{label}</span>
       <div className="flex items-center gap-3">
          {glowing && <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5 }} className={cn("w-1.5 h-1.5 rounded-full shadow-[0_0_10px_currentColor]", color ? color : "text-brand-gold bg-brand-gold")} />}
          <span className={cn("text-[13px] font-black tracking-tight", color ? color : "text-white/90")}>{val}</span>
       </div>
    </div>
  );
}
