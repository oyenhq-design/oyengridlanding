"use client";

import { motion } from "framer-motion";
import { 
  Check, Lock, TrendingUp, Activity, Database, Building2, 
  GraduationCap, Users, Settings, Sparkles, Workflow, 
  BarChart3, FileText, MessageSquare, Plug, Shield, 
  FileCheck2, ClipboardList
} from "lucide-react";

const trustPoints = [
  {
    title: "End-to-end data encryption",
    desc: "Your data is encrypted in transit and at rest."
  },
  {
    title: "Fine-grained role permissions",
    desc: "Control access with precise roles and permissions."
  },
  {
    title: "Immutable audit logs",
    desc: "Tamper-proof logs for complete transparency and compliance."
  },
  {
    title: "99.9% guaranteed uptime SLA",
    desc: "Reliable infrastructure with enterprise-grade availability."
  },
  {
    title: "Automated daily backups",
    desc: "Continuous backups to ensure business continuity."
  },
  {
    title: "SOC 2 Type II compliance ready",
    desc: "Built with security, privacy, and compliance at the core."
  }
];

export function ScaleStructure() {
  return (
    <section className="py-24 md:py-32 bg-[#0B1220] relative overflow-hidden border-b border-white/5">
      {/* Section Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-100 pointer-events-none" 
        style={{ 
          backgroundImage: "url('/enterprise-infrastructure-bg.jpg')",
          filter: "blur(3px) brightness(0.90)"
        }} 
      />

      {/* Soft navy gradient overlay for readability (darker left to transparent right) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(11, 18, 32, 0.88) 0%, rgba(11, 18, 32, 0.55) 45%, transparent 100%)"
        }}
      />

      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[900px] h-[600px] bg-[#0B5CFF]/[0.08] blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            {/* Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#0B5CFF]" />
              <span className="text-[10px] font-black tracking-[0.3em] text-[#0B5CFF] uppercase">
                Enterprise Infrastructure
              </span>
            </div>

            <h2 className="text-3xl md:text-[44px] font-black leading-[1.1] tracking-tight mb-6 max-w-[550px]" style={{ color: '#ffffff' }}>
              Security, reliability, and<br />
              performance built into<br />
              <span className="text-[#0B5CFF] italic font-serif font-normal">
                every workspace.
              </span>
            </h2>

            {/* Supporting paragraph */}
            <p className="text-sm md:text-base leading-relaxed max-w-[465px] mb-10 font-normal" style={{ color: "rgba(255, 255, 255, 0.82)" }}>
              OYEN GRID provides the secure foundation behind modern organizations—bringing together AI, collaboration, automation, analytics, governance, and enterprise-grade security in one unified platform.
            </p>

            {/* Trust points */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
              {trustPoints.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div 
                    className="w-5 h-5 rounded-full border border-[#0B5CFF] bg-[#0B5CFF]/[0.15] flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      boxShadow: "0 0 10px rgba(11, 92, 255, 0.35)",
                    }}
                  >
                    <Check className="w-2.5 h-2.5 text-[#0B5CFF]" strokeWidth={3} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white tracking-wide">
                      {point.title}
                    </span>
                    <span className="text-[10px] text-white/55 leading-tight mt-1">
                      {point.desc}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT COLUMN: NATIVE NANO-ARCHITECTURE DIAGRAM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 w-full flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[580px] bg-[#0B1220]/95 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 md:p-8 shadow-[0_30px_70px_rgba(0,0,0,0.45),_0_0_50px_rgba(11,92,255,0.06)] overflow-hidden flex flex-col items-center">
              
              {/* Box Ambient Glows */}
              <div className="absolute top-0 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-[#0B5CFF]/10 rounded-full blur-3xl pointer-events-none" />

              {/* ── LEVEL 1: Organization ── */}
              <div className="flex flex-col items-center w-full">
                <div className="px-5 py-2 rounded-xl bg-[#0B1220] border border-white/5 flex items-center gap-2.5 shadow-sm relative z-10">
                  <div className="w-5.5 h-5.5 rounded-md bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                    <Users className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <span className="text-[13px] font-extrabold text-white tracking-wide">Organization</span>
                </div>
                {/* Vertical drop line */}
                <div className="h-4 w-px border-l border-dashed border-blue-500/50" />
              </div>

              {/* ── LEVEL 2: 4 Sub-departments with exact CSS connections ── */}
              <div className="w-full relative">
                {/* Horizontal branch line spanning from center of card 1 to card 4 */}
                <div className="absolute top-0 left-[12.5%] right-[12.5%] h-px border-t border-dashed border-blue-500/50" />
                
                <div className="grid grid-cols-4 gap-3 pt-4">
                  {[
                    { title: "Departments", icon: Building2, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
                    { title: "Training & Learning", icon: GraduationCap, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                    { title: "Teams & Collaboration", icon: Users, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
                    { title: "Operations", icon: Settings, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center relative w-full">
                      {/* Vertical line from horizontal branch to card top */}
                      <div className="absolute top-[-16px] h-4 w-px border-l border-dashed border-blue-500/50" />
                      
                      <div className="w-full px-2 py-3 rounded-xl bg-[#0B1220] border border-white/5 flex flex-col items-center gap-2 shadow-sm h-[70px] justify-center relative z-10">
                        <div className={`w-7.5 h-7.5 rounded-md ${item.bg} border ${item.border} flex items-center justify-center`}>
                          <item.icon className={`w-4 h-4 ${item.color}`} />
                        </div>
                        <span className="text-[10px] sm:text-[11.5px] font-black text-white/95 text-center leading-tight tracking-wide">
                          {item.title}
                        </span>
                      </div>
                      
                      {/* Vertical line from card bottom to horizontal merge */}
                      <div className="h-4 w-px border-l border-dashed border-blue-500/50" />
                    </div>
                  ))}
                </div>

                {/* Horizontal merge line below the 4 cards */}
                <div className="absolute bottom-0 left-[12.5%] right-[12.5%] h-px border-t border-dashed border-blue-500/50" />
              </div>

              {/* Vertical connector to OYEN GRID */}
              <div className="h-6 w-px border-l border-dashed border-blue-500/50" />

              {/* ── LEVEL 3: OYEN GRID (Intelligent Operating System) ── */}
              <div className="w-full relative p-5 md:p-6 rounded-2xl bg-white/[0.04] border border-[#0B5CFF]/30 shadow-lg z-10"
                style={{ boxShadow: "0 0 24px rgba(11, 92, 255, 0.05)" }}>
                
                {/* Header branding */}
                <div className="flex flex-col items-center mb-5">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-6 h-6 rounded bg-[#C99718]/20 border border-[#C99718]/40 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-sm bg-[#C99718]" />
                    </div>
                    <span className="text-[15px] font-black text-white tracking-[0.2em] uppercase">
                      OYEN GRID
                    </span>
                  </div>
                  <span className="text-[10.5px] font-black text-[#C99718] tracking-widest uppercase">
                    Intelligent Operating System
                  </span>
                </div>

                {/* 6 Capabilities Row */}
                <div className="grid grid-cols-6 gap-2.5">
                  {[
                    { title: "AI Intelligence", icon: Sparkles, color: "text-purple-400", bg: "bg-purple-500/10" },
                    { title: "Workflows & Automation", icon: Workflow, color: "text-amber-400", bg: "bg-amber-500/10" },
                    { title: "Analytics & Reports", icon: BarChart3, color: "text-blue-400", bg: "bg-blue-500/10" },
                    { title: "Knowledge Management", icon: FileText, color: "text-emerald-400", bg: "bg-emerald-500/10" },
                    { title: "Communication & Meetings", icon: MessageSquare, color: "text-indigo-400", bg: "bg-indigo-500/10" },
                    { title: "Integrations", icon: Plug, color: "text-rose-400", bg: "bg-rose-50/10" },
                  ].map((cap, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 justify-between min-h-[64px]">
                      <div className={`w-8 h-8 rounded-md ${cap.bg} flex items-center justify-center shrink-0`}>
                        <cap.icon className={`w-4.5 h-4.5 ${cap.color}`} />
                      </div>
                      <span className="text-[9px] font-black text-white/70 text-center leading-tight tracking-wide">
                        {cap.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vertical connector from OYEN GRID to Shield */}
              <div className="h-6 w-px border-l border-dashed border-blue-500/50" />

              {/* ── LEVEL 4: Security/Trust ring around a central Shield ── */}
              <div className="w-full relative select-none">
                
                {/* 3-Column Grid for perfect layout alignment */}
                <div className="grid grid-cols-12 gap-3 items-center relative z-10">
                  
                  {/* Left Side Cards (Security & Compliance) */}
                  <div className="col-span-4 flex flex-col gap-6">
                    <div className="p-3 rounded-xl bg-[#0B1220] border border-white/5 flex gap-3 items-center shadow-sm w-full h-[58px] justify-start relative z-10">
                      <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                      <div className="min-w-0">
                        <h5 className="text-[11.5px] font-extrabold text-white leading-none truncate">Security</h5>
                        <span className="text-[9.5px] text-white/50 leading-tight block mt-1 truncate">Enterprise-grade</span>
                      </div>
                    </div>
                    
                    <div className="p-3 rounded-xl bg-[#0B1220] border border-white/5 flex gap-3 items-center shadow-sm w-full h-[58px] justify-start relative z-10">
                      <FileCheck2 className="w-4 h-4 text-purple-400 shrink-0" />
                      <div className="min-w-0">
                        <h5 className="text-[11.5px] font-extrabold text-white leading-none truncate">Compliance</h5>
                        <span className="text-[9.5px] text-white/50 leading-tight block mt-1 truncate">SOC 2 ready</span>
                      </div>
                    </div>
                  </div>

                  {/* Center Column: Central Shield Lock & Bottom Audit Logs */}
                  <div className="col-span-4 flex flex-col items-center justify-center relative min-h-[150px]">
                    {/* Glowing circular badge */}
                    <div className="w-16 h-16 rounded-full bg-[#0B1220] border border-blue-500/40 flex items-center justify-center relative shadow-[0_0_30px_rgba(59,130,246,0.3)] z-10">
                      <div className="absolute inset-1 rounded-full border border-white/5" />
                      <Lock className="w-5 h-5 text-blue-400" />
                    </div>
                    
                    {/* Vertical connector line to Audit Logs card */}
                    <div className="h-6 w-px border-l border-dashed border-blue-500/50 relative z-0" />

                    {/* Audit Logs Card at the bottom */}
                    <div className="px-3.5 py-2.5 rounded-xl bg-[#0B1220] border border-white/5 flex items-center gap-2.5 shadow-sm w-[150px] h-[58px] justify-start relative z-10">
                      <ClipboardList className="w-4 h-4 text-amber-400 shrink-0" />
                      <div className="min-w-0">
                        <h5 className="text-[11.5px] font-extrabold text-white leading-none truncate">Audit Logs</h5>
                        <span className="text-[9.5px] text-white/50 block mt-1 leading-none truncate">Complete visibility</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side Cards (Scalability & Reliability) */}
                  <div className="col-span-4 flex flex-col gap-6">
                    <div className="p-3 rounded-xl bg-[#0B1220] border border-white/5 flex gap-3 items-center shadow-sm w-full h-[58px] justify-start relative z-10">
                      <TrendingUp className="w-4 h-4 text-blue-400 shrink-0" />
                      <div className="min-w-0">
                        <h5 className="text-[11.5px] font-extrabold text-white leading-none truncate">Scalability</h5>
                        <span className="text-[9.5px] text-white/50 leading-tight block mt-1 truncate">Built to grow</span>
                      </div>
                    </div>
                    
                    <div className="p-3 rounded-xl bg-[#0B1220] border border-white/5 flex gap-3 items-center shadow-sm w-full h-[58px] justify-start relative z-10">
                      <Database className="w-4 h-4 text-amber-400 shrink-0" />
                      <div className="min-w-0">
                        <h5 className="text-[11.5px] font-extrabold text-white leading-none truncate">Reliability</h5>
                        <span className="text-[9.5px] text-white/50 leading-tight block mt-1 truncate">99.9% uptime</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* SVG Connections overlay (Horizontal & curved dashed lines matching cards perfectly) */}
                <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 520 180" fill="none">
                  {/* Concentric blue orbit rings around center shield */}
                  <circle cx="260" cy="32" r="28" stroke="#3b82f6" strokeWidth="1.2" strokeOpacity="0.4" strokeDasharray="3 20" />
                  <circle cx="260" cy="32" r="34" stroke="#3b82f6" strokeWidth="0.8" strokeOpacity="0.2" strokeDasharray="5 10" />

                  {/* Top-Left Horizontal Line (to Security) */}
                  <path d="M 226 32 H 170" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.75" />
                  <path d="M 170 32 L 174 29 M 170 32 L 174 35" stroke="#3b82f6" strokeWidth="1.2" strokeOpacity="0.75" />

                  {/* Bottom-Left Curved Line (to Compliance) */}
                  <path d="M 232 44 H 210 Q 190 44 190 64 V 82 Q 190 102 176 102 H 170" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.75" />
                  <path d="M 170 102 L 174 99 M 170 102 L 174 105" stroke="#3b82f6" strokeWidth="1.2" strokeOpacity="0.75" />

                  {/* Top-Right Horizontal Line (to Scalability) */}
                  <path d="M 294 32 H 350" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.75" />
                  <path d="M 350 32 L 346 29 M 350 32 L 346 35" stroke="#3b82f6" strokeWidth="1.2" strokeOpacity="0.75" />

                  {/* Bottom-Right Curved Line (to Reliability) */}
                  <path d="M 288 44 H 310 Q 330 44 330 64 V 82 Q 330 102 344 102 H 350" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.75" />
                  <path d="M 350 102 L 346 99 M 350 102 L 346 105" stroke="#3b82f6" strokeWidth="1.2" strokeOpacity="0.75" />
                </svg>

              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
