"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MessageSquare,
  Sparkles,
  Activity,
  Bell,
  CheckCircle2,
  Shield,
  FileText,
  BarChart2,
} from "lucide-react";

const features = [
  {
    title: "AI Session Notes",
    desc: "Instant summaries and action items generated post-session.",
    icon: Sparkles,
    iconBg: "bg-purple-50",
    iconBorder: "border-purple-100",
    iconColor: "text-purple-500",
  },
  {
    title: "Team Chat",
    desc: "Centralize cohort communication directly inside your workspace.",
    icon: MessageSquare,
    iconBg: "bg-amber-50",
    iconBorder: "border-amber-100",
    iconColor: "text-amber-500",
  },
  {
    title: "Live Dashboard",
    desc: "Monitor cohorts, attendance, engagement, and activity in real-time.",
    icon: Activity,
    iconBg: "bg-blue-50",
    iconBorder: "border-blue-100",
    iconColor: "text-blue-500",
  },
  {
    title: "AI Alerts",
    desc: "Get notified before learner issues become problems.",
    icon: Bell,
    iconBg: "bg-emerald-50",
    iconBorder: "border-emerald-100",
    iconColor: "text-emerald-500",
  },
];

const avatarColors = ["bg-sky-400", "bg-violet-400", "bg-rose-400", "bg-amber-400", "bg-teal-400"];

export function HumanCoordination() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200 flex items-center min-h-[820px] lg:min-h-[880px]">

      {/* ── Office Background (bright, warm) ── */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/human-coordination-bg.png')" }}
      />
      <div className="absolute inset-0 bg-white/25 z-0 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-10 py-20 lg:py-24">
        <div className="grid lg:grid-cols-[460px_1fr] items-center gap-8 lg:gap-0">

          {/* ══════════════════════════════════
              LEFT PANEL
          ══════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col p-8 md:p-10 rounded-[26px] bg-white/90 backdrop-blur-[16px] border border-white/70 shadow-[0_24px_70px_rgba(15,23,42,0.09)] z-20"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C8931A]" />
              <span className="text-[10px] font-black tracking-[0.32em] text-[#C8931A] uppercase">
                HUMAN COORDINATION • INSIGHTS
              </span>
            </div>

            <h2 className="text-[30px] md:text-[42px] font-extrabold text-[#0F172A] leading-[1.1] tracking-tight mb-4">
              Give your trainers and coordinators
              <br />
              <span className="text-[#D4A017] italic font-serif font-normal">AI superpowers</span>
            </h2>

            <p className="text-[14px] leading-relaxed text-[#64748B] mb-8 max-w-[420px]">
              Automate the busywork. Surface what matters.
              <br />
              Focus on learner outcomes.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-7">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="group p-4 rounded-[18px] bg-white border border-zinc-100 shadow-[0_4px_18px_rgba(15,23,42,0.06)] hover:shadow-[0_10px_30px_rgba(15,23,42,0.10)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-9 h-9 rounded-[10px] border ${f.iconBorder} ${f.iconBg} flex items-center justify-center mb-3`}>
                    <f.icon className={`w-[18px] h-[18px] ${f.iconColor}`} />
                  </div>
                  <h4 className="text-[13px] font-bold text-[#0F172A] mb-1">{f.title}</h4>
                  <p className="text-[11px] text-[#64748B] leading-snug">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="inline-flex items-center gap-3 px-4 py-3 rounded-[14px] bg-white border border-zinc-100 shadow-sm w-full">
              <Shield className="w-5 h-5 text-[#D4A017] shrink-0" />
              <p className="text-[12px] leading-snug">
                <span className="font-bold text-[#0F172A]">Secure. Reliable. Built for scale.</span>{" "}
                <span className="text-[#64748B]">Your data, always protected.</span>
              </p>
            </div>
          </motion.div>

          {/* ══════════════════════════════════
              RIGHT SIDE — Tablet + Floating UI Cards
          ══════════════════════════════════ */}

          {/* Desktop version — fixed height so absolute positions are reliable */}
          <div className="hidden lg:block relative" style={{ height: "780px" }}>

            {/* Tablet image: positioned to bleed right and bottom */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "absolute",
                right: "-80px",
                bottom: "-40px",
                width: "740px",
                height: "720px",
              }}
            >
              <Image
                src="/human-coordination-mockup-new.jpg"
                alt="OYEN GRID Platform on tablet held by trainer"
                fill
                className="object-contain object-right-bottom"
                style={{ filter: "drop-shadow(0 40px 80px rgba(15,23,42,0.20))" }}
                priority
                unoptimized
              />
            </motion.div>

            {/* Card 1 — AI Session Notes (top-left of right col, white) */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: "absolute", top: "60px", left: "80px", width: "192px", zIndex: 30 }}
              className="bg-white rounded-2xl border border-zinc-100 shadow-[0_8px_36px_rgba(15,23,42,0.13)] p-4"
            >
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-7 h-7 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                </div>
                <span className="text-[12px] font-bold text-[#0F172A]">AI Session Notes</span>
              </div>
              <p className="text-[11px] text-[#64748B] leading-snug mb-2.5">Summary generated in 8.4s</p>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span className="text-[11px] font-semibold text-emerald-500">Completed</span>
              </div>
            </motion.div>

            {/* Card 2 — Live Dashboard (top-right, dark) */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: "absolute", top: "40px", right: "-50px", width: "200px", zIndex: 30 }}
              className="bg-[#0D1526] rounded-2xl border border-[#1E3050] shadow-[0_8px_36px_rgba(15,23,42,0.32)] p-4"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                  <BarChart2 className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <span className="text-[12px] font-bold text-white">Live Dashboard</span>
              </div>
              <div className="text-[32px] font-black text-white leading-none mb-0.5">92%</div>
              <div className="text-[10.5px] text-zinc-400 mb-3">Completion Rate</div>
              <div className="flex items-center mb-3">
                {avatarColors.map((c, i) => (
                  <div
                    key={i}
                    className={`w-6 h-6 rounded-full ${c} border-2 border-[#0D1526]`}
                    style={{ marginLeft: i === 0 ? 0 : -8 }}
                  />
                ))}
                <span className="text-[10px] text-zinc-400 ml-2">+24</span>
              </div>
              <span className="text-[11px] font-semibold text-blue-400">View dashboard →</span>
            </motion.div>

            {/* Card 3 — AI Alerts (bottom-left, dark + amber glow) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: "absolute", bottom: "110px", left: "55px", width: "178px", zIndex: 30 }}
              className="bg-[#0D1526] rounded-2xl border border-[#C8931A]/40 shadow-[0_8px_36px_rgba(15,23,42,0.32),0_0_24px_rgba(200,147,26,0.12)] p-4"
            >
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                  <Bell className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <span className="text-[12px] font-bold text-white">AI Alerts</span>
              </div>
              <div className="text-[42px] font-black text-white leading-none mb-0.5">3</div>
              <div className="text-[10.5px] text-zinc-400 mb-3">At-risk learners</div>
              <span className="text-[11px] font-semibold text-amber-400">View alerts →</span>
            </motion.div>

            {/* Card 4 — Reports (bottom-right, dark + teal glow) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.78, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: "absolute", bottom: "90px", right: "-45px", width: "190px", zIndex: 30 }}
              className="bg-[#0D1526] rounded-2xl border border-teal-500/40 shadow-[0_8px_36px_rgba(15,23,42,0.32),0_0_24px_rgba(20,184,166,0.12)] p-4"
            >
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-7 h-7 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center">
                  <FileText className="w-3.5 h-3.5 text-teal-400" />
                </div>
                <span className="text-[12px] font-bold text-white">Reports</span>
              </div>
              <p className="text-[11px] text-zinc-400 leading-snug mb-3">
                Sponsor report generated and ready for download.
              </p>
              <span className="text-[11px] font-semibold text-teal-400">Download PDF →</span>
            </motion.div>

          </div>

          {/* Mobile fallback */}
          <div className="block lg:hidden relative w-full" style={{ height: "420px" }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src="/human-coordination-mockup-new.jpg"
                alt="OYEN GRID Platform on tablet"
                fill
                className="object-contain"
                unoptimized
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
