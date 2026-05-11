"use client";

import { motion } from "framer-motion";
import { 
  Users, Activity, PlayCircle, ShieldCheck, PieChart, 
  Settings, Clock, FileText, Box
} from "lucide-react";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    title: "Session Management",
    desc: "Manage high-quality live modules with advanced moderation.",
    icon: PlayCircle
  },
  {
    title: "Cohort Management",
    desc: "Organise cohorts, manage access and track progress.",
    icon: Users
  },
  {
    title: "Attendance Tracking",
    desc: "Automated capture with participation analytics.",
    icon: Activity
  },
  {
    title: "Assessments",
    desc: "Create quizzes, assignments and evaluations.",
    icon: FileText
  },
  {
    title: "Resource Library",
    desc: "Store and share materials securely.",
    icon: Box
  },
  {
    title: "Analytics & Reports",
    desc: "Real-time analytics for smarter decisions.",
    icon: PieChart
  }
];

export function OperationalInfrastructure() {
  return (
    <section className="py-24 bg-[#050816] relative overflow-hidden border-b border-white/5">
      
      {/* COMPACT BACKGROUND AMBIENCE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-brand-gold/[0.02] blur-[140px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* COMPACT HEADER */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-5"
          >
             <div className="w-6 h-[1px] bg-brand-gold/30" />
             <span className="eyebrow tracking-[0.3em] text-brand-gold/80 font-black uppercase text-[10px]">Operational Infrastructure</span>
             <div className="w-6 h-[1px] bg-brand-gold/30" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[36px] md:text-[48px] font-bold text-white max-w-[850px] mx-auto leading-[1.1] tracking-tighter mb-6"
          >
            Everything needed to coordinate <br className="hidden md:block" />
            <span className="text-brand-gold">institutional programme operations.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[16px] leading-relaxed text-white/40 max-w-[650px] mx-auto font-medium"
          >
            OYEN GRID unifies programme delivery, participant coordination, communication and intelligence into one connected layer.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-start">
          
          {/* LEFT: COMPACT OPERATIONS DASHBOARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
             <div className="relative rounded-[32px] border border-white/10 bg-[#080B14]/60 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.6)] overflow-hidden">
                {/* Dashboard Header - Tighter */}
                <div className="px-8 py-5 border-b border-white/5 flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                         <Settings className="w-4 h-4 text-brand-gold/80" />
                      </div>
                      <div className="text-[12px] font-black text-white uppercase tracking-widest">Operations Hub</div>
                   </div>
                   <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                      <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">System Active</span>
                   </div>
                </div>

                {/* Dashboard Content - Streamlined */}
                <div className="p-8 space-y-10">
                   
                   {/* Main Analytics Row */}
                   <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-10">
                      <div className="space-y-6">
                         <div className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-black">Engagement Telemetry</div>
                         <div className="h-[120px] w-full relative">
                            <svg className="w-full h-full" viewBox="0 0 400 120">
                               <motion.path
                                 d="M0 100 C 50 90, 100 110, 150 60 S 250 30, 300 70 S 350 10, 400 40"
                                 fill="none"
                                 stroke="#F5B942"
                                 strokeWidth="2.5"
                                 initial={{ pathLength: 0 }}
                                 whileInView={{ pathLength: 1 }}
                                 viewport={{ once: true }}
                                 transition={{ duration: 1.5 }}
                               />
                               <motion.path
                                 d="M0 100 C 50 90, 100 110, 150 60 S 250 30, 300 70 S 350 10, 400 40 V 120 H 0 Z"
                                 fill="url(#chartGradientCompact)"
                                 initial={{ opacity: 0 }}
                                 whileInView={{ opacity: 0.3 }}
                                 viewport={{ once: true }}
                               />
                               <defs>
                                  <linearGradient id="chartGradientCompact" x1="0" y1="0" x2="0" y2="1">
                                     <stop offset="0%" stopColor="#F5B942" stopOpacity="0.5" />
                                     <stop offset="100%" stopColor="#F5B942" stopOpacity="0" />
                                  </linearGradient>
                               </defs>
                            </svg>
                            <div className="absolute top-0 right-0">
                               <div className="text-[22px] font-bold text-white tracking-tight">2,847</div>
                               <div className="text-[9px] font-bold text-brand-gold uppercase tracking-widest">Live Users</div>
                            </div>
                         </div>
                      </div>

                      <div className="space-y-6">
                         <div className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-black">Attendance</div>
                         <div className="flex items-center gap-6">
                            <div className="relative w-20 h-20">
                               <svg className="w-full h-full rotate-[-90deg]">
                                  <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="6" />
                                  <motion.circle 
                                    cx="40" cy="40" r="34" fill="none" stroke="#F5B942" strokeWidth="6" 
                                    strokeDasharray="213.5"
                                    initial={{ strokeDashoffset: 213.5 }}
                                    whileInView={{ strokeDashoffset: 213.5 * 0.08 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5 }}
                                    strokeLinecap="round"
                                  />
                               </svg>
                               <div className="absolute inset-0 flex items-center justify-center">
                                  <span className="text-[16px] font-black text-white">92%</span>
                               </div>
                            </div>
                            <div className="space-y-2">
                               <div className="text-[12px] font-bold text-white/60 leading-none">Target Meta</div>
                               <div className="text-[10px] text-white/20 font-bold uppercase tracking-widest">Achieved</div>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Compact Activity Bar */}
                   <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                         <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center">
                            <ShieldCheck className="w-3.5 h-3.5 text-white/30" />
                         </div>
                         <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.1em]">Protocol v4.2 Active</span>
                      </div>
                      <div className="flex items-center gap-6 text-[10px] font-bold text-white/60">
                         <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/40" />
                            <span>18 Live</span>
                         </div>
                         <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                            <span>42 Cohorts</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>

          {/* RIGHT: COMPACT STAGGERED CARDS */}
          <div className="grid grid-cols-2 gap-4">
             {capabilities.map((cap, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 * i, duration: 0.8 }}
                 whileHover={{ y: -5 }}
                 className={cn(
                   "group relative p-6 rounded-[24px] bg-white/[0.015] border border-white/5 backdrop-blur-md transition-all duration-500 hover:bg-white/[0.03] hover:border-brand-gold/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]",
                   i % 2 === 1 && "mt-6"
                 )}
               >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-5 group-hover:border-brand-gold/30 group-hover:bg-brand-gold/5 transition-all duration-500">
                     <cap.icon className="w-5 h-5 text-brand-gold/40 group-hover:text-brand-gold transition-colors" />
                  </div>
                  
                  <h3 className="text-[15px] font-bold text-white mb-2 tracking-tight group-hover:text-brand-gold transition-colors duration-500">{cap.title}</h3>
                  <p className="text-[11px] leading-relaxed text-white/30 group-hover:text-white/50 transition-colors duration-500">
                    {cap.desc}
                  </p>

                  <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
               </motion.div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
}
