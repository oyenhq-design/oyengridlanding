"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { NAV_ITEMS } from "@/lib/constants"

export function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 w-full bg-[#0A0A0A]/90 backdrop-blur-sm z-50 border-b border-[#1F1F23]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#111113] border border-[#1F1F23] rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-[10px]">OG</span>
            </div>
            <span className="font-semibold text-white tracking-tight">OYEN Grid</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs font-semibold tracking-wide transition-colors duration-300 ${
                    isActive ? "text-[#C9A96E]" : "text-[#A1A1AA] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" className="hidden sm:inline-flex text-[#A1A1AA] hover:text-white hover:bg-white/5 h-9 rounded-sm text-xs font-semibold">
                Login
              </Button>
            </Link>
            <Link href="/get-started">
              <Button className="bg-gradient-to-b from-[#D4B882] to-[#C9A96E] hover:from-[#E5D0A1] hover:to-[#D4B882] text-[#0A0A0A] h-9 px-4 text-xs font-bold rounded-sm shadow-[0_0_15px_rgba(201,169,110,0.15)] border border-[#E5D0A1]/20">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
