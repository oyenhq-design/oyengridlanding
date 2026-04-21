"use client"

import Link from "next/link"


export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-[#A1A1AA] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#C8A95A] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">OG</span>
              </div>
              <span className="font-semibold text-white">OYEN Grid</span>
            </div>
            <p className="text-sm text-[#A1A1AA]">
              Manage your programmes from a single, structured system.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#features" className="text-[#A1A1AA] hover:text-[#C8A95A] transition-colors duration-300">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-[#A1A1AA] hover:text-[#C8A95A] transition-colors duration-300">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#A1A1AA] hover:text-[#C8A95A] transition-colors duration-300">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-[#A1A1AA] hover:text-[#C8A95A] transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#A1A1AA] hover:text-[#C8A95A] transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#A1A1AA] hover:text-[#C8A95A] transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-[#A1A1AA] hover:text-[#C8A95A] transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#A1A1AA] hover:text-[#C8A95A] transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#A1A1AA] hover:text-[#C8A95A] transition-colors duration-300">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1F1F1F] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#A1A1AA]">
            © 2026 OYEN Grid. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-[#A1A1AA] hover:text-[#C8A95A] transition-colors duration-300">
              Twitter
            </a>
            <a href="#" className="text-[#A1A1AA] hover:text-[#C8A95A] transition-colors duration-300">
              LinkedIn
            </a>
            <a href="#" className="text-[#A1A1AA] hover:text-[#C8A95A] transition-colors duration-300">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
