"use client";

import { motion } from "framer-motion";
import { 
  Layers, Users, Activity, Library, FileText, BarChart3, 
  Calendar, CheckCircle2, ChevronRight, Download, Play, FileUp
} from "lucide-react";
import Link from "next/link";

export function OperationalInfrastructure() {
  return (
    <section className="py-20 md:py-28 bg-[#05070C] relative overflow-hidden border-b border-white/5">
      {/* Background radial highlight */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[radial-gradient(circle,rgba(232,184,74,0.02),transparent_70%)] pointer-events-none blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 0.5px, transparent 0.5px)",
            backgroundSize: "48px 48px"
          }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84A]" />
            <span className="text-[10px] font-black tracking-widest text-[#E8B84A] uppercase">
              Platform Capabilities
            </span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight max-w-[620px]"
            >
              Every tool you need to{" "}
              <span className="text-[#E8B84A] italic font-serif font-normal">
                deliver training.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs md:text-sm text-neutral-400 max-w-[280px] font-light leading-relaxed"
            >
              Replace multiple disconnected systems with a single comprehensive, high-performance platform.
            </motion.p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 auto-rows-[minmax(180px,_auto)]">

          {/* 1. Large Card: Program Management (lg:col-span-5, lg:row-span-2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 lg:row-span-2 rounded-[24px] border border-white/5 bg-[#080B12]/80 backdrop-blur-md p-6 flex flex-col justify-between hover:border-[#E8B84A]/30 hover:shadow-[0_20px_50px_rgba(232,184,74,0.06)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden relative"
          >
            {/* Soft background highlight */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#E8B84A]/[0.02] rounded-full blur-2xl group-hover:bg-[#E8B84A]/[0.05] transition-all duration-300" />
            
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#E8B84A]/5 border border-[#E8B84A]/20 flex items-center justify-center text-[#E8B84A] mb-5 group-hover:bg-[#E8B84A]/10 transition-colors">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Program Management</h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-[340px] mb-6">
                Manage programs, cohorts, schedules, facilitators, and delivery workflows in one place.
              </p>
            </div>

            {/* Dashboard Visualizer */}
            <div className="relative mt-2 p-4 rounded-xl border border-white/5 bg-black/40 overflow-hidden flex flex-col gap-3">
              {/* Cohort Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#E8B84A]" />
                  <span className="text-[10px] font-bold text-white tracking-wide uppercase">Cohort Alpha-2026</span>
                </div>
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#E8B84A]/10 border border-[#E8B84A]/25 text-[#E8B84A] font-bold">Active</span>
              </div>
              {/* Facilitators list */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-neutral-400">Curriculum progress</span>
                  <span className="text-[#E8B84A] font-bold">78%</span>
                </div>
                {/* Progress bar */}
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#E8B84A] to-[#f4d17a] w-[78%] rounded-full" />
                </div>
              </div>
              {/* Active facilitators badge grid */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[9px] px-2 py-0.5 rounded bg-white/5 text-neutral-300 font-light">4 Cohorts</span>
                <span className="text-[9px] px-2 py-0.5 rounded bg-white/5 text-neutral-300 font-light">12 Facilitators</span>
                <span className="text-[9px] px-2 py-0.5 rounded bg-white/5 text-neutral-300 font-light">180 Learners</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#E8B84A] group-hover:text-white transition-colors">
              <span>Configure Workflow</span>
              <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </motion.div>

          {/* 2. Medium Card: Learner Tracking (lg:col-span-4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 rounded-[24px] border border-white/5 bg-[#080B12]/80 backdrop-blur-md p-6 flex flex-col justify-between hover:border-[#E8B84A]/30 hover:shadow-[0_20px_50px_rgba(232,184,74,0.06)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden relative"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#E8B84A]/5 border border-[#E8B84A]/20 flex items-center justify-center text-[#E8B84A] mb-5 group-hover:bg-[#E8B84A]/10 transition-colors">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Learner Tracking</h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed mb-4">
                Monitor attendance, engagement, progress, and completion indicators in real-time.
              </p>
            </div>

            {/* Tracking Visual */}
            <div className="p-3.5 rounded-xl border border-white/5 bg-black/40 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-wide">Completion Rate</span>
                <div className="text-lg font-extrabold text-white">92.4%</div>
              </div>
              <div className="flex gap-1 items-end h-8">
                <div className="w-1.5 h-3 bg-[#E8B84A]/30 rounded-sm" />
                <div className="w-1.5 h-5 bg-[#E8B84A]/40 rounded-sm" />
                <div className="w-1.5 h-4 bg-[#E8B84A]/50 rounded-sm" />
                <div className="w-1.5 h-7 bg-[#E8B84A] rounded-sm" />
                <div className="w-1.5 h-8 bg-[#E8B84A] rounded-sm" />
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#E8B84A] group-hover:text-white transition-colors">
              <span>Track Students</span>
              <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </motion.div>

          {/* 3. Medium Card: Auto Attendance (lg:col-span-3) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-3 rounded-[24px] border border-white/5 bg-[#080B12]/80 backdrop-blur-md p-6 flex flex-col justify-between hover:border-[#E8B84A]/30 hover:shadow-[0_20px_50px_rgba(232,184,74,0.06)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden relative"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#E8B84A]/5 border border-[#E8B84A]/20 flex items-center justify-center text-[#E8B84A] mb-5 group-hover:bg-[#E8B84A]/10 transition-colors">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Auto Attendance</h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed mb-4">
                Automatically capture attendance and session participation data seamlessly.
              </p>
            </div>

            {/* Attendance Status List */}
            <div className="space-y-2 p-3 rounded-xl border border-white/5 bg-black/40">
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-neutral-300 font-medium">L. Taylor</span>
                <span className="text-emerald-400 flex items-center gap-1"><CheckCircle2 className="w-2.5 h-2.5" /> Present</span>
              </div>
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-neutral-300 font-medium">A. Marcus</span>
                <span className="text-[#E8B84A] flex items-center gap-1"><CheckCircle2 className="w-2.5 h-2.5" /> Late (5m)</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#E8B84A] group-hover:text-white transition-colors">
              <span>View Logs</span>
              <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </motion.div>

          {/* 4. Small Card: Assessments (lg:col-span-3) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 rounded-[24px] border border-white/5 bg-[#080B12]/80 backdrop-blur-md p-6 flex flex-col justify-between hover:border-[#E8B84A]/30 hover:shadow-[0_20px_50px_rgba(232,184,74,0.06)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden relative"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#E8B84A]/5 border border-[#E8B84A]/20 flex items-center justify-center text-[#E8B84A] mb-5 group-hover:bg-[#E8B84A]/10 transition-colors">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Assessments</h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed mb-4">
                Create quizzes, evaluations, assignments, and automated grading workflows.
              </p>
            </div>

            <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#E8B84A] group-hover:text-white transition-colors">
              <span>Manage Quizzes</span>
              <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </motion.div>

          {/* 5. Small Card: Reports (lg:col-span-2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-2 rounded-[24px] border border-white/5 bg-[#080B12]/80 backdrop-blur-md p-6 flex flex-col justify-between hover:border-[#E8B84A]/30 hover:shadow-[0_20px_50px_rgba(232,184,74,0.06)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden relative"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#E8B84A]/5 border border-[#E8B84A]/20 flex items-center justify-center text-[#E8B84A] mb-5 group-hover:bg-[#E8B84A]/10 transition-colors">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Reports</h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed mb-4">
                Export attendance, grades, and completion rates.
              </p>
            </div>

            <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#E8B84A] group-hover:text-white transition-colors">
              <span>Export</span>
              <Download className="w-3.5 h-3.5" />
            </div>
          </motion.div>

          {/* 6. Small Card: Resources (lg:col-span-2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2 rounded-[24px] border border-white/5 bg-[#080B12]/80 backdrop-blur-md p-6 flex flex-col justify-between hover:border-[#E8B84A]/30 hover:shadow-[0_20px_50px_rgba(232,184,74,0.06)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden relative"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#E8B84A]/5 border border-[#E8B84A]/20 flex items-center justify-center text-[#E8B84A] mb-5 group-hover:bg-[#E8B84A]/10 transition-colors">
                <Library className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Resources</h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed mb-4">
                Share slides, videos, docs, and learning files.
              </p>
            </div>

            <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#E8B84A] group-hover:text-white transition-colors">
              <span>Upload Files</span>
              <FileUp className="w-3.5 h-3.5" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
