"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Eye, Database } from "lucide-react";

export function EnterpriseSecurity() {
  const blocks = [
    { label: "Audit", icon: ShieldCheck, desc: "Immutable structural logging" },
    { label: "Monitoring", icon: Eye, desc: "Real-time threat detection" },
    { label: "Backup", icon: Database, desc: "Global redundant nodes" }
  ];

  return (
    <section className="section-padding bg-navy-light/20 border-t border-white/5 relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.6)] bg-navy-deep aspect-[1.1]">
              <Image 
                src="/security-soc.png" 
                alt="Enterprise Security Operations Center" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/40 to-transparent" />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[36px] md:text-[48px] font-bold text-white mb-10 leading-[1.1] tracking-tight">
              Enterprise security at <br />
              <span className="text-gold-gradient italic font-medium">every layer.</span>
            </h2>
            
            <p className="text-[17px] text-white/40 mb-12 max-w-[480px] leading-relaxed font-light">
              We provide mission-critical protection for your delivery infrastructure. From encrypted data streams to multi-node redundancy, your operations are secured by institutional standards.
            </p>
            
            <div className="space-y-4">
              {blocks.map((block, i) => (
                <div key={i} className="flex items-center justify-between p-6 glass-card bg-white/[0.005] border-white/[0.03] hover:border-accent-gold/10 group cursor-default transition-all">
                  <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center">
                       <block.icon className="w-4 h-4 text-accent-gold/40 group-hover:text-accent-gold transition-colors" />
                    </div>
                    <div>
                       <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-1">{block.label}</div>
                       <div className="text-[14px] font-bold text-white/80">{block.desc}</div>
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-accent-gold/20 group-hover:bg-accent-gold transition-all" />
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
