"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

export function OperationalClarity() {
  const features = [
    { title: "Governance at scale", desc: "Standardize delivery protocols across every regional node." },
    { title: "Data integrity", desc: "Immutable tracking for every programme participant and outcome." },
    { title: "Real-time visibility", desc: "Live telemetry for cohort performance and operational health." },
    { title: "Structured oversight", desc: "Executive dashboards for centralized institutional management." }
  ];

  return (
    <section className="relative py-48 md:py-80 bg-[#0A0A0A] overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          
          {/* LEFT: WORKSPACE VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 group shadow-[0_80px_160px_rgba(0,0,0,0.8)] aspect-[4/5]">
               <Image 
                 src="/images/workspace-ops.png" 
                 alt="Professional Operational Workspace" 
                 fill
                 className="object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 brightness-90"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>

          {/* RIGHT: CONTENT PROTOCOLS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-4 mb-12">
               <div className="h-px w-8 bg-accent-gold/40" />
               <span className="label-enterprise">Delivery Logic</span>
            </div>
            
            <h2 className="text-white mb-10 text-[40px] md:text-[64px] leading-[1.05] tracking-tight">
              Built for operational clarity at <br />
              <span className="text-accent-gold italic font-semibold">global scale.</span>
            </h2>
            
            <p className="text-white/40 text-[20px] leading-relaxed font-light mb-16 max-w-xl">
              Transition from fragmented coordination to a unified institutional infrastructure layer. Built for absolute structural integrity and professional rigour.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
               {features.map((f, i) => (
                 <div key={i} className="group">
                    <div className="flex items-center gap-4 mb-5">
                       <div className="w-6 h-6 rounded-lg bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 text-accent-gold" />
                       </div>
                       <h4 className="text-white text-[18px] font-bold tracking-tight">{f.title}</h4>
                    </div>
                    <p className="text-white/25 text-[14.5px] leading-relaxed font-light">{f.desc}</p>
                 </div>
               ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
