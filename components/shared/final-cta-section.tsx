"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-32 bg-[#0B0B0C] relative overflow-hidden flex items-center justify-center">
      {/* Soft gold gradient glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#F5B942] opacity-[0.08] blur-[120px] rounded-full pointer-events-none" />
      
      {/* Subtle grid or lines if needed, but keeping it clean as per "high-end" */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,185,66,0.02)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[42px] md:text-[60px] lg:text-[72px] font-bold text-white leading-[1.1] tracking-tight mb-10"
        >
          Stop losing control across tools.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B942] to-[#D4A017]">
            Run your programmes in one structured system.
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap justify-center items-center gap-6"
        >
          <Link
            href="/get-started"
            className="px-10 py-5 rounded-2xl bg-[#F5B942] text-black font-bold text-[17px] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(245,185,66,0.4)] hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg"
          >
            Start Building <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className="px-10 py-5 rounded-2xl border border-white/20 bg-white/5 text-white font-bold text-[17px] hover:bg-white/10 hover:border-white/40 transition-all active:scale-95 shadow-lg"
          >
            Talk to Sales
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
