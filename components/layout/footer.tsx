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
    <footer className="bg-navy-deep/80 border-t border-white/5 pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,155,45,0.03)_0%,transparent_70%)]" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          
          {/* Brand Column: Institutional Identity */}
          <div className="lg:col-span-4 max-w-sm">
            <Link href="/" className="flex items-center gap-3 mb-10 group">
              <div className="w-8 h-8 bg-accent-gold rounded-lg flex items-center justify-center font-bold text-navy-deep text-lg shadow-[0_0_20px_rgba(200,155,45,0.3)] group-hover:scale-105 transition-transform duration-500">O</div>
              <span className="font-bold text-white tracking-tighter text-xl group-hover:text-accent-gold transition-colors duration-500">OYEN GRID</span>
            </Link>
            <p className="text-[16px] text-white/30 leading-relaxed font-light tracking-wide mb-10">
              Providing the mission-critical structural infrastructure for global enterprise programme delivery. Orchestrate complexity with absolute integrity.
            </p>
            <div className="flex items-center gap-5">
               <div className="w-2 h-2 rounded-full bg-accent-gold/40" />
               <span className="text-[10px] font-black text-white/10 uppercase tracking-[0.4em]">System_Status: Operational</span>
            </div>
          </div>

          {/* Links Columns: Structural Nodes */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-12 lg:gap-16">
            {groupLinks(links)}
          </div>

        </div>

        {/* Bottom Row: Compliance & Social */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-[11px] font-medium text-white/15 uppercase tracking-[0.3em] select-none">
            © {currentYear} OYEN GRID. Institutional Programme Infrastructure v.04
          </div>
          <div className="flex items-center gap-12 text-[11px] font-bold text-white/20 uppercase tracking-[0.3em]">
            <Link href="#" className="hover:text-accent-gold transition-colors duration-500">Twitter_X</Link>
            <Link href="#" className="hover:text-accent-gold transition-colors duration-500">LinkedIn_System</Link>
            <Link href="#" className="hover:text-accent-gold transition-colors duration-500">GitHub_Nodes</Link>
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
