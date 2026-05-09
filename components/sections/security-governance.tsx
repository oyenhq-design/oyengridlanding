"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Lock, Eye, CheckCircle2 } from "lucide-react";

export function SecurityGovernance() {
  const securityItems = [
    { title: "Role-based access control", desc: "Granular permissions for institutional security.", icon: Lock },
    { title: "Audit logs", desc: "Immutable history for every operational protocol.", icon: Eye },
    { title: "Encrypted infrastructure", desc: "Sovereign data protection by architectural design.", icon: ShieldCheck },
    { title: "Compliance-ready systems", desc: "Built for global institutional standards.", icon: CheckCircle2 }
  ];

  return (
    <section className="relative py-48 md:py-80 bg-[#0A0A0A] overflow-hidden">
      
      {/* ATMOSPHERIC DEPTH */}
      <div className="absolute inset-0 z-0">
         <Image 
           src="/images/security-ops.png" 
           alt="Institutional Security Environment" 
           fill
           className="object-cover opacity-[0.25] grayscale-[0.4] brightness-50"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* LEFT: SECURITY CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-4 mb-10">
               <div className="h-px w-8 bg-accent-gold/40" />
               <span className="label-enterprise">Institutional Governance</span>
            </div>
            
            <h2 className="text-white mb-10">
              Institutional protection <br />
              <span className="text-accent-gold italic font-semibold">by design.</span>
            </h2>
            
            <p className="text-[19px] text-white/40 mb-20 max-w-xl leading-relaxed font-light">
              OYEN GRID is engineered for mission-critical reliability. Our infrastructure integrates high-authority security protocols into every operational node.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
               {securityItems.map((item, i) => (
                 <div key={i} className="flex gap-5 group">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-accent-gold/40 group-hover:text-accent-gold group-hover:border-accent-gold/20 transition-all duration-500">
                       <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                       <h4 className="text-white text-[17px] font-bold mb-2 tracking-tight">{item.title}</h4>
                       <p className="text-white/20 text-[13px] leading-relaxed font-light">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* RIGHT: LIVE TELEMETRY VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 hidden lg:block"
          >
             <div className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 backdrop-blur-3xl shadow-[0_60px_120px_rgba(0,0,0,0.6)]">
                <div className="flex items-center justify-between mb-10">
                   <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <span className="text-[11px] font-black uppercase tracking-widest text-white/60">Sovereign Node Alpha</span>
                   </div>
                   <span className="text-[10px] font-medium text-white/20 tracking-[0.3em] uppercase">Security Level 4</span>
                </div>
                
                <div className="space-y-6">
                   {[1, 2, 3].map((n) => (
                     <div key={n} className="h-16 rounded-xl bg-white/[0.02] border border-white/5 flex items-center px-6 justify-between group hover:bg-white/[0.04] transition-all">
                        <div className="flex items-center gap-6">
                           <div className="w-2 h-2 rounded-full bg-accent-gold/20 group-hover:bg-accent-gold transition-colors" />
                           <div className="text-[14px] text-white/40 font-medium">Protocol Trace L-0{n}</div>
                        </div>
                        <div className="text-[10px] font-black text-emerald-500/40 uppercase tracking-widest">Verified</div>
                     </div>
                   ))}
                </div>
                
                <div className="mt-10 pt-10 border-t border-white/5 flex items-center justify-center">
                   <div className="text-[10px] font-medium text-white/5 tracking-[0.5em] uppercase">Encrypted Operational Environment</div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
