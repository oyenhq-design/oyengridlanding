"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const metrics = [
    { label: "Active Programmes", value: "1,240+" },
    { label: "System Response", value: "0.8ms" },
    { label: "Platform Uptime", value: "99.995%" },
    { label: "Global Regions", value: "140+" }
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-40 pb-32 overflow-hidden bg-[#050505]">
      
      {/* ENVIRONMENTAL DEPTH */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[10%] right-[-10%] w-[800px] h-[800px] bg-accent-gold/5 blur-[120px] rounded-full opacity-40" />
         <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-white/[0.02] blur-[100px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* LEFT: ENTERPRISE MESSAGING */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-4 mb-10">
               <div className="h-px w-8 bg-accent-gold/40" />
               <span className="label-enterprise">Institutional Operating System</span>
            </div>
            
            <h1 className="text-white mb-10 text-[52px] md:text-[76px] leading-[0.94] tracking-[-0.05em] font-bold">
              Run structured programmes with <br />
              <span className="text-accent-gold italic font-semibold">operational control.</span>
            </h1>
            
            <p className="text-[19px] text-white/50 mb-14 max-w-xl leading-relaxed font-light">
              OYEN GRID is the all-in-one operating system for programme-driven organisations. Plan, deliver, monitor and optimise every cohort with real-time visibility.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-10">
              <button className="btn-gold px-12 h-14 w-full sm:w-auto">
                Start Building
              </button>
              <button className="flex items-center gap-3 text-[14px] font-bold text-white/40 hover:text-white transition-all uppercase tracking-[0.25em] group">
                Talk to Sales <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* RIGHT: REALISTIC DASHBOARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
             <div className="relative p-2 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-3xl shadow-[0_100px_200px_rgba(0,0,0,0.9)] overflow-hidden">
                <div className="relative aspect-[16/10] rounded-[28px] overflow-hidden">
                   <Image 
                     src="/images/hero-dashboard.png" 
                     alt="OYEN GRID Operational Interface" 
                     fill
                     priority
                     className="object-cover grayscale-[0.2] brightness-90 group-hover:grayscale-0 transition-all duration-1000"
                   />
                   <div className="absolute inset-0 bg-gradient-to-tr from-[#050505]/60 via-transparent to-white/[0.05]" />
                </div>
                
                {/* Floating Telemetry Badge */}
                <div className="absolute top-10 right-10 px-6 py-3 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 flex items-center gap-3 shadow-2xl">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                   <span className="text-[11px] font-black uppercase tracking-widest text-white/80">99.995% System Nominal</span>
                </div>
             </div>
             
             {/* Sub-atmospheric glow */}
             <div className="absolute -inset-10 bg-accent-gold/5 blur-[80px] -z-10 opacity-30" />
          </motion.div>
        </div>

        {/* OPERATIONAL METRICS ROW */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-40 pt-16 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-12"
        >
          {metrics.map((m, i) => (
            <div key={i}>
              <div className="text-[36px] font-bold text-white mb-2">{m.value}</div>
              <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">{m.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
