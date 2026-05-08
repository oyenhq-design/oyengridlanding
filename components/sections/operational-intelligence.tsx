"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, Workflow, Shield, Activity } from "lucide-react";

export function OperationalIntelligence() {
  const capabilities = [
    { title: "AI Forecasting", icon: Brain, desc: "Predictive operational logic" },
    { title: "Automated Orchestration", icon: Workflow, desc: "Seamless programme flow" },
    { title: "Content Governance", icon: Shield, desc: "Secure asset management" },
    { title: "Live Analytics", icon: Activity, desc: "Real-time decision metrics" }
  ];

  return (
    <section className="relative overflow-hidden py-48 md:py-64 section-transition border-none">
      
      {/* MASSIVE IMMERSIVE VISUAL ANCHOR: Cinematic Environment */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/env-command-new.png" 
          alt="System Intelligence Anchor" 
          fill
          className="object-cover opacity-[0.12] grayscale blur-[20px]"
        />
        <div className="absolute inset-0 bg-navy-deep/90 backdrop-blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-transparent to-navy-deep" />
        <div className="absolute inset-0 bg-[url('/dashboard-textures.png')] opacity-[0.05] mix-blend-screen rotate-12" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-8">
               <div className="w-12 h-[1px] bg-accent-gold/40" />
               <span className="text-[11px] font-black text-accent-gold uppercase tracking-[0.4em]">System Intelligence</span>
               <div className="w-12 h-[1px] bg-accent-gold/40" />
            </div>
            <h2 className="text-[44px] md:text-[72px] font-bold text-white mb-10 leading-[0.95] tracking-tighter">
              Orchestrate with absolute <br />
              <span className="text-gold-gradient italic font-medium">operational awareness.</span>
            </h2>
            <p className="text-[20px] text-white/30 max-w-2xl mx-auto leading-relaxed font-light">
              Transform fragmented data into a high-fidelity operating system. Our intelligence layer provides real-time governance across every node.
            </p>
          </motion.div>
        </div>

        {/* ASYMMETRICAL CAPABILITY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {capabilities.map((cap, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: i * 0.1 }}
               className={`p-10 glass-card border-white/5 bg-navy-mid/40 backdrop-blur-xl hover:border-accent-gold/20 transition-all group ${
                 i % 2 !== 0 ? "lg:mt-12" : ""
               }`}
             >
                <div className="w-12 h-12 rounded-2xl bg-accent-gold/10 flex items-center justify-center mb-8 group-hover:bg-accent-gold/20 transition-colors">
                   <cap.icon className="w-6 h-6 text-accent-gold" />
                </div>
                <h4 className="text-[18px] font-bold text-white mb-3">{cap.title}</h4>
                <p className="text-[13px] text-white/20 leading-relaxed font-light">{cap.desc}</p>
                <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                   <span className="text-[10px] font-black text-white/10 uppercase tracking-widest">Active Module</span>
                   <div className="w-1.5 h-1.5 rounded-full bg-accent-gold/40 animate-pulse" />
                </div>
             </motion.div>
           ))}
        </div>
      </div>

      <div className="atmos-fade-top h-64" />
      <div className="atmos-fade-bottom h-64" />
    </section>
  );
}
