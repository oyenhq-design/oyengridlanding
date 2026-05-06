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
    <section className="py-32 relative overflow-hidden">
      
      {/* CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa" 
          alt="Operations Center" 
          className="w-full h-full object-cover opacity-20 grayscale blur-[8px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,11,13,0.88),rgba(11,11,13,0.94))]" />
        {/* Golden Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,179,1,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(245,179,1,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-8">
              Built for operational clarity <span className="text-accent">at scale.</span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary font-light max-w-2xl mx-auto leading-relaxed">
              Stop guessing. Start governing. A structured approach to complex programme delivery that removes fragmentation and manual overhead.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-12 bg-secondary/20 border-white/10 hover:border-accent/40 group relative overflow-hidden"
            >
              {/* Subtle Card Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl group-hover:bg-accent/10 transition-all pointer-events-none" />
              
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform group-hover:bg-accent/10">
                <card.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">{card.title}</h3>
              <p className="text-[#A1A1AA] font-light leading-relaxed text-[16px]">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
