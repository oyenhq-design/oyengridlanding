"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Layers, Users, Activity, Library, FileText, BarChart3 } from "lucide-react";
import Link from "next/link";

const capabilities = [
  {
    title: "Programme\nManagement",
    desc: "Structure delivery, coordinate schedules, and manage programme pipelines from a single operational surface.",
    icon: Layers,
    href: "/features/programme-management",
    index: "01",
    accent: "rgba(226,184,76,0.12)"
  },
  {
    title: "Participant\nTracking",
    desc: "Monitor engagement, progress, and performance across every cohort with precision telemetry.",
    icon: Users,
    href: "/features/participant-management",
    index: "02",
    accent: "rgba(226,184,76,0.08)"
  },
  {
    title: "Attendance\nIntelligence",
    desc: "Automated attendance capture with deep participation analytics and pattern recognition.",
    icon: Activity,
    href: "/features/attendance-intelligence",
    index: "03",
    accent: "rgba(226,184,76,0.10)"
  },
  {
    title: "Resource\nLibrary",
    desc: "Store, organise, and distribute content securely across cohorts — on-demand and in sync.",
    icon: Library,
    href: "/features/resource-library",
    index: "04",
    accent: "rgba(226,184,76,0.08)"
  },
  {
    title: "Assessments\n& Submissions",
    desc: "Design assignments, evaluate submissions, and track outcomes with structured assessment workflows.",
    icon: FileText,
    href: "/features/assessments",
    index: "05",
    accent: "rgba(226,184,76,0.10)"
  },
  {
    title: "Analytics\n& Reports",
    desc: "Real-time operational reporting with actionable insights for programme directors and stakeholders.",
    icon: BarChart3,
    href: "/features/analytics",
    index: "06",
    accent: "rgba(226,184,76,0.12)"
  }
];

export function OperationalInfrastructure() {
  return (
    <section className="py-24 md:py-32 bg-[#050816] relative overflow-hidden border-b border-white/5">

      {/* Ambient atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-brand-gold/[0.025] blur-[160px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 0.5px, transparent 0.5px)",
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">

        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="h-px w-8 bg-brand-gold/50" />
            <span className="text-[10px] font-black tracking-[0.38em] text-brand-gold uppercase">
              Platform Capabilities
            </span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-[36px] md:text-[52px] font-bold text-white leading-[1.06] tracking-[-0.03em] max-w-[560px]"
            >
              Every tool for{" "}
              <span className="text-brand-gold italic font-serif">
                programme operations.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.14 }}
              className="text-[14px] leading-relaxed text-white/40 max-w-[340px] font-light md:text-right"
            >
              One platform. Every capability your programme team needs to deliver, engage, and scale.
            </motion.p>
          </div>
        </div>

        {/* Cards Row — horizontal scroll on mobile, 6-col grid on desktop */}
        <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-6 snap-x snap-mandatory md:snap-none scrollbar-none">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex-shrink-0 w-[240px] md:w-auto snap-start"
            >
              {/* Card */}
              <div
                className="relative h-[340px] md:h-[360px] rounded-[28px] border border-white/[0.06] bg-[#080B14] flex flex-col p-7 overflow-hidden cursor-default transition-all duration-500 ease-out
                  hover:-translate-y-2
                  hover:border-brand-gold/25
                  hover:shadow-[0_28px_60px_rgba(0,0,0,0.7),0_0_0_1px_rgba(226,184,76,0.08)]"
              >

                {/* Subtle inner gradient wash */}
                <div
                  className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 30% 0%, ${cap.accent}, transparent 70%)`
                  }}
                />

                {/* Index number — top right, very subtle */}
                <div className="absolute top-6 right-6 text-[10px] font-black text-white/[0.08] tracking-[0.2em] select-none group-hover:text-white/[0.14] transition-colors duration-500">
                  {cap.index}
                </div>

                {/* Icon */}
                <div className="mb-auto">
                  <div
                    className="w-10 h-10 rounded-[12px] bg-white/[0.03] border border-white/[0.07] flex items-center justify-center mb-8
                      group-hover:bg-brand-gold/10 group-hover:border-brand-gold/30
                      group-hover:shadow-[0_0_20px_rgba(226,184,76,0.15)]
                      transition-all duration-500"
                  >
                    <cap.icon className="w-4.5 h-4.5 text-white/30 group-hover:text-brand-gold transition-colors duration-500" />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[20px] font-bold text-white leading-[1.15] tracking-[-0.02em] mb-4 whitespace-pre-line
                      group-hover:text-white transition-colors duration-300"
                  >
                    {cap.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[12px] leading-[1.65] text-white/35 group-hover:text-white/55 transition-colors duration-400 font-light">
                    {cap.desc}
                  </p>
                </div>

                {/* Learn More — reveals on hover */}
                <div className="mt-6 pt-5 border-t border-white/[0.05] group-hover:border-white/[0.10] transition-colors duration-500">
                  <Link
                    href={cap.href}
                    className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-white/20 group-hover:text-brand-gold transition-colors duration-400"
                  >
                    Learn More
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400" />
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
