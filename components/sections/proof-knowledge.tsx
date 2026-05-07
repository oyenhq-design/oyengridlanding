"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, BarChart3, Database, Shield, Monitor } from "lucide-react";

export function ProofKnowledge() {
  return (
    <section className="py-40 relative overflow-hidden bg-[#050812]">
      {/* Background Depth Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-accent/5 blur-[100px] rounded-full" />
        <div className="absolute inset-0 grid-mesh opacity-20" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* ASYMMETRICAL EDITORIAL SECTION 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center mb-60">
           <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                 <div className="text-[11px] font-black text-accent uppercase tracking-[0.4em] mb-8">Structural Proof</div>
                 <h2 className="text-[36px] md:text-[44px] font-bold text-white tracking-tight leading-[1.05] mb-10">
                   Intelligence that moves <br />
                   <span className="text-white/40 italic">at the speed of operations.</span>
                 </h2>
                 <p className="text-[17px] text-white/50 leading-relaxed font-light mb-12">
                   Our high-fidelity infrastructure layers provide absolute visibility into every cohort, every module, and every participant interaction—globally.
                 </p>
                 <div className="space-y-6 mb-12">
                    {[
                      "99.99% Operational Reliability",
                      "Real-time Data Synchronicity",
                      "Automated Structural Governance"
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-4 text-white/60">
                         <div className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                            <CheckCircle2 className="w-3 h-3 text-accent" />
                         </div>
                         <span className="text-[14px] font-medium">{item}</span>
                      </div>
                    ))}
                 </div>
                 <button className="text-accent text-[13px] font-black uppercase tracking-widest flex items-center gap-3 hover:translate-x-2 transition-transform">
                   View Structural Logic <ArrowRight className="w-4 h-4" />
                 </button>
              </motion.div>
           </div>

           <div className="lg:col-span-7 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.4)]"
              >
                 <img src="/manager-ops.png" alt="Operational Manager" className="w-full h-auto opacity-70 grayscale" />
                 
                 {/* Live UI - Floating Data Card */}
                 <motion.div
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   className="absolute top-12 -right-6 glass-card p-6 bg-[#050A19]/90 border-accent/30 backdrop-blur-3xl shadow-2xl w-72"
                 >
                    <div className="flex items-center gap-3 mb-4">
                       <TrendingUp className="w-4 h-4 text-accent" />
                       <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Global Velocity</span>
                    </div>
                    <div className="space-y-4">
                       {[
                         { label: "Completion", val: "94%", color: "bg-green-500" },
                         { label: "Engagement", val: "88%", color: "bg-accent" }
                       ].map((stat, i) => (
                         <div key={i}>
                            <div className="flex justify-between text-[11px] font-bold text-white mb-2 uppercase tracking-widest">
                               <span>{stat.label}</span>
                               <span className="text-accent">{stat.val}</span>
                            </div>
                            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                               <div className={`h-full ${stat.color} rounded-full`} style={{ width: stat.val }} />
                            </div>
                         </div>
                       ))}
                    </div>
                 </motion.div>
              </motion.div>
           </div>
        </div>

        {/* ASYMMETRICAL EDITORIAL SECTION 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
           <div className="lg:col-span-7 order-2 lg:order-1 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.4)]"
              >
                 <img src="/team-collab.png" alt="Team Collaboration" className="w-full h-auto opacity-70 grayscale" />
                 
                 {/* Live UI - Floating Notification Card */}
                 <motion.div
                   initial={{ opacity: 0, x: -30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   className="absolute bottom-12 -left-6 glass-card p-6 bg-[#050A19]/90 border-white/10 backdrop-blur-3xl shadow-2xl w-80"
                 >
                    <div className="flex items-center gap-3 mb-5">
                       <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
                          <Activity className="w-4 h-4 text-accent" />
                       </div>
                       <span className="text-[11px] font-black text-white/40 uppercase tracking-widest">Infrastructure Status</span>
                    </div>
                    <div className="space-y-4">
                       <div className="flex items-center gap-4">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <div className="text-[13px] text-white font-medium tracking-tight">Analytics engine synchronizing...</div>
                       </div>
                       <div className="flex items-center gap-4 opacity-50">
                          <div className="w-2 h-2 rounded-full bg-white/20" />
                          <div className="text-[13px] text-white font-medium tracking-tight">124 Cohort updates pending.</div>
                       </div>
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
                 <div className="text-[11px] font-black text-accent uppercase tracking-[0.4em] mb-8">Operational Wisdom</div>
                 <h2 className="text-[36px] md:text-[44px] font-bold text-white tracking-tight leading-[1.05] mb-10">
                   Capture intelligence <br />
                   <span className="text-white/40 italic">from every interaction.</span>
                 </h2>
                 <p className="text-[17px] text-white/50 leading-relaxed font-light mb-12">
                   Transform raw operational data into proprietary knowledge assets. Our system learns from your high-performance cohorts to optimize future delivery.
                 </p>
                 <div className="grid grid-cols-2 gap-8 mb-12">
                    <div className="space-y-2">
                       <div className="text-3xl font-bold text-white tracking-tighter">88.2%</div>
                       <div className="text-[10px] font-black text-white/20 uppercase tracking-widest">Engagement Score</div>
                    </div>
                    <div className="space-y-2">
                       <div className="text-3xl font-bold text-white tracking-tighter">4.5x</div>
                       <div className="text-[10px] font-black text-white/20 uppercase tracking-widest">Efficiency Lift</div>
                    </div>
                 </div>
                 <button className="text-accent text-[13px] font-black uppercase tracking-widest flex items-center gap-3 hover:translate-x-2 transition-transform">
                   Explore Intelligence Hub <ArrowRight className="w-4 h-4" />
                 </button>
              </motion.div>
           </div>
        </div>

      </div>
    </section>
  );
}

function Activity(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.48 12H2" />
    </svg>
  );
}
