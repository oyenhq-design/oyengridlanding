"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function TestimonialSection() {
  return (
    <section className="relative overflow-hidden py-32 md:py-48 bg-[#040816]">
      
      {/* ENVIRONMENTAL DEPTH */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#040816] via-transparent to-[#040816]" />
        <div className="absolute inset-0 opacity-[0.05] bg-[url('/env-boardroom.png')] bg-cover bg-center grayscale" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <div className="flex items-center justify-center gap-4 mb-14">
               <div className="h-[1px] w-12 bg-[#C89B2D]/40" />
               <span className="text-[11px] font-medium text-[#C89B2D] uppercase tracking-[0.5em]">Executive Testimony</span>
               <div className="h-[1px] w-12 bg-[#C89B2D]/40" />
            </div>

            <blockquote className="text-[32px] md:text-[52px] font-medium text-white mb-16 leading-[1.2] tracking-tight">
              "OYEN GRID hasn’t just improved our operations; it has redefined how we think about <span className="text-[#C89B2D] italic font-medium">global scale.</span>"
            </blockquote>
            
            <div className="flex flex-col items-center gap-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border border-[#C89B2D]/20 shadow-2xl">
                 <Image 
                   src="/chatbot-analyst.png" 
                   alt="Executive Leadership" 
                   fill
                   className="object-cover grayscale"
                 />
              </div>
              <div className="text-center">
                 <div className="text-[18px] font-bold text-white mb-1 tracking-tight">James Sterling</div>
                 <div className="text-[11px] text-[#C89B2D] font-black uppercase tracking-[0.4em]">Chief Operations Officer // Global Logistics</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
