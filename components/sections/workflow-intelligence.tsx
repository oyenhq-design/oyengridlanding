"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Layers, Users, PlayCircle, Box, LineChart, 
  AlertTriangle, Brain, Cpu, Activity, GitBranch, 
  CheckCircle2, ShieldAlert, Terminal, ShieldCheck, Zap
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
  { top: "8%", left: "12%", size: 2, delay: 0, duration: 6 },
  { top: "22%", left: "88%", size: 2.5, delay: 1, duration: 8 },
  { top: "40%", left: "6%", size: 1.5, delay: 2, duration: 7 },
  { top: "60%", left: "94%", size: 3, delay: 0.5, duration: 9 },
  { top: "82%", left: "28%", size: 2, delay: 1.5, duration: 5.5 },
  { top: "15%", left: "70%", size: 1.5, delay: 2.5, duration: 6.5 },
  { top: "75%", left: "65%", size: 2.5, delay: 3, duration: 7.5 },
  { top: "90%", left: "85%", size: 2, delay: 0.8, duration: 7 },
  { top: "50%", left: "50%", size: 1.5, delay: 1.2, duration: 8.5 },
];

export function WorkflowIntelligence() {
  return (
    <section className="py-24 md:py-28 lg:py-32 min-h-[900px] lg:min-h-[1000px] bg-[#050816] relative overflow-hidden border-b border-white/5 flex flex-col justify-center selection:bg-brand-gold selection:text-black">
      
      {/* ── Background Atmosphere & Cinematic Grid ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft Radial Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-blue-500/[0.015] blur-[160px] rounded-full animate-pulse" style={{ animationDuration: "14s" }} />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-purple-500/[0.012] blur-[140px] rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-[700px] h-[700px] bg-cyan-500/[0.01] blur-[150px] rounded-full" />
        
        {/* Faint Grid Texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "36px 36px" }} />
        
        {/* Vignette effect edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#04050a_98%)] opacity-95" />
      </div>

      {/* Floating Star Dust */}
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
            <span className="text-[9px] font-black text-brand-gold tracking-[0.3em] uppercase">Operational Intelligence Core</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[34px] md:text-[46px] font-extrabold text-white leading-[1.08] tracking-tight mb-6"
          >
            Human coordination powered by <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-500">operational intelligence.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[14px] md:text-[15px] leading-relaxed text-white/55 max-w-[700px] mx-auto font-light"
          >
            OYEN GRID continuously connects programmes, people, workflows, and institutional systems into <br className="hidden md:block" />
            one <span className="text-white/85 font-medium">intelligent operational layer.</span>
          </motion.p>
        </div>

        {/* ── Central Visualization Canvas ── */}
        <div className="relative w-full max-w-[1040px] mx-auto aspect-[1000/500] overflow-visible select-none my-6 lg:my-10">
          
          {/* SVG Overlay: Infinity Loop + Connector Lines */}
          <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full fill-none z-10 overflow-visible">
            <defs>
              {/* Electric Blue to Violet-Blue to Cyan Gradient with Amber Highlights */}
              <linearGradient id="infinity-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" /> {/* Electric Blue */}
                <stop offset="25%" stopColor="#a855f7" /> {/* Violet */}
                <stop offset="45%" stopColor="#06b6d4" /> {/* Cyan */}
                <stop offset="50%" stopColor="#F5B942" /> {/* Amber Crossing highlight */}
                <stop offset="55%" stopColor="#06b6d4" /> {/* Cyan */}
                <stop offset="75%" stopColor="#a855f7" /> {/* Violet */}
                <stop offset="100%" stopColor="#3b82f6" /> {/* Electric Blue */}
              </linearGradient>

              {/* Light trails gradients */}
              <linearGradient id="trail-grad-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(6, 182, 212, 0)" />
                <stop offset="50%" stopColor="rgba(6, 182, 212, 0.7)" />
                <stop offset="100%" stopColor="rgba(6, 182, 212, 1)" />
              </linearGradient>

              <linearGradient id="trail-grad-amber" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(245, 185, 66, 0)" />
                <stop offset="50%" stopColor="rgba(245, 185, 66, 0.7)" />
                <stop offset="100%" stopColor="rgba(245, 185, 66, 1)" />
              </linearGradient>

              <filter id="infinity-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="15" result="blur" />
              </filter>
            </defs>

            {/* Glowing Base Layer (Blurred) */}
            <path 
              d="M 500 250 C 620 100, 850 100, 850 250 C 850 400, 620 400, 500 250 C 380 100, 150 100, 150 250 C 150 400, 380 400, 500 250 Z" 
              stroke="url(#infinity-gradient)" 
              strokeWidth="15" 
              strokeLinecap="round"
              opacity="0.25"
              filter="url(#infinity-glow)"
            />

            {/* Sharp Main Vector Loop */}
            <path 
              d="M 500 250 C 620 100, 850 100, 850 250 C 850 400, 620 400, 500 250 C 380 100, 150 100, 150 250 C 150 400, 380 400, 500 250 Z" 
              stroke="url(#infinity-gradient)" 
              strokeWidth="3.5" 
              strokeLinecap="round"
              opacity="0.8"
            />

            {/* Flowing Light Trail 1 (Cyan/Electric Blue) */}
            <motion.path
              d="M 500 250 C 620 100, 850 100, 850 250 C 850 400, 620 400, 500 250 C 380 100, 150 100, 150 250 C 150 400, 380 400, 500 250 Z" 
              stroke="url(#trail-grad-cyan)" 
              strokeWidth="3" 
              strokeLinecap="round"
              strokeDasharray="160 800"
              animate={{ strokeDashoffset: [800, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Flowing Light Trail 2 (Amber Highlights) */}
            <motion.path
              d="M 500 250 C 620 100, 850 100, 850 250 C 850 400, 620 400, 500 250 C 380 100, 150 100, 150 250 C 150 400, 380 400, 500 250 Z" 
              stroke="url(#trail-grad-amber)" 
              strokeWidth="2.5" 
              strokeLinecap="round"
              strokeDasharray="100 800"
              animate={{ strokeDashoffset: [0, 800] }}
              transition={{
                duration: 7,
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
              <img 
                src="/institutional-leader.png" 
                alt="Institution Operations Leader" 
                className="w-full h-full object-cover rounded-full filter grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-500"
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
              <img 
                src="/institutional-leader-v2.png" 
                alt="AI Coordination Leader" 
                className="w-full h-full object-cover rounded-full filter grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>

          {/* ── CENTER INTERSECTION FLOATING LABEL ── */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-auto"
          >
            <div className="px-5 py-2.5 rounded-full bg-slate-950/75 backdrop-blur-xl border border-white/[0.08] shadow-[0_10px_35px_rgba(0,0,0,0.7),0_0_20px_rgba(255,255,255,0.01)] whitespace-nowrap text-center">
              <span className="text-[10px] md:text-[11px] font-black text-white uppercase tracking-[0.25em]">
                Coordination <span className="text-brand-gold/60 mx-1.5">+</span> Intelligence <span className="text-brand-gold/60 mx-1.5">+</span> Execution
              </span>
            </div>
          </motion.div>

          {/* ── LEFT LOOP LABELS ── */}
          {leftLabels.map((lbl, idx) => (
            <div 
              key={idx}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
              style={{ left: lbl.left, top: lbl.top }}
            >
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.02] border border-white/[0.04] backdrop-blur-md hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300">
                <span className="w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: lbl.color, boxShadow: `0 0 6px ${lbl.color}` }} />
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
                <span className="w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: lbl.color, boxShadow: `0 0 6px ${lbl.color}` }} />
                <span className="text-[9.5px] md:text-[10.5px] font-bold text-white/60 hover:text-white transition-colors tracking-wide">{lbl.label}</span>
              </div>
            </div>
          ))}

          {/* ── DESKTOP ONLY FLOATING CARDS (Absolutely positioned around loop) ── */}
          {/* Card 1: Engagement Analytics (Top Left) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, opacity: 1, borderColor: "rgba(255,255,255,0.12)" }}
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0 }}
            className="hidden lg:block absolute left-[-4%] top-[10%] w-[190px] p-4 rounded-[16px] bg-slate-950/40 border border-white/[0.04] backdrop-blur-xl shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[9px] text-white/30 font-bold uppercase tracking-wider">Engagement</span>
              <span className="text-[8px] text-emerald-400 font-mono">+2.4%</span>
            </div>
            <div className="text-xl font-bold text-white tracking-tight">94.2%</div>
            {/* Tiny SVG sparkline */}
            <svg className="w-full h-5 mt-2 opacity-40" viewBox="0 0 100 20">
              <path d="M 0 15 Q 15 5, 30 10 T 60 4 T 100 12 L 100 20 L 0 20 Z" fill="rgba(245,185,66,0.08)" />
              <path d="M 0 15 Q 15 5, 30 10 T 60 4 T 100 12" fill="none" stroke="#F5B942" strokeWidth="1" />
            </svg>
          </motion.div>

          {/* Card 2: Live Metrics (Mid Left) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, opacity: 1, borderColor: "rgba(255,255,255,0.12)" }}
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="hidden lg:block absolute left-[-8%] top-[50%] w-[190px] p-4 rounded-[16px] bg-slate-950/40 border border-white/[0.04] backdrop-blur-xl shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] text-white/30 font-bold uppercase tracking-wider">Execution Speed</span>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="text-lg font-bold text-white tracking-tight">142 ops/s</div>
            <div className="text-[9px] text-white/35 mt-1 leading-snug">Synced across LMS & CRM integrations.</div>
          </motion.div>

          {/* Card 3: Operational Alerts (Bottom Left) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, opacity: 1, borderColor: "rgba(239,68,68,0.2)" }}
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
            className="hidden lg:block absolute left-[-4%] top-[86%] w-[200px] p-3 rounded-[16px] bg-red-950/5 border border-red-500/10 backdrop-blur-xl shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-1.5 mb-1">
              <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
              <span className="text-[9px] font-black text-red-400 uppercase tracking-wider">Risk Mitigated</span>
            </div>
            <p className="text-[9.5px] text-white/50 leading-relaxed font-light">
              Autonomic sync prevented participant scheduling overlap in Cohort A.
            </p>
          </motion.div>

          {/* Card 4: Workflow Status (Top Right) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, opacity: 1, borderColor: "rgba(255,255,255,0.12)" }}
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut", delay: 0.5 }}
            className="hidden lg:block absolute right-[-4%] top-[10%] w-[190px] p-4 rounded-[16px] bg-slate-950/40 border border-white/[0.04] backdrop-blur-xl shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] text-white/30 font-bold uppercase tracking-wider">Workflow Runs</span>
              <span className="text-[7.5px] text-brand-gold font-mono font-bold">BATCH RUNNING</span>
            </div>
            <div className="space-y-1.5 text-[9px] font-medium text-white/60">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="truncate">Ingest Calendars</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="truncate">Compute Risks</span>
              </div>
            </div>
          </motion.div>

          {/* Card 5: AI Insights (Mid Right) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, opacity: 1, borderColor: "rgba(168,85,247,0.2)" }}
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.5 }}
            className="hidden lg:block absolute right-[-8%] top-[50%] w-[200px] p-4 rounded-[16px] bg-slate-950/40 border border-white/[0.04] backdrop-blur-xl shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-1.5 mb-1.5">
              <Brain className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-[9px] text-purple-400 font-bold uppercase tracking-wider">AI Insight Engine</span>
            </div>
            <div className="text-[9.5px] text-white/60 leading-relaxed font-light">
              “Suggesting Cohort B reschedule due to facilitator holiday conflict.”
            </div>
          </motion.div>

          {/* Card 6: System Health Indicators (Bottom Right) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, opacity: 1, borderColor: "rgba(255,255,255,0.12)" }}
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 7.5, ease: "easeInOut", delay: 2.5 }}
            className="hidden lg:block absolute right-[-4%] top-[86%] w-[190px] p-4 rounded-[16px] bg-slate-950/40 border border-white/[0.04] backdrop-blur-xl shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
              <span className="text-[9px] text-white/30 font-bold uppercase tracking-wider">System Health</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-xl font-bold text-white">99.9%</div>
              <span className="text-[8px] font-mono text-emerald-400 bg-emerald-500/10 px-1 rounded border border-emerald-500/10">STABLE</span>
            </div>
          </motion.div>

        </div>

        {/* ── MOBILE ONLY FLOATING CARDS (Stacked Grid below visual) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-4 mt-8 px-4 w-full">
          {/* Card 1: Engagement */}
          <div className="p-4 rounded-[16px] bg-[#0c1020]/90 border border-white/5 shadow-md">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-white/30 font-bold uppercase tracking-wider">Engagement</span>
              <span className="text-[9px] text-emerald-400">+2.4%</span>
            </div>
            <div className="text-xl font-bold text-white">94.2%</div>
            <p className="text-[10px] text-white/40 mt-1 leading-snug">Continuous drift analytics monitoring active.</p>
          </div>

          {/* Card 2: Live Metrics */}
          <div className="p-4 rounded-[16px] bg-[#0c1020]/90 border border-white/5 shadow-md">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-white/30 font-bold uppercase tracking-wider">Execution Speed</span>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="text-xl font-bold text-white">142 ops/s</div>
            <p className="text-[10px] text-white/40 mt-1 leading-snug">Average latency across core API requests: 0.8ms.</p>
          </div>

          {/* Card 3: AI Insights */}
          <div className="p-4 rounded-[16px] bg-[#0c1020]/90 border border-white/5 shadow-md md:col-span-2">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Brain className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">AI Insight Engine</span>
            </div>
            <p className="text-[10.5px] text-white/60 leading-relaxed font-light">
              “Suggesting automated reschedule for Cohort B due to facilitator calendar conflicts. Execution impact rating: 100% nominal.”
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
