"use client";

import { Globe, Zap, Shield } from "lucide-react";

export function InfrastructureStrip() {
  return (
    <div className="py-14 border-y border-white/[0.03] bg-navy-mid/20 backdrop-blur-3xl relative z-20 overflow-hidden">
      {/* Subtle Structural Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,155,45,0.03),transparent_70%)]" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-32">
          <div className="flex items-center gap-5 group cursor-default">
            <div className="w-2 h-2 rounded-full bg-accent-gold/40 group-hover:bg-accent-gold transition-all shadow-[0_0_12px_rgba(200,155,45,0.4)]" />
            <Globe className="w-5 h-5 text-white/20 group-hover:text-accent-gold transition-colors duration-500" />
            <span className="text-[12px] font-black text-white/20 uppercase tracking-[0.5em] group-hover:text-white transition-colors duration-500">Global_Scale</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-white/5" />
          <div className="flex items-center gap-5 group cursor-default">
            <div className="w-2 h-2 rounded-full bg-accent-gold/40 group-hover:bg-accent-gold transition-all shadow-[0_0_12px_rgba(200,155,45,0.4)]" />
            <Zap className="w-5 h-5 text-white/20 group-hover:text-accent-gold transition-colors duration-500" />
            <span className="text-[12px] font-black text-white/20 uppercase tracking-[0.5em] group-hover:text-white transition-colors duration-500">Precision_Logic</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-white/5" />
          <div className="flex items-center gap-5 group cursor-default">
            <div className="w-2 h-2 rounded-full bg-accent-gold/40 group-hover:bg-accent-gold transition-all shadow-[0_0_12px_rgba(200,155,45,0.4)]" />
            <Shield className="w-5 h-5 text-white/20 group-hover:text-accent-gold transition-colors duration-500" />
            <span className="text-[12px] font-black text-white/20 uppercase tracking-[0.5em] group-hover:text-white transition-colors duration-500">Immutable_Audit</span>
          </div>
        </div>
      </div>
    </div>
  );
}
