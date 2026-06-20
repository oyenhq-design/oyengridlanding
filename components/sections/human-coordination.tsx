"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  MessageSquare, Sparkles, Activity, Lightbulb, Users 
} from "lucide-react";

const features = [
  {
    title: "AI Session Notes",
    desc: "Auto-generate notes and to-dos after every live class.",
    icon: Sparkles
  },
  {
    title: "Team Chat",
    desc: "Ditch the WhatsApp groups. Chat with learners by group, right in the app.",
    icon: MessageSquare
  },
  {
    title: "Live Dashboard",
    desc: "See who’s online, who’s late, and engagement as it happens.",
    icon: Activity
  },
  {
    title: "AI Alerts",
    desc: "Get pinged when a learner misses 2 classes or fails a quiz.",
    icon: Lightbulb
  }
];

export function HumanCoordination() {
  return (
    <section className="relative py-24 md:py-28 lg:py-32 bg-[#060A1C] theme-navy-section overflow-hidden border-b border-white/5 flex items-center">
      
      {/* Rich atmospheric glows for AI section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-[#E2B84C]/[0.07] blur-[130px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[10%] w-[600px] h-[500px] bg-[#3B6FE8]/[0.07] blur-[110px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#7C3AED]/[0.04] blur-[130px] rounded-full" />
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-20 items-center">
          
          {/* LEFT SIDE (40%) */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/60 animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.35em] text-brand-gold uppercase">
                HUMAN COORDINATION • INSIGHTS
              </span>
            </div>

            <h2 className="text-[32px] md:text-[44px] font-bold text-white leading-[1.08] tracking-tight mb-6">
              Give your trainers and coordinators <br />
              <span className="text-brand-gold italic font-serif">AI superpowers</span>
            </h2>

            <p className="text-[14px] leading-relaxed text-white/50 mb-10 max-w-[500px]">
              Help your team spend time teaching, not updating spreadsheets.
            </p>

            {/* 2x2 Grid of Capability Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="group p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.04] transition-all duration-300 min-h-[140px] flex flex-col justify-between"
                >
                  <div className="w-7 h-7 rounded-[6px] bg-brand-gold/5 border border-brand-gold/10 flex items-center justify-center mb-3 group-hover:border-brand-gold/30 transition-all duration-300">
                    <feature.icon className="w-3.5 h-3.5 text-brand-gold/40 group-hover:text-brand-gold transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-white mb-1 group-hover:text-brand-gold transition-colors duration-300">{feature.title}</h4>
                    <p className="text-[10px] text-white/30 leading-snug group-hover:text-white/50 transition-colors duration-300 line-clamp-2">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE (60%) */}
          <div className="relative flex items-center justify-center lg:justify-end pt-10 lg:pt-0">
            {/* Main Image Wrapper with gold ambient glow behind it */}
            <div className="relative w-full max-w-[580px] aspect-[4/3] rounded-[24px] p-[1px] bg-gradient-to-b from-white/10 to-transparent shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              {/* Soft gold glow behind the container */}
              <div className="absolute inset-[-15px] rounded-[36px] bg-brand-gold/[0.03] blur-[25px] pointer-events-none" />
              
              <div className="relative w-full h-full rounded-[23px] overflow-hidden border border-white/5">
                <Image
                  src="/section-2-bg.png"
                  alt="Platform in action"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Soft left gradient for blending */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 via-transparent to-transparent" />
              </div>

              {/* Anchored AI Notification System */}
              <div className="absolute right-[-4%] sm:right-[-6%] top-0 bottom-0 w-[240px] sm:w-[270px] flex flex-col justify-center gap-4.5 z-20 pointer-events-auto">
                
                {/* AI Session Summary Card */}
                <div className="relative group p-4 rounded-2xl border border-white/10 backdrop-blur-xl bg-[#080B14]/85 shadow-[0_20px_45px_rgba(0,0,0,0.85)] flex gap-3.5 transition-all duration-300 hover:border-brand-gold/30">
                  {/* Connection Line to woman's forehead area */}
                  <div className="absolute right-full top-1/2 -translate-y-1/2 w-12 sm:w-16 h-px bg-[#E2B84C]/40 pointer-events-none flex items-center justify-end">
                    <div className="w-1 h-1 rounded-full bg-[#E2B84C]" />
                  </div>
                  
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[8px] font-black uppercase tracking-wider text-white/30">AI Session Notes</span>
                      <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[6px] font-black text-emerald-500 uppercase tracking-widest">Live</span>
                      </div>
                    </div>
                    <h5 className="text-[11px] font-bold text-white mb-0.5 group-hover:text-brand-gold transition-colors duration-300">Session notes ready</h5>
                    <p className="text-[9.5px] text-white/40 leading-snug">Key points and action items generated.</p>
                  </div>
                </div>

                {/* Cohort Engagement Card */}
                <div className="relative group p-4 rounded-2xl border border-white/10 backdrop-blur-xl bg-[#080B14]/85 shadow-[0_20px_45px_rgba(0,0,0,0.85)] flex gap-3.5 transition-all duration-300 hover:border-brand-gold/30">
                  {/* Connection Line to man's face/glasses area */}
                  <div className="absolute right-full top-1/2 -translate-y-1/2 w-16 sm:w-20 h-px bg-[#E2B84C]/40 pointer-events-none flex items-center justify-end">
                    <div className="w-1 h-1 rounded-full bg-[#E2B84C]" />
                  </div>

                  <div className="w-8 h-8 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 text-brand-gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[8px] font-black uppercase tracking-wider text-white/30">Cohort Engagement</span>
                    </div>
                    <h5 className="text-[11px] font-bold text-white mb-0.5 group-hover:text-brand-gold transition-colors duration-300">Engagement increased</h5>
                    <p className="text-[9.5px] text-white/40 leading-snug">Cohort engagement levels have increased by 18% this week.</p>
                  </div>
                </div>

                {/* Attendance Insight Card */}
                <div className="relative group p-4 rounded-2xl border border-white/10 backdrop-blur-xl bg-[#080B14]/85 shadow-[0_20px_45px_rgba(0,0,0,0.85)] flex gap-3.5 transition-all duration-300 hover:border-brand-gold/30">
                  {/* Connection Line to laptop area */}
                  <div className="absolute right-full top-1/2 -translate-y-1/2 w-10 sm:w-12 h-px bg-[#E2B84C]/40 pointer-events-none flex items-center justify-end">
                    <div className="w-1 h-1 rounded-full bg-[#E2B84C]" />
                  </div>

                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <Activity className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[8px] font-black uppercase tracking-wider text-white/30">Attendance Insight</span>
                    </div>
                    <h5 className="text-[11px] font-bold text-white mb-0.5 group-hover:text-brand-gold transition-colors duration-300">Attendance above target</h5>
                    <p className="text-[9.5px] text-white/40 leading-snug">Attendance consistency remains above target thresholds.</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
