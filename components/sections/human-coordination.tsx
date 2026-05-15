"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  MessageSquare, Sparkles, Activity, Lightbulb, 
  Zap, Users
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
    <section className="relative h-[680px] bg-[#050816] overflow-hidden border-b border-white/5 flex items-center">
      
      {/* FULL-WIDTH CINEMATIC BACKGROUND IMAGE */}
      <div className="absolute top-0 right-0 w-full lg:w-[65%] h-full z-0 overflow-hidden">
        <Image
          src="/section-2-background.png"
          alt="Intelligence Infrastructure"
          fill
          className="object-cover opacity-80 lg:opacity-100"
          priority
        />
        {/* Soft navy gradient for readability and cinematic blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/70 to-transparent lg:via-[#050816]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-[#050816]/20" />
      </div>

      <div className="w-full px-8 lg:px-[100px] relative z-10">
        <div className="max-w-[1800px] mx-auto grid lg:grid-cols-[1fr_260px] gap-12 items-center">
          
          {/* LEFT: TEXT & 4-CARD ROW */}
          <div className="py-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/60" />
                <span className="eyebrow tracking-[0.4em] text-brand-gold font-black uppercase text-[11px]">
                  HUMAN COORDINATION • INTELLIGENT OPERATIONS
                </span>
              </div>

              <h2 className="text-[34px] md:text-[42px] font-bold text-white leading-[1.05] tracking-tighter max-w-[620px]">
                Orchestrate the <span className="text-brand-gold">human complexity</span> of global delivery.
              </h2>

              <p className="text-[15px] leading-relaxed text-white/40 max-w-[540px] font-medium">
                Moving from fragmented tools to one unified system for trainers, administrators, and stakeholders. Real-time participant tracking, automated resource allocation, and institutional oversight.
              </p>

              {/* 4 FEATURE CARDS IN ONE HORIZONTAL ROW */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 lg:w-[120%] lg:max-w-none">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="group relative p-4 rounded-[16px] bg-white/[0.02] border border-white/5 backdrop-blur-md transition-all duration-500 hover:bg-white/[0.05] hover:border-brand-gold/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] min-h-[120px] flex flex-col justify-between"
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand-gold/5 border border-brand-gold/10 flex items-center justify-center mb-3 group-hover:border-brand-gold/30 transition-all duration-500">
                      <feature.icon className="w-4 h-4 text-brand-gold/40 group-hover:text-brand-gold transition-colors" />
                    </div>
                    <div>
                       <h4 className="text-[14px] font-bold text-white mb-1 group-hover:text-brand-gold transition-colors">{feature.title}</h4>
                       <p className="text-[12px] text-white/30 leading-snug group-hover:text-white/50 transition-colors line-clamp-2">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: FLOATING OPERATIONAL NOTIFICATION STACK */}
          <div className="relative h-[480px] flex flex-col justify-center gap-3">
             <div className="relative w-full max-w-[440px] space-y-3">
                {floatingCards.map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    animate={{ 
                      y: [0, i % 2 === 0 ? -12 : 12, 0],
                      x: [0, i % 2 === 0 ? 8 : -8, 0]
                    }}
                    transition={{ 
                      y: { duration: 6 + i, repeat: Infinity, ease: "easeInOut" },
                      x: { duration: 8 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 },
                      opacity: { duration: 0.8, delay: i * 0.15 }
                    }}
                    className={cn(
                      "group relative p-4 rounded-[20px] border border-white/10 backdrop-blur-2xl bg-[#080B14]/70 shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden",
                      i === 1 && "ml-8",
                      i === 2 && "ml-2",
                      i === 3 && "ml-14"
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <div className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border",
                        card.color === "brand-gold" ? "bg-brand-gold/10 border-brand-gold/20" : "bg-emerald-500/10 border-emerald-500/20"
                      )}>
                        <card.icon className={cn(
                          "w-3.5 h-3.5",
                          card.color === "brand-gold" ? "text-brand-gold" : "text-emerald-500"
                        )} />
                      </div>
                      
                      <div className="flex-1 space-y-1.5">
                        <div className="flex items-center justify-between">
                           <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
                              {card.type}
                           </span>
                           {card.status && (
                             <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                                <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[7px] font-black text-emerald-500 uppercase tracking-widest">{card.status}</span>
                             </div>
                           )}
                        </div>
                        <p className="text-[14px] font-bold text-white leading-tight group-hover:text-brand-gold transition-colors duration-500">
                          {card.msg}
                        </p>
                      </div>
                    </div>

                    {/* Gradient Bloom */}
                    <div className={cn(
                      "absolute -top-10 -right-10 w-20 h-20 blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-1000",
                      card.color === "brand-gold" ? "bg-brand-gold" : "bg-emerald-500"
                    )} />
                  </motion.div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
