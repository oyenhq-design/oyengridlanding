"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Background Lighting & Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37] opacity-[0.03] blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[400px] bg-[#D4AF37] opacity-[0.02] blur-[120px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-panel border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase w-max mb-8 shadow-[0_0_15px_rgba(212,175,55,0.05)]">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Structured Operations
            </div>
            
            <h1 className="text-[48px] sm:text-[56px] lg:text-[72px] font-bold text-[#FFFFFF] leading-[1.05] tracking-tight mb-6">
              Run structured programmes with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFF0B3]">full operational control</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#A1A1AA] leading-relaxed max-w-[540px] mb-8 font-light">
              The premier operating system for managing complex initiatives. Replace fragmented workflows with a unified, high-performance infrastructure designed for clarity and precision.
            </p>

            <ul className="space-y-4 mb-10 text-[#A1A1AA]">
              {[
                "End-to-end operational visibility",
                "Automated milestone tracking & analytics",
                "Bank-grade security and compliance"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 text-base"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <Link 
                href="/get-started"
                className="inline-flex items-center justify-center bg-[#D4AF37] text-background font-semibold px-8 py-3.5 rounded-lg text-base transition-all duration-300 hover:bg-[#C9A86A] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:-translate-y-0.5"
              >
                Start building
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center bg-panel border border-white/10 text-white font-medium px-8 py-3.5 rounded-lg text-base transition-all duration-300 hover:bg-white/5 hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:-translate-y-0.5"
              >
                Talk to sales
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Product Mockup Visual */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Glow Background */}
            <div 
              className="absolute inset-0 z-0 opacity-40"
              style={{
                background: 'radial-gradient(circle, rgba(250,204,21,0.15), transparent 60%)',
                filter: 'blur(40px)'
              }}
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
              animate={{ opacity: 1, scale: 1.3, rotate: 3 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10 w-full max-w-[550px]"
            >
              {/* Main Mockup */}
              <div className="relative rounded-2xl border border-white/10 bg-panel shadow-[0_40px_80px_rgba(0,0,0,0.6)] overflow-hidden">
                <Image 
                  src="/oyen_grid_product_mockup_1778021210800.png" 
                  alt="OYEN GRID Product UI" 
                  width={1000} 
                  height={750}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Card 1: Attendance Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -right-8 top-1/4 bg-panel/90 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-2xl flex items-center gap-4 w-52 z-20"
              >
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider font-bold">Attendance</span>
                  <span className="text-lg text-white font-bold">94.2%</span>
                </div>
              </motion.div>

              {/* Floating Card 2: Progress Tracking */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute -left-12 bottom-1/4 bg-panel/90 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-2xl flex flex-col gap-3 w-56 z-20"
              >
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider font-bold">Programme Progress</span>
                  <TrendingUp className="w-4 h-4 text-[#22c55e]" />
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "78%" }}
                    transition={{ delay: 1, duration: 1 }}
                    className="h-full bg-gradient-to-r from-[#D4AF37] to-[#FFF0B3] rounded-full"
                  />
                </div>
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-white font-medium">Batch B Operations</span>
                  <span className="text-[#D4AF37]">78%</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
