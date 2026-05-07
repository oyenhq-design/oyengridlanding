"use client";

import { motion } from "framer-motion";
import { Brain, Workflow, Shield, Activity, ArrowRight } from "lucide-react";

export function OperationalIntelligence() {
  return (
    <section className="relative min-h-[800px] flex items-center overflow-hidden py-32">
      {/* FULL WIDTH BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/intel-full.png" 
          alt="Enterprise Intelligence Center" 
          className="w-full h-full object-cover grayscale-[0.3]"
        />
        {/* Layered Atmospheres */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep" />
        <div className="absolute inset-0 bg-navy-deep/20 backdrop-blur-[2px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-accent-gold text-[10px] font-black uppercase tracking-[0.4em] mb-6">Intelligence Layer</div>
            <h2 className="text-white mb-8 text-[40px] leading-[1.1]">
              Absolute operational <br />
              <span className="text-gold-gradient">intelligence</span> and control.
            </h2>
            
            <p className="text-white/60 text-[18px] mb-12 leading-relaxed">
              OYEN GRID transforms complex operational data into strategic foresight. 
              Deploy intelligent orchestration layers that predict risks and optimize delivery velocity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                { label: "AI Forecasting", icon: Brain },
                { label: "Automated Orchestration", icon: Workflow },
                { label: "Context Governance", icon: Shield },
                { label: "Live Analytics", icon: Activity }
              ].map((item, i) => (
                <div key={i} className="p-5 glass-card bg-navy-deep/40 border-white/5 backdrop-blur-3xl group flex items-center gap-4 hover:border-accent-gold/20 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-accent-gold/40 group-hover:text-accent-gold transition-colors" />
                  </div>
                  <div className="text-white font-bold text-[14px] uppercase tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>

            <button className="btn-gold px-12">
              Deploy Intelligence
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
