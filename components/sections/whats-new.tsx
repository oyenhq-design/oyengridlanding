"use client";

import Image from "next/image";
import { ArrowRight, TrendingUp, FileText } from "lucide-react";

export function WhatsNew() {
  return (
    <section className="relative py-24 bg-[#0A0A0A] border-t border-zinc-900 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFC72C]" />
            <span className="text-[11px] font-semibold tracking-wider text-[#FFC72C] uppercase">
              What's New
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Making news, making impact
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Stay updated with product releases, customer stories, and insights from the world of training operations.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: AltSchool (Customer Story) */}
          <div className="lg:col-span-5 flex flex-col bg-[#161616] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 group">
            {/* Content Area */}
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <span className="inline-block text-[10px] font-bold tracking-wider text-[#FFC72C] bg-[#FFC72C]/10 border border-[#FFC72C]/20 px-2.5 py-1 rounded-full uppercase mb-6">
                  Customer Story
                </span>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-[#FFC72C] transition-colors duration-300">
                  How AltSchool reduced attendance tracking from 4 hours to 10 minutes.
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                  AltSchool scaled their learner programs across 7 cohorts using automated attendance, real-time reports, and smart reminders.
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#FFC72C] font-semibold text-xs hover:gap-3 transition-all duration-300 mt-2"
              >
                Read story <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Image Container */}
            <div className="relative h-64 overflow-hidden bg-zinc-900 border-t border-white/5">
              <Image
                src="/presenter-cinematic.png"
                alt="AltSchool customer story"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Footer Specifications */}
            <div className="px-8 py-5 bg-[#121212] border-t border-white/5 flex items-center justify-between text-left">
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold text-sm tracking-tight">alt</span>
                  <span className="text-white text-xs font-semibold">_school</span>
                </div>
              </div>
              <div>
                <span className="block text-[9px] text-zinc-500 uppercase tracking-wider">Program Type</span>
                <span className="text-xs text-white font-medium">Software Engineering</span>
              </div>
              <div>
                <span className="block text-[9px] text-zinc-500 uppercase tracking-wider">Learners</span>
                <span className="text-xs text-white font-medium">2,400+</span>
              </div>
            </div>
          </div>

          {/* Card 2: TalentQL (Case Study) */}
          <div className="lg:col-span-4 flex flex-col bg-[#161616] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 group">
            {/* Content Area */}
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <span className="inline-block text-[10px] font-bold tracking-wider text-[#FFC72C] bg-[#FFC72C]/10 border border-[#FFC72C]/20 px-2.5 py-1 rounded-full uppercase mb-6">
                  Case Study
                </span>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-[#FFC72C] transition-colors duration-300">
                  Managing 5,000+ learners across 3 countries with OYEN GRID.
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                  See how TalentQL centralized training delivery, improved engagement, and scaled without adding more admin work.
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#FFC72C] font-semibold text-xs hover:gap-3 transition-all duration-300 mt-2"
              >
                View case study <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Image/Graphic Container */}
            <div className="relative h-48 overflow-hidden bg-zinc-950 border-t border-white/5 flex items-center justify-center p-4">
              <Image
                src="/global-network-map.png"
                alt="TalentQL Case Study Map"
                fill
                className="object-contain p-2 opacity-80 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Footer Specifications */}
            <div className="px-8 py-5 bg-[#121212] border-t border-white/5 flex items-center justify-between text-left">
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-indigo-400 font-bold text-sm tracking-tight">TALENT</span>
                  <span className="text-white font-bold text-sm tracking-tight">QL</span>
                </div>
              </div>
              <div>
                <span className="block text-[9px] text-zinc-500 uppercase tracking-wider">Industry</span>
                <span className="text-xs text-white font-medium">Education</span>
              </div>
              <div>
                <span className="block text-[9px] text-zinc-500 uppercase tracking-wider">Learners</span>
                <span className="text-xs text-white font-medium">5,000+</span>
              </div>
            </div>
          </div>

          {/* Column 3: Stacked Right Cards */}
          <div className="lg:col-span-3 flex flex-col gap-6 justify-between">
            {/* Card 3: AI Session Summaries (Product Update) */}
            <div className="flex-1 bg-[#161616] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
              {/* Graphic Ambient Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[9px] font-bold tracking-wider text-[#FFC72C] bg-[#FFC72C]/10 border border-[#FFC72C]/20 px-2 py-0.5 rounded uppercase">
                    Product Update
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-white/5 flex items-center justify-center text-[#FFC72C]">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#FFC72C] transition-colors duration-300">
                  AI Session Summaries are now live.
                </h4>
                <p className="text-zinc-400 text-[11px] leading-relaxed mb-4">
                  Automatically generate session summaries, action items, and follow-ups in seconds.
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-[#FFC72C] font-semibold text-[11px] hover:gap-2.5 transition-all duration-300"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Card 4: 5 Reasons Fail (Insights) */}
            <div className="flex-1 bg-[#161616] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
              {/* Graphic Ambient Glow */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[9px] font-bold tracking-wider text-[#FFC72C] bg-[#FFC72C]/10 border border-[#FFC72C]/20 px-2 py-0.5 rounded uppercase">
                    Insights
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-white/5 flex items-center justify-center text-[#FFC72C]">
                    <FileText className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#FFC72C] transition-colors duration-300">
                  5 reasons training programs fail at scale
                </h4>
                <p className="text-zinc-400 text-[11px] leading-relaxed mb-4">
                  Learn the biggest challenges training teams face — and how to solve them.
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-[#FFC72C] font-semibold text-[11px] hover:gap-2.5 transition-all duration-300"
              >
                Read article <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Explore All CTA Bottom */}
        <div className="mt-16 flex items-center justify-center">
          <div className="w-full flex items-center gap-4">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-zinc-800" />
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/5 bg-[#121212] hover:border-[#FFC72C]/30 text-white hover:text-[#FFC72C] transition-all duration-300 text-xs font-semibold tracking-wide"
            >
              Explore all stories & insights <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-zinc-800" />
          </div>
        </div>
      </div>
    </section>
  );
}
