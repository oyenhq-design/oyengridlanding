"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* 2. ANNOUNCEMENT BAR */}
      <div className="bg-black border-b border-white/5 py-2.5">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#F5B942] animate-pulse" />
            <span className="text-[11px] font-bold tracking-[0.15em] text-[#F5B942] uppercase">
              PROGRAMME INFRASTRUCTURE FOR SCALE
            </span>
          </div>
          <Link href="/platform" className="text-[10px] font-bold text-white/60 hover:text-[#F5B942] transition-colors flex items-center gap-1.5 group">
            EXPLORE PLATFORM <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
        </div>
      </div>

      {/* 1. NAVBAR */}
      <nav className={`transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#F5B942] to-[#D4A017] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-black font-black text-lg">OG</span>
            </div>
            <span className="text-white font-bold text-lg tracking-tighter uppercase">OYEN GRID</span>
          </Link>

          {/* Center: Links */}
          <div className="hidden lg:flex items-center gap-8">
            {["Features", "Solutions", "Resources", "Pricing"].map((link) => (
              <Link 
                key={link} 
                href={`/${link.toLowerCase()}`} 
                className="text-sm font-medium text-white/70 hover:text-white transition-colors flex items-center gap-1 group"
              >
                {link}
                {link !== "Pricing" && <ChevronDown className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />}
              </Link>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-6">
            <button className="text-white/60 hover:text-white transition-colors">
              <Search className="w-4.5 h-4.5" />
            </button>
            <Link href="/login" className="hidden sm:block text-sm font-bold text-white/70 hover:text-white transition-colors">
              Login
            </Link>
            <div className="flex items-center gap-3">
              <Link 
                href="/contact" 
                className="hidden md:block px-5 py-2.5 rounded-lg border border-white/10 text-xs font-bold text-white hover:bg-white/5 transition-all"
              >
                Contact Sales
              </Link>
              <Link 
                href="/get-started" 
                className="px-5 py-2.5 rounded-lg bg-[#F5B942] text-black text-xs font-bold hover:bg-[#D4A017] transition-all shadow-lg shadow-[#F5B942]/10"
              >
                Get Started
              </Link>
            </div>
          </div>

        </div>
      </nav>
    </header>
  );
}
