"use client";

export function SectionDivider() {
  return (
    <div className="relative h-px w-full overflow-visible">
      {/* Sharp Structural Line */}
      <div className="absolute inset-0 bg-white/[0.04]" />
      
      {/* Minimal Node Accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[2px] h-[2px] rounded-full bg-[#d6a63c]/40" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[2px] h-[2px] rounded-full bg-[#d6a63c]/40" />
      
      {/* Architectural Indicator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-[#030712] flex items-center gap-3">
         <div className="w-[1px] h-2 bg-white/10" />
         <div className="text-[8px] font-bold text-white/10 uppercase tracking-[0.6em]">Infrastructure Boundary</div>
         <div className="w-[1px] h-2 bg-white/10" />
      </div>
    </div>
  );
}
