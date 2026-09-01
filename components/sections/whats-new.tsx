"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp, FileText } from "lucide-react";

export function WhatsNew() {
  return (
    <section className="relative py-24 overflow-hidden flex flex-col items-center border-t border-[#E7E3DA] bg-[#FCFBF8]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/whats-new-bg.png"
          alt="Insights & Resources Background"
          fill
          className="object-cover opacity-100"
          unoptimized
          priority
        />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C99A20]" />
            <span className="text-xs font-black tracking-widest text-[#C99A20] uppercase">
              INSIGHTS & RESOURCES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#08111F] tracking-tight mb-4 select-none">
            Proven operational outcomes.
          </h2>
          <p className="text-[#667085] text-base max-w-2xl text-center leading-relaxed font-bold">
            Learn how forward-thinking organizations improve training, collaboration, and productivity with OYEN GRID.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Card 1: AltSchool (Customer Story) - col-span-5 */}
          <div className="lg:col-span-5 flex flex-col bg-[#FFFFFF] border border-[#E7E3DA] rounded-[20px] overflow-hidden group shadow-sm hover:border-[#C99A20]/40 transition-all duration-300">
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220] via-[#0B1220]/65 to-transparent z-10" />
              </div>

              {/* Content */}
              <div className="relative z-20 flex-1 flex flex-col w-[75%] md:w-[70%]">
                <span className="w-fit text-[9.5px] font-black tracking-wider text-[#0B5CFF] bg-[#0B5CFF]/15 border border-[#0B5CFF]/30 px-3 py-1.5 rounded-full uppercase mb-6">
                  CUSTOMER STORY • 4 min read
                </span>
                <h3 className="text-[26px] font-extrabold text-white mb-4 leading-[1.2] tracking-tight">
                  AltSchool saves 4 hours weekly per cohort.
                </h3>
                <p className="text-[#E2E8F0] text-sm leading-relaxed mb-8 flex-1 pr-4 font-medium">
                  Automated tracking scaled AltSchool programs to 2,400+ active learners.
                </p>
                <Link
                  href="/resources/blog/altschool-saves-4-hours-weekly"
                  className="inline-flex items-center gap-2 text-[#0B5CFF] hover:text-[#084BD8] font-bold text-sm w-fit group/link transition-colors"
                >
                  Read story <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-5 border-t border-white/[0.05] bg-[#0B1220]/80 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="text-[#0B5CFF] font-black text-lg tracking-tighter">alt</span>
                <span className="text-white text-sm font-bold tracking-tighter">_school</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#A0AEC0] mb-1 font-bold">Program Type</span>
                <span className="text-sm text-white font-bold">Software Engineering</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#A0AEC0] mb-1 font-bold">Learners</span>
                <span className="text-sm text-white font-bold">2,400+</span>
              </div>
            </div>
          </div>

          {/* Card 2: TalentQL (Case Study) - col-span-4 */}
          <div className="lg:col-span-4 flex flex-col bg-[#0B1220]/95 border border-white/[0.08] rounded-[20px] overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_48px_rgba(212,160,23,0.08)] hover:border-[#0B5CFF]/40 transition-all duration-300">
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220] via-[#0B1220]/65 to-transparent z-10" />
              </div>

              {/* Content */}
              <div className="relative z-20 flex-1 flex flex-col w-[75%] md:w-[70%]">
                <span className="w-fit text-[9.5px] font-black tracking-wider text-[#0B5CFF] bg-[#0B5CFF]/15 border border-[#0B5CFF]/30 px-3 py-1.5 rounded-full uppercase mb-6">
                  CASE STUDY • 6 min read
                </span>
                <h3 className="text-[26px] font-extrabold text-white mb-4 leading-[1.2] tracking-tight">
                  TalentQL scales training across 3 countries.
                </h3>
                <p className="text-[#E2E8F0] text-sm leading-relaxed mb-8 flex-1 pr-4 font-medium">
                  Centralized operations enabled multi-country scale without administrative overhead.
                </p>
                <Link
                  href="/resources/blog/talentql-scales-training-across-three-countries"
                  className="inline-flex items-center gap-2 text-[#0B5CFF] hover:text-[#084BD8] font-bold text-sm w-fit group/link transition-colors"
                >
                  View case study <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-5 border-t border-white/[0.05] bg-[#0B1220]/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <div className="w-3 h-3 border-2 border-[#0B5CFF] rounded-sm rotate-45" />
                </div>
                <div className="flex items-center">
                  <span className="text-white/60 font-bold text-sm tracking-widest">TALENT</span>
                  <span className="text-white font-black text-sm tracking-widest">QL</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#A0AEC0] mb-1 font-bold">Industry</span>
                <span className="text-sm text-white font-bold">Education</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#A0AEC0] mb-1 font-bold">Learners</span>
                <span className="text-sm text-white font-bold">5,000+</span>
              </div>
            </div>
          </div>

          {/* Column 3: Stacked Cards - col-span-3 */}
          <div className="lg:col-span-3 flex flex-col gap-6">

            {/* Top Right Card */}
            <div className="flex-1 bg-[#0B1220]/95 border border-white/[0.08] rounded-[20px] p-8 group relative overflow-hidden flex flex-col justify-between min-h-[220px] shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_48px_rgba(212,160,23,0.08)] hover:border-[#0B5CFF]/40 transition-all duration-300">
              {/* Image Background (Covers full card, text sits directly on it) */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/product-update.png"
                  alt="Product update workspace"
                  fill
                  className="object-cover object-right opacity-100 group-hover:scale-105 transition-transform duration-700"
                />
                {/* Dark gradient to make white text pop on the left, keeping right image clear */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220] via-[#0B1220]/65 to-transparent z-10" />
              </div>

              <div className="relative z-10 w-[78%]">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[9.5px] font-black tracking-wider text-[#0B5CFF] bg-[#0B5CFF]/15 border border-[#0B5CFF]/30 px-3 py-1.5 rounded-full uppercase">
                    PRODUCT UPDATE • 3 min read
                  </span>
                  <div className="w-8 h-8 rounded-lg border border-white/15 flex items-center justify-center text-[#0B5CFF] bg-[#0B5CFF]/10">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-3 leading-snug">
                  AI Summaries feature live.
                </h4>
                <p className="text-[#E2E8F0] text-sm leading-relaxed mb-6 font-medium">
                  Generate cohort summaries and action items instantly from live sessions.
                </p>
              </div>
              <Link
                href="/resources/blog/introducing-ai-summaries"
                className="inline-flex items-center gap-2 text-[#0B5CFF] hover:text-[#084BD8] font-bold text-sm w-fit relative z-10 mt-auto group/link transition-colors"
              >
                Learn more <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>
            </div>

            {/* Bottom Right Card */}
            <div className="flex-1 bg-[#0B1220]/95 border border-white/[0.08] rounded-[20px] p-8 group relative overflow-hidden flex flex-col justify-between min-h-[220px] shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_48px_rgba(212,160,23,0.08)] hover:border-[#0B5CFF]/40 transition-all duration-300">
              {/* Image Background (Covers full card, text sits directly on it) */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/insights-laptop.png"
                  alt="Insights laptop"
                  fill
                  className="object-cover object-right opacity-100 group-hover:scale-105 transition-transform duration-700"
                />
                {/* Dark gradient to make white text pop on the left, keeping right image clear */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220] via-[#0B1220]/65 to-transparent z-10" />
              </div>

              <div className="relative z-10 w-[78%]">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[9.5px] font-black tracking-wider text-[#0B5CFF] bg-[#0B5CFF]/15 border border-[#0B5CFF]/30 px-3 py-1.5 rounded-full uppercase">
                    INSIGHTS • 5 min read
                  </span>
                  <div className="w-8 h-8 rounded-lg border border-white/15 flex items-center justify-center text-[#0B5CFF] bg-[#0B5CFF]/10">
                    <FileText className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-3 leading-snug">
                  Scaling training programs successfully.
                </h4>
                <p className="text-[#E2E8F0] text-sm leading-relaxed mb-6 font-medium">
                  Avoid administrative friction points when scaling enterprise learning cohorts.
                </p>
              </div>
              <Link
                href="/resources/blog/scaling-training-programs-successfully"
                className="inline-flex items-center gap-2 text-[#0B5CFF] hover:text-[#084BD8] font-bold text-sm w-fit relative z-10 mt-auto group/link transition-colors"
              >
                Read article <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>
            </div>

          </div>
        </div>

        {/* Explore All CTA Bottom */}
        <div className="mt-16 flex items-center justify-center">
          <div className="w-full max-w-2xl flex items-center gap-6">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-white/10" />
            <a
              href="/resources/case-studies"
              className="inline-flex items-center gap-2 text-[#0B5CFF] font-bold text-sm hover:gap-3 transition-all duration-300 shrink-0"
            >
              Explore all stories & insights <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
