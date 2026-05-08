"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#040816]">
      
      {/* BACKGROUND: Immersive Enterprise Command Center */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/env-command-new.png" 
          alt="Enterprise Operations Center" 
          fill
          priority
          className="object-cover opacity-[0.25] grayscale blur-[2px] scale-105"
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040816] via-[#040816]/95 to-transparent opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040816] via-transparent to-[#040816]/40" />
        <div className="absolute inset-0 bg-[url('/dashboard-textures.png')] opacity-[0.03] mix-blend-screen scale-150 rotate-3" />
        <div className="noise-bg opacity-[0.02]" />
      </div>

      <div className="container-custom relative z-10 py-32 md:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">
          
          {/* LEFT COLUMN: Text & Content (45%) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#C89B2D]/30 bg-[#C89B2D]/5 backdrop-blur-xl mb-12 group hover:border-[#C89B2D]/50 transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C89B2D] animate-pulse" />
              <span className="text-[11px] font-black text-[#C89B2D] uppercase tracking-[0.4em]">Enterprise Operating System</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-[64px] md:text-[92px] font-bold text-[#F5F7FA] mb-10 leading-[0.92] tracking-[-0.04em]">
              Run structured <br />
              programmes with <br />
              full <span className="text-[#C89B2D] italic font-medium">operational <br /> control.</span>
            </h1>
            
            {/* Description */}
            <p className="text-[18px] text-[#F5F7FA]/70 mb-12 max-w-[500px] leading-[1.7] font-light tracking-wide">
              The premier platform for managing complex, high-stakes initiatives with absolute structural integrity.
            </p>

            {/* Feature Bullets */}
            <div className="space-y-6 mb-16">
               {[
                 "End-to-end visibility across all cohorts",
                 "Automated tracking & predictive analytics",
                 "Enterprise-grade governance & security",
                 "Scalable for teams, regions & enterprises"
               ].map((bullet, i) => (
                 <div key={i} className="flex items-center gap-5">
                    <div className="w-5 h-5 rounded-full bg-[#C89B2D]/10 border border-[#C89B2D]/20 flex items-center justify-center">
                       <Check className="w-3 h-3 text-[#C89B2D]" />
                    </div>
                    <span className="text-[15px] text-[#F5F7FA]/60 font-medium tracking-tight">{bullet}</span>
                 </div>
               ))}
            </div>
            
            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center gap-8 mb-14">
              <button className="btn-gold px-12 h-16 w-full sm:w-auto text-[13px] font-black tracking-[0.2em] uppercase shadow-[0_20px_40px_rgba(200,155,45,0.2)] hover:scale-105 hover:shadow-[0_25px_50px_rgba(200,155,45,0.3)] transition-all flex items-center justify-center gap-3">
                Start building <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-10 h-16 w-full sm:w-auto text-[13px] font-black text-[#F5F7FA]/50 hover:text-white transition-all uppercase tracking-[0.2em] border border-white/10 rounded-full bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.05] flex items-center justify-center">
                Talk to sales
              </button>
            </div>

            {/* Reviews Row */}
            <div className="flex items-center gap-6">
               <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(star => (
                    <Star key={star} className="w-4 h-4 fill-[#C89B2D] text-[#C89B2D]" />
                  ))}
               </div>
               <span className="text-[12px] font-bold text-[#F5F7FA]/30 uppercase tracking-[0.3em]">4.8/5 from 200+ reviews</span>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Dashboard UI (55%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            {/* Visual Anchor with Cinematic Depth */}
            <div className="relative aspect-[16/11] lg:mr-[-160px] group">
               {/* Ambient Glow */}
               <div className="absolute -inset-10 bg-[#C89B2D]/10 blur-[120px] -z-10 animate-pulse opacity-50" />
               
               {/* Main Dashboard Panel */}
               <div className="relative h-full rounded-[48px] overflow-hidden border border-white/10 shadow-[0_80px_160px_rgba(0,0,0,0.9)] bg-[#07111F]/80 backdrop-blur-3xl group-hover:scale-[1.02] transition-transform duration-1000">
                 
                 {/* Internal Dashboard UI Structure */}
                 <div className="p-10 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-12">
                       <div className="flex items-center gap-5">
                          <div className="w-10 h-10 rounded-xl bg-[#C89B2D]/10 flex items-center justify-center">
                             <div className="w-4 h-4 border-2 border-[#C89B2D] rounded-sm" />
                          </div>
                          <div>
                             <div className="text-[10px] text-white/20 font-black uppercase tracking-widest mb-1">Programme OS</div>
                             <div className="text-[14px] text-white font-bold tracking-tight">System_Operational_Hub</div>
                          </div>
                       </div>
                       <div className="flex items-center gap-4">
                          <div className="px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/5 text-[9px] font-bold text-green-500 uppercase tracking-widest">Active_Node</div>
                       </div>
                    </div>

                    {/* Analytics Content Grid */}
                    <div className="grid grid-cols-2 gap-8 mb-12">
                       <div className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5">
                          <div className="text-[9px] text-white/20 font-black uppercase tracking-[0.2em] mb-4">Integrity Sync</div>
                          <div className="text-4xl font-bold text-white mb-2 tracking-tighter">98.4%</div>
                          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                             <motion.div 
                               initial={{ width: 0 }}
                               animate={{ width: "98.4%" }}
                               transition={{ duration: 2, delay: 1 }}
                               className="h-full bg-[#C89B2D] shadow-[0_0_10px_rgba(200,155,45,0.5)]" 
                             />
                          </div>
                       </div>
                       <div className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5">
                          <div className="text-[9px] text-white/20 font-black uppercase tracking-[0.2em] mb-4">Throughput</div>
                          <div className="text-4xl font-bold text-white mb-2 tracking-tighter">1.2M</div>
                          <div className="text-[10px] text-[#C89B2D] font-bold uppercase">Ops Per Cycle</div>
                       </div>
                    </div>

                    {/* Chart Visualization Area */}
                    <div className="flex-1 rounded-[32px] bg-white/[0.01] border border-white/[0.03] p-10 relative overflow-hidden">
                       <div className="absolute top-8 left-8">
                          <div className="text-[10px] text-white/20 font-black uppercase tracking-widest mb-2">Institutional Analytics</div>
                          <div className="text-2xl font-bold text-white">Delivery Performance</div>
                       </div>
                       
                       {/* Abstract Chart Bars */}
                       <div className="absolute bottom-8 left-8 right-8 flex items-end gap-3 h-32">
                          {[60, 40, 80, 55, 90, 70, 85, 45, 95, 65, 80, 75].map((h, i) => (
                            <motion.div 
                              key={i}
                              initial={{ height: 0 }}
                              animate={{ height: `${h}%` }}
                              transition={{ duration: 1.5, delay: 0.5 + (i * 0.1) }}
                              className="flex-1 bg-gradient-to-t from-[#C89B2D]/40 to-[#C89B2D] rounded-t-lg shadow-[0_0_15px_rgba(200,155,45,0.3)]"
                            />
                          ))}
                       </div>
                    </div>
                 </div>

                 {/* Cinematic Overlay textures */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.05] pointer-events-none" />
                 <div className="absolute inset-0 bg-[url('/dashboard-textures.png')] opacity-[0.05] mix-blend-screen scale-150 rotate-12 pointer-events-none" />
               </div>

               {/* Secondary Floating Metric Card */}
               <motion.div
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -bottom-8 -right-8 p-8 glass-card border-white/10 bg-[#081526]/90 shadow-[0_30px_60px_rgba(0,0,0,0.8)] min-w-[220px] rounded-[32px]"
               >
                  <div className="text-[9px] text-[#C89B2D] font-black uppercase tracking-[0.2em] mb-2">System Health</div>
                  <div className="text-2xl font-bold text-white mb-2">Optimal</div>
                  <div className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                     <span className="text-[10px] text-white/30 font-medium tracking-widest uppercase">Global_Active</span>
                  </div>
               </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Cinematic Transition to rest of page */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#040816] to-transparent z-20 pointer-events-none" />
    </section>
  );
}
