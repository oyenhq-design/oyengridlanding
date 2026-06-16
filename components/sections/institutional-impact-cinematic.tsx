"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Testimonial {
  id: string;
  org: string;
  quote: string;
  supporting: string;
  role: string;
  results: string[];
}

const testimonials: Testimonial[] = [
  {
    id: "altschool",
    org: "ALTSCHOOL",
    quote: "OYEN GRID replaced WhatsApp, Zoom, Google Drive, Sheets, and Typeform for us.",
    supporting: "We consolidated communication, attendance, reporting, live delivery, and learner management into a single platform, giving our team complete operational visibility.",
    role: "Program Director, ALTSCHOOL",
    results: [
      "40+ Cohorts Delivered",
      "1,200+ Learners Managed",
      "60% Less Administrative Work"
    ]
  },
  {
    id: "zuri",
    org: "ZURI",
    quote: "We finally had visibility into learner engagement across every cohort.",
    supporting: "Our facilitators now manage attendance, communication, resources, and reporting from one centralized workspace.",
    role: "Program Director, ZURI",
    results: [
      "10,000+ Learners Coordinated",
      "75% Faster Reporting",
      "50+ Active Cohorts"
    ]
  },
  {
    id: "ingressive",
    org: "INGRESSIVE FOR GOOD",
    quote: "Reporting for sponsors and stakeholders became dramatically easier.",
    supporting: "Instead of exporting data from multiple tools, our team generates operational reports from a single source of truth.",
    role: "Program Director, INGRESSIVE FOR GOOD",
    results: [
      "100+ Programs Delivered",
      "85% Faster Reporting Cycles",
      "30+ Team Members Coordinating"
    ]
  },
  {
    id: "shecodeafrica",
    org: "SHE CODE AFRICA",
    quote: "OYEN GRID helped us scale learning operations without increasing complexity.",
    supporting: "Everything from learner onboarding to session delivery is coordinated from one platform.",
    role: "Program Director, SHE CODE AFRICA",
    results: [
      "5,000+ Members Supported",
      "90+ Learning Events",
      "Centralized Operational Workflow"
    ]
  }
];

export function InstitutionalImpactCinematic() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const progressTimerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const touchStartX = useRef<number | null>(null);

  const slideDuration = 8000; // 8 seconds

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Autoplay & Progress logic
  useEffect(() => {
    if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    if (progressTimerRef.current) cancelAnimationFrame(progressTimerRef.current);

    if (!isHovered) {
      startTimeRef.current = Date.now() - (progress / 100) * slideDuration;

      const tick = () => {
        const elapsed = Date.now() - startTimeRef.current;
        const currentProgress = Math.min((elapsed / slideDuration) * 100, 100);
        setProgress(currentProgress);

        if (currentProgress >= 100) {
          nextSlide();
        } else {
          progressTimerRef.current = requestAnimationFrame(tick);
        }
      };

      progressTimerRef.current = requestAnimationFrame(tick);
    }

    return () => {
      if (progressTimerRef.current) cancelAnimationFrame(progressTimerRef.current);
    };
  }, [isHovered, activeIndex, nextSlide, progress]);

  const handleLogoClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  // Touch Swipe Support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section 
      className="py-24 md:py-32 bg-[#0A0A0A] relative overflow-hidden border-b border-white/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Subtle radial glow behind quote */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#F5D76E]/[0.012] blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[10px] font-black tracking-[0.35em] text-[#F5D76E] uppercase">
            CUSTOMER STORIES
          </span>
          <h2 className="text-[36px] md:text-[48px] font-bold text-white tracking-tight leading-none mt-4 mb-5">
            Trusted by teams delivering training at scale.
          </h2>
          <p className="text-[15px] text-white/50 max-w-[620px] mx-auto font-light leading-relaxed">
            See how organizations use OYEN GRID to streamline coordination, improve learner engagement, and simplify program delivery.
          </p>
        </div>

        {/* SLIDER LAYOUT */}
        <div className="max-w-[960px] mx-auto min-h-[460px] flex flex-col justify-between">
          
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-center"
              >
                {/* Large Quote */}
                <blockquote className="text-[32px] md:text-[44px] lg:text-[48px] font-bold text-white tracking-tight leading-[1.15] mb-8 select-none">
                  “{currentTestimonial.quote}”
                </blockquote>

                {/* Supporting Paragraph */}
                <p className="text-[16px] md:text-[17px] text-white/60 leading-[1.65] font-light max-w-[720px] mx-auto mb-10">
                  {currentTestimonial.supporting}
                </p>

                {/* Author Info */}
                <div className="mb-10">
                  <div className="text-[15px] font-bold text-white">{currentTestimonial.role}</div>
                </div>

                {/* Results Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-[800px] mx-auto">
                  {currentTestimonial.results.map((result, idx) => {
                    const [val, ...labelParts] = result.split(" ");
                    const label = labelParts.join(" ");
                    return (
                      <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                        <div className="text-[28px] md:text-[32px] font-bold text-[#F5D76E] tracking-tight mb-1">
                          {val}
                        </div>
                        <div className="text-[11px] font-black text-white/40 uppercase tracking-wider">
                          {label}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Case Study CTA */}
                <div className="mb-6">
                  <Link 
                    href="/company/contact" 
                    className="inline-flex items-center gap-1.5 text-[11px] font-black text-[#F5D76E] hover:text-[#FFF] uppercase tracking-widest transition-colors"
                  >
                    Read Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* SLIDER CONTROLS & PROGRESS */}
          <div className="flex flex-col items-center gap-6 mt-6 pt-8 border-t border-white/5">
            
            {/* Story Indicator & Slider Buttons */}
            <div className="flex items-center justify-between w-full max-w-[280px]">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] flex items-center justify-center text-white/60 hover:text-white transition-all"
                aria-label="Previous story"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="text-[12px] font-bold text-white/50 tracking-wider">
                Story <span className="text-white">0{activeIndex + 1}</span> / 04
              </div>

              <button 
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] flex items-center justify-center text-white/60 hover:text-white transition-all"
                aria-label="Next story"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="w-full max-w-[320px] h-[3px] bg-white/[0.05] rounded-full overflow-hidden relative">
              <div 
                className="h-full bg-[#F5D76E] transition-all duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

          </div>

        </div>

        {/* ORGANIZATION LOGOS (Navigation links below slider) */}
        <div className="mt-20 pt-10 border-t border-white/5">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 max-w-[800px] mx-auto">
            {testimonials.map((testimonial, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={testimonial.id}
                  onClick={() => handleLogoClick(idx)}
                  className={`relative py-2 text-[12.5px] font-black tracking-widest transition-all duration-300 ${
                    isActive ? "text-[#F5D76E] opacity-100" : "text-white/40 hover:text-white/80 hover:opacity-90"
                  }`}
                >
                  {testimonial.org}
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#F5D76E] transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
