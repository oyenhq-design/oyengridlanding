"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Star, ArrowRight, Shield, Activity, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-[#0B0B0C]">
      
      {/* 1. Base: Dark environment image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-bg.png" 
          alt="Environment" 
          fill 
          className="object-cover opacity-40 mix-blend-overlay scale-105"
          priority
        />
      </div>

      {/* 2. Overlay: Dark gradient from left to right */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0B0B0C] via-[#0B0B0C]/80 to-transparent" />

      {/* 3. Layered Lighting & Depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#F5B942] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#3B82F6] opacity-[0.02] blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-10 lg:px-14 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center w-full">
          
          {/* LEFT: Content (7 Columns) - Prioritizing Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#F5B942] text-[12px] font-bold tracking-[0.15em] uppercase w-max mb-8 backdrop-blur-xl shadow-xl">
              <span className="w-2 h-2 rounded-full bg-[#F5B942] animate-pulse shadow-[0_0_12px_#F5B942]" />
              Enterprise Operating System
            </div>

            <h1 className="text-[52px] md:text-[72px] lg:text-[86px] font-bold text-white leading-[1] tracking-tight mb-8">
              Run structured programmes <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B942] via-white to-[#D4A017]">with full operational control.</span>
            </h1>

            <p className="text-[19px] md:text-[24px] text-[#A1A1AA] leading-relaxed mb-12 font-light max-w-2xl">
              OYEN GRID is a unified system for managing complex learning initiatives at scale. Orchestrate delivery, track mastery, and automate operations in one structured environment.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-16">
              <Link 
                href="/get-started"
                className="relative px-12 py-5 rounded-2xl text-[17px] font-bold transition-all duration-300 overflow-hidden group/btn shadow-[0_20px_50px_rgba(245,185,66,0.3)] hover:shadow-[0_30px_70px_rgba(245,185,66,0.5)] hover:scale-105 active:scale-95"
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
            </div>

            {/* Minimal Ratings/Metrics */}
            <div className="flex items-center gap-8 opacity-40">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-[#F5B942] fill-current" />
                  ))}
                </div>
                <span className="text-[12px] font-bold tracking-widest uppercase">4.9/5 Rating</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-[12px] font-bold tracking-widest uppercase">500k+ Active Users</span>
            </div>
          </motion.div>

          {/* RIGHT: Smaller Floating UI Card (5 Columns) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            {/* Radial gold glow behind the product image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[#F5B942] opacity-[0.08] blur-[100px] rounded-full pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 10, rotateX: 5, y: 30 }}
              animate={{ opacity: 1, scale: 1, rotateY: -4, rotateX: 4, y: [0, -15, 0] }}
              transition={{ 
                duration: 1.5, 
                ease: "easeOut",
                y: { repeat: Infinity, duration: 5, ease: "easeInOut" }
              }}
              className="relative z-10 w-[420px] aspect-[10/12] bg-[rgba(10,10,10,0.6)] backdrop-blur-3xl border border-white/[0.1] rounded-[32px] shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden group ring-1 ring-white/5"
              style={{
                maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
              <Image 
                src="/images/hero-dashboard.png" 
                alt="OYEN GRID Interface" 
                fill
                className="object-cover opacity-80 transition-transform duration-1000 group-hover:scale-110"
                priority
              />
            </motion.div>

            {/* Subtle light streak across the card */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none z-20" />
          </div>

        </div>
      </div>

      {/* Trust Strip (Bottom) */}
      <div className="mt-20 w-full py-10 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-[1400px] mx-auto px-10 lg:px-14 flex items-center justify-between opacity-30 grayscale hover:opacity-60 transition-all duration-700 overflow-hidden">
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
