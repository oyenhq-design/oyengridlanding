"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Star, ShieldAlert, Zap, Trophy } from "lucide-react";

export function PremiumHero() {
  return (
    <div className="pt-[140px] bg-[#0B0B0C]">
      
      {/* 3. HERO SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden min-h-[90vh] flex flex-col justify-center">
        
        {/* BACKGROUND SYSTEM (CRITICAL FIX) */}
        <div className="absolute inset-0 z-0">
          {/* 1. Background image (office / operations) */}
          <Image
            src="/premium_saas_workspace_night_1778072758177_png_1778076123899.png"
            alt="Operational Control Room"
            fill
            className="object-cover opacity-[0.15] blur-[2px] scale-105"
            priority
          />
          {/* 2. Dark overlay gradient (black -> transparent) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C] via-[#0B0B0C]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C] via-transparent to-[#0B0B0C]" />
          
          {/* 3. Gold radial glow (bottom right) */}
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#F5B800] opacity-[0.07] blur-[150px] rounded-full translate-x-1/4 translate-y-1/4 pointer-events-none" />
          
          {/* 4. Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-[#F5B800]/10 border border-[#F5B800]/20 text-[#F5B800] text-[11px] font-black tracking-[0.2em] uppercase mb-10">
              PROGRAMME OPERATING SYSTEM
            </div>

            <h1 className="text-[48px] md:text-[64px] lg:text-[76px] font-black text-white leading-[1.05] tracking-tight mb-8">
              Run structured programmes <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B800] via-white to-[#B88A00]">with full operational control.</span>
            </h1>

            <p className="text-[19px] text-[#A1A1AA] leading-relaxed mb-10 font-light max-w-xl">
              The unified infrastructure for managing complex learning initiatives at scale. Orchestrate delivery with absolute structural integrity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5 mb-14">
              {[
                "Full visibility across cohorts",
                "Automated tracking & analytics",
                "Enterprise-grade governance",
                "Seamless multi-tenant delivery"
              ].map((bullet) => (
                <div key={bullet} className="flex items-center gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-[#F5B800]/10 border border-[#F5B800]/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F5B800]" />
                  </div>
                  <span className="text-[#D4D4D8] text-[15px] font-bold group-hover:text-white transition-colors">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Link 
                href="/get-started"
                className="px-12 py-5 rounded-full bg-[#F5B800] text-black font-black text-[16px] uppercase tracking-widest transition-all hover:scale-105 hover:shadow-[0_20px_40px_rgba(245,184,0,0.3)]"
              >
                Start Building
              </Link>
              <Link 
                href="/contact"
                className="px-12 py-5 rounded-full border border-white/10 text-white font-bold text-[16px] hover:bg-white/5 transition-all"
              >
                Talk to Sales
              </Link>
            </div>
          </motion.div>

          {/* RIGHT: UI MOCKUP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: -10 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-6 relative perspective-[2000px]"
          >
            <div className="relative z-10 w-full aspect-[16/11] bg-[#0D0D10] border border-white/10 rounded-[32px] shadow-[0_60px_100px_rgba(0,0,0,0.8)] overflow-hidden group ring-1 ring-[#F5B800]/20">
              <Image 
                src="/images/hero-dashboard.png" 
                alt="Operational Dashboard" 
                fill
                className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              {/* Inner Gold Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,184,0,0.1),transparent_70%)] pointer-events-none" />
            </div>
            {/* Soft Glow behind UI */}
            <div className="absolute -inset-10 bg-[#F5B800] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
          </motion.div>

        </div>
      </section>

      {/* 4. TRUST LOGOS ROW */}
      <section className="py-20 border-y border-white/5 bg-[#0A0A0A]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-16 lg:gap-24 opacity-30 grayscale hover:opacity-100 transition-all duration-700">
            {["Microsoft", "Stripe", "Linear", "Zoom", "Notion", "Github"].map((logo) => (
              <div key={logo} className="text-white font-black text-2xl tracking-tighter uppercase cursor-default">
                {logo}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-12 mt-12">
             <div className="text-center">
               <div className="flex gap-0.5 mb-1 justify-center">
                 {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3 h-3 fill-[#F5B800] text-[#F5B800]" />)}
               </div>
               <p className="text-white font-bold text-sm tracking-tight">4.9/5 G2 Rating</p>
             </div>
             <div className="text-center">
               <div className="flex gap-0.5 mb-1 justify-center">
                 {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3 h-3 fill-[#F5B800] text-[#F5B800]" />)}
               </div>
               <p className="text-white font-bold text-sm tracking-tight">4.8/5 Capterra</p>
             </div>
          </div>
        </div>
      </section>

      {/* 5. “BUILT FOR OPERATIONAL CLARITY” SECTION */}
      <section className="py-40">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-28">
             <h2 className="text-[36px] md:text-[52px] font-black text-white tracking-tight leading-tight">
               Built for operational clarity
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: ShieldAlert, title: "The Problem", desc: "Fragmented systems lead to data silos, operational friction, and inconsistent delivery outcomes." },
              { icon: Zap, title: "What We Do", desc: "Unified programme infrastructure that centralises data, automates tracking, and enforces governance." },
              { icon: Trophy, title: "The Outcome", desc: "Seamlessly scale to thousands of participants with absolute structural integrity and full visibility." }
            ].map((col, i) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-[24px] bg-white/[0.02] border border-white/10 flex items-center justify-center mb-10 group-hover:border-[#F5B800]/30 group-hover:bg-[#F5B800]/5 transition-all duration-500">
                  <col.icon className="w-8 h-8 text-[#71717A] group-hover:text-[#F5B800]" />
                </div>
                <h3 className="text-white font-black text-2xl mb-6">{col.title}</h3>
                <p className="text-[#71717A] text-[17px] leading-relaxed font-light">{col.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
