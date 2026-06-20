"use client";

import Link from "next/link";
import { useState } from "react";

interface FooterPremiumProps {
  hideCTA?: boolean;
}

export function FooterPremium({ hideCTA = false }: FooterPremiumProps) {
  const [email, setEmail] = useState("");

  const columns = [
    {
      title: "Solutions",
      links: [
        { label: "Training Programs", href: "/solutions/bootcamps-training" },
        { label: "Webinars & Events", href: "/solutions/webinars-events" },
        { label: "Education", href: "/solutions/education-institutions" },
        { label: "Enterprise", href: "/solutions/enterprise-operations" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/resources/blog" },
        { label: "Customer Stories", href: "/resources/case-studies" },
        { label: "Help Center", href: "/resources/help" },
        { label: "Documentation", href: "/resources/docs" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/company/about" },
        { label: "Contact", href: "/company/contact" },
        { label: "Careers", href: "/company/careers" },
        { label: "Partners", href: "/company/partners" }
      ]
    }
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
    },
    {
      label: "Facebook",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
        </svg>
      )
    },
    {
      label: "Instagram",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="relative text-white mt-12">
      {/* Curved Top Shape Divider */}
      <div className="w-full overflow-hidden leading-[0] bg-transparent">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="relative block w-full h-[60px]">
          <defs>
            <linearGradient id="footer-curve-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.04)" />
              <stop offset="30%" stopColor="rgba(255,255,255,0.18)" />
              <stop offset="70%" stopColor="rgba(255,255,255,0.18)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.06)" />
            </linearGradient>
          </defs>
          <path d="M0,60 L0,10 C400,10 700,50 1000,50 C1200,50 1350,20 1440,20 L1440,60 Z" fill="#080B14" />
          <path d="M0,10 C400,10 700,50 1000,50 C1200,50 1350,20 1440,20" fill="none" stroke="url(#footer-curve-grad)" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Main Footer Body */}
      <div className="bg-[#080B14] pt-8 pb-10">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col gap-10">
          
          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1.2fr] gap-10 items-start">
            
            {/* Left Side: 3 Columns Sitemap */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {columns.map((col) => (
                <div key={col.title} className="flex flex-col gap-3">
                  <h4 className="text-[13px] font-bold text-white uppercase tracking-wider">
                    {col.title}
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-[14px] text-[#A1A1A1] hover:text-[#F5D76E] transition-colors duration-250 font-normal leading-tight cursor-pointer"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Right Side: Newsletter Area */}
            <div className="flex flex-col items-start gap-2.5">
              <h4 className="text-[16px] font-bold text-white tracking-tight">
                Stay updated with OYEN GRID
              </h4>
              <p className="text-[14px] text-[#A1A1A1] leading-normal font-light">
                Product updates, industry insights, and platform news.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 w-full mt-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="h-[42px] px-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-[13px] focus:outline-none focus:border-[#F5D76E]/40 transition-colors w-full sm:max-w-[240px]"
                />
                <button
                  type="submit"
                  className="h-[42px] px-5 rounded-xl bg-[#F5D76E] text-black font-bold text-[12px] uppercase tracking-wider transition-all duration-300 hover:bg-[#FFE38E] hover:shadow-[0_4px_16px_rgba(245,215,110,0.3)] hover:scale-[1.02] cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            </div>

          </div>

          {/* SOCIAL LINKS ROW */}
          <div className="pt-6 border-t border-white/[0.04] flex items-center justify-start gap-3">
            {socialLinks.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-8.5 h-8.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center text-[#A1A1A1] hover:text-[#F5D76E] hover:border-[#F5D76E]/30 transition-all duration-300 cursor-pointer"
              >
                {s.icon}
              </Link>
            ))}
          </div>

          <div className="pt-5 border-t border-white/[0.04] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/oyen-grid-logo.png"
                alt="OYEN GRID"
                className="h-7 w-auto object-contain opacity-80"
                style={{ filter: "drop-shadow(0 0 4px rgba(226,184,76,0.15))" }}
              />
              <span className="text-[12px] text-[#A1A1A1]/60 font-light tracking-wide">
                © {new Date().getFullYear()} OYEN GRID. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-[12px] text-[#A1A1A1] hover:text-[#F5D76E] transition-colors duration-250 font-light cursor-pointer"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
