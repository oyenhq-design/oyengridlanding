"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Sparkles, MessageSquare, FileText, Globe, Database, Users, Cpu, Activity, BarChart3, ShieldCheck } from "lucide-react";

export function TrustOutcomes() {
  return (
    <section className="section-gap bg-[#050816] border-b border-white/5 relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-[60px] items-center">
          
          {/* LEFT: QUOTE */}
          <div className="max-w-[540px]">
             <div className="mb-8 w-11 h-9 bg-brand-gold/10 flex items-center justify-center rounded-lg">
                <Quote className="w-4.5 h-4.5 text-brand-gold" />
             </div>
             <h2 className="text-[32px] leading-[1.25] mb-10 font-bold text-white/90">
                "OYEN GRID has transformed our programme delivery into a <span className="text-brand-gold">precision operation</span>. The visibility and coordination across our global cohorts is now absolute."
             </h2>
             <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full border border-white/10 overflow-hidden bg-white/5">
                   <Image src="/exec-avatar-1.png" alt="Executive" width={44} height={44} className="grayscale" />
                </div>
                <div>
                   <div className="text-[14px] font-black text-white uppercase tracking-wider">Dr. Yusuf Amina</div>
                   <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Director of Operations, AltSchool</div>
                </div>
             </div>
          </div>

          {/* RIGHT: METRICS CARD */}
          <div className="flex justify-center lg:justify-end">
             <div className="w-[280px] h-[240px] card-institutional flex flex-col justify-center gap-5">
                <div>
                   <div className="text-[9.5px] font-black uppercase tracking-[0.4em] text-brand-gold mb-2.5">Delivery Efficiency</div>
                   <div className="text-[38px] font-bold text-white tracking-tighter leading-none">+340%</div>
                </div>
                <div>
                   <div className="text-[9.5px] font-black uppercase tracking-[0.4em] text-brand-gold mb-2.5">Coordination Overhead</div>
                   <div className="text-[38px] font-bold text-white tracking-tighter leading-none">-82%</div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export function FinalAuthorisation() {
  return (
    <section className="h-[460px] relative bg-[#050816] overflow-hidden flex items-center border-b border-white/5">
      {/* Contained Cinematic Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
         <Image 
            src="/hero-bg-institutional.png" 
            alt="Infrastructure" 
            fill 
            className="object-cover bg-cinematic"
         />
         <div className="absolute inset-0 cinematic-overlay" />
      </div>

      <div className="container-custom relative z-10 w-full text-center">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
         >
            <span className="eyebrow mb-6">SYSTEM DEPLOYMENT PROTOCOL</span>
            <h2 className="text-[48px] leading-tight mb-10 max-w-[700px] mx-auto">
               Build the infrastructure behind <br />
               your <span className="text-brand-gold">programme</span> operations.
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <button className="btn-institutional-primary px-10">
                  Start Building
               </button>
               <button className="btn-institutional-secondary px-10">
                  Contact Sales
               </button>
            </div>

            {/* Ambient Gold Light */}
            <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-full h-[300px] bg-brand-gold/[0.05] blur-[120px] rounded-full" />
         </motion.div>
      </div>
    </section>
  );
}
