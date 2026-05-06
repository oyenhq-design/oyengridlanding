"use client";

import Link from "next/link";
import { Mail, Globe, Shield, Info } from "lucide-react";

export function Footer() {
  const columns = [
    {
      title: "Platform",
      links: ["Features", "Analytics", "Governance", "Security", "Infrastructure"],
    },
    {
      title: "Solutions",
      links: ["Training Programs", "Corporate Onboarding", "NGO Operations", "Government", "Scale-ups"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "News", "Partner Program", "Contact"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR", "Compliance"],
    },
  ];

  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-24">
          
          {/* Logo Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F5B942] to-[#D4A017] flex items-center justify-center shadow-lg">
                <span className="text-black font-black text-xl">OG</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tighter uppercase">OYEN GRID</span>
            </Link>
            <p className="text-[#71717A] text-[15px] leading-relaxed max-w-sm mb-10 font-light">
              The operating system for large-scale, high-fidelity programme delivery. Built for governance, scale, and absolute structural control.
            </p>
            <div className="flex items-center gap-5">
              {[Mail, Globe, Shield].map((Icon, i) => (
                <Link key={i} href="#" className="text-[#3F3F46] hover:text-[#F5B942] transition-colors">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h5 className="text-white font-bold text-[13px] uppercase tracking-[0.2em] mb-8">{col.title}</h5>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-[#71717A] text-[14px] hover:text-white transition-colors font-light">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            <p className="text-[#3F3F46] text-[12px] font-medium tracking-wide">
              © 2024 OYEN GRID. ALL RIGHTS RESERVED.
            </p>
            <div className="hidden md:flex items-center gap-6">
              <Link href="#" className="text-[#3F3F46] hover:text-white text-[12px] transition-colors">STATUS</Link>
              <Link href="#" className="text-[#3F3F46] hover:text-white text-[12px] transition-colors">SITEMAP</Link>
            </div>
          </div>
          
          <button className="flex items-center gap-2.5 px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-[#71717A] text-[12px] hover:text-white transition-all group">
            <Globe className="w-4 h-4 group-hover:text-[#F5B942] transition-colors" />
            <span>GLOBAL - ENGLISH</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
