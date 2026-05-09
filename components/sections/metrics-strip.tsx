"use client";

import { motion, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ value, suffix = "" }: { value: string, suffix?: string }) {
  const numericValue = parseFloat(value.replace(/,/g, ""));
  const [displayValue, setDisplayValue] = useState(0);
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controls = animate(0, numericValue, {
      duration: 3,
      onUpdate: (val) => setDisplayValue(val),
      ease: [0.16, 1, 0.3, 1]
    });
    return () => controls.stop();
  }, [numericValue]);

  return (
    <div ref={nodeRef} className="tabular-nums">
      {displayValue.toLocaleString(undefined, { 
        maximumFractionDigits: value.includes(".") ? 3 : 0,
        minimumFractionDigits: value.includes(".") ? 1 : 0
      })}
      {suffix}
    </div>
  );
}

export function MetricsStrip() {
  const metrics = [
    { label: "Delivery Nodes", value: "1,240", suffix: "+" },
    { label: "Sync Latency", value: "0.8", suffix: "ms" },
    { label: "System Uptime", value: "99.999", suffix: "%" },
    { label: "Global Reach", value: "140", suffix: "+ Countries" }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#04070D] overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="flex flex-col items-start group relative"
            >
              {/* Subtle hover atmosphere */}
              <div className="absolute -inset-10 bg-[#d6a63c]/0 group-hover:bg-[#d6a63c]/[0.03] blur-[60px] rounded-full transition-all duration-1000 -z-10" />
              
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-1 h-1 rounded-full bg-[#d6a63c]/30 group-hover:bg-[#d6a63c] transition-colors duration-500 shadow-[0_0_8px_rgba(214,166,60,0.4)]" />
                 <div className="label-institutional opacity-60 group-hover:opacity-100 transition-opacity duration-500">{metric.label}</div>
              </div>

              <div className="text-[32px] md:text-[44px] font-bold text-white tracking-tighter leading-none flex items-baseline gap-1">
                <Counter value={metric.value} suffix={metric.suffix} />
              </div>

              {/* Data Accents */}
              {i === 2 && (
                <div className="mt-6 flex items-center gap-3">
                   <div className="live-pulse" />
                   <span className="text-[9px] text-[#d6a63c]/40 font-black uppercase tracking-[0.3em]">Live Feed</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Institutional Dividers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
    </section>
  );
}
