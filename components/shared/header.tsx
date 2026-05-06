"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, Menu, X, Layout, BarChart3, Zap, 
  Rocket, Building2, Heart, BookOpen, FileText, Newspaper,
  Search, Grid
} from "lucide-react";

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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      
      {/* ════════════════════════════════════════════
          1. MAIN NAVBAR (TOP LAYER)
      ════════════════════════════════════════════ */}
      <nav 
        className={`w-full h-[64px] lg:h-[72px] transition-all duration-300 ease-out border-b backdrop-blur-xl shadow-[0_6px_20px_rgba(0,0,0,0.4)] flex items-center px-6 lg:px-14
          ${isScrolled 
            ? "bg-[rgba(10,10,10,0.7)] border-[rgba(255,255,255,0.06)]" 
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
                className="relative"
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
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="w-[320px] bg-[#0A0F1C] border border-[rgba(255,255,255,0.08)] rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-2.5 overflow-hidden backdrop-blur-xl">
                        {item.items?.map((subItem) => {
                          const Icon = subItem.icon;
                          return (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className="group flex items-start gap-4 p-3.5 rounded-[14px] transition-all duration-300 hover:bg-white/[0.03]"
                            >
                              <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0 group-hover:border-[#FACC15]/30 group-hover:bg-[#FACC15]/5 transition-all duration-300">
                                <Icon className="w-5 h-5 text-[#9CA3AF] group-hover:text-[#FACC15] transition-colors" />
                              </div>
                              <div>
                                <div className="text-[14px] font-bold text-white mb-0.5 group-hover:text-[#FACC15] transition-colors">{subItem.title}</div>
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
            <button className="text-[#A1A1AA] hover:text-white transition-colors p-2">
              <Search className="w-5 h-5" />
            </button>
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
  );
}
