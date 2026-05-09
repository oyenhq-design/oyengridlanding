"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-48 md:py-80 bg-[#04070D] overflow-hidden">
      
      {/* CINEMATIC RADIAL GLOW (No Blur Fog) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#04070D]" />
        <div className="absolute inset-0 atmos-glow-radial opacity-40" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-4 mb-14">
             <div className="h-px w-16 bg-accent-gold/40" />
             <span className="label-institutional">Initialize Operations</span>
             <div className="h-px w-16 bg-accent-gold/40" />
          </div>

          <h2 className="text-[44px] md:text-[72px] font-bold text-white mb-14 leading-[0.95] tracking-[-0.05em]">
            Scale with absolute <br />
            <span className="text-accent-gold italic font-medium">architectural certainty.</span>
          </h2>
          
          <p className="text-[19px] text-white/50 mb-20 max-w-2xl mx-auto leading-relaxed font-light">
            Transition from fragmented management to a unified operational infrastructure. Your global programme deserves institutional integrity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <button className="btn-gold px-14 h-16 text-[14px] w-full sm:w-auto shadow-[0_30px_60px_rgba(214,166,60,0.2)]">
              Begin Initialization
            </button>
            <button className="text-[14px] font-bold text-white/40 hover:text-white transition-all uppercase tracking-[0.3em] flex items-center gap-3 group">
              Request System Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-12 grayscale opacity-30">
             {["Architecture", "Governance", "Orchestration", "Security"].map((t) => (
               <span key={t} className="text-[10px] font-black uppercase tracking-[0.5em] text-white">{t}</span>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
