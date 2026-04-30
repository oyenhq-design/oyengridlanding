"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative pt-40 md:pt-52 pb-24 md:pb-32 overflow-hidden bg-[#0b0f14]">
      {/* Soft background gradient */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(ellipse at top center, rgba(30, 41, 59, 0.6) 0%, transparent 70%)"
        }}
      />
      
      <div className="max-w-5xl mx-auto px-4 lg:px-8 relative z-10">
        
        {/* TEXT CONTENT */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[48px] sm:text-[56px] md:text-[68px] font-bold text-white mb-6 leading-[1.1] tracking-tight"
          >
            Structure your training.<br />
            Scale your impact.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            OYEN Grid brings calm, clarity, and real-time control to every layer of your programme delivery.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-4"
          >
            <Link href="/get-started">
              <button className="bg-white text-[#0b0f14] hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0b0f14]">
                Get Started
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-transparent text-white border border-white/20 hover:bg-white/5 font-semibold px-8 py-4 rounded-lg text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white/20">
                Contact Sales
              </button>
            </Link>
          </motion.div>
        </div>

        {/* UI SHOWCASE */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden bg-[#121820] shadow-[0_40px_80px_rgba(0,0,0,0.4)]"
        >
          {/* Subtle inner ring to separate UI from background softly */}
          <div className="absolute inset-0 z-10 pointer-events-none ring-1 ring-white/10 rounded-2xl" />
          
          <Image
            src="/img/pg mgt.png"
            alt="OYEN Grid platform dashboard"
            width={1200}
            height={800}
            className="w-full h-auto object-cover object-top block select-none pointer-events-none"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}
