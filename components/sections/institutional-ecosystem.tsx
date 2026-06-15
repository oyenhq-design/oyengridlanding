"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Activity, Globe, Users, Database, Workflow, Sparkles, Search } from "lucide-react";

export function TopographicWave() {
  const pathsCount = 18;
  const centerX = 440;
  const centerY = 300;

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Subtle gold radial background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,184,76,0.06),transparent_75%)] pointer-events-none" />
      
      <svg className="w-[115%] h-[115%] opacity-90 text-[#E2B84C]" viewBox="0 0 800 600" fill="none">
        {Array.from({ length: pathsCount }).map((_, index) => {
          const radius = 90 + index * 16;
          const opacity = 0.95 - (index / pathsCount) * 0.78;
          const strokeWidth = 1 + (index % 2) * 0.4;
          
          // Generate wavy concentric loop paths
          const points = [];
          const steps = 64;
          for (let i = 0; i <= steps; i++) {
            const theta = (i / steps) * 2 * Math.PI;
            // Distortions to represent coordinates and network flow
            const wave1 = Math.sin(theta * 2) * 20;
            const wave2 = Math.cos(theta * 3) * 12;
            const r = radius + wave1 + wave2;
            const x = centerX + r * Math.cos(theta) * 1.25;
            const y = centerY + r * Math.sin(theta) * 0.95;
            points.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
          }
          const pathData = points.join(' ') + ' Z';
          
          return (
            <motion.path
              key={index}
              d={pathData}
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeOpacity={opacity}
              initial={{ pathLength: 0, rotate: 0 }}
              animate={{ 
                pathLength: 1,
                rotate: [0, 360],
              }}
              transition={{
                pathLength: { duration: 2.2 + index * 0.08, ease: "easeInOut" },
                rotate: { duration: 75 + index * 4, repeat: Infinity, ease: "linear" }
              }}
              style={{ transformOrigin: "440px 300px" }}
            />
          );
        })}
      </svg>
      
      {/* Dynamic Gold Dust Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 22 }).map((_, i) => {
          const size = Math.random() * 2 + 1;
          const delay = Math.random() * 6;
          const duration = Math.random() * 12 + 10;
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#E2B84C]"
              style={{
                width: size,
                height: size,
                top: `${top}%`,
                left: `${left}%`,
                boxShadow: "0 0 6px rgba(226,184,76,0.8)",
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 24 - 12, 0],
                opacity: [0, 0.75, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export function HeroInstitutional() {
  const trustLogos = [
    { name: "AltSchool", icon: <circle cx="12" cy="12" r="7" fill="currentColor" /> },
    { name: "Zuri", icon: <path d="M6 6h12l-12 12h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /> },
    { name: "Ingressive for Good", icon: <path d="M6 18l6-6-6-6M13 18l6-6-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /> },
    { name: "uLesson", icon: <path d="M8 5v14l11-7z" fill="currentColor" /> },
    { name: "TalentQL", icon: <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2.5" /> },
    { name: "She Code Africa", icon: <path d="M8 17l-5-5 5-5M16 17l5-5-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /> },
    { name: "GomyCode", icon: <rect x="5" y="5" width="14" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5" /> }
  ];

  return (
    <section className="relative min-h-[720px] bg-[#050505] flex items-center pt-10 pb-16 overflow-hidden">
      
      <div className="max-w-[1280px] mx-auto px-8 w-full flex flex-col relative z-20">
        
        {/* Main Columns Grid */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center min-h-[500px]">
          
          {/* LEFT: CONTENT AREA (Aligned upward for visual balance) */}
          <div className="hero-content flex flex-col justify-center text-left lg:translate-y-[-48px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Headline */}
              <h1 className="text-[52px] sm:text-[68px] font-bold leading-[1.04] tracking-tight text-white select-none">
                Programme <br />
                <span className="text-[#E2B84C]">Intelligence.</span>
              </h1>

              {/* Subheadline (Softer white, improved line-height and spacing) */}
              <p className="text-[16px] sm:text-[17.5px] text-white/60 font-medium leading-[1.6] mt-6 max-w-[480px] tracking-wide">
                The unified platform for programme delivery, participant engagement, live operations, analytics and AI.
              </p>

              {/* Explore Search Input */}
              <div className="relative mt-8 max-w-[400px]">
                <input 
                  type="text" 
                  placeholder="Explore OYEN GRID" 
                  className="w-full h-[46px] pl-5 pr-12 rounded-full bg-[#070707] border border-white/10 text-white placeholder-white/30 text-[13px] focus:outline-none focus:border-[#E2B84C]/40 transition-colors"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40">
                  <Search className="w-4 h-4 text-white/30" />
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <Link 
                  href="/pricing"
                  className="inline-flex items-center justify-center h-[46px] px-8 rounded-full bg-[#E2B84C] text-black text-[13px] font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#FFCF68] hover:shadow-[0_4px_16px_rgba(226,184,76,0.3)] hover:scale-[1.02]"
                >
                  Get Started
                </Link>
                <button className="inline-flex items-center justify-center gap-2 h-[46px] px-8 rounded-full border border-white/20 hover:border-white/40 text-white text-[13px] font-bold uppercase tracking-wider transition-all duration-300 bg-transparent hover:bg-white/5">
                  Watch Demo <span className="text-[11px] leading-none ml-1">▷</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: DYNAMIC VECTOR WAVE GRAPHIC */}
          <div className="relative h-[480px] lg:h-[550px] flex items-center justify-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full"
            >
              <TopographicWave />
            </motion.div>
          </div>

        </div>

        {/* CENTERED SCROLL TO EXPLORE INDICATOR */}
        <div className="flex flex-col items-center gap-2 mt-8 mb-4 w-full text-center">
          <div className="w-[18px] h-[30px] rounded-full border-2 border-[#E2B84C]/50 flex items-start justify-center p-1">
            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-[#E2B84C] rounded-full"
            />
          </div>
          <span className="text-[9px] font-bold tracking-[0.18em] text-[#E2B84C]/70 uppercase">Scroll to explore</span>
        </div>

        {/* BOTTOM: REDESIGNED PREMIUM TRUST BAR */}
        <div className="mt-10 border border-white/5 rounded-2xl bg-[#0a0a0a]/40 backdrop-blur-md px-10 py-6 flex flex-col gap-6 shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
          <span className="text-[9px] font-black tracking-[0.24em] text-[#E2B84C]/80 uppercase text-center select-none">
            Trusted by organisations
          </span>
          <div className="w-full h-px bg-white/5" />
          <div className="flex flex-wrap items-center justify-between gap-x-12 gap-y-6 w-full px-4">
            {trustLogos.map((logo, index) => (
              <div key={index} className="flex items-center gap-2.5 text-white/40 hover:text-white/80 transition-colors duration-300 select-none">
                <svg className="w-4.5 h-4.5 shrink-0" viewBox="0 0 24 24" fill="none">
                  {logo.icon}
                </svg>
                <span className="text-[12px] font-bold uppercase tracking-wider">{logo.name}</span>
              </div>
            ))}
          </div>
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
    <section className="section-gap relative bg-[#050816] border-b border-white/5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-[60px] items-center">
          
          {/* LEFT: Content */}
          <div>
            <span className="eyebrow">CORE INFRASTRUCTURE</span>
            <h2 className="mb-6 max-w-[480px]">
              Built for <span className="text-brand-gold">institutional</span> delivery.
            </h2>
            <p className="text-editorial mb-10 max-w-[480px]">
              Our infrastructure is designed for high-stakes programme coordination, providing the stability and visibility required by global organisations.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {capabilities.map((cap, i) => (
                <div key={i} className="card-institutional">
                  <cap.icon className="w-4.5 h-4.5 text-brand-gold/60 mb-3" />
                  <h4 className="text-[14px] font-bold text-white mb-1.5">{cap.title}</h4>
                  <p className="text-[10px] text-white/40 leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Contained Image */}
          <div className="flex justify-center lg:justify-end">
             <div className="relative w-full max-w-[460px] h-[340px] rounded-[20px] overflow-hidden border border-white/10 shadow-2xl">
                <Image 
                  src="/section-2-bg.png" 
                  alt="Platform" 
                  fill 
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#050816] via-transparent to-transparent" />
                
                {/* Floating Detail */}
                <div className="absolute top-6 left-6 glass-panel-institutional p-3.5 flex items-center gap-3">
                   <div className="w-7 h-7 rounded-[6px] bg-brand-gold/10 flex items-center justify-center">
                      <Activity className="w-3.5 h-3.5 text-brand-gold" />
                   </div>
                   <div>
                      <div className="text-[9px] font-black text-white/40 uppercase tracking-widest">Active Sync</div>
                      <div className="text-[13px] font-bold text-white">99.9% Uptime</div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export function OperationalControlCenter() {
  return (
    <section className="section-gap relative bg-[#050816] border-b border-white/5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-[60px] items-center">
          
          {/* LEFT: Contained Image (Visual First) */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
             <div className="relative w-full max-w-[460px] h-[340px] rounded-[20px] overflow-hidden border border-white/10 shadow-2xl">
                <Image 
                  src="/section-3-bg.png" 
                  alt="Operations" 
                  fill 
                  className="object-cover opacity-60 grayscale scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-bl from-[#050816]/80 via-transparent to-transparent" />
             </div>
          </div>

          {/* RIGHT: Narrative */}
          <div className="order-1 lg:order-2">
            <span className="eyebrow">COMMAND & CONTROL</span>
            <h2 className="mb-6 max-w-[480px]">
              Complete <span className="text-brand-gold">operational</span> orchestration.
            </h2>
            <p className="text-editorial mb-8 max-w-[480px]">
              Manage the entire lifecycle of your programme from one dashboard. Coordinate trainers, monitor engagement, and analyze delivery health in real-time.
            </p>
            
            <div className="space-y-4">
               {[
                 { t: "Live Session Monitoring", d: "Track attendance and engagement as it happens." },
                 { t: "Automated Resource Sync", d: "Sync materials and assets across all cohorts." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-5 p-5 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="w-9 h-9 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
                       <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                    </div>
                    <div>
                       <h4 className="text-[16px] font-bold text-white mb-1">{item.t}</h4>
                       <p className="text-[12px] text-white/30">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

