"use client";

import { motion } from "framer-motion";

export function MetricsStrip() {
  const metrics = [
    { label: "Delivery Nodes", value: "1,240+" },
    { label: "Sync Latency", value: "0.8ms" },
    { label: "System Uptime", value: "99.999%" },
    { label: "Global Reach", value: "140+ Countries" }
  ];

  return (
    <section className="relative py-20 bg-[#040816]">
      <div className="container-custom">
        <div className="flex flex-wrap justify-between items-center gap-12 lg:gap-20">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="text-[10px] text-[#C89B2D] font-medium uppercase tracking-[0.5em] mb-4">{metric.label}</div>
              <div className="text-[32px] md:text-[44px] font-bold text-white tracking-[-0.03em] leading-none">{metric.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Subtle Divider Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
