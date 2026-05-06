"use client";

import { motion } from "framer-motion";
import { Cpu, Network, BarChart3, ListChecks, Users, Globe, Zap, ArrowRight } from "lucide-react";

export function ScaleStructure() {
  const cards = [
    {
      icon: Cpu,
      title: "Training Orchestration",
      description: "Manage cohorts, modules, and instructors in a single, high-fidelity plane.",
      type: "vertical",
      stats: "98.4%",
      label: "SYNC RATE"
    },
    {
      icon: Network,
      title: "Data Intelligence",
      description: "Advanced analytics that turn participation into actionable operational insights.",
      type: "horizontal",
      stats: "4.2M",
      label: "DATA POINTS"
    },
    {
      icon: BarChart3,
      title: "Corporate Systems",
      description: "Onboard thousands of employees with structured, governed training flows.",
      type: "vertical",
      stats: "10k+",
      label: "USERS"
    },
    {
      icon: ListChecks,
      title: "ROI Programs",
      description: "Measure the direct impact of every session on business outcomes.",
      type: "horizontal",
      stats: "40%",
      label: "GAIN RATE"
    }
  ];

  return (
    <section className="py-40 bg-background relative overflow-hidden">
      
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] opacity-20 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-24">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase italic">Built for scale and structure</h2>
            <p className="text-text-secondary font-light max-w-xl mx-auto text-lg leading-relaxed">
              Sophisticated infrastructure for any learning or operational use case. Standardized delivery at global volume.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-10 bg-secondary/10 border-white/5 hover:-translate-y-2 hover:border-accent/40 group relative overflow-hidden ${
                card.type === "horizontal" ? "lg:col-span-8" : "lg:col-span-4"
              }`}
            >
              {/* Internal Tiny Visuals (Graphs/Nodes) */}
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                 {card.icon === Cpu && <div className="grid grid-cols-4 gap-1"><div className="w-1 h-8 bg-accent" /><div className="w-1 h-4 bg-accent" /><div className="w-1 h-10 bg-accent" /><div className="w-1 h-6 bg-accent" /></div>}
                 {card.icon === Network && <div className="w-24 h-24 border-2 border-accent rounded-full border-dashed animate-spin-slow" />}
                 {card.icon === BarChart3 && <div className="flex gap-1 items-end"><div className="w-2 h-10 bg-accent" /><div className="w-2 h-16 bg-accent" /><div className="w-2 h-12 bg-accent" /></div>}
                 {card.icon === ListChecks && <Zap className="w-16 h-16 text-accent" />}
              </div>

              <div className="flex flex-col h-full relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-10 group-hover:bg-accent/10 transition-colors">
                  <card.icon className="w-7 h-7 text-text-secondary group-hover:text-accent" />
                </div>
                
                <div className="flex flex-col mb-10">
                   <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">{card.title}</h4>
                   <p className="text-[#A1A1AA] text-[15px] font-light leading-relaxed max-w-sm">{card.description}</p>
                </div>

                <div className="mt-auto pt-10 border-t border-white/5 flex items-center justify-between">
                   <div className="flex flex-col">
                      <span className="text-xs font-black text-accent uppercase tracking-widest leading-none mb-1">{card.label}</span>
                      <span className="text-2xl font-black text-white tracking-tighter leading-none">{card.stats}</span>
                   </div>
                   <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                      <ArrowRight className="w-5 h-5 text-text-secondary group-hover:text-black" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
