"use client";

import { motion } from "framer-motion";
import { Cpu, Network, BarChart3, ListChecks } from "lucide-react";

export function ScaleStructure() {
  const cards = [
    {
      icon: Cpu,
      title: "Training Orchestration",
      description: "Manage cohorts, modules, and instructors in a single, high-fidelity plane."
    },
    {
      icon: Network,
      title: "Data Intelligence",
      description: "Advanced analytics that turn participation into actionable operational insights."
    },
    {
      icon: BarChart3,
      title: "Corporate Systems",
      description: "Onboard thousands of employees with structured, governed training flows."
    },
    {
      icon: ListChecks,
      title: "ROI Programs",
      description: "Measure the direct impact of every session on business outcomes."
    }
  ];

  return (
    <section className="py-32 bg-background border-b border-white/5">
      <div className="container-custom">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold mb-6">Built for scale and structure</h2>
          <p className="text-text-secondary font-light max-w-xl mx-auto">
            Sophisticated infrastructure for any learning or operational use case.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 hover:-translate-y-2 hover:border-accent/40 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-8 group-hover:bg-accent/10 transition-colors">
                <card.icon className="w-6 h-6 text-text-secondary group-hover:text-accent" />
              </div>
              <h4 className="text-xl font-bold mb-4">{card.title}</h4>
              <p className="text-text-secondary text-sm font-light leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
