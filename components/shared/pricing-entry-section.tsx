"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export function PricingEntrySection() {
  return (
    <section className="relative py-32 bg-transparent overflow-hidden border-t border-white/[0.06]">
      {/* Background Radial Glow */}
      <div 
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40"
      >
        <div 
          className="w-full max-w-[1000px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(245,185,66,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5B942]/10 border border-[#F5B942]/20 text-[#F5B942] text-[12px] font-bold uppercase tracking-[0.2em] mb-8">
            <Star className="w-3.5 h-3.5 fill-[#F5B942]" />
            Transparent Pricing
          </div>
          
          <h2 className="text-[42px] md:text-[60px] font-bold text-white tracking-tight leading-[1.1] mb-8">
            Simple pricing for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B942] via-white to-[#D4A017]">structured operations</span>
          </h2>
          
          <p className="text-[19px] md:text-[21px] text-[#A1A1AA] font-light leading-relaxed max-w-2xl mx-auto mb-16">
            Start with one programme. Scale to full operational control as your organisation grows.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/pricing" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-10 py-4.5 rounded-2xl font-bold text-black text-[17px] transition-all duration-300 shadow-[0_15px_40px_rgba(245,185,66,0.25)] hover:shadow-[0_25px_60px_rgba(245,185,66,0.4)]"
                style={{ background: "#F5B942" }}
              >
                View all plans
              </motion.button>
            </Link>

            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-10 py-4.5 rounded-2xl font-bold text-white text-[17px] border border-white/10 bg-white/5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex items-center justify-center gap-3 group"
              >
                Talk to sales
                <ArrowRight className="w-4.5 h-4.5 text-[#F5B942] transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Section Transition Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0B0B0C] to-transparent pointer-events-none" />
    </section>
  );
}
