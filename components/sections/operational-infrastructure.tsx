"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause, ExternalLink } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    image: "/slide-dashboard.jpg",
    title: "OYEN GRID Interactive Dashboard",
    badge: "Live Analytics"
  },
  {
    image: "/slide-competencies.png",
    title: "Curriculum & Competency Matrix",
    badge: "Governance System"
  }
];

export function OperationalInfrastructure() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-play logic
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentIdx((prev) => (prev + 1) % slides.length);
      }, 5000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative py-24 md:py-32 w-full bg-[#F9FAFB] overflow-hidden flex items-center justify-center border-b border-zinc-200/50">
      {/* LAYER 1: Base Background is the solid ice gray section background (#F9FAFB) */}

      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="text-[10px] font-black tracking-[0.25em] text-zinc-400 uppercase">
            SaaS Showcase
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mt-2 leading-tight tracking-tight">
            How training is <span className="text-[#D4A017] italic font-serif font-normal">orchestrated.</span>
          </h2>
        </div>

        {/* LAYER 2: Office Environment Background Container (Not blur) */}
        <div className="relative w-full aspect-[16/9] rounded-[24px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.12)] border border-zinc-300/90 bg-white">
          <Image
            src="/office-context-bg.jpg"
            alt="Office Workspace Environment"
            fill
            className="object-cover opacity-100 select-none pointer-events-none filter contrast-[1.12] brightness-[0.96] saturate-[1.05]"
            priority
          />
          {/* High-fidelity subtle gradient scrim for depth without blurring the background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/10 via-transparent to-white/5 pointer-events-none" />

          {/* LAYER 3: Floating OYEN GRID Dashboard Mockup (Suspended above the office background) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[72%] aspect-[16/10] bg-[#0E1326]/95 border border-white/20 rounded-xl overflow-hidden shadow-[0_45px_100px_rgba(0,0,0,0.55)] group">
              
              {/* macOS Top Bar / Header */}
              <div className="w-full h-9 border-b border-white/[0.08] bg-[#0B0D1A]/95 px-3 flex items-center justify-between z-20 relative select-none">
                {/* Traffic Lights */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                </div>
                
                {/* Address Tab */}
                <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded px-3 py-0.5 text-[10px] font-medium text-zinc-300 w-full max-w-[260px] justify-center">
                  <span className="w-1 h-1 rounded-full bg-emerald-500" />
                  <span>app.oyengrid.com/workspace</span>
                </div>

                {/* Window Actions */}
                <div className="flex items-center gap-2 text-zinc-400">
                  <ExternalLink className="w-3 h-3 hover:text-white cursor-pointer transition-colors" />
                </div>
              </div>

              {/* Slider Content Area */}
              <div className="relative w-full h-[calc(100%-36px)] overflow-hidden bg-[#05070F]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIdx}
                    initial={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={slides[currentIdx].image}
                      alt={slides[currentIdx].title}
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Interactive Navigation Arrows */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0B0D1A]/85 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#D4A017] hover:border-[#D4A017] hover:scale-105 z-30 cursor-pointer shadow-lg"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0B0D1A]/85 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#D4A017] hover:border-[#D4A017] hover:scale-105 z-30 cursor-pointer shadow-lg"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Bottom title banner */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none z-10" />

                <div className="absolute bottom-3 left-5 z-20 flex flex-col text-left">
                  <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#D4A017] mb-0.5">
                    {slides[currentIdx].badge}
                  </span>
                  <h4 className="text-white text-xs md:text-sm font-bold drop-shadow-md">
                    {slides[currentIdx].title}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Right Play/Pause Control overlaying the office environment */}
          <div className="absolute bottom-4 right-6 z-20">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-9 h-9 rounded-lg bg-[#0C1029]/80 border border-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#D4A017] hover:border-[#D4A017] hover:scale-105 transition-all cursor-pointer shadow-xl"
              title={isPlaying ? "Pause Slideshow" : "Start Slideshow"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Bullet Indicators overlaying the bottom center of the office environment */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIdx === idx 
                    ? "w-6 bg-[#D4A017]" 
                    : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
