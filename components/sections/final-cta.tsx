"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="section-padding bg-navy-light relative overflow-hidden">
      {/* Background Glow */}
      <div className="ambient-glow top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-30" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="text-accent-gold text-[11px] font-bold tracking-[0.4em] uppercase mb-10 flex items-center justify-center gap-3">
             <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse" />
             Infrastructure Ready
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 leading-[1.1] tracking-tight">
            Enter the <br />
            <span className="text-gold-gradient italic font-medium">Operating System.</span>
          </h2>
          
          <p className="text-[20px] text-white/40 mb-16 max-w-2xl mx-auto leading-relaxed font-light">
            Deploy your institutional programme infrastructure in minutes. Orchestrate your global operations with absolute structural integrity.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button className="btn-gold h-14 px-12 text-[14px]">
              Deploy Infrastructure
            </button>
            <button className="btn-outline h-14 px-12 text-[14px] group">
              Speak with Architects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
