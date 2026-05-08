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
    <section className="relative py-32 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/env-infrastructure.png" 
          alt="Infrastructure Background" 
          fill
          className="object-cover opacity-[0.05] grayscale blur-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-[800px] mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-accent-gold/40" />
            <span className="text-[11px] font-black text-accent-gold uppercase tracking-[0.4em]">Target Sectors</span>
          </div>
          <h2 className="text-[48px] md:text-[84px] font-bold text-white mb-8 leading-[0.9] tracking-tighter uppercase">
            Architected for <br />
            <span className="text-gold-gradient italic font-medium lowercase">operational diversity.</span>
          </h2>
          <p className="text-[19px] text-white/40 leading-relaxed font-light">
            OYEN GRID provides the underlying infrastructure for complex programs across industries, ensuring structural integrity at any scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {segments.map((segment, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`group relative overflow-hidden rounded-[40px] border border-white/5 bg-navy-mid/40 backdrop-blur-xl transition-all duration-500 hover:border-accent-gold/20 p-10 flex flex-col justify-between min-h-[480px] ${idx % 2 === 1 ? 'md:translate-y-12' : ''}`}
            >
              {/* Card Background Environmental Image */}
              <div className="absolute inset-0 z-0 opacity-[0.03] grayscale group-hover:opacity-[0.08] transition-opacity duration-1000">
                <Image 
                  src={segment.image} 
                  alt={segment.title} 
                  fill
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/80 via-transparent to-transparent z-0" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-[24px] bg-white/[0.02] border border-white/5 flex items-center justify-center mb-10 group-hover:bg-accent-gold/10 group-hover:border-accent-gold/20 transition-all duration-500 shadow-2xl">
                  <segment.icon className="w-7 h-7 text-white/20 group-hover:text-accent-gold transition-colors duration-500" />
                </div>
                
                <h3 className="text-[32px] font-bold text-white mb-6 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                  {segment.title}
                </h3>
                <p className="text-[17px] text-white/30 leading-relaxed font-light max-w-[320px] group-hover:text-white/50 transition-colors duration-500">
                  {segment.desc}
                </p>
              </div>

              <div className="relative z-10 mt-12">
                <Link 
                  href={segment.link}
                  className="inline-flex items-center gap-4 text-[13px] font-black text-accent-gold uppercase tracking-[0.2em] group/link"
                >
                  See how it works
                  <div className="w-10 h-10 rounded-full border border-accent-gold/20 flex items-center justify-center group-hover/link:bg-accent-gold group-hover/link:border-accent-gold transition-all duration-500">
                    <ArrowRight className="w-4 h-4 text-accent-gold group-hover/link:text-navy-deep transition-colors duration-500" />
                  </div>
                </Link>
              </div>

              {/* Subtle Corner Glow */}
              <div 
                className="absolute -bottom-20 -right-20 w-40 h-40 blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000 rounded-full"
                style={{ background: segment.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="atmos-fade-bottom h-48" />
    </section>
  );
}
