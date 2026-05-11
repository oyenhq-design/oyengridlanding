"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Shield, Activity, Globe, Users, Database, Workflow, Sparkles, MessageSquare, Cpu, BarChart3, ChevronRight } from "lucide-react";
import { DashboardMockup } from "./dashboard-mockup";

export function HeroInstitutional() {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-20 pb-12 overflow-hidden bg-[#05070B]">
      
      {/* 1. MASTER BACKGROUND IMAGE LAYER (Crisp & Clear) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg-institutional.png" 
          alt="Institutional Operations Environment" 
          fill 
          priority
          className="object-cover object-center no-repeat opacity-90 brightness-[0.8] contrast-[1.1]"
        />
        
        {/* 2. REFINED CINEMATIC OVERLAYS (Light Touch) */}
        <div className="absolute inset-0 bg-[#05070B]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070B] via-[#05070B]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-transparent opacity-95" />
        <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.8)]" />
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

            <h1 className="mb-6 max-w-[540px]">
              Run structured <br />
              programmes with <br />
              <span className="text-gold-highlight">operational clarity.</span>
            </h1>

            <p className="text-editorial mb-10 max-w-xl">
              OYEN GRID helps organisations coordinate programmes, participants, and intelligence from one unified institutional infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
              <button className="btn-cinematic-gold w-full sm:w-auto h-[54px]">
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

          {/* RIGHT: Layered Cinematic Visual (Scaled for presence) */}
          <div className="relative lg:h-[600px] flex items-start pt-12 justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 60 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="relative w-full aspect-[4/3] rounded-[48px] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)] group"
            >
               {/* Environment Blending for Cards */}
               <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-transparent opacity-50 z-10" />
               
               {/* Floating UI Panel - Scaled up */}
               <motion.div 
                 animate={{ y: [0, -15, 0] }}
                 transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-20 -left-12 w-[320px] z-20 opacity-90 hover:opacity-100 transition-opacity"
               >
                 <DashboardMockup small />
               </motion.div>

               {/* Activity Overlay - Scaled and refined */}
               <div className="absolute bottom-12 left-12 right-12 z-20 space-y-4 bg-[#05070B]/30 backdrop-blur-xl p-6 rounded-[24px] border border-white/10">
                  <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_15px_#F5B942]" />
                     <span className="text-[10px] font-black tracking-[0.4em] text-white/60 uppercase">Live Programme Delivery</span>
                  </div>
                  <div className="h-px w-full bg-white/10" />
                  <div className="flex justify-between items-center">
                     <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.3em]">Global Sync Active</span>
                     <span className="text-[9px] font-mono text-brand-gold font-black">142 NODES ONLINE</span>
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
  // Enterprise-grade core capabilities
  const capabilities = [
    { title: "Programme Governance", desc: "Centralized control and oversight for all programme operations, ensuring compliance and delivery integrity.", icon: Database },
    { title: "Structured Participant Control", desc: "Comprehensive participant management with real-time attendance, engagement, and cohort tracking.", icon: Users },
    { title: "Delivery Coordination", desc: "Orchestrate live sessions, scheduling, and resource allocation across distributed teams.", icon: Workflow },
    { title: "Real-Time Operational Visibility", desc: "Live dashboards for monitoring metrics, session activity, and operational throughput.", icon: Globe }
  ];

  return (
    <section className="relative bg-[#05070B] py-[120px] overflow-hidden border-t border-white/5">
      {/* Subtle gold accent and background atmosphere */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent" />
      <div className="absolute top-1/4 -right-64 w-[1200px] h-[1200px] bg-brand-gold/[0.02] blur-[220px] rounded-full pointer-events-none" />

      <div className="container-custom max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* LEFT: Realistic Operational Dashboard Visual */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-[540px]">
              <DashboardMockup />
            </div>
          </div>

          {/* RIGHT: Enterprise Capabilities */}
          <div className="flex flex-col justify-center pt-6">
            <span className="text-[11px] font-black uppercase tracking-[0.6em] text-brand-gold mb-8 block opacity-70">Enterprise Product Overview</span>
            <h2 className="mb-8 text-white text-[38px] md:text-[48px] font-black leading-tight tracking-tight">
              The operating system for <br />
              <span className="text-brand-gold font-bold not-italic">programme delivery at scale.</span>
            </h2>
            <div className="space-y-8 max-w-xl">
              <p className="text-white/80 text-[18px] leading-relaxed font-medium">
                OYEN GRID provides a unified infrastructure for structured delivery, participant management, live sessions, analytics, and operational visibility—trusted by institutions globally.
              </p>
            </div>
            <div className="mt-12 space-y-6">
              {capabilities.map((item, i) => (
                <div key={i} className="flex items-start gap-6 py-6 border-b border-white/10 last:border-b-0">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-brand-gold/80" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[20px] font-black text-white mb-1.5 leading-tight">{item.title}</h4>
                    <p className="text-[15px] leading-relaxed text-white/40 font-medium tracking-tight">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
        }
            <button className="mt-14 btn-cinematic-gold h-[56px] px-12 text-[16px] font-bold group">
              Start Building <ArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
    </section>
  );
}

export function OperationalControlCenter() {
  const workflow = [
    { label: "Setup", icon: Database },
    { label: "Participants", icon: Users },
    { label: "Sessions", icon: Cpu },
    { label: "Tracking", icon: BarChart3 },
    { label: "Intelligence", icon: Sparkles },
    { label: "Reporting", icon: Workflow }
  ];

  return (
    <section className="section-gap relative bg-[#05070B]">
      {/* Immersive Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(245,185,66,0.04),transparent_60%)]" />

      <div className="container-custom relative z-10">
        
        {/* HEADER: Premium Editorial (Scaled Down) */}
        <div className="max-w-3xl mb-32">
           <span className="text-[10px] font-black uppercase tracking-[0.8em] text-brand-gold mb-8 block opacity-50">Operational Orchestration</span>
           <h2 className="mb-12 leading-[0.92]">Master the lifecycle of <br /><span className="text-gold-highlight">global programme delivery.</span></h2>
           <p className="text-editorial text-[22px] max-w-2xl">One unified environment for strategic oversight, mission-critical coordination, and high-fidelity operational reporting at institutional scale.</p>
        </div>

        {/* INTEGRATED LIFECYCLE FLOW: Elegant Horizontal Line (Scaled Down) */}
        <div className="mb-32 relative py-12 px-10 glass-panel border-white/5 overflow-hidden">
           <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2" />
           <div className="grid grid-cols-2 md:grid-cols-6 gap-12 relative z-10">
              {workflow.map((step, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center group text-center"
                >
                  <div className="w-20 h-20 rounded-[28px] bg-[#05070B] border border-white/5 flex items-center justify-center mb-6 group-hover:border-brand-gold/40 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.8)] relative z-10">
                     <step.icon className="w-7 h-7 text-white/20 group-hover:text-brand-gold transition-colors" />
                     {i < 5 && (
                        <div className="absolute top-1/2 -right-8 w-8 h-px bg-brand-gold/20 hidden md:block" />
                     )}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 group-hover:text-white transition-colors">{step.label}</span>
                </motion.div>
              ))}
           </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-24 items-start">
          
          {/* LEFT: Realistic Operational Workspace (Span 7) (Scaled Down) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="lg:col-span-7 relative h-[650px] rounded-[56px] overflow-hidden border border-white/10 group shadow-[0_60px_120px_rgba(0,0,0,0.7)]"
          >
             <Image 
               src="/ops_workspace_oversight_v3_1778383297044.png" 
               alt="Operational Control Center" 
               fill 
               className="object-cover image-cinematic transition-transform duration-1000 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-transparent opacity-80" />
             
             {/* Integrated UI Overlays */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[480px]">
                <DashboardMockup small />
             </div>

             <div className="absolute bottom-12 left-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-[#05070B] overflow-hidden bg-brand-dark/80 shadow-xl">
                        <Image src={`/exec-avatar-${i}.png`} alt="Team member" width={40} height={40} className="opacity-60 grayscale" />
                     </div>
                   ))}
                </div>
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white/30">12 Global Facilitators Online</span>
             </div>
          </motion.div>

          {/* RIGHT: Refined Editorial Content (Span 5) (Scaled Down) */}
          <div className="lg:col-span-5 space-y-20 pt-12">
             <div>
                <h3 className="mb-8 leading-none tracking-[-0.05em]">Total Visibility. <br /><span className="text-gold-highlight">Absolute Control.</span></h3>
                <p className="text-[17px] leading-relaxed text-white/40 font-medium mb-12">Deploy multi-track programmes with high-fidelity telemetry, monitoring complex participant networks through a unified institutional layer.</p>
                
                <div className="space-y-3">
                   {[
                     { label: "Programme Health Tracking", val: "Institutional" },
                     { label: "Global Node Syncing", val: "Active" },
                     { label: "Operational Integrity", val: "Verified" }
                   ].map((item, i) => (
                     <div key={i} className="flex justify-between items-center py-5 border-b border-white/5 group">
                        <span className="text-[13px] font-bold text-white/40 group-hover:text-white transition-colors uppercase tracking-widest">{item.label}</span>
                        <div className="flex items-center gap-3">
                           <div className="w-1 h-1 rounded-full bg-brand-gold shadow-[0_0_8px_#F5B942]" />
                           <span className="text-[11px] font-black text-brand-gold uppercase tracking-[0.3em]">{item.val}</span>
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             <button className="btn-cinematic-gold h-[60px] w-full text-[14px]">
                Initialize Infrastructure
             </button>
          </div>
        </div>

      </div>
    </section>
  );
}
