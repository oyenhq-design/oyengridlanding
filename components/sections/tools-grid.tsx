"use client";

import { motion } from "framer-motion";
import { Zap, Settings, Repeat, FileBarChart } from "lucide-react";

export function ToolsGrid() {
  const tools = [
    { icon: Zap, title: "Execution", desc: "Rapidly deploy curriculum and scale sessions across cohorts." },
    { icon: Settings, title: "Operations", desc: "Streamline logistics and management with a centralized dashboard." },
    { icon: Repeat, title: "Automation", desc: "Remove manual tasks with triggered workflows and notifications." },
    { icon: FileBarChart, title: "Reporting", desc: "Export high-fidelity reports for stakeholders and compliance." }
  ];

  return (
    <section className="py-32 bg-background border-y border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 hover:border-accent/40 group text-center cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform">
                <tool.icon className="w-7 h-7 text-text-secondary group-hover:text-accent" />
              </div>
              <h4 className="text-xl font-bold mb-4">{tool.title}</h4>
              <p className="text-text-secondary text-sm font-light leading-relaxed">{tool.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
