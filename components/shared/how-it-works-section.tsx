"use client"

import { motion } from "framer-motion"
import { fadeUpVariant, staggerContainerVariant, staggerItemVariant } from "@/lib/motion"
import { Video, BarChart3 } from "lucide-react"

// ─── Minimal device frame helpers ────────────────────────────────────────────

function DesktopFrame({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="rounded-t-lg border border-[#2A2A2A] bg-[#111111] overflow-hidden shadow-[0_20px_48px_rgba(0,0,0,0.6)]">
        <div className="h-5 bg-[#0D0D0D] border-b border-[#1A1A1A] flex items-center px-2.5 gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#2A2A2A]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#2A2A2A]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#2A2A2A]" />
          <div className="flex-1 mx-2 h-2.5 bg-[#1A1A1A] rounded-sm" />
        </div>
        {children}
      </div>
      <div className="h-2.5 bg-[#0D0D0D] border-x border-[#2A2A2A] mx-[42%]" />
      <div className="h-1 bg-[#1A1A1A] rounded-sm mx-[32%] border border-[#2A2A2A]" />
    </div>
  )
}

function TabletFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border-2 border-[#222222] bg-[#0D0D0D] overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
      <div className="h-4 bg-[#0A0A0A] border-b border-[#1A1A1A] flex items-center justify-center">
        <div className="w-6 h-1 bg-[#1A1A1A] rounded-full" />
      </div>
      {children}
      <div className="h-3 bg-[#0A0A0A] border-t border-[#1A1A1A] flex items-center justify-center">
        <div className="w-5 h-0.5 bg-[#2A2A2A] rounded-full" />
      </div>
    </div>
  )
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border-2 border-[#222222] bg-[#0D0D0D] overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.6)]">
      <div className="h-4 bg-[#0A0A0A] border-b border-[#1A1A1A] flex items-center justify-center">
        <div className="w-8 h-1 bg-[#1A1A1A] rounded-full" />
      </div>
      {children}
      <div className="h-4 bg-[#0A0A0A] border-t border-[#1A1A1A] flex items-center justify-center">
        <div className="w-5 h-0.5 bg-[#2A2A2A] rounded-full" />
      </div>
    </div>
  )
}

// ─── Step data ────────────────────────────────────────────────────────────────

const steps = [
  {
    step: "01",
    device: "Desktop",
    title: "Create your programme",
    description: "Define modules, set prerequisites, build a strict curriculum, and configure automated grading rules before inviting a single participant.",
    preview: (
      <DesktopFrame>
        <div className="bg-[#0A0A0A] p-4">
          <div className="flex justify-between items-center mb-3 pb-2.5 border-b border-[#1A1A1A]">
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">Programme Builder</span>
            <span className="text-[8px] text-[#A1A1AA] bg-[#111111] px-2 py-0.5 rounded-sm border border-[#1A1A1A]">Draft</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between p-2.5 bg-[#111111] border border-[#1A1A1A] rounded-md border-l-2 border-l-[#C9A96E]">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#0A0A0A] border border-[#1A1A1A] rounded text-[7px] text-[#A1A1AA] flex items-center justify-center font-bold">1</div>
                <span className="text-[10px] text-white font-semibold">Core Architecture</span>
              </div>
              <span className="text-[8px] text-[#A1A1AA]">3 Sessions</span>
            </div>
            <div className="flex items-center justify-between p-2.5 bg-[#0D0D0D] border border-[#1A1A1A] rounded-md">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#111111] border border-[#1A1A1A] rounded text-[7px] text-[#555555] flex items-center justify-center font-bold">2</div>
                <span className="text-[10px] text-[#555555] font-medium">Advanced Patterns</span>
              </div>
              <span className="text-[8px] text-[#333333]">Locked</span>
            </div>
            <div className="flex items-center justify-between p-2.5 bg-[#0D0D0D] border border-dashed border-[#1A1A1A] rounded-md">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#111111] border border-[#1A1A1A] rounded text-[7px] text-[#333333] flex items-center justify-center">+</div>
                <span className="text-[10px] text-[#333333]">Add Module</span>
              </div>
            </div>
          </div>
        </div>
      </DesktopFrame>
    ),
  },
  {
    step: "02",
    device: "Tablet",
    title: "Invite and run sessions",
    description: "Share secure invite links or import your roster. Host HD sessions natively with automatic background attendance tracking running silently.",
    preview: (
      <div className="max-w-[320px]">
        <TabletFrame>
          <div className="bg-[#0A0A0A] p-4">
            <div className="flex justify-between items-center mb-3">
              <div>
                <div className="text-[10px] font-bold text-white">Session Control</div>
                <div className="text-[8px] text-[#555555]">Q3 Engineering Bootcamp</div>
              </div>
              <div className="flex items-center gap-1.5 bg-[#0D0D0D] border border-[#1A1A1A] px-2 py-1 rounded-sm">
                <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-[#27C93F]" />
                <span className="text-[8px] text-white font-bold tracking-wider">01:24:15</span>
              </div>
            </div>
            {/* Video stage */}
            <div className="h-24 bg-[#0D0D0D] border border-[#1A1A1A] rounded-md flex items-center justify-center mb-3 relative overflow-hidden">
              <div className="w-10 h-10 rounded-sm bg-[#111111] border border-[#1A1A1A] flex items-center justify-center text-[10px] text-[#A1A1AA] font-bold">SC</div>
              <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-7 h-7 rounded-sm bg-[#111111] border border-[#1A1A1A] flex items-center justify-center text-[7px] text-[#555555] font-bold">P{i}</div>
                ))}
                <div className="w-7 h-7 rounded-sm bg-[#111111] border border-[#1A1A1A] flex items-center justify-center text-[7px] text-[#333333]">+38</div>
              </div>
            </div>
            {/* Controls */}
            <div className="grid grid-cols-4 gap-1.5">
              {[
                { label: "Mute", active: false },
                { label: "Video", active: true },
                { label: "Chat", active: false },
                { label: "End", active: false, danger: true },
              ].map((btn, i) => (
                <div key={i} className={`py-1.5 rounded-sm border text-[7px] font-bold flex items-center justify-center cursor-default ${
                  btn.danger ? "border-red-900/30 text-red-500/70 bg-red-950/20"
                  : btn.active ? "border-[#C9A96E]/40 text-[#C9A96E] bg-[#C9A96E]/10"
                  : "border-[#1A1A1A] text-[#555555]"
                }`}>{btn.label}</div>
              ))}
            </div>
          </div>
        </TabletFrame>
      </div>
    ),
  },
  {
    step: "03",
    device: "Phone",
    title: "Access data and recordings",
    description: "Dive into granular performance data from the dashboard. Recordings are processed automatically and access is enforced per cohort.",
    preview: (
      <div className="max-w-[200px]">
        <PhoneFrame>
          <div className="bg-[#0A0A0A] p-3">
            <div className="text-[8px] font-bold text-white uppercase tracking-widest mb-3">My Progress</div>
            {/* Progress ring placeholder — using bar */}
            <div className="bg-[#0D0D0D] border border-[#1A1A1A] rounded-md p-3 mb-3 flex items-center gap-3">
              <div className="relative w-10 h-10 shrink-0">
                <svg viewBox="0 0 36 36" className="w-10 h-10 -rotate-90">
                  <circle cx="18" cy="18" r="15" fill="none" stroke="#1A1A1A" strokeWidth="3" />
                  <motion.circle
                    cx="18" cy="18" r="15" fill="none"
                    stroke="#C9A96E" strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="94.2"
                    initial={{ strokeDashoffset: 94.2 }}
                    whileInView={{ strokeDashoffset: 94.2 * 0.35 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[8px] font-bold text-[#C9A96E]">65%</span>
                </div>
              </div>
              <div>
                <div className="text-[9px] font-bold text-white mb-0.5">Module 1</div>
                <div className="text-[7px] text-[#555555]">Core Architecture</div>
              </div>
            </div>
            {/* Mini chart */}
            <div className="bg-[#0D0D0D] border border-[#1A1A1A] rounded-md p-2.5">
              <div className="flex items-center gap-1 mb-2">
                <BarChart3 className="w-2.5 h-2.5 text-[#555555]" />
                <span className="text-[7px] text-[#555555] uppercase font-bold tracking-wider">Attendance</span>
              </div>
              <div className="flex items-end gap-0.5 h-8">
                {[55, 70, 60, 90, 75, 95, 80].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.07, ease: "easeOut" }}
                    style={{ transformOrigin: "bottom", height: `${h}%` }}
                    className={`flex-1 rounded-t-sm ${i === 5 ? "bg-[#C9A96E]/40" : "bg-white/8"}`}
                  />
                ))}
              </div>
            </div>
            {/* Recordings list */}
            <div className="mt-2.5 space-y-1.5">
              {[{ name: "Session 01", size: "420 MB" }, { name: "Session 02", size: "380 MB" }].map((rec, i) => (
                <div key={i} className="flex items-center justify-between p-1.5 bg-[#0D0D0D] border border-[#1A1A1A] rounded-sm">
                  <div className="flex items-center gap-1.5">
                    <Video className="w-2.5 h-2.5 text-[#555555]" />
                    <span className="text-[7px] text-[#A1A1AA] font-medium">{rec.name}</span>
                  </div>
                  <span className="text-[6px] text-[#333333]">{rec.size}</span>
                </div>
              ))}
            </div>
          </div>
        </PhoneFrame>
      </div>
    ),
  },
]

// ─── Section ─────────────────────────────────────────────────────────────────

export function HowItWorksSection() {
  return (
    <section className="py-32 bg-[#0D0D0D] border-b border-[#1A1A1A]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="mb-20"
        >
          <p className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] mb-4">Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">How it works</h2>
          <p className="text-[#A1A1AA] text-base font-light mt-3 max-w-xl">
            The same system, from any context — desktop, tablet, or mobile.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-[19px] top-6 bottom-6 w-px bg-[#1A1A1A] hidden md:block" />

          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-24"
          >
            {steps.map((step, idx) => (
              <motion.div key={idx} variants={staggerItemVariant} className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">

                {/* Step node */}
                <div className="hidden md:flex flex-col items-center gap-2 shrink-0 relative z-10">
                  <div className="w-10 h-10 bg-[#0D0D0D] border border-[#1A1A1A] rounded-sm flex items-center justify-center">
                    <span className="text-[#C9A96E] font-bold text-xs tracking-widest">{step.step}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 md:max-w-[280px] pt-1 shrink-0">
                  <div className="md:hidden flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[#0A0A0A] border border-[#1A1A1A] rounded-sm flex items-center justify-center">
                      <span className="text-[#C9A96E] font-bold text-xs">{step.step}</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 bg-[#111111] border border-[#1A1A1A] px-2 py-0.5 rounded-sm mb-3">
                    <span className="text-[8px] font-bold text-[#555555] uppercase tracking-widest">{step.device}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-[#A1A1AA] leading-relaxed font-light text-sm">{step.description}</p>
                </div>

                {/* Device UI preview */}
                <motion.div
                  className="flex-1 w-full"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 7 + idx * 1.5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                  >
                    {step.preview}
                  </motion.div>
                </motion.div>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}