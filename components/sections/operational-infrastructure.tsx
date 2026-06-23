"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause, ExternalLink } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    image: "/slide-deliver-training.jpg",
    title: "Every tool you need to deliver training",
    badge: "Operational Center"
  },
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
    <section className="relative py-28 md:py-36 w-full min-h-[600px] lg:min-h-[780px] overflow-hidden flex items-center justify-center">
      {/* Immersive Scenic Background Image (Zoom style) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/zoom-scenic-bg.png"
          alt="Scenic Mountain Background"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle dark overlay for premium feel and text contrast */}
        <div className="absolute inset-0 bg-[#05070F]/20 pointer-events-none" />
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 relative z-10 flex flex-col items-center">
        {/* Floating Top Right Badge - Zoom Note-taking Style */}
        <div className="absolute top-[-40px] right-6 z-20 hidden md:flex items-center gap-3 bg-[#0C1029]/85 border border-white/10 backdrop-blur-xl px-4 py-2.5 rounded-xl shadow-2xl">
          <div className="w-6.5 h-6.5 rounded-lg bg-[#D4A017]/20 flex items-center justify-center shrink-0 border border-[#D4A017]/30">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4A017] animate-pulse" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-bold text-white leading-none">OYEN GRID Engine</span>
            <span className="text-[8px] font-semibold text-zinc-400 mt-0.5">Mockups active & synced</span>
          </div>
        </div>

        {/* Central macOS-Style Mockup Window */}
        <div className="relative w-full max-w-[940px] aspect-[16/10] bg-[#0E1326]/90 border border-white/15 rounded-2xl overflow-hidden shadow-[0_35px_80px_rgba(0,0,0,0.65)] backdrop-blur-md group">
          
          {/* macOS Top Bar / Header */}
          <div className="w-full h-11 border-b border-white/[0.08] bg-[#0B0D1A]/95 px-4 flex items-center justify-between z-20 relative select-none">
            {/* Traffic Lights */}
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
            </div>
            
            {/* Center Browser Title / Address tab */}
            <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-md px-3.5 py-1 text-[11px] font-medium text-zinc-300 w-full max-w-[320px] justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>app.oyengrid.com/program/cohort-7</span>
            </div>

            {/* Right window actions */}
            <div className="flex items-center gap-3 text-zinc-400">
              <ExternalLink className="w-3.5 h-3.5 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Slide Content Area */}
          <div className="relative w-full h-[calc(100%-44px)] overflow-hidden bg-[#05070F]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIdx}
                initial={{ opacity: 0, x: 25, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -25, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
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

            {/* Left & Right Interactive Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0B0D1A]/80 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#D4A017] hover:border-[#D4A017] hover:scale-105 z-30 cursor-pointer shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0B0D1A]/80 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#D4A017] hover:border-[#D4A017] hover:scale-105 z-30 cursor-pointer shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Bottom Gradient overlay for slide title */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/85 via-black/45 to-transparent pointer-events-none z-10" />

            <div className="absolute bottom-4 left-6 z-20 flex flex-col text-left">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#D4A017] mb-1">
                {slides[currentIdx].badge}
              </span>
              <h4 className="text-white text-base md:text-lg font-bold drop-shadow-md">
                {slides[currentIdx].title}
              </h4>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Dot Indicators */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIdx === idx 
                  ? "w-8 bg-[#D4A017] shadow-[0_0_12px_rgba(212,160,23,0.4)]" 
                  : "w-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Bottom Right Scenic Play/Pause Button (Replicating Image 1 details) */}
        <div className="absolute bottom-4 right-8 z-20">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 rounded-xl bg-[#0C1029]/80 border border-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#D4A017] hover:border-[#D4A017] hover:scale-105 transition-all cursor-pointer shadow-2xl"
            title={isPlaying ? "Pause Slideshow" : "Start Slideshow"}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>

      </div>
    </section>
  );
}
