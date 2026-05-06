"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Globe, Users, Zap, ShieldCheck } from "lucide-react";

export function OyenHero() {
  return (
    <section className="relative min-h-[900px] flex flex-col justify-center overflow-hidden bg-[#050505] pt-20">
      
      {/* 1. BACKGROUND SYSTEM */}
      <div className="absolute inset-0 z-0">
        {/* Subtle office image on the right side ONLY */}
        <div className="absolute top-0 right-0 w-full h-full">
          <Image
            src="/oyen_grid_hero_workspace_v2_1778080769_png_1778080399094.png"
            alt="Office background"
            fill
            className="object-cover opacity-60 grayscale blur-[2px] brightness-[0.6]"
          />
        </div>
        
        {/* Dark gradient overlay: Left fully dark -> Right image visible (90deg) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent opacity-100" />
        
        {/* Gold radial glow behind UI mockup (circle at 75% 60%) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_60%,rgba(245,184,0,0.15),transparent_60%)] pointer-events-none" />
        
        {/* Dotted/grid floor effect fading forward */}
        <div className="absolute bottom-0 left-0 right-0 h-[300px] opacity-[0.1] bg-[url('/grid-dots.svg')] [mask-image:linear-gradient(to_top,black,transparent)] pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            {/* Badge */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#F5B800] shadow-[0_0_8px_#F5B800]" />
              <span className="text-[#F5B800] text-[11px] font-bold tracking-[0.2em] uppercase">
                PROGRAMME INFRASTRUCTURE FOR SCALE
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[54px] md:text-[68px] lg:text-[76px] font-bold text-white leading-[1.05] tracking-tight mb-8">
              A complete <span className="text-[#F5B800]">system</span>,<br />
              not a collection<br />
              of features.
            </h1>

            {/* Subtext */}
            <p className="text-[18px] md:text-[20px] text-[#AAAAAA] leading-relaxed mb-12 max-w-lg font-light">
              Every capability in OYEN GRID is designed to work together, ensuring your programmes run with absolute structural integrity and operational clarity.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 mb-16">
              <Link 
                href="/get-started"
                className="px-10 py-4 rounded-xl bg-[#F5B800] text-black font-bold text-[16px] transition-all hover:bg-[#D4A000] hover:scale-105 active:scale-95 shadow-lg shadow-[#F5B800]/10"
              >
                Start Building
              </Link>
              <Link 
                href="/contact"
                className="px-10 py-4 rounded-xl border border-white/10 text-white font-bold text-[16px] hover:bg-white/5 transition-all active:scale-95"
              >
                Talk to Sales
              </Link>
            </div>

            {/* Metrics Row */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/5">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#F5B800] fill-[#F5B800]" />
                <span className="text-white font-bold text-[14px]">4.8/5</span>
                <span className="text-[#666666] text-[13px]">rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#F5B800]" />
                <span className="text-white font-bold text-[14px]">2,000+</span>
                <span className="text-[#666666] text-[13px]">programmes</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#F5B800]" />
                <span className="text-white font-bold text-[14px]">50+</span>
                <span className="text-[#666666] text-[13px]">countries</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#F5B800]" />
                <span className="text-white font-bold text-[14px]">99.9%</span>
                <span className="text-[#666666] text-[13px]">uptime</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE (CRITICAL) */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative z-10 w-full aspect-[1.2/1] bg-[#0A0A0A] border border-white/10 rounded-[24px] shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden group perspective-[2000px]"
            >
              {/* Internal UI Mockup Image */}
              <Image 
                src="/oyen_grid_hero_ui_mockup_1778080275_png_1778079895843.png" 
                alt="Product UI Mockup" 
                fill
                className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              
              {/* Soft border glow */}
              <div className="absolute inset-0 rounded-[24px] border border-white/5 pointer-events-none" />
              
              {/* Shadow/Glow behind card */}
              <div className="absolute -inset-10 bg-[#F5B800] opacity-[0.02] blur-[40px] pointer-events-none" />
            </motion.div>
            
            {/* Perspective floating element (optional detail) */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F5B800] opacity-[0.05] blur-[60px] rounded-full pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
