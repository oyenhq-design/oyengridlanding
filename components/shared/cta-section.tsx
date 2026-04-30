"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { fadeUpVariant } from "@/lib/motion"

export function CTASection() {
  return (
    <section className="py-40 bg-[#0b0b0c] border-t border-[#18181A]">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
          Ready to elevate your operation?
        </h2>
        <p className="text-lg text-white/60 mb-12 leading-relaxed">
          Experience a new level of clarity and control. OYEN Grid is built for organisations that demand more.
        </p>
        <div className="flex justify-center">
          <Link href="/get-started">
            <Button className="bg-[#D4AF37] hover:bg-[#e6c75a] text-black font-bold px-10 py-5 rounded-xl text-lg shadow-gold transition-all focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2">
              Start Building
            </Button>
          </Link>
        </div>
        <p className="mt-8 text-[10px] text-[#333333] uppercase tracking-widest font-bold">No setup fee · Cancel anytime</p>
      </div>
    </section>
  );
}
