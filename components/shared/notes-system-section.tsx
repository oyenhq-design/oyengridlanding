"use client";

import { motion } from "framer-motion";
import { Lock, BookOpen, User, PenLine, Tag } from "lucide-react";

const NOTE_TYPES = [
  {
    icon: Lock,
    title: "Private Notes",
    desc: "Personal notes only visible to you. Think, plan, and reflect without anyone else seeing your working space.",
    color: "#F5B942",
  },
  {
    icon: BookOpen,
    title: "Session Notes",
    desc: "Notes linked directly to a session. Auto-tagged with session date, trainer, and module for effortless retrieval.",
    color: "#60A5FA",
  },
  {
    icon: User,
    title: "Participant Notes",
    desc: "Notes attached to individual participants. Track patterns, concerns, and milestones across the full programme.",
    color: "#A78BFA",
  },
];

function NotesEditorUI() {
  return (
    <div className="bg-[#0D0D10] rounded-3xl border border-white/[0.07] overflow-hidden shadow-2xl w-full">
      {/* Window bar */}
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06] bg-[#111114]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-2 text-[#52525B] text-[11px] font-mono">Notes · Cohort 08</span>
      </div>

      <div className="flex h-[380px]">
        {/* Sidebar */}
        <div className="w-[180px] border-r border-white/[0.05] p-3 flex flex-col gap-1 shrink-0">
          <p className="text-[#3F3F46] text-[9px] uppercase tracking-widest px-2 py-1">My Notes</p>
          {[
            { label: "Week 6 Reflections", active: true, type: "private", color: "#F5B942" },
            { label: "Session 12 Notes", active: false, type: "session", color: "#60A5FA" },
            { label: "Ngozi E. – Check-in", active: false, type: "participant", color: "#A78BFA" },
            { label: "Module 3 prep", active: false, type: "private", color: "#F5B942" },
            { label: "Session 11 Notes", active: false, type: "session", color: "#60A5FA" },
          ].map((note, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 px-2.5 py-2 rounded-lg cursor-pointer transition-all ${
                note.active ? "bg-white/[0.06]" : "hover:bg-white/[0.03]"
              }`}
            >
              <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: note.color }} />
              <span className={`text-[11px] truncate ${note.active ? "text-white font-medium" : "text-[#52525B]"}`}>
                {note.label}
              </span>
            </div>
          ))}
        </div>

        {/* Editor */}
        <div className="flex-1 p-5 flex flex-col">
          {/* Note meta */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#F5B942]/10 border border-[#F5B942]/20 rounded-full">
              <Lock className="w-2.5 h-2.5 text-[#F5B942]" />
              <span className="text-[#F5B942] text-[9px] font-bold uppercase tracking-wider">Private</span>
            </div>
            <span className="text-[#3F3F46] text-[10px]">May 6, 2026 · 09:42am</span>
          </div>

          <h3 className="text-white font-bold text-[18px] mb-4">Week 6 Reflections</h3>

          <div className="text-[#71717A] text-[12px] leading-relaxed space-y-2 flex-1">
            <p>The cohort is performing well overall, but I'm noticing fatigue in the week 5 submissions. The content volume might be too heavy.</p>
            <p className="mt-3"><span className="text-[#F5B942]">Action:</span> Consider splitting Module 3 into two separate weeks and introducing a "catch-up" session before the Week 7 assessment.</p>
            <p className="mt-3"><span className="text-white font-medium">Participants to watch:</span></p>
            <ul className="list-none space-y-1 ml-2">
              {["Chidi O. — strong, may be bored", "Ngozi E. — struggling, needs support", "Emeka B. — missed last 2 sessions"].map((p, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#52525B]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="flex items-center gap-2 pt-3 border-t border-white/[0.04] mt-4">
            <Tag className="w-3 h-3 text-[#3F3F46]" />
            {["cohort-08", "week-6", "reflection"].map((tag) => (
              <span key={tag} className="px-2 py-0.5 bg-white/[0.04] rounded-full text-[#52525B] text-[9px] font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div className="px-5 py-2.5 border-t border-white/[0.04] bg-[#0A0A0D] flex items-center justify-between">
        <span className="text-[#3F3F46] text-[9px]">Auto-saved · 09:44am</span>
        <div className="flex items-center gap-2">
          <PenLine className="w-3 h-3 text-[#3F3F46]" />
          <span className="text-[#3F3F46] text-[9px]">Markdown supported</span>
        </div>
      </div>
    </div>
  );
}

export function NotesSystemSection() {
  return (
    <section className="py-32 bg-[#0B0B0C] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/[0.05]" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#A1A1AA] text-[12px] font-bold tracking-[0.25em] uppercase mb-5"
          >
            Notes System
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[38px] md:text-[50px] font-bold text-white tracking-tight leading-tight mb-6"
          >
            Every thought,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B942] to-[#D4A017]">
              perfectly placed
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#71717A] text-[17px] max-w-[540px] mx-auto font-light"
          >
            A structured notes system built for programme operations — not a generic notepad. Everything is contextual, searchable, and linked.
          </motion.p>
        </div>

        {/* Note type cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {NOTE_TYPES.map((n, i) => {
            const Icon = n.icon;
            return (
              <motion.div
                key={n.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl hover:border-white/10 transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 border"
                  style={{
                    background: `${n.color}15`,
                    borderColor: `${n.color}25`,
                  }}
                >
                  <Icon className="w-4 h-4" style={{ color: n.color }} />
                </div>
                <h4 className="text-white font-bold text-[16px] mb-3">{n.title}</h4>
                <p className="text-[#71717A] text-[13px] leading-relaxed font-light">{n.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Notes editor mockup */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-[#F5B942] opacity-[0.04] blur-[80px] rounded-3xl" />
          <div className="relative">
            <NotesEditorUI />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
