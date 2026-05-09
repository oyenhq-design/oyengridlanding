"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, Network, Users, BarChart3, Database, Workflow } from "lucide-react";

export function UseCasesSection() {
  const cases = [
    { title: "Training Organisations", icon: "01" },
    { title: "Bootcamps", icon: "02" },
    { title: "NGOs & Foundations", icon: "03" },
    { title: "Corporate Learning", icon: "04" },
    { title: "Fellowship Programmes", icon: "05" },
    { title: "Government Initiatives", icon: "06" },
    { title: "Accelerators", icon: "07" },
    { title: "Institutional Academies", icon: "08" }
  ];

  return (
    <section className="section-gap bg-[#0B1020]/20 relative overflow-hidden">
      <div className="container-custom">
        <div className="mb-20">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold">Organisational Context</span>
          <h2 className="mt-4">Built for organisations coordinating <span className="text-gold-highlight">structured delivery.</span></h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-48 rounded-2xl overflow-hidden border border-white/5 bg-[#0E1424] p-6 hover:border-brand-gold/30 transition-all duration-500"
            >
               {/* Atmospheric Overlay */}
               <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700 grayscale">
                  <Image src="/workspace_clarity_operational_1778319166338.png" alt="Overlay" fill className="object-cover" />
               </div>
               
               <div className="relative z-10 flex flex-col justify-between h-full">
                  <span className="text-[12px] font-black text-white/10 tracking-widest">{item.icon}</span>
                  <h4 className="text-[16px] font-bold text-white/80 group-hover:text-white transition-colors">{item.title}</h4>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OrchestrationSection() {
  return (
    <section className="section-gap">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT: Massive Cinematic Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[600px] glass-panel p-8 overflow-hidden group"
          >
             {/* Background Image: Intelligence Ops Room */}
             <div className="absolute inset-0 opacity-[0.1] grayscale">
                <Image src="/intelligence_ops_room_1778252595357.png" alt="Orchestration" fill className="object-cover" />
             </div>

             <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between">
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-gold" />
                      <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">Global Orchestration Protocol</span>
                   </div>
                   <span className="text-[10px] font-mono text-white/20 tracking-tighter">L-90 // SYSTEM_CORE</span>
                </div>

                {/* Pipeline/Timeline Mockup */}
                <div className="space-y-6">
                   {[70, 40, 90].map((w, i) => (
                     <div key={i} className="space-y-2">
                        <div className="flex justify-between items-end">
                           <div className="h-1 w-24 bg-white/5 rounded-full" />
                           <span className="text-[9px] font-bold text-brand-gold/40">NODE.{i+1}</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                           <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${w}%` }}
                              transition={{ delay: 0.5 + (i * 0.2), duration: 1.5 }}
                              className="h-full bg-brand-gold/20 border-r-2 border-brand-gold" 
                           />
                        </div>
                     </div>
                   ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                      <Network className="w-5 h-5 text-brand-gold mb-3 opacity-50" />
                      <div className="h-1 w-12 bg-white/10 rounded-full mb-2" />
                      <div className="h-1 w-8 bg-white/5 rounded-full" />
                   </div>
                   <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                      <Users className="w-5 h-5 text-brand-gold mb-3 opacity-50" />
                      <div className="h-1 w-16 bg-white/10 rounded-full mb-2" />
                      <div className="h-1 w-10 bg-white/5 rounded-full" />
                   </div>
                </div>
             </div>
          </motion.div>

          {/* RIGHT: Architecture Explanation */}
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold">Infrastructure Precision</span>
            <h2 className="mt-4 mb-8">Orchestrate programme operations with <span className="text-gold-highlight">institutional precision.</span></h2>
            
            <div className="space-y-8">
               {[
                 { title: "Programme Coordination", desc: "Centralize multi-track delivery with total structural visibility." },
                 { title: "Session Delivery", desc: "Automate tracking, attendance, and persistent trainer engagement." },
                 { title: "Participant Visibility", desc: "Monitor complex learner networks with live telemetry and progress indicators." },
                 { title: "Structured Workflows", desc: "Enforce organisational continuity through rigid delivery frameworks." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 group">
                    <div className="w-10 h-10 rounded-lg bg-brand-gold/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:border-brand-gold/30 transition-colors">
                       <Check className="w-4 h-4 text-brand-gold opacity-40 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div>
                       <h4 className="text-[17px] font-bold text-white mb-2">{item.title}</h4>
                       <p className="text-[14px] leading-relaxed text-white/40">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
