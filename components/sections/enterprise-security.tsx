"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Lock, FileText, UserCheck } from "lucide-react";

export function EnterpriseSecurity() {
  return (
    <section className="relative overflow-hidden py-32 md:py-64 bg-[#040816]">
      
      {/* ENVIRONMENTAL BACKGROUND: Cinematic SOC */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/security-soc-environment.png" 
          alt="Security Infrastructure" 
          fill
          className="object-cover opacity-[0.35] grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040816] via-[#040816]/70 to-[#040816]" />
        
        {/* Subtle Scanline Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.01),rgba(0,255,0,0.005),rgba(0,0,255,0.01))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20" />
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
               <span className="text-[11px] font-medium text-[#C89B2D] uppercase tracking-[0.5em]">Trust & Integrity</span>
            </div>

            <h2 className="text-[36px] md:text-[52px] font-bold text-white mb-10 leading-[1.1] tracking-tight">
              Institutional <br />
              <span className="text-[#C89B2D] italic font-medium">structural protection.</span>
            </h2>
            
            <p className="text-[18px] text-white/40 mb-14 max-w-[480px] leading-relaxed font-light">
              Mission-critical protection for global delivery infrastructure. Integrity is enforced at every layer through immutable governance.
            </p>
            
            <div className="space-y-10 mb-16">
              {[
                { label: "Audit Logs", desc: "Immutable structural logging across all nodes.", icon: FileText },
                { label: "Access Governance", desc: "Institutional threat detection and mitigation.", icon: UserCheck }
              ].map((item, i) => (
                <div key={i} className="group flex gap-6">
                   <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover:bg-[#C89B2D]/10 group-hover:border-[#C89B2D]/20 transition-all duration-500">
                      <item.icon className="w-5 h-5 text-white/20 group-hover:text-[#C89B2D] transition-colors" />
                   </div>
                   <div>
                      <div className="text-[10px] font-black text-[#C89B2D] uppercase tracking-[0.4em] mb-2">{item.label}</div>
                      <div className="text-[16px] font-bold text-white/70 group-hover:text-white transition-colors">{item.desc}</div>
                   </div>
                </div>
              ))}
            </div>

            {/* Compliance Badges: Small & Subtle */}
            <div className="flex items-center gap-8 pt-10 border-t border-white/5">
               <div className="flex flex-col gap-2">
                  <div className="text-[9px] text-white/20 font-black uppercase tracking-widest">Compliance</div>
                  <div className="flex items-center gap-6">
                     <span className="text-[11px] font-bold text-white/40 border border-white/10 px-2 py-1 rounded">SOC2 Type II</span>
                     <span className="text-[11px] font-bold text-white/40 border border-white/10 px-2 py-1 rounded">ISO 27001</span>
                     <span className="text-[11px] font-bold text-white/40 border border-white/10 px-2 py-1 rounded">GDPR</span>
                  </div>
               </div>
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
               <div className="relative rounded-l-[60px] overflow-hidden shadow-2xl border border-white/5 bg-[#040816]/40 backdrop-blur-3xl">
                 <Image 
                   src="/security-visual.png" 
                   alt="Security Operations" 
                   width={1400}
                   height={900}
                   className="object-cover opacity-90 grayscale-[0.4] group-hover:grayscale-0 transition-all duration-[1.5s] group-hover:scale-105"
                 />
                 
                 {/* Live Threat Detection Overlay (Subtle) */}
                 <div className="absolute top-10 right-10 p-6 rounded-2xl bg-[#040816]/80 border border-white/10 backdrop-blur-xl shadow-2xl">
                    <div className="flex items-center gap-3 mb-4">
                       <div className="live-pulse w-2 h-2" />
                       <span className="text-[9px] text-[#C89B2D] font-black uppercase tracking-[0.3em]">Threat Detection</span>
                    </div>
                    <div className="space-y-3">
                       {[0, 1, 2].map((_, i) => (
                         <div key={i} className="flex items-center gap-4">
                            <div className="w-1 h-1 rounded-full bg-white/20" />
                            <div className="h-1 w-24 bg-white/5 rounded-full overflow-hidden">
                               <motion.div 
                                  animate={{ x: ["-100%", "100%"] }}
                                  transition={{ duration: 2 + i, repeat: Infinity, ease: "linear" }}
                                  className="h-full w-1/2 bg-[#C89B2D]/40" 
                               />
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#040816]/40" />
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
