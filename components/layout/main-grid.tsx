"use client"

import React from "react"

interface MainGridProps {
  sidebar?: React.ReactNode
  children: React.ReactNode
  className?: string
}

export function MainGrid({ sidebar, children, className = "" }: MainGridProps) {
  return (
    // Outer shell: constrains the full page width and centers the layout
    <div className={`w-full max-w-[1420px] mx-auto px-8 ${className}`}>
      <div className="flex flex-row gap-4">
        {/* Sidebar Column — 200px fixed, sticky with glassmorphism */}
        {sidebar && (
          <aside className="w-[200px] shrink-0 hidden lg:flex flex-col relative z-20">
            <div className="sticky top-32 pt-8 pr-4 border-r border-white/5 bg-gradient-to-r from-[#0B0B0C]/60 to-transparent backdrop-blur-md">
              {sidebar}
            </div>
          </aside>
        )}

        {/* Main Content Column — fills remaining space, capped at 1100px */}
        <div className="flex-1 min-w-0 max-w-[1100px]">
          {children}
        </div>
      </div>
    </div>
  )
}
