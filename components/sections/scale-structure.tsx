"use client";

import { motion } from "framer-motion";
import { Globe, Shield, Users, Database, Zap, Activity } from "lucide-react";
import Image from "next/image";

export function ScaleStructure() {
  const stats = [
    { label: "Active Programmes", val: "1,240+", desc: "Global coordination" },
    { label: "System Uptime", val: "99.995%", desc: "Nominal operational status" },
    { label: "Infrastructure Health", val: "Verified", desc: "L4 Security protocols" },
    { label: "Data Throughput", val: "Institutional", desc: "Enterprise-grade bandwidth" }
  ];

  return (
    <section className="section-gap relative overflow-hidden bg-[#05070B] border-y border-white/5">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          
          {/* LEFT: Scaling Narrative (Span 5) */}
          <div className="lg:col-span-5">
            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-brand-gold mb-6 block opacity-50">Infrastructure Proof-of-Scale</span>
            <h2 className="mb-8 leading-tight">
              Stable. Secure. <br />
              Institutional Grade.
            </h2>

            <p className="text-editorial mb-12 max-w-lg">
              OYEN GRID provides the foundational infrastructure for high-scale programme delivery. Monitor active cohorts, deployment health, and global operations through a single, secure environment.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
               {stats.map((m, i) => (
                 <div key={i} className="space-y-2">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/30">{m.label}</div>
                    <div className="text-[28px] font-black text-white tracking-tighter leading-none">{m.val}</div>
                    <div className="text-[9px] font-bold text-brand-gold uppercase tracking-tighter opacity-60">{m.desc}</div>
                 </div>
               ))}
            </div>

            <button className="btn-cinematic-gold h-12 px-10 text-[12px] font-bold">
               Scale Your Infrastructure
            </button>
          </div>

          {/* RIGHT: Infrastructure Monitoring UI (Span 7) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="lg:col-span-7"
          >
             <div className="glass-panel p-8 border-white/5 bg-[#0A0D14] shadow-2xl relative">
                <div className="flex justify-between items-center mb-8">
                   <div className="flex items-center gap-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-pulse" />
                      <span className="text-[11px] font-black uppercase tracking-widest text-white">System Monitor: active</span>
                   </div>
                   <div className="text-[9px] font-mono text-white/20">GLOBAL_CLUSTER_84</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {/* Realistic Analytics Card */}
                   <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                      <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Participant Activity</div>
                      <div className="h-32 flex items-end gap-2">
                         {[40, 70, 45, 90, 65, 80, 55, 100].map((h, i) => (
                           <div key={i} className="flex-1 bg-brand-gold/10 border-t-2 border-brand-gold/40 rounded-t-sm" style={{ height: `${h}%` }} />
                         ))}
                      </div>
                      <div className="flex justify-between text-[9px] font-bold text-white/20 uppercase">
                         <span>00:00</span>
                         <span>Syncing</span>
                         <span>24:00</span>
                      </div>
                   </div>

                   {/* Deployment Status List */}
                   <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                      <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Active Deployments</div>
                      <div className="space-y-3">
                         {[
                            { name: "Cohort_Alpha_01", status: "Active", val: 84 },
                            { name: "Strategic_Ops_L2", status: "Nominal", val: 100 },
                            { name: "Institutional_Sync", status: "Syncing", val: 42 }
                         ].map((d, i) => (
                           <div key={i} className="space-y-1.5">
                              <div className="flex justify-between text-[9px] font-black uppercase tracking-tighter">
                                 <span className="text-white/60">{d.name}</span>
                                 <span className="text-brand-gold">{d.status}</span>
                              </div>
                              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                 <div className="h-full bg-brand-gold/60" style={{ width: `${d.val}%` }} />
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>

                {/* Infrastructure Tags */}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4">
                   {["L4_SECURITY", "ISO_27001", "SOC2_TYPE_II", "GDPR_COMPLIANT"].map((tag, i) => (
                     <div key={i} className="px-3 py-1.5 rounded bg-white/[0.03] border border-white/5 text-[9px] font-black uppercase tracking-widest text-white/30">
                        {tag}
                     </div>
                   ))}
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
