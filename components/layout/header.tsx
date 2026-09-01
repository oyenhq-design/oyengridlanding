"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ChevronDown, X, Menu, Radio, Activity, Target, Zap, Globe,
  Users, Layers, LineChart, BookOpen, GraduationCap, Building2,
  Boxes, HelpCircle, Sparkles, Brain, Bot, FileText, BellRing,
  Search,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useSearch } from "@/context/search-context";

// ─── Nav Data ───────────────────────────────────────────────────────────────

const LEFT_MENUS = [
  {
    label: "Products",
    items: [
      { title: "Program Management", desc: "Create, manage, and scale structured training programs.", icon: Boxes, href: "/features/programme-management" },
      { title: "Learner Management", desc: "Registration, tracking, and participant engagement.", icon: Users, href: "/features/participant-management" },
      { title: "OYEN Live", desc: "Real-time delivery and automatic attendance logs.", icon: Zap, href: "/features/oyen-live" },
      { title: "Analytics & Reports", desc: "Operational insights, exports, and impact reports.", icon: LineChart, href: "/features/analytics-ai" },
    ],
  },
  {
    label: "AI",
    isAI: true,
    items: [
      { title: "AI Session Notes", desc: "Auto-generated structured notes for every session.", icon: FileText, href: "/features/ai-session-notes" },
      { title: "AI Summaries", desc: "Instant program and cohort performance summaries.", icon: Brain, href: "/features/ai-summaries" },
      { title: "AI Coordination", desc: "Smart scheduling and facilitator coordination tools.", icon: Bot, href: "/features/ai-coordination" },
      { title: "Automated Alerts", desc: "Intelligent notifications for attendance and progress.", icon: BellRing, href: "/features/automated-alerts" },
    ],
  },
  {
    label: "Solutions",
    items: [
      { title: "Bootcamps & Training", desc: "Structured delivery for fellowships and training orgs.", icon: GraduationCap, href: "/solutions/bootcamps-training" },
      { title: "Webinars & Events", desc: "Host sessions, manage signups, and track attendance.", icon: Radio, href: "/solutions/webinars-events" },
      { title: "Schools & Academies", desc: "Manage classes, students, and institutional reporting.", icon: Building2, href: "/solutions/education-institutions" },
      { title: "Corporate Training", desc: "Run internal upskilling and prove training impact.", icon: Target, href: "/solutions/enterprise-operations" },
    ],
  },
];

const RIGHT_MENUS = [
  {
    label: "Resources",
    items: [
      { title: "Documentation", desc: "Deployment guides and technical resources.", icon: BookOpen, href: "/resources/docs" },
      { title: "Case Studies", desc: "Customer success stories and impact reports.", icon: Activity, href: "/resources/case-studies" },
      { title: "Blog", desc: "Platform news, insights, and program management tips.", icon: Globe, href: "/resources/blog" },
      { title: "Help Center", desc: "Support articles and answers to FAQs.", icon: HelpCircle, href: "/resources/help" },
    ],
  },
];

// Flat mobile sections (all menus combined)
const ALL_MENUS = [
  ...LEFT_MENUS,
  ...RIGHT_MENUS,
  {
    label: "Company",
    items: [
      { title: "About Us", desc: "Our vision, mission, and leadership.", icon: Users, href: "/company/about" },
      { title: "Careers", desc: "Open positions on the OYEN engineering team.", icon: Zap, href: "/company/careers" },
      { title: "Partners", desc: "Integrations and ecosystem opportunities.", icon: Globe, href: "/company/partners" },
      { title: "Contact", desc: "Reach our support and sales teams.", icon: Radio, href: "/company/contact" },
    ],
  },
];

// ─── Dropdown ───────────────────────────────────────────────────────────────

function NavDropdown({
  menu,
  active,
  onEnter,
  onLeave,
}: {
  menu: typeof LEFT_MENUS[0];
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      className="relative flex items-center h-[76px]"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <button
        className={cn(
          "flex items-center gap-1.5 text-[15.5px] font-bold tracking-wide px-1.5 h-9 transition-colors duration-150 cursor-pointer",
          active ? "text-[#0B1220]" : "text-[#344054] hover:text-[#0B5CFF]"
        )}
      >
        {(menu as { isAI?: boolean }).isAI && (
          <Sparkles className="w-3.5 h-3.5 text-[#D4A017] mr-0.5" />
        )}
        <span>{menu.label}</span>
        <ChevronDown
          className={cn(
            "w-3.5 h-3.5 transition-transform duration-200 opacity-50",
            active && "rotate-180 opacity-100 text-[#0B5CFF]"
          )}
        />
      </button>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.13, ease: "easeOut" }}
            className="absolute top-[58px] left-1/2 -translate-x-1/2 z-[110] w-[300px] pt-2 pointer-events-auto"
          >
            {/* AI badge strip */}
            {(menu as { isAI?: boolean }).isAI && (
              <div className="mb-1.5 mx-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#D4A017]/10 to-transparent border border-[#D4A017]/20 flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-[#D4A017]" />
                <span className="text-[10px] font-bold text-[#A97800] tracking-widest uppercase">
                  OYEN AI — Powered by intelligent automation
                </span>
              </div>
            )}
            <div className="bg-white border border-[#E8E5DF] backdrop-blur-xl rounded-xl p-1.5 shadow-[0_12px_40px_rgba(7,20,38,0.10)] flex flex-col gap-0.5">
              {menu.items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#FBFAF7] transition-all duration-150 group"
                >
                  <div className={cn(
                    "w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors",
                    (menu as { isAI?: boolean }).isAI
                      ? "bg-[#C99718]/10 group-hover:bg-[#C99718]/20"
                      : "bg-[#0B1220]/5 group-hover:bg-[#0B1220]/10"
                  )}>
                    <item.icon className={cn(
                      "w-3.5 h-3.5 transition-colors",
                      (menu as { isAI?: boolean }).isAI
                        ? "text-[#C99718]"
                        : "text-[#0B1220]/40 group-hover:text-[#0B1220]"
                    )} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[12px] font-semibold text-[#0B1220]/90 group-hover:text-[#0B5CFF] leading-none mb-1 transition-colors">
                      {item.title}
                    </span>
                    <span className="text-[10.5px] text-[#667085] leading-snug font-normal">
                      {item.desc}
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
}

// ─── Header ─────────────────────────────────────────────────────────────────

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const { openSearch } = useSearch();

  const toggleMobileMenu = (label: string) => {
    setMobileActiveMenu(mobileActiveMenu === label ? null : label);
  };

  useEffect(() => {
    if (!mobileOpen) {
      setMobileActiveMenu(null);
    }
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActiveMenu(null); };
    const onClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    window.addEventListener("scroll", onScroll);
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClickOutside);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] h-[76px] flex items-center transition-all duration-300",
        scrolled 
          ? "bg-white border-b border-[#E8E5DF] shadow-[0_4px_20px_rgba(7,20,38,0.06)] backdrop-blur-xl"
          : "bg-white/95 border-b border-[#E8E5DF]/60"
      )}
    >
      <div className="w-full max-w-full mx-auto px-6 flex items-center justify-between gap-4">

        {/* ── LEFT: Logo + primary nav ───────────────────────────────────── */}
        <div className="flex items-center gap-10">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3.5 shrink-0 group mr-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/oyen-grid-icon-clean.png"
              alt=""
              aria-hidden="true"
              className="w-13 h-13 object-contain"
            />
            <span className="font-extrabold text-[#0B1220] text-[20px] tracking-[0.07em] uppercase group-hover:text-[#0B5CFF] transition-colors duration-200">
              OYEN GRID
            </span>
          </Link>

          {/* Primary nav — desktop only */}
          <nav className="hidden lg:flex items-center gap-3.5">
            {LEFT_MENUS.map((menu) => (
              <NavDropdown
                key={menu.label}
                menu={menu}
                active={activeMenu === menu.label}
                onEnter={() => setActiveMenu(menu.label)}
                onLeave={() => setActiveMenu(null)}
              />
            ))}
            <Link
              href="/pricing"
              className="text-[15.5px] font-bold text-[#344054] hover:text-[#0B5CFF] tracking-wide px-2 h-9 flex items-center transition-colors duration-150"
            >
              Pricing
            </Link>
          </nav>
        </div>

        {/* ── RIGHT: Secondary nav (CTAs removed) ───────────────────────── */}
        <div className="flex items-center gap-5">

          {/* Inline Active Search Bar & Suggestion Dropdown */}
          <div className="relative flex items-center">
            <HeaderInlineSearch />
          </div>

          {/* Resources dropdown */}
          <div className="hidden lg:flex items-center">
            {RIGHT_MENUS.map((menu) => (
              <NavDropdown
                key={menu.label}
                menu={menu}
                active={activeMenu === menu.label}
                onEnter={() => setActiveMenu(menu.label)}
                onLeave={() => setActiveMenu(null)}
              />
            ))}
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-5 bg-[#E8E5DF] mx-1" />

          {/* Support */}
          <Link
            href="/resources/help"
            className="hidden lg:inline-block text-[15.5px] font-bold text-[#344054] hover:text-[#0B5CFF] transition-colors px-2 py-1.5"
          >
            Support
          </Link>

          {/* Sign In */}
          <Link
            href="/sign-in"
            className="hidden lg:inline-block text-[15.5px] font-bold text-[#344054] hover:text-[#0B5CFF] transition-colors px-2 py-1.5"
          >
            Sign In
          </Link>

          {/* Get Started — Register CTA */}
          <Link
            href="/register"
            className="hidden lg:inline-flex items-center gap-1.5 h-11 px-6 rounded-full bg-[#0B5CFF] hover:bg-[#084BD8] text-[#FFFFFF] text-[14px] font-black uppercase tracking-wider transition-all duration-200 hover:shadow-[0_0_14px_rgba(11,92,255,0.30)] active:scale-[0.97]"
          >
            Get Started
          </Link>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden ml-2 p-1.5 text-[#344054] hover:text-[#111827] cursor-pointer"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* ── MOBILE DRAWER ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.22 }}
            className="fixed inset-0 z-[200] bg-[#0B1220] flex flex-col"
          >
            {/* Drawer header */}
            <div className="h-[64px] flex items-center justify-between px-6 border-b border-white/[0.08] shrink-0">
              <div className="flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/oyen-grid-icon-clean.png"
                  alt=""
                  aria-hidden="true"
                  className="w-7 h-7 object-contain"
                />
                <span className="font-bold text-white text-[13px] tracking-[0.07em] uppercase">
                  OYEN GRID
                </span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-[#344054]/40 hover:text-[#111827] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer body */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
              {ALL_MENUS.map((menu) => {
                const isOpen = mobileActiveMenu === menu.label;
                return (
                  <div key={menu.label} className="space-y-2 border-b border-white/[0.08] pb-3">
                    <button
                      onClick={() => toggleMobileMenu(menu.label)}
                      className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer py-1"
                    >
                      <h3 className={cn(
                        "text-[11.5px] font-black uppercase tracking-[0.3em] flex items-center gap-1.5",
                        (menu as { isAI?: boolean }).isAI ? "text-[#C99718]" : "text-white/80"
                      )}>
                        {(menu as { isAI?: boolean }).isAI && <Sparkles className="w-3.5 h-3.5 text-[#C99718]" />}
                        {menu.label}
                      </h3>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 text-white/40 transition-transform duration-200",
                          isOpen && "rotate-180 text-[#0B5CFF] opacity-100"
                        )}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-4 pl-1.5 pt-2 pb-1.5">
                            {menu.items.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-start gap-3 group"
                              >
                                <div className="w-7 h-7 rounded-lg bg-white/[0.06] flex items-center justify-center shrink-0">
                                  <item.icon className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                  <div className="text-[13px] font-semibold text-white group-hover:text-[#0B5CFF] transition-colors leading-none">
                                    {item.title}
                                  </div>
                                  <div className="text-[11px] text-white/40 mt-1">{item.desc}</div>
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

              {/* Mobile footer links */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-col gap-3 pb-8">
                <Link href="/pricing" onClick={() => setMobileOpen(false)} className="text-[13px] font-bold text-white">
                  Pricing
                </Link>
                <Link href="/sign-in" onClick={() => setMobileOpen(false)} className="text-[13px] font-semibold text-white/50">
                  Sign In
                </Link>
                <Link href="/resources/help" onClick={() => setMobileOpen(false)} className="text-[13px] font-semibold text-white/50">
                  Support
                </Link>
                {/* Mobile Register CTA */}
                <Link
                  href="/register"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 w-full h-10 rounded-xl bg-[#0B5CFF] flex items-center justify-center text-[12.5px] font-extrabold uppercase tracking-wider text-[#FFFFFF] transition-all"
                >
                  Get Started — Create Account
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── Announcement Bar ───────────────────────────────────────────────────────

export function AnnouncementBar() {
  return (
    <div className="relative pt-[64px] w-full z-[60]">
      <div className="py-6 bg-transparent border-b border-transparent flex flex-col items-center justify-center gap-2 px-8">
        <span className="text-[13.5px] font-medium text-[#344054] text-center tracking-wide leading-relaxed">
          The intelligent workspace for modern organizations
        </span>
        <Link
          href="/infrastructure"
          className="text-[13.5px] font-bold text-[#0B5CFF] hover:text-[#084BD8] transition-colors duration-200 text-center tracking-wide"
        >
          Explore Infrastructure →
        </Link>
      </div>
    </div>
  );
}

// ─── Inline Header Search Component ─────────────────────────────────────────

function HeaderInlineSearch() {
  const [active, setActive] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  // Suggested links database
  const protocols = [
    { title: "Pricing & Plans", category: "Pricing", href: "/pricing" },
    { title: "Bootcamps & Training", category: "Solutions", href: "/solutions/bootcamps-training" },
    { title: "Webinars & Events", category: "Solutions", href: "/solutions/webinars-events" },
    { title: "Schools & Academies", category: "Solutions", href: "/solutions/education" },
    { title: "Corporate Training", category: "Solutions", href: "/solutions/enterprise" },
    { title: "Program Management", category: "Features", href: "/features/programme-management" },
    { title: "Learner Management", category: "Features", href: "/features/participant-management" },
    { title: "AI Coordination", category: "Features", href: "/features/ai-assistant" },
    { title: "Documentation Guides", category: "Resources", href: "/resources/docs" },
    { title: "Help Center Support FAQ", category: "Resources", href: "/resources/help" }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = query
    ? protocols.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      )
    : protocols.slice(0, 4);

  return (
    <div ref={containerRef} className="relative flex items-center justify-end">
      <AnimatePresence initial={false}>
        {!active ? (
          <motion.button
            key="search-trigger"
            onClick={() => setActive(true)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="p-2 text-[#111827]/40 hover:text-[#111827] transition-colors rounded-lg hover:bg-[#F9F9F8] cursor-pointer mr-2"
          >
            <Search className="w-4 h-4" />
          </motion.button>
        ) : (
          <motion.div
            key="search-input-wrapper"
            initial={{ width: 40, opacity: 0 }}
            animate={{ width: 220, opacity: 1 }}
            exit={{ width: 40, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative flex items-center mr-2"
          >
            <input
              autoFocus
              type="text"
              placeholder="Search OYEN..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full h-8 pl-3 pr-8 text-[12px] bg-white border border-[#D4A017] rounded-lg text-[#111827] placeholder-[#667085] outline-none shadow-[0_2px_10px_rgba(7,20,38,0.08)]"
            />
            <button 
              onClick={() => { setActive(false); setQuery(""); }}
              className="absolute right-2 text-[#111827]/30 hover:text-[#111827] p-0.5 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Suggestion Dropdown - Only visible when query.length > 0 */}
      <AnimatePresence>
        {active && query.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-[40px] right-2 w-[280px] bg-white border border-[#E8E5DF] backdrop-blur-xl rounded-xl p-1.5 shadow-[0_12px_40px_rgba(7,20,38,0.10)] z-[200] flex flex-col gap-0.5"
          >
            <div className="px-2.5 py-1.5 text-[9px] font-black text-[#667085] uppercase tracking-[0.2em]">
              Search Results ({filtered.length})
            </div>
            {filtered.length > 0 ? (
              filtered.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => { setActive(false); setQuery(""); }}
                  className="flex flex-col p-2 rounded-lg hover:bg-[#FBFAF7] transition-all group"
                >
                  <span className="text-[12px] font-semibold text-[#111827] group-hover:text-[#D4A017] transition-colors">
                    {item.title}
                  </span>
                  <span className="text-[9.5px] text-[#667085]">
                    {item.category}
                  </span>
                </Link>
              ))
            ) : (
              <div className="p-4 text-center text-[#667085] text-[11px]">
                No protocols found.
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
