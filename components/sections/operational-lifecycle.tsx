"use client";

import { useState, useEffect, useCallback } from "react";
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

  // Auto-rotation logic
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % stages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Handle manual interaction
  const handleStageClick = useCallback((idx: number) => {
    setActiveIdx(idx);
    setIsAutoPlaying(false);
    
    // Resume auto-play after 12 seconds of inactivity
    const timeout = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 12000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="py-32 bg-[#050816] relative overflow-hidden border-b border-white/5">
      
      {/* 1. CINEMATIC BACKGROUND ATMOSPHERE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,185,66,0.03)_0%,transparent_100%)]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "48px 48px" }} />
      </div>

      <div className="container-custom max-w-[1240px] px-6 mx-auto relative z-10">
        
        {/* HEADER: DISCIPLINED NARRATIVE */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
               <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_#f5b82e]" />
               <span className="text-brand-gold/80 tracking-[0.4em] uppercase text-[10px] font-black">
                 Operational Lifecycle • Programme OS
               </span>
            </div>
            <h2 className="text-[32px] md:text-[46px] font-bold text-white mb-6 leading-[1.05] tracking-tighter">
              The lifecycle of <br />
              <span className="text-brand-gold italic font-serif">structured programme delivery.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT COLUMN: PHASE NAVIGATION (40%) */}
          <div className="lg:col-span-5 space-y-3">
             {stages.map((stage, i) => (
               <motion.div
                 key={stage.id}
                 onClick={() => handleStageClick(i)}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.05 }}
                 className={cn(
                   "group cursor-pointer p-6 rounded-2xl transition-all duration-700 relative overflow-hidden",
                   activeIdx === i 
                     ? "bg-white/[0.03] border border-white/10 shadow-2xl" 
                     : "bg-transparent border border-transparent hover:bg-white/[0.01] hover:border-white/5"
                 )}
               >
                  {/* Progress Indicator */}
                  {activeIdx === i && (
                    <motion.div 
                       layoutId="phaseActive"
                       className="absolute inset-0 bg-gradient-to-r from-brand-gold/[0.05] to-transparent -z-10" 
                    />
                  )}

                  <div className="flex items-center gap-6 relative z-10">
                     <div className={cn(
                       "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-700 border",
                       activeIdx === i 
                         ? "bg-brand-gold/20 border-brand-gold/40 text-brand-gold shadow-[0_0_20px_rgba(245,185,66,0.2)]" 
                         : "bg-white/5 border-white/10 text-white/20 group-hover:text-white/40 group-hover:border-white/20"
                     )}>
                        <stage.icon className="w-5 h-5" />
                     </div>
                     <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                           <span className={cn(
                             "text-[9px] font-black uppercase tracking-[0.2em] transition-colors duration-700",
                             activeIdx === i ? "text-brand-gold" : "text-white/20"
                           )}>
                             {stage.label}
                           </span>
                           {activeIdx === i && (
                             <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-brand-gold/10 border border-brand-gold/20">
                                <div className="w-1 h-1 rounded-full bg-brand-gold animate-pulse" />
                                <span className="text-[7px] font-black text-brand-gold uppercase tracking-widest">Active Phase</span>
                             </div>
                           )}
                        </div>
                        <h3 className={cn(
                          "text-[17px] font-bold transition-colors duration-700 tracking-tight",
                          activeIdx === i ? "text-white" : "text-white/30 group-hover:text-white/50"
                        )}>
                          {stage.title}
                        </h3>
                     </div>
                  </div>

                  {/* Expanded Content for Active Stage */}
                  <AnimatePresence>
                     {activeIdx === i && (
                       <motion.div
                         initial={{ height: 0, opacity: 0 }}
                         animate={{ height: "auto", opacity: 1 }}
                         exit={{ height: 0, opacity: 0 }}
                         className="overflow-hidden"
                       >
                          <div className="pt-6 pl-[72px] space-y-4">
                             <p className="text-[13px] text-white/40 leading-relaxed font-medium">
                               {stage.description}
                             </p>
                             <div className="flex flex-wrap gap-2">
                                {stage.capabilities.map((cap, ci) => (
                                  <div key={ci} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[9px] font-black text-white/40 uppercase tracking-widest">
                                     {cap}
                                  </div>
                                ))}
                             </div>
                          </div>
                       </motion.div>
                     )}
                  </AnimatePresence>
               </motion.div>
             ))}
          </div>

          {/* RIGHT COLUMN: OPERATIONAL VIEWPORT (60%) */}
          <div className="lg:col-span-7 sticky top-32">
             <motion.div
               key={activeIdx}
               initial={{ opacity: 0, scale: 0.98, x: 20 }}
               animate={{ opacity: 1, scale: 1, x: 0 }}
               transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
               className="relative w-full aspect-[4/3] rounded-[40px] bg-[#0b1220]/40 backdrop-blur-3xl border border-white/10 overflow-hidden shadow-[0_100px_200px_rgba(0,0,0,0.8)]"
             >
                {/* Viewport Header */}
                <div className="px-8 py-5 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                         <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                      </div>
                      <div>
                         <h4 className="font-bold text-white text-[14px] tracking-tight uppercase tracking-[0.1em]">Operational Preview</h4>
                         <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">PHASE_SYNC :: {stages[activeIdx].id.toUpperCase()}</span>
                      </div>
                   </div>
                   <div className="flex items-center gap-2">
                      {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/5" />)}
                   </div>
                </div>

                {/* DYNAMIC VIEWPORT CONTENT */}
                <div className="absolute inset-0 pt-[74px] p-12 flex flex-col justify-center items-center">
                   
                   {/* Background Logic: Blueprint Grid for Setup, Telemetry for Delivery */}
                   <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: activeIdx === 0 ? "20px 20px" : "60px 60px" }} />
                   
                   {/* CENTER FOCAL VISUAL */}
                   <div className="relative w-full h-full flex items-center justify-center">
                      
                      {/* Scenario 1: Setup / Coordination (Architecture Node) */}
                      {(activeIdx <= 2) && (
                         <div className="relative w-72 h-72">
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border border-brand-gold/10 border-dashed rounded-full" />
                            <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-8 border border-brand-gold/5 border-dashed rounded-full" />
                            <div className="absolute inset-0 flex items-center justify-center">
                               <div className="w-32 h-32 rounded-3xl bg-brand-gold/5 backdrop-blur-3xl border border-brand-gold/20 flex items-center justify-center shadow-3xl">
                                {(() => {
                                  const Icon = stages[activeIdx].icon;
                                  return <Icon className="w-12 h-12 text-brand-gold/60" />;
                                })()}
                               </div>
                            </div>
                            {/* Satellite nodes */}
                            {[0, 90, 180, 270].map((deg, i) => (
                              <motion.div 
                                 key={i}
                                 animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                                 transition={{ duration: 4, delay: i * 0.5, repeat: Infinity }}
                                 className="absolute w-4 h-4 rounded-full bg-brand-gold/20 border border-brand-gold/40"
                                 style={{ 
                                   top: "50%", left: "50%", 
                                   transform: `rotate(${deg}deg) translate(140px) rotate(-${deg}deg)` 
                                 }}
                              />
                            ))}
                         </div>
                      )}

                      {/* Scenario 2: Live Delivery / Communication (Telemetry HUD) */}
                      {(activeIdx >= 3 && activeIdx <= 5) && (
                         <div className="w-full h-full grid grid-cols-12 gap-6 items-center">
                            <div className="col-span-7 space-y-6">
                               <div className="p-6 rounded-[32px] bg-[#080B14] border border-white/10 shadow-3xl relative overflow-hidden">
                                  <div className="flex items-center justify-between mb-8">
                                     <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">Live Coordination Sync</span>
                                     <div className="flex gap-1">
                                        {[1, 2, 3].map(i => <div key={i} className="w-1 h-3 bg-brand-gold/30 rounded-full" />)}
                                     </div>
                                  </div>
                                  <div className="h-24 flex items-end gap-1">
                                      {Array.from({ length: 20 }).map((_, i) => (
                                        <motion.div 
                                           key={i}
                                           animate={{ height: [`${20 + (i % 5) * 15}%`, `${80 - (i % 5) * 10}%`] }}
                                           transition={{ duration: 0.5 + (i % 3) * 0.2, repeat: Infinity, repeatType: "reverse" }}
                                           className="flex-1 bg-brand-gold/20 rounded-full"
                                        />
                                      ))}
                                  </div>
                               </div>
                               <div className="grid grid-cols-2 gap-4">
                                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                                     <div className="text-[8px] font-black text-white/20 uppercase tracking-widest mb-2">Throughput</div>
                                     <div className="text-[18px] font-bold text-white tracking-tighter">94.2 GB/s</div>
                                  </div>
                                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                                     <div className="text-[8px] font-black text-white/20 uppercase tracking-widest mb-2">Engagement</div>
                                     <div className="text-[18px] font-bold text-emerald-500 tracking-tighter">99.8%</div>
                                  </div>
                               </div>
                            </div>
                            <div className="col-span-5 flex flex-col gap-4">
                               {[1, 2, 3].map(i => (
                                 <div key={i} className="p-4 rounded-2xl bg-[#080B14]/80 border border-white/10 backdrop-blur-3xl flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10" />
                                    <div className="flex-1">
                                       <div className="w-16 h-1.5 bg-white/10 rounded-full mb-1.5" />
                                       <div className="w-24 h-1 bg-white/5 rounded-full" />
                                    </div>
                                 </div>
                               ))}
                            </div>
                         </div>
                      )}

                      {/* Scenario 3: Tracking / Intelligence / Reporting (Data Hub) */}
                      {(activeIdx >= 6) && (
                         <div className="w-full grid grid-cols-2 gap-8">
                            <div className="p-8 rounded-[40px] bg-white/[0.02] border border-white/10 flex flex-col items-center justify-center text-center space-y-6">
                               <div className="relative w-32 h-32 flex items-center justify-center">
                                  <svg className="w-full h-full -rotate-90">
                                     <circle cx="64" cy="64" r="60" fill="none" stroke="rgba(245,184,46,0.1)" strokeWidth="8" />
                                     <motion.circle cx="64" cy="64" r="60" fill="none" stroke="#f5b82e" strokeWidth="8" strokeDasharray="377" initial={{ strokeDashoffset: 377 }} animate={{ strokeDashoffset: 100 }} transition={{ duration: 2 }} />
                                  </svg>
                                  <div className="absolute text-[24px] font-bold text-white">94%</div>
                               </div>
                               <div>
                                  <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">Institutional Score</div>
                                  <div className="text-[14px] font-bold text-emerald-500 uppercase tracking-widest mt-1">NOMINAL</div>
                               </div>
                            </div>
                            <div className="space-y-4">
                               {[0.8, 0.6, 0.9].map((o, i) => (
                                 <div key={i} className="p-5 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between">
                                    <div className="w-24 h-2 bg-white/5 rounded-full overflow-hidden">
                                       <motion.div initial={{ width: 0 }} animate={{ width: `${o * 100}%` }} transition={{ duration: 1.5, delay: i * 0.2 }} className="h-full bg-brand-gold/40" />
                                    </div>
                                    <span className="text-[11px] font-bold text-white/60">0{i+1}_METRIC</span>
                                 </div>
                               ))}
                            </div>
                         </div>
                      )}
                   </div>

                </div>

                {/* Viewport Footer Strip */}
                <div className="absolute bottom-0 inset-x-0 px-8 py-4 border-t border-white/5 bg-black/40 flex items-center justify-between">
                   <div className="flex items-center gap-6">
                      <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">Regional Sync</span>
                      <div className="flex gap-1">
                         {Array.from({ length: 12 }).map((_, i) => (
                           <div key={i} className={cn("w-2 h-2 rounded-[1px]", i < 8 ? "bg-brand-gold/60" : "bg-white/5")} />
                         ))}
                      </div>
                   </div>
                   <div className="text-[9px] font-black text-white/40 uppercase tracking-widest flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/40" />
                      Root Access Granted
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}



