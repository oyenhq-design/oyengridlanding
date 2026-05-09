"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Lock, Eye, CheckCircle } from "lucide-react";

export function EnterpriseSecurity() {
  const securityFeatures = [
    { title: "Immutable Audit Logs", desc: "Every action is logged and verified using cryptographic institutional protocols.", icon: ShieldCheck },
    { title: "SOC2 Compliance", desc: "Rigorous security standards for enterprise data integrity and platform reliability.", icon: Lock },
    { title: "Threat Detection", desc: "Real-time surveillance of all infrastructure nodes and delivery patterns.", icon: Eye },
    { title: "Governance Control", desc: "Fine-grained permission layers for absolute administrative sovereignty.", icon: CheckCircle }
  ];

  return (
    <section className="relative overflow-hidden py-32 md:py-64 bg-[#020617]">
      
      {/* PANORAMIC CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image 
          src="/security-soc-environment.png" 
          alt="Security Operations Center" 
          fill
          className="object-cover grayscale-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          
          {/* SECURITY CONTENT (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-6"
          >
            <div className="flex items-center gap-5 mb-10">
               <div className="h-px w-12 bg-accent-gold/30" />
               <span className="label-institutional">Security & Compliance</span>
            </div>

            <h2 className="text-white mb-10">
              Institutional integrity <br />
              at the <span className="text-accent-gold italic font-medium">system layer.</span>
            </h2>
            
            <p className="mb-16 max-w-[500px]">
              Our security architecture is built for the most demanding institutional requirements. We prioritize sovereign data control and absolute systemic visibility.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-14">
               {securityFeatures.map((f, i) => (
                 <div key={i} className="group">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-6 group-hover:border-accent-gold/40 transition-colors duration-500">
                       <f.icon className="w-5 h-5 text-accent-gold/40 group-hover:text-accent-gold transition-colors" />
                    </div>
                    <h4 className="text-[17px] font-bold text-white mb-3 group-hover:text-accent-gold transition-colors">{f.title}</h4>
                    <p className="text-[13px] opacity-50 font-light leading-relaxed">{f.desc}</p>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* VISUAL SECURITY DATA (Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="lg:col-span-6"
          >
             <div className="premium-card relative overflow-hidden group">
                {/* Audit Log Visualization */}
                <div className="space-y-4 mb-10 relative z-10">
                   <div className="text-[10px] text-accent-gold font-black uppercase tracking-[0.3em] mb-6">Audit Log Live Stream</div>
                   {[
                     { time: "09:42:15", node: "Node-42", status: "VERIFIED", action: "Governance Sync" },
                     { time: "09:42:10", node: "Node-18", status: "VERIFIED", action: "Infrastructure Scale" },
                     { time: "09:42:02", node: "Node-04", status: "VERIFIED", action: "Compliance Audit" }
                   ].map((log, i) => (
                     <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.01] border border-white/[0.03] text-[11px] group-hover:bg-white/[0.03] transition-all duration-700">
                        <div className="flex items-center gap-6">
                           <span className="text-white/20 tabular-nums">{log.time}</span>
                           <span className="text-white/60 font-bold uppercase tracking-widest">{log.node}</span>
                           <span className="text-white/30 font-light">{log.action}</span>
                        </div>
                        <div className="flex items-center gap-3">
                           <div className="w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                           <span className="text-emerald-500/80 font-black uppercase tracking-widest">{log.status}</span>
                        </div>
                     </div>
                   ))}
                </div>

                <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                   <div className="flex items-center gap-8">
                      <Image src="/badge-soc2.png" alt="SOC2" width={50} height={50} className="opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
                      <Image src="/badge-iso.png" alt="ISO" width={50} height={50} className="opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
                      <Image src="/badge-gdpr.png" alt="GDPR" width={50} height={50} className="opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
                   </div>
                   <div className="text-[10px] text-white/10 font-black uppercase tracking-widest">Protocol Integrity Confirm</div>
                </div>

                {/* Decorative scanning line */}
                <motion.div 
                   animate={{ y: ["-100%", "1000%"] }}
                   transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                   className="absolute left-0 right-0 h-px bg-accent-gold/20 -z-10 blur-[1px]"
                />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
