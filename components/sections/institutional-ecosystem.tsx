"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Activity, Globe, Users, Database, Workflow, Sparkles } from "lucide-react";


export function HeroInstitutional() {
  const metrics = [
    { value: "1,240+", label: "Operations" },
    { value: "99.995%", label: "Uptime" },
    { value: "0.8ms", label: "Sync" },
    { value: "140+", label: "Countries" }
  ];

  return (
    <section className="relative py-32 bg-[#050816] overflow-hidden border-b border-white/5">
      
      {/* 1. CINEMATIC ATMOSPHERE BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,185,66,0.05)_0%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,102,255,0.03)_0%,transparent_100%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "40px 40px" }} />
        
        {/* Animated Background Blur Orbs */}
        <motion.div 
           animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
           className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px]" 
        />
      </div>

      <div className="container-custom max-w-[1240px] px-6 mx-auto relative z-10 grid grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN: INSTITUTIONAL NARRATIVE (40%) */}
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
               <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_#f5b82e]" />
               <span className="text-brand-gold/80 tracking-[0.4em] uppercase text-[10px] font-black">
                 Institutional OS • Infrastructure
               </span>
            </div>

            <h1 className="text-5xl lg:text-[4.5rem] font-bold leading-[0.95] tracking-tighter mb-8 text-white">
              Coordinate programmes <br />
              with complete <br />
              <span className="text-brand-gold italic font-serif">operational control.</span>
            </h1>

            <p className="text-[15px] lg:text-[17px] text-white/40 mb-12 leading-relaxed font-medium max-w-[480px]">
              The orchestration layer for high-stakes institutional coordination, unifying every module and participant into one live operational intelligence system.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-16">
              <motion.button 
                whileHover={{ scale: 1.02, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-brand-gold hover:bg-[#ffc93c] text-black px-10 h-14 rounded-xl font-black uppercase text-[11px] tracking-widest transition-all shadow-xl shadow-brand-gold/10"
              >
                Initialize Infrastructure
              </motion.button>
              <motion.button 
                whileHover={{ x: 5 }}
                className="text-white/40 hover:text-white transition-all font-black uppercase text-[10px] tracking-widest flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-all bg-white/5 backdrop-blur-md">
                   <ArrowRight className="w-4 h-4" />
                </div>
                Talk to Architects
              </motion.button>
            </div>

            {/* INTEGRATED METRICS STRIP */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-white/5">
              {metrics.map((m, i) => (
                <div key={i} className="space-y-1 group cursor-pointer">
                   <div className="text-[20px] font-bold text-white tracking-tighter group-hover:text-brand-gold transition-colors">{m.value}</div>
                   <div className="text-[9px] font-black text-white/20 uppercase tracking-widest group-hover:text-white/40 transition-colors">{m.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: GLOBAL INFRASTRUCTURE DISPLAY (60%) */}
        <div className="col-span-12 lg:col-span-7 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-[1.1] rounded-[48px] bg-[#0b1220]/40 backdrop-blur-3xl border border-white/10 overflow-hidden shadow-[0_80px_160px_rgba(0,0,0,0.8)]"
          >
            {/* Architectural Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            
            {/* GLOBAL NODE NETWORK (SVG) */}
            <div className="absolute inset-0 p-12">
               <svg className="w-full h-full opacity-60" viewBox="0 0 800 600">
                  <defs>
                     <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#F5B942" stopOpacity="0" />
                        <stop offset="50%" stopColor="#F5B942" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#F5B942" stopOpacity="0" />
                     </linearGradient>
                  </defs>

                  {/* Network Paths */}
                  {[
                    "M100 300 Q400 100 700 300",
                    "M100 300 Q400 500 700 300",
                    "M400 100 Q600 300 400 500",
                    "M400 100 Q200 300 400 500"
                  ].map((d, i) => (
                    <motion.path 
                       key={i}
                       initial={{ pathLength: 0, opacity: 0 }}
                       animate={{ pathLength: 1, opacity: 1 }}
                       transition={{ duration: 3, delay: i * 0.4 }}
                       d={d} 
                       fill="none" stroke="url(#glowGrad)" strokeWidth="1" 
                    />
                  ))}

                  {/* Pulse Signals */}
                  {[
                    { d: "M100 300 Q400 100 700 300", dur: 4 },
                    { d: "M400 100 Q600 300 400 500", dur: 6 }
                  ].map((p, i) => (
                    <motion.circle key={i} r="3" fill="#F5B942">
                       <animateMotion path={p.d} dur={`${p.dur}s`} repeatCount="indefinite" />
                    </motion.circle>
                  ))}

                  {/* Nodes */}
                  {[
                    { x: 100, y: 300 }, { x: 700, y: 300 }, { x: 400, y: 100 }, { x: 400, y: 500 }, { x: 400, y: 300 }
                  ].map((node, i) => (
                    <g key={i}>
                       <circle cx={node.x} cy={node.y} r="4" fill="#F5B942" className="shadow-[0_0_15px_#F5B942]" />
                       <circle cx={node.x} cy={node.y} r="10" fill="rgba(245,185,66,0.05)" />
                    </g>
                  ))}
               </svg>
            </div>

            {/* FLOATING OPERATIONAL HUDs */}
            <div className="absolute inset-0 p-12 pointer-events-none">
               {/* HUD 1: Infrastructure Health */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-12 left-12 p-5 rounded-2xl bg-[#080B14]/80 border border-white/10 backdrop-blur-2xl shadow-3xl w-56"
               >
                  <div className="flex items-center justify-between mb-4">
                     <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">System Health</span>
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <div className="text-[22px] font-bold text-white tracking-tighter">99.99%</div>
                  <div className="text-[9px] font-black text-emerald-500 uppercase tracking-widest mt-1">Nominal Output</div>
               </motion.div>

               {/* HUD 2: Global Sync */}
               <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-12 right-12 p-5 rounded-2xl bg-[#080B14]/80 border border-white/10 backdrop-blur-2xl shadow-3xl w-56"
               >
                  <div className="flex items-center justify-between mb-4">
                     <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">Global Sync</span>
                     <Sparkles className="w-3 h-3 text-brand-gold" />
                  </div>
                  <div className="text-[22px] font-bold text-white tracking-tighter">0.8ms</div>
                  <div className="text-[9px] font-black text-brand-gold uppercase tracking-widest mt-1">Average Latency</div>
               </motion.div>
            </div>

            {/* CENTER FOCAL CORE */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <div className="w-48 h-48 rounded-full border border-brand-gold/10 border-dashed animate-spin-slow" />
               <div className="absolute w-32 h-32 rounded-full bg-brand-gold/5 backdrop-blur-xl border border-brand-gold/20 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center border border-brand-gold/30">
                     <Globe className="w-8 h-8 text-brand-gold/60" />
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Deep Shadow Glow */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-brand-gold/10 blur-[60px] -z-10 rounded-full" />
        </div>
      </div>
    </section>
  );
}





export function PlatformOverview() {
  const capabilities = [
    { title: "Programme Governance", desc: "Institutional control and oversight for all programme operations and delivery integrity.", icon: Database },
    { title: "Participant Control", desc: "Management with real-time attendance, engagement, and cohort tracking.", icon: Users },
    { title: "Delivery Coordination", desc: "Orchestrate live sessions and resource allocation across distributed teams.", icon: Workflow },
    { title: "Operational Visibility", desc: "Live dashboards for monitoring metrics, session activity, and throughput.", icon: Globe }
  ];

  return (
    <section className="py-32 bg-[#050816] relative overflow-hidden border-b border-white/5">
      
      {/* 1. CINEMATIC ATMOSPHERE BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,102,255,0.03)_0%,transparent_100%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "64px 64px" }} />
      </div>

      <div className="container-custom max-w-[1240px] px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT SIDE: STRATEGIC OVERVIEW (40%) */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_#f5b82e]" />
                <span className="text-brand-gold/80 tracking-[0.4em] uppercase text-[10px] font-black">
                  Platform Architecture
                </span>
              </div>
              <h2 className="text-[32px] md:text-[46px] font-bold text-white mb-6 leading-[1.05] tracking-tighter">
                Built for <br />
                <span className="text-brand-gold italic font-serif">institutional delivery.</span>
              </h2>
              <p className="text-[15px] text-white/40 leading-relaxed font-medium">
                Our infrastructure is designed for high-stakes programme coordination, providing the stability and visibility required by global organisations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {capabilities.map((cap, i) => (
                <div key={i} className="group space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-gold/10 group-hover:border-brand-gold/30 transition-all duration-500">
                    <cap.icon className="w-5 h-5 text-white/20 group-hover:text-brand-gold transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-white mb-1 tracking-tight group-hover:text-brand-gold transition-colors">{cap.title}</h4>
                    <p className="text-[11px] text-white/20 leading-relaxed group-hover:text-white/40 transition-colors">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: INTELLIGENCE VIEWPORT (60%) */}
          <div className="lg:col-span-7 relative">
             <motion.div
               initial={{ opacity: 0, scale: 0.95, x: 20 }}
               whileInView={{ opacity: 1, scale: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
               className="relative w-full aspect-[1.2] rounded-[48px] bg-[#0b1220]/40 backdrop-blur-3xl border border-white/10 overflow-hidden shadow-[0_80px_160px_rgba(0,0,0,0.8)]"
             >
                <Image 
                  src="/section-2-bg.png" 
                  alt="Platform" 
                  fill 
                  className="object-cover opacity-60 scale-110 group-hover:scale-100 transition-transform duration-[3s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/10 via-transparent to-transparent opacity-40" />

                {/* Floating Operational Overlay */}
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                   <div className="max-w-[320px] p-6 rounded-3xl bg-[#080B14]/80 border border-white/10 backdrop-blur-2xl shadow-3xl">
                      <div className="flex items-center gap-3 mb-4">
                         <Activity className="w-4 h-4 text-brand-gold" />
                         <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em]">Active Delivery Sync</span>
                      </div>
                      <div className="space-y-3">
                         <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                               initial={{ width: 0 }}
                               whileInView={{ width: "99.9%" }}
                               transition={{ duration: 2, delay: 0.5 }}
                               className="h-full bg-brand-gold/40" 
                            />
                         </div>
                         <div className="flex justify-between items-center">
                            <span className="text-[18px] font-bold text-white tracking-tighter">99.9% Uptime</span>
                            <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">VERIFIED</span>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Corner Status Indicators */}
                <div className="absolute top-12 right-12 flex flex-col items-end gap-3">
                   <div className="px-3 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-[8px] font-black text-white/40 uppercase tracking-widest">
                      Node_01 :: ACTIVE
                   </div>
                   <div className="px-3 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-[8px] font-black text-white/40 uppercase tracking-widest">
                      Latency :: 0.8ms
                   </div>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}


