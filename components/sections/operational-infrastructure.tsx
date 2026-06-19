"use client";

import { motion } from "framer-motion";
import { 
  Layers, Users, Activity, FileText, BarChart3, 
  ChevronRight, ArrowUpRight
} from "lucide-react";
import Link from "next/link";

export function OperationalInfrastructure() {
  return (
    <section className="py-24 md:py-32 bg-[#000000] relative overflow-hidden border-b border-white/5">
      {/* Background radial atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[radial-gradient(circle,rgba(245,158,11,0.02),transparent_75%)] pointer-events-none blur-[130px]" />
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
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
            <span className="text-[10px] font-black tracking-widest text-[#F59E0B] uppercase">
              Platform Capabilities
            </span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-[#FFFFFF] leading-[1.1] tracking-tight max-w-[620px]"
            >
              Every tool you need to{" "}
              <span className="text-[#F59E0B] italic font-serif font-normal">
                deliver training.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs md:text-sm text-[#9CA3AF] max-w-[280px] font-light leading-relaxed"
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
            className="md:col-span-2 rounded-[24px] border border-white/[0.08] p-8 flex flex-col justify-between hover:border-[#F59E0B]/30 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(245,158,11,0.08)] transition-all duration-300 group overflow-hidden relative"
          >
            {/* Full-card background: timeline infographic */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/timeline-infographic.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-60 pointer-events-none select-none"
            />
            {/* Dark gradient overlay — keeps text legible */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D11]/80 via-[#0D0D11]/50 to-[#0D0D11]/20 pointer-events-none" />

            {/* Card content — sits above background */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/5 border border-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B] group-hover:bg-[#F59E0B]/10 transition-colors">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest">01 / FEATURE</span>
              </div>
              <h3 className="text-2xl font-bold text-[#FFFFFF] mb-3">Program Management</h3>
              <p className="text-sm text-[#9CA3AF] font-light leading-relaxed max-w-[480px] mb-6">
                Manage programs, cohorts, schedules, facilitators, and delivery workflows. Build curriculums, set dates, and coordinate facilitators with high-efficiency cohorts.
              </p>
            </div>


            <div className="relative z-10 mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#F59E0B] group-hover:text-white transition-colors">
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
            className="md:col-span-1 rounded-[24px] border border-white/[0.08] bg-[#0D0D11] p-8 flex flex-col justify-between hover:border-[#F59E0B]/30 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(245,158,11,0.04)] transition-all duration-300 group overflow-hidden relative"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/5 border border-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B] group-hover:bg-[#F59E0B]/10 transition-colors">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest">02 / TRACKING</span>
              </div>
              <h3 className="text-xl font-bold text-[#FFFFFF] mb-3">Learner Tracking</h3>
              <p className="text-sm text-[#9CA3AF] font-light leading-relaxed mb-6">
                Monitor attendance, engagement, progress, and completion rate of all participants.
              </p>
            </div>

            {/* Embedded Component Placeholder */}
            <div className="relative p-4 rounded-xl border border-white/[0.06] bg-[#000000]/60 min-h-[90px] flex items-center justify-center">
              <span className="text-[10px] text-[#9CA3AF] tracking-widest uppercase font-semibold text-center">Analytics & Avatars Area</span>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#F59E0B] group-hover:text-white transition-colors">
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
            className="md:col-span-1 rounded-[24px] border border-white/[0.08] bg-[#0D0D11] p-8 flex flex-col justify-between hover:border-[#F59E0B]/30 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(245,158,11,0.04)] transition-all duration-300 group overflow-hidden relative"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/5 border border-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B] group-hover:bg-[#F59E0B]/10 transition-colors">
                  <Activity className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest">03 / AUTOMATION</span>
              </div>
              <h3 className="text-xl font-bold text-[#FFFFFF] mb-3">Auto Attendance</h3>
              <p className="text-sm text-[#9CA3AF] font-light leading-relaxed mb-6">
                Automatically capture attendance and participation data directly from integration logs.
              </p>
            </div>

            {/* Embedded Component Placeholder */}
            <div className="relative p-4 rounded-xl border border-white/[0.06] bg-[#000000]/60 min-h-[90px] flex items-center justify-center">
              <span className="text-[10px] text-[#9CA3AF] tracking-widest uppercase font-semibold text-center">Live Status Grid Area</span>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#F59E0B] group-hover:text-white transition-colors">
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
            className="md:col-span-1 rounded-[24px] border border-white/[0.08] bg-[#0D0D11] p-8 flex flex-col justify-between hover:border-[#F59E0B]/30 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(245,158,11,0.04)] transition-all duration-300 group overflow-hidden relative"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/5 border border-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B] group-hover:bg-[#F59E0B]/10 transition-colors">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest">04 / GRADES</span>
              </div>
              <h3 className="text-xl font-bold text-[#FFFFFF] mb-3">Assessments</h3>
              <p className="text-sm text-[#9CA3AF] font-light leading-relaxed mb-6">
                Create quizzes, assignments, evaluations, and configure automatic grading workflows.
              </p>
            </div>

            {/* Embedded Component Placeholder */}
            <div className="relative p-4 rounded-xl border border-white/[0.06] bg-[#000000]/60 min-h-[90px] flex items-center justify-center">
              <span className="text-[10px] text-[#9CA3AF] tracking-widest uppercase font-semibold text-center">Evaluation Panel Area</span>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#F59E0B] group-hover:text-white transition-colors">
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
            className="md:col-span-2 rounded-[24px] border border-white/[0.08] bg-[#0D0D11] p-8 flex flex-col justify-between hover:border-[#F59E0B]/30 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(245,158,11,0.04)] transition-all duration-300 group overflow-hidden relative"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/5 border border-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B] group-hover:bg-[#F59E0B]/10 transition-colors">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest">05 / ANALYTICS</span>
              </div>
              <h3 className="text-2xl font-bold text-[#FFFFFF] mb-3">Reports</h3>
              <p className="text-sm text-[#9CA3AF] font-light leading-relaxed max-w-[480px] mb-6">
                Generate and export detailed attendance, completion, sponsor, and impact reports in one click. Fully audit facilitator contributions and participant achievements.
              </p>
            </div>

            {/* Embedded Component Placeholder */}
            <div className="relative mt-2 p-4 rounded-xl border border-white/[0.06] bg-[#000000]/60 overflow-hidden flex flex-col gap-3 min-h-[110px] justify-center">
              {/* UI Component will be embedded here */}
              <div className="absolute inset-0 flex items-center justify-center bg-[#F59E0B]/[0.02]">
                <span className="text-[10px] text-[#9CA3AF] tracking-widest uppercase font-semibold">Charts & Export Panel Area</span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#F59E0B] group-hover:text-white transition-colors">
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
