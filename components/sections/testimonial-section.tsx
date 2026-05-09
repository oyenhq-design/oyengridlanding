"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function TestimonialSection() {
  const cases = [
    {
      name: "Marcus Thorne",
      role: "Global Head of Infrastructure",
      org: "Institutional Logics",
      content: "The operational clarity OYEN GRID provided allowed our team to scale delivery nodes across 40+ regions with absolute governance integrity. It is the architectural standard for complex programmes.",
      impact: "240% Scale Increase",
      avatar: "/exec-avatar-1.png"
    },
    {
      name: "Elena Vance",
      role: "Director of Strategic Operations",
      org: "Nexus Global",
      content: "We replaced three disparate management layers with OYEN GRID. The resulting systemic awareness has redefined how we coordinate high-stakes institutional initiatives.",
      impact: "40% Efficiency Gain",
      avatar: "/exec-avatar-2.png"
    }
  ];

  return (
    <section className="relative py-32 md:py-64 bg-[#04070D] overflow-hidden">
      
      {/* ATMOSPHERIC CONTINUITY */}
      <div className="absolute inset-0 z-0 continuous-env opacity-40" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="flex items-center justify-center gap-5 mb-10">
             <div className="h-px w-12 bg-accent-gold/30" />
             <span className="label-institutional">Case Studies</span>
             <div className="h-px w-12 bg-accent-gold/30" />
          </div>
          <h2 className="text-white mb-10">
            Validated by <br />
            <span className="text-accent-gold italic font-medium">institutional leaders.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
           {cases.map((c, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, delay: i * 0.2 }}
               className="premium-card relative group"
             >
                {/* Executive Identity */}
                <div className="flex items-center gap-6 mb-12">
                   <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700">
                      <Image src={c.avatar} alt={c.name} fill className="object-cover" />
                   </div>
                   <div>
                      <div className="text-[18px] font-bold text-white group-hover:text-accent-gold transition-colors">{c.name}</div>
                      <div className="text-[12px] opacity-40 font-light mt-1">{c.role} // {c.org}</div>
                   </div>
                </div>

                <blockquote className="text-[17px] text-white/80 leading-relaxed font-light mb-12 italic">
                  "{c.content}"
                </blockquote>

                <div className="pt-10 border-t border-white/5 flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-gold shadow-[0_0_8px_#d6a63c]" />
                      <span className="text-[11px] text-accent-gold font-black uppercase tracking-[0.2em]">{c.impact}</span>
                   </div>
                   <div className="text-[9px] text-white/10 font-black uppercase tracking-widest">Verified Operational Impact</div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
