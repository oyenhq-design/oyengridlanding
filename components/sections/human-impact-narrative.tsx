"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, Network, Users, BarChart3, Database, Workflow, Shield, Activity, Sparkles, MessageSquare } from "lucide-react";
import { DashboardMockup } from "./dashboard-mockup";

export function OperationsUseCases() {
  const capabilities = [
    { title: "Programme Infrastructure", desc: "Centralize multi-track delivery with total structural visibility.", icon: Database },
    { title: "Participant Coordination", desc: "Monitor complex learner networks with live telemetry and progress indicators.", icon: Users },
    { title: "Session Delivery", desc: "Automate tracking, attendance, and persistent trainer engagement.", icon: Workflow },
    { title: "Communication Systems", desc: "Session chat and persistent group intelligence for operational flow.", icon: MessageSquare },
    { title: "Attendance Tracking", icon: Activity, desc: "Real-time attendance protocols and automated participation records." },
    { title: "AI Operational Support", icon: Sparkles, desc: "Autonomous session summaries and trainer assistance at scale." }
  ];

  return (
    <section className="section-gap bg-[#0B1020]/20 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* LEFT: Large Cinematic Institutional Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative h-[700px] rounded-3xl overflow-hidden border border-white/10 group"
          >
             <Image 
               src="/workshop_training_human_impact_1778345743044.png" 
               alt="Institutional Workshop Environment" 
               fill 
               className="object-cover image-cinematic transition-transform duration-1000 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-transparent opacity-80" />
             
             {/* Caption Overlay */}
             <div className="absolute bottom-10 left-10 right-10">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Operational Session // Live</span>
                </div>
                <h3 className="text-[24px] font-bold text-white leading-tight">Serious infrastructure designed around real human progress.</h3>
             </div>
          </motion.div>

          {/* RIGHT: Capabilities */}
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold">Organisational Structure</span>
            <h2 className="mt-4 mb-8">Built for organisations coordinating <span className="text-gold-highlight">structured delivery.</span></h2>
            <p className="text-editorial mb-12">From bootcamps to institutional programmes, OYEN GRID provides the operational structure required to coordinate people, sessions, and progress at scale.</p>
            
            <div className="space-y-2">
               {capabilities.map((item, i) => (
                 <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-6 py-6 border-b border-white/5 group last:border-0"
                 >
                    <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center shrink-0 group-hover:border-brand-gold/30 transition-colors">
                       <item.icon className="w-5 h-5 text-white/20 group-hover:text-brand-gold transition-colors" />
                    </div>
                    <div>
                       <h4 className="text-[16px] font-bold text-white mb-1 group-hover:text-brand-gold transition-colors">{item.title}</h4>
                       <p className="text-[13px] leading-relaxed text-white/40">{item.desc}</p>
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export function PlatformOrchestration() {
  return (
    <section className="section-gap">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* LEFT: Integrated Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative h-[600px] rounded-3xl overflow-hidden border border-white/10 group shadow-2xl"
          >
             <Image 
               src="/orchestration_dashboard_environment_1778345766429.png" 
               alt="Orchestration Environment" 
               fill 
               className="object-cover image-cinematic transition-transform duration-1000 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-[#05070B] via-transparent to-transparent opacity-60" />
             
             {/* Floating UI Elements for depth */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
                <DashboardMockup small />
             </div>
          </motion.div>

          {/* RIGHT: Content */}
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold">Platform Orchestration</span>
            <h2 className="mt-4 mb-8">Orchestrate programme operations with <span className="text-gold-highlight">institutional precision.</span></h2>
            <p className="text-editorial mb-12">OYEN GRID provides a unified operational layer that connects coordination, delivery, and intelligence. Every programme is a structured pipeline monitored in real-time.</p>
            
            <div className="space-y-6">
               {[
                 "Multi-programme coordination at scale",
                 "Structured delivery workflows",
                 "Live session monitoring & engagement",
                 "Centralized participant visibility",
                 "AI-driven operational summaries"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold group-hover:scale-150 transition-transform shadow-[0_0_10px_#F5B942]" />
                    <span className="text-[15px] font-bold text-white/60 group-hover:text-white transition-colors">{item}</span>
                 </div>
               ))}
            </div>

            <button className="mt-12 btn-cinematic-gold h-[48px] px-8 text-[12px]">
               Initialize Platform
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
