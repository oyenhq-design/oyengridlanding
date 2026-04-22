"use client"

import { motion } from "framer-motion"
import { X, Check } from "lucide-react"
import { fadeUpVariant, staggerContainerVariant, staggerItemVariant } from "@/lib/motion"

export function PositioningSection() {
  return (
    <section className="py-32 bg-[#F8F8F6] border-b border-[#E5E5E5] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24"
        >
          <motion.h2 
            variants={fadeUpVariant}
            className="text-4xl md:text-5xl font-bold text-[#111111] mb-6 tracking-tight"
          >
            This is <span className="text-[#A1A1AA]">not</span> another tool
          </motion.h2>
          <motion.p 
            variants={fadeUpVariant}
            className="text-lg text-[#555555] max-w-2xl mx-auto font-light"
          >
            Stop duct-taping generic software together to run your programmes.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-4xl mx-auto">
          {/* What it is not */}
          <motion.div 
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8 pl-8 md:pl-0 border-l md:border-l-0 border-[#E5E5E5]"
          >
            <motion.div variants={staggerItemVariant} className="flex items-center gap-6">
              <X className="w-5 h-5 text-[#A1A1AA]" />
              <span className="text-lg text-[#555555] font-medium tracking-tight">Not a meeting tool</span>
            </motion.div>
            <motion.div variants={staggerItemVariant} className="flex items-center gap-6">
              <X className="w-5 h-5 text-[#A1A1AA]" />
              <span className="text-lg text-[#555555] font-medium tracking-tight">Not a chat app</span>
            </motion.div>
            <motion.div variants={staggerItemVariant} className="flex items-center gap-6">
              <X className="w-5 h-5 text-[#A1A1AA]" />
              <span className="text-lg text-[#555555] font-medium tracking-tight">Not a simple LMS</span>
            </motion.div>
          </motion.div>

          {/* What it is */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="bg-[#FFFFFF] border border-[#C9A96E] rounded-sm p-12 relative overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-400"
          >
            <div className="relative z-10">
              <div className="mb-8">
                <Check className="w-6 h-6 text-[#C9A96E]" strokeWidth={2.5} />
              </div>
              <p className="text-[#A1A1AA] text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Instead, OYEN Grid is a</p>
              <h3 className="text-3xl font-bold text-[#111111] leading-tight tracking-tight">
                Structured<br />
                Programme<br />
                <span className="text-[#C9A96E]">Operating System</span>
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
