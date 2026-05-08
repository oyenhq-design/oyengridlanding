"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Lock, FileText, UserCheck } from "lucide-react";

export function EnterpriseSecurity() {
  return (
    <section className="relative overflow-hidden py-32 md:py-64 bg-[#020617]" style={{ background: 'var(--section-bg)' }}>
      
      {/* ENVIRONMENTAL BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/security-soc-environment.png" 
          alt="Security Infrastructure" 
          fill
          className="object-cover opacity-[0.25] grayscale-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-[#020617]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-32 items-center">
          
          {/* CONTENT (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-4 mb-12">
               <div className="h-[1px] w-12 bg-[#d6a63c]/30" />
               <span className="premium-label">Trust & Integrity</span>
            </div>

            <h2 className="text-[36px] md:text-[56px] font-bold text-white mb-10 tracking-[-0.05em] leading-[1]">
              Institutional <br />
              <span className="text-[#d6a63c] italic font-medium">structural protection.</span>
            </h2>
            
            <p className="max-w-[480px] mb-16 text-white/50 font-light">
              Mission-critical protection for global delivery infrastructure. Integrity is enforced at every layer through immutable governance.
            </p>
            
            <div className="space-y-12 mb-20">
              {[
                { label: "Audit Logs", desc: "Immutable structural logging across all nodes.", icon: FileText },
                { label: "Access Governance", desc: "Institutional threat detection and mitigation.", icon: UserCheck }
              ].map((item, i) => (
                <div key={i} className="group flex gap-8">
                   <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-[#d6a63c]/10 group-hover:border-[#d6a63c]/20 transition-all duration-500">
                      <item.icon className="w-6 h-6 text-white/20 group-hover:text-[#d6a63c] transition-colors" />
                   </div>
                   <div>
                      <div className="text-[10px] font-bold text-[#d6a63c] uppercase tracking-[0.4em] mb-2">{item.label}</div>
                      <div className="text-[17px] font-bold text-white/70 group-hover:text-white transition-colors tracking-tight">{item.desc}</div>
                   </div>
                </div>
              ))}
            </div>

            {/* Compliance Indicators */}
            <div className="pt-10 border-t border-white/5">
              <div className="text-[10px] text-white/20 font-bold uppercase tracking-widest mb-6">Standardized Compliance</div>
              <div className="flex flex-wrap gap-4">
                 {["SOC2 TYPE II", "ISO 27001", "GDPR", "HIPAA"].map((badge) => (
                   <span key={badge} className="px-3 py-1.5 text-[11px] font-bold text-white/40 border border-white/10 rounded-lg bg-white/[0.01]">
                     {badge}
                   </span>
                 ))}
              </div>
            </div>
          </motion.div>

          {/* VISUAL ANCHOR (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 -mr-24 lg:-mr-48"
          >
            <div className="relative group perspective-[2000px]">
               <motion.div style={{ rotateY: -6 }} className="relative rounded-l-[48px] overflow-hidden cinematic-shadow border border-white/10 bg-[#020617]/40 backdrop-blur-3xl">
                 <Image 
                   src="/security-visual.png" 
                   alt="Security Visual" 
                   width={1400}
                   height={900}
                   className="object-cover opacity-90 grayscale-[0.3] group-hover:grayscale-0 transition-all duration-[1.5s] group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#020617]/40" />
                 
                 {/* Controlled Status UI */}
                 <div className="absolute top-12 right-12 p-8 premium-card border-[#d6a63c]/20">
                    <div className="flex items-center gap-3 mb-6">
                       <div className="w-2 h-2 rounded-full bg-[#d6a63c] animate-pulse" />
                       <span className="premium-label text-[9px]">Active Detection</span>
                    </div>
                    <div className="space-y-4">
                       {[0, 1].map((_, i) => (
                         <div key={i} className="flex flex-col gap-2">
                            <div className="h-1 w-32 bg-white/5 rounded-full overflow-hidden">
                               <motion.div 
                                  animate={{ x: ["-100%", "100%"] }}
                                  transition={{ duration: 2 + i, repeat: Infinity, ease: "linear" }}
                                  className="h-full w-1/2 bg-[#d6a63c]/30" 
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

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.04]" />
    </section>
  );
}
