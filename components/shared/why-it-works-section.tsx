"use client";

import { motion } from "framer-motion";
import { AlertCircle, Zap, TrendingUp, ArrowRight, Layers } from "lucide-react";
import Link from "next/link";

const COLUMNS = [
  {
    title: "The Problem",
    icon: AlertCircle,
    items: [
      { label: "Fragmented Data", desc: "Siloed spreadsheets lead to operational blindness and lost metrics." },
      { label: "Manual Chaos", desc: "Wasted hours on administrative bottlenecks and scaling friction." }
    ],
    accent: "border-[#ef4444]/20",
    iconColor: "text-[#ef4444]",
    bgGlow: "bg-[#ef4444]/5"
  },
  {
    title: "The Oyen Way",
    icon: Zap,
    items: [
      { label: "Unified System", desc: "One high-fidelity source of truth for your entire programme stack." },
      { label: "Automated Flow", desc: "Intelligent triggers that manage delivery and tracking autonomously." }
    ],
    accent: "border-[#F5B942]/20",
    iconColor: "text-[#F5B942]",
    bgGlow: "bg-[#F5B942]/5"
  },
  {
    title: "The Outcome",
    icon: TrendingUp,
    items: [
      { label: "Absolute Speed", desc: "Launch and scale complex programmes in half the time." },
      { label: "Total Clarity", desc: "Real-time visibility for stakeholders, teams, and participants." }
    ],
    accent: "border-[#22c55e]/20",
    iconColor: "text-[#22c55e]",
    bgGlow: "bg-[#22c55e]/5"
  }
];

export function WhyItWorksSection() {
  return (
    <section className="py-32 bg-[#0B0B0C] relative overflow-hidden border-t border-white/[0.06]">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#F5B942] opacity-[0.03] blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left mb-24 max-w-3xl"
        >
          <div className="inline-flex items-center gap-3 text-[#F5B942] text-[13px] font-bold tracking-[0.2em] uppercase mb-6">
            <Layers className="w-4 h-4" />
            Our Methodology
          </div>
          <h2 className="text-[42px] md:text-[56px] font-bold text-white tracking-tight leading-[1.1]">
            Built for operational clarity <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B942] to-white">at global scale.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative border border-white/[0.08] rounded-[40px] overflow-hidden bg-white/[0.01] backdrop-blur-xl">
          {/* Vertical Dividers for Desktop */}
          <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-[1px] bg-white/[0.08]" />
          <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-[1px] bg-white/[0.08]" />

          {COLUMNS.map((col, idx) => {
            const Icon = col.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className="flex flex-col p-12 md:p-16 lg:p-20 group hover:bg-white/[0.02] transition-colors duration-500"
              >
                <div className={`w-14 h-14 ${col.bgGlow} border ${col.accent} rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110 shadow-lg`}>
                  <Icon className={`w-7 h-7 ${col.iconColor}`} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-[26px] font-bold text-white mb-10 tracking-tight group-hover:text-[#F5B942] transition-colors">
                  {col.title}
                </h3>
                
                <div className="space-y-10">
                  {col.items.map((item, i) => (
                    <div key={i} className="flex flex-col gap-3">
                      <div className="text-white font-bold text-[17px] tracking-tight">{item.label}</div>
                      <div className="text-[#A1A1AA] text-[15px] leading-relaxed font-light group-hover:text-white/80 transition-colors">{item.desc}</div>
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 flex justify-center"
        >
          <Link 
            href="/solutions" 
            className="inline-flex items-center justify-center px-10 py-4.5 rounded-2xl border border-white/10 bg-white/5 text-white font-bold text-[15px] hover:bg-white/10 hover:border-white/20 transition-all duration-300 active:scale-95 group"
          >
            See how it works <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
