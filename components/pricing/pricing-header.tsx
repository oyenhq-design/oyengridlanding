"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function PricingHeader() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="overview" className="relative pt-40 pb-20 px-6 overflow-hidden bg-[#0B0B0C]">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#D4A017] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#D4A017] text-[13px] font-bold tracking-[0.2em] uppercase mb-6"
        >
          Pricing
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[44px] md:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-6 max-w-4xl"
        >
          Choose the right plan <br /> for your operations.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[#A1A1AA] font-light mb-12 max-w-xl"
        >
          Start simple. Scale as your programmes grow.
        </motion.p>

        {/* Toggle Switch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-4"
        >
          <div className="relative p-1 bg-white/5 border border-white/10 rounded-full flex items-center shadow-inner">
            <motion.div
              layout
              className="absolute h-[34px] w-[100px] bg-[#D4A017] rounded-full shadow-[0_0_15px_rgba(212,160,23,0.3)]"
              animate={{ x: isAnnual ? 104 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <button 
              onClick={() => setIsAnnual(false)}
              className={`relative z-10 w-[104px] py-1.5 text-[13px] font-bold transition-colors ${!isAnnual ? "text-black" : "text-[#71717A] hover:text-white"}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              className={`relative z-10 w-[104px] py-1.5 text-[13px] font-bold transition-colors ${isAnnual ? "text-black" : "text-[#71717A] hover:text-white"}`}
            >
              Annual
            </button>
          </div>
          
          <div className="px-3 py-1 bg-[#D4A017]/10 border border-[#D4A017]/20 rounded-full text-[#D4A017] text-[11px] font-bold uppercase tracking-wider">
            Save 20%
          </div>
        </motion.div>

      </div>
    </section>
  );
}
