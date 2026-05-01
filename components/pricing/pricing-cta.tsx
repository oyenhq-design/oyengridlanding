"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function PricingCTA() {
  return (
    <section className="py-32 px-6 bg-[#0B0B0C] relative overflow-hidden">
      {/* Subtle gold glow background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-[#D4AF37] opacity-[0.03] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Ready to structure your operations?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="/get-started">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-[#D4AF37] text-[#0B0B0C] font-bold rounded-xl transition-shadow shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]"
              >
                Start building
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 border border-[#333] text-white font-bold rounded-xl transition-colors"
              >
                Talk to sales
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
