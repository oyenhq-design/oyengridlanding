"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function SocialProof() {
  return (
    <div className="bg-white">
      
      {/* 10. TESTIMONIAL */}
      <section className="py-[120px] bg-white">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-12"
          >
             <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center mb-8">
               <span className="text-[#0B5CFF] text-4xl font-serif">“</span>
             </div>
             <blockquote className="text-[28px] md:text-[36px] font-bold text-[#232333] leading-tight tracking-tight mb-10 italic">
               “Zoom is the gold standard for video communications. It has become essential for our global teams to stay connected and productive.”
             </blockquote>
             <div className="flex flex-col items-center">
               <p className="text-[#232333] font-bold text-xl mb-1">Jane Doe</p>
               <p className="text-[#232333]/60 text-[15px]">Chief Information Officer, Global Corp</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 11. CASE STUDY CAROUSEL */}
      <section className="py-[120px] bg-gray-50/50 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Large main card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-7 relative min-h-[500px] rounded-[32px] overflow-hidden group cursor-pointer shadow-2xl"
            >
              <Image 
                src="/professional_business_team_light_1778076878_png_1778079298102.png" 
                alt="Case Study" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-12 left-12 right-12">
                <p className="text-white/80 font-bold text-sm uppercase tracking-widest mb-4">Customer Success</p>
                <h3 className="text-white font-bold text-[32px] md:text-[40px] leading-tight mb-8">
                  How Nasdaq scales their global <br /> events with Zoom
                </h3>
                <button className="flex items-center gap-2 text-white font-bold hover:gap-3 transition-all">
                  Read full story <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            {/* Smaller preview cards */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {[
                { title: "Dropbox reimagines virtual collaboration", image: "/zoom_ai_companion_ui_1778076852_png_1778079273399.png" },
                { title: "21st Century Fox scales production", image: "/zoom_like_meetings_ui_1778076824_png_1778079250752.png" }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex-1 relative rounded-[32px] overflow-hidden group cursor-pointer shadow-xl"
                >
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <h4 className="text-white font-bold text-2xl leading-tight mb-4">{item.title}</h4>
                    <button className="text-white font-bold text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
