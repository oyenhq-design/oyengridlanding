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
    accent: "from-[#C8A95A]/10 to-transparent"
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
    accent: "from-[#C8A95A]/10 to-transparent"
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
    <section className="py-32 bg-[#F7F7F7] relative overflow-hidden border-y border-gray-200">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-[#C8A95A] opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[1px] bg-[#C8A95A]"></div>
              <span className="text-[#C8A95A] uppercase tracking-widest text-[12px] font-semibold">Case Studies</span>
            </div>
            <h2 className="text-[36px] md:text-[52px] font-bold text-[#0B0B0C] tracking-tight leading-[1.1]">
              Measurable impact <br className="hidden md:block" /> for high-performing teams.
            </h2>
          </div>
          <div className="flex items-center gap-4 text-gray-500 text-sm font-medium">
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
              className="flex-shrink-0 w-[350px] md:w-[450px] snap-center group relative bg-white border border-gray-200 rounded-2xl p-8 md:p-10 transition-all duration-300 ease-out hover:scale-[1.02] hover:border-[#C8A95A]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] overflow-hidden"
            >
              {/* Subtle Gradient Accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${study.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 h-full flex flex-col">
                {/* Company & Quote Icon */}
                <div className="flex justify-between items-start mb-10">
                  <div className="text-gray-900 font-bold text-lg tracking-wider uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                    {study.company}
                  </div>
                  <Quote className="w-8 h-8 text-[#C8A95A] opacity-20 group-hover:opacity-40 transition-opacity" />
                </div>

                {/* Measurable Result */}
                <div className="mb-6">
                  <div className="text-[32px] md:text-[40px] font-bold text-[#C8A95A] leading-none mb-2 group-hover:scale-105 transition-transform origin-left duration-500">
                    {study.result}
                  </div>
                  <div className="h-[1px] w-12 bg-[#C8A95A]/30 group-hover:w-full transition-all duration-700" />
                </div>

                {/* Short Quote */}
                <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed mb-12 font-medium group-hover:text-gray-900 transition-colors">
                  "{study.quote}"
                </p>

                {/* Person Info */}
                <div className="mt-auto flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#C8A95A]/30 shadow-sm">
                    <Image 
                      src={study.image} 
                      alt={study.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-gray-900">{study.author}</div>
                    <div className="text-[13px] text-gray-500">{study.role}</div>
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
            href="/solutions" 
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-gray-200 hover:border-[#C8A95A]/50 text-gray-600 hover:text-gray-900 text-sm font-semibold transition-all duration-300 hover:bg-white group"
          >
            Explore solutions <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
