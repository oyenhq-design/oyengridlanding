"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import Link from "next/link";

const CASE_STUDIES = [
  {
    company: "TechElevate",
    result: "2x Cohort Growth",
    quote: "OYEN GRID allowed us to double our cohort sizes without adding any administrative headcount. The operational clarity is unmatched.",
    author: "Sarah Jenkins",
    role: "Director of Programmes",
    image: "/img/case-study-1.png",
    accent: "from-[#D4AF37]/20 to-transparent"
  },
  {
    company: "Global Training Inc",
    result: "40% Efficiency Gain",
    quote: "We replaced five fragmented tools with one unified system. Our delivery speed increased by 40% in the first quarter alone.",
    author: "David Chen",
    role: "COO",
    image: "/img/case-study-2.png",
    accent: "from-[#22c55e]/10 to-transparent"
  },
  {
    company: "EduScale Systems",
    result: "98% Completion Rate",
    quote: "The real-time visibility into participant progress helped us achieve a near-perfect completion rate for our leadership programmes.",
    author: "Elena Rodriguez",
    role: "Head of Student Success",
    image: "/img/case-study-3.png",
    accent: "from-[#3b82f6]/10 to-transparent"
  },
  {
    company: "Nexus Academy",
    result: "Zero Manual Errors",
    quote: "Automating our certification and milestone tracking eliminated human error completely. It's the infrastructure we've been waiting for.",
    author: "Marcus Thorne",
    role: "Founder & CEO",
    image: "/img/case-study-1.png", // Reusing for variety in demo if needed
    accent: "from-[#D4AF37]/15 to-transparent"
  }
];

export function CustomerStoriesSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#0B0B0C] to-[#0F0F12] relative overflow-hidden border-t border-[#27272A]/30">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-[#D4AF37] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
              <span className="text-[#D4AF37] uppercase tracking-widest text-[12px] font-semibold">Case Studies</span>
            </div>
            <h2 className="text-[36px] md:text-[52px] font-bold text-white tracking-tight leading-[1.1]">
              Measurable impact <br className="hidden md:block" /> for high-performing teams.
            </h2>
          </div>
          <div className="flex items-center gap-4 text-[#A1A1AA] text-sm font-medium">
             <span>Scroll to explore</span>
             <ArrowRight className="w-4 h-4 animate-bounce-x" />
          </div>
        </div>

        {/* Horizontal Scrolling Row */}
        <div className="flex gap-6 overflow-x-auto pb-12 scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing">
          {CASE_STUDIES.map((study, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="flex-shrink-0 w-[350px] md:w-[450px] snap-center group relative bg-[#121214] border border-[#27272A] rounded-2xl p-8 md:p-10 transition-all duration-300 ease-out hover:scale-[1.02] hover:border-[#D4AF37]/40 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] overflow-hidden"
            >
              {/* Subtle Gradient Accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${study.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 h-full flex flex-col">
                {/* Company & Quote Icon */}
                <div className="flex justify-between items-start mb-10">
                  <div className="text-white font-bold text-lg tracking-wider uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                    {study.company}
                  </div>
                  <Quote className="w-8 h-8 text-[#D4AF37] opacity-20 group-hover:opacity-40 transition-opacity" />
                </div>

                {/* Measurable Result */}
                <div className="mb-6">
                  <div className="text-[32px] md:text-[40px] font-bold text-[#D4AF37] leading-none mb-2 group-hover:scale-105 transition-transform origin-left duration-500">
                    {study.result}
                  </div>
                  <div className="h-[1px] w-12 bg-[#D4AF37]/30 group-hover:w-full transition-all duration-700" />
                </div>

                {/* Short Quote */}
                <p className="text-[16px] md:text-[18px] text-[#A1A1AA] leading-relaxed mb-12 font-light group-hover:text-white/90 transition-colors">
                  "{study.quote}"
                </p>

                {/* Person Info */}
                <div className="mt-auto flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#D4AF37]/30 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                    <Image 
                      src={study.image} 
                      alt={study.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold text-white">{study.author}</div>
                    <div className="text-[13px] text-[#A1A1AA]">{study.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          className="mt-16 flex justify-center"
        >
          <Link 
            href="/case-studies" 
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-[#27272A] hover:border-[#D4AF37]/50 text-white/80 hover:text-white text-sm font-medium transition-all duration-300 hover:bg-[#121214] group"
          >
            View all case studies <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
