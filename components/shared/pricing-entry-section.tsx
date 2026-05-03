"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function PricingEntrySection() {
  return (
    <section className="py-24 bg-[#0B0B0C] relative overflow-hidden border-t border-neutral-800">
      {/* Subtle Glow */}
      <div 
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div 
          className="w-full max-w-[800px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(201,168,106,0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 
            className="font-bold text-white tracking-tight mb-6"
            style={{ fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.1 }}
          >
            Simple pricing for <span className="text-[#C8A95A]">structured programme operations</span>
          </h2>
          <p className="text-[18px] md:text-[20px] text-[#A1A1AA] mb-12 max-w-2xl mx-auto leading-relaxed">
            Start with one programme. Scale to full operational control.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="/get-started" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-[#0B0B0C] text-[16px] transition-shadow shadow-[0_0_20px_rgba(201,168,106,0.2)] hover:shadow-[0_0_30px_rgba(201,168,106,0.35)]"
                style={{ background: "linear-gradient(135deg, #D4AF37 0%, #C9A86A 100%)" }}
              >
                Start building
              </motion.button>
            </Link>

            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white text-[16px] border border-[#333] hover:border-[#C8A95A]/50 bg-transparent transition-all duration-300 hover:bg-white/5 flex items-center justify-center gap-2"
              >
                Talk to sales
                <ArrowRight className="w-4 h-4 text-[#C8A95A]" strokeWidth={2.5} />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
