"use client";

import { motion } from "framer-motion";
import { 
  Shield, Globe, BarChart3, Check, Zap, 
  Activity, ShieldCheck, Lock, Database, Search,
  ArrowUpRight, RefreshCw, Cpu, Server, Network,
  Radio, Activity as Pulse, Hexagon, Sparkles, TrendingUp,
  Brain
} from "lucide-react";
import { cn } from "@/lib/utils";

export function OperationalIntelligence() {
  const kpis = [
    { label: "Session Intelligence", val: "94.2%", color: "text-brand-gold", icon: Brain },
    { label: "Operational Health", val: "NOMINAL", color: "text-emerald-500", icon: ShieldCheck },
    { label: "Delivery Stability", val: "99.99%", color: "text-blue-500", icon: Activity }
  ];

  return (
    <section className="py-32 bg-[#050816] relative overflow-hidden border-b border-white/5">
      
      {/* BACKGROUND ATMOSPHERE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(10,15,30,1)_0%,transparent_100%)]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-900/10 blur-[160px] rounded-full opacity-20" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          
          {/* LEFT NARRATIVE (35%) */}
          <div className="lg:col-span-4 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="eyebrow">Operational Intelligence</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-[1.1] tracking-tighter">
                Institutional performance <br />
                <span className="text-brand-gold italic font-serif">visualized in real-time.</span>
              </h2>
              <p className="text-[15px] text-white/40 leading-relaxed mb-12 font-medium">
                Transform raw programme data into actionable institutional intelligence. Monitor participant health, session impact, and operational throughput through one unified telemetry layer.
              </p>

              {/* KPI Rows */}
              <div className="space-y-4">
                {kpis.map((kpi, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                        <kpi.icon className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-[13px] font-bold text-white/60">{kpi.label}</span>
                    </div>
                    <span className={cn("text-[13px] font-black tracking-wider", kpi.color)}>{kpi.val}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT ANALYTICS SYSTEM (65%) */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[32px] bg-[#080B14]/60 border border-white/10 backdrop-blur-[40px] p-8 overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.8)]"
            >
              {/* Internal Grid Structure */}
              <div className="grid grid-cols-12 gap-8 relative z-10">
                
                {/* Main Graph (Top Wide) */}
                <div className="col-span-12 space-y-6">
                   <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse shadow-[0_0_8px_#f5b82e]" />
                         <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Live Engagement Velocity</span>
                      </div>
                      <div className="flex gap-4">
                         <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-sm bg-brand-gold/40" />
                            <span className="text-[8px] text-white/30 uppercase tracking-widest">Global Avg</span>
                         </div>
                         <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-sm bg-brand-gold" />
                            <span className="text-[8px] text-white/30 uppercase tracking-widest">Active Node</span>
                         </div>
                      </div>
                   </div>

                   {/* The Alive Chart */}
                   <div className="h-64 relative bg-black/40 rounded-2xl border border-white/5 overflow-hidden p-6 flex items-end">
                      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
                      
                      <svg className="absolute inset-0 w-full h-full p-6 overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 100">
                         {/* Trend Line */}
                         <motion.path 
                           d="M0 80 Q 100 20, 200 70 T 400 40 T 600 80 T 800 30 T 1000 60"
                           fill="none"
                           stroke="rgba(245,185,66,0.1)"
                           strokeWidth="2"
                         />
                         <motion.path 
                           initial={{ pathLength: 0 }}
                           animate={{ pathLength: 1 }}
                           transition={{ duration: 3, ease: "easeInOut" }}
                           d="M0 80 Q 100 20, 200 70 T 400 40 T 600 80 T 800 30 T 1000 60"
                           fill="none"
                           stroke="#f5b82e"
                           strokeWidth="2"
                           className="drop-shadow-[0_0_8px_rgba(245,185,66,0.5)]"
                         />
                         {/* Moving Points */}
                         <motion.circle 
                           animate={{ cx: [0, 1000] }}
                           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                           cy="60" r="3" fill="#f5b82e" 
                         />
                      </svg>

                      {/* Floating Data Point */}
                      <div className="absolute top-12 left-1/4 group cursor-help">
                         <div className="w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_10px_#f5b82e]" />
                         <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 rounded-lg bg-[#0b1220] border border-white/10 text-[9px] font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                            Node Sync: 12.4ms
                         </div>
                      </div>
                   </div>
                </div>

                {/* Left Mini Panel (Bottom) */}
                <div className="col-span-7 space-y-4">
                   <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between h-44">
                      <div className="flex justify-between items-start">
                         <span className="text-[9px] font-black uppercase tracking-widest text-white/30">Regional Coordination</span>
                         <div className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[7px] text-blue-500 font-bold">LIVE</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                         {[
                           { l: "EMEA Region", v: "High", c: "text-emerald-500" },
                           { l: "APAC Node", v: "Stable", c: "text-blue-500" }
                         ].map((node, i) => (
                           <div key={i} className="space-y-1">
                              <div className="text-[7px] font-black text-white/20 uppercase tracking-widest">{node.l}</div>
                              <div className={cn("text-[12px] font-bold", node.c)}>{node.v}</div>
                           </div>
                         ))}
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                         <motion.div animate={{ width: ["20%", "85%", "70%"] }} transition={{ duration: 5, repeat: Infinity }} className="h-full bg-blue-500/40" />
                      </div>
                   </div>
                </div>

                {/* Right Mini Panel (Bottom) */}
                <div className="col-span-5 space-y-4">
                   <div className="p-5 rounded-2xl bg-brand-gold/5 border border-brand-gold/10 flex flex-col justify-between h-44">
                      <div className="flex items-center gap-2">
                         <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                         <span className="text-[9px] font-black uppercase tracking-widest text-brand-gold">AI Monitoring</span>
                      </div>
                      <div className="space-y-3">
                         <p className="text-[11px] text-white/70 leading-relaxed italic">"Infrastructure scaling automatically to meet peak participant flow in cohort A-92."</p>
                         <div className="flex items-center gap-2">
                            <Check className="w-3 h-3 text-emerald-500" />
                            <span className="text-[8px] font-bold text-white/40">Resource Optimized</span>
                         </div>
                      </div>
                      <button className="w-full py-2 rounded-lg bg-brand-gold/10 border border-brand-gold/20 text-[9px] font-black uppercase tracking-widest text-brand-gold hover:bg-brand-gold hover:text-black transition-all">
                         Review Insight
                      </button>
                   </div>
                </div>

              </div>

              {/* Decorative Accent */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-gold/5 blur-[120px] -z-10" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
