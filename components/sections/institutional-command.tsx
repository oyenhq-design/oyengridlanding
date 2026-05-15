"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Monitor, Mic, Video, Users, PlayCircle, Shield, Sparkles, TrendingUp, Zap, ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

const metrics = [
  { label: 'System Engagement', val: '98.2%', icon: TrendingUp },
  { label: 'Sync Latency', val: '0.8ms', icon: Zap },
  { label: 'Infrastructure Uptime', val: '99.995%', icon: ShieldCheck },
  { label: 'Active Sessions', val: '1,240+', icon: Users }
];

const coreCapabilities = [
  { title: "Live Operational Visibility", desc: "Real-time tracking of every participant and coordinator." },
  { title: "AI Intelligence Layer", desc: "Autonomous monitoring and automated reporting infrastructure." },
  { title: "Institutional Governance", desc: "Role-based control and end-to-end security orchestration." }
];

export function InstitutionalCommandCenter() {
  return (
    <div className="relative min-h-[620px] bg-[#050816] text-white overflow-hidden py-32 px-6">
      
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
      <div className="container-custom max-w-[1240px] px-6 mx-auto grid grid-cols-12 gap-12 relative z-10">
        
        {/* LEFT COLUMN: NARRATIVE & CTAs (40%) */}
        <section className="col-span-12 lg:col-span-5 flex flex-col justify-center space-y-10 py-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
               <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_#f5b82e]" />
               <p className="text-[#f5b82e] tracking-[0.35em] uppercase text-[10px] font-black">
                 Operational Infrastructure
               </p>
            </div>

            <h1 className="text-5xl xl:text-7xl font-bold leading-[0.95] tracking-tighter mb-8">
              Built for intelligent <br /> 
              <span className="text-brand-gold italic font-serif relative inline-block">
                 programme delivery.
              </span>
            </h1>

            <p className="text-[15px] md:text-[17px] text-white/40 mb-10 leading-relaxed font-medium max-w-[520px]">
              The orchestration layer for high-stakes institutional coordination, unifying every module and participant into one live operational intelligence system.
            </p>

            <div className="space-y-6 mb-12">
              {coreCapabilities.map((cap, index) => (
                <div key={index} className="flex gap-4 items-start group">
                   <div className="w-5 h-5 rounded-full border border-brand-gold/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-gold/10 transition-all">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                   </div>
                   <div>
                      <h3 className="text-white font-bold text-[16px] tracking-tight mb-1">{cap.title}</h3>
                      <p className="text-white/20 text-[13px] leading-relaxed max-w-[400px]">{cap.desc}</p>
                   </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <motion.button 
                 whileHover={{ scale: 1.02, translateY: -2 }}
                 whileTap={{ scale: 0.98 }}
                 className="bg-[#f5b82e] hover:bg-[#ffc93c] text-black px-10 h-14 rounded-xl font-black uppercase text-[12px] tracking-widest transition-all shadow-xl shadow-brand-gold/10"
              >
                Initialize Command
              </motion.button>
              <motion.button 
                 whileHover={{ x: 5 }}
                 className="text-white/40 hover:text-white transition-all font-black uppercase text-[11px] tracking-widest flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-all bg-white/5 backdrop-blur-md">
                   <PlayCircle className="w-4 h-4" />
                </div>
                Platform Demo
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* RIGHT COLUMN: DOMINANT OPERATIONAL INTERFACE (60%) */}
        <section className="col-span-12 lg:col-span-7 flex items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full rounded-[40px] border border-white/10 bg-[#0b1220]/40 backdrop-blur-3xl overflow-hidden shadow-[0_100px_200px_rgba(0,0,0,0.9)] relative"
          >
            {/* Header / Session HUD */}
            <div className="px-8 py-5 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                    <Monitor className="w-5 h-5 text-brand-gold" />
                 </div>
                 <div>
                    <h3 className="font-bold text-white text-[15px] tracking-tight">Leadership Alignment Hub</h3>
                    <div className="flex items-center gap-2 mt-0.5">
                       <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">Region: EMEA-01</span>
                       <div className="w-1 h-1 rounded-full bg-white/10" />
                       <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Protocol Active</span>
                    </div>
                 </div>
              </div>
              <div className="flex items-center gap-3">
                 <div className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]" />
                    <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Live Sync</span>
                 </div>
              </div>
            </div>

            {/* Main Operational Core */}
            <div className="aspect-[16/10] relative bg-black group/session">
               <Image 
                 src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000&auto=format&fit=crop" 
                 alt="Operational Workspace" 
                 fill 
                 className="object-cover opacity-60 grayscale group-hover/session:grayscale-0 transition-all duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
               
               {/* Floating Participant HUD */}
               <div className="absolute left-8 bottom-8 z-20 space-y-3">
                  {[
                    { name: "Dr. Sarah Chen", role: "Facilitator", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
                    { name: "Marcus Thorne", role: "Regional Lead", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" }
                  ].map((p, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 rounded-2xl bg-[#080B14]/80 backdrop-blur-2xl border border-white/10 shadow-3xl">
                       <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/20">
                          <Image src={p.img} alt={p.name} width={40} height={40} className="object-cover" />
                       </div>
                       <div>
                          <div className="text-[13px] font-bold text-white">{p.name}</div>
                          <div className="text-[9px] font-black text-white/30 uppercase tracking-widest">{p.role}</div>
                       </div>
                       <div className="ml-4 flex items-center gap-1.5">
                          {[1, 2, 3].map(d => <div key={d} className="w-0.5 h-3 bg-brand-gold/40 rounded-full" />)}
                       </div>
                    </div>
                  ))}
               </div>

               {/* AI Intelligence Overlay */}
               <div className="absolute right-8 top-8 z-20 w-72">
                  <div className="p-5 rounded-2xl bg-[#080B14]/80 backdrop-blur-3xl border border-brand-gold/20 shadow-3xl space-y-4">
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                           <Sparkles className="w-4 h-4 text-brand-gold" />
                           <span className="text-[10px] font-black text-brand-gold uppercase tracking-widest">OYEN AI INTELLIGENCE</span>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                     </div>
                     <div className="space-y-3">
                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                           <div className="text-[9px] font-black text-white/20 uppercase tracking-widest mb-1.5">Real-time Insight</div>
                           <div className="text-[12px] text-white/80 leading-relaxed font-medium">Session sentiment shifting positive in breakout EMEA-B. Recommendation: Extend duration by 5m.</div>
                        </div>
                        <div className="flex items-center justify-between px-1">
                           <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Coordination Score</span>
                           <span className="text-[12px] font-bold text-white">94%</span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Central Focal Action */}
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative w-48 h-48 flex items-center justify-center">
                     <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border border-brand-gold/10 border-dashed rounded-full" />
                     <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-4 border border-brand-gold/5 border-dashed rounded-full" />
                     <div className="relative z-10 w-24 h-24 rounded-full bg-brand-gold/10 backdrop-blur-xl border border-brand-gold/30 flex items-center justify-center shadow-[0_0_50px_rgba(245,185,66,0.15)]">
                        <Shield className="w-10 h-10 text-brand-gold/60" />
                     </div>
                  </div>
               </div>

               {/* Lower Control Bar */}
               <div className="absolute bottom-8 right-8 z-20">
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#080B14]/80 backdrop-blur-2xl border border-white/10 shadow-3xl">
                     <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/40 cursor-pointer hover:bg-white/10 transition-all"><Mic className="w-4.5 h-4.5" /></div>
                     <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/40 cursor-pointer hover:bg-white/10 transition-all"><Video className="w-4.5 h-4.5" /></div>
                     <div className="w-px h-6 bg-white/10 mx-1" />
                     <div className="px-4 py-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-widest cursor-pointer hover:bg-red-500 hover:text-white transition-all">Secure Exit</div>
                  </div>
               </div>
            </div>
          </motion.div>
        </section>

        {/* BOTTOM: INTEGRATED ANALYTICS STRIP */}
        <section className="col-span-12 mt-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.8 }}
                className="group relative p-6 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-xl hover:bg-white/[0.03] hover:border-brand-gold/30 transition-all duration-700 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover:opacity-[0.15] transition-opacity">
                   <m.icon className="w-16 h-16 text-brand-gold" />
                </div>
                <div className="relative z-10">
                   <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.25em] mb-4 group-hover:text-brand-gold transition-colors">{m.label}</div>
                   <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white tracking-tighter">{m.val}</span>
                      {i === 0 && <span className="text-[10px] font-bold text-emerald-500 tracking-tight">▲ 1.4%</span>}
                   </div>
                </div>
                {/* Micro trend visual */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
