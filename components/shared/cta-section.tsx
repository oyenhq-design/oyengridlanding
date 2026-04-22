"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { fadeUpVariant } from "@/lib/motion"

export function CTASection() {
  return (
    <section className="py-36 bg-[#0D0D0D] border-t border-[#1A1A1A]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight leading-[1.1]">
            Ready to structure your operation?
          </h2>
          <p className="text-[#A1A1AA] text-lg mb-10 font-light leading-relaxed">
            Stop losing data across multiple tools. Get the complete operating system for modern training organisations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-started">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
                <Button className="bg-[#C9A96E] hover:bg-[#D4B882] text-[#0A0A0A] h-12 px-8 text-sm font-bold rounded-lg w-full sm:w-auto">
                  Start Building
                </Button>
              </motion.div>
            </Link>
            <Link href="/contact">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
                <Button variant="outline" className="border-[#1A1A1A] hover:border-[#333333] text-white bg-transparent hover:bg-white/5 h-12 px-8 text-sm font-semibold rounded-lg w-full sm:w-auto">
                  Talk to Sales
                </Button>
              </motion.div>
            </Link>
          </div>
          <p className="mt-8 text-[10px] text-[#333333] uppercase tracking-widest font-bold">No setup fee · Cancel anytime</p>
        </motion.div>
      </div>
    </section>
  )
}
