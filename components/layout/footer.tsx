"use client";

import Link from "next/link";
import { Shield, CheckCircle2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="pt-24 pb-12 border-t border-white/5 bg-[#040816]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-8 mb-20">
          
          {/* LOGO & DESC */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex flex-col leading-none mb-8 group">
              <span className="font-bold text-[20px] tracking-tight text-white uppercase">OYEN GRID</span>
              <span className="text-[8px] font-black text-accent-gold/60 uppercase tracking-[0.4em] mt-0.5">INFRASTRUCTURE</span>
            </Link>
            <p className="text-[14px] leading-relaxed max-w-xs text-white/30">
              The foundational infrastructure for enterprise-scale programme orchestration and operational intelligence.
            </p>
          </div>

          {/* COLUMNS */}
          {[
            {
              title: "Platform",
              links: ["Features", "Infrastructure", "Governance", "Security", "Analytics"]
            },
            {
              title: "Solutions",
              links: ["Enterprise Training", "Global Operations", "Command Centers", "Government", "Scale"]
            },
            {
              title: "Resources",
              links: ["Documentation", "Case Studies", "Playbooks", "System Status", "Support"]
            }
          ].map((col, i) => (
            <div key={i}>
              <h4 className="text-white font-bold text-[13px] uppercase tracking-[0.2em] mb-8">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-[14px] text-white/30 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM STRIP */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            <span className="text-white/20 text-[11px] font-bold">© 2026 OYEN GRID</span>
            <div className="flex items-center gap-3">
              <Shield className="w-3.5 h-3.5 text-accent-gold/20" />
              <span className="text-white/20 text-[11px] font-bold uppercase tracking-widest">Infrastructure Layer</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/40" />
              <span className="text-white/20 text-[11px] font-bold uppercase tracking-widest">System Operational</span>
            </div>
            <Link href="#" className="text-white/20 hover:text-white text-[11px] font-bold transition-colors">Privacy</Link>
            <Link href="#" className="text-white/20 hover:text-white text-[11px] font-bold transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
