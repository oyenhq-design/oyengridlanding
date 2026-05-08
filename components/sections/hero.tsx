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
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#030712]">
      
      {/* BACKGROUND: Cinematic Environment with Controlled Contrast */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        <Image 
          src="/hero-ops-center.png" 
          alt="Operations Center" 
          fill
          priority
          className="object-cover opacity-[0.4] grayscale-[0.2]"
        />
        {/* Sharper Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
        
        {/* Controlled Ambient Glow */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#d6a63c]/5 blur-[120px] rounded-full" />
      </motion.div>

      <div className="container-custom relative z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            style={{ opacity: opacityFade }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4 mb-12">
               <div className="w-2 h-2 rounded-full bg-[#d6a63c]" />
               <span className="premium-label">Institutional Infrastructure</span>
            </div>
            
            <h1 className="text-[52px] md:text-[76px] font-bold text-white mb-10 tracking-[-0.05em] leading-[0.95]">
              Professional programme <br />
              infrastructure for <span className="text-[#d6a63c] italic font-medium">scale.</span>
            </h1>
            
            <p className="max-w-[520px] mb-16 text-[15px] leading-[1.7] text-white/60 font-light">
              Built for operational clarity at global enterprise scale. The premier platform for managing complex initiatives with absolute structural integrity.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-10">
              <button className="btn-gold px-12 h-14 w-full sm:w-auto">
                Initialize System
              </button>
              <button className="text-[13px] font-bold text-white/30 hover:text-white transition-all uppercase tracking-[0.2em] flex items-center gap-3 group">
                Documentation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* RIGHT VISUAL: Sharp Perspective Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: 0 }}
            animate={{ opacity: 1, scale: 1, rotateY: -6 }}
            transition={{ duration: 1.4, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block perspective-[2000px]"
          >
            <div className="relative group">
               {/* Ambient Embedded Glow */}
               <div className="absolute -inset-10 bg-[#d6a63c]/10 blur-[100px] opacity-40 group-hover:opacity-60 transition-opacity duration-1000" />
               
               {/* Sharp Card Framing */}
               <div className="relative rounded-[32px] overflow-hidden border border-white/10 bg-[#0E1728]/80 backdrop-blur-3xl cinematic-shadow transition-all duration-700 group-hover:border-white/20">
                 <Image 
                   src="/hero-dashboard.png" 
                   alt="System Dashboard" 
                   width={1200}
                   height={800}
                   className="opacity-90 grayscale-[0.4] group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#030712]/60 via-transparent to-white/5" />
                 
                 {/* Moving Light Scan */}
                 <motion.div 
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                 />
               </div>
               
               {/* Minimal Floating Status */}
               <motion.div
                 animate={{ y: [0, -8, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -bottom-8 -left-8 p-6 premium-card border-[#d6a63c]/20"
               >
                  <div className="text-[9px] text-[#d6a63c] font-bold uppercase tracking-[0.3em] mb-1">Live Telemetry</div>
                  <div className="text-xl font-bold text-white tabular-nums tracking-tighter">99.9% Optimal</div>
               </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Sharp Transition to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.04]" />
    </section>
  );
}
