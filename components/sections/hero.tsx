"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#040816]">
      
      {/* BACKGROUND: Immersive Cinematic Environment */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-ops-center.png" 
          alt="Enterprise Operations Center" 
          fill
          priority
          className="object-cover opacity-[0.6] grayscale-[0.1]"
        />
        {/* Layered Cinematic Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040816] via-[#040816]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040816] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(200,155,45,0.12),transparent_60%)]" />
      </div>

      <div className="container-custom relative z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT CONTENT: Clean & Authoritative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            {/* Top Indicator: Quiet Luxury */}
            <div className="inline-flex items-center gap-3 mb-10">
               <div className="w-1.5 h-1.5 rounded-full bg-[#C89B2D]" />
               <span className="text-[11px] font-medium text-[#C89B2D] uppercase tracking-[0.5em]">Institutional Infrastructure</span>
            </div>
            
            {/* Heading: Restrained, Mixed Case, Premium */}
            <h1 className="text-[44px] md:text-[68px] font-bold text-white mb-10 leading-[1.1] tracking-[-0.02em]">
              Professional programme <br />
              infrastructure for <span className="text-[#C89B2D] italic font-medium">scale.</span>
            </h1>
            
            <p className="text-[20px] text-white/50 mb-14 max-w-[580px] leading-relaxed font-light">
              Built for operational clarity at global enterprise scale. The premier platform for managing complex initiatives with absolute integrity.
            </p>

            {/* Actions: Simplified */}
            <div className="flex flex-col sm:flex-row items-center gap-10">
              <button className="btn-gold px-12 h-14 w-full sm:w-auto text-[13px] font-black tracking-widest uppercase shadow-[0_20px_40px_rgba(200,155,45,0.15)]">
                Start building
              </button>
              <button className="text-[13px] font-bold text-white/40 hover:text-white transition-all uppercase tracking-[0.2em] flex items-center gap-3 group">
                Talk to sales <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* RIGHT VISUAL: Integrated System Layer (No Heavy Boxes) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative">
               {/* Ambient Glow */}
               <div className="absolute -inset-20 bg-[#C89B2D]/5 blur-[140px] -z-10" />
               
               {/* Integrated Visual: Less Framing, More Atmosphere */}
               <div className="relative rounded-[32px] overflow-hidden border border-white/5 bg-white/[0.02] backdrop-blur-3xl shadow-2xl">
                 <Image 
                   src="/hero-dashboard.png" 
                   alt="System Dashboard" 
                   width={1200}
                   height={800}
                   className="opacity-80 grayscale-[0.4] hover:grayscale-[0.1] transition-all duration-[1.5s]"
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#040816]/40 via-transparent to-white/5" />
               </div>
               
               {/* Minimal Floating Metric */}
               <motion.div
                 animate={{ y: [0, -8, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -bottom-10 -left-10 p-8 rounded-3xl bg-[#081526]/60 backdrop-blur-2xl border border-white/10 shadow-2xl"
               >
                  <div className="text-[9px] text-[#C89B2D] font-black uppercase tracking-widest mb-1">System Health</div>
                  <div className="text-2xl font-bold text-white">99.9% Optimal</div>
               </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Bottom atmospheric fade */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#040816] to-transparent z-20" />
    </section>
  );
}
