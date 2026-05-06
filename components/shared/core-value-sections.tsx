"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Server, Users, MonitorPlay, FileStack, TrendingUp, Users2, ShieldCheck } from "lucide-react";

export function CoreValueSections() {
  return (
    <div className="bg-[#0B0B0C]">
      
      {/* 4. FEATURE SPLIT (Analytics focus) */}
      <section className="py-40 bg-[#0D0D10]/50 overflow-hidden relative border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Left: Analytics UI with Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute -inset-10 bg-[#F5C044] opacity-[0.08] blur-[120px] rounded-full" />
            
            {/* Main Mockup */}
            <div className="relative aspect-[4/3] bg-[#0D0D10] border border-white/10 rounded-[40px] shadow-[0_60px_100px_rgba(0,0,0,0.8)] overflow-hidden ring-1 ring-white/10 group">
               <Image 
                src="/images/hero-dashboard.png" 
                alt="Analytics Intelligence" 
                fill
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D10] via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Mini Cards */}
            <motion.div
              animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -right-12 z-20 p-6 rounded-3xl bg-[#0D0D10]/90 border border-white/10 backdrop-blur-2xl shadow-3xl max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                </div>
                <p className="text-white font-bold text-sm">Engagement</p>
              </div>
              <p className="text-2xl font-bold text-white tracking-tighter mb-1">+24.8%</p>
              <p className="text-[#52525B] text-[10px] uppercase font-bold tracking-widest">Growth this cohort</p>
            </motion.div>

            <motion.div
              animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-8 z-20 p-6 rounded-3xl bg-[#0D0D10]/90 border border-white/10 backdrop-blur-2xl shadow-3xl"
            >
              <div className="flex items-center gap-3 mb-1">
                <Users2 className="w-4 h-4 text-blue-400" />
                <p className="text-white font-bold text-[14px]">Active Learners</p>
              </div>
              <p className="text-[#71717A] text-[12px]">842 participants currently live</p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[#F5C044] text-[10px] font-bold tracking-widest uppercase mb-8">
              Operational Intelligence
            </div>
            <h2 className="text-[42px] md:text-[56px] font-bold text-white tracking-tight leading-[1.05] mb-8">
              A unified system for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5C044] to-[#D4A017]">high-performance delivery</span>
            </h2>
            <p className="text-[19px] text-[#A1A1AA] leading-relaxed mb-12 font-light">
              Stop fragmentation. OYEN GRID consolidates your entire operational stack into a single, high-fidelity experience built for speed and structure.
            </p>
            <div className="space-y-8">
              {[
                {
                  title: "Real-time Program Monitoring",
                  desc: "Track mastery, attendance, and sentiment across every cohort with millisecond precision."
                },
                {
                  title: "Automated Workflow Engines",
                  desc: "Trigger communications, release modules, and manage grades automatically based on structural rules."
                }
              ].map((item) => (
                <div key={item.title} className="flex gap-5 group">
                  <div className="mt-1 w-6 h-6 rounded-full bg-[#F5C044]/10 border border-[#F5C044]/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F5C044]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-[18px] mb-2 group-hover:text-[#F5C044] transition-colors">{item.title}</h4>
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
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#F5C044] to-transparent mx-auto mt-8 opacity-30" />
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
                className="group relative p-10 rounded-[32px] bg-white/[0.02] border border-white/10 hover:border-[#F5C044]/40 hover:bg-white/[0.04] transition-all duration-700"
              >
                {/* Gradient Border Glow */}
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#F5C044]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#F5C044]/10 transition-all duration-500 shadow-xl border border-white/5 group-hover:border-[#F5C044]/20">
                  <card.icon className="w-6 h-6 text-[#71717A] group-hover:text-[#F5C044] transition-colors" />
                </div>
                
                <h4 className="text-white font-bold text-[20px] mb-4 relative z-10">{card.title}</h4>
                <p className="text-[#71717A] text-[15px] leading-relaxed font-light relative z-10 group-hover:text-[#A1A1AA] transition-colors">{card.desc}</p>
                
                {/* Subtle Glow behind icon */}
                <div className="absolute top-10 left-10 w-14 h-14 bg-[#F5C044] opacity-0 group-hover:opacity-[0.08] blur-2xl rounded-full transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
