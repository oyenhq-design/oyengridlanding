"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Globe, Users, Zap, ShieldCheck } from "lucide-react";

export function OyenHero() {
  return (
    <section className="relative min-h-[700px] flex flex-col justify-center overflow-hidden bg-[#0B0B0D] pt-12 pb-20">
      
      {/* 1. BACKGROUND SYSTEM */}
      <div className="absolute inset-0 z-0">
        {/* Force Image Render Test */}
        <div className="absolute top-10 left-10 z-50 pointer-events-none">
          <img loading="lazy" 
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786" 
            style={{ width: '400px', border: '5px solid yellow' }} 
            alt="FORCE RENDER TEST"
          />
        </div>

        {/* Blurred office background image (Unsplash) */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
            alt="Office background"
            loading="lazy"
            className="w-full h-full object-cover opacity-40 grayscale blur-[10px] brightness-[0.4]"
          />
        </div>
        
        {/* Dark gradient overlay: Left fully dark -> Right fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent opacity-100" />
        
        {/* Gold radial glow behind UI mockup */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_60%,rgba(245,185,66,0.15),transparent_60%)] pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT SIDE CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#F5B942] shadow-[0_0_8px_#F5B942]" />
              <span className="text-[#F5B942] text-[11px] font-bold tracking-[0.2em] uppercase">
                PROGRAMME INFRASTRUCTURE FOR SCALE
              </span>
            </div>

            <h1 className="text-[48px] md:text-[64px] lg:text-[76px] font-black text-white leading-[1.05] tracking-tight mb-8">
              A complete <span className="text-[#F5B942]">system</span>,<br />
              not a collection<br />
              of features.
            </h1>

            <p className="text-[18px] md:text-[20px] text-[#AAAAAA] leading-relaxed mb-10 max-w-lg font-light">
              Every capability in OYEN GRID is designed to work together, ensuring your programmes run with absolute structural integrity.
            </p>

            <div className="flex items-center gap-4 mb-12">
              <Link 
                href="/get-started"
                className="px-10 py-4 rounded-xl bg-[#F5B942] text-black font-bold text-[16px] transition-all hover:bg-[#D4A017] shadow-lg shadow-[#F5B942]/10"
              >
                Start Building
              </Link>
              <Link 
                href="/contact"
                className="px-10 py-4 rounded-xl border border-white/10 text-white font-bold text-[16px] hover:bg-white/5 transition-all"
              >
                Talk to Sales
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/5">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#F5B942] fill-[#F5B942]" />
                <span className="text-white font-bold text-[14px]">4.8/5 rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#F5B942]" />
                <span className="text-white font-bold text-[14px]">2,000+ programmes</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#F5B942]" />
                <span className="text-white font-bold text-[14px]">99.9% uptime</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: PRODUCT UI */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative z-10 w-full aspect-[1.2/1] bg-[#0A0A0A] border border-white/10 rounded-[24px] shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden group"
            >
              <img loading="lazy" 
                src="https://images.unsplash.com/photo-1551288049-bbbda536639a" 
                alt="Product UI Mockup" 
                className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
