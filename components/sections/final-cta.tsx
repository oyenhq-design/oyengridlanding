"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-48 md:py-64">
      
      {/* ENVIRONMENTAL BACKGROUND: Final Command Anchor */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/env-command-new.png" 
          alt="Final Infrastructure Background" 
          fill
          className="object-cover blur-[80px] scale-110 opacity-[0.12] grayscale"
        />
        <div className="absolute inset-0 bg-navy-deep/90 backdrop-blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-[url('/dashboard-textures.png')] opacity-[0.05] mix-blend-screen scale-150" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-4 mb-12">
             <div className="w-16 h-[1px] bg-accent-gold/40" />
             <span className="text-[11px] font-black text-accent-gold uppercase tracking-[0.6em]">System Ready</span>
             <div className="w-16 h-[1px] bg-accent-gold/40" />
          </div>

          <h2 className="text-[54px] md:text-[100px] font-bold text-white mb-16 leading-[0.85] tracking-tighter uppercase">
            Initialize your <br />
            <span className="text-gold-gradient italic font-medium lowercase">global delivery.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mb-20">
            <button className="btn-gold px-16 h-16 text-[13px] tracking-widest uppercase shadow-[0_30px_60px_rgba(200,155,45,0.25)] hover:scale-105 transition-all">
              Initialize System
            </button>
            <button className="text-[13px] font-black text-white/40 hover:text-white transition-all uppercase tracking-[0.3em]">
              Request Architecture Review
            </button>
          </div>

          {/* Infrastructure Stats */}
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 pt-20 border-t border-white/5 max-w-4xl mx-auto">
             {[
               { val: "99.99%", label: "System Integrity" },
               { val: "Global", label: "Delivery Scale" },
               { val: "Active", label: "Governance" }
             ].map((stat, i) => (
               <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">{stat.val}</div>
                  <div className="text-[10px] text-white/20 font-black uppercase tracking-[0.3em]">{stat.label}</div>
               </div>
             ))}
          </div>
        </motion.div>
      </div>

      <div className="atmos-fade-top h-64" />
    </section>
  );
}
