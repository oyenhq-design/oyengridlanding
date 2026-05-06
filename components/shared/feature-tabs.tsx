"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, BarChart3, Zap, Users2,
  CheckCircle2, ChevronRight
} from "lucide-react";

const TABS = [
  {
    id: "program",
    label: "Program Management",
    icon: LayoutDashboard,
    headline: "Full control over every programme you run.",
    desc: "From intake to completion, manage every aspect of your programme lifecycle with precision. OYEN GRID gives you the operational layer every serious programme needs.",
    bullets: [
      "Create structured cohorts with defined timelines and milestones",
      "Set up module-by-module curriculum with content and assessments",
      "Track participant progress and flag at-risk learners early",
      "Manage multiple programmes simultaneously without confusion",
    ],
    visual: <ProgramMgmtUI />,
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
    headline: "Real-time insights into every layer of delivery.",
    desc: "Stop guessing how your programmes are performing. OYEN GRID surfaces the metrics that matter — completion rates, engagement scores, session attendance and more.",
    bullets: [
      "Live dashboards for programme-level and participant-level metrics",
      "Cohort comparison reports to spot performance trends",
      "Exportable data for stakeholders and leadership reviews",
      "Automated alerts when key indicators fall below thresholds",
    ],
    visual: <AnalyticsUI />,
  },
  {
    id: "automation",
    label: "Automation",
    icon: Zap,
    headline: "Scale without scaling your team.",
    desc: "Remove the manual overhead from your operations. Set up powerful automation rules that handle reminders, follow-ups, and participant communications automatically.",
    bullets: [
      "Automated onboarding emails and welcome sequences",
      "Rule-based session reminders and follow-up nudges",
      "Trigger-based workflows from participant actions",
      "Batch operations across large cohorts in seconds",
    ],
    visual: <AutomationUI />,
  },
  {
    id: "collaboration",
    label: "Collaboration",
    icon: Users2,
    headline: "One platform, your entire team.",
    desc: "Bring trainers, coordinators, and administrators into a single workspace. Assign roles, delegate tasks, and keep everyone aligned on programme delivery.",
    bullets: [
      "Role-based access for trainers, coordinators, and admins",
      "Shared session notes and participant annotations",
      "Internal team messaging without leaving the platform",
      "Task assignment and accountability tracking across the team",
    ],
    visual: <CollaborationUI />,
  },
];

// ──────────────────────────────────────────────────────────
//  Inline UI Mockups
// ──────────────────────────────────────────────────────────

function ProgramMgmtUI() {
  return (
    <div className="w-full h-full bg-[#0D0D10] rounded-2xl border border-white/[0.07] overflow-hidden font-mono text-xs shadow-2xl">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#111114]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-[#52525B] text-[11px]">Programme Manager — Cohort 08</span>
      </div>
      {/* Header */}
      <div className="px-5 py-4 border-b border-white/[0.05] flex items-center justify-between">
        <div>
          <p className="text-white font-bold text-sm">Full-Stack Dev Bootcamp</p>
          <p className="text-[#52525B] text-[11px] mt-0.5">Cohort 08 · 48 Participants · 12 Weeks</p>
        </div>
        <span className="px-3 py-1 rounded-full bg-[#F5B942]/10 border border-[#F5B942]/20 text-[#F5B942] text-[10px] font-bold">ACTIVE</span>
      </div>
      {/* Modules */}
      <div className="px-5 py-3">
        <p className="text-[#52525B] text-[10px] font-bold uppercase tracking-widest mb-3">Curriculum</p>
        {[
          { name: "Onboarding & Setup", progress: 100, status: "done" },
          { name: "Module 1: Foundations", progress: 100, status: "done" },
          { name: "Module 2: Core Concepts", progress: 75, status: "active" },
          { name: "Module 3: Advanced Topics", progress: 0, status: "upcoming" },
          { name: "Final Assessment", progress: 0, status: "upcoming" },
        ].map((m, i) => (
          <div key={i} className="flex items-center gap-3 py-2.5 border-b border-white/[0.03] last:border-0">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${m.status === "done" ? "bg-emerald-500/20" : m.status === "active" ? "bg-[#F5B942]/15" : "bg-white/5"}`}>
              {m.status === "done" && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
              {m.status === "active" && <div className="w-2 h-2 rounded-full bg-[#F5B942] animate-pulse" />}
              {m.status === "upcoming" && <div className="w-2 h-2 rounded-full bg-white/20" />}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-[11px] font-medium truncate">{m.name}</p>
              <div className="mt-1 h-1 bg-white/5 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${m.status === "done" ? "bg-emerald-500" : "bg-[#F5B942]"}`}
                  style={{ width: `${m.progress}%` }}
                />
              </div>
            </div>
            <span className={`text-[10px] font-bold shrink-0 ${m.status === "done" ? "text-emerald-400" : m.status === "active" ? "text-[#F5B942]" : "text-[#3F3F46]"}`}>
              {m.progress}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsUI() {
  return (
    <div className="w-full h-full bg-[#0D0D10] rounded-2xl border border-white/[0.07] overflow-hidden font-mono text-xs shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#111114]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-[#52525B] text-[11px]">Analytics Dashboard</span>
      </div>
      {/* Stat Cards */}
      <div className="grid grid-cols-3 gap-3 p-4">
        {[
          { label: "Completion Rate", value: "87%", delta: "+12%", color: "text-emerald-400" },
          { label: "Avg Attendance", value: "94%", delta: "+5%", color: "text-emerald-400" },
          { label: "At Risk", value: "3", delta: "-2", color: "text-[#F5B942]" },
        ].map((stat, i) => (
          <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3">
            <p className="text-[#52525B] text-[9px] uppercase tracking-wider">{stat.label}</p>
            <p className="text-white font-bold text-xl mt-1">{stat.value}</p>
            <p className={`text-[10px] font-bold mt-1 ${stat.color}`}>{stat.delta} vs last cohort</p>
          </div>
        ))}
      </div>
      {/* Bar Chart */}
      <div className="px-4 pb-4">
        <p className="text-[#52525B] text-[9px] uppercase tracking-widest mb-3">Weekly Engagement</p>
        <div className="flex items-end gap-2 h-20">
          {[65, 80, 72, 90, 85, 92, 88, 75, 95, 87, 91, 84].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t-sm"
                style={{
                  height: `${h}%`,
                  background: i === 11 ? "#F5B942" : `rgba(245,185,66,${0.15 + (i / 11) * 0.25})`,
                }}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[#3F3F46] text-[9px]">W1</span>
          <span className="text-[#3F3F46] text-[9px]">W12</span>
        </div>
      </div>
    </div>
  );
}

function AutomationUI() {
  return (
    <div className="w-full h-full bg-[#0D0D10] rounded-2xl border border-white/[0.07] overflow-hidden font-mono text-xs shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#111114]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-[#52525B] text-[11px]">Automation Rules</span>
      </div>
      <div className="p-4 space-y-3">
        {[
          { trigger: "Participant Enrolled", action: "Send Welcome Email", status: "active", runs: "48 runs" },
          { trigger: "Session Starts in 1hr", action: "Send Reminder SMS", status: "active", runs: "112 runs" },
          { trigger: "Module Incomplete > 3 days", action: "Flag at Risk + Alert Trainer", status: "active", runs: "7 runs" },
          { trigger: "Programme Completed", action: "Issue Certificate + Survey", status: "draft", runs: "–" },
        ].map((rule, i) => (
          <div key={i} className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-3">
            <div className="flex items-center justify-between mb-2">
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${rule.status === "active" ? "bg-emerald-500/15 text-emerald-400" : "bg-white/5 text-[#52525B]"}`}>
                {rule.status.toUpperCase()}
              </span>
              <span className="text-[#3F3F46] text-[9px]">{rule.runs}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-[#F5B942]/10 border border-[#F5B942]/15 rounded-lg px-2 py-1.5">
                <p className="text-[#52525B] text-[8px] uppercase">Trigger</p>
                <p className="text-white text-[10px] font-medium">{rule.trigger}</p>
              </div>
              <ChevronRight className="w-3 h-3 text-[#F5B942] shrink-0" />
              <div className="flex-1 bg-white/[0.03] border border-white/[0.05] rounded-lg px-2 py-1.5">
                <p className="text-[#52525B] text-[8px] uppercase">Action</p>
                <p className="text-white text-[10px] font-medium">{rule.action}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CollaborationUI() {
  return (
    <div className="w-full h-full bg-[#0D0D10] rounded-2xl border border-white/[0.07] overflow-hidden font-mono text-xs shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#111114]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-[#52525B] text-[11px]">Team Workspace</span>
      </div>
      <div className="p-4">
        <p className="text-[#52525B] text-[9px] uppercase tracking-widest mb-3">Team Members</p>
        {[
          { name: "Amara Nwosu", role: "Lead Trainer", color: "#F5B942", initials: "AN", status: "online" },
          { name: "Chidi Okafor", role: "Programme Coord.", color: "#60A5FA", initials: "CO", status: "online" },
          { name: "Sola Adeyemi", role: "Content Manager", color: "#A78BFA", initials: "SA", status: "away" },
          { name: "Ngozi Eze", role: "Admin", color: "#34D399", initials: "NE", status: "online" },
        ].map((member, i) => (
          <div key={i} className="flex items-center gap-3 py-2.5 border-b border-white/[0.03] last:border-0">
            <div className="relative">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-black shrink-0" style={{ background: member.color }}>
                {member.initials}
              </div>
              <div className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-[#0D0D10] ${member.status === "online" ? "bg-emerald-400" : "bg-yellow-400"}`} />
            </div>
            <div className="flex-1">
              <p className="text-white text-[11px] font-medium">{member.name}</p>
              <p className="text-[#52525B] text-[10px]">{member.role}</p>
            </div>
            <span className={`text-[9px] font-bold ${member.status === "online" ? "text-emerald-400" : "text-yellow-400"}`}>{member.status}</span>
          </div>
        ))}
        <div className="mt-4 bg-[#F5B942]/5 border border-[#F5B942]/10 rounded-xl p-3">
          <p className="text-[#52525B] text-[9px] uppercase tracking-widest mb-1">Pinned Note</p>
          <p className="text-white text-[11px]">Week 6 assessment review — all trainers must submit feedback by Friday 5pm.</p>
          <p className="text-[#F5B942] text-[9px] mt-1">Amara Nwosu · 2hrs ago</p>
        </div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
//  Main Component
// ──────────────────────────────────────────────────────────

export function FeatureTabs() {
  const [active, setActive] = useState("program");
  const tab = TABS.find((t) => t.id === active)!;

  return (
    <section className="py-32 bg-[#0B0B0C] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/[0.05]" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#A1A1AA] text-[12px] font-bold tracking-[0.25em] uppercase mb-5"
          >
            Platform Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[38px] md:text-[54px] font-bold text-white tracking-tight leading-[1.1]"
          >
            Everything you need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B942] to-[#D4A017]">
              operate with power
            </span>
          </motion.h2>
        </div>

        {/* Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {TABS.map((t) => {
            const Icon = t.icon;
            const isActive = t.id === active;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-bold transition-all duration-300 border ${
                  isActive
                    ? "bg-[#F5B942] text-black border-[#F5B942] shadow-[0_0_20px_rgba(245,185,66,0.3)]"
                    : "bg-white/[0.03] text-[#A1A1AA] border-white/[0.07] hover:border-white/20 hover:text-white"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Left: Description */}
            <div>
              <h3 className="text-[28px] md:text-[34px] font-bold text-white leading-tight mb-5">
                {tab.headline}
              </h3>
              <p className="text-[#A1A1AA] text-[16px] leading-relaxed mb-8 font-light">
                {tab.desc}
              </p>
              <ul className="space-y-4">
                {tab.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#F5B942] mt-0.5 shrink-0" />
                    <span className="text-[#D4D4D8] text-[15px] leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: UI Mockup */}
            <div className="relative">
              <div className="absolute -inset-4 bg-[#F5B942] opacity-[0.07] blur-[60px] rounded-3xl" />
              <div className="relative h-[420px]">
                {tab.visual}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
