"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ConversionSections() {
  return (
    <div className="bg-[#0B0B0D]">
      
      {/* 14. PRICING CTA */}
      <section className="py-32 relative overflow-hidden bg-black border-t border-white/5">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174" 
            alt="Office context" 
            className="w-full h-full object-cover grayscale opacity-30 blur-[10px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D] via-[#0B0B0D]/90 to-[#0B0B0D]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,185,66,0.1),transparent_70%)]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[40px] md:text-[56px] font-black text-white tracking-tighter leading-tight mb-8">
              Simple pricing for structured <br />
              <span className="text-[#F5B942]">programme operations.</span>
            </h2>
            <p className="text-[18px] text-[#71717A] max-w-xl mx-auto font-light mb-12">
              Start with a single programme and scale to full enterprise operational control. No hidden fees, just pure infrastructure.
            </p>
            <Link href="/pricing" className="btn-gold px-12 py-5 text-[18px] inline-flex items-center gap-3">
              View Pricing <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 15. FINAL CTA */}
      <section className="py-40 bg-[#0B0B0D] relative overflow-hidden">
        {/* Subtle Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#F5B942]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[48px] md:text-[72px] lg:text-[84px] font-black text-white tracking-tighter leading-[1.05] mb-12">
              Ready to structure <br />
              <span className="text-[#F5B942]">your operations?</span>
            </h2>
            
            <div className="flex flex-wrap justify-center items-center gap-6">
              <Link href="/get-started" className="btn-gold px-12 py-5 text-[18px]">
                Start Building Today
              </Link>
              <Link href="/contact" className="btn-outline px-12 py-5 text-[18px]">
                Talk to Sales
              </Link>
            </div>

            <div className="mt-20 pt-10 border-t border-white/5 max-w-lg mx-auto">
               <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#F5B942] animate-pulse" />
                  <span className="text-[#71717A] text-[11px] font-bold uppercase tracking-[0.2em]">Deployment Ready</span>
               </div>
               <p className="text-[#3F3F46] text-[12px] font-medium tracking-wide uppercase">
                 Join 500+ teams operating at high-fidelity with OYEN GRID.
               </p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
