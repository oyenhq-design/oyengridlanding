"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[#0B0B0C]">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/professional_workspace_ops_team_1778024747201.png"
          alt="Office background"
          fill
          className="object-cover opacity-10 blur-[4px]"
          priority
        />
        {/* Dark overlay gradient (left darker -> right lighter) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C] via-[#0B0B0C]/90 to-[#0B0B0C]/40" />
        {/* Gold glow accent around hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#F5C044] opacity-[0.05] blur-[140px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col"
          >
            {/* Small label (gold badge) */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#F5C044]/10 border border-[#F5C044]/20 text-[#F5C044] text-[10px] font-bold tracking-[0.2em] uppercase w-max mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5C044] shadow-[0_0_8px_#F5C044]" />
              PROGRAMME OPERATING SYSTEM
            </div>

            {/* Large headline */}
            <h1 className="text-[48px] md:text-[64px] lg:text-[76px] font-bold text-white leading-[1.05] tracking-tight mb-8">
              Run structured programmes <br />
              with full <br />
              <span className="text-[#F5C044]">operational control.</span>
            </h1>

            {/* Subtext paragraph */}
            <p className="text-[18px] text-[#A1A1AA] leading-relaxed mb-10 font-light max-w-lg">
              The unified infrastructure for managing complex learning initiatives at scale. Orchestrate delivery with absolute structural integrity.
            </p>

            {/* Bullet points (2 columns) */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-12 max-w-xl">
              {[
                "Full visibility across cohorts",
                "Automated tracking & analytics",
                "Enterprise-grade governance",
                "Seamless multi-tenant delivery"
              ].map((bullet) => (
                <div key={bullet} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#F5C044] shrink-0" />
                  <span className="text-[#D4D4D8] text-[14px] font-medium">{bullet}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-6">
              <Link 
                href="/get-started"
                className="px-10 py-5 rounded-2xl bg-[#F5C044] text-black font-bold text-[16px] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(245,192,68,0.3)] hover:scale-105"
              >
                Start building
              </Link>
              <Link 
                href="/demo"
                className="px-10 py-5 rounded-2xl border border-white/10 text-white font-bold text-[16px] hover:bg-white/5 transition-all"
              >
                View demo
              </Link>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-6 relative perspective-[2000px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 20, rotateX: 5, y: 30 }}
              animate={{ opacity: 1, scale: 1, rotateY: -10, rotateX: 5, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10 w-full aspect-[16/11] bg-[#0D0D10] border border-white/10 rounded-[24px] shadow-[0_60px_100px_rgba(0,0,0,0.8)] overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
              <Image 
                src="/images/hero-dashboard.png" 
                alt="Dashboard Mockup" 
                fill
                className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              {/* Slight glow */}
              <div className="absolute -inset-1 bg-[#F5C044] opacity-[0.02] blur-[40px] pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
