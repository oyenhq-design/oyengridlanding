"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-40 overflow-hidden bg-cta-spotlight border-t border-white/5">
      {/* ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/cta-dramatic.png" 
          alt="Global Command Map" 
          className="w-full h-full object-cover opacity-10 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-12">
             <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-gold/10 border border-accent-gold/20">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse" />
                <span className="text-accent-gold text-[10px] font-black uppercase tracking-[0.3em]">Infrastructure Online</span>
             </div>
          </div>

          <h2 className="text-white text-[48px] md:text-[64px] leading-[1.05] font-bold mb-10 tracking-tight">
            Deploy the <span className="text-gold-gradient italic">standard</span> for <br />
            global operations.
          </h2>
          
          <p className="text-white/40 text-[18px] max-w-xl mx-auto mb-16 leading-relaxed">
            Join the world's most sophisticated delivery networks. 
            Orchestrate your entire programme ecosystem with absolute structural integrity.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button className="btn-gold px-12">Initialize Deployment</button>
            <button className="flex items-center gap-3 text-white/40 hover:text-white font-bold text-[13px] transition-all group uppercase tracking-widest">
              Consult with Architects <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="mt-24 flex items-center justify-center gap-12 pt-12 border-t border-white/5 opacity-30">
             <div className="flex items-center gap-3">
                <Globe className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">Global Node Network</span>
             </div>
             <div className="text-[10px] font-black uppercase tracking-widest">Enterprise ISO/IEC 27001</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
