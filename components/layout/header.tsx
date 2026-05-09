"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Platform", "Solutions", "Governance", "Resources", "Pricing"];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled 
        ? "bg-charcoal/80 backdrop-blur-[20px] h-[74px] border-b border-white/5" 
        : "bg-transparent h-[84px] border-transparent"
    )}>
      <div className="container-custom h-full flex items-center justify-between">
        
        {/* BRAND IDENTITY */}
        <Link href="/" className="flex items-center gap-3 relative z-10 group">
          <div className="w-9 h-9 bg-accent-gold rounded-lg flex items-center justify-center font-black text-black text-lg transition-transform group-hover:rotate-6">O</div>
          <div className="flex flex-col justify-center">
            <span className="font-bold text-white tracking-[-0.04em] text-[17px] leading-none">OYEN GRID</span>
            <span className="text-[9px] font-medium text-white/40 uppercase tracking-[0.2em] mt-1.5 hidden sm:block">Institutional Infrastructure</span>
          </div>
        </Link>

        {/* ENTERPRISE NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-10 h-full">
          {navItems.map((item) => (
            <Link 
              key={item} 
              href="#" 
              className="text-[13px] font-medium text-white/60 hover:text-white transition-all flex items-center gap-1 group"
            >
              {item}
              {["Platform", "Solutions", "Resources"].includes(item) && (
                <ChevronDown className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
              )}
            </Link>
          ))}
        </nav>

        {/* PROTOCOL ACTIONS */}
        <div className="flex items-center gap-6 relative z-10">
          <button className="text-white/20 hover:text-white transition-colors">
            <Search className="w-4.5 h-4.5" />
          </button>
          
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-[13px] font-medium text-white/40 hover:text-white transition-colors px-4 hidden xl:block">
              Login
            </Link>
            <button className="btn-outline h-10 px-6">
              Talk to Sales
            </button>
            <button className="btn-gold h-10 px-6">
              Initialize
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
