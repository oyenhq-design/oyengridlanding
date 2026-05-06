"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 2. ANNOUNCEMENT BAR */}
      <div className="relative z-50 bg-[#0B0B0C] border-b border-white/5 py-3">
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#F5C044] shadow-[0_0_8px_#F5C044]" />
            <p className="text-[#A1A1AA] text-[11px] font-bold tracking-[0.1em] uppercase">
              PROGRAMME INFRASTRUCTURE FOR SCALE | <span className="text-white">Run complex cohorts with absolute structural integrity.</span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-white text-[10px] font-bold tracking-widest uppercase hover:text-[#F5C044] transition-colors">
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
        className={`sticky top-0 z-40 w-full transition-all duration-500 border-b ${
          scrolled 
            ? "bg-[#0B0B0C]/80 backdrop-blur-xl border-white/10 py-4" 
            : "bg-[#0B0B0C] border-white/5 py-6"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F5C044] to-[#D4A017] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-black font-black text-xl">OG</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight uppercase">OYEN GRID</span>
          </Link>

          {/* Center: Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {["Features", "Solutions", "Resources", "Pricing"].map((item) => (
              <Link 
                key={item} 
                href={`/${item.toLowerCase()}`} 
                className="text-[#A1A1AA] text-[14px] font-medium hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="text-[#A1A1AA] hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/login" className="text-[#A1A1AA] text-[14px] font-medium hover:text-white transition-colors">
              Login
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-2.5 rounded-xl border border-white/10 text-white text-[14px] font-medium hover:bg-white/5 transition-all"
            >
              Contact Sales
            </Link>
            <Link 
              href="/get-started" 
              className="px-6 py-2.5 rounded-xl bg-[#F5C044] text-black text-[14px] font-bold hover:bg-[#D4A017] transition-all shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
