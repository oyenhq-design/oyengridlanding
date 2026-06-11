"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Layers, Users, PlayCircle, Box, LineChart, 
  AlertTriangle, Brain, Cpu, Activity, GitBranch, 
  CheckCircle2, ShieldAlert, ShieldCheck, Zap, Globe,
  MessageSquare, TrendingUp
} from "lucide-react";
import { cn } from "@/lib/utils";

// Data for Left Loop Nodes (Institution Operations)
const leftLabels = [
  { label: "Programmes", left: "20%", top: "18%", color: "#F5B942" },
  { label: "Sessions", left: "8%", top: "48%", color: "#ef4444" },
  { label: "Participants", left: "20%", top: "80%", color: "#10b981" },
  { label: "Resources", left: "38%", top: "86%", color: "#3b82f6" },
];

// Data for Right Loop Nodes (AI Coordination)
const rightLabels = [
  { label: "Analytics", left: "80%", top: "18%", color: "#3b82f6" },
  { label: "Risk Detection", left: "92%", top: "48%", color: "#F5B942" },
  { label: "Automation", left: "80%", top: "80%", color: "#10b981" },
  { label: "Recommendations", left: "62%", top: "86%", color: "#a855f7" },
];

// Background dust particles
const particles = [
  { top: "6%", left: "10%", size: 2, delay: 0, duration: 6 },
  { top: "20%", left: "90%", size: 2.5, delay: 1, duration: 8 },
  { top: "35%", left: "5%", size: 1.5, delay: 2, duration: 7 },
  { top: "65%", left: "95%", size: 3, delay: 0.5, duration: 9 },
  { top: "80%", left: "25%", size: 2, delay: 1.5, duration: 5.5 },
  { top: "12%", left: "75%", size: 1.5, delay: 2.5, duration: 6.5 },
  { top: "70%", left: "60%", size: 2.5, delay: 3, duration: 7.5 },
  { top: "88%", left: "80%", size: 2, delay: 0.8, duration: 7 },
  { top: "45%", left: "50%", size: 1.5, delay: 1.2, duration: 8.5 },
];

export function InstitutionalCommandCenter() {
  return (
    <section className="py-24 md:py-28 lg:py-32 min-h-[900px] lg:min-h-[1050px] bg-[#050816] relative overflow-hidden border-b border-white/5 flex flex-col justify-between selection:bg-brand-gold selection:text-black">
      
      {/* ── Background Atmosphere & Cinematic Grid ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Faint Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1250px] h-[650px] bg-blue-500/[0.015] blur-[160px] rounded-full animate-pulse" style={{ animationDuration: "14s" }} />
        <div className="absolute top-1/3 left-1/4 w-[650px] h-[650px] bg-purple-500/[0.012] blur-[140px] rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-[750px] h-[750px] bg-cyan-500/[0.01] blur-[150px] rounded-full" />
        
        {/* Grid Texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "36px 36px" }} />
        
        {/* Vignette Edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#04050a_98%)] opacity-95" />
      </div>

      {/* Floating Particles */}
      {particles.map((p, idx) => (
        <motion.div
          key={idx}
          className="absolute rounded-full bg-white/20 pointer-events-none z-10"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      <div className="max-w-[1440px] mx-auto px-5 w-full relative z-10 flex flex-col justify-between h-full">
        
        {/* ── Section Title Centered ── */}
        <div className="max-w-[850px] mx-auto mb-16 lg:mb-20 text-center">
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
            className="text-[34px] md:text-[46px] font-extrabold text-white leading-[1.08] tracking-tight mb-6"
          >
            Where institutional coordination <br className="hidden md:block" />
            becomes <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-500 drop-shadow-[0_0_15px_rgba(245,185,66,0.15)]">intelligent.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[14px] md:text-[15px] leading-relaxed text-white/55 max-w-[700px] mx-auto font-light mb-6"
          >
            OYEN GRID unifies programmes, people, workflows, and operational systems into one continuously connected execution layer.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4 text-[9.5px] font-mono text-white/30 tracking-widest uppercase"
          >
            <span>Continuous</span>
            <span className="w-1 h-1 rounded-full bg-brand-gold/40" />
            <span>Intelligent</span>
            <span className="w-1 h-1 rounded-full bg-brand-gold/40" />
            <span>Autonomous</span>
          </motion.div>
        </div>

        {/* ── Central Visualization Canvas ── */}
        <div className="relative w-full max-w-[1040px] mx-auto aspect-[1000/500] overflow-visible select-none my-6 lg:my-10">
          
          {/* SVG Overlay: Infinity Loop + Connector Lines */}
          <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full fill-none z-10 overflow-visible">
            <defs>
              {/* Electric Blue to Violet-Blue to Cyan Gradient with Amber Highlights */}
              <linearGradient id="infinity-gradient-cc" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" /> {/* Electric Blue */}
                <stop offset="25%" stopColor="#a855f7" /> {/* Violet */}
                <stop offset="45%" stopColor="#06b6d4" /> {/* Cyan */}
                <stop offset="50%" stopColor="#F5B942" /> {/* Amber Crossing highlight */}
                <stop offset="55%" stopColor="#06b6d4" /> {/* Cyan */}
                <stop offset="75%" stopColor="#a855f7" /> {/* Violet */}
                <stop offset="100%" stopColor="#3b82f6" /> {/* Electric Blue */}
              </linearGradient>

              {/* Light trails gradients */}
              <linearGradient id="trail-grad-cyan-cc" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(6, 182, 212, 0)" />
                <stop offset="50%" stopColor="rgba(6, 182, 212, 0.7)" />
                <stop offset="100%" stopColor="rgba(6, 182, 212, 1)" />
              </linearGradient>

              <linearGradient id="trail-grad-amber-cc" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(245, 185, 66, 0)" />
                <stop offset="50%" stopColor="rgba(245, 185, 66, 0.7)" />
                <stop offset="100%" stopColor="rgba(245, 185, 66, 1)" />
              </linearGradient>

              <filter id="infinity-glow-cc" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="15" result="blur" />
              </filter>
            </defs>

            {/* Glowing Base Layer (Blurred) */}
            <path 
              d="M 500 250 C 620 100, 850 100, 850 250 C 850 400, 620 400, 500 250 C 380 100, 150 100, 150 250 C 150 400, 380 400, 500 250 Z" 
              stroke="url(#infinity-gradient-cc)" 
              strokeWidth="15" 
              strokeLinecap="round"
              opacity="0.25"
              filter="url(#infinity-glow-cc)"
            />

            {/* Sharp Main Vector Loop */}
            <path 
              d="M 500 250 C 620 100, 850 100, 850 250 C 850 400, 620 400, 500 250 C 380 100, 150 100, 150 250 C 150 400, 380 400, 500 250 Z" 
              stroke="url(#infinity-gradient-cc)" 
              strokeWidth="3.5" 
              strokeLinecap="round"
              opacity="0.8"
            />

            {/* Flowing Light Trail 1 (Cyan/Electric Blue) */}
            <motion.path
              d="M 500 250 C 620 100, 850 100, 850 250 C 850 400, 620 400, 500 250 C 380 100, 150 100, 150 250 C 150 400, 380 400, 500 250 Z" 
              stroke="url(#trail-grad-cyan-cc)" 
              strokeWidth="3" 
              strokeLinecap="round"
              strokeDasharray="160 800"
              animate={{ strokeDashoffset: [800, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Flowing Light Trail 2 (Amber Highlights) */}
            <motion.path
              d="M 500 250 C 620 100, 850 100, 850 250 C 850 400, 620 400, 500 250 C 380 100, 150 100, 150 250 C 150 400, 380 400, 500 250 Z" 
              stroke="url(#trail-grad-amber-cc)" 
              strokeWidth="2.5" 
              strokeLinecap="round"
              strokeDasharray="100 800"
              animate={{ strokeDashoffset: [0, 800] }}
              transition={{
                duration: 7.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* ── Left Lobe Connector Lines & Dots ── */}
            {/* Programmes: (200, 90) to (250, 145) */}
            <line x1="200" y1="105" x2="250" y2="145" stroke="rgba(245,185,66,0.25)" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="250" cy="145" r="3.5" fill="#F5B942" className="animate-pulse" />

            {/* Sessions: (80, 240) to (150, 250) */}
            <line x1="100" y1="240" x2="150" y2="250" stroke="rgba(239,68,68,0.25)" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="150" cy="250" r="3.5" fill="#ef4444" className="animate-pulse" />

            {/* Participants: (200, 400) to (250, 355) */}
            <line x1="200" y1="385" x2="250" y2="355" stroke="rgba(16,185,129,0.25)" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="250" cy="355" r="3.5" fill="#10b981" className="animate-pulse" />

            {/* Resources: (380, 430) to (390, 320) */}
            <line x1="380" y1="415" x2="390" y2="320" stroke="rgba(59,130,246,0.25)" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="390" cy="320" r="3.5" fill="#3b82f6" className="animate-pulse" />


            {/* ── Right Lobe Connector Lines & Dots ── */}
            {/* Analytics: (800, 90) to (750, 145) */}
            <line x1="800" y1="105" x2="750" y2="145" stroke="rgba(59,130,246,0.25)" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="750" cy="145" r="3.5" fill="#3b82f6" className="animate-pulse" />

            {/* Risk Detection: (920, 240) to (850, 250) */}
            <line x1="900" y1="240" x2="850" y2="250" stroke="rgba(245,185,66,0.25)" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="850" cy="250" r="3.5" fill="#F5B942" className="animate-pulse" />

            {/* Automation: (800, 400) to (750, 355) */}
            <line x1="800" y1="385" x2="750" y2="355" stroke="rgba(16,185,129,0.25)" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="750" cy="355" r="3.5" fill="#10b981" className="animate-pulse" />

            {/* Recommendations: (620, 430) to (610, 320) */}
            <line x1="620" y1="415" x2="610" y2="320" stroke="rgba(168,85,247,0.25)" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="610" cy="320" r="3.5" fill="#a855f7" className="animate-pulse" />
          </svg>

          {/* ── TOP LABELS ON THE LOOPS ── */}
          <div className="absolute top-[18%] left-[32.5%] -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-20">
            <span className="text-[10px] md:text-[11.5px] font-black text-white/40 tracking-[0.25em] uppercase block mb-1">Institution Operations</span>
            <span className="text-[7.5px] font-mono text-brand-gold/50 uppercase tracking-[0.18em] block">Operational Core</span>
          </div>

          <div className="absolute top-[18%] left-[67.5%] -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-20">
            <span className="text-[10px] md:text-[11.5px] font-black text-white/40 tracking-[0.25em] uppercase block mb-1">AI Coordination</span>
            <span className="text-[7.5px] font-mono text-cyan-400/50 uppercase tracking-[0.18em] block">Intelligent Sync</span>
          </div>

          {/* ── LEFT EMBEDDED PORTRAIT ── */}
          <div className="absolute left-[32.5%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border border-white/10 p-1 bg-[#050816]/90 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute inset-0 rounded-full border border-brand-gold/30 animate-pulse pointer-events-none" />
              <Image 
                src="/institutional-leader.png" 
                alt="Institution Operations Leader" 
                fill
                className="object-cover rounded-full filter grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>

          {/* ── RIGHT EMBEDDED PORTRAIT ── */}
          <div className="absolute left-[67.5%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-20">
            {/* Orbit rings behind right portrait */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                className="absolute w-[130%] h-[130%] border border-dashed border-cyan-500/20 rounded-full" 
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
                className="absolute w-[165%] h-[165%] border border-dashed border-purple-500/10 rounded-full" 
              />
            </div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border border-white/10 p-1 bg-[#050816]/90 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-pulse pointer-events-none" />
              <Image 
                src="/institutional-leader-v2.png" 
                alt="AI Coordination Leader" 
                fill
                className="object-cover rounded-full filter grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>

          {/* ── CENTER CORE CARD (The Brain) ── */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-auto">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(245, 185, 66, 0.15)",
                  "0 0 35px rgba(245, 185, 66, 0.35)",
                  "0 0 20px rgba(245, 185, 66, 0.15)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-[190px] sm:w-[220px] p-4 rounded-[20px] bg-slate-950/85 backdrop-blur-xl border border-brand-gold/25 flex flex-col items-center justify-center text-center shadow-2xl"
            >
              {/* Glowing core indicator */}
              <div className="relative w-8 h-8 flex items-center justify-center mb-2">
                <div className="absolute inset-0 bg-brand-gold/15 rounded-full animate-ping pointer-events-none" />
                <div className="w-6 h-6 rounded-full bg-brand-gold/20 border border-brand-gold/45 flex items-center justify-center">
                  <Zap className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
                </div>
              </div>

              <h4 className="text-[12.5px] font-black text-white tracking-tight mb-1">OYEN GRID Intelligence Core</h4>
              <span className="text-[7.5px] font-black text-brand-gold/80 tracking-[0.25em] uppercase block mb-2">Orchestrate. Connect. Elevate.</span>
              
              {/* Operations status readout */}
              <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/15 p-0.5 px-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[7px] font-mono text-emerald-400 uppercase tracking-widest font-black">Sync Engine Active</span>
              </div>
            </motion.div>
          </div>

          {/* ── LEFT LOOP LABELS ── */}
          {leftLabels.map((lbl, idx) => (
            <div 
              key={idx}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
              style={{ left: lbl.left, top: lbl.top }}
            >
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.02] border border-white/[0.04] backdrop-blur-md hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: lbl.color, boxShadow: `0 0 6px ${lbl.color}` }} />
                <span className="text-[9.5px] md:text-[10.5px] font-bold text-white/60 hover:text-white transition-colors tracking-wide">{lbl.label}</span>
              </div>
            </div>
          ))}

          {/* ── RIGHT LOOP LABELS ── */}
          {rightLabels.map((lbl, idx) => (
            <div 
              key={idx}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
              style={{ left: lbl.left, top: lbl.top }}
            >
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.02] border border-white/[0.04] backdrop-blur-md hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: lbl.color, boxShadow: `0 0 6px ${lbl.color}` }} />
                <span className="text-[9.5px] md:text-[10.5px] font-bold text-white/60 hover:text-white transition-colors tracking-wide">{lbl.label}</span>
              </div>
            </div>
          ))}

          {/* ── DESKTOP ONLY FLOATING CARDS (Absolutely positioned around loop) ── */}
          {/* Card 1: Engagement Score (Top Left) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, opacity: 1, borderColor: "rgba(255,255,255,0.12)" }}
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0 }}
            className="hidden lg:block absolute left-[-4%] top-[8%] w-[190px] p-4 rounded-[16px] bg-slate-950/40 border border-white/[0.04] backdrop-blur-xl shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[9px] text-white/30 font-bold uppercase tracking-wider">Engagement Score</span>
              <span className="text-[8px] text-emerald-400 font-mono font-bold">+12% growth</span>
            </div>
            <div className="text-2xl font-bold text-white tracking-tight">92%</div>
            {/* Sparkline chart */}
            <svg className="w-full h-5 mt-2 opacity-40" viewBox="0 0 100 20">
              <path d="M 0 16 Q 20 8, 40 12 T 80 4 T 100 8 L 100 20 L 0 20 Z" fill="rgba(245,185,66,0.08)" />
              <path d="M 0 16 Q 20 8, 40 12 T 80 4 T 100 8" fill="none" stroke="#F5B942" strokeWidth="1" />
            </svg>
          </motion.div>

          {/* Card 2: AI Insight (Top Right) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, opacity: 1, borderColor: "rgba(168,85,247,0.2)" }}
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut", delay: 0.5 }}
            className="hidden lg:block absolute right-[-4%] top-[8%] w-[210px] p-4 rounded-[16px] bg-slate-950/40 border border-white/[0.04] backdrop-blur-xl shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-1.5 mb-1.5">
              <Brain className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-[9px] text-purple-400 font-bold uppercase tracking-wider">AI Insight</span>
            </div>
            <p className="text-[9.5px] text-white/70 leading-relaxed font-light">
              “Engagement is trending up in 5 cohorts.”
            </p>
          </motion.div>

          {/* Card 3: Live Workflow Status (Middle Left) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, opacity: 1, borderColor: "rgba(255,255,255,0.12)" }}
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1 }}
            className="hidden lg:block absolute left-[-10%] top-[45%] w-[210px] p-4 rounded-[16px] bg-slate-950/40 border border-white/[0.04] backdrop-blur-xl shadow-xl transition-all duration-300"
          >
            <span className="text-[9px] text-white/30 font-bold uppercase tracking-wider block mb-2">Live Workflow Status</span>
            <div className="space-y-2 text-[9.5px] text-white/60">
              <div className="flex items-center justify-between">
                <span className="truncate">Programme Planning</span>
                <span className="text-[8px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/10 font-bold uppercase shrink-0">On Track</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="truncate">Cohort Onboarding</span>
                <span className="text-[8px] font-mono text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/10 font-bold uppercase shrink-0">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="truncate">Reporting & Insights</span>
                <span className="text-[8px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/10 font-bold uppercase shrink-0">On Track</span>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Risk Alerts (Middle Right) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, opacity: 1, borderColor: "rgba(255,255,255,0.12)" }}
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 5.8, ease: "easeInOut", delay: 1.5 }}
            className="hidden lg:block absolute right-[-6%] top-[48%] w-[200px] p-4 rounded-[16px] bg-slate-950/40 border border-white/[0.04] backdrop-blur-xl shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-1.5 mb-2.5">
              <ShieldAlert className="w-3.5 h-3.5 text-brand-gold" />
              <span className="text-[9px] text-white/30 font-bold uppercase tracking-wider">Risk Alerts</span>
            </div>
            
            <div className="space-y-2 text-[9.5px]">
              {/* Low Risk */}
              <div>
                <div className="flex justify-between text-white/50 text-[8px] font-mono mb-0.5">
                  <span>LOW RISK</span>
                  <span>82%</span>
                </div>
                <div className="h-1.5 w-full bg-white/[0.03] rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "82%" }} />
                </div>
              </div>
              {/* Medium Risk */}
              <div>
                <div className="flex justify-between text-white/50 text-[8px] font-mono mb-0.5">
                  <span>MEDIUM RISK</span>
                  <span>15%</span>
                </div>
                <div className="h-1.5 w-full bg-white/[0.03] rounded-full overflow-hidden">
                  <div className="h-full bg-brand-gold rounded-full" style={{ width: "15%" }} />
                </div>
              </div>
              {/* High Risk */}
              <div>
                <div className="flex justify-between text-white/50 text-[8px] font-mono mb-0.5">
                  <span>HIGH RISK</span>
                  <span>3%</span>
                </div>
                <div className="h-1.5 w-full bg-white/[0.03] rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 rounded-full" style={{ width: "3%" }} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Operational Metrics (Bottom Center) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.85, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, opacity: 1, borderColor: "rgba(255,255,255,0.12)" }}
            className="hidden lg:block absolute left-[50%] top-[102%] -translate-x-1/2 w-[700px] p-4.5 rounded-[18px] bg-slate-950/40 border border-white/[0.04] backdrop-blur-xl shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3.5 pb-2 border-b border-white/[0.04]">
              <span className="text-[9.5px] text-white/30 font-bold uppercase tracking-wider">Continuous Telemetry Readout</span>
              <span className="text-[8px] font-mono text-brand-gold/60 uppercase tracking-widest">Global Aggregate</span>
            </div>
            
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-[20px] font-bold text-white tracking-tight leading-none mb-1">1,248</div>
                <div className="text-[8.5px] text-white/30 font-black uppercase tracking-wider">Active Programmes</div>
              </div>
              <div>
                <div className="text-[20px] font-bold text-white tracking-tight leading-none mb-1">47,293</div>
                <div className="text-[8.5px] text-white/30 font-black uppercase tracking-wider">Participants</div>
              </div>
              <div>
                <div className="text-[20px] font-bold text-white tracking-tight leading-none mb-1">8.7M+</div>
                <div className="text-[8.5px] text-white/30 font-black uppercase tracking-wider">Interactions</div>
              </div>
              <div>
                <div className="text-[20px] font-bold text-white tracking-tight leading-none mb-1">140+</div>
                <div className="text-[8.5px] text-white/30 font-black uppercase tracking-wider">Countries</div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── MOBILE ONLY FLOATING CARDS & METRICS (Stacked Grid below loop) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-4 mt-12 px-4 w-full">
          {/* Card 1: Engagement */}
          <div className="p-4 rounded-[16px] bg-[#0c1020]/90 border border-white/5 shadow-md">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] text-white/30 font-bold uppercase tracking-wider">Engagement Score</span>
              <span className="text-[9px] text-emerald-400 font-bold">+12% growth</span>
            </div>
            <div className="text-2xl font-bold text-white">92%</div>
            <p className="text-[10px] text-white/40 mt-1 leading-snug">Autonomous engagement telemetry active.</p>
          </div>

          {/* Card 2: AI Insight */}
          <div className="p-4 rounded-[16px] bg-[#0c1020]/90 border border-white/5 shadow-md">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Brain className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">AI Insight</span>
            </div>
            <p className="text-[11px] text-white/70 leading-relaxed font-light">
              “Engagement is trending up in 5 cohorts.”
            </p>
          </div>

          {/* Card 3: Live Workflow Status */}
          <div className="p-4 rounded-[16px] bg-[#0c1020]/90 border border-white/5 shadow-md">
            <span className="text-[10px] text-white/30 font-bold uppercase tracking-wider block mb-2">Live Workflow Status</span>
            <div className="space-y-1.5 text-[10px] text-white/60">
              <div className="flex justify-between">
                <span>Programme Planning</span>
                <span className="text-emerald-400 font-bold">ON TRACK</span>
              </div>
              <div className="flex justify-between">
                <span>Cohort Onboarding</span>
                <span className="text-cyan-400 font-bold">ACTIVE</span>
              </div>
              <div className="flex justify-between">
                <span>Reporting & Insights</span>
                <span className="text-emerald-400 font-bold">ON TRACK</span>
              </div>
            </div>
          </div>

          {/* Card 5: Risk Alerts */}
          <div className="p-4 rounded-[16px] bg-[#0c1020]/90 border border-white/5 shadow-md">
            <span className="text-[10px] text-white/30 font-bold uppercase tracking-wider block mb-2">Risk Alerts</span>
            <div className="flex justify-between text-[10px] text-white/50">
              <span>Low Risk: <strong className="text-emerald-400">82%</strong></span>
              <span>Medium: <strong className="text-brand-gold">15%</strong></span>
              <span>High: <strong className="text-red-500">3%</strong></span>
            </div>
            <div className="h-1.5 w-full bg-white/[0.03] rounded-full overflow-hidden mt-2 flex">
              <div className="h-full bg-emerald-500" style={{ width: "82%" }} />
              <div className="h-full bg-brand-gold" style={{ width: "15%" }} />
              <div className="h-full bg-red-500" style={{ width: "3%" }} />
            </div>
          </div>

          {/* Card 4: Operational Metrics (Full Width on mobile) */}
          <div className="p-4.5 rounded-[16px] bg-[#0c1020]/90 border border-white/5 shadow-md md:col-span-2">
            <span className="text-[10px] text-white/30 font-bold uppercase tracking-wider block mb-3 border-b border-white/5 pb-1">Operational Metrics</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-white">1,248</div>
                <div className="text-[8px] text-white/30 font-black uppercase">Active Programmes</div>
              </div>
              <div>
                <div className="text-lg font-bold text-white">47,293</div>
                <div className="text-[8px] text-white/30 font-black uppercase">Participants</div>
              </div>
              <div>
                <div className="text-lg font-bold text-white">8.7M+</div>
                <div className="text-[8px] text-white/30 font-black uppercase">Interactions</div>
              </div>
              <div>
                <div className="text-lg font-bold text-white">140+</div>
                <div className="text-[8px] text-white/30 font-black uppercase">Countries</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM OPERATIONAL STATUS BAR ── */}
        <div className="mt-20 lg:mt-28 w-full px-4">
          <div className="max-w-[960px] mx-auto py-3 px-6 rounded-full bg-slate-950/40 border border-white/[0.04] backdrop-blur-md flex flex-wrap items-center justify-between gap-y-2 gap-x-6 shadow-[0_5px_25px_rgba(0,0,0,0.5),inset_0_0_15px_rgba(255,255,255,0.01)] text-[9.5px] font-mono tracking-wider text-white/55">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-white/70">Intelligence Engine Active</span>
            </div>
            
            <div className="hidden sm:block w-[1px] h-3 bg-white/10" />
            
            <div className="flex items-center gap-1.5">
              <GitBranch className="w-3.5 h-3.5 text-brand-gold/60" />
              <span>Adaptive Workflows</span>
            </div>

            <div className="hidden sm:block w-[1px] h-3 bg-white/10" />

            <div className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-purple-400/60 animate-pulse" />
              <span>Real-time Insights</span>
            </div>

            <div className="hidden sm:block w-[1px] h-3 bg-white/10" />

            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400/60" />
              <span>Secure & Compliant</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
