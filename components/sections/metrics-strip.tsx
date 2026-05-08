"use client";

import { motion, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ value, suffix = "" }: { value: string, suffix?: string }) {
  const numericValue = parseFloat(value.replace(/,/g, ""));
  const [displayValue, setDisplayValue] = useState(0);
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controls = animate(0, numericValue, {
      duration: 2.5,
      onUpdate(value) {
        setDisplayValue(value);
      },
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
    { label: "Delivery Nodes", value: "1240", suffix: "+" },
    { label: "Institutional Uptime", value: "99.999", suffix: "%" },
    { label: "Node Latency", value: "0.8", suffix: "ms" },
    { label: "Global Presence", value: "142", suffix: "+" }
  ];

  return (
    <section className="relative py-40 bg-[#030712] overflow-hidden border-y border-white/[0.04]">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-24">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="flex flex-col items-start group"
            >
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#d6a63c]/20 group-hover:bg-[#d6a63c] transition-colors" />
                 <div className="text-[10px] text-white/15 font-bold uppercase tracking-[0.5em]">{metric.label}</div>
              </div>

              <div className="text-[36px] md:text-[52px] font-bold text-white tracking-[-0.05em] leading-none group-hover:text-[#d6a63c] transition-colors">
                <Counter value={metric.value} suffix={metric.suffix} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
