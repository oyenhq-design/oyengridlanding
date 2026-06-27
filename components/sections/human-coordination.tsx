"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MessageSquare,
  Sparkles,
  Activity,
  Bell,
  Shield,
} from "lucide-react";

const features = [
  {
    title: "AI Session Notes",
    desc: "Instant summaries and action items generated post-session.",
    icon: Sparkles,
    iconBg: "bg-purple-50",
    iconBorder: "border-purple-100",
    iconColor: "text-purple-500",
  },
  {
    title: "Team Chat",
    desc: "Centralize cohort communication directly inside your workspace.",
    icon: MessageSquare,
    iconBg: "bg-amber-50",
    iconBorder: "border-amber-100",
    iconColor: "text-amber-500",
  },
  {
    title: "Live Dashboard",
    desc: "Monitor cohorts, attendance, engagement, and activity in real-time.",
    icon: Activity,
    iconBg: "bg-blue-50",
    iconBorder: "border-blue-100",
    iconColor: "text-blue-500",
  },
  {
    title: "AI Alerts",
    desc: "Get notified before learner issues become problems.",
    icon: Bell,
    iconBg: "bg-emerald-50",
    iconBorder: "border-emerald-100",
    iconColor: "text-emerald-500",
  },
];

export function HumanCoordination() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200 min-h-[860px] flex items-center">

      {/* ── LAYER 0: Office background — desaturated to become atmosphere ── */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/human-coordination-bg.png')",
          filter: "saturate(0.6) brightness(1.1) contrast(0.85)",
        }}
      />
      {/* Warm upper-left light source */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{
        background: "radial-gradient(ellipse 75% 65% at 8% 15%, rgba(255,250,240,0.60) 0%, transparent 65%)",
      }} />
      {/* Overall veil */}
      <div className="absolute inset-0 bg-white/18 z-[1] pointer-events-none" />

      {/* ── LAYER 1: Ambient glow environment behind tablet ── */}
      <div className="absolute hidden lg:block z-[2] pointer-events-none" style={{
        right: "-80px", top: "50%", transform: "translateY(-50%)",
        width: "900px", height: "900px",
        background: `
          radial-gradient(ellipse 60% 65% at 58% 50%, rgba(30,58,138,0.22) 0%, transparent 65%),
          radial-gradient(ellipse 42% 48% at 74% 34%, rgba(99,102,241,0.16) 0%, transparent 58%),
          radial-gradient(ellipse 38% 42% at 44% 68%, rgba(16,185,129,0.10) 0%, transparent 55%)
        `,
      }} />

      {/* ── LAYER 2: Main content grid ── */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-[480px_1fr] items-center gap-8 lg:gap-0">

          {/* ════════════════ LEFT GLASS PANEL ════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col p-8 md:p-10 rounded-[28px] relative z-20"
            style={{
              background: "rgba(255,255,255,0.86)",
              backdropFilter: "blur(24px) saturate(1.5)",
              WebkitBackdropFilter: "blur(24px) saturate(1.5)",
              border: "1px solid rgba(255,255,255,0.75)",
              boxShadow: "0 4px 6px rgba(15,23,42,0.02), 0 16px 48px rgba(15,23,42,0.07), 0 40px 96px rgba(15,23,42,0.05), inset 0 1px 0 rgba(255,255,255,0.95)",
            }}
          >
            {/* Warm light catch */}
            <div className="absolute top-0 left-0 w-40 h-16 rounded-tl-[28px] pointer-events-none" style={{
              background: "radial-gradient(ellipse 100% 100% at 0% 0%, rgba(255,245,210,0.55) 0%, transparent 70%)",
            }} />

            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C8931A]" />
              <span className="text-[10px] font-black tracking-[0.34em] text-[#C8931A] uppercase">
                Human Coordination • Insights
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-[30px] md:text-[38px] font-extrabold text-[#0F172A] leading-[1.12] tracking-tight mb-4">
              Give your trainers and coordinators
              <br />
              <span className="text-[#D4A017] italic font-serif font-normal text-[32px] md:text-[40px]">
                AI superpowers
              </span>
            </h2>

            {/* Body */}
            <p className="text-[14px] leading-relaxed text-[#475569] mb-8 max-w-[400px]">
              Automate the busywork. Surface what matters.
              <br />
              Focus on learner outcomes.
            </p>

            {/* 2×2 feature cards */}
            <div className="grid grid-cols-2 gap-3 mb-7">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="p-4 rounded-[16px] hover:-translate-y-1 transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.92)",
                    border: "1px solid rgba(15,23,42,0.06)",
                    boxShadow: "0 2px 8px rgba(15,23,42,0.04), 0 6px 20px rgba(15,23,42,0.04)",
                  }}
                >
                  <div className={`w-9 h-9 rounded-[10px] ${f.iconBg} flex items-center justify-center mb-3`}
                    style={{ border: "1px solid rgba(15,23,42,0.05)" }}>
                    <f.icon className={`w-[18px] h-[18px] ${f.iconColor}`} />
                  </div>
                  <h4 className="text-[12.5px] font-bold text-[#0F172A] mb-1">{f.title}</h4>
                  <p className="text-[11px] text-[#64748B] leading-snug">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Security strip */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-[12px]"
              style={{ background: "rgba(255,255,255,0.75)", border: "1px solid rgba(15,23,42,0.055)" }}>
              <Shield className="w-4 h-4 text-[#D4A017] shrink-0" />
              <p className="text-[11.5px] leading-snug">
                <span className="font-bold text-[#0F172A]">Secure. Reliable. Built for scale.</span>{" "}
                <span className="text-[#64748B]">Your data, always protected.</span>
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
