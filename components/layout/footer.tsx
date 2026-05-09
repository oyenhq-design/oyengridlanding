"use client";

import Link from "next/link";
import { Globe, Code, Briefcase, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      title: "Platform",
      items: ["Programme OS", "Governance", "Analytics", "Security", "Infrastructure"]
    },
    {
      title: "Company",
      items: ["Institutional", "Partners", "Contact", "Media", "Security Trust"]
    },
    {
      title: "Resources",
      items: ["Documentation", "System Status", "Audit Logs", "Training", "Support"]
    },
    {
      title: "Legal",
      items: ["Sovereignty", "Privacy", "Terms", "Compliance", "Governance"]
    }
  ];

  return (
    <footer className="bg-[#01040a] pt-32 pb-16 relative overflow-hidden border-t border-white/[0.04]">
      
      {/* Background atmosphere */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-accent-gold/[0.02] blur-[160px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 lg:gap-24 mb-32">
          
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-10">
              <div className="w-8 h-8 bg-accent-gold rounded-lg flex items-center justify-center font-bold text-[#01040a] text-lg">O</div>
              <span className="font-bold text-white tracking-tighter text-lg uppercase">OYEN GRID</span>
            </Link>
            <p className="text-[14px] opacity-40 leading-relaxed mb-10 font-light">
              Professional programme infrastructure for global enterprise scale. Institutional integrity by design.
            </p>
            <div className="flex gap-6">
              {[Globe, Code, Briefcase].map((Icon, i) => (
                <Link key={i} href="#" className="text-white/20 hover:text-accent-gold transition-colors">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {links.map((group) => (
            <div key={group.title}>
              <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-white/20 mb-10">{group.title}</h4>
              <ul className="space-y-6">
                {group.items.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[14px] text-white/40 hover:text-white transition-all flex items-center gap-2 group font-light">
                      {item}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Institutional Footer Bottom */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              <div className="live-pulse" />
              <span className="text-[10px] text-accent-gold font-black uppercase tracking-widest">Global Ops: Nominal</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div className="flex items-center gap-3 text-[10px] text-white/20 font-black uppercase tracking-widest">
              Regional Clusters: <span className="text-white/40">US-EAST // EU-WEST // ASIA-SOUTH</span>
            </div>
          </div>
          
          <div className="text-[11px] text-white/10 font-black uppercase tracking-[0.2em]">
            © {currentYear} OYEN GRID INSTITUTIONAL. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
