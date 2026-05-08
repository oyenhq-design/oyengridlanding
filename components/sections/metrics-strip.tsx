"use client";

import { motion, useSpring, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ value, suffix = "" }: { value: string, suffix?: string }) {
  const numericValue = parseFloat(value.replace(/,/g, ""));
  const [displayValue, setDisplayValue] = useState(0);
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (node) {
      const controls = animate(0, numericValue, {
        duration: 2.5,
        onUpdate(value) {
          setDisplayValue(value);
        },
        ease: [0.16, 1, 0.3, 1]
      });
      return () => controls.stop();
    }
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
    <section className="relative py-16 bg-[#040816] overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-wrap justify-between items-center gap-y-12">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="flex flex-col items-start min-w-[200px] group relative"
            >
              {/* Subtle hover glow */}
              <div className="absolute -inset-8 bg-[#C89B2D]/0 group-hover:bg-[#C89B2D]/5 blur-[40px] rounded-full transition-all duration-700 -z-10" />
              
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#C89B2D]/20 group-hover:bg-[#C89B2D] transition-colors duration-500 shadow-[0_0_8px_rgba(200,155,45,0.4)]" />
                 <div className="text-[9px] text-white/30 font-medium uppercase tracking-[0.5em] group-hover:text-[#C89B2D]/60 transition-colors duration-500">{metric.label}</div>
              </div>

              <div className="text-[36px] md:text-[48px] font-bold text-white tracking-[-0.03em] leading-none flex items-baseline gap-1">
                <Counter value={metric.value} suffix={metric.suffix} />
              </div>

              {/* Live telemetry pulse (Only for some metrics) */}
              {i === 2 && (
                <div className="mt-4 flex items-center gap-2">
                   <div className="live-pulse w-1.5 h-1.5" />
                   <span className="text-[8px] text-[#C89B2D]/40 font-black uppercase tracking-widest">Live Sync</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Thin Horizontal Separators */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      
      {/* Vertical Data Accents */}
      <div className="absolute inset-y-0 left-1/4 w-px bg-gradient-to-b from-transparent via-white/[0.02] to-transparent hidden lg:block" />
      <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/[0.02] to-transparent hidden lg:block" />
      <div className="absolute inset-y-0 left-3/4 w-px bg-gradient-to-b from-transparent via-white/[0.02] to-transparent hidden lg:block" />
    </section>
  );
}
