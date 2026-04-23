"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const LOGOS = [
  { name: "ACME Corp",    style: { fontWeight: 700, letterSpacing: "-0.02em" } },
  { name: "GlobalScale",  style: { fontWeight: 700, letterSpacing: "0.28em",  textTransform: "uppercase" as const, fontSize: "0.7rem" } },
  { name: "NovaTech",     style: { fontWeight: 300, letterSpacing: "0.06em",  fontStyle: "italic" } },
  { name: "Lumiere",      style: { fontWeight: 600, letterSpacing: "0.04em" } },
  { name: "APEX",         style: { fontWeight: 700, letterSpacing: "0.32em",  textTransform: "uppercase" as const, fontSize: "0.68rem" } },
  { name: "Meridian",     style: { fontWeight: 500, letterSpacing: "0.08em" } },
]

export function TrustStrip() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{
        background: "#0A0A0A",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-14">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center text-[10px] font-semibold uppercase tracking-[0.22em] mb-10"
          style={{ color: "#3D3D3D" }}
        >
          Trusted by forward-thinking organisations
        </motion.p>

        {/* Logos row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6 md:gap-x-20"
        >
          {LOGOS.map(({ name, style }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.12 + i * 0.07, ease: "easeOut" }}
              className="cursor-default select-none transition-all duration-300 ease-out"
              style={{
                color: "rgba(255,255,255,0.38)",
                fontSize: "0.8rem",
                filter: "grayscale(1)",
                ...style,
              }}
              whileHover={{
                color: "rgba(255,255,255,0.75)",
                filter: "grayscale(0) brightness(1.15)",
                transition: { duration: 0.22 },
              }}
            >
              {name}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
