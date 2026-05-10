"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Shield, Activity, Globe, Users, Database, Workflow, Sparkles, MessageSquare, Cpu, BarChart3, ChevronRight } from "lucide-react";
import { DashboardMockup } from "./dashboard-mockup";

export function HeroInstitutional() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#05070B]">
      
      {/* 1. MASTER BACKGROUND IMAGE LAYER (Crisp & Clear) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg-institutional.png" 
          alt="Institutional Operations Environment" 
          fill 
          priority
          className="object-cover object-center no-repeat opacity-85 brightness-[1.05] contrast-[1.05]"
        />
        
        {/* 2. REFINED CINEMATIC OVERLAYS (Light Touch) */}
        <div className="absolute inset-0 bg-[#05070B]/25" /> {/* Very subtle dark wash */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070B]/80 via-[#05070B]/20 to-transparent" /> {/* Left-side readability gradient */}
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" /> {/* Slight Edge Vignette */}
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
    { title: "Communication Systems", desc: "Session chat and persistent group intelligence for operational flow.", icon: MessageSquare }
  ];

  return (
    <section className="section-gap relative overflow-hidden bg-[#05070B]">
      {/* Atmospheric Transitions */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/[0.02] blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          
          {/* LEFT: Large Cinematic Operational Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative h-[850px] rounded-[48px] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.4)] group"
          >
             <Image 
               src="/facilitators_coordinating_ops_v3_1778383275944.png" 
               alt="Facilitators Coordinating Programmes" 
               fill 
               className="object-cover image-cinematic transition-transform duration-1000 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-transparent opacity-90" />
             
             {/* Floating UI Overlays */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-12 left-12 p-6 glass-panel border-brand-gold/20 shadow-[0_0_40px_rgba(245,185,66,0.1)] max-w-[240px]"
             >
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold">Programme Status</span>
                </div>
                <div className="text-[20px] font-bold text-white mb-1">94% Capacity</div>
                <p className="text-[11px] text-white/40 leading-relaxed">System-wide session utilization across all active tracks.</p>
             </motion.div>

             <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                <div>
                   <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.4em] mb-4 block">Institutional Coordination</span>
                   <h3 className="text-[32px] font-black text-white leading-tight max-w-sm">Strategic oversight of global programme delivery.</h3>
                </div>
             </div>
          </motion.div>

          {/* RIGHT: Content Hierarchy */}
          <div className="py-12">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-gold/60 mb-6 block">Structural Foundation</span>
            <h2 className="text-[44px] md:text-[64px] font-black tracking-[-0.06em] leading-[0.95] mb-12">Built for serious <br /><span className="text-gold-highlight">institutional delivery.</span></h2>
            <p className="text-editorial text-[20px] leading-relaxed mb-16 opacity-80">OYEN GRID is the infrastructure behind multi-track programmes, coordinating teams, training, and intelligence through one unified system.</p>
            
            <div className="space-y-4">
               {capabilities.map((item, i) => (
                 <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="capability-row border-white/5 py-10"
                 >
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/5 flex items-center justify-center shrink-0 group-hover:border-brand-gold/40 transition-all shadow-xl">
                       <item.icon className="w-6 h-6 text-white/20 group-hover:text-brand-gold transition-colors" />
                    </div>
                    <div>
                       <h4 className="text-[18px] font-black text-white mb-2 group-hover:text-brand-gold transition-colors">{item.title}</h4>
                       <p className="text-[14px] leading-relaxed text-white/40 max-w-sm">{item.desc}</p>
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
    { label: "Intelligence", icon: Sparkles },
    { label: "Reporting", icon: Workflow }
  ];

  return (
    <section className="section-gap relative bg-[#05070B]">
      {/* Immersive Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(245,185,66,0.03),transparent_60%)]" />

      <div className="container-custom relative z-10">
        
        {/* HEADER: Premium Editorial */}
        <div className="max-w-3xl mb-32">
           <span className="text-[10px] font-black uppercase tracking-[0.6em] text-brand-gold mb-8 block">Operational Orchestration</span>
           <h2 className="mb-12 leading-[0.95]">Master the lifecycle of <br /><span className="text-gold-highlight">global programme delivery.</span></h2>
           <p className="text-editorial text-[22px] max-w-2xl">One unified environment for strategic oversight, mission-critical coordination, and high-fidelity operational reporting.</p>
        </div>

        {/* INTEGRATED LIFECYCLE FLOW: Elegant Horizontal Line */}
        <div className="mb-32 relative py-12 px-8 glass-panel border-white/5">
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
                  <div className="w-20 h-20 rounded-[24px] bg-[#05070B] border border-white/5 flex items-center justify-center mb-6 group-hover:border-brand-gold/40 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.6)] relative z-10">
                     <step.icon className="w-7 h-7 text-white/20 group-hover:text-brand-gold transition-colors" />
                     {i < 5 && (
                        <div className="absolute top-1/2 -right-8 w-8 h-px bg-brand-gold/20 hidden md:block" />
                     )}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 group-hover:text-white transition-colors">{step.label}</span>
                </motion.div>
              ))}
           </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-24 items-start">
          
          {/* LEFT: Realistic Operational Workspace (Span 7) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="lg:col-span-7 relative h-[700px] rounded-[48px] overflow-hidden border border-white/10 group shadow-[0_60px_120px_rgba(0,0,0,0.6)]"
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
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-[#05070B] overflow-hidden bg-brand-dark/80">
                        <Image src={`/exec-avatar-${i}.png`} alt="Team member" width={40} height={40} className="opacity-60 grayscale" />
                     </div>
                   ))}
                </div>
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-white/40">12 Global Facilitators Online</span>
             </div>
          </motion.div>

          {/* RIGHT: Refined Editorial Content (Span 5) */}
          <div className="lg:col-span-5 space-y-20 pt-12">
             <div>
                <h3 className="text-[36px] font-black text-white mb-8 leading-tight tracking-[-0.04em]">Total Visibility. <br /><span className="text-gold-highlight">Absolute Control.</span></h3>
                <p className="text-[17px] leading-relaxed text-white/40 font-medium mb-12">Deploy multi-track programmes with high-fidelity telemetry, monitoring complex participant networks through a unified institutional layer.</p>
                
                <div className="space-y-6">
                   {[
                     { label: "Programme Health Tracking", val: "Institutional" },
                     { label: "Global Node Syncing", val: "Active" },
                     { label: "Operational Integrity", val: "Verified" }
                   ].map((item, i) => (
                     <div key={i} className="flex justify-between items-center py-5 border-b border-white/5 group">
                        <span className="text-[13px] font-bold text-white/40 group-hover:text-white transition-colors uppercase tracking-widest">{item.label}</span>
                        <div className="flex items-center gap-3">
                           <div className="w-1 h-1 rounded-full bg-brand-gold shadow-[0_0_8px_#F5B942]" />
                           <span className="text-[11px] font-black text-brand-gold uppercase tracking-[0.2em]">{item.val}</span>
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             <button className="btn-cinematic-gold h-[60px] w-full text-[14px]">
                Initialize Control Center
             </button>
          </div>
        </div>

      </div>
    </section>
  );
}
