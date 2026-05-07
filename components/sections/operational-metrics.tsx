"use client";

import { motion } from "framer-motion";

export function OperationalMetrics() {
  return (
    <section className="section-padding bg-analytics-glow border-y border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* LEFT: STRATEGIC CONTEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-accent-gold text-[10px] font-black uppercase tracking-[0.4em] mb-6">Performance Audit</div>
            <h2 className="text-white mb-8">
              Validated operational <br />
              <span className="text-gold-gradient">velocity</span> at scale.
            </h2>
            <p className="text-white/40 text-[18px] leading-relaxed max-w-md">
              We benchmark every deployment against rigorous institutional standards. 
              OYEN GRID consistently delivers high-fidelity outcomes for the world's most complex programme networks.
            </p>
          </motion.div>

          {/* RIGHT: DUAL METRIC STACK */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {[
               { val: "99.9%", label: "Uptime SLA", desc: "Institutional-grade infrastructure resilience for global delivery." },
               { val: "4.5x", label: "Efficiency Gain", desc: "Accelerated programme orchestration across distributed nodes." }
             ].map((metric, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: i * 0.2 }}
                 className="p-10 glass-card bg-navy-midnight/40 border-white/5 flex flex-col justify-between group"
               >
                  <div className="text-[56px] font-bold text-white mb-2 tracking-tighter group-hover:text-accent-gold transition-colors">
                    {metric.val}
                  </div>
                  <div>
                    <div className="text-accent-gold text-[11px] font-black uppercase tracking-[0.3em] mb-4">{metric.label}</div>
                    <p className="text-white/30 text-[14px] leading-relaxed">{metric.desc}</p>
                  </div>
               </motion.div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
}
