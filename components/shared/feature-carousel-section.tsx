"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LayoutDashboard, Video, Bot, NotebookPen, BarChart3 } from "lucide-react";

const CAROUSEL_ITEMS = [
  { title: "Programme Management", description: "End-to-end cohort oversight and delivery mapping.", icon: LayoutDashboard },
  { title: "Live Session Delivery", description: "Integrated session handling with attendance tracking.", icon: Video },
  { title: "AI Assistant", description: "Automated grading, nudges, and participant support.", icon: Bot },
  { title: "Notes System", description: "Centralised knowledge capture for every session.", icon: NotebookPen },
  { title: "Analytics", description: "Deep operational insights into cohort performance.", icon: BarChart3 },
];

export function FeatureCarouselSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Very subtle parallax/scroll effect
  const x = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section ref={containerRef} className="py-24 bg-[#0B0B0C] border-t border-[rgba(255,255,255,0.03)] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 mb-12">
         <h2 className="text-[24px] font-semibold text-white tracking-tight">Everything you need to deliver</h2>
      </div>

      {/* Horizontal Scrollable Row */}
      <div className="w-full relative px-6 lg:px-8 max-w-[1200px] mx-auto overflow-x-auto pb-8 hide-scrollbar">
        <motion.div style={{ x }} className="flex gap-6 w-max">
          {CAROUSEL_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="w-[280px] sm:w-[320px] bg-[#121214] border border-[rgba(255,255,255,0.06)] rounded-[16px] p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[rgba(255,255,255,0.12)] shrink-0 group cursor-pointer"
              >
                <div className="w-10 h-10 bg-[#1A1A1D] rounded-[8px] flex items-center justify-center mb-5 group-hover:bg-[#C8A96A]/10 transition-colors">
                  <Icon className="w-5 h-5 text-[#C8A96A]" strokeWidth={1.5} />
                </div>
                <h3 className="text-[18px] font-semibold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#9CA3AF] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
