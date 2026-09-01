"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, Users, Sparkles, Activity, Shield, TrendingUp } from "lucide-react";

const valueProps = [
  {
    icon: Zap,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-400/10",
    iconBorder: "border-amber-400/20",
    title: "Reduce Administrative Work",
    desc: "Automate repetitive tasks so your teams spend less time coordinating and more time delivering results.",
  },
  {
    icon: Users,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-400/10",
    iconBorder: "border-blue-400/20",
    title: "Improve Team Collaboration",
    desc: "Keep conversations, meetings, files, and workflows connected inside one workspace.",
  },
  {
    icon: Sparkles,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-400/10",
    iconBorder: "border-purple-400/20",
    title: "AI That Works for You",
    desc: "Generate summaries, automate actions, surface insights, and assist every team.",
  },
  {
    icon: Activity,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-400/10",
    iconBorder: "border-emerald-400/20",
    title: "Gain Real-Time Visibility",
    desc: "Monitor progress, engagement, performance, and organizational health from live dashboards.",
  },
  {
    icon: Shield,
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-400/10",
    iconBorder: "border-indigo-400/20",
    title: "Enterprise-Ready Security",
    desc: "Enterprise-grade permissions, audit logs, encrypted data, and infrastructure built for scale.",
  },
  {
    icon: TrendingUp,
    iconColor: "text-rose-400",
    iconBg: "bg-rose-400/10",
    iconBorder: "border-rose-400/20",
    title: "Scale Without Complexity",
    desc: "Support one team or thousands of employees without changing how your organization works.",
  },
];

export function WhyOyen() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-b border-white/5 bg-[#0B1220]">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/why-bg.jpg"
          alt="Why Oyen Grid Background"
          fill
          className="object-cover opacity-90"
          quality={100}
        />
        {/* Subtle dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0B5CFF]" />
            <span className="text-[10px] font-black tracking-[0.3em] text-[#0B5CFF] uppercase">
              WHY OYEN GRID
            </span>
          </div>
          <h2 className="text-3xl md:text-[44px] font-black text-white tracking-tight leading-[1.1] mb-6 max-w-[800px]">
            Everything your teams need to manage training, people, and operations in one workspace.
          </h2>
          <p className="text-sm md:text-base text-zinc-300 max-w-[620px] font-medium leading-relaxed">
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
                className="p-6 md:p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col justify-between hover:border-[#0B5CFF]/40 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 min-h-[200px]"
              >
                <div>
                  {/* Icon Box */}
                  <div className={`w-10 h-10 rounded-xl border ${prop.iconBorder} ${prop.iconBg} flex items-center justify-center mb-5 shrink-0`}>
                    <PropIcon className={`w-5 h-5 ${prop.iconColor}`} />
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-[15px] font-extrabold text-white mb-2.5">
                    {prop.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-[13px] text-zinc-400 leading-relaxed font-normal">
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
