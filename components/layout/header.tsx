"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  ChevronDown, X, Menu, Radio, Activity, Target, Zap, Globe, 
  Users, Lock, Layers, Bot, LineChart, Brain, BookOpen, 
  GraduationCap, Building2, Boxes, HelpCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// ─── Navigation Data ────────────────────────────────────────────────────────

const navigationData = [
  {
    label: "Solutions",
    status: "WHO OYEN GRID SERVES",
    cta: "EXPLORE SOLUTIONS",
    href: "/solutions",
    items: [
      { title: "Bootcamps & Training", desc: "Structured programme delivery for bootcamps, training organisations and fellowship programmes.", icon: GraduationCap, href: "/solutions/bootcamps-training" },
      { title: "Webinars & Events", desc: "Live coordination infrastructure for webinars, workshops and virtual events.", icon: Radio, href: "/solutions/webinars-events" },
      { title: "Education & Institutions", desc: "Academic systems and institutional learning infrastructure.", icon: Building2, href: "/solutions/education-institutions" },
      { title: "Enterprise Operations", desc: "Operational coordination, governance and institutional delivery systems.", icon: Target, href: "/solutions/enterprise-operations" }
    ]
  },
  {
    label: "Features",
    status: "CORE PLATFORM CAPABILITIES",
    cta: "EXPLORE FEATURES",
    href: "/features",
    items: [
      { title: "Programme Management", desc: "Create, manage and scale structured programmes.", icon: Boxes, href: "/features/programme-management" },
      { title: "Participant Management", desc: "Registration, tracking and engagement intelligence.", icon: Users, href: "/features/participant-management" },
      { title: "OYEN Live", desc: "Live sessions, attendance and delivery infrastructure.", icon: Zap, href: "/features/oyen-live" },
      { title: "Analytics & AI", desc: "Operational insights, reporting and AI intelligence.", icon: LineChart, href: "/features/analytics-ai" }
    ]
  },
  {
    label: "Resources",
    status: "LEARNING AND COMPANY RESOURCES",
    cta: "EXPLORE RESOURCES",
    href: "/resources",
    items: [
      { title: "Documentation", desc: "Platform guides and implementation resources.", icon: BookOpen, href: "/resources/docs" },
      { title: "Case Studies", desc: "Customer success stories and programme outcomes.", icon: Activity, href: "/resources/case-studies" },
      { title: "Blog", desc: "Insights, updates and operational intelligence.", icon: Globe, href: "/resources/blog" },
      { title: "Help Center", desc: "Support articles and FAQs.", icon: HelpCircle, href: "/resources/help" }
    ]
  },
  {
    label: "Company",
    status: "ABOUT OYEN GRID",
    cta: "EXPLORE COMPANY",
    href: "/company",
    items: [
      { title: "About Us", desc: "Company vision and mission.", icon: Users, href: "/company/about" },
      { title: "Careers", desc: "Join the team.", icon: Zap, href: "/company/careers" },
      { title: "Partners", desc: "Partnership opportunities.", icon: Globe, href: "/company/partners" },
      { title: "Contact", desc: "Get in touch.", icon: Radio, href: "/company/contact" }
    ]
  }
];

const navItems = [
  { type: "dropdown", label: "Solutions" },
  { type: "dropdown", label: "Features" },
  { type: "dropdown", label: "Resources" },
  { type: "link", label: "Pricing", href: "/pricing" },
  { type: "dropdown", label: "Company" }
];

// ─── Component ─────────────────────────────────────────────────────────────

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force dark theme strictly
    setTheme("dark");
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header 
      ref={menuRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-[#050505] border-b border-white/5 h-[68px] flex items-center",
        scrolled ? "shadow-[0_10px_30px_rgba(0,0,0,0.9)] backdrop-blur-md bg-[#050505]/95" : ""
      )}
    >
      <div className="max-w-[1280px] w-full mx-auto px-8 flex items-center justify-between">
        
        {/* Logo Wordmark with Infinity SVG */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0 relative">
          <svg className="w-5.5 h-5.5 text-[#E2B84C] transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
            <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z" />
          </svg>
          <span className="font-bold text-white text-[13px] tracking-[0.08em] uppercase">OYEN GRID.</span>
        </Link>

        {/* Desktop Navigation Row */}
        <nav className="hidden lg:flex items-center gap-[40px] justify-center">
          {navItems.map((item) => {
            if (item.type === "link") {
              return (
                <Link 
                  key={item.label}
                  href={item.href!} 
                  className={cn(
                    "text-[12px] font-semibold tracking-wide transition-colors duration-200",
                    activeMenu === null ? "text-white/60 hover:text-white" : "text-white/40 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            }

            const menu = navigationData.find(m => m.label === item.label)!;
            return (
              <div 
                key={menu.label} 
                className="relative flex items-center h-[68px]"
                onMouseEnter={() => setActiveMenu(menu.label)}
              >
                <button 
                  onFocus={() => setActiveMenu(menu.label)}
                  className={cn(
                    "text-[12px] font-semibold tracking-wide h-8 px-2 flex items-center gap-1 transition-colors duration-200 cursor-pointer",
                    activeMenu === menu.label ? "text-[#E2B84C]" : "text-white/60 hover:text-white"
                  )}
                >
                  <span>{menu.label}</span>
                  <ChevronDown className={cn("w-3 h-3 transition-transform duration-300 opacity-40", activeMenu === menu.label && "rotate-180 text-[#E2B84C] opacity-100")} />
                </button>
              </div>
            );
          })}
        </nav>

        {/* Right utilities aligned cleanly */}
        <div className="flex items-center gap-6">
          <Link 
            href="/enterprise-sales" 
            className="hidden sm:inline-block text-[11px] font-semibold text-white/50 hover:text-white transition-colors tracking-wide"
          >
            Enterprise Sales
          </Link>

          {/* Hamburger Menu (visible on all breakpoints to access solutions/infrastructure etc.) */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="p-1.5 text-white/60 hover:text-white cursor-pointer"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* MEGA MENU DROPDOWN */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.99 }}
            onMouseLeave={() => setActiveMenu(null)}
            className="absolute top-[68px] left-1/2 -translate-x-1/2 w-[calc(100%-64px)] max-w-[1150px] bg-gradient-to-b from-[#070707]/98 to-[#050505]/99 backdrop-blur-[24px] border border-white/10 rounded-[24px] shadow-[0_40px_100px_rgba(0,0,0,0.85)] p-6 grid grid-cols-2 lg:grid-cols-4 gap-4 z-[110] overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
            
            {navigationData.find(m => m.label === activeMenu)?.items.map((item, i) => (
              <Link 
                key={item.title} 
                href={item.href}
                onClick={() => setActiveMenu(null)}
                className="p-4 rounded-xl hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all duration-500 group relative z-10 hover:shadow-[0_0_20px_rgba(226,184,76,0.08)] hover:border-[#E2B84C]/15"
              >
                <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/5 flex items-center justify-center mb-3.5 group-hover:bg-[#E2B84C]/10 group-hover:border-[#E2B84C]/30 transition-all duration-500">
                  <item.icon className="w-4.5 h-4.5 text-white/40 group-hover:text-[#E2B84C] transition-colors" />
                </div>
                <h4 className="text-[13px] font-bold text-white mb-1 tracking-tight group-hover:text-[#E2B84C] transition-colors">{item.title}</h4>
                <p className="text-[11px] text-white/30 leading-relaxed font-medium group-hover:text-white/50 transition-colors">{item.desc}</p>
              </Link>
            ))}
            
            <div className="lg:col-span-4 mt-4 pt-5 border-t border-white/5 flex items-center justify-between relative z-10 px-2">
              <div className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#E2B84C] animate-pulse" />
                 <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">
                   {navigationData.find(m => m.label === activeMenu)?.status}
                 </span>
              </div>
              <Link 
                href={navigationData.find(m => m.label === activeMenu)?.href || "#"} 
                onClick={() => setActiveMenu(null)}
                className="flex items-center gap-1.5 group/link text-[11px] font-black text-[#E2B84C] uppercase tracking-widest transition-colors hover:text-[#FFCF68]"
              >
                {navigationData.find(m => m.label === activeMenu)?.cta} →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE/SIDEBAR DRAWER MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed inset-0 z-[200] bg-[#050505] flex flex-col"
          >
            <div className="h-[68px] flex items-center justify-between px-8 border-b border-white/5">
              <span className="font-bold text-white uppercase tracking-tight text-[15px]">OYEN GRID</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white/40 cursor-pointer">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              {navigationData.map((menu) => (
                <div key={menu.label} className="space-y-4">
                  <h3 className="text-[11px] font-black text-[#E2B84C] uppercase tracking-[0.4em]">{menu.label}</h3>
                  <div className="grid gap-6 pl-2">
                    {menu.items.map((item) => (
                      <Link key={item.title} href={item.href} onClick={() => setMobileMenuOpen(false)} className="flex items-start gap-4 group">
                        <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                          <item.icon className="w-3.5 h-3.5 text-white/40" />
                        </div>
                        <div>
                          <div className="text-[13px] font-bold text-white group-hover:text-[#E2B84C] transition-colors">{item.title}</div>
                          <div className="text-[11px] text-white/30">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-4 space-y-4">
                <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="block text-[13px] font-bold text-white">Pricing</Link>
                <Link href="/enterprise-sales" onClick={() => setMobileMenuOpen(false)} className="block text-[13px] font-bold text-white/60">Enterprise Sales</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── ROW 3: ANNOUNCEMENT BAR (Height: 40px base, py-6 padding) ──────────────

export function AnnouncementBar() {
  return (
    <div className="relative pt-[68px] w-full z-[60]">
      <div className="py-6 bg-[#050505]/90 backdrop-blur-md border-b border-white/5 flex flex-col items-center justify-center gap-2 px-8">
        {/* Announcement text */}
        <span className="text-[13.5px] font-medium text-white/80 text-center tracking-wide leading-relaxed">
          Operational Infrastructure for Institutional Delivery
        </span>

        {/* CTA directly underneath */}
        <Link 
          href="/infrastructure" 
          className="text-[13.5px] font-semibold text-[#E2B84C] hover:text-[#FFCF68] transition-colors duration-200 text-center tracking-wide"
        >
          Explore Infrastructure →
        </Link>
      </div>
    </div>
  );
}
