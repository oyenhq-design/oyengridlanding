"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CleanConversion() {
  return (
    <section className="relative bg-[#0C1029] border-t border-white/[0.05] py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6"
        >
          {/* Eyebrow */}
          <span className="text-[11px] font-black tracking-[0.25em] text-[#F5D76E] uppercase">
            READY TO GET STARTED
          </span>

          {/* Headline */}
          <h2 className="text-3xl md:text-[48px] font-extrabold text-white tracking-tight leading-[1.15] max-w-none">
            Ready to run your next training program?
          </h2>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center h-11 px-8 rounded-full bg-[#F5D76E] text-[#0A0A0A] text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#FBE395] hover:scale-[1.02] shadow-[0_4px_16px_rgba(245,215,110,0.15)]"
            >
              Get started
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center h-11 px-8 rounded-full border border-white/10 hover:border-white/20 text-white text-sm font-bold uppercase tracking-wider transition-all duration-300 bg-transparent hover:bg-white/5"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
