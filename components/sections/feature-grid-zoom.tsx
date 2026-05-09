"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, Zap, ShieldAlert, BarChart3, ArrowUpRight } from "lucide-react";

export function FeatureGridZoom() {
  const cards = [
    { 
      title: "AI Forecasting", 
      desc: "Predictive operational logic for proactive scaling and node management.", 
      icon: Cpu,
      protocol: "P-10"
    },
    { 
      title: "Automated Orchestration", 
      desc: "Seamless coordination across all global delivery nodes and team structures.", 
      icon: Zap,
      protocol: "P-24"
    },
    { 
      title: "Content Governance", 
      desc: "Secure asset management with institutional integrity and compliance.", 
      icon: ShieldAlert,
      protocol: "P-32"
    },
    { 
      title: "Live Analytics", 
      desc: "Real-time decision metrics for global visibility and executive oversight.", 
      icon: BarChart3,
      protocol: "P-48"
    }
  ];

  return (
    <section className="relative py-48 md:py-80 bg-[#040816] overflow-hidden">
      
      {/* ATMOSPHERIC BACKGROUND BLEND */}
      <div className="absolute inset-0 z-0">
         <Image 
           src="/hero-ops-center.png" 
           alt="System Intelligence Environment" 
           fill
           className="object-cover opacity-[0.2] grayscale brightness-50"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-[#040816] via-[#040816]/60 to-[#040816]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-32">
          <div className="flex items-center justify-center gap-6 mb-12">
             <div className="h-px w-12 bg-brand-gold/30" />
             <span className="text-[11px] font-black uppercase tracking-[0.5em] text-white/30">Intelligence Layer</span>
             <div className="h-px w-12 bg-brand-gold/30" />
          </div>

          <h2 className="text-white mb-12 text-[44px] md:text-[76px] leading-[0.95] tracking-[-0.06em]">
            Orchestrate with <br />
            <span className="text-gold-gradient italic font-medium">systemic awareness.</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-white/40 text-[20px] leading-relaxed font-light">
            Institutional intelligence layer for operational governance and programme execution. Deploy scalable logic across your entire delivery infrastructure.
          </p>
        </div>

        {/* 4-COLUMN PREMIUM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {cards.map((card, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, delay: i * 0.15 }}
               className="group relative p-[1px] rounded-[32px] overflow-hidden transition-all duration-700 hover:scale-[1.02]"
             >
                {/* Border Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative h-full bg-[#080C1A]/60 backdrop-blur-3xl rounded-[31px] p-10 flex flex-col border border-white/[0.03]">
                   <div className="flex items-center justify-between mb-12">
                      <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-brand-gold/30 group-hover:text-brand-gold group-hover:border-brand-gold/20 group-hover:bg-brand-gold/10 transition-all duration-700">
                         <card.icon className="w-7 h-7" />
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-white/5 group-hover:text-brand-gold/40 transition-all duration-500" />
                   </div>
                   
                   <h4 className="text-[22px] font-bold text-white mb-5 group-hover:text-brand-gold transition-colors duration-500 tracking-tight">{card.title}</h4>
                   <p className="text-[14.5px] text-white/30 leading-relaxed font-light mb-12">{card.desc}</p>
                   
                   <div className="mt-auto pt-8 border-t border-white/5 flex justify-between items-center">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/10 group-hover:text-brand-gold/30 transition-colors">Protocol {card.protocol}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/0 group-hover:bg-brand-gold/40 transition-all shadow-[0_0_8px_rgba(212,166,58,0.4)]" />
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
