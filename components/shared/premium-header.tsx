"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, X, Menu } from "lucide-react";

export function PremiumHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100]">
      {/* 2. ANNOUNCEMENT BAR */}
      <div className="w-full bg-gradient-to-r from-[#0B0B0C] via-[#F5B800]/20 to-[#0B0B0C] border-b border-[#F5B800]/10 py-2.5 relative backdrop-blur-md">
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#F5B800] shadow-[0_0_8px_#F5B800]" />
            <p className="text-[#A1A1AA] text-[11px] font-bold tracking-[0.1em] uppercase">
              Run structured programmes with full <span className="text-white">operational clarity and control.</span>
            </p>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            <button className="text-white text-[10px] font-black tracking-widest uppercase hover:text-[#F5B800] transition-colors">
              EXPLORE PLATFORM
            </button>
            <button className="text-[#3F3F46] hover:text-white transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 1. NAVBAR */}
      <header 
        className={`w-full transition-all duration-500 border-b ${
          scrolled 
            ? "bg-[#0A0A0A]/80 backdrop-blur-xl border-[#F5B800]/20 py-3" 
            : "bg-[#0A0A0A]/40 backdrop-blur-md border-white/5 py-5"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F5B800] to-[#B88A00] flex items-center justify-center shadow-[0_0_20px_rgba(245,184,0,0.3)] group-hover:scale-105 transition-transform">
                <span className="text-black font-black text-lg">OG</span>
              </div>
              <span className="text-white font-black text-xl tracking-tighter uppercase group-hover:text-[#F5B800] transition-colors">OYEN GRID</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-10">
              {["Features", "Solutions", "Resources", "Pricing"].map((item) => (
                <Link 
                  key={item} 
                  href="#" 
                  className="text-[#A1A1AA] text-[14px] font-bold tracking-wide uppercase hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-6">
              <button className="text-[#A1A1AA] hover:text-[#F5B800] transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <Link href="/login" className="text-white text-[14px] font-bold hover:text-[#F5B800] transition-colors">
                Login
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                href="/contact" 
                className="hidden md:block px-6 py-2.5 rounded-full border border-white/10 text-white text-[13px] font-bold uppercase tracking-widest hover:bg-white/5 transition-all"
              >
                Contact Sales
              </Link>
              <Link 
                href="/get-started" 
                className="px-6 py-2.5 rounded-full bg-[#F5B800] text-black text-[13px] font-black uppercase tracking-widest hover:bg-[#D4A000] transition-all shadow-[0_10px_20px_rgba(245,184,0,0.2)]"
              >
                Get Started
              </Link>
            </div>
            <button className="lg:hidden text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
