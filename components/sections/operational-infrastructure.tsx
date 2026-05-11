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
    offset: "mt-8"
  },
  {
    title: "Attendance Tracking",
    desc: "Automated attendance capture with detailed participation analytics.",
    icon: Activity,
    offset: "mt-4"
  },
  {
    title: "Assessments",
    desc: "Create quizzes, assignments and evaluations with ease.",
    icon: FileText,
    offset: "mt-10"
  },
  {
    title: "Resource Library",
    desc: "Store, organise and share materials securely with participants.",
    icon: Box,
    offset: "mt-6"
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
    <section className="py-20 bg-[#050816] relative overflow-hidden border-b border-white/5">
      
      {/* REFINED AMBIENT GLOW */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-brand-gold/[0.02] blur-[140px] rounded-full" />
         <div className="absolute inset-0 opacity-[0.012]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />
      </div>

      <div className="container-custom relative z-10">
        
        {/* HEADER - REFINED & COMPACT */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
             <div className="w-1 h-1 rounded-full bg-brand-gold/40" />
             <span className="eyebrow tracking-[0.4em] text-brand-gold/80 font-black uppercase text-[10px]">Operational Infrastructure</span>
             <div className="w-1 h-1 rounded-full bg-brand-gold/40" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[32px] md:text-[38px] font-bold text-white max-w-[840px] mx-auto leading-[1.08] tracking-tighter mb-6"
          >
            Everything needed to coordinate <br className="hidden md:block" />
            <span className="text-brand-gold">institutional programme operations.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[14px] leading-relaxed text-white/40 max-w-[620px] mx-auto font-medium"
          >
            OYEN GRID unifies programme delivery, participant coordination, communication, analytics and operational intelligence into one connected infrastructure layer.
          </motion.p>
        </div>

        {/* 6-COLUMN REBALANCED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-start">
           {capabilities.map((cap, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
               whileHover={{ y: -5 }}
               className={cn(
                 "group relative p-5 rounded-[20px] bg-white/[0.01] border border-white/5 backdrop-blur-xl transition-all duration-700 hover:bg-white/[0.03] hover:border-brand-gold/30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] min-h-[240px] flex flex-col",
                 cap.offset
               )}
             >
                <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-6 group-hover:border-brand-gold/20 group-hover:bg-brand-gold/5 transition-all duration-700 shadow-inner relative overflow-hidden shrink-0">
                   <cap.icon className="w-5 h-5 text-brand-gold/30 group-hover:text-brand-gold transition-colors duration-700 relative z-10" />
                   <div className="absolute inset-0 bg-brand-gold/10 blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                </div>
                
                <h3 className="text-[15px] font-bold text-white mb-2.5 tracking-tight group-hover:text-brand-gold transition-colors duration-500 leading-tight">{cap.title}</h3>
                
                <p className="text-[11.5px] leading-relaxed text-white/30 group-hover:text-white/50 transition-colors duration-700 mb-5">
                  {cap.desc}
                </p>

                {/* Vertical Architectural Detail */}
                <div className="mt-auto pt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-1 group-hover:translate-y-0">
                   <div className="w-3 h-[1px] bg-brand-gold/30" />
                   <span className="text-[8px] font-black text-brand-gold uppercase tracking-[0.2em]">Institutional Ready</span>
                </div>

                {/* Subtler Bloom Effect */}
                <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-brand-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
