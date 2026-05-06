"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Quote, Network, Cpu, Fingerprint, Globe } from "lucide-react";

export function ProofAndResourceSections() {
  return (
    <div className="bg-[#0B0B0D]">
      
      {/* 9. BUILT FOR OPERATORS (3 human-centric cards) */}
      <section className="py-32 bg-[#0B0B0D] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[32px] md:text-[44px] font-bold text-white tracking-tight mb-4">
              Built for operators. Proven in action.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                image: "/oyen_grid_training_cohort_1778082101_png_1778091730456.png", 
                title: "Training Cohorts", 
                desc: "Scaling talent delivery with absolute structural integrity."
              },
              { 
                image: "/team_discussing_modern_office_1778082987_png_1778092709737.png", 
                title: "Corporate Sessions", 
                desc: "Modern onboarding and collaborative workspace management."
              },
              { 
                image: "/oyen_grid_operations_room_1778082132_png_1778091760417.png", 
                title: "Operational Monitoring", 
                desc: "Real-world application of high-fidelity programme monitoring."
              }
            ].map((study, i) => (
              <motion.div
                key={study.title}
                whileHover={{ y: -10 }}
                className="group relative h-[420px] rounded-[28px] overflow-hidden border border-white/5 shadow-2xl"
              >
                <Image src={study.image} alt={study.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/40 to-transparent" />
                <div className="absolute inset-0 border-2 border-[#F5B942]/0 group-hover:border-[#F5B942]/20 transition-all pointer-events-none" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-[#F5B942] transition-colors">{study.title}</h3>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed">{study.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. KNOWLEDGE (Abstract + Real blend) */}
      <section className="py-32 bg-[#0B0B0D] relative border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/people_using_laptops_office_1778083056_png_1778092776019.png" alt="Knowledge context" fill className="object-cover opacity-5 grayscale blur-[30px]" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-[32px] md:text-[44px] font-bold text-white tracking-tight">Knowledge Hub</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Network, title: "Scalability Frameworks" },
              { icon: Cpu, title: "Automated Governance" },
              { icon: Fingerprint, title: "Security Blueprints" }
            ].map((resource, i) => (
              <motion.div
                key={resource.title}
                className="group p-10 rounded-[28px] bg-white/[0.02] border border-white/5 hover:border-[#F5B942]/30 transition-all overflow-hidden relative shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-[#F5B942]/10 transition-all">
                  <resource.icon className="w-6 h-6 text-[#71717A] group-hover:text-[#F5B942]" />
                </div>
                <h4 className="text-white font-bold text-lg mb-4">{resource.title}</h4>
                <p className="text-[#71717A] text-[15px] leading-relaxed mb-8">Modern design principles for high-fidelity operational success.</p>
                <button className="flex items-center gap-2 text-white/40 group-hover:text-[#F5B942] font-bold text-sm transition-colors">
                  Read blueprint <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. TESTIMONIAL (Human avatar + Office bg) */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/team_discussing_modern_office_1778082987_png_1778092709737.png" alt="Testimonial background" fill className="object-cover opacity-5 grayscale" />
        </div>

        <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
          <Quote className="w-16 h-16 text-[#F5B942]/20 mx-auto mb-10" />
          <blockquote className="text-[26px] md:text-[34px] font-bold text-black leading-tight tracking-tight mb-12 italic">
            "OYEN GRID has fundamentally transformed how we deliver large-scale programs. The structural control we now have is unparalleled."
          </blockquote>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-[#F5B942]/10 mb-4 shadow-xl">
               <Image src="/trainer_presenting_saas_1778083021_png_1778092746837.png" alt="Sarah Chen" width={64} height={64} className="object-cover" />
            </div>
            <p className="text-black font-black text-xl">Dr. Sarah Chen</p>
            <p className="text-[#71717A] font-bold text-[13px] uppercase tracking-widest">Director of Learning, GFS</p>
          </div>
        </div>
      </section>

    </div>
  );
}
