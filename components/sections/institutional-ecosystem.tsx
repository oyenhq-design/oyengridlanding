"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Shield, Activity, Globe, Users, Database, Workflow, Sparkles, MessageSquare, Cpu, BarChart3, ChevronRight } from "lucide-react";
import { DashboardMockup } from "./dashboard-mockup";

export function HeroInstitutional() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-[#05070B]">
      
      {/* 1. MASTER BACKGROUND IMAGE LAYER (Crisp & Clear) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg-institutional.png" 
          alt="Institutional Operations Environment" 
          fill 
          priority
          className="object-cover object-center no-repeat opacity-90 brightness-[1.1] contrast-[1.1]"
        />
        
        {/* 2. REFINED CINEMATIC OVERLAYS (Light Touch) */}
        <div className="absolute inset-0 bg-[#05070B]/30" /> {/* Very subtle dark wash */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070B] via-[#05070B]/40 to-transparent" /> {/* Left-side readability gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-transparent opacity-90" /> {/* Smooth bottom transition */}
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.6)]" /> {/* Slight Edge Vignette */}
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* LEFT: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20"
          >
            <div className="inline-flex items-center gap-4 px-5 py-2.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-12 backdrop-blur-md">
              <Shield className="w-4 h-4 text-brand-gold" />
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-brand-gold">Enterprise Programme Operating System</span>
            </div>

            <h1 className="mb-12">
              Run structured <br />
              programmes with <br />
              <span className="text-gold-highlight">operational clarity.</span>
            </h1>

            <p className="text-editorial mb-16 max-w-2xl">
              OYEN GRID helps organisations coordinate programmes, participants, communication, attendance, training and operational intelligence from one unified infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-10 mb-20">
              <button className="btn-cinematic-gold w-full sm:w-auto h-[68px]">
                Initialize Infrastructure
              </button>
              <button className="flex items-center gap-4 text-[14px] font-black text-white/40 hover:text-white transition-colors group uppercase tracking-[0.3em]">
                Talk to Architects <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
              </button>
            </div>

            <div className="pt-12 border-t border-white/5">
               <span className="text-[11px] font-black text-white/20 uppercase tracking-[0.5em] mb-10 block">Institutional Trust Protocol:</span>
               <div className="flex flex-wrap gap-16 items-center opacity-30 grayscale brightness-200">
                  <span className="font-black italic text-[24px] tracking-tighter">ALTSCHOOL</span>
                  <span className="font-black italic text-[22px] tracking-tighter">INGRESSIVE</span>
                  <span className="font-black italic text-[23px] tracking-tighter">TALENTQL</span>
                  <span className="font-black italic text-[21px] tracking-tighter">TECHSTARS</span>
               </div>
            </div>
          </motion.div>

          {/* RIGHT: Layered Cinematic Visual (Scaled for presence) */}
          <div className="relative lg:h-[850px] flex items-center justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 60 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="relative w-[90%] aspect-[4/5] rounded-[56px] overflow-hidden border border-white/10 shadow-[0_60px_120px_rgba(0,0,0,0.6)] group"
            >
               {/* Environment Blending for Cards */}
               <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-transparent opacity-50 z-10" />
               
               {/* Floating UI Panel - Scaled up */}
               <motion.div 
                 animate={{ y: [0, -20, 0] }}
                 transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-24 -left-16 w-[360px] z-20 opacity-90 hover:opacity-100 transition-opacity"
               >
                 <DashboardMockup small />
               </motion.div>

               {/* Activity Overlay - Scaled and refined */}
               <div className="absolute bottom-16 left-16 right-16 z-20 space-y-5 bg-[#05070B]/30 backdrop-blur-xl p-8 rounded-[32px] border border-white/10">
                  <div className="flex items-center gap-4">
                     <div className="w-2.5 h-2.5 rounded-full bg-brand-gold shadow-[0_0_20px_#F5B942]" />
                     <span className="text-[11px] font-black tracking-[0.5em] text-white/60 uppercase">Live Programme Delivery</span>
                  </div>
                  <div className="h-px w-full bg-white/10" />
                  <div className="flex justify-between items-center">
                     <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">Global Sync Active</span>
                     <span className="text-[10px] font-mono text-brand-gold font-black">142 NODES ONLINE</span>
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
    { title: "Programme Infrastructure", desc: "Structured operational systems for scalable programme delivery.", icon: Database },
    { title: "Session Coordination", desc: "Coordinate live sessions, schedules and delivery continuity.", icon: Workflow },
    { title: "Participant Management", desc: "Track attendance, engagement and operational visibility.", icon: Users },
    { title: "Communication Layer", desc: "Support trainers, facilitators and participant interaction.", icon: MessageSquare },
    { title: "Operational Visibility", desc: "Monitor delivery performance and programme activity.", icon: Globe },
    { title: "AI Operational Support", desc: "Generate summaries, insights and operational assistance.", icon: Sparkles }
  ];

  return (
    <section className="section-gap relative overflow-hidden bg-[#05070B]">
      {/* Immersive Depth & Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-1/4 -right-64 w-[1200px] h-[1200px] bg-brand-gold/[0.03] blur-[220px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-40 items-start">
          
          {/* LEFT SIDE: Immersive Visual with Overlays (Scaled Up) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[900px] rounded-[64px] overflow-hidden group shadow-[0_60px_140px_rgba(0,0,0,0.5)]"
          >
             <Image 
               src="/programme-coordination.png" 
               alt="Institutional Programme Coordination" 
               fill 
               className="object-cover image-cinematic transition-transform duration-1000 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-transparent opacity-80" />
             
             {/* Subtle Floating UI Overlays */}
             <div className="absolute inset-0 p-16 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-end">
                   <motion.div 
                     animate={{ y: [0, -15, 0] }}
                     transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                     className="glass-panel p-8 border-brand-gold/20 shadow-[0_20px_80px_rgba(245,185,66,0.15)] max-w-[300px] pointer-events-auto"
                   >
                      <div className="flex items-center gap-4 mb-5">
                         <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse shadow-[0_0_12px_#F5B942]" />
                         <span className="text-[11px] font-black uppercase tracking-[0.4em] text-brand-gold">System Health</span>
                      </div>
                      <div className="text-[26px] font-black text-white mb-2 leading-tight">Sync Complete</div>
                      <p className="text-[12px] text-white/40 leading-relaxed font-medium">All active programme nodes are currently synchronized globally.</p>
                   </motion.div>
                </div>

                <div className="flex justify-start">
                   <motion.div 
                     animate={{ y: [0, 15, 0] }}
                     transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                     className="glass-panel p-8 border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)] max-w-[320px] pointer-events-auto"
                   >
                      <div className="flex items-center gap-5 mb-5">
                         <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                            <Users className="w-5 h-5 text-brand-gold" />
                         </div>
                         <div className="text-[11px] font-black uppercase tracking-[0.5em] text-white/40">Engagement</div>
                      </div>
                      <div className="space-y-4">
                         <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full w-[82%] bg-brand-gold shadow-[0_0_15px_#F5B942]" />
                         </div>
                         <div className="flex justify-between items-center">
                            <span className="text-[12px] font-black text-white uppercase tracking-widest">82% Participation</span>
                            <span className="text-[10px] font-black text-brand-gold uppercase tracking-widest">+4.2%</span>
                         </div>
                      </div>
                   </motion.div>
                </div>
             </div>
          </motion.div>

          {/* RIGHT SIDE: Content Hierarchy (Scaled Up) */}
          <div className="pt-20">
            <div className="mb-20">
              <span className="text-[11px] font-black uppercase tracking-[0.7em] text-brand-gold mb-10 block opacity-60">Institutional Programme Infrastructure</span>
              <h2 className="mb-12">
                Built for organisations <br />
                coordinating <br />
                <span className="text-gold-highlight underline decoration-white/5 underline-offset-[16px]">structured delivery.</span>
              </h2>
              <div className="space-y-10 max-w-2xl">
                 <p className="text-editorial opacity-90">
                    OYEN GRID provides the infrastructure required to coordinate programmes, participants, sessions, communication and operational continuity from one unified system.
                 </p>
                 <p className="text-[16px] font-bold text-white/20 leading-relaxed italic uppercase tracking-wider">
                    Architected for academies, accelerators and institutional teams managing global programme delivery.
                 </p>
              </div>
            </div>
            
            {/* Elegant Operational Capability Rows */}
            <div className="space-y-2">
               {capabilities.map((item, i) => (
                 <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="capability-row py-10"
                 >
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/5 flex items-center justify-center shrink-0 group-hover:border-brand-gold/40 transition-all shadow-xl">
                       <item.icon className="w-6 h-6 text-white/20 group-hover:text-brand-gold transition-colors" />
                    </div>
                    <div className="flex-1">
                       <div className="flex items-center justify-between mb-2">
                          <h4 className="text-[20px] font-black text-white group-hover:text-brand-gold transition-colors">{item.title}</h4>
                          <ArrowRight className="w-5 h-5 text-white/5 group-hover:text-brand-gold/40 transition-all group-hover:translate-x-2" />
                       </div>
                       <p className="text-[15px] leading-relaxed text-white/30 max-w-lg font-medium tracking-tight">{item.desc}</p>
                    </div>
                 </motion.div>
               ))}
            </div>

            <button className="mt-24 btn-cinematic-gold h-[72px] px-16 group">
               Initialize Platform <ArrowRight className="ml-5 w-6 h-6 group-hover:translate-x-3 transition-transform" />
            </button>
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(245,185,66,0.04),transparent_60%)]" />

      <div className="container-custom relative z-10">
        
        {/* HEADER: Premium Editorial (Scaled Up) */}
        <div className="max-w-4xl mb-40">
           <span className="text-[11px] font-black uppercase tracking-[0.8em] text-brand-gold mb-10 block opacity-50">Operational Orchestration</span>
           <h2 className="mb-16 leading-[0.92]">Master the lifecycle of <br /><span className="text-gold-highlight">global programme delivery.</span></h2>
           <p className="text-editorial text-[24px] max-w-3xl">One unified environment for strategic oversight, mission-critical coordination, and high-fidelity operational reporting at institutional scale.</p>
        </div>

        {/* INTEGRATED LIFECYCLE FLOW: Elegant Horizontal Line (Scaled Up) */}
        <div className="mb-40 relative py-16 px-12 glass-panel border-white/5 overflow-hidden">
           <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2" />
           <div className="grid grid-cols-2 md:grid-cols-6 gap-16 relative z-10">
              {workflow.map((step, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center group text-center"
                >
                  <div className="w-24 h-24 rounded-[32px] bg-[#05070B] border border-white/5 flex items-center justify-center mb-8 group-hover:border-brand-gold/40 transition-all shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative z-10">
                     <step.icon className="w-8 h-8 text-white/20 group-hover:text-brand-gold transition-colors" />
                     {i < 5 && (
                        <div className="absolute top-1/2 -right-10 w-10 h-px bg-brand-gold/20 hidden md:block" />
                     )}
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white/30 group-hover:text-white transition-colors">{step.label}</span>
                </motion.div>
              ))}
           </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-32 items-start">
          
          {/* LEFT: Realistic Operational Workspace (Span 7) (Scaled Up) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="lg:col-span-7 relative h-[750px] rounded-[64px] overflow-hidden border border-white/10 group shadow-[0_80px_160px_rgba(0,0,0,0.7)]"
          >
             <Image 
               src="/ops_workspace_oversight_v3_1778383297044.png" 
               alt="Operational Control Center" 
               fill 
               className="object-cover image-cinematic transition-transform duration-1000 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-transparent opacity-80" />
             
             {/* Integrated UI Overlays */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[540px]">
                <DashboardMockup small />
             </div>

             <div className="absolute bottom-16 left-16 flex items-center gap-8">
                <div className="flex -space-x-4">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-12 h-12 rounded-full border-2 border-[#05070B] overflow-hidden bg-brand-dark/80 shadow-xl">
                        <Image src={`/exec-avatar-${i}.png`} alt="Team member" width={48} height={48} className="opacity-60 grayscale" />
                     </div>
                   ))}
                </div>
                <span className="text-[12px] font-black uppercase tracking-[0.4em] text-white/30">12 Global Facilitators Online</span>
             </div>
          </motion.div>

          {/* RIGHT: Refined Editorial Content (Span 5) (Scaled Up) */}
          <div className="lg:col-span-5 space-y-24 pt-16">
             <div>
                <h3 className="mb-10 leading-none tracking-[-0.05em]">Total Visibility. <br /><span className="text-gold-highlight">Absolute Control.</span></h3>
                <p className="text-[19px] leading-relaxed text-white/40 font-medium mb-16">Deploy multi-track programmes with high-fidelity telemetry, monitoring complex participant networks through a unified institutional layer.</p>
                
                <div className="space-y-4">
                   {[
                     { label: "Programme Health Tracking", val: "Institutional" },
                     { label: "Global Node Syncing", val: "Active" },
                     { label: "Operational Integrity", val: "Verified" }
                   ].map((item, i) => (
                     <div key={i} className="flex justify-between items-center py-6 border-b border-white/5 group">
                        <span className="text-[14px] font-bold text-white/40 group-hover:text-white transition-colors uppercase tracking-widest">{item.label}</span>
                        <div className="flex items-center gap-4">
                           <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_10px_#F5B942]" />
                           <span className="text-[12px] font-black text-brand-gold uppercase tracking-[0.3em]">{item.val}</span>
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             <button className="btn-cinematic-gold h-[68px] w-full text-[15px]">
                Initialize Infrastructure
             </button>
          </div>
        </div>

      </div>
    </section>
  );
}
