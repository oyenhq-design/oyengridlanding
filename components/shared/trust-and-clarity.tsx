"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Zap, Trophy, ArrowRight } from "lucide-react";

export function TrustAndClarity() {
  return (
    <div className="bg-[#0B0B0C]">
      
      {/* 3. SECTION: “Built for operational clarity” */}
      <section className="py-40 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center mb-28">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#F5C044] text-[12px] font-bold tracking-[0.3em] uppercase mb-6"
            >
              Enterprise Infrastructure
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[42px] md:text-[56px] font-bold text-white tracking-tight leading-tight"
            >
              Built for operational <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5C044] via-white to-[#D4A017]">clarity at scale</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5 rounded-[40px] bg-white/[0.02] backdrop-blur-3xl overflow-hidden shadow-2xl">
            {[
              {
                icon: ShieldAlert,
                title: "The Problem",
                desc: "Fragmented systems lead to data silos, operational friction, and inconsistent delivery outcomes across your cohort programs.",
                color: "#EF4444"
              },
              {
                icon: Zap,
                title: "What We Do",
                desc: "Unified programme infrastructure that centralises data, automates tracking, and enforces governance in real-time.",
                color: "#F5C044"
              },
              {
                icon: Trophy,
                title: "The Outcome",
                desc: "Seamlessly scale to thousands of participants with absolute structural integrity and full visibility for your entire team.",
                color: "#3B82F6"
              }
            ].map((col, i) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative p-12 lg:p-16 flex flex-col items-start group hover:bg-white/[0.03] transition-all duration-500 ${
                  i < 2 ? "md:border-r border-white/5" : ""
                }`}
              >
                {/* Subtle Hover Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5C044]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="w-16 h-16 rounded-[20px] bg-white/[0.03] border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:border-[#F5C044]/30 transition-all duration-500 shadow-xl relative z-10">
                  <col.icon className="w-7 h-7 text-[#71717A] group-hover:text-[#F5C044] transition-colors" />
                </div>
                
                <h3 className="text-white font-bold text-2xl mb-6 relative z-10 group-hover:translate-x-1 transition-transform">{col.title}</h3>
                <p className="text-[#71717A] text-[17px] leading-relaxed font-light mb-10 relative z-10 group-hover:text-[#A1A1AA] transition-colors">
                  {col.desc}
                </p>
                
                <div className="mt-auto relative z-10">
                  <button className="flex items-center gap-2 text-[#F5C044] text-[14px] font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
