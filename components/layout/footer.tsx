"use client";

import { motion } from "framer-motion";
import { Shield, ArrowRight, Globe, ShieldCheck, Cpu, MessageSquare, Sparkles, Grid } from "lucide-react";
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
      title: "Resources",
      links: ["Documentation", "Architecture", "API Reference", "Help Center", "Community"]
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
    <footer className="bg-[#05070B] pt-32 pb-16 border-t border-white/5 relative overflow-hidden">
      <div className="container-custom relative z-10">
        
        {/* TOP: Brand & Mission */}
        <div className="grid lg:grid-cols-12 gap-20 mb-24">
          <div className="lg:col-span-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
             <div className="flex items-center gap-4 group">
               <div className="w-10 h-10 rounded-lg bg-brand-gold flex items-center justify-center transition-transform group-hover:rotate-12">
                 <Shield className="w-6 h-6 text-[#05070B]" />
               </div>
               <span className="text-[24px] font-black tracking-[-0.05em] text-white">OYEN GRID</span>
             </div>
             <p className="text-[16px] text-white/30 max-w-xl leading-relaxed font-medium">
               The operating system for mission-critical institutional programme delivery. <br className="hidden md:block" />
               Architecting the infrastructure of coordination at global scale.
             </p>
          </div>
        </div>

        {/* MIDDLE: 6-Column Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-24">
          {columnGroups.map((col, i) => (
            <div key={i}>
              <h5 className="text-[11px] font-black text-white uppercase tracking-[0.4em] mb-8 opacity-50">{col.title}</h5>
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

        {/* BOTTOM: System Telemetry & Legal */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
              <span>© 2024 OYEN GRID SYSTEM</span>
              <Link href="#" className="hover:text-white transition-colors">Privacy Architecture</Link>
              <Link href="#" className="hover:text-white transition-colors">Security Protocol</Link>
              <Link href="#" className="hover:text-white transition-colors">SLA</Link>
           </div>
           
           <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)] animate-pulse" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-white/30">System Nominal</span>
              </div>
              <div className="flex items-center gap-3">
                 <Cpu className="w-4 h-4 text-white/20" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-white/30">L4_AUTHORIZED</span>
              </div>
           </div>
        </div>
      </div>
    </footer>
  );
}
