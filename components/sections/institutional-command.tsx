"use client";

import { motion } from "framer-motion";
import { 
  Brain, Shield, Eye, ArrowRight, Users, Activity,
  CheckCircle2, AlertCircle, Target, Layers
} from "lucide-react";

const capabilities = [
  {
    icon: Activity,
    title: "Live Programme Coordination",
    desc: "Real-time visibility across cohorts, facilitators, and sessions."
  },
  {
    icon: Brain,
    title: "Operational Intelligence",
    desc: "AI-assisted summaries, recommendations, and engagement tracking."
  },
  {
    icon: Shield,
    title: "Institutional Oversight",
    desc: "Centralized governance, analytics, and programme monitoring."
  }
];

const stripItems = [
  { icon: Eye, title: "Live Visibility" },
  { icon: Activity, title: "Smart Coordination" },
  { icon: Brain, title: "Operational Intelligence" },
  { icon: Shield, title: "Institutional Governance" }
];

const cohorts = [
  { name: "Cohort Alpha", status: "Live", participants: 48, attendance: 94 },
  { name: "Cohort Beta", status: "Active", participants: 62, attendance: 87 },
  { name: "Cohort Gamma", status: "Syncing", participants: 35, attendance: 91 }
];

export function InstitutionalCommandCenter() {
  return (
    <section className="bg-[#030711] relative py-24 overflow-hidden">

      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-[radial-gradient(ellipse_at_top,rgba(245,184,46,0.04),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.03),transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.018]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="max-w-[1300px] mx-auto px-8 relative z-10">

        {/* 3-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr_1fr] gap-10 items-start">

          {/* ─────── LEFT: OPERATIONAL MESSAGE ─────── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-10 pt-2"
          >
            {/* Label */}
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#f5b82e]" />
              <span className="text-[10px] font-bold text-[#f5b82e] uppercase tracking-[0.5em]">Command Center</span>
            </div>

            {/* Headline */}
            <div>
              <h2 className="text-[44px] md:text-[52px] font-bold text-white leading-[1] tracking-tight mb-6">
                Built for<br />
                intelligent{" "}
                <span className="text-[#f5b82e] italic font-medium">delivery.</span>
              </h2>
              <p className="text-[15px] text-white/45 leading-relaxed max-w-[340px] font-light">
                OYEN GRID centralizes programme coordination, participant operations, live delivery, and institutional oversight into one synchronized operational environment.
              </p>
            </div>

            {/* Capabilities */}
            <div className="flex flex-col gap-7">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.07] flex items-center justify-center shrink-0 group-hover:border-[#f5b82e]/30 group-hover:bg-[#f5b82e]/5 transition-all duration-400">
                    <cap.icon className="w-4 h-4 text-[#f5b82e] opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-white/90 mb-1 group-hover:text-white transition-colors">{cap.title}</h3>
                    <p className="text-[12px] text-white/35 leading-snug font-light">{cap.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-4">
              <button className="h-11 px-7 rounded-xl bg-[#f5b82e] text-black font-bold text-[12px] uppercase tracking-[0.15em] hover:brightness-105 transition-all flex items-center gap-2">
                Explore Command Center
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button className="h-11 px-6 rounded-xl border border-white/10 bg-white/[0.02] text-white/50 font-bold text-[12px] uppercase tracking-[0.15em] hover:bg-white/[0.05] hover:text-white/80 transition-all">
                View Infrastructure
              </button>
            </div>
          </motion.div>

          {/* ─────── CENTER: COMMAND CENTER UI ─────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="rounded-[28px] bg-[#07111F]/80 backdrop-blur-2xl border border-white/[0.07] shadow-[0_40px_100px_rgba(0,0,0,0.7)] overflow-hidden">

              {/* Panel Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#f5b82e]/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]/60" />
                  </div>
                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">Operational Command</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                  <span className="text-[10px] font-medium text-[#10b981] uppercase tracking-widest">Session Coordination Active</span>
                </div>
              </div>

              {/* Active Cohorts Table */}
              <div className="px-6 pt-5 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-white/40 uppercase tracking-[0.25em]">Active Programme Sessions</span>
                  <span className="text-[10px] text-[#f5b82e] font-bold uppercase tracking-widest">{cohorts.length} Live</span>
                </div>
                <div className="flex flex-col gap-3">
                  {cohorts.map((cohort, i) => (
                    <div key={i} className="flex items-center justify-between p-3.5 rounded-[14px] bg-white/[0.03] border border-white/[0.05] hover:border-white/10 transition-colors group">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${cohort.status === "Live" ? "bg-[#ef4444] shadow-[0_0_8px_#ef4444]" : cohort.status === "Active" ? "bg-[#10b981] shadow-[0_0_8px_#10b981]" : "bg-[#f5b82e] shadow-[0_0_6px_#f5b82e]"} animate-pulse`} />
                        <div>
                          <span className="text-[13px] font-bold text-white/80 group-hover:text-white transition-colors">{cohort.name}</span>
                          <span className="text-[10px] text-white/30 ml-2 uppercase tracking-widest">— {cohort.status}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <div className="text-[11px] font-bold text-white/60">{cohort.participants}</div>
                          <div className="text-[9px] text-white/25 uppercase tracking-widest">Participants</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[11px] font-bold text-[#10b981]">{cohort.attendance}%</div>
                          <div className="text-[9px] text-white/25 uppercase tracking-widest">Attendance</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Facilitator Network Row */}
              <div className="px-6 py-4 border-t border-white/[0.05]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.25em]">Facilitator Network</span>
                  <span className="text-[10px] text-[#00d4ff] font-bold">12 Online</span>
                </div>
                <div className="flex items-center gap-2">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="relative">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center">
                        <Users className="w-3 h-3 text-white/40" />
                      </div>
                      {i < 3 && <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#10b981] border border-[#030711]" />}
                    </div>
                  ))}
                  <span className="text-[11px] text-white/20 ml-1">+5</span>
                </div>
              </div>

              {/* Operational Timeline */}
              <div className="px-6 py-4 border-t border-white/[0.05]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.25em]">Attendance Monitoring</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                    <span className="text-[10px] font-bold text-[#10b981] uppercase tracking-widest">Operational Sync Stable</span>
                  </div>
                </div>
                <div className="flex items-end gap-1 h-10">
                  {[72, 85, 68, 91, 88, 94, 76, 89, 92, 87, 95, 83, 79, 91, 88, 94, 85, 90, 87, 93].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04, duration: 0.5 }}
                      className="flex-1 rounded-sm bg-[#00d4ff]/20 hover:bg-[#00d4ff]/40 transition-colors"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─────── RIGHT: OPERATIONAL STATUS PANELS ─────── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-5 pt-2"
          >

            {/* Panel 1: Programme Health */}
            <div className="p-6 rounded-[20px] bg-[#07111F]/70 backdrop-blur-xl border border-white/[0.07] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">Programme Health</span>
                <div className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981]" />
              </div>
              <div>
                <div className="text-[40px] font-bold text-white tracking-tighter leading-none mb-2">
                  94.8<span className="text-[22px] text-[#f5b82e]">%</span>
                </div>
                <div className="text-[12px] text-white/35 font-light">All delivery systems synchronized.</div>
              </div>
              <div className="h-1 w-full bg-white/[0.04] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "94.8%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  className="h-full bg-gradient-to-r from-[#10b981]/60 to-[#10b981]"
                />
              </div>
              <div className="text-[10px] text-white/20 uppercase tracking-[0.2em]">Operational Stability</div>
            </div>

            {/* Panel 2: AI Coordination Assistant */}
            <div className="p-6 rounded-[20px] bg-[#07111F]/70 backdrop-blur-xl border border-white/[0.07] space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#f5b82e]/10 border border-[#f5b82e]/20 flex items-center justify-center">
                  <Brain className="w-4 h-4 text-[#f5b82e]" />
                </div>
                <span className="text-[11px] font-bold text-white/50 uppercase tracking-[0.3em]">AI Coordinator</span>
              </div>
              <div className="p-4 rounded-[14px] bg-[#f5b82e]/[0.04] border border-[#f5b82e]/[0.12]">
                <p className="text-[13px] text-white/65 leading-relaxed font-light italic mb-4">
                  "Engagement levels decreasing in Cohort 04. Recommend scheduling a facilitator check-in."
                </p>
                <button className="w-full h-9 rounded-xl bg-[#f5b82e] text-black font-bold text-[11px] uppercase tracking-[0.15em] hover:brightness-105 transition-all">
                  Review Recommendation
                </button>
              </div>
            </div>

            {/* Panel 3: Governance Status */}
            <div className="p-6 rounded-[20px] bg-[#07111F]/70 backdrop-blur-xl border border-white/[0.07] space-y-4">
              <div className="flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-white/30" />
                <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">Governance Status</span>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Compliance Active" },
                  { label: "Infrastructure Stable" },
                  { label: "Encryption Verified" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                    <span className="text-[13px] font-medium text-white/60">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

        {/* ─────── BOTTOM STRIP ─────── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-14 h-14 rounded-2xl bg-white/[0.02] border border-white/[0.06] px-8 flex items-center justify-between"
        >
          {stripItems.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                <item.icon className="w-3.5 h-3.5 text-[#f5b82e] opacity-70" />
              </div>
              <span className="text-[12px] font-bold text-white/50 hover:text-white/80 transition-colors">{item.title}</span>
              {i < stripItems.length - 1 && (
                <div className="w-px h-5 bg-white/[0.06] ml-4" />
              )}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
