"use client";

import Link from "next/link";
import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <nav className="container-custom h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-accent rounded flex items-center justify-center font-black text-black">OG</div>
          <span className="font-bold text-lg tracking-tighter uppercase">OYEN GRID</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {["Features", "Solutions", "Resources", "Pricing"].map((link) => (
            <Link key={link} href="#" className="text-sm text-text-secondary hover:text-white transition-colors">{link}</Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className="text-text-secondary hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <Link href="#" className="text-sm font-medium hover:text-accent transition-colors">Login</Link>
          <Link href="#" className="btn-primary py-2 px-4 text-sm">Get Started</Link>
        </div>
      </nav>
    </header>
  );
}
