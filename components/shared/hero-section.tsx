"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion"
import {
  CheckCircle2, Activity, BarChart3, Layout, Calendar,
} from "lucide-react"

function useCountUp(from: number, to: number, delay = 0.9) {
  const [val, setVal] = useState(from)
  useEffect(() => {
    const c = animate(from, to, { duration: 1.6, delay, ease: "easeOut", onUpdate: v => setVal(Math.floor(v)) })
    return () => c.stop()
  }, [from, to, delay])
  return val
}

// ── Hero ──────────────────────────────────────────────────────────────────────
export function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const mxs = useSpring(mouseX, { damping: 40, stiffness: 60 })
  const mys = useSpring(mouseY, { damping: 40, stiffness: 60 })

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
      {/* Subtle gold ambient glow — right side */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 72% 52%, rgba(201,169,110,0.045) 0%, transparent 70%)",
        }}
      />

      <div
        className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16 flex items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[46fr_54fr] gap-12 xl:gap-20 items-center w-full py-28">

          {/* ── LEFT: Copy ── */}
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
              className="text-[#A1A1AA] text-lg leading-relaxed font-light max-w-[420px] mb-8"
            >
              Consolidate your entire operation into one intelligent platform. Built for organisations
              that need strict control, deep analytics, and scalable delivery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.30, ease: "easeOut" }}
              className="space-y-4 mb-10"
            >
              {[
                "Structured programme delivery",
                "Full participant control",
                "Built for real organisations",
              ].map((pt, i) => (
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
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
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

          {/* ── RIGHT: Multi-device composition ── */}
          <div className="relative flex items-center justify-center lg:justify-end select-none">
            {/*
              Device grid (absolute within 580×560 container):
              ┌─────────────────────────────┐
              │          [Tablet]           │ ← top-right, 62% wide, z:10
              │                             │
              │  [Phone]  [Laptop──────────]│ ← laptop bottom-left 90% wide, z:20
              │                             │   phone overlaps bottom-left, z:30
              └─────────────────────────────┘
              All three respond to mouse parallax with different intensities.
            */}
            <div className="relative" style={{ width: 580, height: 540 }}>

              {/* Low-opacity gold glow orb centred behind devices */}
              <div
                aria-hidden
                className="absolute pointer-events-none"
                style={{
                  width: 440,
                  height: 440,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  background:
                    "radial-gradient(ellipse at center, rgba(201,169,110,0.065) 0%, transparent 65%)",
                  borderRadius: "50%",
                }}
              />

              {/* ── Tablet — behind, anchored top-right ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.55, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "62%",
                  zIndex: 10,
                  // slowest parallax — furthest depth feel
                  x: useTransform(mxs, [-0.5, 0.5], [5, -5]),
                  y: useTransform(mys, [-0.5, 0.5], [3, -3]),
                }}
                className="will-change-transform"
              >
                <Image
                  src="/img/tab.png"
                  alt="Tablet view of OYEN Grid"
                  width={720}
                  height={520}
                  className="w-full h-auto"
                  style={{
                    filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.75))",
                    opacity: 0.80,
                  }}
                  priority
                />
              </motion.div>

              {/* ── Laptop — dominant, anchored bottom-left ── */}
              <motion.div
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.0, delay: 0.28, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "90%",
                  zIndex: 20,
                  // mid-speed parallax
                  x: useTransform(mxs, [-0.5, 0.5], [-10, 10]),
                  y: useTransform(mys, [-0.5, 0.5], [-5, 5]),
                }}
                className="will-change-transform"
              >
                <Image
                  src="/img/hero-laptop.png"
                  alt="Laptop dashboard of OYEN Grid"
                  width={1100}
                  height={720}
                  className="w-full h-auto"
                  style={{ filter: "drop-shadow(0 32px 56px rgba(0,0,0,0.9))" }}
                  priority
                />
              </motion.div>

              {/* ── Phone — foreground, bottom-left overlap ── */}
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.85, delay: 0.68, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: "15%",
                  width: "21%",
                  zIndex: 30,
                  // fastest parallax — closest depth feel
                  x: useTransform(mxs, [-0.5, 0.5], [-6, 6]),
                  y: useTransform(mys, [-0.5, 0.5], [-8, 8]),
                }}
                className="will-change-transform"
              >
                <Image
                  src="/img/hero-phone.png"
                  alt="Mobile view of OYEN Grid"
                  width={320}
                  height={640}
                  className="w-full h-auto"
                  style={{ filter: "drop-shadow(0 18px 36px rgba(0,0,0,0.85))" }}
                  priority
                />
              </motion.div>

            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom feature strip ── */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="relative z-10 border-t border-[#1A1A1A]"
      >
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1A1A1A]">
          {[
            { Icon: Layout,       title: "All-in-one platform",      desc: "Everything you need in one place." },
            { Icon: CheckCircle2, title: "Enterprise-grade security", desc: "Built with security at the core." },
            { Icon: BarChart3,    title: "Deep analytics",           desc: "Real-time insights that matter." },
            { Icon: Activity,     title: "Scalable & reliable",      desc: "Built to grow with you." },
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
