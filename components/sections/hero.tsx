"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Star, Globe, Users, Zap } from "lucide-react";

export function HeroSection() {
  const bullets = [
    "Full visibility across cohorts",
    "Automated tracking & analytics",
    "Enterprise-grade governance",
    "Seamless multi-tenant delivery"
  ];

  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4d/SAP_2011_logo.svg"
  ];

  return (
    <div className="relative">
      
      {/* 3. HERO SECTION */}
      <section className="relative min-h-[900px] pt-48 pb-24 overflow-hidden bg-[#0B0B0D]">
        
        {/* Background Image with Blur & Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c" 
            alt="Office Environment" 
            loading="lazy"
            className="w-full h-full object-cover grayscale opacity-40 blur-[20px] scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D] via-[#0B0B0D]/80 to-[#0B0B0D]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(245,185,66,0.1),transparent_70%)]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* LEFT CONTENT */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6"
            >
              <h1 className="text-[56px] md:text-[72px] lg:text-[84px] font-black text-white leading-[1.05] tracking-tight mb-8">
                Run structured programmes with full <span className="text-[#F5B942]">operational control.</span>
              </h1>
              
              <p className="text-[18px] md:text-[20px] text-[#A1A1AA] leading-relaxed mb-10 max-w-xl font-light">
                The unified infrastructure for professional training, operations, and multi-tenant programme delivery at global scale.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                {bullets.map((bullet, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#F5B942]" />
                    <span className="text-white font-medium text-[15px]">{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/get-started" className="btn-gold px-10 py-4.5 text-[17px]">
                  Start Building Today
                </Link>
                <Link href="/sales" className="btn-outline px-10 py-4.5 text-[17px]">
                  Talk to Sales
                </Link>
              </div>
            </motion.div>

            {/* RIGHT CONTENT: Dashboard Mockup */}
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#F5B942]/20 to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative glass-card rounded-[24px] overflow-hidden border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.8)] aspect-[1.4/1]">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bbbda536639a" 
                    alt="OYEN GRID Dashboard" 
                    loading="lazy"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-[1.02] transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/40 pointer-events-none" />
                </div>
              </div>
              
              {/* Floating Stat Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 -left-6 glass-card p-5 bg-black/60 border-white/10 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F5B942]/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#F5B942]" />
                  </div>
                  <div>
                    <div className="text-[18px] font-black text-white">99.99%</div>
                    <div className="text-[10px] font-bold text-[#71717A] uppercase tracking-widest">Global Uptime</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. TRUST / METRICS STRIP */}
      <section className="py-20 border-y border-white/5 bg-[#0B0B0D]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            
            {/* Logos */}
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-40 grayscale contrast-[1.2]">
              {logos.map((url, i) => (
                <img key={i} src={url} alt="Partner" className="h-6 md:h-7" />
              ))}
            </div>

            {/* Metrics */}
            <div className="flex items-center gap-12 md:gap-20">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-[#F5B942] fill-[#F5B942]" />
                  ))}
                  <span className="text-white font-bold text-sm ml-2">4.8+</span>
                </div>
                <div className="text-[11px] font-bold text-[#71717A] uppercase tracking-widest">User Rating</div>
              </div>

              <div className="h-10 w-px bg-white/10" />

              <div className="flex flex-col items-center md:items-start">
                <div className="text-2xl font-black text-white mb-1">1,250+</div>
                <div className="text-[11px] font-bold text-[#71717A] uppercase tracking-widest">Programmes</div>
              </div>

              <div className="h-10 w-px bg-white/10" />

              <div className="flex flex-col items-center md:items-start">
                <div className="text-2xl font-black text-white mb-1">45+</div>
                <div className="text-[11px] font-bold text-[#71717A] uppercase tracking-widest">Countries</div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
