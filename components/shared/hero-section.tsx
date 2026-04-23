"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion"
import {
  CheckCircle2, Users, Activity, BarChart3, Layout,
  Calendar, MessageSquare, Settings, Bell, Search, ChevronDown
} from "lucide-react"

function useCount(from: number, to: number, delay = 0.8) {
  const [val, setVal] = useState(from)
  useEffect(() => {
    const c = animate(from, to, { duration: 1.6, delay, ease: "easeOut", onUpdate: v => setVal(Math.floor(v)) })
    return () => c.stop()
  }, [from, to, delay])
  return val
}

// ── Sidebar nav icons ─────────────────────────────────────────────────────────
const sideIcons = [
  { Icon: Layout, active: true },
  { Icon: Users, active: false },
  { Icon: Calendar, active: false },
  { Icon: MessageSquare, active: false },
  { Icon: BarChart3, active: false },
  { Icon: Settings, active: false },
]

// ── Stats ─────────────────────────────────────────────────────────────────────
function StatCard({ label, value, change, gold = false }: { label: string; value: string; change: string; gold?: boolean }) {
  return (
    <div className="bg-[#0D0D0D] border border-[#1A1A1A] rounded-xl p-4 flex flex-col gap-1.5">
      <span className="text-[10px] text-[#555555] uppercase tracking-widest font-bold">{label}</span>
      <span className={`text-2xl font-bold tracking-tight ${gold ? "text-[#C9A96E]" : "text-white"}`}>{value}</span>
      <span className="text-[10px] text-[#27C93F] font-semibold">{change}</span>
    </div>
  )
}

// ── Main dashboard panel ──────────────────────────────────────────────────────
function DashboardPanel({ count }: { count: number }) {
  const sessions = [
    { name: "System Design Patterns", prog: "Q3 Engineering Bootcamp · Week 4", time: "10:00 AM", live: true },
    { name: "Database Fundamentals", prog: "Q3 Engineering Bootcamp · Week 4", time: "02:00 PM", live: false },
    { name: "API Integration", prog: "Q3 Engineering Bootcamp · Week 4", time: "04:30 PM", live: false },
  ]

  return (
    <div className="w-full bg-[#0A0A0A] border border-[#1F1F23] rounded-2xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.8)]">
      {/* Topbar */}
      <div className="flex items-center gap-4 px-5 py-3 bg-[#0D0D0D] border-b border-[#1A1A1A]">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-7 h-7 bg-[#C9A96E] rounded-md flex items-center justify-center">
            <span className="text-[10px] font-black text-[#0A0A0A]">OG</span>
          </div>
          <span className="text-xs font-bold text-white tracking-wide hidden sm:block">Dashboard</span>
        </div>
        {/* Search */}
        <div className="flex-1 relative max-w-xs">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-[#444444]" />
          <div className="w-full bg-[#111111] border border-[#1A1A1A] rounded-lg pl-7 pr-3 py-1.5 text-[10px] text-[#333333]">
            Search anything…
          </div>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <div className="relative">
            <Bell className="w-4 h-4 text-[#555555]" />
            <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-[#C9A96E] rounded-full" />
          </div>
          <div className="w-7 h-7 rounded-full bg-[#C9A96E] flex items-center justify-center text-[10px] font-black text-[#0A0A0A]">JC</div>
        </div>
      </div>

      <div className="flex h-[480px]">
        {/* Sidebar */}
        <div className="w-12 bg-[#080808] border-r border-[#1A1A1A] flex flex-col items-center py-5 gap-5 shrink-0">
          {sideIcons.map(({ Icon, active }, i) => (
            <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-colors ${
              active ? "bg-[#C9A96E]/15 border-[#C9A96E]/40" : "border-transparent"
            }`}>
              <Icon className={`w-3.5 h-3.5 ${active ? "text-[#C9A96E]" : "text-[#2A2A2A]"}`} strokeWidth={active ? 2 : 1.5} />
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-5 overflow-hidden flex flex-col gap-4">
          {/* Welcome */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-bold text-white mb-0.5">Welcome back, James 👋</div>
              <div className="text-[10px] text-[#555555]">Here's what's happening with your programmes.</div>
            </div>
            <div className="flex items-center gap-1.5 bg-[#111111] border border-[#1A1A1A] px-3 py-1.5 rounded-lg text-[10px] text-[#A1A1AA] cursor-default">
              This Week <ChevronDown className="w-3 h-3 ml-1" />
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-4 gap-3">
            <StatCard label="Participants" value={count.toLocaleString()} change="↑ 12% this week" />
            <StatCard label="Attendance" value="94.2%" change="↑ 2.4% vs last week" gold />
            <StatCard label="Sessions" value="32" change="↑ 8 this week" />
            <StatCard label="Completion Rate" value="78.6%" change="↑ 6.1% vs last week" />
          </div>

          {/* Lower split */}
          <div className="flex gap-4 flex-1 min-h-0">
            {/* Session list */}
            <div className="flex-1 bg-[#0D0D0D] border border-[#1A1A1A] rounded-xl p-4 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-white">Upcoming Sessions</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#444444]" />
              </div>
              <div className="space-y-2.5 flex-1">
                {sessions.map((s, i) => (
                  <div key={i} className="flex items-center gap-3 p-2.5 bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg">
                    <div className="w-7 h-7 bg-[#111111] border border-[#1A1A1A] rounded-md flex items-center justify-center shrink-0">
                      <Calendar className="w-3 h-3 text-[#555555]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-semibold text-white truncate">{s.name}</div>
                      <div className="text-[9px] text-[#555555] truncate">{s.prog}</div>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="text-[10px] text-[#A1A1AA] mb-0.5">{s.time}</div>
                      <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-sm ${
                        s.live ? "bg-[#C9A96E]/20 text-[#C9A96E]" : "bg-[#1A1A1A] text-[#555555]"
                      }`}>{s.live ? "Live" : "Scheduled"}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress circle */}
            <div className="w-[160px] shrink-0 bg-[#0D0D0D] border border-[#1A1A1A] rounded-xl p-4 flex flex-col items-center justify-center gap-3">
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">Programme Progress</span>
              <div className="relative w-24 h-24">
                <svg viewBox="0 0 80 80" className="w-24 h-24 -rotate-90">
                  <circle cx="40" cy="40" r="32" fill="none" stroke="#1A1A1A" strokeWidth="6" />
                  <motion.circle
                    cx="40" cy="40" r="32" fill="none"
                    stroke="#C9A96E" strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray="201"
                    initial={{ strokeDashoffset: 201 }}
                    animate={{ strokeDashoffset: 201 * 0.22 }}
                    transition={{ duration: 1.8, delay: 1, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-white">78%</span>
                  <span className="text-[8px] text-[#555555]">Overall</span>
                </div>
              </div>
              <div className="space-y-1.5 w-full">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#27C93F]" />
                  <span className="text-[9px] text-[#A1A1AA]">On track</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                  <span className="text-[9px] text-[#A1A1AA]">12 programmes active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────
export function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const mxs = useSpring(mouseX, { damping: 30, stiffness: 80 })
  const mys = useSpring(mouseY, { damping: 30, stiffness: 80 })
  const ref = useRef<HTMLElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const r = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - r.left) / r.width - 0.5)
    mouseY.set((e.clientY - r.top) / r.height - 0.5)
  }

  const count = useCount(1200, 1248)

  const proofPoints = [
    { text: "Structured programme delivery" },
    { text: "Full participant control" },
    { text: "Built for real organisations" },
  ]

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0) }}
      className="relative bg-[#0A0A0A] overflow-hidden border-b border-[#1A1A1A]"
      style={{ minHeight: "90vh" }}
    >
      {/* Faint radial ambient */}
      <div className="pointer-events-none absolute inset-0" style={{
        background: "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(201,169,110,0.04) 0%, transparent 70%)"
      }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center" style={{ minHeight: "90vh" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-12 xl:gap-20 items-center w-full py-24">

          {/* ── LEFT ── */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
              className="mb-5"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-px bg-[#C9A96E]" />
                <span className="text-[10px] font-bold text-[#C9A96E] uppercase tracking-[0.25em]">
                  Structured Programme Operating System
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
              className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-7"
            >
              Run and manage<br />
              your programmes<br />
              from a{" "}
              <span className="text-[#C9A96E]">single,<br />
              structured system.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" }}
              className="text-[#A1A1AA] text-lg leading-relaxed font-light max-w-md mb-8"
            >
              Consolidate your entire operation into one intelligent platform. Built for organisations that need strict control, deep analytics, and scalable delivery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="space-y-4 mb-10"
            >
              {proofPoints.map((pt, i) => (
                <div key={i} className="flex items-center gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#111111] border border-[#1A1A1A] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A96E]" strokeWidth={2} />
                  </div>
                  <span className="text-[#E0E0E0] font-medium text-sm">{pt.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/get-started">
                <motion.button
                  whileHover={{ scale: 1.03, backgroundColor: "#D4B882" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  className="flex items-center gap-2.5 bg-[#C9A96E] text-[#0A0A0A] font-bold text-sm h-12 px-7 rounded-lg"
                >
                  Get Started
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.03, borderColor: "rgba(255,255,255,0.35)", backgroundColor: "rgba(255,255,255,0.04)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  className="flex items-center gap-2.5 bg-transparent text-white border border-white/15 font-semibold text-sm h-12 px-7 rounded-lg"
                >
                  Book a Demo
                  <Calendar className="w-4 h-4 opacity-60" />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-8 flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4 text-[#333333]" strokeWidth={1.5} />
              <span className="text-[11px] text-[#444444] font-medium">Trusted by training organisations worldwide</span>
            </motion.div>
          </div>

          {/* ── RIGHT: layered dashboard ── */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Overflow wrapper — allows dashboard to be large and clip neatly */}
            <div className="relative w-full" style={{ height: 600 }}>

              {/* ── Layer 3: Analytics card (back-right) ── */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: -20 }}
                animate={{ opacity: 0.35, x: 60, y: -40 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                style={{
                  x: useTransform(mxs, [-0.5, 0.5], [54, 66]),
                  y: useTransform(mys, [-0.5, 0.5], [-46, -34]),
                  filter: "blur(1.5px)",
                }}
                className="absolute top-0 right-0 w-[85%] bg-[#0D0D0D] border border-[#C9A96E]/15 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] z-10 overflow-hidden will-change-transform"
              >
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1A1A1A]">
                    <BarChart3 className="w-3.5 h-3.5 text-[#C9A96E]" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Analytics Overview</span>
                    <span className="ml-auto text-[9px] text-[#555555] bg-[#111111] border border-[#1A1A1A] px-2 py-0.5 rounded-sm">This Month</span>
                  </div>
                  <div className="p-4 flex items-end gap-1 h-24">
                    {[35, 55, 40, 75, 50, 88, 65, 90, 72, 85].map((h, i) => (
                      <div key={i} style={{ height: `${h}%` }} className={`flex-1 rounded-t-sm ${i === 7 || i === 9 ? "bg-[#C9A96E]/30" : "bg-white/5"} border border-white/5`} />
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* ── Layer 2: Session Activity card (mid) ── */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={{ opacity: 0.6, x: 30, y: -20 }}
                transition={{ duration: 1, delay: 0.65, ease: "easeOut" }}
                style={{
                  x: useTransform(mxs, [-0.5, 0.5], [24, 36]),
                  y: useTransform(mys, [-0.5, 0.5], [-24, -16]),
                  filter: "blur(0.5px)",
                }}
                className="absolute top-0 right-0 w-[88%] bg-[#0A0A0A] border border-[#1F1F23] rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.7)] z-20 overflow-hidden will-change-transform"
              >
                <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1A1A1A]">
                    <Activity className="w-3.5 h-3.5 text-[#A1A1AA]" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Session Activity</span>
                    <div className="ml-auto flex items-center gap-1.5">
                      <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-1.5 bg-[#27C93F] rounded-full" />
                      <span className="text-[9px] text-[#27C93F] font-bold">Live</span>
                    </div>
                  </div>
                  <div className="p-4 grid grid-cols-3 gap-2">
                    {["System Design", "React Patterns", "DB Sharding"].map((s, i) => (
                      <div key={i} className={`p-2.5 rounded-lg border ${i === 0 ? "border-[#C9A96E]/30 bg-[#C9A96E]/5" : "border-[#1A1A1A] bg-[#0D0D0D]"}`}>
                        <div className="text-[9px] font-semibold text-white truncate">{s}</div>
                        <div className="text-[8px] text-[#555555] mt-0.5">Week 4</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* ── Layer 1: Main Dashboard (front) ── */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                style={{
                  x: useTransform(mxs, [-0.5, 0.5], [-10, 10]),
                  y: useTransform(mys, [-0.5, 0.5], [-6, 6]),
                }}
                className="absolute top-0 right-0 w-full z-30 will-change-transform"
              >
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}>
                  <DashboardPanel count={count} />
                </motion.div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom feature strip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
        className="relative z-10 border-t border-[#1A1A1A]"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1A1A1A]">
          {[
            { icon: Layout, title: "All-in-one platform", desc: "Everything you need in one place." },
            { icon: CheckCircle2, title: "Enterprise-grade security", desc: "Built with security at the core." },
            { icon: BarChart3, title: "Deep analytics", desc: "Real-time insights that matter." },
            { icon: Activity, title: "Scalable & reliable", desc: "Built to grow with you." },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="flex items-start gap-4 py-7 px-6 first:pl-0 last:pr-0 group">
              <div className="w-9 h-9 rounded-lg bg-[#111111] border border-[#1A1A1A] flex items-center justify-center shrink-0 group-hover:border-[#C9A96E]/30 transition-colors">
                <Icon className="w-4 h-4 text-[#C9A96E]" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-white text-sm font-semibold mb-0.5">{title}</div>
                <div className="text-[#555555] text-xs font-light">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
