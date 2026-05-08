"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-48 md:py-72 bg-[#040816]">
      
      {/* ATMOSPHERIC BACKGROUND: Cinematic Ending */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-ops-center.png" 
          alt="Final Environment" 
          fill
          className="object-cover opacity-[0.3] grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040816] via-[#040816]/80 to-[#040816]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,155,45,0.08),transparent_70%)]" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-12">
             <div className="h-[1px] w-12 bg-[#C89B2D]/40" />
             <span className="text-[11px] font-medium text-[#C89B2D] uppercase tracking-[0.5em]">The Next Phase</span>
             <div className="h-[1px] w-12 bg-[#C89B2D]/40" />
          </div>

          <h2 className="text-[44px] md:text-[72px] font-bold text-white mb-12 leading-[1.1] tracking-tight">
            Built for the future <br />
            of <span className="text-[#C89B2D] italic font-medium">operational delivery.</span>
          </h2>
          
          <p className="text-[21px] text-white/50 mb-16 max-w-2xl mx-auto leading-relaxed font-light">
            Deploy the single source of operational truth. Scale your programme infrastructure with absolute structural integrity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <button className="btn-gold px-14 h-16 w-full sm:w-auto text-[13px] font-black tracking-widest uppercase shadow-[0_20px_50px_rgba(200,155,45,0.2)]">
              Secure access
            </button>
            <button className="text-[13px] font-bold text-white/40 hover:text-white transition-all uppercase tracking-[0.3em] flex items-center gap-4 group">
              View the roadmap <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Atmospheric Fog/Noise Overlay */}
      <div className="noise-bg opacity-[0.015]" />
    </section>
  );
}
