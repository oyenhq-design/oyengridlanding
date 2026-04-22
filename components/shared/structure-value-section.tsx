"use client"

import { motion } from "framer-motion"

export function StructureValueSection() {
  const pillars = [
    {
      title: "Centralised Control",
      description: "Manage permissions, billing, and settings globally across all your cohorts and trainers.",
    },
    {
      title: "Organised Delivery",
      description: "Strict module structures prevent participants from jumping ahead or getting lost.",
    },
    {
      title: "Clear Oversight",
      description: "Instant visibility into dropout rates, session attendance, and overall engagement.",
    }
  ]

  return (
    <section className="py-32 bg-[#0A0A0A] border-b border-[#1F1F23] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Maintain structure at <span className="text-[#C9A96E]">every level</span>
            </h2>
            <p className="text-[#A1A1AA] text-lg font-light mb-16 max-w-lg leading-relaxed">
              OYEN Grid enforces a strict hierarchy that scales. Whether you are running one bootcamp or a hundred corporate training tracks, nothing falls through the cracks.
            </p>

            <div className="space-y-10">
              {pillars.map((pillar, idx) => {
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-start gap-6 border-l border-[#1F1F23] pl-6 hover:border-[#C9A96E] transition-colors"
                  >
                    <div>
                      <h3 className="text-white font-semibold mb-2 tracking-tight">{pillar.title}</h3>
                      <p className="text-[#A1A1AA] text-sm leading-relaxed font-light">{pillar.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right: Minimal Grid/Structure Visual */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] w-full flex items-center justify-center bg-[#0A0A0A] border border-[#1F1F23] rounded-sm"
          >
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1F1F23_1px,transparent_1px),linear-gradient(to_bottom,#1F1F23_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
            
            {/* Architectural Nodes */}
            <div className="relative w-full max-w-[320px] aspect-square">
              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#111113] border border-[#C9A96E] rounded-sm z-20 flex items-center justify-center">
                <div className="w-2 h-2 bg-[#C9A96E] rounded-full" />
              </div>

              {/* Connecting Lines (Horizontal & Vertical) */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-[#1F1F23] -translate-y-1/2 z-10" />
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#1F1F23] -translate-x-1/2 z-10" />

              {/* Surrounding Nodes */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#0A0A0A] border border-[#1F1F23] rounded-sm z-20" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-[#0A0A0A] border border-[#1F1F23] rounded-sm z-20" />
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#0A0A0A] border border-[#1F1F23] rounded-sm z-20" />
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#0A0A0A] border border-[#1F1F23] rounded-sm z-20" />
              
              {/* Corner Nodes */}
              <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#111113] border border-[#1F1F23] rounded-sm z-20" />
              <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#111113] border border-[#1F1F23] rounded-sm z-20" />
              <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-[#111113] border border-[#1F1F23] rounded-sm z-20" />
              <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-4 h-4 bg-[#111113] border border-[#1F1F23] rounded-sm z-20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
