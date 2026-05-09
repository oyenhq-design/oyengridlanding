"use client";

import Link from "next/link";
import { Globe, ShieldCheck, Activity, Cpu } from "lucide-react";

export function Footer() {
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
      links: ["Documentation", "Architecture", "Compliance", "Help Center"]
    },
    {
      title: "Legal",
      links: ["Privacy Protocol", "Terms of Governance", "Data Sovereignty"]
    }
  ];

  return (
    <footer className="bg-[#040816] border-t border-white/5 pt-32 pb-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 mb-32">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-10 group">
              <div className="w-[34px] h-[34px] bg-[#D4A63A] rounded-xl flex items-center justify-center font-black text-[#020617] text-lg transition-transform group-hover:rotate-12">O</div>
              <span className="font-bold text-white tracking-[-0.04em] text-[20px]">OYEN GRID</span>
            </div>
            <p className="text-white/30 text-[14px] leading-relaxed max-w-[280px] font-light mb-10">
              The professional infrastructure for global programme operations and institutional governance.
            </p>
            <div className="flex items-center gap-6">
               <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/20 hover:text-accent-gold hover:border-accent-gold/20 transition-all cursor-pointer">
                  <Globe className="w-4 h-4" />
               </div>
               <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/20 hover:text-accent-gold hover:border-accent-gold/20 transition-all cursor-pointer">
                  <ShieldCheck className="w-4 h-4" />
               </div>
            </div>
          </div>

          {/* Links Columns */}
          {columns.map((col, i) => (
            <div key={i}>
              <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-white/40 mb-10">{col.title}</h5>
              <ul className="space-y-5">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <Link href="#" className="text-[14px] text-white/20 hover:text-accent-gold transition-colors font-light">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM STATUS ROW */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
           <div className="text-[11px] text-white/10 font-black uppercase tracking-widest">
              © 2026 OYEN GRID // Institutional Systems Division
           </div>
           
           <div className="flex items-center gap-10">
              <div className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">System Nominal</span>
              </div>
              <div className="flex items-center gap-3">
                 <Cpu className="w-3.5 h-3.5 text-white/10" />
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">L-04 Protocol Active</span>
              </div>
           </div>
        </div>
      </div>
    </footer>
  );
}
