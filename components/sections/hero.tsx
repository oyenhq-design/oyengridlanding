"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712]">
      
      {/* FULL ENVIRONMENTAL BACKDROP */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-ops-center.png" 
          alt="Operational Environment" 
          fill
          priority
          className="object-cover opacity-[0.35] grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(3,7,18,0.4),#030712)]" />
      </div>

      <div className="container-custom relative z-10 pt-32 pb-24 text-center">
        {/* Institutional Identifier */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-6 mb-16"
        >
           <div className="h-[1px] w-16 bg-[#d6a63c]/30" />
           <span className="text-[10px] font-bold text-[#d6a63c]/60 uppercase tracking-[0.6em]">Institutional Operating System</span>
        </motion.div>

        {/* Sharper Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-[48px] md:text-[84px] font-bold text-white mb-12 tracking-[-0.05em] leading-[0.95] max-w-5xl mx-auto"
        >
          Professional programme <br />
          infrastructure for global <br />
          operational <span className="text-[#d6a63c] italic font-medium">scale.</span>
        </motion.h1>

        {/* Believable Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="max-w-[560px] mx-auto mb-16 text-[17px] leading-[1.8] text-white/50 font-light"
        >
          Coordinate large-scale programme operations through a unified operational infrastructure layer. Built for absolute structural integrity and institutional delivery.
        </motion.p>

        {/* Authoritative Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-12 mb-32"
        >
          <button className="btn-gold px-14 h-16 text-[12px] uppercase tracking-[0.2em]">
            Talk to Architects
          </button>
          <button className="text-[12px] font-bold text-white/30 hover:text-white transition-all uppercase tracking-[0.3em] flex items-center gap-4 group">
            View System Architecture <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>

        {/* FLOATING EMBEDDED DASHBOARD */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-6xl mx-auto"
        >
           {/* Ambient Glow & Reflection */}
           <div className="absolute -inset-20 bg-[#d6a63c]/5 blur-[120px] rounded-full pointer-events-none opacity-40" />
           
           <div className="relative rounded-[40px] overflow-hidden border border-white/10 bg-[#0E1728]/80 backdrop-blur-3xl shadow-[0_60px_120px_rgba(0,0,0,0.8)]">
              <Image 
                src="/hero-dashboard.png" 
                alt="System Dashboard" 
                width={1400}
                height={800}
                className="opacity-90 grayscale-[0.4] hover:grayscale-0 transition-all duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />
              
              {/* Internal Monitor Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(214,166,60,0.02),transparent_70%)]" />
           </div>

           {/* Foreground Detail Blur */}
           <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#0E1728]/60 backdrop-blur-3xl border border-white/10 rounded-[32px] p-8 text-left shadow-2xl hidden lg:block">
              <div className="text-[9px] text-[#d6a63c] font-bold uppercase tracking-[0.4em] mb-4">Node_Status</div>
              <div className="space-y-4">
                 {[0, 1, 2].map((i) => (
                   <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
                      <div className="h-1 flex-1 bg-white/5 rounded-full" />
                   </div>
                 ))}
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
