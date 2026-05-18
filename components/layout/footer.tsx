"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function FooterPremium() {
  const footerLinks = [
    {
      title: "Platform",
      links: [
        "Programme Infrastructure",
        "Live Operations",
        "Participant Systems",
        "Analytics Engine"
      ]
    },
    {
      title: "Solutions",
      links: [
        "NGOs & Fellowships",
        "Enterprise Training",
        "Government Programmes",
        "Workforce Coordination"
      ]
    },
    {
      title: "Enterprise",
      links: [
        "Governance & Compliance",
        "Multi-Region Infrastructure",
        "Security Architecture",
        "White-Label Deployment"
      ]
    },
    {
      title: "Resources",
      links: [
        "Documentation",
        "API Reference",
        "Support Center",
        "System Updates"
      ]
    }
  ];

  const statusItems = [
    "SOC2 Ready",
    "99.99% Uptime",
    "Multi-Region Infrastructure",
    "Enterprise Encryption"
  ];

  const bottomLinks = [
    "Privacy",
    "Terms",
    "Security",
    "Infrastructure Status"
  ];

  return (
    <footer className="bg-gradient-to-b from-[#02040A] to-[#010205] relative overflow-hidden pt-20 pb-8 border-t border-white/[0.05]">
      {/* AMBIENT BACKGROUND LAYER */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(244,185,66,0.02),transparent_70%)] opacity-80" />
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-[radial-gradient(ellipse_at_bottom,rgba(4,8,22,0.8),transparent_80%)] opacity-50" />
      </div>

      <div className="max-w-[1200px] mx-auto px-8 relative z-10 flex flex-col">
        
        {/* 1. TOP BRAND ROW */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.05] mb-12">
          {/* Left Side */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group shrink-0 relative">
               <div className="absolute -inset-3 bg-[#f4b942]/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="w-6 h-6 bg-gradient-to-br from-[#f4b942] to-[#c7912b] rounded-[6px] flex items-center justify-center shadow-[0_4px_20px_rgba(244,185,66,0.25)] group-hover:scale-105 transition-all duration-500 relative overflow-hidden">
                  <div className="w-2.5 h-2.5 border-[1.5px] border-black rotate-45 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               </div>
               <span className="font-bold text-white text-[15px] tracking-tight uppercase relative z-10 drop-shadow-sm">OYEN GRID</span>
            </Link>
            <p className="text-[13px] text-white/50 max-w-[400px] leading-relaxed font-light">
              Operational infrastructure for institutional coordination and intelligent programme delivery.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3 bg-white/[0.02] border border-white/[0.05] px-4 py-2 rounded-full">
            <div className="relative flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_12px_#10b981] relative z-10" />
              <div className="absolute inset-0 w-4 h-4 rounded-full bg-[#10b981]/20 animate-ping" />
            </div>
            <span className="text-[11px] font-medium text-white/70 uppercase tracking-widest">
              System Status: <span className="text-[#10b981]">Operational</span>
            </span>
          </div>
        </div>

        {/* 2. MAIN FOOTER GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {footerLinks.map((col, i) => (
            <div key={i} className="flex flex-col">
              <h4 className="text-[11px] font-bold text-[#f4b942] uppercase tracking-[0.2em] mb-6">
                {col.title}
              </h4>
              <ul className="space-y-4">
                {col.links.map((link, j) => (
                  <li key={j}>
                     <Link 
                       href="#" 
                       className="text-[13px] text-white/40 hover:text-[#f4b942] transition-colors duration-300 font-light block"
                     >
                       {link}
                     </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 3. INFRASTRUCTURE STRIP */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-black/40 border border-white/[0.05] rounded-full py-3 px-6 backdrop-blur-md">
             {statusItems.map((item, i) => (
               <div key={i} className="flex items-center gap-3">
                  <span className="text-[11px] font-medium text-white/40 uppercase tracking-[0.15em]">{item}</span>
                  {i !== statusItems.length - 1 && (
                    <div className="w-1 h-1 rounded-full bg-[#f4b942]/50" />
                  )}
               </div>
             ))}
          </div>
        </div>

        {/* 4. BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/[0.05]">
          {/* Left */}
          <div className="text-[11px] font-medium text-white/30 uppercase tracking-widest">
            © 2025 OYEN GRID. All rights reserved.
          </div>

          {/* Center */}
          <div className="flex flex-wrap items-center justify-center gap-4">
             {bottomLinks.map((link, i) => (
                <div key={i} className="flex items-center gap-4">
                  <Link href="#" className="text-[11px] font-medium text-white/40 hover:text-white transition-colors uppercase tracking-widest">
                    {link}
                  </Link>
                  {i !== bottomLinks.length - 1 && (
                    <span className="text-white/20 text-[10px]">•</span>
                  )}
                </div>
             ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            <span className="text-[11px] font-medium text-white/40 uppercase tracking-widest">
              Operational
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

