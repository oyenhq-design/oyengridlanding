"use client";

import { motion } from "framer-motion";
import { Brain, Workflow, Shield, Activity } from "lucide-react";

export function OperationalIntelligence() {
  const capabilities = [
    { title: "AI Forecasting", icon: Brain, desc: "Predictive operational logic" },
    { title: "Automated Orchestration", icon: Workflow, desc: "Seamless programme flow" },
    { title: "Content Governance", icon: Shield, desc: "Secure asset management" },
    { title: "Live Analytics", icon: Activity, desc: "Real-time decision metrics" }
  ];

  return (
    <section className="section-padding overflow-hidden relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 relative"
          >
            <div className="ambient-glow -bottom-20 -left-20 w-[600px] h-[600px] opacity-20" />
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-[0_60px_120px_rgba(0,0,0,0.8)] bg-navy-light aspect-[16/11]">
              <img 
                src="/monitor-intelligence.png" 
                alt="Operational Intelligence Monitor" 
                className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <h2 className="text-[36px] md:text-[48px] font-bold text-white mb-10 leading-[1.1] tracking-tight">
              Absolute operational <br />
              <span className="text-gold-gradient italic font-medium">intelligence and control.</span>
            </h2>
            
            <p className="text-[17px] text-white/40 mb-12 max-w-[480px] leading-relaxed font-light">
              Leverage high-fidelity data to drive strategic programme outcomes. OYEN GRID transforms complex delivery into a streamlined, intelligent operating system.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-12">
              {capabilities.map((cap, i) => (
                <div key={i} className="p-6 glass-card bg-white/[0.01] border-white/5 hover:border-accent-gold/20 group cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-5 group-hover:bg-accent-gold/5 transition-colors">
                    <cap.icon className="w-5 h-5 text-accent-gold" />
                  </div>
                  <div className="text-[14px] font-bold text-white mb-1.5">{cap.title}</div>
                  <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-black">{cap.desc}</div>
                </div>
              ))}
            </div>

            <button className="btn-gold h-12 px-10 rounded-full font-bold">
              Explore Intelligence
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
