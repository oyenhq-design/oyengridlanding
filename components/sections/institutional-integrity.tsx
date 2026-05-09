"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Lock, Eye, FileText, Server, Workflow } from "lucide-react";

export function ControlCenterSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#05070B] overflow-hidden">
      {/* MASSIVE IMMERSIVE VISUAL */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/global_control_center_wow_1778344789629.png" 
          alt="Global Command Center" 
          fill
          className="object-cover opacity-20 grayscale brightness-50 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070B] via-transparent to-[#05070B]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,185,66,0.05),transparent_70%)]" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-10">
             <div className="h-px w-12 bg-brand-gold/30" />
             <span className="text-[12px] font-black uppercase tracking-[0.6em] text-brand-gold">Master Control Interface</span>
             <div className="h-px w-12 bg-brand-gold/30" />
          </div>

          <h2 className="text-[52px] md:text-[84px] font-black mb-12 leading-[0.95] tracking-[-0.07em]">
            The command center <br />
            for <span className="text-gold-highlight italic">global delivery.</span>
          </h2>

          <p className="text-[19px] md:text-[22px] text-white/50 leading-relaxed max-w-3xl mx-auto mb-20 font-light tracking-tight">
            Monitor institutional activity across continents. Orchestrate complex programme networks with real-time telemetry and AI-driven operational assistance.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
             {[
               { label: "Global Activity", val: "REAL-TIME" },
               { label: "Operational Load", val: "NOMINAL" },
               { label: "Active Nodes", val: "142/142" },
               { label: "AI Sync", val: "SYNCHRONIZED" }
             ].map((item, i) => (
               <div key={i} className="flex flex-col items-center gap-2">
                  <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">{item.label}</div>
                  <div className="text-[16px] font-black text-brand-gold tracking-tight">{item.val}</div>
               </div>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function SecuritySection() {
  const features = [
    { title: "Institutional Governance", desc: "Granular access control and structured permissions across multi-tenant environments.", icon: ShieldCheck },
    { title: "Operational Continuity", desc: "Automated backups and redundant architectural nodes for mission-critical reliability.", icon: Server },
    { title: "Compliance Ready", desc: "Rigid data protection and audit-ready operational records for global standards.", icon: FileText },
    { title: "Structured Security", desc: "End-to-end encryption and adaptive threat detection integrated into the delivery core.", icon: Lock }
  ];

  return (
    <section className="section-gap bg-[#0B1020]/20 border-t border-white/5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold">Security Architecture</span>
            <h2 className="mt-4 mb-8">Enterprise-grade infrastructure <br /> for <span className="text-gold-highlight">total governance.</span></h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
              {features.map((f, i) => (
                <div key={i} className="space-y-4 group">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-brand-gold/30 transition-colors">
                     <f.icon className="w-5 h-5 text-white/30 group-hover:text-brand-gold transition-colors" />
                  </div>
                  <h4 className="text-[16px] font-bold text-white tracking-tight">{f.title}</h4>
                  <p className="text-[13px] leading-relaxed text-white/40">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[550px] glass-panel p-10 overflow-hidden"
          >
             <div className="absolute inset-0 opacity-[0.05] grayscale">
                <Image src="/security_ops_center_institutional_1778319192647.png" alt="Security" fill className="object-cover" />
             </div>
             
             <div className="relative z-10 space-y-8">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                   <span className="text-[10px] font-black uppercase tracking-widest text-white/30">Governance Dashboard</span>
                   <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10B981]" />
                </div>
                
                {/* Visual Security Toggles/Indicators */}
                <div className="space-y-6">
                   {[1, 2, 3, 4, 5].map(i => (
                     <div key={i} className="flex items-center justify-between">
                        <div className="h-1.5 w-32 bg-white/5 rounded-full" />
                        <div className="h-4 w-8 rounded-full bg-white/[0.05] border border-white/10 relative">
                           <div className="absolute right-1 top-1 w-2 h-2 rounded-full bg-brand-gold/40" />
                        </div>
                     </div>
                   ))}
                </div>

                <div className="pt-10">
                   <div className="h-32 bg-brand-gold/5 border border-brand-gold/10 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                         <div className="text-[12px] font-black text-brand-gold uppercase tracking-[0.3em] mb-2">SOC2 COMPLIANT</div>
                         <div className="text-[9px] text-white/20 uppercase tracking-widest italic font-bold">Protocol Active // L-90</div>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
