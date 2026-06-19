"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, Shield, TrendingUp, Activity, Database } from "lucide-react";

const trustPoints = [
  "End-to-end data encryption",
  "Fine-grained role permissions",
  "Immutable system audit logs",
  "99.9% guaranteed uptime SLA",
  "Automated daily database backups",
  "SOC2 Type II compliance ready",
];

const nodes = [
  {
    id: "security",
    label: "Security",
    desc: "Bank-grade data isolation",
    icon: Shield,
    x: 260,
    y: 50,
    textOffsetClass: "left-16 top-1 text-left",
  },
  {
    id: "scalability",
    label: "Scalability",
    desc: "Optimized for heavy cohort loads",
    icon: TrendingUp,
    x: 360,
    y: 150,
    textOffsetClass: "left-16 top-1 text-left",
  },
  {
    id: "reliability",
    label: "Reliability",
    desc: "99.9% uptime telemetry",
    icon: Activity,
    x: 310,
    y: 260,
    textOffsetClass: "left-16 top-1 text-left",
  },
  {
    id: "governance",
    label: "Governance",
    desc: "Fine-grained audit logs",
    icon: Database,
    x: 190,
    y: 330,
    textOffsetClass: "left-16 top-1 text-left",
  },
];

export function ScaleStructure() {
  const centerX = 70;
  const centerY = 190;

  return (
    <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden border-b border-white/5">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-[0.16] pointer-events-none" 
        style={{ backgroundImage: "url('/infra-bg.png')" }} 
      />

      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[800px] h-[500px] bg-[#F5D76E]/[0.02] blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#F5D76E]/[0.015] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT COLUMN: CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#F5D76E]/40" />
              <span className="text-[10px] font-black tracking-[0.3em] text-[#F5D76E] uppercase">
                Enterprise Infrastructure
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-[44px] font-extrabold text-white leading-[1.1] tracking-tight mb-6 max-w-[500px]">
              Powered by secure, scalable,{" "}
              <span className="text-[#F5D76E] italic font-serif font-normal">
                enterprise-grade
              </span>{" "}
              infrastructure.
            </h2>

            {/* Supporting paragraph */}
            <p className="text-sm md:text-base text-[#A1A1A1] leading-relaxed max-w-[465px] mb-10 font-light">
              OYEN GRID runs on high-performance operational network architecture, ensuring total reliability, regulatory compliance, and seamless scalability for your institutional training demands.
            </p>

            {/* Trust points */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trustPoints.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full border border-[#F5D76E]/20 bg-[#F5D76E]/[0.03] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#F5D76E]" strokeWidth={3} />
                  </div>
                  <span className="text-xs text-zinc-300 font-medium tracking-wide">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT COLUMN: STRATEGIC ECOSYSTEM DIAGRAM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[520px] h-[380px] bg-[#0A0A0A]/40 border border-white/[0.03] rounded-3xl p-6 shadow-[0_24px_50px_rgba(0,0,0,0.8)] overflow-hidden">
              {/* Dynamic gold dust particles float */}
              <div className="absolute inset-0 pointer-events-none z-0">
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-[#F5D76E] opacity-25"
                    style={{
                      left: `${20 + Math.random() * 70}%`,
                      top: `${15 + Math.random() * 70}%`,
                      boxShadow: "0 0 8px rgba(245,215,110,0.8)",
                    }}
                    animate={{
                      y: [0, -35, 0],
                      opacity: [0.1, 0.6, 0.1],
                    }}
                    transition={{
                      duration: 6 + i * 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              {/* SVG Connector Lines */}
              <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
                {/* Glow Filter */}
                <defs>
                  <filter id="gold-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {nodes.map((node) => {
                  const pathD = `M ${centerX} ${centerY} Q ${(centerX + node.x) / 2} ${(centerY + node.y) / 2 - 20}, ${node.x} ${node.y}`;
                  return (
                    <g key={node.id}>
                      {/* Ambient Glowing Line */}
                      <path
                        d={pathD}
                        stroke="#F5D76E"
                        strokeWidth="1.5"
                        strokeOpacity="0.1"
                        fill="none"
                      />
                      {/* Flowing animated dash path */}
                      <motion.path
                        d={pathD}
                        stroke="#F5D76E"
                        strokeWidth="1.2"
                        strokeOpacity="0.6"
                        strokeDasharray="4 12"
                        fill="none"
                        animate={{ strokeDashoffset: [0, -32] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                        filter="url(#gold-glow)"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* CENTRAL NODE (OYEN GRID) */}
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-default"
                style={{ left: centerX, top: centerY }}
              >
                <div className="relative w-24 h-24 rounded-full bg-[#111111] border border-[#F5D76E]/30 flex flex-col items-center justify-center shadow-[0_0_35px_rgba(245,215,110,0.1)] group hover:border-[#F5D76E]/60 transition-colors duration-500">
                  <div className="absolute inset-1 rounded-full border border-white/[0.04]" />
                  <span className="text-[10px] font-black text-white tracking-[0.2em] leading-none uppercase">
                    OYEN
                  </span>
                  <span className="text-[10px] font-black text-[#F5D76E] tracking-[0.2em] leading-none uppercase mt-1">
                    GRID
                  </span>
                  {/* Status Indicator */}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                </div>
              </motion.div>

              {/* CONNECTED NODES */}
              {nodes.map((node) => {
                const NodeIcon = node.icon;
                const isSecurity = node.id === "security";
                return (
                  <div
                    key={node.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                    style={{ left: node.x, top: node.y }}
                  >
                    {/* Node Circle */}
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      className="relative w-12 h-12 rounded-full bg-[#161616] border border-white/[0.08] hover:border-[#F5D76E]/50 flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-all duration-300 group overflow-hidden cursor-default"
                    >
                      {isSecurity ? (
                        <div className="relative w-7 h-7 flex items-center justify-center">
                          <Image
                            src="/security-icon.png"
                            alt="Security"
                            fill
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <NodeIcon className="w-5 h-5 text-[#F5D76E]/70 group-hover:text-[#F5D76E] transition-colors" />
                      )}
                    </motion.div>

                    {/* Node Labels */}
                    <div className={`absolute w-[180px] pointer-events-none ${node.textOffsetClass}`}>
                      <h4 className="text-xs font-bold text-white tracking-wide">
                        {node.label}
                      </h4>
                      <p className="text-[10px] text-[#A1A1A1] leading-tight mt-0.5 font-light">
                        {node.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

