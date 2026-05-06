"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Shield, Activity, Zap } from "lucide-react";

export function PremiumHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0B0B0C] pt-20">
      
      {/* 1. BACKGROUND LAYERS */}
      <div className="absolute inset-0 z-0">
        {/* Workspace image with subtle blur */}
        <Image
          src="/premium_saas_workspace_night_1778072758177_png_1778076123899.png"
          alt="Modern Workspace"
          fill
          className="object-cover opacity-[0.12] blur-[2px] scale-105"
          priority
        />
        {/* Layered Gradient: Left darker -> Right lighter/transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C] via-[#0B0B0C]/90 to-transparent" />
        {/* Soft radial glow behind UI mockup */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-[#F5C044] opacity-[0.05] blur-[160px] rounded-full pointer-events-none translate-x-1/4" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] mix-blend-overlay" />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            {/* Label Badge with Glow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#F5C044]/10 border border-[#F5C044]/20 text-[#F5C044] text-[11px] font-bold tracking-[0.2em] uppercase mb-10 shadow-[0_0_20px_rgba(245,192,68,0.1)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#F5C044] shadow-[0_0_10px_#F5C044] animate-pulse" />
              Programme Operating System
            </motion.div>

            {/* BIG Headline */}
            <h1 className="text-[52px] md:text-[72px] lg:text-[84px] font-extrabold text-white leading-[1.02] tracking-tight mb-8">
              Run structured <br />
              programmes with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5C044] via-[#F5C044]/90 to-[#D4A017]">full control.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-[20px] md:text-[22px] text-[#A1A1AA] leading-relaxed mb-10 font-light max-w-xl">
              OYEN GRID is the unified infrastructure for managing complex learning initiatives at scale. Orchestrate delivery, track mastery, and automate operations in one structured environment.
            </p>

            {/* Bullet Points (2 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5 mb-14 max-w-2xl">
              {[
                "Full visibility across cohorts",
                "Automated tracking & analytics",
                "Enterprise-grade governance",
                "Seamless multi-tenant delivery"
              ].map((bullet) => (
                <div key={bullet} className="flex items-center gap-3.5 group">
                  <div className="w-5 h-5 rounded-full bg-[#F5C044]/10 flex items-center justify-center border border-[#F5C044]/20 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F5C044]" />
                  </div>
                  <span className="text-[#D4D4D8] text-[15px] font-medium tracking-wide">{bullet}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-6">
              <Link 
                href="/get-started"
                className="relative px-12 py-5 rounded-2xl text-[17px] font-bold transition-all duration-500 overflow-hidden group shadow-[0_20px_50px_rgba(245,192,68,0.25)] hover:shadow-[0_30px_70px_rgba(245,192,68,0.4)] hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5C044] to-[#D4A017]" />
                <span className="relative z-10 text-black flex items-center gap-2">
                  Start building <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link 
                href="/demo"
                className="px-12 py-5 rounded-2xl border border-white/10 bg-white/5 text-white font-bold text-[17px] hover:bg-white/10 hover:border-white/20 transition-all active:scale-95 flex items-center gap-2"
              >
                View demo
              </Link>
            </div>
          </motion.div>

          {/* RIGHT: REAL PRODUCT UI MOCKUP */}
          <div className="lg:col-span-6 relative perspective-[2500px]">
            {/* Floating Mini Cards */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -left-8 z-20 p-5 rounded-2xl bg-[#0D0D10]/80 border border-white/10 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#F5C044]/10 flex items-center justify-center">
                  <Activity className="w-4 h-4 text-[#F5C044]" />
                </div>
                <p className="text-white font-bold text-[13px]">Real-time Health</p>
              </div>
              <p className="text-[#A1A1AA] text-[11px]">Cohort 08 Engagement: <span className="text-emerald-400 font-bold">+12%</span></p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-4 z-20 p-5 rounded-2xl bg-[#0D0D10]/80 border border-white/10 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-blue-400" />
                </div>
                <p className="text-white font-bold text-[13px]">Governance</p>
              </div>
              <div className="flex gap-1.5">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-1 rounded-full bg-blue-400/30" />
                ))}
              </div>
            </motion.div>

            {/* Main Mockup Container with 3D Tilt */}
            <motion.div
              initial={{ opacity: 0, rotateY: 30, rotateX: 10, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, rotateY: -15, rotateX: 8, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative z-10 w-full aspect-[16/11] bg-[#0D0D10] border border-white/10 rounded-[32px] shadow-[0_80px_150px_rgba(0,0,0,0.9)] overflow-hidden group ring-1 ring-white/5"
            >
              {/* Glass Glare */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none" />
              
              {/* Real Dashboard Image */}
              <Image 
                src="/images/hero-dashboard.png" 
                alt="OYEN GRID OS Dashboard" 
                fill
                className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
                priority
              />

              {/* Glow edges (Gold/Blue) */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F5C044]/40 to-transparent" />
              <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-blue-400/20 to-transparent" />
              
              {/* Inner shadow for depth */}
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.4)] pointer-events-none" />
            </motion.div>
            
            {/* Bottom shadow for floor effect */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-black opacity-60 blur-2xl rounded-full" />
          </div>

        </div>

        {/* 2. TRUST / SOCIAL PROOF STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-32 pt-20 border-t border-white/5"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex flex-col items-center md:items-start gap-1">
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-5 h-5 fill-[#F5C044] text-[#F5C044]" />)}
              </div>
              <p className="text-white font-bold text-lg">4.9/5 Average Rating</p>
              <p className="text-[#71717A] text-sm">Trusted by 250+ enterprise operators</p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20 opacity-40 grayscale hover:opacity-100 transition-all duration-700">
              {["Microsoft", "Stripe", "Linear", "Zoom", "Notion", "Github"].map((logo) => (
                <div key={logo} className="text-white font-bold text-xl tracking-tighter uppercase hover:text-[#F5C044] transition-colors cursor-default">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
