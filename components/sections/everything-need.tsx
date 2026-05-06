"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function EverythingNeed() {
  const bullets = [
    "Modular curriculum and programme builder",
    "Automated participant tracking and attendance",
    "Centralized resource and recording library",
    "High-fidelity reporting and ROI analytics",
    "Enterprise-grade security and permissions"
  ];

  return (
    <section className="py-32 bg-secondary/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Left: Text Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Everything you need to <br />
              <span className="text-accent">operate with power.</span>
            </h2>
            <p className="text-lg text-text-secondary font-light leading-relaxed mb-10">
              Stop stitching together disparate tools. OYEN GRID provides a comprehensive suite of tools designed to work in perfect harmony.
            </p>
            <div className="space-y-5">
              {bullets.map((bullet, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-white font-medium">{bullet}</span>
                </div>
              ))}
            </div>
            <button className="btn-primary mt-12">See All Features</button>
          </motion.div>

          {/* Right: Large UI Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card border-white/10 p-2 lg:p-4 shadow-2xl bg-tertiary">
              <div className="relative rounded-lg overflow-hidden border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                  alt="Platform Overview" 
                  className="w-full aspect-[1.3/1] object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
            {/* Decorative Glow */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
