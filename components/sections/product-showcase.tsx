"use client";

import { motion } from "framer-motion";
import { Shield, BarChart3, Database } from "lucide-react";

export function ProductShowcase() {
  const labels = [
    { text: "Cohort Intelligence", icon: BarChart3, top: "20%", left: "10%" },
    { text: "Governance Tracking", icon: Shield, top: "15%", right: "12%" },
    { text: "Infrastructure Health", icon: Database, bottom: "25%", left: "15%" }
  ];

  return (
    <section className="section-padding relative bg-secondary overflow-hidden">
      <div className="noise-bg absolute inset-0" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-accent text-[10px] font-black tracking-[0.4em] uppercase opacity-60">VISUAL PRODUCT SHOWCASE</span>
            </div>
            <h2 className="text-white mb-6">The operating system for <br /> <span className="text-gold-gradient italic">high-fidelity programmes.</span></h2>
            <p className="text-white/40 max-w-xl mx-auto font-light">
              Experience the power of structural clarity. OYEN GRID provides a comprehensive mission-control view for complex enterprise operations.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative rounded-2xl overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.9)] border border-white/5 bg-background"
          >
            <img 
              src="/product-showcase.png" 
              alt="OYEN GRID Analytics Dashboard" 
              className="w-full h-auto opacity-95"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-40" />
          </motion.div>

          {/* Floating Labels */}
          {labels.map((label, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
              className="absolute hidden lg:flex items-center gap-3 glass-card py-3 px-5 bg-background/80 border-white/10 backdrop-blur-xl shadow-2xl"
              style={{ top: label.top, left: label.left, right: label.right, bottom: label.bottom }}
            >
              <label.icon className="w-3.5 h-3.5 text-accent" />
              <span className="text-[11px] font-bold text-white tracking-tight">{label.text}</span>
            </motion.div>
          ))}
          
          {/* Ambient Glow */}
          <div className="absolute -inset-20 bg-accent/5 blur-[120px] rounded-full pointer-events-none opacity-30" />
        </div>
      </div>
    </section>
  );
}
