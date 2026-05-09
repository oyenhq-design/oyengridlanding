"use client";

import { motion } from "framer-motion";
import { DashboardMockup } from "@/components/layout/header";
import { Check } from "lucide-react";

export function HeroReplica() {
  const trustedLogos = ["AltSchool", "ZURI", "teva", "Kuda", "datacamp", "HIGHERLIFE", "chowdeck"];

  return (
    <section className="relative min-h-screen flex flex-col pt-[120px] pb-32 overflow-hidden bg-[#05070B]">
      
      {/* ATMOSPHERIC GLOWS */}
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#F5B942]/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-[#F5B942]/3 blur-[120px] rounded-full" />

      <div className="container-custom relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* LEFT COLUMN: 55% */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-7 pt-12"
          >
             {/* TOP BADGE */}
             <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#F5B942]/30 bg-[#F5B942]/5 mb-12 shadow-[0_0_20px_rgba(245,185,66,0.1)]">
                <div className="w-2 h-2 rounded-full bg-[#F5B942] shadow-[0_0_8px_#F5B942] animate-pulse" />
                <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#F5B942]">Enterprise Programme Operating System</span>
             </div>

             <h1 className="text-white mb-12 text-[56px] md:text-[78px] leading-[0.95] tracking-[-0.05em] font-black">
                Run structured <br />
                programmes with <br />
                complete operational <br />
                control <span className="text-gold-italic">at scale.</span>
             </h1>
             
             <p className="text-[20px] text-[#A0AEC0] mb-14 max-w-2xl leading-[1.7] font-light">
                OYEN GRID is the all-in-one operating system for programme-driven organisations. Plan, deliver, monitor and optimise every cohort with real-time visibility and enterprise-grade security.
             </p>

             <div className="flex flex-col sm:flex-row items-center gap-10 mb-20">
                <button className="btn-replica-gold w-full sm:w-auto">
                   Start Building
                </button>
                <button className="btn-replica-outline w-full sm:w-auto">
                   Talk to Sales
                </button>
             </div>

             {/* TRUST RAIL */}
             <div className="pt-12 border-t border-white/[0.06]">
                <div className="text-[12px] font-bold text-white/20 uppercase tracking-[0.25em] mb-10">Trusted by forward-thinking organisations</div>
                <div className="flex flex-wrap items-center gap-x-12 gap-y-8 opacity-20 grayscale contrast-[1.5] brightness-[1.5]">
                   {trustedLogos.map(logo => (
                     <span key={logo} className="text-[19px] font-black tracking-tighter text-white">{logo}</span>
                   ))}
                </div>
             </div>
          </motion.div>

          {/* RIGHT COLUMN: 45% */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-5 pt-20 hidden lg:block"
          >
             <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
