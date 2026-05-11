"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Activity, Globe, Users, Database, Workflow, Sparkles } from "lucide-react";

export function HeroInstitutional() {
  return (
    <section className="relative min-h-[700px] flex items-center pt-32 pb-24 overflow-hidden bg-[#050816] border-b border-white/5">
      
      <div className="container-custom relative z-10 w-full">
        <div className="max-w-[800px] mx-auto text-center">
          
          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow mx-auto">HUMAN COORDINATION • INSTITUTIONAL OS</span>

            <h1 className="mb-8 mx-auto text-balance">
              Coordinate programmes with <br />
              <span className="text-brand-gold">operational control.</span>
            </h1>

            <p className="text-editorial mb-12 max-w-[640px] mx-auto">
              OYEN GRID helps organisations coordinate trainers, participants, and programme operations through one unified system of intelligence and real-time visibility.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5 mb-16">
              <button className="btn-institutional-primary px-10">
                Initialize Infrastructure
              </button>
              <button className="btn-institutional-secondary group px-8">
                Talk to Architects <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="pt-12 border-t border-white/5 flex flex-col items-center gap-8">
               <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Institutional Grade Orchestration</span>
               <div className="flex flex-wrap justify-center gap-12 items-center opacity-20 grayscale brightness-150">
                  <span className="font-black italic text-[18px] tracking-tighter">ALTSCHOOL</span>
                  <span className="font-black italic text-[16px] tracking-tighter">INGRESSIVE</span>
                  <span className="font-black italic text-[17px] tracking-tighter">TALENTQL</span>
                  <span className="font-black italic text-[15px] tracking-tighter">TECHSTARS</span>
               </div>
            </div>
          </motion.div>

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
                  src="/hero-bg-institutional.png" 
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
                  src="/hero-bg-institutional.png" 
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
