"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, Layers, Users, LineChart, Box, ShieldCheck, GitBranch, Activity 
} from "lucide-react";

export function InstitutionalCommandCenter() {
  return (
    <section className="py-24 md:py-28 lg:py-32 bg-[#050816] theme-navy-section relative overflow-hidden border-b border-white/5 flex flex-col justify-between selection:bg-brand-gold selection:text-black">
      
      {/* Background Atmosphere & Cinematic Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-brand-gold/[0.02] blur-[150px] rounded-full animate-pulse" style={{ animationDuration: "10s" }} />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-500/[0.01] blur-[120px] rounded-full" />
        
        {/* Grid Texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "36px 36px" }} />
        
        {/* Vignette Edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,#04050a_100%)] opacity-95" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 w-full relative z-10 flex flex-col items-center">
        
        {/* SECTION HEADER */}
        <div className="max-w-[800px] mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/[0.04] border border-brand-gold/15 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping" />
            <span className="text-[9px] font-black text-brand-gold tracking-[0.3em] uppercase">OPERATIONAL INTELLIGENCE LAYER</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[34px] md:text-[46px] font-extrabold text-white leading-[1.1] tracking-tight mb-6"
          >
            Where institutional coordination <br className="hidden md:block" />
            becomes <span className="text-brand-gold drop-shadow-[0_0_15px_rgba(226,184,76,0.2)]">intelligent.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[14px] md:text-[15px] leading-relaxed text-white/60 max-w-[660px] mx-auto font-light"
          >
            OYEN GRID connects programmes, participants, resources and analytics into one unified operational intelligence layer.
          </motion.p>
        </div>

        {/* CORE VISUALIZATION */}
        <div className="relative w-full max-w-[950px] aspect-[1000/600] md:aspect-[1000/500] my-8 flex items-center justify-center">
          
          {/* Connection Lines (Desktop SVG) */}
          <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full fill-none z-0 hidden md:block overflow-visible">
            <defs>
              <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E2B84C" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#E2B84C" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#E2B84C" stopOpacity="0.1" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
              </filter>
            </defs>

            {/* Top Node to Core */}
            <path d="M 500 90 L 500 200" stroke="url(#line-grad)" strokeWidth="1.5" />
            <path d="M 500 90 L 500 200" stroke="#E2B84C" strokeWidth="3" opacity="0.3" filter="url(#glow)" />
            
            {/* Bottom Node to Core */}
            <path d="M 500 410 L 500 300" stroke="url(#line-grad)" strokeWidth="1.5" />
            <path d="M 500 410 L 500 300" stroke="#E2B84C" strokeWidth="3" opacity="0.3" filter="url(#glow)" />

            {/* Left Node to Core */}
            <path d="M 180 250 L 380 250" stroke="url(#line-grad)" strokeWidth="1.5" />
            <path d="M 180 250 L 380 250" stroke="#E2B84C" strokeWidth="3" opacity="0.3" filter="url(#glow)" />

            {/* Right Node to Core */}
            <path d="M 820 250 L 620 250" stroke="url(#line-grad)" strokeWidth="1.5" />
            <path d="M 820 250 L 620 250" stroke="#E2B84C" strokeWidth="3" opacity="0.3" filter="url(#glow)" />

            {/* Flowing data pulses */}
            <motion.circle r="3" fill="#E2B84C" filter="url(#glow)">
              <animateMotion dur="4s" repeatCount="indefinite" path="M 500 90 L 500 200" />
            </motion.circle>
            <motion.circle r="3" fill="#E2B84C" filter="url(#glow)">
              <animateMotion dur="4.5s" repeatCount="indefinite" path="M 500 410 L 500 300" />
            </motion.circle>
            <motion.circle r="3" fill="#E2B84C" filter="url(#glow)">
              <animateMotion dur="5s" repeatCount="indefinite" path="M 180 250 L 380 250" />
            </motion.circle>
            <motion.circle r="3" fill="#E2B84C" filter="url(#glow)">
              <animateMotion dur="4.2s" repeatCount="indefinite" path="M 820 250 L 620 250" />
            </motion.circle>
          </svg>

          {/* Center Element: OYEN GRID Intelligence Core */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div
              animate={{
                y: [0, -6, 0],
                boxShadow: [
                  "0 0 25px rgba(226, 184, 76, 0.15)",
                  "0 0 45px rgba(226, 184, 76, 0.3)",
                  "0 0 25px rgba(226, 184, 76, 0.15)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-[250px] p-6 rounded-2xl bg-[#090910]/90 border border-brand-gold/30 backdrop-blur-xl flex flex-col items-center text-center relative"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-brand-gold/[0.03] to-transparent pointer-events-none" />
              
              {/* Gold pulsing core icon */}
              <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/35 flex items-center justify-center mb-3">
                <Zap className="w-4 h-4 text-brand-gold animate-pulse" />
              </div>

              <h3 className="text-[13.5px] font-black text-white tracking-tight mb-1">OYEN GRID Intelligence Core</h3>
              <p className="text-[9px] font-semibold text-white/40 uppercase tracking-[0.2em] mb-3">Operational Intelligence Engine</p>
              
              <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/15 p-0.5 px-2.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[7.5px] font-mono text-emerald-400 uppercase tracking-widest font-bold">Active</span>
              </div>
            </motion.div>
          </div>

          {/* Connected Pillars - Absolute layout on Desktop, Grid on Mobile */}
          <div className="absolute inset-0 w-full h-full pointer-events-none md:block hidden">
            
            {/* TOP NODE: Programmes */}
            <div className="absolute left-1/2 top-[5%] -translate-x-1/2 pointer-events-auto">
              <motion.div 
                whileHover={{ scale: 1.02, borderColor: "rgba(226, 184, 76, 0.3)" }}
                className="w-[240px] p-4 rounded-xl bg-[#07070a]/70 border border-white/5 backdrop-blur-md flex gap-3.5 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-[12px] font-bold text-white mb-0.5">Programmes</h4>
                  <p className="text-[10px] text-white/50 leading-relaxed">Manage cohorts, schedules, delivery and programme performance.</p>
                </div>
              </motion.div>
            </div>

            {/* LEFT NODE: Participants */}
            <div className="absolute left-[2%] top-1/2 -translate-y-1/2 pointer-events-auto">
              <motion.div 
                whileHover={{ scale: 1.02, borderColor: "rgba(226, 184, 76, 0.3)" }}
                className="w-[240px] p-4 rounded-xl bg-[#07070a]/70 border border-white/5 backdrop-blur-md flex gap-3.5 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-[12px] font-bold text-white mb-0.5">Participants</h4>
                  <p className="text-[10px] text-white/50 leading-relaxed">Track engagement, attendance, progress and outcomes.</p>
                </div>
              </motion.div>
            </div>

            {/* RIGHT NODE: Analytics */}
            <div className="absolute right-[2%] top-1/2 -translate-y-1/2 pointer-events-auto">
              <motion.div 
                whileHover={{ scale: 1.02, borderColor: "rgba(226, 184, 76, 0.3)" }}
                className="w-[240px] p-4 rounded-xl bg-[#07070a]/70 border border-white/5 backdrop-blur-md flex gap-3.5 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0">
                  <LineChart className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-[12px] font-bold text-white mb-0.5">Analytics</h4>
                  <p className="text-[10px] text-white/50 leading-relaxed">Measure performance through reports, intelligence and operational insights.</p>
                </div>
              </motion.div>
            </div>

            {/* BOTTOM NODE: Resources */}
            <div className="absolute left-1/2 bottom-[5%] -translate-x-1/2 pointer-events-auto">
              <motion.div 
                whileHover={{ scale: 1.02, borderColor: "rgba(226, 184, 76, 0.3)" }}
                className="w-[240px] p-4 rounded-xl bg-[#07070a]/70 border border-white/5 backdrop-blur-md flex gap-3.5 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0">
                  <Box className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-[12px] font-bold text-white mb-0.5">Resources</h4>
                  <p className="text-[10px] text-white/50 leading-relaxed">Centralize content, learning materials and operational assets.</p>
                </div>
              </motion.div>
            </div>

          </div>

          {/* Mobile Grid Layout for Nodes (visible on md and smaller) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-[300px] md:hidden z-15">
            {[
              { t: "Programmes", icon: <Layers className="w-4 h-4 text-brand-gold" />, d: "Manage cohorts, schedules, delivery and programme performance." },
              { t: "Participants", icon: <Users className="w-4 h-4 text-brand-gold" />, d: "Track engagement, attendance, progress and outcomes." },
              { t: "Analytics", icon: <LineChart className="w-4 h-4 text-brand-gold" />, d: "Measure performance through reports, intelligence and operational insights." },
              { t: "Resources", icon: <Box className="w-4 h-4 text-brand-gold" />, d: "Centralize content, learning materials and operational assets." }
            ].map((node, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#07070a]/80 border border-white/5 flex gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0">
                  {node.icon}
                </div>
                <div>
                  <h4 className="text-[12px] font-bold text-white mb-0.5">{node.t}</h4>
                  <p className="text-[10px] text-white/50 leading-relaxed">{node.d}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* STATISTICS ROW */}
        <div className="w-full max-w-[960px] mt-16 md:mt-24">
          <div className="rounded-2xl border border-white/5 bg-slate-950/40 backdrop-blur-md p-6 md:p-8 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 items-center">
              
              <div className="text-center flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-1">1,248+</span>
                <span className="text-[9px] md:text-[10px] font-black uppercase text-white/40 tracking-wider">Programmes Managed</span>
              </div>
              
              <div className="hidden md:block w-px h-10 bg-gradient-to-b from-transparent via-brand-gold/20 to-transparent self-center justify-self-center" />
              
              <div className="text-center flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-1">47,293+</span>
                <span className="text-[9px] md:text-[10px] font-black uppercase text-white/40 tracking-wider">Participants Coordinated</span>
              </div>
              
              <div className="hidden md:block w-px h-10 bg-gradient-to-b from-transparent via-brand-gold/20 to-transparent self-center justify-self-center" />
              
              <div className="text-center flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-1">8.7M+</span>
                <span className="text-[9px] md:text-[10px] font-black uppercase text-white/40 tracking-wider">Operational Interactions</span>
              </div>
              
              <div className="hidden md:block w-px h-10 bg-gradient-to-b from-transparent via-brand-gold/20 to-transparent self-center justify-self-center" />
              
              <div className="text-center flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-1">140+</span>
                <span className="text-[9px] md:text-[10px] font-black uppercase text-white/40 tracking-wider">Organizations Supported</span>
              </div>
              
            </div>
          </div>
        </div>

        {/* STATUS BAR */}
        <div className="mt-8 w-full max-w-[800px] flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 px-6 py-2.5 rounded-full bg-slate-950/20 border border-white/5 text-[9.5px] font-mono tracking-wider text-white/45 shadow-[inset_0_0_15px_rgba(255,255,255,0.01)]">
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-brand-gold" />
              <span>Intelligence Engine Active</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-brand-gold" />
              <span>Adaptive Workflows</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-brand-gold" />
              <span>Real-Time Insights</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-brand-gold" />
              <span>Secure & Compliant</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
