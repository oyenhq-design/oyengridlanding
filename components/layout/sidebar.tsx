"use client"

import { useState, useEffect } from "react"

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
          className={`w-full text-left px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
            activeItem === item.id 
              ? "bg-[#111111] text-[#C9A86A] border border-[#1F1F1F]" 
              : "text-[#71717A] hover:text-white hover:bg-white/5"
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}
