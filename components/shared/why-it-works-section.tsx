"use client";

import { motion } from "framer-motion";
import { AlertCircle, Zap, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const COLUMNS = [
  {
    title: "The Problem",
    icon: AlertCircle,
    items: [
      { label: "Fragmented Data", desc: "Siloed spreadsheets lead to operational blindness." },
      { label: "Manual Chaos", desc: "Wasted hours on administrative bottlenecks." }
    ],
    accent: "border-[#ef4444]/20",
    iconColor: "text-[#ef4444]"
  },
  {
    title: "What We Do",
    icon: Zap,
    items: [
      { label: "Unified System", desc: "One high-fidelity source of truth for everything." },
      { label: "Automated Flow", desc: "Intelligent triggers that manage the heavy lifting." }
    ],
    accent: "border-secondary/40",
    iconColor: "text-secondary"
  },
  {
    title: "The Outcome",
    icon: TrendingUp,
    items: [
      { label: "Absolute Speed", desc: "Launch and scale programmes in half the time." },
      { label: "Total Clarity", desc: "Real-time visibility for stakeholders and teams." }
    ],
    accent: "border-[#22c55e]/20",
    iconColor: "text-[#22c55e]"
  }
];

export function WhyItWorksSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden border-t border-neutral-800">
      <div className="relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6 justify-center">
            <div className="w-8 h-[1px] bg-primary"></div>
            <span className="text-primary uppercase tracking-widest text-[12px] font-semibold">Our Methodology</span>
            <div className="w-8 h-[1px] bg-primary"></div>
          </div>
          <h2 className="text-[36px] md:text-[52px] font-bold text-white tracking-tight">
            Built for operational clarity at scale.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          {/* Vertical Dividers for Desktop */}
          <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-[1px] bg-[#27272A]/30" />
          <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-[1px] bg-[#27272A]/30" />

          {COLUMNS.map((col, idx) => {
            const Icon = col.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
                className="flex flex-col p-8 md:p-12 lg:p-16 first:pl-0 last:pr-0"
              >
                <div className={`w-12 h-12 bg-panel border ${col.accent} rounded-xl flex items-center justify-center mb-8 shadow-lg`}>
                  <Icon className={`w-6 h-6 ${col.iconColor}`} />
                </div>
                
                <h3 className="text-[24px] font-bold text-white mb-8 tracking-tight">
                  {col.title}
                </h3>
                
                <div className="space-y-8">
                  {col.items.map((item, i) => (
                    <div key={i} className="flex flex-col gap-1.5">
                      <div className="text-white font-semibold text-[15px]">{item.label}</div>
                      <div className="text-[#A1A1AA] text-[14px] leading-relaxed font-light">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          className="mt-16 flex justify-center"
        >
          <Link 
            href="/solutions" 
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-white/10 hover:border-secondary/50 text-white/80 hover:text-secondary text-sm font-medium transition-all duration-300 hover:bg-panel group"
          >
            See how it works <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Horizontal Divider for Mobile */}
        <div className="md:hidden w-full h-[1px] bg-[#27272A]/30 mt-12" />

      </div>
    </section>
  );
}
