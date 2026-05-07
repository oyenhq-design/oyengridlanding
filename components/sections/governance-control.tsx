"use client";

import { motion } from "framer-motion";
import { Users, Lock, Eye, Settings, ArrowRight, UserCheck, ShieldCheck } from "lucide-react";

export function GovernanceControl() {
  return (
    <section className="py-40 relative overflow-hidden bg-[#050812]">
      {/* Background Depth Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-accent/5 blur-[100px] rounded-full" />
        <div className="absolute top-0 left-0 w-full h-full grid-mesh opacity-20" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          <div className="lg:col-span-7 order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* LIVE UI - Permissions Matrix Card */}
              <div className="glass-card p-10 bg-[#050A19]/90 border-white/10 rounded-[32px] shadow-[0_50px_100px_rgba(0,0,0,0.6)] backdrop-blur-3xl overflow-hidden group">
                 <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                          <UserCheck className="w-5 h-5 text-accent" />
                       </div>
                       <h4 className="text-xl font-bold text-white tracking-tight">Permissions Matrix</h4>
                    </div>
                    <div className="text-[10px] font-black text-white/30 uppercase tracking-widest">Active System State</div>
                 </div>

                 <div className="space-y-4">
                    {[
                      { role: "Global Administrator", access: "Full Control", status: "Active" },
                      { role: "Programme Coordinator", access: "Limited Write", status: "Active" },
                      { role: "Mentor / Trainer", access: "Read Only", status: "Active" },
                      { role: "External Auditor", access: "Compliance View", status: "Active" }
                    ].map((row, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all">
                         <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                               <Lock className="w-3.5 h-3.5 text-white/30" />
                            </div>
                            <div className="text-[14px] font-bold text-white">{row.role}</div>
                         </div>
                         <div className="flex items-center gap-8">
                            <span className="text-[12px] text-white/40 font-medium">{row.access}</span>
                            <div className="flex items-center gap-2">
                               <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                               <span className="text-[10px] font-black text-green-500/60 uppercase tracking-widest">{row.status}</span>
                            </div>
                         </div>
                      </div>
                    ))}
                 </div>

                 {/* Atmosphere Gradient inside card */}
                 <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/5 blur-[80px] rounded-full pointer-events-none" />
              </div>

              {/* Floating User Avatar Preview */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="absolute -top-12 -right-8 glass-card p-6 bg-[#050A19]/95 border-accent/40 backdrop-blur-2xl shadow-2xl rounded-2xl w-56"
              >
                 <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40" />
                    <div>
                       <div className="text-[13px] font-bold text-white leading-tight">Sarah Chen</div>
                       <div className="text-[10px] text-white/40 uppercase font-black">Region: EMEA</div>
                    </div>
                 </div>
                 <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-3/4 rounded-full" />
                 </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span className="text-[11px] font-black tracking-[0.3em] text-white uppercase">Governance Control</span>
              </div>
              <h2 className="text-[36px] md:text-[44px] font-bold text-white tracking-tight leading-[1.05] mb-10">
                Orchestrate roles <br />
                <span className="text-white/40 italic">with absolute precision.</span>
              </h2>
              <p className="text-[18px] text-white/50 leading-relaxed font-light mb-12">
                Define granular access for every operator in your ecosystem. Maintain absolute control over who designs, manages, and views your global programme data.
              </p>
              <div className="space-y-6">
                 {[
                   { title: "Granular Permissions", desc: "150+ permission nodes for absolute structural control." },
                   { title: "Regional Sovereignty", desc: "Segment data access by territory, office, or cohort." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6 group">
                      <div className="w-px h-auto bg-gradient-to-b from-accent to-transparent" />
                      <div>
                         <h4 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">{item.title}</h4>
                         <p className="text-[14px] text-white/30 leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
