"use client";

import { motion } from "framer-motion";
import { Zap, Users, Sparkles, Activity, Shield, TrendingUp } from "lucide-react";

const valueProps = [
  {
    icon: Zap,
    iconColor: "text-[#FFC72C]",
    iconGlow: "rgba(255, 199, 44, 0.15)",
    title: "Reduce Administrative Work",
    desc: "Automate repetitive tasks so your teams spend less time coordinating and more time delivering results.",
  },
  {
    icon: Users,
    iconColor: "text-[#3B82F6]",
    iconGlow: "rgba(59, 130, 246, 0.15)",
    title: "Improve Team Collaboration",
    desc: "Keep conversations, meetings, files, and workflows connected inside one workspace.",
  },
  {
    icon: Sparkles,
    iconColor: "text-[#8B5CF6]",
    iconGlow: "rgba(139, 92, 246, 0.15)",
    title: "AI That Works for You",
    desc: "Generate summaries, automate actions, surface insights, and assist every team.",
  },
  {
    icon: Activity,
    iconColor: "text-[#10B981]",
    iconGlow: "rgba(16, 185, 129, 0.15)",
    title: "Gain Real-Time Visibility",
    desc: "Monitor progress, engagement, performance, and organizational health from live dashboards.",
  },
  {
    icon: Shield,
    iconColor: "text-[#6366F1]",
    iconGlow: "rgba(99, 102, 241, 0.15)",
    title: "Enterprise-Ready Security",
    desc: "Enterprise-grade permissions, audit logs, encrypted data, and infrastructure built for scale.",
  },
  {
    icon: TrendingUp,
    iconColor: "text-[#F97316]",
    iconGlow: "rgba(249, 115, 22, 0.15)",
    title: "Scale Without Complexity",
    desc: "Support one team or thousands of employees without changing how your organization works.",
  },
];

export function WhyOyen() {
  return (
    <section className="relative py-24 md:py-32 bg-[#FAFAF8] overflow-hidden border-b border-zinc-200/50">
      
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(17,24,39,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,24,39,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      
      {/* Subtle radial glow behind header */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D4A017]/[0.03] rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
            <span className="text-[10px] font-black tracking-[0.3em] text-[#D4A017] uppercase">
              WHY OYEN GRID
            </span>
          </div>
          <h2 className="text-3xl md:text-[44px] font-extrabold text-[#111827] tracking-tight leading-[1.1] mb-6 max-w-[800px]">
            Everything your teams need to manage training, people, and operations in one workspace.
          </h2>
          <p className="text-sm md:text-base text-[#6B7280] max-w-[620px] font-normal leading-relaxed">
            Manage training, collaboration, AI workflows, communication, reporting, and operations from one secure platform.
          </p>
        </div>

        {/* 3x2 Value Proposition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {valueProps.map((prop, idx) => {
            const PropIcon = prop.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="p-7 md:p-8 bg-white border border-[#111827]/[0.06] rounded-[20px] flex flex-col justify-between hover:border-[#D4A017] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(10,13,31,0.06)] transition-all duration-[300ms] ease-out min-h-[220px] group"
              >
                <div>
                  {/* Icon Box inside soft circular blur container */}
                  <div 
                    className="w-11 h-11 rounded-full flex items-center justify-center mb-6 shrink-0 transition-all duration-300 bg-zinc-50 group-hover:scale-105"
                    style={{ 
                      boxShadow: `0 0 15px rgba(17,24,39,0.02)`,
                      // Inline vars updated by hover
                    }}
                  >
                    <PropIcon 
                      className={`w-5 h-5 ${prop.iconColor} transition-transform duration-300`} 
                    />
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-[20px] font-semibold text-[#111827] mb-2.5">
                    {prop.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-[15px] text-[#6B7280] leading-[1.7] font-light">
                    {prop.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Row */}
        <div className="mt-20 pt-10 border-t border-zinc-200/50 flex flex-col items-center gap-6">
          <span className="text-xs md:text-sm font-bold text-[#6B7280] uppercase tracking-wider text-center">
            Trusted by organizations managing thousands of learners worldwide.
          </span>
          {/* Grayscale partner logos */}
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-30 grayscale contrast-200">
            <span className="text-sm font-black tracking-widest text-[#111827]">MICROSOFT</span>
            <span className="text-sm font-black tracking-widest text-[#111827]">GOOGLE</span>
            <span className="text-sm font-black tracking-widest text-[#111827]">MTN</span>
            <span className="text-sm font-black tracking-widest text-[#111827]">SHELL</span>
            <span className="text-sm font-black tracking-widest text-[#111827]">UNICEF</span>
            <span className="text-sm font-black tracking-widest text-[#111827]">DELOITTE</span>
          </div>
        </div>

      </div>
    </section>
  );
}
