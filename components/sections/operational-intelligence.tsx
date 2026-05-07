"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles, Activity, Shield, ArrowRight } from "lucide-react";

export function OperationalIntelligence() {
  const capabilities = [
    { title: "AI Forecasting", desc: "Predict programme health and participant success rates.", icon: Brain },
    { title: "Automated Grading", desc: "Scale assessment delivery with intelligent feedback.", icon: Activity },
    { title: "Central Governance", desc: "Granular permissions at global enterprise scale.", icon: Shield },
    { title: "Live Analytics", desc: "High-fidelity visibility into every operational node.", icon: Sparkles }
  ];

  return (
    <section className="py-40 relative bg-[#050816] overflow-hidden">
      <div className="container-custom max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* LEFT: LARGE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-20 bg-accent/5 blur-[160px] rounded-full pointer-events-none opacity-40" />
              <div className="relative rounded-[64px] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.9)] border-none bg-black">
                <img 
                  src="/ai-intel.png" 
                  alt="Operational Intelligence Interface" 
                  className="w-full h-auto opacity-70 group-hover:scale-105 transition-transform duration-1000 grayscale-[0.3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-80" />
                
                {/* Holographic Subtle Detail */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,166,42,0.15),transparent_70%)] opacity-30 pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT: HEADING + CAPABILITIES */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
               <Brain className="w-5 h-5 text-accent shadow-[0_0_10px_#D4A62A]" />
               <span className="text-accent text-[11px] font-black tracking-[0.4em] uppercase">SYSTEM INTELLIGENCE</span>
            </div>
            <h2 className="mb-12 text-white">
              Absolute operational <br />
              <span className="text-gold-gradient italic">intelligence and control.</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
              {capabilities.map((item, i) => (
                <div key={i} className="group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:shadow-[0_0_20px_rgba(212,166,42,0.3)] transition-all">
                    <item.icon className="w-5 h-5 text-accent group-hover:text-black transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-accent transition-colors">{item.title}</h4>
                  <p className="opacity-40 text-[14px] leading-relaxed group-hover:opacity-60 transition-opacity">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <button className="btn-primary mt-20 px-10">Deploy Intelligence</button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
