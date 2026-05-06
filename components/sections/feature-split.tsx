"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function FeatureSplit() {
  const bullets = [
    "Real-time performance tracking across all cohorts",
    "Automated workflow engine for seamless delivery",
    "Granular data governance and enterprise security",
    "Scalable infrastructure for multi-tenant deployments"
  ];

  return (
    <section className="py-32 bg-secondary/30 border-y border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Left: Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              A unified system for <br />
              <span className="text-accent">high-performance delivery</span>
            </h2>
            <p className="text-lg text-text-secondary font-light leading-relaxed mb-10">
              OYEN GRID transforms fragmented operations into a cohesive, high-fidelity system. Manage sessions, participants, and outcomes in one plane.
            </p>
            <div className="space-y-4">
              {bullets.map((bullet, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-white font-medium">{bullet}</span>
                </div>
              ))}
            </div>
            <button className="btn-primary mt-12">Explore the System</button>
          </motion.div>

          {/* Right: Card UI Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card p-4 lg:p-8 bg-tertiary relative overflow-hidden group border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-[#0A0A0A]" />
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bbbda536639a" 
                  alt="Analytics UI" 
                  className="w-full rounded-lg opacity-90 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/20 blur-[60px] rounded-full pointer-events-none" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
