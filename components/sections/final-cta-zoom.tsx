"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function FinalCTAZoom() {
  return (
    <section className="relative py-64 md:py-96 bg-[#040816] overflow-hidden">
      
      {/* ATMOSPHERIC BACKGROUND BLEND */}
      <div className="absolute inset-0 z-0">
         <Image 
           src="/hero-ops-center.png" 
           alt="Infrastructure Closure Environment" 
           fill
           className="object-cover opacity-[0.15] grayscale contrast-[1.2]"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-[#040816] via-[#040816]/70 to-[#040816]" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full gold-glow opacity-30" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center justify-center gap-6 mb-16">
             <div className="h-px w-12 bg-brand-gold/40" />
             <span className="text-[11px] font-black uppercase tracking-[0.5em] text-white/30">System Initialization</span>
             <div className="h-px w-12 bg-brand-gold/40" />
          </div>

          <h2 className="text-white mb-16 text-[56px] md:text-[96px] leading-[0.92] tracking-[-0.07em]">
            Built for the future <br />
            of <span className="text-gold-gradient italic">global delivery.</span>
          </h2>
          
          <p className="text-[22px] text-white/40 mb-20 max-w-2xl mx-auto leading-relaxed font-light">
            Deploy institutional-grade operational systems with governance, visibility, and scalable programme intelligence. The platform for high-authority infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-14">
            <button className="btn-gold-zoom w-full sm:w-auto px-16 h-16 rounded-[16px] text-[16px]">
              Initialize System
            </button>
            <button className="flex items-center gap-4 text-[15px] font-bold text-white/30 hover:text-white transition-all uppercase tracking-[0.3em] group">
              Speak to Architects <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
            </button>
          </div>

          {/* Infrastructure Tier Indicators */}
          <div className="mt-40 pt-20 border-t border-white/5 flex flex-wrap justify-center gap-x-20 gap-y-10 grayscale opacity-20 group">
             {["Infrastructure", "Governance", "Orchestration", "Sovereignty"].map((t) => (
               <div key={t} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-white group-hover:bg-brand-gold transition-colors duration-700" />
                  <span className="text-[11px] font-black uppercase tracking-[0.5em] text-white">{t}</span>
               </div>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
