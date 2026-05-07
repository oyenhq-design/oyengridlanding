"use client";

import { motion } from "framer-motion";
import { Globe, ShieldCheck, Cpu, Share2, Users } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-navy-deep pt-32 pb-12 border-t border-white/5 overflow-hidden">
      {/* Subtle Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-accent-gold flex items-center justify-center">
                <div className="w-4 h-4 bg-navy-deep rounded-sm rotate-45" />
              </div>
              <span className="text-white font-bold text-[22px] tracking-tight">OYEN GRID</span>
            </div>
            <p className="text-white/30 text-[15px] leading-relaxed max-w-sm mb-10">
              The mission-critical infrastructure for global programme delivery. 
              Engineering structural integrity for the world's most complex operational networks.
            </p>
            <div className="flex items-center gap-6">
              {[Globe, Share2, Users].map((Icon, i) => (
                <a key={i} href="#" className="text-white/20 hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* NAV COLUMNS */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
            {[
              { title: "Infrastructure", links: ["Architecture", "Deployment", "Security", "Scale"] },
              { title: "Governance", links: ["Compliance", "Audit Logs", "SLA", "Privacy"] },
              { title: "Institutional", links: ["About", "Careers", "Newsroom", "Contact"] }
            ].map((col, i) => (
              <div key={i}>
                <div className="text-white font-bold text-[13px] uppercase tracking-[0.2em] mb-8">{col.title}</div>
                <ul className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-white/30 hover:text-white text-[14px] transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* TRUST & STATUS BAR */}
        <div className="py-10 border-y border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
           <div className="flex items-center gap-8">
              <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5">
                 <div className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse" />
                 <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">All Nodes Operational</span>
              </div>
              <div className="flex items-center gap-2 opacity-30">
                 <ShieldCheck className="w-4 h-4 text-white" />
                 <span className="text-[10px] font-black uppercase tracking-[0.2em]">SOC2 Type II Certified</span>
              </div>
           </div>
           <div className="flex items-center gap-8">
              {[
                { label: "Latency", val: "14ms" },
                { label: "Global Nodes", val: "4,284" },
                { label: "Success Rate", val: "99.9%" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                   <div className="text-white/10 text-[9px] font-black uppercase tracking-widest">{item.label}</div>
                   <div className="text-white/40 text-[11px] font-bold tracking-tight">{item.val}</div>
                </div>
              ))}
           </div>
        </div>

        {/* BOTTOM METADATA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white/10 text-[11px] tracking-widest font-black uppercase">
            &copy; 2026 OYEN GRID INSTITUTIONAL INFRASTRUCTURE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-white/10 hover:text-white text-[11px] font-black uppercase tracking-widest transition-colors">Legal</a>
            <a href="#" className="text-white/10 hover:text-white text-[11px] font-black uppercase tracking-widest transition-colors">Security</a>
            <a href="#" className="text-white/10 hover:text-white text-[11px] font-black uppercase tracking-widest transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
