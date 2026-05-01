"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#0B0B0C] overflow-hidden">
      {/* Background Lighting & Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37] opacity-[0.03] blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[400px] bg-[#D4AF37] opacity-[0.02] blur-[120px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121214] border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-semibold tracking-wide uppercase w-max mb-8 shadow-[0_0_15px_rgba(212,175,55,0.05)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
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
                className="inline-flex items-center justify-center bg-[#D4AF37] text-[#0B0B0C] font-semibold px-8 py-3.5 rounded-lg text-base transition-all duration-300 hover:bg-[#E5C354] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:-translate-y-0.5"
              >
                Start building
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center bg-[#121214] border border-[#27272A] hover:border-[#D4AF37]/50 text-[#FFFFFF] font-medium px-8 py-3.5 rounded-lg text-base transition-all duration-300 hover:bg-[#1A1A1D] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:-translate-y-0.5"
              >
                Talk to sales
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Visual Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotateY: 5, y: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0, y: [0, -10, 0] }}
            transition={{ 
              opacity: { duration: 1, delay: 0.2, ease: "easeOut" },
              scale: { duration: 1, delay: 0.2, ease: "easeOut" },
              rotateY: { duration: 1, delay: 0.2, ease: "easeOut" },
              y: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }
            }}
            className="relative w-full aspect-[4/3] perspective-1000"
          >
            {/* Main Mockup Container with Perspective */}
            <div className="absolute inset-0 rounded-2xl border border-[#D4AF37]/30 bg-[#0F0F11] shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_40px_rgba(212,175,55,0.15)] overflow-hidden transform rotate-y-[-5deg] rotate-x-[2deg] transition-transform duration-700 hover:rotate-y-0 hover:rotate-x-0">
              
              {/* Top Bar */}
              <div className="h-12 border-b border-[#27272A] bg-[#141417] flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ef4444]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#f59e0b]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#22c55e]/80" />
                </div>
                <div className="mx-auto px-24 py-1.5 bg-[#0B0B0C] rounded-md border border-[#27272A] flex items-center justify-center">
                  <span className="text-[10px] text-[#A1A1AA] uppercase tracking-widest font-mono">Operations Dashboard</span>
                </div>
              </div>

              {/* Mockup Body Content - Abstract UI */}
              <div className="p-6 h-full flex flex-col gap-4 bg-[url('/img/grid-pattern.svg')] bg-center bg-cover">
                
                {/* Abstract Header/Stats Area */}
                <div className="flex gap-4">
                  <div className="flex-1 bg-[#1A1A1D]/80 backdrop-blur-sm border border-[#27272A] rounded-xl p-4 flex flex-col gap-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#D4AF37] opacity-[0.05] blur-xl rounded-full translate-x-1/2 -translate-y-1/2" />
                    <span className="text-xs text-[#A1A1AA]">Active Programmes</span>
                    <span className="text-2xl text-white font-semibold">124</span>
                    <div className="w-full h-1 bg-[#27272A] rounded-full mt-2 overflow-hidden">
                      <div className="h-full w-[75%] bg-[#D4AF37] rounded-full" />
                    </div>
                  </div>
                  <div className="flex-1 bg-[#1A1A1D]/80 backdrop-blur-sm border border-[#27272A] rounded-xl p-4 flex flex-col gap-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#22c55e] opacity-[0.05] blur-xl rounded-full translate-x-1/2 -translate-y-1/2" />
                    <span className="text-xs text-[#A1A1AA]">Completion Rate</span>
                    <span className="text-2xl text-white font-semibold">92.4%</span>
                    <div className="flex items-center gap-1 text-xs text-[#22c55e] mt-1">
                      <span className="font-medium">+4.2%</span> from last month
                    </div>
                  </div>
                </div>

                {/* Abstract Chart Area */}
                <div className="flex-1 bg-[#1A1A1D]/80 backdrop-blur-sm border border-[#27272A] rounded-xl p-5 relative overflow-hidden flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                     <span className="text-sm text-white font-medium">Performance Trajectory</span>
                     <div className="flex gap-2">
                       <div className="w-16 h-1.5 bg-[#D4AF37] rounded-full" />
                       <div className="w-8 h-1.5 bg-[#27272A] rounded-full" />
                     </div>
                  </div>
                  
                  {/* Abstract Line Chart using CSS */}
                  <div className="flex-1 flex items-end gap-3 pt-6 relative">
                    {/* Grid lines */}
                    <div className="absolute inset-x-0 bottom-0 top-6 border-b border-[#27272A] flex flex-col justify-between">
                       <div className="border-t border-[#27272A]/50 w-full" />
                       <div className="border-t border-[#27272A]/50 w-full" />
                       <div className="border-t border-[#27272A]/50 w-full" />
                    </div>
                    {/* Bars/Lines */}
                    {[40, 65, 45, 80, 55, 90, 75, 100].map((height, i) => (
                      <div key={i} className="flex-1 flex justify-center items-end h-full relative z-10 group">
                        <div 
                          className={`w-full max-w-[24px] rounded-t-sm transition-all duration-500 ${i === 7 ? 'bg-gradient-to-t from-[#D4AF37]/20 to-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.5)]' : 'bg-[#27272A] group-hover:bg-[#3f3f46]'}`}
                          style={{ height: `${height}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating UI Panel - Workflow Node */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -right-6 top-1/4 bg-[#121214]/90 backdrop-blur-md border border-[#D4AF37]/40 rounded-lg p-3 shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(212,175,55,0.15)] flex items-center gap-3 w-48"
            >
              <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center border border-[#D4AF37]/50">
                 <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-[#A1A1AA] uppercase tracking-wider">Status</span>
                <span className="text-sm text-white font-medium">Deployed</span>
              </div>
            </motion.div>

            {/* Floating UI Panel - Alert */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              className="absolute -left-8 bottom-1/4 bg-[#121214]/90 backdrop-blur-md border border-[#27272A] rounded-lg p-4 shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex items-center gap-4 w-56"
            >
               <div className="w-2 h-10 bg-[#D4AF37] rounded-full" />
               <div className="flex flex-col">
                 <span className="text-xs text-white font-medium">System optimized</span>
                 <span className="text-[10px] text-[#A1A1AA]">Latency reduced by 14ms</span>
               </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
