"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Shield, Zap, Database } from "lucide-react";

export function EnterpriseInfrastructure() {
  return (
    <>
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* LEFT: CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-white mb-8">
                Enterprise infrastructure for high-fidelity delivery.
              </h2>
              
              <div className="space-y-6 mb-12">
                {[
                  "Distributed governance",
                  "Automated infrastructure",
                  "Secure delivery architecture"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-gold/10 flex items-center justify-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-gold" />
                    </div>
                    <span className="text-white/70 text-[18px]">{item}</span>
                  </div>
                ))}
              </div>

              <button className="btn-outline">
                Explore Architecture
              </button>
            </motion.div>

            {/* RIGHT: IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.6)] bg-[#070B1D]">
                <img 
                  src="/infra-monitor.png" 
                  alt="Infrastructure Monitor" 
                  className="w-full h-auto object-cover opacity-90 transition-transform duration-[4s] hover:scale-105"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* MINI FEATURE STRIP */}
      <section className="py-12 border-y border-white/5 bg-white/[0.01]">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
            {[
              { label: "Global Scale", icon: Database },
              { label: "Precision Logic", icon: Zap },
              { label: "Immutable Audit", icon: Shield }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <item.icon className="w-5 h-5 text-accent-gold/40 group-hover:text-accent-gold transition-colors" />
                <span className="text-white/40 group-hover:text-white font-bold text-[14px] uppercase tracking-[0.2em] transition-colors">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
