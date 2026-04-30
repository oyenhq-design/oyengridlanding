"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-48 bg-[#0b0b0c] relative overflow-hidden">
      {/* Subtle background glow behind the text to increase contrast implicitly */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] bg-[#D4AF37] opacity-[0.03] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-semibold text-white mb-8 tracking-tight leading-[1.1]"
        >
          Ready to elevate your operation?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl md:text-2xl text-white/50 mb-14 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Experience a new level of clarity and control. OYEN Grid is built for organisations that demand more.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center"
        >
          <Link href="/get-started">
            <button className="bg-[#D4AF37] hover:bg-[#e6c75a] text-black font-semibold px-12 py-5 rounded-full text-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#0b0b0c]">
              Start Building
            </button>
          </Link>
          <p className="mt-8 text-[11px] text-[#555555] uppercase tracking-[0.2em] font-medium">
            No setup fee <span className="mx-2">·</span> Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
