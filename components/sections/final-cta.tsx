"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, ShieldCheck } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-60 overflow-hidden bg-cta-spotlight border-t border-white/5">
      {/* ATMOSPHERIC BACKGROUND - DRAMATIC */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/cta-dramatic.png" 
          alt="Global Command Map" 
          className="w-full h-full object-cover opacity-10 grayscale-[0.5]"
        />
        {/* Layered Atmospheres */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-[#020617]" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-16">
             <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 backdrop-blur-xl">
                <div className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
                <span className="text-accent-gold text-[10px] font-black uppercase tracking-[0.4em]">Infrastructure Online</span>
             </div>
          </div>

          <h2 className="text-white text-[42px] md:text-[56px] leading-[1.1] font-medium mb-12 tracking-tight">
            Deploy the <span className="text-gold-gradient font-medium italic">standard</span> for <br className="hidden md:block" />
            global operations.
          </h2>
          
          <p className="text-white/30 text-[19px] max-w-xl mx-auto mb-20 leading-[1.8] font-light">
            Join the world's most sophisticated delivery networks. 
            Orchestrate your entire programme ecosystem with absolute structural integrity and institutional-grade control.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <button className="btn-gold px-12">Initialize Deployment</button>
            <button className="flex items-center gap-3 text-white/30 hover:text-white font-bold text-[13px] transition-all group uppercase tracking-[0.4em]">
              Consult with Architects <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="mt-32 flex items-center justify-center gap-16 pt-16 border-t border-white/5 opacity-20">
             <div className="flex items-center gap-3">
                <Globe className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Global Node Network</span>
             </div>
             <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Enterprise SOC2 II</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
