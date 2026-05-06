"use client";

import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";

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

      <div className="px-5 py-4 border-t border-[#7C3AED]/10 bg-[#0A0A0F]">
        <div className="flex items-center gap-3 bg-[#7C3AED]/5 border border-[#7C3AED]/15 rounded-xl px-4 py-2.5">
          <Sparkles className="w-4 h-4 text-[#A78BFA]" />
          <span className="flex-1 text-[#3F3F46] text-[12px]">Ask OYEN AI anything...</span>
        </div>
      </div>
    </div>
  );
}

export function AILayerSection() {
  return (
    <section className="py-32 bg-[#0B0B0C] relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_50%,rgba(167,139,250,0.05)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 text-[#A78BFA] text-[13px] font-bold tracking-[0.3em] uppercase mb-8">
            <Sparkles className="w-4 h-4" />
            Artificial Intelligence
          </div>
          <h2 className="text-[40px] md:text-[56px] font-bold text-white leading-[1.05] tracking-tight mb-8">
            Intelligence that <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-white to-[#F5B942]">supercharges</span> trainers
          </h2>
          <p className="text-[19px] text-[#A1A1AA] leading-relaxed mb-10 font-light">
            OYEN GRID's AI layer isn't just a chatbot. It's a deeply integrated intelligence layer that helps trainers summarize sessions, track sentiment, and provide personalized support.
          </p>
          <ul className="space-y-4">
            {[
              "Automated session summarization",
              "Participant sentiment & engagement alerts",
              "AI-powered grading assistance",
              "Predictive success metrics"
            ].map((b, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#A78BFA]" />
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
          <div className="absolute -inset-10 bg-[#A78BFA] opacity-[0.08] blur-[100px] rounded-full" />
          <div className="relative">
            <AIAssistantUI />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
