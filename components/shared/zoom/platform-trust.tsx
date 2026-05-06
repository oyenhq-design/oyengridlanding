"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";

const TABS = [
  "Collaboration",
  "Customer experience",
  "Marketing",
  "Sales",
  "Employee engagement"
];

export function PlatformTrust() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <div className="bg-white">
      
      {/* 8. PLATFORM SECTION */}
      <section className="py-[120px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#232333] tracking-tight mb-12">
              One platform. Endless ways to work together
            </h2>
            
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-gray-100 rounded-full w-max mx-auto overflow-hidden">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-full text-[14px] font-bold transition-all duration-300 ${
                    activeTab === tab 
                      ? "bg-white text-[#0B5CFF] shadow-sm" 
                      : "text-[#232333]/60 hover:text-[#232333]"
                  }`}
                >
                  {tab}
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
                  <h3 className="text-[32px] md:text-[40px] font-bold text-[#232333] tracking-tight leading-tight mb-8">
                    Elevate {activeTab.toLowerCase()} with AI
                  </h3>
                  <div className="space-y-6">
                    {[
                      "Real-time transcription and translation",
                      "Automated meeting notes and action items",
                      "Seamless integration with your CRM and workflows",
                      "Enterprise-grade security and reliability"
                    ].map((bullet) => (
                      <div key={bullet} className="flex items-center gap-4">
                        <div className="w-5 h-5 rounded-full bg-[#0B5CFF]/10 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0B5CFF]" />
                        </div>
                        <span className="text-[#232333]/70 text-[16px] leading-relaxed">{bullet}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-12 px-10 py-4 rounded-full border border-[#0B5CFF] text-[#0B5CFF] text-[16px] font-bold hover:bg-[#0B5CFF]/5 transition-all">
                    Learn about {activeTab.toLowerCase()}
                  </button>
                </div>

                {/* Right Mockup */}
                <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.1)] ring-1 ring-gray-100">
                  <Image 
                    src="/zoom_like_meetings_ui_1778076824_png_1778079250752.png" 
                    alt="Platform UI" 
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 9. RATINGS / TRUST METRICS */}
      <section className="py-[100px] border-t border-b border-gray-100 bg-gray-50/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
            {[
              { score: "4.5/5", label: "G2 Crowd" },
              { score: "4.6/5", label: "Capterra" },
              { score: "8.5/10", label: "TrustRadius" }
            ].map((metric) => (
              <div key={metric.label} className="text-center">
                <p className="text-[42px] font-bold text-[#232333] mb-3">{metric.score}</p>
                <div className="flex justify-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-[#232333]/60 text-[14px] font-bold uppercase tracking-widest">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
