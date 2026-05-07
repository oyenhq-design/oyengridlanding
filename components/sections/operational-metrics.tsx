"use client";

import { motion } from "framer-motion";

export function OperationalMetrics() {
  return (
    <section className="section-padding bg-analytics-glow border-y border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          
          {/* LEFT: STRATEGIC CONTEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="text-accent-gold text-[10px] font-black uppercase tracking-[0.4em] mb-10">Performance Audit</div>
            <h2 className="text-white mb-10 max-w-sm">
              Validated operational <br />
              <span className="text-gold-gradient font-medium italic">velocity</span> at scale.
            </h2>
            <p className="text-white/30 text-[18px] leading-[1.8] max-w-md font-light">
              We benchmark every deployment against rigorous institutional standards. 
              OYEN GRID consistently delivers high-fidelity outcomes for the world's most complex programme networks.
            </p>
          </motion.div>

          {/* RIGHT: DUAL METRIC STACK */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             {[
               { val: "99.9%", label: "Uptime SLA", desc: "Institutional-grade infrastructure resilience for global delivery." },
               { val: "4.5x", label: "Efficiency Gain", desc: "Accelerated programme orchestration across distributed nodes." }
             ].map((metric, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1, delay: i * 0.2 }}
                 className="p-12 glass-card bg-navy-midnight/40 border-white/5 flex flex-col justify-between group"
               >
                  <div className="text-[52px] font-medium text-white mb-4 tracking-tighter group-hover:text-accent-gold transition-colors duration-500">
                    {metric.val}
                  </div>
                  <div>
                    <div className="text-accent-gold text-[10px] font-black uppercase tracking-[0.3em] mb-6">{metric.label}</div>
                    <p className="text-white/20 text-[14px] leading-[1.7] font-medium">{metric.desc}</p>
                  </div>
               </motion.div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
}
