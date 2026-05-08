"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function EnterpriseSecurity() {
  return (
    <section className="relative overflow-hidden py-32 md:py-64 bg-[#040816]">
      
      {/* ENVIRONMENTAL BACKGROUND: Cinematic SOC */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/security-soc-environment.png" 
          alt="Security Infrastructure" 
          fill
          className="object-cover opacity-[0.3] grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040816] via-[#040816]/60 to-[#040816]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-32 items-center">
          
          {/* CONTENT (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-4 mb-10">
               <div className="h-[1px] w-12 bg-[#C89B2D]/40" />
               <span className="text-[11px] font-medium text-[#C89B2D] uppercase tracking-[0.5em]">Security Protocol</span>
            </div>

            <h2 className="text-[36px] md:text-[60px] font-bold text-white mb-10 leading-[1.1] tracking-tight">
              Institutional <br />
              <span className="text-[#C89B2D] italic font-medium">structural protection.</span>
            </h2>
            
            <p className="text-[19px] text-white/40 mb-14 max-w-[480px] leading-relaxed font-light">
              We provide mission-critical protection for your delivery infrastructure. From encrypted data streams to multi-node redundancy, integrity is enforced at every layer.
            </p>
            
            <div className="space-y-12">
              {[
                { label: "Audit Log", desc: "Immutable structural logging across all nodes for absolute traceability." },
                { label: "Governance Layer", desc: "Institutional threat detection and mitigation protocols integrated by default." }
              ].map((item, i) => (
                <div key={i} className="group">
                   <div className="text-[10px] font-black text-[#C89B2D] uppercase tracking-[0.4em] mb-3">{item.label}</div>
                   <div className="text-[17px] font-bold text-white/80 group-hover:text-white transition-colors">{item.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* MASSIVE VISUAL (Right) - Image Bleed */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 -mr-24 lg:-mr-48"
          >
            <div className="relative group">
               <div className="absolute -inset-20 bg-[#C89B2D]/5 blur-[140px] opacity-0 group-hover:opacity-100 transition-opacity duration-[2s]" />
               <div className="relative rounded-l-[60px] overflow-hidden shadow-2xl border border-white/5">
                 <Image 
                   src="/security-visual.png" 
                   alt="Security Operations" 
                   width={1400}
                   height={900}
                   className="object-cover opacity-90 grayscale-[0.3] group-hover:grayscale-0 transition-all duration-[1.5s] group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#040816]/40" />
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
