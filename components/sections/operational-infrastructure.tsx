"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause, ExternalLink } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    image: "/slide-deliver-training.jpg",
    title: "OYEN GRID Training Orchestration",
    badge: "Workspace Overview"
  },
  {
    image: "/slide-dashboard.jpg",
    title: "Cohort Management Dashboard",
    badge: "Live Analytics"
  },
  {
    image: "/slide-competencies.png",
    title: "Curriculum & Competency Matrix",
    badge: "Governance System"
  },
  {
    image: "/slide-coverage.png",
    title: "Cohort Competency Coverage Overview",
    badge: "Performance Tracker"
  },
  {
    image: "/slide-catalog.jpg",
    title: "Program Catalog & Filters",
    badge: "Curriculum Management"
  },
  {
    image: "/slide-facilitators.png",
    title: "Facilitator Profiles & Management",
    badge: "Staff Management"
  },
  {
    image: "/slide-coordinator.png",
    title: "Training Coordinator Dashboard",
    badge: "Coordinator Workspace"
  },
  {
    image: "/slide-organization.png",
    title: "Organization Overview & Metrics",
    badge: "Enterprise Analytics"
  }
];

export function OperationalInfrastructure() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  // Simulation States
  const [cursorX, setCursorX] = useState("50%");
  const [cursorY, setCursorY] = useState("75%");
  const [actionText, setActionText] = useState("");
  const [cursorState, setCursorState] = useState<"idle" | "hover" | "clicking" | "dragging">("idle");
  const [rippleActive, setRippleActive] = useState(false);
  const [ripplePos, setRipplePos] = useState({ x: 0, y: 0 });
  
  // Custom interactive overlay states
  const [typedText, setTypedText] = useState("");
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [textHighlight, setTextHighlight] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: "0%", y: "0%" });
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [dragCardPos, setDragCardPos] = useState<{ x: number; y: number } | null>(null);
  const [showToast, setShowToast] = useState<string | null>(null);
  const [keysPressed, setKeysPressed] = useState<string[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  };

  const triggerRipple = (xStr: string, yStr: string) => {
    setRipplePos({ x: parseFloat(xStr), y: parseFloat(yStr) });
    setRippleActive(true);
    setTimeout(() => setRippleActive(false), 500);
  };

  const flashKey = (key: string) => {
    setKeysPressed(prev => [...prev, key]);
    setTimeout(() => {
      setKeysPressed(prev => prev.filter(k => k !== key));
    }, 400);
  };

  // Main Simulation State Machine
  useEffect(() => {
    clearAllTimeouts();
    
    // Reset temporary states on slide transition
    setTypedText("");
    setShowSearchSuggestions(false);
    setIsTyping(false);
    setTextHighlight(false);
    setActiveTooltip(null);
    setShowCategoryDropdown(false);
    setDragCardPos(null);
    setActionText("");
    setCursorState("idle");

    if (!isPlaying) {
      // Hide cursor/elements by pushing it offscreen
      setCursorX("-10%");
      setCursorY("-10%");
      return;
    }

    const t = (fn: () => void, delay: number) => {
      const id = setTimeout(fn, delay);
      timeoutsRef.current.push(id);
    };

    switch (currentIdx) {
      case 0: // Workspace Overview (slide-deliver-training)
        setCursorX("80%"); setCursorY("80%");
        t(() => {
          setCursorX("32%"); setCursorY("56%");
          setActionText("🖱️ Clicking 'View Program'");
          setCursorState("hover");
        }, 800);
        t(() => {
          setCursorState("clicking");
          triggerRipple("32%", "56%");
        }, 2200);
        t(() => {
          setCursorState("idle");
          setActionText("✨ Program Details Loaded");
        }, 2500);
        t(() => {
          setCurrentIdx(1);
        }, 4200);
        break;

      case 1: // Cohort Management Dashboard (slide-dashboard)
        setCursorX("32%"); setCursorY("56%");
        t(() => {
          setCursorX("62%"); setCursorY("4.8%");
          setActionText("🔍 Activating Search...");
          setCursorState("hover");
        }, 600);
        t(() => {
          setCursorState("clicking");
          triggerRipple("62%", "4.8%");
          setIsTyping(true);
        }, 1800);
        t(() => {
          setCursorState("idle");
          setActionText("✍️ Typing Query: 'AI Engineering'");
          // Simulate typing
          const word = "AI Engineering";
          let currentWord = "";
          word.split("").forEach((char, idx) => {
            t(() => {
              currentWord += char;
              setTypedText(currentWord);
              flashKey(char.toUpperCase());
            }, 100 * idx);
          });
        }, 2100);
        t(() => {
          setShowSearchSuggestions(true);
          setActionText("💡 Suggestions Loaded");
        }, 3600);
        t(() => {
          setCursorX("62%"); setCursorY("14%");
          setActionText("🖱️ Selecting 'AI Engineering Fellowship'");
          setCursorState("hover");
        }, 4200);
        t(() => {
          setCursorState("clicking");
          triggerRipple("62%", "14%");
          setShowSearchSuggestions(false);
          setTypedText("");
        }, 5300);
        t(() => {
          setCursorState("idle");
          setCurrentIdx(2);
        }, 5800);
        break;

      case 2: // Curriculum & Competency Matrix (slide-competencies)
        setCursorX("62%"); setCursorY("14%");
        t(() => {
          setCursorX("30%"); setCursorY("48%");
          setActionText("🔍 Highlighting Facilitator Name...");
        }, 600);
        t(() => {
          setCursorState("dragging");
          setCursorX("48%"); setCursorY("48%");
          setTextHighlight(true);
          setActionText("✨ Text Selected: 'Dr. Adaeze Okafor'");
        }, 1800);
        t(() => {
          setCursorState("idle");
        }, 3000);
        t(() => {
          setCurrentIdx(3);
        }, 4800);
        break;

      case 3: // Cohort Competency Coverage Overview (slide-coverage)
        setCursorX("48%"); setCursorY("48%");
        t(() => {
          setCursorX("31%"); setCursorY("45%");
          setActionText("📊 Hovering Chart Segment...");
          setCursorState("hover");
        }, 800);
        t(() => {
          setActiveTooltip("Good Coverage: 72% of Competencies Met");
          setTooltipPos({ x: "32%", y: "37%" });
          setActionText("📈 Inspecting Analytics");
        }, 1800);
        t(() => {
          setActiveTooltip(null);
          setCursorState("idle");
        }, 3800);
        t(() => {
          setCurrentIdx(4);
        }, 4500);
        break;

      case 4: // Program Catalog & Filters (slide-catalog)
        setCursorX("31%"); setCursorY("45%");
        t(() => {
          setCursorX("88%"); setCursorY("41%");
          setActionText("📂 Opening Filters...");
          setCursorState("hover");
        }, 800);
        t(() => {
          setCursorState("clicking");
          triggerRipple("88%", "41%");
          setShowCategoryDropdown(true);
        }, 2000);
        t(() => {
          setCursorState("idle");
          setCursorX("88%"); setCursorY("49.5%");
          setActionText("🖱️ Selecting 'AI & Machine Learning'");
        }, 2300);
        t(() => {
          setCursorState("clicking");
          triggerRipple("88%", "49.5%");
          setSelectedCategory("AI & Machine Learning");
          setShowCategoryDropdown(false);
        }, 3500);
        t(() => {
          setCursorState("idle");
          setActionText("✅ Filters Applied Successfully");
        }, 3800);
        t(() => {
          setCurrentIdx(5);
        }, 5300);
        break;

      case 5: // Facilitator Profiles & Management (slide-facilitators)
        setCursorX("88%"); setCursorY("49.5%");
        t(() => {
          setCursorX("91%"); setCursorY("49.8%");
          setActionText("👤 Checking Facilitator Details...");
          setCursorState("hover");
        }, 800);
        t(() => {
          setCursorState("clicking");
          triggerRipple("91%", "49.8%");
        }, 2000);
        t(() => {
          setCursorState("idle");
          setActionText("📂 Loading Profile Card...");
        }, 2300);
        t(() => {
          setCurrentIdx(6);
        }, 4000);
        break;

      case 6: // Training Coordinator Dashboard (slide-coordinator)
        setCursorX("91%"); setCursorY("49.8%");
        t(() => {
          setCursorX("65%"); setCursorY("44%");
          setActionText("🔄 Reordering Coordinator Queue...");
        }, 800);
        t(() => {
          setCursorState("dragging");
          setActionText("📦 Dragging 'Quiz Submissions' Card");
          // Animate drag positions
          setDragCardPos({ x: 0, y: 0 });
          t(() => {
            setCursorX("65%"); setCursorY("54%");
            setDragCardPos({ x: 0, y: 35 });
          }, 400);
        }, 1800);
        t(() => {
          setCursorState("idle");
          triggerRipple("65%", "54%");
          setDragCardPos(null);
          setActionText("🚀 Dropped Card successfully");
          setShowToast("Success: Task list priority updated!");
          t(() => setShowToast(null), 2500);
        }, 3200);
        t(() => {
          setCurrentIdx(7);
        }, 5300);
        break;

      case 7: // Organization Overview & Metrics (slide-organization)
        setCursorX("65%"); setCursorY("54%");
        t(() => {
          setCursorX("42%"); setCursorY("37%");
          setActionText("📈 Inspecting Performance Trend...");
          setCursorState("hover");
        }, 800);
        t(() => {
          setActiveTooltip("Active Programs: 48 (+8.3% growth)");
          setTooltipPos({ x: "42%", y: "29%" });
        }, 1800);
        t(() => {
          setActiveTooltip(null);
          setCursorState("idle");
        }, 3800);
        t(() => {
          // Loop back to first slide
          setCurrentIdx(0);
        }, 4500);
        break;

      default:
        break;
    }

    return () => clearAllTimeouts();
  }, [currentIdx, isPlaying]);

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentIdx((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setIsPlaying(false);
    setCurrentIdx((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative py-24 md:py-32 w-full bg-[#F9FAFB] overflow-hidden flex items-center justify-center border-b border-zinc-200/50">
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

        {/* LAYER 2: Office Environment Background Container */}
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

          {/* LAYER 3: Floating OYEN GRID Dashboard Mockup */}
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
              <div ref={containerRef} className="relative w-full h-[calc(100%-36px)] overflow-hidden bg-[#05070F]">
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

                {/* ========================================================================= */}
                {/* INTERACTIVE SIMULATION LAYER OVERLAYS                                     */}
                {/* ========================================================================= */}
                
                {/* Slide 1: Typing & Search suggestions simulation overlay */}
                {currentIdx === 1 && (
                  <>
                    {/* Typist Input overlay */}
                    {isTyping && (
                      <div className="absolute top-[4.2%] left-[54.8%] h-[4.2%] w-[13.5%] bg-[#1E233D] border border-[#3E456C] rounded px-2 flex items-center text-[10px] font-medium text-white z-10 select-none">
                        <span>{typedText}</span>
                        <span className="w-[1px] h-[10px] bg-brand-gold animate-pulse ml-0.5" />
                      </div>
                    )}
                    {/* Suggestions list popup overlay */}
                    {showSearchSuggestions && (
                      <div className="absolute top-[9.2%] left-[54.8%] w-[13.5%] bg-[#12162B] border border-[#2E355E] rounded-lg shadow-2xl z-20 overflow-hidden text-[9px] select-none text-zinc-300">
                        <div className="px-2.5 py-1.5 hover:bg-[#D4A017] hover:text-black font-semibold cursor-pointer">
                          AI Engineering Fellowship
                        </div>
                        <div className="px-2.5 py-1.5 hover:bg-[#20274B] border-t border-[#1F254B] text-zinc-400">
                          AI Certification Syllabus
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Slide 2: Text selection highlight overlay */}
                {currentIdx === 2 && textHighlight && (
                  <div className="absolute top-[28.5%] left-[40.4%] w-[12.8%] h-[3.1%] bg-[#D4A017]/30 border-l border-r border-[#D4A017] pointer-events-none mix-blend-screen z-10" />
                )}

                {/* Slide 3 & 7: Dynamic data hover tooltip overlay */}
                {activeTooltip && (
                  <div 
                    style={{ left: tooltipPos.x, top: tooltipPos.y }}
                    className="absolute bg-zinc-950/95 border border-[#D4A017]/40 text-[#FAF0D4] text-[9px] font-bold py-1 px-2.5 rounded-md shadow-[0_10px_20px_rgba(0,0,0,0.55)] -translate-x-1/2 -translate-y-full z-30 flex items-center gap-1.5 backdrop-blur-md pointer-events-none whitespace-nowrap"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
                    {activeTooltip}
                  </div>
                )}

                {/* Slide 4: Interactive category filter dropdown list overlay */}
                {currentIdx === 4 && (
                  <div className="absolute top-[38.5%] left-[78.8%] w-[16.5%] z-20 select-none">
                    {/* Dropdown Input trigger state change */}
                    <div className="border border-white/10 rounded bg-[#0C1024] px-2 py-1 flex items-center justify-between text-[9px] font-bold text-white">
                      <span>{selectedCategory}</span>
                      <span className="text-[7px]">▼</span>
                    </div>

                    {showCategoryDropdown && (
                      <div className="mt-1 bg-[#101430] border border-white/15 rounded shadow-2xl overflow-hidden text-[9px] font-medium text-zinc-300">
                        <div className="px-2 py-1.5 hover:bg-[#202652] cursor-pointer">All Categories</div>
                        <div className="px-2 py-1.5 hover:bg-[#D4A017] hover:text-black font-bold cursor-pointer">AI & Machine Learning</div>
                        <div className="px-2 py-1.5 hover:bg-[#202652] cursor-pointer">Fullstack Development</div>
                      </div>
                    )}
                  </div>
                )}

                {/* Slide 6: Drag card ghost preview overlay */}
                {currentIdx === 6 && dragCardPos && (
                  <div 
                    style={{ 
                      left: "56.4%", 
                      top: `calc(42.5% + ${dragCardPos.y}px)`,
                      transform: "rotate(-1.5deg)" 
                    }}
                    className="absolute w-[22%] h-[4.8%] bg-[#1E254A]/80 border border-[#D4A017]/50 rounded-lg pointer-events-none shadow-[0_20px_35px_rgba(0,0,0,0.5)] z-20 opacity-80 backdrop-blur-sm"
                  />
                )}

                {/* Simulated Toast Notification overlay */}
                {showToast && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#0C2E1F] border border-emerald-500/30 text-emerald-300 text-[10px] font-semibold py-1.5 px-4 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.45)] z-40 backdrop-blur-md flex items-center gap-2 animate-bounce">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    {showToast}
                  </div>
                )}

                {/* Keyboard Visual Deck HUD overlay */}
                {isPlaying && keysPressed.length > 0 && (
                  <div className="absolute bottom-4 right-4 bg-zinc-950/85 border border-white/15 px-2.5 py-1.5 rounded-lg shadow-xl z-40 backdrop-blur-md flex items-center gap-1.5 select-none animate-pulse">
                    <span className="text-[7.5px] font-bold text-zinc-500 uppercase tracking-widest mr-1">Input:</span>
                    {keysPressed.map((key, i) => (
                      <kbd key={i} className="bg-[#1C2036] border border-white/10 px-1.5 py-0.5 rounded text-white text-[8px] font-bold font-mono shadow-sm">
                        {key}
                      </kbd>
                    ))}
                  </div>
                )}

                {/* SIMULATED MAC-STYLE CURSOR */}
                {isPlaying && (
                  <div
                    style={{
                      left: cursorX,
                      top: cursorY,
                      transition: "left 1.2s cubic-bezier(0.25, 1, 0.5, 1), top 1.2s cubic-bezier(0.25, 1, 0.5, 1)"
                    }}
                    className="absolute pointer-events-none z-50 flex flex-col items-start"
                  >
                    {/* Standard High-Fidelity Custom Cursor SVG */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        transform: cursorState === "clicking" ? "scale(0.85)" : cursorState === "dragging" ? "scale(0.95) rotate(-10deg)" : "scale(1)",
                        transition: "transform 0.15s ease"
                      }}
                      className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]"
                    >
                      <path
                        d="M3.5 3V18.5L7.8 14.2L12.5 22L14.5 20.8L9.8 13.2H15.5L3.5 3Z"
                        fill="white"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {/* Cursor Action Text Status Bubble */}
                    {actionText && (
                      <div className="mt-4 ml-3 bg-zinc-950/90 border border-white/15 px-2 py-1 rounded-md shadow-lg backdrop-blur-md whitespace-nowrap select-none flex items-center gap-1.5">
                        <span className="text-[8px] font-semibold text-white tracking-wide">
                          {actionText}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* SIMULATED CLICK RIPPLE EFFECT */}
                {isPlaying && rippleActive && (
                  <div
                    style={{
                      left: `${ripplePos.x}%`,
                      top: `${ripplePos.y}%`
                    }}
                    className="absolute pointer-events-none w-10 h-10 -ml-5 -mt-5 z-40"
                  >
                    <div className="absolute inset-0 border-2 border-[#D4A017] rounded-full animate-ping opacity-75" />
                    <div className="absolute inset-2 border border-[#D4A017] rounded-full animate-pulse opacity-45" />
                  </div>
                )}

                {/* ========================================================================= */}

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
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentIdx(idx);
                }}
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
