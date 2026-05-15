"use client";

import { Shield, Cpu } from "lucide-react";
import Link from "next/link";

export function FooterPremium() {
  const columnGroups = [
    {
      title: "Platform",
      links: ["Infrastructure", "Governance", "Coordination", "Intelligence", "Analytics"]
    },
    {
      title: "Solutions",
      links: ["Government", "Corporate", "NGOs", "Academies", "Foundations"]
    },
    {
      title: "Security",
      links: ["Compliance", "Privacy Protocol", "Trust Center", "Infrastructure", "L4 Status"]
    },
    {
      title: "Company",
      links: ["Mission", "Leadership", "Newsroom", "Careers", "Contact"]
    },
    {
      title: "Legal",
      links: ["Terms", "Privacy", "Cookies", "Security", "SLA"]
    }
  ];

  return (
    <footer className="bg-[#050816] pt-[96px] pb-[64px] border-t border-white/5 relative overflow-hidden">
      <div className="container-custom relative z-10">
        
        {/* BRAND & MISSION */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-14 mb-28 pb-28 border-b border-white/5">
           <div className="flex items-center gap-5 group">
             <div className="w-12 h-12 rounded-lg bg-brand-gold flex items-center justify-center">
               <Shield className="w-7 h-7 text-[#050816]" />
             </div>
             <span className="text-[26px] font-black tracking-tight text-white uppercase">OYEN GRID</span>
           </div>
           <p className="text-[19px] text-white/30 max-w-xl leading-relaxed font-medium">
             The operating system for mission-critical institutional programme delivery. <br />
             Architecting the infrastructure of coordination at global scale.
           </p>
        </div>

        {/* 5-COLUMN NAVIGATION */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
          {columnGroups.map((col, i) => (
            <div key={i}>
              <h5 className="text-[13px] font-black text-white uppercase tracking-[0.45em] mb-10 opacity-40">{col.title}</h5>
              <ul className="space-y-4">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <Link href="#" className="text-[16px] text-white/30 hover:text-brand-gold transition-colors font-medium">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM TELEMETRY */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
           <div className="flex flex-wrap items-center justify-center md:justify-start gap-8">
              <span>© 2024 OYEN GRID SYSTEM</span>
              <div className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
                 <span>System Nominal</span>
              </div>
           </div>
           
           <div className="flex items-center gap-8">
              <Link href="#" className="hover:text-white transition-colors">Privacy Architecture</Link>
              <div className="flex items-center gap-3">
                 <Cpu className="w-4 h-4 opacity-50" />
                 <span>L4_AUTHORIZED</span>
              </div>
           </div>
        </div>
      </div>
    </footer>
  );
}
