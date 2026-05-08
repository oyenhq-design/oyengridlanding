"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function TestimonialSection() {
  return (
    <section className="relative overflow-hidden py-48 md:py-64 bg-[#020617]" style={{ background: 'var(--section-bg)' }}>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
          
          {/* QUOTE CONTENT (Left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7"
          >
            <Quote className="w-10 h-10 text-[#d6a63c]/20 mb-12" />
            
            <blockquote className="text-[32px] md:text-[48px] font-bold text-white mb-20 leading-[1] tracking-tight">
              "OYEN GRID has provided the structural layer required for our global operations. We finally have an operational source of truth that maintains <span className="text-[#d6a63c] italic font-medium">absolute integrity.</span>"
            </blockquote>
            
            <div className="flex items-center gap-8">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#030712]">
                 <Image 
                   src="/chatbot-analyst.png" 
                   alt="Executive Leadership" 
                   fill
                   className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                 />
              </div>
              <div className="flex flex-col">
                 <div className="text-[20px] font-bold text-white mb-1.5 tracking-tight">James Sterling</div>
                 <div className="text-[11px] text-[#d6a63c] font-bold uppercase tracking-[0.4em]">Chief Operations Officer // Institutional Logistics</div>
                 <div className="mt-4 flex items-center gap-6">
                    <span className="text-[10px] text-white/10 font-bold uppercase tracking-widest border-r border-white/10 pr-6">NYSE: ILS</span>
                    <div className="flex items-center gap-3">
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
                       <span className="text-[10px] text-emerald-500/30 font-bold uppercase tracking-widest">Active Partner</span>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* PERFORMANCE CARDS (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="premium-card p-14 relative overflow-hidden group">
               <div className="premium-label text-[10px] mb-16">Operational Impact Analysis</div>
               
               <div className="space-y-16">
                  {[
                    { label: "Delivery Throughput", value: "+340%", sub: "Institutional growth" },
                    { label: "Operational Fragmentation", value: "-82%", sub: "Node reduction" }
                  ].map((stat, i) => (
                    <div key={i} className="relative">
                       <div className="text-[10px] text-white/15 font-bold uppercase tracking-[0.4em] mb-4">{stat.label}</div>
                       <div className="text-[44px] font-bold text-white mb-2 tracking-tight tabular-nums">{stat.value}</div>
                       <div className="text-[13px] text-white/30 font-light">{stat.sub}</div>
                       {i < 1 && <div className="mt-14 h-px w-full bg-white/5" />}
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
