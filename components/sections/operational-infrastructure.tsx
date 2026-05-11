"use client";

import { motion } from "framer-motion";
import { 
  Users, Activity, PlayCircle, ShieldCheck, PieChart, 
  Settings, Clock, FileText, Box, BarChart3, ChevronRight,
  ClipboardCheck, LayoutGrid
} from "lucide-react";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    title: "Session Management",
    desc: "Manage high-quality live modules with advanced moderation and control.",
    icon: PlayCircle,
    offset: "mt-0"
  },
  {
    title: "Cohort Management",
    desc: "Organise cohorts, manage access and track participant progress.",
    icon: Users,
    offset: "mt-12"
  },
  {
    title: "Attendance Tracking",
    desc: "Automated attendance capture with detailed participation analytics.",
    icon: Activity,
    offset: "mt-6"
  },
  {
    title: "Assessments",
    desc: "Create quizzes, assignments and evaluations with ease.",
    icon: FileText,
    offset: "mt-16"
  },
  {
    title: "Resource Library",
    desc: "Store, organise and share materials securely with participants.",
    icon: Box,
    offset: "mt-8"
  },
  {
    title: "Analytics & Reports",
    desc: "Real-time analytics and custom reports for smarter decisions.",
    icon: PieChart,
    offset: "mt-2"
  }
];

export function OperationalInfrastructure() {
  return (
    <section className="py-40 bg-[#050816] relative overflow-hidden border-b border-white/5">
      
      {/* LUXURY AMBIENT GLOW */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-brand-gold/[0.03] blur-[180px] rounded-full" />
         <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="container-custom relative z-10">
        
        {/* HEADER - CENTERED & BREATHABLE */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
             <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/40" />
             <span className="eyebrow tracking-[0.4em] text-brand-gold font-black uppercase text-[11px]">Operational Infrastructure</span>
             <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/40" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[44px] md:text-[56px] font-bold text-white max-w-[1000px] mx-auto leading-[1.05] tracking-tighter mb-10"
          >
            Everything needed to coordinate <br className="hidden md:block" />
            <span className="text-brand-gold">institutional programme operations.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[18px] leading-relaxed text-white/40 max-w-[800px] mx-auto font-medium"
          >
            OYEN GRID unifies programme delivery, participant coordination, communication, analytics and operational intelligence into one connected infrastructure layer.
          </motion.p>
        </div>

        {/* 6-COLUMN ARCHITECTURAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 items-start">
           {capabilities.map((cap, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
               whileHover={{ y: -8 }}
               className={cn(
                 "group relative p-8 rounded-[32px] bg-white/[0.01] border border-white/5 backdrop-blur-xl transition-all duration-700 hover:bg-white/[0.03] hover:border-brand-gold/30 hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)] min-h-[320px] flex flex-col",
                 cap.offset
               )}
             >
                {/* Status Dot */}
                <div className="absolute top-6 right-6">
                   <div className="w-1 h-1 rounded-full bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[0_0_8px_#F5B942] animate-pulse" />
                </div>

                <div className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-10 group-hover:border-brand-gold/20 group-hover:bg-brand-gold/5 transition-all duration-700 shadow-inner overflow-hidden relative">
                   <cap.icon className="w-6 h-6 text-brand-gold/30 group-hover:text-brand-gold transition-colors duration-700 relative z-10" />
                   <div className="absolute inset-0 bg-brand-gold/20 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                </div>
                
                <h3 className="text-[18px] font-bold text-white mb-5 tracking-tight group-hover:text-brand-gold transition-colors duration-500 leading-tight">{cap.title}</h3>
                
                <p className="text-[13px] leading-relaxed text-white/30 group-hover:text-white/50 transition-colors duration-700">
                  {cap.desc}
                </p>

                {/* Vertical Architectural Detail */}
                <div className="mt-auto pt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
                   <div className="w-4 h-[1px] bg-brand-gold/40" />
                   <span className="text-[9px] font-black text-brand-gold uppercase tracking-[0.2em]">Institutional Ready</span>
                </div>

                {/* Bloom Effect */}
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
