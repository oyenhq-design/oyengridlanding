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
    return (
      <section className="relative bg-[#0b0b0c] pt-40 pb-32 border-b border-[#18181A] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-20 md:gap-32">
          {/* LEFT: Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-8 leading-[1.05] tracking-tight">
              Operational clarity<br />for modern organisations
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-xl mx-auto md:mx-0 leading-relaxed">
              OYEN Grid brings calm, structure, and real-time control to every layer of your programme delivery.
            </p>
            <div className="flex justify-center md:justify-start">
              <a href="/get-started">
                <button className="bg-[#D4AF37] hover:bg-[#e6c75a] text-black font-bold px-10 py-5 rounded-xl text-lg shadow-gold transition-all focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2">
                  Start Building
                </button>
              </a>
            </div>
          </div>
          {/* RIGHT: Product Image */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-105 h-80 md:w-135 md:h-100 rounded-2xl overflow-hidden shadow-2xl bg-[#101012]">
              <Image
                src="/img/pg mgt.png"
                alt="Product dashboard preview"
                fill
                className="object-cover object-top rounded-2xl select-none pointer-events-none"
                draggable={false}
                priority
              />
            </div>
          </div>
        </div>
      </section>
    );

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
