"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Terminal, Shield, Activity } from "lucide-react";
import { DashboardMockup } from "./dashboard-mockup";

export function HeroCinematic() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 overflow-hidden bg-[#05070B]">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero_command_dashboard_institutional_1778344757260.png" 
          alt="Command Center Background" 
          fill
          className="object-cover opacity-[0.08] grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070B] via-transparent to-[#05070B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070B] via-[#05070B]/80 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT CONTENT: Institutional Text */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-8">
                <Shield className="w-3.5 h-3.5 text-brand-gold" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold">Enterprise Programme Operating System</span>
              </div>

              <h1 className="mb-8">
                Run structured programmes with complete <span className="text-gold-highlight">operational control</span> at scale.
              </h1>

              <p className="text-editorial mb-12 max-w-xl">
                Coordinate global programmes, manage complex participant networks, and monitor live session delivery from a single institutional infrastructure. Built for organisations that require absolute operational continuity and real-time intelligence.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
                <button className="btn-cinematic-gold w-full sm:w-auto">
                  Initialize System
                </button>
                <button className="flex items-center gap-2 text-[14px] font-bold text-white/40 hover:text-white transition-colors group uppercase tracking-[0.15em]">
                  Talk to Architects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex items-center gap-8 pt-8 border-t border-white/5">
                 <span className="text-[11px] font-bold text-white/20 uppercase tracking-[0.2em]">Trusted by:</span>
                 <div className="flex gap-8 items-center opacity-30 grayscale contrast-125">
                    <span className="font-black italic text-[16px]">ALTSCHOOL</span>
                    <span className="font-black italic text-[16px]">TALENTQL</span>
                    <span className="font-black italic text-[16px]">INGRESSIVE</span>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT CONTENT: Complex Command Dashboard */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-20 bg-brand-gold/5 blur-[120px] rounded-full" />
              <DashboardMockup />
              
              {/* Technical Overlays */}
              <div className="absolute -bottom-6 -left-6 glass-panel p-4 flex items-center gap-4 animate-pulse">
                 <div className="w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_10px_#F5B942]" />
                 <span className="text-[10px] font-bold tracking-[0.2em] text-white/60">NODE SYNC: ACTIVE</span>
              </div>

              <div className="absolute top-10 -right-4 glass-panel px-4 py-2 border-brand-gold/20">
                 <div className="flex items-center gap-3">
                    <Activity className="w-3 h-3 text-brand-gold" />
                    <span className="text-[10px] font-bold text-white/80">AI TELEMETRY: NOMINAL</span>
                 </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export function MetricRail() {
  const metrics = [
    { label: "Active Programmes", val: "1,240+" },
    { label: "Participants Coordinated", val: "18.4k" },
    { label: "Operational Uptime", val: "99.995%" },
    { label: "Global Nodes", val: "140+" }
  ];

  return (
    <div className="bg-[#0B1020]/50 border-y border-white/5 py-10 relative z-20 backdrop-blur-sm">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {metrics.map((m, i) => (
            <div key={i} className="flex flex-col gap-1 border-l border-white/5 pl-8 first:border-0">
              <span className="text-[28px] font-black text-white tracking-tighter">{m.val}</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
