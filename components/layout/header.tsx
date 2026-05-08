"use client";

import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";
import { useSearch } from "@/context/search-context";

export function Header() {
  const { openSearch } = useSearch();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/60 backdrop-blur-3xl border-b border-white/[0.04]">
      <div className="container-custom h-[94px] flex items-center justify-between">
        
        {/* Institutional Branding */}
        <Link href="/" className="flex flex-col relative z-10 group">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-[#d6a63c] rounded-[8px] flex items-center justify-center font-bold text-[#030712] text-xl shadow-[0_0_15px_rgba(214,166,60,0.3)]">O</div>
             <span className="font-bold text-white tracking-tighter text-xl uppercase">OYEN GRID</span>
          </div>
          <span className="text-[9px] font-bold text-[#d6a63c]/60 uppercase tracking-[0.25em] mt-1 ml-11">Institutional Infrastructure</span>
        </Link>

        {/* Architectural Navigation */}
        <nav className="hidden lg:flex items-center gap-12">
          {["Infrastructure", "Governance", "Intelligence", "Operations", "Security"].map((item) => (
            <Link 
              key={item}
              href={`/${item.toLowerCase()}`} 
              className="text-[12px] font-bold text-white/40 hover:text-white transition-all tracking-widest uppercase flex items-center gap-2 group"
            >
              {item} <ChevronDown className="w-3 h-3 opacity-20 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-8 relative z-10">
          <button 
            onClick={openSearch}
            className="w-11 h-11 flex items-center justify-center bg-white/[0.03] border border-white/5 text-white/20 hover:text-white hover:border-[#d6a63c]/40 rounded-full transition-all group shadow-inner"
          >
            <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </button>
          <Link href="/login" className="text-[12px] font-bold text-white/30 hover:text-white transition-colors hidden sm:block uppercase tracking-widest">
            Login
          </Link>
          <button className="btn-gold h-12 px-10 text-[11px] uppercase tracking-[0.2em]">
            Initialize
          </button>
        </div>
      </div>
    </header>
  );
}

export function AnnouncementBar() {
  return (
    <div className="pt-[130px] flex justify-center px-4 relative z-40">
      <div className="bg-[#0E1728]/40 border border-white/5 rounded-full px-6 py-2 flex items-center gap-5 backdrop-blur-3xl group cursor-pointer hover:border-[#d6a63c]/20 transition-all duration-500">
        <div className="w-1.5 h-1.5 rounded-full bg-[#d6a63c] shadow-[0_0_8px_rgba(214,166,60,0.4)]" />
        <span className="premium-label text-[8px]">Operational v.0.4.2</span>
        <span className="h-4 w-px bg-white/10" />
        <span className="text-[11px] text-white/30 font-light tracking-wide group-hover:text-white/50 transition-colors">Strategic infrastructure layer deployed across 142 nodes.</span>
        <div className="text-[9px] font-bold text-[#d6a63c]/60 group-hover:text-[#d6a63c] transition-colors uppercase tracking-[0.2em] ml-4">
          View Audit Log
        </div>
      </div>
    </div>
  );
}
