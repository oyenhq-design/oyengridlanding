"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function PricingHero() {
  return (
    <section className="pt-32 pb-16 px-6 text-center bg-[#0B0B0C]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Simple pricing for <span className="text-[#D4AF37]">structured programme operations</span>
        </h1>
        <p className="text-xl text-[#A1A1AA] mb-10 max-w-2xl mx-auto leading-relaxed">
          Start with one programme. Scale to full operational control.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link href="/get-started">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#D4AF37] text-[#0B0B0C] font-bold rounded-xl transition-shadow shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            >
              Start building
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-[#333] text-white font-bold rounded-xl transition-colors"
            >
              Talk to sales
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
