"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

const NAV_MENU = [
  { label: "Features", href: "/features", type: "link" },
  {
    label: "Solutions",
    type: "dropdown",
    items: [
      { title: "Bootcamps", href: "/solutions/bootcamps" },
      { title: "Training Orgs", href: "/solutions/training" },
      { title: "Corporate", href: "/solutions/corporate" },
    ],
  },
  {
    label: "Use Cases",
    type: "dropdown",
    items: [
      { title: "Cohort Management", href: "/use-cases/cohorts" },
      { title: "Performance Tracking", href: "/use-cases/performance" },
      { title: "Live Delivery", href: "/use-cases/live" },
    ],
  },
  { label: "Pricing", href: "/pricing", type: "link" },
  { label: "Resources", href: "/resources", type: "link" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out border-b ${
        isScrolled
          ? "bg-[#0B0B0C]/90 backdrop-blur-md border-[rgba(255,255,255,0.06)] py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-[#1A1A1D] rounded-md flex items-center justify-center border border-[rgba(255,255,255,0.06)]">
              <span className="text-white font-bold text-xs tracking-wider">OG</span>
            </div>
            <span className="text-white font-bold tracking-tight text-lg">OYEN GRID</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
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
                    className={`text-[15px] font-medium transition-colors duration-300 ${
                      pathname === item.href ? "text-[#C8A96A]" : "text-[#9CA3AF] hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div className="flex items-center gap-1 cursor-pointer text-[#9CA3AF] hover:text-white transition-colors duration-300 group py-2">
                    <span className="text-[15px] font-medium">{item.label}</span>
                    <ChevronDown className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                  </div>
                )}

                {/* Dropdown Panel */}
                {item.type === "dropdown" && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="w-[240px] bg-[#121214] border border-[rgba(255,255,255,0.06)] rounded-[12px] shadow-2xl p-2 flex flex-col gap-1">
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className="px-4 py-2.5 rounded-[8px] text-[14px] text-[#9CA3AF] hover:text-white hover:bg-[#1A1A1D] transition-colors"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/login" className="text-[15px] font-medium text-[#9CA3AF] hover:text-white transition-colors">
              Login
            </Link>
            <Link
              href="/get-started"
              className="bg-[#C8A96A] hover:bg-[#B39355] text-[#0B0B0C] px-5 py-2.5 rounded-lg text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>

        </div>
      </div>
    </header>
  );
}
