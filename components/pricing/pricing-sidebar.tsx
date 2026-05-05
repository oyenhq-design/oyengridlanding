"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"


const NAV_GROUPS = [
  {
    group: "Core Platform",
    items: [
      { id: "programme-os", label: "Programme OS" },
      { id: "core-platform", label: "Core Platform" },
      { id: "analytics", label: "Analytics" },
      { id: "structure-engine", label: "Structure Engine" },
    ],
  },
  {
    group: "Add-ons",
    items: [
      { id: "extra-participants", label: "Extra Participants" },
      { id: "storage", label: "Storage" },
      { id: "ai-insights", label: "AI Insights" },
    ],
  },
  {
    group: "Enterprise",
    items: [
      { id: "enterprise", label: "Enterprise" },
    ],
  },
]


export function PricingSidebar() {
  const [activeItem, setActiveItem] = useState("programme-os")

  // Optionally, you can add scroll tracking logic for activeItem if sections exist
  const scrollTo = (id: string) => {
    setActiveItem(id)
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth"
      })
    }
  }

  return (
    <nav className="hidden lg:block w-[240px] shrink-0">
      <div className="sticky top-32">
        <h2 className="text-lg font-bold text-white mb-6 px-6 tracking-tight">Explore pricing</h2>
        <div className="space-y-8">
          {NAV_GROUPS.map((group) => (
            <div key={group.group}>
              <div className="text-xs font-bold uppercase text-[#D4AF37]/70 px-6 mb-2 tracking-widest">{group.group}</div>
              <div className="flex flex-col">
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`w-full text-left px-6 py-2 transition-all duration-300 relative group flex items-center gap-2
                      ${activeItem === item.id ? "bg-[#18120A]/60 border-l-4 border-[#D4AF37] text-[#D4AF37]" : "text-[#71717A] hover:text-white hover:bg-white/[0.03] border-l-4 border-transparent"}
                    `}
                  >
                    <span className="text-[13px] font-semibold tracking-wide">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}
