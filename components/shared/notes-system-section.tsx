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
    <section className="py-32 bg-[#0D0D10] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/[0.05]" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute -inset-10 bg-[#F5B942] opacity-[0.05] blur-[100px] rounded-full" />
          <div className="relative">
            <NotesEditorUI />
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2"
        >
          <div className="inline-flex items-center gap-3 text-[#F5B942] text-[13px] font-bold tracking-[0.3em] uppercase mb-8">
            <PenLine className="w-4 h-4" />
            Note Management
          </div>
          <h2 className="text-[40px] md:text-[56px] font-bold text-white leading-[1.05] tracking-tight mb-8">
            Every thought, <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B942] via-white to-[#D4A017]">perfectly placed</span>
          </h2>
          <p className="text-[19px] text-[#A1A1AA] leading-relaxed mb-10 font-light">
            A structured notes system built for programme operations — not a generic notepad. Everything is contextual, searchable, and linked.
          </p>
          <div className="space-y-6">
            {NOTE_TYPES.map((n, i) => {
              const Icon = n.icon;
              return (
                <div key={n.title} className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-1" style={{ background: `${n.color}15`, border: `1px solid ${n.color}25` }}>
                    <Icon className="w-4 h-4" style={{ color: n.color }} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-[15px] mb-1">{n.title}</h4>
                    <p className="text-[#71717A] text-[13px] leading-relaxed font-light">{n.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
