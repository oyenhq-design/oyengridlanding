"use client";

import { motion } from "framer-motion";
import { ListChecks, PlayCircle, BarChart2 } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      title: "1. Define the Structure",
      desc: "Set up your curriculum, establish prerequisites, and map out exactly how your programme should unfold over time.",
      icon: ListChecks,
    },
    {
      title: "2. Deliver the Sessions",
      desc: "Run live sessions directly through the system. Attendance is tracked silently and resources are distributed automatically.",
      icon: PlayCircle,
    },
    {
      title: "3. Monitor & Optimize",
      desc: "View real-time analytics on engagement and completion. Intervene exactly when participants need help, not after they drop out.",
      icon: BarChart2,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0b0f14]">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-4 tracking-tight leading-[1.2]">
            How OYEN Grid works
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/70 max-w-2xl mx-auto leading-relaxed">
            A linear, predictable operational flow designed to eliminate administrative overhead and maximize delivery focus.
          </p>
        </div>

        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-10 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-16 right-16 h-px bg-white/10 z-0" />
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-[#11161d] shadow-[0_8px_30px_rgba(0,0,0,0.3)] flex items-center justify-center mb-8 border border-white/5">
                  <Icon className="w-10 h-10 text-white/80" strokeWidth={1.5} />
                </div>
                <h3 className="text-[22px] font-bold text-white mb-4 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[16px] md:text-[18px] text-white/60 leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}