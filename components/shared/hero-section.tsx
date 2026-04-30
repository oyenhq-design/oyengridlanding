"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative bg-[#0b0b0c] pt-48 pb-40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        
        {/* HERO CONTENT */}
        <div className="flex flex-col items-center text-center mb-24 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl lg:text-[100px] font-extrabold text-white mb-8 leading-[1.05] tracking-tight"
          >
            Operational clarity.
            <br />
            <span className="text-white/60">Delivered.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            OYEN Grid brings calm, structure, and real-time control to every layer of your programme delivery.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/get-started">
              <button className="bg-[#D4AF37] hover:bg-[#e6c75a] text-black font-semibold px-10 py-5 rounded-full text-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#0b0b0c]">
                Start Building
              </button>
            </Link>
          </motion.div>
        </div>

        {/* PRODUCT MOCKUP */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-5xl mx-auto rounded-[2rem] overflow-hidden bg-[#101012] border border-[#1A1A1A] shadow-[0_30px_100px_-20px_rgba(0,0,0,1)]"
        >
          {/* Subtle gradient overlay to embed the image better into the dark mode */}
          <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] rounded-[2rem]" />
          
          <div className="relative aspect-[16/10] w-full">
            <Image
              src="/img/pg mgt.png"
              alt="OYEN Grid dashboard preview"
              fill
              className="object-cover object-top select-none pointer-events-none"
              draggable={false}
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
