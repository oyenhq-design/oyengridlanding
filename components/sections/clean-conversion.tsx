"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CleanConversion() {
  return (
    <section className="relative bg-gradient-to-b from-[#FAF7F2] via-[#F6F2EA] to-[#F3EDE2] border-t border-zinc-200/30 py-20 md:py-28 overflow-hidden">
      
      {/* 1. Paper/Fabric texture overlay (SVG Filter for pure CSS noise) */}
      <div className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="paper-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.08 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#paper-noise)" />
        </svg>
      </div>

      {/* 2. Extremely subtle flowing wave lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.06]">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 350 C 350 150, 750 550, 1540 350" stroke="#D6A93A" strokeWidth="1.5" />
          <path d="M-100 400 C 450 250, 650 650, 1540 450" stroke="#D6A93A" strokeWidth="1" />
        </svg>
      </div>

      {/* 3. Very faint dotted patterns in the corners */}
      <div className="absolute top-0 left-0 w-72 h-72 opacity-[0.08] pointer-events-none bg-[radial-gradient(#111827_1.2px,transparent_1.2px)] [background-size:20px_20px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 opacity-[0.08] pointer-events-none bg-[radial-gradient(#111827_1.2px,transparent_1.2px)] [background-size:20px_20px]" />

      {/* 4. Subtle radial gold glow behind the content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(214,169,58,0.08),transparent_70%)] pointer-events-none blur-3xl z-0" />

      <div className="max-w-[1100px] mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6"
        >
          {/* Eyebrow */}
          <span className="text-[11px] font-black tracking-[0.25em] text-[#D6A93A] uppercase">
            READY TO GET STARTED
          </span>

          {/* Headline */}
          <h2 className="text-3xl md:text-[48px] font-black tracking-tight leading-[1.15] max-w-none text-[#111827]">
            Ready to build a smarter organization?
          </h2>

          {/* Subtext */}
          <p className="text-sm md:text-base text-[#5B6472] max-w-2xl text-center leading-relaxed font-semibold">
            See why modern organizations choose OYEN GRID to power training, internal collaboration, reporting, and AI-assisted operations.
          </p>

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
              className="inline-flex items-center justify-center h-11 px-8 rounded-full border border-[#E5E7EB] hover:border-zinc-300 text-zinc-800 text-sm font-bold uppercase tracking-wider transition-all duration-300 bg-white hover:bg-zinc-50 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
