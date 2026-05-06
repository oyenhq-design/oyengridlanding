"use client";

import { motion } from "framer-motion";
import { Sparkles, FileText, Wrench, Send, Bot } from "lucide-react";

const AI_FEATURES = [
  {
    icon: Bot,
    title: "AI Chat Assistant",
    desc: "An intelligent assistant available to trainers and coordinators. Ask questions, draft communications, and get operational recommendations instantly.",
  },
  {
    icon: FileText,
    title: "Session Summaries",
    desc: "Automatic post-session summaries with key discussion points, action items, and participant highlights — generated immediately after each session ends.",
  },
  {
    icon: Wrench,
    title: "Trainer AI Tools",
    desc: "AI-powered tools that help trainers create assessments, generate feedback templates, and identify learning gaps across the cohort.",
  },
];

const AI_MESSAGES = [
  {
    role: "user",
    msg: "Summarise the key risks in Cohort 08 right now.",
  },
  {
    role: "ai",
    msg: "Sure. Based on current data:\n\n• 4 participants have <60% module completion (Modules 2–3)\n• Session attendance dropped 12% in Week 5 vs Week 4\n• 2 participants have not submitted any assessments this week\n\nRecommended action: Schedule 1:1 check-ins for the 4 at-risk learners this week.",
  },
  {
    role: "user",
    msg: "Draft a follow-up message I can send to the at-risk group.",
  },
  {
    role: "ai",
    msg: "Here's a draft:\n\n\"Hi [Name], we noticed you might be finding things challenging lately. We're here to support you — would you be open to a quick 15-min check-in this week? Just reply here or book a slot via the link below.\"\n\nWant me to personalise this for each participant?",
  },
];

function AIAssistantUI() {
  return (
    <div className="bg-[#0D0D10] rounded-3xl border border-[#7C3AED]/20 overflow-hidden shadow-[0_0_60px_rgba(124,58,237,0.08)] w-full">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[#7C3AED]/15 bg-[#0F0F14]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-2 text-[#7C3AED]/70 text-[11px] font-mono">OYEN AI Assistant</span>
        <div className="ml-auto flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-[#A78BFA]" />
          <span className="text-[#A78BFA] text-[10px] font-bold">AI Active</span>
        </div>
      </div>

      {/* Chat messages */}
      <div className="p-5 space-y-4 min-h-[280px]">
        {AI_MESSAGES.map((m, i) => (
          <div key={i} className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
            {m.role === "ai" && (
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#4F46E5] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_12px_rgba(124,58,237,0.4)]">
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </div>
            )}
            <div className={`max-w-[85%] ${m.role === "user" ? "items-end" : "items-start"} flex flex-col gap-1`}>
              <div className={`px-4 py-3 rounded-2xl text-[12px] leading-relaxed whitespace-pre-line ${
                m.role === "user"
                  ? "bg-[#F5B942]/15 border border-[#F5B942]/20 text-[#E5C97A] rounded-tr-sm"
                  : "bg-[#7C3AED]/10 border border-[#7C3AED]/15 text-[#D4D4D8] rounded-tl-sm"
              }`}>
                {m.msg}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="px-5 py-4 border-t border-[#7C3AED]/10">
        <div className="flex items-center gap-3 bg-[#7C3AED]/5 border border-[#7C3AED]/15 rounded-xl px-4 py-2.5">
          <Sparkles className="w-4 h-4 text-[#A78BFA]" />
          <span className="flex-1 text-[#3F3F46] text-[12px]">Ask OYEN AI anything about your programmes...</span>
          <Send className="w-4 h-4 text-[#7C3AED] cursor-pointer hover:scale-110 transition-transform" />
        </div>
      </div>
    </div>
  );
}

export function AILayerSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#0B0B0C]">
      {/* Visually distinct purple/blue glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#7C3AED] opacity-[0.06] blur-[160px] rounded-full -translate-y-1/4" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-[#4F46E5] opacity-[0.05] blur-[120px] rounded-full translate-y-1/4" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#7C3AED] opacity-[0.03] blur-[100px] rounded-full" />
      </div>

      {/* Top border with purple tint */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#7C3AED]/20 to-transparent" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span className="text-[#A78BFA] text-[12px] font-bold tracking-[0.15em] uppercase">AI Intelligence Layer</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[38px] md:text-[50px] font-bold text-white tracking-tight leading-tight mb-6"
          >
            Intelligence built into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] to-[#7C3AED]">
              every operation
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#71717A] text-[17px] max-w-[560px] mx-auto font-light"
          >
            OYEN GRID's AI layer doesn't replace your team — it amplifies them. Automate the mundane, surface the critical, and act faster.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Feature List */}
          <div className="space-y-6">
            {AI_FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="group flex gap-5 p-6 bg-[#7C3AED]/[0.04] border border-[#7C3AED]/15 rounded-2xl hover:border-[#7C3AED]/30 hover:bg-[#7C3AED]/[0.07] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/15 border border-[#7C3AED]/25 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-[#A78BFA]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-[16px] mb-2">{f.title}</h4>
                    <p className="text-[#71717A] text-[14px] leading-relaxed font-light">{f.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: AI UI Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-[#7C3AED] opacity-[0.08] blur-[60px] rounded-3xl" />
            <div className="relative">
              <AIAssistantUI />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
