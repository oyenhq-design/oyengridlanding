"use client"

import { motion } from "framer-motion"
import { Shield, LayoutGrid, Eye } from "lucide-react"

export function StructureValueSection() {
  const pillars = [
    {
      title: "Centralised Control",
      description: "Manage permissions, billing, and settings globally across all your cohorts and trainers.",
      icon: Shield
    },
    {
      title: "Organised Delivery",
      description: "Strict module structures prevent participants from jumping ahead or getting lost.",
      icon: LayoutGrid
    },
    {
      title: "Clear Oversight",
      description: "Instant visibility into dropout rates, session attendance, and overall engagement.",
      icon: Eye
    }
  ]

  return (
    <section className="py-24 bg-[#0A0A0A] border-b border-[#1F1F23] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Maintain structure at <span className="text-[#C9A96E]">every level</span>
            </h2>
            <p className="text-[#A1A1AA] text-lg font-light mb-12 max-w-lg leading-relaxed">
              OYEN Grid enforces a strict hierarchy that scales. Whether you are running one bootcamp or a hundred corporate training tracks, nothing falls through the cracks.
            </p>

            <div className="space-y-8">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded bg-[#111113] border border-[#1F1F23] flex items-center justify-center shrink-0 mt-1">
                      <Icon className="w-5 h-5 text-[#C9A96E]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{pillar.title}</h3>
                      <p className="text-[#A1A1AA] text-sm leading-relaxed font-light">{pillar.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right: Radial Visual Built with CSS & Framer Motion */}
          <div className="relative h-[500px] flex items-center justify-center">
            {/* Background grids */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1F1F23_1px,transparent_1px),linear-gradient(to_bottom,#1F1F23_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)] opacity-20 pointer-events-none" />
            
            <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
              
              {/* Outer Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-[#1F1F23] rounded-full flex items-center justify-center"
              >
                <div className="absolute top-0 -translate-y-1/2 w-3 h-3 rounded-full bg-[#1F1F23]" />
                <div className="absolute bottom-0 translate-y-1/2 w-3 h-3 rounded-full bg-[#1F1F23]" />
              </motion.div>

              {/* Middle Ring */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-12 border border-[#1F1F23] border-dashed rounded-full flex items-center justify-center"
              >
                <div className="absolute left-0 -translate-x-1/2 w-2 h-2 rounded-full bg-[#C9A96E]" />
              </motion.div>

              {/* Inner Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-24 border border-[#C9A96E]/30 rounded-full flex items-center justify-center"
              >
                <div className="absolute right-0 translate-x-1/2 w-2 h-2 rounded-full bg-[#C9A96E]" />
              </motion.div>

              {/* Core Node */}
              <div className="w-16 h-16 rounded-xl bg-[#111113] border border-[#C9A96E] shadow-[0_0_30px_rgba(201,169,110,0.2)] flex items-center justify-center z-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A96E]/20 to-transparent" />
                <span className="text-white font-bold text-sm z-10">OG</span>
              </div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                <motion.line 
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  x1="200" y1="200" x2="200" y2="0" 
                  stroke="#C9A96E" strokeWidth="1" strokeDasharray="4 4" 
                />
                <motion.line 
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}
                  x1="200" y1="200" x2="373" y2="300" 
                  stroke="#C9A96E" strokeWidth="1" strokeDasharray="4 4" 
                />
                <motion.line 
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.9 }}
                  x1="200" y1="200" x2="27" y2="300" 
                  stroke="#C9A96E" strokeWidth="1" strokeDasharray="4 4" 
                />
              </svg>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
