"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A] overflow-hidden">
      {/* ── Premium Top Glow & Border ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#C9A86A]/20" />
      <div 
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] opacity-40"
        style={{
          background: "radial-gradient(ellipse at top center, rgba(201,168,106,0.08) 0%, transparent 60%)"
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 pt-[100px] pb-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* ════════════════════════════════════════════
              LEFT: BRAND STATEMENT
          ════════════════════════════════════════════ */}
          <div className="lg:col-span-5 pr-0 lg:pr-12 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-[#111113] border border-[#C9A86A]/30 rounded-md flex items-center justify-center shadow-[0_0_15px_rgba(201,168,106,0.1)]">
                <span className="text-white font-bold text-[12px] tracking-wider">OG</span>
              </div>
              <span className="font-bold text-white text-[20px] tracking-tight">OYEN GRID</span>
            </div>
            
            <p className="text-[17px] font-medium text-white mb-4 leading-relaxed">
              Structured programme operating system for organisations that need clarity, control, and scale.
            </p>
            
            <p className="text-[15px] text-[#A1A1AA] mb-8 leading-relaxed">
              Replace fragmented tools with a unified platform built for structured delivery.
            </p>
            
            <div className="mb-10">
              <p className="text-[14px] text-[#6B7280] italic mb-6">
                “Trusted by forward-thinking organisations”
              </p>
            </div>

            {/* Subtle CTA */}
            <div className="mt-auto w-full max-w-sm p-6 rounded-xl border border-[#1A1A1A] bg-[#111111]">
              <p className="text-[14px] text-white font-medium mb-4">
                Start building structured programmes today.
              </p>
              <Link href="/get-started">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2.5 rounded-lg border border-[#C9A86A]/60 text-[#C9A86A] text-[14px] font-semibold transition-colors hover:bg-[#C9A86A]/10"
                >
                  Get Started
                </motion.button>
              </Link>
            </div>
          </div>

          {/* ════════════════════════════════════════════
              RIGHT: 4 COLUMNS
          ════════════════════════════════════════════ */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-10">
            
            {/* 1. PLATFORM */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-[16px] font-semibold text-white mb-6 tracking-wide">Platform</h3>
              <ul className="space-y-4">
                <li><Link href="/features" className="text-[15px] text-[#A1A1AA] hover:text-white transition-colors duration-200">Features</Link></li>
                <li><Link href="/pricing" className="text-[15px] text-[#A1A1AA] hover:text-white transition-colors duration-200">Pricing</Link></li>
                <li><Link href="#" className="text-[15px] text-[#A1A1AA] hover:text-white transition-colors duration-200">Security</Link></li>
                <li><Link href="#" className="text-[15px] text-[#A1A1AA] hover:text-white transition-colors duration-200">Integrations</Link></li>
              </ul>
            </motion.div>

            {/* 2. SOLUTIONS */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="text-[16px] font-semibold text-white mb-6 tracking-wide">Solutions</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-[15px] text-[#A1A1AA] hover:text-white transition-colors duration-200">Training Orgs</Link></li>
                <li><Link href="#" className="text-[15px] text-[#A1A1AA] hover:text-white transition-colors duration-200">Bootcamps</Link></li>
                <li><Link href="#" className="text-[15px] text-[#A1A1AA] hover:text-white transition-colors duration-200">Corporate</Link></li>
                <li><Link href="#" className="text-[15px] text-[#A1A1AA] hover:text-white transition-colors duration-200">Education</Link></li>
              </ul>
            </motion.div>

            {/* 3. COMPANY */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3 className="text-[16px] font-semibold text-white mb-6 tracking-wide">Company</h3>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-[15px] text-[#A1A1AA] hover:text-white transition-colors duration-200">About</Link></li>
                <li><Link href="#" className="text-[15px] text-[#A1A1AA] hover:text-white transition-colors duration-200">Blog</Link></li>
                <li><Link href="#" className="text-[15px] text-[#A1A1AA] hover:text-white transition-colors duration-200">Careers</Link></li>
                <li><Link href="#" className="text-[15px] text-[#A1A1AA] hover:text-white transition-colors duration-200">Contact</Link></li>
              </ul>
            </motion.div>

            {/* 4. LEGAL */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <h3 className="text-[16px] font-semibold text-white mb-6 tracking-wide">Legal</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-[15px] text-[#A1A1AA] hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
                <li><Link href="#" className="text-[15px] text-[#A1A1AA] hover:text-white transition-colors duration-200">Terms of Service</Link></li>
                <li><Link href="#" className="text-[15px] text-[#A1A1AA] hover:text-white transition-colors duration-200">Cookie Policy</Link></li>
              </ul>
            </motion.div>

          </div>
        </div>

        {/* ════════════════════════════════════════════
            BOTTOM BAR
        ════════════════════════════════════════════ */}
        <div className="border-t border-[#1A1A1A] pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[14px] text-[#6B7280]">
            © 2026 OYEN GRID. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[14px] text-[#6B7280] hover:text-white transition-colors duration-200">
              Twitter
            </a>
            <a href="#" className="text-[14px] text-[#6B7280] hover:text-white transition-colors duration-200">
              LinkedIn
            </a>
            <a href="#" className="text-[14px] text-[#6B7280] hover:text-white transition-colors duration-200">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
