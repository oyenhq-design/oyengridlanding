"use client";

import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/[0.05]">
      <div className="container-custom h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-accent-gold rounded-md flex items-center justify-center font-bold text-navy-deep text-base">O</div>
          <span className="font-bold text-white tracking-tight text-lg">OYEN GRID</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-[13px] font-medium text-white/60 hover:text-white transition-colors flex items-center gap-1">
            Features <ChevronDown className="w-3.5 h-3.5 opacity-50" />
          </Link>
          <Link href="/solutions" className="text-[13px] font-medium text-white/60 hover:text-white transition-colors flex items-center gap-1">
            Solutions <ChevronDown className="w-3.5 h-3.5 opacity-50" />
          </Link>
          <Link href="/resources" className="text-[13px] font-medium text-white/60 hover:text-white transition-colors flex items-center gap-1">
            Resources <ChevronDown className="w-3.5 h-3.5 opacity-50" />
          </Link>
          <Link href="/pricing" className="text-[13px] font-medium text-white/60 hover:text-white transition-colors">
            Pricing
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <button className="text-white/40 hover:text-white transition-colors">
            <Search className="w-4 h-4" />
          </button>
          <Link href="/login" className="text-[13px] font-medium text-white/60 hover:text-white transition-colors">
            Login
          </Link>
          <button className="hidden lg:flex btn-outline h-9 px-4 text-[12px]">
            Contact Sales
          </button>
          <button className="btn-gold h-9 px-4 text-[12px]">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

export function AnnouncementBar() {
  return (
    <div className="pt-[100px] flex justify-center px-4">
      <div className="bg-white/[0.03] border border-white/5 rounded-full px-4 py-1.5 flex items-center gap-3 backdrop-blur-md">
        <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
        <span className="text-[10px] font-black text-accent-gold tracking-[0.2em] uppercase">Programme Infrastructure for Scale</span>
        <span className="h-3 w-px bg-white/10" />
        <span className="text-[11px] text-white/60">Run complex learning operations with absolute structural integrity.</span>
        <Link href="/explore" className="text-[11px] font-semibold text-white hover:text-accent-gold transition-colors flex items-center gap-1 ml-2 group">
          Explore <span className="text-accent-gold group-hover:translate-x-0.5 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
