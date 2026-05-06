"use client";

import { motion } from "framer-motion";
import { MessageSquare, Users, Send } from "lucide-react";

const MESSAGES_SESSION = [
  { sender: "Amara Nwosu", role: "Trainer", msg: "Great question — yes, we'll cover that in module 3. Hold that thought.", time: "10:24", self: false },
  { sender: "Chidi O.", role: "Participant", msg: "Thanks! Also, will recordings be available after the session?", time: "10:25", self: false },
  { sender: "You", role: "Coordinator", msg: "Yes — recordings are posted within 2hrs of session end automatically.", time: "10:26", self: true },
  { sender: "Sola A.", role: "Participant", msg: "Perfect, thank you!", time: "10:26", self: false },
];

const MESSAGES_BOOTCAMP = [
  { sender: "Bootcamp Bot", role: "System", msg: "📌 Week 6 Assessment opens today. Complete by Sunday midnight.", time: "09:00", self: false },
  { sender: "Ngozi E.", role: "Participant", msg: "Can we submit as a group or individually?", time: "09:12", self: false },
  { sender: "Amara Nwosu", role: "Trainer", msg: "Individual submissions. Group discussions are encouraged beforehand.", time: "09:15", self: false },
  { sender: "You", role: "Coordinator", msg: "Pinning the submission link above 👆", time: "09:16", self: true },
];

function ChatUI({ title, subtitle, messages, tag }: {
  title: string;
  subtitle: string;
  messages: typeof MESSAGES_SESSION;
  tag: string;
}) {
  return (
    <div className="bg-[#0D0D10] rounded-3xl border border-white/[0.07] overflow-hidden shadow-2xl">
      {/* Window bar */}
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06] bg-[#111114]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-2 text-[#52525B] text-[11px] font-mono">{tag}</span>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-emerald-400 text-[10px] font-bold">Live</span>
        </div>
      </div>

      {/* Chat header */}
      <div className="px-5 py-4 border-b border-white/[0.05] flex items-center justify-between">
        <div>
          <p className="text-white font-bold text-sm">{title}</p>
          <p className="text-[#52525B] text-[11px] mt-0.5">{subtitle}</p>
        </div>
        <div className="flex -space-x-2">
          {["#F5B942", "#60A5FA", "#A78BFA", "#34D399"].map((c, i) => (
            <div key={i} className="w-6 h-6 rounded-full border-2 border-[#0D0D10]" style={{ background: c }} />
          ))}
          <div className="w-6 h-6 rounded-full border-2 border-[#0D0D10] bg-white/10 flex items-center justify-center text-[8px] text-white font-bold">+12</div>
        </div>
      </div>

      {/* Messages */}
      <div className="px-5 py-4 space-y-4 min-h-[200px]">
        {messages.map((m, i) => (
          <div key={i} className={`flex gap-3 ${m.self ? "flex-row-reverse" : ""}`}>
            {!m.self && (
              <div className="w-7 h-7 rounded-full bg-[#F5B942]/20 flex items-center justify-center text-[9px] font-bold text-[#F5B942] shrink-0 mt-0.5">
                {m.sender.charAt(0)}
              </div>
            )}
            <div className={`max-w-[80%] ${m.self ? "items-end" : "items-start"} flex flex-col`}>
              {!m.self && (
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white text-[11px] font-bold">{m.sender}</span>
                  <span className="text-[#3F3F46] text-[9px] uppercase tracking-wider">{m.role}</span>
                </div>
              )}
              <div className={`px-3.5 py-2.5 rounded-2xl text-[12px] leading-relaxed ${
                m.self
                  ? "bg-[#F5B942] text-black font-medium rounded-tr-sm"
                  : "bg-white/[0.05] text-[#D4D4D8] rounded-tl-sm"
              }`}>
                {m.msg}
              </div>
              <span className="text-[#3F3F46] text-[9px] mt-1">{m.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="px-5 py-4 border-t border-white/[0.05]">
        <div className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5">
          <MessageSquare className="w-4 h-4 text-[#52525B]" />
          <span className="flex-1 text-[#3F3F46] text-[12px]">Type a message...</span>
          <Send className="w-4 h-4 text-[#F5B942] hover:scale-110 transition-transform cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export function CommunicationSection() {
  return (
    <section className="py-32 bg-[#0D0D10] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/[0.05]" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/[0.05]" />

      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(245,185,66,0.03)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#A1A1AA] text-[12px] font-bold tracking-[0.25em] uppercase mb-5"
          >
            Communication
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[38px] md:text-[50px] font-bold text-white tracking-tight leading-tight"
          >
            Keep every conversation{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B942] to-[#D4A017]">
              in context
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#71717A] text-[17px] mt-6 max-w-[560px] mx-auto font-light"
          >
            From live session chats to full bootcamp group channels — communication in OYEN GRID is structured, searchable, and tied to the right context.
          </motion.p>
        </div>

        {/* Two Chat UIs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-[#F5B942] opacity-[0.04] blur-[60px] rounded-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-4 h-4 text-[#F5B942]" />
                <span className="text-white font-bold text-[15px]">Session Chat</span>
                <span className="text-[#52525B] text-[12px]">— Live during delivery</span>
              </div>
              <ChatUI
                title="Module 2: Live Q&A Session"
                subtitle="Today · 48 participants · Session ongoing"
                messages={MESSAGES_SESSION}
                tag="Session Chat"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-[#60A5FA] opacity-[0.03] blur-[60px] rounded-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-4 h-4 text-[#60A5FA]" />
                <span className="text-white font-bold text-[15px]">Group Chat</span>
                <span className="text-[#52525B] text-[12px]">— Bootcamp cohort channel</span>
              </div>
              <ChatUI
                title="Full-Stack Bootcamp · Cohort 08"
                subtitle="General · 48 members · Always active"
                messages={MESSAGES_BOOTCAMP}
                tag="Bootcamp Channel"
              />
            </div>
          </motion.div>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {["Message threading", "Pinned announcements", "File sharing", "Search & history", "Participant tagging", "Trainer-only channels"].map((f) => (
            <span key={f} className="px-4 py-2 bg-white/[0.03] border border-white/[0.06] rounded-full text-[#A1A1AA] text-[12px] font-medium">
              {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
