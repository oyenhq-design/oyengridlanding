import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0B0B0C] pt-24 pb-12 border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          
          {/* Platform */}
          <div>
            <h4 className="text-white text-[15px] font-semibold mb-6">Platform</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/features" className="text-[15px] text-[#9CA3AF] hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-[15px] text-[#9CA3AF] hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/security" className="text-[15px] text-[#9CA3AF] hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white text-[15px] font-semibold mb-6">Solutions</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/solutions/bootcamps" className="text-[15px] text-[#9CA3AF] hover:text-white transition-colors">Bootcamps</Link></li>
              <li><Link href="/solutions/corporate" className="text-[15px] text-[#9CA3AF] hover:text-white transition-colors">Corporate</Link></li>
              <li><Link href="/solutions/training" className="text-[15px] text-[#9CA3AF] hover:text-white transition-colors">Training Orgs</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-[15px] font-semibold mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/about" className="text-[15px] text-[#9CA3AF] hover:text-white transition-colors">About</Link></li>
              <li><Link href="/blog" className="text-[15px] text-[#9CA3AF] hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="text-[15px] text-[#9CA3AF] hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-[15px] font-semibold mb-6">Legal</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/privacy" className="text-[15px] text-[#9CA3AF] hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-[15px] text-[#9CA3AF] hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-6 h-6 bg-[#1A1A1D] rounded flex items-center justify-center border border-[rgba(255,255,255,0.06)]">
              <span className="text-white font-bold text-[10px] tracking-wider">OG</span>
            </div>
            <span className="text-white font-semibold tracking-tight text-sm">OYEN GRID</span>
            <span className="text-[#9CA3AF] text-sm ml-2">© 2026. All rights reserved.</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors text-[14px]">Twitter</a>
            <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors text-[14px]">LinkedIn</a>
            <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors text-[14px]">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
