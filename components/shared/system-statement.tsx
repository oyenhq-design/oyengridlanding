"use client";

import { motion } from "framer-motion";

export function SystemStatement() {
  return (
    <section className="py-32 bg-[#0B0B0C] relative overflow-hidden">
      {/* Subtle center glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[200px] bg-[#F5B942] opacity-[0.04] blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 flex flex-col items-center text-center">
        {/* Top divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[120px] h-[1px] bg-gradient-to-r from-transparent via-[#F5B942]/60 to-transparent mb-16"
        />

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-[#A1A1AA] text-[13px] font-bold tracking-[0.25em] uppercase mb-8"
        >
          Design Philosophy
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-[42px] md:text-[64px] lg:text-[76px] font-bold text-white leading-[1.05] tracking-tight mb-8"
        >
          A complete system,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B942] to-[#D4A017]">
            not a collection
          </span>{" "}
          of features.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-[#71717A] text-[18px] md:text-[20px] leading-relaxed max-w-[680px] font-light"
        >
          Every module, every workflow, every interaction in OYEN GRID is designed to connect — giving you one cohesive operating environment instead of ten disconnected tools.
        </motion.p>

        {/* Bottom divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="w-[120px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mt-16"
        />
      </div>
    </section>
  );
}
