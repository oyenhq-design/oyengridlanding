"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { fadeUpVariant } from "@/lib/motion"

export function CTASection() {
  return (
    <section className="py-32 bg-[#0A0A0B] border-t border-[#1F1F23]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to structure your operation?
          </h2>
          <p className="text-xl text-[#A1A1AA] mb-10 max-w-xl mx-auto font-light leading-relaxed">
            Stop losing data across multiple tools. Get the complete operating system for modern training organisations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-started">
              <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
                <Button className="bg-[#C9A96E] hover:bg-[#C9A96E] text-[#0A0A0B] h-12 px-8 text-sm font-bold rounded-sm shadow-[0_0_15px_rgba(201,169,110,0.15)] transition-shadow hover:shadow-[0_0_25px_rgba(201,169,110,0.3)] w-full sm:w-auto">
                  Start Building
                </Button>
              </motion.div>
            </Link>
            <Link href="/contact">
              <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
                <Button variant="outline" className="border-[#1F1F23] text-white hover:bg-white/5 h-12 px-8 text-sm font-semibold rounded-sm transition-all w-full sm:w-auto">
                  Talk to Sales
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
