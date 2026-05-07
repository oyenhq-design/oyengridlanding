"use client";

import { motion } from "framer-motion";

export function CenteredStatement() {
  return (
    <section className="section-padding bg-analytics-glow relative overflow-hidden">
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-[11px] font-black text-accent-gold/60 uppercase tracking-[0.5em] mb-10">
            Institutional Standard
          </div>
          
          <h2 className="text-white text-[32px] md:text-[48px] leading-[1.1] font-bold mb-10">
            Coordinate complex programmes with <br />
            <span className="text-gold-gradient italic">absolute integrity.</span>
          </h2>
          
          <p className="text-white/40 text-[18px] max-w-2xl mx-auto leading-relaxed">
            OYEN GRID provides the foundational architecture for enterprise delivery. 
            Automate logic, secure governance, and scale global operations from a single unified command layer.
          </p>
        </motion.div>
      </div>

      {/* Subtle depth elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
