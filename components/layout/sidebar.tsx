"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export interface SidebarItem {
  id: string
  label: string
}

interface SidebarProps {
  items: SidebarItem[]
  activeOffset?: number
}

export function Sidebar({ items, activeOffset = 150 }: SidebarProps) {
  const [activeItem, setActiveItem] = useState(items[0]?.id)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + activeOffset
      for (const item of items) {
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
  }, [items, activeOffset])

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
    <nav className="flex flex-col gap-2">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          className={`w-full text-left px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 relative group ${
            activeItem === item.id 
              ? "text-[#F5B942]" 
              : "text-[#71717A] hover:text-white"
          }`}
        >
          {activeItem === item.id && (
            <motion.div 
              layoutId="sidebar-active"
              className="absolute inset-0 bg-white/[0.03] border border-white/[0.08] rounded-xl backdrop-blur-md -z-10 shadow-lg"
            />
          )}
          {item.label}
        </button>
      ))}
    </nav>
  )
}
