"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Server, Users, MonitorPlay, FileStack } from "lucide-react";

export function CoreValueSections() {
  return (
    <div className="bg-[#0B0B0C]">
      
      {/* 6. FEATURE SPLIT SECTION (IMAGE LEFT / TEXT RIGHT) */}
      <section className="py-32 bg-[#0D0D10]/50 overflow-hidden relative">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/5" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/5" />

        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Analytics Card Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-[#F5C044] opacity-[0.05] blur-[100px] rounded-full" />
            <div className="relative aspect-[4/3] bg-[#0D0D10] border border-white/10 rounded-3xl shadow-2xl overflow-hidden ring-1 ring-white/5">
               <Image 
                src="/images/hero-dashboard.png" 
                alt="Analytics UI" 
                fill
                className="object-cover opacity-80"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[36px] md:text-[48px] font-bold text-white tracking-tight leading-tight mb-8">
              A unified system for <br />
              <span className="text-[#F5C044]">high-performance delivery</span>
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Real-time Operational Intelligence",
                  desc: "Track participant progress, engagement, and completion metrics across every cohort with millisecond precision."
                },
                {
                  title: "Automated Workflow Orchestration",
                  desc: "Deploy resources, trigger notifications, and manage assessments automatically based on structural programme rules."
                },
                {
                  title: "Centralised Data Governance",
                  desc: "Maintain a single source of truth for all participant data, ensuring privacy, compliance, and absolute data integrity."
                }
              ].map((item) => (
                <div key={item.title} className="flex gap-4 group">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-[#F5C044]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-[#71717A] text-[15px] leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. “Built for scale and structure” (4 Cards) */}
      <section className="py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-[32px] md:text-[42px] font-bold text-white tracking-tight">
              Built for scale and structure
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MonitorPlay, title: "Training Orchestration", desc: "Manage thousands of participants across hundreds of concurrent live and async sessions." },
              { icon: Server, title: "Data Intelligence", desc: "Unify fragmented data streams into a single, actionable operational dashboard." },
              { icon: Users, title: "Corporate Systems", desc: "Enterprise-grade tools built for internal talent development and organizational training." },
              { icon: FileStack, title: "NGO Programs", desc: "Highly structured delivery systems for large-scale social impact and education initiatives." }
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#F5C044]/30 hover:bg-[#F5C044]/5 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <card.icon className="w-6 h-6 text-[#71717A] group-hover:text-[#F5C044]" />
                </div>
                <h4 className="text-white font-bold text-lg mb-4">{card.title}</h4>
                <p className="text-[#71717A] text-[14px] leading-relaxed font-light">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
