"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, CheckCircle2 } from "lucide-react";

export function EnterpriseSecurity() {
  return (
    <section className="py-40 relative bg-[#050812] overflow-hidden">
      
      {/* Background Atmosphere */}
      {/* Background Atmosphere */}
      <div className="glow-ambient w-[600px] h-[600px] top-[10%] right-[10%]" />

      <div className="container-custom max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* Left: Security Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
             <div className="relative group">
                <div className="absolute -inset-10 bg-accent/5 blur-[100px] rounded-full pointer-events-none opacity-40" />
                <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
                   <img 
                     src="/security-analyst.png" 
                     alt="Security Operations" 
                     className="w-full h-auto opacity-80 grayscale group-hover:grayscale-0 transition-all duration-1000"
                   />
                   
                   {/* Security Overlay Elements */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                   
                   <motion.div 
                     animate={{ scale: [1, 1.05, 1] }}
                     transition={{ duration: 4, repeat: Infinity }}
                     className="absolute top-10 left-10 glass-card p-6 bg-[#050812]/90 border-accent/20 backdrop-blur-2xl shadow-2xl"
                   >
                      <ShieldCheck className="w-8 h-8 text-accent mb-4 shadow-[0_0_10px_#D4A62A]" />
                      <div className="text-xl font-bold text-white tracking-tight">SOC2 TYPE II</div>
                      <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mt-1">CERTIFIED COMPLIANCE</div>
                   </motion.div>
                </div>
             </div>
          </motion.div>

          {/* Right: Editorial Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-8">
               <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_#D4A62A]" />
               <span className="text-accent text-[11px] font-black tracking-[0.4em] uppercase">ENTERPRISE TRUST</span>
            </div>
            <h2 className="text-[32px] md:text-[40px] font-bold text-white tracking-tight leading-tight mb-10">
              Enterprise security <br />
              <span className="text-gold-gradient italic">at every layer.</span>
            </h2>
            <p className="text-[17px] text-white/50 font-light leading-relaxed mb-12">
              OYEN GRID is built on a foundation of absolute data security and governance. We protect your programme integrity with world-class infrastructure.
            </p>
            
            <div className="space-y-10">
               {[
                 { title: "End-to-End Encryption", desc: "All participant data and session assets are encrypted at rest and in transit.", icon: Lock },
                 { title: "Continuous Monitoring", desc: "Real-time threat detection and security auditing across all global nodes.", icon: Eye },
                 { title: "Global Compliance", desc: "Fully compliant with SOC2 Type II, ISO 27001, and GDPR standards.", icon: CheckCircle2 }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 group">
                   <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:border-accent transition-all">
                      <item.icon className="w-5 h-5 text-accent group-hover:text-black transition-colors" />
                   </div>
                   <div>
                      <h4 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-accent transition-colors">{item.title}</h4>
                      <p className="text-white/40 text-[15px] font-light leading-relaxed max-w-sm">{item.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
