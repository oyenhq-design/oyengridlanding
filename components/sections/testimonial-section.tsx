"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function TestimonialSection() {
  return (
    <section className="relative overflow-hidden py-32 md:py-64 bg-[#020617]" style={{ background: 'var(--section-bg)' }}>
      
      {/* MINIMAL ATMOSPHERE */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(214,166,60,0.02),transparent_70%)]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* QUOTE CONTENT (Left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7"
          >
            <Quote className="w-12 h-12 text-[#d6a63c]/20 mb-12" />
            
            <blockquote className="text-[32px] md:text-[44px] font-bold text-white mb-16 leading-[1.1] tracking-tight">
              "OYEN GRID has redefined how we think about <span className="text-[#d6a63c] italic font-medium">global scale.</span> We finally have an operational source of truth that is both immutable and performant."
            </blockquote>
            
            <div className="flex items-center gap-8">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border border-[#d6a63c]/30 shadow-2xl bg-[#030712]">
                 <Image 
                   src="/chatbot-analyst.png" 
                   alt="Executive Leadership" 
                   fill
                   className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                 />
              </div>
              <div className="flex flex-col">
                 <div className="text-[19px] font-bold text-white mb-1 tracking-tight">James Sterling</div>
                 <div className="text-[11px] text-[#d6a63c] font-bold uppercase tracking-[0.3em]">Chief Operations Officer // Global Logistics</div>
                 <div className="mt-3 flex items-center gap-4">
                    <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest border-r border-white/10 pr-4">NYSE: GLS</span>
                    <div className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
                       <span className="text-[10px] text-emerald-500/40 font-bold uppercase tracking-widest">Active Partner</span>
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
            <div className="premium-card p-12 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-[#d6a63c]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               
               <div className="premium-label text-[10px] mb-12">Performance Impact</div>
               
               <div className="space-y-12">
                  {[
                    { label: "Operational Throughput", value: "+340%", sub: "Institutional growth" },
                    { label: "Delivery Fragmentation", value: "-82%", sub: "Node reduction" }
                  ].map((stat, i) => (
                    <div key={i} className="relative">
                       <div className="text-[10px] text-white/20 font-bold uppercase tracking-widest mb-3">{stat.label}</div>
                       <div className="text-[36px] font-bold text-white mb-1 tracking-tight tabular-nums">{stat.value}</div>
                       <div className="text-[12px] text-white/40 font-light">{stat.sub}</div>
                       {i < 1 && <div className="mt-10 h-px w-full bg-white/5" />}
                    </div>
                  ))}
               </div>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.04]" />
    </section>
  );
}
