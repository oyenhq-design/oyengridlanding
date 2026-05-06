"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star, ExternalLink, BookOpen, Layers, Network } from "lucide-react";

export function ProofAndResourceSections() {
  return (
    <div className="bg-[#0B0B0C]">
      
      {/* 9. CASE STUDIES (REAL IMAGES + HOVER ZOOM) */}
      <section className="py-40 bg-[#0B0B0C]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-28 gap-8">
            <div className="max-w-2xl">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[#F5C044] text-[12px] font-bold tracking-[0.3em] uppercase mb-6"
              >
                Operational Proof
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[42px] md:text-[56px] font-bold text-white tracking-tight leading-tight"
              >
                Built for operators. <br />
                <span className="text-[#71717A]">Proven in action.</span>
              </motion.h2>
            </div>
            <button className="px-8 py-4 rounded-xl border border-white/10 text-white font-bold text-[14px] hover:bg-white/5 transition-all flex items-center gap-2 group">
              View all case studies <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                image: "/professional_workspace_ops_team_1778024747201.png", 
                category: "Enterprise Scale", 
                title: "How TechElevate scaled their internal training by 400%",
                desc: "Replacing fragmented LMS tools with OYEN GRID unified their entire global talent operations."
              },
              { 
                image: "/dark_office_background_1778072758177.png", 
                category: "Social Impact", 
                title: "Orchestrating programs across 12 countries for NGO Global",
                desc: "Managing high-stakes delivery in low-bandwidth regions with offline structural integrity."
              },
              { 
                image: "/images/hero-dashboard.png", 
                category: "Corporate Ops", 
                title: "Reducing new hire ramp-up time by 30% through structure",
                desc: "A case study on how OYEN GRID enforces learning paths for thousands of engineers."
              }
            ].map((study, i) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/11] rounded-[32px] overflow-hidden mb-10 border border-white/10 shadow-2xl">
                  <Image 
                    src={study.image} 
                    alt={study.title} 
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-6 left-6 px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest">
                    {study.category}
                  </div>
                </div>
                <h4 className="text-white font-bold text-[22px] leading-tight mb-5 group-hover:text-[#F5C044] transition-colors">{study.title}</h4>
                <p className="text-[#71717A] text-[16px] leading-relaxed font-light mb-8 group-hover:text-[#A1A1AA] transition-colors line-clamp-2">{study.desc}</p>
                <div className="flex items-center gap-2 text-[#F5C044] text-[14px] font-bold group-hover:translate-x-2 transition-transform">
                  Read case study <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. KNOWLEDGE SECTION (VISUALS: ABSTRACT GOLD/DATA) */}
      <section className="py-40 bg-[#0D0D10]/40 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0 opacity-[0.05]">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#F5C044] blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
        </div>
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center mb-28">
            <h2 className="text-[36px] md:text-[52px] font-bold text-white tracking-tight">
              Knowledge for high-fidelity <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5C044] to-[#D4A017]">operational success</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: BookOpen, title: "The structural framework of enterprise learning", desc: "A guide to building infrastructure that survives 10x growth." },
              { icon: Layers, title: "Governance vs. Speed: A balanced approach", desc: "How top-tier operators maintain control without slowing down delivery." },
              { icon: Network, title: "Connecting fragmented operational stacks", desc: "A technical guide to unifying your programme data through APIs." }
            ].map((item, i) => (
              <div key={item.title} className="group cursor-pointer flex flex-col h-full">
                <div className="aspect-[16/10] rounded-[32px] bg-[#0D0D10] border border-white/10 mb-10 flex items-center justify-center overflow-hidden relative ring-1 ring-white/5 shadow-2xl">
                   {/* Abstract gold visuals */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,192,68,0.1),transparent_70%)]" />
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="w-32 h-32 rounded-full border border-[#F5C044]/10 flex items-center justify-center"
                  >
                    <div className="w-24 h-24 rounded-full border border-[#F5C044]/20 flex items-center justify-center">
                      <item.icon className="w-10 h-10 text-[#F5C044] opacity-50" />
                    </div>
                  </motion.div>
                  {/* Floating particle dots */}
                  <div className="absolute top-10 right-10 w-2 h-2 rounded-full bg-[#F5C044]/40 blur-[2px]" />
                  <div className="absolute bottom-12 left-12 w-3 h-3 rounded-full bg-[#F5C044]/20 blur-[4px]" />
                </div>
                <p className="text-[#F5C044] text-[10px] font-bold uppercase tracking-[0.25em] mb-4">Resource · Operational Guide</p>
                <h4 className="text-white font-bold text-[20px] leading-snug mb-6 group-hover:text-[#F5C044] transition-colors flex-1">{item.title}</h4>
                <div className="flex items-center gap-2 text-[#71717A] text-[14px] group-hover:text-white transition-colors">
                  Read full guide <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. TESTIMONIAL BLOCK (LIGHT CARD BREAK) */}
      <section className="py-40 px-6 bg-[#0B0B0C]">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-[1200px] mx-auto bg-[#F9FAFB] rounded-[56px] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] ring-1 ring-black/5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side: Stats */}
            <div className="p-16 lg:p-24 bg-white border-r border-slate-100 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-x-12 gap-y-16">
                {[
                  { value: "400%", label: "Throughput growth" },
                  { value: "10x", label: "Cohort volume" },
                  { value: "92.4%", label: "Completion rate" },
                  { value: "30%", label: "Reduced overhead" }
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-[#0B0B0C] text-[48px] md:text-[64px] font-extrabold tracking-tighter leading-none mb-4">{stat.value}</p>
                    <p className="text-[#64748B] text-[15px] font-bold uppercase tracking-widest leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Testimonial */}
            <div className="p-16 lg:p-24 flex flex-col justify-center">
              <div className="flex gap-1 mb-10">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-6 h-6 fill-[#F5C044] text-[#F5C044]" />)}
              </div>
              <blockquote className="text-[#0B0B0C] text-[28px] md:text-[36px] font-bold leading-tight tracking-tight mb-12 relative italic">
                “OYEN GRID transformed our delivery architecture. We now manage 10x more cohorts with less friction and higher data fidelity than ever before.”
              </blockquote>
              <div className="flex items-center gap-5 pt-10 border-t border-slate-100">
                <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden ring-4 ring-white shadow-lg">
                  <Image src="/professional_workspace_ops_team_1778024747201.png" alt="Amara Nwosu" width={64} height={64} className="object-cover" />
                </div>
                <div>
                  <p className="text-[#0B0B0C] font-black text-xl leading-none mb-1.5">Amara Nwosu</p>
                  <p className="text-[#64748B] text-[15px] font-bold">Head of Operations, TechElevate</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
