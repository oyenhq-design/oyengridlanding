"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Database, ArrowRight } from "lucide-react";

export function StatsStrip() {
  const stats = [
    { val: "1,240+", label: "Active Programmes" },
    { val: "0.8ms", label: "System Response" },
    { val: "99.995%", label: "Platform Uptime" },
    { val: "140+", label: "Countries" }
  ];

  return (
    <div className="w-full bg-[#0B1020] border-y border-white/[0.06] py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {stats.map((stat, i) => (
            <div key={i} className="text-center lg:border-r last:border-none border-white/5 group">
              <div className="text-[44px] lg:text-[56px] font-black text-[#F5B942] mb-2 tracking-tighter transition-transform group-hover:scale-105 duration-500">
                {stat.val}
              </div>
              <div className="text-[13px] font-bold uppercase tracking-[0.3em] text-[#A0AEC0] opacity-50">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function OperationalClarityReplica() {
  const features = [
    { 
      title: "Governance at scale", 
      desc: "Role-based access, approvals, and immutable audit trails for institutional compliance.",
      icon: Shield
    },
    { 
      title: "Data integrity", 
      desc: "Accurate, real-time data orchestration powered by a secure infrastructure layer.",
      icon: Database
    }
  ];

  return (
    <section className="relative py-48 md:py-80 bg-[#05070B] overflow-hidden">
      
      {/* SECTION BLOOMS */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#F5B942]/5 blur-[120px] rounded-full -translate-x-1/2" />

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
            <div className="relative rounded-[40px] overflow-hidden border border-white/[0.08] group shadow-[0_80px_160px_rgba(0,0,0,0.8)] aspect-[4/5]">
               <Image 
                 src="/intelligence-ops-room.png" 
                 alt="Operational Command Center" 
                 fill
                 className="object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 brightness-75 group-hover:brightness-100"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-transparent opacity-60" />
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(245,185,66,0.08),transparent_70%)]" />
            </div>
          </motion.div>

          {/* RIGHT: CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-4 mb-10">
               <div className="h-px w-8 bg-[#F5B942]/40" />
               <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#F5B942]">Operational Clarity</span>
            </div>
            
            <h2 className="text-white mb-10 text-[42px] md:text-[56px] leading-[1.05] tracking-[-0.06em]">
              Built for operational clarity <br />
              at <span className="text-gold-italic">global scale.</span>
            </h2>
            
            <p className="text-[#A0AEC0] text-[19px] leading-[1.7] font-light mb-16">
              Get real-time visibility across every programme, cohort and participant. Make data-driven decisions with confidence and deliver measurable impact.
            </p>

            <div className="space-y-12">
               {features.map((f, i) => (
                 <div key={i} className="group relative pt-12 first:pt-0">
                    {i > 0 && <div className="absolute top-0 left-0 w-full h-px bg-white/[0.04]" />}
                    <div className="flex gap-8">
                       <div className="w-14 h-14 rounded-2xl bg-[#F5B942]/5 border border-[#F5B942]/20 flex items-center justify-center text-[#F5B942] group-hover:scale-110 transition-all duration-500">
                          <f.icon className="w-6 h-6" />
                       </div>
                       <div>
                          <h4 className="text-white text-[22px] font-bold mb-3 tracking-tight">{f.title}</h4>
                          <p className="text-[#A0AEC0]/60 text-[15px] leading-relaxed font-light">{f.desc}</p>
                       </div>
                    </div>
                 </div>
               ))}
            </div>

            <button className="mt-20 flex items-center gap-4 text-[13px] font-black uppercase tracking-[0.3em] text-[#F5B942] hover:text-white transition-all group">
               Access Operational Engine <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
