"use client";

import { motion } from "framer-motion";
import { Layers, ShieldCheck, Zap } from "lucide-react";

export function OperationalClarity() {
  const cards = [
    {
      icon: Layers,
      title: "The Problem",
      description: "Fragmented spreadsheets, siloed tracking, and zero structural visibility across cohorts and modules."
    },
    {
      icon: ShieldCheck,
      title: "What We Do",
      description: "Unify every data point into a single, high-fidelity infrastructure for managed programme delivery."
    },
    {
      icon: Zap,
      title: "The Outcome",
      description: "Absolute operational control, automated governance, and 2x faster scaling capabilities."
    }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Built for operational clarity <span className="text-accent">at scale.</span>
          </motion.h2>
          <p className="text-lg text-text-secondary font-light max-w-2xl mx-auto">
            Stop guessing. Start governing. A structured approach to complex programme delivery that removes fragmentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-12 hover:border-accent/30 group"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <card.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className="text-text-secondary font-light leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
