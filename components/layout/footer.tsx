"use client";

import Link from "next/link";
import { Mail, Globe, Shield, Info, ArrowRight } from "lucide-react";

export function Footer() {
  const columns = [
    { 
      title: "Platform", 
      links: [
        { name: "Curriculum Architect", href: "#" },
        { name: "Operational Insights", href: "#" },
        { name: "Enterprise Security", href: "#" },
        { name: "Data Governance", href: "#" }
      ] 
    },
    { 
      title: "Solutions", 
      links: [
        { name: "Corporate Training", href: "#" },
        { name: "Global Programmes", href: "#" },
        { name: "Employee Onboarding", href: "#" },
        { name: "Leadership Sync", href: "#" }
      ] 
    },
    { 
      title: "Resources", 
      links: [
        { name: "Intelligence Hub", href: "#" },
        { name: "API Documentation", href: "#" },
        { name: "Success Stories", href: "#" },
        { name: "Operational Blog", href: "#" }
      ] 
    },
    { 
      title: "Legal", 
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Settings", href: "#" },
        { name: "Compliance", href: "#" }
      ] 
    }
  ];

  return (
    <footer className="bg-[#050816] py-24 relative overflow-hidden">
      <div className="container-custom max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
          
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(212,166,42,0.2)]">
                <span className="font-black text-black text-xs">OG</span>
              </div>
              <span className="font-bold text-lg tracking-tight text-white uppercase">OYEN GRID</span>
            </Link>
            <p className="text-white/30 text-[14px] leading-relaxed font-light max-w-xs mb-8">
              The operating system for high-performance programme delivery. Built for global governance and absolute control.
            </p>
          </div>
          
          {columns.map((col) => (
            <div key={col.title} className="lg:col-span-1">
              <h5 className="text-white/50 font-bold text-[11px] uppercase tracking-[0.2em] mb-8">{col.title}</h5>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-white/20 text-[13px] hover:text-accent transition-colors font-light flex items-center group">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-white/10 text-[10px] font-bold uppercase tracking-[0.2em]">© 2026 OYEN GRID.</p>
            <div className="flex gap-6">
               <span className="text-white/10 text-[10px] font-medium tracking-wide flex items-center gap-2">
                 <div className="w-1 h-1 rounded-full bg-green-500/40" />
                 Systems Operational
               </span>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-white/10 text-[10px] hover:text-white transition-colors uppercase tracking-[0.2em]">Twitter</Link>
            <Link href="#" className="text-white/10 text-[10px] hover:text-white transition-colors uppercase tracking-[0.2em]">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
