"use client";

import { motion } from "framer-motion";
import { 
  LayoutGrid, Users, Activity, PlayCircle, ShieldCheck, PieChart, 
  Settings, Globe, Bell, FileText, CheckCircle2, ChevronRight, 
  BarChart3, Clock, AlertTriangle, Box
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const capabilities = [
  {
    title: "Session Management",
    desc: "Manage high-quality live modules with advanced moderation and control.",
    icon: PlayCircle,
    status: "Live",
    size: "tall"
  },
  {
    title: "Cohort Management",
    desc: "Organise cohorts, manage access and track participant progress.",
    icon: Users,
    status: "Active",
    size: "compact"
  },
  {
    title: "Attendance Tracking",
    desc: "Automated attendance capture with detailed participation analytics.",
    icon: BarChart3,
    status: "Monitoring",
    size: "compact"
  },
  {
    title: "Assessments",
    desc: "Create quizzes, assignments and evaluations with ease.",
    icon: FileText,
    status: "In Progress",
    size: "tall"
  },
  {
    title: "Resource Library",
    desc: "Store, organise and share materials securely with participants.",
    icon: Box,
    status: "Synced",
    size: "compact"
  },
  {
    title: "Analytics & Reports",
    desc: "Real-time analytics and custom reports for smarter decisions.",
    icon: PieChart,
    status: "Live",
    size: "compact"
  }
];

export function OperationalInfrastructure() {
  return (
    <section className="py-32 bg-[#050816] relative overflow-hidden border-b border-white/5">
      {/* AMBIENT BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-brand-gold/[0.03] blur-[160px] rounded-full" />
         <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-500/[0.02] blur-[140px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        {/* HEADER */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
             <div className="w-1.5 h-[1px] bg-brand-gold/40" />
             <span className="eyebrow tracking-[0.4em] text-brand-gold/80">OPERATIONAL INFRASTRUCTURE</span>
             <div className="w-1.5 h-[1px] bg-brand-gold/40" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[40px] md:text-[56px] font-bold text-white max-w-[900px] mx-auto leading-[1.05] tracking-tighter mb-8"
          >
            Everything needed to coordinate <br className="hidden md:block" />
            <span className="text-brand-gold">institutional programme operations.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-editorial max-w-[720px] mx-auto opacity-60"
          >
            OYEN GRID unifies programme delivery, participant coordination, communication, analytics and operational intelligence into one connected infrastructure layer.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          
          {/* LEFT: OPERATIONS COMMAND CENTER DASHBOARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
             {/* MAIN PANEL CONTAINER */}
             <div className="relative rounded-[32px] border border-white/10 bg-[#080B14] shadow-2xl overflow-hidden">
                {/* Dashboard Header Bar */}
                <div className="px-8 py-5 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                   <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                         <div className="w-4 h-4 rounded-sm bg-brand-gold/40 flex items-center justify-center">
                            <div className="w-2 h-2 bg-brand-gold rounded-[1px]" />
                         </div>
                      </div>
                      <div className="flex items-center gap-3">
                         <span className="text-[12px] font-black text-white uppercase tracking-widest">OYEN GRID</span>
                         <div className="w-[1px] h-3 bg-white/10" />
                         <span className="text-[11px] text-white/40 font-medium">Operations Command Center</span>
                      </div>
                   </div>
                   <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                         <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Live Overview</span>
                      </div>
                      <div className="text-[10px] text-white/20 uppercase tracking-widest flex items-center gap-2">
                         Updated just now <Clock className="w-3 h-3" />
                      </div>
                   </div>
                </div>

                {/* DASHBOARD CONTENT GRID */}
                <div className="p-8 space-y-8">
                   
                   {/* TOP ROW: Overview, Sessions, Map */}
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      
                      {/* Programme Overview */}
                      <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 relative overflow-hidden">
                         <div className="text-[11px] text-white/30 uppercase tracking-widest font-bold mb-6">Programme Overview</div>
                         <div className="flex items-center justify-between">
                            <div className="relative w-24 h-24">
                               <svg className="w-full h-full rotate-[-90deg]">
                                  <circle cx="48" cy="48" r="40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
                                  <motion.circle 
                                    cx="48" cy="48" r="40" fill="none" stroke="#F5B942" strokeWidth="6" 
                                    strokeDasharray="251.2"
                                    initial={{ strokeDashoffset: 251.2 }}
                                    whileInView={{ strokeDashoffset: 251.2 * 0.22 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    strokeLinecap="round"
                                  />
                               </svg>
                               <div className="absolute inset-0 flex flex-col items-center justify-center">
                                  <span className="text-[20px] font-bold text-white">78%</span>
                               </div>
                            </div>
                            <div className="space-y-3">
                               <div className="flex justify-between items-center gap-8">
                                  <span className="text-[10px] text-white/30 font-medium">Active Programmes</span>
                                  <span className="text-[14px] font-bold text-brand-gold">24</span>
                               </div>
                               <div className="flex justify-between items-center gap-8">
                                  <span className="text-[10px] text-white/30 font-medium">Live Sessions</span>
                                  <span className="text-[14px] font-bold text-white">18</span>
                               </div>
                               <div className="flex justify-between items-center gap-8">
                                  <span className="text-[10px] text-white/30 font-medium">Completed</span>
                                  <span className="text-[14px] font-bold text-white">156</span>
                               </div>
                            </div>
                         </div>
                      </div>

                      {/* Live Sessions Sparkline */}
                      <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                         <div className="text-[11px] text-white/30 uppercase tracking-widest font-bold mb-4">Live Sessions</div>
                         <div className="flex items-center gap-2 mb-4">
                            <span className="text-[20px] font-bold text-white">18</span>
                            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest pt-1">In Progress</span>
                         </div>
                         <div className="h-12 w-full relative mb-4">
                            <svg className="w-full h-full overflow-visible">
                               <motion.path
                                 d="M0 40 Q 30 20, 60 45 T 120 30 T 180 50 T 240 20"
                                 fill="none"
                                 stroke="#F5B942"
                                 strokeWidth="2"
                                 initial={{ pathLength: 0 }}
                                 whileInView={{ pathLength: 1 }}
                                 viewport={{ once: true }}
                                 transition={{ duration: 2 }}
                               />
                               <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/5" />
                            </svg>
                         </div>
                         <div className="flex justify-between items-end">
                            <div>
                               <div className="text-[9px] text-white/20 uppercase tracking-widest font-bold">Total Participants</div>
                               <div className="text-[16px] font-bold text-white">2,847</div>
                            </div>
                            <div className="text-[10px] font-bold text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                               <Activity className="w-2 h-2" /> 12%
                            </div>
                         </div>
                      </div>

                      {/* Participant Activity Map */}
                      <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden relative">
                         <div className="text-[11px] text-white/30 uppercase tracking-widest font-bold mb-4">Participant Activity</div>
                         <div className="relative h-20 w-full opacity-40">
                            <Globe className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 text-brand-gold/10" />
                            {/* Animated Map Dots */}
                            {[...Array(6)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-brand-gold rounded-full"
                                style={{
                                  top: `${20 + Math.random() * 60}%`,
                                  left: `${10 + Math.random() * 80}%`,
                                }}
                                animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
                                transition={{ duration: 2 + i, repeat: Infinity, delay: i * 0.5 }}
                              />
                            ))}
                         </div>
                         <div className="flex gap-4 mt-6">
                            <div className="flex items-center gap-1.5">
                               <div className="w-1 h-1 rounded-full bg-brand-gold" />
                               <span className="text-[9px] text-white/40 font-bold uppercase tracking-widest">High Activity</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                               <div className="w-1 h-1 rounded-full bg-white/20" />
                               <span className="text-[9px] text-white/40 font-bold uppercase tracking-widest">Active Regions</span>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* MID ROW: Bar Chart & Alerts */}
                   <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6">
                      
                      {/* Attendance Pulse Bar Chart */}
                      <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/5">
                         <div className="flex items-center justify-between mb-8">
                            <div className="text-[11px] text-white/30 uppercase tracking-widest font-bold">Attendance Pulse</div>
                            <div className="text-right">
                               <div className="text-[20px] font-bold text-white">92.4%</div>
                               <div className="text-[9px] text-white/20 uppercase tracking-widest font-bold">Avg. Attendance</div>
                            </div>
                         </div>
                         <div className="flex items-end justify-between h-32 gap-3">
                            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => {
                              const heights = [40, 60, 55, 80, 75, 45, 65];
                              return (
                                <div key={day} className="flex-1 flex flex-col items-center gap-3 group">
                                   <div className="relative w-full h-full flex items-end">
                                      <motion.div 
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${heights[i]}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: i * 0.1 }}
                                        className="w-full bg-brand-gold/10 border-t border-brand-gold/40 rounded-t-sm group-hover:bg-brand-gold/30 transition-colors relative"
                                      >
                                         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-brand-gold rounded-full shadow-[0_0_10px_#F5B942]" />
                                      </motion.div>
                                   </div>
                                   <span className="text-[9px] text-white/20 font-black uppercase tracking-widest">{day}</span>
                                </div>
                              );
                            })}
                         </div>
                      </div>

                      {/* Operational Alerts Feed */}
                      <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/5">
                         <div className="text-[11px] text-white/30 uppercase tracking-widest font-bold mb-8">Operational Alerts</div>
                         <div className="space-y-5">
                            {[
                              { icon: AlertTriangle, color: "text-amber-500", text: "Low attendance detected", sub: "Found in 2 live sessions", time: "2m ago" },
                              { icon: Box, color: "text-brand-gold", text: "Resource upload pending", sub: "3 programmes affected", time: "15m ago" },
                              { icon: FileText, color: "text-brand-gold", text: "Assessment due soon", sub: "5 cohorts awaiting action", time: "32m ago" },
                            ].map((alert, i) => (
                              <div key={i} className="flex gap-4">
                                 <div className={cn("w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/5", alert.color)}>
                                    <alert.icon className="w-4 h-4" />
                                 </div>
                                 <div className="flex-1">
                                    <div className="flex justify-between items-start mb-0.5">
                                       <span className="text-[12px] font-bold text-white/80">{alert.text}</span>
                                       <span className="text-[9px] text-white/20 font-medium">{alert.time}</span>
                                    </div>
                                    <div className="text-[10px] text-white/30">{alert.sub}</div>
                                 </div>
                              </div>
                            ))}
                         </div>
                         <button className="w-full mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-bold text-white/40 uppercase tracking-widest hover:text-brand-gold transition-colors">
                            View all alerts <ChevronRight className="w-3 h-3" />
                         </button>
                      </div>
                   </div>

                   {/* BOTTOM ROW: Programme Flow Workflow */}
                   <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
                      <div className="text-[11px] text-white/30 uppercase tracking-widest font-bold mb-10">Programme Flow</div>
                      <div className="flex items-center justify-between relative">
                         {/* Connecting Lines */}
                         <div className="absolute top-[21px] left-8 right-8 h-[1px] bg-white/5 z-0" />
                         
                         {[
                           { label: "Programme Setup", icon: Settings },
                           { label: "Cohort Onboarding", icon: Users },
                           { label: "Live Delivery", icon: PlayCircle, active: true },
                           { label: "Assessments", icon: FileText },
                           { label: "Reporting", icon: CheckCircle2 }
                         ].map((step, i) => (
                           <div key={i} className="relative z-10 flex flex-col items-center gap-3">
                              <div className={cn(
                                "w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-500 shadow-lg backdrop-blur-md",
                                step.active 
                                  ? "bg-brand-gold/20 border-brand-gold/40 shadow-brand-gold/10" 
                                  : "bg-[#080B14] border-white/10"
                              )}>
                                 <step.icon className={cn("w-5 h-5", step.active ? "text-brand-gold" : "text-white/20")} />
                              </div>
                              <span className={cn(
                                "text-[10px] font-bold uppercase tracking-widest transition-colors",
                                step.active ? "text-brand-gold" : "text-white/20"
                              )}>{step.label}</span>
                              {step.active && (
                                <motion.div 
                                  layoutId="active-flow"
                                  className="absolute -top-1 -right-1 w-3 h-3 bg-brand-gold rounded-full border-2 border-[#080B14] animate-pulse" 
                                />
                              )}
                           </div>
                         ))}
                      </div>
                   </div>
                </div>

                {/* DASHBOARD FOOTER SYSTEM STATUS */}
                <div className="px-8 py-6 border-t border-white/5 flex items-center justify-center gap-12 bg-white/[0.01]">
                   <div className="flex items-center gap-4">
                      <Users className="w-4 h-4 text-white/20" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                      <ShieldCheck className="w-4 h-4 text-white/20" />
                   </div>
                   <div className="flex items-center gap-4 bg-brand-gold/[0.03] border border-brand-gold/20 rounded-full px-6 py-2.5 shadow-inner">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                      <span className="text-[11px] font-bold text-white/80 uppercase tracking-widest">Unified Operational Layer</span>
                      <div className="flex items-center gap-3 text-[9px] text-white/30 uppercase tracking-widest font-black pl-3 border-l border-white/10">
                         <span>Secure</span>
                         <span className="w-1 h-1 rounded-full bg-white/10" />
                         <span>Scalable</span>
                         <span className="w-1 h-1 rounded-full bg-white/10" />
                         <span>Intelligent</span>
                      </div>
                   </div>
                   <div className="flex items-center gap-4">
                      <Activity className="w-4 h-4 text-white/20" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                      <ShieldCheck className="w-4 h-4 text-white/20" />
                   </div>
                </div>

             </div>

             {/* DASHBOARD DECORATIVE ELEMENTS */}
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-gold/20 blur-[60px] rounded-full pointer-events-none opacity-40" />
             <div className="absolute top-12 -right-12 px-5 py-2.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-xl flex items-center gap-3 shadow-2xl animate-float">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[11px] font-bold text-white uppercase tracking-widest">All Systems Operational</span>
             </div>
          </motion.div>

          {/* RIGHT: STAGGERED CAPABILITY MODULES */}
          <div className="grid grid-cols-2 gap-6 items-start">
             {capabilities.map((cap, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 * i, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                 whileHover={{ y: -8 }}
                 className={cn(
                   "group relative p-8 rounded-[28px] bg-white/[0.015] border border-white/5 backdrop-blur-md transition-all duration-500 hover:bg-white/[0.04] hover:border-brand-gold/30 hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)]",
                   cap.size === "tall" ? "pb-16" : "pb-10",
                   i === 1 && "mt-12",
                   i === 3 && "mt-12",
                   i === 5 && "mt-12"
                 )}
               >
                  {/* Status Indicator */}
                  <div className="absolute top-6 right-6 flex items-center gap-2 px-2 py-0.5 rounded-full bg-white/[0.02] border border-white/5 group-hover:border-brand-gold/20 transition-colors">
                     <div className="w-1 h-1 rounded-full bg-brand-gold animate-pulse" />
                     <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em] group-hover:text-white/40">{cap.status}</span>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-8 group-hover:border-brand-gold/30 group-hover:bg-brand-gold/5 transition-all duration-500 shadow-inner overflow-hidden relative">
                     <cap.icon className="w-6 h-6 text-brand-gold/40 group-hover:text-brand-gold transition-colors duration-500 relative z-10" />
                     <div className="absolute inset-0 bg-brand-gold/20 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                  </div>
                  
                  <h3 className="text-[18px] font-bold text-white mb-4 tracking-tight group-hover:text-brand-gold transition-colors duration-500 leading-tight">{cap.title}</h3>
                  
                  <p className="text-[13px] leading-relaxed text-white/30 group-hover:text-white/50 transition-colors duration-500">
                    {cap.desc}
                  </p>

                  {/* Corner Accent Detail */}
                  <div className="absolute bottom-6 right-8 w-6 h-[1px] bg-white/5 group-hover:bg-brand-gold/40 transition-colors duration-700" />
                  <div className="absolute bottom-8 right-6 w-[1px] h-6 bg-white/5 group-hover:bg-brand-gold/40 transition-colors duration-700" />

                  {/* Inner Glow Layer */}
                  <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
               </motion.div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
}
