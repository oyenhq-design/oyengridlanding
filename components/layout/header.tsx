"use client";

import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/40 backdrop-blur-2xl border-b border-white/[0.05]">
      <div className="container-custom h-[80px] flex items-center justify-between">
        {/* Logo: Precision Iconography */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-accent-gold rounded-lg flex items-center justify-center font-bold text-navy-deep text-lg shadow-[0_0_20px_rgba(200,155,45,0.3)]">O</div>
          <span className="font-bold text-white tracking-tighter text-xl">OYEN GRID</span>
        </Link>

        {/* Navigation: Institutional Links */}
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/features" className="text-[14px] font-medium text-white/50 hover:text-white transition-colors flex items-center gap-1.5 group">
            Features <ChevronDown className="w-4 h-4 opacity-30 group-hover:opacity-100 transition-opacity" />
          </Link>
          <Link href="/solutions" className="text-[14px] font-medium text-white/50 hover:text-white transition-colors flex items-center gap-1.5 group">
            Solutions <ChevronDown className="w-4 h-4 opacity-30 group-hover:opacity-100 transition-opacity" />
          </Link>
          <Link href="/resources" className="text-[14px] font-medium text-white/50 hover:text-white transition-colors flex items-center gap-1.5 group">
            Resources <ChevronDown className="w-4 h-4 opacity-30 group-hover:opacity-100 transition-opacity" />
          </Link>
          <Link href="/pricing" className="text-[14px] font-medium text-white/50 hover:text-white transition-colors">
            Pricing
          </Link>
        </nav>

        {/* Right Actions: System Access */}
        <div className="flex items-center gap-8">
          <button className="text-white/30 hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <Link href="/login" className="text-[14px] font-medium text-white/50 hover:text-white transition-colors">
            Login
          </Link>
          <button className="hidden lg:flex btn-outline h-10 px-6 text-[13px] tracking-wide">
            Contact Sales
          </button>
          <button className="btn-gold h-10 px-6 text-[13px] font-black tracking-widest uppercase">
            Initialize
          </button>
        </div>
      </div>
    </header>
  );
}

export function AnnouncementBar() {
  return (
    <div className="pt-[110px] flex justify-center px-4">
      <div className="bg-white/[0.02] border border-white/[0.05] rounded-full px-6 py-2 flex items-center gap-4 backdrop-blur-xl shadow-2xl">
        <div className="w-2 h-2 rounded-full bg-accent-gold shadow-[0_0_10px_rgba(200,155,45,0.6)]" />
        <span className="text-[10px] font-black text-accent-gold tracking-[0.3em] uppercase">Structural Infrastructure v.04</span>
        <span className="h-4 w-px bg-white/10" />
        <span className="text-[12px] text-white/50 font-light">Orchestrate complex delivery nodes at global scale.</span>
        <Link href="/explore" className="text-[11px] font-bold text-white hover:text-accent-gold transition-colors flex items-center gap-2 ml-4 group">
          EXPLORE <span className="text-accent-gold group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
