"use client"

import { motion } from "framer-motion"
import { X, Check } from "lucide-react"
import { fadeUpVariant, staggerContainerVariant, staggerItemVariant } from "@/lib/motion"

export function PositioningSection() {
  return (
    <section className="py-32 bg-[#0D0D0D] border-b border-[#1A1A1A]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="mb-20 text-center"
        >
          <p className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] mb-4">Positioning</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            This is <span className="text-[#A1A1AA] font-light italic">not</span> another tool
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">

          {/* Left — "Not this" */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainerVariant}
            className="flex flex-col gap-5 border border-[#1A1A1A] rounded-xl p-8 bg-[#0A0A0A]"
          >
            <p className="text-[10px] text-[#555555] uppercase tracking-[0.2em] font-bold mb-2">What it is not</p>
            {["A meeting scheduler", "A chat application", "A simple LMS", "A file storage tool"].map((item, i) => (
              <motion.div key={i} variants={staggerItemVariant} className="flex items-center gap-4 opacity-50">
                <div className="w-7 h-7 rounded-sm border border-[#2A2A2A] flex items-center justify-center shrink-0">
                  <X className="w-3.5 h-3.5 text-[#555555]" strokeWidth={2} />
                </div>
                <span className="text-[#555555] font-medium text-sm line-through decoration-[#333333]">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Right — "What it is" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="flex flex-col justify-between border border-[#C9A96E]/30 rounded-xl p-8 bg-[#101010] relative overflow-hidden"
          >
            {/* Subtle gold corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-[#C9A96E]/20 rounded-tr-xl pointer-events-none" />

            <div>
              <p className="text-[10px] text-[#C9A96E] uppercase tracking-[0.2em] font-bold mb-6">What it actually is</p>
              <h3 className="text-3xl font-bold text-white leading-tight tracking-tight mb-4">
                A Structured<br />Programme<br /><span className="text-[#C9A96E]">Operating System</span>
              </h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed font-light">
                One unified platform where your programmes, sessions, participants, and data live, communicate, and scale together.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {["End-to-end programme lifecycle", "Strict access and permission control", "Deep analytics and audit trails"].map((pt, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-sm border border-[#C9A96E]/30 bg-[#C9A96E]/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#C9A96E]" strokeWidth={2.5} />
                  </div>
                  <span className="text-[#D1D1D1] text-xs font-medium">{pt}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
