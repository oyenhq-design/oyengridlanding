"use client";

import { motion } from "framer-motion";

export function CenteredStatement() {
  return (
    <section className="section-padding bg-analytics-glow relative overflow-hidden border-y border-white/5">
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-[10px] font-black text-accent-gold/40 uppercase tracking-[0.5em] mb-14">
            Institutional Standard
          </div>
          
          <h2 className="text-white text-[32px] md:text-[44px] leading-[1.15] font-medium mb-12">
            Coordinate complex global programmes <br className="hidden md:block" />
            with <span className="text-gold-gradient italic">absolute integrity.</span>
          </h2>
          
          <div className="w-16 h-px bg-accent-gold/20 mx-auto mb-12" />
          
          <p className="text-white/30 text-[18px] max-w-2xl mx-auto leading-[1.8] font-light">
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
