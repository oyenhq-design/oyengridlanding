"use client"

import { useState, useEffect } from "react"
import { X, Search } from "lucide-react"
import Link from "next/link"

export function PremiumHeader() {
  const [showPromo, setShowPromo] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top Promo Bar */}
      {showPromo && (
        <div className="w-full flex items-center justify-center h-9 md:h-10 px-4 bg-gradient-to-r from-[#18120A] via-[#0A0A0A] to-[#18120A] text-white/90 text-xs md:text-sm font-medium tracking-tight relative transition-all duration-200 ease-out">
          <span className="mx-auto">Structured programme operations with full visibility <span className="inline-block align-middle ml-1">→</span> <Link href="#" className="underline underline-offset-2 hover:text-[#FFD700] transition-colors">Learn more</Link></span>
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white/90 transition-colors p-1"
            aria-label="Dismiss promo"
            onClick={() => setShowPromo(false)}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Navigation Bar */}
      <nav
        className={`w-full border-b border-white/5 backdrop-blur-xl transition-all duration-200 ease-out ${
          scrolled ? "bg-[rgba(10,10,10,0.92)] h-[60px]" : "bg-[rgba(10,10,10,0.7)] h-[72px]"
        }`}
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 md:px-8 h-full">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2 font-extrabold text-xl md:text-2xl tracking-tight text-white select-none">
            <span className="inline-block bg-gradient-to-r from-[#FFD700] to-[#E6B800] bg-clip-text text-transparent">OYEN</span>
            <span className="text-white">GRID</span>
          </Link>

          {/* Center: Primary Nav */}
          <div className="hidden md:flex items-center gap-10 mx-auto">
            {[
              { label: "Features", href: "#features" },
              { label: "Solutions", href: "#solutions" },
              { label: "Resources", href: "#resources" },
              { label: "Pricing", href: "/pricing" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white/70 hover:text-white transition-colors duration-200 ease-out font-medium text-base px-1 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                activeClassName="text-[#FFD700]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right: Utility + CTA */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Search icon placeholder */}
            <button className="hidden md:inline-flex items-center justify-center text-white/60 hover:text-white transition-colors duration-200 ease-out p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700] focus-visible:ring-offset-2 focus-visible:ring-offset-black">
              <Search className="w-5 h-5" />
            </button>
            {/* Login */}
            <Link href="/login" className="text-white/60 hover:text-white transition-colors duration-200 ease-out font-medium text-base px-2 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700] focus-visible:ring-offset-2 focus-visible:ring-offset-black">
              Login
            </Link>
            {/* CTA */}
            <Link href="/get-started" className="relative group">
              <span
                className="inline-block bg-gradient-to-tr from-[#FFD700] to-[#E6B800] text-black font-semibold px-5 py-2.5 rounded-lg shadow-md transition-all duration-200 ease-out group-hover:-translate-y-0.5 group-hover:shadow-[0_4px_24px_0_rgba(212,175,55,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Get Started
              </span>
            </Link>
            {/* Hamburger for mobile */}
            <button className="md:hidden ml-2 text-white/80 hover:text-white transition-colors duration-200 ease-out p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700] focus-visible:ring-offset-2 focus-visible:ring-offset-black">
              <span className="sr-only">Open menu</span>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
