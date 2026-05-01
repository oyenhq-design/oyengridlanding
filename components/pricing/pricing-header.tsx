"use client"

import { motion } from "framer-motion"

export function PricingHeader() {
  return (
    <section id="overview" className="pt-32 pb-16 px-6 bg-[#0B0B0C]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Pricing
          </h1>
          <p className="text-xl text-[#A1A1AA] font-medium">
            Choose the right plan for your programme operations
          </p>
          <p className="text-sm text-[#71717A] mt-6">
            Start simple. Scale as your operations grow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#111111] p-1 rounded-xl border border-[#1F1F1F] flex items-center"
        >
          <button className="px-6 py-2 text-sm font-bold text-white bg-[#1F1F1F] rounded-lg">Monthly</button>
          <button className="px-6 py-2 text-sm font-bold text-[#71717A] hover:text-white transition-colors">Annual</button>
        </motion.div>
      </div>
    </section>
  )
}
