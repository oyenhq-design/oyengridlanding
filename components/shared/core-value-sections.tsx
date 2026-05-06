"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Server, Users, MonitorPlay, FileStack, TrendingUp, Activity, BarChart3, Zap } from "lucide-react";

export function CoreValueSections() {
  return (
    <div className="bg-[#0B0B0C] relative">
      
      {/* 4. FEATURE SPLIT (Analytics focus) */}
      <section className="py-40 bg-[#0B0B0C] overflow-hidden relative border-t border-white/5">
        {/* Subtle grid/dot texture in background */}
        <div className="absolute inset-0 bg-[url('/grid-dots.svg')] opacity-[0.03] pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Left: Analytics Dashboard UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Soft gold glow behind UI */}
            <div className="absolute -inset-16 bg-[#F5B800] opacity-[0.08] blur-[140px] rounded-full" />
            
            <div className="relative p-1 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-[40px] shadow-2xl overflow-hidden ring-1 ring-white/10 group">
              <div className="relative aspect-[4/3] bg-[#0D0D10] rounded-[39px] overflow-hidden border border-white/10">
                 <Image 
                  src="/oyen_grid_hero_ui_mockup_1778080275_png_1778079895843.png" 
                  alt="Analytics Dashboard System" 
                  fill
                  className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Activity Panel Overlay detail */}
                <div className="absolute bottom-6 right-6 p-4 rounded-2xl bg-black/80 border border-white/10 backdrop-blur-xl shadow-2xl max-w-[180px]">
                   <div className="flex items-center gap-2 mb-3">
                     <Activity className="w-3.5 h-3.5 text-[#F5B800]" />
                     <p className="text-white font-bold text-[10px] uppercase tracking-widest">Live Activity</p>
                   </div>
                   <div className="space-y-2">
                     <div className="w-full h-1 rounded-full bg-white/5 overflow-hidden"><div className="w-2/3 h-full bg-[#F5B800]" /></div>
                     <div className="w-full h-1 rounded-full bg-white/5 overflow-hidden"><div className="w-1/2 h-full bg-blue-500" /></div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#F5B800]/10 border border-[#F5B800]/20 text-[#F5B800] text-[10px] font-bold tracking-widest uppercase mb-10">
              Operational Intelligence
            </div>
            <h2 className="text-[42px] md:text-[56px] font-bold text-white tracking-tight leading-[1.05] mb-10">
              A unified system for <br />
              <span className="text-[#F5B800]">high-performance delivery</span>
            </h2>
            <div className="space-y-10">
              {[
                {
                  title: "Real-time Program Monitoring",
                  desc: "Track mastery, attendance, and sentiment across every cohort with millisecond precision.",
                  icon: TrendingUp
                },
                {
                  title: "Automated Workflow Engines",
                  desc: "Trigger communications, release modules, and manage grades automatically based on structural rules.",
                  icon: Zap
                },
                {
                  title: "Centralised Operational Data",
                  desc: "Unify fragmented data streams into a single source of truth for your entire programme delivery team.",
                  icon: BarChart3
                }
              ].map((item) => (
                <div key={item.title} className="flex gap-6 group">
                  <div className="mt-1 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#F5B800]/10 group-hover:border-[#F5B800]/30 transition-all duration-500 shadow-lg">
                    <item.icon className="w-5 h-5 text-[#71717A] group-hover:text-[#F5B800] transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-[20px] mb-2 group-hover:text-[#F5B800] transition-colors">{item.title}</h4>
                    <p className="text-[#71717A] text-[16px] leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. “Built for scale and structure” (4 Premium Cards) */}
      <section className="py-40">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-28">
            <h2 className="text-[36px] md:text-[48px] font-bold text-white tracking-tight">
              Built for scale and structure
            </h2>
            <div className="w-24 h-1 bg-[#F5B800] mx-auto mt-8 opacity-30 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MonitorPlay, title: "Training Orchestration", desc: "Manage thousands of participants across hundreds of concurrent sessions." },
              { icon: Server, title: "Data Intelligence", desc: "Unify fragmented data streams into a single, actionable operational dashboard." },
              { icon: Users, title: "Corporate Systems", desc: "Enterprise-grade tools built for internal talent development at scale." },
              { icon: FileStack, title: "NGO Programs", desc: "Highly structured delivery systems for large-scale social impact initiatives." }
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-10 rounded-[32px] bg-white/[0.02] border border-white/10 hover:border-[#F5B800]/40 hover:bg-white/[0.04] transition-all duration-700"
              >
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#F5B800]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#F5B800]/10 transition-all duration-500 shadow-xl border border-white/5 group-hover:border-[#F5B800]/20">
                  <card.icon className="w-6 h-6 text-[#71717A] group-hover:text-[#F5B800] transition-colors" />
                </div>
                <h4 className="text-white font-bold text-[20px] mb-4 relative z-10">{card.title}</h4>
                <p className="text-[#71717A] text-[15px] leading-relaxed font-light relative z-10 group-hover:text-[#A1A1AA] transition-colors">{card.desc}</p>
                <div className="absolute top-10 left-10 w-14 h-14 bg-[#F5B800] opacity-0 group-hover:opacity-[0.08] blur-2xl rounded-full transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
