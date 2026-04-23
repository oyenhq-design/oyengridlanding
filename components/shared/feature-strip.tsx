"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Layout, Shield, BarChart3, Zap } from "lucide-react"

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

export function FeatureStrip() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0A0A0A 0%, #0E0E0E 100%)",
        borderTop: "1px solid rgba(255,255,255,0.055)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Very soft centred radial gold glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div
          style={{
            width: 700,
            height: 220,
            background:
              "radial-gradient(ellipse at center, rgba(201,169,110,0.045) 0%, transparent 68%)",
            borderRadius: "50%",
          }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Single horizontal row — no card boxes, separated by thin lines */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          {FEATURES.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 * i, ease: "easeOut" }}
              className="group relative flex items-start gap-4 py-12 px-8
                         transition-transform duration-[250ms] ease-out
                         hover:-translate-y-[2px]"
              style={{
                /* Vertical separators via right border — skip last */
                borderRight:
                  i < FEATURES.length - 1
                    ? "1px solid rgba(255,255,255,0.045)"
                    : undefined,
              }}
            >
              {/* Icon container — no box, just the icon itself */}
              <div className="relative shrink-0 mt-0.5">
                {/* Gold glow on hover — sits behind icon */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-[250ms]"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(201,169,110,0.28) 0%, transparent 70%)",
                    transform: "scale(2.4)",
                  }}
                />
                <Icon
                  className="relative w-[18px] h-[18px] transition-colors duration-[250ms]"
                  style={{
                    color: "rgba(255,255,255,0.28)",
                  }}
                  strokeWidth={1.5}
                  // Tailwind can't do inline style conditionals so we use CSS custom props via group
                />
                {/* Overlay icon that turns gold on hover using opacity trick */}
                <Icon
                  className="absolute inset-0 w-[18px] h-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-[250ms]"
                  style={{ color: "#C9A96E" }}
                  strokeWidth={1.5}
                />
              </div>

              {/* Text */}
              <div>
                <div className="text-[13px] font-semibold text-white mb-1 leading-tight">
                  {title}
                </div>
                <div
                  className="text-[12px] font-light leading-snug"
                  style={{ color: "#6B7280" }}
                >
                  {desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
