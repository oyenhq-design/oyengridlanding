"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles, Activity, Shield, LineChart, Cpu, Lightbulb, Target } from "lucide-react";

export function OperationalIntelligence() {
  const capabilities = [
    { title: "AI Recommendations", desc: "Automated structural adjustments based on delivery health.", icon: Brain },
    { title: "Predictive Scoring", desc: "Calculate completion probability for every cohort node.", icon: Target },
    { title: "Operational Forecasting", desc: "Project infrastructure needs and delivery timelines.", icon: LineChart },
    { title: "Automated Insights", desc: "Extract strategic intelligence from cross-programme data.", icon: Lightbulb }
  ];

  return (
    <section className="section-padding relative bg-[#070B1D] overflow-hidden">
      <div className="noise-bg absolute inset-0" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: HEADING + CAPABILITIES */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 mb-8">
               <div className="w-1.5 h-1.5 rounded-full bg-accent" />
               <span className="text-accent text-[10px] font-black tracking-[0.4em] uppercase opacity-60">SYSTEM INTELLIGENCE</span>
            </div>
            <h2 className="mb-8 text-white max-w-md">
              Absolute operational <br />
              <span className="text-gold-gradient italic">intelligence and control.</span>
            </h2>
            <p className="mb-12 text-white/50 text-[16px] font-light leading-relaxed max-w-sm">
              Our intelligence engine provides the foresight required to manage global programme complexity with absolute certainty.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
              {capabilities.map((item, i) => (
                <div key={i} className="group">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-6 group-hover:border-accent/40 transition-all duration-500">
                    <item.icon className="w-5 h-5 text-accent/40 group-hover:text-accent transition-colors" />
                  </div>
                  <h4 className="text-[17px] font-bold text-white mb-2 tracking-tight">{item.title}</h4>
                  <p className="text-white/30 text-[13px] leading-relaxed font-light group-hover:text-white/50 transition-colors">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <button className="btn-primary mt-16 h-12 px-10 text-[13px] uppercase tracking-widest font-black">
              Request Intelligence Demo
            </button>
          </motion.div>

          {/* RIGHT: INTELLIGENCE VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-20 bg-accent/5 blur-[160px] rounded-full pointer-events-none opacity-30" />
              <div className="relative rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.8)] border border-white/5 bg-[#050816]">
                <img 
                  src="/intelligence-network.png" 
                  alt="Operational Intelligence Interface" 
                  className="w-full h-auto opacity-90 group-hover:scale-105 transition-transform duration-[5s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Node Detail */}
              <div className="absolute bottom-10 right-10 glass-card py-3 px-5 bg-[#050816]/60 border-white/10 backdrop-blur-xl">
                 <div className="flex items-center gap-3">
                    <Cpu className="w-4 h-4 text-accent" />
                    <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">Predictive Logic Active</span>
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
