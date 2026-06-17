"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  ChevronDown, X, Menu, Radio, Activity, Target, Zap, Globe, 
  Users, Layers, LineChart, BookOpen, GraduationCap, Building2, 
  Boxes, HelpCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// ─── Navigation Data ────────────────────────────────────────────────────────

const navigationData = [
  {
    label: "Solutions",
    status: "WHO OYEN GRID SERVES",
    cta: "Explore Solutions",
    href: "/solutions",
    items: [
      { title: "Bootcamps & Training", desc: "Structured program delivery for fellowship and training organisations.", icon: GraduationCap, href: "/solutions/bootcamps-training" },
      { title: "Webinars & Events", desc: "Host sessions, manage signups, and track participant attendance.", icon: Radio, href: "/solutions/webinars-events" },
      { title: "Schools & Academies", desc: "Manage classes, students, and institutional reporting seamlessly.", icon: Building2, href: "/solutions/education-institutions" },
      { title: "Corporate Training", desc: "Run internal upskilling programs and prove training impact.", icon: Target, href: "/solutions/enterprise-operations" }
    ]
  },
  {
    label: "Features",
    status: "CORE PLATFORM CAPABILITIES",
    cta: "Explore Features",
    href: "/features",
    items: [
      { title: "Program Management", desc: "Create, manage, and scale your structured curriculums.", icon: Boxes, href: "/features/programme-management" },
      { title: "Learner Management", desc: "Participant registration, metrics, and engagement insights.", icon: Users, href: "/features/participant-management" },
      { title: "OYEN Live", desc: "Real-time delivery infrastructure and automatic presence logs.", icon: Zap, href: "/features/oyen-live" },
      { title: "Analytics & AI", desc: "Deep operational insights, report export, and predictions.", icon: LineChart, href: "/features/analytics-ai" }
    ]
  },
  {
    label: "Resources",
    status: "LEARNING AND COMPANY RESOURCES",
    cta: "Explore Resources",
    href: "/resources",
    items: [
      { title: "Documentation", desc: "Platform deployment guides and technical implementation resources.", icon: BookOpen, href: "/resources/docs" },
      { title: "Case Studies", desc: "Customer success outcomes and fellowship success stories.", icon: Activity, href: "/resources/case-studies" },
      { title: "Blog", desc: "Read latest insights, program management updates, and news.", icon: Globe, href: "/resources/blog" },
      { title: "Help Center", desc: "Comprehensive support articles and answers to FAQs.", icon: HelpCircle, href: "/resources/help" }
    ]
  },
  {
    label: "Company",
    status: "ABOUT OYEN GRID",
    cta: "Explore Company",
    href: "/company",
    items: [
      { title: "About Us", desc: "Learn about our company vision, mission, and leadership.", icon: Users, href: "/company/about" },
      { title: "Careers", desc: "Find open positions and join the OYEN engineering team.", icon: Zap, href: "/company/careers" },
      { title: "Partners", desc: "See partner integrations and ecosystem opportunities.", icon: Globe, href: "/company/partners" },
      { title: "Contact", desc: "Reach out to our customer support and sales teams.", icon: Radio, href: "/company/contact" }
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
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
        <nav className="hidden lg:flex items-center gap-[36px] justify-center">
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
                onMouseLeave={() => setActiveMenu(null)}
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

                {/* COMPACT POP-OVER DROPDOWN */}
                <AnimatePresence>
                  {activeMenu === menu.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-[60px] left-1/2 -translate-x-1/2 pt-2 z-[110] w-[340px] pointer-events-auto"
                    >
                      <div className="bg-[#0D0D11]/98 border border-white/10 backdrop-blur-xl rounded-[18px] p-3.5 shadow-[0_25px_60px_rgba(0,0,0,0.8)] flex flex-col gap-1 relative overflow-hidden">
                        {/* Thin golden glow header accent line */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E2B84C]/40 to-transparent pointer-events-none" />

                        {menu.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            onClick={() => setActiveMenu(null)}
                            className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all duration-200 group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#E2B84C]/10 group-hover:border-[#E2B84C]/30 transition-all duration-300">
                              <subItem.icon className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#E2B84C] transition-colors" />
                            </div>
                            <div className="space-y-0.5">
                              <h4 className="text-[12px] font-bold text-white tracking-tight group-hover:text-[#E2B84C] transition-colors">
                                {subItem.title}
                              </h4>
                              <p className="text-[10.5px] text-[#9CA3AF] leading-relaxed font-light group-hover:text-white/70 transition-colors">
                                {subItem.desc}
                              </p>
                            </div>
                          </Link>
                        ))}

                        {/* Dropdown bottom strip */}
                        <div className="mt-1.5 pt-2.5 border-t border-white/5 px-2.5 flex justify-end">
                          <Link
                            href={menu.href}
                            onClick={() => setActiveMenu(null)}
                            className="inline-flex items-center gap-1 text-[9.5px] font-bold text-[#E2B84C] hover:text-[#FFCF68] tracking-widest uppercase transition-colors"
                          >
                            {menu.cta} <span className="text-xs">→</span>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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

          {/* Hamburger Menu */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="p-1.5 text-white/60 hover:text-white cursor-pointer"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

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
          The operating system for training delivery
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
