"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "50+", label: "Organizations" },
  { value: "18K+", label: "Learners" },
  { value: "250K+", label: "Training Activities" },
  { value: "99.9%", label: "Uptime" }
];

export function TrustBar() {
  return (
    <section className="w-full bg-[#090D16] py-6 border-b border-white/[0.06] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative">
        
        {/* Label */}
        <span className="text-[10px] font-black tracking-[0.25em] text-[#FFC72C] uppercase shrink-0">
          Built for modern organizations
        </span>

        {/* Metrics container row */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 md:gap-x-12 gap-y-4">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-8"
            >
              {/* Metric Item */}
              <div className="flex flex-col items-center md:items-start select-none">
                <span className="text-xl md:text-2xl font-black text-white leading-none tracking-tight">
                  {metric.value}
                </span>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1">
                  {metric.label}
                </span>
              </div>

              {/* Divider (hide on last item) */}
              {idx < metrics.length - 1 && (
                <div className="hidden sm:block h-6 w-px bg-white/10 shrink-0" />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
