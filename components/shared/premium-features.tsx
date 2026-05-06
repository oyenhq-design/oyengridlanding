"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Layout, Users, Play, FileText, BarChart3, Zap, Globe, Shield, ArrowRight } from "lucide-react";

const TABS = [
  { id: "programme", label: "Programme Management" },
  { id: "analytics", label: "Analytics" },
  { id: "automation", label: "Automation" },
  { id: "collaboration", label: "Collaboration" }
];

export function PremiumFeatures() {
  const [activeTab, setActiveTab] = useState("programme");

  return (
    <div className="bg-[#0B0B0C]">
      
      {/* 6. FEATURE SPLIT (IMAGE + TEXT) */}
      <section className="py-40 bg-[#0D0D10]/50 relative overflow-hidden border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Left: UI Graph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-[#F5B800] opacity-[0.05] blur-[100px] rounded-full" />
            <div className="relative aspect-[4/3] bg-[#0A0A0C] border border-white/10 rounded-[40px] shadow-2xl overflow-hidden ring-1 ring-white/10 group">
              <Image src="/images/hero-dashboard.png" alt="Analytics Intelligence" fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>

          {/* Right Content */}
          <div>
            <h2 className="text-[42px] md:text-[56px] font-black text-white tracking-tight leading-[1.05] mb-8">
              A unified system for <br />
              <span className="text-[#F5B800]">high-performance delivery</span>
            </h2>
            <div className="space-y-8">
              {[
                { title: "Real-time Monitoring", desc: "Track participant progress, mastery levels, and engagement across all active cohorts simultaneously." },
                { title: "Structural Integrity", desc: "Ensure every session and resource aligns with your core programme architecture automatically." }
              ].map((item) => (
                <div key={item.title} className="flex gap-5 group">
                  <div className="mt-1 w-6 h-6 rounded-full bg-[#F5B800]/10 border border-[#F5B800]/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F5B800]" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-[20px] mb-2 group-hover:text-[#F5B800] transition-colors">{item.title}</h4>
                    <p className="text-[#71717A] text-[16px] leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FEATURE GRID (CORE PLATFORM) */}
      <section className="py-40">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Layout, title: "Programme Hosting", desc: "Centralised environment for building and deploying structured learning experiences." },
              { icon: Users, title: "Participant Management", desc: "Advanced tools for handling complex multi-tenant registration and tracking." },
              { icon: Play, title: "Session Delivery", desc: "Optimised tools for orchestrating live, hybrid, and asynchronous learning modules." },
              { icon: FileText, title: "Content Management", desc: "Secure, structured repository for all programme resources and curriculum assets." }
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-10 rounded-[32px] bg-white/[0.02] border border-white/10 hover:border-[#F5B800]/40 hover:bg-white/[0.04] transition-all duration-700 shadow-xl overflow-hidden"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#F5B800]/10 transition-all duration-500 border border-white/5 group-hover:border-[#F5B800]/20">
                  <card.icon className="w-6 h-6 text-[#71717A] group-hover:text-[#F5B800]" />
                </div>
                <h4 className="text-white font-black text-[20px] mb-4 relative z-10">{card.title}</h4>
                <p className="text-[#71717A] text-[15px] leading-relaxed font-light relative z-10 group-hover:text-[#A1A1AA] transition-colors">{card.desc}</p>
                <div className="absolute top-10 left-10 w-14 h-14 bg-[#F5B800] opacity-0 group-hover:opacity-[0.08] blur-2xl rounded-full transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. “OPERATE WITH POWER” TABS */}
      <section className="py-40 bg-[#0D0D10]/50 relative overflow-hidden border-y border-white/5">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[36px] md:text-[52px] font-black text-white tracking-tight mb-12">
              Operate with power
            </h2>
            
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-white/5 border border-white/10 rounded-2xl w-max mx-auto backdrop-blur-xl">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-3.5 rounded-xl text-[14px] font-black tracking-widest uppercase transition-all duration-500 ${
                    activeTab === tab.id 
                      ? "bg-[#F5B800] text-black shadow-[0_10px_20px_rgba(245,184,0,0.3)]" 
                      : "text-[#71717A] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="relative mt-20 h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center h-full"
              >
                <div>
                  <h3 className="text-[32px] md:text-[40px] font-black text-white tracking-tight leading-tight mb-8 uppercase">
                    Unified Control over <br /> your programmes
                  </h3>
                  <div className="space-y-6">
                    {[
                      "Automated structural integrity checks",
                      "Live participant monitoring dashboard",
                      "Enterprise-grade role and permissions"
                    ].map((bullet) => (
                      <div key={bullet} className="flex items-center gap-5">
                        <div className="w-2 h-2 rounded-full bg-[#F5B800]" />
                        <span className="text-[#D4D4D8] text-[18px] font-light">{bullet}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-12 flex items-center gap-3 text-[#F5B800] font-black uppercase tracking-[0.2em] text-xs hover:translate-x-2 transition-transform">
                    Explore Feature <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="relative h-full">
                  <div className="absolute -inset-10 bg-[#F5B800] opacity-[0.05] blur-[100px] rounded-full" />
                  <div className="relative h-full bg-[#0D0D10] border border-white/10 rounded-[40px] shadow-3xl overflow-hidden ring-1 ring-[#F5B800]/20 p-4">
                    <div className="w-full h-full bg-[#0A0A0C] rounded-[24px] overflow-hidden relative">
                      <Image src="/images/hero-dashboard.png" alt="Feature UI" fill className="object-cover opacity-80" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

    </div>
  );
}
