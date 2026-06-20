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
        
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/oyen-grid-logo.png"
            alt="OYEN GRID"
            className="h-9 w-auto object-contain brightness-100 group-hover:brightness-110 transition-all duration-300"
            style={{ filter: "drop-shadow(0 0 6px rgba(226,184,76,0.25))" }}
          />
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
                      initial={{ opacity: 0, y: 4, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.98 }}
                      transition={{ duration: 0.12, ease: "easeOut" }}
                      className="absolute top-[60px] left-1/2 -translate-x-1/2 pt-2 z-[110] w-[280px] pointer-events-auto"
                    >
                      <div className="bg-[#0E0B09]/90 border border-white/[0.08] backdrop-blur-xl rounded-xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col gap-0.5">
                        {menu.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            onClick={() => setActiveMenu(null)}
                            className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/[0.04] transition-all duration-150 group"
                          >
                            <subItem.icon className="w-4 h-4 text-[#C5B9AC] group-hover:text-[#B58750] transition-colors mt-0.5 shrink-0" />
                            <div className="flex flex-col">
                              <span className="text-[11.5px] font-semibold text-[#FAF6EE] group-hover:text-[#B58750] transition-colors leading-none mb-1">
                                {subItem.title}
                              </span>
                              <span className="text-[10px] text-[#C5B9AC]/70 leading-normal font-light">
                                {subItem.desc}
                              </span>
                            </div>
                          </Link>
                        ))}
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/oyen-grid-logo.png"
                alt="OYEN GRID"
                className="h-8 w-auto object-contain"
                style={{ filter: "drop-shadow(0 0 4px rgba(226,184,76,0.2))" }}
              />
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
