"use client";

import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="relative py-64 md:py-96 bg-[#050505] overflow-hidden">
      
      {/* CINEMATIC BLOOM */}
      <div className="absolute inset-0 cinematic-glow opacity-60" />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-5 mb-14">
             <div className="h-px w-12 bg-brand-gold/30" />
             <span className="label-enterprise">Initialize Operations</span>
             <div className="h-px w-12 bg-brand-gold/30" />
          </div>

          <h2 className="text-white mb-14 text-[44px] md:text-[84px] leading-[0.95] tracking-[-0.05em] font-bold">
            Built for the future of <br />
            <span className="text-brand-gold italic font-semibold">global delivery.</span>
          </h2>
          
          <p className="text-[20px] text-white/40 mb-20 max-w-2xl mx-auto leading-relaxed font-light">
            One platform. Every capability. Infinite impact. Transition your programme operations to the world's most structured institutional operating system.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <button className="btn-gold px-14 h-16 text-[15px]">
              Start Building
            </button>
            <button className="btn-outline px-14 h-16 text-[15px]">
              Talk to Sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
