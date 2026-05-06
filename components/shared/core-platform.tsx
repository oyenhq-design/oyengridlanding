"use client";

import { motion } from "framer-motion";
import { Server, Users, MonitorPlay, FileStack } from "lucide-react";

const CARDS = [
  {
    icon: Server,
    title: "Programme Hosting",
    desc: "Host structured learning programmes with defined cohorts, timelines, and delivery milestones. Scale from a single bootcamp to hundreds of concurrent programmes.",
    tag: "Infrastructure",
  },
  {
    icon: Users,
    title: "Participant Management",
    desc: "Track every participant from enrollment to graduation. Monitor engagement, flag risks, and surface insights that help you intervene before it's too late.",
    tag: "Operations",
  },
  {
    icon: MonitorPlay,
    title: "Session Delivery",
    desc: "Schedule and run live sessions with built-in attendance tracking, recordings, and post-session workflows. Every session leaves a structured data trail.",
    tag: "Delivery",
  },
  {
    icon: FileStack,
    title: "Content Management",
    desc: "Organize learning materials, resources, and assessments into clean module structures. Reuse content across programmes with version control and permissions.",
    tag: "Content",
  },
];

export function CorePlatform() {
  return (
    <section className="py-32 bg-[#0D0D10] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/[0.05]" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/[0.05]" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#A1A1AA] text-[12px] font-bold tracking-[0.25em] uppercase mb-5"
          >
            Core Platform
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[38px] md:text-[50px] font-bold text-white tracking-tight leading-tight"
          >
            The four pillars of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B942] to-[#D4A017]">
              programme operations
            </span>
          </motion.h2>
        </div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative bg-[rgba(18,18,22,0.8)] backdrop-blur-xl border border-white/[0.06] rounded-3xl p-8 overflow-hidden transition-all duration-300 hover:border-[#F5B942]/30 hover:shadow-[0_8px_40px_rgba(245,185,66,0.08)]"
              >
                {/* Hover glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5B942]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                <div className="relative z-10">
                  {/* Tag */}
                  <span className="text-[#52525B] text-[10px] font-bold tracking-[0.2em] uppercase mb-6 block">
                    {card.tag}
                  </span>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#F5B942]/10 group-hover:border-[#F5B942]/30 shadow-sm">
                    <Icon className="w-5 h-5 text-[#71717A] transition-colors duration-300 group-hover:text-[#F5B942]" />
                  </div>

                  <h3 className="text-[22px] font-bold text-white mb-4 group-hover:text-white transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[#71717A] text-[14px] leading-relaxed font-light group-hover:text-[#A1A1AA] transition-colors">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
