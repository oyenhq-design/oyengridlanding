"use client";

import { motion } from "framer-motion";
import { Target, FileText, ChevronRight, AlertTriangle } from "lucide-react";

/* ── RIGHT SIDEBAR: Operational Intelligence ── */
export function OperationalIntelligencePanel() {
  return (
    <div className="p-4 rounded-2xl bg-[#0b1424]/95 border border-white/[0.07] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[12px] font-bold text-white/90 tracking-wide">Operational Intelligence</span>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-bold text-[#10b981]">Live</span>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_6px_#10b981]"
          />
        </div>
      </div>

      {/* Operational Health sub-label */}
      <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3">Operational Health</div>

      <div className="flex items-center gap-4 mb-2">
        {/* Circular Donut Chart */}
        <div className="relative w-[68px] h-[68px] shrink-0">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 68 68">
            <circle cx="34" cy="34" r="26" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="7" />
            <motion.circle
              cx="34" cy="34" r="26"
              fill="none"
              stroke="#10b981"
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray="163.4"
              initial={{ strokeDashoffset: 163.4 }}
              whileInView={{ strokeDashoffset: 13.1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: "easeOut" }}
            />
            {/* Yellow arc segment ~8% */}
            <circle
              cx="34" cy="34" r="26"
              fill="none"
              stroke="#f5b82e"
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray="163.4"
              strokeDashoffset="150"
              style={{ opacity: 0.35 }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[17px] font-bold text-white leading-none">92%</span>
            <span className="text-[8px] text-white/30 font-medium">Healthy</span>
          </div>
        </div>

        {/* Stats List */}
        <div className="flex flex-col gap-[7px] flex-1 min-w-0">
          {[
            { label: "Engagement",          val: "High",  color: "#10b981" },
            { label: "Attendance Quality",   val: "98%",   color: "#f5b82e" },
            { label: "Response Rate",        val: "94%",   color: "#f5b82e" },
            { label: "Coordination Latency", val: "0.4s",  color: "#8b5cf6" },
            { label: "Risk Alerts",          val: "None",  color: "#6b7280" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-1 min-w-0">
              <div className="flex items-center gap-1 flex-1 min-w-0">
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
                <span className="text-[9.5px] text-white/40 truncate">{s.label}</span>
              </div>
              <span className="text-[9.5px] font-bold shrink-0 ml-1" style={{ color: s.color }}>{s.val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── AI Facilitator Assistant ── */
export function AIFacilitatorPanel() {
  return (
    <div className="p-4 rounded-2xl bg-[#0b1424]/95 border border-white/[0.07] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <div className="text-[12px] font-bold text-white/90 tracking-wide mb-3">AI Facilitator Assistant</div>

      {/* Live Insight Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-[#f5b82e] shadow-[0_0_5px_#f5b82e]" />
        <span className="text-[10px] font-bold text-[#f5b82e]">Live Insight</span>
        <span className="text-[9px] text-white/20 ml-auto font-mono">09:42 AM</span>
      </div>

      {/* Insight Card */}
      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-3">
        <p className="text-[12px] text-white/65 leading-relaxed mb-2.5">
          <span className="text-white font-semibold">12 participants</span> have not interacted for 18 minutes.
        </p>
        <div className="flex items-center gap-1.5 mb-2">
          <AlertTriangle className="w-2.5 h-2.5 text-[#f5b82e]" />
          <span className="text-[9px] font-bold text-[#f5b82e] uppercase tracking-wider">Suggested Action</span>
        </div>
        <p className="text-[11px] text-white/45 leading-relaxed">
          Launch interactive poll to re-engage the session.
        </p>
      </div>

      {/* Action Row */}
      <div className="flex items-center gap-2">
        <button className="h-8 px-4 rounded-lg bg-[#f5b82e] text-black font-bold text-[10px] uppercase tracking-widest hover:brightness-105 transition-all flex-shrink-0">
          Launch Poll
        </button>
        <div className="flex items-center gap-1.5 px-3 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] ml-auto">
          <span className="text-[9px] text-white/30">AI Confidence</span>
          <span className="text-[10px] font-bold text-[#10b981]">94%</span>
        </div>
      </div>
    </div>
  );
}

/* ── Decision Layer ── */
export function DecisionLayerPanel() {
  return (
    <div className="p-4 rounded-2xl bg-[#0b1424]/95 border border-white/[0.07] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <div className="text-[12px] font-bold text-white/90 tracking-wide mb-3">Decision Layer</div>

      {/* Recommendation Block */}
      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-3">
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-2 h-2 rounded-full bg-[#f5b82e]" />
          <span className="text-[10px] font-bold text-[#f5b82e]">Recommendation</span>
        </div>
        <p className="text-[12px] text-white/60 leading-relaxed mb-1.5">
          Extend breakout discussion by 8 minutes for deeper alignment.
        </p>
        <p className="text-[10px] text-white/30">Improves outcomes by 34%</p>

        {/* Confidence bar */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-[9px] text-white/25">AI Confidence</span>
          <div className="flex-1 h-1 rounded-full bg-white/[0.08] overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "93%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="h-full rounded-full bg-[#10b981]"
            />
          </div>
          <span className="text-[10px] font-bold text-[#10b981]">93%</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button className="flex-1 h-8 rounded-lg bg-[#f5b82e] text-black font-bold text-[10px] uppercase tracking-widest hover:brightness-105 transition-all">Apply</button>
        <button className="flex-1 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] text-white/40 font-bold text-[10px] uppercase tracking-widest hover:bg-white/[0.07] transition-all">Dismiss</button>
      </div>
    </div>
  );
}

/* ── Live Outputs ── */
export function LiveOutputsPanel() {
  return (
    <div className="p-4 rounded-2xl bg-[#0b1424]/95 border border-white/[0.07] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[12px] font-bold text-white/90 tracking-wide">Live Outputs</span>
        <span className="text-[9px] text-white/25 font-medium">Auto-generated</span>
      </div>

      <div className="flex flex-col gap-3">
        {[
          { label: "Summary Report", status: "Updated 2 min ago", color: "#10b981" },
          { label: "Action Items", status: "12 new items →", color: "#f5b82e" },
          { label: "Attendance Log", status: "98% present", color: "#3b82f6" },
          { label: "Compliance Record", status: "All good ✓", color: "#10b981" },
        ].map((o, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: o.color }} />
              <span className="text-[11px] font-medium text-white/55">{o.label}</span>
            </div>
            <span className="text-[9px] text-white/30">{o.status}</span>
          </div>
        ))}
      </div>

      <button className="mt-4 flex items-center gap-1 text-[10px] font-bold text-[#f5b82e]/70 hover:text-[#f5b82e] transition-colors">
        View All Outputs <ChevronRight className="w-3 h-3" />
      </button>
    </div>
  );
}
