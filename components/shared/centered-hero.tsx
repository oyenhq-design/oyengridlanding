"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, Activity, Zap } from "lucide-react";

export function CenteredHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-[#0B0B0C]">
      
      {/* Background Image with Blur & Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/professional_workspace_ops_team_1778024747201.png"
          alt="Professional Workspace"
          fill
          className="object-cover opacity-20 blur-[8px] scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C] via-[#0B0B0C]/80 to-[#0B0B0C]" />
        {/* Gold Glow Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#F5B942] opacity-[0.07] blur-[140px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-20 w-full max-w-[1100px] mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#F5B942] text-[12px] font-bold tracking-[0.15em] uppercase mb-10 backdrop-blur-xl shadow-xl mx-auto"
        >
          <span className="w-2 h-2 rounded-full bg-[#F5B942] animate-pulse shadow-[0_0_12px_#F5B942]" />
          Enterprise Operating System
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[52px] md:text-[72px] lg:text-[88px] font-bold text-white leading-[1.02] tracking-tight mb-8"
        >
          Run structured programmes <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B942] via-white to-[#D4A017]">
            with full operational control.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[19px] md:text-[22px] text-[#A1A1AA] leading-relaxed mb-12 font-light max-w-3xl mx-auto"
        >
          OYEN GRID is a unified system for managing complex learning initiatives at scale. Orchestrate delivery, track mastery, and automate operations in one structured environment.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-6 mb-20"
        >
          <Link 
            href="/get-started"
            className="relative px-12 py-5 rounded-2xl text-[17px] font-bold transition-all duration-300 overflow-hidden group/btn shadow-[0_20px_50px_rgba(245,185,66,0.25)] hover:shadow-[0_30px_70px_rgba(245,185,66,0.45)] hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-[#F5B942]" />
            <span className="relative z-10 text-black flex items-center gap-2">
              Start Building <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
            </span>
          </Link>

          <Link 
            href="/contact"
            className="flex items-center gap-4 px-12 py-5 rounded-2xl border border-white/10 bg-white/5 text-white font-bold text-[16px] hover:bg-white/10 hover:border-white/20 transition-all group/demo active:scale-95"
          >
            Talk to Sales
          </Link>
        </motion.div>

        {/* Floating Mockup (Tilted, Glowing, Not Blocking) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotateX: 10, y: 40 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="relative w-full max-w-[1000px] mx-auto perspective-[2000px]"
        >
          <div className="absolute -inset-10 bg-[#F5B942] opacity-[0.1] blur-[120px] rounded-full pointer-events-none" />
          <div className="relative bg-[rgba(10,10,10,0.8)] backdrop-blur-3xl border border-white/[0.1] rounded-[32px] shadow-[0_80px_150px_rgba(0,0,0,0.9)] overflow-hidden group ring-1 ring-white/5 transform rotate-x-[5deg] rotate-y-[-2deg]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
            <Image 
              src="/images/hero-dashboard.png" 
              alt="OYEN GRID Dashboard" 
              width={1200}
              height={750}
              className="w-full h-auto opacity-90 transition-transform duration-1000 group-hover:scale-105"
              priority
            />
          </div>
        </motion.div>

        {/* Trust Indicators (Centered) */}
        <div className="mt-24 pt-16 border-t border-white/5 flex flex-wrap items-center justify-center gap-12 lg:gap-20 opacity-30 grayscale hover:opacity-60 transition-all duration-700">
          {["Microsoft", "Stripe", "Linear", "Zoom", "Notion", "Github"].map((logo) => (
            <div key={logo} className="text-white font-bold text-xl tracking-tighter uppercase">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
