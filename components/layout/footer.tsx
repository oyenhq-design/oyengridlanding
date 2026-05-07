"use client";

import Link from "next/link";
import { Globe, Shield, Activity } from "lucide-react";

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
    <footer className="bg-[#050816] py-20 relative overflow-hidden border-t border-white/5">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 mb-20">
          
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(212,166,42,0.1)] transition-shadow group-hover:shadow-[0_0_30px_rgba(212,166,42,0.2)]">
                <span className="font-black text-black text-[11px]">OG</span>
              </div>
              <span className="font-bold text-base tracking-widest text-white uppercase">OYEN GRID</span>
            </Link>
            <p className="text-white/30 text-[14px] leading-relaxed font-light max-w-xs mb-10">
              The high-fidelity operating system for global programme delivery. Engineered for structural integrity and absolute administrative control.
            </p>
            <div className="flex items-center gap-6">
              {[Globe, Shield, Activity].map((Icon, i) => (
                <Link key={i} href="#" className="text-white/20 hover:text-accent transition-all duration-300 transform hover:-translate-y-1">
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
          
          {columns.map((col) => (
            <div key={col.title} className="lg:col-span-1">
              <h5 className="text-white/60 font-bold text-[10px] uppercase tracking-[0.3em] mb-8">{col.title}</h5>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-white/20 text-[13px] hover:text-white transition-colors font-light flex items-center group">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-10">
            <p className="text-white/10 text-[10px] font-bold uppercase tracking-[0.3em]">© 2026 OYEN GRID INFRASTRUCTURE.</p>
            <div className="hidden md:flex items-center gap-6">
               <span className="text-white/10 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                 <div className="w-1 h-1 rounded-full bg-green-500/30" />
                 Systems Operational
               </span>
               <span className="text-white/10 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                 <Shield className="w-3 h-3" />
                 Institutional Grade
               </span>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-white/10 text-[10px] font-black uppercase tracking-[0.3em]">Built for Scale</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
