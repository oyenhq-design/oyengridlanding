"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 py-24">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center font-black text-black">OG</div>
              <span className="font-bold text-lg tracking-tighter uppercase">OYEN GRID</span>
            </Link>
            <p className="text-text-secondary text-sm max-w-xs leading-relaxed font-light">
              The operating system for high-performance programme delivery. Structured, governed, and built for scale.
            </p>
          </div>
          
          {[
            { title: "Platform", links: ["Features", "Solutions", "Analytics", "Security"] },
            { title: "Company", links: ["About", "Careers", "News", "Contact"] },
            { title: "Resources", links: ["Documentation", "API Reference", "Guides", "Blog"] }
          ].map((col) => (
            <div key={col.title}>
              <h5 className="text-white font-bold text-sm mb-6">{col.title}</h5>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-text-secondary text-sm hover:text-accent transition-colors font-light">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-secondary text-xs uppercase tracking-widest">© 2024 OYEN GRID. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link href="#" className="text-text-secondary text-xs hover:text-white">Privacy Policy</Link>
            <Link href="#" className="text-text-secondary text-xs hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
