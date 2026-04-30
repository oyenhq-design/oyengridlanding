"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-40 md:pt-48 pb-24 md:pb-32 bg-[#0B0B0C] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left: Text Content */}
          <div className="flex flex-col max-w-2xl z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[48px] sm:text-[56px] lg:text-[64px] font-bold text-white leading-[1.05] tracking-tight mb-6"
            >
              Run structured programmes with full operational control
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-[#9CA3AF] mb-8 leading-relaxed max-w-lg"
            >
              Replace fragmented tools with a unified system built for structured delivery.
            </motion.p>
            
            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-4 mb-10"
            >
              {["Structured delivery flow", "Centralised participant control", "System-level visibility"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white text-[16px] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#C8A96A] shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link 
                href="/get-started"
                className="w-full sm:w-auto bg-[#C8A96A] hover:bg-[#B39355] text-[#0B0B0C] font-semibold px-8 py-4 rounded-lg text-[16px] transition-all duration-300 hover:-translate-y-1 shadow-[0_0_20px_rgba(200,169,106,0.2)] flex items-center justify-center"
              >
                Start Building
              </Link>
              <Link 
                href="/sales"
                className="w-full sm:w-auto bg-transparent border border-[rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.03)] text-white font-semibold px-8 py-4 rounded-lg text-[16px] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
              >
                Talk to Sales
              </Link>
            </motion.div>
          </div>

          {/* Right: Layered UI Mockups */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative w-full aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center"
          >
            {/* Main Dashboard Layer */}
            <div className="absolute right-[-10%] sm:right-0 lg:right-[-25%] w-[120%] lg:w-[140%] z-10 shadow-2xl rounded-xl border border-[rgba(255,255,255,0.06)] bg-[#121214] overflow-hidden">
              <Image
                src="/img/pg mgt.png"
                alt="OYEN Grid Dashboard"
                width={1200}
                height={800}
                className="w-full h-auto object-cover opacity-90"
                priority
              />
            </div>

            {/* Floating UI Cards */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-1/4 left-[-10%] z-20 w-[240px] bg-[#1A1A1D] border border-[rgba(255,255,255,0.06)] rounded-[12px] p-4 shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#C8A96A]/20 flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#C8A96A] rounded-full" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Cohort Alpha</div>
                  <div className="text-[#9CA3AF] text-xs">98% Engagement</div>
                </div>
              </div>
              <div className="w-full h-1.5 bg-[#0B0B0C] rounded-full overflow-hidden">
                <div className="w-[98%] h-full bg-[#C8A96A]" />
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
