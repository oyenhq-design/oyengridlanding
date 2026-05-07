"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Shield, Activity } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#050816]">
      {/* CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/cta-bg.png" 
          alt="Operations Room Cinematic" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/80 to-[#050816]/40" />
        <div className="noise-bg absolute inset-0 opacity-[0.05]" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center gap-3 mb-10">
             <div className="w-1.5 h-1.5 rounded-full bg-accent" />
             <span className="text-accent text-[10px] font-black tracking-[0.4em] uppercase opacity-60">SYSTEM DEPLOYMENT</span>
          </div>
          
          <h2 className="mb-10 text-white">
            Structure global programmes <br />
            <span className="text-gold-gradient italic">with absolute confidence.</span>
          </h2>
          
          <p className="text-white/30 text-[17px] font-light max-w-xl mx-auto mb-12 leading-relaxed">
            Scale your enterprise infrastructure with the structural integrity and high-fidelity control required for global delivery.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20">
            <button className="btn-primary h-14 px-12 text-sm uppercase tracking-widest font-black">
              Start Building
            </button>
            <button className="text-white/30 hover:text-white font-bold text-[13px] transition-all uppercase tracking-widest group">
              Speak to Sales <span className="ml-2 group-hover:translate-x-2 transition-transform inline-block">→</span>
            </button>
          </div>

          {/* TRUST INDICATORS */}
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-30">
            {[
              { label: "Infrastructure", val: "Enterprise", icon: Shield },
              { label: "Uptime", val: "99.9% Core", icon: Activity },
              { label: "Deployment", val: "Multi-Region", icon: Globe }
            ].map((trust, i) => (
              <div key={i} className="flex items-center gap-3">
                <trust.icon className="w-3.5 h-3.5 text-white" />
                <div className="text-left">
                  <div className="text-[11px] font-bold text-white tracking-tight">{trust.val}</div>
                  <div className="text-[9px] font-black text-white/40 uppercase tracking-widest">{trust.label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
