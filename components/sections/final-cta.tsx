"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-48 md:py-80 bg-[#040816]">
      
      {/* ATMOSPHERIC BACKGROUND: Massive Cinematic Ending */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-ops-center.png" 
          alt="Final Environment" 
          fill
          className="object-cover opacity-[0.4] grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040816] via-[#040816]/90 to-[#040816]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,155,45,0.08),transparent_70%)]" />
        <div className="smoke-overlay opacity-[0.05]" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-12">
             <div className="h-[1px] w-12 bg-[#C89B2D]/40" />
             <span className="text-[11px] font-medium text-[#C89B2D] uppercase tracking-[0.6em]">The Operational Future</span>
             <div className="h-[1px] w-12 bg-[#C89B2D]/40" />
          </div>

          <h2 className="text-[44px] md:text-[68px] font-bold text-white mb-12 leading-[1.1] tracking-tight">
            Deploy the future <br />
            of <span className="text-[#C89B2D] italic font-medium">global delivery.</span>
          </h2>
          
          <p className="text-[20px] text-white/50 mb-16 max-w-2xl mx-auto leading-relaxed font-light">
            Built for those who manage the world’s most complex infrastructure. Orchestrate with absolute structural integrity, from any node, at any scale.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <button className="btn-gold px-16 h-16 w-full sm:w-auto text-[13px] font-black tracking-widest uppercase shadow-[0_20px_60px_rgba(200,155,45,0.25)] group relative overflow-hidden">
               <span className="relative z-10">Initialize System</span>
               <motion.div 
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
               />
            </button>
            <button className="text-[13px] font-bold text-white/30 hover:text-white transition-all uppercase tracking-[0.4em] flex items-center gap-4 group">
              Speak to Architecture <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
            </button>
          </div>
          
          <div className="mt-32 flex flex-col items-center gap-6">
             <div className="flex items-center -space-x-4">
                {[0, 1, 2, 3, 4].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#040816] bg-white/[0.05] flex items-center justify-center overflow-hidden">
                     <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent" />
                  </div>
                ))}
             </div>
             <p className="text-[11px] text-white/20 font-black uppercase tracking-[0.5em]">Trusted by the world's leading infrastructure teams</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
