"use client";

import { TARGET_USERS } from "@/lib/constants";
import { Building2, Zap, Briefcase, Globe, ArrowRight, Target } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const iconMap = {
  Building2,
  Zap,
  Briefcase,
  Globe,
};

export function TargetUsersSection() {
  return (
    <section id="for" className="py-32 bg-[#0B0B0C] border-t border-white/[0.06] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#F5B942] opacity-[0.03] blur-[140px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-10">
        {/* Header */}
        <div className="text-left mb-24 max-w-3xl">
          <div className="inline-flex items-center gap-3 text-[#F5B942] text-[13px] font-bold tracking-[0.3em] uppercase mb-8">
            <Target className="w-4 h-4" />
            Ecosystem Scale
          </div>
          <h2 className="text-[42px] md:text-[56px] font-bold text-white mb-8 tracking-tight leading-[1.1]">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B942] to-white">scale and structure.</span>
          </h2>
          <p className="text-[19px] md:text-[21px] text-[#A1A1AA] font-light leading-relaxed">
            Whether you&apos;re running intensive bootcamps, corporate L&D, or large-scale social programs, OYEN GRID provides the absolute infrastructure to operate with total clarity.
          </p>
        </div>

        {/* User Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TARGET_USERS.map((user, idx) => {
            const Icon = iconMap[user.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="h-full"
              >
                <Link
                  href={user.href || "#"}
                  className="group relative p-10 rounded-[32px] bg-white/[0.02] border border-white/[0.08] hover:border-[#F5B942]/40 transition-all duration-500 flex flex-col h-full overflow-hidden hover:bg-white/[0.04] hover:shadow-[0_30px_70px_rgba(0,0,0,0.7)]"
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F5B942]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-[#F5B942]/10 group-hover:border-[#F5B942]/30 transition-all duration-500 shadow-lg">
                      <Icon className="w-7 h-7 text-[#71717A] group-hover:text-[#F5B942] transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="text-[22px] font-bold text-white mb-5 group-hover:text-[#F5B942] transition-colors duration-500">
                      {user.title}
                    </h3>
                    
                    <p className="text-[#A1A1AA] text-[15px] leading-relaxed mb-10 flex-grow font-light group-hover:text-white/80 transition-colors">
                      {user.description}
                    </p>

                    <div className="flex items-center gap-2 text-[#F5B942] text-[13px] font-bold uppercase tracking-widest group-hover:gap-3 transition-all duration-300">
                      See implementation
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
