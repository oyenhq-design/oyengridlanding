"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const trustPoints = [
  "Enterprise Security",
  "Governance Controls",
  "Audit Logging",
  "Operational Visibility",
  "High Availability",
  "Infrastructure Resilience",
];

const pillars = [
  { label: "Secure",     angle: -90, r: 130 },
  { label: "Reliable",   angle:   0, r: 130 },
  { label: "Governed",   angle:  90, r: 130 },
  { label: "Scalable",   angle: 180, r: 130 },
];

// Convert polar angle to x/y relative to a 300×300 centre
function polar(angleDeg: number, r: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: 150 + r * Math.cos(rad), y: 150 + r * Math.sin(rad) };
}

export function ScaleStructure() {
  return (
    <section className="py-24 md:py-32 bg-[#020408] relative overflow-hidden border-b border-white/5">

      {/* Ambient atmosphere — very restrained */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[500px] bg-brand-gold/[0.018] blur-[180px] rounded-full" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[600px] bg-blue-600/[0.012] blur-[160px] rounded-full" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">

          {/* ─── LEFT: CONTENT ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-brand-gold/50" />
              <span className="text-[10px] font-black tracking-[0.38em] text-brand-gold uppercase">
                Enterprise Infrastructure
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-[38px] md:text-[52px] font-bold text-white leading-[1.06] tracking-[-0.03em] mb-7 max-w-[480px]">
              Built for{" "}
              <span className="text-brand-gold italic font-serif">
                operational reliability.
              </span>
            </h2>

            {/* Supporting paragraph */}
            <p className="text-[15px] text-white/45 leading-[1.75] max-w-[420px] mb-12 font-light">
              OYEN GRID provides the security, governance, scalability and
              operational resilience required to support modern programme
              delivery at scale.
            </p>

            {/* Trust points — clean list */}
            <ul className="space-y-4">
              {trustPoints.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-5 h-5 rounded-full border border-brand-gold/25 bg-brand-gold/[0.05] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-brand-gold" strokeWidth={2.5} />
                  </div>
                  <span className="text-[14px] font-medium text-white/60 tracking-wide">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ─── RIGHT: VISUAL ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-[300px] h-[300px]">

              {/* SVG: connection lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {pillars.map((p, i) => {
                  const { x, y } = polar(p.angle, p.r);
                  return (
                    <motion.line
                      key={i}
                      x1={150} y1={150}
                      x2={x} y2={y}
                      stroke="#E2B84C"
                      strokeWidth="0.75"
                      strokeOpacity="0.35"
                      strokeDasharray="4 6"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                    />
                  );
                })}

                {/* Outer ring — very subtle */}
                <circle
                  cx={150} cy={150} r={130}
                  stroke="rgba(255,255,255,0.04)"
                  strokeWidth="1"
                />
                {/* Inner ring */}
                <motion.circle
                  cx={150} cy={150} r={46}
                  stroke="rgba(226,184,76,0.18)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  style={{ transformOrigin: "150px 150px" }}
                />
              </svg>

              {/* OYEN GRID centre node */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-[90px] h-[90px] rounded-full bg-[#040816] border border-brand-gold/25 shadow-[0_0_40px_rgba(226,184,76,0.08),0_0_0_1px_rgba(226,184,76,0.06)] z-10"
              >
                <span className="text-[9px] font-black text-white/90 tracking-[0.18em] uppercase leading-none">
                  OYEN
                </span>
                <span className="text-[9px] font-black text-brand-gold tracking-[0.18em] uppercase leading-none mt-0.5">
                  GRID
                </span>
                {/* Live pulse */}
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/40 animate-ping" />
                </div>
              </motion.div>

              {/* Pillar nodes */}
              {pillars.map((p, i) => {
                const { x, y } = polar(p.angle, p.r);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.75 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.45 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                    style={{ left: x, top: y }}
                  >
                    <div className="group flex items-center justify-center w-[68px] h-[34px] rounded-full bg-[#06090F] border border-white/[0.08] hover:border-brand-gold/30 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.6)] cursor-default hover:shadow-[0_4px_24px_rgba(226,184,76,0.08)]">
                      <span className="text-[9px] font-black text-white/40 tracking-[0.2em] uppercase group-hover:text-brand-gold/80 transition-colors duration-400">
                        {p.label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
