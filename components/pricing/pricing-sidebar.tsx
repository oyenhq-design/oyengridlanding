"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

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
    <div className="hidden lg:block w-[230px] shrink-0 relative">
      {/* Background Flow Gradients */}
      <div 
        className="absolute -inset-20 pointer-events-none -z-10 opacity-60"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(250,204,21,0.08), transparent 40%),
            radial-gradient(circle at 20% 80%, rgba(255,255,255,0.04), transparent 50%)
          `
        }}
      />

      <motion.nav 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="sticky top-32"
      >
        <div className="relative bg-[rgba(20,20,20,0.4)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.06)] rounded-2xl p-3 shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Subtle Inner Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            {NAV_GROUPS.map((group) => (
              <div key={group.group}>
                <div className="text-[10px] font-bold uppercase text-[#71717A] px-3 mb-2 tracking-[0.15em]">{group.group}</div>
                <div className="flex flex-col gap-1">
                  {group.items.map((item) => {
                    const isActive = activeItem === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className={`w-full text-left px-3 py-2 transition-all duration-200 relative group flex items-center rounded-lg overflow-hidden
                          ${isActive 
                            ? "bg-[rgba(250,204,21,0.12)] text-[#FACC15] shadow-[0_0_12px_rgba(250,204,21,0.15)]" 
                            : "text-[#A1A1AA] hover:text-white hover:bg-white/[0.05] hover:translate-x-[2px]"}
                        `}
                      >
                        {/* Active Indicator Line */}
                        {isActive && (
                          <motion.div 
                            layoutId="active-sidebar-indicator"
                            className="absolute left-0 w-[3px] h-4 bg-[#FACC15] rounded-[2px]" 
                          />
                        )}
                        <span className={`text-[13px] font-semibold tracking-wide transition-all ${isActive ? "pl-3" : ""}`}>
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.nav>
    </div>
  )
}
