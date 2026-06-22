"use client";

import { motion } from "framer-motion";
import { 
  Layers, Users, Activity, FileText, BarChart3, 
  ChevronRight, ArrowUpRight
} from "lucide-react";
import Link from "next/link";

export function OperationalInfrastructure() {
  return (
    <section className="py-24 md:py-32 bg-[#F3EFE5] relative overflow-hidden border-b border-[#0A0D1F]/5">
      {/* Subtle section glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#D4A017]/[0.05] blur-[130px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-[#D4A017]/[0.02] blur-[120px] rounded-full" />
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
            <span className="text-[10px] font-black tracking-widest text-[#D4A017] uppercase">
              Platform Capabilities
            </span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-[#0A0D1F] leading-[1.1] tracking-tight max-w-[620px]"
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
              className="text-xs md:text-sm text-[#55534E] max-w-[280px] font-normal leading-relaxed"
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
            className="md:col-span-2 rounded-[24px] border border-[#0A0D1F]/10 bg-white p-8 flex flex-col justify-between hover:border-[#D4A017]/30 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(10,13,31,0.06)] transition-all duration-300 group overflow-hidden relative"
          >
            {/* Full-card background: timeline infographic */}
            <img
              src="/timeline-infographic.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-90 pointer-events-none select-none"
            />
            {/* Blended overlay — strong top for text, clears at bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-transparent pointer-events-none" />

            {/* Card content — sits above background */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#D4A017]/5 border border-[#D4A017]/20 flex items-center justify-center text-[#D4A017] group-hover:bg-[#D4A017]/10 transition-colors">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-[#55534E] uppercase tracking-widest">01 / FEATURE</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0A0D1F] mb-3">Program Management</h3>
              <p className="text-sm text-[#55534E] font-normal leading-relaxed max-w-[480px] mb-6">
                Manage programs, cohorts, schedules, facilitators, and delivery workflows. Build curriculums, set dates, and coordinate facilitators with high-efficiency cohorts.
              </p>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-[#0A0D1F]/5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#D4A017] group-hover:text-[#B38012] transition-colors">
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
            className="md:col-span-1 rounded-[24px] border border-[#0A0D1F]/10 bg-white p-8 flex flex-col justify-between hover:border-[#D4A017]/40 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(10,13,31,0.06)] transition-all duration-300 group overflow-hidden relative"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#D4A017]/5 border border-[#D4A017]/20 flex items-center justify-center text-[#D4A017] group-hover:bg-[#D4A017]/10 transition-colors">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-[#55534E] uppercase tracking-widest">02 / TRACKING</span>
              </div>
              <h3 className="text-xl font-bold text-[#0A0D1F] mb-3">Learner Tracking</h3>
              <p className="text-sm text-[#55534E] font-normal leading-relaxed mb-6">
                Monitor attendance, engagement, progress, and completion rate of all participants.
              </p>
            </div>

            {/* Embedded Component Placeholder */}
            <div className="relative p-4 rounded-xl border border-[#0A0D1F]/5 bg-[#F3EFE5] min-h-[90px] flex items-center justify-center">
              <span className="text-[10px] text-[#55534E] tracking-widest uppercase font-semibold text-center">Analytics & Avatars Area</span>
            </div>

            <div className="mt-8 pt-4 border-t border-[#0A0D1F]/5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#D4A017] group-hover:text-[#B38012] transition-colors">
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
            className="md:col-span-1 rounded-[24px] border border-white/10 bg-[#0C1029] p-8 flex flex-col justify-between hover:border-[#D4A017]/40 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-300 group overflow-hidden relative"
          >
            {/* Full-card background: attendance diagram */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/attendance-diagram.jpg"
              alt="Auto Attendance Diagram"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-100 pointer-events-none select-none group-hover:scale-[1.03] transition-transform duration-700"
            />
            {/* Blended overlay — dark gradient to protect white text */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0C1029]/85 via-[#0C1029]/30 to-transparent pointer-events-none z-10" />

            <div className="relative z-20">
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#D4A017]/15 border border-[#D4A017]/30 flex items-center justify-center text-[#D4A017] group-hover:bg-[#D4A017]/25 transition-colors">
                  <Activity className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-extrabold text-white/80 uppercase tracking-widest">03 / AUTOMATION</span>
              </div>
              <h3 className="text-xl font-extrabold text-white mb-3">Auto Attendance</h3>
              <p className="text-sm text-white font-bold leading-relaxed mb-6">
                Automatically capture attendance and participation data directly from integration logs.
              </p>
            </div>

            {/* Transparent spacer to maintain card height and reveal background image */}
            <div className="relative min-h-[90px] bg-transparent pointer-events-none z-20" />

            <div className="relative z-20 mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#D4A017] group-hover:text-[#F3C043] transition-colors">
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
            className="md:col-span-1 rounded-[24px] border border-[#0A0D1F]/10 bg-white p-8 flex flex-col justify-between hover:border-[#D4A017]/30 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(10,13,31,0.06)] transition-all duration-300 group overflow-hidden relative"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#D4A017]/5 border border-[#D4A017]/20 flex items-center justify-center text-[#D4A017] group-hover:bg-[#D4A017]/10 transition-colors">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-[#55534E] uppercase tracking-widest">04 / GRADES</span>
              </div>
              <h3 className="text-xl font-bold text-[#0A0D1F] mb-3">Assessments</h3>
              <p className="text-sm text-[#55534E] font-normal leading-relaxed mb-6">
                Create quizzes, assignments, evaluations, and configure automatic grading workflows.
              </p>
            </div>

            {/* Embedded Component Placeholder */}
            <div className="relative p-4 rounded-xl border border-[#0A0D1F]/5 bg-[#F3EFE5] min-h-[90px] flex items-center justify-center">
              <span className="text-[10px] text-[#55534E] tracking-widest uppercase font-semibold text-center">Evaluation Panel Area</span>
            </div>

            <div className="mt-8 pt-4 border-t border-[#0A0D1F]/5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#D4A017] group-hover:text-[#B38012] transition-colors">
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
            className="md:col-span-2 rounded-[24px] border border-[#0A0D1F]/10 bg-white p-8 flex flex-col justify-between hover:border-[#D4A017]/40 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(10,13,31,0.06)] transition-all duration-300 group overflow-hidden relative"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#D4A017]/5 border border-[#D4A017]/20 flex items-center justify-center text-[#D4A017] group-hover:bg-[#D4A017]/10 transition-colors">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-[#55534E] uppercase tracking-widest">05 / ANALYTICS</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0A0D1F] mb-3">Reports</h3>
              <p className="text-sm text-[#55534E] font-normal leading-relaxed max-w-[480px] mb-6">
                Generate and export detailed attendance, completion, sponsor, and impact reports in one click. Fully audit facilitator contributions and participant achievements.
              </p>
            </div>

            {/* Embedded Component Placeholder */}
            <div className="relative mt-2 p-4 rounded-xl border border-[#0A0D1F]/5 bg-[#F3EFE5] overflow-hidden flex flex-col gap-3 min-h-[110px] justify-center">
              {/* UI Component will be embedded here */}
              <div className="absolute inset-0 flex items-center justify-center bg-[#D4A017]/[0.01]">
                <span className="text-[10px] text-[#55534E] tracking-widest uppercase font-semibold">Charts & Export Panel Area</span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#0A0D1F]/5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#D4A017] group-hover:text-[#B38012] transition-colors">
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
