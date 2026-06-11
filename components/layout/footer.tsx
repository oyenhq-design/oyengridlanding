"use client";

import Link from "next/link";

const navColumns = [
  {
    title: "Platform",
    links: [
      "Programme Infrastructure",
      "Live Operations",
      "Participant Systems",
      "Analytics Engine",
    ],
  },
  {
    title: "Solutions",
    links: [
      "NGOs & Fellowships",
      "Enterprise Training",
      "Government Programmes",
      "Workforce Coordination",
    ],
  },
  {
    title: "Enterprise",
    links: [
      "Governance & Compliance",
      "Multi-Region Infrastructure",
      "Security Architecture",
      "White-Label Deployment",
    ],
  },
  {
    title: "Resources",
    links: [
      "Documentation",
      "API Reference",
      "Support Center",
      "System Updates",
    ],
  },
];

const bottomLinks = ["Privacy", "Terms", "Security", "Infrastructure Status"];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.857-8.164-10.643H8.08l4.252 5.624L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export function FooterPremium() {
  return (
    <footer className="bg-[#02040A] relative overflow-hidden border-t border-white/[0.05]">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-8 relative z-10">

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_180px] gap-12 pt-14 pb-10">

          {/* ── LEFT: Brand ── */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-5 h-5 bg-gradient-to-br from-[#f4b942] to-[#c7912b] rounded-[5px] flex items-center justify-center shadow-[0_2px_12px_rgba(244,185,66,0.2)] group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                <div className="w-2 h-2 border-[1.5px] border-black rotate-45 relative z-10" />
              </div>
              <span className="font-bold text-white text-[13px] tracking-tight uppercase">OYEN GRID</span>
            </Link>

            {/* Brand description */}
            <p className="text-[11.5px] text-white/35 leading-[1.7] font-light max-w-[200px]">
              Operational infrastructure for structured programme delivery, institutional coordination and intelligent execution.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5 mt-1">
              {socialLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-7 h-7 rounded-[6px] bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-[#f4b942] hover:border-[#f4b942]/20 hover:bg-[#f4b942]/5 transition-all duration-300"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* ── CENTER: Nav columns ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {navColumns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3.5">
                <h4 className="text-[9.5px] font-black text-[#f4b942] uppercase tracking-[0.25em]">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-[11.5px] text-white/35 hover:text-white/75 transition-colors duration-200 font-light leading-tight block"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── RIGHT: System Status card ── */}
          <div className="flex flex-col gap-3">
            <div className="p-3.5 rounded-[12px] bg-white/[0.02] border border-white/[0.06] flex flex-col gap-3">
              {/* Header */}
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">System Status</span>
                <div className="flex items-center gap-1.5">
                  <div className="relative flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] shadow-[0_0_6px_#10b981] relative z-10" />
                    <div className="absolute w-3 h-3 rounded-full bg-[#10b981]/20 animate-ping" />
                  </div>
                  <span className="text-[9px] font-bold text-[#10b981]">Operational</span>
                </div>
              </div>

              {/* Telemetry rows */}
              <div className="flex flex-col gap-2 pt-1 border-t border-white/[0.05]">
                {[
                  { label: "Uptime", val: "99.99%" },
                  { label: "Latency", val: "0.8ms" },
                  { label: "Regions", val: "42 Active" },
                ].map((m) => (
                  <div key={m.label} className="flex items-center justify-between">
                    <span className="text-[9.5px] text-white/25">{m.label}</span>
                    <span className="text-[9.5px] font-bold text-white/55">{m.val}</span>
                  </div>
                ))}
              </div>

              {/* Compliance tags */}
              <div className="flex flex-wrap gap-1.5 pt-1 border-t border-white/[0.05]">
                {["SOC2 Ready", "Encrypted", "GDPR"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[8px] font-bold text-white/30 uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-5 border-t border-white/[0.05]">
          <span className="text-[10.5px] text-white/25 font-light tracking-wide">
          © {new Date().getFullYear()} OYEN GRID. All rights reserved.
          </span>

          <div className="flex items-center gap-5">
            {bottomLinks.map((link, i) => (
              <Link
                key={i}
                href="#"
                className="text-[10.5px] text-white/25 hover:text-white/60 transition-colors duration-200 font-light"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
