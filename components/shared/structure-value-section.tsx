"use client"

import { motion } from "framer-motion"
import { Shield, GitCommit, Search } from "lucide-react"
import { fadeUpVariant, staggerContainerVariant, staggerItemVariant } from "@/lib/motion"

const points = [
  { title: "Immutable Records", description: "Session attendance, chat logs, and recordings are cryptographically sealed on completion.", icon: Shield },
  { title: "Traceable Progress", description: "Every participant action creates an audit trail — views, joins, exits, durations.", icon: GitCommit },
  { title: "Global Search", description: "Query all cohorts, recordings, and participant data instantly across your entire organisation.", icon: Search },
]

export function StructureValueSection() {
  return (
    <section className="py-32 bg-[#0A0A0A] border-b border-[#1A1A1A]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainerVariant}
          >
            <motion.div variants={fadeUpVariant} className="mb-12">
              <p className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] mb-4">Data Architecture</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">The value of pure structure</h2>
              <p className="text-[#A1A1AA] text-base leading-relaxed font-light">
                Generic tools treat data loosely. OYEN Grid enforces strict data models, meaning your operational data becomes an asset you can actually query, analyse, and trust.
              </p>
            </motion.div>

            <div className="space-y-8">
              {points.map((pt, idx) => {
                const Icon = pt.icon
                return (
                  <motion.div key={idx} variants={staggerItemVariant} className="flex gap-5">
                    <div className="shrink-0 mt-0.5">
                      <div className="w-8 h-8 rounded-lg bg-[#111111] border border-[#1A1A1A] flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#C9A96E]" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-1.5 tracking-tight">{pt.title}</h3>
                      <p className="text-[#A1A1AA] text-xs leading-relaxed font-light">{pt.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right — Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-[#0D0D0D] border border-[#1A1A1A] rounded-xl flex items-center justify-center p-12 relative"
            style={{ minHeight: 380 }}
          >
            {/* Central Hub */}
            <div className="relative flex items-center justify-center w-full h-full" style={{ minHeight: 260 }}>

              {/* Pulsing rings */}
              <motion.div
                animate={{ scale: [1, 1.12, 1], opacity: [0.08, 0.2, 0.08] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-36 h-36 border border-[#C9A96E]/20 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.06, 1], opacity: [0.05, 0.12, 0.05] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute w-56 h-56 border border-[#1A1A1A] rounded-full"
              />

              {/* Centre node */}
              <div className="relative z-20 w-16 h-16 bg-[#111111] border border-[#C9A96E]/30 rounded-xl flex flex-col items-center justify-center shadow-lg">
                <div className="w-2 h-2 bg-[#C9A96E] rounded-sm mb-1" />
                <span className="text-[9px] font-bold text-white uppercase tracking-widest">Grid</span>
              </div>

              {/* Orbit nodes */}
              {[
                { label: "Data",      style: { top: "8%",  left: "50%", transform: "translateX(-50%)" } },
                { label: "Sessions",  style: { top: "50%", left: "4%",  transform: "translateY(-50%)" } },
                { label: "Analytics", style: { top: "50%", right: "4%", transform: "translateY(-50%)" } },
                { label: "Access",    style: { top: "84%", left: "50%", transform: "translateX(-50%)" } },
              ].map((node, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.08, borderColor: "rgba(201,169,110,0.4)" }}
                  transition={{ duration: 0.2 }}
                  style={{ position: "absolute", ...node.style }}
                  className="z-20 w-12 h-12 bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg flex items-center justify-center cursor-default"
                >
                  <span className="text-[8px] font-bold text-[#A1A1AA] uppercase tracking-wide">{node.label}</span>
                </motion.div>
              ))}

              {/* Connector lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
                <line x1="50%" y1="50%" x2="50%" y2="12%" stroke="#1A1A1A" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="8%" y2="50%" stroke="#1A1A1A" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="92%" y2="50%" stroke="#1A1A1A" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="50%" y2="88%" stroke="#1A1A1A" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
