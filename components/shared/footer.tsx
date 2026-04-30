import Link from "next/link";


export function Footer() {
  return (
    <footer className="bg-[#0B0B0C] border-t border-[#1A1A1D] pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-[#111113] border border-[#1A1A1A] rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-[10px] tracking-wider">OG</span>
              </div>
              <div className="flex items-center gap-1.5 font-bold tracking-wider text-sm">
                <span className="text-white">OYEN</span>
                <span className="text-[#A1A1AA] font-medium">GRID</span>
              </div>
            </Link>
            <p className="text-[#A1A1AA] text-sm leading-relaxed max-w-[280px]">
              Infrastructure for structured cohort-based learning. Run programmes with full operational control.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-semibold mb-6">Platform</h4>
            <ul className="flex flex-col gap-4 text-sm text-[#A1A1AA]">
              <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
              <li><Link href="/integrations" className="hover:text-white transition-colors">Integrations</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-sm text-[#A1A1AA]">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="flex flex-col gap-4 text-sm text-[#A1A1AA]">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookie" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1A1A1D] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#A1A1AA] text-sm">
            © 2026 OYEN GRID. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[#A1A1AA] hover:text-white transition-colors text-[14px]">
              Twitter
            </a>
            <a href="#" className="text-[#A1A1AA] hover:text-white transition-colors text-[14px]">
              LinkedIn
            </a>
            <a href="#" className="text-[#A1A1AA] hover:text-white transition-colors text-[14px]">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
