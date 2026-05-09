"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Cpu, Layers, MessageSquare, Zap, BarChart3, Database } from "lucide-react";

export function WorkflowSection() {
  const steps = [
    { title: "Organisation Setup", icon: Database },
    { title: "Programme Structuring", icon: Layers },
    { title: "Participant Assignment", icon: Zap },
    { title: "Session Delivery", icon: Cpu },
    { title: "Attendance & Tracking", icon: BarChart3 },
    { title: "AI Summaries & Notes", icon: MessageSquare },
    { title: "Operational Reporting", icon: BarChart3 }
  ];

  return (
    <section className="section-gap bg-[#05070B] border-y border-white/5 relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-24">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold">Delivery Lifecycle</span>
          <h2 className="mt-4">The architectural flow of <span className="text-gold-highlight">structured operations.</span></h2>
        </div>

        <div className="relative">
          {/* Connection Lines (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent hidden lg:block -translate-y-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center group text-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#0E1424] border border-white/5 flex items-center justify-center mb-6 group-hover:border-brand-gold/40 transition-all duration-500 shadow-2xl relative">
                   <div className="absolute inset-0 bg-brand-gold/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                   <step.icon className="w-7 h-7 text-white/30 group-hover:text-brand-gold transition-colors" />
                   
                   {/* Step Indicator */}
                   <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#05070B] border border-white/10 flex items-center justify-center text-[10px] font-black text-brand-gold">0{i+1}</div>
                </div>
                <h4 className="text-[12px] font-black uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">{step.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PlatformModules() {
  const modules = [
    {
      id: "M-01",
      tag: "INFRASTRUCTURE",
      title: "Programme Infrastructure",
      desc: "Centralize multi-track delivery with total structural visibility. Enforce organizational continuity through rigid delivery frameworks.",
      img: "/hero_command_dashboard_institutional_1778344757260.png"
    },
    {
      id: "M-02",
      tag: "OPERATIONS",
      title: "Bootcamp Operations",
      desc: "Automated attendance, participant tracking, and persistent trainer engagement. Monitor complex learner networks with live telemetry.",
      img: "/workspace_clarity_operational_1778319166338.png"
    },
    {
      id: "M-03",
      tag: "COMMUNICATION",
      title: "Communication Layer",
      desc: "Session chat and persistent group intelligence. Maintain operational flow through integrated, context-aware messaging channels.",
      img: "/security_ops_center_institutional_1778319192647.png"
    },
    {
      id: "M-04",
      tag: "INTELLIGENCE",
      title: "AI Intelligence Layer",
      desc: "Autonomous session summaries, participant engagement insights, and trainer assistance. Operational intelligence at institutional scale.",
      img: "/hero_dashboard_enterprise_1778319138626.png"
    }
  ];

  return (
    <section className="bg-[#05070B]">
      {modules.map((mod, i) => (
        <div key={i} className="section-gap border-b border-white/5 last:border-0 overflow-hidden">
          <div className="container-custom">
            <div className={`grid lg:grid-cols-2 gap-24 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* CONTENT */}
              <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-4 mb-8">
                   <span className="text-[12px] font-black text-brand-gold tracking-[0.5em]">{mod.id}</span>
                   <div className="h-px w-8 bg-brand-gold/30" />
                   <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">{mod.tag}</span>
                </div>
                <h2 className="mb-8 leading-[1.05] tracking-[-0.06em]">{mod.title}</h2>
                <p className="text-editorial mb-12 max-w-lg">{mod.desc}</p>
                
                <div className="grid grid-cols-2 gap-8 mb-12">
                   <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="h-1 w-12 bg-brand-gold/30 rounded-full mb-3" />
                      <div className="h-1 w-20 bg-white/5 rounded-full" />
                   </div>
                   <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="h-1 w-16 bg-white/10 rounded-full mb-3" />
                      <div className="h-1 w-10 bg-white/5 rounded-full" />
                   </div>
                </div>

                <button className="flex items-center gap-2 text-[13px] font-black uppercase tracking-[0.2em] text-white/30 hover:text-brand-gold transition-colors group">
                   Explore Capability <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>

              {/* VISUAL: Large Dashboard Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: i % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10 group"
              >
                 <Image src={mod.img} alt={mod.title} fill className="object-cover opacity-20 grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-40" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-transparent" />
                 
                 {/* Floating Interface Details */}
                 <div className="absolute top-8 right-8 glass-panel px-4 py-2 border-brand-gold/20">
                    <span className="text-[9px] font-black tracking-widest text-brand-gold">DEPLOYED: NODE_{mod.id}</span>
                 </div>
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
