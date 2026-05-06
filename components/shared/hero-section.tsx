"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Play, Star, ArrowRight, Shield, Activity, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0B0B0C]">
      
      {/* 1. BACKGROUND IMAGE & GRADIENT OVERLAY */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/premium_expert_team_collaboration_1778025314560.png" 
          alt="Premium Expert Team" 
          fill
          className="object-cover object-right lg:object-center opacity-40 grayscale-[0.2]"
          priority
        />
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(90deg, #0B0B0C 40%, rgba(11,11,12,0.6) 70%, rgba(11,11,12,0.2) 100%)'
          }}
        />
      </div>

      {/* Atmospheric Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#F5C84C] opacity-[0.05] blur-[120px] rounded-full pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-white opacity-[0.02] blur-[150px] rounded-full pointer-events-none translate-y-1/2" />

      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col max-w-2xl"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#F5C84C] text-[11px] font-bold tracking-[0.1em] uppercase w-max mb-10 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5C84C] animate-pulse shadow-[0_0_8px_#F5C84C]" />
              Enterprise Operating System
            </div>

            <h1 className="text-[44px] md:text-[64px] lg:text-[76px] font-bold text-white leading-[1.05] tracking-tight mb-8">
              Run structured programmes <br />
              with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5C84C] to-[#D4A017]">full operational control.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#A1A1AA] leading-relaxed mb-10 font-light max-w-lg">
              The premier platform for managing complex, high-stakes initiatives with absolute structural integrity.
            </p>

            {/* Value Bullets */}
            <div className="space-y-4 mb-12">
              {[
                { text: "End-to-end visibility across all cohorts", icon: Activity },
                { text: "Automated tracking & predictive analytics", icon: Zap },
                { text: "Enterprise-grade governance & security", icon: Shield }
              ].map((bullet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#F5C84C]/10 flex items-center justify-center border border-[#F5C84C]/20">
                    <bullet.icon className="w-3 h-3 text-[#F5C84C]" strokeWidth={2.5} />
                  </div>
                  <span className="text-[15px] font-medium text-white/90">{bullet.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-6 mb-12">
              <Link 
                href="/get-started"
                className="relative px-8 py-4 rounded-xl text-[15px] font-bold transition-all duration-300 overflow-hidden group/btn shadow-[0_10px_25px_rgba(245,200,76,0.15)] hover:shadow-[0_15px_30px_rgba(245,200,76,0.3)] hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5C84C] to-[#D4A017]" />
                <span className="relative z-10 text-black flex items-center gap-2">
                  Start building <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </span>
              </Link>

              <button className="flex items-center gap-3 px-6 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold text-[14px] hover:bg-white/10 hover:border-white/20 transition-all group/demo active:scale-95">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover/demo:bg-[#F5C84C]/20 transition-colors">
                  <Play className="w-3 h-3 text-white group-hover/demo:text-[#F5C84C] fill-current" />
                </div>
                View demo
              </button>
            </div>

            {/* Trust Strip */}
            <div className="flex items-center gap-3 text-[#71717A] text-[13px] font-medium border-t border-white/5 pt-8 w-max">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-[#F5C84C] fill-current" />
                ))}
              </div>
              <span>Trusted by programme operators globally • <span className="text-white">4.8★ rating</span></span>
            </div>
          </motion.div>

          {/* RIGHT: Product Visual */}
          <div className="relative hidden lg:block perspective-[1500px]">
            {/* Blurred duplicate for depth */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
              animate={{ opacity: 0.2, scale: 1.1, rotate: 6, y: [0, -10, 0] }}
              transition={{ 
                opacity: { duration: 1.5 },
                y: { repeat: Infinity, duration: 6, ease: "easeInOut" } 
              }}
              className="absolute inset-0 bg-gradient-to-br from-[#F5C84C]/20 to-transparent blur-[60px] rounded-[32px] pointer-events-none"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 10, rotateX: 10, rotate: 4 }}
              animate={{ opacity: 1, scale: 1, rotateY: -10, rotateX: 5, rotate: 6, y: [0, -15, 0] }}
              transition={{ 
                duration: 1, 
                ease: "easeOut",
                y: { repeat: Infinity, duration: 8, ease: "easeInOut" }
              }}
              className="relative z-10 w-full aspect-[4/3] bg-[rgba(20,20,20,0.8)] backdrop-blur-2xl border border-white/10 rounded-[32px] shadow-[0_50px_100px_rgba(0,0,0,0.7)] overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
              
              <Image 
                src="/oyen_grid_product_mockup_1778021210800.png" 
                alt="OYEN GRID Interface" 
                fill
                className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Internal Floating Highlight */}
              <div className="absolute top-8 right-8 w-24 h-24 bg-[#F5C84C]/10 blur-[40px] rounded-full animate-pulse" />
            </motion.div>

            {/* Decorative Connection Line */}
            <div className="absolute -left-12 top-1/2 w-24 h-[1px] bg-gradient-to-r from-[#F5C84C]/0 to-[#F5C84C]/40" />
          </div>

        </div>
      </div>

    </section>
  );
}
