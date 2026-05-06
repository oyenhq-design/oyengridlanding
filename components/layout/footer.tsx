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
    <footer className="bg-[#050812] border-t border-white/5 py-32 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 mb-24">
          
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(245,179,1,0.3)]">
                <span className="font-black text-black">OG</span>
              </div>
              <span className="font-bold text-xl tracking-tighter text-white uppercase">OYEN GRID</span>
            </Link>
            <p className="text-[#A1A1AA] text-[15px] leading-relaxed font-light max-w-sm mb-10">
              The operating system for high-performance programme delivery. Built for global governance, massive scale, and absolute structural control.
            </p>
            <div className="flex items-center gap-5">
              {[Mail, Globe, Shield].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent transition-all bg-white/5">
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
          
          {columns.map((col) => (
            <div key={col.title} className="lg:col-span-1">
              <h5 className="text-white font-bold text-[13px] uppercase tracking-[0.2em] mb-10">{col.title}</h5>
              <ul className="space-y-5">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[#71717A] text-[14px] hover:text-accent transition-colors font-light flex items-center group">
                      {link.name}
                      <ArrowRight className="w-3 h-3 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-[#3F3F46] text-[12px] font-bold uppercase tracking-[0.2em]">© 2026 OYEN GRID. ALL RIGHTS RESERVED.</p>
            <div className="h-4 w-px bg-white/5 hidden md:block" />
            <div className="flex gap-8">
               <span className="text-[#3F3F46] text-[11px] font-medium tracking-wide flex items-center gap-2">
                 <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                 Systems Operational
               </span>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-[#3F3F46] text-[12px] hover:text-white transition-colors uppercase tracking-widest">Twitter</Link>
            <Link href="#" className="text-[#3F3F46] text-[12px] hover:text-white transition-colors uppercase tracking-widest">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
