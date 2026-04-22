"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { 
  LayoutDashboard, 
  Layers, 
  Users, 
  Video, 
  MessageSquare, 
  BarChart3, 
  Settings,
  Bell,
  Search,
  ChevronDown
} from "lucide-react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname()

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Programmes", href: "/dashboard/programmes", icon: Layers },
    { name: "Participants", href: "/dashboard/participants", icon: Users },
    { name: "Sessions", href: "/dashboard/sessions", icon: Video },
    { name: "Chat", href: "/dashboard/messages", icon: MessageSquare },
    { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ]

  return (
    <div className="flex h-screen bg-[#0A0A0B] text-white overflow-hidden selection:bg-[#C9A96E]/30">
      
      {/* Sidebar */}
      <aside className="w-[240px] flex-shrink-0 border-r border-[#1F1F23] bg-[#0A0A0B] flex flex-col">
        {/* Logo Area */}
        <div className="h-[68px] flex items-center px-6 border-b border-[#1F1F23]">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#111113] border border-[#1F1F23] rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-[10px]">OG</span>
            </div>
            <span className="font-bold tracking-wider text-sm text-white">OYEN<span className="text-[#A1A1AA] font-medium">GRID</span></span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors relative ${
                  isActive ? "text-white bg-[#111113]" : "text-[#A1A1AA] hover:text-white hover:bg-[#111113]/50"
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute left-0 top-1.5 bottom-1.5 w-0.5 bg-[#C9A96E] rounded-r-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon className={`w-4 h-4 ${isActive ? "text-[#C9A96E]" : "text-[#555555]"}`} strokeWidth={isActive ? 2 : 1.5} />
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* User Profile Area */}
        <div className="p-4 border-t border-[#1F1F23]">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#111113] transition-colors cursor-pointer border border-transparent hover:border-[#1F1F23]">
            <div className="w-8 h-8 rounded-sm bg-[#111113] border border-[#1F1F23] flex items-center justify-center text-[#A1A1AA] text-xs font-bold">
              AK
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-white truncate">Admin User</p>
              <p className="text-[10px] text-[#A1A1AA] truncate">admin@oyengrid.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-[#0A0A0B]">
        
        {/* Topbar */}
        <header className="h-[68px] flex-shrink-0 border-b border-[#1F1F23] bg-[#0A0A0B]/95 backdrop-blur-sm flex items-center justify-between px-8 z-10">
          
          <div className="flex items-center w-full max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#555555]" />
              <input 
                type="text" 
                placeholder="Search programmes, participants, or sessions..." 
                className="w-full bg-[#111113] border border-[#1F1F23] rounded-lg pl-9 pr-4 py-1.5 text-xs text-white placeholder:text-[#555555] focus:outline-none focus:border-[#C9A96E]/50 focus:ring-1 focus:ring-[#C9A96E]/50 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#111113] text-[#A1A1AA] hover:text-white transition-colors border border-transparent hover:border-[#1F1F23]">
              <Bell className="w-4 h-4" />
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#C9A96E] rounded-full border border-[#0A0A0B]" />
            </button>
            <div className="h-4 w-px bg-[#1F1F23]" />
            <button className="flex items-center gap-2 text-xs font-medium text-[#A1A1AA] hover:text-white transition-colors">
              Acme Corp
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">
            {children}
          </div>
        </main>

      </div>
    </div>
  )
}
