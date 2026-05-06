"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, ChevronRight } from "lucide-react";

const TABS = [
  "Collaboration", "Customer experience", "Marketing", "Sales", "Employee engagement"
];

export function ZoomFeatures() {
  const [activeTab, setActiveTab] = useState("Collaboration");

  return (
    <div className="bg-white">
      
      {/* 6. FEATURE SPLIT SECTION */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0B5CFF] to-[#6EA8FF] opacity-[0.08] blur-3xl rounded-[40px] group-hover:opacity-[0.15] transition-opacity" />
            <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl border border-slate-100 ring-1 ring-black/5">
              <Image src="/images/hero-dashboard.png" alt="Feature UI" fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-[#0B5CFF] border-b-[10px] border-b-transparent ml-1" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-[36px] md:text-[44px] font-bold text-[#0B0B0C] mb-8 leading-tight">
              A better way to meet <br /> and collaborate
            </h2>
            <div className="space-y-8">
              {[
                { title: "HD Video & Audio", desc: "Crystal-clear communication across any device, anywhere in the world." },
                { title: "Smart Recordings", desc: "Automated summaries, chapters, and action items powered by Zoom AI." },
                { title: "Team Collaboration", desc: "Seamlessly transition from meetings to chat and whiteboard in one click." }
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#0B5CFF] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-[#0B0B0C] font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-[#666] text-[16px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. AWARDS / REPORT CARDS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Leader in Magic Quadrant", desc: "Zoom named a Leader in the 2026 Gartner® Magic Quadrant™ for UCaaS." },
              { title: "G2 Best Software", desc: "Ranked #1 for Customer Satisfaction across Video Conferencing and Team Chat." },
              { title: "TrustRadius Top Rated", desc: "Consistently rated as the top choice for enterprise communication by users." }
            ].map((card, i) => (
              <div key={i} className="p-10 rounded-[32px] bg-gradient-to-br from-[#0B5CFF] to-[#0048D9] text-white flex flex-col items-start shadow-xl shadow-blue-500/10 hover:translate-y-[-8px] transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-8">
                  <div className="w-6 h-6 border-2 border-white rounded-full" />
                </div>
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <p className="text-white/80 text-[15px] leading-relaxed mb-8 font-medium">{card.desc}</p>
                <button className="mt-auto flex items-center gap-2 font-bold text-[14px] hover:translate-x-2 transition-transform">
                  Read the report <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PLATFORM SECTION */}
      <section className="py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#0B0B0C] mb-12">
              One platform. Endless ways to work together
            </h2>
            
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-slate-100 rounded-full w-max mx-auto mb-16 overflow-hidden">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-full text-[14px] font-bold transition-all duration-300 ${
                    activeTab === tab ? "bg-white text-[#0B5CFF] shadow-md" : "text-[#666] hover:text-[#0B5CFF]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-[32px] font-bold text-[#0B0B0C] mb-8 leading-tight">
                Empower your teams with <br /> {activeTab} tools
              </h3>
              <div className="space-y-6">
                {[
                  "Optimized workflows for every department",
                  "Deep integrations with your existing tech stack",
                  "Scalable solutions built for modern enterprises"
                ].map((bullet) => (
                  <div key={bullet} className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#0B5CFF]" />
                    <span className="text-[#666] text-[17px] font-medium">{bullet}</span>
                  </div>
                ))}
              </div>
              <button className="mt-10 px-8 py-3.5 rounded-full bg-[#0B5CFF] text-white font-bold text-[15px] hover:bg-[#0048D9] transition-all">
                Learn about {activeTab}
              </button>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-[#0B5CFF]/5 blur-[80px] rounded-full" />
              <div className="relative aspect-[16/10] bg-white border border-slate-100 rounded-[32px] shadow-2xl overflow-hidden p-4">
                <div className="w-full h-full bg-slate-50 rounded-[20px] overflow-hidden relative">
                  <Image src="/images/hero-dashboard.png" alt="Platform UI" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
