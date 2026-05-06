"use client";

import { motion } from "framer-motion";
import { Star, TrendingUp, Zap } from "lucide-react";

const TESTIMONIAL = {
  quote: "Before OYEN GRID, we were stitching together five different tools for our bootcamp — spreadsheets, WhatsApp groups, Zoom, Notion, and a random LMS. Now everything lives in one place. Our operations are tighter, our trainers are happier, and we can actually see how participants are doing in real time.",
  name: "Adaeze Obiefune",
  role: "Head of Operations, TechBridge Academy",
  initials: "AO",
  avatarColor: "#F5B942",
};

const METRICS = [
  { value: "2×", label: "Growth in programme capacity", icon: TrendingUp },
  { value: "40%", label: "Reduction in admin overhead", icon: Zap },
  { value: "94%", label: "Average trainer satisfaction", icon: Star },
];

const CLIENT_LOGOS = [
  "TECHBRIDGE", "SCALIFY", "EDUKORE", "NEXLEARN", "ORBITA", "STRATA"
];

export function SocialProofSection() {
  return (
    <section className="py-32 bg-[#0D0D10] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/[0.05]" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/[0.05]" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#A1A1AA] text-[12px] font-bold tracking-[0.25em] uppercase mb-5"
          >
            Social Proof
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[38px] md:text-[50px] font-bold text-white tracking-tight"
          >
            Teams that run{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B942] to-[#D4A017]">
              smarter programmes
            </span>
          </motion.h2>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {METRICS.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-8 bg-white/[0.02] border border-white/[0.06] rounded-3xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F5B942]/10 border border-[#F5B942]/20 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-[#F5B942]" />
                </div>
                <p className="text-[48px] font-bold text-white leading-none mb-3">{m.value}</p>
                <p className="text-[#71717A] text-[14px] font-light">{m.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mb-20"
        >
          <div className="absolute -inset-4 bg-[#F5B942] opacity-[0.04] blur-[80px] rounded-3xl" />
          <div className="relative bg-[rgba(18,18,22,0.9)] backdrop-blur-xl border border-[#F5B942]/10 rounded-3xl p-10 lg:p-12">
            {/* Stars */}
            <div className="flex gap-1 mb-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 text-[#F5B942] fill-current" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-white text-[18px] md:text-[22px] leading-relaxed font-light mb-10 max-w-[820px]">
              &ldquo;{TESTIMONIAL.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-black text-[15px] shrink-0 shadow-[0_0_20px_rgba(245,185,66,0.3)]"
                style={{ background: TESTIMONIAL.avatarColor }}
              >
                {TESTIMONIAL.initials}
              </div>
              <div>
                <p className="text-white font-bold text-[15px]">{TESTIMONIAL.name}</p>
                <p className="text-[#71717A] text-[13px] mt-0.5">{TESTIMONIAL.role}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Client logos */}
        <div>
          <p className="text-center text-[#3F3F46] text-[11px] font-bold uppercase tracking-[0.25em] mb-10">
            Trusted by learning-first organisations
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-10 lg:gap-16 grayscale opacity-30 hover:opacity-50 transition-opacity duration-500"
          >
            {CLIENT_LOGOS.map((logo) => (
              <span key={logo} className="text-white font-bold text-[18px] tracking-[0.3em]">
                {logo}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
