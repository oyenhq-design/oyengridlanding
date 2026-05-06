"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Zap, Trophy } from "lucide-react";

export function TrustAndClarity() {
  return (
    <div className="bg-[#0B0B0C]">
      
      {/* 4. TRUST / METRICS STRIP */}
      <section className="py-12 border-b border-white/5">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20 opacity-30 grayscale hover:opacity-60 transition-all duration-700">
            {["Microsoft", "Stripe", "Linear", "Zoom", "Notion", "Github"].map((logo) => (
              <div key={logo} className="text-white font-bold text-xl tracking-tighter uppercase">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECTION: “Built for operational clarity at scale” */}
      <section className="py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-[32px] md:text-[42px] font-bold text-white tracking-tight">
              Built for operational clarity at scale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {[
              {
                icon: ShieldAlert,
                title: "The Problem",
                desc: "Fragmented systems lead to data silos, operational friction, and inconsistent delivery outcomes."
              },
              {
                icon: Zap,
                title: "What We Do",
                desc: "Unified programme infrastructure that centralises data, automates tracking, and enforces governance."
              },
              {
                icon: Trophy,
                title: "The Outcome",
                desc: "Seamlessly scale to thousands of participants with absolute structural integrity and full visibility."
              }
            ].map((col, i) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#F5C044]/30 group-hover:bg-[#F5C044]/10 transition-all">
                  <col.icon className="w-7 h-7 text-[#71717A] group-hover:text-[#F5C044]" />
                </div>
                <h3 className="text-white font-bold text-xl mb-4">{col.title}</h3>
                <p className="text-[#71717A] text-[16px] leading-relaxed font-light">
                  {col.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
