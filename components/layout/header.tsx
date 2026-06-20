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
      { title: "AI Session Notes", desc: "Auto-generated structured notes for every session.", icon: FileText, href: "/features/analytics-ai#session-notes" },
      { title: "AI Summaries", desc: "Instant program and cohort performance summaries.", icon: Brain, href: "/features/analytics-ai#summaries" },
      { title: "AI Coordination", desc: "Smart scheduling and facilitator coordination tools.", icon: Bot, href: "/features/analytics-ai#coordination" },
      { title: "Automated Alerts", desc: "Intelligent notifications for attendance and progress.", icon: BellRing, href: "/features/analytics-ai#alerts" },
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
      className="relative flex items-center h-[64px]"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <button
        className={cn(
          "flex items-center gap-1 text-[12.5px] font-semibold tracking-wide px-1 h-8 transition-colors duration-150 cursor-pointer",
          active ? "text-[#0A0D1F]" : "text-[#0A0D1F]/60 hover:text-[#0A0D1F]"
        )}
      >
        {(menu as { isAI?: boolean }).isAI && (
          <Sparkles className="w-3 h-3 text-[#D4A017] mr-0.5" />
        )}
        <span>{menu.label}</span>
        <ChevronDown
          className={cn(
            "w-3 h-3 transition-transform duration-200 opacity-50",
            active && "rotate-180 opacity-100 text-[#D4A017]"
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
              <div className="mb-1.5 mx-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#E2B84C]/10 to-transparent border border-[#E2B84C]/15 flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-[#E2B84C]" />
                <span className="text-[10px] font-bold text-[#E2B84C] tracking-widest uppercase">
                  OYEN AI — Powered by intelligent automation
                </span>
              </div>
            )}
            <div className="bg-white/95 border border-[#0A0D1F]/10 backdrop-blur-xl rounded-xl p-1.5 shadow-[0_12px_40px_rgba(10,13,31,0.08)] flex flex-col gap-0.5">
              {menu.items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#0A0D1F]/5 transition-all duration-150 group"
                >
                  <div className={cn(
                    "w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors",
                    (menu as { isAI?: boolean }).isAI
                      ? "bg-[#D4A017]/10 group-hover:bg-[#D4A017]/20"
                      : "bg-[#0A0D1F]/5 group-hover:bg-[#0A0D1F]/10"
                  )}>
                    <item.icon className={cn(
                      "w-3.5 h-3.5 transition-colors",
                      (menu as { isAI?: boolean }).isAI
                        ? "text-[#D4A017]"
                        : "text-[#0A0D1F]/40 group-hover:text-[#0A0D1F]"
                    )} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[12px] font-semibold text-[#0A0D1F]/90 group-hover:text-[#0A0D1F] leading-none mb-1 transition-colors">
                      {item.title}
                    </span>
                    <span className="text-[10.5px] text-[#55534E] leading-snug font-normal">
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
  const headerRef = useRef<HTMLElement>(null);

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
        "fixed top-0 left-0 right-0 z-[100] h-[64px] flex items-center transition-all duration-300",
        "bg-[#FAFAF8]/95 border-b border-[#0A0D1F]/10",
        scrolled && "shadow-[0_4px_20px_rgba(10,13,31,0.05)] backdrop-blur-xl"
      )}
    >
      <div className="w-full max-w-[1320px] mx-auto px-6 flex items-center justify-between gap-4">

        {/* ── LEFT: Logo + primary nav ───────────────────────────────────── */}
        <div className="flex items-center gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 group mr-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/oyen-grid-icon.png"
              alt=""
              aria-hidden="true"
              className="w-7 h-7 object-contain"
            />
            <span className="font-bold text-[#0A0D1F] text-[13px] tracking-[0.07em] uppercase group-hover:text-[#D4A017] transition-colors duration-200">
              OYEN GRID
            </span>
          </Link>

          {/* Primary nav — desktop only */}
          <nav className="hidden lg:flex items-center gap-1">
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
              className="text-[12.5px] font-semibold text-[#0A0D1F]/60 hover:text-[#0A0D1F] tracking-wide px-1 transition-colors duration-150"
            >
              Pricing
            </Link>
          </nav>
        </div>

        {/* ── RIGHT: Secondary nav + CTAs ───────────────────────────────── */}
        <div className="flex items-center gap-1">

          {/* Search icon */}
          <button className="hidden lg:flex p-2 text-[#0A0D1F]/40 hover:text-[#0A0D1F] transition-colors rounded-lg hover:bg-[#0A0D1F]/5 cursor-pointer">
            <Search className="w-4 h-4" />
          </button>

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
          <div className="hidden lg:block w-px h-4 bg-[#0A0D1F]/10 mx-2" />

          {/* Sign In */}
          <Link
            href="/sign-in"
            className="hidden lg:inline-block text-[12px] font-semibold text-[#0A0D1F]/60 hover:text-[#0A0D1F] transition-colors px-2 py-1.5"
          >
            Sign In
          </Link>

          {/* Support */}
          <Link
            href="/resources/help"
            className="hidden lg:inline-block text-[12px] font-semibold text-[#0A0D1F]/60 hover:text-[#0A0D1F] transition-colors px-2 py-1.5"
          >
            Support
          </Link>

          {/* Divider */}
          <div className="hidden lg:block w-px h-4 bg-[#0A0D1F]/10 mx-2" />

          {/* Contact Sales — outline */}
          <Link
            href="/company/enterprise-sales"
            className="hidden lg:inline-flex items-center px-3.5 py-1.5 rounded-lg border border-[#0A0D1F]/20 hover:border-[#D4A017] text-[11.5px] font-bold text-[#0A0D1F]/80 hover:text-[#0A0D1F] tracking-wide uppercase transition-all duration-200"
          >
            Contact Sales
          </Link>

          {/* Book a Demo — filled */}
          <Link
            href="/company/enterprise-sales"
            className="hidden lg:inline-flex items-center px-4 py-1.5 rounded-lg bg-[#E2B84C] hover:bg-[#F5CC6A] text-black text-[11.5px] font-bold tracking-wide uppercase transition-all duration-200 shadow-sm"
          >
            Book a Demo
          </Link>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden ml-2 p-1.5 text-[#0A0D1F]/60 hover:text-[#0A0D1F] cursor-pointer"
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
            className="fixed inset-0 z-[200] bg-[#07070A] flex flex-col"
          >
            {/* Drawer header */}
            <div className="h-[64px] flex items-center justify-between px-6 border-b border-white/[0.06] shrink-0">
              <div className="flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/oyen-grid-icon.png"
                  alt=""
                  aria-hidden="true"
                  className="w-7 h-7 object-contain"
                  style={{ mixBlendMode: "screen" }}
                />
                <span className="font-bold text-white text-[13px] tracking-[0.07em] uppercase">
                  OYEN GRID
                </span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-white/40 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer body */}
            <div className="flex-1 overflow-y-auto px-6 py-8 space-y-8">
              {ALL_MENUS.map((menu) => (
                <div key={menu.label} className="space-y-3">
                  <h3 className={cn(
                    "text-[10px] font-black uppercase tracking-[0.4em]",
                    (menu as { isAI?: boolean }).isAI ? "text-[#E2B84C] flex items-center gap-1.5" : "text-white/30"
                  )}>
                    {(menu as { isAI?: boolean }).isAI && <Sparkles className="w-3 h-3" />}
                    {menu.label}
                  </h3>
                  <div className="flex flex-col gap-4 pl-1">
                    {menu.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-start gap-3 group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-white/[0.04] flex items-center justify-center shrink-0">
                          <item.icon className="w-3.5 h-3.5 text-white/35" />
                        </div>
                        <div>
                          <div className="text-[13px] font-semibold text-white group-hover:text-[#E2B84C] transition-colors">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-white/30 mt-0.5">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {/* Mobile footer links */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-col gap-3">
                <Link href="/pricing" onClick={() => setMobileOpen(false)} className="text-[13px] font-bold text-white">
                  Pricing
                </Link>
                <Link href="/sign-in" onClick={() => setMobileOpen(false)} className="text-[13px] font-semibold text-white/50">
                  Sign In
                </Link>
                <Link href="/resources/help" onClick={() => setMobileOpen(false)} className="text-[13px] font-semibold text-white/50">
                  Support
                </Link>
              </div>
              <div className="flex flex-col gap-3 pb-8">
                <Link
                  href="/company/enterprise-sales"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center py-3 rounded-xl border border-white/20 text-[12px] font-bold text-white uppercase tracking-wide"
                >
                  Contact Sales
                </Link>
                <Link
                  href="/company/enterprise-sales"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center py-3 rounded-xl bg-[#E2B84C] text-black text-[12px] font-bold uppercase tracking-wide"
                >
                  Book a Demo
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
      <div className="py-6 bg-[#F3EFE5] border-b border-[#0A0D1F]/5 flex flex-col items-center justify-center gap-2 px-8">
        <span className="text-[13.5px] font-medium text-[#0A0D1F]/80 text-center tracking-wide leading-relaxed">
          The operating system for training delivery
        </span>
        <Link
          href="/infrastructure"
          className="text-[13.5px] font-semibold text-[#D4A017] hover:text-[#B38012] transition-colors duration-200 text-center tracking-wide"
        >
          Explore Infrastructure →
        </Link>
      </div>
    </div>
  );
}
