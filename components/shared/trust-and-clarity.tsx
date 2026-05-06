"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, LayoutGrid, Zap } from "lucide-react";

const CARDS = [
  { 
    title: "Structural Control", 
    desc: "Maintain absolute integrity across every cohort.",
    icon: Shield,
    image: "/team_discussing_modern_office_1778082987_png_1778092709737.png"
  },
  { 
    title: "Operational Clarity", 
    desc: "Unify fragmented data into one source of truth.",
    icon: LayoutGrid,
    image: "/trainer_presenting_saas_1778083021_png_1778092746837.png"
  },
  { 
    title: "Instant Scalability", 
    desc: "Deploy complex programmes in minutes, not weeks.",
    icon: Zap,
    image: "/people_using_laptops_office_1778083056_png_1778092776019.png"
  }
];

export function TrustAndClarity() {
  return (
    <section className="py-24 bg-[#0B0B0D] relative border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              {/* Human Image above card */}
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-white/5 shadow-2xl">
                <Image 
                  src={card.image} 
                  alt={card.title} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100 scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent opacity-60" />
              </div>

              <div className="relative p-8 rounded-[24px] bg-white/[0.02] border border-white/5 hover:border-[#F5B942]/30 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5B942]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/5 group-hover:bg-[#F5B942]/10 transition-all">
                  <card.icon className="w-5 h-5 text-[#71717A] group-hover:text-[#F5B942]" />
                </div>
                <h4 className="text-white font-bold text-xl mb-3 relative z-10">{card.title}</h4>
                <p className="text-[#71717A] text-[15px] leading-relaxed relative z-10 group-hover:text-[#A1A1AA] transition-colors">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
