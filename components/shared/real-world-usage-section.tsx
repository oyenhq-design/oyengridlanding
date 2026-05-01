"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const USAGE_CASES = [
  {
    title: "Run multi-cohort bootcamps seamlessly",
    description: "Coordinate facilitators, track individual progress, and manage complex schedules across global teams.",
    image: "/img/usage3.png",
  },
  {
    title: "Executive dashboarding & insights",
    description: "Give stakeholders real-time visibility into programme health, engagement metrics, and ROI.",
    image: "/img/usage2.png",
  },
  {
    title: "Cross-functional team alignment",
    description: "Bring fragmented departments into a single structured workflow for flawless execution.",
    image: "/img/usage1.png",
  }
];

export function RealWorldUsageSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#0B0B0C] via-[#101012] to-[#0B0B0C] border-y border-[#27272A]/40 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37] opacity-[0.015] blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-6 justify-center">
            <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
            <span className="text-[#D4AF37] uppercase tracking-widest text-[12px] font-semibold">Real-world Usage</span>
            <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
          </div>
          <h2 className="text-[36px] md:text-[48px] font-bold text-white tracking-tight mb-6">
            Built for operators. Proven in action.
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto font-light leading-relaxed">
            See how high-performing teams deploy OYEN GRID to eliminate operational friction and deliver structured outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {USAGE_CASES.map((useCase, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              key={idx}
              className="group flex flex-col bg-[#141417] border border-[#27272A] rounded-2xl overflow-hidden hover:border-[#D4AF37]/40 hover:shadow-[0_15px_40px_rgba(212,175,55,0.08)] transition-all duration-500 cursor-pointer"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative w-full aspect-[4/3] overflow-hidden border-b border-[#27272A] group-hover:border-[#D4AF37]/30 transition-colors duration-500">
                <Image 
                  src={useCase.image}
                  alt={useCase.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[20%] group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141417] via-transparent to-transparent opacity-80" />
              </div>
              
              {/* Text Content */}
              <div className="p-8 flex flex-col flex-1 relative">
                <h3 className="text-[22px] font-semibold text-white mb-4 leading-snug group-hover:text-[#D4AF37] transition-colors duration-300">
                  {useCase.title}
                </h3>
                <p className="text-[15px] text-[#A1A1AA] leading-relaxed font-light mt-auto">
                  {useCase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
