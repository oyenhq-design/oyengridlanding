"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Activity, Shield, Cpu } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      
      {/* IMMERSIVE ENVIRONMENTAL BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/env-command-new.png" 
          alt="Environmental Background" 
          fill
          priority
          className="object-cover blur-[10px] scale-105 opacity-[0.15] grayscale"
        />
        {/* Layered Overlays for Cinematic Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(200,155,45,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[url('/dashboard-textures.png')] opacity-[0.05] mix-blend-screen scale-110 blur-sm" />
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]" />
      </div>

      <div className="container-custom relative z-10 pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* CONTENT LEFT: Authority & Precision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="flex items-center gap-4 mb-10">
               <div className="h-[1px] w-12 bg-accent-gold/60" />
               <span className="text-[12px] font-black text-accent-gold uppercase tracking-[0.6em]">Core Infrastructure System</span>
            </div>
            
            <h1 className="text-[64px] md:text-[110px] font-bold text-white mb-10 leading-[0.85] tracking-tighter uppercase">
              Orchestrate <br />
              <span className="text-gold-gradient italic font-medium lowercase">global delivery.</span>
            </h1>
            
            <p className="text-[20px] text-white/50 mb-14 max-w-[560px] leading-relaxed font-light tracking-wide">
              The high-fidelity operating system for institutional scale. Designed to manage complex operational logistics with absolute structural integrity.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-10 mb-20">
              <button className="btn-gold px-14 h-16 w-full sm:w-auto text-[13px] tracking-widest uppercase shadow-[0_25px_50px_rgba(200,155,45,0.25)]">
                Initialize System
              </button>
              <button className="text-[14px] font-bold text-white/60 hover:text-white transition-all flex items-center gap-3 group">
                Review Architecture
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Live Telemetry: Proof of Life */}
            <div className="flex flex-wrap items-center gap-x-16 gap-y-8 pt-12 border-t border-white/10">
               <div className="flex items-center gap-5">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
                  <div>
                    <div className="text-[11px] text-white/30 font-black uppercase tracking-[0.2em] mb-1">Core Status</div>
                    <div className="text-[16px] text-white font-bold tracking-tight">Active_System</div>
                  </div>
               </div>
               <div className="flex items-center gap-5">
                  <Activity className="w-5 h-5 text-accent-gold opacity-60" />
                  <div>
                    <div className="text-[11px] text-white/30 font-black uppercase tracking-[0.2em] mb-1">Throughput</div>
                    <div className="text-[16px] text-white font-bold tracking-tight">12.4M ops/sec</div>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* ASYMMETRICAL VISUAL RIGHT: Cinematic Depth */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Visual Anchor with Cinematic Bleed */}
            <div className="relative aspect-[16/11] lg:mr-[-120px] xl:mr-[-240px]">
               <div className="absolute -inset-10 bg-accent-gold/10 blur-[120px] -z-10 animate-pulse" />
               <div className="relative h-full rounded-[60px] overflow-hidden border border-white/10 shadow-[0_80px_160px_rgba(0,0,0,0.9)] bg-navy-mid/60 backdrop-blur-2xl cinematic-bleed">
                 <Image 
                   src="/hero-dashboard.png" 
                   alt="System Dashboard" 
                   fill
                   priority
                   className="object-cover opacity-95 grayscale-[0.4] hover:grayscale-0 transition-all duration-1000 scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/80 via-transparent to-white/5" />
                 
                 {/* Floating High-Fidelity Metric Cards */}
                 <motion.div
                   animate={{ y: [0, -15, 0] }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-14 left-14 p-10 glass-card border-white/10 bg-navy-deep/80 shadow-[0_30px_60px_rgba(0,0,0,0.8)] min-w-[260px]"
                 >
                    <div className="flex items-center gap-4 mb-6">
                       <Shield className="w-6 h-6 text-accent-gold shadow-[0_0_15px_rgba(200,155,45,0.4)]" />
                       <span className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em]">Integrity_Check</span>
                    </div>
                    <div className="text-4xl font-bold text-white mb-3 tracking-tighter">99.999%</div>
                    <div className="text-[12px] text-accent-gold/80 font-bold uppercase tracking-[0.2em]">Operational Stability</div>
                 </motion.div>

                 <motion.div
                   animate={{ y: [0, 15, 0] }}
                   transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute bottom-14 right-14 p-10 glass-card border-white/10 bg-navy-deep/80 shadow-[0_30px_60px_rgba(0,0,0,0.8)] min-w-[240px]"
                 >
                    <div className="flex items-center gap-4 mb-6">
                       <Cpu className="w-6 h-6 text-accent-gold shadow-[0_0_15px_rgba(200,155,45,0.4)]" />
                       <span className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em]">Sync_Protocol</span>
                    </div>
                    <div className="text-4xl font-bold text-white mb-3 tracking-tighter">0.8ms</div>
                    <div className="text-[12px] text-accent-gold/80 font-bold uppercase tracking-[0.2em]">Cross-Node Latency</div>
                 </motion.div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Cinematic Transition */}
      <div className="atmos-fade-bottom h-96 opacity-80" />
    </section>
  );
}
