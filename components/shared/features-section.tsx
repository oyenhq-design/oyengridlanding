"use client";

import { LayoutGrid, Fingerprint, Network, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const FEATURES = [
  {
    title: "Structured Flow",
    description: "Enforce sequential modules, milestone tracking, and required submissions seamlessly.",
    icon: LayoutGrid,
    link: "/features/structured-flow"
  },
  {
    title: "Granular Access",
    description: "Assign precise roles and permissions across admins, facilitators, and participants.",
    icon: Fingerprint,
    link: "/features/access-control"
  },
  {
    title: "Unified Ecosystem",
    description: "Connect isolated tools and integrate them into one central command center.",
    icon: Network,
    link: "/features/ecosystem"
  },
  {
    title: "Bank-Grade Security",
    description: "Ensure your operational data is protected with enterprise-level encryption and compliance.",
    icon: ShieldCheck,
    link: "/features/security"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#111114] to-[#1A1A1D] relative overflow-hidden border-y border-[#27272A]/40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
              <span className="text-[#D4AF37] uppercase tracking-widest text-[12px] font-semibold">Core Features</span>
            </div>
            <h2 className="text-[36px] md:text-[48px] font-bold text-white tracking-tight leading-[1.1]">
              Everything you need to <br className="hidden md:block" /> scale operations.
            </h2>
          </div>
          <p className="text-lg text-[#A1A1AA] max-w-md font-light">
            Our platform provides the necessary infrastructure to manage complex programmes with absolute precision and minimal overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx} 
                className="group relative flex flex-col items-start p-8 bg-[#1E1E22] border border-[#333333] rounded-2xl transition-all duration-300 ease-out hover:scale-[1.02] hover:border-[#D4AF37]/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] overflow-hidden"
              >
                {/* Subtle top glow on hover */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(212,175,55,0.8)]" />

                <div className="w-12 h-12 bg-[#121214] border border-[#333333] group-hover:border-[#D4AF37]/50 rounded-xl flex items-center justify-center mb-8 transition-colors duration-500">
                  <Icon className="w-5 h-5 text-[#D4AF37]" strokeWidth={2} />
                </div>
                
                <h3 className="text-[20px] font-semibold text-white mb-3 tracking-tight">
                  {feature.title}
                </h3>
                
                <p className="text-[15px] text-[#A1A1AA] leading-relaxed mb-10 flex-1 font-light">
                  {feature.description}
                </p>

                <Link 
                  href={feature.link}
                  className="mt-auto inline-flex items-center gap-2 text-sm text-[#D4AF37] font-medium group-hover:text-[#FFF0B3] transition-colors"
                >
                  Learn more <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          className="mt-16 flex justify-center"
        >
          <Link 
            href="/features" 
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-[#27272A] hover:border-[#D4AF37]/50 text-white/80 hover:text-white text-sm font-medium transition-all duration-300 hover:bg-[#121214] group"
          >
            View all features <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
