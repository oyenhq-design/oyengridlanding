"use client";

import { motion } from "framer-motion";

export function ZoomHero() {
  return (
    <section className="relative pt-[180px] pb-[100px] overflow-hidden">
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0B5CFF] to-white" />
      
      {/* Abstract circles for depth */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-white opacity-20 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[48px] md:text-[68px] lg:text-[84px] font-bold text-[#232333] leading-[1.05] tracking-tight mb-8"
        >
          Find out what&apos;s possible <br />
          when work connects
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[18px] md:text-[22px] text-[#232333]/70 leading-relaxed mb-12 max-w-3xl mx-auto"
        >
          Bring teams together, reimagine workspaces, and engage customers with the platform built for connecting through video, audio, phone, and chat.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-6"
        >
          <button className="px-10 py-4 rounded-full bg-[#0B5CFF] text-white text-[16px] font-bold hover:bg-[#0B4CD9] transition-all shadow-xl shadow-[#0B5CFF]/30">
            Sign Up Free
          </button>
          <button className="px-10 py-4 rounded-full border border-[#0B5CFF] text-[#0B5CFF] text-[16px] font-bold hover:bg-[#0B5CFF]/5 transition-all">
            Find your plan
          </button>
        </motion.div>
      </div>
    </section>
  );
}
