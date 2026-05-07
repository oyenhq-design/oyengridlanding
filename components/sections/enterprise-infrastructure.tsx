"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Globe, Layout } from "lucide-react";

export function EnterpriseInfrastructure() {
  const bullets = [
    "Structured Programme Orchestration",
    "Automated Delivery Engine",
    "Global Governance Control",
    "Scale-Ready Infrastructure"
  ];

  const cards = [
    { title: "Global Scale", desc: "Enterprise-grade delivery for thousands of users.", icon: Globe },
    { title: "Precision Logic", desc: "Enforce absolute prerequisite programme rules.", icon: Zap },
    { title: "Immutable Audit", desc: "Deep structural auditing for global compliance.", icon: Shield }
  ];

  return (
    <section className="py-40 relative bg-[#050816] overflow-hidden">
      <div className="container-custom max-w-[1400px] relative z-10">
        
        {/* TOP: GRID (2 COLS) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          
          {/* LEFT: HEADING + BULLETS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
               <div className="h-px w-8 bg-accent" />
               <span className="text-accent text-[11px] font-black tracking-[0.4em] uppercase">SYSTEM CORE</span>
            </div>
            <h2 className="mb-12 text-white">
              Enterprise infrastructure <br />
              <span className="text-gold-gradient italic">for high-fidelity delivery.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bullets.map((bullet, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-40 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_#D4A62A]" />
                  <span className="text-white/60 group-hover:text-white transition-colors text-[15px] font-medium tracking-tight">{bullet}</span>
                </div>
              ))}
            </div>
            <button className="btn-primary mt-12 h-12 px-8 text-xs">Explore Architecture</button>
          </motion.div>

          {/* RIGHT: LARGE DASHBOARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-10 bg-accent/5 blur-[120px] rounded-full pointer-events-none opacity-40" />
              <div className="relative rounded-[48px] overflow-hidden shadow-[0_60px_100px_rgba(0,0,0,0.8)] border-none">
                <img 
                  src="/wide-dashboard.png" 
                  alt="Infrastructure Dashboard" 
                  className="w-full h-auto opacity-80 group-hover:scale-105 transition-transform duration-1000 grayscale-[0.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#050816]/60 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM: 3 SMALL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 bg-[#050816]/30 border-none hover:bg-white/[0.04] transition-all group shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
            >
              <card.icon className="w-6 h-6 text-accent/30 mb-8 group-hover:text-accent transition-colors" />
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{card.title}</h3>
              <p className="opacity-30 text-[14px] group-hover:opacity-60 transition-opacity leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
