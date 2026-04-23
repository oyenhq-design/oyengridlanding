"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion"
import {
  CheckCircle2, Users, Activity, BarChart3, Layout,
  Calendar, MessageSquare, Settings, Bell, Search, ChevronDown
} from "lucide-react"

function useCountUp(from: number, to: number, delay = 0.9) {
  const [val, setVal] = useState(from)
  useEffect(() => {
    const c = animate(from, to, { duration: 1.6, delay, ease: "easeOut", onUpdate: v => setVal(Math.floor(v)) })
    return () => c.stop()
  }, [from, to, delay])
  return val
}

// ── Shared panel chrome ───────────────────────────────────────────────────────
function PanelShell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-[#0A0A0A] border border-[#1F1F23] rounded-xl overflow-hidden ${className}`}>
      {children}
    </div>
  )
}

// ── Structured Background Layers ──────────────────────────────────────────────
function SystemLayer({ title, icon: Icon }: { title: string, icon: React.ElementType }) {
  return (
    <PanelShell>
      {/* Topbar matching exact 40px height */}
      <div className="flex items-center gap-3 px-4 h-10 bg-[#0D0D0D] border-b border-[#1A1A1A]">
        <Icon className="w-3.5 h-3.5 text-[#555555]" />
        <span className="text-[10px] font-bold text-[#555555] uppercase tracking-widest">{title}</span>
      </div>
      <div className="flex" style={{ height: 420 }}>
        {/* Sidebar Skeleton */}
        <div className="w-10 bg-[#080808] border-r border-[#1A1A1A] flex flex-col items-center py-4 gap-4 shrink-0">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`w-7 h-7 rounded-lg border flex items-center justify-center ${i === 0 ? "bg-[#111111] border-[#1A1A1A]" : "border-transparent"}`}>
               <div className={`w-3.5 h-3.5 rounded-sm ${i === 0 ? "bg-[#333333]" : "bg-[#1A1A1A]"}`} />
            </div>
          ))}
        </div>
        {/* Content Skeleton - Structured Grid */}
        <div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden">
          {/* Header Row */}
          <div className="flex items-center justify-between">
            <div className="space-y-1.5">
              <div className="w-32 h-4 bg-[#111111] rounded" />
              <div className="w-48 h-2.5 bg-[#111111]/50 rounded" />
            </div>
            <div className="w-20 h-6 bg-[#111111] border border-[#1A1A1A] rounded-lg" />
          </div>

          {/* Stats Grid (4 columns) */}
          <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-[#0D0D0D] border border-[#1A1A1A] rounded-xl p-3">
                <div className="w-12 h-2 bg-[#1A1A1A] rounded mb-2.5" />
                <div className="w-16 h-5 bg-[#111111] rounded mb-1.5" />
                <div className="w-20 h-2 bg-[#1A1A1A] rounded" />
              </div>
            ))}
          </div>

          {/* Lower Row */}
          <div className="flex gap-3 flex-1 min-h-0">
            {/* List */}
            <div className="flex-1 bg-[#0D0D0D] border border-[#1A1A1A] rounded-xl p-3 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <div className="w-24 h-3 bg-[#1A1A1A] rounded" />
                <div className="w-4 h-4 bg-[#111111] rounded" />
              </div>
              <div className="space-y-2 flex-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-2 bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg">
                    <div className="w-6 h-6 bg-[#111111] rounded-md shrink-0" />
                    <div className="flex-1 space-y-1.5">
                      <div className="w-32 h-2.5 bg-[#1A1A1A] rounded" />
                      <div className="w-20 h-2 bg-[#111111] rounded" />
                    </div>
                    <div className="w-12 h-4 bg-[#111111] rounded-sm shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Side Card */}
            <div className="w-[140px] shrink-0 bg-[#0D0D0D] border border-[#1A1A1A] rounded-xl p-3 flex flex-col items-center justify-center gap-3">
              <div className="w-20 h-2 bg-[#1A1A1A] rounded" />
              <div className="w-20 h-20 rounded-full border-4 border-[#111111] flex items-center justify-center">
                 <div className="w-10 h-3 bg-[#111111] rounded-sm" />
              </div>
              <div className="space-y-1.5 w-full mt-1">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]" />
                  <div className="w-12 h-2 bg-[#111111] rounded" />
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]" />
                  <div className="w-16 h-2 bg-[#111111] rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PanelShell>
  )
}

// ── Main front dashboard ──────────────────────────────────────────────────────
function MainDashboard({ count }: { count: number }) {
  const sideIcons = [Layout, Users, Calendar, MessageSquare, BarChart3, Settings]
  const sessions = [
    { name: "System Design Patterns", prog: "Q3 Engineering · Week 4", time: "10:00 AM", live: true },
    { name: "Database Fundamentals",  prog: "Q3 Engineering · Week 4", time: "02:00 PM", live: false },
    { name: "API Integration",        prog: "Q3 Engineering · Week 4", time: "04:30 PM", live: false },
  ]

  return (
    <PanelShell className="shadow-[0_40px_100px_rgba(0,0,0,0.9)]">
      {/* Topbar */}
      <div className="flex items-center gap-3 px-4 h-10 bg-[#0D0D0D] border-b border-[#1A1A1A]">
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-6 h-6 bg-[#C9A96E] rounded-md flex items-center justify-center">
            <span className="text-[9px] font-black text-[#0A0A0A]">OG</span>
          </div>
          <span className="text-xs font-bold text-white tracking-wide">Dashboard</span>
        </div>
        <div className="flex-1 relative max-w-[200px]">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-[#333333]" />
          <div className="w-full bg-[#111111] border border-[#1A1A1A] rounded-lg pl-6 pr-3 py-1 text-[9px] text-[#333333]">Search anything…</div>
        </div>
        <div className="ml-auto flex items-center gap-2.5">
          <div className="relative">
            <Bell className="w-3.5 h-3.5 text-[#444444]" />
            <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-[#C9A96E] rounded-full" />
          </div>
          <div className="w-6 h-6 rounded-full bg-[#C9A96E] flex items-center justify-center text-[9px] font-black text-[#0A0A0A]">JC</div>
        </div>
      </div>

      <div className="flex" style={{ height: 420 }}>
        {/* Sidebar */}
        <div className="w-10 bg-[#080808] border-r border-[#1A1A1A] flex flex-col items-center py-4 gap-4 shrink-0">
          {sideIcons.map((Icon, i) => (
            <div key={i} className={`w-7 h-7 rounded-lg flex items-center justify-center border ${i === 0 ? "bg-[#C9A96E]/15 border-[#C9A96E]/40" : "border-transparent"}`}>
              <Icon className={`w-3.5 h-3.5 ${i === 0 ? "text-[#C9A96E]" : "text-[#2A2A2A]"}`} strokeWidth={i === 0 ? 2 : 1.5} />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden">
          {/* Header row */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-bold text-white">Welcome back, James 👋</div>
              <div className="text-[10px] text-[#555555]">Here's what's happening with your programmes.</div>
            </div>
            <div className="flex items-center gap-1.5 bg-[#111111] border border-[#1A1A1A] px-2.5 py-1.5 rounded-lg text-[9px] text-[#555555]">
              This Week <ChevronDown className="w-3 h-3 ml-1" />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "Participants",    value: count.toLocaleString(), change: "↑ 12% this week",    gold: false },
              { label: "Attendance",      value: "94.2%",                change: "↑ 2.4% vs last week", gold: true  },
              { label: "Sessions",        value: "32",                   change: "↑ 8 this week",       gold: false },
              { label: "Completion Rate", value: "78.6%",                change: "↑ 6.1% vs last week", gold: false },
            ].map((s, i) => (
              <div key={i} className="bg-[#0D0D0D] border border-[#1A1A1A] rounded-xl p-3">
                <div className="text-[8px] text-[#555555] uppercase tracking-widest font-bold mb-1.5">{s.label}</div>
                <div className={`text-xl font-bold tracking-tight mb-0.5 ${s.gold ? "text-[#C9A96E]" : "text-white"}`}>{s.value}</div>
                <div className="text-[8px] text-[#27C93F] font-semibold">{s.change}</div>
              </div>
            ))}
          </div>

          {/* Lower row */}
          <div className="flex gap-3 flex-1 min-h-0">
            {/* Session list */}
            <div className="flex-1 bg-[#0D0D0D] border border-[#1A1A1A] rounded-xl p-3 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold text-white">Upcoming Sessions</span>
                <ChevronDown className="w-3 h-3 text-[#333333]" />
              </div>
              <div className="space-y-2 flex-1">
                {sessions.map((s, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-2 bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg">
                    <div className="w-6 h-6 bg-[#111111] border border-[#1A1A1A] rounded-md flex items-center justify-center shrink-0">
                      <Calendar className="w-3 h-3 text-[#444444]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-semibold text-white truncate">{s.name}</div>
                      <div className="text-[8px] text-[#444444] truncate">{s.prog}</div>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="text-[9px] text-[#555555] mb-0.5">{s.time}</div>
                      <span className={`text-[7px] font-bold px-1.5 py-0.5 rounded-sm ${s.live ? "bg-[#C9A96E]/20 text-[#C9A96E]" : "bg-[#1A1A1A] text-[#444444]"}`}>
                        {s.live ? "Live" : "Scheduled"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress circle */}
            <div className="w-[140px] shrink-0 bg-[#0D0D0D] border border-[#1A1A1A] rounded-xl p-3 flex flex-col items-center justify-center gap-2">
              <span className="text-[8px] font-bold text-white uppercase tracking-widest text-center">Programme Progress</span>
              <div className="relative w-20 h-20">
                <svg viewBox="0 0 80 80" className="w-20 h-20 -rotate-90">
                  <circle cx="40" cy="40" r="32" fill="none" stroke="#1A1A1A" strokeWidth="6" />
                  <motion.circle
                    cx="40" cy="40" r="32" fill="none"
                    stroke="#C9A96E" strokeWidth="6" strokeLinecap="round"
                    strokeDasharray="201"
                    initial={{ strokeDashoffset: 201 }}
                    animate={{ strokeDashoffset: 201 * 0.22 }}
                    transition={{ duration: 1.8, delay: 1.2, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xl font-bold text-white">78%</span>
                  <span className="text-[7px] text-[#555555]">Overall</span>
                </div>
              </div>
              <div className="space-y-1 w-full">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#27C93F]" />
                  <span className="text-[8px] text-[#666666]">On track</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                  <span className="text-[8px] text-[#666666]">12 programmes active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PanelShell>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────
export function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const mxs = useSpring(mouseX, { damping: 35, stiffness: 70 })
  const mys = useSpring(mouseY, { damping: 35, stiffness: 70 })
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
      style={{ minHeight: "90vh" }}
    >
      {/* Ambient radial — right side only */}
      <div className="pointer-events-none absolute inset-0" style={{
        background: "radial-gradient(ellipse 55% 55% at 75% 50%, rgba(201,169,110,0.035) 0%, transparent 70%)"
      }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center" style={{ minHeight: "90vh" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-16 xl:gap-24 items-center w-full py-24">

          {/* ── LEFT ── */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05, ease: "easeOut" }}
              className="flex items-center gap-2.5 mb-6"
            >
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="text-[10px] font-bold text-[#C9A96E] uppercase tracking-[0.25em]">
                Structured Programme Operating System
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
              className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-7"
            >
              Run and manage<br />
              your programmes<br />
              from a{" "}
              <span className="text-[#C9A96E]">single,<br />structured system.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22, ease: "easeOut" }}
              className="text-[#A1A1AA] text-lg leading-relaxed font-light max-w-[400px] mb-8"
            >
              Consolidate your entire operation into one intelligent platform. Built for organisations that need strict control, deep analytics, and scalable delivery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.30, ease: "easeOut" }}
              className="space-y-4 mb-10"
            >
              {["Structured programme delivery", "Full participant control", "Built for real organisations"].map((pt, i) => (
                <div key={i} className="flex items-center gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#111111] border border-[#1A1A1A] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A96E]" strokeWidth={2} />
                  </div>
                  <span className="text-[#E0E0E0] font-medium text-sm">{pt}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.38, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link href="/get-started">
                <motion.button
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  className="flex items-center gap-2.5 bg-[#C9A96E] hover:bg-[#D4B882] text-[#0A0A0A] font-bold text-sm h-12 px-7 rounded-lg transition-colors"
                >
                  Get Started
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.03, borderColor: "rgba(255,255,255,0.3)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  className="flex items-center gap-2.5 bg-transparent text-white border border-white/15 font-semibold text-sm h-12 px-7 rounded-lg"
                >
                  Book a Demo
                  <Calendar className="w-4 h-4 opacity-50" />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex items-center gap-2"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#333333]" strokeWidth={1.5} />
              <span className="text-[11px] text-[#444444]">Trusted by training organisations worldwide</span>
            </motion.div>
          </div>

          {/* ── RIGHT: Stepped layer stack ── */}
          {/*
            Grid system:
            - All panels share the same width (100% of column)
            - Each depth layer offsets: +32px right / -24px up
            - Container has top/right padding = 3 * step to accommodate the peek
            - No dynamic transforms in loops — offsets are static CSS
            - Mouse parallax only on the front panel
          */}
          <div className="relative flex items-center justify-end">
            <div
              className="relative w-full"
              style={{ paddingTop: 120, paddingRight: 120 }}
            >
              {/* ── Depth 3 (furthest back) ── */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  top: 0, left: 120, right: -120,
                  zIndex: 10,
                  pointerEvents: "none",
                }}
              >
                <SystemLayer title="Analytics Engine" icon={BarChart3} />
              </motion.div>

              {/* ── Depth 2 ── */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  top: 40, left: 80, right: -80,
                  zIndex: 20,
                  pointerEvents: "none",
                }}
              >
                <SystemLayer title="Session Management" icon={Activity} />
              </motion.div>

              {/* ── Depth 1 ── */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  top: 80, left: 40, right: -40,
                  zIndex: 30,
                  pointerEvents: "none",
                }}
              >
                <SystemLayer title="Programme Control" icon={Layout} />
              </motion.div>

              {/* ── Front panel — structured, no bounce ── */}
              <motion.div
                initial={{ opacity: 0, y: 90, scale: 0.97 }}
                animate={{ opacity: 1, y: 120, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
                style={{ position: "relative", zIndex: 40 }}
              >
                <motion.div
                  style={{
                    x: useTransform(mxs, [-0.5, 0.5], [-8, 8]),
                    y: useTransform(mys, [-0.5, 0.5], [-4, 4]),
                  }}
                  className="will-change-transform"
                >
                  <MainDashboard count={count} />
                </motion.div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom strip ── */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="relative z-10 border-t border-[#1A1A1A]"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1A1A1A]">
          {[
            { Icon: Layout,      title: "All-in-one platform",      desc: "Everything you need in one place." },
            { Icon: CheckCircle2,title: "Enterprise-grade security", desc: "Built with security at the core." },
            { Icon: BarChart3,   title: "Deep analytics",           desc: "Real-time insights that matter." },
            { Icon: Activity,    title: "Scalable & reliable",       desc: "Built to grow with you." },
          ].map(({ Icon, title, desc }, i) => (
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
