"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PRODUCTS = [
  { id: 1, label: "AI Companion", image: "/zoom_ai_companion_ui_1778076852_png_1778079273399.png" },
  { id: 2, label: "Meetings", image: "/zoom_like_meetings_ui_1778076824_png_1778079250752.png" },
  { id: 3, label: "Team Chat", image: "/zoom_ai_companion_ui_1778076852_png_1778079273399.png" },
  { id: 4, label: "Phone", image: "/zoom_like_meetings_ui_1778076824_png_1778079250752.png" },
  { id: 5, label: "Scheduler", image: "/zoom_ai_companion_ui_1778076852_png_1778079273399.png" },
  { id: 6, label: "Contact Center", image: "/zoom_like_meetings_ui_1778076824_png_1778079250752.png" },
];

export function ProductCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-[100px] bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-12 no-scrollbar snap-x snap-mandatory"
        >
          {PRODUCTS.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -10 }}
              className="min-w-[280px] md:min-w-[340px] aspect-[4/5] relative rounded-[32px] overflow-hidden bg-gray-100 shadow-xl snap-center group cursor-pointer"
            >
              <Image 
                src={product.image} 
                alt={product.label} 
                fill 
                className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white font-bold text-2xl">{product.label}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`w-2.5 h-2.5 rounded-full ${i === 1 ? "bg-[#0B5CFF]" : "bg-gray-200"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
