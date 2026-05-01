"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, Menu, X, Layout, BarChart3, Zap, 
  Rocket, Building2, Heart, BookOpen, FileText, Newspaper
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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b ${
        isScrolled
          ? "bg-[#0B0B0C]/80 backdrop-blur-xl border-[rgba(255,255,255,0.06)] py-3 shadow-2xl"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-9 h-9 bg-[#1A1A1D] rounded-xl flex items-center justify-center border border-[rgba(255,255,255,0.06)] group-hover:border-[#C8A95A]/50 transition-all duration-500">
              <span className="text-white font-bold text-sm tracking-widest group-hover:text-[#C8A95A] transition-colors">OG</span>
            </div>
            <span className="text-white font-bold tracking-tight text-lg group-hover:text-white/90 transition-colors">OYEN GRID</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_MENU.map((item) => (
              <div
                key={item.label}
                className="relative px-2"
                onMouseEnter={() => item.type === "dropdown" && setActiveDropdown(item.label)}
                onMouseLeave={() => item.type === "dropdown" && setActiveDropdown(null)}
              >
                {item.type === "link" ? (
                  <Link
                    href={item.href!}
                    className={`text-[14px] font-semibold tracking-wide transition-all duration-300 px-3 py-2 rounded-lg ${
                      pathname === item.href ? "text-[#C8A95A] bg-[#C8A95A]/5" : "text-[#9CA3AF] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div className={`flex items-center gap-1.5 cursor-pointer text-[#9CA3AF] hover:text-white transition-all duration-300 px-3 py-2 rounded-lg ${activeDropdown === item.label ? "text-white bg-white/5" : ""}`}>
                    <span className="text-[14px] font-semibold tracking-wide">{item.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180 text-[#C8A95A]" : "opacity-50"}`} />
                  </div>
                )}

                {/* Dropdown Panel */}
                {item.type === "dropdown" && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="w-[320px] bg-[#121214] border border-[rgba(255,255,255,0.08)] rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-2.5 overflow-hidden">
                          {item.items?.map((subItem) => {
                            const Icon = subItem.icon;
                            return (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                className="group flex items-start gap-4 p-3.5 rounded-[14px] transition-all duration-300 hover:bg-white/[0.03] active:scale-[0.98]"
                              >
                                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0 group-hover:border-[#C8A95A]/30 group-hover:bg-[#C8A95A]/5 transition-all duration-300">
                                  <Icon className="w-5 h-5 text-[#9CA3AF] group-hover:text-[#C8A95A] transition-colors" />
                                </div>
                                <div>
                                  <div className="text-[14px] font-bold text-white mb-0.5 group-hover:text-[#C8A95A] transition-colors">{subItem.title}</div>
                                  <div className="text-[12px] text-[#71717A] leading-relaxed group-hover:text-[#A1A1AA] transition-colors">{subItem.desc}</div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-5">
            <Link href="/login" className="text-[14px] font-bold text-[#9CA3AF] hover:text-white transition-colors">
              Login
            </Link>
            <Link
              href="/get-started"
              className="relative px-6 py-2.5 rounded-xl text-[14px] font-bold transition-all duration-500 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#C9A86A] transition-transform duration-500 group-hover:scale-105" />
              <span className="relative z-10 text-[#0B0B0C]">Get Started</span>
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
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0B0B0C] border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              {NAV_MENU.map((item) => (
                <div key={item.label} className="space-y-4">
                  <div className="text-[12px] font-bold text-[#71717A] uppercase tracking-widest">{item.label}</div>
                  <div className="grid grid-cols-1 gap-4">
                    {item.type === "link" ? (
                      <Link href={item.href!} className="text-[16px] font-bold text-white hover:text-[#C8A95A]">
                        {item.label}
                      </Link>
                    ) : (
                      item.items?.map((subItem) => (
                        <Link key={subItem.title} href={subItem.href} className="flex items-center gap-3 text-[16px] font-bold text-white hover:text-[#C8A95A]">
                          <subItem.icon className="w-5 h-5 text-[#C8A95A]" />
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
                <Link href="/get-started" className="text-center py-3 rounded-xl bg-[#C8A95A] text-[#0B0B0C] font-bold">
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
