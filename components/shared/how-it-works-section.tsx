"use client"

import { motion } from "framer-motion"
import { fadeUpVariant, staggerContainerVariant, staggerItemVariant } from "@/lib/motion"
import { Video } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Create your programme",
      description: "Define modules, set prerequisites, build a strict curriculum, and configure automated grading rules before inviting a single participant.",
      preview: (
        <div className="w-full bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg p-4">
          <div className="flex justify-between items-center mb-4 pb-3 border-b border-[#1A1A1A]">
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">Programme Builder</span>
            <span className="text-[9px] text-[#A1A1AA] bg-[#111111] px-2 py-1 rounded-sm border border-[#1A1A1A]">Draft</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-[#111111] border border-[#1A1A1A] rounded-md border-l-2 border-l-[#C9A96E]">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-[#0A0A0A] border border-[#1A1A1A] rounded text-[8px] text-[#A1A1AA] flex items-center justify-center">1</div>
                <span className="text-[11px] text-white font-semibold">Core Architecture</span>
              </div>
              <span className="text-[9px] text-[#A1A1AA]">3 Sessions</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#0D0D0D] border border-dashed border-[#1A1A1A] rounded-md">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-[#111111] border border-[#1A1A1A] rounded text-[8px] text-[#333333] flex items-center justify-center">+</div>
                <span className="text-[11px] text-[#444444] font-medium">Add Module</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      step: "02",
      title: "Invite and run sessions",
      description: "Share secure invite links or import your roster. Host HD sessions natively with automatic background attendance tracking running silently.",
      preview: (
        <div className="w-full bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg overflow-hidden">
          <div className="h-28 bg-[#0D0D0D] relative flex items-center justify-center border-b border-[#1A1A1A]">
            <div className="w-10 h-10 rounded-sm bg-[#111111] border border-[#1A1A1A] flex items-center justify-center text-[10px] text-[#A1A1AA] font-bold">SC</div>
            <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 bg-[#0A0A0A] border border-[#1A1A1A] px-2 py-1 rounded-sm">
              <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="w-1.5 h-1.5 rounded-full bg-[#27C93F]" />
              <span className="text-[8px] text-white font-bold tracking-wider">01:24:15</span>
            </div>
          </div>
          <div className="p-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Video className="w-3 h-3 text-[#555555]" />
              <span className="text-[9px] text-[#A1A1AA]">42 participants</span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-6 h-6 rounded-sm bg-[#111111] border border-[#1A1A1A]" />
              <div className="w-6 h-6 rounded-sm bg-[#111111] border border-[#1A1A1A]" />
            </div>
          </div>
        </div>
      )
    },
    {
      step: "03",
      title: "Access data and recordings",
      description: "Dive into granular performance data from the dashboard. Recordings are processed automatically and access is enforced per cohort.",
      preview: (
        <div className="w-full bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg p-4">
          <div className="text-[10px] font-bold text-white uppercase tracking-widest mb-4">Cohort Analytics</div>
          <div className="flex items-end gap-1 h-16 mb-3">
            {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
              <div key={i} className="flex-1 bg-[#111111] border border-[#1A1A1A] rounded-t-sm h-full flex items-end overflow-hidden">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.08, ease: "easeOut" }}
                  className={`w-full ${i === 5 ? "bg-[#C9A96E]/30" : "bg-white/5"}`}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[8px] text-[#333333] uppercase font-bold tracking-widest">
            <span>W1</span><span>W4</span><span>W7</span>
          </div>
        </div>
      )
    }
  ]

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
        </motion.div>

        <div className="relative">
          {/* Vertical timeline connector line */}
          <div className="absolute left-[19px] top-6 bottom-6 w-px bg-[#1A1A1A] hidden md:block" />

          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-20"
          >
            {steps.map((step, idx) => (
              <motion.div key={idx} variants={staggerItemVariant} className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                {/* Step number node */}
                <div className="hidden md:flex items-center justify-center w-10 h-10 bg-[#0D0D0D] border border-[#1A1A1A] rounded-sm relative z-10 shrink-0">
                  <span className="text-[#C9A96E] font-bold text-xs tracking-widest">{step.step}</span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="md:hidden flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[#0A0A0A] border border-[#1A1A1A] rounded-sm flex items-center justify-center">
                      <span className="text-[#C9A96E] font-bold text-xs">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-[#A1A1AA] leading-relaxed font-light text-sm">{step.description}</p>
                </div>

                {/* UI Preview */}
                <motion.div
                  className="flex-1 w-full"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {step.preview}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}