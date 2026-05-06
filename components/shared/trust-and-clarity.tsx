"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, LayoutGrid, Zap } from "lucide-react";

export function TrustAndClarity() {
  return (
    <section className="py-20 bg-[#0B0B0D] relative border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[44px] font-bold text-white tracking-tight">Built for operational clarity</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Structural Control", icon: Shield, img: "https://images.unsplash.com/photo-1522071823991-b997e7b17bbd" },
            { title: "Operational Clarity", icon: LayoutGrid, img: "https://images.unsplash.com/photo-1552664730-d307ca884978" },
            { title: "Instant Scalability", icon: Zap, img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4" }
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-2xl">
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100" 
                />
              </div>

              <div className="p-8 rounded-[24px] bg-white/[0.02] border border-white/5 hover:border-[#F5B942]/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/5 group-hover:bg-[#F5B942]/10 transition-all">
                  <card.icon className="w-5 h-5 text-[#71717A] group-hover:text-[#F5B942]" />
                </div>
                <h4 className="text-white font-bold text-xl mb-3">{card.title}</h4>
                <p className="text-[#71717A] text-[15px] leading-relaxed">Enterprise-grade tools built for internal development at scale.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
