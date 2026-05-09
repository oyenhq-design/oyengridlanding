"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const checklistItems = [
    "Sovereign node architecture",
    "Absolute governance integrity",
    "Global operational synchronization"
  ];

  return (
    <section ref={sectionRef} className="relative min-h-[95vh] flex items-center pt-32 pb-48 overflow-hidden bg-[#04070D]">
      
      {/* CINEMATIC BACKGROUND: Full Operational Environment */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        <Image 
          src="/hero-elite-bg.png" 
          alt="Operations Environment" 
          fill
          priority
          className="object-cover opacity-[0.35] grayscale-[0.3]"
        />
        {/* Elite Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04070D] via-[#04070D]/92 35% via-[#04070D]/75 35% via-[#04070D]/28 65% to-[#04070D]/12" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#04070D] via-transparent to-[#04070D]" />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LAYERED CONTENT: Elite Editorial Hierarchy */}
          <motion.div
            style={{ y: contentY, opacity: opacityFade }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-12 xl:col-span-10"
          >
            <div className="max-w-[480px]">
              {/* Institutional Tag */}
              <div className="inline-flex items-center gap-5 mb-14">
                 <div className="h-px w-8 bg-accent-gold/30" />
                 <span className="label-institutional opacity-60">Institutional Operating System</span>
              </div>
              
              {/* Headline: Editorial Luxury Compression */}
              <h1 className="text-white mb-10 leading-[0.94] tracking-[-0.05em] font-bold">
                Professional programme <br />
                infrastructure for global <br />
                operational <span className="text-accent-gold font-semibold italic">scale.</span>
              </h1>
              
              {/* Supporting Copy: Bloomberg Restraint */}
              <p className="mb-14 text-white/50 leading-relaxed font-light">
                Coordinate large-scale programme operations through a unified institutional layer. Built for absolute structural integrity.
              </p>

              {/* Elite Checklist Refinement */}
              <div className="space-y-4 mb-16">
                {checklistItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-4 h-4 rounded-full border border-accent-gold/45 flex items-center justify-center bg-accent-gold/[0.03]">
                      <Check className="w-2.5 h-2.5 text-accent-gold" strokeWidth={3} />
                    </div>
                    <span className="text-[13px] text-white/40 font-medium tracking-tight group-hover:text-white/60 transition-colors">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Protocol: Metallic Materiality */}
              <div className="flex flex-col sm:flex-row items-center gap-8">
                <button className="btn-gold px-10">
                  Initialize System
                </button>
                <button className="btn-outline">
                  Access Documentation
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
