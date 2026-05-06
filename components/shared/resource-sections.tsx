"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Globe, Shield, Zap } from "lucide-react";

export function ResourceSections() {
  return (
    <div className="bg-[#0B0B0C]">
      
      {/* 10. FEATURE GRID (“Everything you need to scale operations”) */}
      <section className="py-32 bg-[#0D0D10]/30 overflow-hidden relative">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-[32px] md:text-[42px] font-bold text-white tracking-tight">
              Everything you need to scale operations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "Scalability", desc: "Build once, deploy everywhere. OYEN GRID is designed to support rapid cohort expansion." },
              { icon: BarChart3, title: "Data & Analytics", desc: "Granular reporting and real-time dashboards across every participant and program." },
              { icon: Shield, title: "Infrastructure", desc: "Enterprise-grade security, uptime, and structural integrity for high-stakes programs." },
              { icon: Zap, title: "Integrations", desc: "Connect with your existing CRM, LMS, and communication tools via our robust API." }
            ].map((item, i) => (
              <div key={item.title} className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#F5C044]/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-[#71717A] group-hover:text-[#F5C044]" />
                </div>
                <h4 className="text-white font-bold text-lg mb-4">{item.title}</h4>
                <p className="text-[#71717A] text-[14px] leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CASE STUDIES / PROOF */}
      <section className="py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-[32px] md:text-[42px] font-bold text-white tracking-tight">
              Built for operators. Proven in action.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { image: "/professional_workspace_ops_team_1778024747201.png", title: "Enterprise Scaling", desc: "How a global tech firm scaled their internal training by 400%." },
              { image: "/images/hero-dashboard.png", title: "NGO Impact", desc: "Orchestrating social impact programmes across 12 countries." },
              { image: "/professional_workspace_ops_team_1778024747201.png", title: "Corporate Onboarding", desc: "Reducing new hire ramp-up time by 30% through structure." }
            ].map((study, i) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-white/10">
                  <Image 
                    src={study.image} 
                    alt={study.title} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] to-transparent opacity-60" />
                </div>
                <h4 className="text-white font-bold text-xl mb-3 group-hover:text-[#F5C044] transition-colors">{study.title}</h4>
                <p className="text-[#71717A] text-[15px] leading-relaxed font-light">{study.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. KNOWLEDGE / RESOURCES */}
      <section className="py-32 bg-[#0D0D10]/30 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-[32px] md:text-[42px] font-bold text-white tracking-tight">
              Knowledge for high-fidelity operational success.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 mb-6 flex items-center justify-center overflow-hidden relative">
                   {/* Abstract gold visual */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,192,68,0.1),transparent_70%)]" />
                  <div className="w-20 h-20 rounded-full border border-[#F5C044]/30 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border border-[#F5C044]/50 animate-pulse" />
                  </div>
                </div>
                <p className="text-[#F5C044] text-xs font-bold uppercase tracking-widest mb-3">Resource · Guide</p>
                <h4 className="text-white font-bold text-lg mb-4 group-hover:underline">The structural framework of enterprise learning infrastructure</h4>
                <div className="flex items-center gap-2 text-[#71717A] text-sm group-hover:text-white transition-colors">
                  Read more <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
