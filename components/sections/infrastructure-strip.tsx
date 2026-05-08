"use client";

import { Globe, Zap, Shield } from "lucide-react";

export function InfrastructureStrip() {
  return (
    <div className="py-14 border-b border-white/5 bg-navy-deep relative z-10">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          <div className="flex items-center gap-3 group">
            <Globe className="w-4 h-4 text-white/20 group-hover:text-accent-gold transition-colors" />
            <span className="text-[11px] font-bold text-white/40 uppercase tracking-[0.4em]">Global Scale</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-white/5" />
          <div className="flex items-center gap-3 group">
            <Zap className="w-4 h-4 text-white/20 group-hover:text-accent-gold transition-colors" />
            <span className="text-[11px] font-bold text-white/40 uppercase tracking-[0.4em]">Precision Logic</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-white/5" />
          <div className="flex items-center gap-3 group">
            <Shield className="w-4 h-4 text-white/20 group-hover:text-accent-gold transition-colors" />
            <span className="text-[11px] font-bold text-white/40 uppercase tracking-[0.4em]">Immutable Audit</span>
          </div>
        </div>
      </div>
    </div>
  );
}
