"use client";

import { motion } from "framer-motion";
import { Globe, Server, Network, Activity, ArrowRight, Zap, CheckCircle2 } from "lucide-react";

export function GlobalInfrastructure() {
  return (
    <section className="py-40 relative overflow-hidden bg-[#050812]">
      {/* Background Depth Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full grid-mesh opacity-20" />
        <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-[#1a2b5e]/10 blur-[120px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-md">
                <Globe className="w-4 h-4 text-accent" />
                <span className="text-[11px] font-black tracking-[0.3em] text-white uppercase">Global Network</span>
              </div>
              <h2 className="text-[36px] md:text-[44px] font-bold text-white tracking-tight leading-[1.05] mb-10">
                Resilient backbone <br />
                <span className="text-white/40 italic">for distributed delivery.</span>
              </h2>
              <p className="text-[18px] text-white/50 leading-relaxed font-light mb-12">
                Deploy your programme operations across our ultra-low latency global network. OYEN GRID ensures a consistent, high-fidelity experience for every participant, regardless of their regional node.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                 <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="text-3xl font-bold text-white tracking-tighter mb-1">99.99%</div>
                    <div className="text-[10px] font-black text-white/20 uppercase tracking-widest">SLA Uptime</div>
                 </div>
                 <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="text-3xl font-bold text-white tracking-tighter">&lt;40ms</div>
                    <div className="text-[10px] font-black text-white/20 uppercase tracking-widest">Sync Latency</div>
                 </div>
              </div>

              <button className="btn-outline h-[52px] px-10 text-[13px] font-black uppercase tracking-widest flex items-center gap-3">
                Infrastructure Status <Activity className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.5)] group"
            >
              <img src="/global-infra.png" alt="Global Network" className="w-full h-auto opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000" />
              
              {/* LIVE UI - Global Node Monitor */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="absolute top-12 right-8 glass-card p-8 bg-[#050A19]/90 border-white/10 backdrop-blur-3xl shadow-2xl w-72"
              >
                 <div className="flex items-center justify-between mb-8">
                    <div className="text-[10px] font-black text-accent uppercase tracking-[0.2em]">Live Regional Nodes</div>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                 </div>
                 <div className="space-y-6">
                    {[
                      { node: "North America", load: "24%", status: "Healthy" },
                      { node: "Europe (LND)", load: "42%", status: "Healthy" },
                      { node: "Asia Pacific", load: "18%", status: "Healthy" },
                      { node: "Africa (LOS)", load: "31%", status: "Healthy" }
                    ].map((row, i) => (
                      <div key={i} className="flex flex-col gap-2">
                         <div className="flex justify-between text-[11px] font-bold text-white/60 uppercase">
                            <span>{row.node}</span>
                            <span className="text-white">{row.load}</span>
                         </div>
                         <div className="w-full h-1 bg-white/5 rounded-full">
                            <div className="h-full bg-accent/40 rounded-full" style={{ width: row.load }} />
                         </div>
                      </div>
                    ))}
                 </div>
              </motion.div>

              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
