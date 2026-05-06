"use client";

import { motion } from "framer-motion";

export function AICompanionSection() {
  return (
    <section className="py-[120px] bg-[#F4F7FB]">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[#0B5CFF] font-bold text-[14px] uppercase tracking-[0.2em] mb-6"
        >
          New Innovation
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[42px] md:text-[56px] font-bold text-[#232333] tracking-tight leading-tight mb-8"
        >
          Introducing Zoom AI Companion 3.0
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[18px] text-[#232333]/70 leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          Reimagine how you work with your new AI-powered assistant. From meeting summaries to message drafting, AI Companion helps you stay productive all day long.
        </motion.p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 rounded-full bg-[#0B5CFF] text-white text-[16px] font-bold shadow-lg shadow-[#0B5CFF]/20"
        >
          Learn more
        </motion.button>
      </div>
    </section>
  );
}
