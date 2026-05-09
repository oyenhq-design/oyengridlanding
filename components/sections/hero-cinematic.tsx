"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Shield, Activity, Globe, Users } from "lucide-react";
import { DashboardMockup } from "./dashboard-mockup";

export function HeroHumanSystem() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#05070B] cinematic-warmth">
      
      {/* Background Layering */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/[0.03] blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-brand-gold/[0.02] blur-[150px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-8">
              <Shield className="w-3.5 h-3.5 text-brand-gold" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold">Enterprise Programme Operating System</span>
            </div>

            <h1 className="mb-8 max-w-[600px]">
              Run structured programmes with complete <span className="text-gold-highlight">operational clarity</span> at scale.
            </h1>

            <p className="text-editorial mb-12 max-w-xl text-[18px]">
              OYEN GRID helps organisations coordinate programmes, participants, sessions, communication and intelligence from one unified operational infrastructure. Serious infrastructure designed around real people.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
              <button className="btn-cinematic-gold w-full sm:w-auto">
                Start Building
              </button>
              <button className="flex items-center gap-2 text-[14px] font-bold text-white/40 hover:text-white transition-colors group uppercase tracking-[0.15em]">
                Talk to Architects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="pt-10 border-t border-white/5">
               <span className="text-[11px] font-bold text-white/20 uppercase tracking-[0.2em] mb-6 block">Trusted by operationally-driven institutions:</span>
               <div className="flex flex-wrap gap-10 items-center opacity-30 grayscale brightness-150">
                  <span className="font-black italic text-[18px]">ALTSCHOOL</span>
                  <span className="font-black italic text-[16px]">INGRESSIVE</span>
                  <span className="font-black italic text-[17px]">TALENTQL</span>
                  <span className="font-black italic text-[15px]">TECHSTARS</span>
               </div>
            </div>
          </motion.div>

          {/* RIGHT: Layered Cinematic Visual */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)]"
            >
               {/* Background: Human Ops Scene */}
               <div className="relative aspect-[4/5] w-full">
                  <Image 
                    src="/hero_human_ops_strategy_room_1778345713521.png" 
                    alt="Institutional Strategy Room" 
                    fill 
                    className="object-cover image-cinematic"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-transparent opacity-60" />
               </div>

               {/* Floating UI Panel 1: Orchestration */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-10 -left-10 w-[280px] z-20"
               >
                 <DashboardMockup small />
               </motion.div>

               {/* Floating UI Panel 2: Stats */}
               <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-20 -right-8 w-[240px] z-20 glass-panel p-5 glow-amber"
               >
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center">
                        <Activity className="w-4 h-4 text-brand-gold" />
                     </div>
                     <span className="text-[11px] font-black tracking-widest text-white/80">NODE_STATUS</span>
                  </div>
                  <div className="space-y-3">
                     <div className="h-1.5 w-full bg-brand-gold/20 rounded-full overflow-hidden">
                        <div className="h-full w-[84%] bg-brand-gold" />
                     </div>
                     <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-white/30">OPERATIONAL SYNC</span>
                        <span className="text-[10px] font-bold text-brand-gold">84%</span>
                     </div>
                  </div>
               </motion.div>

               {/* Activity Feed */}
               <div className="absolute top-1/2 -right-4 translate-y-[-50%] space-y-3 z-10">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-8 px-4 bg-white/[0.03] backdrop-blur-md border border-white/5 rounded-full flex items-center gap-3 text-[10px] font-bold text-white/40">
                       <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/60" />
                       PARTICIPANT_JOINED_{i*42}
                    </div>
                  ))}
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
    <div className="bg-[#0B1020]/40 border-y border-white/5 py-12 relative z-20 backdrop-blur-md">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {metrics.map((m, i) => (
            <div key={i} className="flex flex-col gap-1 border-l border-white/5 pl-10 first:border-0">
              <span className="text-[32px] font-black text-white tracking-tighter">{m.val}</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
