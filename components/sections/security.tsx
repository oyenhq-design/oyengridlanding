"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Activity } from "lucide-react";

export function Security() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT: IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.6)] bg-[#070B1D]">
              <img 
                src="/security-room.png" 
                alt="Security Operations Room" 
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
          >
            <h2 className="text-white mb-8">
              Enterprise security at every layer.
            </h2>
            
            <div className="space-y-8 mb-12">
              {[
                { label: "Audit visibility", desc: "Complete immutable logs of every operational event.", icon: Eye },
                { label: "Permission control", desc: "Granular RBAC and institutional-grade access logic.", icon: Lock },
                { label: "Infrastructure protection", desc: "Isolated nodes and encrypted data delivery.", icon: Shield },
                { label: "Monitoring", desc: "Live health scoring and predictive risk mitigation.", icon: Activity }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-gold/5 border border-accent-gold/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-accent-gold" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-[18px] mb-1">{item.label}</div>
                    <p className="text-[14px]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* COMPLIANCE LABELS */}
            <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-white/5">
              {["SOC2", "GDPR", "ISO27001"].map((label) => (
                <div key={label} className="px-5 py-2 rounded-lg bg-white/[0.03] border border-white/10">
                  <span className="text-white/40 text-[11px] font-black uppercase tracking-[0.2em]">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
