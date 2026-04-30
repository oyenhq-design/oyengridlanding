"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const TABS = [
  {
    id: "bootcamps",
    label: "Bootcamps",
    heading: "Scale intensive learning without the chaos",
    description: "Manage demanding, fast-paced cohorts with automated tracking and centralized communications.",
    bullets: ["Automated attendance and submission tracking", "Real-time dropout risk alerts", "Integrated live session delivery"],
    image: "/img/pg mgt.png"
  },
  {
    id: "training-orgs",
    label: "Training Orgs",
    heading: "Deliver standardized programmes across clients",
    description: "Maintain quality and consistency while delivering multiple customized programmes simultaneously.",
    bullets: ["Multi-tenant delivery architecture", "Standardized module enforcement", "White-labeled participant experience"],
    image: "/img/pg mgt.png" // Placeholder, would use different image
  },
  {
    id: "corporate",
    label: "Corporate",
    heading: "Drive internal development and compliance",
    description: "Structure employee onboarding, upskilling, and compliance training with strict operational oversight.",
    bullets: ["Integration with internal HRIS", "Automated compliance nudges", "Granular performance reporting"],
    image: "/img/pg mgt.png" // Placeholder
  }
];

export function SolutionsTabsSection() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const activeContent = TABS.find(t => t.id === activeTab)!;

  return (
    <section className="py-24 md:py-32 bg-[#0B0B0C]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-[36px] sm:text-[48px] font-bold text-white tracking-tight">
            Built for your delivery model
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-[15px] font-medium transition-all duration-300 ${
                activeTab === tab.id 
                  ? "bg-[#C8A96A] text-[#0B0B0C] shadow-[0_0_15px_rgba(200,169,106,0.3)]" 
                  : "bg-[#121214] text-[#9CA3AF] border border-[rgba(255,255,255,0.06)] hover:text-white hover:border-[rgba(255,255,255,0.15)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-[#121214] border border-[rgba(255,255,255,0.06)] rounded-[24px] overflow-hidden min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 h-full"
            >
              {/* Left Text */}
              <div className="p-8 lg:p-16 flex flex-col justify-center">
                <h3 className="text-[28px] lg:text-[36px] font-bold text-white leading-[1.2] tracking-tight mb-6">
                  {activeContent.heading}
                </h3>
                <p className="text-[16px] text-[#9CA3AF] leading-relaxed mb-8">
                  {activeContent.description}
                </p>
                <ul className="flex flex-col gap-4">
                  {activeContent.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white text-[15px]">
                      <CheckCircle2 className="w-5 h-5 text-[#C8A96A] shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Image */}
              <div className="relative h-[300px] lg:h-auto bg-[#1A1A1D] border-t lg:border-t-0 lg:border-l border-[rgba(255,255,255,0.06)]">
                <Image
                  src={activeContent.image}
                  alt={activeContent.label}
                  fill
                  className="object-cover object-left-top p-8 lg:p-12 opacity-90"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
