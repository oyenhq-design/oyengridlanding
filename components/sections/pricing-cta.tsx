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
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(212,175,55,0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-[#D4AF37] text-[#0B0B0C] font-bold rounded-xl transition-all duration-300"
              >
                Start building
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button 
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(212,175,55,0.05)",
                  boxShadow: "0 0 30px rgba(212,175,55,0.1)"
                }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-xl transition-all duration-300"
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
