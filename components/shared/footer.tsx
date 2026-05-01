import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0B0B0C] pt-24 pb-12 border-t border-[#27272A]/50 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          
          {/* Platform */}
          <div>
            <h4 className="text-white text-[14px] font-semibold mb-6 tracking-wide">Platform</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/features" className="text-[14px] text-[#A1A1AA] hover:text-[#D4AF37] transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-[14px] text-[#A1A1AA] hover:text-[#D4AF37] transition-colors">Pricing</Link></li>
              <li><Link href="/security" className="text-[14px] text-[#A1A1AA] hover:text-[#D4AF37] transition-colors">Security</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white text-[14px] font-semibold mb-6 tracking-wide">Solutions</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/solutions/bootcamps" className="text-[14px] text-[#A1A1AA] hover:text-[#D4AF37] transition-colors">Bootcamps</Link></li>
              <li><Link href="/solutions/corporate" className="text-[14px] text-[#A1A1AA] hover:text-[#D4AF37] transition-colors">Corporate</Link></li>
              <li><Link href="/solutions/training" className="text-[14px] text-[#A1A1AA] hover:text-[#D4AF37] transition-colors">Training Orgs</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-[14px] font-semibold mb-6 tracking-wide">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/about" className="text-[14px] text-[#A1A1AA] hover:text-[#D4AF37] transition-colors">About</Link></li>
              <li><Link href="/blog" className="text-[14px] text-[#A1A1AA] hover:text-[#D4AF37] transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="text-[14px] text-[#A1A1AA] hover:text-[#D4AF37] transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-[14px] font-semibold mb-6 tracking-wide">Legal</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/privacy" className="text-[14px] text-[#A1A1AA] hover:text-[#D4AF37] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-[14px] text-[#A1A1AA] hover:text-[#D4AF37] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#27272A] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 bg-[#121214] rounded-lg flex items-center justify-center border border-[#D4AF37]/30">
              <span className="text-[#D4AF37] font-bold text-[11px] tracking-wider">OG</span>
            </div>
            <span className="text-white font-semibold tracking-tight text-sm">OYEN GRID</span>
            <span className="text-[#A1A1AA] text-sm ml-2 font-light">© 2026. All rights reserved.</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-[#A1A1AA] hover:text-[#D4AF37] transition-colors text-[14px] font-light">Twitter</a>
            <a href="#" className="text-[#A1A1AA] hover:text-[#D4AF37] transition-colors text-[14px] font-light">LinkedIn</a>
            <a href="#" className="text-[#A1A1AA] hover:text-[#D4AF37] transition-colors text-[14px] font-light">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
