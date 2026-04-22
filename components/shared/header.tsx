"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X } from "lucide-react"

// Navigation Data Structure
const NAV_MENU = [
  {
    label: "Features",
    href: "/features",
    type: "link"
  },
  {
    label: "Solutions",
    type: "dropdown",
    items: [
      {
        title: "Training Organisations",
        description: "Manage structured training programmes at scale.",
        href: "/solutions/training"
      },
      {
        title: "Bootcamps",
        description: "Run intensive, real-time tracking and cohort management.",
        href: "/solutions/bootcamps"
      },
      {
        title: "Corporate Programmes",
        description: "Enterprise-grade solutions for internal compliance.",
        href: "/solutions/corporate"
      }
    ]
  },
  {
    label: "Use Cases",
    type: "dropdown",
    items: [
      { title: "Programme Management", description: "Build and sequence curriculums.", href: "/features" },
      { title: "Session Delivery", description: "Native HD browser-based sessions.", href: "/features" },
      { title: "Participant Tracking", description: "Silent background attendance.", href: "/features" },
      { title: "Recording & Analytics", description: "Automated cloud vaults and metrics.", href: "/features" },
      { title: "Training Operations", description: "Permissions, billing, and oversight.", href: "/features" }
    ]
  },
  {
    label: "Pricing",
    href: "/pricing",
    type: "link"
  },
  {
    label: "Resources",
    type: "dropdown",
    items: [
      { title: "Blog", description: "Latest product updates and thoughts.", href: "/about" },
      { title: "Guides", description: "Best practices for programme delivery.", href: "#" },
      { title: "Documentation", description: "Detailed platform API and references.", href: "#" },
      { title: "Support", description: "Get help from our technical team.", href: "#" }
    ]
  }
]

export function Header() {
  const pathname = usePathname()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0B]/95 backdrop-blur-md border-b border-[#1F1F23]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[76px]">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-7 h-7 bg-[#111113] border border-[#1F1F23] rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-xs">OG</span>
            </div>
            <div className="flex items-center gap-1.5 font-bold tracking-tight text-sm">
              <span className="text-white">OYEN</span>
              <span className="text-[#A1A1AA] font-medium">GRID</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {NAV_MENU.map((item) => (
              <div 
                key={item.label}
                className="relative h-[76px] flex items-center"
                onMouseEnter={() => item.type === "dropdown" && setActiveDropdown(item.label)}
                onMouseLeave={() => item.type === "dropdown" && setActiveDropdown(null)}
              >
                {item.type === "link" ? (
                  <Link
                    href={item.href!}
                    className={`text-sm font-medium transition-colors ${
                      pathname === item.href ? "text-[#C9A96E]" : "text-[#A1A1AA] hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div className="flex items-center gap-1.5 cursor-pointer text-[#A1A1AA] hover:text-white transition-colors group">
                    <span className={`text-sm font-medium ${activeDropdown === item.label ? 'text-white' : ''}`}>
                      {item.label}
                    </span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180 text-white' : ''}`} />
                  </div>
                )}

                {/* Dropdown Panel */}
                {item.type === "dropdown" && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.98 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-[76px] left-1/2 -translate-x-1/2 w-[340px] bg-[#111113] border border-[#1F1F23] rounded-xl shadow-2xl p-2.5 overflow-hidden"
                      >
                        <div className="flex flex-col gap-1">
                          {item.items?.map((subItem, idx) => (
                            <Link 
                              key={idx} 
                              href={subItem.href}
                              className="p-3 rounded-lg hover:bg-[#1A1A1D] transition-colors group/item block"
                            >
                              <div className="text-sm font-semibold text-white mb-0.5 group-hover/item:text-[#C9A96E] transition-colors">
                                {subItem.title}
                              </div>
                              <div className="text-xs text-[#A1A1AA] leading-relaxed font-light">
                                {subItem.description}
                              </div>
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
          <div className="hidden md:flex items-center gap-6 shrink-0">
            <Link 
              href="/login" 
              className="text-sm font-medium text-[#A1A1AA] hover:text-white transition-colors"
            >
              Login
            </Link>
            <Link 
              href="/get-started"
              className="bg-[#C9A96E] hover:bg-[#D4B882] text-[#0A0A0B] px-4 py-2 text-sm font-semibold rounded-lg transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-[#A1A1AA] hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-[#1F1F23] bg-[#0A0A0B] overflow-hidden"
          >
            <div className="px-4 py-6 space-y-6">
              {NAV_MENU.map((item) => (
                <div key={item.label} className="flex flex-col gap-3">
                  {item.type === "link" ? (
                    <Link 
                      href={item.href!}
                      className="text-white font-medium text-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <div className="text-[#A1A1AA] font-bold text-xs uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="flex flex-col gap-3 pl-2 border-l border-[#1F1F23]">
                        {item.items?.map((subItem, idx) => (
                          <Link 
                            key={idx} 
                            href={subItem.href}
                            className="text-white text-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
              
              <div className="pt-6 border-t border-[#1F1F23] flex flex-col gap-4">
                <Link 
                  href="/login" 
                  className="text-white font-medium text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  href="/get-started"
                  className="bg-[#C9A96E] text-[#0A0A0B] text-center py-3 text-base font-semibold rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
