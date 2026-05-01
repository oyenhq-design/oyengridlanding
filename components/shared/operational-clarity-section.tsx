"use client";

import { Box, Lock, Zap, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const CARDS = [
  {
    title: "Unified Infrastructure",
    description: "Replace your fragmented tech stack with a single, cohesive ecosystem designed for scale.",
    icon: Box,
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade encryption, SSO, and granular role-based access control built in.",
    icon: Lock,
  },
  {
    title: "Automated Workflows",
    description: "Remove manual bottlenecks with powerful automation rules and triggers.",
    icon: Zap,
  },
  {
    title: "Executive Reporting",
    description: "Board-ready metrics and real-time dashboards for complete operational oversight.",
    icon: BarChart3,
  }
];

export function OperationalClaritySection() {
  return (
    <section className="py-24 md:py-32 bg-[#0B0B0C]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        <div className="mb-16">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-white tracking-tight mb-4">
            Built for operational clarity
          </h2>
          <p className="text-[16px] text-[#A1A1AA] max-w-2xl">
            Everything you need to run, track, and scale complex programmes without the overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx} 
                className="flex flex-col p-6 bg-[#121214] border border-[#333333]/40 rounded-xl hover:border-[#D4AF37]/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 mb-5 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#D4AF37] opacity-80 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                </div>
                <h3 className="text-[18px] font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-[14px] text-[#A1A1AA] leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
