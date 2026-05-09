"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DashboardMockup } from "@/components/sections/dashboard-mockup";

export function HeroCinematic() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-[100px] overflow-hidden bg-[#05070B]">
      
      {/* CINEMATIC BACKGROUND IMAGE: 60-70% Area, Blended Naturally */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero_dashboard_enterprise_1778319138626.png" 
          alt="Operational Command Center" 
          fill
          className="object-cover opacity-[0.12] grayscale brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05070B]/80 to-[#05070B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070B] via-transparent to-transparent" />
      </div>

      {/* ATMOSPHERIC GLOWS */}
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-brand-gold/5 blur-[120px] rounded-full opacity-50" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full opacity-30" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
             <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_#F5B942] animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Institutional Infrastructure</span>
             </div>

             <h1 className="mb-8">
                Run structured programmes <br />
                with complete <span className="text-gold-highlight">operational control</span> <br />
                at scale.
             </h1>
             
             <p className="text-editorial mb-12 max-w-xl">
                OYEN GRID is the institutional operating system for programme-driven organisations. Plan, deliver, and monitor every cohort with absolute visibility and architectural rigour.
             </p>

             <div className="flex flex-wrap items-center gap-6">
                <button className="btn-cinematic-gold">
                   Initialize System
                </button>
                <button className="btn-cinematic-outline">
                   Talk to Architects
                </button>
             </div>
          </motion.div>

          {/* RIGHT: FLOATING REALISTIC DASHBOARD */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: 10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 hidden lg:block"
          >
             <div className="relative group perspective-[2000px]">
                <div className="absolute -inset-4 bg-brand-gold/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <DashboardMockup />
                {/* Premium Reflections Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent rounded-[40px]" />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function MetricRail() {
  const stats = [
    { val: "1,240+", label: "Active Programmes" },
    { val: "0.8ms", label: "System Latency" },
    { val: "99.995%", label: "Uptime Protocol" },
    { val: "140+", label: "Global Nodes" }
  ];

  return (
    <div className="w-full bg-[#0B1020]/50 border-y border-white/5 py-12 relative overflow-hidden">
      {/* Subtle Background Image Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none grayscale brightness-50">
         <Image src="/security_soc_environment_1778252613879.png" alt="Overlay" fill className="object-cover" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center lg:border-r last:border-none border-white/5">
              <span className="text-[36px] font-black text-brand-gold tracking-tight leading-none mb-2">{stat.val}</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/20">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
