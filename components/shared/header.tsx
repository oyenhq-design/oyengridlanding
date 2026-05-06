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
            className="fixed inset-0 z-[40] bg-black/70 backdrop-blur-[6px] transition-all duration-500"
          />
        )}
      </AnimatePresence>

      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        
        {/* ════════════════════════════════════════════
            1. MAIN NAVBAR (TOP LAYER)
        ════════════════════════════════════════════ */}
        <nav 
          className={`w-full h-[64px] lg:h-[72px] transition-all duration-300 ease-out border-b flex items-center px-6 lg:px-14
            ${isScrolled 
              ? "bg-[rgba(10,10,10,0.7)] border-[rgba(255,255,255,0.06)] backdrop-blur-xl shadow-[0_6px_20px_rgba(0,0,0,0.4)]" 
              : "bg-transparent border-transparent backdrop-blur-md"}
          `}
        >
          <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between">
            
            {/* LEFT: Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="w-10 h-10 bg-[#1A1A1D] rounded-xl flex items-center justify-center border border-[rgba(255,255,255,0.1)] group-hover:border-[#F5B942]/40 transition-all duration-500">
                <span className="text-white font-bold text-sm tracking-widest group-hover:text-[#F5B942] transition-colors">OG</span>
              </div>
              <span className="text-white font-bold tracking-tight text-xl group-hover:text-white transition-colors uppercase">OYEN GRID</span>
            </Link>

            {/* CENTER: Navigation Items */}
            <div className="hidden lg:flex items-center gap-8 h-full">
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
                      className={`text-[14px] font-bold tracking-wide transition-all duration-200 px-1 py-2 relative group flex items-center h-full ${
                        pathname === item.href ? "text-white" : "text-[#A1A1AA] hover:text-white"
                      }`}
                    >
                      {item.label}
                      <motion.span 
                        className="absolute bottom-4 left-0 h-[2px] bg-[#F5B942] origin-left"
                        initial={{ scaleX: pathname === item.href ? 1 : 0 }}
                        animate={{ scaleX: pathname === item.href ? 1 : 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.2 }}
                        style={{ width: "100%" }}
                      />
                    </Link>
                  ) : (
                    <div className={`flex items-center gap-1.5 cursor-pointer text-[#A1A1AA] hover:text-white transition-all duration-200 py-2 relative group h-full ${activeDropdown === item.label ? "text-white" : ""}`}>
                      <span className="text-[14px] font-bold tracking-wide">{item.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180 text-[#F5B942]" : "opacity-50"}`} />
                      <motion.span 
                        className="absolute bottom-4 left-0 h-[2px] bg-[#F5B942] origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: activeDropdown === item.label ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ width: "100%" }}
                      />
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
                        <div className="w-[340px] bg-[rgba(15,15,18,0.98)] border border-[rgba(255,255,255,0.08)] rounded-[24px] shadow-[0_30px_60px_rgba(0,0,0,0.6)] p-2.5 overflow-hidden backdrop-blur-3xl ring-1 ring-white/5">
                          {item.items?.map((subItem) => {
                            const Icon = subItem.icon;
                            return (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                className="group flex items-start gap-4 p-4 rounded-[18px] transition-all duration-300 hover:bg-white/[0.04]"
                              >
                                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0 group-hover:border-[#F5B942]/30 group-hover:bg-[#F5B942]/5 transition-all duration-300 shadow-sm">
                                  <Icon className="w-5 h-5 text-[#9CA3AF] group-hover:text-[#F5B942] transition-colors" />
                                </div>
                                <div>
                                  <div className="text-[14px] font-bold text-white mb-0.5 group-hover:text-[#F5B942] transition-colors flex items-center gap-1.5">
                                    {subItem.title}
                                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                  </div>
                                  <div className="text-[12px] text-[#71717A] leading-relaxed group-hover:text-[#A1A1AA] transition-colors font-medium">{subItem.desc}</div>
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
              <button 
                onClick={() => setIsSearchExpanded(true)}
                className="p-2 text-[#A1A1AA] hover:text-white transition-colors"
              >
                <SearchIcon className="w-5 h-5" />
              </button>

              <Link href="/login" className="text-[14px] font-bold text-[#A1A1AA] hover:text-white transition-colors">
                Login
              </Link>
              <Link 
                href="/contact"
                className="px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white text-[14px] font-bold hover:bg-white/10 transition-all hover:border-white/20"
              >
                Contact Sales
              </Link>
              <Link
                href="/get-started"
                className="relative px-6 py-2.5 rounded-xl text-[14px] font-bold transition-all duration-300 overflow-hidden group shadow-[0_10px_25px_rgba(245,185,66,0)] hover:shadow-[0_10px_25px_rgba(245,185,66,0.3)] hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5B942] to-[#D4A017]" />
                <span className="relative z-10 text-black">Get Started</span>
              </Link>
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
              className="w-full bg-gradient-to-r from-[#F5B942]/10 via-[#F5B942]/5 to-transparent border-b border-white/5 relative overflow-hidden"
            >
              <div className="max-w-[1400px] mx-auto h-[40px] lg:h-[44px] px-6 lg:px-14 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F5B942] shadow-[0_0_8px_#F5B942]" />
                  <span className="text-[#F5B942] text-[12px] lg:text-[13px] font-bold tracking-tight uppercase">
                    New: AI-Powered Insights Layer
                  </span>
                  <span className="text-[#A1A1AA] text-[12px] lg:text-[13px] font-medium hidden lg:block">
                    — Automate session summaries and participant health tracking.
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Link href="/solutions" className="text-white text-[11px] font-bold hover:text-[#F5B942] transition-all uppercase tracking-wider">
                    Learn More →
                  </Link>
                  <button onClick={() => setIsAnnouncementVisible(false)} className="text-white/40 hover:text-white p-1">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search Modal Overlay */}
        <AnimatePresence>
          {isSearchExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
            >
              <div ref={searchRef} className="w-full max-w-2xl bg-[#0B0B0C] border border-white/10 rounded-[32px] shadow-2xl overflow-hidden">
                <div className="p-6 border-b border-white/5 flex items-center gap-4">
                  <SearchIcon className="w-6 h-6 text-[#F5B942]" />
                  <input 
                    ref={inputRef}
                    autoFocus
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search platform features, resources, and more..."
                    className="flex-1 bg-transparent border-none text-white text-lg focus:outline-none placeholder:text-white/20"
                  />
                  <button onClick={() => setIsSearchExpanded(false)} className="p-2 hover:bg-white/5 rounded-full">
                    <X className="w-5 h-5 text-white/40" />
                  </button>
                </div>
                <div className="p-4 max-h-[400px] overflow-y-auto">
                  {results.length > 0 ? (
                    results.map((result, idx) => (
                      <Link
                        key={idx}
                        href={result.href}
                        onClick={() => setIsSearchExpanded(false)}
                        className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${idx === selectedIndex ? "bg-white/5" : "hover:bg-white/[0.02]"}`}
                      >
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#F5B942]">
                          <result.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-white font-bold">{result.title}</div>
                          <div className="text-xs text-[#71717A] uppercase tracking-wider">{result.category}</div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="p-12 text-center text-white/40">
                      {searchQuery ? "No results found for your query." : "Start typing to search..."}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
