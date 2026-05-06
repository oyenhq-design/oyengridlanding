"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, BarChart3, TrendingUp } from "lucide-react";
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
    <section className="py-32 bg-[#0B0B0C] relative overflow-hidden border-t border-white/[0.06]">
      <div className="relative z-10 max-w-[1400px] mx-auto px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Text Block (5 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col text-left"
          >
            <div className="inline-flex items-center gap-3 text-[#F5B942] text-[13px] font-bold tracking-[0.3em] uppercase mb-8">
              <BarChart3 className="w-4 h-4" />
              Intelligence
            </div>
            
            <h2 className="text-[40px] md:text-[56px] font-bold text-white leading-[1.05] tracking-tight mb-8">
              Operational insights <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B942] via-white to-[#D4A017]">that drive results.</span>
            </h2>
            
            <p className="text-[19px] md:text-[21px] text-[#A1A1AA] leading-relaxed mb-12 font-light">
              Make high-stakes decisions with data-driven confidence. Our analytics engine translates raw operational data into actionable intelligence across every cohort.
            </p>
 
            <ul className="space-y-6 mb-12">
              {[
                "Automated compliance and progress reporting",
                "Predictive completion and dropout forecasting",
                "Customisable real-time metric dashboards"
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-5 text-[16px] text-[#A1A1AA] font-light"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#F5B942] shrink-0" strokeWidth={2.5} />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
 
            <Link 
              href="/analytics"
              className="w-fit inline-flex items-center justify-center px-10 py-4.5 rounded-2xl border border-white/10 bg-white/5 text-white font-bold text-[15px] transition-all duration-300 hover:bg-white/10 hover:border-white/20 group"
            >
              Explore analytics <ArrowRight className="ml-3 w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
 
          {/* Right Side: Visual (7 Columns) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative h-[500px] w-full bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[40px] p-12 flex flex-col justify-end shadow-2xl"
          >
            {/* Background Grid Lines */}
            <div className="absolute inset-0 p-12 flex flex-col justify-between opacity-[0.05]">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="w-full h-[1px] bg-white" />
              ))}
            </div>

            {/* Bars Visualization */}
            <div className="relative z-10 flex items-end justify-between h-[300px] gap-6 md:gap-10">
              {bars.map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col items-center group relative h-full justify-end">
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: bar.height }}
                    transition={{ duration: 1.2, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className={`w-full rounded-t-2xl transition-all duration-500 relative ${
                      bar.highlight 
                        ? "bg-gradient-to-t from-[#F5B942] to-[#D4A017] shadow-[0_0_40px_rgba(245,185,66,0.3)]" 
                        : "bg-white/5 group-hover:bg-white/10"
                    }`}
                  >
                    {bar.highlight && (
                      <div className="absolute inset-0 bg-[#F5B942] opacity-20 blur-2xl animate-pulse" />
                    )}
                  </motion.div>
                  <div className="mt-8 text-[11px] font-bold text-[#52525B] tracking-[0.2em] uppercase">
                    Cohort 0{i + 1}
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Metric Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-12 left-12 bg-white/[0.05] border border-white/10 rounded-3xl p-6 backdrop-blur-3xl shadow-2xl flex items-center gap-5"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F5B942]/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#F5B942]" />
              </div>
              <div>
                <div className="text-[11px] text-[#A1A1AA] font-bold uppercase tracking-[0.2em] mb-1">Growth Index</div>
                <div className="text-3xl font-bold text-white tracking-tighter">+88%</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
