"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MessageSquare,
  Sparkles,
  Activity,
  Bell,
  Shield,
  ArrowRight
} from "lucide-react";

const features = [
  {
    title: "AI Meeting Intelligence",
    desc: "Instant summaries and action items generated post-session.",
    icon: Sparkles,
    iconBg: "bg-purple-500/10",
    iconBorder: "border-purple-500/20",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "Team Collaboration",
    desc: "Centralize cohort communication directly inside your workspace.",
    icon: MessageSquare,
    iconBg: "bg-[#D4A017]/10",
    iconBorder: "border-[#D4A017]/20",
    iconColor: "text-[#D4A017]",
  },
  {
    title: "Reports & Analytics",
    desc: "Monitor cohorts, attendance, engagement, and activity in real-time.",
    icon: Activity,
    iconBg: "bg-blue-500/10",
    iconBorder: "border-blue-500/20",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Smart Notifications",
    desc: "Get notified before learner issues become problems.",
    icon: Bell,
    iconBg: "bg-emerald-500/10",
    iconBorder: "border-emerald-500/20",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
];

export function HumanCoordination() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200/50 min-h-[860px] flex items-center bg-white">

      {/* ── LAYER 0: Office background — desaturated to become atmosphere ── */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/human-coordination-bg.png')",
          filter: "saturate(0.5) brightness(1.15) contrast(0.85)",
        }}
      />
      {/* Warm upper-left light source */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{
        background: "radial-gradient(ellipse 75% 65% at 8% 15%, rgba(255,250,240,0.7) 0%, transparent 65%)",
      }} />
      {/* Overall veil */}
      <div className="absolute inset-0 bg-white/20 z-[1] pointer-events-none" />

      {/* ── LAYER 1: Ambient glow environment behind tablet ── */}
      <div className="absolute hidden lg:block z-[2] pointer-events-none" style={{
        right: "-80px", top: "50%", transform: "translateY(-50%)",
        width: "900px", height: "900px",
        background: `
          radial-gradient(ellipse 60% 65% at 58% 50%, rgba(30,58,138,0.18) 0%, transparent 65%),
          radial-gradient(ellipse 42% 48% at 74% 34%, rgba(99,102,241,0.12) 0%, transparent 58%),
          radial-gradient(ellipse 38% 42% at 44% 68%, rgba(16,185,129,0.08) 0%, transparent 55%)
        `,
      }} />

      {/* ── LAYER 2: Main content grid ── */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-[510px_1fr] items-center gap-12 lg:gap-0">

          {/* ════════════════ LEFT GLASS PANEL ════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col p-8 md:p-10 rounded-[32px] relative z-20"
            style={{
              background: "rgba(255, 255, 255, 0.82)",
              backdropFilter: "blur(32px) saturate(1.8)",
              WebkitBackdropFilter: "blur(32px) saturate(1.8)",
              border: "1px solid rgba(255, 255, 255, 0.55)",
              boxShadow: "0 10px 40px rgba(15,23,42,0.04), 0 24px 64px rgba(15,23,42,0.08), inset 0 1px 0 rgba(255,255,255,0.95)",
            }}
          >
            {/* Warm light catch */}
            <div className="absolute top-0 left-0 w-48 h-20 rounded-tl-[32px] pointer-events-none" style={{
              background: "radial-gradient(ellipse 100% 100% at 0% 0%, rgba(255,245,210,0.65) 0%, transparent 70%)",
            }} />

            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C8931A]" />
              <span className="text-[10px] font-black tracking-[0.35em] text-[#C8931A] uppercase">
                HUMAN COORDINATION • INSIGHTS
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-[32px] md:text-[40px] font-black text-[#111827] leading-[1.08] tracking-tight mb-4">
              Let AI handle the admin{" "}
              <span className="text-[#D4A017] italic font-serif font-normal block mt-1">
                while your team focuses on learners.
              </span>
            </h2>

            {/* Body */}
            <p className="text-[14.5px] leading-relaxed text-[#4B5563] mb-8 font-medium">
              Automate the busywork. Surface what matters. Coordinate with complete workspace visibility.
            </p>

            {/* 2×2 feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div
                    key={i}
                    className="p-5 rounded-2xl border border-zinc-200/40 bg-white/95 hover:border-[#D4A017]/30 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(15,23,42,0.03)] transition-all duration-[300ms] ease-out flex flex-col justify-between"
                  >
                    <div>
                      {/* Icon container */}
                      <div className={`w-9 h-9 rounded-xl ${f.iconBg} border ${f.iconBorder} flex items-center justify-center mb-4`}>
                        <Icon className={`w-4 h-4 ${f.iconColor}`} />
                      </div>
                      <h4 className="text-[13.5px] font-extrabold text-[#111827] mb-1.5 leading-snug">{f.title}</h4>
                      <p className="text-[11.5px] text-[#6B7280] leading-normal font-light">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Security strip */}
            <div 
              className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-zinc-200/40 bg-white/90"
              style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.01)" }}
            >
              <Shield className="w-4.5 h-4.5 text-[#D4A017] shrink-0" />
              <p className="text-[12px] leading-snug">
                <span className="font-extrabold text-[#111827] block sm:inline">Secure. Reliable. Built for scale.</span>{" "}
                <span className="text-[#6B7280] font-light">Your data, always protected.</span>
              </p>
            </div>
          </motion.div>

          {/* ════════════════ RIGHT — Tablet image ════════════════ */}
          <div className="hidden lg:block relative" style={{ height: "820px" }}>
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "absolute",
                right: "-85px",
                bottom: "-30px",
                width: "800px",
                height: "780px",
                WebkitMaskImage: `
                  linear-gradient(to right,  transparent 0%, black 14%, black 100%),
                  linear-gradient(to bottom, transparent 0%, black 6%,  black 94%, transparent 100%)
                `,
                WebkitMaskComposite: "source-in",
                maskImage: `
                  linear-gradient(to right,  transparent 0%, black 14%, black 100%),
                  linear-gradient(to bottom, transparent 0%, black 6%,  black 94%, transparent 100%)
                `,
                maskComposite: "intersect",
              }}
            >
              <Image
                src="/human-coordination-mockup-new.jpg"
                alt="OYEN GRID platform on tablet held by trainer"
                fill
                className="object-contain object-right-bottom"
                style={{
                  filter: "drop-shadow(0 28px 56px rgba(15,23,42,0.30)) drop-shadow(0 0 1px rgba(255,255,255,0.12))",
                }}
                priority
                unoptimized
              />
            </motion.div>
          </div>

          {/* Mobile fallback */}
          <div className="block lg:hidden relative w-full" style={{ height: "400px" }}>
            <Image src="/human-coordination-mockup-new.jpg" alt="OYEN GRID platform on tablet" fill className="object-contain" unoptimized />
          </div>

        </div>
      </div>
    </section>
  );
}
