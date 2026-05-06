"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Star, ArrowRight, Shield, Activity, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-[#0B0B0C]">
      
      {/* Background Depth Glows */}
      <div className="absolute top-[10%] right-[5%] w-[800px] h-[800px] bg-[#F5B942] opacity-[0.06] blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-[#3B82F6] opacity-[0.04] blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-10 lg:px-14 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center w-full">
          
          {/* LEFT: Content (6 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#F5B942] text-[12px] font-bold tracking-[0.15em] uppercase w-max mb-8 backdrop-blur-xl shadow-xl">
              <span className="w-2 h-2 rounded-full bg-[#F5B942] animate-pulse shadow-[0_0_12px_#F5B942]" />
              Enterprise Operating System
            </div>

            <h1 className="text-[52px] md:text-[72px] lg:text-[80px] font-bold text-white leading-[1.02] tracking-tight mb-8">
              Run structured programmes <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B942] via-white to-[#D4A017]">with full operational control.</span>
            </h1>

            <p className="text-[19px] md:text-[22px] text-[#A1A1AA] leading-relaxed mb-12 font-light max-w-xl">
              OYEN GRID is a unified system for managing complex learning initiatives at scale. Orchestrate delivery, track mastery, and automate operations in one structured environment.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-16">
              <Link 
                href="/get-started"
                className="relative px-10 py-5 rounded-2xl text-[17px] font-bold transition-all duration-300 overflow-hidden group/btn shadow-[0_20px_50px_rgba(245,185,66,0.25)] hover:shadow-[0_30px_70px_rgba(245,185,66,0.45)] hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-[#F5B942]" />
                <span className="relative z-10 text-black flex items-center gap-2">
                  Start Building <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                </span>
              </Link>

              <Link 
                href="/contact"
                className="flex items-center gap-4 px-10 py-5 rounded-2xl border border-white/10 bg-white/5 text-white font-bold text-[16px] hover:bg-white/10 hover:border-white/20 transition-all group/demo active:scale-95"
              >
                Talk to Sales
              </Link>
            </div>

            {/* Ratings & Metrics */}
            <div className="flex items-center gap-10 pt-10 border-t border-white/5">
              <div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#F5B942] fill-current" />
                  ))}
                </div>
                <div className="text-white font-bold text-sm">4.9/5 Rating</div>
                <div className="text-[#71717A] text-xs uppercase tracking-widest mt-1">On G2 & Capterra</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-white font-bold text-xl mb-1">500k+</div>
                <div className="text-[#71717A] text-xs uppercase tracking-widest">Active Participants</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-white font-bold text-xl mb-1">99.9%</div>
                <div className="text-[#71717A] text-xs uppercase tracking-widest">Uptime SLA</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Visual (6 Columns) */}
          <div className="lg:col-span-6 relative perspective-[2000px]">
            {/* Soft gold radial glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#F5B942] opacity-[0.1] blur-[120px] rounded-full pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 15, rotateX: 5, y: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: -3, rotateX: 3, y: [0, -10, 0] }}
              transition={{ 
                duration: 1.2, 
                ease: "easeOut",
                y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
              }}
              className="relative z-10 w-full aspect-[16/10] bg-[rgba(10,10,10,0.8)] backdrop-blur-3xl border border-white/[0.1] rounded-[32px] shadow-[0_80px_150px_rgba(0,0,0,0.9)] overflow-hidden group ring-1 ring-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
              <Image 
                src="/images/hero-dashboard.png" 
                alt="OYEN GRID Dashboard" 
                fill
                className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
                priority
              />
            </motion.div>

            {/* Floating Decorative Elements */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-[#F5B942] opacity-[0.05] blur-[60px] rounded-full pointer-events-none"
            />
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
