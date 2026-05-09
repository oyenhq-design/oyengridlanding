"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export function HeroInstitutional() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const metrics = [
    { label: "Delivery Nodes", value: "1,240+" },
    { label: "Sync Latency", value: "0.8ms" },
    { label: "Uptime Protocol", value: "99.999%" },
    { label: "Global Regions", value: "140+" }
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-32 pb-48 overflow-hidden bg-[#040816]">
      
      {/* CINEMATIC BACKGROUND */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        <Image 
          src="/hero-elite-bg.png" 
          alt="Institutional Environment" 
          fill
          priority
          className="object-cover opacity-[0.72] brightness-[0.85] contrast-[1.1] saturate-[0.9]"
          style={{ objectPosition: '68% center' }}
        />
        {/* Precision Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040816] via-[#040816]/92 30% via-[#040816]/60 50% to-[#040816]/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040816]/40 via-transparent to-[#040816]" />
        
        {/* Light Bloom */}
        <div className="absolute -top-[10%] -right-[5%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(212,166,58,0.08)_0%,transparent_70%)] blur-[60px]" />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT CONTENT BLOCK */}
          <motion.div
            style={{ y: contentY }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-7"
          >
            <div className="max-w-[640px]">
              <div className="inline-flex items-center gap-4 mb-12">
                 <div className="h-px w-8 bg-accent-gold/40" />
                 <span className="label-institutional">Institutional Infrastructure</span>
              </div>
              
              <h1 className="text-white mb-10 text-[48px] md:text-[84px] leading-[0.92] tracking-[-0.05em] font-bold">
                Professional programme <br />
                infrastructure for <br />
                global operations at <br />
                <span className="text-accent-gold italic font-semibold">scale.</span>
              </h1>
              
              <p className="text-[19px] text-white/50 mb-14 max-w-xl leading-relaxed font-light">
                Coordinate large-scale institutional programmes through a unified operational infrastructure. Built for absolute structural integrity.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-10">
                <button className="btn-gold px-12 h-14 rounded-2xl">
                  Initialize System
                </button>
                <button className="flex items-center gap-3 text-[14px] font-bold text-white/40 hover:text-white transition-all uppercase tracking-[0.2em] group">
                  Access Infrastructure <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* RIGHT VISUAL CARD */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-5 hidden lg:block"
          >
             <div className="relative p-2 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-3xl shadow-[0_80px_160px_rgba(0,0,0,0.8)]">
                <div className="relative rounded-[28px] overflow-hidden border border-white/5">
                   <Image 
                     src="/hero-dashboard.png" 
                     alt="Operational Dashboard" 
                     width={800} 
                     height={540} 
                     className="opacity-80 grayscale-[0.2] brightness-90"
                   />
                   <div className="absolute inset-0 bg-gradient-to-tr from-[#040816]/60 via-transparent to-transparent" />
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-8 right-8 px-5 py-2.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                   <span className="text-[11px] font-black uppercase tracking-widest text-white/80">99.9% Optimal</span>
                </div>
             </div>
          </motion.div>
        </div>

        {/* METRICS ROW */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-32 pt-16 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-12"
        >
          {metrics.map((m, i) => (
            <div key={i}>
              <div className="text-[32px] font-bold text-white mb-2">{m.value}</div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">{m.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
