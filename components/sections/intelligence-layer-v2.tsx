"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, Zap, ShieldAlert, BarChart3 } from "lucide-react";

export function IntelligenceLayerV2() {
  const capabilities = [
    { title: "AI Forecasting", desc: "Predictive operational logic for proactive scaling and node management.", icon: Cpu },
    { title: "Automated Orchestration", desc: "Seamless coordination across all global delivery nodes and team structures.", icon: Zap },
    { title: "Content Governance", desc: "Secure asset management with institutional integrity and compliance.", icon: ShieldAlert },
    { title: "Live Analytics", desc: "Real-time decision metrics for global visibility and executive oversight.", icon: BarChart3 }
  ];

  return (
    <section className="relative py-48 md:py-80 bg-[#040816] overflow-hidden">
      
      {/* ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
         <Image 
           src="/hero-ops-center.png" 
           alt="System Intelligence Environment" 
           fill
           className="object-cover opacity-[0.25] grayscale brightness-50"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-[#040816] via-[#040816]/60 to-[#040816]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-32">
          <div className="flex items-center justify-center gap-5 mb-10">
             <div className="h-px w-12 bg-accent-gold/30" />
             <span className="label-institutional">Intelligence Layer</span>
             <div className="h-px w-12 bg-accent-gold/30" />
          </div>

          <h2 className="text-white mb-10">
            Orchestrate with <br />
            <span className="text-accent-gold italic font-medium">systemic awareness.</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-white/40 text-[19px] leading-relaxed font-light">
            Coordinate large-scale programme operations through a unified operational infrastructure layer. Built for absolute structural integrity.
          </p>
        </div>

        {/* 4-COLUMN CAPABILITY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {capabilities.map((cap, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: i * 0.1 }}
               className="bg-white/[0.02] border border-white/5 rounded-[32px] p-10 hover:bg-white/[0.04] transition-all group"
             >
                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-accent-gold/40 group-hover:text-accent-gold transition-all mb-10">
                   <cap.icon className="w-6 h-6" />
                </div>
                <h4 className="text-[19px] font-bold text-white mb-5 group-hover:text-accent-gold transition-colors">{cap.title}</h4>
                <p className="text-[13.5px] text-white/30 leading-relaxed font-light">{cap.desc}</p>
             </motion.div>
           ))}
        </div>

        {/* METRICS PROTOCOL ROW */}
        <div className="mt-32 pt-20 border-t border-white/5 flex flex-wrap justify-between gap-16">
           {[
             { label: "Institutional Nodes", val: "1,240+" },
             { label: "Sync Latency", val: "0.8ms" },
             { label: "Governance Compliance", val: "99.999%" },
             { label: "Territorial Coverage", val: "140+ Countries" }
           ].map((m, i) => (
             <div key={i} className="flex flex-col">
                <span className="text-[32px] font-bold text-white mb-2">{m.val}</span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/10">{m.label}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
