"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1A1A1A] pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-20">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-[#111113] border border-[#1A1A1A] rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-[10px]">OG</span>
              </div>
              <span className="font-semibold text-white text-sm tracking-tight">OYEN Grid</span>
            </div>
            <p className="text-xs text-[#555555] max-w-xs leading-relaxed font-light">
              Structured programme operating system. Replace fragmented tools with an engineered platform built for absolute structure and clarity.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-semibold text-white mb-6 uppercase tracking-widest">Product</h3>
            <ul className="space-y-4 text-xs font-light">
              <li><Link href="/features" className="text-[#A1A1AA] hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/solutions" className="text-[#A1A1AA] hover:text-white transition-colors">Solutions</Link></li>
              <li><Link href="/pricing" className="text-[#A1A1AA] hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-[#A1A1AA] hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold text-white mb-6 uppercase tracking-widest">Company</h3>
            <ul className="space-y-4 text-xs font-light">
              <li><Link href="/about" className="text-[#A1A1AA] hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="text-[#A1A1AA] hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-[#A1A1AA] hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-[#A1A1AA] hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold text-white mb-6 uppercase tracking-widest">Legal</h3>
            <ul className="space-y-4 text-xs font-light">
              <li><Link href="#" className="text-[#A1A1AA] hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-[#A1A1AA] hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-[#A1A1AA] hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1A1A1A] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-[#555555] font-light uppercase tracking-widest">
            © 2026 OYEN Grid. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[10px] text-[#555555] hover:text-white uppercase tracking-widest transition-colors">
              Twitter
            </a>
            <a href="#" className="text-[10px] text-[#555555] hover:text-white uppercase tracking-widest transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-[10px] text-[#555555] hover:text-white uppercase tracking-widest transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
