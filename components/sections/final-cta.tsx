"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-56 md:py-80 bg-[#030712]">
      
      {/* INSTITUTIONAL BACKDROP */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-ops-center.png" 
          alt="Infrastructure Layer" 
          fill
          className="object-cover opacity-[0.2] grayscale-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/95 to-[#030712]" />
        
        {/* Architectural Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#d6a63c]/5 blur-[160px] rounded-full pointer-events-none" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-8 mb-16">
             <div className="h-[1px] w-12 bg-[#d6a63c]/30" />
             <span className="text-[10px] font-bold text-[#d6a63c]/60 uppercase tracking-[0.8em]">Operational Continuity</span>
             <div className="h-[1px] w-12 bg-[#d6a63c]/30" />
          </div>

          <h2 className="text-[44px] md:text-[84px] font-bold text-white mb-14 tracking-[-0.05em] leading-[1]">
            Deploy the <span className="text-[#d6a63c] italic font-medium">infrastructure</span> <br />
            of global delivery.
          </h2>
          
          <p className="max-w-2xl mx-auto mb-20 text-[20px] text-white/40 font-light leading-[1.8]">
            Built for those who coordinate the world’s most complex infrastructure. Establish absolute structural integrity across every node, at institutional scale.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-16 mb-40">
            <button className="btn-gold px-16 h-18 text-[13px] uppercase tracking-[0.3em]">
               Talk to Architects
            </button>
            <button className="text-[13px] font-bold text-white/20 hover:text-white transition-all uppercase tracking-[0.4em] flex items-center gap-4 group">
              Speak to System Architecture <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
            </button>
          </div>
          
          <div className="pt-24 border-t border-white/5 flex flex-col items-center gap-10">
             <div className="flex items-center -space-x-5">
                {[0, 1, 2, 3, 4].map((_, i) => (
                  <div key={i} className="w-14 h-14 rounded-2xl border-2 border-[#030712] bg-[#0E1728] flex items-center justify-center overflow-hidden shadow-2xl">
                     <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent" />
                  </div>
                ))}
             </div>
             <p className="text-[10px] text-white/10 font-bold uppercase tracking-[0.6em]">Designated for institutional-scale programme delivery</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
