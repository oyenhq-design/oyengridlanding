"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-40 relative overflow-hidden bg-[#050816]">
      {/* ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-accent/5 blur-[140px] rounded-full pointer-events-none opacity-30" />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,166,42,0.03),transparent_70%)]" />
      </div>

      <div className="container-custom max-w-[1400px] relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center gap-3 mb-10">
             <Sparkles className="w-4 h-4 text-accent shadow-[0_0_10px_#D4A62A] opacity-60" />
             <span className="text-accent text-[11px] font-black tracking-[0.4em] uppercase opacity-60">SYSTEM INITIALIZATION</span>
          </div>
          
          <h2 className="text-[44px] md:text-[72px] font-bold text-white leading-[0.95] mb-10 tracking-tight">
            Enter the <br />
            <span className="text-gold-gradient italic">Operating System.</span>
          </h2>
          
          <p className="text-white/30 text-[17px] md:text-[19px] font-light max-w-xl mx-auto mb-12 leading-relaxed">
            Scale your enterprise programme infrastructure with absolute structural integrity and high-fidelity control.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="btn-primary h-14 px-12 text-[16px]">
              Deploy Infrastructure <ArrowRight className="w-4 h-4 ml-4" />
            </button>
            <button className="text-white/20 hover:text-white font-bold text-[14px] transition-all uppercase tracking-[0.2em] py-4 group">
              Speak with Architects <span className="ml-2 group-hover:translate-x-1.5 transition-transform inline-block">→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
