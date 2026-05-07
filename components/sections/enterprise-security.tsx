"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, CheckCircle2 } from "lucide-react";

export function EnterpriseSecurity() {
  return (
    <section className="py-32 relative bg-[#050816] overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,166,42,0.02),transparent_70%)]" />

      <div className="container-custom max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Security Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="relative group">
                <div className="absolute -inset-10 bg-accent/5 blur-[120px] rounded-full pointer-events-none opacity-40" />
                 <div className="relative rounded-[48px] overflow-hidden shadow-[0_60px_100px_rgba(0,0,0,0.8)] border-none">
                    <img 
                      src="/security-analyst.png" 
                      alt="Security Operations" 
                      className="w-full h-auto opacity-80 grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-80" />
                    
                    <motion.div 
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute top-10 left-10 glass-card p-8 bg-[#050816]/60 border-none backdrop-blur-3xl shadow-2xl"
                    >
                       <ShieldCheck className="w-8 h-8 text-accent mb-4 shadow-[0_0_15px_rgba(212,166,42,0.3)]" />
                       <div className="text-xl font-bold text-white tracking-tight">SOC2 TYPE II</div>
                       <div className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] mt-2">CERTIFIED COMPLIANCE</div>
                    </motion.div>
                 </div>
             </div>
          </motion.div>

          {/* Right: Editorial Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
               <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#D4A62A]" />
               <span className="text-accent text-[10px] font-black tracking-[0.4em] uppercase opacity-80">ENTERPRISE TRUST</span>
            </div>
            <h2 className="mb-8 text-white">
              Enterprise security <br />
              <span className="text-gold-gradient italic">at every layer.</span>
            </h2>
            <p className="mb-10 opacity-60 text-[16px] leading-relaxed max-w-sm">
              High-fidelity protection for sensitive programme data. Built with immutable audit trails and global encryption standards.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               {[
                 { title: "AES-256", desc: "Military-grade data encryption at rest." },
                 { title: "Immutable", desc: "Complete structural change tracking." },
                 { title: "RBAC", desc: "Granular role-based access control." },
                 { title: "Monitoring", desc: "Real-time threat detection engine." }
               ].map((item, i) => (
                 <div key={i} className="group">
                    <h4 className="text-white font-bold text-[15px] mb-1 group-hover:text-accent transition-colors">{item.title}</h4>
                    <p className="text-white/30 text-[13px] font-light leading-snug">{item.desc}</p>
                 </div>
               ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
