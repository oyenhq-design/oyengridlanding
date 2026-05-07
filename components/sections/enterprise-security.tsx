"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, CheckCircle2, Server, Globe, UserCheck } from "lucide-react";

export function EnterpriseSecurity() {
  const securityFeatures = [
    { title: "Role-Based Permissions", icon: UserCheck },
    { title: "Immutable Audit Logging", icon: Eye },
    { title: "Encrypted Programme Records", icon: Lock },
    { title: "Infrastructure Monitoring", icon: Server },
    { title: "Regional Data Governance", icon: Globe },
    { title: "Administrative Control Layers", icon: ShieldCheck }
  ];

  return (
    <section className="section-padding relative bg-[#050816] overflow-hidden">
      <div className="noise-bg absolute inset-0" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Security Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
             <div className="relative group">
                <div className="absolute -inset-10 bg-accent/5 blur-[120px] rounded-full pointer-events-none opacity-40" />
                 <div className="relative rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.8)] border border-white/5 bg-[#070B1D]">
                    <img 
                      src="/security-dashboard.png" 
                      alt="OYEN GRID Security Dashboard" 
                      className="w-full h-auto opacity-90 group-hover:scale-105 transition-transform duration-[4s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-60" />
                 </div>

                 {/* Floating Compliance Hint */}
                 <div className="absolute -bottom-6 -right-6 glass-card py-4 px-6 bg-[#050816]/80 border-white/10 backdrop-blur-xl shadow-2xl">
                    <div className="flex items-center gap-3">
                       <ShieldCheck className="w-4 h-4 text-accent" />
                       <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.3em]">Institutional Grade</span>
                    </div>
                 </div>
             </div>
          </motion.div>

          {/* Right: Trust Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 mb-8">
               <div className="w-1.5 h-1.5 rounded-full bg-accent" />
               <span className="text-accent text-[10px] font-black tracking-[0.4em] uppercase opacity-60">GOVERNANCE & SECURITY</span>
            </div>
            <h2 className="mb-8 text-white">
              Institutional security <br />
              <span className="text-gold-gradient italic">built into the foundation.</span>
            </h2>
            <p className="mb-12 text-white/50 text-[16px] font-light leading-relaxed max-w-sm">
              We provide the structural governance required for high-stakes enterprise programmes, ensuring absolute data integrity.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 mb-16">
               {securityFeatures.map((item, i) => (
                 <div key={i} className="flex items-center gap-3 group">
                    <item.icon className="w-4 h-4 text-accent/30 group-hover:text-accent transition-colors" />
                    <span className="text-white/60 text-[13px] font-medium tracking-tight group-hover:text-white transition-colors">{item.title}</span>
                 </div>
               ))}
            </div>

            {/* Compliance Badges */}
            <div className="pt-10 border-t border-white/5 flex flex-wrap gap-10 opacity-30 grayscale contrast-125">
               {['SOC2', 'GDPR', 'ISO 27001'].map((badge, i) => (
                 <div key={i} className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-2">
                       <ShieldCheck className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[9px] font-black tracking-widest text-white uppercase">{badge}</span>
                 </div>
               ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
