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
        "Communication Layer",
        "Operational Intelligence",
        "Analytics Engine"
      ]
    },
    {
      title: "Enterprise",
      links: [
        "Governance & Compliance",
        "Enterprise Deployment",
        "Security Architecture",
        "Multi-Region Infrastructure",
        "Institutional Controls",
        "White-Label Systems"
      ]
    },
    {
      title: "Resources",
      links: [
        "Documentation",
        "API Reference",
        "Infrastructure Status",
        "Support Center",
        "Case Studies",
        "System Updates"
      ]
    },
    {
      title: "Solutions",
      links: [
        "NGOs & Fellowships",
        "Enterprise Training",
        "Government Programmes",
        "Workforce Coordination",
        "Academies & Bootcamps",
        "Institutional Delivery"
      ]
    },
    {
      title: "Company",
      links: [
        "About OYEN GRID",
        "Careers",
        "Partnerships",
        "Contact Sales",
        "Terms",
        "Privacy"
      ]
    }
  ];

  const statusItems = [
    "SOC2 Ready",
    "99.99% Uptime",
    "Multi-Region Infrastructure",
    "Enterprise Encryption",
    "AI-Assisted Operations",
    "Operational Telemetry Active"
  ];

  const metrics = [
    "12M+ Participants Coordinated",
    "480K+ Secure Cohorts",
    "42 Active Infrastructure Nodes",
    "0.8ms Global Sync Latency"
  ];

  return (
    <footer className="bg-gradient-to-b from-[#02040A] to-[#010205] relative overflow-hidden pt-24 pb-10 border-t border-white/[0.04]">
      {/* AMBIENT BACKGROUND LAYER */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(232,184,74,0.02),transparent_70%)] opacity-80" />
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-[radial-gradient(ellipse_at_bottom,rgba(4,8,22,0.8),transparent_80%)] opacity-50" />
         <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.015] mix-blend-overlay" />
      </div>

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        
        {/* LAYER 1 — BRAND + PLATFORM STATEMENT */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 mb-16 pb-12 border-b border-white/[0.04]">
          <Link href="/" className="flex items-center gap-3 group shrink-0 relative">
             <div className="absolute -inset-3 bg-[#E8B84A]/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             <div className="w-7 h-7 bg-gradient-to-br from-[#E8B84A] via-[#D9A63A] to-[#F0C96A] rounded-[8px] flex items-center justify-center shadow-[0_4px_20px_rgba(232,184,74,0.25)] group-hover:scale-105 transition-all duration-500 relative overflow-hidden">
                <div className="w-3 h-3 border-[1.5px] border-black rotate-45 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             </div>
             <span className="font-bold text-white text-[16px] tracking-tight uppercase relative z-10 drop-shadow-sm">OYEN GRID</span>
          </Link>

          <p className="text-[14px] text-white/50 max-w-2xl leading-[1.8] font-medium lg:text-right tracking-wide">
            OYEN GRID is operational infrastructure for structured programme delivery, institutional coordination and intelligent execution at scale.
          </p>
        </div>

        {/* LAYER 2 — ENTERPRISE NAVIGATION GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-12 gap-y-16 mb-20">
          {footerLinks.map((col, i) => (
            <div key={i} className="flex flex-col">
              <h4 className="text-[10px] font-black text-[#E8B84A]/60 uppercase tracking-[0.25em] mb-6">
                {col.title}
              </h4>
              <ul className="space-y-3 lg:space-y-4">
                {col.links.map((link, j) => (
                  <li key={j}>
                     <Link 
                       href="#" 
                       className="text-[13px] text-white/40 hover:text-white transition-all duration-300 font-medium inline-block hover:-translate-y-0.5 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] relative group"
                     >
                       <span className="relative z-10">{link}</span>
                       <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#E8B84A]/40 to-transparent group-hover:w-full transition-all duration-500" />
                     </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* LAYER 3 — INFRASTRUCTURE STATUS STRIP */}
        <div className="pt-8 border-t border-white/[0.03] mb-10 relative group/strip">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E8B84A]/[0.015] to-transparent opacity-0 group-hover/strip:opacity-100 transition-opacity duration-1000 blur-2xl pointer-events-none" />
          
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-y-6 gap-x-4 bg-white/[0.01] border border-white/[0.02] rounded-[20px] py-5 px-8 relative overflow-hidden backdrop-blur-md">
             <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
             
             {statusItems.map((item, i) => (
               <div key={i} className="flex items-center gap-3">
                  <div className="relative flex items-center justify-center">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84A]/80 shadow-[0_0_8px_rgba(232,184,74,0.4)] relative z-10" />
                     <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#E8B84A]/20 animate-ping" />
                  </div>
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.15em]">{item}</span>
                  {i !== statusItems.length - 1 && (
                    <div className="hidden lg:block w-px h-3 bg-white/[0.05] ml-4" />
                  )}
               </div>
             ))}
          </div>
        </div>

        {/* LAYER 4 — BOTTOM INFRASTRUCTURE BAR */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8 pt-8 border-t border-white/[0.03] relative z-10">
          
          {/* Copyright */}
          <div className="text-[11px] font-bold text-white/30 tracking-widest uppercase text-center xl:text-left">
            © 2025 OYEN GRID. All rights reserved.
          </div>

          {/* Operational Metrics */}
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3">
             {metrics.map((metric, i) => (
               <div key={i} className="flex items-center gap-3">
                 <span className="text-[10px] font-black text-white/40 hover:text-[#E8B84A]/80 transition-colors duration-500 uppercase tracking-widest bg-white/[0.02] hover:bg-[#E8B84A]/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.03] hover:border-[#E8B84A]/20 cursor-default">
                   {metric}
                 </span>
               </div>
             ))}
          </div>

          {/* Infrastructure Status */}
          <div className="flex items-center gap-2.5 bg-black/20 px-4 py-2 rounded-full border border-white/[0.02]">
            <div className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_12px_rgba(16,185,129,0.5)] animate-pulse" />
            <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">
              INFRASTRUCTURE STATUS — <span className="text-[#10b981] drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]">OPERATIONAL</span>
            </span>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
