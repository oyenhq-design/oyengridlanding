"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  Globe, Shield, Activity, ShieldCheck, Lock, Hexagon, RefreshCw, Radio 
} from "lucide-react";
import { cn } from "@/lib/utils";

const topMetrics = [
  { val: "1,248+", label: "Programmes Coordinated", id: "METRIC_01" },
  { val: "47,293+", label: "Participants Managed", id: "METRIC_02" },
  { val: "8.7M+", label: "Operational Events Processed", id: "METRIC_03" },
  { val: "140+", label: "Organizations Supported", id: "METRIC_04" }
];

export function ScaleStructure() {
  const [syncTime, setSyncTime] = useState("");

  useEffect(() => {
    const tick = () => setSyncTime(new Date().toLocaleTimeString());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-[72px] bg-[#020408] theme-light-section relative overflow-hidden border-b border-white/5">
      
      {/* Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(10,15,30,1)_0%,transparent_100%)]" />
        <div className="absolute inset-0 opacity-[0.03] grayscale" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        
        {/* Glows */}
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-blue-500/[0.02] blur-[160px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/[0.015] blur-[140px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* CONTEXTUAL METRICS ROW */}
        <div className="mb-16 relative group">
          <div className="absolute inset-x-0 bottom-0 h-px bg-white/5" />
          <div className="flex flex-wrap lg:flex-nowrap justify-between gap-px bg-white/[0.02] rounded-xl border border-white/5 backdrop-blur-md overflow-hidden shadow-2xl">
            {topMetrics.map((m, i) => (
              <div key={i} className="flex-1 min-w-[200px] relative p-5 lg:p-6 group hover:bg-white/[0.03] transition-all duration-700">
                <div className="space-y-1 relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/30 group-hover:bg-brand-gold transition-colors duration-500 shadow-[0_0_8px_#F5B942]" />
                      <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em]">{m.id}</span>
                    </div>
                    <Activity className="w-3.5 h-3.5 text-white/5 group-hover:text-brand-gold/20 transition-colors" />
                  </div>
                  <div className="text-[24px] lg:text-[28px] font-bold text-white tracking-tighter leading-none group-hover:text-brand-gold transition-colors duration-700">{m.val}</div>
                  <div className="text-[9px] font-black text-white/40 uppercase tracking-[0.24em]">{m.label}</div>
                </div>
                {/* Background Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-[0.45fr_0.55fr] gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: INFRASTRUCTURE CONTEXT */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-brand-gold/40" />
                <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.4em]">Enterprise Infrastructure</span>
              </div>
              <h2 className="text-[40px] lg:text-[46px] font-bold text-white leading-[1.08] tracking-tighter max-w-[480px]">
                Reliable Infrastructure for <br />
                <span className="text-brand-gold italic font-serif">Institutional Operations</span>
              </h2>
              <p className="text-[14px] text-white/50 leading-relaxed max-w-[440px]">
                OYEN GRID operates resilient infrastructure engineered for absolute security, governance, scalability, and real-time operational visibility.
              </p>
            </div>

            {/* Capability Modules */}
            <div className="space-y-5 max-w-[540px]">
              {[
                { 
                  t: "Security & Scalability", 
                  d: "Engineered for high-volume concurrent delivery across distributed environments.",
                  icon: Globe,
                  status: "CORE_ACTIVE",
                  color: "brand-gold"
                },
                { 
                  t: "Governance & Reliability", 
                  d: "Granular administrative control with automated performance and compliance auditing.",
                  icon: Shield,
                  status: "VERIFIED",
                  color: "blue-500"
                }
              ].map((card, i) => (
                <div 
                  key={i}
                  className="relative p-5 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-3xl group cursor-pointer overflow-hidden transition-all duration-300 hover:border-white/10 hover:shadow-[0_0_30px_rgba(245,185,66,0.05)]"
                >
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

                  <div className="flex gap-5 items-center relative z-10">
                    <div className={cn(
                      "w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300",
                      `group-hover:border-${card.color}/30`
                    )}>
                      <card.icon className={cn("w-4.5 h-4.5 text-white/20 transition-colors duration-300", `group-hover:text-${card.color}`)} />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-3">
                        <h4 className="text-[14px] font-bold text-white tracking-tight group-hover:text-white transition-colors">{card.t}</h4>
                        <div className="px-2 py-0.5 rounded bg-white/5 border border-white/10 flex items-center gap-1">
                          <div className={cn("w-1 h-1 rounded-full animate-pulse", card.color === "brand-gold" ? "bg-brand-gold" : "bg-blue-500")} />
                          <span className="text-[7px] font-black text-white/40 uppercase tracking-[0.2em]">{card.status}</span>
                        </div>
                      </div>
                      <p className="text-[11px] text-white/30 leading-relaxed group-hover:text-white/50 transition-colors duration-300">
                        {card.d}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: GOVERNANCE MATRIX & LIVE OPERATIONS ANALYTICS (Merged Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            
            {/* CARD 1 — LIVE OPERATIONS ANALYTICS */}
            <div className="group relative p-5 rounded-[20px] bg-[#080B14]/60 border border-white/5 backdrop-blur-[40px] transition-all duration-300 hover:border-brand-gold/40 flex flex-col min-h-[300px] overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.5)]">
              <div className="flex justify-between items-start mb-4 relative z-30">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(245,185,66,0.8)] animate-pulse" />
                    <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-white/95">Live Operations</h3>
                  </div>
                  <p className="text-[8.5px] text-white/30 font-bold uppercase tracking-widest">Performance Intelligence</p>
                </div>
              </div>

              {/* Dashboard Waveform Graphic */}
              <div className="relative flex-1 bg-black/40 rounded-[12px] border border-white/5 overflow-hidden p-3.5 group-hover:bg-black/60 transition-all duration-300">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
                
                {/* Activity Waveform */}
                <div className="absolute inset-x-0 top-3 h-10 opacity-30">
                  <svg className="w-full h-full" viewBox="0 0 400 40">
                    <motion.path 
                      animate={{ d: [
                        "M0 20 Q50 5 100 20 T200 20 T300 20 T400 20",
                        "M0 20 Q50 35 100 20 T200 20 T300 20 T400 20",
                        "M0 20 Q50 5 100 20 T200 20 T300 20 T400 20"
                      ]}}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      d="M0 20 Q50 5 100 20 T200 20 T300 20 T400 20" 
                      fill="none" 
                      stroke="#F5B942" 
                      strokeWidth="1.2" 
                    />
                  </svg>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-[18px] font-bold text-white tracking-tighter">98.2%</div>
                    <div className="text-[7px] font-black text-white/20 uppercase tracking-widest">Operational Score</div>
                  </div>
                  <div>
                    <div className="text-[18px] font-bold text-white tracking-tighter">12,402</div>
                    <div className="text-[7px] font-black text-white/20 uppercase tracking-widest">Participant Flow</div>
                  </div>
                </div>

                {/* Micro-bars */}
                <div className="absolute bottom-3 inset-x-3 h-12 flex items-end justify-between gap-1">
                  {[30, 60, 40, 80, 50, 70, 90, 65, 85, 45, 75, 55].map((h, i) => (
                    <div key={i} className="flex-1">
                      <div className="w-full bg-brand-gold/20 rounded-t-[1px]" style={{ height: `${h}%` }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CARD 2 — GOVERNANCE MATRIX */}
            <div className="group relative p-5 rounded-[20px] bg-[#080B14]/60 border border-white/5 backdrop-blur-[40px] transition-all duration-300 hover:border-emerald-500/40 flex flex-col min-h-[300px] overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.5)]">
              <div className="flex justify-between items-start mb-4 relative z-30">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
                    <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-white/95">Governance Matrix</h3>
                  </div>
                  <p className="text-[8.5px] text-white/30 font-bold uppercase tracking-widest">Compliance & Security Control</p>
                </div>
              </div>

              {/* Matrix Area */}
              <div className="relative flex-1 bg-black/40 rounded-[12px] border border-white/5 overflow-hidden flex flex-col p-3 group-hover:bg-black/60 transition-all duration-300">
                <div className="h-20 relative flex items-center justify-center pointer-events-none mb-3">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_70%)]" />
                  <Hexagon className="w-10 h-10 text-emerald-500/40" />
                  <Lock className="absolute w-3.5 h-3.5 text-emerald-500" />
                </div>

                <div className="space-y-1.5">
                  {[
                    "Role-based governance keys",
                    "End-to-end telemetry encryption",
                    "Audit log infrastructure"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 p-1.5 rounded bg-white/[0.01] border border-white/5 group-hover:border-emerald-500/15">
                      <div className="w-1 h-1 rounded-full bg-emerald-500/40" />
                      <span className="text-[8.5px] font-bold text-white/40 group-hover:text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
