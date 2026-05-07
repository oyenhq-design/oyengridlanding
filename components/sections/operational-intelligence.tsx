"use client";

import { motion } from "framer-motion";
import { Brain, Workflow, Shield, Activity, ArrowRight } from "lucide-react";

export function OperationalIntelligence() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT: IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.6)] bg-[#070B1D]">
              <img 
                src="/ops-intelligence.png" 
                alt="Operational Intelligence Dashboard" 
                className="w-full h-auto object-cover opacity-90 transition-transform duration-[4s] hover:scale-105"
              />
            </div>
          </motion.div>

          {/* RIGHT: CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-white mb-8">
              Absolute operational intelligence and control.
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                { label: "AI Forecasting", icon: Brain },
                { label: "Automated Orchestration", icon: Workflow },
                { label: "Context Governance", icon: Shield },
                { label: "Live Analytics", icon: Activity }
              ].map((item, i) => (
                <div key={i} className="p-6 glass-card group">
                  <item.icon className="w-6 h-6 text-accent-gold/40 mb-4 group-hover:text-accent-gold transition-colors" />
                  <div className="text-white font-bold text-[16px]">{item.label}</div>
                </div>
              ))}
            </div>

            <button className="btn-gold px-10">
              Deploy Intelligence
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
