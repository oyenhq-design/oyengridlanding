"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface FooterPremiumProps {
  hideCTA?: boolean;
}

export function FooterPremium({ hideCTA = false }: FooterPremiumProps) {
  const primaryLinks = [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Solutions", href: "/solutions" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/company/contact" }
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      label: "X",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.857-8.164-10.643H8.08l4.252 5.624L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
        </svg>
      )
    },
    {
      label: "YouTube",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1F1F1F] text-white overflow-hidden py-16 md:py-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col gap-12 md:gap-16">
        
        {/* TOP ROW: Brand and Main Navigation Links */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          
          {/* Left Side: Brand Wordmark, Tagline & CTA */}
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <svg 
                className="w-5.5 h-5.5 text-[#F5D76E] transition-transform duration-300 group-hover:scale-105" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.8"
              >
                <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z" />
              </svg>
              <span className="font-bold text-white text-[13px] tracking-[0.08em] uppercase">OYEN GRID.</span>
            </Link>
            <p className="text-[14px] text-[#A1A1A1] max-w-[280px] leading-relaxed font-light">
              Program intelligence for modern training organizations.
            </p>
            <Link 
              href="/company/contact"
              className="mt-2 inline-flex items-center justify-center h-9 px-4 rounded-lg bg-white/5 border border-white/10 hover:border-[#F5D76E]/40 hover:bg-[#F5D76E]/10 text-white hover:text-[#F5D76E] text-[12px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer"
            >
              Book a Demo
            </Link>
          </div>

          {/* Right Side: Horizontal Minimal Links */}
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {primaryLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[14px] font-medium text-[#A1A1A1] hover:text-[#F5D76E] transition-colors duration-250 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </nav>

        </div>

        {/* BOTTOM ROW: Socials, Copyright, and Policies */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          {/* Left Column: Social Links & Copyright */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center text-[#A1A1A1] hover:text-[#F5D76E] hover:border-[#F5D76E]/30 transition-all duration-300 cursor-pointer"
                >
                  {s.icon}
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <span className="text-[12px] text-[#A1A1A1]/60 font-light tracking-wide">
              © {new Date().getFullYear()} OYEN GRID. All rights reserved.
            </span>
            
          </div>

          {/* Right Column: Policies */}
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[12px] text-[#A1A1A1] hover:text-[#F5D76E] transition-colors duration-250 font-light"
              >
                {item}
              </Link>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}
