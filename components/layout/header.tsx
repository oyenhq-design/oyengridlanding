"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ChevronDown, Grid, X, LayoutGrid, Cpu, Network, Database, Shield } from "lucide-react";
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
    { label: "Operations", hasDropdown: true },
    { label: "Programmes", hasDropdown: true },
    { label: "Intelligence", hasDropdown: false },
    { label: "Infrastructure", hasDropdown: true },
    { label: "Enterprise", hasDropdown: false },
    { label: "Pricing", hasDropdown: false }
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-700",
      scrolled 
        ? "bg-[rgba(4,8,22,0.8)] backdrop-blur-[24px] h-[72px] border-b border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
        : "bg-transparent h-[96px]"
    )}>

      {/* Cinematic Ambient Glow */}
      <div className={cn(
        "absolute inset-0 z-0 transition-opacity duration-700 pointer-events-none",
        scrolled ? "opacity-100" : "opacity-0"
      )}>
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-full bg-[radial-gradient(circle_at_50%_0%,rgba(245,184,46,0.05),transparent_70%)]" />
      </div>

      <div className="max-w-[1450px] mx-auto h-full flex items-center justify-between px-10 relative z-10">
        
        {/* LEFT SECTION: BRAND IDENTITY */}
        <div className="flex items-center gap-16">
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-[#f5b82e] to-[#d49a20] rounded-xl flex items-center justify-center shadow-[0_10px_25px_rgba(245,184,46,0.25)] group-hover:scale-110 transition-transform duration-500">
               <div className="w-4 h-4 border-2 border-black rotate-45 relative">
                  <div className="absolute inset-0 bg-black/20 animate-pulse" />
               </div>
            </div>
            <span className="font-bold text-white text-[19px] tracking-[-0.03em] uppercase">OYEN GRID</span>
          </Link>

          {/* CENTER NAVIGATION: Operational Pillars */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href="#" 
                className="text-[13px] font-bold text-white/40 hover:text-white transition-all flex items-center gap-1.5 group tracking-widest uppercase relative"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="w-3 h-3 text-white/10 group-hover:text-[#f5b82e] transition-colors" />
                )}
                {/* Hover Underline Effect */}
                <motion.div 
                  className="absolute -bottom-1 left-0 h-[1px] bg-[#f5b82e] opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </Link>
            ))}
          </nav>
        </div>

        {/* RIGHT SECTION: UTILITIES & CTAs */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-8 pr-8 border-r border-white/10">
             <button 
               onClick={openSearch}
               className="text-white/30 hover:text-[#f5b82e] transition-all p-2 hover:bg-white/5 rounded-lg"
             >
                <Search className="w-[18px] h-[18px]" />
             </button>
             <Link href="#" className="text-[13px] font-bold text-white/40 hover:text-white transition-all tracking-widest uppercase py-2 px-6 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10">
                Contact Sales
             </Link>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="h-[46px] px-8 rounded-xl bg-gradient-to-br from-[#f5b82e] to-[#d49a20] text-black text-[12px] font-black uppercase tracking-widest transition-all hover:shadow-[0_15px_30px_rgba(245,184,46,0.3)] hover:scale-[1.03] active:scale-[0.98]">
              Get Started
            </button>
            <button className="p-2 text-white/20 hover:text-[#f5b82e] transition-colors group">
               <LayoutGrid className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
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
    <div className="pt-[96px] px-10 flex justify-center relative z-[60]">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-[52px] bg-[rgba(10,14,24,0.6)] backdrop-blur-[24px] border border-white/10 rounded-[18px] px-6 flex items-center justify-between w-full max-w-[1450px] shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden group"
      >
        {/* Subtle Inner Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,184,46,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="flex items-center gap-8 mx-auto relative z-10">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-[#f5b82e] shadow-[0_0_10px_#f5b82e] animate-pulse" />
             <span className="text-[13px] text-white/60 font-bold tracking-tight uppercase">
                Operational infrastructure for structured programme delivery.
             </span>
          </div>
          
          <div className="h-4 w-px bg-white/10" />
          
          <button className="flex items-center gap-2 group/btn">
             <span className="text-[12px] font-black text-[#f5b82e] uppercase tracking-widest">Explore Operations</span>
             <motion.div
               animate={{ x: [0, 4, 0] }}
               transition={{ duration: 1.5, repeat: Infinity }}
             >
                <ArrowRight className="w-3.5 h-3.5 text-[#f5b82e]" />
             </motion.div>
          </button>
        </div>

        <button 
          onClick={() => setIsVisible(false)}
          className="text-white/20 hover:text-white transition-colors relative z-10 p-2"
        >
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    </div>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
