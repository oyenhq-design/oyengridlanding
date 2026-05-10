"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Shield, Activity, Globe, Users, Database, Workflow, Sparkles, MessageSquare, Check, Cpu, Layers, Zap, BarChart3 } from "lucide-react";
import { DashboardMockup } from "./dashboard-mockup";

export function HeroInstitutional() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#05070B]">
      
      {/* 1. MASTER BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg-institutional.png" 
          alt="Institutional Operations Environment" 
          fill 
          priority
          className="object-cover object-center no-repeat opacity-60"
        />
        
        {/* 2. CINEMATIC OVERLAYS & BLENDING */}
        <div className="absolute inset-0 bg-[#05070B]/40 backdrop-blur-[2px]" /> {/* Dark Navy/Black Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070B] via-[#05070B]/60 to-transparent" /> {/* Left-side readability gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,185,66,0.05),transparent_70%)]" /> {/* Warm cinematic glow */}
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" /> {/* Edge Vignette */}
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-10">
              <Shield className="w-3.5 h-3.5 text-brand-gold" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold">Enterprise Programme Operating System</span>
            </div>

            <h1 className="mb-10">
              Run structured programmes with complete <span className="text-gold-highlight">operational clarity</span> at scale.
            </h1>

            <p className="text-editorial mb-14 max-w-xl text-[19px] leading-relaxed">
              OYEN GRID helps organisations coordinate programmes, participants, communication, attendance, training and operational intelligence from one unified infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-8 mb-16">
              <button className="btn-cinematic-gold w-full sm:w-auto">
                Start Building
              </button>
              <button className="flex items-center gap-3 text-[13px] font-black text-white/30 hover:text-white transition-colors group uppercase tracking-[0.25em]">
                Talk to Architects <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            <div className="pt-10 border-t border-white/5">
               <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-8 block">Operational Trust Protocol:</span>
               <div className="flex flex-wrap gap-12 items-center opacity-25 grayscale brightness-150">
                  <span className="font-black italic text-[20px]">ALTSCHOOL</span>
                  <span className="font-black italic text-[18px]">INGRESSIVE</span>
                  <span className="font-black italic text-[19px]">TALENTQL</span>
                  <span className="font-black italic text-[17px]">TECHSTARS</span>
               </div>
            </div>
          </motion.div>

          {/* RIGHT: Layered Cinematic Visual (Blended into environment) */}
          <div className="relative lg:h-[800px] flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 60 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="relative w-full aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_120px_rgba(0,0,0,0.6)] group"
            >
               {/* Environment Blending for Cards */}
               <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-transparent opacity-40 z-10" />
               
               {/* Floating UI Panel - Now with stronger blending */}
               <motion.div 
                 animate={{ y: [0, -15, 0] }}
                 transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-20 -left-12 w-[320px] z-20 opacity-90 hover:opacity-100 transition-opacity"
               >
                 <DashboardMockup small />
               </motion.div>

               {/* Activity Overlay - Blended into bottom */}
               <div className="absolute bottom-12 left-12 right-12 z-20 space-y-4 bg-[#05070B]/20 backdrop-blur-md p-6 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_15px_#F5B942]" />
                     <span className="text-[10px] font-black tracking-[0.4em] text-white/60">LIVE PROGRAMME DELIVERY</span>
                  </div>
                  <div className="h-px w-full bg-white/10" />
                  <div className="flex justify-between items-center">
                     <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em]">Global Sync Active</span>
                     <span className="text-[9px] font-mono text-brand-gold">142 NODES ONLINE</span>
                  </div>
               </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export function PlatformOverview() {
  const capabilities = [
    { title: "Programme Infrastructure", desc: "Centralize multi-track delivery with total structural visibility.", icon: Database },
    { title: "Session Coordination", desc: "Automate scheduling, trainer allocation, and session intelligence.", icon: Workflow },
    { title: "Participant Management", desc: "Monitor complex learner networks with live telemetry and progress indicators.", icon: Users },
    { title: "Communication Systems", desc: "Session chat and persistent group intelligence for operational flow.", icon: MessageSquare },
    { title: "Attendance & Tracking", desc: "Real-time attendance protocols and automated participation records.", icon: Activity },
    { title: "Operational Visibility", desc: "Executive dashboards showing programme health across the enterprise.", icon: Globe },
    { title: "AI Assistance", desc: "Autonomous session summaries and trainer support protocols.", icon: Sparkles }
  ];

  return (
    <section className="section-gap bg-[#0B1020]/20 relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* LEFT: Large Cinematic Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative h-[800px] rounded-[40px] overflow-hidden border border-white/10 group shadow-2xl"
          >
             <Image 
               src="/facilitator_leading_programme_v2_1778347177362.png" 
               alt="Facilitator Leading Programme" 
               fill 
               className="object-cover image-cinematic transition-transform duration-1000 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-[#05070B] via-transparent to-transparent opacity-80" />
             <div className="absolute bottom-12 left-12 right-12">
                <h3 className="text-[28px] font-black text-white leading-tight">Human-centered coordination <br />at institutional scale.</h3>
             </div>
          </motion.div>

          {/* RIGHT: Capability Rows */}
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold">Operational Foundation</span>
            <h2 className="mt-4 mb-10">Built for organisations coordinating <span className="text-gold-highlight">structured delivery.</span></h2>
            <p className="text-editorial mb-12">OYEN GRID provides the infrastructure required to manage programmes, participants, sessions, communication and operational continuity at institutional scale.</p>
            
            <div className="space-y-2">
               {capabilities.map((item, i) => (
                 <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="capability-row"
                 >
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-center shrink-0 group-hover:border-brand-gold/40 transition-all">
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

export function OperationalControlCenter() {
  const workflow = [
    { label: "Setup", icon: Database },
    { label: "Participants", icon: Users },
    { label: "Sessions", icon: Cpu },
    { label: "Tracking", icon: BarChart3 },
    { label: "AI Notes", icon: Sparkles },
    { label: "Reporting", icon: Workflow }
  ];

  return (
    <section className="section-gap">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-24">
          
          {/* LEFT: Massive Immersive Visual */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative h-[700px] rounded-[40px] overflow-hidden border border-white/10 group shadow-2xl"
          >
             <Image 
               src="/dashboard_facilitator_workspace_v2_1778347198999.png" 
               alt="Operational Dashboard in Environment" 
               fill 
               className="object-cover image-cinematic transition-transform duration-1000 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-[#05070B] via-transparent to-transparent opacity-60" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg">
                <DashboardMockup small />
             </div>
          </motion.div>

          {/* RIGHT: Content */}
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold">Master Orchestration</span>
            <h2 className="mt-4 mb-10 leading-[1] tracking-[-0.06em]">Orchestrate programme operations with <span className="text-gold-highlight">institutional precision.</span></h2>
            <p className="text-editorial mb-12">OYEN GRID is the unified layer connecting coordination, delivery, and intelligence. Every programme is treated as a mission-critical pipeline monitored with high-fidelity telemetry.</p>
            
            <div className="space-y-6">
               {[
                 "Structured programme delivery architecture",
                 "Multi-programme management at global scale",
                 "Total attendance & participation visibility",
                 "Persistent communication & engagement continuity",
                 "Autonomous AI operational intelligence"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_12px_#F5B942] group-hover:scale-150 transition-transform" />
                    <span className="text-[15px] font-bold text-white/60 group-hover:text-white transition-colors">{item}</span>
                 </div>
               ))}
            </div>

            <button className="mt-12 btn-cinematic-gold h-[52px] px-10 text-[12px]">
               Initialize Platform
            </button>
          </div>
        </div>

        {/* INTEGRATED LIFECYCLE FLOW */}
        <div className="pt-24 border-t border-white/5">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12">
            {workflow.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-6 group-hover:border-brand-gold/40 transition-all relative">
                   <step.icon className="w-6 h-6 text-white/20 group-hover:text-brand-gold transition-colors" />
                   {i < 5 && (
                     <div className="absolute top-1/2 -right-6 w-12 h-px bg-white/5 hidden md:block" />
                   )}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/30 group-hover:text-white transition-colors">{step.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
