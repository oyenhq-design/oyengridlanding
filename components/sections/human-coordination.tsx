"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  MessageSquare, Sparkles, Activity, Lightbulb, 
  Zap, Brain, Users, LayoutGrid, CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "AI Session Summaries",
    desc: "Generate concise summaries and action points automatically.",
    icon: Sparkles
  },
  {
    title: "Structured Communication",
    desc: "Keep discussions and updates organised across every cohort.",
    icon: MessageSquare
  },
  {
    title: "Operational Visibility",
    desc: "Monitor participation, attendance and engagement in real time.",
    icon: Activity
  },
  {
    title: "Intelligent Recommendations",
    desc: "Receive contextual insights and workflow suggestions.",
    icon: Lightbulb
  }
];

const floatingCards = [
  {
    type: "Session Chat",
    msg: "Session delivery discussion active.",
    status: "LIVE",
    icon: MessageSquare,
    color: "emerald"
  },
  {
    type: "Facilitator",
    msg: "Cohort engagement levels have increased by 18% this week.",
    icon: Users,
    color: "brand-gold"
  },
  {
    type: "AI Assistant",
    msg: "Summary and recommended follow-up actions are ready.",
    icon: Zap,
    color: "brand-gold"
  },
  {
    type: "Operational Insight",
    msg: "Attendance consistency remains above target thresholds.",
    icon: Activity,
    color: "emerald"
  }
];

export function HumanCoordination() {
  return (
    <section className="py-32 relative bg-[#050816] overflow-hidden border-b border-white/5">
      
      {/* CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/section-2-background.png"
          alt="Intelligence Background"
          fill
          className="object-cover opacity-20 brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 bg-[#050816]/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-transparent to-[#050816]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
          
          {/* LEFT: CONTENT & CARDS */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/60" />
                <span className="eyebrow tracking-[0.3em] text-brand-gold/80 font-black uppercase text-[11px]">
                  HUMAN COORDINATION • INTELLIGENT OPERATIONS
                </span>
              </div>

              <h2 className="text-[40px] md:text-[52px] font-bold text-white leading-[1.1] tracking-tighter">
                Human coordination powered by <br />
                <span className="text-brand-gold italic font-serif">operational intelligence.</span>
              </h2>

              <p className="text-[18px] leading-relaxed text-white/50 max-w-[580px] font-medium">
                Connect participants, trainers and coordinators through intelligent communication, AI assistance and real-time insights that drive better decisions and outcomes.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative p-6 rounded-[24px] bg-[#0A0E1A]/40 border border-white/5 backdrop-blur-md transition-all duration-500 hover:bg-[#0A0E1A]/60 hover:border-brand-gold/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-gold/5 border border-brand-gold/10 flex items-center justify-center mb-5 group-hover:border-brand-gold/30 transition-all duration-500">
                      <feature.icon className="w-5 h-5 text-brand-gold/40 group-hover:text-brand-gold transition-colors" />
                    </div>
                    <h4 className="text-[16px] font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">{feature.title}</h4>
                    <p className="text-[12px] text-white/30 leading-relaxed group-hover:text-white/50 transition-colors">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: FLOATING NOTIFICATION STACK */}
          <div className="relative flex justify-center lg:justify-end">
             <div className="relative w-full max-w-[480px] h-[540px] flex flex-col gap-5">
                {floatingCards.map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    animate={{ 
                      y: [0, i % 2 === 0 ? -10 : 10, 0],
                      x: [0, i % 2 === 0 ? 5 : -5, 0]
                    }}
                    transition={{ 
                      delay: i * 0.2, 
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                      y: { duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
                      x: { duration: 7 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }
                    }}
                    className={cn(
                      "group relative p-6 rounded-[28px] border border-white/10 backdrop-blur-2xl bg-[#080B14]/80 shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden",
                      i === 0 && "ml-0",
                      i === 1 && "ml-12",
                      i === 2 && "ml-4",
                      i === 3 && "ml-20"
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border",
                        card.color === "brand-gold" ? "bg-brand-gold/10 border-brand-gold/20" : "bg-emerald-500/10 border-emerald-500/20"
                      )}>
                        <card.icon className={cn(
                          "w-5 h-5",
                          card.color === "brand-gold" ? "text-brand-gold" : "text-emerald-500"
                        )} />
                      </div>
                      
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                           <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                              {card.type}
                           </span>
                           {card.status && (
                             <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                                <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">{card.status}</span>
                             </div>
                           )}
                        </div>
                        <p className="text-[14px] font-bold text-white leading-tight group-hover:text-brand-gold transition-colors duration-500">
                          {card.msg}
                        </p>
                      </div>
                    </div>

                    {/* Accent Indicator */}
                    <div className={cn(
                      "absolute bottom-0 right-0 w-32 h-[2px] bg-gradient-to-r from-transparent",
                      card.color === "brand-gold" ? "to-brand-gold/40" : "to-emerald-500/40"
                    )} />

                    {/* Background Bloom */}
                    <div className={cn(
                      "absolute -top-10 -right-10 w-24 h-24 blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-1000",
                      card.color === "brand-gold" ? "bg-brand-gold" : "bg-emerald-500"
                    )} />
                  </motion.div>
                ))}

                {/* Connection Line */}
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-[1px] h-3/4 bg-gradient-to-b from-transparent via-brand-gold/20 to-transparent" />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
