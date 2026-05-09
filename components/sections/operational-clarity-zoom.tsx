"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Shield, Activity, Globe, Zap } from "lucide-react";

export function OperationalClarityZoom() {
  const features = [
    { title: "Governance Logic", desc: "Standardize delivery protocols across every regional node.", icon: Shield },
    { title: "Node Integrity", desc: "Real-time telemetry and validation for every session delivery node.", icon: Activity },
    { title: "Distributed Coordination", desc: "Seamless sync across multi-continental operational layers.", icon: Globe },
    { title: "Automated Oversight", desc: "Institutional-grade audit loops for large-scale execution.", icon: Zap }
  ];

  return (
    <section className="relative py-48 md:py-80 bg-[#040816] overflow-hidden">
      
      {/* SECTION ATMOSPHERE */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] blue-haze opacity-20 -translate-y-1/2 -translate-x-1/2 blur-[100px]" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          
          {/* LEFT: CINEMATIC IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6 }}
            className="relative"
          >
            <div className="relative rounded-[48px] overflow-hidden border border-white/10 group shadow-[0_80px_160px_rgba(0,0,0,0.8)]">
               <Image 
                 src="/intelligence-ops-room.png" 
                 alt="Global Operations Center" 
                 width={1100} 
                 height={1300} 
                 className="object-cover h-[780px] grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 brightness-75 group-hover:brightness-100"
               />
               {/* Material Overlays */}
               <div className="absolute inset-0 bg-gradient-to-t from-[#040816] via-transparent to-transparent opacity-60" />
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,166,58,0.05),transparent_70%)]" />
            </div>
            
            {/* Visual Decoration */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-gold/5 blur-[100px] -z-10" />
          </motion.div>

          {/* RIGHT: CONTENT PROTOCOLS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-4 mb-14">
               <div className="h-px w-8 bg-brand-gold/40" />
               <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white/30">Institutional Strategy</span>
            </div>
            
            <h2 className="text-white mb-12 text-[48px] md:text-[68px] leading-[1.02] tracking-[-0.06em]">
              Built for operational clarity at <br />
              <span className="text-gold-gradient italic">global scale.</span>
            </h2>
            
            <p className="text-white/40 text-[20px] leading-relaxed font-light mb-16">
              Establish a single source of operational truth across distributed nodes. Our governance engine ensures every programme cycle adheres to institutional standards.
            </p>

            <div className="space-y-12 mb-20">
               {features.map((f, i) => (
                 <div key={i} className="flex gap-8 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-brand-gold/40 group-hover:text-brand-gold group-hover:bg-brand-gold/10 transition-all duration-500">
                       <f.icon className="w-6 h-6" />
                    </div>
                    <div>
                       <h4 className="text-white text-[22px] font-bold mb-3 tracking-tight">{f.title}</h4>
                       <p className="text-white/25 text-[15px] leading-relaxed font-light">{f.desc}</p>
                    </div>
                 </div>
               ))}
            </div>

            <button className="flex items-center gap-4 text-[13px] font-black uppercase tracking-[0.3em] text-white/30 hover:text-brand-gold transition-all group">
               Explore Architecture <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
