"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Create Programme",
      description: "Set up your programme structure with modules, sessions, and timelines.",
      bullets: [
        "Define strict prerequisites",
        "Build modular curriculums",
        "Set automated grading rules"
      ],
      uiPreview: (
        <div className="h-full w-full bg-[#0A0A0A] p-4 flex flex-col justify-center">
          <div className="w-full bg-[#111113] border border-[#1F1F23] rounded-lg p-3 mb-2 shadow-lg">
            <div className="flex justify-between items-center mb-2">
              <div className="h-2 w-16 bg-[#C9A96E] rounded" />
              <div className="h-2 w-8 bg-[#1F1F23] rounded" />
            </div>
            <div className="h-1 w-full bg-[#1F1F23] rounded mb-1" />
            <div className="h-1 w-3/4 bg-[#1F1F23] rounded" />
          </div>
          <div className="w-full bg-[#111113] border border-[#1F1F23] rounded-lg p-3 shadow-lg opacity-50 ml-4">
            <div className="h-2 w-20 bg-[#333333] rounded mb-2" />
            <div className="h-1 w-full bg-[#1F1F23] rounded mb-1" />
            <div className="h-1 w-1/2 bg-[#1F1F23] rounded" />
          </div>
        </div>
      )
    },
    {
      step: "02",
      title: "Invite & Run Sessions",
      description: "Add participants and deliver sessions with live tracking and engagement tools.",
      bullets: [
        "One-click invite links",
        "HD browser-based sessions",
        "Live attendance tracking"
      ],
      uiPreview: (
        <div className="h-full w-full bg-[#0A0A0A] p-4 flex items-center justify-center relative">
          <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 h-24 border border-[#1F1F23] rounded-lg bg-[#111113] flex overflow-hidden">
            <div className="flex-1 bg-[#1A1A1E] flex items-center justify-center relative">
               <div className="w-6 h-6 rounded-full bg-[#333333] flex items-center justify-center">
                 <div className="w-2 h-2 bg-[#A1A1AA] rounded-full" />
               </div>
               <div className="absolute bottom-1 right-1 px-1 bg-[#27C93F] text-black text-[6px] font-bold rounded">LIVE</div>
            </div>
            <div className="w-16 border-l border-[#1F1F23] bg-[#0A0A0A] flex flex-col p-1 gap-1">
              <div className="flex-1 bg-[#111113] rounded border border-[#1F1F23]" />
              <div className="flex-1 bg-[#111113] rounded border border-[#1F1F23]" />
            </div>
          </div>
        </div>
      )
    },
    {
      step: "03",
      title: "Access & Analyse",
      description: "Access recordings, track completion, and generate insights from your programme data.",
      bullets: [
        "Granular performance data",
        "Auto-processed recordings",
        "Custom certificates"
      ],
      uiPreview: (
        <div className="h-full w-full bg-[#0A0A0A] p-4 flex flex-col justify-center">
           <div className="flex items-end gap-2 h-16 mb-2 border-b border-[#1F1F23] pb-1 px-2">
             <div className="w-1/4 bg-[#1F1F23] h-1/3 rounded-t" />
             <div className="w-1/4 bg-[#C9A96E] h-full rounded-t" />
             <div className="w-1/4 bg-[#1F1F23] h-2/3 rounded-t" />
             <div className="w-1/4 bg-[#1F1F23] h-1/2 rounded-t" />
           </div>
           <div className="flex justify-between px-2">
             <div className="h-1 w-6 bg-[#333333] rounded" />
             <div className="h-1 w-6 bg-[#333333] rounded" />
             <div className="h-1 w-6 bg-[#333333] rounded" />
             <div className="h-1 w-6 bg-[#333333] rounded" />
           </div>
        </div>
      )
    }
  ]

  return (
    <section className="py-24 bg-[#0A0A0A] border-b border-[#1F1F23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-[#A1A1AA] text-lg font-light">From zero to a fully operational programme in three steps.</p>
        </div>

        <div className="space-y-12">
          {steps.map((step, idx) => {
            const isEven = idx % 2 !== 0;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content Side */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-[#C9A96E] font-mono text-sm border border-[#C9A96E]/30 px-2 py-0.5 rounded bg-[#C9A96E]/5">
                      STEP {step.step}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-[#A1A1AA] leading-relaxed font-light text-lg border-l border-[#1F1F23] pl-4">
                    {step.description}
                  </p>
                  <ul className="space-y-3 pt-2">
                    {step.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-[#C9A96E]" />
                        <span className="text-[#A1A1AA] text-sm">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* UI Preview Side */}
                <div className="flex-1 w-full lg:w-auto h-[250px] bg-[#111113] border border-[#1F1F23] rounded-2xl overflow-hidden shadow-xl">
                  {step.uiPreview}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}