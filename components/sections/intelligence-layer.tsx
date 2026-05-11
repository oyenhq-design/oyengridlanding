"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageSquare, Sparkles, Activity, Lightbulb, ShieldCheck, Zap } from "lucide-react";

export function IntelligenceLayer() {
  const capabilities = [
    {
      title: "AI Session Summaries",
      desc: "Generate concise operational summaries and action points automatically.",
      icon: Sparkles
    },
    {
      title: "Structured Communication",
      desc: "Keep discussions, updates, and coordination organised across every cohort.",
      icon: MessageSquare
    },
    {
      title: "Operational Visibility",
      desc: "Monitor participation, attendance, and engagement in real time.",
      icon: Activity
    },
    {
      title: "Intelligent Recommendations",
      desc: "Receive contextual operational insights and workflow suggestions.",
      icon: Lightbulb
    }
  ];

  const floatingCards = [
    {
      type: "Session Chat",
      status: "LIVE",
      content: "Session delivery discussion active.",
      icon: MessageSquare
    },
    {
      type: "Facilitator",
      content: "Cohort engagement levels have increased by 18% this week.",
      icon: ShieldCheck
    },
    {
      type: "AI Assistant",
      content: "Summary and recommended follow-up actions are ready.",
      icon: Zap
    },
    {
      type: "Operational Insight",
      content: "Attendance consistency remains above target thresholds.",
      icon: Activity
    }
  ];

  return (
    <section className="relative w-full min-h-[800px] flex items-center overflow-hidden bg-brand-dark py-32">
      {/* BACKGROUND FOUNDATION */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/section-2-bg.png"
          alt="Human Collaboration"
          fill
          className="object-cover contrast-[1.1] brightness-[0.8]"
          priority
        />
        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/40 z-10" />
        <div className="absolute inset-0 bg-brand-gold/[0.02] mix-blend-overlay z-10" />
      </div>

      <div className="container-custom relative z-20">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT CONTENT AREA */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-brand-gold mb-8 block opacity-80">
                HUMAN COORDINATION • INTELLIGENT OPERATIONS
              </span>
              
              <h2 className="text-white text-[42px] md:text-[56px] font-black leading-[1.1] mb-10 tracking-tight">
                Human coordination <br />
                powered by <span className="text-brand-gold">operational intelligence.</span>
              </h2>

              <p className="text-[18px] text-white/50 max-w-[500px] leading-relaxed mb-16 font-medium">
                OYEN GRID helps organisations coordinate trainers, participants, and programme operations through structured communication, intelligent automation, and real-time visibility.
              </p>

              {/* CAPABILITY CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {capabilities.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md hover:border-brand-gold/20 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5 text-brand-gold" />
                    </div>
                    <h4 className="text-[16px] font-black text-white mb-2">{item.title}</h4>
                    <p className="text-[12px] text-white/30 font-medium leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT FLOATING INTELLIGENCE PANELS */}
          <div className="lg:col-span-6 relative flex flex-col items-end gap-6 pt-12">
            {floatingCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  opacity: { duration: 0.8, delay: 0.4 + i * 0.1 },
                  x: { duration: 0.8, delay: 0.4 + i * 0.1 },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }
                }}
                className="w-full max-w-[340px] glass-panel p-6 border-white/10 shadow-2xl relative group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-dark border border-white/10 flex items-center justify-center shrink-0">
                    <card.icon className="w-5 h-5 text-brand-gold/60" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/40">{card.type}</span>
                      {card.status && (
                        <span className="text-[8px] font-black px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                          {card.status}
                        </span>
                      )}
                    </div>
                    <p className="text-[13px] text-white/80 font-medium leading-snug">{card.content}</p>
                  </div>
                </div>
                
                {/* Subtle gold accent line */}
                <div className="absolute top-0 right-0 w-1 h-0 bg-brand-gold group-hover:h-full transition-all duration-500 rounded-r" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Atmospheric elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-brand-gold/10 to-transparent z-10" />
    </section>
  );
}
