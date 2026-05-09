"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";

export function HeroZoom() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const metrics = [
    { label: "Active Infrastructure Nodes", value: "1,240+" },
    { label: "Operational Latency", value: "0.8ms" },
    { label: "System Uptime", value: "99.999%" },
    { label: "Global Regions", value: "140+" }
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center pt-32 pb-24 overflow-hidden bg-[#040816]">
      
      {/* CINEMATIC BACKGROUND LAYER */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0 scale-105">
        <Image 
          src="/hero-elite-bg.png" 
          alt="Premium Infrastructure Environment" 
          fill
          priority
          className="object-cover opacity-[0.55] brightness-[0.7] contrast-[1.05]"
          style={{ objectPosition: 'center center' }}
        />
        
        {/* Editorial Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040816] via-[#040816]/80 40% via-[#040816]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040816]/60 via-transparent to-[#040816]" />
        
        {/* Haze & Glows */}
        <div className="absolute top-[10%] right-[10%] w-[1000px] h-[1000px] blue-haze opacity-40 blur-[100px]" />
        <div className="absolute -bottom-[10%] left-[5%] w-[800px] h-[800px] gold-glow opacity-30 blur-[120px]" />
      </motion.div>

      <div className="container-custom relative z-10 flex-1 flex flex-col justify-center py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* LEFT: EDITORIAL TEXT */}
          <motion.div
            style={{ opacity: contentOpacity }}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-7"
          >
            <div className="max-w-[720px]">
              <div className="inline-flex items-center gap-4 mb-12">
                 <div className="h-px w-8 bg-brand-gold/40" />
                 <span className="text-[11px] font-black uppercase tracking-[0.35em] text-white/50">Enterprise Operating System</span>
              </div>
              
              <h1 className="text-white mb-10 text-[56px] md:text-[88px] leading-[0.92] tracking-[-0.06em] font-bold">
                Run structured <br />
                programmes with full <br />
                <span className="text-gold-gradient italic">operational control.</span>
              </h1>
              
              <p className="text-[20px] text-white/40 mb-14 max-w-xl leading-relaxed font-light">
                OYEN GRID is the institutional operating system for managing complex programmes, delivery infrastructure, governance operations, and large-scale execution environments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                 {[
                   "End-to-end operational visibility",
                   "Governance-grade infrastructure",
                   "Automated delivery coordination",
                   "Scalable institutional deployment"
                 ].map((t) => (
                   <div key={t} className="flex items-center gap-4">
                      <div className="w-5 h-5 rounded-full bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20">
                         <Check className="w-3 h-3 text-brand-gold" />
                      </div>
                      <span className="text-[14px] font-bold text-white/60 tracking-tight">{t}</span>
                   </div>
                 ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-12">
                <button className="btn-gold-zoom w-full sm:w-auto">
                  Start Building
                </button>
                <button className="flex items-center gap-3 text-[14px] font-bold text-white/30 hover:text-white transition-all uppercase tracking-[0.25em] group">
                  Talk to Sales <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>

              <div className="mt-14 flex items-center gap-6 pt-10 border-t border-white/5">
                 <div className="flex -space-x-2">
                    {[1,2,3,4,5].map(i => (
                      <div key={i} className="w-5 h-5 flex items-center justify-center text-brand-gold">
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    ))}
                 </div>
                 <span className="text-[12px] font-bold text-white/20 uppercase tracking-widest">★★★★★ 4.8/5 from enterprise teams</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: FLOATING VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-5 hidden lg:block"
          >
             <div className="relative p-2 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-3xl shadow-[0_100px_200px_rgba(0,0,0,0.9)] overflow-hidden group">
                <div className="relative aspect-[16/11] rounded-[28px] overflow-hidden border border-white/5">
                   <Image 
                     src="/hero-dashboard.png" 
                     alt="Operational Dashboard" 
                     width={800} 
                     height={560} 
                     className="opacity-90 grayscale-[0.1] brightness-90 group-hover:grayscale-0 transition-all duration-1000"
                   />
                   <div className="absolute inset-0 bg-gradient-to-tr from-[#040816]/80 via-transparent to-white/[0.05]" />
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-8 right-8 px-5 py-3 rounded-2xl bg-black/60 backdrop-blur-2xl border border-white/10 flex items-center gap-3 shadow-2xl">
                   <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]" />
                   <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/80">99.9% Optimal</span>
                      <span className="text-[8px] font-bold text-white/20 uppercase mt-0.5 tracking-tighter">Operational Stability</span>
                   </div>
                </div>

                {/* Perspective Reflection */}
                <div className="absolute -inset-10 bg-brand-gold/5 blur-[100px] -z-10 opacity-40 group-hover:opacity-60 transition-opacity" />
             </div>
          </motion.div>
        </div>
      </div>

      {/* METRICS STRIP */}
      <div className="w-full relative z-10 border-y border-white/5 bg-[#040816]/40 backdrop-blur-md">
        <div className="container-custom py-14 flex flex-wrap justify-between items-center gap-10">
           {metrics.map((m, i) => (
             <div key={i} className="flex items-center gap-12 group">
                <div className="flex flex-col items-center">
                   <span className="text-[36px] font-bold text-white group-hover:text-brand-gold transition-colors duration-500 tracking-[-0.04em]">{m.value}</span>
                   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/10 mt-1">{m.label}</span>
                </div>
                {i < metrics.length - 1 && (
                  <div className="hidden lg:block h-12 w-px bg-white/5" />
                )}
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
