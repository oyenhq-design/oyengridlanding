"use client";

import { motion } from "framer-motion";
import { 
  Layers, Users, Activity, Box, FileText, Award, BarChart3
} from "lucide-react";

const capabilities = [
  {
    title: "Programme Management",
    desc: "Organise structures, schedules, and delivery pipelines.",
    icon: Layers
  },
  {
    title: "Participant Tracking",
    desc: "Track engagement, progress, and performance across cohorts.",
    icon: Users
  },
  {
    title: "Attendance Intelligence",
    desc: "Automated attendance capture with deep participation metrics.",
    icon: Activity
  },
  {
    title: "Resource Library",
    desc: "Store, organise, and share content securely with participants.",
    icon: Box
  },
  {
    title: "Assessments",
    desc: "Create assignments, quizzes, and evaluate submissions in one dashboard.",
    icon: FileText
  },
  {
    title: "Certificates",
    desc: "Design, automate, and issue verified completion credentials.",
    icon: Award
  },
  {
    title: "Analytics",
    desc: "Real-time reporting and operational insights for decisions.",
    icon: BarChart3
  }
];

export function OperationalInfrastructure() {
  return (
    <section className="py-20 bg-[#050816] theme-light-section relative overflow-hidden border-b border-white/5">
      
      {/* Refined ambient glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-brand-gold/[0.015] blur-[140px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.01]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-1 h-1 rounded-full bg-brand-gold/40" />
            <span className="text-[10px] font-black tracking-[0.35em] text-brand-gold uppercase">Platform Capabilities</span>
            <div className="w-1 h-1 rounded-full bg-brand-gold/40" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[32px] md:text-[42px] font-bold text-white max-w-[760px] mx-auto leading-[1.1] tracking-tight mb-5"
          >
            Everything needed to coordinate <br className="hidden md:block" />
            <span className="text-brand-gold">programme operations.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[14px] leading-relaxed text-white/50 max-w-[560px] mx-auto font-light"
          >
            OYEN GRID unifies programme delivery, participant coordination, communication, analytics and operational visibility into one connected infrastructure layer.
          </motion.p>
        </div>

        {/* 7 Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-stretch">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.04] hover:border-brand-gold/30 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex flex-col min-h-[180px]"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-gold/5 border border-brand-gold/15 flex items-center justify-center mb-4 group-hover:border-brand-gold/30 transition-all duration-300">
                <cap.icon className="w-4 h-4 text-brand-gold/60 group-hover:text-brand-gold transition-colors duration-300" />
              </div>
              
              <h3 className="text-[14px] font-bold text-white mb-1.5 group-hover:text-brand-gold transition-colors duration-300">{cap.title}</h3>
              
              <p className="text-[11px] leading-normal text-white/40 group-hover:text-white/60 transition-colors duration-300">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
