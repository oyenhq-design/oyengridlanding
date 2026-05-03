"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "plans", label: "Plans" },
  { id: "compare", label: "Compare features" },
  { id: "addons", label: "Add-ons" },
  { id: "faq", label: "FAQ" },
]

export function PricingSidebar() {
  const [activeItem, setActiveItem] = useState("overview")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150
      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveItem(item.id)
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth"
      })
    }
  }

  return (
    <div className="hidden lg:block w-[240px] shrink-0">
      <div className="sticky top-32 space-y-2">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`w-full text-left px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
              activeItem === item.id 
                ? "bg-[#111111] text-[#D4AF37] border border-[#1F1F1F]" 
                : "text-[#71717A] hover:text-white hover:bg-white/5"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}
