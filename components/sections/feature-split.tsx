"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, Shield, Zap, Globe } from "lucide-react";

export function FeatureSplit() {
  return (
    <section className="py-40 bg-[#050816] relative overflow-hidden">
      
      {/* FULL-WIDTH IMMERSIVE SHOWCASE */}
      <div className="absolute inset-0 z-0">
         <img 
           src="/command-wide.png" 
           alt="Command Center Wide" 
           className="w-full h-full object-cover opacity-40 grayscale-[0.5] scale-110"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#050816]/90 to-[#050816]" />
      </div>

      <div className="container-custom max-w-[1400px] relative z-10">
        <div className="text-center mb-24">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
               <h2 className="mb-8 text-white">
                 An enterprise ecosystem for <br />
                 <span className="text-gold-gradient italic">high-performance delivery.</span>
               </h2>
               <p className="max-w-2xl mx-auto opacity-60">
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
              className="lg:col-span-8 glass-card p-12 lg:p-16 bg-[#050816]/40 border-none group relative overflow-hidden flex flex-col justify-between shadow-[0_60px_100px_rgba(0,0,0,0.8)]"
            >
               <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-10 shadow-[0_0_20px_rgba(212,166,42,0.1)]">
                     <Box className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">Structured Programme Orchestration</h3>
                  <p className="opacity-40 text-[16px] max-w-md">
                     Manage cohorts, modules, and sessions through a unified interface designed for absolute structural control.
                  </p>
               </div>
               <div className="mt-20 relative rounded-[32px] overflow-hidden border-none shadow-[0_50px_100px_rgba(0,0,0,0.9)]">
                  <img src="/wide-dashboard.png" alt="Dashboard Preview" className="w-full h-auto opacity-80 grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
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
                   className="glass-card p-10 bg-[#050816]/30 border-none hover:bg-white/[0.04] transition-all group flex-1 shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
                 >
                   <item.icon className="w-8 h-8 text-accent/30 mb-8 group-hover:text-accent transition-colors" />
                   <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                   <p className="opacity-30 text-[14px] group-hover:opacity-60 transition-opacity">{item.desc}</p>
                 </motion.div>
              ))}
           </div>

        </div>
      </div>
    </section>
  );
}
