"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-48 md:py-80 bg-[#030712]">
      
      {/* POWERFUL CENTERED ENVIRONMENT */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-ops-center.png" 
          alt="Infrastructure Background" 
          fill
          className="object-cover opacity-[0.25] grayscale-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/90 to-[#030712]" />
        
        {/* Subtle Golden Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d6a63c]/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-6 mb-12">
             <div className="h-[1px] w-12 bg-[#d6a63c]/30" />
             <span className="premium-label tracking-[0.6em]">The Operational Future</span>
             <div className="h-[1px] w-12 bg-[#d6a63c]/30" />
          </div>

          <h2 className="text-[44px] md:text-[72px] font-bold text-white mb-12 tracking-[-0.05em] leading-[1]">
            Deploy the future <br />
            of <span className="text-[#d6a63c] italic font-medium">global delivery.</span>
          </h2>
          
          <p className="max-w-2xl mx-auto mb-16 text-[18px] text-white/50 font-light leading-[1.7]">
            Built for those who manage the world’s most complex infrastructure. Orchestrate with absolute structural integrity, from any node, at any scale.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
            <button className="btn-gold px-16 h-16 w-full sm:w-auto text-[14px]">
               Initialize System
            </button>
            <button className="text-[13px] font-bold text-white/30 hover:text-white transition-all uppercase tracking-[0.4em] flex items-center gap-4 group">
              Speak to Architecture <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
            </button>
          </div>
          
          <div className="mt-32 pt-16 border-t border-white/5 flex flex-col items-center gap-8">
             <div className="flex items-center -space-x-4">
                {[0, 1, 2, 3, 4].map((_, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-[#030712] bg-[#0E1728] flex items-center justify-center overflow-hidden cinematic-shadow">
                     <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent" />
                  </div>
                ))}
             </div>
             <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.5em]">Trusted by global infrastructure teams</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
