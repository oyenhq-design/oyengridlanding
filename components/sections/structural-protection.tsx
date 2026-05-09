"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

export function StructuralProtection() {
  return (
    <section className="relative py-48 md:py-80 bg-[#040816] overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          
          {/* LEFT: GOVERNANCE TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="max-w-xl order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-12">
               <div className="h-px w-8 bg-accent-gold/40" />
               <span className="label-institutional">Security Layer</span>
            </div>
            
            <h2 className="text-white mb-10 leading-[1.05]">
              Institutional <br />
              <span className="text-accent-gold italic font-semibold">structural protection.</span>
            </h2>
            
            <p className="text-white/40 text-[18px] leading-relaxed font-light mb-16">
              Our infrastructure is built for absolute resilience. Every node is protected by sovereign encryption and institutional governance logic, ensuring data sovereignty across global borders.
            </p>

            <div className="space-y-6 mb-16">
               {[
                 "Immutable node log architecture",
                 "Sovereign data encryption protocols",
                 "Real-time operational audit loops"
               ].map((t, i) => (
                 <div key={i} className="flex items-center gap-5">
                    <div className="w-5 h-5 rounded-full bg-accent-gold/10 flex items-center justify-center border border-accent-gold/20">
                       <Check className="w-3 h-3 text-accent-gold" />
                    </div>
                    <span className="text-[14px] text-white/60 font-medium tracking-tight">{t}</span>
                 </div>
               ))}
            </div>

            <button className="flex items-center gap-3 text-[13px] font-black uppercase tracking-[0.3em] text-white/30 hover:text-accent-gold transition-all group">
               Access Security Whitepaper <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>

          {/* RIGHT: MASSIVE INFRASTRUCTURE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2"
          >
            <div className="relative rounded-[48px] overflow-hidden border border-white/10 group shadow-[0_80px_160px_rgba(0,0,0,0.8)]">
               <Image 
                 src="/security-soc-environment.png" 
                 alt="Institutional Infrastructure Tunnel" 
                 width={1200} 
                 height={1400} 
                 className="object-cover h-[740px] grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000 brightness-75 group-hover:brightness-100"
               />
               {/* Material Overlays */}
               <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#040816]/80" />
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,166,58,0.05),transparent_70%)]" />
               
               {/* Protocol Label */}
               <div className="absolute bottom-10 left-10 p-6 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl">
                  <div className="text-[9px] font-black uppercase tracking-widest text-accent-gold mb-2">Protocol L-04</div>
                  <div className="text-[14px] font-bold text-white tracking-tight">Sovereign Encryption Layer Active</div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
