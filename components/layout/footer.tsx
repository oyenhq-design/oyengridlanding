"use client";

import Link from "next/link";
import { Globe, ShieldCheck, Cpu } from "lucide-react";

export function FooterPremium() {
  const columns = [
    {
      title: "Platform",
      links: ["Infrastructure", "Governance", "Intelligence", "Operations", "Security"]
    },
    {
      title: "Solutions",
      links: ["Bootcamps", "Training Orgs", "Corporate", "NGOs & Academies"]
    },
    {
      title: "Resources",
      links: ["Documentation", "Architecture", "Compliance", "Help Center", "API"]
    },
    {
      title: "Company",
      links: ["About", "Careers", "Newsroom", "Contact"]
    }
  ];

  return (
    <footer className="bg-[#05070B] border-t border-white/[0.04] pt-24 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 mb-20">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8 group">
              <div className="w-8 h-8 bg-brand-gold rounded-lg flex items-center justify-center font-black text-black text-[16px] transition-transform group-hover:rotate-12 shadow-[0_8px_20px_rgba(245,185,66,0.3)]">O</div>
              <span className="font-bold text-white tracking-tight text-[18px]">OYEN GRID</span>
            </div>
            <p className="text-white/40 text-[14px] leading-relaxed max-w-[280px] font-light mb-8">
              The institutional operating system for global programme delivery and architectural coordination.
            </p>
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-white/20 hover:text-brand-gold hover:border-brand-gold/20 transition-all cursor-pointer">
                  <Globe className="w-4 h-4" />
               </div>
               <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-white/20 hover:text-brand-gold hover:border-brand-gold/20 transition-all cursor-pointer">
                  <ShieldCheck className="w-4 h-4" />
               </div>
            </div>
          </div>

          {/* LINKS COLUMNS */}
          {columns.map((col, i) => (
            <div key={i}>
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-8">{col.title}</h5>
              <ul className="space-y-4">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <Link href="#" className="text-[13.5px] text-white/40 hover:text-brand-gold transition-colors font-medium">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM ROW */}
        <div className="pt-10 border-t border-white/[0.03] flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="text-[10px] text-white/10 font-black uppercase tracking-[0.2em]">
              © 2026 OYEN GRID // INSTITUTIONAL SYSTEMS DIVISION
           </div>
           
           <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                 <div className="w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                 <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20">System Nominal</span>
              </div>
              <div className="flex items-center gap-2">
                 <Cpu className="w-3 h-3 text-white/10" />
                 <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20">Protocol L-04 Active</span>
              </div>
           </div>
        </div>
      </div>
    </footer>
  );
}
