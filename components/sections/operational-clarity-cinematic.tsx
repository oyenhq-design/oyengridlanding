"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, LayoutGrid, Cpu, BarChart3, ArrowRight } from "lucide-react";

export function OperationalClarityCinematic() {
  const points = [
    { title: "Governance Protocols", desc: "Institutional-grade role-based access and immutable audit trails." },
    { title: "Delivery Intelligence", desc: "Real-time orchestration of curriculum and participant lifecycles." },
    { title: "Node Integrity", desc: "Guaranteed data synchronization across global delivery infrastructures." },
    { title: "Automated Coordination", desc: "Autonomous monitoring and impact analysis at institutional scale." }
  ];

  return (
    <section className="section-gap bg-[#05070B] overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: LARGE OPERATIONAL IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-[32px] overflow-hidden border border-white/10 aspect-[16/10] group shadow-[0_50px_100px_rgba(0,0,0,0.6)]">
               <Image 
                 src="/workspace_clarity_operational_1778319166338.png" 
                 alt="Operational Visual" 
                 fill
                 className="object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#05070B]/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* RIGHT: CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-3 mb-6">
               <div className="h-px w-6 bg-brand-gold/40" />
               <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold">Clarity at Scale</span>
            </div>
            
            <h2 className="mb-8 leading-tight">
              Built for operational clarity <br />
              at global scale.
            </h2>
            
            <p className="text-editorial mb-12">
              Get real-time visibility across every programme, cohort and participant. Make data-driven decisions with confidence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
               {points.map((p, i) => (
                 <div key={i} className="flex flex-col gap-3 group">
                    <h4 className="text-[16px] font-bold text-white tracking-tight flex items-center gap-2 group-hover:text-brand-gold transition-colors">
                       <div className="w-1 h-1 rounded-full bg-brand-gold" />
                       {p.title}
                    </h4>
                    <p className="text-[13px] text-white/40 leading-relaxed font-light">{p.desc}</p>
                 </div>
               ))}
            </div>

            <button className="mt-12 flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.3em] text-white/30 hover:text-white transition-all group">
               Explore Intelligence Layer <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function FeatureGridPremium() {
  const cards = [
    { title: "Programme Management", desc: "Design and deploy complex multi-regional delivery structures.", icon: LayoutGrid },
    { title: "Global Coordination", desc: "Synchronize institutional logistics across distributed delivery nodes.", icon: Cpu },
    { title: "Session Delivery", desc: "Standardize curriculum deployment and attendance tracking protocols.", icon: PlayCircle },
    { title: "Analytics & Reporting", desc: "High-fidelity impact analysis and operational health telemetry.", icon: BarChart3 }
  ];

  return (
    <section className="section-gap bg-[#05070B] relative overflow-hidden">
      {/* Background Image: 5-10% visibility */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none grayscale brightness-50">
         <Image src="/intelligence_ops_room_1778252595357.png" alt="Overlay" fill className="object-cover" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="mb-6">Orchestrate every layer of operations.</h2>
          <p className="text-editorial">Institutional intelligence for the modern programme-driven organisation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {cards.map((card, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: i * 0.1 }}
               className="group relative h-full bg-[#0B1020]/40 border border-white/[0.05] rounded-3xl p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-[#0E1424]/60 hover:border-brand-gold/20 shadow-2xl"
             >
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/20 mb-8 group-hover:text-brand-gold transition-colors duration-500">
                   <card.icon className="w-6 h-6" />
                </div>
                <h4 className="text-[20px] font-bold text-white mb-4 tracking-tight group-hover:text-brand-gold transition-colors">{card.title}</h4>
                <p className="text-[14px] text-white/30 leading-relaxed font-light">{card.desc}</p>
                
                {/* Subtle Reflection Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.01] to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}

function PlayCircle(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
  );
}
