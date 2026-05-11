"use client";

import { motion } from "framer-motion";
import { 
  Users, Activity, PlayCircle, ShieldCheck, PieChart, 
  Settings, Clock, FileText, Box, BarChart3, ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    title: "Session Management",
    desc: "Manage high-quality live modules with advanced moderation and control.",
    icon: PlayCircle,
    size: "large"
  },
  {
    title: "Cohort Management",
    desc: "Organise cohorts, manage access and track participant progress.",
    icon: Users,
    size: "compact"
  },
  {
    title: "Attendance Tracking",
    desc: "Automated attendance capture with detailed participation analytics.",
    icon: Activity,
    size: "compact"
  },
  {
    title: "Assessments",
    desc: "Create quizzes, assignments and evaluations with ease.",
    icon: FileText,
    size: "large"
  },
  {
    title: "Resource Library",
    desc: "Store, organise and share materials securely with participants.",
    icon: Box,
    size: "compact"
  },
  {
    title: "Analytics & Reports",
    desc: "Real-time analytics and custom reports for smarter decisions.",
    icon: PieChart,
    size: "compact"
  }
];

export function OperationalInfrastructure() {
  return (
    <section className="py-40 bg-[#050816] relative overflow-hidden border-b border-white/5">
      
      {/* LUXURY BACKGROUND AMBIENCE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-brand-gold/[0.02] blur-[180px] rounded-full" />
         <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="container-custom relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-8"
          >
             <div className="w-8 h-[1px] bg-brand-gold/30" />
             <span className="eyebrow tracking-[0.4em] text-brand-gold font-black uppercase">Operational Infrastructure</span>
             <div className="w-8 h-[1px] bg-brand-gold/30" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[44px] md:text-[64px] font-bold text-white max-w-[1000px] mx-auto leading-[1.05] tracking-tighter mb-10"
          >
            Everything needed to coordinate <br className="hidden md:block" />
            <span className="text-brand-gold">institutional programme operations.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[20px] leading-relaxed text-white/40 max-w-[800px] mx-auto font-medium"
          >
            OYEN GRID unifies programme delivery, participant coordination, communication, analytics and operational intelligence into one connected infrastructure layer.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-24 items-start">
          
          {/* LEFT: MINIMALIST OPERATIONS COMMAND CENTER */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
             <div className="relative rounded-[40px] border border-white/10 bg-[#080B14]/80 backdrop-blur-xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden">
                {/* Dashboard Header */}
                <div className="px-12 py-8 border-b border-white/5 flex items-center justify-between">
                   <div className="flex items-center gap-6">
                      <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                         <Settings className="w-5 h-5 text-brand-gold" />
                      </div>
                      <div>
                         <div className="text-[14px] font-black text-white uppercase tracking-widest">Operations Intelligence</div>
                         <div className="text-[11px] text-white/30 font-medium tracking-wide">Institutional Coordination Engine</div>
                      </div>
                   </div>
                   <div className="flex items-center gap-8">
                      <div className="flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse" />
                         <span className="text-[11px] font-bold text-white/60 uppercase tracking-widest">System Active</span>
                      </div>
                   </div>
                </div>

                {/* Dashboard Main Content */}
                <div className="p-12 space-y-12">
                   
                   {/* Top Visual: Large Analytics Area */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-8">
                         <div className="text-[12px] text-white/30 uppercase tracking-[0.2em] font-black">Participant Analytics</div>
                         <div className="h-[180px] w-full relative">
                            <svg className="w-full h-full" viewBox="0 0 400 150">
                               <defs>
                                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                     <stop offset="0%" stopColor="#F5B942" stopOpacity="0.2" />
                                     <stop offset="100%" stopColor="#F5B942" stopOpacity="0" />
                                  </linearGradient>
                               </defs>
                               <motion.path
                                 d="M0 120 C 50 110, 100 140, 150 80 S 250 40, 300 90 S 350 20, 400 60"
                                 fill="none"
                                 stroke="#F5B942"
                                 strokeWidth="3"
                                 initial={{ pathLength: 0 }}
                                 whileInView={{ pathLength: 1 }}
                                 viewport={{ once: true }}
                                 transition={{ duration: 2, ease: "easeInOut" }}
                               />
                               <motion.path
                                 d="M0 120 C 50 110, 100 140, 150 80 S 250 40, 300 90 S 350 20, 400 60 V 150 H 0 Z"
                                 fill="url(#chartGradient)"
                                 initial={{ opacity: 0 }}
                                 whileInView={{ opacity: 1 }}
                                 viewport={{ once: true }}
                                 transition={{ duration: 1.5, delay: 0.5 }}
                               />
                            </svg>
                            <div className="absolute top-0 right-0 text-right">
                               <div className="text-[28px] font-bold text-white tracking-tighter">2,847</div>
                               <div className="text-[11px] font-bold text-brand-gold uppercase tracking-widest">+18.4% Growth</div>
                            </div>
                         </div>
                      </div>

                      <div className="space-y-8">
                         <div className="text-[12px] text-white/30 uppercase tracking-[0.2em] font-black">Attendance Pulse</div>
                         <div className="flex items-center gap-10">
                            <div className="relative w-32 h-32">
                               <svg className="w-full h-full rotate-[-90deg]">
                                  <circle cx="64" cy="64" r="54" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="8" />
                                  <motion.circle 
                                    cx="64" cy="64" r="54" fill="none" stroke="#F5B942" strokeWidth="8" 
                                    strokeDasharray="339.2"
                                    initial={{ strokeDashoffset: 339.2 }}
                                    whileInView={{ strokeDashoffset: 339.2 * 0.08 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 2, ease: "easeOut" }}
                                    strokeLinecap="round"
                                  />
                               </svg>
                               <div className="absolute inset-0 flex flex-col items-center justify-center">
                                  <span className="text-[28px] font-black text-white">92%</span>
                               </div>
                            </div>
                            <div className="space-y-4">
                               <div className="flex items-center gap-3">
                                  <div className="w-2 h-2 rounded-full bg-brand-gold" />
                                  <span className="text-[13px] font-bold text-white/60">Institutional Target</span>
                               </div>
                               <div className="flex items-center gap-3">
                                  <div className="w-2 h-2 rounded-full bg-white/10" />
                                  <span className="text-[13px] font-bold text-white/30">Benchmark (85%)</span>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Session Activity Timeline */}
                   <div className="pt-12 border-t border-white/5">
                      <div className="flex items-center justify-between mb-10">
                         <div className="text-[12px] text-white/30 uppercase tracking-[0.2em] font-black">Session Activity Timeline</div>
                         <div className="flex items-center gap-4">
                            <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white/40 uppercase tracking-widest">Real-time Feed</div>
                         </div>
                      </div>
                      <div className="relative">
                         <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-white/5" />
                         <div className="flex justify-between relative">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <div key={i} className="relative group">
                                 <motion.div 
                                   initial={{ scale: 0 }}
                                   whileInView={{ scale: 1 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: i * 0.2 }}
                                   className={cn(
                                     "w-4 h-4 rounded-full border-2 transition-all duration-500 relative z-10",
                                     i === 3 ? "bg-brand-gold border-brand-gold shadow-[0_0_15px_#F5B942]" : "bg-[#080B14] border-white/20"
                                   )}
                                 />
                                 <div className={cn(
                                   "absolute top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-colors",
                                   i === 3 ? "text-brand-gold" : "text-white/20"
                                 )}>
                                    Phase 0{i}
                                 </div>
                                 {i === 3 && (
                                   <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl bg-brand-gold/10 border border-brand-gold/20 backdrop-blur-xl whitespace-nowrap">
                                      <span className="text-[11px] font-black text-brand-gold uppercase tracking-widest">Live Delivery</span>
                                   </div>
                                 )}
                              </div>
                            ))}
                         </div>
                      </div>
                   </div>

                   {/* Metric Cards Bottom */}
                   <div className="grid grid-cols-3 gap-8 pt-12">
                      <div className="space-y-2">
                         <div className="text-[10px] text-white/20 uppercase tracking-widest font-black">Active Cohorts</div>
                         <div className="text-[24px] font-bold text-white">42</div>
                      </div>
                      <div className="space-y-2">
                         <div className="text-[10px] text-white/20 uppercase tracking-widest font-black">Programme Health</div>
                         <div className="text-[24px] font-bold text-emerald-400">98.2%</div>
                      </div>
                      <div className="space-y-2">
                         <div className="text-[10px] text-white/20 uppercase tracking-widest font-black">Operational Scale</div>
                         <div className="text-[24px] font-bold text-white">Enterprise</div>
                      </div>
                   </div>
                </div>

                {/* Dashboard Footer */}
                <div className="px-12 py-8 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
                   <div className="flex items-center gap-6">
                      <ShieldCheck className="w-5 h-5 text-white/20" />
                      <div className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em]">Institutional Governance Protocol v4.2</div>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                         {[1, 2, 3].map((i) => (
                           <div key={i} className="w-8 h-8 rounded-full border-2 border-[#080B14] bg-white/5 flex items-center justify-center">
                              <Users className="w-4 h-4 text-white/30" />
                           </div>
                         ))}
                      </div>
                      <span className="text-[11px] font-bold text-white/60 pl-2">Active Coordinators</span>
                   </div>
                </div>
             </div>

             {/* Background glow behind dashboard */}
             <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-gold/10 blur-[100px] rounded-full pointer-events-none" />
          </motion.div>

          {/* RIGHT: SOPHISTICATED STAGGERED CAPABILITIES */}
          <div className="space-y-8">
             <div className="grid grid-cols-1 gap-8">
                {capabilities.map((cap, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ x: 10 }}
                    className={cn(
                      "group relative p-10 rounded-[32px] bg-white/[0.015] border border-white/5 backdrop-blur-md transition-all duration-500 hover:bg-white/[0.04] hover:border-brand-gold/30 hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)]",
                      cap.size === "large" ? "min-h-[220px]" : "min-h-[160px]",
                      i % 2 === 1 && "ml-12" // Stagger right
                    )}
                  >
                     <div className="flex items-start gap-10">
                        <div className="w-16 h-16 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center shrink-0 group-hover:border-brand-gold/30 group-hover:bg-brand-gold/5 transition-all duration-700 shadow-inner relative overflow-hidden">
                           <cap.icon className="w-7 h-7 text-brand-gold/40 group-hover:text-brand-gold transition-colors duration-700 relative z-10" />
                           <div className="absolute inset-0 bg-brand-gold/20 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                        </div>
                        
                        <div className="space-y-4">
                           <h3 className="text-[22px] font-bold text-white tracking-tight group-hover:text-brand-gold transition-colors duration-500 leading-tight">{cap.title}</h3>
                           <p className="text-[15px] leading-relaxed text-white/40 group-hover:text-white/60 transition-colors duration-500 max-w-[340px]">
                             {cap.desc}
                           </p>
                           
                           {/* Luxury Status Dot */}
                           <div className="flex items-center gap-2 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                              <div className="w-1 h-1 rounded-full bg-brand-gold" />
                              <span className="text-[10px] font-black text-brand-gold uppercase tracking-widest">Institutional Ready</span>
                           </div>
                        </div>
                     </div>

                     {/* Subtle Blueprint Lines */}
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-white/5" />
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-white/5" />

                     {/* Hover Bloom Overlay */}
                     <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                  </motion.div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
