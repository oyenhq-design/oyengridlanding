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
    <section className="relative py-24 md:py-28 lg:py-36 bg-[#050816] overflow-hidden border-b border-white/5 flex items-center min-h-[750px] lg:min-h-[850px]">
      
      {/* LAYER 1: Full-width dark gradient & Vignette */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050816] via-[#020308] to-[#000000] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_50%,rgba(0,0,0,0.8)_100%)] pointer-events-none z-0" />

      {/* LAYER 2: Blurred Futuristic Innovation Lab/Workspace */}
      <div 
        className="absolute inset-0 opacity-[0.16] pointer-events-none mix-blend-overlay bg-cover bg-center filter blur-[15px] scale-105 z-0"
        style={{ backgroundImage: "url('/office-context-bg.jpg')" }}
      />

      {/* Faint Grid Particles & AI connection lines */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
        style={{ 
          backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)", 
          backgroundSize: "28px 28px" 
        }} 
      />
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-screen bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/diagram-bg.png')" }} 
      />

      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-20 items-center">
          
          {/* LEFT SIDE (40%) */}
          <div className="flex flex-col relative z-20">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
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
                  className={`group p-5 rounded-2xl bg-[#090D1A]/65 border border-white/5 backdrop-blur-md transition-all duration-300 min-h-[140px] flex flex-col justify-between ${feature.hoverBorder}`}
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
            <div className="flex items-start gap-3 text-zinc-200">
              <CheckCircle2 className="w-5 h-5 text-[#D4A017] shrink-0 mt-0.5" />
              <div className="text-[13px] font-medium leading-tight">
                Secure. Reliable. Built for scale. <br />
                <span className="text-zinc-400 font-normal">Your data, always protected.</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (60%) - LAYER 3 (Floating Tablet) */}
          <div className="relative flex items-center justify-center lg:justify-end pt-10 lg:pt-0 w-full min-h-[480px] lg:min-h-[640px] lg:-mr-40 lg:-mb-32">
            
            {/* Ambient volumetric glows behind the tablet */}
            <div className="absolute left-[15%] top-[20%] w-[480px] h-[480px] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.22)_0%,transparent_70%)] blur-[60px] pointer-events-none z-0" />
            <div className="absolute right-[10%] bottom-[15%] w-[550px] h-[550px] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.16)_0%,transparent_70%)] blur-[70px] pointer-events-none z-0" />
            <div className="absolute left-[35%] bottom-[10%] w-[450px] h-[450px] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.18)_0%,transparent_70%)] blur-[50px] pointer-events-none z-0" />
            
            {/* Gentle Bokeh lights */}
            <div className="absolute left-[15%] top-[25%] w-2 h-2 rounded-full bg-purple-400/40 blur-[1px] animate-pulse pointer-events-none z-0" />
            <div className="absolute right-[25%] bottom-[35%] w-3 h-3 rounded-full bg-cyan-400/30 blur-[2px] animate-pulse pointer-events-none z-0" style={{ animationDelay: '1.5s' }} />
            <div className="absolute right-[12%] top-[20%] w-2.5 h-2.5 rounded-full bg-amber-400/35 blur-[1px] animate-pulse pointer-events-none z-0" style={{ animationDelay: '3s' }} />

            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 bottom-0 w-[140%] lg:w-[960px] h-[120%] lg:h-[820px] translate-x-[15%] lg:translate-x-[10%] translate-y-[8%] lg:translate-y-[8%] z-10"
              style={{
                WebkitMaskImage: "radial-gradient(circle at 80% 80%, black 35%, transparent 90%)",
                maskImage: "radial-gradient(circle at 80% 80%, black 35%, transparent 90%)"
              }}
            >
              <Image
                src="/human-coordination-mockup-new.jpg"
                alt="OYEN GRID Platform Mockup"
                fill
                className="object-contain object-bottom-right mix-blend-screen"
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
