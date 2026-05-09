"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div className="relative h-px w-full">
      {/* Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-[400px] bg-[#C89B2D]/[0.03] blur-[120px] rounded-full pointer-events-none" />
      
      {/* Horizontal Line with Fade */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      
      {/* Small Data Accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-1 h-1 rounded-full bg-white/10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-1 h-1 rounded-full bg-white/10" />
      
      {/* Subtle Data Label (Optional) */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20 group-hover:opacity-40 transition-opacity">
         <div className="text-[8px] font-black uppercase tracking-[0.6em] text-white">System_Boundary_0{Math.floor(Math.random() * 9)}</div>
         <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </div>
  );
}
