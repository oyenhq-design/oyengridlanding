"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Fuse from "fuse.js";
import { 
  ChevronDown, Menu, X, Layout, BarChart3, Zap, 
  Rocket, Building2, Heart, BookOpen, FileText, Newspaper,
  Search as SearchIcon, Grid, ArrowRight, CornerDownLeft
} from "lucide-react";
import { SEARCH_DATA } from "@/lib/search-data";

const NAV_MENU = [
  {
    label: "Features",
    type: "dropdown",
    items: [
      { title: "Program Management", href: "/features#program-management", icon: Layout, desc: "Orchestrate complex learning at scale." },
      { title: "Analytics", href: "/features#analytics", icon: BarChart3, desc: "Real-time insights into interaction." },
      { title: "Automation", href: "/features#automation", icon: Zap, desc: "Scale without increasing headcount." },
    ],
  },
  {
    label: "Solutions",
    type: "dropdown",
    items: [
      { title: "Bootcamps", href: "/solutions/bootcamps", icon: Rocket, desc: "Intensive cohort-based training." },
      { title: "Enterprises", href: "/solutions/corporate", icon: Building2, desc: "Corporate L&D and infrastructure." },
      { title: "NGOs", href: "/solutions/programs", icon: Heart, desc: "Community and social impact programs." },
    ],
  },
  {
    label: "Resources",
    type: "dropdown",
    items: [
      { title: "Blog", href: "/blog", icon: Newspaper, desc: "Insights on operational excellence." },
      { title: "Case Studies", href: "/solutions", icon: FileText, desc: "Measurable impact from our clients." },
      { title: "Documentation", href: "/docs", icon: BookOpen, desc: "Guides for structuring your data." },
    ],
  },
  { label: "Pricing", href: "/pricing", type: "link" },
];

export function Header() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);
  
  // Search State
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Fuse.js Instance
  const fuse = useMemo(() => new Fuse(SEARCH_DATA, {
    keys: ["title", "category"],
    threshold: 0.3,
    distance: 100,
  }), []);

  // Filtered Results
  const results = useMemo(() => {
    if (!searchQuery) return [];
    return fuse.search(searchQuery).map(r => r.item);
  }, [searchQuery, fuse]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close search and handle keyboard
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchExpanded(false);
        setSearchQuery("");
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchExpanded(false);
        setSearchQuery("");
      }
      
      if (isSearchExpanded && results.length > 0) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex(prev => (prev + 1) % results.length);
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
        } else if (e.key === "Enter") {
          e.preventDefault();
          const target = results[selectedIndex];
          if (target) window.location.href = target.href;
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSearchExpanded, results, selectedIndex]);

  // Focus input when expanded
  useEffect(() => {
    if (isSearchExpanded) {
      inputRef.current?.focus();
    }
  }, [isSearchExpanded]);

  return (
    <>
      {/* ════════════════════════════════════════════
          FULL-SCREEN OVERLAY (When Dropdown or Search Open)
      ════════════════════════════════════════════ */}
      <AnimatePresence>
        {(activeDropdown || isSearchExpanded) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setActiveDropdown(null);
              setIsSearchExpanded(false);
              setSearchQuery("");
            }}
            className="fixed inset-0 z-[40] bg-black/60 backdrop-blur-[4px] transition-all duration-500"
          />
        )}
      </AnimatePresence>

      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        
        {/* ════════════════════════════════════════════
            1. MAIN NAVBAR (TOP LAYER)
        ════════════════════════════════════════════ */}
        <nav 
          className={`w-full h-[64px] lg:h-[72px] transition-all duration-300 ease-out border-b backdrop-blur-xl shadow-[0_6px_20px_rgba(0,0,0,0.4)] flex items-center px-6 lg:px-14
            ${isScrolled 
              ? "bg-[rgba(10,10,10,0.85)] border-[rgba(255,255,255,0.06)]" 
              : "bg-[rgba(10,10,10,0.4)] border-[rgba(255,255,255,0.03)]"}
          `}
        >
          <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between">
            
            {/* LEFT: Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="w-10 h-10 bg-[#1A1A1D] rounded-xl flex items-center justify-center border border-[rgba(255,255,255,0.1)] group-hover:border-[#FACC15]/40 transition-all duration-500">
                <span className="text-white font-bold text-sm tracking-widest group-hover:text-[#FACC15] transition-colors">OG</span>
              </div>
              <span className="text-white font-bold tracking-tight text-xl group-hover:text-white transition-colors">OYEN GRID</span>
            </Link>

            {/* CENTER: Navigation Items */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_MENU.map((item) => (
                <div
                  key={item.label}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => item.type === "dropdown" && setActiveDropdown(item.label)}
                  onMouseLeave={() => item.type === "dropdown" && setActiveDropdown(null)}
                >
                  {item.type === "link" ? (
                    <Link
                      href={item.href!}
                      className={`text-[14px] font-semibold tracking-wide transition-all duration-200 px-1 py-2 relative group ${
                        pathname === item.href ? "text-white" : "text-[#A1A1AA] hover:text-white"
                      }`}
                    >
                      {item.label}
                      <motion.span 
                        className="absolute -bottom-1 left-0 h-[2px] bg-[#FACC15] origin-left"
                        initial={{ scaleX: pathname === item.href ? 1 : 0 }}
                        animate={{ scaleX: pathname === item.href ? 1 : 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </Link>
                  ) : (
                    <div className={`flex items-center gap-1.5 cursor-pointer text-[#A1A1AA] hover:text-white transition-all duration-200 py-2 relative group ${activeDropdown === item.label ? "text-white" : ""}`}>
                      <span className="text-[14px] font-semibold tracking-wide">{item.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180 text-[#FACC15]" : "opacity-50"}`} />
                      <span className="absolute -bottom-1 left-0 h-[2px] bg-[#FACC15] w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                    </div>
                  )}

                  {/* Dropdown Panel */}
                  <AnimatePresence>
                    {item.type === "dropdown" && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-[calc(100%+12px)] left-0 z-[60] pt-0"
                      >
                        <div className="w-[340px] bg-[rgba(12,12,14,0.98)] border border-[rgba(255,255,255,0.08)] rounded-[24px] shadow-[0_30px_60px_rgba(0,0,0,0.6)] p-2.5 overflow-hidden backdrop-blur-3xl ring-1 ring-white/5">
                          {item.items?.map((subItem) => {
                            const Icon = subItem.icon;
                            return (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                className="group flex items-start gap-4 p-4 rounded-[18px] transition-all duration-300 hover:bg-white/[0.04]"
                              >
                                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0 group-hover:border-[#FACC15]/30 group-hover:bg-[#FACC15]/5 transition-all duration-300 shadow-sm">
                                  <Icon className="w-5 h-5 text-[#9CA3AF] group-hover:text-[#FACC15] transition-colors" />
                                </div>
                                <div>
                                  <div className="text-[14px] font-bold text-white mb-0.5 group-hover:text-[#FACC15] transition-colors flex items-center gap-1.5">
                                    {subItem.title}
                                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                  </div>
                                  <div className="text-[12px] text-[#71717A] leading-relaxed group-hover:text-[#A1A1AA] transition-colors">{subItem.desc}</div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* RIGHT: Actions */}
            <div className="hidden lg:flex items-center gap-6">
              
              {/* Functional Live Search */}
              <div ref={searchRef} className="relative flex items-center">
                <AnimatePresence>
                  {isSearchExpanded && (
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 280, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      className="absolute right-0 flex items-center"
                    >
                      <div className="relative w-full">
                        <input 
                          ref={inputRef}
                          type="text"
                          value={searchQuery}
                          onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setSelectedIndex(0);
                          }}
                          placeholder="Search platform..."
                          className="w-full h-10 pl-10 pr-10 rounded-full bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#FACC15]/30 focus:border-[#FACC15]/30 transition-all backdrop-blur-md"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-40">
                          <CornerDownLeft className="w-3 h-3 text-white" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <button 
                  onClick={() => {
                    setIsSearchExpanded(!isSearchExpanded);
                    if (!isSearchExpanded) setSearchQuery("");
                  }}
                  className={`relative z-10 p-2 rounded-full transition-all duration-300 ${isSearchExpanded ? "text-[#FACC15]" : "text-[#A1A1AA] hover:text-white"}`}
                >
                  {isSearchExpanded ? <X className="w-5 h-5" /> : <SearchIcon className="w-5 h-5" />}
                </button>

                {/* Search Results Dropdown */}
                <AnimatePresence>
                  {isSearchExpanded && searchQuery && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      className="absolute top-[calc(100%+12px)] right-0 z-[60] w-[360px]"
                    >
                      <div className="bg-[rgba(12,12,14,0.98)] border border-white/10 rounded-[24px] shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden backdrop-blur-3xl ring-1 ring-white/5">
                        <div className="p-2 space-y-1 max-h-[400px] overflow-y-auto">
                          {results.length > 0 ? (
                            results.map((result, idx) => (
                              <Link
                                key={result.href + result.title}
                                href={result.href}
                                onMouseEnter={() => setSelectedIndex(idx)}
                                className={`flex items-center gap-4 p-3.5 rounded-[18px] transition-all duration-200 ${idx === selectedIndex ? "bg-white/[0.08]" : "hover:bg-white/[0.04]"}`}
                              >
                                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${idx === selectedIndex ? "border-[#FACC15]/30 bg-[#FACC15]/10 text-[#FACC15]" : "border-white/5 bg-white/5 text-[#71717A]"}`}>
                                  <result.icon className="w-4.5 h-4.5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className={`text-[14px] font-bold transition-colors ${idx === selectedIndex ? "text-[#FACC15]" : "text-white"}`}>
                                    {result.title}
                                  </div>
                                  <div className="text-[11px] text-[#71717A] uppercase tracking-wider font-semibold">{result.category}</div>
                                </div>
                                {idx === selectedIndex && (
                                  <ArrowRight className="w-4 h-4 text-[#FACC15] animate-in slide-in-from-left-2 duration-300" />
                                )}
                              </Link>
                            ))
                          ) : (
                            <div className="p-8 text-center">
                              <SearchIcon className="w-8 h-8 text-[#27272A] mx-auto mb-3" />
                              <div className="text-white font-bold text-sm">No results found</div>
                              <div className="text-[#71717A] text-[12px] mt-1">Try a different keyword or category.</div>
                            </div>
                          )}
                        </div>
                        {results.length > 0 && (
                          <div className="p-3 border-t border-white/5 bg-white/[0.02] flex items-center justify-between text-[11px] text-[#52525B] font-medium">
                            <div className="flex items-center gap-3">
                              <span className="flex items-center gap-1.5"><CornerDownLeft className="w-3 h-3" /> to select</span>
                              <span className="flex items-center gap-1.5"><ChevronDown className="w-3 h-3" /> to navigate</span>
                            </div>
                            <span>{results.length} matches</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/login" className="text-[14px] font-bold text-[#A1A1AA] hover:text-white transition-colors">
                Login
              </Link>
              <Link 
                href="/contact"
                className="px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white text-[14px] font-bold hover:bg-white/10 transition-all"
              >
                Contact Sales
              </Link>
              <Link
                href="/get-started"
                className="relative px-6 py-2.5 rounded-xl text-[14px] font-bold transition-all duration-300 overflow-hidden group shadow-[0_10px_25px_rgba(250,204,21,0)] hover:shadow-[0_10px_25px_rgba(250,204,21,0.3)] hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FACC15] to-[#EAB308]" />
                <span className="relative z-10 text-black">Get Started</span>
              </Link>
              <button className="text-[#A1A1AA] hover:text-white transition-colors p-2">
                <Grid className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white active:scale-95 transition-all" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* ════════════════════════════════════════════
            2. ANNOUNCEMENT BAR (BELOW NAVBAR)
        ════════════════════════════════════════════ */}
        <AnimatePresence>
          {isAnnouncementVisible && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="w-full bg-gradient-to-r from-[rgba(212,160,23,0.15)] via-[rgba(212,160,23,0.05)] to-transparent border-b border-[rgba(212,160,23,0.1)] relative overflow-hidden"
            >
              <div className="max-w-[1400px] mx-auto h-[40px] lg:h-[44px] px-6 lg:px-14 flex items-center justify-between gap-4">
                {/* LEFT: Message */}
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FACC15] shadow-[0_0_8px_#FACC15]" />
                  <span className="text-[#D4AF37] text-[12px] lg:text-[13px] font-semibold tracking-tight uppercase">
                    Programme Infrastructure for Scale
                  </span>
                  <span className="text-white/40 mx-2 hidden lg:block">|</span>
                  <span className="text-[#A1A1AA] text-[12px] lg:text-[13px] font-medium hidden lg:block">
                    Run complex cohorts with absolute structural integrity.
                  </span>
                </div>

                {/* RIGHT: CTA + Close */}
                <div className="flex items-center gap-4 lg:gap-6">
                  <Link 
                    href="/solutions"
                    className="px-3 py-1 rounded-md border border-[#D4AF37]/30 text-[#D4AF37] text-[11px] font-bold hover:bg-[#D4AF37]/10 transition-all uppercase tracking-wider"
                  >
                    Explore Platform
                  </Link>
                  <button 
                    onClick={() => setIsAnnouncementVisible(false)}
                    className="text-white/40 hover:text-white transition-colors p-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#0B0B0C] border-t border-white/5 overflow-hidden backdrop-blur-xl"
            >
              <div className="px-6 py-8 space-y-6">
                {NAV_MENU.map((item) => (
                  <div key={item.label} className="space-y-4">
                    <div className="text-[12px] font-bold text-[#71717A] uppercase tracking-widest">{item.label}</div>
                    <div className="grid grid-cols-1 gap-4">
                      {item.type === "link" ? (
                        <Link href={item.href!} className="text-[16px] font-bold text-white hover:text-[#FACC15]">
                          {item.label}
                        </Link>
                      ) : (
                        item.items?.map((subItem) => (
                          <Link key={subItem.title} href={subItem.href} className="flex items-center gap-3 text-[16px] font-bold text-white hover:text-[#FACC15]">
                            <subItem.icon className="w-5 h-5 text-[#FACC15]" />
                            {subItem.title}
                          </Link>
                        ))
                      )}
                    </div>
                  </div>
                ))}
                <div className="pt-6 border-t border-white/5 flex flex-col gap-4">
                  <Link href="/login" className="text-center py-3 rounded-xl border border-white/10 text-white font-bold">
                    Login
                  </Link>
                  <Link href="/get-started" className="text-center py-3 rounded-xl bg-gradient-to-r from-[#FACC15] to-[#EAB308] text-black font-bold">
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
