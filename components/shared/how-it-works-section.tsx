"use client"

import { motion } from "framer-motion"

export function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Create Programme",
      description: "Define strict prerequisites, build modular curriculums, and set automated grading rules before inviting anyone.",
      uiPreview: (
        <div className="w-full bg-[#0A0A0A] border border-[#1F1F23] rounded-sm p-5 shadow-sm">
          <div className="flex justify-between items-center mb-4 pb-3 border-b border-[#1F1F23]">
            <div className="text-xs font-bold text-white uppercase tracking-widest">Programme Builder</div>
            <div className="text-[10px] text-[#A1A1AA] bg-[#111113] px-2 py-1 rounded-sm border border-[#1F1F23]">Draft Mode</div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-[#111113] border border-[#1F1F23] rounded-sm border-l-2 border-l-[#C9A96E]">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-[#0A0A0A] border border-[#1F1F23] rounded-sm flex items-center justify-center text-[8px] text-[#A1A1AA]">1</div>
                <span className="text-xs text-white font-medium">Core Architecture</span>
              </div>
              <span className="text-[10px] text-[#A1A1AA]">3 Sessions</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#0A0A0A] border border-[#1F1F23] rounded-sm border-dashed">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-[#111113] border border-[#1F1F23] rounded-sm flex items-center justify-center text-[8px] text-[#555555]">+</div>
                <span className="text-xs text-[#555555] font-medium">Add Module</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      step: "02",
      title: "Invite & Run Sessions",
      description: "Import your roster or share secure invite links. Host HD sessions natively with background attendance tracking.",
      uiPreview: (
        <div className="w-full bg-[#0A0A0A] border border-[#1F1F23] rounded-sm overflow-hidden shadow-sm">
          <div className="bg-[#1A1A1E] h-32 relative flex items-center justify-center">
            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
            <div className="w-12 h-12 rounded-sm bg-[#111113] border border-[#1F1F23] flex items-center justify-center">
              <div className="text-[#A1A1AA] text-[10px] font-bold">SC</div>
            </div>
            <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#0A0A0A] px-2 py-1 rounded-sm border border-[#1F1F23]">
              <div className="w-1.5 h-1.5 bg-[#27C93F] rounded-full" />
              <span className="text-[8px] text-white font-bold tracking-wider uppercase">01:24:15</span>
            </div>
          </div>
          <div className="p-3 border-t border-[#1F1F23] flex justify-between items-center bg-[#111113]">
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-[#0A0A0A] border border-[#1F1F23] rounded-sm" />
              <div className="w-6 h-6 bg-[#0A0A0A] border border-[#1F1F23] rounded-sm" />
            </div>
            <div className="text-[10px] text-[#A1A1AA]">42 Participants</div>
          </div>
        </div>
      )
    },
    {
      step: "03",
      title: "Access & Analyse",
      description: "Dive into granular performance data. Recordings process automatically and permissions are strictly enforced.",
      uiPreview: (
        <div className="w-full bg-[#0A0A0A] border border-[#1F1F23] rounded-sm p-4 shadow-sm">
          <div className="text-xs font-bold text-white uppercase tracking-widest mb-4">Cohort Performance</div>
          <div className="flex items-end gap-1 h-20 mb-3 border-b border-[#1F1F23] pb-1">
            {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
              <div key={i} className="flex-1 bg-[#111113] border border-[#1F1F23] rounded-t-sm" style={{ height: `${h}%` }}>
                {i === 5 && <div className="w-full h-full bg-[#C9A96E]/20 border-t border-[#C9A96E]" />}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[8px] text-[#555555] uppercase font-bold tracking-widest">
            <span>W1</span>
            <span>W4</span>
            <span>W7</span>
          </div>
        </div>
      )
    }
  ]

  return (
    <section className="py-32 bg-[#0A0A0A] border-b border-[#1F1F23]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">How It Works</h2>
          <p className="text-[#A1A1AA] text-lg font-light">From zero to a fully operational programme in three steps.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-[#1F1F23] hidden md:block" />

          <div className="space-y-24">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row gap-10 md:gap-16 items-start">
                
                {/* Timeline Node & Number */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 bg-[#0A0A0A] border border-[#1F1F23] rounded-sm relative z-10 shrink-0 shadow-sm">
                  <span className="text-[#C9A96E] font-bold text-sm tracking-widest">{step.step}</span>
                </div>

                {/* Content Side */}
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex-1 pt-2"
                >
                  <div className="md:hidden flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[#0A0A0A] border border-[#1F1F23] rounded-sm flex items-center justify-center">
                      <span className="text-[#C9A96E] font-bold text-xs">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-[#A1A1AA] leading-relaxed font-light text-base">
                    {step.description}
                  </p>
                </motion.div>

                {/* UI Preview Side */}
                <motion.div 
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex-1 w-full"
                >
                  {step.uiPreview}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}