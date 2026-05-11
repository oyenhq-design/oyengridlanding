"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageSquare, Sparkles, Activity, Lightbulb, ShieldCheck, Zap } from "lucide-react";

export function IntelligenceLayer() {
  const capabilities = [
    { title: "AI Session Summaries", desc: "Generate operational summaries automatically.", icon: Sparkles },
    { title: "Structured Communication", desc: "Organised coordination across every cohort.", icon: MessageSquare },
    { title: "Operational Visibility", desc: "Monitor participation and attendance in real time.", icon: Activity },
    { title: "Intelligent Recommendations", desc: "Receive contextual operational insights.", icon: Lightbulb }
  ];

  return (
    <section className="section-gap relative bg-[#050816] border-b border-white/5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-[72px] items-center">
          
          {/* LEFT: CONTENT AREA */}
          <div>
            <span className="eyebrow">INTELLIGENCE LAYER</span>
            <h2 className="mb-8 max-w-[520px]">
              Human coordination powered by <span className="text-brand-gold">intelligence.</span>
            </h2>

            <p className="text-editorial mb-12 max-w-[520px]">
              OYEN GRID helps organisations coordinate trainers, participants, and programme operations through structured communication and intelligent automation.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {capabilities.map((item, i) => (
                <div key={i} className="card-institutional">
                  <item.icon className="w-6 h-6 text-brand-gold/60 mb-4" />
                  <h4 className="text-[16px] font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-[12px] text-white/30 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: CONTAINED CINEMATIC IMAGE */}
          <div className="flex justify-center lg:justify-end">
             <div className="relative w-full max-w-[560px] h-[420px] rounded-[26px] overflow-hidden border border-white/10 shadow-2xl bg-[#0A0C12]">
                <Image
                  src="/section-2-bg.png"
                  alt="Human Collaboration"
                  fill
                  className="object-cover opacity-40 brightness-[0.8]"
                />
                
                {/* FLOATING INTELLIGENCE PANEL */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 right-8 w-[280px] glass-panel-institutional p-5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-4 h-4 text-brand-gold" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/50">AI Assistant</span>
                  </div>
                  <p className="text-[12px] text-white/80 font-medium">Cohort engagement levels have increased by 18% this week.</p>
                </motion.div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
