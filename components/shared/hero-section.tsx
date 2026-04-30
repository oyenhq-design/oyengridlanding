"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from "framer-motion"
import {
  CheckCircle2,
  Users,
  Calendar,
  MessageSquare,
  Settings,
  Bell,
  Search,
  ChevronDown,
  Activity,
  BarChart3,
  Layout,
} from "lucide-react"

// ── Counter ────────────────────────────────────────────────────────────────────
function useCountUp(from: number, to: number, delay = 0.9) {
  const [val, setVal] = useState(from)
  useEffect(() => {
    const c = animate(from, to, {
      duration: 1.6,
      delay,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.floor(v)),
    })
    return () => c.stop()
  }, [from, to, delay])
  return val
}

// ── Shared panel chrome ────────────────────────────────────────────────────────
function PanelShell({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`bg-[#0A0A0A] border border-[#1F1F23] rounded-xl overflow-hidden ${className}`}
    >
      {children}
    </div>
  )
}

// ── Panel: Programme Overview (front layer) ───────────────────────────────────
function PanelProgramme() {
  return (
    <PanelShell>
      <div className="flex items-center gap-2 px-4 h-9 bg-[#0D0D0D] border-b border-[#1A1A1A]">
        <Layout className="w-3 h-3 text-[#C9A96E]" strokeWidth={1.5} />
        <span className="text-[9px] font-bold text-[#777777] uppercase tracking-widest">
          Programme Overview
        </span>
        <div className="ml-auto flex items-center gap-1 bg-[#111111] border border-[#1A1A1A] px-2 py-0.5 rounded-sm">
          <span className="text-[8px] text-[#444444]">Q3 Engineering</span>
          <ChevronDown className="w-2.5 h-2.5 text-[#333333]" />
        </div>
      </div>
      <div className="p-3">
        <div className="flex gap-3 mb-2.5 pb-2 border-b border-[#1A1A1A]">
          {["Overview", "Sessions", "Participants", "Analytics"].map((t, i) => (
            <span
              key={i}
              className={`text-[8px] font-semibold ${
                i === 0
                  ? "text-[#C9A96E] border-b border-[#C9A96E]/40 pb-0.5"
                  : "text-[#333333]"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {[
            { l: "Participants", v: "420",   gold: false },
            { l: "Attendance",   v: "94.2%", gold: true  },
            { l: "Sessions",     v: "32",    gold: false },
            { l: "Completion",   v: "78.6%", gold: false },
          ].map((s, i) => (
            <div key={i} className="bg-[#0D0D0D] border border-[#1A1A1A] rounded-lg p-2">
              <div className="text-[7px] text-[#555555] uppercase font-bold mb-1 leading-tight">
                {s.l}
              </div>
              <div
                className={`text-sm font-bold tracking-tight ${
                  s.gold ? "text-[#C9A96E]" : "text-white"
                }`}
              >
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PanelShell>
  )
}

// ── Panel: Session Activity (middle layer) ────────────────────────────────────
function PanelSession() {
  return (
    <PanelShell>
      <div className="flex items-center gap-2 px-4 h-9 bg-[#0D0D0D] border-b border-[#1A1A1A]">
        <Activity className="w-3 h-3 text-[#555555]" strokeWidth={1.5} />
        <span className="text-[9px] font-bold text-[#555555] uppercase tracking-widest">
          Session Activity
        </span>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#27C93F]/70" />
          <span className="text-[8px] text-[#444444]">3 live now</span>
        </div>
      </div>
      <div className="p-3 flex flex-col gap-1.5">
        {[
          { name: "System Design Patterns",  week: "Week 4", live: true  },
          { name: "Database Fundamentals",   week: "Week 4", live: false },
          { name: "API Integration Workshop",week: "Week 4", live: false },
        ].map((s, i) => (
          <div
            key={i}
            className="flex items-center gap-2 p-1.5 bg-[#0D0D0D] border border-[#1A1A1A] rounded-lg"
          >
            <div className="w-5 h-5 bg-[#111111] border border-[#1A1A1A] rounded-md flex items-center justify-center shrink-0">
              <Calendar className="w-2.5 h-2.5 text-[#444444]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[8px] font-semibold text-white truncate">{s.name}</div>
              <div className="text-[7px] text-[#444444]">{s.week}</div>
            </div>
            <span
              className={`text-[6px] font-bold px-1.5 py-0.5 rounded-sm shrink-0 ${
                s.live ? "bg-[#C9A96E]/20 text-[#C9A96E]" : "bg-[#1A1A1A] text-[#444444]"
              }`}
            >
              {s.live ? "Live" : "Scheduled"}
            </span>
          </div>
        ))}
      </div>
    </PanelShell>
  )
}

// ── Panel: Analytics Overview (back layer) ────────────────────────────────────
function PanelAnalytics() {
  const bars = [35, 55, 40, 75, 50, 88, 65, 90, 72, 85]
  return (
    <PanelShell>
      <div className="flex items-center gap-2 px-4 h-9 bg-[#0D0D0D] border-b border-[#1A1A1A]">
        <BarChart3 className="w-3 h-3 text-[#555555]" strokeWidth={1.5} />
        <span className="text-[9px] font-bold text-[#555555] uppercase tracking-widest">
          Analytics Overview
        </span>
        <span className="ml-auto text-[8px] text-[#333333] bg-[#111111] border border-[#1A1A1A] px-2 py-0.5 rounded-sm">
          This Month
        </span>
      </div>
      <div className="p-3">
        <div className="flex items-end gap-1" style={{ height: 48 }}>
          {bars.map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}%` }}
              className={`flex-1 rounded-t-sm ${
                i === 7 || i === 9 ? "bg-[#C9A96E]/30" : "bg-white/[0.04]"
              } border border-white/[0.04]`}
            />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-1.5 mt-2.5">
          {[
            { l: "Revenue", v: "£184k" },
            { l: "New Orgs", v: "24"   },
            { l: "Retention",v: "96.1%"},
          ].map(({ l, v }, i) => (
            <div key={i} className="bg-[#0D0D0D] border border-[#1A1A1A] rounded-lg p-1.5">
              <div className="text-[7px] text-[#444444] mb-0.5">{l}</div>
              <div className="text-[10px] font-bold text-white">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </PanelShell>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────
export function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const mxs = useSpring(mouseX, { damping: 38, stiffness: 55 })
  const mys = useSpring(mouseY, { damping: 38, stiffness: 55 })
  const count = useCountUp(1200, 1248)

  const handleMouseMove = (e: React.MouseEvent) => {
    const r = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - r.left) / r.width - 0.5)
    mouseY.set((e.clientY - r.top) / r.height - 0.5)
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0) }}
      className="relative bg-[#0A0A0A] overflow-hidden border-b border-[#1A1A1A]"
      style={{ minHeight: "100vh" }}
    >
      {/* Ambient radial glow — right side */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 75% 50%, rgba(201,169,110,0.04) 0%, transparent 68%)",
        }}
      />

      {/* ── Page wrapper ── */}
      <div
        className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-14 flex items-center"
        style={{ minHeight: "100vh" }}
      >
        {/*
          ┌────────────────────────┬──────────────────────────────┐
          │   LEFT  45%            │   RIGHT  55%                 │
          │   Text block           │   Device + panel composition │
          └────────────────────────┴──────────────────────────────┘
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] items-center w-full gap-8 xl:gap-12 py-24">

          {/* ════════════════════════════════════════
              LEFT: Text block — exact order
          ════════════════════════════════════════ */}
          <div className="flex flex-col">

            {/* 1 · Label */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.04, ease: "easeOut" }}
              className="flex items-center gap-2.5 mb-6"
            >
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="text-[10px] font-bold text-[#C9A96E] uppercase tracking-[0.24em]">
                Structured Programme Operating System
              </span>
            </motion.div>

            {/* 2 · Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
              className="font-bold text-white leading-[1.06] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 3.8vw, 4.1rem)" }}
            >
              Run structured programmes<br />
              with full <span className="text-[#C9A96E]">operational control.</span>
            </motion.h1>

            {/* 3 · Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22, ease: "easeOut" }}
              className="text-[#A1A1AA] text-[1.05rem] leading-relaxed font-light max-w-[420px] mb-8"
            >
              Consolidate your entire operation into one intelligent platform. 
              No fragmentation, no tool switching — just full visibility and enforced structure.
            </motion.p>

            {/* 4 · Bullets */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.30, ease: "easeOut" }}
              className="flex flex-col gap-3.5 mb-10"
            >
              {[
                "Enforced delivery flow",
                "Centralised participant control",
                "System-level visibility",
              ].map((pt, i) => (
                <div key={i} className="flex items-center gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#111111] border border-[#1A1A1A] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A96E]" strokeWidth={2} />
                  </div>
                  <span className="text-[#E0E0E0] font-medium text-sm">{pt}</span>
                </div>
              ))}
            </motion.div>

            {/* 5 · CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.38, ease: "easeOut" }}
              className="flex flex-row gap-4 mb-7"
            >
              <Link href="/get-started">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.16 }}
                  className="flex items-center gap-2.5 bg-[#C9A96E] hover:bg-[#D4B882] text-[#0A0A0A] font-bold text-sm h-12 px-7 rounded-lg transition-colors"
                >
                  Start building
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.03, borderColor: "rgba(255,255,255,0.28)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.16 }}
                  className="flex items-center gap-2.5 bg-transparent text-white border border-white/15 font-semibold text-sm h-12 px-7 rounded-lg"
                >
                  Talk to sales
                  <Calendar className="w-4 h-4 opacity-50" />
                </motion.button>
              </Link>
            </motion.div>

            {/* 6 · Trust text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.92 }}
              className="flex items-center gap-2"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#333333]" strokeWidth={1.5} />
              <span className="text-[11px] text-[#444444]">
                Trusted by training organisations worldwide
              </span>
            </motion.div>
          </div>

          {/* ════════════════════════════════════════
              RIGHT: Device + UI panel composition

              Absolute coordinate system within a fixed 780×680 container.

              Z-order (back → front):
              ┌─────────────────────────────────────────┐
              │  [Analytics panel]  z:10  top:0,right:0 │ opacity 0.65
              │    [Session panel]  z:15  top:44,rt:40  │ opacity 0.82
              │      [Programme]   z:20  top:88,rt:80   │ opacity 1.0
              │  [tab.png]         z:22  top:160,rt:0   │ opacity 0.5, behind laptop top
              │  [hero-laptop.png] z:30  bottom:0,left:0│ DOMINANT
              │  [hero-phone.png]  z:40  btm:10,left:0  │ 25–30% of laptop width
              └─────────────────────────────────────────┘

              The laptop covers the lower halves of all panels.
              The panels "float" above the screen, creating layered depth.
          ════════════════════════════════════════ */}
          <div
            className="relative hidden lg:block select-none"
            style={{ height: 700 }}
          >
            {/* Soft gold radial glow — centred behind the composition */}
            <div
              aria-hidden
              className="pointer-events-none absolute"
              style={{
                width: 640,
                height: 480,
                top: "50%",
                left: "52%",
                transform: "translate(-50%, -50%)",
                background:
                  "radial-gradient(ellipse at center, rgba(201,169,110,0.07) 0%, transparent 62%)",
                borderRadius: "50%",
                zIndex: 1,
              }}
            />

            {/* ── Back: Analytics panel ──────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 0.65, y: 0 }}
              transition={{ duration: 0.8, delay: 0.78, ease: "easeOut" }}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 370,
                zIndex: 10,
                x: useTransform(mxs, [-0.5, 0.5], [4, -4]),
                y: useTransform(mys, [-0.5, 0.5], [3, -3]),
              }}
              className="will-change-transform"
            >
              <PanelAnalytics />
            </motion.div>

            {/* ── Middle: Session panel ──────────────────────── */}
            {/*
              Offset from Analytics: ~40px down, ~40px to the left
              (moves toward the viewer in the card stack)
            */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 0.82, y: 0 }}
              transition={{ duration: 0.8, delay: 0.62, ease: "easeOut" }}
              style={{
                position: "absolute",
                top: 44,
                right: 40,
                width: 370,
                zIndex: 15,
                x: useTransform(mxs, [-0.5, 0.5], [6, -6]),
                y: useTransform(mys, [-0.5, 0.5], [4, -4]),
              }}
              className="will-change-transform"
            >
              <PanelSession />
            </motion.div>

            {/* ── Front: Programme panel ─────────────────────── */}
            {/*
              Offset from Session: another ~44px down, ~40px left
            */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.46, ease: "easeOut" }}
              style={{
                position: "absolute",
                top: 88,
                right: 80,
                width: 370,
                zIndex: 20,
                x: useTransform(mxs, [-0.5, 0.5], [8, -8]),
                y: useTransform(mys, [-0.5, 0.5], [5, -5]),
              }}
              className="will-change-transform"
            >
              <PanelProgramme />
            </motion.div>

            {/* ── Tablet: mid-layer, behind laptop top edge ──── */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 0.45, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
              style={{
                position: "absolute",
                top: 170,
                right: 0,
                width: 260,
                zIndex: 22,
                x: useTransform(mxs, [-0.5, 0.5], [5, -5]),
                y: useTransform(mys, [-0.5, 0.5], [3, -3]),
              }}
              className="will-change-transform"
            >
              <Image
                src="/img/tab.png"
                alt="Tablet showing OYEN Grid"
                width={700}
                height={500}
                className="w-full h-auto"
                style={{ filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.7))" }}
                priority
              />
            </motion.div>

            {/* ── Laptop: dominant base ──────────────────────── */}
            {/*
              Fills the bottom of the container, spans full width.
              Covers the lower halves of all stacked panels above it.
            */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 30,
                x: useTransform(mxs, [-0.5, 0.5], [-10, 10]),
                y: useTransform(mys, [-0.5, 0.5], [-5, 5]),
              }}
              className="will-change-transform"
            >
              <Image
                src="/img/hero-laptop.png"
                alt="OYEN Grid dashboard on laptop"
                width={1400}
                height={900}
                className="w-full h-auto"
                style={{
                  filter:
                    "drop-shadow(0 40px 72px rgba(0,0,0,1)) drop-shadow(0 0 48px rgba(201,169,110,0.06))",
                }}
                priority
              />
            </motion.div>

            {/* ── Phone: foreground, bottom-left overlap ─────── */}
            {/*
              ~27% of the container width ≈ 25–30% of laptop size.
              Sits in front of the laptop's bottom-left corner.
            */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.93 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "absolute",
                bottom: 8,
                left: 8,
                width: "27%",
                zIndex: 40,
                x: useTransform(mxs, [-0.5, 0.5], [-8, 8]),
                y: useTransform(mys, [-0.5, 0.5], [-9, 9]),
              }}
              className="will-change-transform"
            >
              <Image
                src="/img/hero-phone.png"
                alt="OYEN Grid on mobile"
                width={400}
                height={720}
                className="w-full h-auto"
                style={{ filter: "drop-shadow(0 18px 36px rgba(0,0,0,0.9))" }}
                priority
              />
            </motion.div>

          </div>{/* end right column */}
        </div>
      </div>
    </section>
  )
}
