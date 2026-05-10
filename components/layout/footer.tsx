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
    <footer className="bg-[#05070B] pt-40 pb-20 border-t border-white/5 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-brand-gold/[0.03] blur-[180px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-24 mb-32">
          
          {/* BRAND COLUMN (Span 4) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-5 mb-10 group">
              <div className="w-12 h-12 rounded-xl bg-brand-gold flex items-center justify-center transition-transform group-hover:rotate-12 shadow-[0_12px_40px_rgba(245,185,66,0.3)]">
                <Shield className="w-7 h-7 text-[#05070B]" />
              </div>
              <span className="text-[28px] font-black tracking-[-0.05em] text-white">OYEN <span className="text-brand-gold italic">GRID</span></span>
            </div>
            <p className="text-[18px] text-white/30 max-w-sm leading-relaxed mb-12 font-medium">
              The mission-critical operating system for structured institutional programme delivery at scale.
            </p>
            <div className="flex gap-6">
               {[Sparkles, Grid, Globe, MessageSquare].map((Icon, i) => (
                 <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-white/20 hover:text-brand-gold hover:border-brand-gold/40 transition-all bg-white/[0.02]">
                    <Icon className="w-5 h-5" />
                 </a>
               ))}
            </div>
          </div>

          {/* LINKS COLUMNS (Span 8) */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-16">
            {columns.map((col, i) => (
              <div key={i}>
                <h5 className="text-[11px] font-black uppercase tracking-[0.5em] text-brand-gold mb-10">{col.title}</h5>
                <ul className="space-y-6">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <Link href="#" className="text-[15px] font-bold text-white/30 hover:text-white transition-colors tracking-tight">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* BOTTOM ROW */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-[13px] font-medium text-white/20 tracking-wide uppercase">
             © 2026 OYEN HQ // INSTITUTIONAL SYSTEMS DIVISION. ARCHITECTED FOR GLOBAL DELIVERY.
          </div>
          
          <div className="flex items-center gap-12">
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
