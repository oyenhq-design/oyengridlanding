"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navItems = ["Platform", "Solutions", "Resources", "Pricing"];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
      scrolled 
        ? "bg-[#050505]/95 backdrop-blur-xl h-[72px] border-b border-white/5 shadow-2xl" 
        : "bg-transparent h-[72px] border-transparent"
    )}>
      {/* Background Glow Layer */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none opacity-50" />

      <div className="container-custom h-full flex items-center justify-between relative z-10">
        
        {/* LOGO AREA: Gold geometric icon + precise typography */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-[30px] h-[30px] bg-accent-gold rounded-md flex items-center justify-center transition-transform duration-500 group-hover:rotate-[15deg]">
               <div className="w-4 h-4 border-2 border-black rotate-45" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white tracking-[-0.03em] text-[16px] leading-[1.1] uppercase">OYEN GRID</span>
              <span className="text-[8px] font-black text-[#D4A63A]/60 uppercase tracking-[0.25em] leading-none mt-1">STRUCTURED PROGRAMME OS</span>
            </div>
          </Link>
        </div>

        {/* NAVIGATION: Exact Zoom-style spacing and typography */}
        <nav className="hidden lg:flex items-center gap-[40px] h-full ml-10">
          {navItems.map((item) => (
            <Link 
              key={item} 
              href="#" 
              className="text-[14px] font-medium text-white/82 hover:text-white transition-all flex items-center gap-1 group"
            >
              {item}
              {item !== "Pricing" && (
                <ChevronDown className="w-3.5 h-3.5 opacity-30 group-hover:opacity-100 transition-opacity" />
              )}
            </Link>
          ))}
        </nav>

        {/* UTILITY ACTIONS & CTA BUTTONS */}
        <div className="flex items-center gap-6">
          {/* Circular Search Button */}
          <button className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all group">
            <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </button>
          
          <div className="flex items-center gap-2">
            <Link href="/login" className="text-[14px] font-medium text-white/82 hover:text-white transition-colors px-4">
              Login
            </Link>
            <button className="h-[42px] px-6 rounded-[14px] border border-white/12 bg-white/[0.02] text-[14px] font-bold text-white hover:bg-white/5 transition-all">
              Talk to Sales
            </button>
            <button className="h-[42px] px-6 rounded-[14px] bg-gradient-to-b from-[#E0B84F] to-[#D4A63A] text-black text-[14px] font-bold transition-all hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(212,166,58,0.4)]">
              Start Building
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export function AnnouncementBar() {
  return (
    <div className="pt-[116px] flex justify-center px-4 relative z-50">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-[44px] bg-[#0A1024]/40 border border-white/5 rounded-full px-8 flex items-center justify-between gap-12 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-full max-w-[920px] relative overflow-hidden"
      >
        {/* Subtle Inner Glow */}
        <div className="absolute inset-0 bg-blue-500/5 pointer-events-none" />
        
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-2 h-2 rounded-full bg-accent-gold shadow-[0_0_12px_#D4A63A] animate-pulse" />
          <span className="text-[13px] text-white/80 font-light tracking-wide">
            Infrastructure synchronization active across institutional delivery nodes.
          </span>
        </div>

        <div className="flex items-center gap-2 group cursor-pointer relative z-10">
          <span className="text-[11px] font-bold text-white/30 group-hover:text-accent-gold transition-colors uppercase tracking-[0.15em]">VIEW INFRASTRUCTURE →</span>
        </div>
      </motion.div>
    </div>
  );
}
