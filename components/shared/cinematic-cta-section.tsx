"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function CinematicCTASection() {
  return (
    <section className="relative w-full h-[500px] lg:h-[600px] overflow-hidden group">
      {/* Background Image with Parallax-like scaling */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/professional_workspace_ops_team_1778024747201.png" 
          alt="Professional Workspace" 
          className="w-full h-full object-cover transition-transform duration-[15s] ease-out group-hover:scale-110 opacity-[0.45] grayscale-[0.3]"
        />
        {/* Cinematic Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C] via-[#0B0B0C]/90 to-transparent opacity-100" />
      </div>

      <div className="relative z-10 h-full max-w-[1280px] mx-auto px-10 lg:px-14 flex flex-col justify-center items-start text-left">
        
        {/* Soft Content Glow */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#F5B942] opacity-[0.06] blur-[140px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl relative"
        >
          <div className="inline-flex items-center gap-3 text-[#F5B942] text-[13px] font-bold tracking-[0.3em] uppercase mb-8">
            <Sparkles className="w-4 h-4 fill-[#F5B942]" />
            Scale Your Operations
          </div>
          
          <h2 className="text-[44px] md:text-[64px] font-bold text-white leading-[1.05] tracking-tight mb-10">
            Structure your programmes <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B942] via-white to-[#D4A017]">with absolute confidence.</span>
          </h2>
          
          <p className="text-[19px] md:text-[22px] text-[#A1A1AA] leading-relaxed mb-12 font-light max-w-xl">
            Get full operational control, track performance, and scale your training systems — all in one platform built for high-stakes delivery.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              href="/get-started"
              className="relative px-12 py-5 rounded-2xl text-[17px] font-bold transition-all duration-300 overflow-hidden group/btn shadow-[0_20px_50px_rgba(245,185,66,0.3)] hover:shadow-[0_30px_70px_rgba(245,185,66,0.5)] hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-[#F5B942]" />
              <span className="relative z-10 text-black flex items-center gap-3">
                Start building <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
              </span>
            </Link>

            <Link 
              href="/contact"
              className="px-12 py-5 rounded-2xl border border-white/10 bg-white/5 text-white text-[17px] font-bold hover:bg-white/10 hover:border-white/20 transition-all duration-300 active:scale-95 text-center"
            >
              Talk to sales
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Cinematic Border Accents */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
