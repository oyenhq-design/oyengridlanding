"use client";

import { motion } from "framer-motion";
import { AlertCircle, Layers, Fingerprint, Network, ArrowRight } from "lucide-react";

export function WhyOyen() {
  return (
    <section className="py-40 relative overflow-hidden bg-[#050812]">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,179,1,0.02),transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
             <h2 className="text-[32px] md:text-[44px] font-bold text-white tracking-tight leading-[1.1] mb-10">
               Most programme infrastructure <br />
               <span className="text-white/40 italic">breaks at absolute scale.</span>
             </h2>
             <p className="text-[17px] text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
               Fragmented systems, disconnected operations, and poor visibility create manual bottlenecks that prevent enterprise growth. OYEN GRID unifies operational intelligence into a single structural layer.
             </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
             <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-lg">
                   <AlertCircle className="w-6 h-6 text-accent/60" />
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight">The Problem of Friction</h4>
                <p className="text-[14px] text-white/30 leading-relaxed">
                   Manual participant tracking and disjointed curriculum delivery lead to 40% operational wastage.
                </p>
             </div>
             <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-lg">
                   <Layers className="w-6 h-6 text-accent/60" />
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight">Structural Disconnect</h4>
                <p className="text-[14px] text-white/30 leading-relaxed">
                   Data silos between cohorts, trainers, and administrators prevent real-time strategic intelligence.
                </p>
             </div>
             <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-lg">
                   <Fingerprint className="w-6 h-6 text-accent/60" />
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight">Governance Failure</h4>
                <p className="text-[14px] text-white/30 leading-relaxed">
                   Lack of immutable audit trails and granular permissions exposes large-scale programmes to risk.
                </p>
             </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-16 bg-white/[0.02] border-white/5 rounded-[40px] text-center relative overflow-hidden"
          >
             {/* Glowing Pulse behind CTA */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 blur-[100px] rounded-full" />
             
             <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">Unify your operational environment.</h3>
                <p className="text-white/40 text-[16px] max-w-xl mx-auto mb-12 leading-relaxed">
                   Transform fragmented processes into high-fidelity infrastructure. Engineered for institutional reliability.
                </p>
                <button className="btn-primary h-[54px] px-12 text-[14px] font-black uppercase tracking-widest flex items-center gap-3 mx-auto">
                   Explore Structural Logic <ArrowRight className="w-4 h-4" />
                </button>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
