"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ChevronDown, ArrowRight } from "lucide-react";
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
    { label: "Platform", hasDropdown: true },
    { label: "Solutions", hasDropdown: true },
    { label: "Governance", hasDropdown: false },
    { label: "Infrastructure", hasDropdown: false },
    { label: "Resources", hasDropdown: true },
    { label: "Pricing", hasDropdown: false }
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-700",
      scrolled 
        ? "bg-[#040816]/80 backdrop-blur-[24px] h-[72px] border-b border-white/5 shadow-2xl" 
        : "bg-transparent h-[84px] border-transparent"
    )}>
      <div className="container-custom h-full flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 relative z-10 group">
          <div className="w-9 h-9 bg-accent-gold rounded-lg flex items-center justify-center font-black text-black text-lg transition-transform group-hover:rotate-6">O</div>
          <div className="flex flex-col justify-center">
            <span className="font-bold text-white tracking-[-0.04em] text-[17px] leading-none uppercase">OYEN GRID</span>
            <span className="text-[9px] font-medium text-white/40 uppercase tracking-[0.2em] mt-1.5 hidden sm:block">Institutional Infrastructure</span>
          </div>
        </Link>

        {/* Center Navigation */}
        <nav className="hidden lg:flex items-center gap-8 h-full">
          {navItems.map((item) => (
            <Link 
              key={item.label} 
              href="#" 
              className="text-[13px] font-medium text-white/50 hover:text-white transition-all flex items-center gap-1 group tracking-wide"
            >
              {item.label}
              {item.hasDropdown && (
                <ChevronDown className="w-3.5 h-3.5 opacity-30 group-hover:opacity-100 transition-opacity" />
              )}
            </Link>
          ))}
        </nav>

        {/* Action Actions */}
        <div className="flex items-center gap-6 relative z-10">
          <button className="w-10 h-10 flex items-center justify-center text-white/20 hover:text-white transition-colors group">
            <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
          
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-[14px] font-bold text-white/40 hover:text-white transition-colors px-4 hidden xl:block uppercase tracking-wider">
              Login
            </Link>
            <button className="h-[46px] px-7 rounded-[12px] border border-white/10 bg-white/[0.03] text-[13px] font-bold text-white transition-all hover:bg-white/5 hover:border-white/20 uppercase tracking-widest whitespace-nowrap">
              Talk to Sales
            </button>
            <button className="h-[46px] px-7 rounded-[12px] bg-accent-gold text-black text-[13px] font-bold transition-all hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(212,166,58,0.3)] uppercase tracking-widest whitespace-nowrap">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export function AnnouncementBar() {
  return (
    <div className="pt-[110px] flex justify-center px-4 relative z-50">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-[44px] bg-white/[0.03] border border-white/5 rounded-full px-6 flex items-center justify-between gap-12 backdrop-blur-3xl shadow-2xl min-w-[700px]"
      >
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse shadow-[0_0_8px_#D4A63A]" />
          <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Infrastructure Status</span>
        </div>

        <span className="text-[13px] text-white/70 font-light tracking-wide">
          Operational synchronization active across institutional delivery nodes.
        </span>

        <div className="flex items-center gap-2 group cursor-pointer">
          <span className="text-[11px] font-bold text-white/20 group-hover:text-accent-gold transition-colors uppercase tracking-[0.15em]">View Status</span>
          <ArrowRight className="w-3.5 h-3.5 text-white/10 group-hover:text-accent-gold transition-colors group-hover:translate-x-1" />
        </div>
      </motion.div>
    </div>
  );
}
