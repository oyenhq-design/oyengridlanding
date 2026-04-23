"use client"

import { useEffect, useState } from "react"
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
  Activity,
  BarChart3,
  Layout,
  Calendar,
} from "lucide-react"

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

export function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const mxs = useSpring(mouseX, { damping: 40, stiffness: 55 })
  const mys = useSpring(mouseY, { damping: 40, stiffness: 55 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const r = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - r.left) / r.width - 0.5)
    mouseY.set((e.clientY - r.top) / r.height - 0.5)
  }

  /* Parallax helpers — each layer gets its own speed */
  const pxSlow  = (r: [number, number]) => useTransform(mxs, [-0.5, 0.5], r)
  const pySlow  = (r: [number, number]) => useTransform(mys, [-0.5, 0.5], r)
  const pxMid   = (r: [number, number]) => useTransform(mxs, [-0.5, 0.5], r)
  const pyMid   = (r: [number, number]) => useTransform(mys, [-0.5, 0.5], r)
  const pxFast  = (r: [number, number]) => useTransform(mxs, [-0.5, 0.5], r)
  const pyFast  = (r: [number, number]) => useTransform(mys, [-0.5, 0.5], r)

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0) }}
      className="relative overflow-hidden border-b border-[#1A1A1A]"
      style={{ minHeight: "100vh", background: "#0B0B0B" }}
    >
      {/* ── Ambient background glow (right half) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(212,175,55,0.055) 0%, transparent 65%)",
        }}
      />

      {/* ── Page-wide wrapper ── */}
      <div
        className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-14 flex items-center"
        style={{ minHeight: "100vh" }}
      >
        {/*
          ┌──────────────────────────────────────────────────────────┐
          │  LEFT 45%   │   RIGHT 55% — visual composition           │
          └──────────────────────────────────────────────────────────┘
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] items-center w-full gap-0 py-20">

          {/* ══════════════════════════════════════════
              LEFT — Text block
          ══════════════════════════════════════════ */}
          <div className="flex flex-col pr-8 xl:pr-14">

            {/* 1 · Label */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
              className="flex items-center gap-2.5 mb-6"
            >
              <div className="h-px w-5" style={{ background: "#D4AF37" }} />
              <span
                className="text-[10px] font-bold uppercase tracking-[0.24em]"
                style={{ color: "#D4AF37" }}
              >
                Structured Programme Operating System
              </span>
            </motion.div>

            {/* 2 · Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
              className="font-bold text-white leading-[1.06] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.6rem, 4.2vw, 4.25rem)" }}
            >
              Run and manage<br />
              your programmes<br />
              from a{" "}
              <span
                style={{
                  background: "linear-gradient(92deg, #D4AF37 0%, #F5D27A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                single,<br />structured system.
              </span>
            </motion.h1>

            {/* 3 · Supporting paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22, ease: "easeOut" }}
              className="leading-relaxed font-light max-w-[390px] mb-8"
              style={{ color: "#A1A1AA", fontSize: "1.05rem" }}
            >
              Consolidate your entire operation into one intelligent platform.
              Built for organisations that need strict control, deep analytics,
              and scalable delivery.
            </motion.p>

            {/* 4 · Bullets */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.30, ease: "easeOut" }}
              className="flex flex-col gap-3.5 mb-10"
            >
              {[
                "Structured programme delivery",
                "Full participant control",
                "Built for real organisations",
              ].map((pt, i) => (
                <div key={i} className="flex items-center gap-3.5">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: "#111111",
                      border: "1px solid #1A1A1A",
                    }}
                  >
                    <CheckCircle2
                      className="w-4 h-4"
                      style={{ color: "#D4AF37" }}
                      strokeWidth={2}
                    />
                  </div>
                  <span className="text-sm font-medium" style={{ color: "#E0E0E0" }}>
                    {pt}
                  </span>
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
              {/* Gold primary */}
              <Link href="/get-started">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.16 }}
                  className="flex items-center gap-2.5 font-bold text-sm h-12 px-7 rounded-lg"
                  style={{
                    background: "linear-gradient(92deg, #D4AF37 0%, #F5D27A 100%)",
                    color: "#0B0B0B",
                    boxShadow: "0 0 28px rgba(212,175,55,0.3), 0 4px 14px rgba(0,0,0,0.4)",
                  }}
                >
                  Get Started
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </Link>

              {/* Outline secondary */}
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.03, borderColor: "rgba(255,255,255,0.28)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.16 }}
                  className="flex items-center gap-2.5 bg-transparent text-white font-semibold text-sm h-12 px-7 rounded-lg"
                  style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  Book a Demo
                  <Calendar className="w-4 h-4 opacity-50" />
                </motion.button>
              </Link>
            </motion.div>

            {/* 6 · Trust text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.95 }}
              className="flex items-center gap-2"
            >
              <CheckCircle2 className="w-3.5 h-3.5" style={{ color: "#2D2D2D" }} strokeWidth={1.5} />
              <span className="text-[11px]" style={{ color: "#3D3D3D" }}>
                Trusted by training organisations worldwide
              </span>
            </motion.div>
          </div>

          {/* ══════════════════════════════════════════
              RIGHT — Visual composition

              Z-stack (back → front):
              [1] tab.png × 3  — blurred panels, stacked, top-right behind laptop
              [2] golden glow  — behind laptop
              [3] hero-laptop  — dominant, rotateY(-8deg), 115% scale
              [4] hero-phone   — bottom-left overlap, front

              All layers respond to mouse parallax.
          ══════════════════════════════════════════ */}
          <div
            className="relative hidden lg:block select-none"
            style={{
              /*
                Container is intentionally taller than viewport content
                so the composition "overflows" the right side naturally.
                The overflow-hidden on <section> clips it cleanly.
              */
              height: 720,
              /* Extend visually past the container edge on the right */
              marginRight: "-4rem",
            }}
          >

            {/* ── Gold radial glow — sits behind laptop ── */}
            <div
              aria-hidden
              className="absolute pointer-events-none"
              style={{
                width: 680,
                height: 520,
                top: "50%",
                left: "50%",
                transform: "translate(-44%, -50%)",
                background:
                  "radial-gradient(ellipse at center, rgba(212,175,55,0.10) 0%, rgba(212,175,55,0.03) 40%, transparent 70%)",
                borderRadius: "50%",
                zIndex: 2,
              }}
            />

            {/* ── LAYER 1: tab.png — 3 stacked background panels ── */}

            {/* Panel C — furthest back */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ duration: 0.9, delay: 0.9, ease: "easeOut" }}
              style={{
                position: "absolute",
                top: 0,
                right: "2%",
                width: "80%",
                zIndex: 3,
                filter: "blur(3.5px)",
                transform: "scale(0.90) translateY(-24px)",
                transformOrigin: "top right",
                x: pxSlow([3, -3]),
                y: pySlow([2, -2]),
              }}
              className="will-change-transform"
            >
              <Image
                src="/img/tab.png"
                alt=""
                aria-hidden
                width={900}
                height={640}
                className="w-full h-auto"
                priority
              />
            </motion.div>

            {/* Panel B — middle background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.20 }}
              transition={{ duration: 0.9, delay: 0.75, ease: "easeOut" }}
              style={{
                position: "absolute",
                top: 24,
                right: "1%",
                width: "82%",
                zIndex: 4,
                filter: "blur(2px)",
                transform: "scale(0.94) translateY(-14px)",
                transformOrigin: "top right",
                x: pxSlow([4, -4]),
                y: pySlow([3, -3]),
              }}
              className="will-change-transform"
            >
              <Image
                src="/img/tab.png"
                alt=""
                aria-hidden
                width={900}
                height={640}
                className="w-full h-auto"
                priority
              />
            </motion.div>

            {/* Panel A — closest background panel */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.25 }}
              transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
              style={{
                position: "absolute",
                top: 50,
                right: 0,
                width: "88%",
                zIndex: 5,
                filter: "blur(0.8px)",
                transform: "scale(0.98)",
                transformOrigin: "top right",
                x: pxSlow([5, -5]),
                y: pySlow([4, -4]),
              }}
              className="will-change-transform"
            >
              <Image
                src="/img/tab.png"
                alt=""
                aria-hidden
                width={900}
                height={640}
                className="w-full h-auto"
                priority
              />
            </motion.div>

            {/* ── LAYER 2: hero-laptop.png — dominant hero device ── */}
            <motion.div
              initial={{ opacity: 0, y: 36, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "absolute",
                /*
                  Placed at the bottom of the container, spanning nearly
                  full width. The negative right margin on the parent
                  lets it bleed past the grid boundary for dominance.
                */
                bottom: 0,
                left: "2%",
                right: 0,
                zIndex: 20,
                /* Perspective tilt */
                perspective: 1200,
                x: pxMid([-12, 12]),
                y: pyMid([-6, 6]),
              }}
              className="will-change-transform"
            >
              <div
                style={{
                  transform: "rotateY(-8deg) rotateX(2deg)",
                  transformOrigin: "center bottom",
                  transformStyle: "preserve-3d",
                }}
              >
                <Image
                  src="/img/hero-laptop.png"
                  alt="OYEN Grid dashboard on laptop"
                  width={1400}
                  height={900}
                  className="w-full h-auto"
                  style={{
                    filter:
                      "drop-shadow(0 40px 80px rgba(0,0,0,1)) drop-shadow(0 0 60px rgba(212,175,55,0.08))",
                  }}
                  priority
                />
              </div>
            </motion.div>

            {/* ── LAYER 3: hero-phone.png — front, bottom-left overlap ── */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "absolute",
                bottom: 0,
                /*
                  Place over the left side of the laptop.
                  "left: 0" overlaps the laptop's left edge naturally.
                */
                left: 0,
                /*
                  55–60% of laptop width so phones feel substantial.
                  The laptop occupies ~88% of the container width.
                  60% of that ≈ 53% of container.
                */
                width: "52%",
                zIndex: 30,
                x: pxFast([-10, 10]),
                y: pyFast([-10, 10]),
              }}
              className="will-change-transform"
            >
              <Image
                src="/img/hero-phone.png"
                alt="OYEN Grid on mobile"
                width={780}
                height={900}
                className="w-full h-auto"
                style={{
                  filter:
                    "drop-shadow(0 24px 48px rgba(0,0,0,0.95)) drop-shadow(0 0 24px rgba(0,0,0,0.6))",
                }}
                priority
              />
            </motion.div>

          </div>{/* end right composition */}
        </div>
      </div>

      {/* ── Bottom feature strip ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="relative z-10"
        style={{ borderTop: "1px solid #1A1A1A" }}
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1A1A1A]">
          {[
            { Icon: Layout,       title: "All-in-one platform",       desc: "Everything you need in one place."  },
            { Icon: CheckCircle2, title: "Enterprise-grade security",  desc: "Built with security at the core."   },
            { Icon: BarChart3,    title: "Deep analytics",            desc: "Real-time insights that matter."    },
            { Icon: Activity,     title: "Scalable & reliable",       desc: "Built to grow with you."            },
          ].map(({ Icon, title, desc }, i) => (
            <div key={i} className="flex items-start gap-4 py-7 px-6 first:pl-0 last:pr-0 group">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200"
                style={{
                  background: "#111111",
                  border: "1px solid #1A1A1A",
                }}
              >
                <Icon className="w-4 h-4" style={{ color: "#D4AF37" }} strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-white text-sm font-semibold mb-0.5">{title}</div>
                <div className="text-xs font-light" style={{ color: "#555555" }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
