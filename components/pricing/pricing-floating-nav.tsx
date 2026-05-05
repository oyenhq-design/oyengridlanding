"use client"

import { useState, useEffect } from "react"
import clsx from "clsx"

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "plans", label: "Plans" },
  { id: "compare", label: "Compare Features" },
  { id: "addons", label: "Add-ons" },
  { id: "faq", label: "FAQ" },
]

export function PricingFloatingNav() {
  const [active, setActive] = useState("overview")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id)
        if (el) {
          const { offsetTop, offsetHeight } = el
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActive(item.id)
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    setActive(id)
    const el = document.getElementById(id)
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: "smooth"
      })
    }
  }

  return (
    <nav
      className="relative w-[200px] z-20 flex flex-col gap-4 py-4"
      style={{ minHeight: '320px' }}
    >
      {/* Layered gold-tinted gradients behind nav */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 0% 0%, rgba(255,215,0,0.08) 0%, transparent 80%)," +
            "radial-gradient(ellipse 50% 30% at 100% 100%, rgba(255,215,0,0.06) 0%, transparent 80%)"
        }}
      />
      {/* Backdrop blur for atmospheric effect */}
      <div className="absolute inset-0 -z-10 backdrop-blur-sm" />
      <ul className="flex flex-col gap-4 mt-2">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollTo(item.id)}
              className={clsx(
                "w-full flex items-center gap-2 px-0 py-1 text-left font-medium text-base transition-all duration-200 ease-out",
                "relative",
                active === item.id
                  ? "text-[#FFD700] font-semibold drop-shadow-[0_2px_8px_rgba(255,215,0,0.10)]"
                  : "text-white/70 hover:text-white",
                active === item.id
                  ? "before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-6 before:bg-[#FFD700] before:rounded-full before:shadow-[0_0_8px_0_rgba(255,215,0,0.18)]"
                  : "before:hidden"
              )}
              style={{
                paddingLeft: active === item.id ? 16 : 8,
                transition: 'all 0.2s ease',
                transform: active === item.id ? 'translateX(2px)' : undefined
              }}
              onMouseEnter={e => {
                if (active !== item.id) {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateX(6px)'
                }
              }}
              onMouseLeave={e => {
                if (active !== item.id) {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'none'
                }
              }}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
