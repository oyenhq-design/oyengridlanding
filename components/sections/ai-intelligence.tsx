"use client";

import { motion } from "framer-motion";
import { Sparkles, Brain, Cpu, Zap, Activity, TrendingUp, BarChart3, ArrowRight } from "lucide-react";

export function AIIntelligence() {
  return (
    <section className="py-40 relative overflow-hidden bg-[#050812]">
      {/* Background Depth Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full grid-mesh opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,179,1,0.04),transparent_70%)]" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <div className="max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-[11px] font-black tracking-[0.3em] text-white uppercase">Operational Intelligence</span>
            </div>
            <h2 className="text-[36px] md:text-[44px] font-bold text-white tracking-tight leading-[1.1] mb-8">
              Predictive engines <br />
              <span className="text-white/40 italic">for high-performance cohorts.</span>
            </h2>
            <p className="text-[18px] text-white/50 leading-relaxed font-light">
              Scale your institutional intelligence with proprietary AI models that identify at-risk participants, optimize delivery schedules, and automate complex assessment loops.
            </p>
          </motion.div>
        </div>

        <div className="relative group max-w-5xl mx-auto">
           {/* CENTRAL VISUAL - HOLOGRAPHIC UI PREVIEW */}
           <motion.div
             initial={{ opacity: 0, scale: 0.98 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-[0_60px_120px_rgba(0,0,0,0.8)]"
           >
              <div className="absolute inset-0 bg-gradient-to-t from-[#050812] via-transparent to-transparent opacity-80" />
              <img src="/ai-intel.png" alt="AI Intelligence" className="w-full h-auto opacity-70 grayscale group-hover:grayscale-0 transition-all duration-1000" />
              
              {/* LIVE UI - Floating AI Analysis Tracker */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-card p-10 bg-[#050A19]/90 border-accent/20 backdrop-blur-3xl shadow-[0_0_80px_rgba(245,179,1,0.15)] text-center w-[400px] z-20"
              >
                 <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center mx-auto mb-8 relative">
                    <Brain className="w-8 h-8 text-accent animate-pulse" />
                    <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping" />
                 </div>
                 <div className="text-[11px] font-black text-accent uppercase tracking-widest mb-4">Analysis Engine Running</div>
                 <div className="text-2xl font-bold text-white tracking-tighter mb-8">Predicting Outcomes...</div>
                 
                 <div className="space-y-6 text-left">
                    {[
                      { label: "Cohort A-12 Health", val: "Optimal", color: "text-green-500" },
                      { label: "Engagement Risk", val: "Minimal", color: "text-accent" },
                      { label: "Delivery Efficiency", val: "94.2%", color: "text-white" }
                    ].map((row, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-white/5 pb-3">
                         <span className="text-[12px] text-white/30 font-medium">{row.label}</span>
                         <span className={`text-[13px] font-bold ${row.color}`}>{row.val}</span>
                      </div>
                    ))}
                 </div>
              </motion.div>

              {/* Data Stream indicators */}
              <div className="absolute top-12 left-12">
                 <div className="flex items-center gap-3">
                    <Activity className="w-4 h-4 text-accent" />
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Real-time Learning Logic</span>
                 </div>
              </div>
           </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-32">
           {[
             { title: "Risk Prediction", desc: "Identify underperforming cohorts before graduation.", icon: TrendingUp },
             { title: "Automated Grading", desc: "AI-driven assessment for high-volume delivery.", icon: Zap },
             { title: "Smart Scheduling", desc: "Optimized session timing based on behavioral data.", icon: BarChart3 },
             { title: "NLP Insights", desc: "Analyze participant sentiment across all sessions.", icon: Brain }
           ].map((item, i) => (
             <div key={i} className="glass-card p-8 bg-white/[0.02] border-white/5 hover:border-accent/40 transition-all group">
                <item.icon className="w-6 h-6 text-white/20 mb-6 group-hover:text-accent transition-colors" />
                <h4 className="text-lg font-bold text-white tracking-tight mb-4">{item.title}</h4>
                <p className="text-[13px] text-white/30 leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
