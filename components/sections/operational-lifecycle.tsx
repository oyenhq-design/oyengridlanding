"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Settings, Users, Workflow, Activity, MessageSquare, BarChart3, Cpu, FileText, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const stages = [
  {
    id: "setup",
    title: "Programme Setup",
    label: "PHASE 01",
    icon: Settings,
    image: "/lifecycle/setup.png",
    description: "Structure programmes with coordinated scheduling, participant assignment and operational workflows.",
    capabilities: [
      "Structured delivery architecture",
      "Cohort-based coordination",
      "Centralised operational visibility"
    ]
  },
  {
    id: "onboarding",
    title: "Participant Onboarding",
    label: "PHASE 02",
    icon: Users,
    image: "/lifecycle/onboarding.png",
    description: "Automate participant intake and platform orientation with institutional scale and precision.",
    capabilities: [
      "Automated enrollment protocols",
      "Digital orientation flows",
      "Profile & credential sync"
    ]
  },
  {
    id: "coordination",
    title: "Session Coordination",
    label: "PHASE 03",
    icon: Workflow,
    image: "/lifecycle/coordination.png",
    description: "Manage trainer schedules and session resources through a unified coordination layer.",
    capabilities: [
      "Dynamic resource allocation",
      "Trainer availability sync",
      "Structural session planning"
    ]
  },
  {
    id: "delivery",
    title: "Live Delivery",
    label: "PHASE 04",
    icon: Activity,
    image: "/lifecycle/delivery.png",
    description: "Orchestrate live sessions with persistent tracking and real-time operational support.",
    capabilities: [
      "Live session telemetry",
      "Interactive delivery tools",
      "Engagement monitoring"
    ]
  },
  {
    id: "communication",
    title: "Communication & Engagement",
    label: "PHASE 05",
    icon: MessageSquare,
    image: "/lifecycle/engagement.png",
    description: "Foster participant collaboration through secure, persistent institutional communication channels.",
    capabilities: [
      "Secure cohort messaging",
      "Trainer-led discussions",
      "Real-time feedback loops"
    ]
  },
  {
    id: "tracking",
    title: "Progress Tracking",
    label: "PHASE 06",
    icon: BarChart3,
    image: "/lifecycle/tracking.png",
    description: "Monitor participant milestones and programme throughput with high-fidelity telemetry.",
    capabilities: [
      "Milestone verification",
      "Automated progress logs",
      "Performance analytics"
    ]
  },
  {
    id: "intelligence",
    title: "Operational Intelligence",
    label: "PHASE 07",
    icon: Cpu,
    image: "/lifecycle/intelligence.png",
    description: "Leverage AI-driven insights to optimize programme delivery and participant outcomes.",
    capabilities: [
      "Autonomous trend analysis",
      "Predictive risk assessment",
      "Operational health scoring"
    ]
  },
  {
    id: "reporting",
    title: "Institutional Reporting",
    label: "PHASE 08",
    icon: FileText,
    image: "/lifecycle/reporting.png",
    description: "Generate high-stakes institutional reports with verified data and operational transparency.",
    capabilities: [
      "Board-ready visualizations",
      "Verified outcome data",
      "Automated compliance logs"
    ]
  }
];

export function OperationalLifecycle() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-rotation logic
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % stages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Cleanup resume timer on unmount
  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  // Handle manual interaction — clears any pending resume before setting a fresh one
  const handleStageClick = useCallback((idx: number) => {
    setActiveIdx(idx);
    setIsAutoPlaying(false);
    
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 12000);
  }, []);

  return (
    <section className="section-gap bg-[#050816] theme-navy-section relative overflow-hidden">
      <div className="container-custom">
        <div className="mb-16">
          <span className="eyebrow">OPERATIONAL LIFECYCLE</span>
          <h2 className="max-w-[620px] mt-4 mb-4">
            The lifecycle of <span className="text-brand-gold">structured programme delivery.</span>
          </h2>
          <p className="text-editorial max-w-[580px]">
            OYEN GRID brings programme coordination, participant management, communication and operational intelligence into one continuous institutional workflow.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          {/* LEFT: 3D ORBITAL CAROUSEL */}
          <div 
            className="relative h-[540px] flex items-center justify-center"
            style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
             <div className="relative w-full max-w-[380px] aspect-[4/5]" style={{ transformStyle: "preserve-3d" }}>
                {stages.map((stage, i) => {
                  // Calculate shortest distance in circular array
                  let diff = i - activeIdx;
                  if (diff > stages.length / 2) diff -= stages.length;
                  if (diff < -stages.length / 2) diff += stages.length;

                  const absDiff = Math.abs(diff);
                  const isActive = absDiff === 0;
                  
                  // Cinematic 3D Transform Logic
                  const xOffset = diff * 140;
                  const zOffset = absDiff * -180;
                  const rotateY = diff * -35;
                  const scale = 1 - absDiff * 0.12;
                  const opacity = Math.max(0, 1 - absDiff * 0.35);
                  const blur = absDiff * 1.5;
                  const brightness = Math.max(0, 1 - absDiff * 0.4);
                  const zIndex = stages.length - absDiff;

                  return (
                    <motion.div
                      key={stage.id}
                      onClick={() => handleStageClick(i)}
                      initial={false}
                      animate={{
                        x: xOffset,
                        z: zOffset,
                        rotateY: rotateY,
                        scale: scale,
                        opacity: opacity,
                        zIndex: zIndex,
                      }}
                      transition={{ 
                        duration: 1.2, 
                        ease: [0.16, 1, 0.3, 1],
                        opacity: { duration: 0.8 }
                      }}
                      className={cn(
                        "absolute inset-0 cursor-pointer group select-none",
                        isActive ? "pointer-events-none" : "pointer-events-auto"
                      )}
                      style={{ 
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden"
                      }}
                    >
                       <motion.div 
                         animate={{ 
                           filter: `blur(${blur}px) brightness(${brightness})`,
                           boxShadow: isActive 
                             ? "0 40px 100px rgba(245,185,66,0.18), 0 0 40px rgba(245,185,66,0.1)" 
                             : "0 20px 50px rgba(0,0,0,0.5)"
                         }}
                         className={cn(
                           "relative w-full h-full rounded-[28px] overflow-hidden border transition-colors duration-1000",
                           isActive ? "border-brand-gold/50" : "border-white/10 grayscale-[0.4]"
                         )}
                       >
                          <Image 
                            src={stage.image} 
                            alt={stage.title}
                            fill
                            className="object-cover"
                            priority={isActive}
                          />
                          
                          {/* Ambient Lighting Overlays */}
                          <div className={cn(
                            "absolute inset-0 transition-opacity duration-1000",
                            isActive ? "bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-90" : "bg-[#050816]/70"
                          )} />

                          <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                          
                          <div className="absolute bottom-8 left-8 right-8">
                             <div className="flex items-center gap-3 mb-3">
                                <div className={cn(
                                  "w-8 h-8 rounded-lg backdrop-blur-xl border flex items-center justify-center transition-all duration-1000",
                                  isActive ? "bg-brand-gold/20 border-brand-gold/40 shadow-[0_0_20px_rgba(245,185,66,0.2)]" : "bg-white/5 border-white/10"
                                )}>
                                   <stage.icon className={cn("w-3.5 h-3.5 transition-colors duration-1000", isActive ? "text-brand-gold" : "text-white/30")} />
                                </div>
                                <span className={cn("text-[9px] font-black tracking-[0.2em] uppercase transition-colors duration-1000", isActive ? "text-white/60" : "text-white/20")}>{stage.label}</span>
                             </div>
                             <h3 className={cn("text-[22px] font-bold transition-all duration-1000 leading-tight tracking-tight", isActive ? "text-white translate-y-0" : "text-white/20 translate-y-2")}>{stage.title}</h3>
                          </div>
                       </motion.div>
                    </motion.div>
                  );
                })}
             </div>
          </div>

          {/* RIGHT: CONTENT PANEL (Spatially Orchestrated) */}
          <div className="space-y-12">
             <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 30, filter: "blur(15px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -30, filter: "blur(15px)" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-12"
                >
                   <div>
                      <h3 className="text-[34px] font-bold text-white mb-6 leading-[1.1] tracking-tighter">{stages[activeIdx].title}</h3>
                      <p className="text-[16px] leading-relaxed text-white/50 mb-10 max-w-[380px]">
                        {stages[activeIdx].description}
                      </p>
                      
                      <div className="space-y-5">
                         {stages[activeIdx].capabilities.map((cap, i) => (
                           <div key={i} className="flex items-center gap-4 group">
                              <div className="w-5 h-5 rounded-full bg-brand-gold/5 border border-brand-gold/20 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/20 group-hover:border-brand-gold/40 transition-all">
                                 <Check className="w-3 h-3 text-brand-gold" />
                              </div>
                              <span className="text-[15px] font-bold text-white/30 group-hover:text-white transition-colors duration-500">{cap}</span>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="flex items-center gap-4 pt-12 border-t border-white/5">
                      <div className="flex gap-2">
                         {stages.map((_, i) => (
                           <button 
                             key={i}
                             onClick={() => handleStageClick(i)}
                             className={cn(
                               "h-1.5 rounded-full transition-all duration-700",
                               activeIdx === i ? "w-10 bg-brand-gold shadow-[0_0_15px_rgba(245,185,66,0.4)]" : "w-2 bg-white/10 hover:bg-white/30"
                             )}
                           />
                         ))}
                      </div>
                   </div>
                </motion.div>
             </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}


