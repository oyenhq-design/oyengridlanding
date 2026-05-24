"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Brain,
  Activity,
  GitBranch,
  ShieldAlert,
  ShieldCheck,
  Zap,
} from "lucide-react";

const INFINITY_PATH =
  "M 500 250 C 620 100, 850 100, 850 250 C 850 400, 620 400, 500 250 C 380 100, 150 100, 150 250 C 150 400, 380 400, 500 250 Z";

const leftLabels = [
  { label: "Programmes", left: "18%", top: "14%", color: "#F5B942" },
  { label: "Participants", left: "6%", top: "48%", color: "#10b981" },
  { label: "Sessions", left: "18%", top: "82%", color: "#ef4444" },
  { label: "Resources", left: "36%", top: "88%", color: "#3b82f6" },
];

const rightLabels = [
  { label: "Analytics", left: "82%", top: "14%", color: "#3b82f6" },
  { label: "Automation", left: "94%", top: "48%", color: "#10b981" },
  { label: "Risk Detection", left: "82%", top: "82%", color: "#F5B942" },
  { label: "Recommendations", left: "64%", top: "88%", color: "#a855f7" },
];

const particles = Array.from({ length: 24 }, (_, i) => ({
  top: `${(i * 17 + 7) % 92}%`,
  left: `${(i * 23 + 11) % 94}%`,
  size: 1 + (i % 3) * 0.75,
  delay: (i % 8) * 0.4,
  duration: 5 + (i % 6),
}));

const orbitParticles = [
  { dur: "7s", fill: "#06b6d4", r: 3, begin: "0s" },
  { dur: "9.5s", fill: "#F5B942", r: 2.5, begin: "-2s" },
  { dur: "11s", fill: "#a855f7", r: 2, begin: "-4s" },
  { dur: "8.5s", fill: "#3b82f6", r: 2.5, begin: "-1s" },
];

function OrbitRings({ className }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none flex items-center justify-center ${className ?? ""}`}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
        className="absolute w-[140%] h-[140%] border border-dashed border-cyan-500/15 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
        className="absolute w-[175%] h-[175%] border border-dashed border-violet-500/10 rounded-full"
      />
    </div>
  );
}

function PortraitFrame({
  src,
  alt,
  accentClass,
}: {
  src: string;
  alt: string;
  accentClass: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="relative w-[88px] h-[88px] sm:w-[108px] sm:h-[108px] md:w-[124px] md:h-[124px] lg:w-[136px] lg:h-[136px] rounded-full overflow-hidden border border-white/12 p-[3px] bg-[#04060f]/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.55),0_0_40px_rgba(59,130,246,0.08)]"
    >
      <div className={`absolute inset-0 rounded-full border ${accentClass} animate-pulse pointer-events-none`} />
      <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-950">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover grayscale contrast-[1.12] brightness-[0.88] hover:grayscale-0 transition-all duration-700"
          sizes="(max-width: 768px) 88px, 136px"
        />
      </div>
    </motion.div>
  );
}

export function InstitutionalCommandCenter() {
  return (
    <section className="relative min-h-[920px] lg:min-h-[1180px] overflow-hidden border-b border-white/5 bg-[#030508] py-24 md:py-28 lg:py-36 selection:bg-brand-gold selection:text-black">
      {/* Background atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#030508] to-[#020306]" />
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 h-[720px] w-[1400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.04] blur-[180px] animate-pulse"
          style={{ animationDuration: "16s" }}
        />
        <div className="absolute top-[20%] left-[15%] h-[520px] w-[520px] rounded-full bg-violet-600/[0.035] blur-[140px]" />
        <div className="absolute bottom-[15%] right-[12%] h-[580px] w-[580px] rounded-full bg-amber-500/[0.025] blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#020306_92%)] opacity-95" />
      </div>

      {particles.map((p, idx) => (
        <motion.div
          key={idx}
          className="absolute z-[1] rounded-full bg-white/25 pointer-events-none"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
          animate={{ y: [0, -28, 0], opacity: [0.08, 0.45, 0.08] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] flex-col px-5">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-[880px] text-center lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-gold/20 bg-brand-gold/[0.05] px-3.5 py-1"
          >
            <span className="h-1.5 w-1.5 animate-ping rounded-full bg-brand-gold" />
            <span className="text-[9px] font-black uppercase tracking-[0.32em] text-brand-gold">
              OPERATIONAL INTELLIGENCE LAYER
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mb-6 text-[32px] font-extrabold leading-[1.06] tracking-tight text-white md:text-[44px] lg:text-[52px]"
          >
            Where institutional coordination{" "}
            <span className="bg-gradient-to-r from-brand-gold via-amber-300 to-yellow-200 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(245,185,66,0.2)]">
              becomes intelligent.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mx-auto mb-6 max-w-[720px] text-[14px] font-light leading-relaxed text-white/55 md:text-[16px]"
          >
            OYEN GRID unifies programmes, people, workflows, and operational systems into one
            continuously connected execution layer.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
            className="flex items-center justify-center gap-4 font-mono text-[9.5px] uppercase tracking-[0.28em] text-white/35"
          >
            <span>Continuous.</span>
            <span className="h-1 w-1 rounded-full bg-brand-gold/50" />
            <span>Intelligent.</span>
            <span className="h-1 w-1 rounded-full bg-brand-gold/50" />
            <span>Autonomous.</span>
          </motion.p>
        </div>

        {/* Infinity visualization */}
        <div className="relative mx-auto my-4 w-full max-w-[1280px] select-none lg:my-8">
          <div className="relative aspect-[1000/520] w-full overflow-visible sm:aspect-[1000/480] lg:aspect-[1000/440]">
            <svg
              viewBox="0 0 1000 500"
              className="absolute inset-0 z-10 h-full w-full overflow-visible"
              fill="none"
              aria-hidden
            >
              <defs>
                <linearGradient id="infinity-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="22%" stopColor="#8b5cf6" />
                  <stop offset="45%" stopColor="#06b6d4" />
                  <stop offset="50%" stopColor="#F5B942" />
                  <stop offset="55%" stopColor="#06b6d4" />
                  <stop offset="78%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient id="trail-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(6,182,212,0)" />
                  <stop offset="45%" stopColor="rgba(6,182,212,0.55)" />
                  <stop offset="100%" stopColor="rgba(6,182,212,1)" />
                </linearGradient>
                <linearGradient id="trail-amber" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(245,185,66,0)" />
                  <stop offset="50%" stopColor="rgba(245,185,66,0.65)" />
                  <stop offset="100%" stopColor="rgba(245,185,66,1)" />
                </linearGradient>
                <filter id="infinity-glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="18" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" />
                </filter>
              </defs>

              {/* Ambient halo */}
              <path
                d={INFINITY_PATH}
                stroke="url(#infinity-gradient)"
                strokeWidth="28"
                strokeLinecap="round"
                opacity="0.12"
                filter="url(#infinity-glow)"
              />
              <path
                d={INFINITY_PATH}
                stroke="url(#infinity-gradient)"
                strokeWidth="12"
                strokeLinecap="round"
                opacity="0.22"
                filter="url(#soft-glow)"
              />
              <path
                d={INFINITY_PATH}
                stroke="url(#infinity-gradient)"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.85"
              />

              <motion.path
                d={INFINITY_PATH}
                stroke="url(#trail-cyan)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeDasharray="180 820"
                animate={{ strokeDashoffset: [820, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "linear" }}
              />
              <motion.path
                d={INFINITY_PATH}
                stroke="url(#trail-amber)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="120 820"
                animate={{ strokeDashoffset: [0, 820] }}
                transition={{ duration: 7.8, repeat: Infinity, ease: "linear" }}
              />

              {orbitParticles.map((p, i) => (
                <circle key={i} r={p.r} fill={p.fill} opacity="0.85" filter="url(#soft-glow)">
                  <animateMotion
                    dur={p.dur}
                    repeatCount="indefinite"
                    begin={p.begin}
                    path={INFINITY_PATH}
                  />
                </circle>
              ))}

              {/* Left connectors */}
              {[
                [200, 105, 250, 145, "#F5B942"],
                [100, 240, 150, 250, "#ef4444"],
                [200, 385, 250, 355, "#10b981"],
                [380, 415, 390, 320, "#3b82f6"],
              ].map(([x1, y1, x2, y2, color], i) => (
                <g key={`l-${i}`}>
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={color}
                    strokeOpacity={0.28}
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  <circle cx={x2} cy={y2} r="4" fill={color} className="animate-pulse" />
                </g>
              ))}

              {/* Right connectors */}
              {[
                [800, 105, 750, 145, "#3b82f6"],
                [900, 240, 850, 250, "#F5B942"],
                [800, 385, 750, 355, "#10b981"],
                [620, 415, 610, 320, "#a855f7"],
              ].map(([x1, y1, x2, y2, color], i) => (
                <g key={`r-${i}`}>
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={color}
                    strokeOpacity={0.28}
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  <circle cx={x2} cy={y2} r="4" fill={color} className="animate-pulse" />
                </g>
              ))}
            </svg>

            {/* Loop themes */}
            <div className="pointer-events-none absolute left-[32.5%] top-[14%] z-20 -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="mb-1 block text-[10px] font-black uppercase tracking-[0.28em] text-white/45 md:text-[11px]">
                Institution Operations
              </span>
              <span className="block font-mono text-[7.5px] uppercase tracking-[0.2em] text-brand-gold/55">
                Operational Core
              </span>
            </div>
            <div className="pointer-events-none absolute left-[67.5%] top-[14%] z-20 -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="mb-1 block text-[10px] font-black uppercase tracking-[0.28em] text-white/45 md:text-[11px]">
                AI Coordination
              </span>
              <span className="block font-mono text-[7.5px] uppercase tracking-[0.2em] text-cyan-400/55">
                Intelligent Sync
              </span>
            </div>

            {/* Portraits */}
            <div className="absolute left-[32.5%] top-[50%] z-20 -translate-x-1/2 -translate-y-1/2">
              <OrbitRings />
              <PortraitFrame
                src="/exec-avatar-1.png"
                alt="Institution operations lead"
                accentClass="border-brand-gold/35"
              />
            </div>
            <div className="absolute left-[67.5%] top-[50%] z-20 -translate-x-1/2 -translate-y-1/2">
              <OrbitRings />
              <PortraitFrame
                src="/exec-avatar-1.png"
                alt="AI coordination lead"
                accentClass="border-cyan-400/35"
              />
            </div>

            {/* Intelligence core */}
            <div className="pointer-events-auto absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(59,130,246,0.12), 0 0 60px rgba(245,185,66,0.08)",
                    "0 0 45px rgba(168,85,247,0.18), 0 0 80px rgba(245,185,66,0.14)",
                    "0 0 30px rgba(59,130,246,0.12), 0 0 60px rgba(245,185,66,0.08)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-[200px] overflow-hidden rounded-[22px] border border-white/10 bg-slate-950/55 p-5 text-center backdrop-blur-2xl sm:w-[240px]"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-amber-500/10" />
                <div className="pointer-events-none absolute -inset-px rounded-[22px] bg-gradient-to-r from-blue-500/20 via-violet-500/10 to-amber-500/25 opacity-60" />
                <div className="relative">
                  <div className="relative mx-auto mb-3 flex h-10 w-10 items-center justify-center">
                    <div className="absolute inset-0 animate-ping rounded-full bg-brand-gold/15" />
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-gold/15">
                      <Zap className="h-4 w-4 animate-pulse text-brand-gold" />
                    </div>
                  </div>
                  <h4 className="mb-1 text-[13px] font-black tracking-tight text-white">
                    OYEN GRID Intelligence Core
                  </h4>
                  <p className="mb-3 text-[7.5px] font-black uppercase tracking-[0.28em] text-brand-gold/85">
                    Orchestrate. Connect. Elevate.
                  </p>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                    <span className="font-mono text-[7px] font-black uppercase tracking-widest text-emerald-400">
                      Command Engine Live
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating labels */}
            {leftLabels.map((lbl) => (
              <div
                key={lbl.label}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                style={{ left: lbl.left, top: lbl.top }}
              >
                <div className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 backdrop-blur-md transition-colors hover:border-white/15 hover:bg-white/[0.06]">
                  <span
                    className="h-1.5 w-1.5 animate-pulse rounded-full"
                    style={{ backgroundColor: lbl.color, boxShadow: `0 0 8px ${lbl.color}` }}
                  />
                  <span className="text-[9.5px] font-bold tracking-wide text-white/65 md:text-[10.5px]">
                    {lbl.label}
                  </span>
                </div>
              </div>
            ))}
            {rightLabels.map((lbl) => (
              <div
                key={lbl.label}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                style={{ left: lbl.left, top: lbl.top }}
              >
                <div className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 backdrop-blur-md transition-colors hover:border-white/15 hover:bg-white/[0.06]">
                  <span
                    className="h-1.5 w-1.5 animate-pulse rounded-full"
                    style={{ backgroundColor: lbl.color, boxShadow: `0 0 8px ${lbl.color}` }}
                  />
                  <span className="text-[9.5px] font-bold tracking-wide text-white/65 md:text-[10.5px]">
                    {lbl.label}
                  </span>
                </div>
              </div>
            ))}

            {/* Desktop floating cards */}
            <GlassCard
              className="left-[-2%] top-[4%] hidden w-[188px] lg:block xl:left-[-5%]"
              float={{ duration: 6, delay: 0 }}
            >
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-wider text-white/35">
                  Engagement Score
                </span>
                <span className="font-mono text-[8px] font-bold text-emerald-400">+12% growth</span>
              </div>
              <div className="text-[26px] font-bold tracking-tight text-white">92%</div>
              <svg className="mt-2 h-5 w-full opacity-50" viewBox="0 0 100 20" aria-hidden>
                <path
                  d="M 0 16 Q 20 8, 40 12 T 80 4 T 100 8 L 100 20 L 0 20 Z"
                  fill="rgba(245,185,66,0.1)"
                />
                <path d="M 0 16 Q 20 8, 40 12 T 80 4 T 100 8" fill="none" stroke="#F5B942" strokeWidth="1.2" />
              </svg>
            </GlassCard>

            <GlassCard
              className="right-[-2%] top-[4%] hidden w-[218px] lg:block xl:right-[-5%]"
              float={{ duration: 6.5, delay: 0.5 }}
              hoverBorder="rgba(168,85,247,0.25)"
            >
              <div className="mb-1.5 flex items-center gap-1.5">
                <Brain className="h-3.5 w-3.5 text-purple-400" />
                <span className="text-[9px] font-bold uppercase tracking-wider text-purple-400">
                  AI Insight
                </span>
              </div>
              <p className="text-[9.5px] font-light leading-relaxed text-white/75">
                &ldquo;Engagement is trending up in 5 cohorts.&rdquo;
              </p>
            </GlassCard>

            <GlassCard
              className="left-[-8%] top-[42%] hidden w-[220px] lg:block xl:left-[-11%]"
              float={{ duration: 5.5, delay: 1, direction: 1 }}
            >
              <span className="mb-2 block text-[9px] font-bold uppercase tracking-wider text-white/35">
                Live Workflow Status
              </span>
              <div className="space-y-2 text-[9.5px] text-white/60">
                <WorkflowRow label="Programme Planning" status="On Track" tone="emerald" />
                <WorkflowRow label="Cohort Onboarding" status="Active" tone="cyan" />
                <WorkflowRow label="Reporting & Insights" status="On Track" tone="emerald" />
              </div>
            </GlassCard>

            <GlassCard
              className="right-[-4%] top-[44%] hidden w-[204px] lg:block xl:right-[-7%]"
              float={{ duration: 5.8, delay: 1.5, direction: 1 }}
            >
              <div className="mb-2.5 flex items-center gap-1.5">
                <ShieldAlert className="h-3.5 w-3.5 text-brand-gold" />
                <span className="text-[9px] font-bold uppercase tracking-wider text-white/35">
                  Risk Alerts
                </span>
              </div>
              <RiskBar label="Low Risk" value="82%" color="bg-emerald-500" width="82%" />
              <RiskBar label="Medium Risk" value="15%" color="bg-brand-gold" width="15%" />
              <RiskBar label="High Risk" value="3%" color="bg-red-500" width="3%" />
            </GlassCard>

            <GlassCard
              className="left-1/2 top-[100%] hidden w-[min(720px,92vw)] -translate-x-1/2 lg:block"
              float={null}
            >
              <div className="mb-3.5 flex items-center justify-between border-b border-white/[0.05] pb-2">
                <span className="text-[9.5px] font-bold uppercase tracking-wider text-white/35">
                  Operational Metrics
                </span>
                <span className="font-mono text-[8px] uppercase tracking-widest text-brand-gold/55">
                  Live Aggregate
                </span>
              </div>
              <div className="grid grid-cols-4 gap-4 text-center">
                {[
                  { val: "1,248", label: "Active Programmes" },
                  { val: "47,293", label: "Participants" },
                  { val: "8.7M+", label: "Interactions" },
                  { val: "140+", label: "Countries" },
                ].map((m) => (
                  <div key={m.label}>
                    <div className="mb-1 text-[20px] font-bold leading-none tracking-tight text-white">
                      {m.val}
                    </div>
                    <div className="text-[8.5px] font-black uppercase tracking-wider text-white/30">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Mobile cards */}
        <div className="mt-10 grid w-full grid-cols-1 gap-4 px-1 md:grid-cols-2 lg:hidden">
          <MobileCard title="Engagement Score" extra="+12% growth">
            <div className="text-2xl font-bold text-white">92%</div>
          </MobileCard>
          <MobileCard title="AI Insight" icon={<Brain className="h-3.5 w-3.5 text-purple-400" />}>
            <p className="text-[11px] font-light leading-relaxed text-white/70">
              &ldquo;Engagement is trending up in 5 cohorts.&rdquo;
            </p>
          </MobileCard>
          <MobileCard title="Live Workflow Status">
            <div className="space-y-1.5 text-[10px] text-white/60">
              <WorkflowRow label="Programme Planning" status="On Track" tone="emerald" />
              <WorkflowRow label="Cohort Onboarding" status="Active" tone="cyan" />
              <WorkflowRow label="Reporting & Insights" status="On Track" tone="emerald" />
            </div>
          </MobileCard>
          <MobileCard title="Risk Alerts">
            <div className="space-y-2 text-[10px] text-white/55">
              <p>
                Low Risk → <strong className="text-emerald-400">82%</strong>
              </p>
              <p>
                Medium Risk → <strong className="text-brand-gold">15%</strong>
              </p>
              <p>
                High Risk → <strong className="text-red-500">3%</strong>
              </p>
            </div>
          </MobileCard>
          <div className="rounded-[16px] border border-white/5 bg-[#0c1020]/90 p-4 shadow-md md:col-span-2">
            <span className="mb-3 block border-b border-white/5 pb-1 text-[10px] font-bold uppercase tracking-wider text-white/35">
              Operational Metrics
            </span>
            <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
              {[
                { val: "1,248", label: "Active Programmes" },
                { val: "47,293", label: "Participants" },
                { val: "8.7M+", label: "Interactions" },
                { val: "140+", label: "Countries" },
              ].map((m) => (
                <div key={m.label}>
                  <div className="text-lg font-bold text-white">{m.val}</div>
                  <div className="text-[8px] font-black uppercase text-white/30">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Status bar */}
        <div className="mt-16 w-full px-2 lg:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto flex max-w-[980px] flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-full border border-white/[0.06] bg-slate-950/50 px-6 py-3.5 font-mono text-[9.5px] tracking-wider text-white/55 shadow-[0_8px_40px_rgba(0,0,0,0.45),inset_0_0_20px_rgba(255,255,255,0.02)] backdrop-blur-xl sm:justify-between"
          >
            <StatusItem label="Intelligence Engine Active" pulse />
            <Divider />
            <StatusItem icon={<GitBranch className="h-3.5 w-3.5 text-brand-gold/65" />} label="Adaptive Workflows" />
            <Divider />
            <StatusItem icon={<Activity className="h-3.5 w-3.5 animate-pulse text-purple-400/65" />} label="Real-time Insights" />
            <Divider />
            <StatusItem icon={<ShieldCheck className="h-3.5 w-3.5 text-cyan-400/65" />} label="Secure & Compliant" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GlassCard({
  children,
  className,
  float,
  hoverBorder,
}: {
  children: React.ReactNode;
  className?: string;
  float: { duration: number; delay: number; direction?: number } | null;
  hoverBorder?: string;
}) {
  const motionProps =
    float === null
      ? { initial: { opacity: 0, y: 12 }, whileInView: { opacity: 0.9, y: 0 }, viewport: { once: true } }
      : {
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 0.88, y: 0 },
          viewport: { once: true },
          animate: { y: float.direction ? [0, 6, 0] : [0, -6, 0] },
          transition: {
            y: { repeat: Infinity, duration: float.duration, ease: "easeInOut", delay: float.delay },
          },
        };

  return (
    <motion.div
      {...motionProps}
      whileHover={{
        y: -4,
        opacity: 1,
        borderColor: hoverBorder ?? "rgba(255,255,255,0.14)",
      }}
      className={`absolute rounded-[16px] border border-white/[0.05] bg-slate-950/45 p-4 shadow-xl backdrop-blur-xl transition-colors duration-300 ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}

function WorkflowRow({
  label,
  status,
  tone,
}: {
  label: string;
  status: string;
  tone: "emerald" | "cyan";
}) {
  const toneClass =
    tone === "emerald"
      ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/15"
      : "text-cyan-400 bg-cyan-500/10 border-cyan-500/15";

  return (
    <div className="flex items-center justify-between gap-2">
      <span className="truncate">{label}</span>
      <span className="shrink-0 text-white/25">→</span>
      <span className={`shrink-0 rounded border px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase ${toneClass}`}>
        {status}
      </span>
    </div>
  );
}

function RiskBar({
  label,
  value,
  color,
  width,
}: {
  label: string;
  value: string;
  color: string;
  width: string;
}) {
  return (
    <div className="mb-2 last:mb-0">
      <div className="mb-0.5 font-mono text-[8px] text-white/50">
        <span>
          {label} <span className="text-white/25">→</span> {value}
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.04]">
        <div className={`h-full rounded-full ${color}`} style={{ width }} />
      </div>
    </div>
  );
}

function MobileCard({
  title,
  children,
  extra,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  extra?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-[16px] border border-white/5 bg-[#0c1020]/90 p-4 shadow-md">
      <div className="mb-1.5 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {icon}
          <span className="text-[10px] font-bold uppercase tracking-wider text-white/35">{title}</span>
        </div>
        {extra && <span className="text-[9px] font-bold text-emerald-400">{extra}</span>}
      </div>
      {children}
    </div>
  );
}

function StatusItem({
  label,
  icon,
  pulse,
}: {
  label: string;
  icon?: React.ReactNode;
  pulse?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      {pulse ? (
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
      ) : (
        icon
      )}
      <span className={pulse ? "font-bold text-white/75" : ""}>{label}</span>
    </div>
  );
}

function Divider() {
  return <div className="hidden h-3 w-px bg-white/10 sm:block" />;
}
