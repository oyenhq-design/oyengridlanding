"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function TestimonialSection() {
  return (
    <section className="relative overflow-hidden py-32 md:py-64 bg-[#040816]">
      
      {/* ENVIRONMENTAL DEPTH: Refined Boardroom */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#040816] via-transparent to-[#040816]" />
        <Image 
          src="/env-boardroom.png" 
          alt="Executive Environment" 
          fill
          className="object-cover opacity-[0.1] grayscale blur-[40px]"
        />
        <div className="smoke-overlay" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-center">
          
          {/* TESTIMONIAL CONTENT (Left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-8"
          >
            <Quote className="w-12 h-12 text-[#C89B2D]/20 mb-12" />
            
            <blockquote className="text-[32px] md:text-[48px] font-medium text-white mb-16 leading-[1.2] tracking-tight">
              "OYEN GRID hasn’t just improved our operations; it has redefined how we think about <span className="text-[#C89B2D] italic font-medium">global scale.</span> We finally have a single source of truth that is both immutable and highly performant."
            </blockquote>
            
            <div className="flex items-center gap-8">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border border-[#C89B2D]/30 shadow-2xl">
                 <Image 
                   src="/chatbot-analyst.png" 
                   alt="Executive Leadership" 
                   fill
                   className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                 />
              </div>
              <div className="flex flex-col">
                 <div className="text-[18px] font-bold text-white mb-1 tracking-tight">James Sterling</div>
                 <div className="text-[11px] text-[#C89B2D] font-black uppercase tracking-[0.4em]">Chief Operations Officer // Global Logistics</div>
                 <div className="mt-3 flex items-center gap-4">
                    <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest border-r border-white/10 pr-4">NYSE: GLS</span>
                    <div className="flex items-center gap-2">
                       <div className="w-1 h-1 rounded-full bg-emerald-500" />
                       <span className="text-[10px] text-emerald-500/60 font-bold uppercase tracking-widest">Active Partner</span>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* CASE STUDY METRICS (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="p-10 rounded-[32px] border border-white/5 bg-white/[0.01] backdrop-blur-3xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-[#C89B2D]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               
               <div className="text-[10px] text-[#C89B2D] font-black uppercase tracking-[0.4em] mb-12">Performance Impact</div>
               
               <div className="space-y-12">
                  {[
                    { label: "Operational Throughput", value: "+340%", sub: "Year-on-year growth" },
                    { label: "Delivery Fragmentation", value: "-82%", sub: "Node-to-node reduction" },
                    { label: "Governance Overhead", value: "-64%", sub: "Automated compliance" }
                  ].map((stat, i) => (
                    <div key={i} className="relative">
                       <div className="text-[9px] text-white/20 font-black uppercase tracking-widest mb-3">{stat.label}</div>
                       <div className="text-[32px] font-bold text-white mb-1 tracking-tighter tabular-nums">{stat.value}</div>
                       <div className="text-[11px] text-white/30 font-light">{stat.sub}</div>
                       {i < 2 && <div className="mt-8 h-px w-full bg-white/5" />}
                    </div>
                  ))}
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
