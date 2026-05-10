"use client";

import { motion } from "framer-motion";
import { Shield, ArrowRight, Globe, ShieldCheck, Cpu, MessageSquare, Sparkles, Grid } from "lucide-react";
import Link from "next/link";

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
    <footer className="bg-[#05070B] pt-32 pb-16 border-t border-white/5 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-gold/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 mb-24">
          
          {/* BRAND COLUMN (Span 4) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-8 group">
              <div className="w-10 h-10 rounded-lg bg-brand-gold flex items-center justify-center transition-transform group-hover:rotate-12 shadow-[0_10px_30px_rgba(245,185,66,0.3)]">
                <Shield className="w-6 h-6 text-[#05070B]" />
              </div>
              <span className="text-[24px] font-black tracking-[-0.05em] text-white">OYEN <span className="text-brand-gold italic">GRID</span></span>
            </div>
            <p className="text-[16px] text-white/30 max-w-xs leading-relaxed mb-10 font-medium">
              The mission-critical operating system for structured institutional programme delivery at scale.
            </p>
            <div className="flex gap-4">
               {[Sparkles, Grid, Globe, MessageSquare].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-white/20 hover:text-brand-gold hover:border-brand-gold/40 transition-all bg-white/[0.02]">
                    <Icon className="w-4 h-4" />
                 </a>
               ))}
            </div>
          </div>

          {/* NAV COLUMNS (Span 8) */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12">
            {columns.map((col, i) => (
              <div key={i}>
                <h5 className="text-[11px] font-black text-white uppercase tracking-[0.4em] mb-8">{col.title}</h5>
                <ul className="space-y-4">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <Link href="#" className="text-[14px] text-white/30 hover:text-brand-gold transition-colors font-medium tracking-tight">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.3em] text-white/20">
              <span>© 2024 OYEN GRID SYSTEM</span>
              <Link href="#" className="hover:text-white transition-colors">Privacy Protocol</Link>
              <Link href="#" className="hover:text-white transition-colors">Security Architecture</Link>
           </div>
           
           <div className="flex items-center gap-8">
             <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)] animate-pulse" />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/30">System Nominal</span>
             </div>
             <div className="flex items-center gap-3">
                <Cpu className="w-4 h-4 text-white/20" />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/30">Protocol L-04 Active</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
