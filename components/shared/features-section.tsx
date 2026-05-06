"use client";

import { LayoutGrid, Fingerprint, Network, ShieldCheck, ArrowRight, Grid } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const FEATURES = [
  {
    title: "Structured Flow",
    description: "Enforce sequential modules, milestone tracking, and required submissions seamlessly.",
    icon: LayoutGrid,
    link: "/features#automation"
  },
  {
    title: "Granular Access",
    description: "Assign precise roles and permissions across admins, facilitators, and participants.",
    icon: Fingerprint,
    link: "/features#program-management"
  },
  {
    title: "Unified Ecosystem",
    description: "Connect isolated tools and integrate them into one central command center.",
    icon: Network,
    link: "/features#collaboration"
  },
  {
    title: "Bank-Grade Security",
    description: "Ensure your operational data is protected with enterprise-level encryption and compliance.",
    icon: ShieldCheck,
    link: "/features#security"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-32 bg-[#0B0B0C] relative overflow-hidden border-t border-white/[0.06]">
      <div className="relative z-10 max-w-[1400px] mx-auto px-10">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 text-[#F5B942] text-[13px] font-bold tracking-[0.3em] uppercase mb-8">
              <Grid className="w-4 h-4" />
              Core Capabilities
            </div>
            <h2 className="text-[42px] md:text-[56px] font-bold text-white tracking-tight leading-[1.1]">
              Everything you need to <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B942] to-white">scale operations.</span>
            </h2>
          </div>
          <p className="text-[19px] text-[#A1A1AA] max-w-md font-light leading-relaxed">
            Our platform provides the high-fidelity infrastructure necessary to manage complex programmes with absolute precision and minimal overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                key={idx} 
                className="group relative flex flex-col items-start p-10 bg-white/[0.02] border border-white/[0.08] rounded-[32px] transition-all duration-500 ease-out hover:border-[#F5B942]/40 hover:shadow-[0_30px_70px_rgba(0,0,0,0.7)] hover:-translate-y-2 overflow-hidden"
              >
                {/* Border Glow Accent */}
                <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[32px] shadow-[0_0_30px_rgba(245,185,66,0.15)]" />

                <div className="w-14 h-14 bg-white/5 border border-white/10 group-hover:border-[#F5B942]/50 group-hover:bg-[#F5B942]/5 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 shadow-lg">
                  <Icon className="w-7 h-7 text-[#71717A] group-hover:text-[#F5B942] transition-colors" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-[22px] font-bold text-white mb-5 tracking-tight group-hover:text-[#F5B942] transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-[16px] text-[#A1A1AA] leading-relaxed mb-12 flex-1 font-light group-hover:text-white/80 transition-colors">
                  {feature.description}
                </p>

                <Link 
                  href={feature.link}
                  className="mt-auto inline-flex items-center gap-2 text-[14px] font-bold text-[#F5B942] uppercase tracking-widest group/link"
                >
                  Learn more <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 flex justify-center"
        >
          <Link 
            href="/features" 
            className="inline-flex items-center justify-center px-10 py-4.5 rounded-2xl border border-white/10 bg-white/5 text-white font-bold text-[15px] hover:bg-white/10 hover:border-white/20 transition-all duration-300 active:scale-95 group"
          >
            View all features <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
