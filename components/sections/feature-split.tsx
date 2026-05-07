"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, Shield, Zap, Globe } from "lucide-react";

export function FeatureSplit() {
  return (
    <section className="py-40 bg-[#0B0B0D] relative overflow-hidden">
      
      {/* FULL-WIDTH IMMERSIVE SHOWCASE */}
      <div className="absolute inset-0 z-0">
         <img 
           src="/command-wide.png" 
           alt="Command Center Wide" 
           className="w-full h-full object-cover opacity-20 grayscale"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D] via-[#0B0B0D]/90 to-[#0B0B0D]" />
      </div>

      <div className="container-custom max-w-[1400px] relative z-10">
        <div className="text-center mb-24">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
              <h2 className="text-[32px] md:text-[44px] font-bold text-white tracking-tight mb-8">
                An enterprise ecosystem for <br />
                <span className="text-accent italic">high-performance delivery.</span>
              </h2>
              <p className="text-[17px] text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
                OYEN GRID provides the foundational infrastructure required to coordinate complex training cohorts and multi-layered programmes at global scale.
              </p>
           </motion.div>
        </div>

        {/* Large Feature Panels (Varied Rhythm) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
           
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="lg:col-span-8 glass-card p-12 lg:p-16 bg-secondary/20 border-white/5 group relative overflow-hidden flex flex-col justify-between"
           >
              <div className="relative z-10">
                 <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-8">
                    <Box className="w-6 h-6 text-accent" />
                 </div>
                 <h3 className="text-[28px] font-bold text-white mb-6 tracking-tight">Structured Programme Orchestration</h3>
                 <p className="text-white/40 text-[16px] font-light leading-relaxed max-w-md">
                    Manage cohorts, modules, and sessions through a unified interface designed for absolute structural control.
                 </p>
              </div>
              <div className="mt-20 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                 <img src="/wide-dashboard.png" alt="Dashboard Preview" className="w-full h-auto opacity-90 grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
           </motion.div>

           <div className="lg:col-span-4 flex flex-col gap-8">
              {[
                { title: "Global Governance", desc: "Enterprise-grade permissions and data auditing.", icon: Shield },
                { title: "Scale Engine", desc: "Automate delivery for thousands of active users.", icon: Zap },
                { title: "Cloud Backbone", desc: "Resilient infrastructure with 99.99% uptime.", icon: Globe }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-10 bg-secondary/10 border-white/5 hover:border-accent/30 transition-all group flex-1"
                >
                  <item.icon className="w-8 h-8 text-accent/40 mb-8 group-hover:text-accent transition-colors" />
                  <h4 className="text-xl font-bold text-white mb-4 tracking-tight">{item.title}</h4>
                  <p className="text-white/40 text-[14px] font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
           </div>

        </div>
      </div>
    </section>
  );
}
