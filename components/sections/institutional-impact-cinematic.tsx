"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function InstitutionalImpactCinematic() {
  return (
    <section className="py-24 bg-[#05070B] theme-navy-section relative overflow-hidden border-b border-white/5">
      
      {/* Background glow and subtle elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-brand-gold/[0.015] blur-[120px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.01]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "48px 48px" }} />
      </div>

      <div className="max-w-[850px] mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/[0.04] border border-brand-gold/15 mb-10">
            <Quote className="w-3.5 h-3.5 text-brand-gold" />
            <span className="text-[9px] font-black text-brand-gold tracking-[0.3em] uppercase">Customer Story</span>
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-[28px] md:text-[36px] font-bold leading-[1.3] text-white tracking-tight max-w-[720px] mb-8">
            “OYEN GRID replaced WhatsApp, Zoom, Google Drive, Sheets, and Typeform for us.”
          </blockquote>

          {/* Author info */}
          <div className="flex flex-col items-center">
            <span className="text-[14px] font-bold text-white tracking-tight">Program Director, ALTSCHOOL</span>
            <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em] mt-1.5">Verified Transformation</span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
