"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const INSIGHTS = [
  {
    title: "Scaling Training Programs",
    description: "Strategies for maintaining quality and operational control as you expand your delivery cohorts globally.",
    image: "/img/insight-1.png",
    link: "/resources/scaling-training"
  },
  {
    title: "Operational Analytics",
    description: "How to use high-fidelity data to identify programme bottlenecks and drive measurable ROI.",
    image: "/img/insight-2.png",
    link: "/resources/operational-analytics"
  },
  {
    title: "Managing Distributed Teams",
    description: "Building a unified system that keeps fragmented departments aligned in a structured workflow.",
    image: "/img/insight-3.png",
    link: "/resources/distributed-teams"
  }
];

export function InsightsSection() {
  return (
    <section className="py-32 bg-[#0B0B0C] relative overflow-hidden border-t border-[#27272A]/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
              <span className="text-[#D4AF37] uppercase tracking-widest text-[12px] font-semibold">Insights & Resources</span>
            </div>
            <h2 className="text-[36px] md:text-[52px] font-bold text-white tracking-tight leading-[1.1]">
              Knowledge for high-fidelity <br className="hidden md:block" /> operational success.
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          >
            <Link 
              href="/resources" 
              className="group inline-flex items-center gap-2 text-white/80 hover:text-[#D4AF37] transition-colors"
            >
              <span>View all resources</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHTS.map((insight, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
              className="group flex flex-col bg-[#121214] border border-[#27272A] rounded-2xl overflow-hidden hover:scale-[1.02] hover:border-[#D4AF37]/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-300 ease-out"
            >
              <div className="relative w-full aspect-video overflow-hidden">
                <Image 
                  src={insight.image} 
                  alt={insight.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[10%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-60" />
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-[22px] font-bold text-white mb-4 leading-tight group-hover:text-[#D4AF37] transition-colors">
                  {insight.title}
                </h3>
                <p className="text-[#A1A1AA] text-[15px] leading-relaxed mb-8 font-light line-clamp-2">
                  {insight.description}
                </p>
                
                <Link 
                  href={insight.link} 
                  className="mt-auto inline-flex items-center gap-2 text-sm text-[#D4AF37] font-semibold tracking-wide uppercase"
                >
                  Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
