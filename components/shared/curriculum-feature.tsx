"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Layout, BookOpen, Layers } from "lucide-react";

function CurriculumMockup() {
  return (
    <div className="w-full h-full bg-[#0D0D10] rounded-2xl border border-white/[0.07] overflow-hidden font-mono text-xs shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#111114]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-[#52525B] text-[11px]">Curriculum Designer</span>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-white font-bold text-sm">Product Mgmt 101</h4>
          <span className="px-2 py-1 rounded bg-[#F5B942]/10 text-[#F5B942] text-[9px] font-bold">DRAFT</span>
        </div>
        <div className="space-y-3">
          {[
            { label: "Introduction to PM", type: "Lesson", duration: "15m" },
            { label: "Market Research Basics", type: "Workshop", duration: "1h" },
            { label: "User Interview Guide", type: "Resource", duration: "File" },
            { label: "Week 1 Assessment", type: "Quiz", duration: "10q" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-white/[0.03] border border-white/[0.05] rounded-xl hover:border-white/10 transition-colors cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#F5B942]/10 transition-colors">
                  <BookOpen className="w-4 h-4 text-[#71717A] group-hover:text-[#F5B942]" />
                </div>
                <div>
                  <p className="text-white font-medium text-[11px]">{item.label}</p>
                  <p className="text-[#52525B] text-[9px] uppercase tracking-wider">{item.type}</p>
                </div>
              </div>
              <span className="text-[#3F3F46] text-[10px]">{item.duration}</span>
            </div>
          ))}
        </div>
        <button className="w-full mt-6 py-2.5 border border-dashed border-white/10 rounded-xl text-[#52525B] text-[10px] hover:border-white/20 hover:text-white transition-all">
          + Add Module
        </button>
      </div>
    </div>
  );
}

export function CurriculumFeature() {
  return (
    <section className="py-32 bg-[#0B0B0C] relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 text-[#F5B942] text-[13px] font-bold tracking-[0.3em] uppercase mb-8">
            <Layout className="w-4 h-4" />
            Core Framework
          </div>
          <h2 className="text-[40px] md:text-[56px] font-bold text-white leading-[1.05] tracking-tight mb-8">
            Build structured <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B942] via-white to-[#D4A017]">curricula</span> with ease
          </h2>
          <p className="text-[19px] text-[#A1A1AA] leading-relaxed mb-10 font-light">
            Design multi-layered learning journeys. OYEN GRID provides the absolute operational control required to scale complex programmes with precision.
          </p>
          <ul className="space-y-4 mb-10">
            {[
              "Modular curriculum builder",
              "Pre-requisite logic enforcement",
              "Content & resource management",
              "Version control for programmes"
            ].map((b, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#F5B942]" />
                <span className="text-[#D4D4D8] text-[16px]">{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right: Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-[#F5B942] opacity-[0.08] blur-[80px] rounded-full" />
          <div className="relative aspect-[4/3]">
            <CurriculumMockup />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
