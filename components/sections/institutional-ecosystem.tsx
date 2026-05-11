"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Activity, Globe, Users, Database, Workflow, Sparkles } from "lucide-react";

import { DashboardMockup } from "./dashboard-mockup";

export function HeroInstitutional() {
  const metrics = [
    { value: "1,240+", label: "Operations" },
    { value: "99.995%", label: "Uptime" },
    { value: "0.8ms", label: "Sync" },
    { value: "140+", label: "Countries" }
  ];

  return (
    <section className="hero-section-institutional flex items-center pt-32 pb-24 border-b border-white/5 overflow-hidden">
      
      <div className="max-w-[1380px] mx-auto px-[56px] w-full grid grid-cols-[0.95fr_1.05fr] gap-[48px] items-center relative z-[2]">
        
        {/* LEFT: CONTENT AREA */}
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow">HUMAN COORDINATION • INSTITUTIONAL OS</span>

            <h1 className="hero-headline text-white mb-6">
              Coordinate programmes <br />
              with complete <br />
              <span className="text-brand-gold">operational control.</span>
            </h1>

            <p className="hero-paragraph">
              OYEN GRID helps organisations coordinate trainers, participants, and programme operations through one unified system of intelligence and real-time visibility.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-12">
              <button className="btn-institutional-primary px-[30px] h-[54px]">
                Initialize Infrastructure
              </button>
              <button className="btn-institutional-secondary group px-[30px] h-[54px]">
                Talk to Architects <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* METRICS ROW */}
            <div className="hero-metrics-row">
              {metrics.map((m, i) => (
                <div key={i} className="hero-metric-item">
                   <div className="number">{m.value}</div>
                   <div className="label">{m.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT: VISUAL AREA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative flex justify-end mt-12"
        >
          {/* Main Dashboard Visual */}
          <div className="dashboard-container">
             <div className="bg-[#0A0C12] rounded-[26px] overflow-hidden">
                <DashboardMockup />
             </div>
          </div>

          {/* SINGLE FLOATING GLASS CARD */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass-card-floating"
          >
             <div className="flex items-center gap-3 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Live Operations</span>
             </div>
             <div className="space-y-4">
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                   <div className="h-full w-[84%] bg-brand-gold/60" />
                </div>
                <div className="flex justify-between items-end">
                   <div className="text-[20px] font-bold text-white tracking-tighter">84.2%</div>
                   <div className="text-[10px] font-black text-white/20 uppercase tracking-widest">Efficiency</div>
                </div>
             </div>
          </motion.div>
        </motion.div>

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
        <div className="grid lg:grid-cols-2 gap-[72px] items-center">
          
          {/* LEFT: Content */}
          <div>
            <span className="eyebrow">CORE INFRASTRUCTURE</span>
            <h2 className="mb-8 max-w-[520px]">
              Built for <span className="text-brand-gold">institutional</span> delivery.
            </h2>
            <p className="text-editorial mb-12 max-w-[520px]">
              Our infrastructure is designed for high-stakes programme coordination, providing the stability and visibility required by global organisations.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {capabilities.map((cap, i) => (
                <div key={i} className="card-institutional">
                  <cap.icon className="w-6 h-6 text-brand-gold/60 mb-4" />
                  <h4 className="text-[16px] font-bold text-white mb-2">{cap.title}</h4>
                  <p className="text-[12px] text-white/30 leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Contained Image */}
          <div className="flex justify-center lg:justify-end">
             <div className="relative w-full max-w-[560px] h-[420px] rounded-[26px] overflow-hidden border border-white/10 shadow-2xl">
                <Image 
                  src="/section-2-bg.png" 
                  alt="Platform" 
                  fill 
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#050816] via-transparent to-transparent" />
                
                {/* Floating Detail */}
                <div className="absolute top-8 left-8 glass-panel-institutional p-4 flex items-center gap-4">
                   <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center">
                      <Activity className="w-4 h-4 text-brand-gold" />
                   </div>
                   <div>
                      <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">Active Sync</div>
                      <div className="text-[14px] font-bold text-white">99.9% Uptime</div>
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
        <div className="grid lg:grid-cols-2 gap-[72px] items-center">
          
          {/* LEFT: Contained Image (Visual First) */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
             <div className="relative w-full max-w-[560px] h-[420px] rounded-[26px] overflow-hidden border border-white/10 shadow-2xl">
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
            <h2 className="mb-8 max-w-[520px]">
              Complete <span className="text-brand-gold">operational</span> orchestration.
            </h2>
            <p className="text-editorial mb-10 max-w-[520px]">
              Manage the entire lifecycle of your programme from one dashboard. Coordinate trainers, monitor engagement, and analyze delivery health in real-time.
            </p>
            
            <div className="space-y-6">
               {[
                 { t: "Live Session Monitoring", d: "Track attendance and engagement as it happens." },
                 { t: "Automated Resource Sync", d: "Sync materials and assets across all cohorts." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center shrink-0">
                       <Sparkles className="w-4 h-4 text-brand-gold" />
                    </div>
                    <div>
                       <h4 className="text-[17px] font-bold text-white mb-1">{item.t}</h4>
                       <p className="text-[13px] text-white/30">{item.d}</p>
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

