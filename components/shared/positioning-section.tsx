"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { X, Check } from "lucide-react"

const NOT_LIST = [
  { label: "A meeting scheduler",    desc: "Bookings without programme context"  },
  { label: "A chat application",     desc: "Communication without structure"      },
  { label: "A basic LMS",           desc: "Courses without operational control"  },
  { label: "A file storage tool",    desc: "Assets without programme awareness"  },
]

const IS_LIST = [
  "End-to-end programme lifecycle",
  "Strict access and permission control",
  "Deep analytics and audit trails",
]

export function PositioningSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background: "#0D0D0D",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        paddingTop: "6rem",
        paddingBottom: "6rem",
      }}
    >
      {/* Faint radial glow — drawn toward right side to match dominance */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 72% 55%, rgba(201,169,110,0.055) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          {/* Label */}
          <p
            className="uppercase font-semibold mb-5"
            style={{ fontSize: 10, letterSpacing: "0.26em", color: "#555555" }}
          >
            Positioning
          </p>

          {/* Headline */}
          <h2
            className="font-bold text-white leading-[1.08] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.6rem, 4vw, 3.5rem)" }}
          >
            This is{" "}
            <em
              className="not-italic"
              style={{
                color: "#A1A1AA",
                fontWeight: 300,
                fontStyle: "italic",
              }}
            >
              not
            </em>{" "}
            another tool
          </h2>

          {/* Sub-headline */}
          <p
            className="font-light leading-relaxed max-w-[480px]"
            style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.6 }}
          >
            Most platforms solve fragments.{" "}
            <span style={{ color: "#9CA3AF" }}>
              This replaces the entire system.
            </span>
          </p>
        </motion.div>

        {/* ── Two-column comparison ── */}
        {/*
          Layout:  LEFT ~42%  |  RIGHT ~58%
          Right is visually dominant — wider, brighter, elevated card.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[42fr_58fr] gap-6 xl:gap-8 items-stretch">

          {/* ═══════════════════════════════════════
              LEFT — "What it is NOT"
              Readable but clearly secondary.
          ═══════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col"
            style={{
              background: "#0A0A0A",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "1rem",
              padding: "2rem 2rem 2.5rem",
            }}
          >
            {/* Column label */}
            <p
              className="font-semibold uppercase mb-6"
              style={{ fontSize: 10, letterSpacing: "0.22em", color: "#3D3D3D" }}
            >
              What it is not
            </p>

            <div className="flex flex-col gap-4">
              {NOT_LIST.map(({ label, desc }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.18 + i * 0.08, ease: "easeOut" }}
                  className="not-item group flex items-start gap-4 cursor-default"
                  style={{ transition: "opacity 0.2s ease" }}
                >
                  {/* X icon — neutral, faint red glow on hover */}
                  <div
                    className="not-icon shrink-0 mt-0.5 rounded-md flex items-center justify-center"
                    style={{
                      width: 28,
                      height: 28,
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      transition: "box-shadow 0.25s ease, border-color 0.25s ease",
                    }}
                  >
                    <X
                      className="w-3.5 h-3.5"
                      style={{ color: "#555555", transition: "color 0.25s ease" }}
                      strokeWidth={2}
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <span
                      className="not-label block font-medium"
                      style={{
                        fontSize: 15,
                        color: "#A1A1AA",
                        lineHeight: 1.3,
                        transition: "color 0.22s ease",
                        textDecoration: "line-through",
                        textDecorationColor: "rgba(255,255,255,0.1)",
                      }}
                    >
                      {label}
                    </span>
                    <span
                      className="block font-light mt-0.5"
                      style={{ fontSize: 12, color: "#4B4B4B", lineHeight: 1.5 }}
                    >
                      {desc}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════
              RIGHT — "What it actually IS"
              Dominant, elevated, premium card.
          ═══════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 16, y: 8 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
            whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
            className="relative flex flex-col justify-between overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #131313 0%, #0F0F0F 100%)",
              border: "1px solid rgba(201,169,110,0.22)",
              borderRadius: "1rem",
              padding: "2.5rem",
              boxShadow: "0 0 0 1px rgba(201,169,110,0.04), 0 24px 48px rgba(0,0,0,0.5)",
              cursor: "default",
              transition: "border-color 0.25s ease, box-shadow 0.25s ease",
            }}
          >
            {/* Radial glow behind card content */}
            <div
              aria-hidden
              className="pointer-events-none absolute"
              style={{
                top: -60,
                right: -60,
                width: 340,
                height: 340,
                background:
                  "radial-gradient(circle at center, rgba(201,169,110,0.08) 0%, transparent 65%)",
                borderRadius: "50%",
              }}
            />

            {/* Top-right corner accent line */}
            <div
              aria-hidden
              className="pointer-events-none absolute top-0 right-0"
              style={{
                width: 80,
                height: 80,
                borderTop: "1px solid rgba(201,169,110,0.25)",
                borderRight: "1px solid rgba(201,169,110,0.25)",
                borderRadius: "0 1rem 0 0",
              }}
            />

            <div className="relative">
              {/* Column label */}
              <p
                className="font-bold uppercase mb-6"
                style={{ fontSize: 10, letterSpacing: "0.22em", color: "#C9A96E" }}
              >
                What it actually is
              </p>

              {/* Main title */}
              <h3
                className="font-bold leading-tight tracking-tight mb-5"
                style={{ fontSize: "clamp(1.75rem, 2.6vw, 2.25rem)", color: "#FFFFFF" }}
              >
                A Structured<br />
                Programme{" "}
                <span style={{ color: "#C9A96E" }}>Operating System</span>
              </h3>

              {/* Description */}
              <p
                className="font-light leading-relaxed"
                style={{ fontSize: 15, color: "#A1A1AA", lineHeight: 1.65, maxWidth: 460 }}
              >
                One unified platform where your programmes, sessions, participants,
                and data live, communicate, and scale together — without stitching
                tools together.
              </p>
            </div>

            {/* Divider */}
            <div
              aria-hidden
              style={{
                height: 1,
                margin: "2rem 0",
                background:
                  "linear-gradient(90deg, transparent, rgba(201,169,110,0.15) 40%, rgba(201,169,110,0.15) 60%, transparent)",
              }}
            />

            {/* Feature bullets */}
            <div className="relative flex flex-col gap-3.5">
              {IS_LIST.map((pt, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 8 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.38 + i * 0.09, ease: "easeOut" }}
                  className="flex items-center gap-3.5"
                >
                  {/* Gold checkmark circle */}
                  <div
                    className="shrink-0 rounded-full flex items-center justify-center"
                    style={{
                      width: 22,
                      height: 22,
                      background: "rgba(201,169,110,0.12)",
                      border: "1px solid rgba(201,169,110,0.3)",
                    }}
                  >
                    <Check className="w-3 h-3 text-[#C9A96E]" strokeWidth={2.5} />
                  </div>
                  <span
                    className="font-medium"
                    style={{ fontSize: 15, color: "rgba(255,255,255,0.88)", lineHeight: 1.4 }}
                  >
                    {pt}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* CSS hover rules for left-side items */}
      <style>{`
        .not-item:hover .not-label   { color: #D1D1D1 !important; text-decoration-color: rgba(255,255,255,0.18) !important; }
        .not-item:hover .not-icon    { box-shadow: 0 0 10px rgba(220,80,80,0.12) !important; border-color: rgba(220,80,80,0.2) !important; }
        .not-item:hover .not-icon svg { color: #C05050 !important; }
      `}</style>
    </section>
  )
}
