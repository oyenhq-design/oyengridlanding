"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Quote, MessageSquare } from "lucide-react";
import Link from "next/link";

const CASE_STUDIES = [
  {
    company: "TechElevate",
    result: "2x Cohort Growth",
    quote: "OYEN GRID allowed us to double our cohort sizes without adding any administrative headcount. The operational clarity is unmatched.",
    author: "Sarah Jenkins",
    role: "Director of Programmes",
    image: "/img/case-study-1.png",
    accent: "from-[#F5B942]/10 to-transparent"
  },
  {
    company: "Global Training Inc",
    result: "40% Efficiency Gain",
    quote: "We replaced five fragmented tools with one unified system. Our delivery speed increased by 40% in the first quarter alone.",
    author: "David Chen",
    role: "COO",
    image: "/img/case-study-2.png",
    accent: "from-[#3B82F6]/10 to-transparent"
  },
  {
    company: "EduScale Systems",
    result: "98% Completion Rate",
    quote: "The real-time visibility into participant progress helped us achieve a near-perfect completion rate for our leadership programmes.",
    author: "Elena Rodriguez",
    role: "Head of Student Success",
    image: "/img/case-study-3.png",
    accent: "from-[#F5B942]/10 to-transparent"
  },
  {
    company: "Nexus Academy",
    result: "Zero Manual Errors",
    quote: "Automating our certification and milestone tracking eliminated human error completely. It's the infrastructure we've been waiting for.",
    author: "Marcus Thorne",
    role: "Founder & CEO",
    image: "/img/case-study-1.png",
    accent: "from-[#3B82F6]/10 to-transparent"
  }
];

export function CustomerStoriesSection() {
  return (
    <section className="py-32 bg-[#0B0B0C] relative overflow-hidden border-t border-white/[0.06]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#F5B942] opacity-[0.03] blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-10">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 text-[#F5B942] text-[13px] font-bold tracking-[0.3em] uppercase mb-8">
              <MessageSquare className="w-4 h-4" />
              Customer Stories
            </div>
            <h2 className="text-[42px] md:text-[56px] font-bold text-white tracking-tight leading-[1.1]">
              Measurable impact <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B942] to-white">for high-performing teams.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 text-[#71717A] text-[13px] font-bold uppercase tracking-widest">
             <span>Scroll to explore</span>
             <ArrowRight className="w-4.5 h-4.5 animate-bounce-x" />
          </div>
        </div>

        {/* Horizontal Scrolling Row */}
        <div className="flex gap-8 overflow-x-auto pb-16 scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing px-2">
          {CASE_STUDIES.map((study, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              className="flex-shrink-0 w-[380px] md:w-[480px] snap-center group relative bg-white/[0.02] border border-white/[0.08] rounded-[40px] p-10 md:p-12 transition-all duration-500 ease-out hover:scale-[1.02] hover:border-[#F5B942]/40 hover:bg-white/[0.04] hover:shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              {/* Subtle Gradient Accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${study.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 h-full flex flex-col">
                {/* Company & Quote Icon */}
                <div className="flex justify-between items-start mb-12">
                  <div className="text-white font-bold text-lg tracking-[0.2em] uppercase opacity-60 group-hover:opacity-100 group-hover:text-[#F5B942] transition-all">
                    {study.company}
                  </div>
                  <Quote className="w-10 h-10 text-[#F5B942] opacity-20 group-hover:opacity-40 transition-opacity" />
                </div>

                {/* Measurable Result */}
                <div className="mb-10">
                  <div className="text-[36px] md:text-[48px] font-bold text-[#F5B942] leading-none mb-4 group-hover:scale-105 transition-transform origin-left duration-500 tracking-tighter">
                    {study.result}
                  </div>
                  <div className="h-[2px] w-16 bg-[#F5B942]/30 group-hover:w-full transition-all duration-1000" />
                </div>

                {/* Short Quote */}
                <p className="text-[18px] md:text-[20px] text-[#A1A1AA] leading-relaxed mb-16 font-light group-hover:text-white transition-colors">
                  “{study.quote}”
                </p>

                {/* Person Info */}
                <div className="mt-auto flex items-center gap-6">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#F5B942]/40 transition-all shadow-xl">
                    <Image 
                      src={study.image} 
                      alt={study.author}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div>
                    <div className="text-[17px] font-bold text-white mb-1">{study.author}</div>
                    <div className="text-[14px] text-[#71717A] font-bold uppercase tracking-wider">{study.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Link 
            href="/solutions" 
            className="inline-flex items-center justify-center px-10 py-4.5 rounded-2xl border border-white/10 bg-white/5 text-white font-bold text-[15px] transition-all duration-300 hover:bg-white/10 hover:border-white/20 group"
          >
            Explore all solutions <ArrowRight className="ml-2 w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
