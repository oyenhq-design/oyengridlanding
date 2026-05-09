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

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-[90vh] flex items-center pt-32 pb-48 overflow-hidden bg-[#020617]">
      
      {/* CINEMATIC BACKGROUND: Full Operational Environment */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        <Image 
          src="/hero-ops-center.png" 
          alt="Operations Environment" 
          fill
          priority
          className="object-cover opacity-[0.4] grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/90 to-[#020617]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-[#020617]/40" />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LAYERED CONTENT: Integrated into the scene */}
          <motion.div
            style={{ y: contentY, opacity: opacityFade }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-12 xl:col-span-10"
          >
            <div className="max-w-4xl">
              {/* Institutional Tag */}
              <div className="inline-flex items-center gap-5 mb-14">
                 <div className="h-px w-8 bg-accent-gold/40" />
                 <span className="label-institutional !tracking-[0.24em] opacity-80">Institutional Operating System</span>
              </div>
              
              {/* Headline: Precise & Calm */}
              <h1 className="text-white mb-14 max-w-4xl">
                Professional programme <br />
                infrastructure for global <br />
                operational <span className="text-accent-gold italic font-medium">scale.</span>
              </h1>
              
              {/* Supporting Copy: Believable */}
              <p className="max-w-[520px] mb-20 text-white/50">
                Coordinate large-scale programme operations through a unified operational infrastructure layer. Built for absolute structural integrity and systemic clarity.
              </p>

              {/* Action Protocol */}
              <div className="flex flex-col sm:flex-row items-center gap-10">
                <button className="btn-gold px-14 h-16 text-[14px]">
                  Initialize System
                </button>
                <button className="text-[14px] font-bold text-white/30 hover:text-white transition-all uppercase tracking-[0.22em] flex items-center gap-3 group">
                  Access Documentation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* INTEGRATED DASHBOARD: Floating with Perspective */}
          <motion.div
             initial={{ opacity: 0, x: 100, rotateY: -15 }}
             animate={{ opacity: 1, x: 0, rotateY: -6 }}
             transition={{ duration: 1.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
             className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[60%] hidden xl:block pointer-events-none"
          >
             <div className="hero-perspective relative rounded-[40px] overflow-hidden border border-white/10 bg-[#050b1a]/40 backdrop-blur-2xl">
                <Image 
                  src="/hero-dashboard.png" 
                  alt="System Layer" 
                  width={1400} 
                  height={900} 
                  className="opacity-70 grayscale-[0.5]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#020617]/80 via-transparent to-white/5" />
                
                {/* Monitor Glow Effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(214,166,60,0.05),transparent_70%)] mix-blend-screen" />
             </div>
             
             {/* Foreground Atmosphere */}
             <div className="absolute inset-0 blur-[100px] bg-accent-gold/5 -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
