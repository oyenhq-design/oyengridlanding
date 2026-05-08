"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      title: "Platform",
      items: ["Features", "Infrastructure", "Security", "Scale", "Enterprise"]
    },
    {
      title: "Solutions",
      items: ["Governance", "Orchestration", "Intelligence", "Delivery", "Nodes"]
    },
    {
      title: "Resources",
      items: ["Documentation", "Case Studies", "Blog", "Status", "Whitepapers"]
    },
    {
      title: "Legal",
      items: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security", "Compliance"]
    }
  ];

  return (
    <footer className="bg-navy-deep border-t border-white/5 pt-32 pb-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 max-w-sm">
            <Link href="/" className="flex items-center gap-2.5 mb-8">
              <div className="w-7 h-7 bg-accent-gold rounded-md flex items-center justify-center font-bold text-navy-deep text-base">O</div>
              <span className="font-bold text-white tracking-tight text-lg">OYEN GRID</span>
            </Link>
            <p className="text-[15px] text-white/30 leading-relaxed font-light">
              Providing the mission-critical structural infrastructure for global enterprise programme delivery. Orchestrate complexity with absolute integrity.
            </p>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-12 lg:gap-16">
            {groupLinks(links)}
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-[11px] font-medium text-white/20 uppercase tracking-[0.2em] select-none">
            © {currentYear} OYEN GRID. Institutional Programme Infrastructure.
          </div>
          <div className="flex items-center gap-10 text-[11px] font-medium text-white/20 uppercase tracking-[0.2em]">
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function groupLinks(links: { title: string; items: string[] }[]) {
  return links.map((group, i) => (
    <div key={i}>
      <h4 className="text-[11px] font-black text-white/20 uppercase tracking-[0.4em] mb-8">{group.title}</h4>
      <ul className="space-y-4">
        {group.items.map((item, j) => (
          <li key={j}>
            <Link href="#" className="text-[14px] text-white/40 hover:text-white transition-colors font-medium">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ));
}
