"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Layout, Shield, BarChart3, Zap } from "lucide-react"

// ─── Feature data ──────────────────────────────────────────────────────────────
const FEATURES = [
  {
    Icon: Layout,
    title: "All-in-one platform",
    desc: "Every tool your operation needs, unified in one place.",
  },
  {
    Icon: Shield,
    title: "Enterprise-grade security",
    desc: "Built from the ground up with compliance and control.",
  },
  {
    Icon: BarChart3,
    title: "Deep analytics",
    desc: "Real-time data across every programme and participant.",
  },
  {
    Icon: Zap,
    title: "Scalable & reliable",
    desc: "Infrastructure that scales with your organisation.",
  },
]

// ─── Logo data — styled text placeholders ──────────────────────────────────────
const LOGOS: { name: string; style: React.CSSProperties }[] = [
  { name: "ACME Corp",   style: { fontWeight: 700, letterSpacing: "-0.02em", fontSize: "0.82rem" } },
  { name: "GLOBALSCALE", style: { fontWeight: 700, letterSpacing: "0.26em",  fontSize: "0.66rem" } },
  { name: "NovaTech",    style: { fontWeight: 300, letterSpacing: "0.06em",  fontStyle: "italic", fontSize: "0.84rem" } },
  { name: "Lumiere",     style: { fontWeight: 600, letterSpacing: "0.04em",  fontSize: "0.82rem" } },
  { name: "APEX",        style: { fontWeight: 700, letterSpacing: "0.3em",   fontSize: "0.66rem" } },
  { name: "Meridian",    style: { fontWeight: 500, letterSpacing: "0.08em",  fontSize: "0.8rem"  } },
]

// ─── Unified Capability & Trust Section ───────────────────────────────────────
export function CapabilityTrustSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{
        background:   "linear-gradient(180deg, #0A0A0A 0%, #0D0D0D 50%, #0A0A0A 100%)",
        borderTop:    "1px solid rgba(255,255,255,0.052)",
        borderBottom: "1px solid rgba(255,255,255,0.032)",
      }}
    >
      {/* Section-wide gold radial glow — centred, very faint */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 40%, rgba(201,169,110,0.052) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* ════════════════════════════════════════════
            LAYER 1 — Feature capability strip
        ════════════════════════════════════════════ */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          {FEATURES.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={i}
              /*
                cap-item → triggers CSS hover rules in globals.css
                for cap-icon-base / cap-icon-gold / cap-icon-glow
              */
              className="cap-item group relative flex items-start gap-4 px-8 py-16"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.06 * i, ease: "easeOut" }}
              whileHover={{ y: -3, transition: { duration: 0.25, ease: "easeOut" } }}
              style={{
                borderRight:
                  i < FEATURES.length - 1
                    ? "1px solid rgba(255,255,255,0.055)"
                    : undefined,
              }}
            >
              {/* Icon stack */}
              <div className="relative shrink-0 mt-0.5" style={{ width: 18, height: 18 }}>
                {/* Glow orb — hidden by default, shown by CSS on cap-item:hover */}
                <div
                  className="cap-icon-glow absolute rounded-full pointer-events-none"
                  style={{
                    inset: 0,
                    opacity: 0,
                    transform: "scale(3)",
                    background:
                      "radial-gradient(circle at center, rgba(212,175,55,0.24) 0%, transparent 65%)",
                    transition: "opacity 0.25s ease",
                  }}
                />
                {/* Base icon — muted white */}
                <Icon
                  className="cap-icon-base absolute inset-0 w-[18px] h-[18px]"
                  style={{ color: "rgba(255,255,255,0.26)", transition: "color 0.25s ease" }}
                  strokeWidth={1.5}
                />
                {/* Gold icon — hidden by default, shown on hover */}
                <Icon
                  className="cap-icon-gold absolute inset-0 w-[18px] h-[18px]"
                  style={{ color: "#D4AF37", opacity: 0, transition: "opacity 0.25s ease" }}
                  strokeWidth={1.5}
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1.5">
                <span
                  className="text-[13px] font-semibold leading-tight"
                  style={{ color: "rgba(255,255,255,0.88)" }}
                >
                  {title}
                </span>
                <span
                  className="text-[11.5px] font-light leading-snug"
                  style={{ color: "#6B7280" }}
                >
                  {desc}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ════════════════════════════════════════════
            LAYER 2 — Soft gradient divider
            Fades from transparent → faint visible centre → transparent
            Creates breathing space, not a hard line
        ════════════════════════════════════════════ */}
        <div
          aria-hidden
          style={{
            height: 1,
            marginBottom: "3.5rem",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.055) 25%, rgba(255,255,255,0.085) 50%, rgba(255,255,255,0.055) 75%, transparent 100%)",
          }}
        />

        {/* ════════════════════════════════════════════
            LAYER 3 — Trusted logos
        ════════════════════════════════════════════ */}
        <div className="pb-16 flex flex-col items-center gap-10">

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.28, ease: "easeOut" }}
            style={{
              textAlign: "center",
              fontSize: "9.5px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.26em",
              color: "#3A3A3A",
            }}
          >
            Trusted by forward-thinking organisations
          </motion.p>

          {/* Logos row */}
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-5 md:gap-x-20 w-full">
            {LOGOS.map(({ name, style }, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.32 + i * 0.07, ease: "easeOut" }}
                className="cursor-default select-none"
                style={{
                  color: "rgba(255,255,255,0.32)",
                  filter: "grayscale(1)",
                  transition: "color 0.28s ease, filter 0.28s ease",
                  ...style,
                }}
                whileHover={{
                  color: "rgba(255,255,255,0.72)",
                  filter: "grayscale(0) brightness(1.1)",
                  transition: { duration: 0.22 },
                }}
              >
                {name}
              </motion.span>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

/*
  Legacy exports so existing imports in page.tsx don't break
  until we update them — these just re-export the unified component.
*/
export { CapabilityTrustSection as FeatureStrip }
