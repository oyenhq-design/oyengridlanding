"use client";

import Image from "next/image";
import { ArrowRight, TrendingUp, FileText } from "lucide-react";

export function WhatsNew() {
  return (
    <section className="relative py-24 bg-[#FAFAF8] overflow-hidden flex flex-col items-center">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#D4A017]/[0.04] blur-[130px] rounded-full" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
            <span className="text-xs font-semibold tracking-widest text-[#D4A017] uppercase">
              WHAT'S NEW
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0D1F] tracking-tight mb-4">
            Making news, making impact
          </h2>
          <p className="text-[#55534E] text-base max-w-2xl text-center leading-relaxed font-normal">
            Stay updated with product releases, customer stories, and insights <br className="hidden md:block" />
            from the world of training operations.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: AltSchool (Customer Story) - col-span-5 */}
          <div className="lg:col-span-5 flex flex-col bg-white border border-[#0A0D1F]/[0.06] rounded-[20px] overflow-hidden group shadow-[0_2px_8px_rgba(10,13,31,0.02)] hover:shadow-[0_16px_48px_rgba(10,13,31,0.06)] hover:border-[#D4A017]/35 transition-all duration-300">
            {/* Top Area */}
            <div className="relative flex-1 p-8 flex flex-col min-h-[380px]">
              {/* Image Background (Covers full card, text sits directly on it) */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/customer-story.png"
                  alt="AltSchool Customer Story"
                  fill
                  className="object-cover object-right opacity-100 group-hover:scale-105 transition-transform duration-700"
                />
                {/* Dark gradient to make white text pop on the left, keeping right image clear */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0C1029]/85 via-[#0C1029]/40 to-transparent z-10" />
              </div>
 
              {/* Content */}
              <div className="relative z-20 flex-1 flex flex-col w-[75%] md:w-[70%]">
                <span className="w-fit text-[9.5px] font-semibold tracking-wider text-[#D4A017] bg-[#D4A017]/15 border border-[#D4A017]/30 px-3 py-1.5 rounded-full uppercase mb-6">
                  CUSTOMER STORY
                </span>
                <h3 className="text-[26px] font-bold text-white mb-4 leading-[1.2] tracking-tight">
                  How AltSchool reduced attendance tracking from 4 hours to 10 minutes.
                </h3>
                <p className="text-[#E2E4F0] text-sm leading-relaxed mb-8 flex-1 pr-4 font-normal">
                  AltSchool scaled their learner programs across 7 cohorts using automated attendance, real-time reports, and smart reminders.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#D4A017] hover:text-[#F3C043] font-medium text-sm w-fit group/link transition-colors"
                >
                  Read story <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-5 border-t border-[#0A0D1F]/5 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="text-emerald-500 font-bold text-lg tracking-tighter">alt</span>
                <span className="text-[#0A0D1F] text-sm font-semibold tracking-tighter">_school</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#55534E] mb-1">Program Type</span>
                <span className="text-sm text-[#0A0D1F] font-medium">Software Engineering</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#55534E] mb-1">Learners</span>
                <span className="text-sm text-[#0A0D1F] font-medium">2,400+</span>
              </div>
            </div>
          </div>

          {/* Card 2: TalentQL (Case Study) - col-span-4 */}
          <div className="lg:col-span-4 flex flex-col bg-white border border-[#0A0D1F]/[0.06] rounded-[20px] overflow-hidden group shadow-[0_2px_8px_rgba(10,13,31,0.02)] hover:shadow-[0_16px_48px_rgba(10,13,31,0.06)] hover:border-[#D4A017]/35 transition-all duration-300">
            {/* Top Area */}
            <div className="relative flex-1 p-8 flex flex-col min-h-[380px]">
              {/* Image Background (Covers full card, text sits directly on it) */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/case-study.png"
                  alt="TalentQL Case Study"
                  fill
                  className="object-cover object-right opacity-100 group-hover:scale-105 transition-transform duration-700"
                />
                {/* Dark gradient to make white text pop on the left, keeping right image clear */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0C1029]/85 via-[#0C1029]/40 to-transparent z-10" />
              </div>
 
              {/* Content */}
              <div className="relative z-20 flex-1 flex flex-col w-[75%] md:w-[70%]">
                <span className="w-fit text-[9.5px] font-semibold tracking-wider text-[#D4A017] bg-[#D4A017]/15 border border-[#D4A017]/30 px-3 py-1.5 rounded-full uppercase mb-6">
                  CASE STUDY
                </span>
                <h3 className="text-[26px] font-bold text-white mb-4 leading-[1.2] tracking-tight">
                  Managing 5,000+ learners across 3 countries with OYEN GRID.
                </h3>
                <p className="text-[#E2E4F0] text-sm leading-relaxed mb-8 flex-1 pr-4 font-normal">
                  See how TalentQL centralized training delivery, improved engagement, and scaled without adding more admin work.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#D4A017] hover:text-[#F3C043] font-medium text-sm w-fit group/link transition-colors"
                >
                  View case study <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-5 border-t border-[#0A0D1F]/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <div className="w-3 h-3 border-2 border-[#8B5CF6] rounded-sm rotate-45" />
                </div>
                <div className="flex items-center">
                  <span className="text-[#0A0D1F]/65 font-medium text-sm tracking-widest">TALENT</span>
                  <span className="text-[#0A0D1F] font-bold text-sm tracking-widest">QL</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#55534E] mb-1">Industry</span>
                <span className="text-sm text-[#0A0D1F] font-medium">Education</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#55534E] mb-1">Learners</span>
                <span className="text-sm text-[#0A0D1F] font-medium">5,000+</span>
              </div>
            </div>
          </div>

          {/* Column 3: Stacked Cards - col-span-3 */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            
            {/* Top Right Card */}
            <div className="flex-1 bg-white border border-[#0A0D1F]/[0.06] rounded-[20px] p-8 group relative overflow-hidden flex flex-col justify-between min-h-[220px] shadow-[0_2px_8px_rgba(10,13,31,0.02)] hover:shadow-[0_16px_48px_rgba(10,13,31,0.06)] hover:border-[#D4A017]/35 transition-all duration-300">
              {/* Image Background (Covers full card, text sits directly on it) */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/product-update.png"
                  alt="Product update workspace"
                  fill
                  className="object-cover object-right opacity-100 group-hover:scale-105 transition-transform duration-700"
                />
                {/* Dark gradient to make white text pop on the left, keeping right image clear */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0C1029]/85 via-[#0C1029]/40 to-transparent z-10" />
              </div>
              
              <div className="relative z-10 w-[78%]">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[9.5px] font-semibold tracking-wider text-[#D4A017] bg-[#D4A017]/15 border border-[#D4A017]/30 px-3 py-1.5 rounded-full uppercase">
                    PRODUCT UPDATE
                  </span>
                  <div className="w-8 h-8 rounded-lg border border-white/15 flex items-center justify-center text-[#D4A017] bg-[#D4A017]/10">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-3 leading-snug">
                  AI Session Summaries are now live.
                </h4>
                <p className="text-[#E2E4F0] text-sm leading-relaxed mb-6 font-normal">
                  Automatically generate session summaries, action items, and follow-ups in seconds.
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#D4A017] hover:text-[#F3C043] font-medium text-sm w-fit relative z-10 mt-auto group/link transition-colors"
              >
                Learn more <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
              </a>
            </div>

            {/* Bottom Right Card */}
            <div className="flex-1 bg-white border border-[#0A0D1F]/[0.06] rounded-[20px] p-8 group relative overflow-hidden flex flex-col justify-between min-h-[220px] shadow-[0_2px_8px_rgba(10,13,31,0.02)] hover:shadow-[0_16px_48px_rgba(10,13,31,0.06)] hover:border-[#D4A017]/35 transition-all duration-300">
              {/* Image Background (Covers full card, text sits directly on it) */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/insights-laptop.png"
                  alt="Insights laptop"
                  fill
                  className="object-cover object-right opacity-100 group-hover:scale-105 transition-transform duration-700"
                />
                {/* Dark gradient to make white text pop on the left, keeping right image clear */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0C1029]/85 via-[#0C1029]/40 to-transparent z-10" />
              </div>
              
              <div className="relative z-10 w-[78%]">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[9.5px] font-semibold tracking-wider text-[#D4A017] bg-[#D4A017]/15 border border-[#D4A017]/30 px-3 py-1.5 rounded-full uppercase">
                    INSIGHTS
                  </span>
                  <div className="w-8 h-8 rounded-lg border border-white/15 flex items-center justify-center text-[#D4A017] bg-[#D4A017]/10">
                    <FileText className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-3 leading-snug">
                  5 reasons training programs fail at scale
                </h4>
                <p className="text-[#E2E4F0] text-sm leading-relaxed mb-6 font-normal">
                  Learn the biggest challenges training teams face — and how to solve them.
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#D4A017] hover:text-[#F3C043] font-medium text-sm w-fit relative z-10 mt-auto group/link transition-colors"
              >
                Read article <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
              </a>
            </div>

          </div>
        </div>

        {/* Explore All CTA Bottom */}
        <div className="mt-16 flex items-center justify-center">
          <div className="w-full max-w-2xl flex items-center gap-6">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#0A0D1F]/10" />
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#D4A017] font-medium text-sm hover:gap-3 transition-all duration-300 shrink-0"
            >
              Explore all stories & insights <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#0A0D1F]/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
