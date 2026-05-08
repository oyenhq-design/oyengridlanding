"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  const links = [
    {
      title: "Platform",
      items: ["Features", "Solutions", "Architecture", "Security", "Pricing"]
    },
    {
      title: "Company",
      items: ["About", "Partners", "Contact", "Newsroom", "Governance"]
    },
    {
      title: "Resources",
      items: ["Documentation", "System Status", "Support", "API", "Whitepapers"]
    },
    {
      title: "Legal",
      items: ["Privacy", "Terms", "Compliance", "Ethics", "Security Policy"]
    }
  ];

  return (
    <footer className="relative bg-[#040816] pt-32 pb-10 overflow-hidden">
      
      {/* Background Depth */}
      <div className="absolute inset-0 z-0 opacity-[0.03] grayscale pointer-events-none">
         <div className="absolute inset-0 bg-gradient-to-t from-[#040816] via-transparent to-transparent" />
         <div className="smoke-overlay opacity-[0.05]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 mb-24">
          
          {/* Left: Infrastructure Statement */}
          <div className="lg:col-span-4">
             <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 bg-[#C89B2D] rounded-lg flex items-center justify-center font-bold text-navy-deep text-lg shadow-[0_0_20px_rgba(200,155,45,0.3)]">O</div>
                <span className="font-bold text-white tracking-tighter text-xl uppercase">OYEN GRID</span>
             </div>
             <p className="text-[16px] text-white/30 leading-relaxed max-w-[320px] font-light mb-12">
                Operational infrastructure for institutional-scale programme delivery and global infrastructure management.
             </p>
             <div className="flex items-center gap-6">
                {[0, 1, 2, 3].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center hover:bg-[#C89B2D]/10 hover:border-[#C89B2D]/20 transition-all cursor-pointer group">
                     <div className="w-3 h-3 bg-white/20 group-hover:bg-[#C89B2D] transition-colors rounded-[2px]" />
                  </div>
                ))}
             </div>
          </div>

          {/* Right: Navigation Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
             {links.map((group, i) => (
               <div key={i}>
                  <div className="text-[10px] text-white/20 font-black uppercase tracking-[0.4em] mb-10">{group.title}</div>
                  <ul className="space-y-5">
                    {group.items.map((item, j) => (
                      <li key={j}>
                        <Link href="#" className="text-[14px] text-white/40 hover:text-white transition-colors font-light">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
               </div>
             ))}
          </div>
        </div>

        {/* BOTTOM STATUS STRIP: Enterprise Weight */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex flex-wrap items-center justify-center md:justify-start gap-10">
              <div className="flex items-center gap-3">
                 <div className="live-pulse w-1.5 h-1.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                 <span className="text-[9px] text-white/30 font-bold uppercase tracking-[0.3em]">System Uptime: 99.999%</span>
              </div>
              <div className="flex items-center gap-3">
                 <span className="text-[9px] text-white/30 font-bold uppercase tracking-[0.3em]">Infrastructure: 140+ Regions</span>
              </div>
              <div className="flex items-center gap-3">
                 <span className="text-[9px] text-white/30 font-bold uppercase tracking-[0.3em]">Governance: Tier 1 SOC2</span>
              </div>
           </div>
           
           <div className="flex items-center gap-10">
              <span className="text-[11px] text-white/20 font-light tracking-wide">© 2026 OYEN GRID. ALL RIGHTS RESERVED.</span>
              <div className="flex items-center gap-4">
                 <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                 <span className="text-[9px] text-white/20 font-black uppercase tracking-widest">v.0.4.2-PROD</span>
              </div>
           </div>
        </div>
      </div>
    </footer>
  );
}
