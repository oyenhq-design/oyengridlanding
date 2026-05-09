"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, ArrowRight } from "lucide-react";

export function TestimonialCinematic() {
  return (
    <section className="section-gap bg-[#05070B] relative overflow-hidden">
      {/* Background Anchor Image: 5-10% visibility */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none grayscale brightness-50">
         <Image src="/security_soc_environment_1778252613879.png" alt="Overlay" fill className="object-cover" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl mx-auto"
        >
          <Quote className="w-12 h-12 text-brand-gold/20 mx-auto mb-10" />
          
          <blockquote className="text-[28px] md:text-[38px] font-bold text-white leading-[1.2] tracking-[-0.05em] mb-12">
            "OYEN GRID hasn't just improved our operations; it has redefined how we think about <span className="text-gold-highlight italic">institutional scale.</span>"
          </blockquote>

          <div className="flex flex-col items-center gap-4 mb-20">
             <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 grayscale">
                <Image src="/exec-avatar-1.png" alt="Dr. Amina Yusuf" width={56} height={56} className="object-cover" />
             </div>
             <div>
                <div className="text-[18px] font-bold text-white tracking-tight">Dr. Amina Yusuf</div>
                <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/30 mt-1">Director of Programmes, AltSchool Africa</div>
             </div>
          </div>

          {/* Integrated Metrics Rail */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-20 border-t border-white/5">
             {[
               { val: "+340%", label: "Operational ROI" },
               { val: "-82%", label: "Manual Effort Reduction" },
               { val: "-64%", label: "Reporting Efficiency" }
             ].map((m, i) => (
               <div key={i} className="flex flex-col items-center">
                  <span className="text-[42px] font-black text-brand-gold tracking-tighter">{m.val}</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">{m.label}</span>
               </div>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function FinalCTACinematic() {
  return (
    <section className="relative py-48 md:py-64 bg-[#05070B] overflow-hidden">
      {/* MASSIVE CINEMATIC BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/security-ops-center-institutional.png" 
          alt="Final Command Center" 
          fill
          className="object-cover opacity-[0.15] grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#05070B]/40 to-[#05070B]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,185,66,0.03),transparent_70%)]" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-10">
             <div className="h-px w-8 bg-brand-gold/30" />
             <span className="text-[11px] font-black uppercase tracking-[0.5em] text-brand-gold">The Platform for What's Next</span>
             <div className="h-px w-8 bg-brand-gold/30" />
          </div>

          <h2 className="text-[48px] md:text-[64px] font-black mb-10 leading-[1.05] tracking-[-0.06em]">
            Built for the future <br />
            of global delivery.
          </h2>
          
          <p className="text-editorial mb-16 max-w-2xl mx-auto">
            One platform. Every capability. Infinite impact. Deploy institutional-grade operational systems with architectural rigour.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
             <button className="btn-cinematic-gold w-full sm:w-auto px-16">
                Initialize System
             </button>
             <button className="flex items-center gap-3 text-[14px] font-bold text-white/30 hover:text-white transition-all group uppercase tracking-[0.2em]">
                Talk to Architects <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
             </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
