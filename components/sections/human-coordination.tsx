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
    icon: Sparkles,
    iconBg: "bg-white border-[#E9EEF6] shadow-[0_2px_8px_rgba(15,23,42,0.04)]",
    iconColor: "text-purple-500"
  },
  {
    title: "Team Chat",
    desc: "Centralize cohort communication directly inside your workspace.",
    icon: MessageSquare,
    iconBg: "bg-white border-[#E9EEF6] shadow-[0_2px_8px_rgba(15,23,42,0.04)]",
    iconColor: "text-amber-500"
  },
  {
    title: "Live Dashboard",
    desc: "Monitor cohorts, attendance, engagement, and activity in real-time.",
    icon: Activity,
    iconBg: "bg-white border-[#E9EEF6] shadow-[0_2px_8px_rgba(15,23,42,0.04)]",
    iconColor: "text-blue-500"
  },
  {
    title: "AI Alerts",
    desc: "Get notified before learner issues become problems.",
    icon: Bell,
    iconBg: "bg-white border-[#E9EEF6] shadow-[0_2px_8px_rgba(15,23,42,0.04)]",
    iconColor: "text-emerald-500"
  }
];

export function HumanCoordination() {
  return (
    <section className="relative py-24 md:py-28 lg:py-36 bg-[#FFFFFF] overflow-hidden border-b border-zinc-100 flex items-center min-h-[750px] lg:min-h-[850px]">
      
      {/* Background Image Layer (Light Office Environment) */}
      <div 
        className="absolute inset-0 opacity-[0.22] pointer-events-none bg-cover bg-center filter blur-[10px] scale-105 z-0"
        style={{ backgroundImage: "url('/human-coordination-bg.png')" }}
      />

      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-20 items-center">
          
          {/* LEFT SIDE (40%) */}
          <div className="flex flex-col relative z-20">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#B8860B]" />
              <span className="text-[10px] font-black tracking-[0.35em] text-[#B8860B] uppercase">
                HUMAN COORDINATION • INSIGHTS
              </span>
            </div>

            <h2 className="text-[32px] md:text-[44px] font-bold text-[#0F172A] leading-[1.08] tracking-tight mb-6">
              Give your trainers and coordinators <br />
              <span className="text-[#D4A017] italic font-serif font-normal">AI superpowers</span>
            </h2>

            <p className="text-[14.5px] leading-relaxed text-[#475569] mb-10 max-w-[500px]">
              Automate the busywork. Surface what matters. Focus on learner outcomes.
            </p>

            {/* 2x2 Grid of Capability Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="group p-5 rounded-[20px] bg-[#FFFFFF] border border-[#E9EEF6] shadow-[0_12px_35px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 transition-all duration-300 min-h-[140px] flex flex-col justify-between"
                >
                  <div className={`w-8 h-8 rounded-lg border bg-white shadow-sm flex items-center justify-center mb-3 transition-all duration-300 ${feature.iconBg}`}>
                    <feature.icon className={`w-4 h-4 transition-colors duration-300 ${feature.iconColor}`} />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-[#0F172A] mb-1 transition-colors duration-300">{feature.title}</h4>
                    <p className="text-[11px] text-[#475569] leading-snug transition-colors duration-300 line-clamp-2">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom checkmark annotation (Security Strip) */}
            <div className="flex">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#FFFFFF] border border-[#EEF2F7] shadow-[0_8px_25px_rgba(15,23,42,0.04)] text-[#475569]">
                <CheckCircle2 className="w-5 h-5 text-[#D4A017] shrink-0" />
                <div className="text-[12.5px] font-medium leading-snug">
                  <span className="text-[#0F172A] font-bold">Secure. Reliable. Built for scale.</span>{" "}
                  <span className="text-[#475569] font-normal">Your data, always protected.</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (60%) - LAYER 3 (Floating Tablet) */}
          <div className="relative flex items-center justify-center lg:justify-end pt-10 lg:pt-0 w-full min-h-[480px] lg:min-h-[640px] lg:-mr-40 lg:-mb-32">
            
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 bottom-0 w-[140%] lg:w-[960px] h-[120%] lg:h-[820px] translate-x-[15%] lg:translate-x-[10%] translate-y-[8%] lg:translate-y-[8%] z-10 filter drop-shadow-[0_30px_70px_rgba(15,23,42,0.15)]"
              style={{
                WebkitMaskImage: "radial-gradient(circle at 80% 80%, black 40%, transparent 92%)",
                maskImage: "radial-gradient(circle at 80% 80%, black 40%, transparent 92%)"
              }}
            >
              <Image
                src="/human-coordination-mockup-new.jpg"
                alt="OYEN GRID Platform Mockup"
                fill
                className="object-contain object-bottom-right"
                priority
                unoptimized
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
