"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TrendingUp, Globe, BarChart3, Shield, Zap, ArrowRight, ExternalLink, Activity } from "lucide-react";

export function PremiumInsights() {
  return (
    <div className="bg-[#0B0B0C]">
      
      {/* 9. INSIGHTS SECTION */}
      <section className="py-40 border-b border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Text + Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[36px] md:text-[52px] font-black text-white tracking-tight leading-tight mb-8">
              Operational insights <br />
              <span className="text-[#F5B800]">that drive results</span>
            </h2>
            <p className="text-[19px] text-[#A1A1AA] leading-relaxed mb-12 font-light">
              Surfacing the metrics that matter most. From cohort engagement velocity to curriculum mastery, OYEN GRID gives you the data to optimize at scale.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Completion Rate", value: "92.4%", trend: "+4.8%", color: "emerald" },
                { label: "Engagement Velocity", value: "3.8x", trend: "+1.2x", color: "blue" }
              ].map((stat) => (
                <div key={stat.label} className="p-8 rounded-[32px] bg-white/[0.03] border border-white/10 group hover:bg-white/[0.05] transition-all">
                  <p className="text-[#71717A] text-[10px] font-black uppercase tracking-[0.25em] mb-4 group-hover:text-[#F5B800] transition-colors">{stat.label}</p>
                  <p className="text-4xl font-black text-white tracking-tighter mb-4">{stat.value}</p>
                  <div className={`inline-flex items-center gap-1.5 text-xs font-bold ${stat.color === 'emerald' ? 'text-emerald-400' : 'text-blue-400'}`}>
                    <TrendingUp className="w-3 h-3" /> {stat.trend}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Chart UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-[#F5B800] opacity-[0.05] blur-[100px] rounded-full" />
            <div className="relative p-10 bg-[#0D0D10] border border-white/10 rounded-[40px] shadow-3xl overflow-hidden ring-1 ring-[#F5B800]/20 group">
              <div className="flex items-center justify-between mb-12">
                <h4 className="text-white font-black text-xl uppercase tracking-widest">Global Activity</h4>
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-[#F5B800]/10 border border-[#F5B800]/20">
                  <Activity className="w-4 h-4 text-[#F5B800] animate-pulse" />
                  <span className="text-[#F5B800] text-[10px] font-black uppercase tracking-widest">Live Now</span>
                </div>
              </div>
              <div className="flex items-end gap-3 h-48">
                {[45, 65, 85, 55, 95, 75, 88, 98].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-3 group/bar">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                      className={`w-full rounded-t-xl transition-all duration-500 relative ${
                        i === 7 ? "bg-[#F5B800] shadow-[0_0_20px_rgba(245,184,0,0.4)]" : "bg-white/10 group-hover/bar:bg-white/20"
                      }`}
                    />
                    <span className="text-[#3F3F46] text-[10px] font-bold">W{i+1}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10. SCALE FEATURES GRID */}
      <section className="py-40 bg-[#0A0A0A]/50">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-28">
            <h2 className="text-[36px] md:text-[52px] font-black text-white tracking-tight">
              Built to scale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "Global Scalability", desc: "Build once, deploy everywhere. OYEN GRID is designed for rapid multi-region expansion." },
              { icon: BarChart3, title: "Data Intelligence", desc: "Granular reporting and real-time dashboards across every participant and module." },
              { icon: Shield, title: "Infrastructure", desc: "Enterprise-grade security and structural integrity for high-stakes programs." },
              { icon: Zap, title: "Integrations", desc: "Connect with your existing stack via our robust, developer-first API." }
            ].map((item, i) => (
              <div key={item.title} className="p-10 rounded-[32px] bg-white/[0.02] border border-white/10 hover:border-[#F5B800]/30 hover:bg-white/[0.04] transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#F5B800]/10 transition-all duration-500 border border-white/5">
                  <item.icon className="w-6 h-6 text-[#71717A] group-hover:text-[#F5B800]" />
                </div>
                <h4 className="text-white font-black text-[20px] mb-4">{item.title}</h4>
                <p className="text-[#71717A] text-[15px] leading-relaxed font-light group-hover:text-[#A1A1AA] transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CASE STUDIES / REAL USAGE */}
      <section className="py-40">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { image: "/premium_saas_workspace_night_1778072758177_png_1778076123899.png", title: "Enterprise Scaling", desc: "How a global tech firm scaled their internal training by 400%." },
              { image: "/dark_office_background_1778072758177.png", title: "NGO Global Impact", desc: "Orchestrating social impact programmes across 12 countries." },
              { image: "/images/hero-dashboard.png", title: "Operational Excellence", desc: "Maintaining absolute control over complex cohort delivery." }
            ].map((study, i) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden mb-8 border border-white/10 shadow-2xl">
                  <Image src={study.image} alt={study.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-80" />
                </div>
                <h4 className="text-white font-black text-[22px] leading-tight mb-4 group-hover:text-[#F5B800] transition-colors">{study.title}</h4>
                <p className="text-[#71717A] text-[16px] leading-relaxed font-light group-hover:text-[#A1A1AA] transition-colors">{study.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. KNOWLEDGE / RESOURCES */}
      <section className="py-40 bg-[#0D0D10]/50 border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-28">
            <h2 className="text-[36px] md:text-[52px] font-black text-white tracking-tight">
              Operational knowledge
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[16/10] rounded-[32px] bg-[#0A0A0C] border border-white/10 mb-8 flex items-center justify-center overflow-hidden relative ring-1 ring-white/5 shadow-2xl">
                   {/* Abstract gold visuals */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,184,0,0.1),transparent_70%)]" />
                  <div className="w-24 h-24 rounded-full border border-[#F5B800]/10 flex items-center justify-center relative">
                    <div className="w-16 h-16 rounded-full border border-[#F5B800]/20 animate-pulse flex items-center justify-center">
                       <BarChart3 className="w-8 h-8 text-[#F5B800] opacity-50" />
                    </div>
                  </div>
                </div>
                <p className="text-[#F5B800] text-[10px] font-black uppercase tracking-[0.25em] mb-4">Operational Insight · 0{i}</p>
                <h4 className="text-white font-black text-[20px] leading-snug group-hover:text-[#F5B800] transition-colors">The structural framework of enterprise learning infrastructure</h4>
                <div className="mt-8 flex items-center gap-3 text-[#71717A] text-sm group-hover:text-white transition-colors">
                  Read full report <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
