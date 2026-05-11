"use client";

import { motion } from "framer-motion";
import { LayoutGrid, Users, ClipboardCheck, PlayCircle, MessageSquare, PieChart } from "lucide-react";

const capabilities = [
  {
    title: "Programme Coordination",
    desc: "Coordinate multi-session programmes with structured operational oversight.",
    icon: LayoutGrid
  },
  {
    title: "Participant Management",
    desc: "Organise cohorts, onboarding and participant visibility across programmes.",
    icon: Users
  },
  {
    title: "Attendance Tracking",
    desc: "Track engagement, attendance consistency and operational participation.",
    icon: ClipboardCheck
  },
  {
    title: "Session Delivery",
    desc: "Run structured live sessions with coordinated operational flow.",
    icon: PlayCircle
  },
  {
    title: "Communication Layer",
    desc: "Enable institutional communication between trainers, coordinators and participants.",
    icon: MessageSquare
  },
  {
    title: "Analytics & Reporting",
    desc: "Generate operational insights, participation visibility and institutional reports.",
    icon: PieChart
  }
];

export function PowerfulCapabilities() {
  return (
    <section className="py-24 bg-[#050816] relative overflow-hidden border-b border-white/5">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-gold/5 blur-[120px] rounded-full" />
         <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow inline-block mb-4"
          >
            POWERFUL CAPABILITIES
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[40px] md:text-[46px] font-bold text-white max-w-[850px] mx-auto leading-[1.1] tracking-tight"
          >
            Everything needed to coordinate <br className="hidden md:block" />
            <span className="text-brand-gold">institutional programme operations.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
           {capabilities.map((cap, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.05 }}
               whileHover={{ y: -5 }}
               className="group relative p-6 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.03] hover:border-brand-gold/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
             >
                <div className="w-10 h-10 rounded-xl border border-brand-gold/20 flex items-center justify-center mb-6 group-hover:border-brand-gold/40 transition-colors">
                   <cap.icon className="w-5 h-5 text-brand-gold/60 group-hover:text-brand-gold transition-colors" />
                </div>
                <h3 className="text-[14px] font-bold text-white mb-3 tracking-tight group-hover:text-brand-gold transition-colors">{cap.title}</h3>
                <p className="text-[11px] leading-relaxed text-white/30 group-hover:text-white/50 transition-colors">
                  {cap.desc}
                </p>

                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-brand-gold/0 group-hover:bg-brand-gold/[0.01] transition-colors pointer-events-none" />
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
