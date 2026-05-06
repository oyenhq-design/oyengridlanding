"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Play, Star, ArrowRight, Shield, Activity, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-48 pb-32 overflow-hidden bg-[#050505]">
      
      {/* 1. BACKGROUND IMAGE & GRADIENT OVERLAY */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/premium_expert_team_collaboration_1778025314560.png" 
          alt="Premium Expert Team" 
          fill
          className="object-cover object-right lg:object-center opacity-[0.35] grayscale-[0.4]"
          priority
        />
        {/* Complex Gradient Overlay for Depth */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(90deg, #050505 35%, rgba(5,5,5,0.7) 60%, rgba(5,5,5,0.2) 100%)'
          }}
        />
      </div>

      {/* Atmospheric Glows - Premium Linear/Stripe style */}
      <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-[#D4AF37] opacity-[0.06] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] bg-[#3B82F6] opacity-[0.04] blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col max-w-2xl"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#D4AF37] text-[12px] font-bold tracking-[0.15em] uppercase w-max mb-10 backdrop-blur-xl shadow-xl">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse shadow-[0_0_12px_#D4AF37]" />
              Programme Operating System
            </div>

            <h1 className="text-[52px] md:text-[72px] lg:text-[84px] font-bold text-white leading-[1.02] tracking-tight mb-8">
              Run structured programmes <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACC15] via-white to-[#EAB308]">with absolute control.</span>
            </h1>

            <p className="text-[19px] md:text-[22px] text-[#A1A1AA] leading-relaxed mb-12 font-light max-w-xl">
              The premier infrastructure for managing high-stakes learning initiatives with total structural integrity and real-time oversight.
            </p>

            {/* Value Bullets - Refined */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5 mb-14">
              {[
                { text: "Full visibility across all cohorts", icon: Activity },
                { text: "Automated tracking & analytics", icon: Zap },
                { text: "Enterprise-grade governance", icon: Shield },
                { text: "Seamless multi-tenant delivery", icon: Check }
              ].map((bullet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3.5 group"
                >
                  <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#D4AF37]/40 transition-colors">
                    <bullet.icon className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.5} />
                  </div>
                  <span className="text-[15px] font-semibold text-white/80 group-hover:text-white transition-colors">{bullet.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-6 mb-16">
              <Link 
                href="/get-started"
                className="relative px-10 py-4.5 rounded-2xl text-[16px] font-bold transition-all duration-300 overflow-hidden group/btn shadow-[0_15px_40px_rgba(212,175,55,0.25)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.45)] hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FACC15] to-[#EAB308]" />
                <span className="relative z-10 text-black flex items-center gap-2">
                  Start building <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                </span>
              </Link>

              <button className="flex items-center gap-4 px-8 py-4.5 rounded-2xl border border-white/10 bg-white/5 text-white font-bold text-[15px] hover:bg-white/10 hover:border-white/20 transition-all group/demo active:scale-95">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover/demo:bg-[#D4AF37]/20 transition-colors">
                  <Play className="w-3.5 h-3.5 text-white group-hover/demo:text-[#D4AF37] fill-current" />
                </div>
                View live demo
              </button>
            </div>

            {/* Trust Strip */}
            <div className="flex items-center gap-4 text-[#71717A] text-[14px] font-bold border-t border-white/5 pt-10 w-max uppercase tracking-widest">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-[#D4AF37] fill-current" />
                ))}
              </div>
              <span>Trusted by programme operators globally • <span className="text-white">4.8★ rating</span></span>
            </div>
          </motion.div>

          {/* RIGHT: Product Visual - Enhanced Floating & Glow */}
          <div className="relative hidden lg:block perspective-[2000px]">
            {/* Multi-layered glows */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.4, scale: 1.2, y: [0, -20, 0] }}
              transition={{ 
                opacity: { duration: 2 },
                y: { repeat: Infinity, duration: 6, ease: "easeInOut" } 
              }}
              className="absolute inset-0 bg-[#D4AF37] opacity-[0.08] blur-[100px] rounded-full pointer-events-none"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 15, rotateX: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: -15, rotateX: 5, y: [0, -25, 0] }}
              transition={{ 
                duration: 1.2, 
                ease: "easeOut",
                y: { repeat: Infinity, duration: 9, ease: "easeInOut" }
              }}
              className="relative z-10 w-full aspect-[4/3] bg-[rgba(10,10,10,0.8)] backdrop-blur-3xl border border-white/[0.08] rounded-[40px] shadow-[0_80px_150px_rgba(0,0,0,0.9)] overflow-hidden group ring-1 ring-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
              
              <Image 
                src="/oyen_grid_product_mockup_1778021210800.png" 
                alt="OYEN GRID Interface" 
                fill
                className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Internal Glassmorphic Elements */}
              <div className="absolute top-10 right-10 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                    <Activity className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div className="space-y-1">
                    <div className="w-16 h-2 bg-white/20 rounded-full" />
                    <div className="w-12 h-2 bg-white/10 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Background Accent Lines */}
            <div className="absolute -left-20 top-1/4 w-40 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent rotate-12" />
            <div className="absolute -right-10 bottom-1/4 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent -rotate-12" />
          </div>

        </div>
      </div>

      {/* Section Transition Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
}
