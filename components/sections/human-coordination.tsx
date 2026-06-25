"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  MessageSquare, Sparkles, Activity, Bell, CheckCircle2 
} from "lucide-react";

const features = [
  {
    title: "AI Session Notes",
    desc: "Instant summaries and action items generated post-session.",
    icon: Sparkles
  },
  {
    title: "Team Chat",
    desc: "Centralize cohort communication directly inside your workspace.",
    icon: MessageSquare
  },
  {
    title: "Live Dashboard",
    desc: "Monitor cohorts, attendance, engagement, and activity in real-time.",
    icon: Activity
  },
  {
    title: "AI Alerts",
    desc: "Get notified before learner issues become problems.",
    icon: Bell
  }
];

export function HumanCoordination() {
  return (
    <section className="relative py-24 md:py-28 lg:py-32 bg-[#05070F] overflow-hidden border-b border-white/5 flex items-center">
      
      {/* Rich atmospheric glows for AI section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-[#D4A017]/[0.07] blur-[130px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[10%] w-[600px] h-[500px] bg-[#3B6FE8]/[0.07] blur-[110px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#7C3AED]/[0.04] blur-[130px] rounded-full" />
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-20 items-center">
          
          {/* LEFT SIDE (40%) */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/60 animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.35em] text-[#D4A017] uppercase">
                HUMAN COORDINATION • INSIGHTS
              </span>
            </div>

            <h2 className="text-[32px] md:text-[44px] font-bold text-white leading-[1.08] tracking-tight mb-6">
              Give your trainers and coordinators <br />
              <span className="text-[#D4A017] italic font-serif">AI superpowers</span>
            </h2>

            <p className="text-[14px] leading-relaxed text-zinc-300 mb-10 max-w-[500px]">
              Automate the busywork. Surface what matters. Focus on learner outcomes.
            </p>

            {/* 2x2 Grid of Capability Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="group p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#D4A017]/35 hover:bg-white/[0.04] transition-all duration-300 min-h-[140px] flex flex-col justify-between"
                >
                  <div className="w-7 h-7 rounded-[6px] bg-[#D4A017]/5 border border-[#D4A017]/10 flex items-center justify-center mb-3 group-hover:border-[#D4A017]/30 transition-all duration-300">
                    <feature.icon className="w-3.5 h-3.5 text-[#D4A017]/40 group-hover:text-[#D4A017] transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-white mb-1 group-hover:text-[#D4A017] transition-colors duration-300">{feature.title}</h4>
                    <p className="text-[10.5px] text-zinc-300 leading-snug group-hover:text-white transition-colors duration-300 line-clamp-2">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom checkmark annotation */}
            <div className="flex items-start gap-3 text-zinc-200">
              <CheckCircle2 className="w-5 h-5 text-[#D4A017] shrink-0 mt-0.5" />
              <div className="text-[13px] font-medium leading-tight">
                Secure. Reliable. Built for scale. <br />
                <span className="text-zinc-400">Your data, always protected.</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (60%) */}
          <div className="relative flex items-center justify-center lg:justify-end pt-10 lg:pt-0 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-[480px] lg:h-[550px] max-w-[640px]"
              style={{
                maskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)"
              }}
            >
              <Image
                src="/human-coordination-mockup.png"
                alt="OYEN GRID Platform Mockup"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
