"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, ShieldCheck } from "lucide-react";

export function EnterpriseSecurityZoom() {
  const points = [
    "Immutable audit logging",
    "Multi-region redundancy",
    "Role-based governance",
    "Compliance enforcement"
  ];

  return (
    <section className="relative py-48 md:py-80 bg-[#040816] overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          
          {/* LEFT: GOVERNANCE TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="max-w-xl order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-14">
               <div className="h-px w-8 bg-accent-gold/40" />
               <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white/30">Security Architecture</span>
            </div>
            
            <h2 className="text-white mb-12 text-[48px] md:text-[68px] leading-[1.02] tracking-[-0.06em]">
              Institutional <br />
              <span className="text-gold-gradient italic">structural protection.</span>
            </h2>
            
            <p className="text-white/40 text-[20px] leading-relaxed font-light mb-16">
              Security architecture for large-scale institutional operations and distributed programme infrastructure. Built for absolute structural integrity and sovereign resilience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 mb-20">
               {points.map((t, i) => (
                 <div key={i} className="flex items-center gap-5 group">
                    <div className="w-5 h-5 rounded-full bg-accent-gold/10 flex items-center justify-center border border-accent-gold/20 group-hover:bg-accent-gold transition-all duration-500">
                       <Check className="w-3 h-3 text-accent-gold group-hover:text-black transition-colors" />
                    </div>
                    <span className="text-[15px] text-white/60 font-bold tracking-tight">{t}</span>
                 </div>
               ))}
            </div>

            <button className="btn-outline-zoom px-12 h-14">
               Access Security Whitepaper
            </button>
          </motion.div>

          {/* RIGHT: MASSIVE INFRASTRUCTURE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 60 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2"
          >
            <div className="relative rounded-[56px] overflow-hidden border border-white/10 group shadow-[0_80px_160px_rgba(0,0,0,0.8)]">
               <Image 
                 src="/security-soc-environment.png" 
                 alt="Institutional Infrastructure Tunnel" 
                 width={1200} 
                 height={1400} 
                 className="object-cover h-[780px] grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000 brightness-75 group-hover:brightness-100 scale-105 group-hover:scale-100"
               />
               {/* Material Overlays */}
               <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#040816]/90" />
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,166,58,0.06),transparent_70%)]" />
               
               {/* Telemetry Label */}
               <div className="absolute bottom-12 left-12 p-8 bg-black/50 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-3xl">
                  <div className="flex items-center gap-3 mb-4">
                     <ShieldCheck className="w-5 h-5 text-accent-gold" />
                     <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-gold">Verified Node Trace</span>
                  </div>
                  <div className="text-[18px] font-bold text-white tracking-tight mb-2">Sovereign Encryption Layer</div>
                  <div className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                     <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">L-04 Protocol Active</span>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
