"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Shield, Zap, BarChart3, Settings2 } from "lucide-react";

const TABS = [
  {
    id: "operations",
    label: "Operations",
    icon: Settings2,
    headline: "Centralized operational control",
    description: "Manage multiple cohorts, align facilitators, and track milestones from a single unified command center.",
    bullets: [
      "Real-time cohort tracking",
      "Resource allocation matrix",
      "Automated scheduling conflicts resolution"
    ],
    visual: (
      <div className="w-full h-full bg-[#0F0F11] border border-[#27272A] rounded-xl flex flex-col p-6 overflow-hidden relative shadow-[0_0_30px_rgba(212,175,55,0.05)]">
        <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] opacity-20" />
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37] opacity-[0.05] blur-3xl rounded-full" />
        <div className="flex gap-4 mb-6 relative z-10">
          <div className="h-2 w-1/3 bg-[#27272A] rounded-full" />
          <div className="h-2 w-1/4 bg-[#D4AF37] rounded-full" />
        </div>
        <div className="flex-1 flex flex-col gap-3 relative z-10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex-1 bg-[#1A1A1D]/80 backdrop-blur-md rounded-lg border border-[#333333] p-4 flex items-center justify-between group hover:border-[#D4AF37]/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#121214] flex items-center justify-center border border-[#27272A]">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                </div>
                <div className="space-y-1.5">
                  <div className="h-2 w-24 bg-[#3f3f46] rounded-full" />
                  <div className="h-1.5 w-16 bg-[#27272A] rounded-full" />
                </div>
              </div>
              <div className="px-3 py-1 bg-[#121214] rounded text-[10px] text-[#A1A1AA] border border-[#27272A]">Active</div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
    headline: "Predictive performance insights",
    description: "Go beyond basic reporting. Identify drop-off risks and measure true programme ROI with granular data.",
    bullets: [
      "Custom metric dashboards",
      "Exportable stakeholder reports",
      "Predictive completion modeling"
    ],
    visual: (
      <div className="w-full h-full bg-[#0F0F11] border border-[#27272A] rounded-xl flex flex-col p-6 overflow-hidden relative shadow-[0_0_30px_rgba(212,175,55,0.05)]">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#D4AF37]/10 to-transparent opacity-30" />
        <div className="flex justify-between items-end h-full relative z-10 gap-3 pb-4">
          {[40, 65, 45, 80, 55, 90, 75].map((height, i) => (
            <div key={i} className="flex-1 flex flex-col justify-end items-center gap-2 group h-full">
              <div 
                className={`w-full rounded-t-sm transition-all duration-700 ${i === 6 ? 'bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.4)]' : 'bg-[#27272A] group-hover:bg-[#3f3f46]'}`}
                style={{ height: `${height}%` }}
              />
            </div>
          ))}
        </div>
        <div className="absolute top-6 right-6 bg-[#1A1A1D]/90 backdrop-blur-md border border-[#D4AF37]/30 rounded-lg p-3 flex items-center gap-3">
          <div className="text-[#A1A1AA] text-xs">Engagement</div>
          <div className="text-white font-medium text-lg">+24%</div>
        </div>
      </div>
    )
  },
  {
    id: "automation",
    label: "Automation",
    icon: Zap,
    headline: "Eliminate manual workflows",
    description: "Trigger actions based on participant behavior. Automate communications, certificate issuance, and nudges.",
    bullets: [
      "Behavior-based triggers",
      "Automated milestone emails",
      "Dynamic resource unlocking"
    ],
    visual: (
      <div className="w-full h-full bg-[#0F0F11] border border-[#27272A] rounded-xl flex items-center justify-center p-6 overflow-hidden relative shadow-[0_0_30px_rgba(212,175,55,0.05)]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 border border-[#27272A]/50 rounded-full absolute animate-[spin_10s_linear_infinite]" />
          <div className="w-48 h-48 border border-[#D4AF37]/20 rounded-full absolute animate-[spin_8s_linear_infinite_reverse]" />
          <div className="w-32 h-32 border border-[#27272A]/50 rounded-full absolute animate-[spin_6s_linear_infinite]" />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="w-12 h-12 bg-[#1A1A1D] border border-[#D4AF37]/50 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.2)]">
             <Zap className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div className="flex gap-4">
             <div className="px-4 py-2 bg-[#121214] border border-[#333333] rounded-lg text-xs text-[#A1A1AA] flex items-center gap-2">
               <div className="w-1.5 h-1.5 bg-[#22c55e] rounded-full" /> Trigger Set
             </div>
             <div className="px-4 py-2 bg-[#121214] border border-[#D4AF37]/30 rounded-lg text-xs text-white flex items-center gap-2 shadow-[0_0_10px_rgba(212,175,55,0.1)]">
               <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse" /> Executing
             </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "security",
    label: "Security",
    icon: Shield,
    headline: "Bank-grade data protection",
    description: "Ensure sensitive operational data is protected with enterprise-level encryption, compliance, and strict role-based access.",
    bullets: [
      "SOC2 Type II Compliant",
      "Granular role-based access control",
      "End-to-end data encryption"
    ],
    visual: (
      <div className="w-full h-full bg-[#0F0F11] border border-[#27272A] rounded-xl flex items-center justify-center p-6 overflow-hidden relative shadow-[0_0_30px_rgba(212,175,55,0.05)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent opacity-50" />
        <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-xs">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-24 h-24 border border-[#D4AF37]/30 rounded-full animate-ping opacity-20" />
            <div className="w-16 h-16 bg-[#1A1A1D] border border-[#D4AF37]/50 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              <Shield className="w-6 h-6 text-[#D4AF37]" />
            </div>
          </div>
          <div className="w-full space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-full bg-[#1A1A1D]/80 backdrop-blur-md rounded text-xs border border-[#333333] p-3 flex justify-between items-center">
                <span className="text-[#A1A1AA] font-mono">sys_req_{i}0{i}</span>
                <span className="text-[#22c55e] flex items-center gap-1.5"><Shield className="w-3 h-3" /> Encrypted</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
];

export function TabbedShowcaseSection() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  const activeContent = TABS.find(t => t.id === activeTab);

  return (
    <section className="py-24 md:py-32 bg-[#0B0B0C] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-[32px] sm:text-[44px] font-bold text-white tracking-tight mb-6">
            The complete operating system.
          </h2>
          <p className="text-[18px] text-[#A1A1AA] max-w-2xl mx-auto font-light">
            Explore the core capabilities that allow high-performing teams to run their structured programmes flawlessly.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Side: Tabs & Content */}
          <div className="w-full lg:w-5/12 flex flex-col">
            
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-10 border-b border-[#27272A] pb-px">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-4 py-3 text-sm font-medium transition-colors duration-300 flex items-center gap-2 ${
                      isActive ? "text-white" : "text-[#A1A1AA] hover:text-white"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-[#D4AF37]" : ""}`} />
                    {tab.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeTabUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.8)]"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="min-h-[280px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex flex-col"
                >
                  <h3 className="text-[28px] md:text-[36px] font-bold text-white leading-[1.2] tracking-tight mb-6">
                    {activeContent?.headline}
                  </h3>
                  <p className="text-lg text-[#A1A1AA] font-light leading-relaxed mb-8">
                    {activeContent?.description}
                  </p>
                  
                  <ul className="space-y-4">
                    {activeContent?.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
                        <span className="text-white/90 text-base">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side: Visual Mockup */}
          <div className="w-full lg:w-7/12 aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[500px]">
             <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  {activeContent?.visual}
                </motion.div>
              </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
