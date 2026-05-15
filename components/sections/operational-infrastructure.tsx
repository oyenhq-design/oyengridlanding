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
    <section className="py-32 bg-[#050816] relative overflow-hidden border-b border-white/5">
      
      {/* 1. CINEMATIC BACKGROUND SYSTEM */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,185,66,0.03)_0%,transparent_100%)]" />
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />
      </div>

      <div className="container-custom max-w-[1240px] px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT SIDE: STRATEGIC NARRATIVE (40%) */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_#f5b82e]" />
                <span className="text-brand-gold/80 tracking-[0.4em] uppercase text-[10px] font-black">
                  Core Infrastructure Layer
                </span>
              </div>
              <h2 className="text-[32px] md:text-[46px] font-bold text-white mb-6 leading-[1.05] tracking-tighter">
                Everything needed to <br />
                coordinate <span className="text-brand-gold italic font-serif">institutional ops.</span>
              </h2>
              <p className="text-[15px] text-white/40 leading-relaxed font-medium max-w-[440px]">
                OYEN GRID unifies programme delivery, participant coordination, and operational intelligence into one connected infrastructure layer designed for global scale.
              </p>
            </div>

            {/* STRATEGIC KPIs */}
            <div className="grid grid-cols-2 gap-4">
               {[
                 { label: "Operational Depth", val: "L-04", status: "VERIFIED" },
                 { label: "Sync Precision", val: "99.9%", status: "NOMINAL" }
               ].map((kpi, i) => (
                 <div key={i} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                    <div className="text-[8px] font-black text-white/20 uppercase tracking-widest">{kpi.label}</div>
                    <div className="text-[20px] font-bold text-white tracking-tighter">{kpi.val}</div>
                    <div className="flex items-center gap-1.5 pt-2">
                       <div className="w-1 h-1 rounded-full bg-brand-gold/40" />
                       <span className="text-[7px] font-black text-brand-gold uppercase tracking-widest">{kpi.status}</span>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          {/* RIGHT SIDE: MODULAR OPERATIONAL MATRIX (60%) */}
          <div className="lg:col-span-7">
             <div className="grid grid-cols-2 gap-4">
                {capabilities.map((cap, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={cn(
                      "group p-6 rounded-[24px] bg-[#0b1220]/40 border border-white/5 backdrop-blur-3xl transition-all duration-700 hover:bg-[#0b1220]/60 hover:border-brand-gold/30 hover:shadow-3xl",
                      i % 2 === 1 ? "lg:mt-8" : ""
                    )}
                  >
                     <div className="flex items-center justify-between mb-8">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-gold/10 group-hover:border-brand-gold/30 transition-all duration-700">
                           <cap.icon className="w-5 h-5 text-white/30 group-hover:text-brand-gold transition-colors duration-700" />
                        </div>
                        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                           {[1, 2, 3].map(j => <div key={j} className="w-1 h-1 rounded-full bg-brand-gold/30" />)}
                        </div>
                     </div>
                     
                     <h3 className="text-[16px] font-bold text-white mb-2 tracking-tight group-hover:text-brand-gold transition-colors duration-500">{cap.title}</h3>
                     <p className="text-[12px] text-white/30 leading-relaxed group-hover:text-white/50 transition-colors duration-700 mb-6">{cap.desc}</p>
                     
                     {/* Technical Metadata Strip */}
                     <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[8px] font-black text-white/10 uppercase tracking-widest group-hover:text-white/20 transition-colors">Infrastructure Ready</span>
                        <ChevronRight className="w-3 h-3 text-white/10 group-hover:text-brand-gold transition-all group-hover:translate-x-1" />
                     </div>
                  </motion.div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
