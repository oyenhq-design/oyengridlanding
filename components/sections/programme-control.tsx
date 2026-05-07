"use client";

import { motion } from "framer-motion";
import { Map, Shield, Users, Zap, BarChart3, Clock } from "lucide-react";

export function ProgrammeControl() {
  const features = [
    { title: "Curriculum Mapping", desc: "Design high-fidelity programme flows with node-based logic.", icon: Map },
    { title: "Programme Governance", desc: "Enforce global delivery standards with immutable audit trails.", icon: Shield },
    { title: "Role-Based Access", desc: "Granular permissions for administrators and cohort leads.", icon: Users },
    { title: "Cohort Automation", desc: "Execute automated progression triggers at global scale.", icon: Zap },
    { title: "Analytics Infrastructure", desc: "Real-time visibility into every operational node.", icon: BarChart3 },
    { title: "Session Intelligence", desc: "Predictive monitoring for session engagement and health.", icon: Clock }
  ];

  return (
    <section className="section-padding relative bg-[#050816] overflow-hidden">
      <div className="noise-bg absolute inset-0" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-accent text-[10px] font-black tracking-[0.4em] uppercase opacity-60">PROGRAMME CONTROL</span>
            </div>
            <h2 className="text-white max-w-xl">
              Foundational features for <br /> 
              <span className="text-gold-gradient italic">absolute operational control.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-xs"
          >
            <p className="text-white/40 text-sm leading-relaxed font-light">
              Every tool is engineered for structural integrity, ensuring your programme operates with elite precision.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative p-10 rounded-2xl bg-[#070B1D]/50 border border-white/5 hover:border-accent/20 transition-all duration-700"
            >
              {/* Card Glow */}
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/[0.02] blur-xl transition-all duration-700 rounded-2xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-5 h-5 text-accent/40 group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-white font-bold text-[18px] mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-white/30 text-[14px] leading-relaxed font-light group-hover:text-white/50 transition-colors">
                  {feature.desc}
                </p>
              </div>
              
              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/20 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
