"use client";

import Link from "next/link";

export function Footer() {
  const links = [
    {
      title: "Infrastructure",
      items: ["Architecture", "Nodes", "Protocols", "Governance", "Scale"]
    },
    {
      title: "Intelligence",
      items: ["Telemetry", "Forecasting", "Orchestration", "Logic Layers", "Insights"]
    },
    {
      title: "Institutional",
      items: ["Governance", "Security", "Compliance", "Partners", "Reports"]
    },
    {
      title: "Resources",
      items: ["Documentation", "System Status", "Support", "Legal", "Policy"]
    }
  ];

  return (
    <footer className="relative bg-[#030712] pt-48 pb-16 overflow-hidden border-t border-white/[0.04]">
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-40 mb-32">
          
          {/* Left: Infrastructure Statement */}
          <div className="lg:col-span-4">
             <div className="flex flex-col mb-12">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 bg-[#d6a63c] rounded-[8px] flex items-center justify-center font-bold text-[#030712] text-xl shadow-[0_0_15px_rgba(214,166,60,0.3)]">O</div>
                   <span className="font-bold text-white tracking-tighter text-xl uppercase">OYEN GRID</span>
                </div>
                <span className="text-[9px] font-bold text-[#d6a63c]/60 uppercase tracking-[0.25em] mt-1 ml-11">Institutional Infrastructure</span>
             </div>
             <p className="max-w-[320px] mb-12 text-[15px] leading-[1.8] text-white/30 font-light">
                Coordinating global-scale programme operations through a unified architectural infrastructure layer.
             </p>
             <div className="flex items-center gap-6">
                {[0, 1, 2, 3].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center hover:bg-[#d6a63c]/10 hover:border-[#d6a63c]/20 transition-all cursor-pointer group">
                     <div className="w-3.5 h-3.5 bg-white/5 group-hover:bg-[#d6a63c] transition-colors rounded-[3px]" />
                  </div>
                ))}
             </div>
          </div>

          {/* Right: Navigation Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-20">
             {links.map((group, i) => (
               <div key={i}>
                  <div className="text-[10px] text-white/10 font-bold uppercase tracking-[0.5em] mb-12">{group.title}</div>
                  <ul className="space-y-6">
                    {group.items.map((item, j) => (
                      <li key={j}>
                        <Link href="#" className="text-[14px] text-white/30 hover:text-white transition-colors font-light">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
               </div>
             ))}
          </div>
        </div>

        {/* BOTTOM STATUS STRIP */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
           <div className="flex flex-wrap items-center justify-center md:justify-start gap-16">
              <div className="flex items-center gap-4">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40 shadow-[0_0_8px_rgba(16,185,129,0.3)]" />
                 <span className="text-[9px] text-white/15 font-bold uppercase tracking-[0.4em]">Node Status: Nominal</span>
              </div>
              <div className="flex items-center gap-4">
                 <span className="text-[9px] text-white/15 font-bold uppercase tracking-[0.4em]">142 Regions Active</span>
              </div>
              <div className="flex items-center gap-4">
                 <span className="text-[9px] text-white/15 font-bold uppercase tracking-[0.4em]">Architecture: L-04</span>
              </div>
           </div>
           
           <div className="flex items-center gap-12">
              <span className="text-[11px] text-white/15 font-light tracking-wide">© 2026 OYEN GRID. ALL RIGHTS RESERVED.</span>
              <div className="flex items-center gap-4">
                 <div className="w-1.5 h-1.5 rounded-full bg-white/5" />
                 <span className="text-[9px] text-white/5 font-bold uppercase tracking-widest">v.0.4.2-STABLE</span>
              </div>
           </div>
        </div>
      </div>
    </footer>
  );
}
