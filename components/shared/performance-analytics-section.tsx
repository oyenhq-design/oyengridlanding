"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, BarChart3 } from "lucide-react";
import Link from "next/link";

export function PerformanceAnalyticsSection() {
  const bars = [
    { height: "45%", highlight: false },
    { height: "75%", highlight: false },
    { height: "100%", highlight: true },
    { height: "65%", highlight: false },
    { height: "85%", highlight: false },
  ];

  return (
    <section className="py-32 bg-transparent relative overflow-hidden border-t border-white/5">
      <div className="relative z-10 max-w-[1400px] mx-auto px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Text Block */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col text-left"
          >
            <div className="inline-flex items-center gap-3 text-[#D4AF37] text-[13px] font-bold tracking-[0.2em] uppercase mb-8">
              <BarChart3 className="w-4 h-4" />
              Intelligence
            </div>
            
            <h2 className="text-[40px] md:text-[56px] font-bold text-white leading-[1.05] tracking-tight mb-8">
              Operational insights <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFF0B3]">that drive results</span>
            </h2>
            
            <p className="text-lg text-[#A1A1AA] leading-relaxed mb-12 font-light max-w-xl">
              Make high-stakes decisions with data-driven confidence. Our analytics engine translates raw operational data into actionable intelligence across every cohort.
            </p>
 
            <ul className="space-y-6 mb-12">
              {[
                "Automated compliance reporting",
                "Predictive completion forecasting",
                "Custom metric dashboards"
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4 text-base text-[#A1A1AA] font-light"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
 
            <div className="flex">
              <Link 
                href="/analytics"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-white/10 hover:border-[#D4AF37]/50 text-white font-semibold text-[15px] transition-all duration-300 hover:bg-white/5 group"
              >
                Explore analytics <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
 
          {/* Right Side: Minimal Analytics Visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[450px] w-full bg-[rgba(20,20,20,0.4)] backdrop-blur-md border border-white/5 rounded-[32px] p-10 flex flex-col justify-end"
          >
            {/* Background Grid Lines (Faint) */}
            <div className="absolute inset-0 p-10 flex flex-col justify-between opacity-[0.03]">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-full h-[1px] bg-white" />
              ))}
            </div>

            {/* Bars Visualization */}
            <div className="relative z-10 flex items-end justify-between h-[280px] gap-4 md:gap-8">
              {bars.map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col items-center group relative h-full justify-end">
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: bar.height }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                    className={`w-full rounded-t-xl transition-all duration-500 relative ${
                      bar.highlight 
                        ? "bg-gradient-to-t from-[#D4AF37] to-[#FFF0B3] shadow-[0_0_30px_rgba(212,175,55,0.25)]" 
                        : "bg-white/5 group-hover:bg-white/10"
                    }`}
                  >
                    {bar.highlight && (
                      <div className="absolute inset-0 bg-[#D4AF37] opacity-20 blur-xl animate-pulse" />
                    )}
                  </motion.div>
                  <div className="mt-6 text-[10px] font-bold text-[#71717A] tracking-widest uppercase">
                    Batch 0{i + 1}
                  </div>
                </div>
              ))}
            </div>

            {/* Float Decor */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-12 left-12 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl"
            >
              <div className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest mb-2">Primary Metric</div>
              <div className="text-3xl font-bold text-white tracking-tighter">Engagement</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
