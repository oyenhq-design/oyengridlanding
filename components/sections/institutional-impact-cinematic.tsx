"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { 
  Quote, Star, Fingerprint, Activity, 
  Zap, TrendingUp, ShieldCheck, 
  ChevronRight, ArrowUpRight
} from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const metrics = [
  { 
    val: "+340%", 
    label: "Operational Efficiency", 
    detail: "Net Institutional Velocity",
    icon: Zap,
    color: "brand-gold",
    waveform: "M0 25 Q15 5 30 25 T60 25 T90 10 T120 25"
  },
  { 
    val: "-82%", 
    label: "Manual Coordination", 
    detail: "Resource Friction Reduction",
    icon: Activity,
    color: "emerald-500",
    waveform: "M0 10 Q20 30 40 10 T80 10 T120 20"
  },
  { 
    val: "-64%", 
    label: "Reporting Overhead", 
    detail: "Automated Governance Flow",
    icon: TrendingUp,
    color: "blue-500",
    waveform: "M0 30 Q30 10 60 30 T120 15"
  },
  { 
    val: "99.9%", 
    label: "System Reliability", 
    detail: "Uptime Performance Verified",
    icon: ShieldCheck,
    color: "brand-gold",
    waveform: "M0 20 L20 20 L25 10 L35 30 L45 20 L120 20"
  }
];

export function InstitutionalImpactCinematic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section 
      ref={containerRef}
      className="py-32 bg-[#05070B] relative overflow-hidden"
    >
      {/* 1. CINEMATIC BACKGROUND SYSTEM */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Large Institutional Typography Layer */}
        <motion.div 
          style={{ y: textY }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] leading-none select-none"
        >
          IMPACT
        </motion.div>

        {/* Operational Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        
        {/* Ambient Cinematic Lighting */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(245,185,66,0.05),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.03),transparent_50%)]" />
        
        {/* Network Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L90 90 M90 10 L10 90' stroke='white' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`, backgroundSize: '200px 200px' }} />
        
        {/* Subtle Data Movement Particles (Simulation via CSS) */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-brand-gold rounded-full blur-[1px] animate-pulse" />
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-blue-500 rounded-full blur-[1px] animate-pulse delay-700" />
          <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-white rounded-full blur-[1px] animate-pulse delay-1000" />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-[0.38fr_0.62fr] gap-16 lg:gap-24 items-start">
          
          {/* LEFT SIDE: PREMIUM TESTIMONIAL PANEL */}
          <div className="relative">
            {/* Background UI Layers for Depth */}
            <div className="absolute -inset-8 opacity-40 pointer-events-none">
              <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-brand-gold/10 rounded-tr-[40px]" />
              <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-brand-gold/10 rounded-bl-[40px]" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative p-10 lg:p-12 rounded-[32px] bg-[#0A0D16]/60 backdrop-blur-3xl border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-700 hover:border-brand-gold/20 hover:shadow-brand-gold/5">
                
                {/* Gold Edge Lighting */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
                
                {/* Background Pattern & UI Fragments */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(245,185,66,0.2),transparent_50%)]" />
                  <svg className="absolute top-0 right-0 w-64 h-64 text-white" viewBox="0 0 100 100">
                    <path d="M10 10 H90 V90 H10 Z" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="2 2" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.05" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <div className="mb-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                        <Quote className="w-5 h-5 text-brand-gold" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Institutional Review</span>
                        <span className="text-[9px] text-brand-gold/60 font-bold uppercase tracking-[0.2em]">Verified Governance</span>
                      </div>
                    </div>
                    <div className="flex gap-1 items-center px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse mr-1" />
                      <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
                      <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Auth_Status: Active</span>
                    </div>
                  </div>

                  <blockquote className="text-[20px] lg:text-[23px] font-medium leading-[1.6] text-white/95 mb-12 tracking-tight max-w-[90%] border-l-2 border-brand-gold/30 pl-8">
                    “OYEN GRID has fundamentally transformed our delivery architecture. We now orchestrate complex fellowship programmes with a level of <span className="text-white font-bold">precision and human connection</span> that was previously impossible.”
                  </blockquote>

                  {/* Profile Area */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-10">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 p-1 relative">
                          <div className="absolute inset-0 bg-brand-gold/20 animate-pulse rounded-full" />
                          <div className="relative w-full h-full rounded-full overflow-hidden bg-[#1A1D26]">
                            <Image src="/exec-avatar-1.png" alt="Dr. Amina Yusuf" fill className="object-cover grayscale" />
                          </div>
                        </div>
                        {/* Active Operational Indicator */}
                        <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#05070B] rounded-full flex items-center justify-center">
                          <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_8px_#10B981] animate-pulse" />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[16px] font-bold text-white tracking-tight">Dr. Amina Yusuf</span>
                        </div>
                        <div className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] mt-1">Director, AltSchool Africa</div>
                      </div>
                    </div>

                    <div className="hidden sm:block">
                      <div className="flex flex-col items-end gap-1">
                        <div className="px-2 py-1 rounded bg-brand-gold/5 border border-brand-gold/20 flex items-center gap-1.5">
                          <Fingerprint className="w-3 h-3 text-brand-gold" />
                          <span className="text-[8px] font-black text-brand-gold uppercase tracking-widest">Verified Case Study</span>
                        </div>
                        <span className="text-[9px] text-white/20 font-medium">Ref: OG-7721-INT</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: IMPACT VISUALIZATION HERO */}
          <div className="relative pt-4">
            <div className="mb-16 lg:mb-20">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="h-px w-10 bg-brand-gold" />
                <span className="text-[11px] font-black text-brand-gold uppercase tracking-[0.4em]">MEASURABLE IMPACT</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[44px] lg:text-[64px] font-bold text-white leading-[1.05] tracking-tighter"
              >
                Operational outcomes at <br />
                <span className="text-brand-gold italic font-serif relative">
                  institutional scale.
                  <svg className="absolute -bottom-2 left-0 w-full h-1 text-brand-gold/30" viewBox="0 0 100 1" preserveAspectRatio="none">
                    <path d="M0 0.5 H100" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 2" />
                  </svg>
                </span>
              </motion.h2>
            </div>

            {/* METRICS GRID */}
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-20 lg:gap-y-24">
              {metrics.map((m, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="relative group cursor-default"
                >
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={cn(
                            "w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-500",
                            m.color === "brand-gold" ? "bg-brand-gold/5 border-brand-gold/20 text-brand-gold" : 
                            m.color === "emerald-500" ? "bg-emerald-500/5 border-emerald-500/20 text-emerald-500" :
                            "bg-blue-500/5 border-blue-500/20 text-blue-500"
                          )}>
                            <m.icon className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">{m.detail}</span>
                        </div>
                        <div className="text-[52px] lg:text-[64px] font-bold text-white tracking-tighter leading-none group-hover:scale-105 transition-transform duration-500 origin-left">
                          {m.val}
                        </div>
                      </div>
                      <div className="pt-2">
                        <ArrowUpRight className="w-5 h-5 text-white/10 group-hover:text-brand-gold transition-colors" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[14px] lg:text-[16px] font-bold text-white/80 tracking-tight">{m.label}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">LIVE DATA</span>
                          <div className={cn("w-1.5 h-1.5 rounded-full animate-ping", 
                            m.color === "brand-gold" ? "bg-brand-gold" : 
                            m.color === "emerald-500" ? "bg-emerald-500" : "bg-blue-500"
                          )} />
                        </div>
                      </div>

                      {/* LIVE TELEMETRY GRAPH */}
                      <div className="h-[50px] w-full relative overflow-hidden bg-white/[0.02] rounded-lg border border-white/5 group-hover:border-brand-gold/20 transition-colors duration-500">
                        <div className="absolute top-1 left-2 z-20 flex gap-4">
                          <span className="text-[7px] font-black text-white/10 uppercase tracking-widest">Freq: 2.4GHz</span>
                          <span className="text-[7px] font-black text-white/10 uppercase tracking-widest">Lat: 12ms</span>
                        </div>
                        <svg className="w-full h-full absolute inset-0" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id={`grad-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor={m.color === 'brand-gold' ? '#F5B942' : m.color === 'emerald-500' ? '#10B981' : '#3B82F6'} stopOpacity="0.2" />
                              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 + (i * 0.2) }}
                            d={m.waveform}
                            fill="none"
                            stroke={m.color === 'brand-gold' ? '#F5B942' : m.color === 'emerald-500' ? '#10B981' : '#3B82F6'}
                            strokeWidth="2"
                            className="drop-shadow-[0_0_8px_rgba(245,185,66,0.3)]"
                          />
                          <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.5 }}
                            transition={{ duration: 1.5, delay: 0.5 + (i * 0.2) }}
                            d={`${m.waveform} L 120 40 L 0 40 Z`}
                            fill={`url(#grad-${i})`}
                          />
                        </svg>
                        
                        {/* Hover Pulse Effect */}
                        <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>
                  </div>

                  {/* Divider Line */}
                  <div className="absolute -bottom-8 left-0 right-0 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
                </motion.div>
              ))}
            </div>

            {/* Bottom Proof Bar */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-32 flex items-center gap-8 py-6 px-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm"
            >
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#05070B] bg-white/5 flex items-center justify-center text-[10px] font-black text-white/20">
                    {i}
                  </div>
                ))}
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="flex flex-col">
                <span className="text-[11px] font-black text-brand-gold uppercase tracking-[0.2em]">Institutional Integrity Verified</span>
                <span className="text-[13px] text-white/40 font-medium tracking-tight">Active audits across 140+ global operational nodes.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
