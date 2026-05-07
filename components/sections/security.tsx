"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Activity } from "lucide-react";

export function Security() {
  return (
    <section className="section-padding bg-security-cold border-y border-white/5">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32">
          <div className="max-w-2xl">
            <div className="text-accent-gold text-[10px] font-black uppercase tracking-[0.4em] mb-10">Security Layer</div>
            <h2 className="text-white">
              Enterprise security at <span className="text-gold-gradient font-medium italic">every layer</span> of the operational ecosystem.
            </h2>
          </div>
          <div className="flex items-center gap-6 pb-2">
            {["SOC2", "GDPR", "ISO27001"].map((label) => (
              <div key={label} className="px-5 py-2 rounded-xl bg-white/[0.01] border border-white/5">
                <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">{label}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* LARGE PRIMARY CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-8 p-16 glass-card group bg-navy-midnight/40"
          >
            <ShieldCheck className="w-14 h-14 text-accent-gold/20 mb-10 group-hover:text-accent-gold transition-all duration-700" />
            <h3 className="text-white text-[28px] font-semibold mb-8 tracking-tight">Immutable Audit Visibility</h3>
            <p className="text-white/30 text-[18px] max-w-xl leading-[1.8] mb-12 font-light">
              OYEN GRID maintains a complete, tamper-proof record of every operational event and governance trigger. 
              Ensure absolute accountability across your entire delivery architecture with high-fidelity audit streams.
            </p>
            <div className="flex items-center gap-12 opacity-40">
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-gold" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/50">End-to-end encryption</span>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-gold" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Zero-trust architecture</span>
               </div>
            </div>
          </motion.div>

          {/* SMALLER FEATURE CARDS */}
          <div className="md:col-span-4 flex flex-col gap-10">
            {[
              { label: "Permission Control", desc: "Granular RBAC for institutional logic nodes.", icon: Lock },
              { label: "Real-time Monitoring", desc: "Live health scoring across distributed nodes.", icon: Activity }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.2 }}
                className="p-10 glass-card group flex-1"
              >
                <item.icon className="w-6 h-6 text-accent-gold/20 mb-8 group-hover:text-accent-gold transition-all duration-700" />
                <div className="text-white font-semibold text-[20px] mb-4 tracking-tight">{item.label}</div>
                <p className="text-white/20 text-[15px] leading-[1.7] font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
