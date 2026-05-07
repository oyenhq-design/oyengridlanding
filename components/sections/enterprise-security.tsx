"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Fingerprint, Eye, ArrowRight, Activity, Check } from "lucide-react";

export function EnterpriseSecurity() {
  return (
    <section className="py-40 relative overflow-hidden bg-[#050812]">
      {/* Background Depth Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03),transparent_70%)]" />
        <div className="absolute inset-0 grid-mesh opacity-10" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-md">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-[11px] font-black tracking-[0.3em] text-white uppercase">Operational Trust Layer</span>
            </div>
            <h2 className="text-[36px] md:text-[44px] font-bold text-white tracking-tight leading-[1.1] mb-8">
              Absolute security. <br />
              <span className="text-white/40 italic">Engineered into the core.</span>
            </h2>
            <p className="text-[18px] text-white/50 leading-relaxed font-light">
              OYEN GRID is built for the world&apos;s most regulated environments. Our infrastructure layers protect your proprietary intellectual property and participant data with zero compromise.
            </p>
          </motion.div>
        </div>

        <div className="relative group">
           {/* LARGE IMMERSIVE IMAGE */}
           <motion.div
             initial={{ opacity: 0, scale: 0.98 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative rounded-[48px] overflow-hidden border border-white/10 shadow-[0_60px_120px_rgba(0,0,0,0.8)]"
           >
              <div className="absolute inset-0 bg-gradient-to-t from-[#050812] via-transparent to-transparent opacity-80" />
              <img src="/security-analyst.png" alt="Security Operations" className="w-full h-[600px] object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000" />
              
              {/* Live UI Overlay - Security Matrix */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   className="glass-card p-12 bg-[#050A19]/90 border-accent/20 backdrop-blur-3xl shadow-[0_0_80px_rgba(245,179,1,0.1)] text-center max-w-sm"
                 >
                    <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center mx-auto mb-8 shadow-2xl">
                       <Lock className="w-8 h-8 text-accent animate-pulse" />
                    </div>
                    <div className="text-[11px] font-black text-accent uppercase tracking-widest mb-4">Encryption Active</div>
                    <div className="text-xl font-bold text-white tracking-tight mb-6">AES-256 E2E Governance</div>
                    <div className="space-y-3">
                       {["SOC2 Type II", "ISO 27001", "GDPR Native"].map(tag => (
                         <div key={tag} className="flex items-center justify-center gap-2 text-white/40 text-[12px] font-medium">
                            <Check className="w-3.5 h-3.5 text-accent" /> {tag}
                         </div>
                       ))}
                    </div>
                 </motion.div>
              </div>

              {/* Data Node Indicators */}
              <div className="absolute bottom-12 left-12 flex gap-8">
                 <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                    <span className="text-[11px] font-black text-white uppercase tracking-widest">Global Firewall Active</span>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                    <span className="text-[11px] font-black text-white uppercase tracking-widest">Real-time Auditing</span>
                 </div>
              </div>
           </motion.div>
           
           {/* Background Halo */}
           <div className="absolute -inset-10 bg-accent/5 blur-[120px] -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32">
           {[
             { title: "Immutable Audit Logs", desc: "Every structural change is recorded with cryptographic precision.", icon: Activity },
             { title: "Zero Trust Architecture", desc: "Granular verification for every data request across all regional nodes.", icon: Shield },
             { title: "Physical Isolation", desc: "Dedicated instance options for maximum institutional security.", icon: Lock }
           ].map((item, i) => (
             <div key={i} className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-lg">
                   <item.icon className="w-6 h-6 text-white/40" />
                </div>
                <h4 className="text-lg font-bold text-white tracking-tight">{item.title}</h4>
                <p className="text-[14px] text-white/30 leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
