"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FinalCTAInstitutional() {
  return (
    <section className="relative py-64 md:py-96 bg-[#040816] overflow-hidden">
      
      {/* ATMOSPHERIC BLOOM */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(212,166,58,0.02)_0%,transparent_70%)]" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-5 mb-14">
             <div className="h-px w-12 bg-accent-gold/30" />
             <span className="label-institutional">Initialize Operations</span>
             <div className="h-px w-12 bg-accent-gold/30" />
          </div>

          <h2 className="text-white mb-16 text-[44px] md:text-[84px] leading-[0.95] tracking-[-0.05em] font-bold">
            Built for the future <br />
            of <span className="text-accent-gold italic font-semibold">global delivery.</span>
          </h2>
          
          <p className="text-[19px] text-white/40 mb-20 max-w-2xl mx-auto leading-relaxed font-light">
            Transition from fragmented management to a unified institutional infrastructure. Your global programme deserves absolute structural integrity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
            <button className="btn-gold px-14 h-16 rounded-2xl text-[14px]">
              Initialize System
            </button>
            <button className="flex items-center gap-3 text-[14px] font-bold text-white/40 hover:text-white transition-all uppercase tracking-[0.3em] group">
              Speak to Architects <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* INDICATORS ROW */}
          <div className="mt-40 pt-16 border-t border-white/5 flex flex-wrap justify-center gap-16 grayscale opacity-20">
             {["Infrastructure", "Governance", "Orchestration", "Security"].map((t) => (
               <div key={t} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white">{t}</span>
               </div>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
