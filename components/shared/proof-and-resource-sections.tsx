"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Quote, BookOpen, MessageSquare, Database, Share2, Network, Cpu, Fingerprint, Globe } from "lucide-react";

export function ProofAndResourceSections() {
  return (
    <div className="bg-[#0B0B0C]">
      
      {/* 9. CASE STUDIES (3 cards side-by-side with REAL images) */}
      <section className="py-40 bg-[#0B0B0C]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
                In the Field
              </div>
              <h2 className="text-[36px] md:text-[52px] font-bold text-white tracking-tight leading-tight">
                Built for operators. <br />
                <span className="text-[#F5B800]">Proven in action.</span>
              </h2>
            </div>
            <button className="flex items-center gap-3 text-white font-bold text-[15px] hover:gap-5 transition-all group">
              View all customer stories <ArrowRight className="w-5 h-5 text-[#F5B800] group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                image: "/oyen_grid_training_cohort_1778082101_png_1778091730456.png", 
                category: "Training Cohorts", 
                title: "How TechElevate scaled their internal training by 400%",
                desc: "Replacing fragmented LMS tools with OYEN GRID unified their entire global talent operations."
              },
              { 
                image: "/premium_saas_workspace_night_1778072758177_png_1778076123899.png", 
                category: "Team Collaboration", 
                title: "Scaling talent delivery at Global Finance Solutions",
                desc: "Managing high-stakes professional development across 50+ countries with structural absolute integrity."
              },
              { 
                image: "/oyen_grid_operations_room_1778082132_png_1778091760417.png", 
                category: "Operational Monitoring", 
                title: "Transforming social impact for the Lead NGO Alliance",
                desc: "Unifying multi-donor programme data into a single, high-fidelity monitoring and evaluation engine."
              }
            ].map((study, i) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative h-[520px] rounded-[32px] overflow-hidden border border-white/10 hover:border-[#F5B800]/40 transition-all duration-700 shadow-2xl"
              >
                {/* Image background with slight zoom on hover */}
                <Image 
                  src={study.image} 
                  alt={study.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                
                {/* Dark overlay (gradient bottom) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                {/* Glow border on hover */}
                <div className="absolute inset-0 rounded-[32px] border-2 border-[#F5B800]/0 group-hover:border-[#F5B800]/20 transition-all duration-700 pointer-events-none" />

                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="inline-flex w-fit px-3 py-1 rounded-full bg-[#F5B800] text-black text-[10px] font-black uppercase tracking-wider mb-6">
                    {study.category}
                  </div>
                  <h3 className="text-white font-bold text-[24px] leading-tight mb-6 group-hover:text-[#F5B800] transition-colors">{study.title}</h3>
                  <p className="text-[#A1A1AA] text-[15px] leading-relaxed mb-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 line-clamp-2">
                    {study.desc}
                  </p>
                  <div className="flex items-center gap-2 text-white font-bold text-[14px]">
                    Explore Case Study <ArrowRight className="w-4 h-4 text-[#F5B800]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. KNOWLEDGE (Abstract visuals + Shimmer cards) */}
      <section className="py-40 bg-[#0B0B0C] relative border-t border-white/5">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500 opacity-[0.02] blur-[200px] rounded-full" />
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center mb-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
              Resource Hub
            </div>
            <h2 className="text-[36px] md:text-[52px] font-bold text-white tracking-tight leading-tight">
              Knowledge for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-blue-400">high-fidelity operational success</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { 
                icon: Network, 
                title: "Scalability Frameworks", 
                desc: "How to design programme structures that maintain absolute integrity as they scale to thousands of participants." 
              },
              { 
                icon: Cpu, 
                title: "Automated Governance", 
                desc: "The operator's guide to setting up structural rules that handle administrative tasks automatically." 
              },
              { 
                icon: Fingerprint, 
                title: "Security Blueprints", 
                desc: "A deep-dive into enterprise-grade data handling and compliance for large-scale social and corporate programmes." 
              }
            ].map((resource, i) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-12 rounded-[32px] bg-[#111112] border border-white/10 hover:border-blue-500/30 transition-all duration-700 shadow-xl overflow-hidden"
              >
                {/* Subtle animated shimmer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Soft glow on hover */}
                <div className="absolute -inset-10 bg-blue-500 opacity-0 group-hover:opacity-[0.03] blur-3xl rounded-full transition-opacity duration-700" />

                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-10 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-500">
                  <resource.icon className="w-7 h-7 text-[#52525B] group-hover:text-blue-400 transition-colors" />
                </div>
                <h4 className="text-white font-bold text-[22px] mb-6 group-hover:text-blue-400 transition-colors">{resource.title}</h4>
                <p className="text-[#71717A] text-[16px] leading-relaxed font-light mb-10 group-hover:text-[#A1A1AA] transition-colors">{resource.desc}</p>
                <button className="flex items-center gap-3 text-white font-bold text-[14px] opacity-40 group-hover:opacity-100 transition-all group-hover:gap-4">
                  Read blueprint <ArrowRight className="w-4 h-4 text-blue-400" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. TESTIMONIAL (Light contrast break) */}
      <section className="py-40 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <Quote className="w-20 h-20 text-[#F5B800]/20 mb-12" />
              <blockquote className="text-[28px] md:text-[38px] font-bold text-black leading-tight tracking-tight mb-12">
                "OYEN GRID has fundamentally transformed how we deliver large-scale programs. The **structural control** we now have is unparalleled in the market."
              </blockquote>
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden ring-4 ring-[#F5B800]/10">
                  <Image 
                    src="/oyen_grid_training_cohort_1778082101_png_1778091730456.png" 
                    alt="Customer Portrait" 
                    width={64} 
                    height={64} 
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-black font-black text-xl">Dr. Sarah Chen</p>
                  <p className="text-[#71717A] font-bold text-[14px] uppercase tracking-widest">Director of Global Learning, GFS</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 grid grid-cols-2 gap-10"
            >
              {[
                { val: "400%", label: "Throughput Growth" },
                { val: "92%", label: "Operational Savings" },
                { val: "0", label: "Structural Failures" },
                { val: "100%", label: "Data Integrity" }
              ].map((m) => (
                <div key={m.label} className="p-10 rounded-[32px] bg-gray-50 border border-gray-100 flex flex-col justify-center items-center text-center group hover:bg-black hover:border-black transition-all duration-500 shadow-xl">
                  <p className="text-[42px] font-black text-black group-hover:text-[#F5B800] transition-colors mb-2 tracking-tighter">{m.val}</p>
                  <p className="text-[#71717A] text-[12px] font-bold uppercase tracking-widest group-hover:text-white/40 transition-colors">{m.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
