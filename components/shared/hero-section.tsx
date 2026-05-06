"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Globe, Users, Zap, ShieldCheck } from "lucide-react";

export function OyenHero() {
  return (
    <section className="relative min-h-[800px] flex flex-col justify-center overflow-hidden bg-[#0B0B0D] pt-12 pb-24">
      
      {/* 1. BACKGROUND SYSTEM */}
      <div className="absolute inset-0 z-0">
        {/* Full-width background image with people */}
        <div className="absolute top-0 right-0 w-full h-full">
          <Image
            src="/oyen_grid_hero_workspace_v2_1778080769_png_1778080399094.png"
            alt="Operational Environment"
            fill
            className="object-cover opacity-40 grayscale blur-[20px] brightness-[0.4] scale-110"
            priority
          />
        </div>
        
        {/* Dark gradient overlay: Left fully dark -> Right fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D] via-[#0B0B0D]/90 to-transparent opacity-100" />
        
        {/* Subtle gold radial glow behind UI (bottom-right) - PULSING */}
        <motion.div 
          animate={{ opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_75%_65%,rgba(245,184,0,0.15),transparent_60%)] pointer-events-none" 
        />
        
        {/* Dotted/grid floor effect fading forward */}
        <div className="absolute bottom-0 left-0 right-0 h-[400px] opacity-[0.08] bg-[url('/grid-dots.svg')] [mask-image:linear-gradient(to_top,black,transparent)] pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE: TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            {/* Badge */}
            <div className="flex items-center gap-3 mb-10">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-[#F5B800]" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#F5B800] animate-ping opacity-75" />
              </div>
              <span className="text-[#F5B800] text-[12px] font-bold tracking-[0.3em] uppercase">
                PROGRAMME INFRASTRUCTURE FOR SCALE
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[56px] md:text-[72px] lg:text-[84px] font-extrabold text-white leading-[1.02] tracking-tight mb-8">
              A complete <span className="text-[#F5B800] relative">system<span className="absolute -bottom-2 left-0 w-full h-1 bg-[#F5B800]/20 rounded-full" /></span>,<br />
              not a collection<br />
              of features.
            </h1>

            {/* Subtext */}
            <p className="text-[20px] md:text-[22px] text-[#AAAAAA] leading-relaxed mb-12 max-w-xl font-light">
              Every capability in OYEN GRID is designed to work together, ensuring your programmes run with absolute structural integrity and operational clarity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-6 mb-20">
              <Link 
                href="/get-started"
                className="px-12 py-5 rounded-2xl bg-[#F5B800] text-black font-black text-[18px] transition-all hover:bg-[#D4A000] hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(245,184,0,0.25)]"
              >
                Start Building
              </Link>
              <Link 
                href="/contact"
                className="px-12 py-5 rounded-2xl border-2 border-white/10 text-white font-bold text-[18px] hover:bg-white/5 transition-all active:scale-95"
              >
                Talk to Sales
              </Link>
            </div>

            {/* Metrics Row */}
            <div className="flex flex-wrap items-center gap-10 pt-10 border-t border-white/5">
              {[
                { icon: Star, val: "4.8/5", label: "rating" },
                { icon: Zap, val: "2,000+", label: "programmes" },
                { icon: ShieldCheck, val: "99.9%", label: "uptime" }
              ].map((metric, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#F5B800]/10 transition-colors">
                    <metric.icon className="w-4 h-4 text-[#F5B800]" />
                  </div>
                  <div>
                    <p className="text-white font-black text-[16px] leading-none mb-1">{metric.val}</p>
                    <p className="text-[#666666] text-[12px] uppercase font-bold tracking-widest">{metric.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE: PRODUCT UI MOCKUP */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, rotateY: 10, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, rotateY: -10, x: 0, scale: 1 }}
              whileHover={{ y: -10, rotateY: -5 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative z-10 w-full aspect-[1.2/1] bg-[#0A0A0A] border border-white/10 rounded-[32px] shadow-[0_80px_120px_rgba(0,0,0,0.9)] overflow-hidden group perspective-[2000px] cursor-pointer"
            >
              {/* Internal UI Mockup Image */}
              <Image 
                src="/oyen_grid_hero_ui_mockup_1778080275_png_1778079895843.png" 
                alt="OYEN GRID Operational Dashboard" 
                fill
                className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              
              {/* Glass glare effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />
              
              {/* Floating inner detail card (Glow pulse) */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 p-5 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl shadow-2xl"
              >
                 <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                   <p className="text-white font-bold text-xs">Live Monitoring</p>
                 </div>
              </motion.div>
            </motion.div>
            
            {/* Ambient Shadow/Glow behind card */}
            <div className="absolute -inset-20 bg-[#F5B800] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
