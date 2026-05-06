"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, BarChart3, TrendingUp, Zap } from "lucide-react";

const TABS = [
  { id: "programme", label: "Program Management" },
  { id: "analytics", label: "Analytics" },
  { id: "automation", label: "Automation" },
  { id: "collaboration", label: "Collaboration" }
];

export function OperationalSections() {
  const [activeTab, setActiveTab] = useState("programme");

  return (
    <div className="bg-[#0B0B0C]">
      
      {/* 8. “Everything you need to operate with power” (Tabs) */}
      <section className="py-32 bg-[#0D0D10]/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/5" />
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[42px] font-bold text-white tracking-tight mb-12">
              Everything you need to operate with power
            </h2>
            
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-white/5 border border-white/10 rounded-2xl w-max mx-auto backdrop-blur-xl">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl text-[14px] font-bold transition-all duration-300 ${
                    activeTab === tab.id 
                      ? "bg-[#F5C044] text-black shadow-lg" 
                      : "text-[#A1A1AA] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="relative mt-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
              >
                {/* Left Content */}
                <div>
                  <h3 className="text-[32px] md:text-[40px] font-bold text-white tracking-tight leading-tight mb-8">
                    Orchestrate complex <br /> learning at scale
                  </h3>
                  <div className="space-y-6">
                    {[
                      "Centralised cohort management engine",
                      "Granular structural integrity checks",
                      "Enterprise-grade role and permission system"
                    ].map((bullet) => (
                      <div key={bullet} className="flex items-center gap-4">
                        <CheckCircle2 className="w-5 h-5 text-[#F5C044]" />
                        <span className="text-[#D4D4D8] text-[17px] font-light">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Mockup */}
                <div className="relative">
                  <div className="absolute -inset-10 bg-[#F5C044] opacity-[0.05] blur-[100px] rounded-full" />
                  <div className="relative aspect-[16/10] bg-[#0D0D10] border border-white/10 rounded-[24px] shadow-2xl overflow-hidden ring-1 ring-white/5">
                    <Image 
                      src="/images/hero-dashboard.png" 
                      alt="Product UI" 
                      fill
                      className="object-cover opacity-90"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 9. ANALYTICS SECTION */}
      <section className="py-32 border-b border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[36px] md:text-[48px] font-bold text-white tracking-tight leading-tight mb-8">
              Operational insights <br />
              <span className="text-[#F5C044]">that drive results</span>
            </h2>
            <p className="text-[19px] text-[#A1A1AA] leading-relaxed mb-10 font-light">
              Stop guessing how your programmes are performing. OYEN GRID surfaces the metrics that matter, from cohort engagement to mastery levels.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <p className="text-[#71717A] text-xs font-bold uppercase tracking-widest mb-2">Engagement</p>
                <p className="text-3xl font-bold text-white tracking-tighter">+84%</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <p className="text-[#71717A] text-xs font-bold uppercase tracking-widest mb-2">Completion</p>
                <p className="text-3xl font-bold text-white tracking-tighter">92.4%</p>
              </div>
            </div>
          </motion.div>

          {/* Right Chart Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-[#F5C044] opacity-[0.05] blur-[100px] rounded-full" />
            <div className="relative p-8 bg-[#0D0D10] border border-white/10 rounded-3xl shadow-2xl overflow-hidden ring-1 ring-white/5">
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-white font-bold text-lg">Cohort Performance</h4>
                <BarChart3 className="w-5 h-5 text-[#F5C044]" />
              </div>
              <div className="flex items-end gap-3 h-48">
                {[40, 70, 45, 90, 65, 80, 55, 95].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className={`w-full rounded-t-lg ${i === 7 ? "bg-[#F5C044]" : "bg-white/10"}`}
                    />
                    <span className="text-[#3F3F46] text-[10px]">W{i+1}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 text-xs font-bold">+12.5% this month</span>
                </div>
                <button className="text-[#F5C044] text-xs font-bold hover:underline">View Full Report</button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
