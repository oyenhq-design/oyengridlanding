"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// ─── Navigation columns ────────────────────────────────────────────────────

const navColumns = [
  {
    title: "Platform",
    links: [
      { label: "Overview",      href: "#" },
      { label: "Features",      href: "#" },
      { label: "Integrations",  href: "#" },
      { label: "Pricing",       href: "/pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "NGOs",          href: "/solutions/global-sync" },
      { label: "Government",    href: "/solutions/coordination-grid" },
      { label: "Education",     href: "/solutions/automation-layer" },
      { label: "Enterprises",   href: "/solutions/institutional-nodes" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog",          href: "#" },
      { label: "Guides",        href: "#" },
      { label: "Case Studies",  href: "#" },
      { label: "Webinars",      href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us",      href: "#" },
      { label: "Careers",       href: "#" },
      { label: "Partners",      href: "#" },
      { label: "Contact",       href: "/enterprise-sales" },
    ],
  },
];

// ─── Social icons ──────────────────────────────────────────────────────────

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.857-8.164-10.643H8.08l4.252 5.624L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

// ─── Fade-up animation variant ─────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

// ─── Component ─────────────────────────────────────────────────────────────

export function FooterPremium() {
  return (
    <footer className="relative bg-[#F8F9FB] dark:bg-[#050B1A] border-t border-[#E5E7EB] dark:border-transparent overflow-hidden">

      {/* ══════════════════════════════════════════════════════════════════
          BACKGROUND SYSTEM — radial gold line pattern + ambient glows
      ══════════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>

        {/* Radial gold line grid — fades from center outward */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.015] dark:opacity-[0.045]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="rgFade" cx="50%" cy="40%" r="55%">
              <stop offset="0%"   stopColor="#D4A017" stopOpacity="1" />
              <stop offset="100%" stopColor="#D4A017" stopOpacity="0" />
            </radialGradient>
            <pattern id="lineGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#D4A017" strokeWidth="0.5" />
            </pattern>
            <mask id="radialMask">
              <rect width="100%" height="100%" fill="url(#rgFade)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#lineGrid)" mask="url(#radialMask)" />
        </svg>

        {/* Soft diagonal gold line top-right */}
        <svg className="absolute top-0 right-0 w-[600px] h-[300px] opacity-[0.015] dark:opacity-[0.06]" aria-hidden>
          {[0,1,2,3,4,5].map((i) => (
            <line
              key={i}
              x1={600 - i * 80} y1="0"
              x2={600}          y2={i * 50}
              stroke="#D4A017" strokeWidth="0.5"
            />
          ))}
        </svg>

        {/* Ambient glow behind CTA */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(212,160,23,0.03),transparent_65%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(245,185,66,0.07),transparent_65%)]" />

        {/* Deep vignette bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[#030710] to-transparent dark:block hidden" />
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          CTA SECTION
      ══════════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 pt-24 pb-20 px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-[760px] mx-auto text-center flex flex-col items-center gap-7"
        >
          {/* Gold pill badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4A017]/20 dark:border-[#F5B942]/20 bg-[#D4A017]/[0.06] dark:bg-[#F5B942]/[0.06] backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] dark:bg-[#F5B942] shadow-[0_0_8px_rgba(212,160,23,0.5)] dark:shadow-[0_0_8px_#F5B942] animate-pulse" />
              <span className="text-[10px] font-black text-[#D4A017] dark:text-[#F5B942] tracking-[0.28em] uppercase">
                Ready to Transform
              </span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="text-[38px] sm:text-[52px] md:text-[60px] font-bold text-[#111827] dark:text-white leading-[1.04] tracking-[-0.04em]"
          >
            Ready to orchestrate your{" "}
            <br className="hidden sm:block" />
            <span className="text-[#D4A017] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#F5B942] dark:via-[#FFCF68] dark:to-[#E8A830]">
              entire ecosystem?
            </span>
          </motion.h2>

          {/* Supporting text */}
          <motion.p
            variants={fadeUp}
            className="text-[16px] text-[#4B5563] dark:text-white/45 leading-relaxed max-w-[520px] font-normal"
          >
            Join leading organizations driving impact at scale through intelligent programme operations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            {/* Primary — gold */}
            <Link
              href="/enterprise-sales"
              className="group inline-flex items-center gap-2 h-[52px] px-8 rounded-[14px] bg-[#D4A017] text-black text-[13px] font-black uppercase tracking-[0.06em] transition-all duration-300 hover:bg-[#E5B228] hover:shadow-[0_12px_40px_rgba(212,160,23,0.25)] dark:hover:shadow-[0_12px_40px_rgba(245,185,66,0.35)] hover:scale-[1.02] active:scale-[0.99] shadow-[0_4px_20px_rgba(212,160,23,0.2)]"
            >
              Book a Demo →
            </Link>

            {/* Secondary — outlined */}
            <Link
              href="/enterprise-sales"
              className="group inline-flex items-center gap-2 h-[52px] px-8 rounded-[14px] border border-[#E5E7EB] dark:border-white/[0.12] bg-white dark:bg-white/[0.03] backdrop-blur-sm text-[#111827] dark:text-white text-[13px] font-bold uppercase tracking-[0.06em] transition-all duration-300 hover:bg-[#F9FAFB] dark:hover:bg-white/[0.07] hover:border-[#D1D5DB] dark:hover:border-white/20 hover:scale-[1.02] active:scale-[0.99]"
            >
              Contact Sales →
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          DIVIDER
      ══════════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#E5E7EB] dark:via-white/[0.08] to-transparent" />
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          FOOTER BODY — 5 columns
      ══════════════════════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-[1280px] mx-auto px-8 pt-14 pb-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-x-10 gap-y-12">

          {/* ── Column 1: Brand ─────────────────────────────────────── */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">

            {/* Logo wordmark */}
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="w-6 h-6 bg-gradient-to-br from-[#D4A017] via-[#E5B228] to-[#C9812A] dark:from-[#F5B942] dark:via-[#E8A830] dark:to-[#C9812A] rounded-[7px] flex items-center justify-center shadow-[0_4px_14px_rgba(212,160,23,0.15)] dark:shadow-[0_4px_14px_rgba(245,185,66,0.25)] group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                <div className="w-2.5 h-2.5 border-[1.5px] border-black rotate-45 relative z-10" />
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-[14px] font-black text-[#111827] dark:text-white tracking-tight uppercase">
                Coordinate
              </span>
            </Link>

            {/* Tagline */}
            <p className="text-[12.5px] text-[#6B7280] dark:text-white/35 leading-[1.75] font-normal max-w-[210px]">
              The operational platform for impactful programmes at scale.
            </p>
          </div>

          {/* ── Columns 2–5: Nav ────────────────────────────────────── */}
          {navColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h4 className="text-[9.5px] font-black text-[#111827] dark:text-[#F5B942]/70 uppercase tracking-[0.28em]">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-[#6B7280] dark:text-white/38 hover:text-[#D4A017] dark:hover:text-white/80 transition-colors duration-200 font-normal leading-snug"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {col.title === "Company" && (
                <div className="flex items-center gap-2 mt-2">
                  {socialLinks.map((s) => (
                    <Link
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-9 h-9 rounded-full bg-[#F3F4F6] dark:bg-white/[0.04] border border-[#E5E7EB] dark:border-white/[0.07] flex items-center justify-center text-[#6B7280] dark:text-white/30 hover:text-[#D4A017] dark:hover:text-[#F5B942] hover:border-[#D4A017]/25 dark:hover:border-[#F5B942]/25 hover:bg-[#D4A017]/[0.06] dark:hover:bg-[#F5B942]/[0.06] hover:shadow-[0_0_16px_rgba(212,160,23,0.12)] dark:hover:shadow-[0_0_16px_rgba(245,185,66,0.12)] transition-all duration-300"
                    >
                      {s.icon}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

        </div>
      </motion.div>

      {/* ══════════════════════════════════════════════════════════════════
          BOTTOM BAR
      ══════════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-8 pb-8">
        <div className="h-px bg-[#E5E7EB] dark:bg-white/[0.05] mb-7" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-[#9CA3AF] dark:text-white/22 font-normal tracking-wide">
            © {new Date().getFullYear()} OYEN GRID. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[11px] text-[#9CA3AF] dark:text-white/22 hover:text-[#4B5563] dark:hover:text-white/55 transition-colors duration-200 font-normal"
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
