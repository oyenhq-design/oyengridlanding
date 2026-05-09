"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#030712]">
      
      {/* BACKGROUND: Immersive Cinematic Environment with Parallax */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        <Image 
          src="/hero-ops-center.png" 
          alt="Enterprise Operations Center" 
          fill
          priority
          className="object-cover opacity-[0.5] grayscale-[0.2]"
        />
        {/* Controlled Contrast Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/82 via-[#030712]/94 to-[#030712]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-transparent to-transparent" />
        
        {/* Subtle Atmospheric Reflection */}
        <motion.div 
          animate={{ 
            opacity: [0.05, 0.1, 0.05],
            x: ["-10%", "10%", "-10%"]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(214,166,60,0.04),transparent_60%)]"
        />
      </motion.div>

      <div className="container-custom relative z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT CONTENT: Restrained & Authoritative */}
          <motion.div
            style={{ y: contentY, opacity: opacityFade }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            {/* Top Indicator: Institutional Label */}
            <div className="inline-flex items-center gap-4 mb-10">
               <div className="live-pulse" />
               <span className="label-institutional">Live Operational Infrastructure</span>
            </div>
            
            {/* Heading: Premium Hierarchy */}
            <h1 className="text-white mb-10">
              Professional programme <br />
              infrastructure for <span className="text-accent-gold italic font-medium">scale.</span>
            </h1>
            
            <p className="mb-14 max-w-[540px]">
              Built for operational clarity at global enterprise scale. The premier platform for managing complex initiatives with absolute structural integrity.
            </p>

            {/* Actions: Premium Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <button className="btn-gold px-12 h-14 w-full sm:w-auto">
                Initialize System
              </button>
              <button className="text-[13px] font-bold text-white/40 hover:text-white transition-all uppercase tracking-[0.24em] flex items-center gap-3 group">
                Access Documentation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* RIGHT VISUAL: Integrated Perspective Dashboard */}
          <motion.div
            style={{ y: contentY }}
            initial={{ opacity: 0, scale: 0.98, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative group">
               {/* Perspective Container */}
               <div className="hero-perspective relative rounded-[32px] overflow-hidden border border-white/10 bg-[#050b1a]/80 backdrop-blur-3xl transition-all duration-1000 group-hover:border-white/20">
                 <Image 
                   src="/hero-dashboard.png" 
                   alt="System Dashboard" 
                   width={1200}
                   height={800}
                   className="opacity-90 grayscale-[0.3] group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-105"
                 />
                 {/* Ambient Glow & Reflections */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#030712]/60 via-transparent to-white/5" />
                 
                 <motion.div 
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                 />
               </div>
               
               {/* Integrated Metric Tag */}
               <motion.div
                 animate={{ y: [0, -8, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -bottom-8 -left-12 p-8 rounded-[24px] bg-[#071126]/90 backdrop-blur-2xl border border-white/10 shadow-2xl"
               >
                  <div className="text-[10px] text-accent-gold font-black uppercase tracking-[0.24em] mb-2">Live Telemetry</div>
                  <div className="text-2xl font-bold text-white tabular-nums tracking-tighter">99.9% Optimal</div>
               </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Bottom atmospheric transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#020617] to-transparent z-20" />
    </section>
  );
}
