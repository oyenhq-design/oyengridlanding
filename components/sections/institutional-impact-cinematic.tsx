"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { 
  Quote, Fingerprint, TrendingUp 
} from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const metrics = [
  { 
    val: "+340%", 
    label: "Operational Efficiency", 
    waveform: "M0 25 Q15 5 30 25 T60 25 T90 10 T120 25"
  },
  { 
    val: "-82%", 
    label: "Manual Coordination", 
    waveform: "M0 10 Q20 30 40 10 T80 10 T120 20"
  },
  { 
    val: "-64%", 
    label: "Reporting Overhead", 
    waveform: "M0 30 Q30 10 60 30 T120 15"
  },
  { 
    val: "99.9%", 
    label: "System Reliability", 
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
      className="py-[90px] bg-[#05070B] relative overflow-hidden"
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

      <div className="max-w-[1220px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
          
          {/* LEFT SIDE: PREMIUM TESTIMONIAL PANEL */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[340px] p-8 rounded-[28px] bg-[#0A0E18]/92 backdrop-blur-xl border border-white/[0.06] shadow-[0_24px_60px_rgba(0,0,0,0.38)] overflow-hidden flex flex-col justify-between">
                
                {/* Minimal Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-gold/5 border border-brand-gold/10 flex items-center justify-center">
                      <Quote className="w-4 h-4 text-brand-gold" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Executive Insight</span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-brand-gold animate-pulse" />
                        <span className="text-[9px] text-brand-gold/60 font-bold uppercase tracking-widest">Verified Transformation</span>
                      </div>
                    </div>
                  </div>
                </div>

                <blockquote className="text-[28px] font-bold leading-[1.25] text-white tracking-tight max-w-[420px]">
                  “OYEN GRID enables us to orchestrate complex fellowship programmes with absolute precision at <span className="text-brand-gold">global scale</span>.”
                </blockquote>

                {/* Profile Area - Compact */}
                <div className="flex items-center justify-between pt-6 border-t border-white/[0.05]">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 bg-[#1A1D26]">
                      <Image src="/exec-avatar-1.png" alt="Dr. Amina Yusuf" fill className="object-cover grayscale" />
                    </div>
                    <div>
                      <div className="text-[14px] font-bold text-white tracking-tight leading-none">Dr. Amina Yusuf</div>
                      <div className="text-[9px] font-bold text-brand-gold uppercase tracking-widest mt-1">Director, AltSchool Africa</div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end opacity-40">
                    <Fingerprint className="w-4 h-4 text-white mb-1" />
                    <span className="text-[8px] font-bold text-white uppercase tracking-widest">ID: OG-7721-INT</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: METRICS GRID */}
          <div className="grid grid-cols-2 gap-[18px]">
            {metrics.map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[155px] p-6 rounded-[22px] bg-[#0C1018]/90 border border-white/[0.05] hover:translate-y-[-2px] transition-all duration-300 overflow-hidden"
              >
                {/* Enterprise Detail: Subtle Graph Accent */}
                <div className="absolute bottom-0 left-0 w-full h-12 opacity-[0.03] pointer-events-none group-hover:opacity-[0.06] transition-opacity">
                  <svg className="w-full h-full" preserveAspectRatio="none">
                    <path d={m.waveform} fill="none" stroke="white" strokeWidth="1" />
                  </svg>
                </div>

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <div className={cn(
                          "w-1.5 h-1.5 rounded-full",
                          m.val.startsWith('+') || m.val === "99.9%" ? "bg-brand-gold shadow-[0_0_8px_rgba(245,185,66,0.4)]" : "bg-white/20"
                        )} />
                        <span className="text-[12px] font-bold text-white/50 uppercase tracking-[0.12em]">{m.label}</span>
                      </div>
                      <div className="h-px w-8 bg-white/[0.08]" />
                    </div>
                    {/* Enterprise Detail: Trend Indicator */}
                    <div className="flex items-center gap-1 opacity-40">
                      <TrendingUp className="w-3 h-3 text-white" />
                      <span className="text-[9px] font-bold text-white uppercase tracking-tighter">Live</span>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className={cn(
                      "text-[42px] font-extrabold leading-none tracking-tighter",
                      (m.val.startsWith('+') || m.val === "99.9%") ? "text-brand-gold" : "text-white"
                    )}>
                      {m.val}
                    </span>
                    {/* Enterprise Detail: Tiny Status Dot */}
                    <div className="w-1 h-1 rounded-full bg-white/10 mb-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
