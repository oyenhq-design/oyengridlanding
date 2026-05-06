"use client";

import { motion } from "framer-motion";
import { MessageSquare, CheckCircle2, Send } from "lucide-react";

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
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06] bg-[#111114]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-2 text-[#52525B] text-[11px] font-mono">{tag}</span>
      </div>
      <div className="px-5 py-4 border-b border-white/[0.05] flex items-center justify-between bg-[#0F0F12]">
        <div>
          <p className="text-white font-bold text-sm">{title}</p>
          <p className="text-[#52525B] text-[11px] mt-0.5">{subtitle}</p>
        </div>
      </div>
      <div className="px-5 py-4 space-y-4 min-h-[200px]">
        {messages.map((m, i) => (
          <div key={i} className={`flex gap-3 ${m.self ? "flex-row-reverse" : ""}`}>
            <div className={`max-w-[80%] ${m.self ? "items-end" : "items-start"} flex flex-col`}>
              {!m.self && (
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white text-[11px] font-bold">{m.sender}</span>
                </div>
              )}
              <div className={`px-3.5 py-2.5 rounded-2xl text-[12px] leading-relaxed ${
                m.self
                  ? "bg-[#F5B942] text-black font-medium rounded-tr-sm"
                  : "bg-white/[0.05] text-[#D4D4D8] rounded-tl-sm"
              }`}>
                {m.msg}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CommunicationSection() {
  return (
    <section className="py-32 bg-[#0D0D10] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/[0.05]" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/[0.05]" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: Mockups (Alternating) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute -inset-10 bg-[#F5B942] opacity-[0.05] blur-[100px] rounded-full" />
          <div className="flex flex-col gap-6">
            <ChatUI
              title="Module 2: Live Q&A Session"
              subtitle="Today · 48 participants"
              messages={MESSAGES_SESSION}
              tag="Session Chat"
            />
            <div className="lg:translate-x-12 lg:-mt-10">
              <ChatUI
                title="Full-Stack Bootcamp · Cohort 08"
                subtitle="General Channel"
                messages={MESSAGES_BOOTCAMP}
                tag="Bootcamp Channel"
              />
            </div>
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
            <MessageSquare className="w-4 h-4" />
            Seamless Interaction
          </div>
          <h2 className="text-[40px] md:text-[56px] font-bold text-white leading-[1.05] tracking-tight mb-8">
            Communication <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B942] via-white to-[#D4A017]">built into the flow</span>
          </h2>
          <p className="text-[19px] text-[#A1A1AA] leading-relaxed mb-10 font-light">
            Don't force your participants into external apps. OYEN GRID provides integrated chat systems for every session and cohort.
          </p>
          <ul className="space-y-4">
            {[
              "Context-aware session chat",
              "Permanent cohort group channels",
              "Real-time participant presence",
              "Role-based moderation tools"
            ].map((b, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#F5B942]" />
                <span className="text-[#D4D4D8] text-[16px]">{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
