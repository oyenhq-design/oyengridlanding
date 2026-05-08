"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Lock, FileText, UserCheck } from "lucide-react";

export function EnterpriseSecurity() {
  return (
    <section className="relative overflow-hidden py-48 md:py-64 bg-[#020617]" style={{ background: 'var(--section-bg)' }}>
      
      {/* ENVIRONMENTAL BACKDROP */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/security-soc-environment.png" 
          alt="Security Infrastructure" 
          fill
          className="object-cover opacity-[0.2] grayscale-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-[#020617]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
          
          {/* CONTENT (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-6 mb-12">
               <div className="h-[1px] w-12 bg-[#d6a63c]/30" />
               <span className="text-[10px] font-bold text-[#d6a63c]/60 uppercase tracking-[0.5em]">Protection Protocols</span>
            </div>

            <h2 className="text-[36px] md:text-[64px] font-bold text-white mb-10 tracking-[-0.05em] leading-[1]">
              Institutional <br />
              <span className="text-[#d6a63c] italic font-medium">integrity layers.</span>
            </h2>
            
            <p className="max-w-[480px] mb-16 text-[18px] text-white/40 font-light leading-[1.8]">
              Mission-critical protection for global delivery infrastructure. Integrity is enforced at every layer through immutable governance and structural protection.
            </p>
            
            <div className="space-y-16 mb-24">
              {[
                { label: "Audit Protocols", desc: "Immutable structural logging across all delivery nodes.", icon: FileText },
                { label: "Access Governance", desc: "Institutional identity management and access oversight.", icon: UserCheck }
              ].map((item, i) => (
                <div key={i} className="group flex gap-8">
                   <div className="w-16 h-16 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover:bg-[#d6a63c]/10 group-hover:border-[#d6a63c]/20 transition-all duration-700">
                      <item.icon className="w-7 h-7 text-white/10 group-hover:text-[#d6a63c] transition-colors" />
                   </div>
                   <div>
                      <div className="text-[11px] font-bold text-[#d6a63c]/60 uppercase tracking-[0.4em] mb-3">{item.label}</div>
                      <div className="text-[18px] font-bold text-white/60 group-hover:text-white transition-colors tracking-tight leading-relaxed">{item.desc}</div>
                   </div>
                </div>
              ))}
            </div>

            {/* Institutional Compliance */}
            <div className="pt-12 border-t border-white/5">
              <div className="text-[10px] text-white/10 font-bold uppercase tracking-[0.4em] mb-8">Standardized Compliance Layers</div>
              <div className="flex flex-wrap gap-5">
                 {["SOC2 TYPE II", "ISO 27001", "GDPR", "HIPAA"].map((badge) => (
                   <span key={badge} className="px-4 py-2 text-[11px] font-bold text-white/20 border border-white/10 rounded-xl bg-white/[0.01] uppercase tracking-widest">
                     {badge}
                   </span>
                 ))}
              </div>
            </div>
          </motion.div>

          {/* PANORAMIC VISUAL (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 -mr-32 lg:-mr-48"
          >
            <div className="relative group perspective-[2000px]">
               <motion.div style={{ rotateY: -4 }} className="relative rounded-l-[64px] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.8)] border border-white/10 bg-[#020617]/40 backdrop-blur-3xl">
                 <Image 
                   src="/security-visual.png" 
                   alt="Security Visual" 
                   width={1400}
                   height={900}
                   className="opacity-90 grayscale-[0.4] group-hover:grayscale-0 transition-all duration-[2s]"
                 />
                 <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#020617]/60" />
                 
                 {/* Controlled Governance UI */}
                 <div className="absolute bottom-12 left-12 p-10 premium-card border-[#d6a63c]/10 bg-[#030712]/80">
                    <div className="flex items-center gap-4 mb-8">
                       <div className="w-2 h-2 rounded-full bg-[#d6a63c] animate-pulse" />
                       <span className="text-[10px] font-bold text-[#d6a63c]/60 uppercase tracking-[0.4em]">Governance Monitoring</span>
                    </div>
                    <div className="space-y-6">
                       {[0, 1, 2].map((i) => (
                         <div key={i} className="flex flex-col gap-3">
                            <div className="h-1.5 w-40 bg-white/5 rounded-full overflow-hidden">
                               <motion.div 
                                  animate={{ x: ["-100%", "100%"] }}
                                  transition={{ duration: 2.5 + i, repeat: Infinity, ease: "linear" }}
                                  className="h-full w-1/3 bg-[#d6a63c]/20" 
                               />
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
               </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
