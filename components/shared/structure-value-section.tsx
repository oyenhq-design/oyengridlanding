"use client"

import { motion } from "framer-motion"
import { Shield, GitCommit, Search } from "lucide-react"
import { fadeUpVariant, staggerContainerVariant, staggerItemVariant } from "@/lib/motion"

export function StructureValueSection() {
  const points = [
    {
      title: "Immutable Records",
      description: "Once a session is completed, its attendance records, chat logs, and recordings are cryptographically sealed.",
      icon: Shield
    },
    {
      title: "Traceable Progress",
      description: "Every participant action creates an audit trail. See exactly when someone viewed a resource or left a session.",
      icon: GitCommit
    },
    {
      title: "Global Search",
      description: "Instantly query across all your cohorts, historical recordings, and participant data with milisecond latency.",
      icon: Search
    }
  ]

  return (
    <section className="py-32 bg-[#FAFAF9] border-b border-[#E5E5E5] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainerVariant}
          >
            <motion.div variants={fadeUpVariant} className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6 tracking-tight">The Value of Pure Structure</h2>
              <p className="text-[#555555] text-lg leading-relaxed font-light">
                Generic tools treat data loosely. OYEN Grid enforces strict data models, meaning your operational data becomes an asset you can actually query, analyse, and trust.
              </p>
            </motion.div>

            <div className="space-y-8">
              {points.map((point, idx) => {
                const Icon = point.icon
                return (
                  <motion.div key={idx} variants={staggerItemVariant} className="flex gap-5">
                    <div className="shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-sm bg-[#FFFFFF] border border-[#E5E5E5] flex items-center justify-center shadow-sm">
                        <Icon className="w-4 h-4 text-[#111111]" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[#111111] font-semibold mb-2 tracking-tight">{point.title}</h3>
                      <p className="text-[#555555] text-sm leading-relaxed font-light">{point.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Minimal Diagram */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-[#FFFFFF] border border-[#E5E5E5] rounded-sm p-12 flex items-center justify-center relative shadow-sm"
          >
            <div className="relative w-full aspect-square max-w-[400px]">
              
              {/* Central Node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#111111] border border-[#E5E5E5] rounded-sm z-20 flex items-center justify-center shadow-md">
                <span className="text-[#FFFFFF] font-bold text-[10px] tracking-widest uppercase">Grid</span>
              </div>

              {/* Connecting Lines */}
              <div className="absolute top-1/2 left-1/4 right-1/4 h-px bg-[#E5E5E5] -translate-y-1/2 z-10" />
              <div className="absolute left-1/2 top-1/4 bottom-1/4 w-px bg-[#E5E5E5] -translate-x-1/2 z-10" />

              {/* Outer Nodes */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#FAFAF9] border border-[#E5E5E5] rounded-sm z-20 flex items-center justify-center cursor-default"
              >
                <div className="w-1.5 h-1.5 bg-[#C9A96E] rounded-full" />
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-[#FAFAF9] border border-[#E5E5E5] rounded-sm z-20 flex items-center justify-center cursor-default"
              >
                <div className="w-1.5 h-1.5 bg-[#A1A1AA] rounded-full" />
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#FAFAF9] border border-[#E5E5E5] rounded-sm z-20 flex items-center justify-center cursor-default"
              >
                <div className="w-1.5 h-1.5 bg-[#A1A1AA] rounded-full" />
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#FAFAF9] border border-[#E5E5E5] rounded-sm z-20 flex items-center justify-center cursor-default"
              >
                <div className="w-1.5 h-1.5 bg-[#27C93F] rounded-full" />
              </motion.div>

              {/* Subtle pulsing background circles */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#E5E5E5] rounded-full z-0"
              />
              <motion.div 
                animate={{ scale: [1, 1.05, 1], opacity: [0.05, 0.15, 0.05] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-[#E5E5E5] rounded-full z-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
