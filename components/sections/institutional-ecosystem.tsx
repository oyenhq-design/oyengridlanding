"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Shield, Activity, Globe, Users, Database, Workflow, Sparkles, MessageSquare, Cpu, BarChart3, ChevronRight } from "lucide-react";
import { DashboardMockup } from "./dashboard-mockup";

export function HeroInstitutional() {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-20 pb-12 overflow-hidden bg-brand-dark">
      
      {/* 1. MASTER BACKGROUND IMAGE LAYER (Crisp & Clear) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg-institutional.png" 
          alt="Institutional Operations Environment" 
          fill 
          priority
          className="object-cover object-center no-repeat brightness-[0.9] contrast-[1.05]"
        />
        
        {/* 2. REFINED CINEMATIC OVERLAYS (Light Touch) */}
        {/* A single gradient for text readability without hiding the scene */}
        <div className="absolute inset-0 bg-linear-to-r from-brand-dark via-brand-dark/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-brand-dark/20 via-transparent to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20"
          >
            <div className="inline-flex items-center gap-3.5 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-8 backdrop-blur-md">
              <Shield className="w-3.5 h-3.5 text-brand-gold" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-gold">Enterprise Programme Operating System</span>
            </div>

            <h1 className="mb-6 max-w-135">
              Run structured <br />
              programmes with <br />
              <span className="text-gold-highlight">operational clarity.</span>
            </h1>

            <p className="text-editorial mb-10 max-w-xl">
              OYEN GRID helps organisations coordinate programmes, participants, and intelligence from one unified institutional infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
              <button className="btn-cinematic-gold w-full sm:w-auto h-13.5">
                Initialize Infrastructure
              </button>
              <button className="flex items-center gap-4 text-[13px] font-black text-white/40 hover:text-white transition-colors group uppercase tracking-[0.3em]">
                Talk to Architects <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            <div className="pt-8 border-t border-white/5">
               <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em] mb-6 block">Institutional Trust Protocol:</span>
               <div className="flex flex-wrap gap-12 items-center opacity-30 grayscale brightness-200">
                  <span className="font-black italic text-[20px] tracking-tighter">ALTSCHOOL</span>
                  <span className="font-black italic text-[18px] tracking-tighter">INGRESSIVE</span>
                  <span className="font-black italic text-[19px] tracking-tighter">TALENTQL</span>
                  <span className="font-black italic text-[17px] tracking-tighter">TECHSTARS</span>
               </div>
            </div>
          </motion.div>

          {/* RIGHT: Product Dashboard (Focal Point #3) */}
          <div className="relative lg:h-150 flex items-center justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 60 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="relative w-full z-20"
            >
               {/* Clean Primary Dashboard Mockup */}
               <motion.div 
                 animate={{ y: [0, -15, 0] }}
                 transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                 className="w-full max-w-[540px] ml-auto"
               >
                 <DashboardMockup />
               </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export function PlatformOverview() {
  // Enterprise-grade core capabilities
  const capabilities = [
    { title: "Programme Governance", desc: "Centralized control and oversight for all programme operations, ensuring compliance and delivery integrity.", icon: Database },
    { title: "Structured Participant Control", desc: "Comprehensive participant management with real-time attendance, engagement, and cohort tracking.", icon: Users },
    { title: "Delivery Coordination", desc: "Orchestrate live sessions, scheduling, and resource allocation across distributed teams.", icon: Workflow },
    { title: "Real-Time Operational Visibility", desc: "Live dashboards for monitoring metrics, session activity, and operational throughput.", icon: Globe }
  ];

  return (
    <section className="section-gap relative bg-brand-dark border-t border-white/5">
      {/* Subtle background atmosphere */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-brand-gold/10 to-transparent" />
      <div className="absolute top-1/4 -right-64 w-[800px] h-[800px] bg-brand-gold/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT: Realistic Operational Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex justify-center items-center"
          >
            <div className="w-full relative glass-panel p-2 border-white/5">
               <div className="relative aspect-video rounded-xl overflow-hidden bg-[#0A0D14]">
                  <DashboardMockup />
               </div>
               
               {/* Detail Overlay: Activity Monitor */}
               <div className="absolute -bottom-6 -right-6 glass-panel p-5 border-brand-gold/20 max-w-[240px] shadow-2xl">
                  <div className="flex items-center gap-3 mb-3">
                     <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Active Coordination</span>
                  </div>
                  <div className="space-y-2">
                     <div className="h-1 w-full bg-white/5 rounded-full" />
                     <div className="h-1 w-[85%] bg-white/5 rounded-full" />
                     <div className="h-1 w-[60%] bg-white/5 rounded-full" />
                  </div>
               </div>
            </div>
          </motion.div>

          {/* RIGHT: Enterprise Capabilities */}
          <div className="flex flex-col justify-center">
            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-brand-gold mb-6 block opacity-70">Infrastructure Layer</span>
            <h2 className="mb-8 leading-tight">
              The operating system for <br />
              programme delivery at scale.
            </h2>
            <div className="space-y-6">
              {capabilities.map((item, i) => (
                <div key={i} className="flex items-start gap-5 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/5 flex items-center justify-center shrink-0 group-hover:border-brand-gold/30 transition-all">
                    <item.icon className="w-5 h-5 text-brand-gold/40 group-hover:text-brand-gold transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-[18px] font-black text-white mb-1.5 leading-tight">{item.title}</h4>
                    <p className="text-[14px] leading-relaxed text-white/30 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex items-center gap-8 pt-8 border-t border-white/5">
               <button className="btn-cinematic-gold h-12 px-8 text-[12px] font-bold">
                 Initialize Infrastructure
               </button>
               <button className="text-[12px] font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors">
                 Talk to Architects
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export function OperationalControlCenter() {
  const lifecycle = [
    { label: "Plan", desc: "Strategic architecture and programme setup.", icon: Database },
    { label: "Coordinate", desc: "Resource allocation and participant sync.", icon: Users },
    { label: "Deliver", desc: "Live session execution and orchestration.", icon: Cpu },
    { label: "Monitor", desc: "Real-time telemetry and health tracking.", icon: Activity },
    { label: "Analyze", desc: "Data aggregation and performance reporting.", icon: BarChart3 },
    { label: "Scale", desc: "Multi-cohort expansion and global sync.", icon: Globe }
  ];

  return (
    <section className="section-gap relative bg-[#05070B] overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(245,185,66,0.03),transparent_60%)]" />

      <div className="container-custom relative z-10">
        
        {/* HEADER: Enterprise Operational Focus */}
        <div className="max-w-3xl mb-24">
           <span className="text-[11px] font-black uppercase tracking-[0.5em] text-brand-gold mb-6 block opacity-50">Operational Orchestration</span>
           <h2 className="mb-8 leading-tight">Master the lifecycle of <br />global programme delivery.</h2>
           <p className="text-editorial text-[18px] max-w-2xl">One unified environment for strategic oversight, mission-critical coordination, and high-fidelity operational reporting at institutional scale.</p>
        </div>

        {/* STRUCTURED LIFECYCLE FLOW: Clean Enterprise Diagram */}
        <div className="mb-24 relative p-12 glass-panel border-white/5">
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-6 gap-8 relative z-10">
              {lifecycle.map((step, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                    <div className="w-16 h-16 rounded-2xl bg-brand-dark border border-white/5 flex items-center justify-center mb-6 group-hover:border-brand-gold/40 transition-all shadow-xl relative z-10">
                     <step.icon className="w-6 h-6 text-white/20 group-hover:text-brand-gold transition-colors" />
                  </div>
                  <span className="text-[12px] font-black uppercase tracking-widest text-white mb-2">{step.label}</span>
                  <p className="text-[10px] text-white/20 font-bold uppercase tracking-tighter leading-tight max-w-[100px]">{step.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-20 items-start">
          
          {/* LEFT: Operational Workspace Visual (Span 7) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="lg:col-span-7 relative h-[500px] rounded-[40px] overflow-hidden border border-white/10 group shadow-2xl bg-[#0A0D14]"
          >
             <div className="absolute inset-0 opacity-20 bg-[url('/grid.png')] pointer-events-none" />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
             
             {/* Integrated Dashboard Mockup */}
             <div className="absolute inset-10">
                <DashboardMockup />
             </div>

             <div className="absolute bottom-8 left-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                   {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-dark bg-white/5 overflow-hidden">
                        <Image src={`/exec-avatar-${i}.png`} alt="Facilitator" width={32} height={32} className="opacity-40 grayscale" />
                     </div>
                   ))}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/30">12 Global Facilitators Online</span>
             </div>
          </motion.div>

          {/* RIGHT: Governance & Control (Span 5) */}
          <div className="lg:col-span-5 space-y-12">
             <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                <h3 className="mb-6 leading-tight">Total Visibility. <br />Absolute Control.</h3>
                <p className="text-[15px] leading-relaxed text-white/40 font-medium mb-8">Deploy multi-track programmes with high-fidelity telemetry, monitoring complex participant networks through a unified institutional layer.</p>
                
                <div className="space-y-2">
                   {[
                     { label: "Programme Health Tracking", val: "Institutional" },
                     { label: "Global Node Syncing", val: "Active" },
                     { label: "Operational Integrity", val: "Verified" }
                   ].map((item, i) => (
                     <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0 group">
                        <span className="text-[11px] font-bold text-white/40 group-hover:text-white transition-colors uppercase tracking-widest">{item.label}</span>
                        <div className="flex items-center gap-3">
                           <div className="w-1 h-1 rounded-full bg-brand-gold shadow-[0_0_8px_#F5B942]" />
                           <span className="text-[11px] font-black text-brand-gold uppercase tracking-widest">{item.val}</span>
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             <button className="btn-cinematic-gold h-12 w-full text-[12px] font-bold">
                Initialize Infrastructure
             </button>
          </div>
        </div>

      </div>
    </section>
  );
}
