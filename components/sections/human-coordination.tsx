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
    <section className="py-32 bg-[#050816] relative overflow-hidden border-b border-white/5">
      
      {/* 1. CINEMATIC ATMOSPHERE BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,185,66,0.05)_0%,transparent_100%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="container-custom max-w-[1240px] px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT SIDE: COORDINATION NARRATIVE (40%) */}
          <div className="lg:col-span-5 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_#f5b82e]" />
                <span className="text-brand-gold/80 tracking-[0.4em] uppercase text-[10px] font-black">
                  Human Coordination Layer
                </span>
              </div>

              <h2 className="text-[32px] md:text-[46px] font-bold text-white mb-6 leading-[1.05] tracking-tighter">
                Orchestrate the <br />
                <span className="text-brand-gold italic font-serif">human complexity</span> of delivery.
              </h2>

              <p className="text-[15px] text-white/40 mb-10 leading-relaxed font-medium">
                Moving from fragmented tools to one unified system for trainers, administrators, and stakeholders. Real-time participant tracking and institutional oversight.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <div key={i} className="group p-5 rounded-2xl bg-white/[0.02] border border-white/5 transition-all duration-500 hover:bg-white/[0.05] hover:border-brand-gold/30">
                    <div className="w-8 h-8 rounded-lg bg-brand-gold/5 border border-brand-gold/10 flex items-center justify-center mb-4 group-hover:bg-brand-gold/10 group-hover:border-brand-gold/30 transition-all">
                       <feature.icon className="w-4 h-4 text-brand-gold/60 group-hover:text-brand-gold transition-colors" />
                    </div>
                    <h4 className="text-[14px] font-bold text-white mb-1 tracking-tight">{feature.title}</h4>
                    <p className="text-[11px] text-white/20 leading-snug group-hover:text-white/40 transition-colors">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: COORDINATION ORCHESTRATOR HUD (60%) */}
          <div className="lg:col-span-7 relative">
             <motion.div
               initial={{ opacity: 0, scale: 0.98 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
               className="relative w-full aspect-[1.1] rounded-[48px] bg-[#0b1220]/40 backdrop-blur-3xl border border-white/10 overflow-hidden shadow-[0_80px_160px_rgba(0,0,0,0.8)]"
             >
                {/* HUD Header */}
                <div className="px-8 py-5 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                         <MessageSquare className="w-5 h-5 text-brand-gold" />
                      </div>
                      <div>
                         <h4 className="font-bold text-white text-[14px] tracking-tight uppercase tracking-[0.1em]">Coordination Hub</h4>
                         <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">Global Sync :: EMEA_A</span>
                      </div>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                         <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                         <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Live Sync</span>
                      </div>
                   </div>
                </div>

                {/* ACTIVITY LOG & HUD CONTENT */}
                <div className="absolute inset-0 pt-[74px] p-10 flex flex-col gap-6">
                   <div className="grid grid-cols-12 gap-6 h-full">
                      {/* Left: Intelligence Status */}
                      <div className="col-span-4 space-y-6">
                         <div className="p-6 rounded-3xl bg-[#080B14] border border-white/5 space-y-4">
                            <div className="flex items-center gap-2">
                               <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                               <span className="text-[8px] font-black text-brand-gold uppercase tracking-widest">AI INSIGHT</span>
                            </div>
                            <p className="text-[11px] text-white/60 leading-relaxed font-medium">
                               Engagement drift detected in EMEA-B. Recommendation: Trigger breakout sync.
                            </p>
                            <div className="pt-4 border-t border-white/5">
                               <div className="text-[18px] font-bold text-white tracking-tighter">94%</div>
                               <div className="text-[8px] font-black text-white/20 uppercase tracking-widest">Coordination Score</div>
                            </div>
                         </div>
                         <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center">
                            <Users className="w-8 h-8 text-white/10 mb-4" />
                            <div className="text-[20px] font-bold text-white tracking-tighter">1,240</div>
                            <div className="text-[8px] font-black text-white/20 uppercase tracking-widest mt-1">Synced Participants</div>
                         </div>
                      </div>

                      {/* Right: Live Activity Stream */}
                      <div className="col-span-8 space-y-4 overflow-hidden relative">
                         {floatingCards.map((card, i) => (
                           <motion.div
                             key={i}
                             initial={{ opacity: 0, x: 20 }}
                             animate={{ opacity: 1, x: 0 }}
                             transition={{ delay: 0.2 + i * 0.1 }}
                             className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-4 group/card hover:bg-white/[0.06] transition-all"
                           >
                              <div className={cn(
                                "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border",
                                card.color === "brand-gold" ? "bg-brand-gold/10 border-brand-gold/20" : "bg-emerald-500/10 border-emerald-500/20"
                              )}>
                                 <card.icon className={cn(
                                   "w-4 h-4",
                                   card.color === "brand-gold" ? "text-brand-gold" : "text-emerald-500"
                                 )} />
                              </div>
                              <div className="flex-1 space-y-1">
                                 <div className="flex justify-between items-center">
                                    <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">{card.type}</span>
                                    <span className="text-[8px] font-black text-white/10">02m AGO</span>
                                 </div>
                                 <p className="text-[13px] font-bold text-white/80 group-hover:text-white transition-colors">{card.msg}</p>
                              </div>
                           </motion.div>
                         ))}
                         {/* FADE OVERLAY */}
                         <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b1220] to-transparent pointer-events-none" />
                      </div>
                   </div>
                </div>

                {/* HUD Footer Strip */}
                <div className="absolute bottom-0 inset-x-0 px-8 py-4 border-t border-white/5 bg-black/40 flex items-center justify-between">
                   <div className="flex items-center gap-6">
                      <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">Coordination Integrity</span>
                      <div className="flex gap-1">
                         {Array.from({ length: 12 }).map((_, i) => (
                           <div key={i} className={cn("w-2 h-2 rounded-[1px]", i < 10 ? "bg-emerald-500/60 shadow-[0_0_5px_rgba(16,185,129,0.4)]" : "bg-white/5")} />
                         ))}
                      </div>
                   </div>
                   <div className="text-[9px] font-black text-white/40 uppercase tracking-widest">Protocol Version 4.0.2</div>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

