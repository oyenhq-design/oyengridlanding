"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Zap, Briefcase, Heart } from "lucide-react";
import Link from "next/link";

const segments = [
  {
    title: "Training Organizations",
    desc: "Scale institutional knowledge delivery with absolute operational control and multi-cohort management.",
    icon: GraduationCap,
    link: "/solutions/training",
    image: "/env-training.png",
    color: "rgba(200, 155, 45, 0.2)"
  },
  {
    title: "Bootcamps",
    desc: "Accelerate high-intensity learning cycles with automated tracking and real-time performance telemetry.",
    icon: Zap,
    link: "/solutions/bootcamps",
    image: "/hero-dashboard.png",
    color: "rgba(59, 130, 246, 0.2)"
  },
  {
    title: "Corporates",
    desc: "Deploy internal upskilling infrastructure that integrates seamlessly with existing enterprise ecosystems.",
    icon: Briefcase,
    link: "/solutions/corporate",
    image: "/security-soc.png",
    color: "rgba(16, 185, 129, 0.2)"
  },
  {
    title: "NGOs / Programs",
    desc: "Maximize social impact through structured program coordination and global data visibility.",
    icon: Heart,
    link: "/solutions/education",
    image: "/monitor-intelligence.png",
    color: "rgba(236, 72, 153, 0.2)"
  }
];

export function WhoItIsFor() {
  return (
    <section className="relative py-48 overflow-hidden">
      
      {/* ENVIRONMENTAL BACKGROUND: Distributed Ops Room */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/env-infrastructure.png" 
          alt="Distributed Infrastructure" 
          fill
          className="object-cover opacity-[0.1] grayscale blur-[60px] scale-110"
        />
        <div className="absolute inset-0 bg-navy-deep/95 backdrop-blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-end">
          
          {/* PRIMARY VISUAL ANCHOR (Right) - Multi-Sector Infrastructure */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 order-2"
          >
            <div className="relative group">
               <div className="absolute -inset-10 bg-accent-gold/5 blur-[120px] opacity-30" />
               <div className="relative rounded-[60px] overflow-hidden border border-white/10 shadow-[0_80px_160px_rgba(0,0,0,0.9)] bg-navy-mid/60 cinematic-bleed aspect-[16/10]">
                 <Image 
                   src="/env-training.png" 
                   alt="Institutional Scale Architecture" 
                   fill
                   className="object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-[1.5s] group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/80 via-transparent to-transparent" />
                 
                 {/* Floating Sector Node: Training Organizations */}
                 <div className="absolute top-10 right-10 p-10 glass-card border-white/10 bg-navy-deep/90 min-w-[320px]">
                    <div className="flex items-center gap-4 mb-6">
                       <GraduationCap className="w-6 h-6 text-accent-gold" />
                       <span className="text-[11px] font-black text-white/30 uppercase tracking-[0.4em]">Sector_Alpha // Primary</span>
                    </div>
                    <div className="text-3xl font-bold text-white mb-4 tracking-tighter">Training Organizations</div>
                    <p className="text-[14px] text-white/40 font-light leading-relaxed mb-8">Scale institutional knowledge delivery with absolute operational control.</p>
                    <button className="text-[11px] font-black text-accent-gold uppercase tracking-[0.3em] flex items-center gap-3 group/link">
                      Initialization Protocol <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                    </button>
                 </div>

                 {/* Secondary Node Overlay: Performance Monitoring */}
                 <div className="absolute bottom-10 left-10 p-8 glass-card border-white/5 bg-navy-deep/60">
                    <div className="flex items-center gap-5">
                       <div className="w-3 h-3 rounded-full bg-accent-gold/40 animate-ping" />
                       <span className="text-[10px] text-white/20 font-black uppercase tracking-widest">Structural_Live_Sync</span>
                    </div>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* ASYMMETRIC CONTENT (Left) - Sector Orchestration */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 order-1 pb-10"
          >
            <div className="flex items-center gap-4 mb-10">
               <div className="h-[1px] w-12 bg-accent-gold/40" />
               <span className="text-[11px] font-black text-accent-gold uppercase tracking-[0.4em]">Target Sectors</span>
            </div>

            <h2 className="text-[54px] md:text-[84px] font-bold text-white mb-10 leading-[0.85] tracking-tighter uppercase">
              Architected for <br />
              <span className="text-gold-gradient italic font-medium lowercase">operational diversity.</span>
            </h2>
            
            <p className="text-[20px] text-white/40 mb-16 max-w-[480px] leading-relaxed font-light tracking-wide">
              OYEN GRID provides the underlying infrastructure for complex programs across industries, ensuring structural integrity at any scale.
            </p>

            {/* Stacked Vertical Nodes: Secondary Sectors */}
            <div className="space-y-4">
              {[
                { title: "Bootcamps", icon: Zap, color: "gold" },
                { title: "Corporates", icon: Briefcase, color: "blue" },
                { title: "NGOs / Programs", icon: Heart, color: "emerald" }
              ].map((sector, i) => (
                <div key={i} className="group flex items-center justify-between p-8 glass-card bg-white/[0.01] border-white/[0.03] hover:border-accent-gold/20 transition-all duration-500 cursor-default">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover:bg-accent-gold/10 transition-all duration-500">
                      <sector.icon className="w-5 h-5 text-white/20 group-hover:text-accent-gold transition-colors" />
                    </div>
                    <span className="text-[18px] font-bold text-white tracking-tight group-hover:text-white transition-colors">{sector.title}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/5 group-hover:text-accent-gold group-hover:translate-x-2 transition-all" />
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      <div className="atmos-fade-bottom h-64 opacity-60" />
    </section>
  );
}
