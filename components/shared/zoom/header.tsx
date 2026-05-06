"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, X, ChevronDown } from "lucide-react";

export function ZoomHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* 2. ANNOUNCEMENT BAR */}
      {showAnnouncement && (
        <div className="w-full bg-gradient-to-r from-[#0B5CFF] to-[#6EA8FF] text-white py-3 px-6 relative">
          <div className="max-w-[1200px] mx-auto flex items-center justify-between">
            <p className="text-[14px] md:text-[15px] font-medium leading-tight pr-8">
              AI note-taking across platforms that&apos;s secure, personalized, and under your control.
            </p>
            <div className="flex items-center gap-4 shrink-0">
              <button className="hidden md:block px-4 py-1.5 rounded-full bg-white text-[#0B5CFF] text-[13px] font-bold hover:bg-opacity-90 transition-all">
                Explore My Notes
              </button>
              <button 
                onClick={() => setShowAnnouncement(false)}
                className="hover:bg-white/10 p-1 rounded-full transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 1. NAVBAR */}
      <header 
        className={`w-full transition-all duration-300 border-b border-gray-100 ${
          scrolled ? "bg-white shadow-md py-3" : "bg-white py-5"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-[#0B5CFF] flex items-center justify-center text-white font-black text-xl">
              Z
            </div>
            <span className="text-[#0B5CFF] font-bold text-2xl tracking-tighter">zoom</span>
          </Link>

          {/* Center: Nav links */}
          <nav className="hidden lg:flex items-center gap-8">
            {["Products", "AI", "Solutions", "Pricing"].map((item) => (
              <button key={item} className="flex items-center gap-1 text-[#232333] text-[15px] font-semibold hover:text-[#0B5CFF] transition-colors">
                {item} <ChevronDown className="w-4 h-4 opacity-50" />
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-[#232333] hover:bg-gray-50 rounded-full transition-all">
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden sm:block px-6 py-2.5 rounded-full border border-[#0B5CFF] text-[#0B5CFF] text-[15px] font-bold hover:bg-[#0B5CFF]/5 transition-all">
              Contact Sales
            </button>
            <button className="px-6 py-2.5 rounded-full bg-[#0B5CFF] text-white text-[15px] font-bold hover:bg-[#0B4CD9] transition-all shadow-lg shadow-[#0B5CFF]/20">
              Sign Up Free
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
