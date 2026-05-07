"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Shield, Zap, Database } from "lucide-react";

export function EnterpriseInfrastructure() {
  return (
    <>
      <section className="section-padding bg-security-cold overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            
            {/* LEFT: CINEMATIC STORYTELLING IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative"
            >
              <div className="absolute -inset-20 bg-accent-gold/5 blur-[120px] rounded-full opacity-30" />
              <div className="relative rounded-[48px] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.8)] bg-[#01030a] aspect-[1.1]">
                <img 
                  src="/infra-ops.png" 
                  alt="Infrastructure Command Center" 
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-[3s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-40" />
              </div>

              {/* FLOATING STATUS MODULE */}
              <div className="absolute -bottom-10 -right-10 p-10 glass-card bg-[#020617]/90 backdrop-blur-3xl min-w-[280px]">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center">
                       <Zap className="w-5 h-5 text-accent-gold" />
                    </div>
                    <div>
                       <div className="text-white font-bold text-[16px]">Node Velocity</div>
                       <div className="text-white/40 text-[10px] font-black uppercase tracking-widest">Global Aggregate</div>
                    </div>
                 </div>
                 <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "84%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 0.5 }}
                      className="h-full bg-accent-gold" 
                    />
                 </div>
              </div>
            </motion.div>

            {/* RIGHT: EDITORIAL FEATURE SET */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="text-accent-gold text-[10px] font-black uppercase tracking-[0.4em] mb-10">Execution Layer</div>
              <h2 className="text-white mb-10 max-w-md">
                Infrastructure built for <span className="text-gold-gradient font-medium italic">fidelity</span> delivery at global scale.
              </h2>
              
              <div className="space-y-12">
                {[
                  { title: "Distributed governance", desc: "Enforce institutional standards across every global node." },
                  { title: "Automated infrastructure", desc: "Scale complex delivery logic with precise orchestration." },
                  { title: "Immutable architecture", desc: "Tamper-proof audit logs and encrypted operational flow." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover:border-accent-gold/30 transition-all duration-500">
                      <CheckCircle2 className="w-4 h-4 text-accent-gold/30 group-hover:text-accent-gold transition-colors" />
                    </div>
                    <div className="pt-2">
                       <div className="text-white font-semibold text-[19px] mb-3 tracking-tight">{item.title}</div>
                       <p className="text-white/30 text-[16px] leading-[1.7] max-w-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* REFINED TRUST STRIP */}
      <section className="py-20 border-y border-white/5 bg-[#01030a]">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
            {[
              { label: "Global Scale", icon: Database },
              { label: "Precision Logic", icon: Zap },
              { label: "Immutable Audit", icon: Shield }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <item.icon className="w-4 h-4 text-accent-gold/10 group-hover:text-accent-gold transition-all duration-700" />
                <span className="text-white/10 group-hover:text-white/40 font-bold text-[11px] uppercase tracking-[0.4em] transition-all duration-700">
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
