"use client";

import { motion } from "framer-motion";
import { Network, Cpu, Fingerprint } from "lucide-react";

export function ProofAndResourceSections() {
  return (
    <div className="bg-[#0B0B0D]">
      <section className="py-24 bg-[#0B0B0D] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[44px] font-bold text-white tracking-tight mb-4">Built for operators. Proven in action.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Training Session", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4" },
              { title: "Corporate Onboarding", img: "https://images.unsplash.com/photo-1556761175-4b46a572b786" },
              { title: "Team Collaboration", img: "https://images.unsplash.com/photo-1522071823991-b997e7b17bbd" }
            ].map((study, i) => (
              <motion.div
                key={study.title}
                className="group relative h-[400px] rounded-[28px] overflow-hidden border border-white/10 shadow-2xl"
              >
                <img loading="lazy" src={study.img} alt={study.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-white font-bold text-xl group-hover:text-[#F5B942] transition-colors">{study.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B0B0D] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[44px] font-bold text-white tracking-tight">Knowledge Hub</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Network, title: "Scalability Frameworks" },
              { icon: Cpu, title: "Automated Governance" },
              { icon: Fingerprint, title: "Security Blueprints" }
            ].map((resource, i) => (
              <motion.div
                key={resource.title}
                className="group p-10 rounded-[24px] bg-white/[0.02] border border-white/5 hover:border-[#F5B942]/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#F5B942]/10 transition-all">
                  <resource.icon className="w-6 h-6 text-[#71717A] group-hover:text-[#F5B942]" />
                </div>
                <h4 className="text-white font-bold text-lg mb-4">{resource.title}</h4>
                <p className="text-[#71717A] text-sm leading-relaxed">Modern design principles for high-fidelity operational success.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
