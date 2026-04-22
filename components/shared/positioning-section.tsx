"use client"

import { motion } from "framer-motion"
import { X, Check } from "lucide-react"

export function PositioningSection() {
  return (
    <section className="py-32 bg-[#0A0A0A] border-b border-[#1F1F23]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            This is <span className="text-[#555555]">not</span> another tool
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-[#A1A1AA] max-w-2xl mx-auto font-light"
          >
            Stop duct-taping generic software together to run your programmes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-4xl mx-auto">
          {/* What it is not (Minimal Text) */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8 pl-8 md:pl-0 border-l md:border-l-0 border-[#1F1F23]"
          >
            <div className="flex items-center gap-6">
              <X className="w-5 h-5 text-[#555555]" />
              <span className="text-lg text-[#555555] font-medium tracking-tight">Not a meeting tool</span>
            </div>
            <div className="flex items-center gap-6">
              <X className="w-5 h-5 text-[#555555]" />
              <span className="text-lg text-[#555555] font-medium tracking-tight">Not a chat app</span>
            </div>
            <div className="flex items-center gap-6">
              <X className="w-5 h-5 text-[#555555]" />
              <span className="text-lg text-[#555555] font-medium tracking-tight">Not a simple LMS</span>
            </div>
          </motion.div>

          {/* What it is (Sharper Box) */}
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#111113] border border-[#C9A96E] rounded-none p-12 relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="mb-8">
                <Check className="w-6 h-6 text-[#C9A96E]" strokeWidth={2.5} />
              </div>
              <p className="text-[#A1A1AA] text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Instead, OYEN Grid is a</p>
              <h3 className="text-3xl font-bold text-white leading-tight tracking-tight">
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
