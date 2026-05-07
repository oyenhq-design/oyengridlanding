"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Shield, Zap, Database } from "lucide-react";

export function EnterpriseInfrastructure() {
  return (
    <>
      <section className="section-padding bg-security-cold">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* LEFT: CINEMATIC IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-accent-gold/5 blur-2xl rounded-[40px] opacity-40" />
              <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.7)] bg-[#070B1D] aspect-[1.1]">
                <img 
                  src="/infra-left.png" 
                  alt="Infrastructure Command" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </motion.div>

            {/* RIGHT: STACKED FEATURES */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-accent-gold text-[10px] font-black uppercase tracking-[0.4em] mb-6">Execution Layer</div>
              <h2 className="text-white mb-8">
                Enterprise infrastructure for <span className="text-gold-gradient">fidelity</span> delivery.
              </h2>
              
              <div className="space-y-10">
                {[
                  { title: "Distributed governance", desc: "Enforce global standards across every node." },
                  { title: "Automated infrastructure", desc: "Scale delivery logic with precise orchestration." },
                  { title: "Secure architecture", desc: "Immutable audit logs and encrypted data flow." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-accent-gold/30 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-accent-gold/40 group-hover:text-accent-gold transition-colors" />
                    </div>
                    <div>
                       <div className="text-white font-bold text-[18px] mb-2">{item.title}</div>
                       <p className="text-white/40 text-[15px] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* REFINED FEATURE STRIP */}
      <section className="py-16 border-y border-white/5 bg-navy-midnight">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
            {[
              { label: "Global Scale", icon: Database },
              { label: "Precision Logic", icon: Zap },
              { label: "Immutable Audit", icon: Shield }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <item.icon className="w-5 h-5 text-accent-gold/20 group-hover:text-accent-gold transition-all duration-500" />
                <span className="text-white/20 group-hover:text-white font-bold text-[13px] uppercase tracking-[0.2em] transition-colors">
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
