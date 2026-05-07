"use client";

import { motion } from "framer-motion";
import { Brain, Workflow, Shield, Activity, ArrowRight } from "lucide-react";

export function OperationalIntelligence() {
  return (
    <section className="relative min-h-[900px] flex items-center overflow-hidden py-40">
      {/* FULL WIDTH BACKGROUND IMAGE - STORYTELLING */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/intel-exec.png" 
          alt="Enterprise Intelligence Collaboration" 
          className="w-full h-full object-cover grayscale-[0.1]"
        />
        {/* Advanced Atmospheric Blending */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]" />
        <div className="absolute inset-0 bg-[#020617]/20 backdrop-blur-[1px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <div className="text-accent-gold text-[10px] font-black uppercase tracking-[0.4em] mb-10">Intelligence Layer</div>
            <h2 className="text-white mb-10 text-[36px] md:text-[42px] leading-[1.1]">
              Absolute operational <br />
              <span className="text-gold-gradient font-medium italic">intelligence</span> and control.
            </h2>
            
            <p className="text-white/50 text-[18px] mb-16 leading-[1.8] max-w-xl font-light">
              OYEN GRID transforms complex operational data into strategic foresight. 
              Deploy intelligent orchestration layers that predict risks and optimize delivery velocity at institutional scale.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
              {[
                { label: "AI Forecasting", icon: Brain, desc: "Predictive risk modeling." },
                { label: "Automated Logic", icon: Workflow, desc: "Immutable delivery orchestration." },
                { label: "Context Governance", icon: Shield, desc: "Institutional node security." },
                { label: "Live Analytics", icon: Activity, desc: "Global performance scoring." }
              ].map((item, i) => (
                <div key={i} className="p-8 glass-card bg-[#020617]/40 border-white/5 backdrop-blur-3xl group flex flex-col gap-6 hover:border-accent-gold/20 transition-all duration-700">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-accent-gold/30 transition-all duration-500">
                    <item.icon className="w-5 h-5 text-accent-gold/40 group-hover:text-accent-gold transition-colors" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-[16px] mb-2 tracking-tight">{item.label}</div>
                    <p className="text-white/20 text-[13px] font-medium leading-relaxed">{item.desc}</p>
                  </div>
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
