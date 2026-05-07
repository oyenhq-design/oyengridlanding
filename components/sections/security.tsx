"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Activity, ShieldCheck } from "lucide-react";

export function Security() {
  return (
    <section className="section-padding bg-security-cold">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="text-accent-gold text-[10px] font-black uppercase tracking-[0.4em] mb-6">Security Layer</div>
            <h2 className="text-white">
              Enterprise security at <span className="text-gold-gradient">every layer</span> of the ecosystem.
            </h2>
          </div>
          <div className="flex items-center gap-6 pb-2">
            {["SOC2", "GDPR", "ISO27001"].map((label) => (
              <div key={label} className="px-4 py-1.5 rounded-lg bg-white/[0.03] border border-white/10">
                <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">{label}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* LARGE PRIMARY CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 p-12 glass-card group bg-navy-midnight/40"
          >
            <ShieldCheck className="w-12 h-12 text-accent-gold/40 mb-8 group-hover:text-accent-gold transition-colors" />
            <h3 className="text-white text-[28px] font-bold mb-6">Immutable Audit Visibility</h3>
            <p className="text-white/40 text-[17px] max-w-lg leading-relaxed mb-10">
              OYEN GRID maintains a complete, tamper-proof record of every operational event and governance trigger. 
              Ensure absolute accountability across your entire delivery architecture.
            </p>
            <div className="flex items-center gap-8 opacity-60">
               <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                  <span className="text-[11px] font-black uppercase tracking-widest text-white/50">End-to-end encryption</span>
               </div>
               <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                  <span className="text-[11px] font-black uppercase tracking-widest text-white/50">Zero-trust architecture</span>
               </div>
            </div>
          </motion.div>

          {/* SMALLER FEATURE CARDS */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {[
              { label: "Permission Control", desc: "Granular RBAC for institutional logic.", icon: Lock },
              { label: "Real-time Monitoring", desc: "Live health scoring across nodes.", icon: Activity }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="p-8 glass-card group flex-1"
              >
                <item.icon className="w-6 h-6 text-accent-gold/40 mb-6 group-hover:text-accent-gold transition-colors" />
                <div className="text-white font-bold text-[18px] mb-3">{item.label}</div>
                <p className="text-white/30 text-[14px] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
