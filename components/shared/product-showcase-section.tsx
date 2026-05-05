"use client";

import { motion } from "framer-motion";
import { Users, Clock, Monitor } from "lucide-react";

export function ProductShowcaseSection() {
  return (
    <section className="py-32 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* TEXT CONTENT */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-3 text-[#D4AF37] text-[13px] font-bold tracking-[0.2em] uppercase mb-6">
              <Monitor className="w-4 h-4" />
              Operational Control
            </div>
            <h2 className="text-[40px] md:text-[60px] font-bold text-white mb-6 tracking-tight leading-[1.1]">
              One platform. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFF0B3]">Absolute clarity.</span>
            </h2>
            <p className="text-lg md:text-xl text-[#A1A1AA] max-w-2xl mx-auto font-light leading-relaxed">
              Eliminate fragmentation. Monitor cohorts, track automated milestones, and manage delivery through a single high-fidelity interface.
            </p>
          </motion.div>
        </div>
        
        {/* LAYERED UI SHOWCASE */}
        <div className="relative w-full max-w-[1000px] mx-auto h-[600px] flex items-center justify-center">
          
          {/* Main Dashboard (Base) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 w-full aspect-[16/10] bg-[rgba(20,20,20,0.8)] backdrop-blur-xl border border-white/10 rounded-[32px] shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            {/* Mockup Content Mock */}
            <div className="p-8 h-full flex flex-col">
              <div className="flex justify-between items-center mb-10 pb-6 border-b border-white/5">
                <div className="flex gap-4">
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                </div>
                <div className="h-4 w-32 bg-white/5 rounded-full" />
              </div>
              <div className="grid grid-cols-3 gap-6 mb-10">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-32 bg-white/[0.03] border border-white/5 rounded-2xl" />
                ))}
              </div>
              <div className="flex-1 bg-white/[0.03] border border-white/5 rounded-2xl" />
            </div>
          </motion.div>

          {/* Overlay Card 1: Session View */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="absolute -left-12 bottom-12 z-20 w-[320px] bg-[rgba(30,30,30,0.9)] backdrop-blur-2xl border border-[#D4AF37]/30 rounded-2xl p-6 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <div className="text-[10px] text-[#A1A1AA] uppercase tracking-widest font-bold">Session Activity</div>
                <div className="text-white font-bold">Week 04 Recap</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-[#D4AF37]" />
              </div>
              <div className="flex justify-between text-[11px] font-medium text-[#A1A1AA]">
                <span>Retention</span>
                <span className="text-white">85%</span>
              </div>
            </div>
          </motion.div>

          {/* Overlay Card 2: Participant List */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: -30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="absolute -right-8 top-12 z-20 w-[280px] bg-[rgba(30,30,30,0.9)] backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-[#A1A1AA]" />
                <span className="text-white font-bold text-sm">Active Cohort</span>
              </div>
              <span className="text-[#D4AF37] text-[10px] font-bold bg-[#D4AF37]/10 px-2 py-0.5 rounded">LIVE</span>
            </div>
            <div className="space-y-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10" />
                  <div className="flex-1 space-y-1">
                    <div className="h-2 w-24 bg-white/10 rounded-full" />
                    <div className="h-1.5 w-16 bg-white/5 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* METRICS STRIP */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-24 opacity-60">
          <div className="text-center group cursor-default">
            <div className="text-[40px] font-bold text-white mb-2 leading-none group-hover:text-[#D4AF37] transition-colors">98%</div>
            <div className="text-[13px] text-[#A1A1AA] font-bold uppercase tracking-widest">Avg. Completion Rate</div>
          </div>
          <div className="hidden sm:block w-[1px] h-12 bg-white/10"></div>
          <div className="text-center group cursor-default">
            <div className="text-[40px] font-bold text-white mb-2 leading-none group-hover:text-[#D4AF37] transition-colors">4.2k+</div>
            <div className="text-[13px] text-[#A1A1AA] font-bold uppercase tracking-widest">Active Participants</div>
          </div>
          <div className="hidden sm:block w-[1px] h-12 bg-white/10"></div>
          <div className="text-center group cursor-default">
            <div className="text-[40px] font-bold text-white mb-2 leading-none group-hover:text-[#D4AF37] transition-colors">100%</div>
            <div className="text-[13px] text-[#A1A1AA] font-bold uppercase tracking-widest">Data Integrity</div>
          </div>
        </div>

      </div>
    </section>
  );
}
