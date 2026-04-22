"use client"

import { motion } from "framer-motion"
import { X, Check } from "lucide-react"

export function PositioningSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0B0B0F] border-b border-[#1F1F1F] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C8A95A]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            This is <span className="text-red-400">not</span> another tool
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-[#A1A1AA] max-w-2xl mx-auto"
          >
            Stop duct-taping generic software together to run your programmes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* What it is not */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 bg-[#111111] border border-[#1F1F1F] rounded-3xl p-8 md:p-12"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                <X className="w-5 h-5 text-red-400" />
              </div>
              <span className="text-xl text-[#A1A1AA]">Not a meeting tool</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                <X className="w-5 h-5 text-red-400" />
              </div>
              <span className="text-xl text-[#A1A1AA]">Not a chat app</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                <X className="w-5 h-5 text-red-400" />
              </div>
              <span className="text-xl text-[#A1A1AA]">Not a simple LMS</span>
            </div>
          </motion.div>

          {/* What it is */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#121212] border-2 border-[#C8A95A] rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(200,169,90,0.15)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#C8A95A]/10 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-[#C8A95A] flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(200,169,90,0.4)]">
                <Check className="w-6 h-6 text-black" />
              </div>
              <p className="text-[#A1A1AA] text-sm uppercase tracking-widest font-semibold mb-3">Instead, OYEN Grid is a</p>
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Structured<br />
                Programme<br />
                <span className="text-[#C8A95A]">Operating System</span>
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
