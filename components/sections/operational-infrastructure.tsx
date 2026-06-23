"use client";

import { motion } from "framer-motion";
import { 
  Layers, Users, Activity, FileText, BarChart3, 
  ChevronRight, ArrowUpRight, CheckCircle2, Award
} from "lucide-react";
import Link from "next/link";

export function OperationalInfrastructure() {
  return (
    <section className="py-24 md:py-32 bg-[#05070F] relative overflow-hidden border-b border-white/5">
      {/* Subtle section glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#D4A017]/[0.06] blur-[130px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-[#D4A017]/[0.03] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
            <span className="text-[11px] font-black tracking-[0.2em] text-[#D4A017] uppercase">
              Platform Capabilities
            </span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight max-w-[620px]"
            >
              Every tool you need to{" "}
              <span className="text-[#D4A017] italic font-serif font-normal">
                deliver training.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm md:text-base text-zinc-200 max-w-[340px] font-medium leading-relaxed"
            >
              Replace multiple disconnected systems with a single comprehensive, high-performance platform.
            </motion.p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1: Program Management (WIDE - 2 columns on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 rounded-[24px] border border-white/[0.12] bg-[#0E1326]/60 backdrop-blur-md p-8 flex flex-col justify-between hover:border-[#D4A017]/55 hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(212,160,23,0.1)] transition-all duration-300 group overflow-hidden relative"
          >
            {/* Full-card background: timeline infographic */}
            <img
              src="/timeline-infographic.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-65 pointer-events-none select-none group-hover:scale-105 transition-transform duration-700"
            />
            {/* Blended overlay — strong top for text readability, clear at bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#05070F]/95 via-[#05070F]/45 to-transparent pointer-events-none" />

            {/* Card content — sits above background */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#D4A017]/15 border border-[#D4A017]/40 flex items-center justify-center text-[#D4A017] group-hover:bg-[#D4A017]/25 transition-colors">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.15em]">01 / FEATURE</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Program Management</h3>
              <p className="text-sm md:text-base text-zinc-100 font-medium leading-relaxed max-w-[500px] mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Manage programs, cohorts, schedules, facilitators, and delivery workflows. Build curriculums, set dates, and coordinate facilitators with high-efficiency cohorts.
              </p>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-white/[0.1] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#D4A017] group-hover:text-[#F3C043] transition-colors">
              <Link href="/features/programme-management" className="inline-flex items-center gap-1.5 cursor-pointer">
                Configure Workflow <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Learner Tracking (STANDARD - 1 column) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1 rounded-[24px] border border-white/[0.12] bg-[#0E1326]/60 backdrop-blur-md p-8 flex flex-col justify-between hover:border-[#D4A017]/55 hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(212,160,23,0.1)] transition-all duration-300 group overflow-hidden relative"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#D4A017]/15 border border-[#D4A017]/40 flex items-center justify-center text-[#D4A017] group-hover:bg-[#D4A017]/25 transition-colors">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.15em]">02 / TRACKING</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Learner Tracking</h3>
              <p className="text-sm text-zinc-100 font-medium leading-relaxed mb-6">
                Monitor attendance, engagement, progress, and completion rate of all participants with original real-time tracking data.
              </p>
            </div>

            {/* Embedded Visual Component: Avatar Stack & Progress Bars */}
            <div className="relative p-5 rounded-xl border border-white/[0.08] bg-[#05070F]/85 backdrop-blur-sm min-h-[90px] flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-blue-600 border-2 border-[#05070F] flex items-center justify-center text-[9px] font-bold text-white">JD</div>
                  <div className="w-7 h-7 rounded-full bg-emerald-600 border-2 border-[#05070F] flex items-center justify-center text-[9px] font-bold text-white">AM</div>
                  <div className="w-7 h-7 rounded-full bg-[#D4A017] border-2 border-[#05070F] flex items-center justify-center text-[9px] font-bold text-black">SK</div>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">94.2% Active</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                <div className="bg-[#D4A017] h-1.5 rounded-full" style={{ width: "82%" }}></div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.1] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#D4A017] group-hover:text-[#F3C043] transition-colors">
              <Link href="/features/participant-management" className="inline-flex items-center gap-1.5 cursor-pointer">
                Track Students <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Card 3: Auto Attendance (STANDARD - 1 column) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-1 rounded-[24px] border border-white/[0.12] bg-[#0E1326]/60 p-8 flex flex-col justify-between hover:border-[#D4A017]/55 hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(212,160,23,0.1)] transition-all duration-300 group overflow-hidden relative"
          >
            {/* Full-card background: attendance diagram */}
            <img
              src="/attendance-diagram.jpg"
              alt="Auto Attendance Diagram"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-70 pointer-events-none select-none group-hover:scale-105 transition-transform duration-700"
            />
            {/* Blended overlay — dark gradient to protect white text */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#05070F]/90 via-[#05070F]/40 to-transparent pointer-events-none z-10" />

            <div className="relative z-20">
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#D4A017]/20 border border-[#D4A017]/45 flex items-center justify-center text-[#D4A017] group-hover:bg-[#D4A017]/30 transition-colors">
                  <Activity className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-extrabold text-white uppercase tracking-[0.15em]">03 / AUTOMATION</span>
              </div>
              <h3 className="text-xl font-extrabold text-white mb-3">Auto Attendance</h3>
              <p className="text-sm text-white font-extrabold leading-relaxed mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
                Automatically capture attendance and participation data directly from integration logs.
              </p>
            </div>

            {/* Transparent spacer to maintain card height and reveal background image */}
            <div className="relative min-h-[90px] bg-transparent pointer-events-none z-20" />

            <div className="relative z-20 mt-8 pt-4 border-t border-white/[0.1] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#D4A017] group-hover:text-[#F3C043] transition-colors">
              <Link href="/features/attendance-intelligence" className="inline-flex items-center gap-1.5 cursor-pointer">
                View Logs <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Card 4: Assessments (STANDARD - 1 column) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 rounded-[24px] border border-white/[0.12] bg-[#0E1326]/60 backdrop-blur-md p-8 flex flex-col justify-between hover:border-[#D4A017]/55 hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(212,160,23,0.1)] transition-all duration-300 group overflow-hidden relative"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#D4A017]/15 border border-[#D4A017]/40 flex items-center justify-center text-[#D4A017] group-hover:bg-[#D4A017]/25 transition-colors">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.15em]">04 / GRADES</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Assessments</h3>
              <p className="text-sm text-zinc-100 font-medium leading-relaxed mb-6">
                Create quizzes, assignments, evaluations, and configure automatic grading workflows.
              </p>
            </div>

            {/* Embedded Visual Component: Interactive-looking Quiz Card */}
            <div className="relative p-4 rounded-xl border border-white/[0.08] bg-[#05070F]/85 backdrop-blur-sm min-h-[90px] flex flex-col gap-2.5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4A017]" />
                <span className="text-[11px] font-bold text-white">JavaScript Promises Quiz</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-1.5 rounded bg-white/5 border border-white/10 text-[9px] font-bold text-center text-zinc-200">10 Questions</div>
                <div className="p-1.5 rounded bg-[#D4A017]/10 border border-[#D4A017]/20 text-[9px] font-bold text-center text-[#D4A017]">Auto-grade</div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.1] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#D4A017] group-hover:text-[#F3C043] transition-colors">
              <Link href="/features/assessments" className="inline-flex items-center gap-1.5 cursor-pointer">
                Manage Quizzes <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Card 5: Reports (WIDE - 2 columns on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="md:col-span-2 rounded-[24px] border border-white/[0.12] bg-[#0E1326]/60 backdrop-blur-md p-8 flex flex-col justify-between hover:border-[#D4A017]/55 hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(212,160,23,0.1)] transition-all duration-300 group overflow-hidden relative"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#D4A017]/15 border border-[#D4A017]/40 flex items-center justify-center text-[#D4A017] group-hover:bg-[#D4A017]/20 transition-colors">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.15em]">05 / ANALYTICS</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Reports</h3>
              <p className="text-sm md:text-base text-zinc-100 font-medium leading-relaxed max-w-[500px] mb-6">
                Generate and export detailed attendance, completion, sponsor, and impact reports in one click. Fully audit facilitator contributions and participant achievements.
              </p>
            </div>

            {/* Embedded Visual Component: Rich Line Chart Infographic */}
            <div className="relative mt-2 p-5 rounded-xl border border-white/[0.08] bg-[#05070F]/85 overflow-hidden flex items-center justify-between min-h-[110px]">
              <div className="flex flex-col gap-1 z-10">
                <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider">Completion rate</span>
                <span className="text-2xl font-black text-white leading-none">98.4%</span>
                <span className="text-[9px] font-bold text-emerald-400 flex items-center gap-1">
                  ▲ +4.2% this cohort
                </span>
              </div>
              <div className="relative w-44 h-14 z-10 opacity-90">
                <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D4A017" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#D4A017" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M0,25 Q15,5 30,18 T60,8 T90,2 T100,6" 
                    fill="none" 
                    stroke="#D4A017" 
                    strokeWidth="2.5" 
                    strokeLinecap="round"
                  />
                  <path 
                    d="M0,25 Q15,5 30,18 T60,8 T90,2 T100,6 L100,30 L0,30 Z" 
                    fill="url(#chartGradient)" 
                  />
                  <circle cx="90" cy="2" r="3.5" fill="#ffffff" stroke="#D4A017" strokeWidth="2" />
                </svg>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.1] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#D4A017] group-hover:text-[#F3C043] transition-colors">
              <Link href="/features/analytics" className="inline-flex items-center gap-1.5 cursor-pointer">
                Export Reports <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
