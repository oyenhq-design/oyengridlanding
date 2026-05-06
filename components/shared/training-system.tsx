"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const FEATURES = [
  {
    title: "Structured Programme Flows",
    desc: "Define a clear sequence of steps — from enrollment to graduation — and ensure every cohort follows the same high-quality delivery path.",
  },
  {
    title: "Progress Tracking at Every Level",
    desc: "Monitor progress by programme, cohort, module, and individual participant. Spot blockers before they become failures.",
  },
  {
    title: "Milestone-Based Learning",
    desc: "Break complex programmes into achievable milestones. Participants and trainers always know what is next and what has been achieved.",
  },
];

function WorkflowDiagram() {
  const steps = [
    { label: "Enrollment", color: "#F5B942", desc: "Participant applies & is accepted" },
    { label: "Onboarding", color: "#60A5FA", desc: "Welcome, orientation & setup" },
    { label: "Module 1", color: "#A78BFA", desc: "Core foundations & theory" },
    { label: "Module 2", color: "#34D399", desc: "Applied skills & practice" },
    { label: "Assessment", color: "#F97316", desc: "Structured evaluation & feedback" },
    { label: "Graduation", color: "#F5B942", desc: "Certification & programme close" },
  ];

  return (
    <div className="w-full bg-[#0D0D10] rounded-3xl border border-white/[0.07] p-6 shadow-2xl">
      <div className="flex items-center justify-between mb-5">
        <p className="text-white font-bold text-sm">Programme Flow</p>
        <span className="px-2.5 py-1 bg-[#F5B942]/10 border border-[#F5B942]/20 text-[#F5B942] text-[10px] font-bold rounded-full">Full-Stack Bootcamp</span>
      </div>

      <div className="space-y-2">
        {steps.map((step, i) => (
          <div key={i} className="group flex items-start gap-3">
            {/* Connector */}
            <div className="flex flex-col items-center shrink-0">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-black shrink-0"
                style={{ background: step.color }}
              >
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className="w-[1px] h-4 bg-gradient-to-b from-white/10 to-transparent mt-1" />
              )}
            </div>

            <div className="flex-1 pb-2">
              <div className="flex items-center gap-2">
                <p className="text-white text-[12px] font-bold">{step.label}</p>
                {i < 2 && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                {i === 2 && <div className="w-2 h-2 rounded-full bg-[#F5B942] animate-pulse" />}
              </div>
              <p className="text-[#52525B] text-[11px] mt-0.5">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-5 pt-4 border-t border-white/[0.05]">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[#52525B] text-[10px] uppercase tracking-widest">Cohort Progress</p>
          <p className="text-[#F5B942] text-[11px] font-bold">42%</p>
        </div>
        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "42%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="h-full rounded-full bg-gradient-to-r from-[#F5B942] to-[#D4A017]"
          />
        </div>

        {/* Participant health summary */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          {[
            { label: "On Track", count: "38", color: "text-emerald-400", bg: "bg-emerald-500/10" },
            { label: "At Risk", count: "6", color: "text-[#F5B942]", bg: "bg-[#F5B942]/10" },
            { label: "Behind", count: "4", color: "text-red-400", bg: "bg-red-500/10" },
          ].map((s, i) => (
            <div key={i} className={`${s.bg} rounded-xl p-2.5 text-center`}>
              <p className={`text-lg font-bold ${s.color}`}>{s.count}</p>
              <p className="text-[#52525B] text-[9px] uppercase tracking-wider mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TrainingSystem() {
  return (
    <section className="py-32 bg-[#0B0B0C] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/[0.05]" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#A1A1AA] text-[12px] font-bold tracking-[0.25em] uppercase mb-5"
          >
            Training System
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[38px] md:text-[50px] font-bold text-white tracking-tight leading-tight max-w-[600px]"
          >
            Structured learning,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B942] to-[#D4A017]">
              built for scale
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Feature Cards */}
          <div className="space-y-6">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group flex gap-5 p-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl hover:border-[#F5B942]/20 hover:bg-[#F5B942]/[0.02] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F5B942]/10 border border-[#F5B942]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F5B942]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-[16px] mb-2 group-hover:text-[#F5B942] transition-colors">
                    {f.title}
                  </h4>
                  <p className="text-[#71717A] text-[14px] leading-relaxed font-light">{f.desc}</p>
                </div>
              </motion.div>
            ))}

            <motion.a
              href="/features"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 text-[#F5B942] text-[14px] font-bold hover:gap-3 transition-all group"
            >
              Explore training features <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          {/* Right: Workflow Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-[#F5B942] opacity-[0.05] blur-[60px] rounded-3xl" />
            <div className="relative">
              <WorkflowDiagram />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
