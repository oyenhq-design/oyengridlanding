"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, Users, Sparkles, Activity, Shield, TrendingUp } from "lucide-react";

const valueProps = [
  {
    icon: Zap,
    iconColor: "text-[#A87812]",
    iconBg: "bg-[rgba(201,154,32,0.10)]",
    title: "Reduce Administrative Work",
    desc: "Automate repetitive tasks so your teams spend less time coordinating and more time delivering results.",
  },
  {
    icon: Users,
    iconColor: "text-[#2563EB]",
    iconBg: "bg-[rgba(37,99,235,0.08)]",
    title: "Improve Team Collaboration",
    desc: "Keep conversations, meetings, files, and workflows connected inside one workspace.",
  },
  {
    icon: Sparkles,
    iconColor: "text-[#7C3AED]",
    iconBg: "bg-[rgba(124,58,237,0.08)]",
    title: "AI That Works for You",
    desc: "Generate summaries, automate actions, surface insights, and assist every team.",
  },
  {
    icon: Activity,
    iconColor: "text-[#0D9488]",
    iconBg: "bg-[rgba(13,148,136,0.08)]",
    title: "Gain Real-Time Visibility",
    desc: "Monitor progress, engagement, performance, and organizational health from live dashboards.",
  },
  {
    icon: Shield,
    iconColor: "text-[#4F46E5]",
    iconBg: "bg-[rgba(79,70,229,0.08)]",
    title: "Enterprise-Ready Security",
    desc: "Enterprise-grade permissions, audit logs, encrypted data, and infrastructure built for scale.",
  },
  {
    icon: TrendingUp,
    iconColor: "text-[#E11D48]",
    iconBg: "bg-[rgba(225,29,72,0.07)]",
    title: "Scale Without Complexity",
    desc: "Support one team or thousands of employees without changing how your organization works.",
  },
];

export function WhyOyen() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-t border-[rgba(8,17,31,0.05)] bg-[#F7F8FA]">
      
      {/* Background Gradients */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 75% 30%, rgba(201,154,32,0.055), transparent 35%),
            radial-gradient(circle at 15% 70%, rgba(30,64,175,0.025), transparent 30%)
          `
        }}
      />

      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C99A20]" />
            <span className="text-[10px] font-black tracking-[0.3em] text-[#A87812] uppercase">
              WHY OYEN GRID
            </span>
          </div>
          <h2 className="text-3xl md:text-[44px] font-black text-[#08111F] tracking-tight leading-[1.1] mb-6 max-w-[800px]">
            Everything your teams need to manage training, people, and operations in one workspace.
          </h2>
          <p className="text-sm md:text-base text-[#667085] max-w-[620px] font-medium leading-relaxed">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 md:p-8 bg-[rgba(255,255,255,0.88)] backdrop-blur-md border border-[#E5E7EB] rounded-2xl flex flex-col justify-between hover:border-[#D6D9DF] hover:-translate-y-[2px] hover:shadow-[0_12px_40px_rgba(8,17,31,0.08)] transition-all duration-300 min-h-[200px] shadow-[0_8px_30px_rgba(8,17,31,0.055)]"
              >
                <div>
                  {/* Icon Box */}
                  <div className={`w-10 h-10 rounded-xl ${prop.iconBg} flex items-center justify-center mb-5 shrink-0`}>
                    <PropIcon className={`w-5 h-5 ${prop.iconColor}`} />
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-[15px] font-extrabold text-[#101828] mb-2.5">
                    {prop.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-[13px] text-[#667085] leading-relaxed font-normal">
                    {prop.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
