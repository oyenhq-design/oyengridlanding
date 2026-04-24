"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X, Building2, Zap, Briefcase, Users, GraduationCap } from "lucide-react"

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
      { 
        title: "Training Organisations", 
        description: "Run structured programmes at scale", 
        href: "/solutions/training",
        icon: Building2
      },
      { 
        title: "Bootcamps", 
        description: "Intensive cohort-based learning", 
        href: "/solutions/bootcamps",
        icon: Zap
      },
      { 
        title: "Corporate Training", 
        description: "Enterprise internal development", 
        href: "/solutions/corporate",
        icon: Briefcase
      },
      { 
        title: "Internship Programmes", 
        description: "Manage incoming talent pipelines", 
        href: "/solutions/internships",
        icon: Users
      },
      { 
        title: "Educational Institutions", 
        description: "Scale academic delivery", 
        href: "/solutions/education",
        icon: GraduationCap
      }
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
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? "bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#1A1A1A]" 
          : "bg-transparent border-b-0"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[76px]">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-7 h-7 bg-[#111113] border border-[#1A1A1A] rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-xs tracking-wider">OG</span>
            </div>
            <div className="flex items-center gap-1.5 font-bold tracking-wider text-sm">
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
                      pathname === item.href ? "text-[#C9A86A]" : "text-[#D4D4D8] hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div className="flex items-center gap-1.5 cursor-pointer text-[#D4D4D8] hover:text-white transition-colors group">
                    <span className={`text-sm font-medium ${activeDropdown === item.label ? 'text-[#C9A86A]' : ''}`}>
                      {item.label}
                    </span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180 text-[#C9A86A]' : ''}`} />
                  </div>
                )}

                {/* Dropdown Panel */}
                {item.type === "dropdown" && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-[76px] left-1/2 -translate-x-1/2 w-[300px] bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-[12px] shadow-[0_12px_40px_rgba(0,0,0,0.4)] p-[12px] overflow-hidden"
                      >
                        <div className="flex flex-col gap-[4px]">
                          {item.items?.map((subItem, idx) => {
                            const Icon = "icon" in subItem ? subItem.icon : null;
                            return (
                              <Link 
                                key={idx} 
                                href={subItem.href}
                                className="group/item flex items-center gap-3 p-[10px] rounded-[8px] transition-all duration-200 ease-out hover:bg-[rgba(201,168,106,0.08)] hover:pl-[14px]"
                              >
                                {Icon && (
                                  <div className="shrink-0 flex items-center justify-center">
                                    <Icon className="w-[14px] h-[14px] text-[#C9A86A] opacity-70 group-hover/item:opacity-100 transition-opacity duration-200" strokeWidth={2.5} />
                                  </div>
                                )}
                                <div className="flex flex-col justify-center">
                                  <div className="text-[14px] font-medium text-white mb-0.5 tracking-wide">
                                    {subItem.title}
                                  </div>
                                  {"description" in subItem && subItem.description && (
                                    <div className="text-[12px] text-[#A1A1AA] leading-tight truncate max-w-[230px]">
                                      {subItem.description}
                                    </div>
                                  )}
                                </div>
                              </Link>
                            )
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
          <div className="hidden md:flex items-center gap-6 shrink-0">
            <Link 
              href="/login" 
              className="text-sm font-medium text-[#D4D4D8] hover:text-white transition-colors"
            >
              Login
            </Link>
            <Link 
              href="/get-started"
              className="bg-transparent border border-[#C9A86A] text-[#C9A86A] hover:bg-[#C9A86A]/10 px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-[#D4D4D8] hover:text-white"
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
            className="md:hidden border-b border-[#1A1A1A] bg-[#0A0A0A]/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-6 py-6 space-y-6">
              {NAV_MENU.map((item) => (
                <div key={item.label} className="flex flex-col gap-3">
                  {item.type === "link" ? (
                    <Link 
                      href={item.href!}
                      className="text-[#D4D4D8] hover:text-white font-medium text-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <div className="text-[#A1A1AA] font-bold text-xs uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="flex flex-col gap-3 pl-3 border-l border-[#1A1A1A]">
                        {item.items?.map((subItem, idx) => (
                          <Link 
                            key={idx} 
                            href={subItem.href}
                            className="text-[#D4D4D8] hover:text-white text-[15px] transition-colors"
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
              
              <div className="pt-6 border-t border-[#1A1A1A] flex flex-col gap-4">
                <Link 
                  href="/login" 
                  className="text-[#D4D4D8] hover:text-white font-medium text-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  href="/get-started"
                  className="border border-[#C9A86A] text-[#C9A86A] text-center py-3 text-[16px] font-semibold rounded-lg transition-all"
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
