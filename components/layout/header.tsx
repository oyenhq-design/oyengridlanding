"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ChevronDown, Grid, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Products", hasDropdown: true },
    { label: "AI", hasDropdown: false, hasIcon: true },
    { label: "Solutions", hasDropdown: true },
    { label: "Pricing", hasDropdown: false }
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
      scrolled 
        ? "bg-[#061336] h-[72px] border-b border-white/5 shadow-xl" 
        : "bg-[#061336] h-[72px] border-b border-white/5"
    )}>
      {/* Subtle Vertical Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#071B4D] to-[#05112E] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-6 relative z-10">
        
        {/* LEFT SECTION: Logo + Brand Area */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3 w-[160px]">
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
               <div className="w-4 h-4 border-2 border-[#061336] rotate-45" />
            </div>
            <span className="font-bold text-white text-[18px] tracking-tight">OYEN GRID</span>
          </Link>

          {/* CENTER NAVIGATION: Exact Zoom-style density */}
          <nav className="hidden lg:flex items-center gap-[32px] ml-4">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href="#" 
                className="text-[14px] font-medium text-white/90 hover:text-white transition-all flex items-center gap-1 group tracking-tight"
              >
                {item.hasIcon && <Sparkles className="w-3.5 h-3.5 text-blue-400 fill-blue-400/20" />}
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* RIGHT SECTION: Utility Suite */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-5 pr-6 border-r border-white/10">
             <button className="text-white/70 hover:text-white transition-all">
                <Search className="w-[18px] h-[18px]" />
             </button>
             <Link href="#" className="text-[14px] font-medium text-white/90 flex items-center gap-1 hover:text-white group">
                Meet <ChevronDown className="w-3 h-3 opacity-40 group-hover:opacity-100" />
             </Link>
             <Link href="#" className="text-[14px] font-medium text-white/80 hover:text-white">Sign In</Link>
             <Link href="#" className="text-[14px] font-medium text-white/80 hover:text-white">Support</Link>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="h-[40px] px-5 rounded-xl bg-white text-[#061336] text-[14px] font-bold transition-all hover:brightness-110 hover:-translate-y-0.5 shadow-md">
              Contact Sales
            </button>
            <button className="h-[40px] px-5 rounded-xl bg-[#0B5CFF] text-white text-[14px] font-bold transition-all hover:shadow-[0_0_15px_rgba(11,92,255,0.4)] hover:saturate-150 hover:-translate-y-0.5">
              Sign Up Free
            </button>
            <button className="p-2 text-white/60 hover:text-white">
               <Grid className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export function AnnouncementBar() {
  return (
    <div className="pt-[82px] px-[12px] flex justify-center relative z-[60]">
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-[48px] bg-[#1A275A] rounded-[14px] px-6 flex items-center justify-between w-full relative overflow-hidden"
      >
        <div className="flex items-center gap-8 mx-auto">
          <span className="text-[15px] text-white/90 font-medium tracking-tight">
            AI note-taking across platforms that's secure, personalized, and under your control.
          </span>
          
          <button className="h-[34px] px-5 rounded-lg bg-gradient-to-r from-[#4A6CFF] to-[#D946EF] text-white text-[13px] font-bold transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(217,70,239,0.4)]">
            Explore My Notes
          </button>
        </div>

        <button className="text-white/40 hover:text-white transition-colors">
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    </div>
  );
}
