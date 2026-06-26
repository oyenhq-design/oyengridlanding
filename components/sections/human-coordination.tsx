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
    iconBg: "bg-purple-500/10 border-purple-500/20",
    iconColor: "text-purple-400",
    hoverBorder: "group-hover:border-purple-500/30 group-hover:bg-purple-500/[0.02]",
    hoverTitle: "group-hover:text-purple-400"
  },
  {
    title: "Team Chat",
    desc: "Centralize cohort communication directly inside your workspace.",
    icon: MessageSquare,
    iconBg: "bg-amber-500/10 border-amber-500/20",
    iconColor: "text-amber-400",
    hoverBorder: "group-hover:border-amber-500/30 group-hover:bg-amber-500/[0.02]",
    hoverTitle: "group-hover:text-amber-400"
  },
  {
    title: "Live Dashboard",
    desc: "Monitor cohorts, attendance, engagement, and activity in real-time.",
    icon: Activity,
    iconBg: "bg-blue-500/10 border-blue-500/20",
    iconColor: "text-blue-400",
    hoverBorder: "group-hover:border-blue-500/30 group-hover:bg-blue-500/[0.02]",
    hoverTitle: "group-hover:text-blue-400"
  },
  {
    title: "AI Alerts",
    desc: "Get notified before learner issues become problems.",
    icon: Bell,
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    iconColor: "text-emerald-400",
    hoverBorder: "group-hover:border-emerald-500/30 group-hover:bg-emerald-500/[0.02]",
    hoverTitle: "group-hover:text-emerald-400"
  }
];

export function HumanCoordination() {
  return (
    <section className="relative py-24 md:py-28 lg:py-36 bg-[#FFFFFF] overflow-hidden border-b border-zinc-200 flex items-center min-h-[750px] lg:min-h-[850px]">
      
      {/* Background Image Layer (Very Clear Light Office Environment) */}
      <div 
        className="absolute inset-0 opacity-[0.92] pointer-events-none bg-cover bg-center select-none z-0 filter contrast-[1.02] brightness-[0.98]"
        style={{ backgroundImage: "url('/human-coordination-bg.png')" }}
      />
      
      {/* Subtle overlay to soften the background image behind the text for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-black/10 pointer-events-none z-0" />

      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-20 items-center">
          
          {/* LEFT SIDE (40%) - Styled to match the dim text & dark-mode elements of Image 1 */}
          <div className="flex flex-col relative z-20">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
              <span className="text-[10px] font-black tracking-[0.35em] text-[#D4A017] uppercase">
                HUMAN COORDINATION • INSIGHTS
              </span>
            </div>

            {/* Title rendered in a dark/dim color as shown in Image 1 */}
            <h2 className="text-[32px] md:text-[44px] font-bold text-[#0F172A]/40 leading-[1.08] tracking-tight mb-6">
              Give your trainers and coordinators <br />
              <span className="text-[#D4A017] italic font-serif font-normal">AI superpowers</span>
            </h2>

            <p className="text-[14.5px] leading-relaxed text-[#0F172A]/70 mb-10 max-w-[500px] font-medium">
              Automate the busywork. Surface what matters. Focus on learner outcomes.
            </p>

            {/* 2x2 Grid of Capability Cards - Reverted to dark styles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className={`group p-5 rounded-2xl bg-[#090D1A]/90 border border-white/10 backdrop-blur-md transition-all duration-300 min-h-[140px] flex flex-col justify-between ${feature.hoverBorder}`}
                >
                  <div className={`w-8 h-8 rounded-lg border flex items-center justify-center mb-3 transition-all duration-300 ${feature.iconBg}`}>
                    <feature.icon className={`w-4 h-4 transition-colors duration-300 ${feature.iconColor}`} />
                  </div>
                  <div>
                    <h4 className={`text-[13px] font-bold text-white mb-1 transition-colors duration-300 ${feature.hoverTitle}`}>{feature.title}</h4>
                    <p className="text-[11px] text-zinc-400 leading-snug group-hover:text-white transition-colors duration-300 line-clamp-2">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom checkmark annotation */}
            <div className="flex items-start gap-3 text-zinc-800">
              <CheckCircle2 className="w-5 h-5 text-[#D4A017] shrink-0 mt-0.5" />
              <div className="text-[13px] font-bold leading-tight">
                Secure. Reliable. Built for scale. <br />
                <span className="text-[#0F172A]/60 font-normal">Your data, always protected.</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (60%) - Mockup Tablet */}
          <div className="relative flex items-center justify-center lg:justify-end pt-10 lg:pt-0 w-full min-h-[480px] lg:min-h-[640px] lg:-mr-40 lg:-mb-32">
            
            {/* Ambient volumetric light blooms behind the tablet */}
            <div className="absolute left-[15%] top-[20%] w-[480px] h-[480px] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.18)_0%,transparent_75%)] blur-[60px] pointer-events-none z-0" />
            <div className="absolute right-[10%] bottom-[15%] w-[550px] h-[550px] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.14)_0%,transparent_75%)] blur-[70px] pointer-events-none z-0" />
            
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 bottom-0 w-[140%] lg:w-[960px] h-[120%] lg:h-[820px] translate-x-[15%] lg:translate-x-[10%] translate-y-[8%] lg:translate-y-[8%] z-10"
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
