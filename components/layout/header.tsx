"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ChevronDown, Grid, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useSearch } from "@/context/search-context";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { openSearch } = useSearch();

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
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
      scrolled 
        ? "bg-[rgba(4,6,12,0.72)] backdrop-blur-[18px] h-[82px] border-b border-white/5 shadow-2xl" 
        : "bg-transparent h-[100px]"
    )}>

      {/* Cinematic Gradient Background */}
      <div className={cn(
        "absolute inset-0 z-0 transition-opacity duration-500",
        scrolled ? "opacity-100" : "opacity-0"
      )}>
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,15,25,0.96)] to-[rgba(5,7,11,0.92)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,185,66,0.03),transparent_50%)]" />
      </div>

      <div className="max-w-[1400px] mx-auto h-full flex items-center justify-between px-8 relative z-10">
        
        {/* LEFT SECTION */}
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-gold rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(245,185,66,0.2)]">
               <div className="w-3.5 h-3.5 border-2 border-black rotate-45" />
            </div>
            <span className="font-bold text-white text-[19px] tracking-tight">OYEN GRID</span>
          </Link>

          {/* CENTER NAVIGATION: Exact Zoom-style density but Premium Dark */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href="#" 
                className="text-[15px] font-medium text-white/90 hover:text-brand-gold transition-all flex items-center gap-2 group tracking-tight"
              >
                {item.hasIcon && <Sparkles className="w-3.5 h-3.5 text-brand-gold fill-brand-gold/20" />}
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="w-3 h-3 text-white/30 group-hover:text-brand-gold transition-colors" />
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-5 pr-6 border-r border-white/5">
             <button 
               onClick={openSearch}
               className="text-white/40 hover:text-brand-gold transition-all"
             >
                <Search className="w-[19px] h-[19px]" />
             </button>
             <Link href="#" className="text-[15px] font-medium text-white/90 flex items-center gap-2 hover:text-brand-gold group">
                Meet <ChevronDown className="w-3.5 h-3.5 text-white/30 group-hover:text-brand-gold" />
             </Link>
             <Link href="#" className="text-[15px] font-medium text-white/70 hover:text-white transition-colors">Sign In</Link>
             <Link href="#" className="text-[15px] font-medium text-white/70 hover:text-white transition-colors">Support</Link>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="h-[50px] px-7 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white text-[15px] font-bold transition-all hover:bg-white/[0.08] hover:border-brand-gold/30 hover:text-brand-gold">
              Contact Sales
            </button>
            <button className="h-[44px] px-6 rounded-lg bg-brand-gold text-brand-dark text-[14px] font-black transition-all hover:shadow-[0_0_20px_rgba(245,185,66,0.4)] hover:scale-[1.02]">
              Sign Up Free
            </button>
            <button className="p-2 text-white/30 hover:text-brand-gold transition-colors">
               <Grid className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="pt-[88px] px-4 md:px-10 flex justify-center relative z-[60]">
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-[48px] bg-[#0E1424] border border-white/[0.06] rounded-[14px] px-5 flex items-center justify-between w-full max-w-[1280px] shadow-2xl"
      >
        <div className="flex items-center gap-6 mx-auto">
          <span className="text-[14px] text-white/70 font-medium tracking-tight">
            AI note-taking across platforms that's secure, personalized, and under your control.
          </span>
          
          <button className="h-[32px] px-5 rounded-lg bg-gradient-to-r from-[#F5B942] to-[#D89B2B] text-black text-[12px] font-black transition-all hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(245,185,66,0.3)]">
            Explore My Notes
          </button>
        </div>

        <button 
          onClick={() => setIsVisible(false)}
          className="text-white/20 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    </div>
  );
}
