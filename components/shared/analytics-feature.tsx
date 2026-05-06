"use client";

import { motion } from "framer-motion";
import { CheckCircle2, BarChart3, TrendingUp, Zap } from "lucide-react";

function AnalyticsMockup() {
  return (
    <div className="w-full h-full bg-[#0D0D10] rounded-2xl border border-white/[0.07] overflow-hidden font-mono text-xs shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#111114]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-[#52525B] text-[11px]">Real-time Performance</span>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-4">
            <p className="text-[#52525B] text-[9px] uppercase tracking-wider mb-1">Completion Rate</p>
            <p className="text-white text-2xl font-bold tracking-tighter">94.2%</p>
            <div className="flex items-center gap-1.5 mt-2 text-emerald-400 text-[10px] font-bold">
              <TrendingUp className="w-3 h-3" /> +12.4%
            </div>
          </div>
          <div className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-4">
            <p className="text-[#52525B] text-[9px] uppercase tracking-wider mb-1">Avg Score</p>
            <p className="text-white text-2xl font-bold tracking-tighter">8.2/10</p>
            <div className="flex items-center gap-1.5 mt-2 text-emerald-400 text-[10px] font-bold">
              <TrendingUp className="w-3 h-3" /> +0.8
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-[#52525B] text-[9px] uppercase tracking-widest font-bold">Engagement by Week</p>
          <div className="flex items-end gap-2 h-24">
            {[40, 65, 80, 55, 90, 85, 75, 95].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div 
                  className="w-full rounded-t-lg transition-all duration-500" 
                  style={{ 
                    height: `${h}%`, 
                    background: i === 7 ? "#F5B942" : "rgba(245,185,66,0.15)",
                    boxShadow: i === 7 ? "0 0 20px rgba(245,185,66,0.3)" : "none"
                  }} 
                />
                <span className="text-[#3F3F46] text-[8px]">W{i+1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AnalyticsFeature() {
  return (
    <section className="py-32 bg-[#0D0D10] relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left: Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute -inset-6 bg-[#F5B942] opacity-[0.08] blur-[80px] rounded-full" />
          <div className="relative aspect-[4/3]">
            <AnalyticsMockup />
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2"
        >
          <div className="inline-flex items-center gap-3 text-[#F5B942] text-[13px] font-bold tracking-[0.3em] uppercase mb-8">
            <BarChart3 className="w-4 h-4" />
            Operational Intelligence
          </div>
          <h2 className="text-[40px] md:text-[56px] font-bold text-white leading-[1.05] tracking-tight mb-8">
            Insights that drive <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B942] via-white to-[#D4A017]">performance</span>
          </h2>
          <p className="text-[19px] text-[#A1A1AA] leading-relaxed mb-10 font-light">
            Stop guessing how your programmes are performing. OYEN GRID surfaces the metrics that matter, from cohort engagement to mastery levels.
          </p>
          <ul className="space-y-4 mb-10">
            {[
              "Real-time participant analytics",
              "Cohort performance comparisons",
              "Automated achievement tracking",
              "Custom operational reports"
            ].map((b, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#F5B942]" />
                <span className="text-[#D4D4D8] text-[16px]">{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
