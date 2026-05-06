import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-[#050505] pt-32 pb-16 border-t border-white/[0.06] relative z-10 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#D4AF37] opacity-[0.03] blur-[100px] rounded-full pointer-events-none translate-y-1/2" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          
          {/* Platform */}
          <div>
            <h4 className="text-white text-[13px] font-bold mb-8 tracking-[0.2em] uppercase">Platform</h4>
            <ul className="flex flex-col gap-5">
              <li><Link href="/features" className="text-[14px] text-[#71717A] hover:text-white transition-colors font-medium">Features</Link></li>
              <li><Link href="/pricing" className="text-[14px] text-[#71717A] hover:text-white transition-colors font-medium">Pricing</Link></li>
              <li><Link href="/security" className="text-[14px] text-[#71717A] hover:text-white transition-colors font-medium">Security</Link></li>
              <li><Link href="/infrastructure" className="text-[14px] text-[#71717A] hover:text-white transition-colors font-medium">Infrastructure</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white text-[13px] font-bold mb-8 tracking-[0.2em] uppercase">Solutions</h4>
            <ul className="flex flex-col gap-5">
              <li><Link href="/solutions/bootcamps" className="text-[14px] text-[#71717A] hover:text-white transition-colors font-medium">Bootcamps</Link></li>
              <li><Link href="/solutions/corporate" className="text-[14px] text-[#71717A] hover:text-white transition-colors font-medium">Corporate L&D</Link></li>
              <li><Link href="/solutions/training" className="text-[14px] text-[#71717A] hover:text-white transition-colors font-medium">Training Orgs</Link></li>
              <li><Link href="/solutions/programs" className="text-[14px] text-[#71717A] hover:text-white transition-colors font-medium">Social Impact</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-[13px] font-bold mb-8 tracking-[0.2em] uppercase">Company</h4>
            <ul className="flex flex-col gap-5">
              <li><Link href="/about" className="text-[14px] text-[#71717A] hover:text-white transition-colors font-medium">Our Mission</Link></li>
              <li><Link href="/blog" className="text-[14px] text-[#71717A] hover:text-white transition-colors font-medium">Insights Blog</Link></li>
              <li><Link href="/careers" className="text-[14px] text-[#71717A] hover:text-white transition-colors font-medium">Careers</Link></li>
              <li><Link href="/brand" className="text-[14px] text-[#71717A] hover:text-white transition-colors font-medium">Brand Assets</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-[13px] font-bold mb-8 tracking-[0.2em] uppercase">Legal</h4>
            <ul className="flex flex-col gap-5">
              <li><Link href="/privacy" className="text-[14px] text-[#71717A] hover:text-white transition-colors font-medium">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-[14px] text-[#71717A] hover:text-white transition-colors font-medium">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-[14px] text-[#71717A] hover:text-white transition-colors font-medium">Cookie Policy</Link></li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4 shrink-0">
            <div className="w-10 h-10 bg-[#1A1A1D] rounded-xl flex items-center justify-center border border-white/10 group hover:border-[#D4AF37]/40 transition-all">
              <span className="text-[#D4AF37] font-bold text-[12px] tracking-widest">OG</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold tracking-tight text-[15px]">OYEN GRID</span>
              <span className="text-[#52525B] text-[12px] font-medium tracking-wide uppercase">Infrastructure for scale</span>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <span className="text-[#52525B] text-[13px] font-medium mr-4 hidden lg:block">© 2026. All rights reserved.</span>
            <div className="flex gap-8">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <a key={social} href="#" className="text-[#71717A] hover:text-white transition-colors text-[13px] font-bold uppercase tracking-widest">{social}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
