"use client";

import Link from "next/link";
import { LayoutGrid, ArrowUpRight, CheckCircle2, Send, Globe, Activity, Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050812] border-t border-white/5 pt-32 pb-16 relative overflow-hidden">
      {/* Top Border Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          
          {/* Brand & Summary */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center group-hover:scale-105 transition-all">
                <LayoutGrid className="w-5.5 h-5.5 text-black" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-[20px] tracking-tight text-white uppercase mb-0.5">OYEN GRID</span>
                <span className="text-[9px] font-black text-accent/40 uppercase tracking-[0.3em]">INFRASTRUCTURE</span>
              </div>
            </Link>
            <p className="text-[15px] text-white/30 leading-relaxed max-w-sm font-light">
              High-fidelity operational infrastructure for managing large-scale programmes, cohorts, and institutional delivery systems globally.
            </p>
            <div className="flex items-center gap-4">
               <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">All Systems Operational</span>
               </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-[11px] font-black text-white uppercase tracking-[0.3em]">Infrastructure</h4>
              <ul className="space-y-4">
                {["Curriculum Architect", "Precision Delivery", "Operational Insights", "AI Infrastructure", "Governance"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[14px] text-white/30 hover:text-white transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[11px] font-black text-white uppercase tracking-[0.3em]">Company</h4>
              <ul className="space-y-4">
                {["About", "Security", "Privacy", "Terms", "Documentation"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[14px] text-white/30 hover:text-white transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="lg:col-span-4 space-y-10">
             <div className="space-y-6">
                <h4 className="text-[11px] font-black text-white uppercase tracking-[0.3em]">Join the ecosystem</h4>
                <p className="text-[13px] text-white/30 font-light">Get operational insights and platform updates directly.</p>
                <div className="flex gap-2">
                   <input 
                     type="email" 
                     placeholder="Email address" 
                     className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-[14px] text-white focus:outline-none focus:border-accent/40 transition-all flex-1"
                   />
                   <button className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-black hover:scale-105 transition-all">
                      <Send className="w-5 h-5" />
                   </button>
                </div>
             </div>
             <div className="flex items-center gap-6">
                {[Globe, Activity, Shield].map((Icon, i) => (
                  <Link key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-accent/40 transition-all">
                    <Icon className="w-5 h-5" />
                  </Link>
                ))}
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:row items-center justify-between gap-8">
          <div className="text-[12px] text-white/20 font-medium tracking-tight">
            © 2026 OYEN GRID Infrastructure. All rights reserved.
          </div>
          <div className="flex items-center gap-10">
             <div className="flex items-center gap-2 text-[11px] font-black text-white/10 uppercase tracking-[0.2em]">
                Built for <span className="text-white/20">Institutional Scale</span>
             </div>
             <button className="flex items-center gap-2 text-[12px] font-bold text-accent hover:underline">
                Strategic Support <ArrowUpRight className="w-3.5 h-3.5" />
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
