"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, X, ChevronRight, Menu } from "lucide-react";

export function ZoomHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100]">
      {/* 1. NAVBAR */}
      <header className={`w-full transition-all duration-300 border-b ${
        scrolled ? "bg-white shadow-md py-3" : "bg-white py-5"
      }`}>
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#0B5CFF] flex items-center justify-center">
                <span className="text-white font-black text-lg">Z</span>
              </div>
              <span className="text-[#0B5CFF] font-black text-2xl tracking-tighter">zoom</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {["Products", "AI", "Solutions", "Resources", "Pricing"].map((item) => (
                <Link key={item} href="#" className="text-[#666] text-[15px] font-medium hover:text-[#0B5CFF] transition-colors">
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <button className="text-[#666] hover:text-[#0B5CFF] transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <div className="hidden md:flex items-center gap-4">
              <Link href="#" className="px-5 py-2.5 rounded-full border border-[#0B5CFF] text-[#0B5CFF] text-[15px] font-bold hover:bg-[#0B5CFF]/5 transition-all">
                Contact Sales
              </Link>
              <Link href="#" className="px-5 py-2.5 rounded-full bg-[#0B5CFF] text-white text-[15px] font-bold hover:bg-[#0048D9] transition-all shadow-lg shadow-blue-500/20">
                Sign Up Free
              </Link>
            </div>
            <button className="lg:hidden text-[#666]">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* 2. ANNOUNCEMENT BAR */}
      <div className="w-full bg-gradient-to-r from-[#0B5CFF] to-[#6EA8FF] py-3.5 relative">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <p className="text-white text-[14px] md:text-[15px] font-medium leading-tight">
            AI note-taking across platforms that&apos;s secure, personalized, and under your control.
          </p>
          <div className="flex items-center gap-6 shrink-0">
            <button className="hidden sm:block px-4 py-1.5 rounded-full bg-white text-[#0B5CFF] text-[13px] font-bold hover:bg-white/90 transition-all">
              Explore My Notes
            </button>
            <button className="text-white/80 hover:text-white transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
