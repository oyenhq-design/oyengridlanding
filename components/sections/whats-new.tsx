"use client";

import Image from "next/image";
import { ArrowRight, TrendingUp, FileText } from "lucide-react";

export function WhatsNew() {
  return (
    <section className="relative py-24 bg-[#0A0A0A] overflow-hidden flex flex-col items-center">
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#F5D76E]/[0.03] blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5D76E]" />
            <span className="text-xs font-semibold tracking-widest text-[#F5D76E] uppercase">
              WHAT'S NEW
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Making news, making impact
          </h2>
          <p className="text-[#A1A1A1] text-base max-w-2xl text-center leading-relaxed">
            Stay updated with product releases, customer stories, and insights <br className="hidden md:block" />
            from the world of training operations.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: AltSchool (Customer Story) - col-span-5 */}
          <div className="lg:col-span-5 flex flex-col bg-[#111111] border border-white/[0.08] rounded-[20px] overflow-hidden group">
            {/* Top Area */}
            <div className="relative flex-1 p-8 flex flex-col min-h-[380px]">
              {/* Image Background */}
              <div className="absolute inset-y-0 right-0 w-[70%] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent z-10 opacity-60" />
                <Image
                  src="/presenter-cinematic.png"
                  alt="AltSchool"
                  fill
                  className="object-cover object-right opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="relative z-20 flex-1 flex flex-col w-[75%]">
                <span className="w-fit text-[10px] font-bold tracking-widest text-[#F5D76E] border border-[#F5D76E]/20 px-3 py-1 rounded-full uppercase mb-6">
                  CUSTOMER STORY
                </span>
                <h3 className="text-[26px] font-bold text-white mb-4 leading-[1.2] tracking-tight">
                  How AltSchool reduced attendance tracking from 4 hours to 10 minutes.
                </h3>
                <p className="text-[#A1A1A1] text-sm leading-relaxed mb-8 flex-1 pr-4">
                  AltSchool scaled their learner programs across 7 cohorts using automated attendance, real-time reports, and smart reminders.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#F5D76E] font-medium text-sm hover:gap-3 transition-all duration-300 w-fit"
                >
                  Read story <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-5 border-t border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="text-emerald-500 font-bold text-lg tracking-tighter">alt</span>
                <span className="text-white text-sm font-semibold tracking-tighter">_school</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#A1A1A1] mb-1">Program Type</span>
                <span className="text-sm text-white font-medium">Software Engineering</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#A1A1A1] mb-1">Learners</span>
                <span className="text-sm text-white font-medium">2,400+</span>
              </div>
            </div>
          </div>

          {/* Card 2: TalentQL (Case Study) - col-span-4 */}
          <div className="lg:col-span-4 flex flex-col bg-[#111111] border border-white/[0.08] rounded-[20px] overflow-hidden group">
            {/* Top Area */}
            <div className="relative flex-1 p-8 flex flex-col min-h-[380px]">
              {/* Image Background */}
              <div className="absolute inset-y-0 right-0 w-[70%] overflow-hidden flex items-center">
                <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent z-10" />
                <Image
                  src="/global-network-map.png"
                  alt="TalentQL Map"
                  fill
                  className="object-contain object-right opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="relative z-20 flex-1 flex flex-col w-[85%]">
                <span className="w-fit text-[10px] font-bold tracking-widest text-[#F5D76E] border border-[#F5D76E]/20 px-3 py-1 rounded-full uppercase mb-6">
                  CASE STUDY
                </span>
                <h3 className="text-[26px] font-bold text-white mb-4 leading-[1.2] tracking-tight">
                  Managing 5,000+ learners across 3 countries with OYEN GRID.
                </h3>
                <p className="text-[#A1A1A1] text-sm leading-relaxed mb-8 flex-1 pr-4">
                  See how TalentQL centralized training delivery, improved engagement, and scaled without adding more admin work.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#F5D76E] font-medium text-sm hover:gap-3 transition-all duration-300 w-fit"
                >
                  View case study <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-5 border-t border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <div className="w-3 h-3 border-2 border-[#8B5CF6] rounded-sm rotate-45" />
                </div>
                <div className="flex items-center">
                  <span className="text-zinc-400 font-medium text-sm tracking-widest">TALENT</span>
                  <span className="text-white font-bold text-sm tracking-widest">QL</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#A1A1A1] mb-1">Industry</span>
                <span className="text-sm text-white font-medium">Education</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#A1A1A1] mb-1">Learners</span>
                <span className="text-sm text-white font-medium">5,000+</span>
              </div>
            </div>
          </div>

          {/* Column 3: Stacked Cards - col-span-3 */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            
            {/* Top Right Card */}
            <div className="flex-1 bg-[#111111] border border-white/[0.08] rounded-[20px] p-8 group relative overflow-hidden flex flex-col justify-between min-h-[220px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5D76E]/[0.03] to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-bold tracking-widest text-[#F5D76E] border border-[#F5D76E]/20 px-3 py-1 rounded-full uppercase">
                    PRODUCT UPDATE
                  </span>
                  <div className="w-8 h-8 rounded border border-white/[0.08] flex items-center justify-center text-[#F5D76E]">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-3 leading-snug">
                  AI Session Summaries are now live.
                </h4>
                <p className="text-[#A1A1A1] text-sm leading-relaxed mb-6">
                  Automatically generate session summaries, action items, and follow-ups in seconds.
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#F5D76E] font-medium text-sm hover:gap-3 transition-all duration-300 w-fit relative z-10 mt-auto"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Bottom Right Card */}
            <div className="flex-1 bg-[#111111] border border-white/[0.08] rounded-[20px] p-8 group relative overflow-hidden flex flex-col justify-between min-h-[220px]">
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#1A1A1A] border border-white/[0.05] rounded-xl rotate-12 flex flex-col gap-2 p-4 justify-end opacity-60">
                <div className="w-full h-1.5 bg-zinc-800 rounded-full" />
                <div className="w-3/4 h-1.5 bg-zinc-800 rounded-full" />
                <div className="flex items-end gap-1 mt-2 h-10">
                   <div className="w-2.5 h-4 bg-zinc-700 rounded-sm" />
                   <div className="w-2.5 h-8 bg-zinc-700 rounded-sm" />
                   <div className="w-2.5 h-3 bg-zinc-700 rounded-sm" />
                   <div className="w-2.5 h-6 bg-zinc-700 rounded-sm" />
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-bold tracking-widest text-[#F5D76E] border border-[#F5D76E]/20 px-3 py-1 rounded-full uppercase">
                    INSIGHTS
                  </span>
                  <div className="w-8 h-8 rounded border border-white/[0.08] flex items-center justify-center text-[#F5D76E]">
                    <FileText className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-3 leading-snug">
                  5 reasons training programs fail at scale
                </h4>
                <p className="text-[#A1A1A1] text-sm leading-relaxed mb-6">
                  Learn the biggest challenges training teams face — and how to solve them.
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#F5D76E] font-medium text-sm hover:gap-3 transition-all duration-300 w-fit relative z-10 mt-auto"
              >
                Read article <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

        {/* Explore All CTA Bottom */}
        <div className="mt-16 flex items-center justify-center">
          <div className="w-full max-w-2xl flex items-center gap-6">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-white/[0.1]" />
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#F5D76E] font-medium text-sm hover:gap-3 transition-all duration-300 shrink-0"
            >
              Explore all stories & insights <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-white/[0.1]" />
          </div>
        </div>
      </div>
    </section>
  );
}
