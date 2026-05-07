"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-60 relative overflow-hidden bg-[#050816]">
      {/* ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-accent/10 blur-[160px] rounded-full pointer-events-none opacity-40" />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,166,42,0.05),transparent_70%)]" />
      </div>

      {/* FLOATING PARTICLES (SIMULATED) */}
      <div className="absolute inset-0 z-0 opacity-20">
         {[...Array(20)].map((_, i) => (
           <motion.div
             key={i}
             animate={{
               y: [0, -100, 0],
               opacity: [0, 1, 0],
             }}
             transition={{
               duration: Math.random() * 5 + 5,
               repeat: Infinity,
               delay: Math.random() * 5,
             }}
             className="absolute w-1 h-1 bg-accent rounded-full"
             style={{
               left: `${Math.random() * 100}%`,
               top: `${Math.random() * 100}%`,
             }}
           />
         ))}
      </div>

      <div className="container-custom max-w-[1400px] relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center gap-3 mb-12">
             <Sparkles className="w-5 h-5 text-accent shadow-[0_0_10px_#D4A62A]" />
             <span className="text-accent text-[12px] font-black tracking-[0.5em] uppercase">SYSTEM INITIALIZATION</span>
          </div>
          
          <h2 className="text-[48px] md:text-[84px] font-bold text-white leading-[0.95] mb-12 tracking-[-0.05em]">
            Enter the <br />
            <span className="text-gold-gradient italic">Operating System.</span>
          </h2>
          
          <p className="text-white/40 text-[18px] md:text-[21px] font-light max-w-2xl mx-auto mb-16 leading-relaxed">
            Scale your enterprise programme infrastructure with absolute structural integrity and high-fidelity operational control.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button className="btn-primary h-[64px] px-16 text-[18px]">
              Deploy Infrastructure <ArrowRight className="w-5 h-5 ml-4" />
            </button>
            <button className="text-white/30 hover:text-white font-bold text-[16px] transition-all uppercase tracking-[0.2em] py-4 group">
              Speak with Architects <span className="ml-2 group-hover:translate-x-2 transition-transform inline-block">→</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* SECTION BLEND */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050816] to-transparent" />
    </section>
  );
}
