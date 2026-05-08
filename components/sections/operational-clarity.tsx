"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function OperationalClarity() {
  return (
    <section className="relative overflow-hidden section-transition">
      
      {/* ENVIRONMENTAL BACKGROUND: Operational Ambience */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/env-infrastructure.png" 
          alt="Environmental Detail" 
          fill
          className="object-cover blur-[60px] scale-110 opacity-[0.08] grayscale"
        />
        <div className="absolute inset-0 bg-navy-deep/90 backdrop-blur-2xl" />
        <div className="absolute inset-0 bg-[url('/dashboard-textures.png')] opacity-[0.03] mix-blend-screen scale-150 rotate-6" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* CONTENT SIDE (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
              <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Operational Logic</span>
            </div>

            <h2 className="text-[36px] md:text-[54px] font-bold text-white mb-10 leading-[1] tracking-tight">
              Absolute clarity. <br />
              <span className="text-gold-gradient italic font-medium text-[48px] md:text-[72px]">Universal coordination.</span>
            </h2>
            
            <p className="text-[18px] text-white/30 mb-14 max-w-[480px] leading-relaxed font-light">
              Eliminate the fragmentation that cripples global delivery. OYEN GRID provides the single operational source of truth for your entire delivery network.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {[
                { title: "Governance", desc: "Institutional compliance layers." },
                { title: "Scaling", desc: "Dynamic infrastructure nodes." }
              ].map((feature, i) => (
                <div key={i} className="p-6 rounded-[24px] bg-white/[0.02] border border-white/[0.05] group hover:border-accent-gold/20 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-accent-gold/10 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-5 h-5 text-accent-gold" />
                  </div>
                  <h4 className="text-white font-bold mb-2">{feature.title}</h4>
                  <p className="text-[13px] text-white/20 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* VISUAL SIDE (Right) - Image Bleed */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] group">
              <Image 
                src="/ops-portrait.png" 
                alt="Operational Detail" 
                fill
                className="object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
              
              {/* Overlapping Info Card */}
              <div className="absolute bottom-10 left-10 right-10 p-8 glass-card border-white/10 bg-navy-mid/80 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-[10px] text-accent-gold font-black uppercase tracking-widest mb-3">System Snapshot</div>
                <div className="text-xl font-bold text-white mb-2">99.98% Governance Match</div>
                <div className="text-[13px] text-white/30 font-light">Global audit protocol active across all active structural nodes.</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      <div className="atmos-fade-bottom h-48" />
    </section>
  );
}
