"use client";

import { useState } from "react";
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

  return (
    <section className="section-gap bg-[#050816] relative overflow-hidden">
      <div className="container-custom">
        <div className="mb-24">
          <span className="eyebrow">OPERATIONAL LIFECYCLE</span>
          <h2 className="max-w-[720px] mt-4 mb-6">
            The lifecycle of <span className="text-brand-gold">structured programme delivery.</span>
          </h2>
          <p className="text-editorial max-w-[640px]">
            OYEN GRID brings programme coordination, participant management, communication and operational intelligence into one continuous institutional workflow.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-24 items-center">
          {/* LEFT: INTERACTIVE STACK */}
          <div className="relative h-[600px] flex items-center justify-center">
             <div className="relative w-full max-w-[500px] aspect-[4/5]">
                {stages.map((stage, i) => {
                  const isActive = activeIdx === i;
                  
                  // Calculate offsets for stacked look
                  let xOffset = (i - activeIdx) * 15;
                  let yOffset = (i - activeIdx) * -10;
                  let rotate = (i - activeIdx) * 2;
                  let scale = 1 - Math.abs(i - activeIdx) * 0.05;
                  let zIndex = stages.length - Math.abs(i - activeIdx);
                  
                  if (isActive) {
                    xOffset = 0;
                    yOffset = 0;
                    rotate = 0;
                    scale = 1;
                    zIndex = stages.length + 10;
                  }

                  // Hide cards that are too far back
                  const isVisible = Math.abs(i - activeIdx) <= 3;

                  return (
                    <motion.div
                      key={stage.id}
                      onClick={() => setActiveIdx(i)}
                      initial={false}
                      animate={{
                        x: xOffset,
                        y: yOffset,
                        rotate: rotate,
                        scale: scale,
                        zIndex: zIndex,
                        opacity: isVisible ? 1 : 0,
                        pointerEvents: isVisible && !isActive ? "auto" : isActive ? "none" : "none"
                      }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className={cn(
                        "absolute inset-0 cursor-pointer group"
                      )}
                    >
                       <div className={cn(
                         "relative w-full h-full rounded-[32px] overflow-hidden border transition-all duration-500",
                         isActive ? "border-brand-gold/40 shadow-[0_40px_100px_rgba(0,0,0,0.6)]" : "border-white/10 shadow-2xl grayscale-[0.5] opacity-40 hover:opacity-100 hover:grayscale-0"
                       )}>
                          <Image 
                            src={stage.image} 
                            alt={stage.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-80" />
                          
                          <div className="absolute bottom-10 left-10 right-10">
                             <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-brand-gold/10 backdrop-blur-md border border-brand-gold/20 flex items-center justify-center">
                                   <stage.icon className="w-4 h-4 text-brand-gold" />
                                </div>
                                <span className="text-[10px] font-black tracking-widest text-white/40 uppercase">{stage.label}</span>
                             </div>
                             <h3 className="text-[24px] font-bold text-white leading-tight">{stage.title}</h3>
                          </div>
                       </div>
                    </motion.div>
                  );
                })}
             </div>
          </div>

          {/* RIGHT: CONTENT PANEL */}
          <div className="space-y-12">
             <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-10"
                >
                   <div>
                      <h3 className="text-[32px] font-bold text-white mb-6 leading-tight">{stages[activeIdx].title}</h3>
                      <p className="text-[17px] leading-relaxed text-white/60 mb-10">
                        {stages[activeIdx].description}
                      </p>
                      
                      <div className="space-y-4">
                         {stages[activeIdx].capabilities.map((cap, i) => (
                           <div key={i} className="flex items-center gap-4 group">
                              <div className="w-5 h-5 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0">
                                 <Check className="w-3 h-3 text-brand-gold" />
                              </div>
                              <span className="text-[15px] font-bold text-white/40 group-hover:text-white transition-colors">{cap}</span>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="flex items-center gap-4 pt-10 border-t border-white/5">
                      <div className="flex gap-1.5">
                         {stages.map((_, i) => (
                           <button 
                             key={i}
                             onClick={() => setActiveIdx(i)}
                             className={cn(
                               "h-1.5 rounded-full transition-all duration-500",
                               activeIdx === i ? "w-8 bg-brand-gold" : "w-1.5 bg-white/10 hover:bg-white/30"
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
