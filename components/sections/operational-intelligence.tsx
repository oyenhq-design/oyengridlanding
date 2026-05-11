"use client";

import { motion } from "framer-motion";
import { 
  Shield, Globe, BarChart3, Check, Zap, 
  Activity, ShieldCheck, Lock, Database, Search
} from "lucide-react";
import { cn } from "@/lib/utils";

const metrics = {
  analytics: [
    { label: "Attendance Rate", val: "97%" },
    { label: "Completion Rate", val: "74%" },
    { label: "Engagement Score", val: "92%" },
    { label: "Session Quality", val: "4.8/5" }
  ],
  governance: [
    "Role-based access control",
    "End-to-end encryption",
    "Audit logs and activity tracking",
    "Compliance-ready infrastructure"
  ],
  scale: [
    { label: "Uptime", val: "99.995%" },
    { label: "Global Regions", val: "6" },
    { label: "Data Centers", val: "12" },
    { label: "Avg Response", val: "0.8ms" }
  ]
};

export function OperationalIntelligence() {
  return (
    <section className="section-gap relative bg-[#050816] overflow-hidden border-b border-white/5">
      
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[400px] bg-brand-gold/[0.015] blur-[120px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-3 gap-5 items-stretch">
          
          {/* CARD 1: OPERATIONAL ANALYTICS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group relative p-6 rounded-[22px] bg-white/[0.01] border border-white/5 backdrop-blur-xl transition-all duration-700 hover:bg-white/[0.03] hover:border-brand-gold/30 flex flex-col min-h-[280px]"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-[15px] font-bold text-white mb-1.5 tracking-tight group-hover:text-brand-gold transition-colors">Operational Analytics</h3>
                <p className="text-[11px] text-white/30 max-w-[200px] leading-snug">Make data-driven decisions with comprehensive real-time insights.</p>
              </div>
              <div className="w-9 h-9 rounded-lg bg-brand-gold/5 border border-brand-gold/10 flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-brand-gold/40" />
              </div>
            </div>

            <div className="mt-auto grid grid-cols-2 gap-x-6 gap-y-4">
              {metrics.analytics.map((m, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-[16px] font-bold text-white">{m.val}</div>
                  <div className="text-[8px] font-black uppercase tracking-widest text-white/20">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Visual: Mini Analytics Graph */}
            <div className="absolute bottom-6 right-6 w-32 h-16 flex items-end gap-1.5 px-2">
               {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                 <motion.div 
                   key={i}
                   initial={{ height: 0 }}
                   whileInView={{ height: `${h}%` }}
                   transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                   className="flex-1 bg-brand-gold/20 rounded-t-sm group-hover:bg-brand-gold/40 transition-colors"
                 />
               ))}
            </div>
            
            <div className="absolute inset-0 rounded-[22px] bg-gradient-to-br from-brand-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </motion.div>

          {/* CARD 2: GOVERNANCE & SECURITY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative p-6 rounded-[22px] bg-white/[0.01] border border-white/5 backdrop-blur-xl transition-all duration-700 hover:bg-white/[0.03] hover:border-brand-gold/30 flex flex-col min-h-[280px]"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-[15px] font-bold text-white mb-1.5 tracking-tight group-hover:text-brand-gold transition-colors">Governance & Security</h3>
                <p className="text-[11px] text-white/30 max-w-[200px] leading-snug">Enterprise-grade security and governance built for institutional trust.</p>
              </div>
              <div className="w-9 h-9 rounded-lg bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-emerald-500/40" />
              </div>
            </div>

            <div className="mt-auto space-y-2.5">
              {metrics.governance.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                   <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                      <Check className="w-2 h-2 text-emerald-500" />
                   </div>
                   <span className="text-[10px] font-bold text-white/40 group-hover:text-white/60 transition-colors">{item}</span>
                </div>
              ))}
            </div>

            {/* Visual: Cinematic Shield */}
            <div className="absolute top-1/2 right-8 -translate-y-1/2 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
               <Shield className="w-24 h-24 text-white" strokeWidth={1} />
            </div>

            <div className="absolute inset-0 rounded-[22px] bg-gradient-to-br from-emerald-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </motion.div>

          {/* CARD 3: BUILT FOR SCALE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="group relative p-6 rounded-[22px] bg-white/[0.01] border border-white/5 backdrop-blur-xl transition-all duration-700 hover:bg-white/[0.03] hover:border-brand-gold/30 flex flex-col min-h-[280px]"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-[15px] font-bold text-white mb-1.5 tracking-tight group-hover:text-brand-gold transition-colors">Built for Scale</h3>
                <p className="text-[11px] text-white/30 max-w-[200px] leading-snug">Infrastructure designed to support global operations with reliability.</p>
              </div>
              <div className="w-9 h-9 rounded-lg bg-blue-500/5 border border-blue-500/10 flex items-center justify-center">
                <Globe className="w-4 h-4 text-blue-500/40" />
              </div>
            </div>

            <div className="mt-auto grid grid-cols-2 gap-x-6 gap-y-4">
              {metrics.scale.map((m, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-[16px] font-bold text-white">{m.val}</div>
                  <div className="text-[8px] font-black uppercase tracking-widest text-white/20">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Visual: Mini World Map Nodes */}
            <div className="absolute top-1/2 right-6 -translate-y-1/2 w-32 h-20 opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-1000">
               <div className="relative w-full h-full">
                  <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(245,185,66,0.8)] animate-pulse" />
                  <div className="absolute top-1/2 left-3/4 w-1 h-1 rounded-full bg-brand-gold/60 shadow-[0_0_8px_rgba(245,185,66,0.4)]" />
                  <div className="absolute top-3/4 left-1/2 w-1 h-1 rounded-full bg-brand-gold/60 shadow-[0_0_8px_rgba(245,185,66,0.4)]" />
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 60">
                    <path d="M25 15 L75 30 L50 45" fill="none" stroke="rgba(245,185,66,0.15)" strokeWidth="0.5" />
                  </svg>
               </div>
            </div>

            <div className="absolute inset-0 rounded-[22px] bg-gradient-to-br from-blue-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
