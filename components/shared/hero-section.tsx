"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, Users, Activity, Layout, BarChart3 } from "lucide-react"
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion"

// ─── Minimal device frame helpers ────────────────────────────────────────────

function DesktopFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Screen bezel */}
      <div className="rounded-t-lg border border-[#2A2A2A] bg-[#111111] overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.7)]">
        {/* Topbar chrome */}
        <div className="h-6 bg-[#0D0D0D] border-b border-[#1A1A1A] flex items-center px-3 gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#2A2A2A]" />
          <div className="w-2 h-2 rounded-full bg-[#2A2A2A]" />
          <div className="w-2 h-2 rounded-full bg-[#2A2A2A]" />
          <div className="flex-1 mx-3 h-3 bg-[#1A1A1A] rounded-sm" />
        </div>
        {children}
      </div>
      {/* Neck + stand */}
      <div className="h-3 bg-[#0D0D0D] border-x border-[#2A2A2A] mx-[40%]" />
      <div className="h-1.5 bg-[#1A1A1A] rounded-sm mx-[30%] border border-[#2A2A2A]" />
    </div>
  )
}

function TabletFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="rounded-xl border-2 border-[#222222] bg-[#0D0D0D] overflow-hidden shadow-[0_20px_48px_rgba(0,0,0,0.6)]">
        {/* Top pill */}
        <div className="h-5 bg-[#0A0A0A] border-b border-[#1A1A1A] flex items-center justify-center">
          <div className="w-8 h-1.5 bg-[#1A1A1A] rounded-full" />
        </div>
        {children}
        {/* Bottom bar */}
        <div className="h-4 bg-[#0A0A0A] border-t border-[#1A1A1A] flex items-center justify-center">
          <div className="w-4 h-1 bg-[#2A2A2A] rounded-full" />
        </div>
      </div>
    </div>
  )
}

function PhoneFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="rounded-2xl border-2 border-[#222222] bg-[#0D0D0D] overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.7)]">
        {/* Notch */}
        <div className="h-6 bg-[#0A0A0A] border-b border-[#1A1A1A] flex items-center justify-center">
          <div className="w-10 h-2 bg-[#1A1A1A] rounded-full" />
        </div>
        {children}
        {/* Home bar */}
        <div className="h-5 bg-[#0A0A0A] border-t border-[#1A1A1A] flex items-center justify-center">
          <div className="w-8 h-1 bg-[#2A2A2A] rounded-full" />
        </div>
      </div>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export function HeroSection() {
  // Mouse parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const spring = { damping: 30, stiffness: 80 }
  const mxs = useSpring(mouseX, spring)
  const mys = useSpring(mouseY, spring)

  const handleMouseMove = (e: React.MouseEvent) => {
    const r = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - r.left) / r.width - 0.5)
    mouseY.set((e.clientY - r.top) / r.height - 0.5)
  }

  // Count-up
  const [count, setCount] = useState(1200)
  useEffect(() => {
    const c = animate(1200, 1248, {
      duration: 1.5, delay: 0.8, ease: "easeOut",
      onUpdate: (v) => setCount(Math.floor(v)),
    })
    return () => c.stop()
  }, [])

  return (
    <section
      className="relative overflow-hidden bg-[#0A0A0A] pt-36 pb-32 border-b border-[#1A1A1A]"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0) }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* ── Left: Content ── */}
          <div className="pr-0 lg:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="mb-6"
            >
              <span className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em]">
                Structured Programme Operating System
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.08] tracking-tight"
            >
              Run your programmes from a{" "}
              <span className="text-[#C9A96E]">single structured system.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
              className="text-lg text-[#A1A1AA] mb-8 leading-relaxed max-w-md font-light"
            >
              Consolidate your entire operation into one platform. Built for organisations that need strict control, deep analytics, and scalable delivery.
            </motion.p>

            {/* Proof points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
              className="space-y-3 mb-10"
            >
              {["Structured programme delivery", "Full participant control", "Built for real organisations"].map((pt, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A96E] shrink-0" strokeWidth={2} />
                  <span className="text-[#F5F5F5] font-medium text-sm">{pt}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/get-started">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
                  <Button className="bg-[#C9A96E] hover:bg-[#D4B882] text-[#0A0A0A] h-12 px-8 text-sm font-bold rounded-lg w-full sm:w-auto">
                    Get Started
                  </Button>
                </motion.div>
              </Link>
              <Link href="#pricing">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
                  <Button variant="outline" className="border-[#2A2A2A] text-white bg-transparent hover:bg-white/5 h-12 px-8 text-sm font-semibold rounded-lg w-full sm:w-auto">
                    Book a Demo
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
              className="mt-8 pt-6 border-t border-[#1A1A1A]"
            >
              <p className="text-[10px] text-[#444444] uppercase tracking-widest font-bold">
                Trusted by structured training organisations
              </p>
            </motion.div>
          </div>

          {/* ── Right: Device Stack ── */}
          <div
            className="relative h-[520px] sm:h-[600px] w-full mt-10 lg:mt-0 flex items-center justify-center"
            style={{ perspective: "1200px" }}
          >

            {/* ── LAYER 3: Tablet (behind, left, scale 0.85) ── */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: 20, scale: 0.82 }}
              animate={{ opacity: 0.55, x: -100, y: 30, scale: 0.85 }}
              transition={{ duration: 1.1, delay: 0.7, ease: "easeOut" }}
              style={{
                x: useTransform(mxs, [-0.5, 0.5], [-108, -92]),
                y: useTransform(mys, [-0.5, 0.5], [24, 36]),
                filter: "blur(0.5px)",
              }}
              className="absolute z-10 will-change-transform"
            >
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <TabletFrame className="w-[200px]">
                  {/* Tablet UI — session control view */}
                  <div className="bg-[#0A0A0A] p-3">
                    <div className="text-[8px] font-bold text-[#A1A1AA] uppercase tracking-widest mb-2">Session Control</div>
                    <div className="h-20 bg-[#0D0D0D] border border-[#1A1A1A] rounded-md flex items-center justify-center mb-2 relative">
                      <div className="w-7 h-7 rounded-sm bg-[#111111] border border-[#1A1A1A] flex items-center justify-center text-[7px] text-[#A1A1AA] font-bold">SC</div>
                      <div className="absolute top-1.5 right-1.5 flex items-center gap-1 bg-[#0A0A0A] border border-[#1A1A1A] px-1 py-0.5 rounded-sm">
                        <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-1 rounded-full bg-[#27C93F]" />
                        <span className="text-[6px] text-white font-bold">LIVE</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      {["Chat", "Notes", "End"].map((btn, i) => (
                        <div key={i} className={`h-5 rounded-sm border text-[6px] font-bold flex items-center justify-center ${i === 2 ? "border-[#C9A96E]/30 text-[#C9A96E]" : "border-[#1A1A1A] text-[#555555]"}`}>{btn}</div>
                      ))}
                    </div>
                  </div>
                </TabletFrame>
              </motion.div>
            </motion.div>

            {/* ── LAYER 1: Desktop (front-center, scale 1.0) ── */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              style={{
                x: useTransform(mxs, [-0.5, 0.5], [-12, 12]),
                y: useTransform(mys, [-0.5, 0.5], [-8, 8]),
              }}
              className="absolute z-30 will-change-transform"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              >
                <DesktopFrame className="w-[340px] sm:w-[420px]">
                  {/* Desktop UI — dashboard overview */}
                  <div className="bg-[#0A0A0A]">
                    {/* Sidebar + main layout */}
                    <div className="flex h-[220px]">
                      {/* Mini sidebar */}
                      <div className="w-10 bg-[#0D0D0D] border-r border-[#1A1A1A] flex flex-col items-center py-3 gap-3">
                        {[Layout, Users, BarChart3].map((Icon, i) => (
                          <div key={i} className={`w-6 h-6 rounded-sm flex items-center justify-center border ${i === 0 ? "border-[#C9A96E]/40 bg-[#C9A96E]/10" : "border-[#1A1A1A]"}`}>
                            <Icon className={`w-3 h-3 ${i === 0 ? "text-[#C9A96E]" : "text-[#333333]"}`} strokeWidth={1.5} />
                          </div>
                        ))}
                      </div>
                      {/* Content */}
                      <div className="flex-1 p-3">
                        <div className="flex justify-between items-center mb-3">
                          <div>
                            <div className="text-[9px] font-bold text-white mb-0.5">Active Overview</div>
                            <div className="text-[7px] text-[#555555]">Q3 Engineering Bootcamp</div>
                          </div>
                          <div className="flex items-center gap-1 bg-[#0D0D0D] border border-[#1A1A1A] px-1.5 py-0.5 rounded-sm">
                            <motion.span animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-1 bg-[#27C93F] rounded-full" />
                            <span className="text-[7px] text-[#A1A1AA]">Live</span>
                          </div>
                        </div>
                        {/* Stat cards */}
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="bg-[#0D0D0D] border border-[#1A1A1A] rounded-md p-2">
                            <div className="flex items-center gap-1 mb-1">
                              <Users className="w-2.5 h-2.5 text-[#555555]" />
                              <span className="text-[7px] text-[#555555] uppercase font-bold">Participants</span>
                            </div>
                            <div className="text-sm font-bold text-white">{count.toLocaleString()}</div>
                            <div className="text-[7px] text-[#27C93F]">+12% this week</div>
                          </div>
                          <div className="bg-[#0D0D0D] border border-[#1A1A1A] rounded-md p-2">
                            <div className="flex items-center gap-1 mb-1">
                              <Activity className="w-2.5 h-2.5 text-[#555555]" />
                              <span className="text-[7px] text-[#555555] uppercase font-bold">Attendance</span>
                            </div>
                            <div className="text-sm font-bold text-white">94.2%</div>
                            <div className="text-[7px] text-[#A1A1AA]">Stable</div>
                          </div>
                        </div>
                        {/* Mini bar chart */}
                        <div className="flex items-end gap-0.5 h-10 bg-[#0D0D0D] border border-[#1A1A1A] rounded-md px-2 py-1.5">
                          {[40, 60, 45, 80, 55, 90, 70, 85].map((h, i) => (
                            <motion.div
                              key={i}
                              initial={{ scaleY: 0 }}
                              animate={{ scaleY: 1 }}
                              transition={{ duration: 0.8, delay: 0.6 + i * 0.07, ease: "easeOut" }}
                              style={{ transformOrigin: "bottom", height: `${h}%` }}
                              className={`flex-1 rounded-t-sm ${i === 5 ? "bg-[#C9A96E]/40" : "bg-white/8"}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </DesktopFrame>
              </motion.div>
            </motion.div>

            {/* ── LAYER 2: Phone (right side, scale 0.8) ── */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: -10, scale: 0.75 }}
              animate={{ opacity: 0.75, x: 150, y: -40, scale: 0.8 }}
              transition={{ duration: 1.1, delay: 0.6, ease: "easeOut" }}
              style={{
                x: useTransform(mxs, [-0.5, 0.5], [142, 158]),
                y: useTransform(mys, [-0.5, 0.5], [-46, -34]),
              }}
              className="absolute z-20 will-change-transform"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                <PhoneFrame className="w-[100px]">
                  {/* Phone UI — participant view */}
                  <div className="bg-[#0A0A0A] p-2 min-h-[160px]">
                    <div className="text-[6px] font-bold text-[#A1A1AA] uppercase tracking-widest mb-2">My Schedule</div>
                    <div className="space-y-1.5">
                      {[
                        { label: "System Design", tag: "Live", gold: true },
                        { label: "React Patterns", tag: "14:00", gold: false },
                        { label: "DB Sharding", tag: "16:30", gold: false },
                      ].map((item, i) => (
                        <div key={i} className={`flex items-center justify-between p-1.5 rounded-sm border ${item.gold ? "border-[#C9A96E]/30 bg-[#C9A96E]/5" : "border-[#1A1A1A] bg-[#0D0D0D]"}`}>
                          <span className="text-[6px] text-white font-medium truncate pr-1">{item.label}</span>
                          <span className={`text-[5px] font-bold px-1 py-0.5 rounded-sm ${item.gold ? "text-[#C9A96E] bg-[#C9A96E]/10" : "text-[#555555]"}`}>{item.tag}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 pt-2 border-t border-[#1A1A1A]">
                      <div className="text-[6px] text-[#555555] mb-1 font-bold uppercase tracking-wider">Progress</div>
                      <div className="h-1 bg-[#1A1A1A] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "65%" }}
                          transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
                          className="h-full bg-[#C9A96E]"
                        />
                      </div>
                      <div className="text-[5px] text-[#C9A96E] mt-0.5 font-bold">65% complete</div>
                    </div>
                  </div>
                </PhoneFrame>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
